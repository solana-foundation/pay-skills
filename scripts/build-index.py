#!/usr/bin/env python3
"""Build the pay bazaar index.

Collects provider specs from:
  1. The local `providers/` directory (central repo)
  2. Each vetted bazaar listed in `bazaars.json` (fetched via GitHub API)

Validates each spec, extracts searchable metadata, and writes `index.json`.
"""

import json
import os
import sys
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
BAZAARS_FILE = ROOT / "bazaars.json"
LOCAL_PROVIDERS = ROOT / "providers"
OUTPUT = ROOT / "index.json"

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
GITHUB_API = "https://api.github.com"

REQUIRED_FIELDS = ["name", "subdomain", "title", "description", "version", "routing", "endpoints"]
KNOWN_CATEGORIES = {
    "ai_ml", "data", "cloud", "finance", "identity", "storage",
    "compute", "messaging", "search", "media", "iot", "security",
    "analytics", "devtools", "maps", "translation", "productivity",
    "other",
}

errors: list[str] = []


def gh_get(path: str) -> dict | list | None:
    """GET from the GitHub API with optional token auth."""
    url = f"{GITHUB_API}/{path.lstrip('/')}"
    req = urllib.request.Request(url)
    req.add_header("Accept", "application/vnd.github.v3+json")
    if GITHUB_TOKEN:
        req.add_header("Authorization", f"Bearer {GITHUB_TOKEN}")
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"  warning: GitHub API {url} returned {e.code}", file=sys.stderr)
        return None


def gh_raw(repo: str, branch: str, path: str) -> str | None:
    """Fetch raw file content from GitHub."""
    url = f"https://raw.githubusercontent.com/{repo}/{branch}/{path}"
    req = urllib.request.Request(url)
    if GITHUB_TOKEN:
        req.add_header("Authorization", f"Bearer {GITHUB_TOKEN}")
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.read().decode()
    except urllib.error.HTTPError as e:
        print(f"  warning: raw fetch {url} returned {e.code}", file=sys.stderr)
        return None


def validate_spec(spec: dict, fqn: str, source_path: str) -> list[str]:
    """Validate a parsed YAML spec. Returns a list of error strings (empty = valid)."""
    errs = []
    for field in REQUIRED_FIELDS:
        if field not in spec:
            errs.append(f"{fqn}: missing required field `{field}`")

    if "routing" in spec:
        rt = spec["routing"]
        rtype = rt.get("type")
        if rtype == "proxy" and not rt.get("url"):
            errs.append(f"{fqn}: routing.type=proxy but no routing.url")

    cat = spec.get("category", "")
    if cat and cat not in KNOWN_CATEGORIES:
        errs.append(f"{fqn}: unknown category `{cat}` (known: {', '.join(sorted(KNOWN_CATEGORIES))})")

    # Name should match filename
    expected_name = Path(source_path).stem
    actual_name = spec.get("name", "")
    if actual_name and actual_name != expected_name:
        errs.append(f"{fqn}: name=`{actual_name}` but filename is `{expected_name}.yml`")

    return errs


def extract_metadata(spec: dict, fqn: str, org: str, bazaar_name: str, source: dict) -> dict:
    """Extract denormalized metadata from a validated spec."""
    endpoints = spec.get("endpoints", [])
    prices = []
    resources = set()
    has_metering = False
    for ep in endpoints:
        res = ep.get("resource")
        if res:
            resources.add(res)
        metering = ep.get("metering")
        if metering:
            has_metering = True
            for dim in metering.get("dimensions", []):
                for tier in dim.get("tiers", []):
                    p = tier.get("price_usd")
                    if p is not None:
                        prices.append(float(p))

    routing = spec.get("routing", {})
    operator = spec.get("operator", {})

    return {
        "fqn": fqn,
        "name": spec.get("name", ""),
        "org": org,
        "title": spec.get("title", ""),
        "description": spec.get("description", ""),
        "category": spec.get("category", "other"),
        "version": spec.get("version", "v1"),
        "subdomain": spec.get("subdomain", ""),
        "source": source,
        "routing_type": routing.get("type", ""),
        "network": operator.get("network", "mainnet"),
        "currency": operator.get("currency", "USDC"),
        "endpoint_count": len(endpoints),
        "resources": sorted(resources),
        "has_metering": has_metering,
        "has_free_tier": "free_tier" in spec or any(
            not ep.get("metering") for ep in endpoints
        ),
        "min_price_usd": min(prices) if prices else 0.0,
        "max_price_usd": max(prices) if prices else 0.0,
    }


def collect_local_providers() -> list[dict]:
    """Collect specs from the central repo's providers/ directory."""
    entries = []
    if not LOCAL_PROVIDERS.exists():
        return entries

    for org_dir in sorted(LOCAL_PROVIDERS.iterdir()):
        if not org_dir.is_dir():
            continue
        org = org_dir.name
        for yml in sorted(org_dir.glob("*.yml")):
            fqn = f"{org}/{yml.stem}"
            print(f"  local: {fqn}")
            try:
                spec = yaml.safe_load(yml.read_text())
            except Exception as e:
                errors.append(f"{fqn}: YAML parse error: {e}")
                continue

            errs = validate_spec(spec, fqn, str(yml))
            errors.extend(errs)
            if errs:
                continue

            source = {
                "bazaar": "pay-bazaar",
                "repo": "solana-foundation/pay-bazaar",
                "path": str(yml.relative_to(ROOT)),
            }
            entries.append(extract_metadata(spec, fqn, org, "pay-bazaar", source))

    return entries


def collect_remote_bazaar(bazaar: dict) -> list[dict]:
    """Collect specs from a bazaar — local path if available, GitHub API otherwise."""
    # Prefer local path for development (CI doesn't set local_path).
    local = bazaar.get("local_path")
    if local:
        resolved = (ROOT / local).resolve()
        if resolved.is_dir():
            return collect_local_bazaar(bazaar, resolved)

    return collect_github_bazaar(bazaar)


def collect_local_bazaar(bazaar: dict, base: Path) -> list[dict]:
    """Collect specs from a local directory (development mode)."""
    entries = []
    bazaar_name = bazaar["name"]
    repo = bazaar["repo"]
    branch = bazaar.get("branch", "main")
    providers_path = bazaar.get("providers_path", "providers")
    providers_dir = base / providers_path

    print(f"  local bazaar: {bazaar_name} ({providers_dir})")

    if not providers_dir.exists():
        errors.append(f"bazaar {bazaar_name}: local path {providers_dir} does not exist")
        return entries

    for org_dir in sorted(providers_dir.iterdir()):
        if not org_dir.is_dir():
            continue
        org = org_dir.name
        for yml in sorted(org_dir.glob("*.yml")):
            fqn = f"{org}/{yml.stem}"
            print(f"  local: {fqn}")

            try:
                spec = yaml.safe_load(yml.read_text())
            except Exception as e:
                errors.append(f"{fqn}: YAML parse error: {e}")
                continue

            errs = validate_spec(spec, fqn, str(yml))
            errors.extend(errs)
            if errs:
                continue

            file_path = f"{providers_path}/{org}/{yml.name}"
            source = {
                "bazaar": bazaar_name,
                "repo": repo,
                "path": file_path,
                "spec_url": f"https://raw.githubusercontent.com/{repo}/{branch}/{file_path}",
            }
            entries.append(extract_metadata(spec, fqn, org, bazaar_name, source))

    return entries


def collect_github_bazaar(bazaar: dict) -> list[dict]:
    """Collect specs from a remote bazaar via the GitHub API."""
    entries = []
    repo = bazaar["repo"]
    branch = bazaar.get("branch", "main")
    providers_path = bazaar.get("providers_path", "providers")
    bazaar_name = bazaar["name"]

    print(f"  remote bazaar: {bazaar_name} ({repo})")

    # List org directories
    contents = gh_get(f"repos/{repo}/contents/{providers_path}?ref={branch}")
    if not contents or not isinstance(contents, list):
        errors.append(f"bazaar {bazaar_name}: could not list {providers_path} in {repo}")
        return entries

    for item in contents:
        if item.get("type") != "dir":
            continue
        org = item["name"]

        # List YAML files in the org directory
        org_contents = gh_get(f"repos/{repo}/contents/{providers_path}/{org}?ref={branch}")
        if not org_contents or not isinstance(org_contents, list):
            continue

        for file_item in org_contents:
            if not file_item["name"].endswith(".yml"):
                continue
            name = file_item["name"][:-4]  # strip .yml
            fqn = f"{org}/{name}"
            file_path = f"{providers_path}/{org}/{file_item['name']}"

            print(f"  remote: {fqn}")

            raw = gh_raw(repo, branch, file_path)
            if not raw:
                errors.append(f"{fqn}: could not fetch from {repo}")
                continue

            try:
                spec = yaml.safe_load(raw)
            except Exception as e:
                errors.append(f"{fqn}: YAML parse error: {e}")
                continue

            errs = validate_spec(spec, fqn, file_item["name"])
            errors.extend(errs)
            if errs:
                continue

            source = {
                "bazaar": bazaar_name,
                "repo": repo,
                "path": file_path,
                "sha": file_item.get("sha", ""),
                "spec_url": f"https://raw.githubusercontent.com/{repo}/{branch}/{file_path}",
            }
            entries.append(extract_metadata(spec, fqn, org, bazaar_name, source))

    return entries


def main():
    print("Building pay bazaar index...")
    print()

    # Load bazaars config
    bazaars_config = json.loads(BAZAARS_FILE.read_text())
    bazaars = bazaars_config.get("bazaars", [])

    all_providers: list[dict] = []

    # 1. Local providers
    print("Collecting local providers...")
    all_providers.extend(collect_local_providers())
    print()

    # 2. Remote bazaars
    for bazaar in bazaars:
        print(f"Collecting from bazaar: {bazaar['name']}...")
        all_providers.extend(collect_remote_bazaar(bazaar))
        print()

    # 3. Check for duplicate FQNs
    seen_fqns: dict[str, str] = {}
    for p in all_providers:
        fqn = p["fqn"]
        bazaar = p["source"]["bazaar"]
        if fqn in seen_fqns:
            errors.append(
                f"duplicate fqn `{fqn}`: found in both `{seen_fqns[fqn]}` and `{bazaar}`"
            )
        seen_fqns[fqn] = bazaar

    # 4. Report errors
    if errors:
        print("Validation errors:", file=sys.stderr)
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
        print(f"\n{len(errors)} error(s) found.", file=sys.stderr)
        # Don't fail the build — publish what we can, skip broken specs.
        # The errors are logged and visible in CI.

    # 5. Write index
    index = {
        "version": 1,
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "provider_count": len(all_providers),
        "providers": sorted(all_providers, key=lambda p: p["fqn"]),
    }

    OUTPUT.write_text(json.dumps(index, indent=2) + "\n")
    print(f"Wrote {OUTPUT} ({len(all_providers)} providers)")

    if errors:
        sys.exit(1)


if __name__ == "__main__":
    main()

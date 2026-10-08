import type { PayKitClientOptions } from '@solana/pay-kit/client';
import { createPayKitClient, ClientPermissions, usd } from '@solana/pay-kit/client';
export { CLAWD_ENDPOINTS } from './endpoints.js';
export { ClientPermissions, AssetPermission, PermissionDeniedError } from '@solana/pay-kit/client';

export type ClawdPolicy = Readonly<{
  registeredWallet: string;
  origins: readonly string[];
  maxUsdPerPayment: string;
}>;
export type ClawdClientOptions = Pick<PayKitClientOptions, 'signer' | 'rpcUrl' | 'onProgress'> & {
  policy: ClawdPolicy;
  approve: (review: Readonly<{ wallet: string; url: string; maxUsdPerPayment: string }>) => Promise<boolean>;
};

function origin(value: string): string {
  const u = new URL(value);
  if (u.protocol !== 'https:' || u.username || u.password) throw new Error('An explicit HTTPS origin is required');
  return u.origin;
}
export function createClawdPermissions(policy: ClawdPolicy): ClientPermissions {
  if (!policy.registeredWallet || !policy.origins.length) throw new Error('Registered wallet and payment origins are required');
  const builder = ClientPermissions.builder().onlyNetwork('mainnet').maxAmountPerPayment(usd(policy.maxUsdPerPayment));
  for (const value of policy.origins) builder.allowOrigin(origin(value));
  return builder.build();
}

/** No key generation, enrollment, funding, or network requests occur during construction. */
export async function createClawdPayClient(options: ClawdClientOptions) {
  const policy = Object.freeze({ ...options.policy, origins: Object.freeze(options.policy.origins.map(origin)) });
  if (options.signer.address.toString() !== policy.registeredWallet) throw new Error('Signer must match the registered wallet');
  if (typeof options.approve !== 'function') throw new Error('Payment approval callback is required');
  const permissions = createClawdPermissions(policy);
  const upstream = await createPayKitClient({ signer: options.signer, rpcUrl: options.rpcUrl,
    onProgress: options.onProgress, network: 'mainnet', accept: ['x402', 'mpp'], permissions });
  return Object.freeze({
    wallet: policy.registeredWallet,
    async pay(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
      const request = new Request(input, { ...init, redirect: 'error' });
      if (!policy.origins.includes(origin(request.url))) throw new Error('Payment origin is not approved');
      const approved = await options.approve(Object.freeze({ wallet: policy.registeredWallet,
        url: request.url, maxUsdPerPayment: policy.maxUsdPerPayment }));
      if (approved !== true) throw new Error('Payment was not approved');
      return upstream.fetch(request);
    },
  });
}

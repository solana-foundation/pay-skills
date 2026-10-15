import { describe, it, expect, vi } from 'vitest';
import { createClawdPayClient, createClawdPermissions, CLAWD_ENDPOINTS } from '@clawd/pay-kit/client';
import { generateKeyPairSigner } from '@solana/kit';
const mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
const candidate = { amount: 1000n, mint, network: 'mainnet' as const, origin: CLAWD_ENDPOINTS.musebook };
const policy = { registeredWallet: mint, origins: [CLAWD_ENDPOINTS.musebook], maxUsdPerPayment: '0.01' };
describe('Clawd wallet-bound payment policy', () => {
  it('permits the real report price and refuses excess spend, devnet and other origins', () => {
    const permissions = createClawdPermissions(policy);
    expect(permissions.authorize(candidate).maxAmountAtomic).toBe(10000n);
    for (const change of [{amount: 10001n}, {network: 'devnet' as const}, {origin: 'https://attacker.example'}])
      expect(() => permissions.authorize({...candidate,...change})).toThrow();
  });
  it('refuses empty or insecure origin policies', () => {
    expect(() => createClawdPermissions({...policy, origins: []})).toThrow();
    expect(() => createClawdPermissions({...policy, origins: ['http://musebook.trade']})).toThrow();
  });
  it('does not create or substitute a wallet for the registered address', async () => {
    const signer = await generateKeyPairSigner();
    await expect(createClawdPayClient({ signer, rpcUrl: 'https://api.mainnet-beta.solana.com', policy, approve: async () => true })).rejects.toThrow('registered wallet');
  });
  it('refuses before any HTTP/RPC/signing when approval is denied', async () => {
    const signer = await generateKeyPairSigner();
    const approve = vi.fn(async () => false);
    const client = await createClawdPayClient({signer, rpcUrl: 'https://rpc.invalid', policy: {...policy, registeredWallet: signer.address}, approve});
    await expect(client.pay(CLAWD_ENDPOINTS.report)).rejects.toThrow('not approved');
    expect(approve).toHaveBeenCalledOnce();
    await expect(client.pay('https://attacker.example')).rejects.toThrow('origin');
    expect(approve).toHaveBeenCalledOnce();
  });
  it('snapshots owner policy and includes Pump independently of payment grants', async () => {
    const signer = await generateKeyPairSigner();
    const origins: string[] = [CLAWD_ENDPOINTS.musebook];
    const client = await createClawdPayClient({signer, rpcUrl:'https://rpc.invalid', policy:{...policy,registeredWallet:signer.address,origins},approve:async()=>false});
    origins.push('https://attacker.example');
    await expect(client.pay('https://attacker.example')).rejects.toThrow('origin');
    expect(CLAWD_ENDPOINTS.pump).toBe('https://pump.musebook.trade/');
  });
});

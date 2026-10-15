import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MAINNET, PROGRAM, TOKEN, reviewBatchRequirements } from './preflight.mjs';
const asset = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
const sponsor = 'FYp4pswmeyzftftnoyJV9Rrr11XFb23yosrHZ3XG5tb9';
const receiver = '3NHMeZPXXZVgArbgE6hJU3fq72fR9UsgbmH9zFvQiGC1';
const requirements = () => ({ scheme:'batch-settlement',network:MAINNET,amount:'1000',asset,payTo:receiver,maxTimeoutSeconds:300,extra:{feePayer:sponsor,receiverAuthorizer:receiver,withdrawDelay:3600,tokenProgram:TOKEN,minDeposit:'10000',maxIdleSecs:604800} });
const supported = () => ({kinds:[{x402Version:2,scheme:'batch-settlement',network:MAINNET,extra:{feePayer:sponsor,maxIdleSecs:604800}}]});
const policy = () => ({maxDeposit:'5000',mintOwner:TOKEN});
test('review clamps deposit hints and uses the canonical program and single full receiver',()=>{
 const r=reviewBatchRequirements(requirements(),supported(),policy());
 assert.equal(r.program,PROGRAM);assert.equal(r.depositTarget,'5000');assert.deepEqual(r.distribution,[{recipient:receiver,bps:10000}]);assert.equal(r.payeeRemainderBps,0);assert.equal(r.transactionPrepared,false);
});
test('current live-style exact and upto advertisements cannot enable batch settlement',()=>{
 for(const scheme of ['exact','upto']) assert.throws(()=>reviewBatchRequirements(requirements(),{kinds:[{...supported().kinds[0],scheme}]},policy()),/does not advertise/);
});
test('untrusted program, transfer method, network, and sponsor are refused',()=>{
 for(const field of ['channelProgram','assetTransferMethod']) {const r=requirements();r.extra[field]='untrusted';assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/not negotiated/);}
 const r=requirements();r.network='solana-devnet';assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/network/);
 const s=supported();s.kinds[0].extra.feePayer=receiver;assert.throws(()=>reviewBatchRequirements(requirements(),s,policy()),/sponsor/);
});
test('delay boundaries and completion windows cannot be relaxed by a challenge',()=>{
 for(const value of [899,2592001,900.5]) {const r=requirements();r.extra.withdrawDelay=value;assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/delay/);}
 const r=requirements();r.maxTimeoutSeconds=4000;assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/delay/);
});
test('amounts reject floats, unsafe numbers, u64 overflow, and escrow beyond owner policy',()=>{
 for(const amount of ['1.1',1000,'18446744073709551616','-1']) {const r=requirements();r.amount=amount;assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/amount/);}
 assert.throws(()=>reviewBatchRequirements(requirements(),supported(),{...policy(),maxDeposit:'999'}),/escrow cap/);
});
test('token program requires an independently supplied matching mint owner',()=>{
 assert.throws(()=>reviewBatchRequirements(requirements(),supported(),{...policy(),mintOwner:'unknown'}),/Mint owner/);
});
test('server signing cannot be enabled by incoming requirements or an origin grant',()=>{
 const r=requirements();r.extra.voucherSigner='server';r.extra.operator=receiver;
 assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/local operator/);
 assert.throws(()=>reviewBatchRequirements(r,supported(),{...policy(),operatorGrants:[{origin:'https://musebook.trade',asset,maxDeposit:'3000'}]}),/local operator/);
 const reviewed=reviewBatchRequirements(r,supported(),{...policy(),operatorGrants:[{operator:receiver,asset,maxDeposit:'3000'}]});assert.equal(reviewed.depositTarget,'3000');
});
test('client mode rejects operator injection, and delegated receiver binding must match support',()=>{
 const r=requirements();r.extra.operator=receiver;assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/Client mode/);
 assert.throws(()=>reviewBatchRequirements(requirements(),supported(),{...policy(),delegatedReceiver:true}),/Delegated receiver/);
});
test('UTF-8 memo bytes and facilitator idle policy are bound',()=>{
 const r=requirements();r.extra.memo='🦞'.repeat(65);assert.throws(()=>reviewBatchRequirements(r,supported(),policy()),/UTF-8/);
 const s=supported();s.kinds[0].extra.maxIdleSecs=1;assert.throws(()=>reviewBatchRequirements(requirements(),s,policy()),/Idle window/);
});

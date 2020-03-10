goog.provide('ebc.client');
goog.require('cljs.core');
goog.require('ebc.devtools');
goog.require('re_frame.core');
var module$node_modules$web3$src$index=shadow.js.require("module$node_modules$web3$src$index", {});
var module$node_modules$web3_eth_personal$src$index=shadow.js.require("module$node_modules$web3_eth_personal$src$index", {});
var module$node_modules$web3_eth$src$index=shadow.js.require("module$node_modules$web3_eth$src$index", {});
if((typeof ebc !== 'undefined') && (typeof ebc.client !== 'undefined') && (typeof ebc.client.web3 !== 'undefined')){
} else {
ebc.client.web3 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof ebc !== 'undefined') && (typeof ebc.client !== 'undefined') && (typeof ebc.client.balance !== 'undefined')){
} else {
ebc.client.balance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof ebc !== 'undefined') && (typeof ebc.client !== 'undefined') && (typeof ebc.client.local_accounts !== 'undefined')){
} else {
ebc.client.local_accounts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof ebc !== 'undefined') && (typeof ebc.client !== 'undefined') && (typeof ebc.client.receiver !== 'undefined')){
} else {
ebc.client.receiver = "0xE15cEDc7fBe317eE989B57d7229149bE3210DF71";
}
if((typeof ebc !== 'undefined') && (typeof ebc.client !== 'undefined') && (typeof ebc.client.address !== 'undefined')){
} else {
ebc.client.address = "0xDF769Af9BEEB64c8F2e9682867061129E94B0fB2";
}
ebc.client.get_accounts = (function ebc$client$get_accounts(fn){
return cljs.core.deref(ebc.client.web3).eth.getAccounts(fn);
});
ebc.client.start = (function ebc$client$start(){
(ebc.client.connect.cljs$core$IFn$_invoke$arity$0 ? ebc.client.connect.cljs$core$IFn$_invoke$arity$0() : ebc.client.connect.call(null));

return ebc.client.get_accounts((function (_e,accounts){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([accounts,_e], 0));

return cljs.core.reset_BANG_(ebc.client.local_accounts,accounts);
}));
});

//# sourceMappingURL=ebc.client.js.map

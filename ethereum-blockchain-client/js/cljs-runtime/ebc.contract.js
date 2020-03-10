goog.provide('ebc.contract');
goog.require('cljs.core');
goog.require('ebc.sablier');
var module$node_modules$web3$src$index=shadow.js.require("module$node_modules$web3$src$index", {});
goog.require('promesa.core');
ebc.contract.sablier_contract_address = "0xc04Ad234E01327b24a831e3718DBFcbE245904CC";
ebc.contract.dai_token_address = "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8";
if((typeof ebc !== 'undefined') && (typeof ebc.contract !== 'undefined') && (typeof ebc.contract.receiver !== 'undefined')){
} else {
ebc.contract.receiver = "0xE15cEDc7fBe317eE989B57d7229149bE3210DF71";
}
if((typeof ebc !== 'undefined') && (typeof ebc.contract !== 'undefined') && (typeof ebc.contract.address !== 'undefined')){
} else {
ebc.contract.address = "0xDF769Af9BEEB64c8F2e9682867061129E94B0fB2";
}
ebc.contract.gas_limit = (10000000);
ebc.contract.make_dai_token_contract = (function ebc$contract$make_dai_token_contract(web3,sender,gas_limit){
var eth = web3.eth;
web3.setProvider(module$node_modules$web3$src$index.givenProvider);

return (new eth.Contract(ebc.sablier.test_dai_abi,ebc.contract.dai_token_address,({"from": sender, "gas": gas_limit})));
});
/**
 * Approves `amount` of dai tokens to be send from `sender` account to sablier-contract-address
 */
ebc.contract.approve_dai_sablier_contract = (function ebc$contract$approve_dai_sablier_contract(web3,sender,amount,gas_limit,transaction_hash_fn,receipt_fn,error_fn){
console.log(sender,amount,gas_limit);

var contract = ebc.contract.make_dai_token_contract(web3,sender,gas_limit);
var promise = contract.methods.approve(ebc.contract.sablier_contract_address,amount).send();
var G__28166 = promise;
G__28166.on("transactionHash",transaction_hash_fn);

G__28166.on("receipt",receipt_fn);

G__28166.on("error",error_fn);

return G__28166;
});
ebc.contract.get_dai_balance = (function ebc$contract$get_dai_balance(web3,sender,gas_limit,callback_fn){

var contract = ebc.contract.make_dai_token_contract(web3,sender,gas_limit);
return contract.methods.balanceOf(sender).call(callback_fn);
});
ebc.contract.make_sablier_contract = (function ebc$contract$make_sablier_contract(web3){
var eth = web3.eth;
web3.setProvider(module$node_modules$web3$src$index.givenProvider);

return (new eth.Contract(ebc.sablier.sablier_abi,ebc.contract.sablier_contract_address));
});
ebc.contract.create_sablier_stream = (function ebc$contract$create_sablier_stream(web3,sender,receiver,deposit,time_since_now,duration,transaction_hash_fn,receipt_fn,error_fn){
var epoch_now = Math.round(((new Date()).getTime() / (1000)));
var start_time = (epoch_now + Number(time_since_now));
var end_time = (Number(duration) + start_time);
console.log(deposit,start_time,end_time);

var promise = ebc.contract.make_sablier_contract(web3).methods.createStream(receiver,deposit,ebc.contract.dai_token_address,start_time,end_time).send(({"from": sender, "gas": ebc.contract.gas_limit}));
var G__28169 = promise;
G__28169.on("transactionHash",transaction_hash_fn);

G__28169.on("receipt",receipt_fn);

G__28169.on("error",error_fn);

return G__28169;
});
ebc.contract.tx = "0x047dabc9d3ed35d2d5e29f8e760e73a81b54bdb51a05ac4dce958bedee57b863";
ebc.contract.withdraw_from_stream = (function ebc$contract$withdraw_from_stream(web3){
return ebc.contract.make_sablier_contract(web3).methods.withdrawFromStream("22","360000060").call((function (p1__28171_SHARP_,p2__28170_SHARP_){
return console.log(p2__28170_SHARP_);
}));
});
ebc.contract.balance_of_stream = (function ebc$contract$balance_of_stream(web3,owner){
return ebc.contract.make_sablier_contract(web3).methods.balanceOf("22",owner).call((function (p1__28173_SHARP_,p2__28172_SHARP_){
return console.log(p2__28172_SHARP_);
}));
});
ebc.contract.delta_of = (function ebc$contract$delta_of(web3,id){
return ebc.contract.make_sablier_contract(web3).methods.deltaOf(id).call((function (p1__28175_SHARP_,p2__28174_SHARP_){
return console.log(p2__28174_SHARP_);
}));
});

//# sourceMappingURL=ebc.contract.js.map

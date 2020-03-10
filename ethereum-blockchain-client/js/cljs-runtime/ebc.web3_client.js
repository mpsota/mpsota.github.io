goog.provide('ebc.web3_client');
goog.require('cljs.core');
var module$node_modules$web3$src$index=shadow.js.require("module$node_modules$web3$src$index", {});
var module$node_modules$web3_eth_personal$src$index=shadow.js.require("module$node_modules$web3_eth_personal$src$index", {});
var module$node_modules$web3_eth$src$index=shadow.js.require("module$node_modules$web3_eth$src$index", {});
/**
 * Connect using MetaMask in the browser
 */
ebc.web3_client.connect = (function ebc$web3_client$connect(){
window.ethereum.enable();

var web3 = (new module$node_modules$web3$src$index());
web3.setProvider(module$node_modules$web3$src$index.givenProvider);

return web3;
});
ebc.web3_client.get_accounts = (function ebc$web3_client$get_accounts(web3,fn){
return web3.eth.getAccounts(fn);
});
/**
 * Sets default address to use to pay for gas
 */
ebc.web3_client.set_default_address = (function ebc$web3_client$set_default_address(web3,sender_address){
return (web3.eth.defaultAccount = sender_address);
});
ebc.web3_client.convert_to_wei = (function ebc$web3_client$convert_to_wei(web3,value){
return web3.utils.toWei(value,"ether");
});
ebc.web3_client.send_transaction = (function ebc$web3_client$send_transaction(web3,sender,receiver,value){
return web3.eth.sendTransaction(({"from": sender, "to": receiver, "value": ebc.web3_client.convert_to_wei(web3,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))}));
});

//# sourceMappingURL=ebc.web3_client.js.map

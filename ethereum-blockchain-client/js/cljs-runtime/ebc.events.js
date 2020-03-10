goog.provide('ebc.events');
goog.require('cljs.core');
goog.require('ebc.db');
goog.require('re_frame.core');
goog.require('ebc.web3_client');
goog.require('ebc.contract');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connect-web3","connect-web3",-82519036),(function (db,p__28179){
var vec__28180 = p__28179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28180,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28180,(1),null);
var G__28183_28274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-web3","set-web3",1380156976),ebc.web3_client.connect()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28183_28274) : re_frame.core.dispatch.call(null,G__28183_28274));

return db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-web3","set-web3",1380156976),(function (p__28184,p__28185){
var map__28186 = p__28184;
var map__28186__$1 = (((((!((map__28186 == null))))?(((((map__28186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28186):map__28186);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28186__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28187 = p__28185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(0),null);
var web3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-accounts","get-accounts",-253094105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"web3","web3",-879451640),web3)], null);
}));
var G__28193_28275 = new cljs.core.Keyword(null,"get-accounts","get-accounts",-253094105);
var G__28194_28276 = (function (p__28195){
var vec__28196 = p__28195;
var web3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28196,(0),null);
return web3.eth.getAccounts((function (p1__28192_SHARP_,p2__28191_SHARP_){
var G__28199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-accounts","set-accounts",-848745949),p2__28191_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28199) : re_frame.core.dispatch.call(null,G__28199));
}));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28193_28275,G__28194_28276) : re_frame.core.reg_fx.call(null,G__28193_28275,G__28194_28276));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-accounts","set-accounts",-848745949),(function (db,p__28200){
var vec__28201 = p__28200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28201,(0),null);
var accounts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28201,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"accounts","accounts",-935308676),accounts);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-field-value","set-field-value",-488125941),(function (db,p__28204){
var vec__28205 = p__28204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205,(0),null);
var form_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205,(1),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205,(2),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205,(3),null);
console.log(new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_name,field_name], null),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-db-value","set-db-value",-2116888807),(function (db,p__28208){
var vec__28209 = p__28208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(1),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_name], null),new_value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-form","send-form",-2102035871),(function (p__28214,p__28215){
var map__28217 = p__28214;
var map__28217__$1 = (((((!((map__28217 == null))))?(((((map__28217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28217):map__28217);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28217__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28218 = p__28215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(0),null);
var form_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(1),null);
var G__28222 = form_name;
var G__28222__$1 = (((G__28222 instanceof cljs.core.Keyword))?G__28222.fqn:null);
switch (G__28222__$1) {
case "send-directly-form":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"send-money","send-money",-1166532181),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"current-account","current-account",-95981125).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"receiver","receiver",1768630781).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,form_name))], null),new cljs.core.Keyword(null,"db","db",993250759),db], null);

break;
case "approve-sablier-contract-form":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"approve-sablier-contract","approve-sablier-contract",-225291131),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"current-account","current-account",-95981125).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"allowed-amount","allowed-amount",260756832).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,form_name)),new cljs.core.Keyword(null,"gas-limit","gas-limit",-691210996).cljs$core$IFn$_invoke$arity$1(db)], null)], null);

break;
case "create-sablier-stream-form":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-sablier-stream","create-sablier-stream",-2079294651),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"current-account","current-account",-95981125).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"receiver","receiver",1768630781).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"deposit","deposit",-1686435851).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,form_name)),new cljs.core.Keyword(null,"time-since-now","time-since-now",956427579).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,form_name)),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,form_name))], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28222__$1)].join('')));

}
}));
var G__28223_28278 = new cljs.core.Keyword(null,"send-money","send-money",-1166532181);
var G__28224_28279 = (function (p__28225){
var vec__28226 = p__28225;
var web3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(0),null);
var sender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(1),null);
var receiver = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(2),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(3),null);
console.log("Send",web3,receiver,amount);

return ebc.web3_client.send_transaction(web3,sender,receiver,amount);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28223_28278,G__28224_28279) : re_frame.core.reg_fx.call(null,G__28223_28278,G__28224_28279));
var G__28232_28280 = new cljs.core.Keyword(null,"approve-sablier-contract","approve-sablier-contract",-225291131);
var G__28233_28281 = (function (p__28234){
var vec__28235 = p__28234;
var web3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(0),null);
var sender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(2),null);
var gas_limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(3),null);
console.log("Approve sablier contract",web3,sender,amount,gas_limit);

var transaction_hash_fn = (function (p1__28229_SHARP_){
var G__28238 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-db-value","set-db-value",-2116888807),new cljs.core.Keyword(null,"approve-transaction-hash","approve-transaction-hash",1809685738),p1__28229_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28238) : re_frame.core.dispatch.call(null,G__28238));
});
var error_fn = (function (p1__28230_SHARP_){
var G__28239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-error","add-error",-1195330235),p1__28230_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28239) : re_frame.core.dispatch.call(null,G__28239));
});
var receipt_fn = (function (p1__28231_SHARP_){
return console.log("Receipt:",p1__28231_SHARP_);
});
return ebc.contract.approve_dai_sablier_contract(web3,sender,amount,gas_limit,transaction_hash_fn,receipt_fn,error_fn);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28232_28280,G__28233_28281) : re_frame.core.reg_fx.call(null,G__28232_28280,G__28233_28281));
var G__28243_28282 = new cljs.core.Keyword(null,"create-sablier-stream","create-sablier-stream",-2079294651);
var G__28244_28283 = (function (p__28245){
var vec__28246 = p__28245;
var web3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(0),null);
var sender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(1),null);
var receiver = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(2),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(3),null);
var time_since_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(4),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(5),null);
console.log(web3,sender,receiver,deposit,time_since_now,duration);

var transaction_hash_fn = (function (p1__28240_SHARP_){
var G__28249 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-db-value","set-db-value",-2116888807),new cljs.core.Keyword(null,"stream-transaction-hash","stream-transaction-hash",590469718),p1__28240_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28249) : re_frame.core.dispatch.call(null,G__28249));
});
var error_fn = (function (p1__28241_SHARP_){
var G__28250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-error","add-error",-1195330235),p1__28241_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28250) : re_frame.core.dispatch.call(null,G__28250));
});
var receipt_fn = (function (p1__28242_SHARP_){
return console.log("Receipt:",p1__28242_SHARP_);
});
return ebc.contract.create_sablier_stream(web3,sender,receiver,deposit,time_since_now,duration,transaction_hash_fn,receipt_fn,error_fn);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28243_28282,G__28244_28283) : re_frame.core.reg_fx.call(null,G__28243_28282,G__28244_28283));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-account","set-current-account",1402108052),(function (p__28251,p__28252){
var map__28253 = p__28251;
var map__28253__$1 = (((((!((map__28253 == null))))?(((((map__28253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28253):map__28253);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28253__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28254 = p__28252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28254,(0),null);
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28254,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"set-default-address","set-default-address",1374000786),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"account","account",718006320),account], null),new cljs.core.Keyword(null,"get-balance-fx","get-balance-fx",1782573310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"account","account",718006320),account], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-account","current-account",-95981125),account)], null);
}));
var G__28258_28284 = new cljs.core.Keyword(null,"get-balance-fx","get-balance-fx",1782573310);
var G__28259_28285 = (function (value){
var error_fn_28286 = (function (e,v){
console.log(e);

if(cljs.core.truth_(e)){
var G__28260_28287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-error","add-error",-1195330235),e], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28260_28287) : re_frame.core.dispatch.call(null,G__28260_28287));
} else {
}

if(cljs.core.truth_(v)){
var G__28261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-db-value","set-db-value",-2116888807),new cljs.core.Keyword(null,"dai-balance","dai-balance",-846313676),v], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28261) : re_frame.core.dispatch.call(null,G__28261));
} else {
return null;
}
});
ebc.contract.get_dai_balance(new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"gas-limit","gas-limit",-691210996).cljs$core$IFn$_invoke$arity$1(value),error_fn_28286);

return new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(value).eth.getBalance(new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(value),(function (e,v){
var balance = new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(value).utils.fromWei(v);
var G__28262_28288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-balance","get-balance",-1283722258),balance], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28262_28288) : re_frame.core.dispatch.call(null,G__28262_28288));

return console.log(balance);
}));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28258_28284,G__28259_28285) : re_frame.core.reg_fx.call(null,G__28258_28284,G__28259_28285));
var G__28263_28289 = new cljs.core.Keyword(null,"set-default-address","set-default-address",1374000786);
var G__28264_28290 = (function (value){
return ebc.web3_client.set_default_address(new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(value));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28263_28289,G__28264_28290) : re_frame.core.reg_fx.call(null,G__28263_28289,G__28264_28290));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-balance","get-balance",-1283722258),(function (db,p__28265){
var vec__28266 = p__28265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(0),null);
var balance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"balance","balance",418967409),balance);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-error","add-error",-1195330235),(function (db,p__28270){
var vec__28271 = p__28270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(1),null);
console.log("Add error:",error);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),(function (p1__28269_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__28269_SHARP_,error);
}));
}));

//# sourceMappingURL=ebc.events.js.map

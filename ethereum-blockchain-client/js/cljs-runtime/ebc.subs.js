goog.provide('ebc.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__28095_28130 = new cljs.core.Keyword(null,"web3","web3",-879451640);
var G__28096_28131 = (function (db,_){
return new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28095_28130,G__28096_28131) : re_frame.core.reg_sub.call(null,G__28095_28130,G__28096_28131));
var G__28098_28136 = new cljs.core.Keyword(null,"accounts","accounts",-935308676);
var G__28099_28137 = (function (db,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (acc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),acc,new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"text","text",-1790561697),acc], null);
}),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(db));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28098_28136,G__28099_28137) : re_frame.core.reg_sub.call(null,G__28098_28136,G__28099_28137));
var G__28101_28139 = new cljs.core.Keyword(null,"balance","balance",418967409);
var G__28102_28140 = (function (db,_){
return new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28101_28139,G__28102_28140) : re_frame.core.reg_sub.call(null,G__28101_28139,G__28102_28140));
var G__28104_28142 = new cljs.core.Keyword(null,"field-value","field-value",1917248627);
var G__28105_28143 = (function (db,p__28107){
var vec__28113 = p__28107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(0),null);
var form_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(1),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_name,field_name], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28104_28142,G__28105_28143) : re_frame.core.reg_sub.call(null,G__28104_28142,G__28105_28143));
var G__28117_28144 = new cljs.core.Keyword(null,"get-db-value","get-db-value",-1622950154);
var G__28118_28145 = (function (db,p__28120){
var vec__28121 = p__28120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_name], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28117_28144,G__28118_28145) : re_frame.core.reg_sub.call(null,G__28117_28144,G__28118_28145));
var G__28126_28148 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__28127_28149 = (function (db,_){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(JSON.stringify,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28126_28148,G__28127_28149) : re_frame.core.reg_sub.call(null,G__28126_28148,G__28127_28149));

//# sourceMappingURL=ebc.subs.js.map

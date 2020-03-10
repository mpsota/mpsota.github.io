goog.provide('ebc.db');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","account","ebc.db/account",2093037610),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28097#","p1__28097#",-1016476776,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"p1__28097#","p1__28097#",-1016476776,null))))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__28097_SHARP_){
return typeof Number(p1__28097_SHARP_) === 'number';
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","gas-limit","ebc.db/gas-limit",146343186),new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411),new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","balance","ebc.db/balance",-881541285),new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411),new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","dai-balance","ebc.db/dai-balance",400193306),new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411),new cljs.core.Keyword("ebc.db","number-str","ebc.db/number-str",1839105411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","error","ebc.db/error",-2020471270),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ebc.db","message","ebc.db/message",-1641012232),new cljs.core.Keyword("ebc.db","stack","ebc.db/stack",444196372)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28132){
return cljs.core.map_QMARK_(G__28132);
})], null),(function (G__28132){
return cljs.core.map_QMARK_(G__28132);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","errors","ebc.db/errors",400598124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("ebc.db","error","ebc.db/error",-2020471270)),cljs.spec.alpha.rep_impl(new cljs.core.Keyword("ebc.db","error","ebc.db/error",-2020471270),new cljs.core.Keyword("ebc.db","error","ebc.db/error",-2020471270)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","approve-transaction-hash","ebc.db/approve-transaction-hash",1031924980),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("ebc.db","stream-transaction-hash","ebc.db/stream-transaction-hash",1758341692),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"send-directly-form","send-directly-form",-1321709340),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"approve-transaction-hash","approve-transaction-hash",1809685738),new cljs.core.Keyword(null,"approve-sablier-contract-form","approve-sablier-contract-form",-86269973),new cljs.core.Keyword(null,"gas-limit","gas-limit",-691210996),new cljs.core.Keyword(null,"create-sablier-stream-form","create-sablier-stream-form",-1699713361),new cljs.core.Keyword(null,"balance","balance",418967409),new cljs.core.Keyword(null,"dai-balance","dai-balance",-846313676),new cljs.core.Keyword(null,"stream-transaction-hash","stream-transaction-hash",590469718),new cljs.core.Keyword(null,"current-account","current-account",-95981125),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"receiver","receiver",1768630781)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amount","amount",364489504),"0.001"], null),null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allowed-amount","allowed-amount",260756832),"0"], null),"500000",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deposit","deposit",-1686435851),"3600",new cljs.core.Keyword(null,"time-since-now","time-since-now",956427579),"3600",new cljs.core.Keyword(null,"duration","duration",1444101068),"600"], null),(0),(0),null,"",cljs.core.PersistentVector.EMPTY,"0xE15cEDc7fBe317eE989B57d7229149bE3210DF71"]);
}));

//# sourceMappingURL=ebc.db.js.map
goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36122 = arguments.length;
var i__4790__auto___36123 = (0);
while(true){
if((i__4790__auto___36123 < len__4789__auto___36122)){
args__4795__auto__.push((arguments[i__4790__auto___36123]));

var G__36124 = (i__4790__auto___36123 + (1));
i__4790__auto___36123 = G__36124;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35914){
var G__35915 = cljs.core.first(seq35914);
var seq35914__$1 = cljs.core.next(seq35914);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35915,seq35914__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35926 = cljs.core.seq(sources);
var chunk__35927 = null;
var count__35928 = (0);
var i__35929 = (0);
while(true){
if((i__35929 < count__35928)){
var map__35955 = chunk__35927.cljs$core$IIndexed$_nth$arity$2(null,i__35929);
var map__35955__$1 = (((((!((map__35955 == null))))?(((((map__35955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35955):map__35955);
var src = map__35955__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35959){var e_36133 = e35959;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36133);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36133.message)].join('')));
}

var G__36134 = seq__35926;
var G__36135 = chunk__35927;
var G__36136 = count__35928;
var G__36137 = (i__35929 + (1));
seq__35926 = G__36134;
chunk__35927 = G__36135;
count__35928 = G__36136;
i__35929 = G__36137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35926);
if(temp__5735__auto__){
var seq__35926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35926__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35926__$1);
var G__36141 = cljs.core.chunk_rest(seq__35926__$1);
var G__36142 = c__4609__auto__;
var G__36143 = cljs.core.count(c__4609__auto__);
var G__36144 = (0);
seq__35926 = G__36141;
chunk__35927 = G__36142;
count__35928 = G__36143;
i__35929 = G__36144;
continue;
} else {
var map__35962 = cljs.core.first(seq__35926__$1);
var map__35962__$1 = (((((!((map__35962 == null))))?(((((map__35962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35962):map__35962);
var src = map__35962__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35964){var e_36148 = e35964;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36148);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36148.message)].join('')));
}

var G__36150 = cljs.core.next(seq__35926__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__35926 = G__36150;
chunk__35927 = G__36151;
count__35928 = G__36152;
i__35929 = G__36153;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35967 = cljs.core.seq(js_requires);
var chunk__35968 = null;
var count__35969 = (0);
var i__35970 = (0);
while(true){
if((i__35970 < count__35969)){
var js_ns = chunk__35968.cljs$core$IIndexed$_nth$arity$2(null,i__35970);
var require_str_36156 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36156);


var G__36158 = seq__35967;
var G__36159 = chunk__35968;
var G__36160 = count__35969;
var G__36161 = (i__35970 + (1));
seq__35967 = G__36158;
chunk__35968 = G__36159;
count__35969 = G__36160;
i__35970 = G__36161;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35967);
if(temp__5735__auto__){
var seq__35967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35967__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35967__$1);
var G__36163 = cljs.core.chunk_rest(seq__35967__$1);
var G__36164 = c__4609__auto__;
var G__36165 = cljs.core.count(c__4609__auto__);
var G__36166 = (0);
seq__35967 = G__36163;
chunk__35968 = G__36164;
count__35969 = G__36165;
i__35970 = G__36166;
continue;
} else {
var js_ns = cljs.core.first(seq__35967__$1);
var require_str_36167 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36167);


var G__36168 = cljs.core.next(seq__35967__$1);
var G__36170 = null;
var G__36171 = (0);
var G__36172 = (0);
seq__35967 = G__36168;
chunk__35968 = G__36170;
count__35969 = G__36171;
i__35970 = G__36172;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35976 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35976) : callback.call(null,G__35976));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35978){
var map__35980 = p__35978;
var map__35980__$1 = (((((!((map__35980 == null))))?(((((map__35980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35980):map__35980);
var msg = map__35980__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35980__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35980__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35982(s__35983){
return (new cljs.core.LazySeq(null,(function (){
var s__35983__$1 = s__35983;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35983__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35988 = cljs.core.first(xs__6292__auto__);
var map__35988__$1 = (((((!((map__35988 == null))))?(((((map__35988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35988):map__35988);
var src = map__35988__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35988__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35988__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35983__$1,map__35988,map__35988__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35980,map__35980__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35982_$_iter__35984(s__35985){
return (new cljs.core.LazySeq(null,((function (s__35983__$1,map__35988,map__35988__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35980,map__35980__$1,msg,info,reload_info){
return (function (){
var s__35985__$1 = s__35985;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35985__$1);
if(temp__5735__auto____$1){
var s__35985__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35985__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35985__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35987 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35986 = (0);
while(true){
if((i__35986 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__35986);
cljs.core.chunk_append(b__35987,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36183 = (i__35986 + (1));
i__35986 = G__36183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35987),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35982_$_iter__35984(cljs.core.chunk_rest(s__35985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35987),null);
}
} else {
var warning = cljs.core.first(s__35985__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35982_$_iter__35984(cljs.core.rest(s__35985__$2)));
}
} else {
return null;
}
break;
}
});})(s__35983__$1,map__35988,map__35988__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35980,map__35980__$1,msg,info,reload_info))
,null,null));
});})(s__35983__$1,map__35988,map__35988__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35980,map__35980__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35982(cljs.core.rest(s__35983__$1)));
} else {
var G__36187 = cljs.core.rest(s__35983__$1);
s__35983__$1 = G__36187;
continue;
}
} else {
var G__36188 = cljs.core.rest(s__35983__$1);
s__35983__$1 = G__36188;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35991_36189 = cljs.core.seq(warnings);
var chunk__35992_36190 = null;
var count__35993_36191 = (0);
var i__35994_36192 = (0);
while(true){
if((i__35994_36192 < count__35993_36191)){
var map__36001_36194 = chunk__35992_36190.cljs$core$IIndexed$_nth$arity$2(null,i__35994_36192);
var map__36001_36195__$1 = (((((!((map__36001_36194 == null))))?(((((map__36001_36194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36001_36194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36001_36194):map__36001_36194);
var w_36196 = map__36001_36195__$1;
var msg_36198__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36001_36195__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36001_36195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36001_36195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36001_36195__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36201)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36199),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36200),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36198__$1)].join(''));


var G__36204 = seq__35991_36189;
var G__36205 = chunk__35992_36190;
var G__36206 = count__35993_36191;
var G__36207 = (i__35994_36192 + (1));
seq__35991_36189 = G__36204;
chunk__35992_36190 = G__36205;
count__35993_36191 = G__36206;
i__35994_36192 = G__36207;
continue;
} else {
var temp__5735__auto___36208 = cljs.core.seq(seq__35991_36189);
if(temp__5735__auto___36208){
var seq__35991_36210__$1 = temp__5735__auto___36208;
if(cljs.core.chunked_seq_QMARK_(seq__35991_36210__$1)){
var c__4609__auto___36211 = cljs.core.chunk_first(seq__35991_36210__$1);
var G__36212 = cljs.core.chunk_rest(seq__35991_36210__$1);
var G__36213 = c__4609__auto___36211;
var G__36214 = cljs.core.count(c__4609__auto___36211);
var G__36215 = (0);
seq__35991_36189 = G__36212;
chunk__35992_36190 = G__36213;
count__35993_36191 = G__36214;
i__35994_36192 = G__36215;
continue;
} else {
var map__36006_36218 = cljs.core.first(seq__35991_36210__$1);
var map__36006_36219__$1 = (((((!((map__36006_36218 == null))))?(((((map__36006_36218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36006_36218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36006_36218):map__36006_36218);
var w_36220 = map__36006_36219__$1;
var msg_36221__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006_36219__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006_36219__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006_36219__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006_36219__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36224)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36222),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36223),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36221__$1)].join(''));


var G__36227 = cljs.core.next(seq__35991_36210__$1);
var G__36228 = null;
var G__36229 = (0);
var G__36230 = (0);
seq__35991_36189 = G__36227;
chunk__35992_36190 = G__36228;
count__35993_36191 = G__36229;
i__35994_36192 = G__36230;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35977_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35977_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36010){
var map__36011 = p__36010;
var map__36011__$1 = (((((!((map__36011 == null))))?(((((map__36011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36011):map__36011);
var msg = map__36011__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36014 = cljs.core.seq(updates);
var chunk__36016 = null;
var count__36017 = (0);
var i__36018 = (0);
while(true){
if((i__36018 < count__36017)){
var path = chunk__36016.cljs$core$IIndexed$_nth$arity$2(null,i__36018);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36049_36240 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36052_36241 = null;
var count__36053_36242 = (0);
var i__36054_36243 = (0);
while(true){
if((i__36054_36243 < count__36053_36242)){
var node_36244 = chunk__36052_36241.cljs$core$IIndexed$_nth$arity$2(null,i__36054_36243);
var path_match_36245 = shadow.cljs.devtools.client.browser.match_paths(node_36244.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36245)){
var new_link_36248 = (function (){var G__36060 = node_36244.cloneNode(true);
G__36060.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36245),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36060;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36245], 0));

goog.dom.insertSiblingAfter(new_link_36248,node_36244);

goog.dom.removeNode(node_36244);


var G__36250 = seq__36049_36240;
var G__36251 = chunk__36052_36241;
var G__36252 = count__36053_36242;
var G__36253 = (i__36054_36243 + (1));
seq__36049_36240 = G__36250;
chunk__36052_36241 = G__36251;
count__36053_36242 = G__36252;
i__36054_36243 = G__36253;
continue;
} else {
var G__36254 = seq__36049_36240;
var G__36255 = chunk__36052_36241;
var G__36256 = count__36053_36242;
var G__36257 = (i__36054_36243 + (1));
seq__36049_36240 = G__36254;
chunk__36052_36241 = G__36255;
count__36053_36242 = G__36256;
i__36054_36243 = G__36257;
continue;
}
} else {
var temp__5735__auto___36258 = cljs.core.seq(seq__36049_36240);
if(temp__5735__auto___36258){
var seq__36049_36260__$1 = temp__5735__auto___36258;
if(cljs.core.chunked_seq_QMARK_(seq__36049_36260__$1)){
var c__4609__auto___36261 = cljs.core.chunk_first(seq__36049_36260__$1);
var G__36262 = cljs.core.chunk_rest(seq__36049_36260__$1);
var G__36263 = c__4609__auto___36261;
var G__36264 = cljs.core.count(c__4609__auto___36261);
var G__36265 = (0);
seq__36049_36240 = G__36262;
chunk__36052_36241 = G__36263;
count__36053_36242 = G__36264;
i__36054_36243 = G__36265;
continue;
} else {
var node_36266 = cljs.core.first(seq__36049_36260__$1);
var path_match_36267 = shadow.cljs.devtools.client.browser.match_paths(node_36266.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36267)){
var new_link_36270 = (function (){var G__36062 = node_36266.cloneNode(true);
G__36062.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36267),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36062;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36267], 0));

goog.dom.insertSiblingAfter(new_link_36270,node_36266);

goog.dom.removeNode(node_36266);


var G__36272 = cljs.core.next(seq__36049_36260__$1);
var G__36273 = null;
var G__36274 = (0);
var G__36275 = (0);
seq__36049_36240 = G__36272;
chunk__36052_36241 = G__36273;
count__36053_36242 = G__36274;
i__36054_36243 = G__36275;
continue;
} else {
var G__36277 = cljs.core.next(seq__36049_36260__$1);
var G__36278 = null;
var G__36279 = (0);
var G__36280 = (0);
seq__36049_36240 = G__36277;
chunk__36052_36241 = G__36278;
count__36053_36242 = G__36279;
i__36054_36243 = G__36280;
continue;
}
}
} else {
}
}
break;
}


var G__36281 = seq__36014;
var G__36282 = chunk__36016;
var G__36283 = count__36017;
var G__36284 = (i__36018 + (1));
seq__36014 = G__36281;
chunk__36016 = G__36282;
count__36017 = G__36283;
i__36018 = G__36284;
continue;
} else {
var G__36286 = seq__36014;
var G__36287 = chunk__36016;
var G__36288 = count__36017;
var G__36289 = (i__36018 + (1));
seq__36014 = G__36286;
chunk__36016 = G__36287;
count__36017 = G__36288;
i__36018 = G__36289;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36014);
if(temp__5735__auto__){
var seq__36014__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36014__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36014__$1);
var G__36290 = cljs.core.chunk_rest(seq__36014__$1);
var G__36291 = c__4609__auto__;
var G__36292 = cljs.core.count(c__4609__auto__);
var G__36293 = (0);
seq__36014 = G__36290;
chunk__36016 = G__36291;
count__36017 = G__36292;
i__36018 = G__36293;
continue;
} else {
var path = cljs.core.first(seq__36014__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36064_36297 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36067_36298 = null;
var count__36068_36299 = (0);
var i__36069_36300 = (0);
while(true){
if((i__36069_36300 < count__36068_36299)){
var node_36301 = chunk__36067_36298.cljs$core$IIndexed$_nth$arity$2(null,i__36069_36300);
var path_match_36302 = shadow.cljs.devtools.client.browser.match_paths(node_36301.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36302)){
var new_link_36303 = (function (){var G__36075 = node_36301.cloneNode(true);
G__36075.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36302),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36075;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36302], 0));

goog.dom.insertSiblingAfter(new_link_36303,node_36301);

goog.dom.removeNode(node_36301);


var G__36308 = seq__36064_36297;
var G__36309 = chunk__36067_36298;
var G__36310 = count__36068_36299;
var G__36311 = (i__36069_36300 + (1));
seq__36064_36297 = G__36308;
chunk__36067_36298 = G__36309;
count__36068_36299 = G__36310;
i__36069_36300 = G__36311;
continue;
} else {
var G__36312 = seq__36064_36297;
var G__36313 = chunk__36067_36298;
var G__36314 = count__36068_36299;
var G__36315 = (i__36069_36300 + (1));
seq__36064_36297 = G__36312;
chunk__36067_36298 = G__36313;
count__36068_36299 = G__36314;
i__36069_36300 = G__36315;
continue;
}
} else {
var temp__5735__auto___36317__$1 = cljs.core.seq(seq__36064_36297);
if(temp__5735__auto___36317__$1){
var seq__36064_36319__$1 = temp__5735__auto___36317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36064_36319__$1)){
var c__4609__auto___36321 = cljs.core.chunk_first(seq__36064_36319__$1);
var G__36322 = cljs.core.chunk_rest(seq__36064_36319__$1);
var G__36323 = c__4609__auto___36321;
var G__36324 = cljs.core.count(c__4609__auto___36321);
var G__36325 = (0);
seq__36064_36297 = G__36322;
chunk__36067_36298 = G__36323;
count__36068_36299 = G__36324;
i__36069_36300 = G__36325;
continue;
} else {
var node_36326 = cljs.core.first(seq__36064_36319__$1);
var path_match_36327 = shadow.cljs.devtools.client.browser.match_paths(node_36326.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36327)){
var new_link_36329 = (function (){var G__36077 = node_36326.cloneNode(true);
G__36077.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36327),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36077;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36327], 0));

goog.dom.insertSiblingAfter(new_link_36329,node_36326);

goog.dom.removeNode(node_36326);


var G__36332 = cljs.core.next(seq__36064_36319__$1);
var G__36333 = null;
var G__36334 = (0);
var G__36335 = (0);
seq__36064_36297 = G__36332;
chunk__36067_36298 = G__36333;
count__36068_36299 = G__36334;
i__36069_36300 = G__36335;
continue;
} else {
var G__36336 = cljs.core.next(seq__36064_36319__$1);
var G__36337 = null;
var G__36338 = (0);
var G__36339 = (0);
seq__36064_36297 = G__36336;
chunk__36067_36298 = G__36337;
count__36068_36299 = G__36338;
i__36069_36300 = G__36339;
continue;
}
}
} else {
}
}
break;
}


var G__36340 = cljs.core.next(seq__36014__$1);
var G__36341 = null;
var G__36342 = (0);
var G__36343 = (0);
seq__36014 = G__36340;
chunk__36016 = G__36341;
count__36017 = G__36342;
i__36018 = G__36343;
continue;
} else {
var G__36346 = cljs.core.next(seq__36014__$1);
var G__36347 = null;
var G__36348 = (0);
var G__36349 = (0);
seq__36014 = G__36346;
chunk__36016 = G__36347;
count__36017 = G__36348;
i__36018 = G__36349;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36080){
var map__36081 = p__36080;
var map__36081__$1 = (((((!((map__36081 == null))))?(((((map__36081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36081):map__36081);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36081__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36081__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36083,done){
var map__36084 = p__36083;
var map__36084__$1 = (((((!((map__36084 == null))))?(((((map__36084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36084):map__36084);
var msg = map__36084__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36088){
var map__36089 = p__36088;
var map__36089__$1 = (((((!((map__36089 == null))))?(((((map__36089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36089):map__36089);
var src = map__36089__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36091){var e = e36091;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36092,done){
var map__36093 = p__36092;
var map__36093__$1 = (((((!((map__36093 == null))))?(((((map__36093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36093):map__36093);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36093__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36097){
var map__36098 = p__36097;
var map__36098__$1 = (((((!((map__36098 == null))))?(((((map__36098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36098):map__36098);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36100,done){
var map__36101 = p__36100;
var map__36101__$1 = (((((!((map__36101 == null))))?(((((map__36101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36101):map__36101);
var msg = map__36101__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36101__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36103_36372 = type;
var G__36103_36373__$1 = (((G__36103_36372 instanceof cljs.core.Keyword))?G__36103_36372.fqn:null);
switch (G__36103_36373__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36106 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36106.cljs$core$IFn$_invoke$arity$1 ? fexpr__36106.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36106.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36107){var e = e36107;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36393 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36393)){
var s_36394 = temp__5735__auto___36393;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36394.onclose = (function (e){
return null;
}));

s_36394.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

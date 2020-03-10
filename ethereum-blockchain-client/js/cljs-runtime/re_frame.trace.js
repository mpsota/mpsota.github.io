goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38381){
var map__38382 = p__38381;
var map__38382__$1 = (((((!((map__38382 == null))))?(((((map__38382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38382):map__38382);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38384_38411 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38385_38412 = null;
var count__38386_38413 = (0);
var i__38387_38414 = (0);
while(true){
if((i__38387_38414 < count__38386_38413)){
var vec__38398_38415 = chunk__38385_38412.cljs$core$IIndexed$_nth$arity$2(null,i__38387_38414);
var k_38416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38398_38415,(0),null);
var cb_38417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38398_38415,(1),null);
try{var G__38402_38418 = cljs.core.deref(re_frame.trace.traces);
(cb_38417.cljs$core$IFn$_invoke$arity$1 ? cb_38417.cljs$core$IFn$_invoke$arity$1(G__38402_38418) : cb_38417.call(null,G__38402_38418));
}catch (e38401){var e_38419 = e38401;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38416,"while storing",cljs.core.deref(re_frame.trace.traces),e_38419], 0));
}

var G__38420 = seq__38384_38411;
var G__38421 = chunk__38385_38412;
var G__38422 = count__38386_38413;
var G__38423 = (i__38387_38414 + (1));
seq__38384_38411 = G__38420;
chunk__38385_38412 = G__38421;
count__38386_38413 = G__38422;
i__38387_38414 = G__38423;
continue;
} else {
var temp__5735__auto___38424 = cljs.core.seq(seq__38384_38411);
if(temp__5735__auto___38424){
var seq__38384_38425__$1 = temp__5735__auto___38424;
if(cljs.core.chunked_seq_QMARK_(seq__38384_38425__$1)){
var c__4609__auto___38426 = cljs.core.chunk_first(seq__38384_38425__$1);
var G__38427 = cljs.core.chunk_rest(seq__38384_38425__$1);
var G__38428 = c__4609__auto___38426;
var G__38429 = cljs.core.count(c__4609__auto___38426);
var G__38430 = (0);
seq__38384_38411 = G__38427;
chunk__38385_38412 = G__38428;
count__38386_38413 = G__38429;
i__38387_38414 = G__38430;
continue;
} else {
var vec__38403_38431 = cljs.core.first(seq__38384_38425__$1);
var k_38432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38403_38431,(0),null);
var cb_38433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38403_38431,(1),null);
try{var G__38407_38434 = cljs.core.deref(re_frame.trace.traces);
(cb_38433.cljs$core$IFn$_invoke$arity$1 ? cb_38433.cljs$core$IFn$_invoke$arity$1(G__38407_38434) : cb_38433.call(null,G__38407_38434));
}catch (e38406){var e_38435 = e38406;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38432,"while storing",cljs.core.deref(re_frame.trace.traces),e_38435], 0));
}

var G__38436 = cljs.core.next(seq__38384_38425__$1);
var G__38437 = null;
var G__38438 = (0);
var G__38439 = (0);
seq__38384_38411 = G__38436;
chunk__38385_38412 = G__38437;
count__38386_38413 = G__38438;
i__38387_38414 = G__38439;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

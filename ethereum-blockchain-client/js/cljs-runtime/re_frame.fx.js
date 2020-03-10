goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38628 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38629 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38629);

try{try{var seq__38630 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38631 = null;
var count__38632 = (0);
var i__38633 = (0);
while(true){
if((i__38633 < count__38632)){
var vec__38640 = chunk__38631.cljs$core$IIndexed$_nth$arity$2(null,i__38633);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(1),null);
var temp__5733__auto___38717 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38717)){
var effect_fn_38718 = temp__5733__auto___38717;
(effect_fn_38718.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38718.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38718.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38719 = seq__38630;
var G__38720 = chunk__38631;
var G__38721 = count__38632;
var G__38722 = (i__38633 + (1));
seq__38630 = G__38719;
chunk__38631 = G__38720;
count__38632 = G__38721;
i__38633 = G__38722;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38630);
if(temp__5735__auto__){
var seq__38630__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38630__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38630__$1);
var G__38723 = cljs.core.chunk_rest(seq__38630__$1);
var G__38724 = c__4609__auto__;
var G__38725 = cljs.core.count(c__4609__auto__);
var G__38726 = (0);
seq__38630 = G__38723;
chunk__38631 = G__38724;
count__38632 = G__38725;
i__38633 = G__38726;
continue;
} else {
var vec__38643 = cljs.core.first(seq__38630__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(1),null);
var temp__5733__auto___38727 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38727)){
var effect_fn_38728 = temp__5733__auto___38727;
(effect_fn_38728.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38728.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38728.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38729 = cljs.core.next(seq__38630__$1);
var G__38730 = null;
var G__38731 = (0);
var G__38732 = (0);
seq__38630 = G__38729;
chunk__38631 = G__38730;
count__38632 = G__38731;
i__38633 = G__38732;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38361__auto___38733 = re_frame.interop.now();
var duration__38362__auto___38734 = (end__38361__auto___38733 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38362__auto___38734,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38361__auto___38733);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38628);
}} else {
var seq__38646 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38647 = null;
var count__38648 = (0);
var i__38649 = (0);
while(true){
if((i__38649 < count__38648)){
var vec__38659 = chunk__38647.cljs$core$IIndexed$_nth$arity$2(null,i__38649);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38659,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38659,(1),null);
var temp__5733__auto___38735 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38735)){
var effect_fn_38736 = temp__5733__auto___38735;
(effect_fn_38736.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38736.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38736.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38737 = seq__38646;
var G__38738 = chunk__38647;
var G__38739 = count__38648;
var G__38740 = (i__38649 + (1));
seq__38646 = G__38737;
chunk__38647 = G__38738;
count__38648 = G__38739;
i__38649 = G__38740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38646);
if(temp__5735__auto__){
var seq__38646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38646__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38646__$1);
var G__38742 = cljs.core.chunk_rest(seq__38646__$1);
var G__38743 = c__4609__auto__;
var G__38744 = cljs.core.count(c__4609__auto__);
var G__38745 = (0);
seq__38646 = G__38742;
chunk__38647 = G__38743;
count__38648 = G__38744;
i__38649 = G__38745;
continue;
} else {
var vec__38663 = cljs.core.first(seq__38646__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38663,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38663,(1),null);
var temp__5733__auto___38747 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38747)){
var effect_fn_38751 = temp__5733__auto___38747;
(effect_fn_38751.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38751.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38751.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38752 = cljs.core.next(seq__38646__$1);
var G__38753 = null;
var G__38754 = (0);
var G__38755 = (0);
seq__38646 = G__38752;
chunk__38647 = G__38753;
count__38648 = G__38754;
i__38649 = G__38755;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__38666 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38667 = null;
var count__38668 = (0);
var i__38669 = (0);
while(true){
if((i__38669 < count__38668)){
var map__38677 = chunk__38667.cljs$core$IIndexed$_nth$arity$2(null,i__38669);
var map__38677__$1 = (((((!((map__38677 == null))))?(((((map__38677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38677):map__38677);
var effect = map__38677__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38677__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38677__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38666,chunk__38667,count__38668,i__38669,map__38677,map__38677__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38666,chunk__38667,count__38668,i__38669,map__38677,map__38677__$1,effect,ms,dispatch))
,ms);
}


var G__38756 = seq__38666;
var G__38757 = chunk__38667;
var G__38758 = count__38668;
var G__38759 = (i__38669 + (1));
seq__38666 = G__38756;
chunk__38667 = G__38757;
count__38668 = G__38758;
i__38669 = G__38759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38666);
if(temp__5735__auto__){
var seq__38666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38666__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38666__$1);
var G__38760 = cljs.core.chunk_rest(seq__38666__$1);
var G__38761 = c__4609__auto__;
var G__38762 = cljs.core.count(c__4609__auto__);
var G__38763 = (0);
seq__38666 = G__38760;
chunk__38667 = G__38761;
count__38668 = G__38762;
i__38669 = G__38763;
continue;
} else {
var map__38685 = cljs.core.first(seq__38666__$1);
var map__38685__$1 = (((((!((map__38685 == null))))?(((((map__38685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38685):map__38685);
var effect = map__38685__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38685__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38685__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38666,chunk__38667,count__38668,i__38669,map__38685,map__38685__$1,effect,ms,dispatch,seq__38666__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38666,chunk__38667,count__38668,i__38669,map__38685,map__38685__$1,effect,ms,dispatch,seq__38666__$1,temp__5735__auto__))
,ms);
}


var G__38764 = cljs.core.next(seq__38666__$1);
var G__38765 = null;
var G__38766 = (0);
var G__38767 = (0);
seq__38666 = G__38764;
chunk__38667 = G__38765;
count__38668 = G__38766;
i__38669 = G__38767;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38689 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38690 = null;
var count__38691 = (0);
var i__38692 = (0);
while(true){
if((i__38692 < count__38691)){
var event = chunk__38690.cljs$core$IIndexed$_nth$arity$2(null,i__38692);
re_frame.router.dispatch(event);


var G__38769 = seq__38689;
var G__38772 = chunk__38690;
var G__38773 = count__38691;
var G__38774 = (i__38692 + (1));
seq__38689 = G__38769;
chunk__38690 = G__38772;
count__38691 = G__38773;
i__38692 = G__38774;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38689);
if(temp__5735__auto__){
var seq__38689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38689__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38689__$1);
var G__38776 = cljs.core.chunk_rest(seq__38689__$1);
var G__38777 = c__4609__auto__;
var G__38778 = cljs.core.count(c__4609__auto__);
var G__38779 = (0);
seq__38689 = G__38776;
chunk__38690 = G__38777;
count__38691 = G__38778;
i__38692 = G__38779;
continue;
} else {
var event = cljs.core.first(seq__38689__$1);
re_frame.router.dispatch(event);


var G__38780 = cljs.core.next(seq__38689__$1);
var G__38781 = null;
var G__38782 = (0);
var G__38783 = (0);
seq__38689 = G__38780;
chunk__38690 = G__38781;
count__38691 = G__38782;
i__38692 = G__38783;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38698 = cljs.core.seq(value);
var chunk__38699 = null;
var count__38700 = (0);
var i__38701 = (0);
while(true){
if((i__38701 < count__38700)){
var event = chunk__38699.cljs$core$IIndexed$_nth$arity$2(null,i__38701);
clear_event(event);


var G__38784 = seq__38698;
var G__38785 = chunk__38699;
var G__38786 = count__38700;
var G__38787 = (i__38701 + (1));
seq__38698 = G__38784;
chunk__38699 = G__38785;
count__38700 = G__38786;
i__38701 = G__38787;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38698);
if(temp__5735__auto__){
var seq__38698__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38698__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38698__$1);
var G__38788 = cljs.core.chunk_rest(seq__38698__$1);
var G__38789 = c__4609__auto__;
var G__38790 = cljs.core.count(c__4609__auto__);
var G__38791 = (0);
seq__38698 = G__38788;
chunk__38699 = G__38789;
count__38700 = G__38790;
i__38701 = G__38791;
continue;
} else {
var event = cljs.core.first(seq__38698__$1);
clear_event(event);


var G__38792 = cljs.core.next(seq__38698__$1);
var G__38793 = null;
var G__38794 = (0);
var G__38795 = (0);
seq__38698 = G__38792;
chunk__38699 = G__38793;
count__38700 = G__38794;
i__38701 = G__38795;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

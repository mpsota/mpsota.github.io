goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37187){
var map__37188 = p__37187;
var map__37188__$1 = (((((!((map__37188 == null))))?(((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37188):map__37188);
var m = map__37188__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37193_37436 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37194_37437 = null;
var count__37195_37438 = (0);
var i__37196_37439 = (0);
while(true){
if((i__37196_37439 < count__37195_37438)){
var f_37445 = chunk__37194_37437.cljs$core$IIndexed$_nth$arity$2(null,i__37196_37439);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37445], 0));


var G__37446 = seq__37193_37436;
var G__37447 = chunk__37194_37437;
var G__37448 = count__37195_37438;
var G__37449 = (i__37196_37439 + (1));
seq__37193_37436 = G__37446;
chunk__37194_37437 = G__37447;
count__37195_37438 = G__37448;
i__37196_37439 = G__37449;
continue;
} else {
var temp__5735__auto___37450 = cljs.core.seq(seq__37193_37436);
if(temp__5735__auto___37450){
var seq__37193_37451__$1 = temp__5735__auto___37450;
if(cljs.core.chunked_seq_QMARK_(seq__37193_37451__$1)){
var c__4609__auto___37453 = cljs.core.chunk_first(seq__37193_37451__$1);
var G__37454 = cljs.core.chunk_rest(seq__37193_37451__$1);
var G__37455 = c__4609__auto___37453;
var G__37456 = cljs.core.count(c__4609__auto___37453);
var G__37457 = (0);
seq__37193_37436 = G__37454;
chunk__37194_37437 = G__37455;
count__37195_37438 = G__37456;
i__37196_37439 = G__37457;
continue;
} else {
var f_37458 = cljs.core.first(seq__37193_37451__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37458], 0));


var G__37459 = cljs.core.next(seq__37193_37451__$1);
var G__37460 = null;
var G__37461 = (0);
var G__37462 = (0);
seq__37193_37436 = G__37459;
chunk__37194_37437 = G__37460;
count__37195_37438 = G__37461;
i__37196_37439 = G__37462;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37465 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37465], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37465)))?cljs.core.second(arglists_37465):arglists_37465)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37197_37473 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37198_37474 = null;
var count__37199_37475 = (0);
var i__37200_37476 = (0);
while(true){
if((i__37200_37476 < count__37199_37475)){
var vec__37219_37477 = chunk__37198_37474.cljs$core$IIndexed$_nth$arity$2(null,i__37200_37476);
var name_37478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219_37477,(0),null);
var map__37222_37479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219_37477,(1),null);
var map__37222_37480__$1 = (((((!((map__37222_37479 == null))))?(((((map__37222_37479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37222_37479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37222_37479):map__37222_37479);
var doc_37481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37222_37480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37222_37480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37478], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37482], 0));

if(cljs.core.truth_(doc_37481)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37481], 0));
} else {
}


var G__37483 = seq__37197_37473;
var G__37484 = chunk__37198_37474;
var G__37485 = count__37199_37475;
var G__37486 = (i__37200_37476 + (1));
seq__37197_37473 = G__37483;
chunk__37198_37474 = G__37484;
count__37199_37475 = G__37485;
i__37200_37476 = G__37486;
continue;
} else {
var temp__5735__auto___37487 = cljs.core.seq(seq__37197_37473);
if(temp__5735__auto___37487){
var seq__37197_37488__$1 = temp__5735__auto___37487;
if(cljs.core.chunked_seq_QMARK_(seq__37197_37488__$1)){
var c__4609__auto___37489 = cljs.core.chunk_first(seq__37197_37488__$1);
var G__37490 = cljs.core.chunk_rest(seq__37197_37488__$1);
var G__37491 = c__4609__auto___37489;
var G__37492 = cljs.core.count(c__4609__auto___37489);
var G__37493 = (0);
seq__37197_37473 = G__37490;
chunk__37198_37474 = G__37491;
count__37199_37475 = G__37492;
i__37200_37476 = G__37493;
continue;
} else {
var vec__37224_37494 = cljs.core.first(seq__37197_37488__$1);
var name_37495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224_37494,(0),null);
var map__37227_37496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224_37494,(1),null);
var map__37227_37497__$1 = (((((!((map__37227_37496 == null))))?(((((map__37227_37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37227_37496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37227_37496):map__37227_37496);
var doc_37498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227_37497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227_37497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37495], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37499], 0));

if(cljs.core.truth_(doc_37498)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37498], 0));
} else {
}


var G__37500 = cljs.core.next(seq__37197_37488__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__37197_37473 = G__37500;
chunk__37198_37474 = G__37501;
count__37199_37475 = G__37502;
i__37200_37476 = G__37503;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37232 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37233 = null;
var count__37234 = (0);
var i__37235 = (0);
while(true){
if((i__37235 < count__37234)){
var role = chunk__37233.cljs$core$IIndexed$_nth$arity$2(null,i__37235);
var temp__5735__auto___37504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37504__$1)){
var spec_37505 = temp__5735__auto___37504__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37505)], 0));
} else {
}


var G__37506 = seq__37232;
var G__37507 = chunk__37233;
var G__37508 = count__37234;
var G__37509 = (i__37235 + (1));
seq__37232 = G__37506;
chunk__37233 = G__37507;
count__37234 = G__37508;
i__37235 = G__37509;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37232);
if(temp__5735__auto____$1){
var seq__37232__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37232__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37232__$1);
var G__37510 = cljs.core.chunk_rest(seq__37232__$1);
var G__37511 = c__4609__auto__;
var G__37512 = cljs.core.count(c__4609__auto__);
var G__37513 = (0);
seq__37232 = G__37510;
chunk__37233 = G__37511;
count__37234 = G__37512;
i__37235 = G__37513;
continue;
} else {
var role = cljs.core.first(seq__37232__$1);
var temp__5735__auto___37515__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37515__$2)){
var spec_37517 = temp__5735__auto___37515__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37517)], 0));
} else {
}


var G__37518 = cljs.core.next(seq__37232__$1);
var G__37519 = null;
var G__37520 = (0);
var G__37521 = (0);
seq__37232 = G__37518;
chunk__37233 = G__37519;
count__37234 = G__37520;
i__37235 = G__37521;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37526 = cljs.core.ex_cause(t);
via = G__37525;
t = G__37526;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37312 = datafied_throwable;
var map__37312__$1 = (((((!((map__37312 == null))))?(((((map__37312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37312):map__37312);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37312__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37312__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37312__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37313 = cljs.core.last(via);
var map__37313__$1 = (((((!((map__37313 == null))))?(((((map__37313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37313):map__37313);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37313__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37313__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37313__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37314 = data;
var map__37314__$1 = (((((!((map__37314 == null))))?(((((map__37314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37314):map__37314);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37315 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37315__$1 = (((((!((map__37315 == null))))?(((((map__37315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37315):map__37315);
var top_data = map__37315__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37334 = phase;
var G__37334__$1 = (((G__37334 instanceof cljs.core.Keyword))?G__37334.fqn:null);
switch (G__37334__$1) {
case "read-source":
var map__37342 = data;
var map__37342__$1 = (((((!((map__37342 == null))))?(((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37342):map__37342);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37348__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37348,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37348);
var G__37348__$2 = (cljs.core.truth_((function (){var fexpr__37353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37353.cljs$core$IFn$_invoke$arity$1 ? fexpr__37353.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37353.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37348__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37348__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37348__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37354 = top_data;
var G__37354__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37354,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37354);
var G__37354__$2 = (cljs.core.truth_((function (){var fexpr__37359 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37359.cljs$core$IFn$_invoke$arity$1 ? fexpr__37359.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37359.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37354__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37354__$1);
var G__37354__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37354__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37354__$2);
var G__37354__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37354__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37354__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37354__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37354__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37360 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(3),null);
var G__37363 = top_data;
var G__37363__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37363);
var G__37363__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37363__$1);
var G__37363__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37363__$2);
var G__37363__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37363__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37363__$4;
}

break;
case "execution":
var vec__37367 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37367,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37296_SHARP_){
var or__4185__auto__ = (p1__37296_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__37376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37376.cljs$core$IFn$_invoke$arity$1 ? fexpr__37376.cljs$core$IFn$_invoke$arity$1(p1__37296_SHARP_) : fexpr__37376.call(null,p1__37296_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__37377 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37377__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37377);
var G__37377__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37377__$1);
var G__37377__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37377__$2);
var G__37377__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37377__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37377__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37334__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37385){
var map__37386 = p__37385;
var map__37386__$1 = (((((!((map__37386 == null))))?(((((map__37386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37386):map__37386);
var triage_data = map__37386__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37391 = phase;
var G__37391__$1 = (((G__37391 instanceof cljs.core.Keyword))?G__37391.fqn:null);
switch (G__37391__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37392 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37393 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37394 = loc;
var G__37395 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37396_37533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37397_37534 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37398_37535 = true;
var _STAR_print_fn_STAR__temp_val__37399_37536 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37398_37535);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37399_37536);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37383_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37383_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37397_37534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37396_37533);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37392,G__37393,G__37394,G__37395) : format.call(null,G__37392,G__37393,G__37394,G__37395));

break;
case "macroexpansion":
var G__37404 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37405 = cause_type;
var G__37406 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37407 = loc;
var G__37408 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37404,G__37405,G__37406,G__37407,G__37408) : format.call(null,G__37404,G__37405,G__37406,G__37407,G__37408));

break;
case "compile-syntax-check":
var G__37409 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37410 = cause_type;
var G__37411 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37412 = loc;
var G__37413 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37409,G__37410,G__37411,G__37412,G__37413) : format.call(null,G__37409,G__37410,G__37411,G__37412,G__37413));

break;
case "compilation":
var G__37414 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37415 = cause_type;
var G__37416 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37417 = loc;
var G__37418 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37414,G__37415,G__37416,G__37417,G__37418) : format.call(null,G__37414,G__37415,G__37416,G__37417,G__37418));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37419 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37420 = symbol;
var G__37421 = loc;
var G__37422 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37423_37542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37424_37543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37425_37544 = true;
var _STAR_print_fn_STAR__temp_val__37426_37545 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37425_37544);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37426_37545);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37384_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37384_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37424_37543);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37423_37542);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37419,G__37420,G__37421,G__37422) : format.call(null,G__37419,G__37420,G__37421,G__37422));
} else {
var G__37427 = "Execution error%s at %s(%s).\n%s\n";
var G__37428 = cause_type;
var G__37429 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37430 = loc;
var G__37431 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37427,G__37428,G__37429,G__37430,G__37431) : format.call(null,G__37427,G__37428,G__37429,G__37430,G__37431));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37391__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

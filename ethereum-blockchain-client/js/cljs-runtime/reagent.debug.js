goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36713__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36714__i = 0, G__36714__a = new Array(arguments.length -  0);
while (G__36714__i < G__36714__a.length) {G__36714__a[G__36714__i] = arguments[G__36714__i + 0]; ++G__36714__i;}
  args = new cljs.core.IndexedSeq(G__36714__a,0,null);
} 
return G__36713__delegate.call(this,args);};
G__36713.cljs$lang$maxFixedArity = 0;
G__36713.cljs$lang$applyTo = (function (arglist__36715){
var args = cljs.core.seq(arglist__36715);
return G__36713__delegate(args);
});
G__36713.cljs$core$IFn$_invoke$arity$variadic = G__36713__delegate;
return G__36713;
})()
);

(o.error = (function() { 
var G__36716__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36717__i = 0, G__36717__a = new Array(arguments.length -  0);
while (G__36717__i < G__36717__a.length) {G__36717__a[G__36717__i] = arguments[G__36717__i + 0]; ++G__36717__i;}
  args = new cljs.core.IndexedSeq(G__36717__a,0,null);
} 
return G__36716__delegate.call(this,args);};
G__36716.cljs$lang$maxFixedArity = 0;
G__36716.cljs$lang$applyTo = (function (arglist__36718){
var args = cljs.core.seq(arglist__36718);
return G__36716__delegate(args);
});
G__36716.cljs$core$IFn$_invoke$arity$variadic = G__36716__delegate;
return G__36716;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

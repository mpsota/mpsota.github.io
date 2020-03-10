goog.provide('ebc.app');
goog.require('cljs.core');
goog.require('ebc.events');
goog.require('ebc.subs');
goog.require('ebc.ui');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('devtools.core');
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();
cljs.core.enable_console_print_BANG_();
console.log(cljs.core.range.cljs$core$IFn$_invoke$arity$1((200)));
ebc.app.render = (function ebc$app$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ebc.ui.index], null),document.getElementById("main"));
});
ebc.app.clear_cache_and_render_BANG_ = (function ebc$app$clear_cache_and_render_BANG_(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return ebc.app.render();
});
ebc.app.init = (function ebc$app$init(){
var G__28291_28292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__28291_28292) : re_frame.core.dispatch_sync.call(null,G__28291_28292));

return ebc.app.render();
});
goog.exportSymbol('ebc.app.init', ebc.app.init);

//# sourceMappingURL=ebc.app.js.map

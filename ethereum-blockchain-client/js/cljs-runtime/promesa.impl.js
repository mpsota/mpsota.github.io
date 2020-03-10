goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('promesa.util');
goog.require('promesa.exec');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x27618 = obj;
(x27618.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x27618.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x27618.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x27618;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27619_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27619_SHARP_) : f.call(null,p1__27619_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27620_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27620_SHARP_) : f.call(null,p1__27620_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27621_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27621_SHARP_) : f.call(null,p1__27621_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27622_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27622_SHARP_) : f.call(null,p1__27622_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27623_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27623_SHARP_) : f.call(null,p1__27623_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27624_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27624_SHARP_) : f.call(null,p1__27624_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__27625_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27625_SHARP_) : f.call(null,p1__27625_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__27626_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27626_SHARP_) : f.call(null,p1__27626_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__27627_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27627_SHARP_) : f.call(null,p1__27627_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__27628_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27628_SHARP_) : f.call(null,p1__27628_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27629_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27629_SHARP_,null) : f.call(null,p1__27629_SHARP_,null));
}),(function (p1__27630_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27630_SHARP_) : f.call(null,null,p1__27630_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27631_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27631_SHARP_,null) : f.call(null,p1__27631_SHARP_,null));
}),(function (p1__27632_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27632_SHARP_) : f.call(null,null,p1__27632_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__27633_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27633_SHARP_,null) : f.call(null,p1__27633_SHARP_,null));
}),(function (p1__27634_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27634_SHARP_) : f.call(null,null,p1__27634_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__27635_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27635_SHARP_,null) : f.call(null,p1__27635_SHARP_,null));
}),(function (p1__27636_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27636_SHARP_) : f.call(null,null,p1__27636_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__27641 = null;
var G__27641__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__27641__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__27641 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27641__2.call(this,it,f);
case 3:
return G__27641__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27641.cljs$core$IFn$_invoke$arity$2 = G__27641__2;
G__27641.cljs$core$IFn$_invoke$arity$3 = G__27641__3;
return G__27641;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__27644 = null;
var G__27644__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__27644__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__27644 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27644__2.call(this,it,f);
case 3:
return G__27644__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27644.cljs$core$IFn$_invoke$arity$2 = G__27644__2;
G__27644.cljs$core$IFn$_invoke$arity$3 = G__27644__3;
return G__27644;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__27645 = null;
var G__27645__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__27645__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__27645 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27645__2.call(this,it,f);
case 3:
return G__27645__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27645.cljs$core$IFn$_invoke$arity$2 = G__27645__2;
G__27645.cljs$core$IFn$_invoke$arity$3 = G__27645__3;
return G__27645;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__27646 = null;
var G__27646__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__27646__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__27646 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27646__2.call(this,it,f);
case 3:
return G__27646__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27646.cljs$core$IFn$_invoke$arity$2 = G__27646__2;
G__27646.cljs$core$IFn$_invoke$arity$3 = G__27646__3;
return G__27646;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__27649 = null;
var G__27649__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__27649__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__27649 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27649__2.call(this,it,f);
case 3:
return G__27649__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27649.cljs$core$IFn$_invoke$arity$2 = G__27649__2;
G__27649.cljs$core$IFn$_invoke$arity$3 = G__27649__3;
return G__27649;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__27652 = null;
var G__27652__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__27652__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__27652 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27652__2.call(this,it,f);
case 3:
return G__27652__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27652.cljs$core$IFn$_invoke$arity$2 = G__27652__2;
G__27652.cljs$core$IFn$_invoke$arity$3 = G__27652__3;
return G__27652;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

goog.object.set(promesa.protocols._promise,"_",(function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map

goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32543 = arguments.length;
switch (G__32543) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32544 = (function (f,blockable,meta32545){
this.f = f;
this.blockable = blockable;
this.meta32545 = meta32545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32546,meta32545__$1){
var self__ = this;
var _32546__$1 = this;
return (new cljs.core.async.t_cljs$core$async32544(self__.f,self__.blockable,meta32545__$1));
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32546){
var self__ = this;
var _32546__$1 = this;
return self__.meta32545;
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32545","meta32545",-918400377,null)], null);
}));

(cljs.core.async.t_cljs$core$async32544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32544");

(cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32544.
 */
cljs.core.async.__GT_t_cljs$core$async32544 = (function cljs$core$async$__GT_t_cljs$core$async32544(f__$1,blockable__$1,meta32545){
return (new cljs.core.async.t_cljs$core$async32544(f__$1,blockable__$1,meta32545));
});

}

return (new cljs.core.async.t_cljs$core$async32544(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32549 = arguments.length;
switch (G__32549) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32551 = arguments.length;
switch (G__32551) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32553 = arguments.length;
switch (G__32553) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34022 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34022) : fn1.call(null,val_34022));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34022) : fn1.call(null,val_34022));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32555 = arguments.length;
switch (G__32555) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___34037 = n;
var x_34039 = (0);
while(true){
if((x_34039 < n__4666__auto___34037)){
(a[x_34039] = x_34039);

var G__34041 = (x_34039 + (1));
x_34039 = G__34041;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32556 = (function (flag,meta32557){
this.flag = flag;
this.meta32557 = meta32557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32558,meta32557__$1){
var self__ = this;
var _32558__$1 = this;
return (new cljs.core.async.t_cljs$core$async32556(self__.flag,meta32557__$1));
}));

(cljs.core.async.t_cljs$core$async32556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32558){
var self__ = this;
var _32558__$1 = this;
return self__.meta32557;
}));

(cljs.core.async.t_cljs$core$async32556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32557","meta32557",1912223164,null)], null);
}));

(cljs.core.async.t_cljs$core$async32556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32556");

(cljs.core.async.t_cljs$core$async32556.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32556.
 */
cljs.core.async.__GT_t_cljs$core$async32556 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32556(flag__$1,meta32557){
return (new cljs.core.async.t_cljs$core$async32556(flag__$1,meta32557));
});

}

return (new cljs.core.async.t_cljs$core$async32556(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32559 = (function (flag,cb,meta32560){
this.flag = flag;
this.cb = cb;
this.meta32560 = meta32560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32561,meta32560__$1){
var self__ = this;
var _32561__$1 = this;
return (new cljs.core.async.t_cljs$core$async32559(self__.flag,self__.cb,meta32560__$1));
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32561){
var self__ = this;
var _32561__$1 = this;
return self__.meta32560;
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32560","meta32560",-1010676059,null)], null);
}));

(cljs.core.async.t_cljs$core$async32559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32559");

(cljs.core.async.t_cljs$core$async32559.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32559.
 */
cljs.core.async.__GT_t_cljs$core$async32559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32559(flag__$1,cb__$1,meta32560){
return (new cljs.core.async.t_cljs$core$async32559(flag__$1,cb__$1,meta32560));
});

}

return (new cljs.core.async.t_cljs$core$async32559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32562_SHARP_){
var G__32564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32562_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32564) : fret.call(null,G__32564));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32563_SHARP_){
var G__32565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32563_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32565) : fret.call(null,G__32565));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34051 = (i + (1));
i = G__34051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34061 = arguments.length;
var i__4790__auto___34062 = (0);
while(true){
if((i__4790__auto___34062 < len__4789__auto___34061)){
args__4795__auto__.push((arguments[i__4790__auto___34062]));

var G__34063 = (i__4790__auto___34062 + (1));
i__4790__auto___34062 = G__34063;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32568){
var map__32569 = p__32568;
var map__32569__$1 = (((((!((map__32569 == null))))?(((((map__32569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32569):map__32569);
var opts = map__32569__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32566){
var G__32567 = cljs.core.first(seq32566);
var seq32566__$1 = cljs.core.next(seq32566);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32567,seq32566__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32572 = arguments.length;
switch (G__32572) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32483__auto___34065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32596){
var state_val_32597 = (state_32596[(1)]);
if((state_val_32597 === (7))){
var inst_32592 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32598_34066 = state_32596__$1;
(statearr_32598_34066[(2)] = inst_32592);

(statearr_32598_34066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (1))){
var state_32596__$1 = state_32596;
var statearr_32599_34067 = state_32596__$1;
(statearr_32599_34067[(2)] = null);

(statearr_32599_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (4))){
var inst_32575 = (state_32596[(7)]);
var inst_32575__$1 = (state_32596[(2)]);
var inst_32576 = (inst_32575__$1 == null);
var state_32596__$1 = (function (){var statearr_32600 = state_32596;
(statearr_32600[(7)] = inst_32575__$1);

return statearr_32600;
})();
if(cljs.core.truth_(inst_32576)){
var statearr_32601_34068 = state_32596__$1;
(statearr_32601_34068[(1)] = (5));

} else {
var statearr_32602_34069 = state_32596__$1;
(statearr_32602_34069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (13))){
var state_32596__$1 = state_32596;
var statearr_32603_34070 = state_32596__$1;
(statearr_32603_34070[(2)] = null);

(statearr_32603_34070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (6))){
var inst_32575 = (state_32596[(7)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32596__$1,(11),to,inst_32575);
} else {
if((state_val_32597 === (3))){
var inst_32594 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32596__$1,inst_32594);
} else {
if((state_val_32597 === (12))){
var state_32596__$1 = state_32596;
var statearr_32604_34071 = state_32596__$1;
(statearr_32604_34071[(2)] = null);

(statearr_32604_34071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (2))){
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32596__$1,(4),from);
} else {
if((state_val_32597 === (11))){
var inst_32585 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
if(cljs.core.truth_(inst_32585)){
var statearr_32605_34080 = state_32596__$1;
(statearr_32605_34080[(1)] = (12));

} else {
var statearr_32606_34081 = state_32596__$1;
(statearr_32606_34081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (9))){
var state_32596__$1 = state_32596;
var statearr_32607_34082 = state_32596__$1;
(statearr_32607_34082[(2)] = null);

(statearr_32607_34082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (5))){
var state_32596__$1 = state_32596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32608_34083 = state_32596__$1;
(statearr_32608_34083[(1)] = (8));

} else {
var statearr_32609_34084 = state_32596__$1;
(statearr_32609_34084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (14))){
var inst_32590 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32610_34085 = state_32596__$1;
(statearr_32610_34085[(2)] = inst_32590);

(statearr_32610_34085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (10))){
var inst_32582 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32611_34086 = state_32596__$1;
(statearr_32611_34086[(2)] = inst_32582);

(statearr_32611_34086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (8))){
var inst_32579 = cljs.core.async.close_BANG_(to);
var state_32596__$1 = state_32596;
var statearr_32612_34088 = state_32596__$1;
(statearr_32612_34088[(2)] = inst_32579);

(statearr_32612_34088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_32613 = [null,null,null,null,null,null,null,null];
(statearr_32613[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_32613[(1)] = (1));

return statearr_32613;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_32596){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32596);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32614){if((e32614 instanceof Object)){
var ex__32397__auto__ = e32614;
var statearr_32615_34091 = state_32596;
(statearr_32615_34091[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34092 = state_32596;
state_32596 = G__34092;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_32596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_32596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32616 = f__32484__auto__();
(statearr_32616[(6)] = c__32483__auto___34065);

return statearr_32616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32617){
var vec__32618 = p__32617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32618,(1),null);
var job = vec__32618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32483__auto___34093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (1))){
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32625__$1,(2),res,v);
} else {
if((state_val_32626 === (2))){
var inst_32622 = (state_32625[(2)]);
var inst_32623 = cljs.core.async.close_BANG_(res);
var state_32625__$1 = (function (){var statearr_32627 = state_32625;
(statearr_32627[(7)] = inst_32622);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32625__$1,inst_32623);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0 = (function (){
var statearr_32628 = [null,null,null,null,null,null,null,null];
(statearr_32628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__);

(statearr_32628[(1)] = (1));

return statearr_32628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1 = (function (state_32625){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32625);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32629){if((e32629 instanceof Object)){
var ex__32397__auto__ = e32629;
var statearr_32630_34095 = state_32625;
(statearr_32630_34095[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34096 = state_32625;
state_32625 = G__34096;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32631 = f__32484__auto__();
(statearr_32631[(6)] = c__32483__auto___34093);

return statearr_32631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32632){
var vec__32633 = p__32632;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(1),null);
var job = vec__32633;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___34099 = n;
var __34100 = (0);
while(true){
if((__34100 < n__4666__auto___34099)){
var G__32636_34101 = type;
var G__32636_34102__$1 = (((G__32636_34101 instanceof cljs.core.Keyword))?G__32636_34101.fqn:null);
switch (G__32636_34102__$1) {
case "compute":
var c__32483__auto___34104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34100,c__32483__auto___34104,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async){
return (function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = ((function (__34100,c__32483__auto___34104,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async){
return (function (state_32649){
var state_val_32650 = (state_32649[(1)]);
if((state_val_32650 === (1))){
var state_32649__$1 = state_32649;
var statearr_32651_34105 = state_32649__$1;
(statearr_32651_34105[(2)] = null);

(statearr_32651_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (2))){
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32649__$1,(4),jobs);
} else {
if((state_val_32650 === (3))){
var inst_32647 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32649__$1,inst_32647);
} else {
if((state_val_32650 === (4))){
var inst_32639 = (state_32649[(2)]);
var inst_32640 = process(inst_32639);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32640)){
var statearr_32652_34108 = state_32649__$1;
(statearr_32652_34108[(1)] = (5));

} else {
var statearr_32653_34109 = state_32649__$1;
(statearr_32653_34109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (5))){
var state_32649__$1 = state_32649;
var statearr_32654_34110 = state_32649__$1;
(statearr_32654_34110[(2)] = null);

(statearr_32654_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (6))){
var state_32649__$1 = state_32649;
var statearr_32655_34111 = state_32649__$1;
(statearr_32655_34111[(2)] = null);

(statearr_32655_34111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (7))){
var inst_32645 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32656_34114 = state_32649__$1;
(statearr_32656_34114[(2)] = inst_32645);

(statearr_32656_34114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34100,c__32483__auto___34104,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async))
;
return ((function (__34100,switch__32393__auto__,c__32483__auto___34104,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0 = (function (){
var statearr_32657 = [null,null,null,null,null,null,null];
(statearr_32657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__);

(statearr_32657[(1)] = (1));

return statearr_32657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1 = (function (state_32649){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32649);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32658){if((e32658 instanceof Object)){
var ex__32397__auto__ = e32658;
var statearr_32659_34115 = state_32649;
(statearr_32659_34115[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34118 = state_32649;
state_32649 = G__34118;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = function(state_32649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1.call(this,state_32649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__;
})()
;})(__34100,switch__32393__auto__,c__32483__auto___34104,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async))
})();
var state__32485__auto__ = (function (){var statearr_32660 = f__32484__auto__();
(statearr_32660[(6)] = c__32483__auto___34104);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
});})(__34100,c__32483__auto___34104,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async))
);


break;
case "async":
var c__32483__auto___34119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34100,c__32483__auto___34119,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async){
return (function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = ((function (__34100,c__32483__auto___34119,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async){
return (function (state_32673){
var state_val_32674 = (state_32673[(1)]);
if((state_val_32674 === (1))){
var state_32673__$1 = state_32673;
var statearr_32675_34120 = state_32673__$1;
(statearr_32675_34120[(2)] = null);

(statearr_32675_34120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (2))){
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32673__$1,(4),jobs);
} else {
if((state_val_32674 === (3))){
var inst_32671 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32673__$1,inst_32671);
} else {
if((state_val_32674 === (4))){
var inst_32663 = (state_32673[(2)]);
var inst_32664 = async(inst_32663);
var state_32673__$1 = state_32673;
if(cljs.core.truth_(inst_32664)){
var statearr_32676_34121 = state_32673__$1;
(statearr_32676_34121[(1)] = (5));

} else {
var statearr_32677_34122 = state_32673__$1;
(statearr_32677_34122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (5))){
var state_32673__$1 = state_32673;
var statearr_32678_34123 = state_32673__$1;
(statearr_32678_34123[(2)] = null);

(statearr_32678_34123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (6))){
var state_32673__$1 = state_32673;
var statearr_32679_34124 = state_32673__$1;
(statearr_32679_34124[(2)] = null);

(statearr_32679_34124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (7))){
var inst_32669 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32680_34125 = state_32673__$1;
(statearr_32680_34125[(2)] = inst_32669);

(statearr_32680_34125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34100,c__32483__auto___34119,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async))
;
return ((function (__34100,switch__32393__auto__,c__32483__auto___34119,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0 = (function (){
var statearr_32681 = [null,null,null,null,null,null,null];
(statearr_32681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__);

(statearr_32681[(1)] = (1));

return statearr_32681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1 = (function (state_32673){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32673);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32682){if((e32682 instanceof Object)){
var ex__32397__auto__ = e32682;
var statearr_32683_34130 = state_32673;
(statearr_32683_34130[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34131 = state_32673;
state_32673 = G__34131;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = function(state_32673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1.call(this,state_32673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__;
})()
;})(__34100,switch__32393__auto__,c__32483__auto___34119,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async))
})();
var state__32485__auto__ = (function (){var statearr_32684 = f__32484__auto__();
(statearr_32684[(6)] = c__32483__auto___34119);

return statearr_32684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
});})(__34100,c__32483__auto___34119,G__32636_34101,G__32636_34102__$1,n__4666__auto___34099,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32636_34102__$1)].join('')));

}

var G__34134 = (__34100 + (1));
__34100 = G__34134;
continue;
} else {
}
break;
}

var c__32483__auto___34135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32706){
var state_val_32707 = (state_32706[(1)]);
if((state_val_32707 === (7))){
var inst_32702 = (state_32706[(2)]);
var state_32706__$1 = state_32706;
var statearr_32708_34137 = state_32706__$1;
(statearr_32708_34137[(2)] = inst_32702);

(statearr_32708_34137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (1))){
var state_32706__$1 = state_32706;
var statearr_32709_34138 = state_32706__$1;
(statearr_32709_34138[(2)] = null);

(statearr_32709_34138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (4))){
var inst_32687 = (state_32706[(7)]);
var inst_32687__$1 = (state_32706[(2)]);
var inst_32688 = (inst_32687__$1 == null);
var state_32706__$1 = (function (){var statearr_32710 = state_32706;
(statearr_32710[(7)] = inst_32687__$1);

return statearr_32710;
})();
if(cljs.core.truth_(inst_32688)){
var statearr_32711_34140 = state_32706__$1;
(statearr_32711_34140[(1)] = (5));

} else {
var statearr_32712_34141 = state_32706__$1;
(statearr_32712_34141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (6))){
var inst_32692 = (state_32706[(8)]);
var inst_32687 = (state_32706[(7)]);
var inst_32692__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32694 = [inst_32687,inst_32692__$1];
var inst_32695 = (new cljs.core.PersistentVector(null,2,(5),inst_32693,inst_32694,null));
var state_32706__$1 = (function (){var statearr_32713 = state_32706;
(statearr_32713[(8)] = inst_32692__$1);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32706__$1,(8),jobs,inst_32695);
} else {
if((state_val_32707 === (3))){
var inst_32704 = (state_32706[(2)]);
var state_32706__$1 = state_32706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32706__$1,inst_32704);
} else {
if((state_val_32707 === (2))){
var state_32706__$1 = state_32706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32706__$1,(4),from);
} else {
if((state_val_32707 === (9))){
var inst_32699 = (state_32706[(2)]);
var state_32706__$1 = (function (){var statearr_32714 = state_32706;
(statearr_32714[(9)] = inst_32699);

return statearr_32714;
})();
var statearr_32715_34143 = state_32706__$1;
(statearr_32715_34143[(2)] = null);

(statearr_32715_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (5))){
var inst_32690 = cljs.core.async.close_BANG_(jobs);
var state_32706__$1 = state_32706;
var statearr_32716_34145 = state_32706__$1;
(statearr_32716_34145[(2)] = inst_32690);

(statearr_32716_34145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32707 === (8))){
var inst_32692 = (state_32706[(8)]);
var inst_32697 = (state_32706[(2)]);
var state_32706__$1 = (function (){var statearr_32717 = state_32706;
(statearr_32717[(10)] = inst_32697);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32706__$1,(9),results,inst_32692);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0 = (function (){
var statearr_32718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__);

(statearr_32718[(1)] = (1));

return statearr_32718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1 = (function (state_32706){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32706);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32719){if((e32719 instanceof Object)){
var ex__32397__auto__ = e32719;
var statearr_32720_34150 = state_32706;
(statearr_32720_34150[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34151 = state_32706;
state_32706 = G__34151;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = function(state_32706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1.call(this,state_32706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32721 = f__32484__auto__();
(statearr_32721[(6)] = c__32483__auto___34135);

return statearr_32721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


var c__32483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32759){
var state_val_32760 = (state_32759[(1)]);
if((state_val_32760 === (7))){
var inst_32755 = (state_32759[(2)]);
var state_32759__$1 = state_32759;
var statearr_32761_34152 = state_32759__$1;
(statearr_32761_34152[(2)] = inst_32755);

(statearr_32761_34152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (20))){
var state_32759__$1 = state_32759;
var statearr_32762_34153 = state_32759__$1;
(statearr_32762_34153[(2)] = null);

(statearr_32762_34153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (1))){
var state_32759__$1 = state_32759;
var statearr_32763_34154 = state_32759__$1;
(statearr_32763_34154[(2)] = null);

(statearr_32763_34154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (4))){
var inst_32724 = (state_32759[(7)]);
var inst_32724__$1 = (state_32759[(2)]);
var inst_32725 = (inst_32724__$1 == null);
var state_32759__$1 = (function (){var statearr_32764 = state_32759;
(statearr_32764[(7)] = inst_32724__$1);

return statearr_32764;
})();
if(cljs.core.truth_(inst_32725)){
var statearr_32765_34155 = state_32759__$1;
(statearr_32765_34155[(1)] = (5));

} else {
var statearr_32766_34156 = state_32759__$1;
(statearr_32766_34156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (15))){
var inst_32737 = (state_32759[(8)]);
var state_32759__$1 = state_32759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32759__$1,(18),to,inst_32737);
} else {
if((state_val_32760 === (21))){
var inst_32750 = (state_32759[(2)]);
var state_32759__$1 = state_32759;
var statearr_32767_34166 = state_32759__$1;
(statearr_32767_34166[(2)] = inst_32750);

(statearr_32767_34166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (13))){
var inst_32752 = (state_32759[(2)]);
var state_32759__$1 = (function (){var statearr_32768 = state_32759;
(statearr_32768[(9)] = inst_32752);

return statearr_32768;
})();
var statearr_32769_34167 = state_32759__$1;
(statearr_32769_34167[(2)] = null);

(statearr_32769_34167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (6))){
var inst_32724 = (state_32759[(7)]);
var state_32759__$1 = state_32759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32759__$1,(11),inst_32724);
} else {
if((state_val_32760 === (17))){
var inst_32745 = (state_32759[(2)]);
var state_32759__$1 = state_32759;
if(cljs.core.truth_(inst_32745)){
var statearr_32770_34168 = state_32759__$1;
(statearr_32770_34168[(1)] = (19));

} else {
var statearr_32771_34169 = state_32759__$1;
(statearr_32771_34169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (3))){
var inst_32757 = (state_32759[(2)]);
var state_32759__$1 = state_32759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32759__$1,inst_32757);
} else {
if((state_val_32760 === (12))){
var inst_32734 = (state_32759[(10)]);
var state_32759__$1 = state_32759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32759__$1,(14),inst_32734);
} else {
if((state_val_32760 === (2))){
var state_32759__$1 = state_32759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32759__$1,(4),results);
} else {
if((state_val_32760 === (19))){
var state_32759__$1 = state_32759;
var statearr_32772_34170 = state_32759__$1;
(statearr_32772_34170[(2)] = null);

(statearr_32772_34170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (11))){
var inst_32734 = (state_32759[(2)]);
var state_32759__$1 = (function (){var statearr_32773 = state_32759;
(statearr_32773[(10)] = inst_32734);

return statearr_32773;
})();
var statearr_32774_34171 = state_32759__$1;
(statearr_32774_34171[(2)] = null);

(statearr_32774_34171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (9))){
var state_32759__$1 = state_32759;
var statearr_32775_34172 = state_32759__$1;
(statearr_32775_34172[(2)] = null);

(statearr_32775_34172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (5))){
var state_32759__$1 = state_32759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32776_34173 = state_32759__$1;
(statearr_32776_34173[(1)] = (8));

} else {
var statearr_32777_34174 = state_32759__$1;
(statearr_32777_34174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (14))){
var inst_32737 = (state_32759[(8)]);
var inst_32737__$1 = (state_32759[(2)]);
var inst_32738 = (inst_32737__$1 == null);
var inst_32739 = cljs.core.not(inst_32738);
var state_32759__$1 = (function (){var statearr_32778 = state_32759;
(statearr_32778[(8)] = inst_32737__$1);

return statearr_32778;
})();
if(inst_32739){
var statearr_32779_34175 = state_32759__$1;
(statearr_32779_34175[(1)] = (15));

} else {
var statearr_32780_34176 = state_32759__$1;
(statearr_32780_34176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (16))){
var state_32759__$1 = state_32759;
var statearr_32781_34177 = state_32759__$1;
(statearr_32781_34177[(2)] = false);

(statearr_32781_34177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (10))){
var inst_32731 = (state_32759[(2)]);
var state_32759__$1 = state_32759;
var statearr_32782_34178 = state_32759__$1;
(statearr_32782_34178[(2)] = inst_32731);

(statearr_32782_34178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (18))){
var inst_32742 = (state_32759[(2)]);
var state_32759__$1 = state_32759;
var statearr_32783_34179 = state_32759__$1;
(statearr_32783_34179[(2)] = inst_32742);

(statearr_32783_34179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32760 === (8))){
var inst_32728 = cljs.core.async.close_BANG_(to);
var state_32759__$1 = state_32759;
var statearr_32784_34180 = state_32759__$1;
(statearr_32784_34180[(2)] = inst_32728);

(statearr_32784_34180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0 = (function (){
var statearr_32785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__);

(statearr_32785[(1)] = (1));

return statearr_32785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1 = (function (state_32759){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32759);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32786){if((e32786 instanceof Object)){
var ex__32397__auto__ = e32786;
var statearr_32787_34181 = state_32759;
(statearr_32787_34181[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34182 = state_32759;
state_32759 = G__34182;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__ = function(state_32759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1.call(this,state_32759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32788 = f__32484__auto__();
(statearr_32788[(6)] = c__32483__auto__);

return statearr_32788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));

return c__32483__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32790 = arguments.length;
switch (G__32790) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32792 = arguments.length;
switch (G__32792) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32794 = arguments.length;
switch (G__32794) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32483__auto___34195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32820){
var state_val_32821 = (state_32820[(1)]);
if((state_val_32821 === (7))){
var inst_32816 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32822_34199 = state_32820__$1;
(statearr_32822_34199[(2)] = inst_32816);

(statearr_32822_34199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (1))){
var state_32820__$1 = state_32820;
var statearr_32823_34200 = state_32820__$1;
(statearr_32823_34200[(2)] = null);

(statearr_32823_34200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (4))){
var inst_32797 = (state_32820[(7)]);
var inst_32797__$1 = (state_32820[(2)]);
var inst_32798 = (inst_32797__$1 == null);
var state_32820__$1 = (function (){var statearr_32824 = state_32820;
(statearr_32824[(7)] = inst_32797__$1);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32798)){
var statearr_32825_34204 = state_32820__$1;
(statearr_32825_34204[(1)] = (5));

} else {
var statearr_32826_34205 = state_32820__$1;
(statearr_32826_34205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (13))){
var state_32820__$1 = state_32820;
var statearr_32827_34206 = state_32820__$1;
(statearr_32827_34206[(2)] = null);

(statearr_32827_34206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (6))){
var inst_32797 = (state_32820[(7)]);
var inst_32803 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32797) : p.call(null,inst_32797));
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32803)){
var statearr_32828_34207 = state_32820__$1;
(statearr_32828_34207[(1)] = (9));

} else {
var statearr_32829_34208 = state_32820__$1;
(statearr_32829_34208[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (3))){
var inst_32818 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32820__$1,inst_32818);
} else {
if((state_val_32821 === (12))){
var state_32820__$1 = state_32820;
var statearr_32830_34209 = state_32820__$1;
(statearr_32830_34209[(2)] = null);

(statearr_32830_34209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (2))){
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32820__$1,(4),ch);
} else {
if((state_val_32821 === (11))){
var inst_32797 = (state_32820[(7)]);
var inst_32807 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32820__$1,(8),inst_32807,inst_32797);
} else {
if((state_val_32821 === (9))){
var state_32820__$1 = state_32820;
var statearr_32831_34210 = state_32820__$1;
(statearr_32831_34210[(2)] = tc);

(statearr_32831_34210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (5))){
var inst_32800 = cljs.core.async.close_BANG_(tc);
var inst_32801 = cljs.core.async.close_BANG_(fc);
var state_32820__$1 = (function (){var statearr_32832 = state_32820;
(statearr_32832[(8)] = inst_32800);

return statearr_32832;
})();
var statearr_32833_34211 = state_32820__$1;
(statearr_32833_34211[(2)] = inst_32801);

(statearr_32833_34211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (14))){
var inst_32814 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32834_34212 = state_32820__$1;
(statearr_32834_34212[(2)] = inst_32814);

(statearr_32834_34212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (10))){
var state_32820__$1 = state_32820;
var statearr_32835_34213 = state_32820__$1;
(statearr_32835_34213[(2)] = fc);

(statearr_32835_34213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (8))){
var inst_32809 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32809)){
var statearr_32836_34214 = state_32820__$1;
(statearr_32836_34214[(1)] = (12));

} else {
var statearr_32837_34215 = state_32820__$1;
(statearr_32837_34215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_32838 = [null,null,null,null,null,null,null,null,null];
(statearr_32838[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_32838[(1)] = (1));

return statearr_32838;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_32820){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32820);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32839){if((e32839 instanceof Object)){
var ex__32397__auto__ = e32839;
var statearr_32840_34216 = state_32820;
(statearr_32840_34216[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34217 = state_32820;
state_32820 = G__34217;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_32820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_32820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32841 = f__32484__auto__();
(statearr_32841[(6)] = c__32483__auto___34195);

return statearr_32841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (7))){
var inst_32858 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32864_34221 = state_32862__$1;
(statearr_32864_34221[(2)] = inst_32858);

(statearr_32864_34221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (1))){
var inst_32842 = init;
var state_32862__$1 = (function (){var statearr_32865 = state_32862;
(statearr_32865[(7)] = inst_32842);

return statearr_32865;
})();
var statearr_32866_34222 = state_32862__$1;
(statearr_32866_34222[(2)] = null);

(statearr_32866_34222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (4))){
var inst_32845 = (state_32862[(8)]);
var inst_32845__$1 = (state_32862[(2)]);
var inst_32846 = (inst_32845__$1 == null);
var state_32862__$1 = (function (){var statearr_32867 = state_32862;
(statearr_32867[(8)] = inst_32845__$1);

return statearr_32867;
})();
if(cljs.core.truth_(inst_32846)){
var statearr_32868_34230 = state_32862__$1;
(statearr_32868_34230[(1)] = (5));

} else {
var statearr_32869_34231 = state_32862__$1;
(statearr_32869_34231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (6))){
var inst_32849 = (state_32862[(9)]);
var inst_32842 = (state_32862[(7)]);
var inst_32845 = (state_32862[(8)]);
var inst_32849__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32842,inst_32845) : f.call(null,inst_32842,inst_32845));
var inst_32850 = cljs.core.reduced_QMARK_(inst_32849__$1);
var state_32862__$1 = (function (){var statearr_32870 = state_32862;
(statearr_32870[(9)] = inst_32849__$1);

return statearr_32870;
})();
if(inst_32850){
var statearr_32871_34232 = state_32862__$1;
(statearr_32871_34232[(1)] = (8));

} else {
var statearr_32872_34233 = state_32862__$1;
(statearr_32872_34233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (3))){
var inst_32860 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32862__$1,inst_32860);
} else {
if((state_val_32863 === (2))){
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32862__$1,(4),ch);
} else {
if((state_val_32863 === (9))){
var inst_32849 = (state_32862[(9)]);
var inst_32842 = inst_32849;
var state_32862__$1 = (function (){var statearr_32873 = state_32862;
(statearr_32873[(7)] = inst_32842);

return statearr_32873;
})();
var statearr_32874_34234 = state_32862__$1;
(statearr_32874_34234[(2)] = null);

(statearr_32874_34234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (5))){
var inst_32842 = (state_32862[(7)]);
var state_32862__$1 = state_32862;
var statearr_32875_34235 = state_32862__$1;
(statearr_32875_34235[(2)] = inst_32842);

(statearr_32875_34235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (10))){
var inst_32856 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32876_34236 = state_32862__$1;
(statearr_32876_34236[(2)] = inst_32856);

(statearr_32876_34236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (8))){
var inst_32849 = (state_32862[(9)]);
var inst_32852 = cljs.core.deref(inst_32849);
var state_32862__$1 = state_32862;
var statearr_32877_34237 = state_32862__$1;
(statearr_32877_34237[(2)] = inst_32852);

(statearr_32877_34237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32394__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32394__auto____0 = (function (){
var statearr_32878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32878[(0)] = cljs$core$async$reduce_$_state_machine__32394__auto__);

(statearr_32878[(1)] = (1));

return statearr_32878;
});
var cljs$core$async$reduce_$_state_machine__32394__auto____1 = (function (state_32862){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32862);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32879){if((e32879 instanceof Object)){
var ex__32397__auto__ = e32879;
var statearr_32880_34238 = state_32862;
(statearr_32880_34238[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_32862;
state_32862 = G__34242;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32394__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32394__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32394__auto____0;
cljs$core$async$reduce_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32394__auto____1;
return cljs$core$async$reduce_$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32881 = f__32484__auto__();
(statearr_32881[(6)] = c__32483__auto__);

return statearr_32881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));

return c__32483__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (1))){
var inst_32882 = cljs.core.async.reduce(f__$1,init,ch);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32887__$1,(2),inst_32882);
} else {
if((state_val_32888 === (2))){
var inst_32884 = (state_32887[(2)]);
var inst_32885 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32884) : f__$1.call(null,inst_32884));
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32887__$1,inst_32885);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32394__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32394__auto____0 = (function (){
var statearr_32889 = [null,null,null,null,null,null,null];
(statearr_32889[(0)] = cljs$core$async$transduce_$_state_machine__32394__auto__);

(statearr_32889[(1)] = (1));

return statearr_32889;
});
var cljs$core$async$transduce_$_state_machine__32394__auto____1 = (function (state_32887){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32887);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32890){if((e32890 instanceof Object)){
var ex__32397__auto__ = e32890;
var statearr_32891_34246 = state_32887;
(statearr_32891_34246[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34247 = state_32887;
state_32887 = G__34247;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32394__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32394__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32394__auto____0;
cljs$core$async$transduce_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32394__auto____1;
return cljs$core$async$transduce_$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32892 = f__32484__auto__();
(statearr_32892[(6)] = c__32483__auto__);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));

return c__32483__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32894 = arguments.length;
switch (G__32894) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_32919){
var state_val_32920 = (state_32919[(1)]);
if((state_val_32920 === (7))){
var inst_32901 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32921_34252 = state_32919__$1;
(statearr_32921_34252[(2)] = inst_32901);

(statearr_32921_34252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (1))){
var inst_32895 = cljs.core.seq(coll);
var inst_32896 = inst_32895;
var state_32919__$1 = (function (){var statearr_32922 = state_32919;
(statearr_32922[(7)] = inst_32896);

return statearr_32922;
})();
var statearr_32923_34253 = state_32919__$1;
(statearr_32923_34253[(2)] = null);

(statearr_32923_34253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (4))){
var inst_32896 = (state_32919[(7)]);
var inst_32899 = cljs.core.first(inst_32896);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32919__$1,(7),ch,inst_32899);
} else {
if((state_val_32920 === (13))){
var inst_32913 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32924_34254 = state_32919__$1;
(statearr_32924_34254[(2)] = inst_32913);

(statearr_32924_34254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (6))){
var inst_32904 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
if(cljs.core.truth_(inst_32904)){
var statearr_32925_34255 = state_32919__$1;
(statearr_32925_34255[(1)] = (8));

} else {
var statearr_32926_34256 = state_32919__$1;
(statearr_32926_34256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (3))){
var inst_32917 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32919__$1,inst_32917);
} else {
if((state_val_32920 === (12))){
var state_32919__$1 = state_32919;
var statearr_32927_34258 = state_32919__$1;
(statearr_32927_34258[(2)] = null);

(statearr_32927_34258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (2))){
var inst_32896 = (state_32919[(7)]);
var state_32919__$1 = state_32919;
if(cljs.core.truth_(inst_32896)){
var statearr_32928_34259 = state_32919__$1;
(statearr_32928_34259[(1)] = (4));

} else {
var statearr_32929_34260 = state_32919__$1;
(statearr_32929_34260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (11))){
var inst_32910 = cljs.core.async.close_BANG_(ch);
var state_32919__$1 = state_32919;
var statearr_32930_34261 = state_32919__$1;
(statearr_32930_34261[(2)] = inst_32910);

(statearr_32930_34261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (9))){
var state_32919__$1 = state_32919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32931_34262 = state_32919__$1;
(statearr_32931_34262[(1)] = (11));

} else {
var statearr_32932_34263 = state_32919__$1;
(statearr_32932_34263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (5))){
var inst_32896 = (state_32919[(7)]);
var state_32919__$1 = state_32919;
var statearr_32933_34264 = state_32919__$1;
(statearr_32933_34264[(2)] = inst_32896);

(statearr_32933_34264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (10))){
var inst_32915 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32934_34265 = state_32919__$1;
(statearr_32934_34265[(2)] = inst_32915);

(statearr_32934_34265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (8))){
var inst_32896 = (state_32919[(7)]);
var inst_32906 = cljs.core.next(inst_32896);
var inst_32896__$1 = inst_32906;
var state_32919__$1 = (function (){var statearr_32935 = state_32919;
(statearr_32935[(7)] = inst_32896__$1);

return statearr_32935;
})();
var statearr_32936_34266 = state_32919__$1;
(statearr_32936_34266[(2)] = null);

(statearr_32936_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_32937 = [null,null,null,null,null,null,null,null];
(statearr_32937[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_32937[(1)] = (1));

return statearr_32937;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_32919){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_32919);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e32938){if((e32938 instanceof Object)){
var ex__32397__auto__ = e32938;
var statearr_32939_34267 = state_32919;
(statearr_32939_34267[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34268 = state_32919;
state_32919 = G__34268;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_32919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_32919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_32940 = f__32484__auto__();
(statearr_32940[(6)] = c__32483__auto__);

return statearr_32940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));

return c__32483__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32941 = (function (ch,cs,meta32942){
this.ch = ch;
this.cs = cs;
this.meta32942 = meta32942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32943,meta32942__$1){
var self__ = this;
var _32943__$1 = this;
return (new cljs.core.async.t_cljs$core$async32941(self__.ch,self__.cs,meta32942__$1));
}));

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32943){
var self__ = this;
var _32943__$1 = this;
return self__.meta32942;
}));

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32941.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32942","meta32942",1875900576,null)], null);
}));

(cljs.core.async.t_cljs$core$async32941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32941");

(cljs.core.async.t_cljs$core$async32941.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32941.
 */
cljs.core.async.__GT_t_cljs$core$async32941 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32941(ch__$1,cs__$1,meta32942){
return (new cljs.core.async.t_cljs$core$async32941(ch__$1,cs__$1,meta32942));
});

}

return (new cljs.core.async.t_cljs$core$async32941(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32483__auto___34275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33076){
var state_val_33077 = (state_33076[(1)]);
if((state_val_33077 === (7))){
var inst_33072 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33078_34277 = state_33076__$1;
(statearr_33078_34277[(2)] = inst_33072);

(statearr_33078_34277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (20))){
var inst_32977 = (state_33076[(7)]);
var inst_32989 = cljs.core.first(inst_32977);
var inst_32990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32989,(0),null);
var inst_32991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32989,(1),null);
var state_33076__$1 = (function (){var statearr_33079 = state_33076;
(statearr_33079[(8)] = inst_32990);

return statearr_33079;
})();
if(cljs.core.truth_(inst_32991)){
var statearr_33080_34278 = state_33076__$1;
(statearr_33080_34278[(1)] = (22));

} else {
var statearr_33081_34280 = state_33076__$1;
(statearr_33081_34280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (27))){
var inst_33026 = (state_33076[(9)]);
var inst_33019 = (state_33076[(10)]);
var inst_33021 = (state_33076[(11)]);
var inst_32946 = (state_33076[(12)]);
var inst_33026__$1 = cljs.core._nth(inst_33019,inst_33021);
var inst_33027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33026__$1,inst_32946,done);
var state_33076__$1 = (function (){var statearr_33082 = state_33076;
(statearr_33082[(9)] = inst_33026__$1);

return statearr_33082;
})();
if(cljs.core.truth_(inst_33027)){
var statearr_33083_34282 = state_33076__$1;
(statearr_33083_34282[(1)] = (30));

} else {
var statearr_33084_34283 = state_33076__$1;
(statearr_33084_34283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (1))){
var state_33076__$1 = state_33076;
var statearr_33085_34284 = state_33076__$1;
(statearr_33085_34284[(2)] = null);

(statearr_33085_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (24))){
var inst_32977 = (state_33076[(7)]);
var inst_32996 = (state_33076[(2)]);
var inst_32997 = cljs.core.next(inst_32977);
var inst_32955 = inst_32997;
var inst_32956 = null;
var inst_32957 = (0);
var inst_32958 = (0);
var state_33076__$1 = (function (){var statearr_33086 = state_33076;
(statearr_33086[(13)] = inst_32957);

(statearr_33086[(14)] = inst_32958);

(statearr_33086[(15)] = inst_32996);

(statearr_33086[(16)] = inst_32955);

(statearr_33086[(17)] = inst_32956);

return statearr_33086;
})();
var statearr_33087_34285 = state_33076__$1;
(statearr_33087_34285[(2)] = null);

(statearr_33087_34285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (39))){
var state_33076__$1 = state_33076;
var statearr_33091_34286 = state_33076__$1;
(statearr_33091_34286[(2)] = null);

(statearr_33091_34286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (4))){
var inst_32946 = (state_33076[(12)]);
var inst_32946__$1 = (state_33076[(2)]);
var inst_32947 = (inst_32946__$1 == null);
var state_33076__$1 = (function (){var statearr_33092 = state_33076;
(statearr_33092[(12)] = inst_32946__$1);

return statearr_33092;
})();
if(cljs.core.truth_(inst_32947)){
var statearr_33093_34287 = state_33076__$1;
(statearr_33093_34287[(1)] = (5));

} else {
var statearr_33094_34288 = state_33076__$1;
(statearr_33094_34288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (15))){
var inst_32957 = (state_33076[(13)]);
var inst_32958 = (state_33076[(14)]);
var inst_32955 = (state_33076[(16)]);
var inst_32956 = (state_33076[(17)]);
var inst_32973 = (state_33076[(2)]);
var inst_32974 = (inst_32958 + (1));
var tmp33088 = inst_32957;
var tmp33089 = inst_32955;
var tmp33090 = inst_32956;
var inst_32955__$1 = tmp33089;
var inst_32956__$1 = tmp33090;
var inst_32957__$1 = tmp33088;
var inst_32958__$1 = inst_32974;
var state_33076__$1 = (function (){var statearr_33095 = state_33076;
(statearr_33095[(13)] = inst_32957__$1);

(statearr_33095[(18)] = inst_32973);

(statearr_33095[(14)] = inst_32958__$1);

(statearr_33095[(16)] = inst_32955__$1);

(statearr_33095[(17)] = inst_32956__$1);

return statearr_33095;
})();
var statearr_33096_34310 = state_33076__$1;
(statearr_33096_34310[(2)] = null);

(statearr_33096_34310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (21))){
var inst_33000 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33100_34311 = state_33076__$1;
(statearr_33100_34311[(2)] = inst_33000);

(statearr_33100_34311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (31))){
var inst_33026 = (state_33076[(9)]);
var inst_33030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33026);
var state_33076__$1 = state_33076;
var statearr_33101_34312 = state_33076__$1;
(statearr_33101_34312[(2)] = inst_33030);

(statearr_33101_34312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (32))){
var inst_33020 = (state_33076[(19)]);
var inst_33019 = (state_33076[(10)]);
var inst_33021 = (state_33076[(11)]);
var inst_33018 = (state_33076[(20)]);
var inst_33032 = (state_33076[(2)]);
var inst_33033 = (inst_33021 + (1));
var tmp33097 = inst_33020;
var tmp33098 = inst_33019;
var tmp33099 = inst_33018;
var inst_33018__$1 = tmp33099;
var inst_33019__$1 = tmp33098;
var inst_33020__$1 = tmp33097;
var inst_33021__$1 = inst_33033;
var state_33076__$1 = (function (){var statearr_33102 = state_33076;
(statearr_33102[(21)] = inst_33032);

(statearr_33102[(19)] = inst_33020__$1);

(statearr_33102[(10)] = inst_33019__$1);

(statearr_33102[(11)] = inst_33021__$1);

(statearr_33102[(20)] = inst_33018__$1);

return statearr_33102;
})();
var statearr_33103_34313 = state_33076__$1;
(statearr_33103_34313[(2)] = null);

(statearr_33103_34313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (40))){
var inst_33045 = (state_33076[(22)]);
var inst_33049 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33045);
var state_33076__$1 = state_33076;
var statearr_33104_34314 = state_33076__$1;
(statearr_33104_34314[(2)] = inst_33049);

(statearr_33104_34314[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (33))){
var inst_33036 = (state_33076[(23)]);
var inst_33038 = cljs.core.chunked_seq_QMARK_(inst_33036);
var state_33076__$1 = state_33076;
if(inst_33038){
var statearr_33105_34315 = state_33076__$1;
(statearr_33105_34315[(1)] = (36));

} else {
var statearr_33106_34316 = state_33076__$1;
(statearr_33106_34316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (13))){
var inst_32967 = (state_33076[(24)]);
var inst_32970 = cljs.core.async.close_BANG_(inst_32967);
var state_33076__$1 = state_33076;
var statearr_33107_34317 = state_33076__$1;
(statearr_33107_34317[(2)] = inst_32970);

(statearr_33107_34317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (22))){
var inst_32990 = (state_33076[(8)]);
var inst_32993 = cljs.core.async.close_BANG_(inst_32990);
var state_33076__$1 = state_33076;
var statearr_33108_34318 = state_33076__$1;
(statearr_33108_34318[(2)] = inst_32993);

(statearr_33108_34318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (36))){
var inst_33036 = (state_33076[(23)]);
var inst_33040 = cljs.core.chunk_first(inst_33036);
var inst_33041 = cljs.core.chunk_rest(inst_33036);
var inst_33042 = cljs.core.count(inst_33040);
var inst_33018 = inst_33041;
var inst_33019 = inst_33040;
var inst_33020 = inst_33042;
var inst_33021 = (0);
var state_33076__$1 = (function (){var statearr_33109 = state_33076;
(statearr_33109[(19)] = inst_33020);

(statearr_33109[(10)] = inst_33019);

(statearr_33109[(11)] = inst_33021);

(statearr_33109[(20)] = inst_33018);

return statearr_33109;
})();
var statearr_33110_34331 = state_33076__$1;
(statearr_33110_34331[(2)] = null);

(statearr_33110_34331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (41))){
var inst_33036 = (state_33076[(23)]);
var inst_33051 = (state_33076[(2)]);
var inst_33052 = cljs.core.next(inst_33036);
var inst_33018 = inst_33052;
var inst_33019 = null;
var inst_33020 = (0);
var inst_33021 = (0);
var state_33076__$1 = (function (){var statearr_33111 = state_33076;
(statearr_33111[(25)] = inst_33051);

(statearr_33111[(19)] = inst_33020);

(statearr_33111[(10)] = inst_33019);

(statearr_33111[(11)] = inst_33021);

(statearr_33111[(20)] = inst_33018);

return statearr_33111;
})();
var statearr_33112_34332 = state_33076__$1;
(statearr_33112_34332[(2)] = null);

(statearr_33112_34332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (43))){
var state_33076__$1 = state_33076;
var statearr_33113_34333 = state_33076__$1;
(statearr_33113_34333[(2)] = null);

(statearr_33113_34333[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (29))){
var inst_33060 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33114_34334 = state_33076__$1;
(statearr_33114_34334[(2)] = inst_33060);

(statearr_33114_34334[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (44))){
var inst_33069 = (state_33076[(2)]);
var state_33076__$1 = (function (){var statearr_33115 = state_33076;
(statearr_33115[(26)] = inst_33069);

return statearr_33115;
})();
var statearr_33116_34335 = state_33076__$1;
(statearr_33116_34335[(2)] = null);

(statearr_33116_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (6))){
var inst_33010 = (state_33076[(27)]);
var inst_33009 = cljs.core.deref(cs);
var inst_33010__$1 = cljs.core.keys(inst_33009);
var inst_33011 = cljs.core.count(inst_33010__$1);
var inst_33012 = cljs.core.reset_BANG_(dctr,inst_33011);
var inst_33017 = cljs.core.seq(inst_33010__$1);
var inst_33018 = inst_33017;
var inst_33019 = null;
var inst_33020 = (0);
var inst_33021 = (0);
var state_33076__$1 = (function (){var statearr_33117 = state_33076;
(statearr_33117[(27)] = inst_33010__$1);

(statearr_33117[(19)] = inst_33020);

(statearr_33117[(10)] = inst_33019);

(statearr_33117[(11)] = inst_33021);

(statearr_33117[(20)] = inst_33018);

(statearr_33117[(28)] = inst_33012);

return statearr_33117;
})();
var statearr_33118_34336 = state_33076__$1;
(statearr_33118_34336[(2)] = null);

(statearr_33118_34336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (28))){
var inst_33036 = (state_33076[(23)]);
var inst_33018 = (state_33076[(20)]);
var inst_33036__$1 = cljs.core.seq(inst_33018);
var state_33076__$1 = (function (){var statearr_33119 = state_33076;
(statearr_33119[(23)] = inst_33036__$1);

return statearr_33119;
})();
if(inst_33036__$1){
var statearr_33120_34343 = state_33076__$1;
(statearr_33120_34343[(1)] = (33));

} else {
var statearr_33121_34344 = state_33076__$1;
(statearr_33121_34344[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (25))){
var inst_33020 = (state_33076[(19)]);
var inst_33021 = (state_33076[(11)]);
var inst_33023 = (inst_33021 < inst_33020);
var inst_33024 = inst_33023;
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33024)){
var statearr_33122_34345 = state_33076__$1;
(statearr_33122_34345[(1)] = (27));

} else {
var statearr_33123_34346 = state_33076__$1;
(statearr_33123_34346[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (34))){
var state_33076__$1 = state_33076;
var statearr_33124_34347 = state_33076__$1;
(statearr_33124_34347[(2)] = null);

(statearr_33124_34347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (17))){
var state_33076__$1 = state_33076;
var statearr_33125_34348 = state_33076__$1;
(statearr_33125_34348[(2)] = null);

(statearr_33125_34348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (3))){
var inst_33074 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33076__$1,inst_33074);
} else {
if((state_val_33077 === (12))){
var inst_33005 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33126_34349 = state_33076__$1;
(statearr_33126_34349[(2)] = inst_33005);

(statearr_33126_34349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (2))){
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33076__$1,(4),ch);
} else {
if((state_val_33077 === (23))){
var state_33076__$1 = state_33076;
var statearr_33127_34350 = state_33076__$1;
(statearr_33127_34350[(2)] = null);

(statearr_33127_34350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (35))){
var inst_33058 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33128_34351 = state_33076__$1;
(statearr_33128_34351[(2)] = inst_33058);

(statearr_33128_34351[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (19))){
var inst_32977 = (state_33076[(7)]);
var inst_32981 = cljs.core.chunk_first(inst_32977);
var inst_32982 = cljs.core.chunk_rest(inst_32977);
var inst_32983 = cljs.core.count(inst_32981);
var inst_32955 = inst_32982;
var inst_32956 = inst_32981;
var inst_32957 = inst_32983;
var inst_32958 = (0);
var state_33076__$1 = (function (){var statearr_33129 = state_33076;
(statearr_33129[(13)] = inst_32957);

(statearr_33129[(14)] = inst_32958);

(statearr_33129[(16)] = inst_32955);

(statearr_33129[(17)] = inst_32956);

return statearr_33129;
})();
var statearr_33130_34352 = state_33076__$1;
(statearr_33130_34352[(2)] = null);

(statearr_33130_34352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (11))){
var inst_32977 = (state_33076[(7)]);
var inst_32955 = (state_33076[(16)]);
var inst_32977__$1 = cljs.core.seq(inst_32955);
var state_33076__$1 = (function (){var statearr_33131 = state_33076;
(statearr_33131[(7)] = inst_32977__$1);

return statearr_33131;
})();
if(inst_32977__$1){
var statearr_33132_34353 = state_33076__$1;
(statearr_33132_34353[(1)] = (16));

} else {
var statearr_33133_34354 = state_33076__$1;
(statearr_33133_34354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (9))){
var inst_33007 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33134_34355 = state_33076__$1;
(statearr_33134_34355[(2)] = inst_33007);

(statearr_33134_34355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (5))){
var inst_32953 = cljs.core.deref(cs);
var inst_32954 = cljs.core.seq(inst_32953);
var inst_32955 = inst_32954;
var inst_32956 = null;
var inst_32957 = (0);
var inst_32958 = (0);
var state_33076__$1 = (function (){var statearr_33135 = state_33076;
(statearr_33135[(13)] = inst_32957);

(statearr_33135[(14)] = inst_32958);

(statearr_33135[(16)] = inst_32955);

(statearr_33135[(17)] = inst_32956);

return statearr_33135;
})();
var statearr_33136_34356 = state_33076__$1;
(statearr_33136_34356[(2)] = null);

(statearr_33136_34356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (14))){
var state_33076__$1 = state_33076;
var statearr_33137_34357 = state_33076__$1;
(statearr_33137_34357[(2)] = null);

(statearr_33137_34357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (45))){
var inst_33066 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33138_34359 = state_33076__$1;
(statearr_33138_34359[(2)] = inst_33066);

(statearr_33138_34359[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (26))){
var inst_33010 = (state_33076[(27)]);
var inst_33062 = (state_33076[(2)]);
var inst_33063 = cljs.core.seq(inst_33010);
var state_33076__$1 = (function (){var statearr_33139 = state_33076;
(statearr_33139[(29)] = inst_33062);

return statearr_33139;
})();
if(inst_33063){
var statearr_33140_34364 = state_33076__$1;
(statearr_33140_34364[(1)] = (42));

} else {
var statearr_33141_34365 = state_33076__$1;
(statearr_33141_34365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (16))){
var inst_32977 = (state_33076[(7)]);
var inst_32979 = cljs.core.chunked_seq_QMARK_(inst_32977);
var state_33076__$1 = state_33076;
if(inst_32979){
var statearr_33142_34366 = state_33076__$1;
(statearr_33142_34366[(1)] = (19));

} else {
var statearr_33143_34367 = state_33076__$1;
(statearr_33143_34367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (38))){
var inst_33055 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33144_34368 = state_33076__$1;
(statearr_33144_34368[(2)] = inst_33055);

(statearr_33144_34368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (30))){
var state_33076__$1 = state_33076;
var statearr_33145_34369 = state_33076__$1;
(statearr_33145_34369[(2)] = null);

(statearr_33145_34369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (10))){
var inst_32958 = (state_33076[(14)]);
var inst_32956 = (state_33076[(17)]);
var inst_32966 = cljs.core._nth(inst_32956,inst_32958);
var inst_32967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32966,(0),null);
var inst_32968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32966,(1),null);
var state_33076__$1 = (function (){var statearr_33146 = state_33076;
(statearr_33146[(24)] = inst_32967);

return statearr_33146;
})();
if(cljs.core.truth_(inst_32968)){
var statearr_33147_34370 = state_33076__$1;
(statearr_33147_34370[(1)] = (13));

} else {
var statearr_33148_34371 = state_33076__$1;
(statearr_33148_34371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (18))){
var inst_33003 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33149_34372 = state_33076__$1;
(statearr_33149_34372[(2)] = inst_33003);

(statearr_33149_34372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (42))){
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33076__$1,(45),dchan);
} else {
if((state_val_33077 === (37))){
var inst_33036 = (state_33076[(23)]);
var inst_32946 = (state_33076[(12)]);
var inst_33045 = (state_33076[(22)]);
var inst_33045__$1 = cljs.core.first(inst_33036);
var inst_33046 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33045__$1,inst_32946,done);
var state_33076__$1 = (function (){var statearr_33150 = state_33076;
(statearr_33150[(22)] = inst_33045__$1);

return statearr_33150;
})();
if(cljs.core.truth_(inst_33046)){
var statearr_33151_34373 = state_33076__$1;
(statearr_33151_34373[(1)] = (39));

} else {
var statearr_33152_34374 = state_33076__$1;
(statearr_33152_34374[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (8))){
var inst_32957 = (state_33076[(13)]);
var inst_32958 = (state_33076[(14)]);
var inst_32960 = (inst_32958 < inst_32957);
var inst_32961 = inst_32960;
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_32961)){
var statearr_33153_34375 = state_33076__$1;
(statearr_33153_34375[(1)] = (10));

} else {
var statearr_33154_34376 = state_33076__$1;
(statearr_33154_34376[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32394__auto__ = null;
var cljs$core$async$mult_$_state_machine__32394__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$mult_$_state_machine__32394__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$mult_$_state_machine__32394__auto____1 = (function (state_33076){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33076);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33156){if((e33156 instanceof Object)){
var ex__32397__auto__ = e33156;
var statearr_33157_34379 = state_33076;
(statearr_33157_34379[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34380 = state_33076;
state_33076 = G__34380;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32394__auto__ = function(state_33076){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32394__auto____1.call(this,state_33076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32394__auto____0;
cljs$core$async$mult_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32394__auto____1;
return cljs$core$async$mult_$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33158 = f__32484__auto__();
(statearr_33158[(6)] = c__32483__auto___34275);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33160 = arguments.length;
switch (G__33160) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34384 = arguments.length;
var i__4790__auto___34386 = (0);
while(true){
if((i__4790__auto___34386 < len__4789__auto___34384)){
args__4795__auto__.push((arguments[i__4790__auto___34386]));

var G__34387 = (i__4790__auto___34386 + (1));
i__4790__auto___34386 = G__34387;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33165){
var map__33166 = p__33165;
var map__33166__$1 = (((((!((map__33166 == null))))?(((((map__33166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33166):map__33166);
var opts = map__33166__$1;
var statearr_33168_34389 = state;
(statearr_33168_34389[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33169_34390 = state;
(statearr_33169_34390[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33170_34391 = state;
(statearr_33170_34391[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33161){
var G__33162 = cljs.core.first(seq33161);
var seq33161__$1 = cljs.core.next(seq33161);
var G__33163 = cljs.core.first(seq33161__$1);
var seq33161__$2 = cljs.core.next(seq33161__$1);
var G__33164 = cljs.core.first(seq33161__$2);
var seq33161__$3 = cljs.core.next(seq33161__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33162,G__33163,G__33164,seq33161__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33171 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33172){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33172 = meta33172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33173,meta33172__$1){
var self__ = this;
var _33173__$1 = this;
return (new cljs.core.async.t_cljs$core$async33171(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33172__$1));
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33173){
var self__ = this;
var _33173__$1 = this;
return self__.meta33172;
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33172","meta33172",776028568,null)], null);
}));

(cljs.core.async.t_cljs$core$async33171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33171");

(cljs.core.async.t_cljs$core$async33171.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33171.
 */
cljs.core.async.__GT_t_cljs$core$async33171 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33172){
return (new cljs.core.async.t_cljs$core$async33171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33172));
});

}

return (new cljs.core.async.t_cljs$core$async33171(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32483__auto___34397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33275){
var state_val_33276 = (state_33275[(1)]);
if((state_val_33276 === (7))){
var inst_33190 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33277_34398 = state_33275__$1;
(statearr_33277_34398[(2)] = inst_33190);

(statearr_33277_34398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (20))){
var inst_33202 = (state_33275[(7)]);
var state_33275__$1 = state_33275;
var statearr_33278_34399 = state_33275__$1;
(statearr_33278_34399[(2)] = inst_33202);

(statearr_33278_34399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (27))){
var state_33275__$1 = state_33275;
var statearr_33279_34400 = state_33275__$1;
(statearr_33279_34400[(2)] = null);

(statearr_33279_34400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (1))){
var inst_33177 = (state_33275[(8)]);
var inst_33177__$1 = calc_state();
var inst_33179 = (inst_33177__$1 == null);
var inst_33180 = cljs.core.not(inst_33179);
var state_33275__$1 = (function (){var statearr_33280 = state_33275;
(statearr_33280[(8)] = inst_33177__$1);

return statearr_33280;
})();
if(inst_33180){
var statearr_33281_34401 = state_33275__$1;
(statearr_33281_34401[(1)] = (2));

} else {
var statearr_33282_34402 = state_33275__$1;
(statearr_33282_34402[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (24))){
var inst_33249 = (state_33275[(9)]);
var inst_33226 = (state_33275[(10)]);
var inst_33235 = (state_33275[(11)]);
var inst_33249__$1 = (inst_33226.cljs$core$IFn$_invoke$arity$1 ? inst_33226.cljs$core$IFn$_invoke$arity$1(inst_33235) : inst_33226.call(null,inst_33235));
var state_33275__$1 = (function (){var statearr_33283 = state_33275;
(statearr_33283[(9)] = inst_33249__$1);

return statearr_33283;
})();
if(cljs.core.truth_(inst_33249__$1)){
var statearr_33284_34403 = state_33275__$1;
(statearr_33284_34403[(1)] = (29));

} else {
var statearr_33285_34404 = state_33275__$1;
(statearr_33285_34404[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (4))){
var inst_33193 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33193)){
var statearr_33286_34405 = state_33275__$1;
(statearr_33286_34405[(1)] = (8));

} else {
var statearr_33287_34406 = state_33275__$1;
(statearr_33287_34406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (15))){
var inst_33220 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33220)){
var statearr_33288_34407 = state_33275__$1;
(statearr_33288_34407[(1)] = (19));

} else {
var statearr_33289_34408 = state_33275__$1;
(statearr_33289_34408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (21))){
var inst_33225 = (state_33275[(12)]);
var inst_33225__$1 = (state_33275[(2)]);
var inst_33226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33225__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33225__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33225__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33275__$1 = (function (){var statearr_33290 = state_33275;
(statearr_33290[(12)] = inst_33225__$1);

(statearr_33290[(13)] = inst_33227);

(statearr_33290[(10)] = inst_33226);

return statearr_33290;
})();
return cljs.core.async.ioc_alts_BANG_(state_33275__$1,(22),inst_33228);
} else {
if((state_val_33276 === (31))){
var inst_33257 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33257)){
var statearr_33291_34409 = state_33275__$1;
(statearr_33291_34409[(1)] = (32));

} else {
var statearr_33292_34414 = state_33275__$1;
(statearr_33292_34414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (32))){
var inst_33234 = (state_33275[(14)]);
var state_33275__$1 = state_33275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33275__$1,(35),out,inst_33234);
} else {
if((state_val_33276 === (33))){
var inst_33225 = (state_33275[(12)]);
var inst_33202 = inst_33225;
var state_33275__$1 = (function (){var statearr_33293 = state_33275;
(statearr_33293[(7)] = inst_33202);

return statearr_33293;
})();
var statearr_33294_34418 = state_33275__$1;
(statearr_33294_34418[(2)] = null);

(statearr_33294_34418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (13))){
var inst_33202 = (state_33275[(7)]);
var inst_33209 = inst_33202.cljs$lang$protocol_mask$partition0$;
var inst_33210 = (inst_33209 & (64));
var inst_33211 = inst_33202.cljs$core$ISeq$;
var inst_33212 = (cljs.core.PROTOCOL_SENTINEL === inst_33211);
var inst_33213 = ((inst_33210) || (inst_33212));
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33213)){
var statearr_33295_34419 = state_33275__$1;
(statearr_33295_34419[(1)] = (16));

} else {
var statearr_33296_34420 = state_33275__$1;
(statearr_33296_34420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (22))){
var inst_33235 = (state_33275[(11)]);
var inst_33234 = (state_33275[(14)]);
var inst_33233 = (state_33275[(2)]);
var inst_33234__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33233,(0),null);
var inst_33235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33233,(1),null);
var inst_33236 = (inst_33234__$1 == null);
var inst_33237 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33235__$1,change);
var inst_33238 = ((inst_33236) || (inst_33237));
var state_33275__$1 = (function (){var statearr_33297 = state_33275;
(statearr_33297[(11)] = inst_33235__$1);

(statearr_33297[(14)] = inst_33234__$1);

return statearr_33297;
})();
if(cljs.core.truth_(inst_33238)){
var statearr_33298_34427 = state_33275__$1;
(statearr_33298_34427[(1)] = (23));

} else {
var statearr_33299_34428 = state_33275__$1;
(statearr_33299_34428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (36))){
var inst_33225 = (state_33275[(12)]);
var inst_33202 = inst_33225;
var state_33275__$1 = (function (){var statearr_33300 = state_33275;
(statearr_33300[(7)] = inst_33202);

return statearr_33300;
})();
var statearr_33301_34429 = state_33275__$1;
(statearr_33301_34429[(2)] = null);

(statearr_33301_34429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (29))){
var inst_33249 = (state_33275[(9)]);
var state_33275__$1 = state_33275;
var statearr_33302_34430 = state_33275__$1;
(statearr_33302_34430[(2)] = inst_33249);

(statearr_33302_34430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (6))){
var state_33275__$1 = state_33275;
var statearr_33303_34434 = state_33275__$1;
(statearr_33303_34434[(2)] = false);

(statearr_33303_34434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (28))){
var inst_33245 = (state_33275[(2)]);
var inst_33246 = calc_state();
var inst_33202 = inst_33246;
var state_33275__$1 = (function (){var statearr_33304 = state_33275;
(statearr_33304[(7)] = inst_33202);

(statearr_33304[(15)] = inst_33245);

return statearr_33304;
})();
var statearr_33305_34436 = state_33275__$1;
(statearr_33305_34436[(2)] = null);

(statearr_33305_34436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (25))){
var inst_33271 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33306_34440 = state_33275__$1;
(statearr_33306_34440[(2)] = inst_33271);

(statearr_33306_34440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (34))){
var inst_33269 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33307_34441 = state_33275__$1;
(statearr_33307_34441[(2)] = inst_33269);

(statearr_33307_34441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (17))){
var state_33275__$1 = state_33275;
var statearr_33308_34442 = state_33275__$1;
(statearr_33308_34442[(2)] = false);

(statearr_33308_34442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (3))){
var state_33275__$1 = state_33275;
var statearr_33309_34443 = state_33275__$1;
(statearr_33309_34443[(2)] = false);

(statearr_33309_34443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (12))){
var inst_33273 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33275__$1,inst_33273);
} else {
if((state_val_33276 === (2))){
var inst_33177 = (state_33275[(8)]);
var inst_33182 = inst_33177.cljs$lang$protocol_mask$partition0$;
var inst_33183 = (inst_33182 & (64));
var inst_33184 = inst_33177.cljs$core$ISeq$;
var inst_33185 = (cljs.core.PROTOCOL_SENTINEL === inst_33184);
var inst_33186 = ((inst_33183) || (inst_33185));
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33186)){
var statearr_33310_34444 = state_33275__$1;
(statearr_33310_34444[(1)] = (5));

} else {
var statearr_33311_34445 = state_33275__$1;
(statearr_33311_34445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (23))){
var inst_33234 = (state_33275[(14)]);
var inst_33240 = (inst_33234 == null);
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33240)){
var statearr_33312_34446 = state_33275__$1;
(statearr_33312_34446[(1)] = (26));

} else {
var statearr_33313_34447 = state_33275__$1;
(statearr_33313_34447[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (35))){
var inst_33260 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
if(cljs.core.truth_(inst_33260)){
var statearr_33314_34448 = state_33275__$1;
(statearr_33314_34448[(1)] = (36));

} else {
var statearr_33315_34449 = state_33275__$1;
(statearr_33315_34449[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (19))){
var inst_33202 = (state_33275[(7)]);
var inst_33222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33202);
var state_33275__$1 = state_33275;
var statearr_33316_34451 = state_33275__$1;
(statearr_33316_34451[(2)] = inst_33222);

(statearr_33316_34451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (11))){
var inst_33202 = (state_33275[(7)]);
var inst_33206 = (inst_33202 == null);
var inst_33207 = cljs.core.not(inst_33206);
var state_33275__$1 = state_33275;
if(inst_33207){
var statearr_33317_34453 = state_33275__$1;
(statearr_33317_34453[(1)] = (13));

} else {
var statearr_33318_34454 = state_33275__$1;
(statearr_33318_34454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (9))){
var inst_33177 = (state_33275[(8)]);
var state_33275__$1 = state_33275;
var statearr_33319_34455 = state_33275__$1;
(statearr_33319_34455[(2)] = inst_33177);

(statearr_33319_34455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (5))){
var state_33275__$1 = state_33275;
var statearr_33320_34456 = state_33275__$1;
(statearr_33320_34456[(2)] = true);

(statearr_33320_34456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (14))){
var state_33275__$1 = state_33275;
var statearr_33321_34457 = state_33275__$1;
(statearr_33321_34457[(2)] = false);

(statearr_33321_34457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (26))){
var inst_33235 = (state_33275[(11)]);
var inst_33242 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33235);
var state_33275__$1 = state_33275;
var statearr_33322_34458 = state_33275__$1;
(statearr_33322_34458[(2)] = inst_33242);

(statearr_33322_34458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (16))){
var state_33275__$1 = state_33275;
var statearr_33323_34459 = state_33275__$1;
(statearr_33323_34459[(2)] = true);

(statearr_33323_34459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (38))){
var inst_33265 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33324_34460 = state_33275__$1;
(statearr_33324_34460[(2)] = inst_33265);

(statearr_33324_34460[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (30))){
var inst_33227 = (state_33275[(13)]);
var inst_33226 = (state_33275[(10)]);
var inst_33235 = (state_33275[(11)]);
var inst_33252 = cljs.core.empty_QMARK_(inst_33226);
var inst_33253 = (inst_33227.cljs$core$IFn$_invoke$arity$1 ? inst_33227.cljs$core$IFn$_invoke$arity$1(inst_33235) : inst_33227.call(null,inst_33235));
var inst_33254 = cljs.core.not(inst_33253);
var inst_33255 = ((inst_33252) && (inst_33254));
var state_33275__$1 = state_33275;
var statearr_33325_34461 = state_33275__$1;
(statearr_33325_34461[(2)] = inst_33255);

(statearr_33325_34461[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (10))){
var inst_33177 = (state_33275[(8)]);
var inst_33198 = (state_33275[(2)]);
var inst_33199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33198,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33198,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33198,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33202 = inst_33177;
var state_33275__$1 = (function (){var statearr_33326 = state_33275;
(statearr_33326[(16)] = inst_33201);

(statearr_33326[(7)] = inst_33202);

(statearr_33326[(17)] = inst_33199);

(statearr_33326[(18)] = inst_33200);

return statearr_33326;
})();
var statearr_33327_34462 = state_33275__$1;
(statearr_33327_34462[(2)] = null);

(statearr_33327_34462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (18))){
var inst_33217 = (state_33275[(2)]);
var state_33275__$1 = state_33275;
var statearr_33328_34463 = state_33275__$1;
(statearr_33328_34463[(2)] = inst_33217);

(statearr_33328_34463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (37))){
var state_33275__$1 = state_33275;
var statearr_33329_34464 = state_33275__$1;
(statearr_33329_34464[(2)] = null);

(statearr_33329_34464[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33276 === (8))){
var inst_33177 = (state_33275[(8)]);
var inst_33195 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33177);
var state_33275__$1 = state_33275;
var statearr_33330_34465 = state_33275__$1;
(statearr_33330_34465[(2)] = inst_33195);

(statearr_33330_34465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32394__auto__ = null;
var cljs$core$async$mix_$_state_machine__32394__auto____0 = (function (){
var statearr_33331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33331[(0)] = cljs$core$async$mix_$_state_machine__32394__auto__);

(statearr_33331[(1)] = (1));

return statearr_33331;
});
var cljs$core$async$mix_$_state_machine__32394__auto____1 = (function (state_33275){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33275);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33332){if((e33332 instanceof Object)){
var ex__32397__auto__ = e33332;
var statearr_33333_34470 = state_33275;
(statearr_33333_34470[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34471 = state_33275;
state_33275 = G__34471;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32394__auto__ = function(state_33275){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32394__auto____1.call(this,state_33275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32394__auto____0;
cljs$core$async$mix_$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32394__auto____1;
return cljs$core$async$mix_$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33334 = f__32484__auto__();
(statearr_33334[(6)] = c__32483__auto___34397);

return statearr_33334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33336 = arguments.length;
switch (G__33336) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33339 = arguments.length;
switch (G__33339) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33337_SHARP_){
if(cljs.core.truth_((p1__33337_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33337_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33337_SHARP_.call(null,topic)))){
return p1__33337_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33337_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33340 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33341){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33341 = meta33341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33342,meta33341__$1){
var self__ = this;
var _33342__$1 = this;
return (new cljs.core.async.t_cljs$core$async33340(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33341__$1));
}));

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33342){
var self__ = this;
var _33342__$1 = this;
return self__.meta33341;
}));

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33341","meta33341",657171118,null)], null);
}));

(cljs.core.async.t_cljs$core$async33340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33340");

(cljs.core.async.t_cljs$core$async33340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33340.
 */
cljs.core.async.__GT_t_cljs$core$async33340 = (function cljs$core$async$__GT_t_cljs$core$async33340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33341){
return (new cljs.core.async.t_cljs$core$async33340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33341));
});

}

return (new cljs.core.async.t_cljs$core$async33340(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32483__auto___34484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33414){
var state_val_33415 = (state_33414[(1)]);
if((state_val_33415 === (7))){
var inst_33410 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33416_34485 = state_33414__$1;
(statearr_33416_34485[(2)] = inst_33410);

(statearr_33416_34485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (20))){
var state_33414__$1 = state_33414;
var statearr_33417_34486 = state_33414__$1;
(statearr_33417_34486[(2)] = null);

(statearr_33417_34486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (1))){
var state_33414__$1 = state_33414;
var statearr_33418_34487 = state_33414__$1;
(statearr_33418_34487[(2)] = null);

(statearr_33418_34487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (24))){
var inst_33393 = (state_33414[(7)]);
var inst_33402 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33393);
var state_33414__$1 = state_33414;
var statearr_33419_34488 = state_33414__$1;
(statearr_33419_34488[(2)] = inst_33402);

(statearr_33419_34488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (4))){
var inst_33345 = (state_33414[(8)]);
var inst_33345__$1 = (state_33414[(2)]);
var inst_33346 = (inst_33345__$1 == null);
var state_33414__$1 = (function (){var statearr_33420 = state_33414;
(statearr_33420[(8)] = inst_33345__$1);

return statearr_33420;
})();
if(cljs.core.truth_(inst_33346)){
var statearr_33421_34489 = state_33414__$1;
(statearr_33421_34489[(1)] = (5));

} else {
var statearr_33422_34490 = state_33414__$1;
(statearr_33422_34490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (15))){
var inst_33387 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33423_34491 = state_33414__$1;
(statearr_33423_34491[(2)] = inst_33387);

(statearr_33423_34491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (21))){
var inst_33407 = (state_33414[(2)]);
var state_33414__$1 = (function (){var statearr_33424 = state_33414;
(statearr_33424[(9)] = inst_33407);

return statearr_33424;
})();
var statearr_33425_34492 = state_33414__$1;
(statearr_33425_34492[(2)] = null);

(statearr_33425_34492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (13))){
var inst_33369 = (state_33414[(10)]);
var inst_33371 = cljs.core.chunked_seq_QMARK_(inst_33369);
var state_33414__$1 = state_33414;
if(inst_33371){
var statearr_33426_34493 = state_33414__$1;
(statearr_33426_34493[(1)] = (16));

} else {
var statearr_33427_34497 = state_33414__$1;
(statearr_33427_34497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (22))){
var inst_33399 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33399)){
var statearr_33428_34498 = state_33414__$1;
(statearr_33428_34498[(1)] = (23));

} else {
var statearr_33429_34499 = state_33414__$1;
(statearr_33429_34499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (6))){
var inst_33395 = (state_33414[(11)]);
var inst_33345 = (state_33414[(8)]);
var inst_33393 = (state_33414[(7)]);
var inst_33393__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33345) : topic_fn.call(null,inst_33345));
var inst_33394 = cljs.core.deref(mults);
var inst_33395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33394,inst_33393__$1);
var state_33414__$1 = (function (){var statearr_33430 = state_33414;
(statearr_33430[(11)] = inst_33395__$1);

(statearr_33430[(7)] = inst_33393__$1);

return statearr_33430;
})();
if(cljs.core.truth_(inst_33395__$1)){
var statearr_33431_34500 = state_33414__$1;
(statearr_33431_34500[(1)] = (19));

} else {
var statearr_33432_34501 = state_33414__$1;
(statearr_33432_34501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (25))){
var inst_33404 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33433_34502 = state_33414__$1;
(statearr_33433_34502[(2)] = inst_33404);

(statearr_33433_34502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (17))){
var inst_33369 = (state_33414[(10)]);
var inst_33378 = cljs.core.first(inst_33369);
var inst_33379 = cljs.core.async.muxch_STAR_(inst_33378);
var inst_33380 = cljs.core.async.close_BANG_(inst_33379);
var inst_33381 = cljs.core.next(inst_33369);
var inst_33355 = inst_33381;
var inst_33356 = null;
var inst_33357 = (0);
var inst_33358 = (0);
var state_33414__$1 = (function (){var statearr_33434 = state_33414;
(statearr_33434[(12)] = inst_33356);

(statearr_33434[(13)] = inst_33358);

(statearr_33434[(14)] = inst_33357);

(statearr_33434[(15)] = inst_33355);

(statearr_33434[(16)] = inst_33380);

return statearr_33434;
})();
var statearr_33435_34503 = state_33414__$1;
(statearr_33435_34503[(2)] = null);

(statearr_33435_34503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (3))){
var inst_33412 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33414__$1,inst_33412);
} else {
if((state_val_33415 === (12))){
var inst_33389 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33436_34504 = state_33414__$1;
(statearr_33436_34504[(2)] = inst_33389);

(statearr_33436_34504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (2))){
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33414__$1,(4),ch);
} else {
if((state_val_33415 === (23))){
var state_33414__$1 = state_33414;
var statearr_33437_34505 = state_33414__$1;
(statearr_33437_34505[(2)] = null);

(statearr_33437_34505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (19))){
var inst_33395 = (state_33414[(11)]);
var inst_33345 = (state_33414[(8)]);
var inst_33397 = cljs.core.async.muxch_STAR_(inst_33395);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33414__$1,(22),inst_33397,inst_33345);
} else {
if((state_val_33415 === (11))){
var inst_33355 = (state_33414[(15)]);
var inst_33369 = (state_33414[(10)]);
var inst_33369__$1 = cljs.core.seq(inst_33355);
var state_33414__$1 = (function (){var statearr_33438 = state_33414;
(statearr_33438[(10)] = inst_33369__$1);

return statearr_33438;
})();
if(inst_33369__$1){
var statearr_33439_34507 = state_33414__$1;
(statearr_33439_34507[(1)] = (13));

} else {
var statearr_33440_34508 = state_33414__$1;
(statearr_33440_34508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (9))){
var inst_33391 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33441_34509 = state_33414__$1;
(statearr_33441_34509[(2)] = inst_33391);

(statearr_33441_34509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (5))){
var inst_33352 = cljs.core.deref(mults);
var inst_33353 = cljs.core.vals(inst_33352);
var inst_33354 = cljs.core.seq(inst_33353);
var inst_33355 = inst_33354;
var inst_33356 = null;
var inst_33357 = (0);
var inst_33358 = (0);
var state_33414__$1 = (function (){var statearr_33442 = state_33414;
(statearr_33442[(12)] = inst_33356);

(statearr_33442[(13)] = inst_33358);

(statearr_33442[(14)] = inst_33357);

(statearr_33442[(15)] = inst_33355);

return statearr_33442;
})();
var statearr_33443_34510 = state_33414__$1;
(statearr_33443_34510[(2)] = null);

(statearr_33443_34510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (14))){
var state_33414__$1 = state_33414;
var statearr_33447_34511 = state_33414__$1;
(statearr_33447_34511[(2)] = null);

(statearr_33447_34511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (16))){
var inst_33369 = (state_33414[(10)]);
var inst_33373 = cljs.core.chunk_first(inst_33369);
var inst_33374 = cljs.core.chunk_rest(inst_33369);
var inst_33375 = cljs.core.count(inst_33373);
var inst_33355 = inst_33374;
var inst_33356 = inst_33373;
var inst_33357 = inst_33375;
var inst_33358 = (0);
var state_33414__$1 = (function (){var statearr_33448 = state_33414;
(statearr_33448[(12)] = inst_33356);

(statearr_33448[(13)] = inst_33358);

(statearr_33448[(14)] = inst_33357);

(statearr_33448[(15)] = inst_33355);

return statearr_33448;
})();
var statearr_33449_34512 = state_33414__$1;
(statearr_33449_34512[(2)] = null);

(statearr_33449_34512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (10))){
var inst_33356 = (state_33414[(12)]);
var inst_33358 = (state_33414[(13)]);
var inst_33357 = (state_33414[(14)]);
var inst_33355 = (state_33414[(15)]);
var inst_33363 = cljs.core._nth(inst_33356,inst_33358);
var inst_33364 = cljs.core.async.muxch_STAR_(inst_33363);
var inst_33365 = cljs.core.async.close_BANG_(inst_33364);
var inst_33366 = (inst_33358 + (1));
var tmp33444 = inst_33356;
var tmp33445 = inst_33357;
var tmp33446 = inst_33355;
var inst_33355__$1 = tmp33446;
var inst_33356__$1 = tmp33444;
var inst_33357__$1 = tmp33445;
var inst_33358__$1 = inst_33366;
var state_33414__$1 = (function (){var statearr_33450 = state_33414;
(statearr_33450[(12)] = inst_33356__$1);

(statearr_33450[(13)] = inst_33358__$1);

(statearr_33450[(14)] = inst_33357__$1);

(statearr_33450[(15)] = inst_33355__$1);

(statearr_33450[(17)] = inst_33365);

return statearr_33450;
})();
var statearr_33451_34518 = state_33414__$1;
(statearr_33451_34518[(2)] = null);

(statearr_33451_34518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (18))){
var inst_33384 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33452_34519 = state_33414__$1;
(statearr_33452_34519[(2)] = inst_33384);

(statearr_33452_34519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (8))){
var inst_33358 = (state_33414[(13)]);
var inst_33357 = (state_33414[(14)]);
var inst_33360 = (inst_33358 < inst_33357);
var inst_33361 = inst_33360;
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33361)){
var statearr_33453_34520 = state_33414__$1;
(statearr_33453_34520[(1)] = (10));

} else {
var statearr_33454_34521 = state_33414__$1;
(statearr_33454_34521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33455[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33455[(1)] = (1));

return statearr_33455;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33414){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33414);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33456){if((e33456 instanceof Object)){
var ex__32397__auto__ = e33456;
var statearr_33457_34523 = state_33414;
(statearr_33457_34523[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34524 = state_33414;
state_33414 = G__34524;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33458 = f__32484__auto__();
(statearr_33458[(6)] = c__32483__auto___34484);

return statearr_33458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33462 = arguments.length;
switch (G__33462) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33464 = arguments.length;
switch (G__33464) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32483__auto___34532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33503){
var state_val_33504 = (state_33503[(1)]);
if((state_val_33504 === (7))){
var state_33503__$1 = state_33503;
var statearr_33505_34533 = state_33503__$1;
(statearr_33505_34533[(2)] = null);

(statearr_33505_34533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (1))){
var state_33503__$1 = state_33503;
var statearr_33506_34534 = state_33503__$1;
(statearr_33506_34534[(2)] = null);

(statearr_33506_34534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (4))){
var inst_33467 = (state_33503[(7)]);
var inst_33469 = (inst_33467 < cnt);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33469)){
var statearr_33507_34535 = state_33503__$1;
(statearr_33507_34535[(1)] = (6));

} else {
var statearr_33508_34536 = state_33503__$1;
(statearr_33508_34536[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (15))){
var inst_33499 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33509_34537 = state_33503__$1;
(statearr_33509_34537[(2)] = inst_33499);

(statearr_33509_34537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (13))){
var inst_33492 = cljs.core.async.close_BANG_(out);
var state_33503__$1 = state_33503;
var statearr_33510_34538 = state_33503__$1;
(statearr_33510_34538[(2)] = inst_33492);

(statearr_33510_34538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (6))){
var state_33503__$1 = state_33503;
var statearr_33511_34539 = state_33503__$1;
(statearr_33511_34539[(2)] = null);

(statearr_33511_34539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (3))){
var inst_33501 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33503__$1,inst_33501);
} else {
if((state_val_33504 === (12))){
var inst_33489 = (state_33503[(8)]);
var inst_33489__$1 = (state_33503[(2)]);
var inst_33490 = cljs.core.some(cljs.core.nil_QMARK_,inst_33489__$1);
var state_33503__$1 = (function (){var statearr_33512 = state_33503;
(statearr_33512[(8)] = inst_33489__$1);

return statearr_33512;
})();
if(cljs.core.truth_(inst_33490)){
var statearr_33513_34540 = state_33503__$1;
(statearr_33513_34540[(1)] = (13));

} else {
var statearr_33514_34541 = state_33503__$1;
(statearr_33514_34541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (2))){
var inst_33466 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33467 = (0);
var state_33503__$1 = (function (){var statearr_33515 = state_33503;
(statearr_33515[(9)] = inst_33466);

(statearr_33515[(7)] = inst_33467);

return statearr_33515;
})();
var statearr_33516_34542 = state_33503__$1;
(statearr_33516_34542[(2)] = null);

(statearr_33516_34542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (11))){
var inst_33467 = (state_33503[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33503,(10),Object,null,(9));
var inst_33476 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33467) : chs__$1.call(null,inst_33467));
var inst_33477 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33467) : done.call(null,inst_33467));
var inst_33478 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33476,inst_33477);
var state_33503__$1 = state_33503;
var statearr_33517_34543 = state_33503__$1;
(statearr_33517_34543[(2)] = inst_33478);


cljs.core.async.impl.ioc_helpers.process_exception(state_33503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (9))){
var inst_33467 = (state_33503[(7)]);
var inst_33480 = (state_33503[(2)]);
var inst_33481 = (inst_33467 + (1));
var inst_33467__$1 = inst_33481;
var state_33503__$1 = (function (){var statearr_33518 = state_33503;
(statearr_33518[(10)] = inst_33480);

(statearr_33518[(7)] = inst_33467__$1);

return statearr_33518;
})();
var statearr_33519_34544 = state_33503__$1;
(statearr_33519_34544[(2)] = null);

(statearr_33519_34544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (5))){
var inst_33487 = (state_33503[(2)]);
var state_33503__$1 = (function (){var statearr_33520 = state_33503;
(statearr_33520[(11)] = inst_33487);

return statearr_33520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33503__$1,(12),dchan);
} else {
if((state_val_33504 === (14))){
var inst_33489 = (state_33503[(8)]);
var inst_33494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33489);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33503__$1,(16),out,inst_33494);
} else {
if((state_val_33504 === (16))){
var inst_33496 = (state_33503[(2)]);
var state_33503__$1 = (function (){var statearr_33521 = state_33503;
(statearr_33521[(12)] = inst_33496);

return statearr_33521;
})();
var statearr_33522_34545 = state_33503__$1;
(statearr_33522_34545[(2)] = null);

(statearr_33522_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (10))){
var inst_33471 = (state_33503[(2)]);
var inst_33472 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33503__$1 = (function (){var statearr_33523 = state_33503;
(statearr_33523[(13)] = inst_33471);

return statearr_33523;
})();
var statearr_33524_34546 = state_33503__$1;
(statearr_33524_34546[(2)] = inst_33472);


cljs.core.async.impl.ioc_helpers.process_exception(state_33503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (8))){
var inst_33485 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33525_34547 = state_33503__$1;
(statearr_33525_34547[(2)] = inst_33485);

(statearr_33525_34547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33526[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33526[(1)] = (1));

return statearr_33526;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33503){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33503);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33527){if((e33527 instanceof Object)){
var ex__32397__auto__ = e33527;
var statearr_33528_34551 = state_33503;
(statearr_33528_34551[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34552 = state_33503;
state_33503 = G__34552;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33529 = f__32484__auto__();
(statearr_33529[(6)] = c__32483__auto___34532);

return statearr_33529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33532 = arguments.length;
switch (G__33532) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32483__auto___34554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33564){
var state_val_33565 = (state_33564[(1)]);
if((state_val_33565 === (7))){
var inst_33543 = (state_33564[(7)]);
var inst_33544 = (state_33564[(8)]);
var inst_33543__$1 = (state_33564[(2)]);
var inst_33544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33543__$1,(0),null);
var inst_33545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33543__$1,(1),null);
var inst_33546 = (inst_33544__$1 == null);
var state_33564__$1 = (function (){var statearr_33566 = state_33564;
(statearr_33566[(9)] = inst_33545);

(statearr_33566[(7)] = inst_33543__$1);

(statearr_33566[(8)] = inst_33544__$1);

return statearr_33566;
})();
if(cljs.core.truth_(inst_33546)){
var statearr_33567_34555 = state_33564__$1;
(statearr_33567_34555[(1)] = (8));

} else {
var statearr_33568_34556 = state_33564__$1;
(statearr_33568_34556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (1))){
var inst_33533 = cljs.core.vec(chs);
var inst_33534 = inst_33533;
var state_33564__$1 = (function (){var statearr_33569 = state_33564;
(statearr_33569[(10)] = inst_33534);

return statearr_33569;
})();
var statearr_33570_34557 = state_33564__$1;
(statearr_33570_34557[(2)] = null);

(statearr_33570_34557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (4))){
var inst_33534 = (state_33564[(10)]);
var state_33564__$1 = state_33564;
return cljs.core.async.ioc_alts_BANG_(state_33564__$1,(7),inst_33534);
} else {
if((state_val_33565 === (6))){
var inst_33560 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33571_34558 = state_33564__$1;
(statearr_33571_34558[(2)] = inst_33560);

(statearr_33571_34558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (3))){
var inst_33562 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33564__$1,inst_33562);
} else {
if((state_val_33565 === (2))){
var inst_33534 = (state_33564[(10)]);
var inst_33536 = cljs.core.count(inst_33534);
var inst_33537 = (inst_33536 > (0));
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33537)){
var statearr_33573_34560 = state_33564__$1;
(statearr_33573_34560[(1)] = (4));

} else {
var statearr_33574_34561 = state_33564__$1;
(statearr_33574_34561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (11))){
var inst_33534 = (state_33564[(10)]);
var inst_33553 = (state_33564[(2)]);
var tmp33572 = inst_33534;
var inst_33534__$1 = tmp33572;
var state_33564__$1 = (function (){var statearr_33575 = state_33564;
(statearr_33575[(10)] = inst_33534__$1);

(statearr_33575[(11)] = inst_33553);

return statearr_33575;
})();
var statearr_33576_34562 = state_33564__$1;
(statearr_33576_34562[(2)] = null);

(statearr_33576_34562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (9))){
var inst_33544 = (state_33564[(8)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33564__$1,(11),out,inst_33544);
} else {
if((state_val_33565 === (5))){
var inst_33558 = cljs.core.async.close_BANG_(out);
var state_33564__$1 = state_33564;
var statearr_33577_34563 = state_33564__$1;
(statearr_33577_34563[(2)] = inst_33558);

(statearr_33577_34563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (10))){
var inst_33556 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33578_34564 = state_33564__$1;
(statearr_33578_34564[(2)] = inst_33556);

(statearr_33578_34564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (8))){
var inst_33545 = (state_33564[(9)]);
var inst_33543 = (state_33564[(7)]);
var inst_33544 = (state_33564[(8)]);
var inst_33534 = (state_33564[(10)]);
var inst_33548 = (function (){var cs = inst_33534;
var vec__33539 = inst_33543;
var v = inst_33544;
var c = inst_33545;
return (function (p1__33530_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33530_SHARP_);
});
})();
var inst_33549 = cljs.core.filterv(inst_33548,inst_33534);
var inst_33534__$1 = inst_33549;
var state_33564__$1 = (function (){var statearr_33579 = state_33564;
(statearr_33579[(10)] = inst_33534__$1);

return statearr_33579;
})();
var statearr_33580_34565 = state_33564__$1;
(statearr_33580_34565[(2)] = null);

(statearr_33580_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33581[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33581[(1)] = (1));

return statearr_33581;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33564){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33564);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33582){if((e33582 instanceof Object)){
var ex__32397__auto__ = e33582;
var statearr_33583_34566 = state_33564;
(statearr_33583_34566[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34567 = state_33564;
state_33564 = G__34567;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33584 = f__32484__auto__();
(statearr_33584[(6)] = c__32483__auto___34554);

return statearr_33584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33586 = arguments.length;
switch (G__33586) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32483__auto___34569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33610){
var state_val_33611 = (state_33610[(1)]);
if((state_val_33611 === (7))){
var inst_33592 = (state_33610[(7)]);
var inst_33592__$1 = (state_33610[(2)]);
var inst_33593 = (inst_33592__$1 == null);
var inst_33594 = cljs.core.not(inst_33593);
var state_33610__$1 = (function (){var statearr_33612 = state_33610;
(statearr_33612[(7)] = inst_33592__$1);

return statearr_33612;
})();
if(inst_33594){
var statearr_33613_34570 = state_33610__$1;
(statearr_33613_34570[(1)] = (8));

} else {
var statearr_33614_34571 = state_33610__$1;
(statearr_33614_34571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (1))){
var inst_33587 = (0);
var state_33610__$1 = (function (){var statearr_33615 = state_33610;
(statearr_33615[(8)] = inst_33587);

return statearr_33615;
})();
var statearr_33616_34576 = state_33610__$1;
(statearr_33616_34576[(2)] = null);

(statearr_33616_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (4))){
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33610__$1,(7),ch);
} else {
if((state_val_33611 === (6))){
var inst_33605 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33617_34577 = state_33610__$1;
(statearr_33617_34577[(2)] = inst_33605);

(statearr_33617_34577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (3))){
var inst_33607 = (state_33610[(2)]);
var inst_33608 = cljs.core.async.close_BANG_(out);
var state_33610__$1 = (function (){var statearr_33618 = state_33610;
(statearr_33618[(9)] = inst_33607);

return statearr_33618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33610__$1,inst_33608);
} else {
if((state_val_33611 === (2))){
var inst_33587 = (state_33610[(8)]);
var inst_33589 = (inst_33587 < n);
var state_33610__$1 = state_33610;
if(cljs.core.truth_(inst_33589)){
var statearr_33619_34582 = state_33610__$1;
(statearr_33619_34582[(1)] = (4));

} else {
var statearr_33620_34583 = state_33610__$1;
(statearr_33620_34583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (11))){
var inst_33587 = (state_33610[(8)]);
var inst_33597 = (state_33610[(2)]);
var inst_33598 = (inst_33587 + (1));
var inst_33587__$1 = inst_33598;
var state_33610__$1 = (function (){var statearr_33621 = state_33610;
(statearr_33621[(8)] = inst_33587__$1);

(statearr_33621[(10)] = inst_33597);

return statearr_33621;
})();
var statearr_33622_34584 = state_33610__$1;
(statearr_33622_34584[(2)] = null);

(statearr_33622_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (9))){
var state_33610__$1 = state_33610;
var statearr_33623_34585 = state_33610__$1;
(statearr_33623_34585[(2)] = null);

(statearr_33623_34585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (5))){
var state_33610__$1 = state_33610;
var statearr_33624_34587 = state_33610__$1;
(statearr_33624_34587[(2)] = null);

(statearr_33624_34587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (10))){
var inst_33602 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33625_34589 = state_33610__$1;
(statearr_33625_34589[(2)] = inst_33602);

(statearr_33625_34589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (8))){
var inst_33592 = (state_33610[(7)]);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33610__$1,(11),out,inst_33592);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33626[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33626[(1)] = (1));

return statearr_33626;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33610){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33610);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33627){if((e33627 instanceof Object)){
var ex__32397__auto__ = e33627;
var statearr_33628_34590 = state_33610;
(statearr_33628_34590[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34591 = state_33610;
state_33610 = G__34591;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33629 = f__32484__auto__();
(statearr_33629[(6)] = c__32483__auto___34569);

return statearr_33629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33631 = (function (f,ch,meta33632){
this.f = f;
this.ch = ch;
this.meta33632 = meta33632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33633,meta33632__$1){
var self__ = this;
var _33633__$1 = this;
return (new cljs.core.async.t_cljs$core$async33631(self__.f,self__.ch,meta33632__$1));
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33633){
var self__ = this;
var _33633__$1 = this;
return self__.meta33632;
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33634 = (function (f,ch,meta33632,_,fn1,meta33635){
this.f = f;
this.ch = ch;
this.meta33632 = meta33632;
this._ = _;
this.fn1 = fn1;
this.meta33635 = meta33635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33636,meta33635__$1){
var self__ = this;
var _33636__$1 = this;
return (new cljs.core.async.t_cljs$core$async33634(self__.f,self__.ch,self__.meta33632,self__._,self__.fn1,meta33635__$1));
}));

(cljs.core.async.t_cljs$core$async33634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33636){
var self__ = this;
var _33636__$1 = this;
return self__.meta33635;
}));

(cljs.core.async.t_cljs$core$async33634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33630_SHARP_){
var G__33637 = (((p1__33630_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33630_SHARP_) : self__.f.call(null,p1__33630_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33637) : f1.call(null,G__33637));
});
}));

(cljs.core.async.t_cljs$core$async33634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33632","meta33632",-1362224375,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33631","cljs.core.async/t_cljs$core$async33631",-1027555064,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33635","meta33635",1873265949,null)], null);
}));

(cljs.core.async.t_cljs$core$async33634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33634");

(cljs.core.async.t_cljs$core$async33634.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33634.
 */
cljs.core.async.__GT_t_cljs$core$async33634 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33634(f__$1,ch__$1,meta33632__$1,___$2,fn1__$1,meta33635){
return (new cljs.core.async.t_cljs$core$async33634(f__$1,ch__$1,meta33632__$1,___$2,fn1__$1,meta33635));
});

}

return (new cljs.core.async.t_cljs$core$async33634(self__.f,self__.ch,self__.meta33632,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33638 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33638) : self__.f.call(null,G__33638));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33632","meta33632",-1362224375,null)], null);
}));

(cljs.core.async.t_cljs$core$async33631.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33631");

(cljs.core.async.t_cljs$core$async33631.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33631");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33631.
 */
cljs.core.async.__GT_t_cljs$core$async33631 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33631(f__$1,ch__$1,meta33632){
return (new cljs.core.async.t_cljs$core$async33631(f__$1,ch__$1,meta33632));
});

}

return (new cljs.core.async.t_cljs$core$async33631(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33639 = (function (f,ch,meta33640){
this.f = f;
this.ch = ch;
this.meta33640 = meta33640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33641,meta33640__$1){
var self__ = this;
var _33641__$1 = this;
return (new cljs.core.async.t_cljs$core$async33639(self__.f,self__.ch,meta33640__$1));
}));

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33641){
var self__ = this;
var _33641__$1 = this;
return self__.meta33640;
}));

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33640","meta33640",-1367641448,null)], null);
}));

(cljs.core.async.t_cljs$core$async33639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33639");

(cljs.core.async.t_cljs$core$async33639.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33639.
 */
cljs.core.async.__GT_t_cljs$core$async33639 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33639(f__$1,ch__$1,meta33640){
return (new cljs.core.async.t_cljs$core$async33639(f__$1,ch__$1,meta33640));
});

}

return (new cljs.core.async.t_cljs$core$async33639(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33642 = (function (p,ch,meta33643){
this.p = p;
this.ch = ch;
this.meta33643 = meta33643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33644,meta33643__$1){
var self__ = this;
var _33644__$1 = this;
return (new cljs.core.async.t_cljs$core$async33642(self__.p,self__.ch,meta33643__$1));
}));

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33644){
var self__ = this;
var _33644__$1 = this;
return self__.meta33643;
}));

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33643","meta33643",1402163517,null)], null);
}));

(cljs.core.async.t_cljs$core$async33642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33642");

(cljs.core.async.t_cljs$core$async33642.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33642.
 */
cljs.core.async.__GT_t_cljs$core$async33642 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33642(p__$1,ch__$1,meta33643){
return (new cljs.core.async.t_cljs$core$async33642(p__$1,ch__$1,meta33643));
});

}

return (new cljs.core.async.t_cljs$core$async33642(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33646 = arguments.length;
switch (G__33646) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32483__auto___34596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33667){
var state_val_33668 = (state_33667[(1)]);
if((state_val_33668 === (7))){
var inst_33663 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33669_34597 = state_33667__$1;
(statearr_33669_34597[(2)] = inst_33663);

(statearr_33669_34597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (1))){
var state_33667__$1 = state_33667;
var statearr_33670_34602 = state_33667__$1;
(statearr_33670_34602[(2)] = null);

(statearr_33670_34602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (4))){
var inst_33649 = (state_33667[(7)]);
var inst_33649__$1 = (state_33667[(2)]);
var inst_33650 = (inst_33649__$1 == null);
var state_33667__$1 = (function (){var statearr_33671 = state_33667;
(statearr_33671[(7)] = inst_33649__$1);

return statearr_33671;
})();
if(cljs.core.truth_(inst_33650)){
var statearr_33672_34603 = state_33667__$1;
(statearr_33672_34603[(1)] = (5));

} else {
var statearr_33673_34607 = state_33667__$1;
(statearr_33673_34607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (6))){
var inst_33649 = (state_33667[(7)]);
var inst_33654 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33649) : p.call(null,inst_33649));
var state_33667__$1 = state_33667;
if(cljs.core.truth_(inst_33654)){
var statearr_33674_34608 = state_33667__$1;
(statearr_33674_34608[(1)] = (8));

} else {
var statearr_33675_34609 = state_33667__$1;
(statearr_33675_34609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (3))){
var inst_33665 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33667__$1,inst_33665);
} else {
if((state_val_33668 === (2))){
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33667__$1,(4),ch);
} else {
if((state_val_33668 === (11))){
var inst_33657 = (state_33667[(2)]);
var state_33667__$1 = state_33667;
var statearr_33676_34610 = state_33667__$1;
(statearr_33676_34610[(2)] = inst_33657);

(statearr_33676_34610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (9))){
var state_33667__$1 = state_33667;
var statearr_33677_34611 = state_33667__$1;
(statearr_33677_34611[(2)] = null);

(statearr_33677_34611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (5))){
var inst_33652 = cljs.core.async.close_BANG_(out);
var state_33667__$1 = state_33667;
var statearr_33678_34612 = state_33667__$1;
(statearr_33678_34612[(2)] = inst_33652);

(statearr_33678_34612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (10))){
var inst_33660 = (state_33667[(2)]);
var state_33667__$1 = (function (){var statearr_33679 = state_33667;
(statearr_33679[(8)] = inst_33660);

return statearr_33679;
})();
var statearr_33680_34613 = state_33667__$1;
(statearr_33680_34613[(2)] = null);

(statearr_33680_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33668 === (8))){
var inst_33649 = (state_33667[(7)]);
var state_33667__$1 = state_33667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33667__$1,(11),out,inst_33649);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33681 = [null,null,null,null,null,null,null,null,null];
(statearr_33681[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33681[(1)] = (1));

return statearr_33681;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33667){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33667);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33682){if((e33682 instanceof Object)){
var ex__32397__auto__ = e33682;
var statearr_33683_34620 = state_33667;
(statearr_33683_34620[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34621 = state_33667;
state_33667 = G__34621;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33684 = f__32484__auto__();
(statearr_33684[(6)] = c__32483__auto___34596);

return statearr_33684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33686 = arguments.length;
switch (G__33686) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33748){
var state_val_33749 = (state_33748[(1)]);
if((state_val_33749 === (7))){
var inst_33744 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33750_34626 = state_33748__$1;
(statearr_33750_34626[(2)] = inst_33744);

(statearr_33750_34626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (20))){
var inst_33714 = (state_33748[(7)]);
var inst_33725 = (state_33748[(2)]);
var inst_33726 = cljs.core.next(inst_33714);
var inst_33700 = inst_33726;
var inst_33701 = null;
var inst_33702 = (0);
var inst_33703 = (0);
var state_33748__$1 = (function (){var statearr_33751 = state_33748;
(statearr_33751[(8)] = inst_33725);

(statearr_33751[(9)] = inst_33700);

(statearr_33751[(10)] = inst_33701);

(statearr_33751[(11)] = inst_33702);

(statearr_33751[(12)] = inst_33703);

return statearr_33751;
})();
var statearr_33752_34628 = state_33748__$1;
(statearr_33752_34628[(2)] = null);

(statearr_33752_34628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (1))){
var state_33748__$1 = state_33748;
var statearr_33753_34629 = state_33748__$1;
(statearr_33753_34629[(2)] = null);

(statearr_33753_34629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (4))){
var inst_33689 = (state_33748[(13)]);
var inst_33689__$1 = (state_33748[(2)]);
var inst_33690 = (inst_33689__$1 == null);
var state_33748__$1 = (function (){var statearr_33754 = state_33748;
(statearr_33754[(13)] = inst_33689__$1);

return statearr_33754;
})();
if(cljs.core.truth_(inst_33690)){
var statearr_33755_34639 = state_33748__$1;
(statearr_33755_34639[(1)] = (5));

} else {
var statearr_33756_34640 = state_33748__$1;
(statearr_33756_34640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (15))){
var state_33748__$1 = state_33748;
var statearr_33760_34647 = state_33748__$1;
(statearr_33760_34647[(2)] = null);

(statearr_33760_34647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (21))){
var state_33748__$1 = state_33748;
var statearr_33761_34648 = state_33748__$1;
(statearr_33761_34648[(2)] = null);

(statearr_33761_34648[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (13))){
var inst_33700 = (state_33748[(9)]);
var inst_33701 = (state_33748[(10)]);
var inst_33702 = (state_33748[(11)]);
var inst_33703 = (state_33748[(12)]);
var inst_33710 = (state_33748[(2)]);
var inst_33711 = (inst_33703 + (1));
var tmp33757 = inst_33700;
var tmp33758 = inst_33701;
var tmp33759 = inst_33702;
var inst_33700__$1 = tmp33757;
var inst_33701__$1 = tmp33758;
var inst_33702__$1 = tmp33759;
var inst_33703__$1 = inst_33711;
var state_33748__$1 = (function (){var statearr_33762 = state_33748;
(statearr_33762[(9)] = inst_33700__$1);

(statearr_33762[(14)] = inst_33710);

(statearr_33762[(10)] = inst_33701__$1);

(statearr_33762[(11)] = inst_33702__$1);

(statearr_33762[(12)] = inst_33703__$1);

return statearr_33762;
})();
var statearr_33763_34649 = state_33748__$1;
(statearr_33763_34649[(2)] = null);

(statearr_33763_34649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (22))){
var state_33748__$1 = state_33748;
var statearr_33764_34650 = state_33748__$1;
(statearr_33764_34650[(2)] = null);

(statearr_33764_34650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (6))){
var inst_33689 = (state_33748[(13)]);
var inst_33698 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33689) : f.call(null,inst_33689));
var inst_33699 = cljs.core.seq(inst_33698);
var inst_33700 = inst_33699;
var inst_33701 = null;
var inst_33702 = (0);
var inst_33703 = (0);
var state_33748__$1 = (function (){var statearr_33765 = state_33748;
(statearr_33765[(9)] = inst_33700);

(statearr_33765[(10)] = inst_33701);

(statearr_33765[(11)] = inst_33702);

(statearr_33765[(12)] = inst_33703);

return statearr_33765;
})();
var statearr_33766_34651 = state_33748__$1;
(statearr_33766_34651[(2)] = null);

(statearr_33766_34651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (17))){
var inst_33714 = (state_33748[(7)]);
var inst_33718 = cljs.core.chunk_first(inst_33714);
var inst_33719 = cljs.core.chunk_rest(inst_33714);
var inst_33720 = cljs.core.count(inst_33718);
var inst_33700 = inst_33719;
var inst_33701 = inst_33718;
var inst_33702 = inst_33720;
var inst_33703 = (0);
var state_33748__$1 = (function (){var statearr_33767 = state_33748;
(statearr_33767[(9)] = inst_33700);

(statearr_33767[(10)] = inst_33701);

(statearr_33767[(11)] = inst_33702);

(statearr_33767[(12)] = inst_33703);

return statearr_33767;
})();
var statearr_33768_34652 = state_33748__$1;
(statearr_33768_34652[(2)] = null);

(statearr_33768_34652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (3))){
var inst_33746 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33748__$1,inst_33746);
} else {
if((state_val_33749 === (12))){
var inst_33734 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33769_34659 = state_33748__$1;
(statearr_33769_34659[(2)] = inst_33734);

(statearr_33769_34659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (2))){
var state_33748__$1 = state_33748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33748__$1,(4),in$);
} else {
if((state_val_33749 === (23))){
var inst_33742 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33770_34660 = state_33748__$1;
(statearr_33770_34660[(2)] = inst_33742);

(statearr_33770_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (19))){
var inst_33729 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33771_34661 = state_33748__$1;
(statearr_33771_34661[(2)] = inst_33729);

(statearr_33771_34661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (11))){
var inst_33700 = (state_33748[(9)]);
var inst_33714 = (state_33748[(7)]);
var inst_33714__$1 = cljs.core.seq(inst_33700);
var state_33748__$1 = (function (){var statearr_33772 = state_33748;
(statearr_33772[(7)] = inst_33714__$1);

return statearr_33772;
})();
if(inst_33714__$1){
var statearr_33773_34662 = state_33748__$1;
(statearr_33773_34662[(1)] = (14));

} else {
var statearr_33774_34663 = state_33748__$1;
(statearr_33774_34663[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (9))){
var inst_33736 = (state_33748[(2)]);
var inst_33737 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33748__$1 = (function (){var statearr_33775 = state_33748;
(statearr_33775[(15)] = inst_33736);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33737)){
var statearr_33776_34670 = state_33748__$1;
(statearr_33776_34670[(1)] = (21));

} else {
var statearr_33777_34671 = state_33748__$1;
(statearr_33777_34671[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (5))){
var inst_33692 = cljs.core.async.close_BANG_(out);
var state_33748__$1 = state_33748;
var statearr_33778_34672 = state_33748__$1;
(statearr_33778_34672[(2)] = inst_33692);

(statearr_33778_34672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (14))){
var inst_33714 = (state_33748[(7)]);
var inst_33716 = cljs.core.chunked_seq_QMARK_(inst_33714);
var state_33748__$1 = state_33748;
if(inst_33716){
var statearr_33779_34673 = state_33748__$1;
(statearr_33779_34673[(1)] = (17));

} else {
var statearr_33780_34674 = state_33748__$1;
(statearr_33780_34674[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (16))){
var inst_33732 = (state_33748[(2)]);
var state_33748__$1 = state_33748;
var statearr_33781_34675 = state_33748__$1;
(statearr_33781_34675[(2)] = inst_33732);

(statearr_33781_34675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33749 === (10))){
var inst_33701 = (state_33748[(10)]);
var inst_33703 = (state_33748[(12)]);
var inst_33708 = cljs.core._nth(inst_33701,inst_33703);
var state_33748__$1 = state_33748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33748__$1,(13),out,inst_33708);
} else {
if((state_val_33749 === (18))){
var inst_33714 = (state_33748[(7)]);
var inst_33723 = cljs.core.first(inst_33714);
var state_33748__$1 = state_33748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33748__$1,(20),out,inst_33723);
} else {
if((state_val_33749 === (8))){
var inst_33702 = (state_33748[(11)]);
var inst_33703 = (state_33748[(12)]);
var inst_33705 = (inst_33703 < inst_33702);
var inst_33706 = inst_33705;
var state_33748__$1 = state_33748;
if(cljs.core.truth_(inst_33706)){
var statearr_33782_34676 = state_33748__$1;
(statearr_33782_34676[(1)] = (10));

} else {
var statearr_33783_34677 = state_33748__$1;
(statearr_33783_34677[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32394__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32394__auto____0 = (function (){
var statearr_33784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33784[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32394__auto__);

(statearr_33784[(1)] = (1));

return statearr_33784;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32394__auto____1 = (function (state_33748){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33748);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33785){if((e33785 instanceof Object)){
var ex__32397__auto__ = e33785;
var statearr_33786_34684 = state_33748;
(statearr_33786_34684[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34685 = state_33748;
state_33748 = G__34685;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32394__auto__ = function(state_33748){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32394__auto____1.call(this,state_33748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32394__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32394__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33787 = f__32484__auto__();
(statearr_33787[(6)] = c__32483__auto__);

return statearr_33787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));

return c__32483__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33789 = arguments.length;
switch (G__33789) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33791 = arguments.length;
switch (G__33791) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33793 = arguments.length;
switch (G__33793) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32483__auto___34691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33817){
var state_val_33818 = (state_33817[(1)]);
if((state_val_33818 === (7))){
var inst_33812 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33819_34692 = state_33817__$1;
(statearr_33819_34692[(2)] = inst_33812);

(statearr_33819_34692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (1))){
var inst_33794 = null;
var state_33817__$1 = (function (){var statearr_33820 = state_33817;
(statearr_33820[(7)] = inst_33794);

return statearr_33820;
})();
var statearr_33821_34693 = state_33817__$1;
(statearr_33821_34693[(2)] = null);

(statearr_33821_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (4))){
var inst_33797 = (state_33817[(8)]);
var inst_33797__$1 = (state_33817[(2)]);
var inst_33798 = (inst_33797__$1 == null);
var inst_33799 = cljs.core.not(inst_33798);
var state_33817__$1 = (function (){var statearr_33822 = state_33817;
(statearr_33822[(8)] = inst_33797__$1);

return statearr_33822;
})();
if(inst_33799){
var statearr_33823_34694 = state_33817__$1;
(statearr_33823_34694[(1)] = (5));

} else {
var statearr_33824_34695 = state_33817__$1;
(statearr_33824_34695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (6))){
var state_33817__$1 = state_33817;
var statearr_33825_34696 = state_33817__$1;
(statearr_33825_34696[(2)] = null);

(statearr_33825_34696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (3))){
var inst_33814 = (state_33817[(2)]);
var inst_33815 = cljs.core.async.close_BANG_(out);
var state_33817__$1 = (function (){var statearr_33826 = state_33817;
(statearr_33826[(9)] = inst_33814);

return statearr_33826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33817__$1,inst_33815);
} else {
if((state_val_33818 === (2))){
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33817__$1,(4),ch);
} else {
if((state_val_33818 === (11))){
var inst_33797 = (state_33817[(8)]);
var inst_33806 = (state_33817[(2)]);
var inst_33794 = inst_33797;
var state_33817__$1 = (function (){var statearr_33827 = state_33817;
(statearr_33827[(10)] = inst_33806);

(statearr_33827[(7)] = inst_33794);

return statearr_33827;
})();
var statearr_33828_34697 = state_33817__$1;
(statearr_33828_34697[(2)] = null);

(statearr_33828_34697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (9))){
var inst_33797 = (state_33817[(8)]);
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33817__$1,(11),out,inst_33797);
} else {
if((state_val_33818 === (5))){
var inst_33797 = (state_33817[(8)]);
var inst_33794 = (state_33817[(7)]);
var inst_33801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33797,inst_33794);
var state_33817__$1 = state_33817;
if(inst_33801){
var statearr_33830_34698 = state_33817__$1;
(statearr_33830_34698[(1)] = (8));

} else {
var statearr_33831_34699 = state_33817__$1;
(statearr_33831_34699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (10))){
var inst_33809 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33832_34700 = state_33817__$1;
(statearr_33832_34700[(2)] = inst_33809);

(statearr_33832_34700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (8))){
var inst_33794 = (state_33817[(7)]);
var tmp33829 = inst_33794;
var inst_33794__$1 = tmp33829;
var state_33817__$1 = (function (){var statearr_33833 = state_33817;
(statearr_33833[(7)] = inst_33794__$1);

return statearr_33833;
})();
var statearr_33834_34702 = state_33817__$1;
(statearr_33834_34702[(2)] = null);

(statearr_33834_34702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33835[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33817){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33817);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33836){if((e33836 instanceof Object)){
var ex__32397__auto__ = e33836;
var statearr_33837_34704 = state_33817;
(statearr_33837_34704[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34705 = state_33817;
state_33817 = G__34705;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33838 = f__32484__auto__();
(statearr_33838[(6)] = c__32483__auto___34691);

return statearr_33838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33840 = arguments.length;
switch (G__33840) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32483__auto___34715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33878){
var state_val_33879 = (state_33878[(1)]);
if((state_val_33879 === (7))){
var inst_33874 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33880_34718 = state_33878__$1;
(statearr_33880_34718[(2)] = inst_33874);

(statearr_33880_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (1))){
var inst_33841 = (new Array(n));
var inst_33842 = inst_33841;
var inst_33843 = (0);
var state_33878__$1 = (function (){var statearr_33881 = state_33878;
(statearr_33881[(7)] = inst_33843);

(statearr_33881[(8)] = inst_33842);

return statearr_33881;
})();
var statearr_33882_34720 = state_33878__$1;
(statearr_33882_34720[(2)] = null);

(statearr_33882_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (4))){
var inst_33846 = (state_33878[(9)]);
var inst_33846__$1 = (state_33878[(2)]);
var inst_33847 = (inst_33846__$1 == null);
var inst_33848 = cljs.core.not(inst_33847);
var state_33878__$1 = (function (){var statearr_33883 = state_33878;
(statearr_33883[(9)] = inst_33846__$1);

return statearr_33883;
})();
if(inst_33848){
var statearr_33884_34721 = state_33878__$1;
(statearr_33884_34721[(1)] = (5));

} else {
var statearr_33885_34722 = state_33878__$1;
(statearr_33885_34722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (15))){
var inst_33868 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33886_34723 = state_33878__$1;
(statearr_33886_34723[(2)] = inst_33868);

(statearr_33886_34723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (13))){
var state_33878__$1 = state_33878;
var statearr_33887_34724 = state_33878__$1;
(statearr_33887_34724[(2)] = null);

(statearr_33887_34724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (6))){
var inst_33843 = (state_33878[(7)]);
var inst_33864 = (inst_33843 > (0));
var state_33878__$1 = state_33878;
if(cljs.core.truth_(inst_33864)){
var statearr_33888_34725 = state_33878__$1;
(statearr_33888_34725[(1)] = (12));

} else {
var statearr_33889_34726 = state_33878__$1;
(statearr_33889_34726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (3))){
var inst_33876 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33878__$1,inst_33876);
} else {
if((state_val_33879 === (12))){
var inst_33842 = (state_33878[(8)]);
var inst_33866 = cljs.core.vec(inst_33842);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33878__$1,(15),out,inst_33866);
} else {
if((state_val_33879 === (2))){
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33878__$1,(4),ch);
} else {
if((state_val_33879 === (11))){
var inst_33858 = (state_33878[(2)]);
var inst_33859 = (new Array(n));
var inst_33842 = inst_33859;
var inst_33843 = (0);
var state_33878__$1 = (function (){var statearr_33890 = state_33878;
(statearr_33890[(10)] = inst_33858);

(statearr_33890[(7)] = inst_33843);

(statearr_33890[(8)] = inst_33842);

return statearr_33890;
})();
var statearr_33891_34727 = state_33878__$1;
(statearr_33891_34727[(2)] = null);

(statearr_33891_34727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (9))){
var inst_33842 = (state_33878[(8)]);
var inst_33856 = cljs.core.vec(inst_33842);
var state_33878__$1 = state_33878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33878__$1,(11),out,inst_33856);
} else {
if((state_val_33879 === (5))){
var inst_33851 = (state_33878[(11)]);
var inst_33846 = (state_33878[(9)]);
var inst_33843 = (state_33878[(7)]);
var inst_33842 = (state_33878[(8)]);
var inst_33850 = (inst_33842[inst_33843] = inst_33846);
var inst_33851__$1 = (inst_33843 + (1));
var inst_33852 = (inst_33851__$1 < n);
var state_33878__$1 = (function (){var statearr_33892 = state_33878;
(statearr_33892[(11)] = inst_33851__$1);

(statearr_33892[(12)] = inst_33850);

return statearr_33892;
})();
if(cljs.core.truth_(inst_33852)){
var statearr_33893_34728 = state_33878__$1;
(statearr_33893_34728[(1)] = (8));

} else {
var statearr_33894_34729 = state_33878__$1;
(statearr_33894_34729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (14))){
var inst_33871 = (state_33878[(2)]);
var inst_33872 = cljs.core.async.close_BANG_(out);
var state_33878__$1 = (function (){var statearr_33896 = state_33878;
(statearr_33896[(13)] = inst_33871);

return statearr_33896;
})();
var statearr_33897_34730 = state_33878__$1;
(statearr_33897_34730[(2)] = inst_33872);

(statearr_33897_34730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (10))){
var inst_33862 = (state_33878[(2)]);
var state_33878__$1 = state_33878;
var statearr_33898_34731 = state_33878__$1;
(statearr_33898_34731[(2)] = inst_33862);

(statearr_33898_34731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33879 === (8))){
var inst_33851 = (state_33878[(11)]);
var inst_33842 = (state_33878[(8)]);
var tmp33895 = inst_33842;
var inst_33842__$1 = tmp33895;
var inst_33843 = inst_33851;
var state_33878__$1 = (function (){var statearr_33899 = state_33878;
(statearr_33899[(7)] = inst_33843);

(statearr_33899[(8)] = inst_33842__$1);

return statearr_33899;
})();
var statearr_33900_34732 = state_33878__$1;
(statearr_33900_34732[(2)] = null);

(statearr_33900_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33901[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33901[(1)] = (1));

return statearr_33901;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33878){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33878);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33902){if((e33902 instanceof Object)){
var ex__32397__auto__ = e33902;
var statearr_33903_34733 = state_33878;
(statearr_33903_34733[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34734 = state_33878;
state_33878 = G__34734;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33904 = f__32484__auto__();
(statearr_33904[(6)] = c__32483__auto___34715);

return statearr_33904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33906 = arguments.length;
switch (G__33906) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32483__auto___34736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_33948){
var state_val_33949 = (state_33948[(1)]);
if((state_val_33949 === (7))){
var inst_33944 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33950_34737 = state_33948__$1;
(statearr_33950_34737[(2)] = inst_33944);

(statearr_33950_34737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (1))){
var inst_33907 = [];
var inst_33908 = inst_33907;
var inst_33909 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33948__$1 = (function (){var statearr_33951 = state_33948;
(statearr_33951[(7)] = inst_33909);

(statearr_33951[(8)] = inst_33908);

return statearr_33951;
})();
var statearr_33952_34739 = state_33948__$1;
(statearr_33952_34739[(2)] = null);

(statearr_33952_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (4))){
var inst_33912 = (state_33948[(9)]);
var inst_33912__$1 = (state_33948[(2)]);
var inst_33913 = (inst_33912__$1 == null);
var inst_33914 = cljs.core.not(inst_33913);
var state_33948__$1 = (function (){var statearr_33953 = state_33948;
(statearr_33953[(9)] = inst_33912__$1);

return statearr_33953;
})();
if(inst_33914){
var statearr_33954_34741 = state_33948__$1;
(statearr_33954_34741[(1)] = (5));

} else {
var statearr_33955_34742 = state_33948__$1;
(statearr_33955_34742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (15))){
var inst_33938 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33956_34744 = state_33948__$1;
(statearr_33956_34744[(2)] = inst_33938);

(statearr_33956_34744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (13))){
var state_33948__$1 = state_33948;
var statearr_33957_34745 = state_33948__$1;
(statearr_33957_34745[(2)] = null);

(statearr_33957_34745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (6))){
var inst_33908 = (state_33948[(8)]);
var inst_33933 = inst_33908.length;
var inst_33934 = (inst_33933 > (0));
var state_33948__$1 = state_33948;
if(cljs.core.truth_(inst_33934)){
var statearr_33958_34747 = state_33948__$1;
(statearr_33958_34747[(1)] = (12));

} else {
var statearr_33959_34748 = state_33948__$1;
(statearr_33959_34748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (3))){
var inst_33946 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33948__$1,inst_33946);
} else {
if((state_val_33949 === (12))){
var inst_33908 = (state_33948[(8)]);
var inst_33936 = cljs.core.vec(inst_33908);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33948__$1,(15),out,inst_33936);
} else {
if((state_val_33949 === (2))){
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33948__$1,(4),ch);
} else {
if((state_val_33949 === (11))){
var inst_33916 = (state_33948[(10)]);
var inst_33912 = (state_33948[(9)]);
var inst_33926 = (state_33948[(2)]);
var inst_33927 = [];
var inst_33928 = inst_33927.push(inst_33912);
var inst_33908 = inst_33927;
var inst_33909 = inst_33916;
var state_33948__$1 = (function (){var statearr_33960 = state_33948;
(statearr_33960[(7)] = inst_33909);

(statearr_33960[(8)] = inst_33908);

(statearr_33960[(11)] = inst_33926);

(statearr_33960[(12)] = inst_33928);

return statearr_33960;
})();
var statearr_33961_34751 = state_33948__$1;
(statearr_33961_34751[(2)] = null);

(statearr_33961_34751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (9))){
var inst_33908 = (state_33948[(8)]);
var inst_33924 = cljs.core.vec(inst_33908);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33948__$1,(11),out,inst_33924);
} else {
if((state_val_33949 === (5))){
var inst_33909 = (state_33948[(7)]);
var inst_33916 = (state_33948[(10)]);
var inst_33912 = (state_33948[(9)]);
var inst_33916__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33912) : f.call(null,inst_33912));
var inst_33917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33916__$1,inst_33909);
var inst_33918 = cljs.core.keyword_identical_QMARK_(inst_33909,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33919 = ((inst_33917) || (inst_33918));
var state_33948__$1 = (function (){var statearr_33962 = state_33948;
(statearr_33962[(10)] = inst_33916__$1);

return statearr_33962;
})();
if(cljs.core.truth_(inst_33919)){
var statearr_33963_34752 = state_33948__$1;
(statearr_33963_34752[(1)] = (8));

} else {
var statearr_33964_34753 = state_33948__$1;
(statearr_33964_34753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (14))){
var inst_33941 = (state_33948[(2)]);
var inst_33942 = cljs.core.async.close_BANG_(out);
var state_33948__$1 = (function (){var statearr_33966 = state_33948;
(statearr_33966[(13)] = inst_33941);

return statearr_33966;
})();
var statearr_33967_34755 = state_33948__$1;
(statearr_33967_34755[(2)] = inst_33942);

(statearr_33967_34755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (10))){
var inst_33931 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33968_34756 = state_33948__$1;
(statearr_33968_34756[(2)] = inst_33931);

(statearr_33968_34756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (8))){
var inst_33908 = (state_33948[(8)]);
var inst_33916 = (state_33948[(10)]);
var inst_33912 = (state_33948[(9)]);
var inst_33921 = inst_33908.push(inst_33912);
var tmp33965 = inst_33908;
var inst_33908__$1 = tmp33965;
var inst_33909 = inst_33916;
var state_33948__$1 = (function (){var statearr_33969 = state_33948;
(statearr_33969[(7)] = inst_33909);

(statearr_33969[(14)] = inst_33921);

(statearr_33969[(8)] = inst_33908__$1);

return statearr_33969;
})();
var statearr_33970_34766 = state_33948__$1;
(statearr_33970_34766[(2)] = null);

(statearr_33970_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32394__auto__ = null;
var cljs$core$async$state_machine__32394__auto____0 = (function (){
var statearr_33971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33971[(0)] = cljs$core$async$state_machine__32394__auto__);

(statearr_33971[(1)] = (1));

return statearr_33971;
});
var cljs$core$async$state_machine__32394__auto____1 = (function (state_33948){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_33948);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e33972){if((e33972 instanceof Object)){
var ex__32397__auto__ = e33972;
var statearr_33973_34772 = state_33948;
(statearr_33973_34772[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34773 = state_33948;
state_33948 = G__34773;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
cljs$core$async$state_machine__32394__auto__ = function(state_33948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32394__auto____1.call(this,state_33948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32394__auto____0;
cljs$core$async$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32394__auto____1;
return cljs$core$async$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_33974 = f__32484__auto__();
(statearr_33974[(6)] = c__32483__auto___34736);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

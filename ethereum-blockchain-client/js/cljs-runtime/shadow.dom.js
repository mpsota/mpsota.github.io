goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34089 = coll;
var G__34090 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34089,G__34090) : shadow.dom.lazy_native_coll_seq.call(null,G__34089,G__34090));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34098 = arguments.length;
switch (G__34098) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34107 = arguments.length;
switch (G__34107) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34113 = arguments.length;
switch (G__34113) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34117 = arguments.length;
switch (G__34117) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34133 = arguments.length;
switch (G__34133) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34146 = arguments.length;
switch (G__34146) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34157){if((e34157 instanceof Object)){
var e = e34157;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34157;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34159 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34160 = null;
var count__34161 = (0);
var i__34162 = (0);
while(true){
if((i__34162 < count__34161)){
var el = chunk__34160.cljs$core$IIndexed$_nth$arity$2(null,i__34162);
var handler_34754__$1 = ((function (seq__34159,chunk__34160,count__34161,i__34162,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34159,chunk__34160,count__34161,i__34162,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34754__$1);


var G__34757 = seq__34159;
var G__34758 = chunk__34160;
var G__34759 = count__34161;
var G__34760 = (i__34162 + (1));
seq__34159 = G__34757;
chunk__34160 = G__34758;
count__34161 = G__34759;
i__34162 = G__34760;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34159);
if(temp__5735__auto__){
var seq__34159__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34159__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34159__$1);
var G__34761 = cljs.core.chunk_rest(seq__34159__$1);
var G__34762 = c__4609__auto__;
var G__34763 = cljs.core.count(c__4609__auto__);
var G__34764 = (0);
seq__34159 = G__34761;
chunk__34160 = G__34762;
count__34161 = G__34763;
i__34162 = G__34764;
continue;
} else {
var el = cljs.core.first(seq__34159__$1);
var handler_34765__$1 = ((function (seq__34159,chunk__34160,count__34161,i__34162,el,seq__34159__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34159,chunk__34160,count__34161,i__34162,el,seq__34159__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34765__$1);


var G__34767 = cljs.core.next(seq__34159__$1);
var G__34768 = null;
var G__34769 = (0);
var G__34770 = (0);
seq__34159 = G__34767;
chunk__34160 = G__34768;
count__34161 = G__34769;
i__34162 = G__34770;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34186 = arguments.length;
switch (G__34186) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34188 = cljs.core.seq(events);
var chunk__34189 = null;
var count__34190 = (0);
var i__34191 = (0);
while(true){
if((i__34191 < count__34190)){
var vec__34201 = chunk__34189.cljs$core$IIndexed$_nth$arity$2(null,i__34191);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34774 = seq__34188;
var G__34775 = chunk__34189;
var G__34776 = count__34190;
var G__34777 = (i__34191 + (1));
seq__34188 = G__34774;
chunk__34189 = G__34775;
count__34190 = G__34776;
i__34191 = G__34777;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34188);
if(temp__5735__auto__){
var seq__34188__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34188__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34188__$1);
var G__34778 = cljs.core.chunk_rest(seq__34188__$1);
var G__34779 = c__4609__auto__;
var G__34780 = cljs.core.count(c__4609__auto__);
var G__34781 = (0);
seq__34188 = G__34778;
chunk__34189 = G__34779;
count__34190 = G__34780;
i__34191 = G__34781;
continue;
} else {
var vec__34218 = cljs.core.first(seq__34188__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34218,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34782 = cljs.core.next(seq__34188__$1);
var G__34783 = null;
var G__34784 = (0);
var G__34785 = (0);
seq__34188 = G__34782;
chunk__34189 = G__34783;
count__34190 = G__34784;
i__34191 = G__34785;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34223 = cljs.core.seq(styles);
var chunk__34224 = null;
var count__34225 = (0);
var i__34226 = (0);
while(true){
if((i__34226 < count__34225)){
var vec__34243 = chunk__34224.cljs$core$IIndexed$_nth$arity$2(null,i__34226);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34243,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34786 = seq__34223;
var G__34787 = chunk__34224;
var G__34788 = count__34225;
var G__34789 = (i__34226 + (1));
seq__34223 = G__34786;
chunk__34224 = G__34787;
count__34225 = G__34788;
i__34226 = G__34789;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34223);
if(temp__5735__auto__){
var seq__34223__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34223__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34223__$1);
var G__34790 = cljs.core.chunk_rest(seq__34223__$1);
var G__34791 = c__4609__auto__;
var G__34792 = cljs.core.count(c__4609__auto__);
var G__34793 = (0);
seq__34223 = G__34790;
chunk__34224 = G__34791;
count__34225 = G__34792;
i__34226 = G__34793;
continue;
} else {
var vec__34249 = cljs.core.first(seq__34223__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34249,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34794 = cljs.core.next(seq__34223__$1);
var G__34795 = null;
var G__34796 = (0);
var G__34797 = (0);
seq__34223 = G__34794;
chunk__34224 = G__34795;
count__34225 = G__34796;
i__34226 = G__34797;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34257_34798 = key;
var G__34257_34799__$1 = (((G__34257_34798 instanceof cljs.core.Keyword))?G__34257_34798.fqn:null);
switch (G__34257_34799__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34801 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_34801,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_34801,"aria-");
}
})())){
el.setAttribute(ks_34801,value);
} else {
(el[ks_34801] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34269){
var map__34270 = p__34269;
var map__34270__$1 = (((((!((map__34270 == null))))?(((((map__34270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34270):map__34270);
var props = map__34270__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34270__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34272 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34276 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34276,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34276;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34281 = arguments.length;
switch (G__34281) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34289){
var vec__34290 = p__34289;
var seq__34291 = cljs.core.seq(vec__34290);
var first__34292 = cljs.core.first(seq__34291);
var seq__34291__$1 = cljs.core.next(seq__34291);
var nn = first__34292;
var first__34292__$1 = cljs.core.first(seq__34291__$1);
var seq__34291__$2 = cljs.core.next(seq__34291__$1);
var np = first__34292__$1;
var nc = seq__34291__$2;
var node = vec__34290;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34293 = nn;
var G__34294 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34293,G__34294) : create_fn.call(null,G__34293,G__34294));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34295 = nn;
var G__34296 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34295,G__34296) : create_fn.call(null,G__34295,G__34296));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34297 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34297,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34297,(1),null);
var seq__34300_34803 = cljs.core.seq(node_children);
var chunk__34301_34804 = null;
var count__34302_34805 = (0);
var i__34303_34806 = (0);
while(true){
if((i__34303_34806 < count__34302_34805)){
var child_struct_34807 = chunk__34301_34804.cljs$core$IIndexed$_nth$arity$2(null,i__34303_34806);
var children_34808 = shadow.dom.dom_node(child_struct_34807);
if(cljs.core.seq_QMARK_(children_34808)){
var seq__34325_34809 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34808));
var chunk__34327_34810 = null;
var count__34328_34811 = (0);
var i__34329_34812 = (0);
while(true){
if((i__34329_34812 < count__34328_34811)){
var child_34813 = chunk__34327_34810.cljs$core$IIndexed$_nth$arity$2(null,i__34329_34812);
if(cljs.core.truth_(child_34813)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34813);


var G__34814 = seq__34325_34809;
var G__34815 = chunk__34327_34810;
var G__34816 = count__34328_34811;
var G__34817 = (i__34329_34812 + (1));
seq__34325_34809 = G__34814;
chunk__34327_34810 = G__34815;
count__34328_34811 = G__34816;
i__34329_34812 = G__34817;
continue;
} else {
var G__34818 = seq__34325_34809;
var G__34819 = chunk__34327_34810;
var G__34820 = count__34328_34811;
var G__34821 = (i__34329_34812 + (1));
seq__34325_34809 = G__34818;
chunk__34327_34810 = G__34819;
count__34328_34811 = G__34820;
i__34329_34812 = G__34821;
continue;
}
} else {
var temp__5735__auto___34822 = cljs.core.seq(seq__34325_34809);
if(temp__5735__auto___34822){
var seq__34325_34823__$1 = temp__5735__auto___34822;
if(cljs.core.chunked_seq_QMARK_(seq__34325_34823__$1)){
var c__4609__auto___34824 = cljs.core.chunk_first(seq__34325_34823__$1);
var G__34825 = cljs.core.chunk_rest(seq__34325_34823__$1);
var G__34826 = c__4609__auto___34824;
var G__34827 = cljs.core.count(c__4609__auto___34824);
var G__34828 = (0);
seq__34325_34809 = G__34825;
chunk__34327_34810 = G__34826;
count__34328_34811 = G__34827;
i__34329_34812 = G__34828;
continue;
} else {
var child_34829 = cljs.core.first(seq__34325_34823__$1);
if(cljs.core.truth_(child_34829)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34829);


var G__34830 = cljs.core.next(seq__34325_34823__$1);
var G__34831 = null;
var G__34832 = (0);
var G__34833 = (0);
seq__34325_34809 = G__34830;
chunk__34327_34810 = G__34831;
count__34328_34811 = G__34832;
i__34329_34812 = G__34833;
continue;
} else {
var G__34834 = cljs.core.next(seq__34325_34823__$1);
var G__34835 = null;
var G__34836 = (0);
var G__34837 = (0);
seq__34325_34809 = G__34834;
chunk__34327_34810 = G__34835;
count__34328_34811 = G__34836;
i__34329_34812 = G__34837;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34808);
}


var G__34838 = seq__34300_34803;
var G__34839 = chunk__34301_34804;
var G__34840 = count__34302_34805;
var G__34841 = (i__34303_34806 + (1));
seq__34300_34803 = G__34838;
chunk__34301_34804 = G__34839;
count__34302_34805 = G__34840;
i__34303_34806 = G__34841;
continue;
} else {
var temp__5735__auto___34842 = cljs.core.seq(seq__34300_34803);
if(temp__5735__auto___34842){
var seq__34300_34843__$1 = temp__5735__auto___34842;
if(cljs.core.chunked_seq_QMARK_(seq__34300_34843__$1)){
var c__4609__auto___34844 = cljs.core.chunk_first(seq__34300_34843__$1);
var G__34845 = cljs.core.chunk_rest(seq__34300_34843__$1);
var G__34846 = c__4609__auto___34844;
var G__34847 = cljs.core.count(c__4609__auto___34844);
var G__34848 = (0);
seq__34300_34803 = G__34845;
chunk__34301_34804 = G__34846;
count__34302_34805 = G__34847;
i__34303_34806 = G__34848;
continue;
} else {
var child_struct_34849 = cljs.core.first(seq__34300_34843__$1);
var children_34850 = shadow.dom.dom_node(child_struct_34849);
if(cljs.core.seq_QMARK_(children_34850)){
var seq__34337_34851 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34850));
var chunk__34339_34852 = null;
var count__34340_34853 = (0);
var i__34341_34854 = (0);
while(true){
if((i__34341_34854 < count__34340_34853)){
var child_34855 = chunk__34339_34852.cljs$core$IIndexed$_nth$arity$2(null,i__34341_34854);
if(cljs.core.truth_(child_34855)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34855);


var G__34856 = seq__34337_34851;
var G__34857 = chunk__34339_34852;
var G__34858 = count__34340_34853;
var G__34859 = (i__34341_34854 + (1));
seq__34337_34851 = G__34856;
chunk__34339_34852 = G__34857;
count__34340_34853 = G__34858;
i__34341_34854 = G__34859;
continue;
} else {
var G__34860 = seq__34337_34851;
var G__34861 = chunk__34339_34852;
var G__34862 = count__34340_34853;
var G__34863 = (i__34341_34854 + (1));
seq__34337_34851 = G__34860;
chunk__34339_34852 = G__34861;
count__34340_34853 = G__34862;
i__34341_34854 = G__34863;
continue;
}
} else {
var temp__5735__auto___34864__$1 = cljs.core.seq(seq__34337_34851);
if(temp__5735__auto___34864__$1){
var seq__34337_34865__$1 = temp__5735__auto___34864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34337_34865__$1)){
var c__4609__auto___34866 = cljs.core.chunk_first(seq__34337_34865__$1);
var G__34867 = cljs.core.chunk_rest(seq__34337_34865__$1);
var G__34868 = c__4609__auto___34866;
var G__34869 = cljs.core.count(c__4609__auto___34866);
var G__34870 = (0);
seq__34337_34851 = G__34867;
chunk__34339_34852 = G__34868;
count__34340_34853 = G__34869;
i__34341_34854 = G__34870;
continue;
} else {
var child_34871 = cljs.core.first(seq__34337_34865__$1);
if(cljs.core.truth_(child_34871)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34871);


var G__34872 = cljs.core.next(seq__34337_34865__$1);
var G__34873 = null;
var G__34874 = (0);
var G__34875 = (0);
seq__34337_34851 = G__34872;
chunk__34339_34852 = G__34873;
count__34340_34853 = G__34874;
i__34341_34854 = G__34875;
continue;
} else {
var G__34876 = cljs.core.next(seq__34337_34865__$1);
var G__34877 = null;
var G__34878 = (0);
var G__34879 = (0);
seq__34337_34851 = G__34876;
chunk__34339_34852 = G__34877;
count__34340_34853 = G__34878;
i__34341_34854 = G__34879;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34850);
}


var G__34880 = cljs.core.next(seq__34300_34843__$1);
var G__34881 = null;
var G__34882 = (0);
var G__34883 = (0);
seq__34300_34803 = G__34880;
chunk__34301_34804 = G__34881;
count__34302_34805 = G__34882;
i__34303_34806 = G__34883;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34360 = cljs.core.seq(node);
var chunk__34361 = null;
var count__34362 = (0);
var i__34363 = (0);
while(true){
if((i__34363 < count__34362)){
var n = chunk__34361.cljs$core$IIndexed$_nth$arity$2(null,i__34363);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34884 = seq__34360;
var G__34885 = chunk__34361;
var G__34886 = count__34362;
var G__34887 = (i__34363 + (1));
seq__34360 = G__34884;
chunk__34361 = G__34885;
count__34362 = G__34886;
i__34363 = G__34887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34360);
if(temp__5735__auto__){
var seq__34360__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34360__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34360__$1);
var G__34888 = cljs.core.chunk_rest(seq__34360__$1);
var G__34889 = c__4609__auto__;
var G__34890 = cljs.core.count(c__4609__auto__);
var G__34891 = (0);
seq__34360 = G__34888;
chunk__34361 = G__34889;
count__34362 = G__34890;
i__34363 = G__34891;
continue;
} else {
var n = cljs.core.first(seq__34360__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34892 = cljs.core.next(seq__34360__$1);
var G__34893 = null;
var G__34894 = (0);
var G__34895 = (0);
seq__34360 = G__34892;
chunk__34361 = G__34893;
count__34362 = G__34894;
i__34363 = G__34895;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34383 = arguments.length;
switch (G__34383) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34388 = arguments.length;
switch (G__34388) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34901 = arguments.length;
var i__4790__auto___34902 = (0);
while(true){
if((i__4790__auto___34902 < len__4789__auto___34901)){
args__4795__auto__.push((arguments[i__4790__auto___34902]));

var G__34903 = (i__4790__auto___34902 + (1));
i__4790__auto___34902 = G__34903;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34393_34904 = cljs.core.seq(nodes);
var chunk__34394_34905 = null;
var count__34395_34906 = (0);
var i__34396_34907 = (0);
while(true){
if((i__34396_34907 < count__34395_34906)){
var node_34908 = chunk__34394_34905.cljs$core$IIndexed$_nth$arity$2(null,i__34396_34907);
fragment.appendChild(shadow.dom._to_dom(node_34908));


var G__34909 = seq__34393_34904;
var G__34910 = chunk__34394_34905;
var G__34911 = count__34395_34906;
var G__34912 = (i__34396_34907 + (1));
seq__34393_34904 = G__34909;
chunk__34394_34905 = G__34910;
count__34395_34906 = G__34911;
i__34396_34907 = G__34912;
continue;
} else {
var temp__5735__auto___34913 = cljs.core.seq(seq__34393_34904);
if(temp__5735__auto___34913){
var seq__34393_34914__$1 = temp__5735__auto___34913;
if(cljs.core.chunked_seq_QMARK_(seq__34393_34914__$1)){
var c__4609__auto___34915 = cljs.core.chunk_first(seq__34393_34914__$1);
var G__34916 = cljs.core.chunk_rest(seq__34393_34914__$1);
var G__34917 = c__4609__auto___34915;
var G__34918 = cljs.core.count(c__4609__auto___34915);
var G__34919 = (0);
seq__34393_34904 = G__34916;
chunk__34394_34905 = G__34917;
count__34395_34906 = G__34918;
i__34396_34907 = G__34919;
continue;
} else {
var node_34920 = cljs.core.first(seq__34393_34914__$1);
fragment.appendChild(shadow.dom._to_dom(node_34920));


var G__34921 = cljs.core.next(seq__34393_34914__$1);
var G__34922 = null;
var G__34923 = (0);
var G__34924 = (0);
seq__34393_34904 = G__34921;
chunk__34394_34905 = G__34922;
count__34395_34906 = G__34923;
i__34396_34907 = G__34924;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34392){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34392));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34410_34925 = cljs.core.seq(scripts);
var chunk__34411_34926 = null;
var count__34412_34927 = (0);
var i__34413_34928 = (0);
while(true){
if((i__34413_34928 < count__34412_34927)){
var vec__34424_34929 = chunk__34411_34926.cljs$core$IIndexed$_nth$arity$2(null,i__34413_34928);
var script_tag_34930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34424_34929,(0),null);
var script_body_34931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34424_34929,(1),null);
eval(script_body_34931);


var G__34932 = seq__34410_34925;
var G__34933 = chunk__34411_34926;
var G__34934 = count__34412_34927;
var G__34935 = (i__34413_34928 + (1));
seq__34410_34925 = G__34932;
chunk__34411_34926 = G__34933;
count__34412_34927 = G__34934;
i__34413_34928 = G__34935;
continue;
} else {
var temp__5735__auto___34936 = cljs.core.seq(seq__34410_34925);
if(temp__5735__auto___34936){
var seq__34410_34937__$1 = temp__5735__auto___34936;
if(cljs.core.chunked_seq_QMARK_(seq__34410_34937__$1)){
var c__4609__auto___34938 = cljs.core.chunk_first(seq__34410_34937__$1);
var G__34939 = cljs.core.chunk_rest(seq__34410_34937__$1);
var G__34940 = c__4609__auto___34938;
var G__34941 = cljs.core.count(c__4609__auto___34938);
var G__34942 = (0);
seq__34410_34925 = G__34939;
chunk__34411_34926 = G__34940;
count__34412_34927 = G__34941;
i__34413_34928 = G__34942;
continue;
} else {
var vec__34431_34943 = cljs.core.first(seq__34410_34937__$1);
var script_tag_34944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431_34943,(0),null);
var script_body_34945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431_34943,(1),null);
eval(script_body_34945);


var G__34946 = cljs.core.next(seq__34410_34937__$1);
var G__34947 = null;
var G__34948 = (0);
var G__34949 = (0);
seq__34410_34925 = G__34946;
chunk__34411_34926 = G__34947;
count__34412_34927 = G__34948;
i__34413_34928 = G__34949;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34435){
var vec__34437 = p__34435;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34437,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34437,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34452 = arguments.length;
switch (G__34452) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34466 = cljs.core.seq(style_keys);
var chunk__34467 = null;
var count__34468 = (0);
var i__34469 = (0);
while(true){
if((i__34469 < count__34468)){
var it = chunk__34467.cljs$core$IIndexed$_nth$arity$2(null,i__34469);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34952 = seq__34466;
var G__34953 = chunk__34467;
var G__34954 = count__34468;
var G__34955 = (i__34469 + (1));
seq__34466 = G__34952;
chunk__34467 = G__34953;
count__34468 = G__34954;
i__34469 = G__34955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34466);
if(temp__5735__auto__){
var seq__34466__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34466__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34466__$1);
var G__34956 = cljs.core.chunk_rest(seq__34466__$1);
var G__34957 = c__4609__auto__;
var G__34958 = cljs.core.count(c__4609__auto__);
var G__34959 = (0);
seq__34466 = G__34956;
chunk__34467 = G__34957;
count__34468 = G__34958;
i__34469 = G__34959;
continue;
} else {
var it = cljs.core.first(seq__34466__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34961 = cljs.core.next(seq__34466__$1);
var G__34962 = null;
var G__34963 = (0);
var G__34964 = (0);
seq__34466 = G__34961;
chunk__34467 = G__34962;
count__34468 = G__34963;
i__34469 = G__34964;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34473,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34478 = k34473;
var G__34478__$1 = (((G__34478 instanceof cljs.core.Keyword))?G__34478.fqn:null);
switch (G__34478__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34473,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34480){
var vec__34481 = p__34480;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34481,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34481,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34472){
var self__ = this;
var G__34472__$1 = this;
return (new cljs.core.RecordIter((0),G__34472__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34474,other34475){
var self__ = this;
var this34474__$1 = this;
return (((!((other34475 == null)))) && ((this34474__$1.constructor === other34475.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34474__$1.x,other34475.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34474__$1.y,other34475.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34474__$1.__extmap,other34475.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34472){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34494 = cljs.core.keyword_identical_QMARK_;
var expr__34495 = k__4447__auto__;
if(cljs.core.truth_((pred__34494.cljs$core$IFn$_invoke$arity$2 ? pred__34494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34495) : pred__34494.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34495)))){
return (new shadow.dom.Coordinate(G__34472,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34494.cljs$core$IFn$_invoke$arity$2 ? pred__34494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34495) : pred__34494.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34495)))){
return (new shadow.dom.Coordinate(self__.x,G__34472,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34472),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34472){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34472,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34476){
var extmap__4478__auto__ = (function (){var G__34506 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34476,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34476)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34506);
} else {
return G__34506;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34476),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34476),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34514,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34522 = k34514;
var G__34522__$1 = (((G__34522 instanceof cljs.core.Keyword))?G__34522.fqn:null);
switch (G__34522__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34514,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34525){
var vec__34527 = p__34525;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34527,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34527,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34513){
var self__ = this;
var G__34513__$1 = this;
return (new cljs.core.RecordIter((0),G__34513__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34515,other34516){
var self__ = this;
var this34515__$1 = this;
return (((!((other34516 == null)))) && ((this34515__$1.constructor === other34516.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34515__$1.w,other34516.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34515__$1.h,other34516.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34515__$1.__extmap,other34516.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34513){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34548 = cljs.core.keyword_identical_QMARK_;
var expr__34549 = k__4447__auto__;
if(cljs.core.truth_((pred__34548.cljs$core$IFn$_invoke$arity$2 ? pred__34548.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34549) : pred__34548.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34549)))){
return (new shadow.dom.Size(G__34513,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34548.cljs$core$IFn$_invoke$arity$2 ? pred__34548.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34549) : pred__34548.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34549)))){
return (new shadow.dom.Size(self__.w,G__34513,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34513),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34513){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34513,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34517){
var extmap__4478__auto__ = (function (){var G__34559 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34517,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34517)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34559);
} else {
return G__34559;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34517),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34517),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__34986 = (i + (1));
var G__34987 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34986;
ret = G__34987;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34578){
var vec__34579 = p__34578;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34579,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34588 = arguments.length;
switch (G__34588) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34989 = ps;
var G__34990 = (i + (1));
el__$1 = G__34989;
i = G__34990;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34593 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34598_34995 = cljs.core.seq(props);
var chunk__34599_34996 = null;
var count__34600_34997 = (0);
var i__34601_34998 = (0);
while(true){
if((i__34601_34998 < count__34600_34997)){
var vec__34617_34999 = chunk__34599_34996.cljs$core$IIndexed$_nth$arity$2(null,i__34601_34998);
var k_35000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34617_34999,(0),null);
var v_35001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34617_34999,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35000);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35000),v_35001);


var G__35002 = seq__34598_34995;
var G__35003 = chunk__34599_34996;
var G__35004 = count__34600_34997;
var G__35005 = (i__34601_34998 + (1));
seq__34598_34995 = G__35002;
chunk__34599_34996 = G__35003;
count__34600_34997 = G__35004;
i__34601_34998 = G__35005;
continue;
} else {
var temp__5735__auto___35006 = cljs.core.seq(seq__34598_34995);
if(temp__5735__auto___35006){
var seq__34598_35007__$1 = temp__5735__auto___35006;
if(cljs.core.chunked_seq_QMARK_(seq__34598_35007__$1)){
var c__4609__auto___35008 = cljs.core.chunk_first(seq__34598_35007__$1);
var G__35009 = cljs.core.chunk_rest(seq__34598_35007__$1);
var G__35010 = c__4609__auto___35008;
var G__35011 = cljs.core.count(c__4609__auto___35008);
var G__35012 = (0);
seq__34598_34995 = G__35009;
chunk__34599_34996 = G__35010;
count__34600_34997 = G__35011;
i__34601_34998 = G__35012;
continue;
} else {
var vec__34623_35013 = cljs.core.first(seq__34598_35007__$1);
var k_35014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34623_35013,(0),null);
var v_35015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34623_35013,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35014);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35014),v_35015);


var G__35019 = cljs.core.next(seq__34598_35007__$1);
var G__35020 = null;
var G__35021 = (0);
var G__35022 = (0);
seq__34598_34995 = G__35019;
chunk__34599_34996 = G__35020;
count__34600_34997 = G__35021;
i__34601_34998 = G__35022;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34630 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34630,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34630,(1),null);
var seq__34633_35023 = cljs.core.seq(node_children);
var chunk__34635_35024 = null;
var count__34636_35025 = (0);
var i__34637_35026 = (0);
while(true){
if((i__34637_35026 < count__34636_35025)){
var child_struct_35027 = chunk__34635_35024.cljs$core$IIndexed$_nth$arity$2(null,i__34637_35026);
if((!((child_struct_35027 == null)))){
if(typeof child_struct_35027 === 'string'){
var text_35028 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35028),child_struct_35027].join(''));
} else {
var children_35029 = shadow.dom.svg_node(child_struct_35027);
if(cljs.core.seq_QMARK_(children_35029)){
var seq__34664_35030 = cljs.core.seq(children_35029);
var chunk__34666_35031 = null;
var count__34667_35032 = (0);
var i__34668_35033 = (0);
while(true){
if((i__34668_35033 < count__34667_35032)){
var child_35034 = chunk__34666_35031.cljs$core$IIndexed$_nth$arity$2(null,i__34668_35033);
if(cljs.core.truth_(child_35034)){
node.appendChild(child_35034);


var G__35035 = seq__34664_35030;
var G__35036 = chunk__34666_35031;
var G__35037 = count__34667_35032;
var G__35038 = (i__34668_35033 + (1));
seq__34664_35030 = G__35035;
chunk__34666_35031 = G__35036;
count__34667_35032 = G__35037;
i__34668_35033 = G__35038;
continue;
} else {
var G__35039 = seq__34664_35030;
var G__35040 = chunk__34666_35031;
var G__35041 = count__34667_35032;
var G__35042 = (i__34668_35033 + (1));
seq__34664_35030 = G__35039;
chunk__34666_35031 = G__35040;
count__34667_35032 = G__35041;
i__34668_35033 = G__35042;
continue;
}
} else {
var temp__5735__auto___35043 = cljs.core.seq(seq__34664_35030);
if(temp__5735__auto___35043){
var seq__34664_35044__$1 = temp__5735__auto___35043;
if(cljs.core.chunked_seq_QMARK_(seq__34664_35044__$1)){
var c__4609__auto___35045 = cljs.core.chunk_first(seq__34664_35044__$1);
var G__35046 = cljs.core.chunk_rest(seq__34664_35044__$1);
var G__35047 = c__4609__auto___35045;
var G__35048 = cljs.core.count(c__4609__auto___35045);
var G__35049 = (0);
seq__34664_35030 = G__35046;
chunk__34666_35031 = G__35047;
count__34667_35032 = G__35048;
i__34668_35033 = G__35049;
continue;
} else {
var child_35053 = cljs.core.first(seq__34664_35044__$1);
if(cljs.core.truth_(child_35053)){
node.appendChild(child_35053);


var G__35054 = cljs.core.next(seq__34664_35044__$1);
var G__35055 = null;
var G__35056 = (0);
var G__35057 = (0);
seq__34664_35030 = G__35054;
chunk__34666_35031 = G__35055;
count__34667_35032 = G__35056;
i__34668_35033 = G__35057;
continue;
} else {
var G__35058 = cljs.core.next(seq__34664_35044__$1);
var G__35059 = null;
var G__35060 = (0);
var G__35061 = (0);
seq__34664_35030 = G__35058;
chunk__34666_35031 = G__35059;
count__34667_35032 = G__35060;
i__34668_35033 = G__35061;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35029);
}
}


var G__35062 = seq__34633_35023;
var G__35063 = chunk__34635_35024;
var G__35064 = count__34636_35025;
var G__35065 = (i__34637_35026 + (1));
seq__34633_35023 = G__35062;
chunk__34635_35024 = G__35063;
count__34636_35025 = G__35064;
i__34637_35026 = G__35065;
continue;
} else {
var G__35066 = seq__34633_35023;
var G__35067 = chunk__34635_35024;
var G__35068 = count__34636_35025;
var G__35069 = (i__34637_35026 + (1));
seq__34633_35023 = G__35066;
chunk__34635_35024 = G__35067;
count__34636_35025 = G__35068;
i__34637_35026 = G__35069;
continue;
}
} else {
var temp__5735__auto___35070 = cljs.core.seq(seq__34633_35023);
if(temp__5735__auto___35070){
var seq__34633_35071__$1 = temp__5735__auto___35070;
if(cljs.core.chunked_seq_QMARK_(seq__34633_35071__$1)){
var c__4609__auto___35072 = cljs.core.chunk_first(seq__34633_35071__$1);
var G__35073 = cljs.core.chunk_rest(seq__34633_35071__$1);
var G__35074 = c__4609__auto___35072;
var G__35075 = cljs.core.count(c__4609__auto___35072);
var G__35076 = (0);
seq__34633_35023 = G__35073;
chunk__34635_35024 = G__35074;
count__34636_35025 = G__35075;
i__34637_35026 = G__35076;
continue;
} else {
var child_struct_35077 = cljs.core.first(seq__34633_35071__$1);
if((!((child_struct_35077 == null)))){
if(typeof child_struct_35077 === 'string'){
var text_35078 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35078),child_struct_35077].join(''));
} else {
var children_35079 = shadow.dom.svg_node(child_struct_35077);
if(cljs.core.seq_QMARK_(children_35079)){
var seq__34678_35080 = cljs.core.seq(children_35079);
var chunk__34680_35081 = null;
var count__34681_35082 = (0);
var i__34682_35083 = (0);
while(true){
if((i__34682_35083 < count__34681_35082)){
var child_35084 = chunk__34680_35081.cljs$core$IIndexed$_nth$arity$2(null,i__34682_35083);
if(cljs.core.truth_(child_35084)){
node.appendChild(child_35084);


var G__35085 = seq__34678_35080;
var G__35086 = chunk__34680_35081;
var G__35087 = count__34681_35082;
var G__35088 = (i__34682_35083 + (1));
seq__34678_35080 = G__35085;
chunk__34680_35081 = G__35086;
count__34681_35082 = G__35087;
i__34682_35083 = G__35088;
continue;
} else {
var G__35089 = seq__34678_35080;
var G__35090 = chunk__34680_35081;
var G__35091 = count__34681_35082;
var G__35092 = (i__34682_35083 + (1));
seq__34678_35080 = G__35089;
chunk__34680_35081 = G__35090;
count__34681_35082 = G__35091;
i__34682_35083 = G__35092;
continue;
}
} else {
var temp__5735__auto___35093__$1 = cljs.core.seq(seq__34678_35080);
if(temp__5735__auto___35093__$1){
var seq__34678_35094__$1 = temp__5735__auto___35093__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34678_35094__$1)){
var c__4609__auto___35098 = cljs.core.chunk_first(seq__34678_35094__$1);
var G__35099 = cljs.core.chunk_rest(seq__34678_35094__$1);
var G__35100 = c__4609__auto___35098;
var G__35101 = cljs.core.count(c__4609__auto___35098);
var G__35102 = (0);
seq__34678_35080 = G__35099;
chunk__34680_35081 = G__35100;
count__34681_35082 = G__35101;
i__34682_35083 = G__35102;
continue;
} else {
var child_35103 = cljs.core.first(seq__34678_35094__$1);
if(cljs.core.truth_(child_35103)){
node.appendChild(child_35103);


var G__35104 = cljs.core.next(seq__34678_35094__$1);
var G__35105 = null;
var G__35106 = (0);
var G__35107 = (0);
seq__34678_35080 = G__35104;
chunk__34680_35081 = G__35105;
count__34681_35082 = G__35106;
i__34682_35083 = G__35107;
continue;
} else {
var G__35108 = cljs.core.next(seq__34678_35094__$1);
var G__35109 = null;
var G__35110 = (0);
var G__35111 = (0);
seq__34678_35080 = G__35108;
chunk__34680_35081 = G__35109;
count__34681_35082 = G__35110;
i__34682_35083 = G__35111;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35079);
}
}


var G__35112 = cljs.core.next(seq__34633_35071__$1);
var G__35113 = null;
var G__35114 = (0);
var G__35115 = (0);
seq__34633_35023 = G__35112;
chunk__34635_35024 = G__35113;
count__34636_35025 = G__35114;
i__34637_35026 = G__35115;
continue;
} else {
var G__35116 = cljs.core.next(seq__34633_35071__$1);
var G__35117 = null;
var G__35118 = (0);
var G__35119 = (0);
seq__34633_35023 = G__35116;
chunk__34635_35024 = G__35117;
count__34636_35025 = G__35118;
i__34637_35026 = G__35119;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35120 = arguments.length;
var i__4790__auto___35121 = (0);
while(true){
if((i__4790__auto___35121 < len__4789__auto___35120)){
args__4795__auto__.push((arguments[i__4790__auto___35121]));

var G__35122 = (i__4790__auto___35121 + (1));
i__4790__auto___35121 = G__35122;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34689){
var G__34690 = cljs.core.first(seq34689);
var seq34689__$1 = cljs.core.next(seq34689);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34690,seq34689__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34703 = arguments.length;
switch (G__34703) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__32483__auto___35124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32484__auto__ = (function (){var switch__32393__auto__ = (function (state_34711){
var state_val_34712 = (state_34711[(1)]);
if((state_val_34712 === (1))){
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34711__$1,(2),once_or_cleanup);
} else {
if((state_val_34712 === (2))){
var inst_34708 = (state_34711[(2)]);
var inst_34709 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34711__$1 = (function (){var statearr_34713 = state_34711;
(statearr_34713[(7)] = inst_34708);

return statearr_34713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34711__$1,inst_34709);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32394__auto__ = null;
var shadow$dom$state_machine__32394__auto____0 = (function (){
var statearr_34714 = [null,null,null,null,null,null,null,null];
(statearr_34714[(0)] = shadow$dom$state_machine__32394__auto__);

(statearr_34714[(1)] = (1));

return statearr_34714;
});
var shadow$dom$state_machine__32394__auto____1 = (function (state_34711){
while(true){
var ret_value__32395__auto__ = (function (){try{while(true){
var result__32396__auto__ = switch__32393__auto__(state_34711);
if(cljs.core.keyword_identical_QMARK_(result__32396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32396__auto__;
}
break;
}
}catch (e34716){if((e34716 instanceof Object)){
var ex__32397__auto__ = e34716;
var statearr_34717_35129 = state_34711;
(statearr_34717_35129[(5)] = ex__32397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35130 = state_34711;
state_34711 = G__35130;
continue;
} else {
return ret_value__32395__auto__;
}
break;
}
});
shadow$dom$state_machine__32394__auto__ = function(state_34711){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32394__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32394__auto____1.call(this,state_34711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32394__auto____0;
shadow$dom$state_machine__32394__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32394__auto____1;
return shadow$dom$state_machine__32394__auto__;
})()
})();
var state__32485__auto__ = (function (){var statearr_34719 = f__32484__auto__();
(statearr_34719[(6)] = c__32483__auto___35124);

return statearr_34719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32485__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

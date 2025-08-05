(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function YL(e){const a=Object.create(null);for(const c of e.split(","))a[c]=1;return c=>c in a}const ve={},U0=[],k1=()=>{},uq=()=>!1,cL=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),eb=e=>e.startsWith("onUpdate:"),ze=Object.assign,tb=(e,a)=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)},kq=Object.prototype.hasOwnProperty,pe=(e,a)=>kq.call(e,a),Q=Array.isArray,$0=e=>Nc(e)==="[object Map]",oc=e=>Nc(e)==="[object Set]",Lb=e=>Nc(e)==="[object Date]",ne=e=>typeof e=="function",Ie=e=>typeof e=="string",Ye=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",zI=e=>(me(e)||ne(e))&&ne(e.then)&&ne(e.catch),HI=Object.prototype.toString,Nc=e=>HI.call(e),fq=e=>Nc(e).slice(8,-1),VI=e=>Nc(e)==="[object Object]",ab=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sc=YL(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oL=e=>{const a=Object.create(null);return c=>a[c]||(a[c]=e(c))},Mq=/-(\w)/g,Xe=oL(e=>e.replace(Mq,(a,c)=>c?c.toUpperCase():"")),vq=/\B([A-Z])/g,R0=oL(e=>e.replace(vq,"-$1").toLowerCase()),nL=oL(e=>e.charAt(0).toUpperCase()+e.slice(1)),gL=oL(e=>e?`on${nL(e)}`:""),T1=(e,a)=>!Object.is(e,a),no=(e,...a)=>{for(let c=0;c<e.length;c++)e[c](...a)},RL=(e,a,c,o=!1)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,writable:o,value:c})},Ww=e=>{const a=parseFloat(e);return isNaN(a)?e:a},mq=e=>{const a=Ie(e)?Number(e):NaN;return isNaN(a)?e:a};let bb;const rL=()=>bb||(bb=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cb(e){if(Q(e)){const a={};for(let c=0;c<e.length;c++){const o=e[c],n=Ie(o)?Lq(o):cb(o);if(n)for(const r in n)a[r]=n[r]}return a}else if(Ie(e)||me(e))return e}const gq=/;(?![^(]*\))/g,xq=/:([^]+)/,wq=/\/\*[^]*?\*\//g;function Lq(e){const a={};return e.replace(wq,"").split(gq).forEach(c=>{if(c){const o=c.split(xq);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function Le(e){let a="";if(Ie(e))a=e;else if(Q(e))for(let c=0;c<e.length;c++){const o=Le(e[c]);o&&(a+=o+" ")}else if(me(e))for(const c in e)e[c]&&(a+=c+" ");return a.trim()}const bq="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Iq=YL(bq);function jI(e){return!!e||e===""}function Cq(e,a){if(e.length!==a.length)return!1;let c=!0;for(let o=0;c&&o<e.length;o++)c=Gc(e[o],a[o]);return c}function Gc(e,a){if(e===a)return!0;let c=Lb(e),o=Lb(a);if(c||o)return c&&o?e.getTime()===a.getTime():!1;if(c=Ye(e),o=Ye(a),c||o)return e===a;if(c=Q(e),o=Q(a),c||o)return c&&o?Cq(e,a):!1;if(c=me(e),o=me(a),c||o){if(!c||!o)return!1;const n=Object.keys(e).length,r=Object.keys(a).length;if(n!==r)return!1;for(const i in e){const h=e.hasOwnProperty(i),d=a.hasOwnProperty(i);if(h&&!d||!h&&d||!Gc(e[i],a[i]))return!1}}return String(e)===String(a)}function ob(e,a){return e.findIndex(c=>Gc(c,a))}const PI=e=>!!(e&&e.__v_isRef===!0),F=e=>Ie(e)?e:e==null?"":Q(e)||me(e)&&(e.toString===HI||!ne(e.toString))?PI(e)?F(e.value):JSON.stringify(e,_I,2):String(e),_I=(e,a)=>PI(a)?_I(e,a.value):$0(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((c,[o,n],r)=>(c[xL(o,r)+" =>"]=n,c),{})}:oc(a)?{[`Set(${a.size})`]:[...a.values()].map(c=>xL(c))}:Ye(a)?xL(a):me(a)&&!Q(a)&&!VI(a)?String(a):a,xL=(e,a="")=>{var c;return Ye(e)?`Symbol(${(c=e.description)!=null?c:a})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class RI{constructor(a=!1){this.detached=a,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!a&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let a,c;if(this.scopes)for(a=0,c=this.scopes.length;a<c;a++)this.scopes[a].pause();for(a=0,c=this.effects.length;a<c;a++)this.effects[a].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let a,c;if(this.scopes)for(a=0,c=this.scopes.length;a<c;a++)this.scopes[a].resume();for(a=0,c=this.effects.length;a<c;a++)this.effects[a].resume()}}run(a){if(this._active){const c=Ve;try{return Ve=this,a()}finally{Ve=c}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(a){if(this._active){this._active=!1;let c,o;for(c=0,o=this.effects.length;c<o;c++)this.effects[c].stop();for(this.effects.length=0,c=0,o=this.cleanups.length;c<o;c++)this.cleanups[c]();if(this.cleanups.length=0,this.scopes){for(c=0,o=this.scopes.length;c<o;c++)this.scopes[c].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!a){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function BI(e){return new RI(e)}function DI(){return Ve}function qq(e,a=!1){Ve&&Ve.cleanups.push(e)}let xe;const wL=new WeakSet;class FI{constructor(a){this.fn=a,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wL.has(this)&&(wL.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||OI(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ib(this),EI(this);const a=xe,c=Qe;xe=this,Qe=!0;try{return this.fn()}finally{UI(this),xe=a,Qe=c,this.flags&=-3}}stop(){if(this.flags&1){for(let a=this.deps;a;a=a.nextDep)ib(a);this.deps=this.depsTail=void 0,Ib(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wL.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){BL(this)&&this.run()}get dirty(){return BL(this)}}let TI=0,lc,yc;function OI(e,a=!1){if(e.flags|=8,a){e.next=yc,yc=e;return}e.next=lc,lc=e}function nb(){TI++}function rb(){if(--TI>0)return;if(yc){let a=yc;for(yc=void 0;a;){const c=a.next;a.next=void 0,a.flags&=-9,a=c}}let e;for(;lc;){let a=lc;for(lc=void 0;a;){const c=a.next;if(a.next=void 0,a.flags&=-9,a.flags&1)try{a.trigger()}catch(o){e||(e=o)}a=c}}if(e)throw e}function EI(e){for(let a=e.deps;a;a=a.nextDep)a.version=-1,a.prevActiveLink=a.dep.activeLink,a.dep.activeLink=a}function UI(e){let a,c=e.depsTail,o=c;for(;o;){const n=o.prevDep;o.version===-1?(o===c&&(c=n),ib(o),Sq(o)):a=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=n}e.deps=a,e.depsTail=c}function BL(e){for(let a=e.deps;a;a=a.nextDep)if(a.dep.version!==a.version||a.dep.computed&&($I(a.dep.computed)||a.dep.version!==a.version))return!0;return!!e._dirty}function $I(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pc)||(e.globalVersion=Pc,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!BL(e))))return;e.flags|=2;const a=e.dep,c=xe,o=Qe;xe=e,Qe=!0;try{EI(e);const n=e.fn(e._value);(a.version===0||T1(n,e._value))&&(e.flags|=128,e._value=n,a.version++)}catch(n){throw a.version++,n}finally{xe=c,Qe=o,UI(e),e.flags&=-3}}function ib(e,a=!1){const{dep:c,prevSub:o,nextSub:n}=e;if(o&&(o.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=o,e.nextSub=void 0),c.subs===e&&(c.subs=o,!o&&c.computed)){c.computed.flags&=-5;for(let r=c.computed.deps;r;r=r.nextDep)ib(r,!0)}!a&&!--c.sc&&c.map&&c.map.delete(c.key)}function Sq(e){const{prevDep:a,nextDep:c}=e;a&&(a.nextDep=c,e.prevDep=void 0),c&&(c.prevDep=a,e.nextDep=void 0)}let Qe=!0;const ZI=[];function b1(){ZI.push(Qe),Qe=!1}function I1(){const e=ZI.pop();Qe=e===void 0?!0:e}function Ib(e){const{cleanup:a}=e;if(e.cleanup=void 0,a){const c=xe;xe=void 0;try{a()}finally{xe=c}}}let Pc=0,Aq=class{constructor(a,c){this.sub=a,this.dep=c,this.version=c.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class db{constructor(a){this.computed=a,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(a){if(!xe||!Qe||xe===this.computed)return;let c=this.activeLink;if(c===void 0||c.sub!==xe)c=this.activeLink=new Aq(xe,this),xe.deps?(c.prevDep=xe.depsTail,xe.depsTail.nextDep=c,xe.depsTail=c):xe.deps=xe.depsTail=c,NI(c);else if(c.version===-1&&(c.version=this.version,c.nextDep)){const o=c.nextDep;o.prevDep=c.prevDep,c.prevDep&&(c.prevDep.nextDep=o),c.prevDep=xe.depsTail,c.nextDep=void 0,xe.depsTail.nextDep=c,xe.depsTail=c,xe.deps===c&&(xe.deps=o)}return c}trigger(a){this.version++,Pc++,this.notify(a)}notify(a){nb();try{for(let c=this.subs;c;c=c.prevSub)c.sub.notify()&&c.sub.dep.notify()}finally{rb()}}}function NI(e){if(e.dep.sc++,e.sub.flags&4){const a=e.dep.computed;if(a&&!e.dep.subs){a.flags|=20;for(let o=a.deps;o;o=o.nextDep)NI(o)}const c=e.dep.subs;c!==e&&(e.prevSub=c,c&&(c.nextSub=e)),e.dep.subs=e}}const Kw=new WeakMap,P0=Symbol(""),DL=Symbol(""),_c=Symbol("");function je(e,a,c){if(Qe&&xe){let o=Kw.get(e);o||Kw.set(e,o=new Map);let n=o.get(c);n||(o.set(c,n=new db),n.map=o,n.key=c),n.track()}}function x1(e,a,c,o,n,r){const i=Kw.get(e);if(!i){Pc++;return}const h=d=>{d&&d.trigger()};if(nb(),a==="clear")i.forEach(h);else{const d=Q(e),s=d&&ab(c);if(d&&c==="length"){const l=Number(o);i.forEach((y,f)=>{(f==="length"||f===_c||!Ye(f)&&f>=l)&&h(y)})}else switch((c!==void 0||i.has(void 0))&&h(i.get(c)),s&&h(i.get(_c)),a){case"add":d?s&&h(i.get("length")):(h(i.get(P0)),$0(e)&&h(i.get(DL)));break;case"delete":d||(h(i.get(P0)),$0(e)&&h(i.get(DL)));break;case"set":$0(e)&&h(i.get(P0));break}}rb()}function zq(e,a){const c=Kw.get(e);return c&&c.get(a)}function F0(e){const a=le(e);return a===e?a:(je(a,"iterate",_c),We(e)?a:a.map(He))}function iL(e){return je(e=le(e),"iterate",_c),e}const Hq={__proto__:null,[Symbol.iterator](){return LL(this,Symbol.iterator,He)},concat(...e){return F0(this).concat(...e.map(a=>Q(a)?F0(a):a))},entries(){return LL(this,"entries",e=>(e[1]=He(e[1]),e))},every(e,a){return M1(this,"every",e,a,void 0,arguments)},filter(e,a){return M1(this,"filter",e,a,c=>c.map(He),arguments)},find(e,a){return M1(this,"find",e,a,He,arguments)},findIndex(e,a){return M1(this,"findIndex",e,a,void 0,arguments)},findLast(e,a){return M1(this,"findLast",e,a,He,arguments)},findLastIndex(e,a){return M1(this,"findLastIndex",e,a,void 0,arguments)},forEach(e,a){return M1(this,"forEach",e,a,void 0,arguments)},includes(...e){return bL(this,"includes",e)},indexOf(...e){return bL(this,"indexOf",e)},join(e){return F0(this).join(e)},lastIndexOf(...e){return bL(this,"lastIndexOf",e)},map(e,a){return M1(this,"map",e,a,void 0,arguments)},pop(){return rc(this,"pop")},push(...e){return rc(this,"push",e)},reduce(e,...a){return Cb(this,"reduce",e,a)},reduceRight(e,...a){return Cb(this,"reduceRight",e,a)},shift(){return rc(this,"shift")},some(e,a){return M1(this,"some",e,a,void 0,arguments)},splice(...e){return rc(this,"splice",e)},toReversed(){return F0(this).toReversed()},toSorted(e){return F0(this).toSorted(e)},toSpliced(...e){return F0(this).toSpliced(...e)},unshift(...e){return rc(this,"unshift",e)},values(){return LL(this,"values",He)}};function LL(e,a,c){const o=iL(e),n=o[a]();return o!==e&&!We(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.value&&(r.value=c(r.value)),r}),n}const Vq=Array.prototype;function M1(e,a,c,o,n,r){const i=iL(e),h=i!==e&&!We(e),d=i[a];if(d!==Vq[a]){const y=d.apply(e,r);return h?He(y):y}let s=c;i!==e&&(h?s=function(y,f){return c.call(this,He(y),f,e)}:c.length>2&&(s=function(y,f){return c.call(this,y,f,e)}));const l=d.call(i,s,o);return h&&n?n(l):l}function Cb(e,a,c,o){const n=iL(e);let r=c;return n!==e&&(We(e)?c.length>3&&(r=function(i,h,d){return c.call(this,i,h,d,e)}):r=function(i,h,d){return c.call(this,i,He(h),d,e)}),n[a](r,...o)}function bL(e,a,c){const o=le(e);je(o,"iterate",_c);const n=o[a](...c);return(n===-1||n===!1)&&lb(c[0])?(c[0]=le(c[0]),o[a](...c)):n}function rc(e,a,c=[]){b1(),nb();const o=le(e)[a].apply(e,c);return rb(),I1(),o}const jq=YL("__proto__,__v_isRef,__isVue"),GI=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ye));function Pq(e){Ye(e)||(e=String(e));const a=le(this);return je(a,"has",e),a.hasOwnProperty(e)}class WI{constructor(a=!1,c=!1){this._isReadonly=a,this._isShallow=c}get(a,c,o){if(c==="__v_skip")return a.__v_skip;const n=this._isReadonly,r=this._isShallow;if(c==="__v_isReactive")return!n;if(c==="__v_isReadonly")return n;if(c==="__v_isShallow")return r;if(c==="__v_raw")return o===(n?r?$q:JI:r?QI:XI).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const i=Q(a);if(!n){let d;if(i&&(d=Hq[c]))return d;if(c==="hasOwnProperty")return Pq}const h=Reflect.get(a,c,Ce(a)?a:o);return(Ye(c)?GI.has(c):jq(c))||(n||je(a,"get",c),r)?h:Ce(h)?i&&ab(c)?h:h.value:me(h)?n?eC(h):Wc(h):h}}class KI extends WI{constructor(a=!1){super(!1,a)}set(a,c,o,n){let r=a[c];if(!this._isShallow){const d=E1(r);if(!We(o)&&!E1(o)&&(r=le(r),o=le(o)),!Q(a)&&Ce(r)&&!Ce(o))return d?!1:(r.value=o,!0)}const i=Q(a)&&ab(c)?Number(c)<a.length:pe(a,c),h=Reflect.set(a,c,o,Ce(a)?a:n);return a===le(n)&&(i?T1(o,r)&&x1(a,"set",c,o):x1(a,"add",c,o)),h}deleteProperty(a,c){const o=pe(a,c);a[c];const n=Reflect.deleteProperty(a,c);return n&&o&&x1(a,"delete",c,void 0),n}has(a,c){const o=Reflect.has(a,c);return(!Ye(c)||!GI.has(c))&&je(a,"has",c),o}ownKeys(a){return je(a,"iterate",Q(a)?"length":P0),Reflect.ownKeys(a)}}class _q extends WI{constructor(a=!1){super(!0,a)}set(a,c){return!0}deleteProperty(a,c){return!0}}const Rq=new KI,Bq=new _q,Dq=new KI(!0);const FL=e=>e,eo=e=>Reflect.getPrototypeOf(e);function Fq(e,a,c){return function(...o){const n=this.__v_raw,r=le(n),i=$0(r),h=e==="entries"||e===Symbol.iterator&&i,d=e==="keys"&&i,s=n[e](...o),l=c?FL:a?Xw:He;return!a&&je(r,"iterate",d?DL:P0),{next(){const{value:y,done:f}=s.next();return f?{value:y,done:f}:{value:h?[l(y[0]),l(y[1])]:l(y),done:f}},[Symbol.iterator](){return this}}}}function to(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Tq(e,a){const c={get(n){const r=this.__v_raw,i=le(r),h=le(n);e||(T1(n,h)&&je(i,"get",n),je(i,"get",h));const{has:d}=eo(i),s=a?FL:e?Xw:He;if(d.call(i,n))return s(r.get(n));if(d.call(i,h))return s(r.get(h));r!==i&&r.get(n)},get size(){const n=this.__v_raw;return!e&&je(le(n),"iterate",P0),Reflect.get(n,"size",n)},has(n){const r=this.__v_raw,i=le(r),h=le(n);return e||(T1(n,h)&&je(i,"has",n),je(i,"has",h)),n===h?r.has(n):r.has(n)||r.has(h)},forEach(n,r){const i=this,h=i.__v_raw,d=le(h),s=a?FL:e?Xw:He;return!e&&je(d,"iterate",P0),h.forEach((l,y)=>n.call(r,s(l),s(y),i))}};return ze(c,e?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(n){!a&&!We(n)&&!E1(n)&&(n=le(n));const r=le(this);return eo(r).has.call(r,n)||(r.add(n),x1(r,"add",n,n)),this},set(n,r){!a&&!We(r)&&!E1(r)&&(r=le(r));const i=le(this),{has:h,get:d}=eo(i);let s=h.call(i,n);s||(n=le(n),s=h.call(i,n));const l=d.call(i,n);return i.set(n,r),s?T1(r,l)&&x1(i,"set",n,r):x1(i,"add",n,r),this},delete(n){const r=le(this),{has:i,get:h}=eo(r);let d=i.call(r,n);d||(n=le(n),d=i.call(r,n)),h&&h.call(r,n);const s=r.delete(n);return d&&x1(r,"delete",n,void 0),s},clear(){const n=le(this),r=n.size!==0,i=n.clear();return r&&x1(n,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=Fq(n,e,a)}),c}function hb(e,a){const c=Tq(e,a);return(o,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?o:Reflect.get(pe(c,n)&&n in o?c:o,n,r)}const Oq={get:hb(!1,!1)},Eq={get:hb(!1,!0)},Uq={get:hb(!0,!1)};const XI=new WeakMap,QI=new WeakMap,JI=new WeakMap,$q=new WeakMap;function Zq(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nq(e){return e.__v_skip||!Object.isExtensible(e)?0:Zq(fq(e))}function Wc(e){return E1(e)?e:sb(e,!1,Rq,Oq,XI)}function YI(e){return sb(e,!1,Dq,Eq,QI)}function eC(e){return sb(e,!0,Bq,Uq,JI)}function sb(e,a,c,o,n){if(!me(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const r=Nq(e);if(r===0)return e;const i=n.get(e);if(i)return i;const h=new Proxy(e,r===2?o:c);return n.set(e,h),h}function O1(e){return E1(e)?O1(e.__v_raw):!!(e&&e.__v_isReactive)}function E1(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function lb(e){return e?!!e.__v_raw:!1}function le(e){const a=e&&e.__v_raw;return a?le(a):e}function yb(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&RL(e,"__v_skip",!0),e}const He=e=>me(e)?Wc(e):e,Xw=e=>me(e)?eC(e):e;function Ce(e){return e?e.__v_isRef===!0:!1}function Z(e){return tC(e,!1)}function Gq(e){return tC(e,!0)}function tC(e,a){return Ce(e)?e:new Wq(e,a)}class Wq{constructor(a,c){this.dep=new db,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=c?a:le(a),this._value=c?a:He(a),this.__v_isShallow=c}get value(){return this.dep.track(),this._value}set value(a){const c=this._rawValue,o=this.__v_isShallow||We(a)||E1(a);a=o?a:le(a),T1(a,c)&&(this._rawValue=a,this._value=o?a:He(a),this.dep.trigger())}}function ce(e){return Ce(e)?e.value:e}const Kq={get:(e,a,c)=>a==="__v_raw"?e:ce(Reflect.get(e,a,c)),set:(e,a,c,o)=>{const n=e[a];return Ce(n)&&!Ce(c)?(n.value=c,!0):Reflect.set(e,a,c,o)}};function aC(e){return O1(e)?e:new Proxy(e,Kq)}function Xq(e){const a=Q(e)?new Array(e.length):{};for(const c in e)a[c]=Jq(e,c);return a}class Qq{constructor(a,c,o){this._object=a,this._key=c,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const a=this._object[this._key];return this._value=a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return zq(le(this._object),this._key)}}function Jq(e,a,c){const o=e[a];return Ce(o)?o:new Qq(e,a,c)}class Yq{constructor(a,c,o){this.fn=a,this.setter=c,this._value=void 0,this.dep=new db(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pc-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!c,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return OI(this,!0),!0}get value(){const a=this.dep.track();return $I(this),a&&(a.version=this.dep.version),this._value}set value(a){this.setter&&this.setter(a)}}function eS(e,a,c=!1){let o,n;return ne(e)?o=e:(o=e.get,n=e.set),new Yq(o,n,c)}const ao={},Qw=new WeakMap;let W1;function tS(e,a=!1,c=W1){if(c){let o=Qw.get(c);o||Qw.set(c,o=[]),o.push(e)}}function aS(e,a,c=ve){const{immediate:o,deep:n,once:r,scheduler:i,augmentJob:h,call:d}=c,s=D=>n?D:We(D)||n===!1||n===0?w1(D,1):w1(D);let l,y,f,M,I=!1,q=!1;if(Ce(e)?(y=()=>e.value,I=We(e)):O1(e)?(y=()=>s(e),I=!0):Q(e)?(q=!0,I=e.some(D=>O1(D)||We(D)),y=()=>e.map(D=>{if(Ce(D))return D.value;if(O1(D))return s(D);if(ne(D))return d?d(D,2):D()})):ne(e)?a?y=d?()=>d(e,2):e:y=()=>{if(f){b1();try{f()}finally{I1()}}const D=W1;W1=l;try{return d?d(e,3,[M]):e(M)}finally{W1=D}}:y=k1,a&&n){const D=y,G=n===!0?1/0:n;y=()=>w1(D(),G)}const K=DI(),$=()=>{l.stop(),K&&K.active&&tb(K.effects,l)};if(r&&a){const D=a;a=(...G)=>{D(...G),$()}}let O=q?new Array(e.length).fill(ao):ao;const N=D=>{if(!(!(l.flags&1)||!l.dirty&&!D))if(a){const G=l.run();if(n||I||(q?G.some((oe,U)=>T1(oe,O[U])):T1(G,O))){f&&f();const oe=W1;W1=l;try{const U=[G,O===ao?void 0:q&&O[0]===ao?[]:O,M];O=G,d?d(a,3,U):a(...U)}finally{W1=oe}}}else l.run()};return h&&h(N),l=new FI(y),l.scheduler=i?()=>i(N,!1):N,M=D=>tS(D,!1,l),f=l.onStop=()=>{const D=Qw.get(l);if(D){if(d)d(D,4);else for(const G of D)G();Qw.delete(l)}},a?o?N(!0):O=l.run():i?i(N.bind(null,!0),!0):l.run(),$.pause=l.pause.bind(l),$.resume=l.resume.bind(l),$.stop=$,$}function w1(e,a=1/0,c){if(a<=0||!me(e)||e.__v_skip||(c=c||new Set,c.has(e)))return e;if(c.add(e),a--,Ce(e))w1(e.value,a,c);else if(Q(e))for(let o=0;o<e.length;o++)w1(e[o],a,c);else if(oc(e)||$0(e))e.forEach(o=>{w1(o,a,c)});else if(VI(e)){for(const o in e)w1(e[o],a,c);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&w1(e[o],a,c)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kc(e,a,c,o){try{return o?e(...o):e()}catch(n){dL(n,a,c)}}function e1(e,a,c,o){if(ne(e)){const n=Kc(e,a,c,o);return n&&zI(n)&&n.catch(r=>{dL(r,a,c)}),n}if(Q(e)){const n=[];for(let r=0;r<e.length;r++)n.push(e1(e[r],a,c,o));return n}}function dL(e,a,c,o=!0){const n=a?a.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=a&&a.appContext.config||ve;if(a){let h=a.parent;const d=a.proxy,s=`https://vuejs.org/error-reference/#runtime-${c}`;for(;h;){const l=h.ec;if(l){for(let y=0;y<l.length;y++)if(l[y](e,d,s)===!1)return}h=h.parent}if(r){b1(),Kc(r,null,10,[e,d,s]),I1();return}}cS(e,c,n,o,i)}function cS(e,a,c,o=!0,n=!1){if(n)throw e;console.error(e)}const Re=[];let p1=-1;const Z0=[];let V1=null,O0=0;const cC=Promise.resolve();let Jw=null;function hL(e){const a=Jw||cC;return e?a.then(this?e.bind(this):e):a}function oS(e){let a=p1+1,c=Re.length;for(;a<c;){const o=a+c>>>1,n=Re[o],r=Rc(n);r<e||r===e&&n.flags&2?a=o+1:c=o}return a}function pb(e){if(!(e.flags&1)){const a=Rc(e),c=Re[Re.length-1];!c||!(e.flags&2)&&a>=Rc(c)?Re.push(e):Re.splice(oS(a),0,e),e.flags|=1,oC()}}function oC(){Jw||(Jw=cC.then(rC))}function nS(e){Q(e)?Z0.push(...e):V1&&e.id===-1?V1.splice(O0+1,0,e):e.flags&1||(Z0.push(e),e.flags|=1),oC()}function qb(e,a,c=p1+1){for(;c<Re.length;c++){const o=Re[c];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;Re.splice(c,1),c--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function nC(e){if(Z0.length){const a=[...new Set(Z0)].sort((c,o)=>Rc(c)-Rc(o));if(Z0.length=0,V1){V1.push(...a);return}for(V1=a,O0=0;O0<V1.length;O0++){const c=V1[O0];c.flags&4&&(c.flags&=-2),c.flags&8||c(),c.flags&=-2}V1=null,O0=0}}const Rc=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rC(e){try{for(p1=0;p1<Re.length;p1++){const a=Re[p1];a&&!(a.flags&8)&&(a.flags&4&&(a.flags&=-2),Kc(a,a.i,a.i?15:14),a.flags&4||(a.flags&=-2))}}finally{for(;p1<Re.length;p1++){const a=Re[p1];a&&(a.flags&=-2)}p1=-1,Re.length=0,nC(),Jw=null,(Re.length||Z0.length)&&rC()}}let qe=null,iC=null;function Yw(e){const a=qe;return qe=e,iC=e&&e.type.__scopeId||null,a}function be(e,a=qe,c){if(!a||e._n)return e;const o=(...n)=>{o._d&&Db(-1);const r=Yw(a);let i;try{i=e(...n)}finally{Yw(r),o._d&&Db(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function D1(e,a){if(qe===null)return e;const c=kL(qe),o=e.dirs||(e.dirs=[]);for(let n=0;n<a.length;n++){let[r,i,h,d=ve]=a[n];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&w1(i),o.push({dir:r,instance:c,value:i,oldValue:void 0,arg:h,modifiers:d}))}return e}function $1(e,a,c,o){const n=e.dirs,r=a&&a.dirs;for(let i=0;i<n.length;i++){const h=n[i];r&&(h.oldValue=r[i].value);let d=h.dir[o];d&&(b1(),e1(d,c,8,[e.el,h,e,a]),I1())}}const rS=Symbol("_vte"),dC=e=>e.__isTeleport,j1=Symbol("_leaveCb"),co=Symbol("_enterCb");function iS(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return a1(()=>{e.isMounted=!0}),MC(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],hC={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},sC=e=>{const a=e.subTree;return a.component?sC(a.component):a},dS={name:"BaseTransition",props:hC,setup(e,{slots:a}){const c=aA(),o=iS();return()=>{const n=a.default&&pC(a.default(),!0);if(!n||!n.length)return;const r=lC(n),i=le(e),{mode:h}=i;if(o.isLeaving)return IL(r);const d=Sb(r);if(!d)return IL(r);let s=TL(d,i,o,c,y=>s=y);d.type!==Pe&&Bc(d,s);let l=c.subTree&&Sb(c.subTree);if(l&&l.type!==Pe&&!V0(d,l)&&sC(c).type!==Pe){let y=TL(l,i,o,c);if(Bc(l,y),h==="out-in"&&d.type!==Pe)return o.isLeaving=!0,y.afterLeave=()=>{o.isLeaving=!1,c.job.flags&8||c.update(),delete y.afterLeave,l=void 0},IL(r);h==="in-out"&&d.type!==Pe?y.delayLeave=(f,M,I)=>{const q=yC(o,l);q[String(l.key)]=l,f[j1]=()=>{M(),f[j1]=void 0,delete s.delayedLeave,l=void 0},s.delayedLeave=()=>{I(),delete s.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function lC(e){let a=e[0];if(e.length>1){for(const c of e)if(c.type!==Pe){a=c;break}}return a}const hS=dS;function yC(e,a){const{leavingVNodes:c}=e;let o=c.get(a.type);return o||(o=Object.create(null),c.set(a.type,o)),o}function TL(e,a,c,o,n){const{appear:r,mode:i,persisted:h=!1,onBeforeEnter:d,onEnter:s,onAfterEnter:l,onEnterCancelled:y,onBeforeLeave:f,onLeave:M,onAfterLeave:I,onLeaveCancelled:q,onBeforeAppear:K,onAppear:$,onAfterAppear:O,onAppearCancelled:N}=a,D=String(e.key),G=yC(c,e),oe=(S,te)=>{S&&e1(S,o,9,te)},U=(S,te)=>{const he=te[1];oe(S,te),Q(S)?S.every(B=>B.length<=1)&&he():S.length<=1&&he()},ee={mode:i,persisted:h,beforeEnter(S){let te=d;if(!c.isMounted)if(r)te=K||d;else return;S[j1]&&S[j1](!0);const he=G[D];he&&V0(e,he)&&he.el[j1]&&he.el[j1](),oe(te,[S])},enter(S){let te=s,he=l,B=y;if(!c.isMounted)if(r)te=$||s,he=O||l,B=N||y;else return;let H=!1;const V=S[co]=ie=>{H||(H=!0,ie?oe(B,[S]):oe(he,[S]),ee.delayedLeave&&ee.delayedLeave(),S[co]=void 0)};te?U(te,[S,V]):V()},leave(S,te){const he=String(e.key);if(S[co]&&S[co](!0),c.isUnmounting)return te();oe(f,[S]);let B=!1;const H=S[j1]=V=>{B||(B=!0,te(),V?oe(q,[S]):oe(I,[S]),S[j1]=void 0,G[he]===e&&delete G[he])};G[he]=e,M?U(M,[S,H]):H()},clone(S){const te=TL(S,a,c,o,n);return n&&n(te),te}};return ee}function IL(e){if(sL(e))return e=U1(e),e.children=null,e}function Sb(e){if(!sL(e))return dC(e.type)&&e.children?lC(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:a,children:c}=e;if(c){if(a&16)return c[0];if(a&32&&ne(c.default))return c.default()}}function Bc(e,a){e.shapeFlag&6&&e.component?(e.transition=a,Bc(e.component.subTree,a)):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function pC(e,a=!1,c){let o=[],n=0;for(let r=0;r<e.length;r++){let i=e[r];const h=c==null?i.key:String(c)+String(i.key!=null?i.key:r);i.type===ke?(i.patchFlag&128&&n++,o=o.concat(pC(i.children,a,h))):(a||i.type!==Pe)&&o.push(h!=null?U1(i,{key:h}):i)}if(n>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function uC(e,a){return ne(e)?ze({name:e.name},a,{setup:e}):e}function kC(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function pc(e,a,c,o,n=!1){if(Q(e)){e.forEach((I,q)=>pc(I,a&&(Q(a)?a[q]:a),c,o,n));return}if(N0(o)&&!n){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&pc(e,a,c,o.component.subTree);return}const r=o.shapeFlag&4?kL(o.component):o.el,i=n?null:r,{i:h,r:d}=e,s=a&&a.r,l=h.refs===ve?h.refs={}:h.refs,y=h.setupState,f=le(y),M=y===ve?()=>!1:I=>pe(f,I);if(s!=null&&s!==d&&(Ie(s)?(l[s]=null,M(s)&&(y[s]=null)):Ce(s)&&(s.value=null)),ne(d))Kc(d,h,12,[i,l]);else{const I=Ie(d),q=Ce(d);if(I||q){const K=()=>{if(e.f){const $=I?M(d)?y[d]:l[d]:d.value;n?Q($)&&tb($,r):Q($)?$.includes(r)||$.push(r):I?(l[d]=[r],M(d)&&(y[d]=l[d])):(d.value=[r],e.k&&(l[e.k]=d.value))}else I?(l[d]=i,M(d)&&(y[d]=i)):q&&(d.value=i,e.k&&(l[e.k]=i))};i?(K.id=-1,$e(K,c)):K()}}}rL().requestIdleCallback;rL().cancelIdleCallback;const N0=e=>!!e.type.__asyncLoader,sL=e=>e.type.__isKeepAlive;function sS(e,a){fC(e,"a",a)}function lS(e,a){fC(e,"da",a)}function fC(e,a,c=Ae){const o=e.__wdc||(e.__wdc=()=>{let n=c;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(lL(a,o,c),c){let n=c.parent;for(;n&&n.parent;)sL(n.parent.vnode)&&yS(o,a,c,n),n=n.parent}}function yS(e,a,c,o){const n=lL(a,e,o,!0);vC(()=>{tb(o[a],n)},c)}function lL(e,a,c=Ae,o=!1){if(c){const n=c[e]||(c[e]=[]),r=a.__weh||(a.__weh=(...i)=>{b1();const h=Xc(c),d=e1(a,c,e,i);return h(),I1(),d});return o?n.unshift(r):n.push(r),r}}const q1=e=>(a,c=Ae)=>{(!Tc||e==="sp")&&lL(e,(...o)=>a(...o),c)},pS=q1("bm"),a1=q1("m"),uS=q1("bu"),kS=q1("u"),MC=q1("bum"),vC=q1("um"),fS=q1("sp"),MS=q1("rtg"),vS=q1("rtc");function mS(e,a=Ae){lL("ec",e,a)}const mC="components";function C1(e,a){return xC(mC,e,!0,a)||e}const gC=Symbol.for("v-ndc");function ro(e){return Ie(e)?xC(mC,e,!1)||e:e||gC}function xC(e,a,c=!0,o=!1){const n=qe||Ae;if(n){const r=n.type;{const h=iA(r,!1);if(h&&(h===a||h===Xe(a)||h===nL(Xe(a))))return r}const i=Ab(n[e]||r[e],a)||Ab(n.appContext[e],a);return!i&&o?r:i}}function Ab(e,a){return e&&(e[a]||e[Xe(a)]||e[nL(Xe(a))])}function Be(e,a,c,o){let n;const r=c,i=Q(e);if(i||Ie(e)){const h=i&&O1(e);let d=!1,s=!1;h&&(d=!We(e),s=E1(e),e=iL(e)),n=new Array(e.length);for(let l=0,y=e.length;l<y;l++)n[l]=a(d?s?Xw(He(e[l])):He(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let h=0;h<e;h++)n[h]=a(h+1,h,void 0,r)}else if(me(e))if(e[Symbol.iterator])n=Array.from(e,(h,d)=>a(h,d,void 0,r));else{const h=Object.keys(e);n=new Array(h.length);for(let d=0,s=h.length;d<s;d++){const l=h[d];n[d]=a(e[l],l,d,r)}}else n=[];return n}function yL(e,a,c={},o,n){if(qe.ce||qe.parent&&N0(qe.parent)&&qe.parent.ce)return m(),Se(ke,null,[P("slot",c,o)],64);let r=e[a];r&&r._c&&(r._d=!1),m();const i=r&&wC(r(c)),h=c.key||i&&i.key,d=Se(ke,{key:(h&&!Ye(h)?h:`_${a}`)+(!i&&o?"_fb":"")},i||[],i&&e._===1?64:-2);return!n&&d.scopeId&&(d.slotScopeIds=[d.scopeId+"-s"]),r&&r._c&&(r._d=!0),d}function wC(e){return e.some(a=>Fc(a)?!(a.type===Pe||a.type===ke&&!wC(a.children)):!0)?e:null}const OL=e=>e?EC(e)?kL(e):OL(e.parent):null,uc=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>OL(e.parent),$root:e=>OL(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bC(e),$forceUpdate:e=>e.f||(e.f=()=>{pb(e.update)}),$nextTick:e=>e.n||(e.n=hL.bind(e.proxy)),$watch:e=>OS.bind(e)}),CL=(e,a)=>e!==ve&&!e.__isScriptSetup&&pe(e,a),gS={get({_:e},a){if(a==="__v_skip")return!0;const{ctx:c,setupState:o,data:n,props:r,accessCache:i,type:h,appContext:d}=e;let s;if(a[0]!=="$"){const M=i[a];if(M!==void 0)switch(M){case 1:return o[a];case 2:return n[a];case 4:return c[a];case 3:return r[a]}else{if(CL(o,a))return i[a]=1,o[a];if(n!==ve&&pe(n,a))return i[a]=2,n[a];if((s=e.propsOptions[0])&&pe(s,a))return i[a]=3,r[a];if(c!==ve&&pe(c,a))return i[a]=4,c[a];EL&&(i[a]=0)}}const l=uc[a];let y,f;if(l)return a==="$attrs"&&je(e.attrs,"get",""),l(e);if((y=h.__cssModules)&&(y=y[a]))return y;if(c!==ve&&pe(c,a))return i[a]=4,c[a];if(f=d.config.globalProperties,pe(f,a))return f[a]},set({_:e},a,c){const{data:o,setupState:n,ctx:r}=e;return CL(n,a)?(n[a]=c,!0):o!==ve&&pe(o,a)?(o[a]=c,!0):pe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(r[a]=c,!0)},has({_:{data:e,setupState:a,accessCache:c,ctx:o,appContext:n,propsOptions:r}},i){let h;return!!c[i]||e!==ve&&pe(e,i)||CL(a,i)||(h=r[0])&&pe(h,i)||pe(o,i)||pe(uc,i)||pe(n.config.globalProperties,i)},defineProperty(e,a,c){return c.get!=null?e._.accessCache[a]=0:pe(c,"value")&&this.set(e,a,c.value,null),Reflect.defineProperty(e,a,c)}};function zb(e){return Q(e)?e.reduce((a,c)=>(a[c]=null,a),{}):e}let EL=!0;function xS(e){const a=bC(e),c=e.proxy,o=e.ctx;EL=!1,a.beforeCreate&&Hb(a.beforeCreate,e,"bc");const{data:n,computed:r,methods:i,watch:h,provide:d,inject:s,created:l,beforeMount:y,mounted:f,beforeUpdate:M,updated:I,activated:q,deactivated:K,beforeDestroy:$,beforeUnmount:O,destroyed:N,unmounted:D,render:G,renderTracked:oe,renderTriggered:U,errorCaptured:ee,serverPrefetch:S,expose:te,inheritAttrs:he,components:B,directives:H,filters:V}=a;if(s&&wS(s,o,null),i)for(const W in i){const re=i[W];ne(re)&&(o[W]=re.bind(c))}if(n){const W=n.call(c,c);me(W)&&(e.data=Wc(W))}if(EL=!0,r)for(const W in r){const re=r[W],De=ne(re)?re.bind(c,c):ne(re.get)?re.get.bind(c,c):k1,f1=!ne(re)&&ne(re.set)?re.set.bind(c):k1,o1=ue({get:De,set:f1});Object.defineProperty(o,W,{enumerable:!0,configurable:!0,get:()=>o1.value,set:Fe=>o1.value=Fe})}if(h)for(const W in h)LC(h[W],o,c,W);if(d){const W=ne(d)?d.call(c):d;Reflect.ownKeys(W).forEach(re=>{io(re,W[re])})}l&&Hb(l,e,"c");function T(W,re){Q(re)?re.forEach(De=>W(De.bind(c))):re&&W(re.bind(c))}if(T(pS,y),T(a1,f),T(uS,M),T(kS,I),T(sS,q),T(lS,K),T(mS,ee),T(vS,oe),T(MS,U),T(MC,O),T(vC,D),T(fS,S),Q(te))if(te.length){const W=e.exposed||(e.exposed={});te.forEach(re=>{Object.defineProperty(W,re,{get:()=>c[re],set:De=>c[re]=De})})}else e.exposed||(e.exposed={});G&&e.render===k1&&(e.render=G),he!=null&&(e.inheritAttrs=he),B&&(e.components=B),H&&(e.directives=H),S&&kC(e)}function wS(e,a,c=k1){Q(e)&&(e=UL(e));for(const o in e){const n=e[o];let r;me(n)?"default"in n?r=Ke(n.from||o,n.default,!0):r=Ke(n.from||o):r=Ke(n),Ce(r)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):a[o]=r}}function Hb(e,a,c){e1(Q(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,c)}function LC(e,a,c,o){let n=o.includes(".")?BC(c,o):()=>c[o];if(Ie(e)){const r=a[e];ne(r)&&Je(n,r)}else if(ne(e))Je(n,e.bind(c));else if(me(e))if(Q(e))e.forEach(r=>LC(r,a,c,o));else{const r=ne(e.handler)?e.handler.bind(c):a[e.handler];ne(r)&&Je(n,r,e)}}function bC(e){const a=e.type,{mixins:c,extends:o}=a,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,h=r.get(a);let d;return h?d=h:!n.length&&!c&&!o?d=a:(d={},n.length&&n.forEach(s=>eL(d,s,i,!0)),eL(d,a,i)),me(a)&&r.set(a,d),d}function eL(e,a,c,o=!1){const{mixins:n,extends:r}=a;r&&eL(e,r,c,!0),n&&n.forEach(i=>eL(e,i,c,!0));for(const i in a)if(!(o&&i==="expose")){const h=LS[i]||c&&c[i];e[i]=h?h(e[i],a[i]):a[i]}return e}const LS={data:Vb,props:jb,emits:jb,methods:hc,computed:hc,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:hc,directives:hc,watch:IS,provide:Vb,inject:bS};function Vb(e,a){return a?e?function(){return ze(ne(e)?e.call(this,this):e,ne(a)?a.call(this,this):a)}:a:e}function bS(e,a){return hc(UL(e),UL(a))}function UL(e){if(Q(e)){const a={};for(let c=0;c<e.length;c++)a[e[c]]=e[c];return a}return e}function _e(e,a){return e?[...new Set([].concat(e,a))]:a}function hc(e,a){return e?ze(Object.create(null),e,a):a}function jb(e,a){return e?Q(e)&&Q(a)?[...new Set([...e,...a])]:ze(Object.create(null),zb(e),zb(a??{})):a}function IS(e,a){if(!e)return a;if(!a)return e;const c=ze(Object.create(null),e);for(const o in a)c[o]=_e(e[o],a[o]);return c}function IC(){return{app:null,config:{isNativeTag:uq,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CS=0;function qS(e,a){return function(o,n=null){ne(o)||(o=ze({},o)),n!=null&&!me(n)&&(n=null);const r=IC(),i=new WeakSet,h=[];let d=!1;const s=r.app={_uid:CS++,_component:o,_props:n,_container:null,_context:r,_instance:null,version:hA,get config(){return r.config},set config(l){},use(l,...y){return i.has(l)||(l&&ne(l.install)?(i.add(l),l.install(s,...y)):ne(l)&&(i.add(l),l(s,...y))),s},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),s},component(l,y){return y?(r.components[l]=y,s):r.components[l]},directive(l,y){return y?(r.directives[l]=y,s):r.directives[l]},mount(l,y,f){if(!d){const M=s._ceVNode||P(o,n);return M.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(M,l,f),d=!0,s._container=l,l.__vue_app__=s,kL(M.component)}},onUnmount(l){h.push(l)},unmount(){d&&(e1(h,s._instance,16),e(null,s._container),delete s._container.__vue_app__)},provide(l,y){return r.provides[l]=y,s},runWithContext(l){const y=_0;_0=s;try{return l()}finally{_0=y}}};return s}}let _0=null;function io(e,a){if(Ae){let c=Ae.provides;const o=Ae.parent&&Ae.parent.provides;o===c&&(c=Ae.provides=Object.create(o)),c[e]=a}}function Ke(e,a,c=!1){const o=Ae||qe;if(o||_0){let n=_0?_0._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return c&&ne(a)?a.call(o&&o.proxy):a}}function SS(){return!!(Ae||qe||_0)}const CC={},qC=()=>Object.create(CC),SC=e=>Object.getPrototypeOf(e)===CC;function AS(e,a,c,o=!1){const n={},r=qC();e.propsDefaults=Object.create(null),AC(e,a,n,r);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);c?e.props=o?n:YI(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function zS(e,a,c,o){const{props:n,attrs:r,vnode:{patchFlag:i}}=e,h=le(n),[d]=e.propsOptions;let s=!1;if((o||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let y=0;y<l.length;y++){let f=l[y];if(pL(e.emitsOptions,f))continue;const M=a[f];if(d)if(pe(r,f))M!==r[f]&&(r[f]=M,s=!0);else{const I=Xe(f);n[I]=$L(d,h,I,M,e,!1)}else M!==r[f]&&(r[f]=M,s=!0)}}}else{AC(e,a,n,r)&&(s=!0);let l;for(const y in h)(!a||!pe(a,y)&&((l=R0(y))===y||!pe(a,l)))&&(d?c&&(c[y]!==void 0||c[l]!==void 0)&&(n[y]=$L(d,h,y,void 0,e,!0)):delete n[y]);if(r!==h)for(const y in r)(!a||!pe(a,y))&&(delete r[y],s=!0)}s&&x1(e.attrs,"set","")}function AC(e,a,c,o){const[n,r]=e.propsOptions;let i=!1,h;if(a)for(let d in a){if(sc(d))continue;const s=a[d];let l;n&&pe(n,l=Xe(d))?!r||!r.includes(l)?c[l]=s:(h||(h={}))[l]=s:pL(e.emitsOptions,d)||(!(d in o)||s!==o[d])&&(o[d]=s,i=!0)}if(r){const d=le(c),s=h||ve;for(let l=0;l<r.length;l++){const y=r[l];c[y]=$L(n,d,y,s[y],e,!pe(s,y))}}return i}function $L(e,a,c,o,n,r){const i=e[c];if(i!=null){const h=pe(i,"default");if(h&&o===void 0){const d=i.default;if(i.type!==Function&&!i.skipFactory&&ne(d)){const{propsDefaults:s}=n;if(c in s)o=s[c];else{const l=Xc(n);o=s[c]=d.call(null,a),l()}}else o=d;n.ce&&n.ce._setProp(c,o)}i[0]&&(r&&!h?o=!1:i[1]&&(o===""||o===R0(c))&&(o=!0))}return o}const HS=new WeakMap;function zC(e,a,c=!1){const o=c?HS:a.propsCache,n=o.get(e);if(n)return n;const r=e.props,i={},h=[];let d=!1;if(!ne(e)){const l=y=>{d=!0;const[f,M]=zC(y,a,!0);ze(i,f),M&&h.push(...M)};!c&&a.mixins.length&&a.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!d)return me(e)&&o.set(e,U0),U0;if(Q(r))for(let l=0;l<r.length;l++){const y=Xe(r[l]);Pb(y)&&(i[y]=ve)}else if(r)for(const l in r){const y=Xe(l);if(Pb(y)){const f=r[l],M=i[y]=Q(f)||ne(f)?{type:f}:ze({},f),I=M.type;let q=!1,K=!0;if(Q(I))for(let $=0;$<I.length;++$){const O=I[$],N=ne(O)&&O.name;if(N==="Boolean"){q=!0;break}else N==="String"&&(K=!1)}else q=ne(I)&&I.name==="Boolean";M[0]=q,M[1]=K,(q||pe(M,"default"))&&h.push(y)}}const s=[i,h];return me(e)&&o.set(e,s),s}function Pb(e){return e[0]!=="$"&&!sc(e)}const ub=e=>e[0]==="_"||e==="$stable",kb=e=>Q(e)?e.map(u1):[u1(e)],VS=(e,a,c)=>{if(a._n)return a;const o=be((...n)=>kb(a(...n)),c);return o._c=!1,o},HC=(e,a,c)=>{const o=e._ctx;for(const n in e){if(ub(n))continue;const r=e[n];if(ne(r))a[n]=VS(n,r,o);else if(r!=null){const i=kb(r);a[n]=()=>i}}},VC=(e,a)=>{const c=kb(a);e.slots.default=()=>c},jC=(e,a,c)=>{for(const o in a)(c||!ub(o))&&(e[o]=a[o])},jS=(e,a,c)=>{const o=e.slots=qC();if(e.vnode.shapeFlag&32){const n=a.__;n&&RL(o,"__",n,!0);const r=a._;r?(jC(o,a,c),c&&RL(o,"_",r,!0)):HC(a,o)}else a&&VC(e,a)},PS=(e,a,c)=>{const{vnode:o,slots:n}=e;let r=!0,i=ve;if(o.shapeFlag&32){const h=a._;h?c&&h===1?r=!1:jC(n,a,c):(r=!a.$stable,HC(a,n)),i=a}else a&&(VC(e,a),i={default:1});if(r)for(const h in n)!ub(h)&&i[h]==null&&delete n[h]},$e=WS;function _S(e){return RS(e)}function RS(e,a){const c=rL();c.__VUE__=!0;const{insert:o,remove:n,patchProp:r,createElement:i,createText:h,createComment:d,setText:s,setElementText:l,parentNode:y,nextSibling:f,setScopeId:M=k1,insertStaticContent:I}=e,q=(p,u,v,g=null,L=null,w=null,j=void 0,z=null,A=!!u.dynamicChildren)=>{if(p===u)return;p&&!V0(p,u)&&(g=x(p),Fe(p,L,w,!0),p=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:C,ref:Y,shapeFlag:R}=u;switch(C){case uL:K(p,u,v,g);break;case Pe:$(p,u,v,g);break;case ho:p==null&&O(u,v,g,j);break;case ke:B(p,u,v,g,L,w,j,z,A);break;default:R&1?G(p,u,v,g,L,w,j,z,A):R&6?H(p,u,v,g,L,w,j,z,A):(R&64||R&128)&&C.process(p,u,v,g,L,w,j,z,A,X)}Y!=null&&L?pc(Y,p&&p.ref,w,u||p,!u):Y==null&&p&&p.ref!=null&&pc(p.ref,null,w,p,!0)},K=(p,u,v,g)=>{if(p==null)o(u.el=h(u.children),v,g);else{const L=u.el=p.el;u.children!==p.children&&s(L,u.children)}},$=(p,u,v,g)=>{p==null?o(u.el=d(u.children||""),v,g):u.el=p.el},O=(p,u,v,g)=>{[p.el,p.anchor]=I(p.children,u,v,g,p.el,p.anchor)},N=({el:p,anchor:u},v,g)=>{let L;for(;p&&p!==u;)L=f(p),o(p,v,g),p=L;o(u,v,g)},D=({el:p,anchor:u})=>{let v;for(;p&&p!==u;)v=f(p),n(p),p=v;n(u)},G=(p,u,v,g,L,w,j,z,A)=>{u.type==="svg"?j="svg":u.type==="math"&&(j="mathml"),p==null?oe(u,v,g,L,w,j,z,A):S(p,u,L,w,j,z,A)},oe=(p,u,v,g,L,w,j,z)=>{let A,C;const{props:Y,shapeFlag:R,transition:J,dirs:ae}=p;if(A=p.el=i(p.type,w,Y&&Y.is,Y),R&8?l(A,p.children):R&16&&ee(p.children,A,null,g,L,qL(p,w),j,z),ae&&$1(p,null,g,"created"),U(A,p,p.scopeId,j,g),Y){for(const ge in Y)ge!=="value"&&!sc(ge)&&r(A,ge,null,Y[ge],w,g);"value"in Y&&r(A,"value",null,Y.value,w),(C=Y.onVnodeBeforeMount)&&d1(C,g,p)}ae&&$1(p,null,g,"beforeMount");const se=BS(L,J);se&&J.beforeEnter(A),o(A,u,v),((C=Y&&Y.onVnodeMounted)||se||ae)&&$e(()=>{C&&d1(C,g,p),se&&J.enter(A),ae&&$1(p,null,g,"mounted")},L)},U=(p,u,v,g,L)=>{if(v&&M(p,v),g)for(let w=0;w<g.length;w++)M(p,g[w]);if(L){let w=L.subTree;if(u===w||FC(w.type)&&(w.ssContent===u||w.ssFallback===u)){const j=L.vnode;U(p,j,j.scopeId,j.slotScopeIds,L.parent)}}},ee=(p,u,v,g,L,w,j,z,A=0)=>{for(let C=A;C<p.length;C++){const Y=p[C]=z?P1(p[C]):u1(p[C]);q(null,Y,u,v,g,L,w,j,z)}},S=(p,u,v,g,L,w,j)=>{const z=u.el=p.el;let{patchFlag:A,dynamicChildren:C,dirs:Y}=u;A|=p.patchFlag&16;const R=p.props||ve,J=u.props||ve;let ae;if(v&&Z1(v,!1),(ae=J.onVnodeBeforeUpdate)&&d1(ae,v,u,p),Y&&$1(u,p,v,"beforeUpdate"),v&&Z1(v,!0),(R.innerHTML&&J.innerHTML==null||R.textContent&&J.textContent==null)&&l(z,""),C?te(p.dynamicChildren,C,z,v,g,qL(u,L),w):j||re(p,u,z,null,v,g,qL(u,L),w,!1),A>0){if(A&16)he(z,R,J,v,L);else if(A&2&&R.class!==J.class&&r(z,"class",null,J.class,L),A&4&&r(z,"style",R.style,J.style,L),A&8){const se=u.dynamicProps;for(let ge=0;ge<se.length;ge++){const fe=se[ge],Te=R[fe],Oe=J[fe];(Oe!==Te||fe==="value")&&r(z,fe,Te,Oe,L,v)}}A&1&&p.children!==u.children&&l(z,u.children)}else!j&&C==null&&he(z,R,J,v,L);((ae=J.onVnodeUpdated)||Y)&&$e(()=>{ae&&d1(ae,v,u,p),Y&&$1(u,p,v,"updated")},g)},te=(p,u,v,g,L,w,j)=>{for(let z=0;z<u.length;z++){const A=p[z],C=u[z],Y=A.el&&(A.type===ke||!V0(A,C)||A.shapeFlag&198)?y(A.el):v;q(A,C,Y,null,g,L,w,j,!0)}},he=(p,u,v,g,L)=>{if(u!==v){if(u!==ve)for(const w in u)!sc(w)&&!(w in v)&&r(p,w,u[w],null,L,g);for(const w in v){if(sc(w))continue;const j=v[w],z=u[w];j!==z&&w!=="value"&&r(p,w,z,j,L,g)}"value"in v&&r(p,"value",u.value,v.value,L)}},B=(p,u,v,g,L,w,j,z,A)=>{const C=u.el=p?p.el:h(""),Y=u.anchor=p?p.anchor:h("");let{patchFlag:R,dynamicChildren:J,slotScopeIds:ae}=u;ae&&(z=z?z.concat(ae):ae),p==null?(o(C,v,g),o(Y,v,g),ee(u.children||[],v,Y,L,w,j,z,A)):R>0&&R&64&&J&&p.dynamicChildren?(te(p.dynamicChildren,J,v,L,w,j,z),(u.key!=null||L&&u===L.subTree)&&PC(p,u,!0)):re(p,u,v,Y,L,w,j,z,A)},H=(p,u,v,g,L,w,j,z,A)=>{u.slotScopeIds=z,p==null?u.shapeFlag&512?L.ctx.activate(u,v,g,j,A):V(u,v,g,L,w,j,A):ie(p,u,A)},V=(p,u,v,g,L,w,j)=>{const z=p.component=tA(p,g,L);if(sL(p)&&(z.ctx.renderer=X),cA(z,!1,j),z.asyncDep){if(L&&L.registerDep(z,T,j),!p.el){const A=z.subTree=P(Pe);$(null,A,u,v)}}else T(z,p,u,v,L,w,j)},ie=(p,u,v)=>{const g=u.component=p.component;if(NS(p,u,v))if(g.asyncDep&&!g.asyncResolved){W(g,u,v);return}else g.next=u,g.update();else u.el=p.el,g.vnode=u},T=(p,u,v,g,L,w,j)=>{const z=()=>{if(p.isMounted){let{next:R,bu:J,u:ae,parent:se,vnode:ge}=p;{const r1=_C(p);if(r1){R&&(R.el=ge.el,W(p,R,j)),r1.asyncDep.then(()=>{p.isUnmounted||z()});return}}let fe=R,Te;Z1(p,!1),R?(R.el=ge.el,W(p,R,j)):R=ge,J&&no(J),(Te=R.props&&R.props.onVnodeBeforeUpdate)&&d1(Te,se,R,ge),Z1(p,!0);const Oe=Rb(p),n1=p.subTree;p.subTree=Oe,q(n1,Oe,y(n1.el),x(n1),p,L,w),R.el=Oe.el,fe===null&&GS(p,Oe.el),ae&&$e(ae,L),(Te=R.props&&R.props.onVnodeUpdated)&&$e(()=>d1(Te,se,R,ge),L)}else{let R;const{el:J,props:ae}=u,{bm:se,m:ge,parent:fe,root:Te,type:Oe}=p,n1=N0(u);Z1(p,!1),se&&no(se),!n1&&(R=ae&&ae.onVnodeBeforeMount)&&d1(R,fe,u),Z1(p,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Oe);const r1=p.subTree=Rb(p);q(null,r1,v,g,p,L,w),u.el=r1.el}if(ge&&$e(ge,L),!n1&&(R=ae&&ae.onVnodeMounted)){const r1=u;$e(()=>d1(R,fe,r1),L)}(u.shapeFlag&256||fe&&N0(fe.vnode)&&fe.vnode.shapeFlag&256)&&p.a&&$e(p.a,L),p.isMounted=!0,u=v=g=null}};p.scope.on();const A=p.effect=new FI(z);p.scope.off();const C=p.update=A.run.bind(A),Y=p.job=A.runIfDirty.bind(A);Y.i=p,Y.id=p.uid,A.scheduler=()=>pb(Y),Z1(p,!0),C()},W=(p,u,v)=>{u.component=p;const g=p.vnode.props;p.vnode=u,p.next=null,zS(p,u.props,g,v),PS(p,u.children,v),b1(),qb(p),I1()},re=(p,u,v,g,L,w,j,z,A=!1)=>{const C=p&&p.children,Y=p?p.shapeFlag:0,R=u.children,{patchFlag:J,shapeFlag:ae}=u;if(J>0){if(J&128){f1(C,R,v,g,L,w,j,z,A);return}else if(J&256){De(C,R,v,g,L,w,j,z,A);return}}ae&8?(Y&16&&Ne(C,L,w),R!==C&&l(v,R)):Y&16?ae&16?f1(C,R,v,g,L,w,j,z,A):Ne(C,L,w,!0):(Y&8&&l(v,""),ae&16&&ee(R,v,g,L,w,j,z,A))},De=(p,u,v,g,L,w,j,z,A)=>{p=p||U0,u=u||U0;const C=p.length,Y=u.length,R=Math.min(C,Y);let J;for(J=0;J<R;J++){const ae=u[J]=A?P1(u[J]):u1(u[J]);q(p[J],ae,v,null,L,w,j,z,A)}C>Y?Ne(p,L,w,!0,!1,R):ee(u,v,g,L,w,j,z,A,R)},f1=(p,u,v,g,L,w,j,z,A)=>{let C=0;const Y=u.length;let R=p.length-1,J=Y-1;for(;C<=R&&C<=J;){const ae=p[C],se=u[C]=A?P1(u[C]):u1(u[C]);if(V0(ae,se))q(ae,se,v,null,L,w,j,z,A);else break;C++}for(;C<=R&&C<=J;){const ae=p[R],se=u[J]=A?P1(u[J]):u1(u[J]);if(V0(ae,se))q(ae,se,v,null,L,w,j,z,A);else break;R--,J--}if(C>R){if(C<=J){const ae=J+1,se=ae<Y?u[ae].el:g;for(;C<=J;)q(null,u[C]=A?P1(u[C]):u1(u[C]),v,se,L,w,j,z,A),C++}}else if(C>J)for(;C<=R;)Fe(p[C],L,w,!0),C++;else{const ae=C,se=C,ge=new Map;for(C=se;C<=J;C++){const Ee=u[C]=A?P1(u[C]):u1(u[C]);Ee.key!=null&&ge.set(Ee.key,C)}let fe,Te=0;const Oe=J-se+1;let n1=!1,r1=0;const nc=new Array(Oe);for(C=0;C<Oe;C++)nc[C]=0;for(C=ae;C<=R;C++){const Ee=p[C];if(Te>=Oe){Fe(Ee,L,w,!0);continue}let i1;if(Ee.key!=null)i1=ge.get(Ee.key);else for(fe=se;fe<=J;fe++)if(nc[fe-se]===0&&V0(Ee,u[fe])){i1=fe;break}i1===void 0?Fe(Ee,L,w,!0):(nc[i1-se]=C+1,i1>=r1?r1=i1:n1=!0,q(Ee,u[i1],v,null,L,w,j,z,A),Te++)}const xb=n1?DS(nc):U0;for(fe=xb.length-1,C=Oe-1;C>=0;C--){const Ee=se+C,i1=u[Ee],wb=Ee+1<Y?u[Ee+1].el:g;nc[C]===0?q(null,i1,v,wb,L,w,j,z,A):n1&&(fe<0||C!==xb[fe]?o1(i1,v,wb,2):fe--)}}},o1=(p,u,v,g,L=null)=>{const{el:w,type:j,transition:z,children:A,shapeFlag:C}=p;if(C&6){o1(p.component.subTree,u,v,g);return}if(C&128){p.suspense.move(u,v,g);return}if(C&64){j.move(p,u,v,X);return}if(j===ke){o(w,u,v);for(let R=0;R<A.length;R++)o1(A[R],u,v,g);o(p.anchor,u,v);return}if(j===ho){N(p,u,v);return}if(g!==2&&C&1&&z)if(g===0)z.beforeEnter(w),o(w,u,v),$e(()=>z.enter(w),L);else{const{leave:R,delayLeave:J,afterLeave:ae}=z,se=()=>{p.ctx.isUnmounted?n(w):o(w,u,v)},ge=()=>{R(w,()=>{se(),ae&&ae()})};J?J(w,se,ge):ge()}else o(w,u,v)},Fe=(p,u,v,g=!1,L=!1)=>{const{type:w,props:j,ref:z,children:A,dynamicChildren:C,shapeFlag:Y,patchFlag:R,dirs:J,cacheIndex:ae}=p;if(R===-2&&(L=!1),z!=null&&(b1(),pc(z,null,v,p,!0),I1()),ae!=null&&(u.renderCache[ae]=void 0),Y&256){u.ctx.deactivate(p);return}const se=Y&1&&J,ge=!N0(p);let fe;if(ge&&(fe=j&&j.onVnodeBeforeUnmount)&&d1(fe,u,p),Y&6)Yc(p.component,v,g);else{if(Y&128){p.suspense.unmount(v,g);return}se&&$1(p,null,u,"beforeUnmount"),Y&64?p.type.remove(p,u,v,X,g):C&&!C.hasOnce&&(w!==ke||R>0&&R&64)?Ne(C,u,v,!1,!0):(w===ke&&R&384||!L&&Y&16)&&Ne(A,u,v),g&&B0(p)}(ge&&(fe=j&&j.onVnodeUnmounted)||se)&&$e(()=>{fe&&d1(fe,u,p),se&&$1(p,null,u,"unmounted")},v)},B0=p=>{const{type:u,el:v,anchor:g,transition:L}=p;if(u===ke){D0(v,g);return}if(u===ho){D(p);return}const w=()=>{n(v),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(p.shapeFlag&1&&L&&!L.persisted){const{leave:j,delayLeave:z}=L,A=()=>j(v,w);z?z(p.el,w,A):A()}else w()},D0=(p,u)=>{let v;for(;p!==u;)v=f(p),n(p),p=v;n(u)},Yc=(p,u,v)=>{const{bum:g,scope:L,job:w,subTree:j,um:z,m:A,a:C,parent:Y,slots:{__:R}}=p;_b(A),_b(C),g&&no(g),Y&&Q(R)&&R.forEach(J=>{Y.renderCache[J]=void 0}),L.stop(),w&&(w.flags|=8,Fe(j,p,u,v)),z&&$e(z,u),$e(()=>{p.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ne=(p,u,v,g=!1,L=!1,w=0)=>{for(let j=w;j<p.length;j++)Fe(p[j],u,v,g,L)},x=p=>{if(p.shapeFlag&6)return x(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const u=f(p.anchor||p.el),v=u&&u[rS];return v?f(v):u};let E=!1;const _=(p,u,v)=>{p==null?u._vnode&&Fe(u._vnode,null,null,!0):q(u._vnode||null,p,u,null,null,null,v),u._vnode=p,E||(E=!0,qb(),nC(),E=!1)},X={p:q,um:Fe,m:o1,r:B0,mt:V,mc:ee,pc:re,pbc:te,n:x,o:e};return{render:_,hydrate:void 0,createApp:qS(_)}}function qL({type:e,props:a},c){return c==="svg"&&e==="foreignObject"||c==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:c}function Z1({effect:e,job:a},c){c?(e.flags|=32,a.flags|=4):(e.flags&=-33,a.flags&=-5)}function BS(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function PC(e,a,c=!1){const o=e.children,n=a.children;if(Q(o)&&Q(n))for(let r=0;r<o.length;r++){const i=o[r];let h=n[r];h.shapeFlag&1&&!h.dynamicChildren&&((h.patchFlag<=0||h.patchFlag===32)&&(h=n[r]=P1(n[r]),h.el=i.el),!c&&h.patchFlag!==-2&&PC(i,h)),h.type===uL&&(h.el=i.el),h.type===Pe&&!h.el&&(h.el=i.el)}}function DS(e){const a=e.slice(),c=[0];let o,n,r,i,h;const d=e.length;for(o=0;o<d;o++){const s=e[o];if(s!==0){if(n=c[c.length-1],e[n]<s){a[o]=n,c.push(o);continue}for(r=0,i=c.length-1;r<i;)h=r+i>>1,e[c[h]]<s?r=h+1:i=h;s<e[c[r]]&&(r>0&&(a[o]=c[r-1]),c[r]=o)}}for(r=c.length,i=c[r-1];r-- >0;)c[r]=i,i=a[i];return c}function _C(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:_C(a)}function _b(e){if(e)for(let a=0;a<e.length;a++)e[a].flags|=8}const FS=Symbol.for("v-scx"),TS=()=>Ke(FS);function Je(e,a,c){return RC(e,a,c)}function RC(e,a,c=ve){const{immediate:o,deep:n,flush:r,once:i}=c,h=ze({},c),d=a&&o||!a&&r!=="post";let s;if(Tc){if(r==="sync"){const M=TS();s=M.__watcherHandles||(M.__watcherHandles=[])}else if(!d){const M=()=>{};return M.stop=k1,M.resume=k1,M.pause=k1,M}}const l=Ae;h.call=(M,I,q)=>e1(M,l,I,q);let y=!1;r==="post"?h.scheduler=M=>{$e(M,l&&l.suspense)}:r!=="sync"&&(y=!0,h.scheduler=(M,I)=>{I?M():pb(M)}),h.augmentJob=M=>{a&&(M.flags|=4),y&&(M.flags|=2,l&&(M.id=l.uid,M.i=l))};const f=aS(e,a,h);return Tc&&(s?s.push(f):d&&f()),f}function OS(e,a,c){const o=this.proxy,n=Ie(e)?e.includes(".")?BC(o,e):()=>o[e]:e.bind(o,o);let r;ne(a)?r=a:(r=a.handler,c=a);const i=Xc(this),h=RC(n,r.bind(o),c);return i(),h}function BC(e,a){const c=a.split(".");return()=>{let o=e;for(let n=0;n<c.length&&o;n++)o=o[c[n]];return o}}const ES=(e,a)=>a==="modelValue"||a==="model-value"?e.modelModifiers:e[`${a}Modifiers`]||e[`${Xe(a)}Modifiers`]||e[`${R0(a)}Modifiers`];function US(e,a,...c){if(e.isUnmounted)return;const o=e.vnode.props||ve;let n=c;const r=a.startsWith("update:"),i=r&&ES(o,a.slice(7));i&&(i.trim&&(n=c.map(l=>Ie(l)?l.trim():l)),i.number&&(n=c.map(Ww)));let h,d=o[h=gL(a)]||o[h=gL(Xe(a))];!d&&r&&(d=o[h=gL(R0(a))]),d&&e1(d,e,6,n);const s=o[h+"Once"];if(s){if(!e.emitted)e.emitted={};else if(e.emitted[h])return;e.emitted[h]=!0,e1(s,e,6,n)}}function DC(e,a,c=!1){const o=a.emitsCache,n=o.get(e);if(n!==void 0)return n;const r=e.emits;let i={},h=!1;if(!ne(e)){const d=s=>{const l=DC(s,a,!0);l&&(h=!0,ze(i,l))};!c&&a.mixins.length&&a.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!r&&!h?(me(e)&&o.set(e,null),null):(Q(r)?r.forEach(d=>i[d]=null):ze(i,r),me(e)&&o.set(e,i),i)}function pL(e,a){return!e||!cL(a)?!1:(a=a.slice(2).replace(/Once$/,""),pe(e,a[0].toLowerCase()+a.slice(1))||pe(e,R0(a))||pe(e,a))}function Rb(e){const{type:a,vnode:c,proxy:o,withProxy:n,propsOptions:[r],slots:i,attrs:h,emit:d,render:s,renderCache:l,props:y,data:f,setupState:M,ctx:I,inheritAttrs:q}=e,K=Yw(e);let $,O;try{if(c.shapeFlag&4){const D=n||o,G=D;$=u1(s.call(G,D,l,y,M,f,I)),O=h}else{const D=a;$=u1(D.length>1?D(y,{attrs:h,slots:i,emit:d}):D(y,null)),O=a.props?h:$S(h)}}catch(D){kc.length=0,dL(D,e,1),$=P(Pe)}let N=$;if(O&&q!==!1){const D=Object.keys(O),{shapeFlag:G}=N;D.length&&G&7&&(r&&D.some(eb)&&(O=ZS(O,r)),N=U1(N,O,!1,!0))}return c.dirs&&(N=U1(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(c.dirs):c.dirs),c.transition&&Bc(N,c.transition),$=N,Yw(K),$}const $S=e=>{let a;for(const c in e)(c==="class"||c==="style"||cL(c))&&((a||(a={}))[c]=e[c]);return a},ZS=(e,a)=>{const c={};for(const o in e)(!eb(o)||!(o.slice(9)in a))&&(c[o]=e[o]);return c};function NS(e,a,c){const{props:o,children:n,component:r}=e,{props:i,children:h,patchFlag:d}=a,s=r.emitsOptions;if(a.dirs||a.transition)return!0;if(c&&d>=0){if(d&1024)return!0;if(d&16)return o?Bb(o,i,s):!!i;if(d&8){const l=a.dynamicProps;for(let y=0;y<l.length;y++){const f=l[y];if(i[f]!==o[f]&&!pL(s,f))return!0}}}else return(n||h)&&(!h||!h.$stable)?!0:o===i?!1:o?i?Bb(o,i,s):!0:!!i;return!1}function Bb(e,a,c){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let n=0;n<o.length;n++){const r=o[n];if(a[r]!==e[r]&&!pL(c,r))return!0}return!1}function GS({vnode:e,parent:a},c){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=c,a=a.parent;else break}}const FC=e=>e.__isSuspense;function WS(e,a){a&&a.pendingBranch?Q(e)?a.effects.push(...e):a.effects.push(e):nS(e)}const ke=Symbol.for("v-fgt"),uL=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),kc=[];let Ze=null;function m(e=!1){kc.push(Ze=e?null:[])}function KS(){kc.pop(),Ze=kc[kc.length-1]||null}let Dc=1;function Db(e,a=!1){Dc+=e,e<0&&Ze&&a&&(Ze.hasOnce=!0)}function TC(e){return e.dynamicChildren=Dc>0?Ze||U0:null,KS(),Dc>0&&Ze&&Ze.push(e),e}function b(e,a,c,o,n,r){return TC(k(e,a,c,o,n,r,!0))}function Se(e,a,c,o,n){return TC(P(e,a,c,o,n,!0))}function Fc(e){return e?e.__v_isVNode===!0:!1}function V0(e,a){return e.type===a.type&&e.key===a.key}const OC=({key:e})=>e??null,so=({ref:e,ref_key:a,ref_for:c})=>(typeof e=="number"&&(e=""+e),e!=null?Ie(e)||Ce(e)||ne(e)?{i:qe,r:e,k:a,f:!!c}:e:null);function k(e,a=null,c=null,o=0,n=null,r=e===ke?0:1,i=!1,h=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&OC(a),ref:a&&so(a),scopeId:iC,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:qe};return h?(fb(d,c),r&128&&e.normalize(d)):c&&(d.shapeFlag|=Ie(c)?8:16),Dc>0&&!i&&Ze&&(d.patchFlag>0||r&6)&&d.patchFlag!==32&&Ze.push(d),d}const P=XS;function XS(e,a=null,c=null,o=0,n=null,r=!1){if((!e||e===gC)&&(e=Pe),Fc(e)){const h=U1(e,a,!0);return c&&fb(h,c),Dc>0&&!r&&Ze&&(h.shapeFlag&6?Ze[Ze.indexOf(e)]=h:Ze.push(h)),h.patchFlag=-2,h}if(dA(e)&&(e=e.__vccOpts),a){a=QS(a);let{class:h,style:d}=a;h&&!Ie(h)&&(a.class=Le(h)),me(d)&&(lb(d)&&!Q(d)&&(d=ze({},d)),a.style=cb(d))}const i=Ie(e)?1:FC(e)?128:dC(e)?64:me(e)?4:ne(e)?2:0;return k(e,a,c,o,n,i,r,!0)}function QS(e){return e?lb(e)||SC(e)?ze({},e):e:null}function U1(e,a,c=!1,o=!1){const{props:n,ref:r,patchFlag:i,children:h,transition:d}=e,s=a?JS(n||{},a):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&OC(s),ref:a&&a.ref?c&&r?Q(r)?r.concat(so(a)):[r,so(a)]:so(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:h,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==ke?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:d,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&U1(e.ssContent),ssFallback:e.ssFallback&&U1(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return d&&o&&Bc(l,d.clone(l)),l}function we(e=" ",a=0){return P(uL,null,e,a)}function S1(e,a){const c=P(ho,null,e);return c.staticCount=a,c}function de(e="",a=!1){return a?(m(),Se(Pe,null,e)):P(Pe,null,e)}function u1(e){return e==null||typeof e=="boolean"?P(Pe):Q(e)?P(ke,null,e.slice()):Fc(e)?P1(e):P(uL,null,String(e))}function P1(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:U1(e)}function fb(e,a){let c=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(Q(a))c=16;else if(typeof a=="object")if(o&65){const n=a.default;n&&(n._c&&(n._d=!1),fb(e,n()),n._c&&(n._d=!0));return}else{c=32;const n=a._;!n&&!SC(a)?a._ctx=qe:n===3&&qe&&(qe.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else ne(a)?(a={default:a,_ctx:qe},c=32):(a=String(a),o&64?(c=16,a=[we(a)]):c=8);e.children=a,e.shapeFlag|=c}function JS(...e){const a={};for(let c=0;c<e.length;c++){const o=e[c];for(const n in o)if(n==="class")a.class!==o.class&&(a.class=Le([a.class,o.class]));else if(n==="style")a.style=cb([a.style,o.style]);else if(cL(n)){const r=a[n],i=o[n];i&&r!==i&&!(Q(r)&&r.includes(i))&&(a[n]=r?[].concat(r,i):i)}else n!==""&&(a[n]=o[n])}return a}function d1(e,a,c,o=null){e1(e,a,7,[c,o])}const YS=IC();let eA=0;function tA(e,a,c){const o=e.type,n=(a?a.appContext:e.appContext)||YS,r={uid:eA++,vnode:e,type:o,parent:a,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new RI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(n.provides),ids:a?a.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zC(o,n),emitsOptions:DC(o,n),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:o.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=a?a.root:r,r.emit=US.bind(null,r),e.ce&&e.ce(r),r}let Ae=null;const aA=()=>Ae||qe;let tL,ZL;{const e=rL(),a=(c,o)=>{let n;return(n=e[c])||(n=e[c]=[]),n.push(o),r=>{n.length>1?n.forEach(i=>i(r)):n[0](r)}};tL=a("__VUE_INSTANCE_SETTERS__",c=>Ae=c),ZL=a("__VUE_SSR_SETTERS__",c=>Tc=c)}const Xc=e=>{const a=Ae;return tL(e),e.scope.on(),()=>{e.scope.off(),tL(a)}},Fb=()=>{Ae&&Ae.scope.off(),tL(null)};function EC(e){return e.vnode.shapeFlag&4}let Tc=!1;function cA(e,a=!1,c=!1){a&&ZL(a);const{props:o,children:n}=e.vnode,r=EC(e);AS(e,o,r,a),jS(e,n,c||a);const i=r?oA(e,a):void 0;return a&&ZL(!1),i}function oA(e,a){const c=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gS);const{setup:o}=c;if(o){b1();const n=e.setupContext=o.length>1?rA(e):null,r=Xc(e),i=Kc(o,e,0,[e.props,n]),h=zI(i);if(I1(),r(),(h||e.sp)&&!N0(e)&&kC(e),h){if(i.then(Fb,Fb),a)return i.then(d=>{Tb(e,d)}).catch(d=>{dL(d,e,0)});e.asyncDep=i}else Tb(e,i)}else UC(e)}function Tb(e,a,c){ne(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:me(a)&&(e.setupState=aC(a)),UC(e)}function UC(e,a,c){const o=e.type;e.render||(e.render=o.render||k1);{const n=Xc(e);b1();try{xS(e)}finally{I1(),n()}}}const nA={get(e,a){return je(e,"get",""),e[a]}};function rA(e){const a=c=>{e.exposed=c||{}};return{attrs:new Proxy(e.attrs,nA),slots:e.slots,emit:e.emit,expose:a}}function kL(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(aC(yb(e.exposed)),{get(a,c){if(c in a)return a[c];if(c in uc)return uc[c](e)},has(a,c){return c in a||c in uc}})):e.proxy}function iA(e,a=!0){return ne(e)?e.displayName||e.name:e.name||a&&e.__name}function dA(e){return ne(e)&&"__vccOpts"in e}const ue=(e,a)=>eS(e,a,Tc);function ec(e,a,c){const o=arguments.length;return o===2?me(a)&&!Q(a)?Fc(a)?P(e,null,[a]):P(e,a):P(e,null,a):(o>3?c=Array.prototype.slice.call(arguments,2):o===3&&Fc(c)&&(c=[c]),P(e,a,c))}const hA="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let NL;const Ob=typeof window<"u"&&window.trustedTypes;if(Ob)try{NL=Ob.createPolicy("vue",{createHTML:e=>e})}catch{}const $C=NL?e=>NL.createHTML(e):e=>e,sA="http://www.w3.org/2000/svg",lA="http://www.w3.org/1998/Math/MathML",g1=typeof document<"u"?document:null,Eb=g1&&g1.createElement("template"),yA={insert:(e,a,c)=>{a.insertBefore(e,c||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,c,o)=>{const n=a==="svg"?g1.createElementNS(sA,e):a==="mathml"?g1.createElementNS(lA,e):c?g1.createElement(e,{is:c}):g1.createElement(e);return e==="select"&&o&&o.multiple!=null&&n.setAttribute("multiple",o.multiple),n},createText:e=>g1.createTextNode(e),createComment:e=>g1.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>g1.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,c,o,n,r){const i=c?c.previousSibling:a.lastChild;if(n&&(n===r||n.nextSibling))for(;a.insertBefore(n.cloneNode(!0),c),!(n===r||!(n=n.nextSibling)););else{Eb.innerHTML=$C(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const h=Eb.content;if(o==="svg"||o==="mathml"){const d=h.firstChild;for(;d.firstChild;)h.appendChild(d.firstChild);h.removeChild(d)}a.insertBefore(h,c)}return[i?i.nextSibling:a.firstChild,c?c.previousSibling:a.lastChild]}},A1="transition",ic="animation",Oc=Symbol("_vtc"),ZC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pA=ze({},hC,ZC),uA=e=>(e.displayName="Transition",e.props=pA,e),Ub=uA((e,{slots:a})=>ec(hS,kA(e),a)),N1=(e,a=[])=>{Q(e)?e.forEach(c=>c(...a)):e&&e(...a)},$b=e=>e?Q(e)?e.some(a=>a.length>1):e.length>1:!1;function kA(e){const a={};for(const B in e)B in ZC||(a[B]=e[B]);if(e.css===!1)return a;const{name:c="v",type:o,duration:n,enterFromClass:r=`${c}-enter-from`,enterActiveClass:i=`${c}-enter-active`,enterToClass:h=`${c}-enter-to`,appearFromClass:d=r,appearActiveClass:s=i,appearToClass:l=h,leaveFromClass:y=`${c}-leave-from`,leaveActiveClass:f=`${c}-leave-active`,leaveToClass:M=`${c}-leave-to`}=e,I=fA(n),q=I&&I[0],K=I&&I[1],{onBeforeEnter:$,onEnter:O,onEnterCancelled:N,onLeave:D,onLeaveCancelled:G,onBeforeAppear:oe=$,onAppear:U=O,onAppearCancelled:ee=N}=a,S=(B,H,V,ie)=>{B._enterCancelled=ie,G1(B,H?l:h),G1(B,H?s:i),V&&V()},te=(B,H)=>{B._isLeaving=!1,G1(B,y),G1(B,M),G1(B,f),H&&H()},he=B=>(H,V)=>{const ie=B?U:O,T=()=>S(H,B,V);N1(ie,[H,T]),Zb(()=>{G1(H,B?d:r),v1(H,B?l:h),$b(ie)||Nb(H,o,q,T)})};return ze(a,{onBeforeEnter(B){N1($,[B]),v1(B,r),v1(B,i)},onBeforeAppear(B){N1(oe,[B]),v1(B,d),v1(B,s)},onEnter:he(!1),onAppear:he(!0),onLeave(B,H){B._isLeaving=!0;const V=()=>te(B,H);v1(B,y),B._enterCancelled?(v1(B,f),Kb()):(Kb(),v1(B,f)),Zb(()=>{B._isLeaving&&(G1(B,y),v1(B,M),$b(D)||Nb(B,o,K,V))}),N1(D,[B,V])},onEnterCancelled(B){S(B,!1,void 0,!0),N1(N,[B])},onAppearCancelled(B){S(B,!0,void 0,!0),N1(ee,[B])},onLeaveCancelled(B){te(B),N1(G,[B])}})}function fA(e){if(e==null)return null;if(me(e))return[SL(e.enter),SL(e.leave)];{const a=SL(e);return[a,a]}}function SL(e){return mq(e)}function v1(e,a){a.split(/\s+/).forEach(c=>c&&e.classList.add(c)),(e[Oc]||(e[Oc]=new Set)).add(a)}function G1(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const c=e[Oc];c&&(c.delete(a),c.size||(e[Oc]=void 0))}function Zb(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let MA=0;function Nb(e,a,c,o){const n=e._endId=++MA,r=()=>{n===e._endId&&o()};if(c!=null)return setTimeout(r,c);const{type:i,timeout:h,propCount:d}=vA(e,a);if(!i)return o();const s=i+"end";let l=0;const y=()=>{e.removeEventListener(s,f),r()},f=M=>{M.target===e&&++l>=d&&y()};setTimeout(()=>{l<d&&y()},h+1),e.addEventListener(s,f)}function vA(e,a){const c=window.getComputedStyle(e),o=I=>(c[I]||"").split(", "),n=o(`${A1}Delay`),r=o(`${A1}Duration`),i=Gb(n,r),h=o(`${ic}Delay`),d=o(`${ic}Duration`),s=Gb(h,d);let l=null,y=0,f=0;a===A1?i>0&&(l=A1,y=i,f=r.length):a===ic?s>0&&(l=ic,y=s,f=d.length):(y=Math.max(i,s),l=y>0?i>s?A1:ic:null,f=l?l===A1?r.length:d.length:0);const M=l===A1&&/\b(transform|all)(,|$)/.test(o(`${A1}Property`).toString());return{type:l,timeout:y,propCount:f,hasTransform:M}}function Gb(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((c,o)=>Wb(c)+Wb(e[o])))}function Wb(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Kb(){return document.body.offsetHeight}function mA(e,a,c){const o=e[Oc];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):c?e.setAttribute("class",a):e.className=a}const Xb=Symbol("_vod"),gA=Symbol("_vsh"),xA=Symbol(""),wA=/(^|;)\s*display\s*:/;function LA(e,a,c){const o=e.style,n=Ie(c);let r=!1;if(c&&!n){if(a)if(Ie(a))for(const i of a.split(";")){const h=i.slice(0,i.indexOf(":")).trim();c[h]==null&&lo(o,h,"")}else for(const i in a)c[i]==null&&lo(o,i,"");for(const i in c)i==="display"&&(r=!0),lo(o,i,c[i])}else if(n){if(a!==c){const i=o[xA];i&&(c+=";"+i),o.cssText=c,r=wA.test(c)}}else a&&e.removeAttribute("style");Xb in e&&(e[Xb]=r?o.display:"",e[gA]&&(o.display="none"))}const Qb=/\s*!important$/;function lo(e,a,c){if(Q(c))c.forEach(o=>lo(e,a,o));else if(c==null&&(c=""),a.startsWith("--"))e.setProperty(a,c);else{const o=bA(e,a);Qb.test(c)?e.setProperty(R0(o),c.replace(Qb,""),"important"):e[o]=c}}const Jb=["Webkit","Moz","ms"],AL={};function bA(e,a){const c=AL[a];if(c)return c;let o=Xe(a);if(o!=="filter"&&o in e)return AL[a]=o;o=nL(o);for(let n=0;n<Jb.length;n++){const r=Jb[n]+o;if(r in e)return AL[a]=r}return a}const Yb="http://www.w3.org/1999/xlink";function eI(e,a,c,o,n,r=Iq(a)){o&&a.startsWith("xlink:")?c==null?e.removeAttributeNS(Yb,a.slice(6,a.length)):e.setAttributeNS(Yb,a,c):c==null||r&&!jI(c)?e.removeAttribute(a):e.setAttribute(a,r?"":Ye(c)?String(c):c)}function tI(e,a,c,o,n){if(a==="innerHTML"||a==="textContent"){c!=null&&(e[a]=a==="innerHTML"?$C(c):c);return}const r=e.tagName;if(a==="value"&&r!=="PROGRESS"&&!r.includes("-")){const h=r==="OPTION"?e.getAttribute("value")||"":e.value,d=c==null?e.type==="checkbox"?"on":"":String(c);(h!==d||!("_value"in e))&&(e.value=d),c==null&&e.removeAttribute(a),e._value=c;return}let i=!1;if(c===""||c==null){const h=typeof e[a];h==="boolean"?c=jI(c):c==null&&h==="string"?(c="",i=!0):h==="number"&&(c=0,i=!0)}try{e[a]=c}catch{}i&&e.removeAttribute(n||a)}function B1(e,a,c,o){e.addEventListener(a,c,o)}function IA(e,a,c,o){e.removeEventListener(a,c,o)}const aI=Symbol("_vei");function CA(e,a,c,o,n=null){const r=e[aI]||(e[aI]={}),i=r[a];if(o&&i)i.value=o;else{const[h,d]=qA(a);if(o){const s=r[a]=zA(o,n);B1(e,h,s,d)}else i&&(IA(e,h,i,d),r[a]=void 0)}}const cI=/(?:Once|Passive|Capture)$/;function qA(e){let a;if(cI.test(e)){a={};let o;for(;o=e.match(cI);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):R0(e.slice(2)),a]}let zL=0;const SA=Promise.resolve(),AA=()=>zL||(SA.then(()=>zL=0),zL=Date.now());function zA(e,a){const c=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=c.attached)return;e1(HA(o,c.value),a,5,[o])};return c.value=e,c.attached=AA(),c}function HA(e,a){if(Q(a)){const c=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{c.call(e),e._stopped=!0},a.map(o=>n=>!n._stopped&&o&&o(n))}else return a}const oI=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,VA=(e,a,c,o,n,r)=>{const i=n==="svg";a==="class"?mA(e,o,i):a==="style"?LA(e,c,o):cL(a)?eb(a)||CA(e,a,c,o,r):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):jA(e,a,o,i))?(tI(e,a,o),!e.tagName.includes("-")&&(a==="value"||a==="checked"||a==="selected")&&eI(e,a,o,i,r,a!=="value")):e._isVueCE&&(/[A-Z]/.test(a)||!Ie(o))?tI(e,Xe(a),o,r,a):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),eI(e,a,o,i))};function jA(e,a,c,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&oI(a)&&ne(c));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="autocorrect"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return oI(a)&&Ie(c)?!1:a in e}const tc=e=>{const a=e.props["onUpdate:modelValue"]||!1;return Q(a)?c=>no(a,c):a};function PA(e){e.target.composing=!0}function nI(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const L1=Symbol("_assign"),Ec={created(e,{modifiers:{lazy:a,trim:c,number:o}},n){e[L1]=tc(n);const r=o||n.props&&n.props.type==="number";B1(e,a?"change":"input",i=>{if(i.target.composing)return;let h=e.value;c&&(h=h.trim()),r&&(h=Ww(h)),e[L1](h)}),c&&B1(e,"change",()=>{e.value=e.value.trim()}),a||(B1(e,"compositionstart",PA),B1(e,"compositionend",nI),B1(e,"change",nI))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,oldValue:c,modifiers:{lazy:o,trim:n,number:r}},i){if(e[L1]=tc(i),e.composing)return;const h=(r||e.type==="number")&&!/^0\d/.test(e.value)?Ww(e.value):e.value,d=a??"";h!==d&&(document.activeElement===e&&e.type!=="range"&&(o&&a===c||n&&e.value.trim()===d)||(e.value=d))}},_A={deep:!0,created(e,a,c){e[L1]=tc(c),B1(e,"change",()=>{const o=e._modelValue,n=Uc(e),r=e.checked,i=e[L1];if(Q(o)){const h=ob(o,n),d=h!==-1;if(r&&!d)i(o.concat(n));else if(!r&&d){const s=[...o];s.splice(h,1),i(s)}}else if(oc(o)){const h=new Set(o);r?h.add(n):h.delete(n),i(h)}else i(GC(e,r))})},mounted:rI,beforeUpdate(e,a,c){e[L1]=tc(c),rI(e,a,c)}};function rI(e,{value:a,oldValue:c},o){e._modelValue=a;let n;if(Q(a))n=ob(a,o.props.value)>-1;else if(oc(a))n=a.has(o.props.value);else{if(a===c)return;n=Gc(a,GC(e,!0))}e.checked!==n&&(e.checked=n)}const NC={deep:!0,created(e,{value:a,modifiers:{number:c}},o){const n=oc(a);B1(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>c?Ww(Uc(i)):Uc(i));e[L1](e.multiple?n?new Set(r):r:r[0]),e._assigning=!0,hL(()=>{e._assigning=!1})}),e[L1]=tc(o)},mounted(e,{value:a}){iI(e,a)},beforeUpdate(e,a,c){e[L1]=tc(c)},updated(e,{value:a}){e._assigning||iI(e,a)}};function iI(e,a){const c=e.multiple,o=Q(a);if(!(c&&!o&&!oc(a))){for(let n=0,r=e.options.length;n<r;n++){const i=e.options[n],h=Uc(i);if(c)if(o){const d=typeof h;d==="string"||d==="number"?i.selected=a.some(s=>String(s)===String(h)):i.selected=ob(a,h)>-1}else i.selected=a.has(h);else if(Gc(Uc(i),a)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!c&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Uc(e){return"_value"in e?e._value:e.value}function GC(e,a){const c=a?"_trueValue":"_falseValue";return c in e?e[c]:a}const RA=["ctrl","shift","alt","meta"],BA={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>RA.some(c=>e[`${c}Key`]&&!a.includes(c))},j0=(e,a)=>{const c=e._withMods||(e._withMods={}),o=a.join(".");return c[o]||(c[o]=(n,...r)=>{for(let i=0;i<a.length;i++){const h=BA[a[i]];if(h&&h(n,a))return}return e(n,...r)})},DA=ze({patchProp:VA},yA);let dI;function FA(){return dI||(dI=_S(DA))}const TA=(...e)=>{const a=FA().createApp(...e),{mount:c}=a;return a.mount=o=>{const n=EA(o);if(!n)return;const r=a._component;!ne(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const i=c(n,!1,OA(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},a};function OA(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function EA(e){return Ie(e)?document.querySelector(e):e}const c1=(e,a)=>{const c=e.__vccOpts||e;for(const[o,n]of a)c[o]=n;return c},UA={},$A={id:"app"};function ZA(e,a){const c=C1("router-view");return m(),b("div",$A,[P(c)])}const NA=c1(UA,[["render",ZA]]);/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let WC;const fL=e=>WC=e,KC=Symbol();function GL(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var fc;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(fc||(fc={}));function GA(){const e=BI(!0),a=e.run(()=>Z({}));let c=[],o=[];const n=yb({install(r){fL(n),n._a=r,r.provide(KC,n),r.config.globalProperties.$pinia=n,o.forEach(i=>c.push(i)),o=[]},use(r){return this._a?c.push(r):o.push(r),this},_p:c,_a:null,_e:e,_s:new Map,state:a});return n}const XC=()=>{};function hI(e,a,c,o=XC){e.push(a);const n=()=>{const r=e.indexOf(a);r>-1&&(e.splice(r,1),o())};return!c&&DI()&&qq(n),n}function T0(e,...a){e.slice().forEach(c=>{c(...a)})}const WA=e=>e(),sI=Symbol(),HL=Symbol();function WL(e,a){e instanceof Map&&a instanceof Map?a.forEach((c,o)=>e.set(o,c)):e instanceof Set&&a instanceof Set&&a.forEach(e.add,e);for(const c in a){if(!a.hasOwnProperty(c))continue;const o=a[c],n=e[c];GL(n)&&GL(o)&&e.hasOwnProperty(c)&&!Ce(o)&&!O1(o)?e[c]=WL(n,o):e[c]=o}return e}const KA=Symbol();function XA(e){return!GL(e)||!Object.prototype.hasOwnProperty.call(e,KA)}const{assign:H1}=Object;function QA(e){return!!(Ce(e)&&e.effect)}function JA(e,a,c,o){const{state:n,actions:r,getters:i}=a,h=c.state.value[e];let d;function s(){h||(c.state.value[e]=n?n():{});const l=Xq(c.state.value[e]);return H1(l,r,Object.keys(i||{}).reduce((y,f)=>(y[f]=yb(ue(()=>{fL(c);const M=c._s.get(e);return i[f].call(M,M)})),y),{}))}return d=QC(e,s,a,c,o,!0),d}function QC(e,a,c={},o,n,r){let i;const h=H1({actions:{}},c),d={deep:!0};let s,l,y=[],f=[],M;const I=o.state.value[e];!r&&!I&&(o.state.value[e]={}),Z({});let q;function K(ee){let S;s=l=!1,typeof ee=="function"?(ee(o.state.value[e]),S={type:fc.patchFunction,storeId:e,events:M}):(WL(o.state.value[e],ee),S={type:fc.patchObject,payload:ee,storeId:e,events:M});const te=q=Symbol();hL().then(()=>{q===te&&(s=!0)}),l=!0,T0(y,S,o.state.value[e])}const $=r?function(){const{state:S}=c,te=S?S():{};this.$patch(he=>{H1(he,te)})}:XC;function O(){i.stop(),y=[],f=[],o._s.delete(e)}const N=(ee,S="")=>{if(sI in ee)return ee[HL]=S,ee;const te=function(){fL(o);const he=Array.from(arguments),B=[],H=[];function V(W){B.push(W)}function ie(W){H.push(W)}T0(f,{args:he,name:te[HL],store:G,after:V,onError:ie});let T;try{T=ee.apply(this&&this.$id===e?this:G,he)}catch(W){throw T0(H,W),W}return T instanceof Promise?T.then(W=>(T0(B,W),W)).catch(W=>(T0(H,W),Promise.reject(W))):(T0(B,T),T)};return te[sI]=!0,te[HL]=S,te},D={_p:o,$id:e,$onAction:hI.bind(null,f),$patch:K,$reset:$,$subscribe(ee,S={}){const te=hI(y,ee,S.detached,()=>he()),he=i.run(()=>Je(()=>o.state.value[e],B=>{(S.flush==="sync"?l:s)&&ee({storeId:e,type:fc.direct,events:M},B)},H1({},d,S)));return te},$dispose:O},G=Wc(D);o._s.set(e,G);const U=(o._a&&o._a.runWithContext||WA)(()=>o._e.run(()=>(i=BI()).run(()=>a({action:N}))));for(const ee in U){const S=U[ee];if(Ce(S)&&!QA(S)||O1(S))r||(I&&XA(S)&&(Ce(S)?S.value=I[ee]:WL(S,I[ee])),o.state.value[e][ee]=S);else if(typeof S=="function"){const te=N(S,ee);U[ee]=te,h.actions[ee]=S}}return H1(G,U),H1(le(G),U),Object.defineProperty(G,"$state",{get:()=>o.state.value[e],set:ee=>{K(S=>{H1(S,ee)})}}),o._p.forEach(ee=>{H1(G,i.run(()=>ee({store:G,app:o._a,pinia:o,options:h})))}),I&&r&&c.hydrate&&c.hydrate(G.$state,I),s=!0,l=!0,G}/*! #__NO_SIDE_EFFECTS__ */function YA(e,a,c){let o;const n=typeof a=="function";o=n?c:a;function r(i,h){const d=SS();return i=i||(d?Ke(KC,null):null),i&&fL(i),i=WC,i._s.has(e)||(n?QC(e,a,o,i):JA(e,o,i)),i._s.get(e)}return r.$id=e,r}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const E0=typeof document<"u";function JC(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ez(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&JC(e.default)}const ye=Object.assign;function VL(e,a){const c={};for(const o in a){const n=a[o];c[o]=t1(n)?n.map(e):e(n)}return c}const Mc=()=>{},t1=Array.isArray,YC=/#/g,tz=/&/g,az=/\//g,cz=/=/g,oz=/\?/g,eq=/\+/g,nz=/%5B/g,rz=/%5D/g,tq=/%5E/g,iz=/%60/g,aq=/%7B/g,dz=/%7C/g,cq=/%7D/g,hz=/%20/g;function Mb(e){return encodeURI(""+e).replace(dz,"|").replace(nz,"[").replace(rz,"]")}function sz(e){return Mb(e).replace(aq,"{").replace(cq,"}").replace(tq,"^")}function KL(e){return Mb(e).replace(eq,"%2B").replace(hz,"+").replace(YC,"%23").replace(tz,"%26").replace(iz,"`").replace(aq,"{").replace(cq,"}").replace(tq,"^")}function lz(e){return KL(e).replace(cz,"%3D")}function yz(e){return Mb(e).replace(YC,"%23").replace(oz,"%3F")}function pz(e){return e==null?"":yz(e).replace(az,"%2F")}function $c(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const uz=/\/$/,kz=e=>e.replace(uz,"");function jL(e,a,c="/"){let o,n={},r="",i="";const h=a.indexOf("#");let d=a.indexOf("?");return h<d&&h>=0&&(d=-1),d>-1&&(o=a.slice(0,d),r=a.slice(d+1,h>-1?h:a.length),n=e(r)),h>-1&&(o=o||a.slice(0,h),i=a.slice(h,a.length)),o=mz(o??a,c),{fullPath:o+(r&&"?")+r+i,path:o,query:n,hash:$c(i)}}function fz(e,a){const c=a.query?e(a.query):"";return a.path+(c&&"?")+c+(a.hash||"")}function lI(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Mz(e,a,c){const o=a.matched.length-1,n=c.matched.length-1;return o>-1&&o===n&&ac(a.matched[o],c.matched[n])&&oq(a.params,c.params)&&e(a.query)===e(c.query)&&a.hash===c.hash}function ac(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function oq(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const c in e)if(!vz(e[c],a[c]))return!1;return!0}function vz(e,a){return t1(e)?yI(e,a):t1(a)?yI(a,e):e===a}function yI(e,a){return t1(a)?e.length===a.length&&e.every((c,o)=>c===a[o]):e.length===1&&e[0]===a}function mz(e,a){if(e.startsWith("/"))return e;if(!e)return a;const c=a.split("/"),o=e.split("/"),n=o[o.length-1];(n===".."||n===".")&&o.push("");let r=c.length-1,i,h;for(i=0;i<o.length;i++)if(h=o[i],h!==".")if(h==="..")r>1&&r--;else break;return c.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const z1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zc;(function(e){e.pop="pop",e.push="push"})(Zc||(Zc={}));var vc;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vc||(vc={}));function gz(e){if(!e)if(E0){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),kz(e)}const xz=/^[^#]+#/;function wz(e,a){return e.replace(xz,"#")+a}function Lz(e,a){const c=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-c.left-(a.left||0),top:o.top-c.top-(a.top||0)}}const ML=()=>({left:window.scrollX,top:window.scrollY});function bz(e){let a;if("el"in e){const c=e.el,o=typeof c=="string"&&c.startsWith("#"),n=typeof c=="string"?o?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!n)return;a=Lz(n,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function pI(e,a){return(history.state?history.state.position-a:-1)+e}const XL=new Map;function Iz(e,a){XL.set(e,a)}function Cz(e){const a=XL.get(e);return XL.delete(e),a}let qz=()=>location.protocol+"//"+location.host;function nq(e,a){const{pathname:c,search:o,hash:n}=a,r=e.indexOf("#");if(r>-1){let h=n.includes(e.slice(r))?e.slice(r).length:1,d=n.slice(h);return d[0]!=="/"&&(d="/"+d),lI(d,"")}return lI(c,e)+o+n}function Sz(e,a,c,o){let n=[],r=[],i=null;const h=({state:f})=>{const M=nq(e,location),I=c.value,q=a.value;let K=0;if(f){if(c.value=M,a.value=f,i&&i===I){i=null;return}K=q?f.position-q.position:0}else o(M);n.forEach($=>{$(c.value,I,{delta:K,type:Zc.pop,direction:K?K>0?vc.forward:vc.back:vc.unknown})})};function d(){i=c.value}function s(f){n.push(f);const M=()=>{const I=n.indexOf(f);I>-1&&n.splice(I,1)};return r.push(M),M}function l(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:ML()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",h),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",h),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:d,listen:s,destroy:y}}function uI(e,a,c,o=!1,n=!1){return{back:e,current:a,forward:c,replaced:o,position:window.history.length,scroll:n?ML():null}}function Az(e){const{history:a,location:c}=window,o={value:nq(e,c)},n={value:a.state};n.value||r(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function r(d,s,l){const y=e.indexOf("#"),f=y>-1?(c.host&&document.querySelector("base")?e:e.slice(y))+d:qz()+e+d;try{a[l?"replaceState":"pushState"](s,"",f),n.value=s}catch(M){console.error(M),c[l?"replace":"assign"](f)}}function i(d,s){const l=ye({},a.state,uI(n.value.back,d,n.value.forward,!0),s,{position:n.value.position});r(d,l,!0),o.value=d}function h(d,s){const l=ye({},n.value,a.state,{forward:d,scroll:ML()});r(l.current,l,!0);const y=ye({},uI(o.value,d,null),{position:l.position+1},s);r(d,y,!1),o.value=d}return{location:o,state:n,push:h,replace:i}}function zz(e){e=gz(e);const a=Az(e),c=Sz(e,a.state,a.location,a.replace);function o(r,i=!0){i||c.pauseListeners(),history.go(r)}const n=ye({location:"",base:e,go:o,createHref:wz.bind(null,e)},a,c);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>a.state.value}),n}function Hz(e){return typeof e=="string"||e&&typeof e=="object"}function rq(e){return typeof e=="string"||typeof e=="symbol"}const iq=Symbol("");var kI;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(kI||(kI={}));function cc(e,a){return ye(new Error,{type:e,[iq]:!0},a)}function m1(e,a){return e instanceof Error&&iq in e&&(a==null||!!(e.type&a))}const fI="[^/]+?",Vz={sensitive:!1,strict:!1,start:!0,end:!0},jz=/[.+*?^${}()[\]/\\]/g;function Pz(e,a){const c=ye({},Vz,a),o=[];let n=c.start?"^":"";const r=[];for(const s of e){const l=s.length?[]:[90];c.strict&&!s.length&&(n+="/");for(let y=0;y<s.length;y++){const f=s[y];let M=40+(c.sensitive?.25:0);if(f.type===0)y||(n+="/"),n+=f.value.replace(jz,"\\$&"),M+=40;else if(f.type===1){const{value:I,repeatable:q,optional:K,regexp:$}=f;r.push({name:I,repeatable:q,optional:K});const O=$||fI;if(O!==fI){M+=10;try{new RegExp(`(${O})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${I}" (${O}): `+D.message)}}let N=q?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;y||(N=K&&s.length<2?`(?:/${N})`:"/"+N),K&&(N+="?"),n+=N,M+=20,K&&(M+=-8),q&&(M+=-20),O===".*"&&(M+=-50)}l.push(M)}o.push(l)}if(c.strict&&c.end){const s=o.length-1;o[s][o[s].length-1]+=.7000000000000001}c.strict||(n+="/?"),c.end?n+="$":c.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const i=new RegExp(n,c.sensitive?"":"i");function h(s){const l=s.match(i),y={};if(!l)return null;for(let f=1;f<l.length;f++){const M=l[f]||"",I=r[f-1];y[I.name]=M&&I.repeatable?M.split("/"):M}return y}function d(s){let l="",y=!1;for(const f of e){(!y||!l.endsWith("/"))&&(l+="/"),y=!1;for(const M of f)if(M.type===0)l+=M.value;else if(M.type===1){const{value:I,repeatable:q,optional:K}=M,$=I in s?s[I]:"";if(t1($)&&!q)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const O=t1($)?$.join("/"):$;if(!O)if(K)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):y=!0);else throw new Error(`Missing required param "${I}"`);l+=O}}return l||"/"}return{re:i,score:o,keys:r,parse:h,stringify:d}}function _z(e,a){let c=0;for(;c<e.length&&c<a.length;){const o=a[c]-e[c];if(o)return o;c++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function dq(e,a){let c=0;const o=e.score,n=a.score;for(;c<o.length&&c<n.length;){const r=_z(o[c],n[c]);if(r)return r;c++}if(Math.abs(n.length-o.length)===1){if(MI(o))return 1;if(MI(n))return-1}return n.length-o.length}function MI(e){const a=e[e.length-1];return e.length>0&&a[a.length-1]<0}const Rz={type:0,value:""},Bz=/[a-zA-Z0-9_]/;function Dz(e){if(!e)return[[]];if(e==="/")return[[Rz]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(M){throw new Error(`ERR (${c})/"${s}": ${M}`)}let c=0,o=c;const n=[];let r;function i(){r&&n.push(r),r=[]}let h=0,d,s="",l="";function y(){s&&(c===0?r.push({type:0,value:s}):c===1||c===2||c===3?(r.length>1&&(d==="*"||d==="+")&&a(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:s,regexp:l,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):a("Invalid state to consume buffer"),s="")}function f(){s+=d}for(;h<e.length;){if(d=e[h++],d==="\\"&&c!==2){o=c,c=4;continue}switch(c){case 0:d==="/"?(s&&y(),i()):d===":"?(y(),c=1):f();break;case 4:f(),c=o;break;case 1:d==="("?c=2:Bz.test(d)?f():(y(),c=0,d!=="*"&&d!=="?"&&d!=="+"&&h--);break;case 2:d===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+d:c=3:l+=d;break;case 3:y(),c=0,d!=="*"&&d!=="?"&&d!=="+"&&h--,l="";break;default:a("Unknown state");break}}return c===2&&a(`Unfinished custom RegExp for param "${s}"`),y(),i(),n}function Fz(e,a,c){const o=Pz(Dz(e.path),c),n=ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!n.record.aliasOf==!a.record.aliasOf&&a.children.push(n),n}function Tz(e,a){const c=[],o=new Map;a=xI({strict:!1,end:!0,sensitive:!1},a);function n(y){return o.get(y)}function r(y,f,M){const I=!M,q=mI(y);q.aliasOf=M&&M.record;const K=xI(a,y),$=[q];if("alias"in y){const D=typeof y.alias=="string"?[y.alias]:y.alias;for(const G of D)$.push(mI(ye({},q,{components:M?M.record.components:q.components,path:G,aliasOf:M?M.record:q})))}let O,N;for(const D of $){const{path:G}=D;if(f&&G[0]!=="/"){const oe=f.record.path,U=oe[oe.length-1]==="/"?"":"/";D.path=f.record.path+(G&&U+G)}if(O=Fz(D,f,K),M?M.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),I&&y.name&&!gI(O)&&i(y.name)),hq(O)&&d(O),q.children){const oe=q.children;for(let U=0;U<oe.length;U++)r(oe[U],O,M&&M.children[U])}M=M||O}return N?()=>{i(N)}:Mc}function i(y){if(rq(y)){const f=o.get(y);f&&(o.delete(y),c.splice(c.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=c.indexOf(y);f>-1&&(c.splice(f,1),y.record.name&&o.delete(y.record.name),y.children.forEach(i),y.alias.forEach(i))}}function h(){return c}function d(y){const f=Uz(y,c);c.splice(f,0,y),y.record.name&&!gI(y)&&o.set(y.record.name,y)}function s(y,f){let M,I={},q,K;if("name"in y&&y.name){if(M=o.get(y.name),!M)throw cc(1,{location:y});K=M.record.name,I=ye(vI(f.params,M.keys.filter(N=>!N.optional).concat(M.parent?M.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),y.params&&vI(y.params,M.keys.map(N=>N.name))),q=M.stringify(I)}else if(y.path!=null)q=y.path,M=c.find(N=>N.re.test(q)),M&&(I=M.parse(q),K=M.record.name);else{if(M=f.name?o.get(f.name):c.find(N=>N.re.test(f.path)),!M)throw cc(1,{location:y,currentLocation:f});K=M.record.name,I=ye({},f.params,y.params),q=M.stringify(I)}const $=[];let O=M;for(;O;)$.unshift(O.record),O=O.parent;return{name:K,path:q,params:I,matched:$,meta:Ez($)}}e.forEach(y=>r(y));function l(){c.length=0,o.clear()}return{addRoute:r,resolve:s,removeRoute:i,clearRoutes:l,getRoutes:h,getRecordMatcher:n}}function vI(e,a){const c={};for(const o of a)o in e&&(c[o]=e[o]);return c}function mI(e){const a={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Oz(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(a,"mods",{value:{}}),a}function Oz(e){const a={},c=e.props||!1;if("component"in e)a.default=c;else for(const o in e.components)a[o]=typeof c=="object"?c[o]:c;return a}function gI(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ez(e){return e.reduce((a,c)=>ye(a,c.meta),{})}function xI(e,a){const c={};for(const o in e)c[o]=o in a?a[o]:e[o];return c}function Uz(e,a){let c=0,o=a.length;for(;c!==o;){const r=c+o>>1;dq(e,a[r])<0?o=r:c=r+1}const n=$z(e);return n&&(o=a.lastIndexOf(n,o-1)),o}function $z(e){let a=e;for(;a=a.parent;)if(hq(a)&&dq(e,a)===0)return a}function hq({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Zz(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<o.length;++n){const r=o[n].replace(eq," "),i=r.indexOf("="),h=$c(i<0?r:r.slice(0,i)),d=i<0?null:$c(r.slice(i+1));if(h in a){let s=a[h];t1(s)||(s=a[h]=[s]),s.push(d)}else a[h]=d}return a}function wI(e){let a="";for(let c in e){const o=e[c];if(c=lz(c),o==null){o!==void 0&&(a+=(a.length?"&":"")+c);continue}(t1(o)?o.map(r=>r&&KL(r)):[o&&KL(o)]).forEach(r=>{r!==void 0&&(a+=(a.length?"&":"")+c,r!=null&&(a+="="+r))})}return a}function Nz(e){const a={};for(const c in e){const o=e[c];o!==void 0&&(a[c]=t1(o)?o.map(n=>n==null?null:""+n):o==null?o:""+o)}return a}const Gz=Symbol(""),LI=Symbol(""),vL=Symbol(""),vb=Symbol(""),QL=Symbol("");function dc(){let e=[];function a(o){return e.push(o),()=>{const n=e.indexOf(o);n>-1&&e.splice(n,1)}}function c(){e=[]}return{add:a,list:()=>e.slice(),reset:c}}function _1(e,a,c,o,n,r=i=>i()){const i=o&&(o.enterCallbacks[n]=o.enterCallbacks[n]||[]);return()=>new Promise((h,d)=>{const s=f=>{f===!1?d(cc(4,{from:c,to:a})):f instanceof Error?d(f):Hz(f)?d(cc(2,{from:a,to:f})):(i&&o.enterCallbacks[n]===i&&typeof f=="function"&&i.push(f),h())},l=r(()=>e.call(o&&o.instances[n],a,c,s));let y=Promise.resolve(l);e.length<3&&(y=y.then(s)),y.catch(f=>d(f))})}function PL(e,a,c,o,n=r=>r()){const r=[];for(const i of e)for(const h in i.components){let d=i.components[h];if(!(a!=="beforeRouteEnter"&&!i.instances[h]))if(JC(d)){const l=(d.__vccOpts||d)[a];l&&r.push(_1(l,c,o,i,h,n))}else{let s=d();r.push(()=>s.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${h}" at "${i.path}"`);const y=ez(l)?l.default:l;i.mods[h]=l,i.components[h]=y;const M=(y.__vccOpts||y)[a];return M&&_1(M,c,o,i,h,n)()}))}}return r}function bI(e){const a=Ke(vL),c=Ke(vb),o=ue(()=>{const d=ce(e.to);return a.resolve(d)}),n=ue(()=>{const{matched:d}=o.value,{length:s}=d,l=d[s-1],y=c.matched;if(!l||!y.length)return-1;const f=y.findIndex(ac.bind(null,l));if(f>-1)return f;const M=II(d[s-2]);return s>1&&II(l)===M&&y[y.length-1].path!==M?y.findIndex(ac.bind(null,d[s-2])):f}),r=ue(()=>n.value>-1&&Jz(c.params,o.value.params)),i=ue(()=>n.value>-1&&n.value===c.matched.length-1&&oq(c.params,o.value.params));function h(d={}){if(Qz(d)){const s=a[ce(e.replace)?"replace":"push"](ce(e.to)).catch(Mc);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>s),s}return Promise.resolve()}return{route:o,href:ue(()=>o.value.href),isActive:r,isExactActive:i,navigate:h}}function Wz(e){return e.length===1?e[0]:e}const Kz=uC({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bI,setup(e,{slots:a}){const c=Wc(bI(e)),{options:o}=Ke(vL),n=ue(()=>({[CI(e.activeClass,o.linkActiveClass,"router-link-active")]:c.isActive,[CI(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const r=a.default&&Wz(a.default(c));return e.custom?r:ec("a",{"aria-current":c.isExactActive?e.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:n.value},r)}}}),Xz=Kz;function Qz(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function Jz(e,a){for(const c in a){const o=a[c],n=e[c];if(typeof o=="string"){if(o!==n)return!1}else if(!t1(n)||n.length!==o.length||o.some((r,i)=>r!==n[i]))return!1}return!0}function II(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const CI=(e,a,c)=>e??a??c,Yz=uC({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:a,slots:c}){const o=Ke(QL),n=ue(()=>e.route||o.value),r=Ke(LI,0),i=ue(()=>{let s=ce(r);const{matched:l}=n.value;let y;for(;(y=l[s])&&!y.components;)s++;return s}),h=ue(()=>n.value.matched[i.value]);io(LI,ue(()=>i.value+1)),io(Gz,h),io(QL,n);const d=Z();return Je(()=>[d.value,h.value,e.name],([s,l,y],[f,M,I])=>{l&&(l.instances[y]=s,M&&M!==l&&s&&s===f&&(l.leaveGuards.size||(l.leaveGuards=M.leaveGuards),l.updateGuards.size||(l.updateGuards=M.updateGuards))),s&&l&&(!M||!ac(l,M)||!f)&&(l.enterCallbacks[y]||[]).forEach(q=>q(s))},{flush:"post"}),()=>{const s=n.value,l=e.name,y=h.value,f=y&&y.components[l];if(!f)return qI(c.default,{Component:f,route:s});const M=y.props[l],I=M?M===!0?s.params:typeof M=="function"?M(s):M:null,K=ec(f,ye({},I,a,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(y.instances[l]=null)},ref:d}));return qI(c.default,{Component:K,route:s})||K}}});function qI(e,a){if(!e)return null;const c=e(a);return c.length===1?c[0]:c}const eH=Yz;function tH(e){const a=Tz(e.routes,e),c=e.parseQuery||Zz,o=e.stringifyQuery||wI,n=e.history,r=dc(),i=dc(),h=dc(),d=Gq(z1);let s=z1;E0&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=VL.bind(null,x=>""+x),y=VL.bind(null,pz),f=VL.bind(null,$c);function M(x,E){let _,X;return rq(x)?(_=a.getRecordMatcher(x),X=E):X=x,a.addRoute(X,_)}function I(x){const E=a.getRecordMatcher(x);E&&a.removeRoute(E)}function q(){return a.getRoutes().map(x=>x.record)}function K(x){return!!a.getRecordMatcher(x)}function $(x,E){if(E=ye({},E||d.value),typeof x=="string"){const v=jL(c,x,E.path),g=a.resolve({path:v.path},E),L=n.createHref(v.fullPath);return ye(v,g,{params:f(g.params),hash:$c(v.hash),redirectedFrom:void 0,href:L})}let _;if(x.path!=null)_=ye({},x,{path:jL(c,x.path,E.path).path});else{const v=ye({},x.params);for(const g in v)v[g]==null&&delete v[g];_=ye({},x,{params:y(v)}),E.params=y(E.params)}const X=a.resolve(_,E),Me=x.hash||"";X.params=l(f(X.params));const p=fz(o,ye({},x,{hash:sz(Me),path:X.path})),u=n.createHref(p);return ye({fullPath:p,hash:Me,query:o===wI?Nz(x.query):x.query||{}},X,{redirectedFrom:void 0,href:u})}function O(x){return typeof x=="string"?jL(c,x,d.value.path):ye({},x)}function N(x,E){if(s!==x)return cc(8,{from:E,to:x})}function D(x){return U(x)}function G(x){return D(ye(O(x),{replace:!0}))}function oe(x){const E=x.matched[x.matched.length-1];if(E&&E.redirect){const{redirect:_}=E;let X=typeof _=="function"?_(x):_;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=O(X):{path:X},X.params={}),ye({query:x.query,hash:x.hash,params:X.path!=null?{}:x.params},X)}}function U(x,E){const _=s=$(x),X=d.value,Me=x.state,p=x.force,u=x.replace===!0,v=oe(_);if(v)return U(ye(O(v),{state:typeof v=="object"?ye({},Me,v.state):Me,force:p,replace:u}),E||_);const g=_;g.redirectedFrom=E;let L;return!p&&Mz(o,X,_)&&(L=cc(16,{to:g,from:X}),o1(X,X,!0,!1)),(L?Promise.resolve(L):te(g,X)).catch(w=>m1(w)?m1(w,2)?w:f1(w):re(w,g,X)).then(w=>{if(w){if(m1(w,2))return U(ye({replace:u},O(w.to),{state:typeof w.to=="object"?ye({},Me,w.to.state):Me,force:p}),E||g)}else w=B(g,X,!0,u,Me);return he(g,X,w),w})}function ee(x,E){const _=N(x,E);return _?Promise.reject(_):Promise.resolve()}function S(x){const E=D0.values().next().value;return E&&typeof E.runWithContext=="function"?E.runWithContext(x):x()}function te(x,E){let _;const[X,Me,p]=aH(x,E);_=PL(X.reverse(),"beforeRouteLeave",x,E);for(const v of X)v.leaveGuards.forEach(g=>{_.push(_1(g,x,E))});const u=ee.bind(null,x,E);return _.push(u),Ne(_).then(()=>{_=[];for(const v of r.list())_.push(_1(v,x,E));return _.push(u),Ne(_)}).then(()=>{_=PL(Me,"beforeRouteUpdate",x,E);for(const v of Me)v.updateGuards.forEach(g=>{_.push(_1(g,x,E))});return _.push(u),Ne(_)}).then(()=>{_=[];for(const v of p)if(v.beforeEnter)if(t1(v.beforeEnter))for(const g of v.beforeEnter)_.push(_1(g,x,E));else _.push(_1(v.beforeEnter,x,E));return _.push(u),Ne(_)}).then(()=>(x.matched.forEach(v=>v.enterCallbacks={}),_=PL(p,"beforeRouteEnter",x,E,S),_.push(u),Ne(_))).then(()=>{_=[];for(const v of i.list())_.push(_1(v,x,E));return _.push(u),Ne(_)}).catch(v=>m1(v,8)?v:Promise.reject(v))}function he(x,E,_){h.list().forEach(X=>S(()=>X(x,E,_)))}function B(x,E,_,X,Me){const p=N(x,E);if(p)return p;const u=E===z1,v=E0?history.state:{};_&&(X||u?n.replace(x.fullPath,ye({scroll:u&&v&&v.scroll},Me)):n.push(x.fullPath,Me)),d.value=x,o1(x,E,_,u),f1()}let H;function V(){H||(H=n.listen((x,E,_)=>{if(!Yc.listening)return;const X=$(x),Me=oe(X);if(Me){U(ye(Me,{replace:!0,force:!0}),X).catch(Mc);return}s=X;const p=d.value;E0&&Iz(pI(p.fullPath,_.delta),ML()),te(X,p).catch(u=>m1(u,12)?u:m1(u,2)?(U(ye(O(u.to),{force:!0}),X).then(v=>{m1(v,20)&&!_.delta&&_.type===Zc.pop&&n.go(-1,!1)}).catch(Mc),Promise.reject()):(_.delta&&n.go(-_.delta,!1),re(u,X,p))).then(u=>{u=u||B(X,p,!1),u&&(_.delta&&!m1(u,8)?n.go(-_.delta,!1):_.type===Zc.pop&&m1(u,20)&&n.go(-1,!1)),he(X,p,u)}).catch(Mc)}))}let ie=dc(),T=dc(),W;function re(x,E,_){f1(x);const X=T.list();return X.length?X.forEach(Me=>Me(x,E,_)):console.error(x),Promise.reject(x)}function De(){return W&&d.value!==z1?Promise.resolve():new Promise((x,E)=>{ie.add([x,E])})}function f1(x){return W||(W=!x,V(),ie.list().forEach(([E,_])=>x?_(x):E()),ie.reset()),x}function o1(x,E,_,X){const{scrollBehavior:Me}=e;if(!E0||!Me)return Promise.resolve();const p=!_&&Cz(pI(x.fullPath,0))||(X||!_)&&history.state&&history.state.scroll||null;return hL().then(()=>Me(x,E,p)).then(u=>u&&bz(u)).catch(u=>re(u,x,E))}const Fe=x=>n.go(x);let B0;const D0=new Set,Yc={currentRoute:d,listening:!0,addRoute:M,removeRoute:I,clearRoutes:a.clearRoutes,hasRoute:K,getRoutes:q,resolve:$,options:e,push:D,replace:G,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:h.add,onError:T.add,isReady:De,install(x){const E=this;x.component("RouterLink",Xz),x.component("RouterView",eH),x.config.globalProperties.$router=E,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(d)}),E0&&!B0&&d.value===z1&&(B0=!0,D(n.location).catch(Me=>{}));const _={};for(const Me in z1)Object.defineProperty(_,Me,{get:()=>d.value[Me],enumerable:!0});x.provide(vL,E),x.provide(vb,YI(_)),x.provide(QL,d);const X=x.unmount;D0.add(x),x.unmount=function(){D0.delete(x),D0.size<1&&(s=z1,H&&H(),H=null,d.value=z1,B0=!1,W=!1),X()}}};function Ne(x){return x.reduce((E,_)=>E.then(()=>S(_)),Promise.resolve())}return Yc}function aH(e,a){const c=[],o=[],n=[],r=Math.max(a.matched.length,e.matched.length);for(let i=0;i<r;i++){const h=a.matched[i];h&&(e.matched.find(s=>ac(s,h))?o.push(h):c.push(h));const d=e.matched[i];d&&(a.matched.find(s=>ac(s,d))||n.push(d))}return[c,o,n]}function cH(){return Ke(vL)}function sq(e){return Ke(vb)}async function oH(){try{const e=await fetch("/api/method/frappe.auth.get_logged_user",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});return e.ok&&(await e.json()).message||"Guest"}catch{return"Guest"}}const nH={class:"min-h-screen bg-gray-50 p-2"},rH={class:"flex"},iH={class:"max-w-4xl mx-auto"},dH={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},hH={class:"bg-white p-4 rounded shadow"},sH={class:"text-3xl font-bold text-blue-600"},lH={class:"bg-white p-4 rounded shadow"},yH={class:"text-3xl font-bold text-green-600"},pH={__name:"Dashboard",setup(e){document.title="Dashboard | Quantra";const a=cH(),c=Z(null),o=Z(null),n=async()=>(await(await fetch("/api/resource/Dashboard/Accounts",{credentials:"include"})).json()).message,r=async()=>{try{const d=await(await fetch("/api/resource/Sales Invoice?limit_page_length=1",{credentials:"include"})).json();c.value=d?.data?.length??0;const l=await(await fetch("/api/resource/Purchase Receipt?limit_page_length=1",{credentials:"include"})).json();o.value=l?.data?.length??0}catch(h){console.error("Failed to fetch counts via REST:",h)}},i=async()=>{await fetch("/api/method/logout"),a.push("/login")};return a1(()=>{r(),n()}),(h,d)=>(m(),b("div",nH,[k("div",rH,[k("div",null,[k("div",iH,[k("div",dH,[k("div",hH,[d[0]||(d[0]=k("h2",{class:"text-lg font-semibold mb-2"},"Total Sales Invoices",-1)),k("p",sH,F(c.value!==null?c.value:"Loading..."),1)]),k("div",lH,[d[1]||(d[1]=k("h2",{class:"text-lg font-semibold mb-2"},"Total Purchase Receipts",-1)),k("p",yH,F(o.value!==null?o.value:"Loading..."),1)])]),k("button",{onClick:i,class:"mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," Logout ")])])])]))}},uH={class:"relative"},kH=["type","value","placeholder","disabled","required","min","max","step"],fH={key:0,class:"absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto"},MH=["onClick"],aL={__name:"BaseInput",props:{modelValue:[String,Number,Date],type:{type:String,default:"text"},placeholder:String,disabled:Boolean,required:Boolean,min:[String,Number,Date],max:[String,Number,Date],step:[String,Number],inputClass:{type:String,default:""},suggestions:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const c=e,o=a,n=Z(""),r=ue(()=>n.value?c.suggestions.filter(d=>d.toLowerCase().includes(n.value.toLowerCase())):[]),i=d=>{n.value=d.target.value,o("update:modelValue",n.value)},h=d=>{n.value=d,o("update:modelValue",n.value)};return(d,s)=>(m(),b("div",uH,[k("input",{type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,required:e.required,min:e.min,max:e.max,step:e.step,class:Le(["w-full px-3 py-2 border rounded-md shadow-sm transition","focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500","disabled:bg-gray-100 disabled:cursor-not-allowed",e.inputClass]),onInput:i},null,42,kH),r.value.length&&!e.disabled?(m(),b("ul",fH,[(m(!0),b(ke,null,Be(r.value,(l,y)=>(m(),b("li",{key:y,class:"px-3 py-2 cursor-pointer hover:bg-gray-100",onClick:f=>h(l)},F(l),9,MH))),128))])):de("",!0)]))}},vH=["disabled"],F1={__name:"BaseButton",props:{variant:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},setup(e){const a=e,c=ue(()=>({primary:"bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",secondary:"bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300",danger:"bg-red-300 text-gray-800 hover:bg-red-400 focus:ring-red-200",success:"bg-green-300 text-gray-800 hover:bg-green-400 focus:ring-green-200",light:"bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-gray-200",ghost:"bg-white text-black hover:bg-gray-200"})[a.variant]||"bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400");return(o,n)=>(m(),b("button",{class:Le(["px-4 py-2 rounded text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",c.value,e.disabled?"opacity-50 cursor-not-allowed":""]),disabled:e.disabled,onClick:n[0]||(n[0]=r=>o.$emit("click"))},[yL(o.$slots,"default")],10,vH))}},mH=YA("snackbar",{state:()=>({visible:!1,message:"",color:"success"}),actions:{showSnackbar(e,a="success"){this.message=e,this.color=a,this.visible=!0,setTimeout(()=>{this.visible=!1},3e3)}}}),gH={class:"h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200"},xH={class:"bg-white p-8 rounded-lg shadow-lg w-96 max-w-md"},wH={key:0,class:"text-red-500 text-sm mt-3 text-center"},LH={__name:"Login",setup(e){const a=Z(""),c=Z(""),o=Z(""),n=Z(!1),r=mH(),i=async()=>{o.value="",n.value=!0;try{const h=new URLSearchParams;h.append("usr",a.value),h.append("pwd",c.value);const d=await fetch("/api/method/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:h.toString()}),s=await d.json();d.ok&&!s.exc?window.location.href="/dashboard":o.value="Login failed. Please try again."}catch{o.value="Invalid username or password"}finally{n.value=!1}};return(h,d)=>{const s=C1("v-snackbar");return m(),b("div",gH,[k("div",xH,[d[3]||(d[3]=k("div",{class:"text-center mb-6"},[k("h2",{class:"text-3xl font-semibold text-gray-800 pb-2"},"Hospital Login"),k("p",{class:"text-sm text-gray-600"},"Please enter your credentials to access the system")],-1)),P(aL,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=l=>a.value=l),placeholder:"Username",inputClass:"mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"},null,8,["modelValue"]),P(aL,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=l=>c.value=l),type:"password",placeholder:"Password",inputClass:"mb-6 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"},null,8,["modelValue"]),P(F1,{variant:"primary",class:"w-full p-3 bg-gray-600 text-white font-bold rounded-lg disabled:opacity-50 hover:bg-gray-700",disabled:n.value,onClick:i},{default:be(()=>[we(F(n.value?"Logging in...":"Login"),1)]),_:1},8,["disabled"]),o.value?(m(),b("p",wH,F(o.value),1)):de("",!0),P(s,{modelValue:ce(r).visible,"onUpdate:modelValue":d[2]||(d[2]=l=>ce(r).visible=l),color:ce(r).color,timeout:"3000"},{default:be(()=>[we(F(ce(r).message),1)]),_:1},8,["modelValue","color"])])])}}},bH=["for"],IH={__name:"BaseLabel",props:{forId:String},setup(e){return(a,c)=>(m(),b("label",{for:e.forId,class:"block text-sm font-medium text-gray-700 mb-1"},[yL(a.$slots,"default")],8,bH))}};/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CH=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,c,o)=>o?o.toUpperCase():c.toLowerCase()),qH=e=>{const a=CH(e);return a.charAt(0).toUpperCase()+a.slice(1)},SH=(...e)=>e.filter((a,c,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===c).join(" ").trim();/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lq=({size:e,strokeWidth:a=2,absoluteStrokeWidth:c,color:o,iconNode:n,name:r,class:i,...h},{slots:d})=>ec("svg",{...oo,width:e||oo.width,height:e||oo.height,stroke:o||oo.stroke,"stroke-width":c?Number(a)*24/Number(e):a,class:SH("lucide",...r?[`lucide-${SI(qH(r))}-icon`,`lucide-${SI(r)}`]:["lucide-icon"]),...h},[...n.map(s=>ec(...s)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=(e,a)=>(c,{slots:o})=>ec(lq,{...c,iconNode:a,name:e},o);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=t("a-arrow-down",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=t("a-large-small",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=t("a-arrow-up",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=t("accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=t("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=t("air-vent",[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12",key:"yd12zl"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5",key:"1x1kqn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=t("airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=t("alarm-clock-check",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=t("alarm-clock-minus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=t("alarm-clock-off",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=t("alarm-clock-plus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=t("alarm-clock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=t("alarm-smoke",[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=t("album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=t("align-center-horizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=t("align-center-vertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=t("align-center",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=t("align-end-horizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=t("align-horizontal-distribute-center",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=t("align-end-vertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=t("align-horizontal-distribute-end",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=t("align-horizontal-distribute-start",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=t("align-horizontal-justify-center",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=t("align-horizontal-justify-end",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=t("align-horizontal-justify-start",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=t("align-horizontal-space-around",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=t("align-horizontal-space-between",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=t("align-justify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=t("align-left",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=t("align-right",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=t("align-start-horizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=t("align-start-vertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=t("align-vertical-distribute-center",[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=t("align-vertical-distribute-end",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=t("align-vertical-distribute-start",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=t("align-vertical-justify-center",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=t("align-vertical-justify-end",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=t("align-vertical-justify-start",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=t("align-vertical-space-around",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=t("align-vertical-space-between",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=t("ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=t("ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=t("ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=t("amphora",[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=t("anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=t("angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=t("annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=t("antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=t("anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=t("aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=t("app-window-mac",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=t("app-window",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=t("apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=t("archive-restore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=t("archive-x",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=t("archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=t("armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=t("arrow-big-down",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=t("arrow-big-down-dash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=t("arrow-big-left-dash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=t("arrow-big-left",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=t("arrow-big-right-dash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=t("arrow-big-right",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=t("arrow-big-up-dash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=t("arrow-big-up",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=t("arrow-down-0-1",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=t("arrow-down-1-0",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=t("arrow-down-a-z",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=t("arrow-down-from-line",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=t("arrow-down-left",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=t("arrow-down-narrow-wide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=t("arrow-down-right",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=t("arrow-down-to-dot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=t("arrow-down-to-line",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=t("arrow-down-up",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=t("arrow-down-wide-narrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=t("arrow-down-z-a",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=t("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=t("arrow-left-from-line",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=t("arrow-left-right",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=t("arrow-left-to-line",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=t("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=t("arrow-right-from-line",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=t("arrow-right-left",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=t("arrow-right-to-line",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=t("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=t("arrow-up-0-1",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=t("arrow-up-1-0",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=t("arrow-up-a-z",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=t("arrow-up-down",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=t("arrow-up-from-dot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=t("arrow-up-from-line",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=t("arrow-up-left",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=t("arrow-up-narrow-wide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=t("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=t("arrow-up-to-line",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=t("arrow-up-wide-narrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=t("arrow-up-z-a",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=t("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=t("arrows-up-from-line",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=t("asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=t("at-sign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=t("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=t("audio-lines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=t("audio-waveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=t("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=t("axe",[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",key:"5z9253"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",key:"19zklq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=t("axis-3d",[["path",{d:"M13.5 10.5 15 9",key:"1nsxvm"}],["path",{d:"M4 4v15a1 1 0 0 0 1 1h15",key:"1w6lkd"}],["path",{d:"M4.293 19.707 6 18",key:"3g1p8c"}],["path",{d:"m9 15 1.5-1.5",key:"1xfbes"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=t("baby",[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=t("backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=t("badge-alert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=t("badge-cent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=t("badge-check",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=t("badge-dollar-sign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=t("badge-euro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=t("badge-indian-rupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=t("badge-info",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=t("badge-japanese-yen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=t("badge-minus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=t("badge-percent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=t("badge-plus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=t("badge-pound-sterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=t("badge-question-mark",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=t("badge-russian-ruble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=t("badge-x",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=t("badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=t("badge-swiss-franc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=t("baggage-claim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=t("ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=t("bandage",[["path",{d:"M10 10.01h.01",key:"1e9xi7"}],["path",{d:"M10 14.01h.01",key:"ac23bv"}],["path",{d:"M14 10.01h.01",key:"2wfrvf"}],["path",{d:"M14 14.01h.01",key:"8tw8yn"}],["path",{d:"M18 6v11.5",key:"dkbidh"}],["path",{d:"M6 6v12",key:"vkc79e"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2",key:"1wpnh2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=t("banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=t("banknote-arrow-down",[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",key:"x6cv4u"}],["path",{d:"m16 19 3 3 3-3",key:"1ibux0"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=t("banknote-arrow-up",[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",key:"x6cv4u"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M19 22v-6",key:"qhmiwi"}],["path",{d:"m22 19-3-3-3 3",key:"rn6bg2"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=t("banknote-x",[["path",{d:"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",key:"16nib6"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=t("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=t("barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=t("barrel",[["path",{d:"M10 3a41 41 0 0 0 0 18",key:"1qcnzb"}],["path",{d:"M14 3a41 41 0 0 1 0 18",key:"547vd4"}],["path",{d:"M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z",key:"1wepyy"}],["path",{d:"M3.84 17h16.32",key:"1wh981"}],["path",{d:"M3.84 7h16.32",key:"19jf4x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=t("baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=t("bath",[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=t("battery-charging",[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=t("battery-full",[["path",{d:"M10 10v4",key:"1mb2ec"}],["path",{d:"M14 10v4",key:"1nt88p"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M6 10v4",key:"1n77qd"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=t("battery-low",[["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M6 14v-4",key:"14a6bd"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=t("battery-medium",[["path",{d:"M10 14v-4",key:"suye4c"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M6 14v-4",key:"14a6bd"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=t("battery-plus",[["path",{d:"M10 9v6",key:"17i7lo"}],["path",{d:"M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605",key:"o09yah"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M7 12h6",key:"iekk3h"}],["path",{d:"M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606",key:"xyqvf1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=t("battery-warning",[["path",{d:"M10 17h.01",key:"nbq80n"}],["path",{d:"M10 7v6",key:"nne03l"}],["path",{d:"M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2",key:"1m83kb"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"h8lgfh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=t("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=t("battery",[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=t("bean-off",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=t("bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=t("bed-double",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=t("bed-single",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=t("bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=t("beef",[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3",key:"cisjcv"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"5byaag"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=t("beer-off",[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=t("beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=t("bell-dot",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=t("bell-electric",[["path",{d:"M18.518 17.347A7 7 0 0 1 14 19",key:"1emhpo"}],["path",{d:"M18.8 4A11 11 0 0 1 20 9",key:"127b67"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{x:"4",y:"16",width:"10",height:"6",rx:"2",key:"bfnviv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=t("bell-minus",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",key:"bdwj86"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=t("bell-off",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=t("bell-ring",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=t("bell-plus",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",key:"1abcvy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=t("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=t("between-horizontal-end",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=t("between-horizontal-start",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=t("between-vertical-end",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=t("biceps-flexed",[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=t("between-vertical-start",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=t("binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=t("bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=t("binoculars",[["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"3apit1"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",key:"rhpgnw"}],["path",{d:"M 22 16 L 2 16",key:"14lkq7"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",key:"104b3k"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",key:"14fczp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=t("biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=t("bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=t("bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=t("blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=t("blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=t("blocks",[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=t("bluetooth-connected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=t("bluetooth-off",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=t("bluetooth-searching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=t("bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=t("bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=t("bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=t("bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=t("bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=t("book-a",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=t("book-alert",[["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M12 6v3",key:"1m4b9j"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=t("book-audio",[["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 8v3",key:"1qzp49"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=t("book-check",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=t("book-copy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",key:"1wz07i"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=t("book-dashed",[["path",{d:"M12 17h1.5",key:"1gkc67"}],["path",{d:"M12 22h1.5",key:"1my7sn"}],["path",{d:"M12 2h1.5",key:"19tvb7"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1",key:"10akbh"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5",key:"1vrfjs"}],["path",{d:"M20 14v3h-2.5",key:"1naeju"}],["path",{d:"M20 8.5V10",key:"1ctpfu"}],["path",{d:"M4 10V8.5",key:"1o3zg5"}],["path",{d:"M4 19.5V14",key:"ob81pf"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8",key:"s8vcyb"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8",key:"1cu73q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=t("book-down",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=t("book-headphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=t("book-heart",[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",key:"1t75a8"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=t("book-image",[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",key:"q6ojf0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=t("book-key",[["path",{d:"m19 3 1 1",key:"ze14oc"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1xzogz"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844",key:"vtdg6h"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=t("book-lock",[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1rkj32"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1",key:"73l30o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=t("book-marked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=t("book-minus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=t("book-open-check",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=t("book-open-text",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=t("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=t("book-plus",[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=t("book-text",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=t("book-type",[["path",{d:"M10 13h4",key:"ytezjc"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=t("book-up-2",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"161d7n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=t("book-up",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=t("book-user",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=t("book-x",[["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=t("book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=t("bookmark-check",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=t("bookmark-minus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=t("bookmark-plus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=t("bookmark-x",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=t("bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=t("boom-box",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=t("bot-message-square",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=t("bot-off",[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=t("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=t("bottle-wine",[["path",{d:"M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z",key:"blqgoc"}],["path",{d:"M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4",key:"43jbee"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=t("bow-arrow",[["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17",key:"12t3w9"}],["path",{d:"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05",key:"ogng5l"}],["path",{d:"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z",key:"8v3fy2"}],["path",{d:"M9.707 14.293 21 3",key:"ydm3bn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=t("box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=t("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=t("braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=t("brackets",[["path",{d:"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",key:"1kt8lf"}],["path",{d:"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3",key:"gduv9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=t("brain-circuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=t("brain-cog",[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"m10.852 9.228-.383-.923",key:"1fjppe"}],["path",{d:"m13.148 14.772.382.924",key:"je3va1"}],["path",{d:"m13.531 8.305-.383.923",key:"18epck"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",key:"jcbbz1"}],["path",{d:"M17.998 5.125a4 4 0 0 1 2.525 5.771",key:"1kkn7e"}],["path",{d:"M19.505 10.294a4 4 0 0 1-1.5 7.706",key:"18bmuc"}],["path",{d:"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",key:"uozx0d"}],["path",{d:"M4.5 10.291A4 4 0 0 0 6 18",key:"whdemb"}],["path",{d:"M6.002 5.125a3 3 0 0 0 .4 1.375",key:"1kqy2g"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=t("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=t("brick-wall-fire",[["path",{d:"M16 3v2.107",key:"gq8xun"}],["path",{d:"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9",key:"1l2pih"}],["path",{d:"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938",key:"jrnqjp"}],["path",{d:"M3 15h5.253",key:"xqg7rb"}],["path",{d:"M3 9h8.228",key:"1ppb70"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=t("brick-wall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=t("briefcase-business",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=t("briefcase-conveyor-belt",[["path",{d:"M10 20v2",key:"1n8e1g"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M18 20v2",key:"10uadw"}],["path",{d:"M21 20H3",key:"kdqkdp"}],["path",{d:"M6 20v2",key:"a9bc87"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",key:"17n9tx"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2",key:"1097i5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=t("briefcase-medical",[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=t("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=t("bring-to-front",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=t("brush-cleaning",[["path",{d:"m16 22-1-4",key:"1ow2iv"}],["path",{d:"M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1",key:"iw8jdu"}],["path",{d:"M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z",key:"1soew8"}],["path",{d:"m8 22 1-4",key:"s3unb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=t("brush",[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=t("bubbles",[["path",{d:"M7.2 14.8a2 2 0 0 1 2 2",key:"1tw9gg"}],["circle",{cx:"18.5",cy:"8.5",r:"3.5",key:"1wadoa"}],["circle",{cx:"7.5",cy:"16.5",r:"5.5",key:"6mdt3g"}],["circle",{cx:"7.5",cy:"4.5",r:"2.5",key:"637s54"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=t("bug-off",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=t("bug-play",[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=t("bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=t("building-2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=t("bus-front",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=t("building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=t("bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=t("cable-car",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=t("cable",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=t("cake-slice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=t("cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=t("calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=t("calendar-1",[["path",{d:"M11 14h1v4",key:"fy54vd"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=t("calendar-arrow-down",[["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 14v8",key:"irew45"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",key:"bse4f3"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=t("calendar-arrow-up",[["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 22v-8",key:"su0gjh"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",key:"1exg90"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=t("calendar-check-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=t("calendar-check",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=t("calendar-clock",[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=t("calendar-cog",[["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m15.228 19.148-.923.383",key:"51cr3n"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m16.47 14.305.382.923",key:"obybxd"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["path",{d:"M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"1dju0s"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=t("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=t("calendar-fold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=t("calendar-heart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=t("calendar-minus-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=t("calendar-minus",[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1scpom"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=t("calendar-off",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=t("calendar-plus-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=t("calendar-plus",[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1glfrc"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=t("calendar-range",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=t("calendar-search",[["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",key:"1jrsq6"}],["path",{d:"m22 22-1.875-1.875",key:"13zax7"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=t("calendar-sync",[["path",{d:"M11 10v4h4",key:"172dkj"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"vu0qm5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"1qgeyt"}],["path",{d:"M21 22v-4h-4",key:"hrummi"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",key:"mctw84"}],["path",{d:"M3 10h4",key:"1el30a"}],["path",{d:"M8 2v4",key:"1cmpym"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=t("calendar-x-2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=t("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=t("calendar-x",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=t("camera-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=t("camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=t("candy-cane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=t("candy-off",[["path",{d:"M10 10v7.9",key:"m8g9tt"}],["path",{d:"M11.802 6.145a5 5 0 0 1 6.053 6.053",key:"dn87i3"}],["path",{d:"M14 6.1v2.243",key:"1kzysn"}],["path",{d:"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965",key:"3sxy18"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=t("candy",[["path",{d:"M10 7v10.9",key:"1gynux"}],["path",{d:"M14 6.1V17",key:"116kdf"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",key:"1tsln4"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=t("cannabis",[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=t("captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=t("car-front",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=t("captions-off",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=t("car-taxi-front",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=t("car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=t("caravan",[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=t("card-sim",[["path",{d:"M12 14v4",key:"1thi36"}],["path",{d:"M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",key:"1o66bk"}],["path",{d:"M8 14h8",key:"1fgep2"}],["rect",{x:"8",y:"10",width:"8",height:"8",rx:"1",key:"1aonk6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=t("carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=t("case-lower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=t("case-upper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=t("case-sensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=t("cassette-tape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=t("castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=t("cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=t("cctv",[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=t("cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=t("chart-area",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=t("chart-bar-big",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=t("chart-bar-decreasing",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h3",key:"ur6vzw"}],["path",{d:"M7 6h12",key:"sz5b0d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=t("chart-bar-increasing",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h12",key:"wsnu98"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=t("chart-bar-stacked",[["path",{d:"M11 13v4",key:"vyy2rb"}],["path",{d:"M15 5v4",key:"1gx88a"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=t("chart-bar",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=t("chart-candlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=t("chart-column-big",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=t("chart-column-decreasing",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=t("chart-column-stacked",[["path",{d:"M11 13H7",key:"t0o9gq"}],["path",{d:"M19 9h-4",key:"rera1j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=t("chart-column-increasing",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=t("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=t("chart-gantt",[["path",{d:"M10 6h8",key:"zvc2xc"}],["path",{d:"M12 16h6",key:"yi5mkt"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 11h7",key:"wz2hg0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=t("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=t("chart-network",[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=t("chart-no-axes-column-decreasing",[["path",{d:"M12 20V10",key:"g8npz5"}],["path",{d:"M18 20v-4",key:"8uic4z"}],["path",{d:"M6 20V4",key:"1w1bmo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=t("chart-no-axes-column-increasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=t("chart-no-axes-column",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=t("chart-no-axes-gantt",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=t("chart-no-axes-combined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=t("chart-pie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=t("chart-scatter",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=t("chart-spline",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",key:"lw07rv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=t("check-check",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=t("check-line",[["path",{d:"M20 4L9 15",key:"1qkx8z"}],["path",{d:"M21 19L3 19",key:"100sma"}],["path",{d:"M9 15L4 10",key:"9zxff7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=t("chef-hat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=t("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=t("cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=t("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=t("chevron-first",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=t("chevron-last",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=t("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=t("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=t("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=t("chevrons-down-up",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=t("chevrons-down",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=t("chevrons-left-right-ellipsis",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"m17 7 5 5-5 5",key:"1xlxn0"}],["path",{d:"m7 7-5 5 5 5",key:"19njba"}],["path",{d:"M8 12h.01",key:"czm47f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=t("chevrons-left-right",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=t("chevrons-left",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=t("chevrons-right-left",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=t("chevrons-right",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=t("chevrons-up",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=t("chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=t("chevrons-up-down",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=t("church",[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=t("cigarette-off",[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",key:"1gdiyg"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",key:"166zjj"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=t("cigarette",[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",key:"1mb5g1"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"1yl5r7"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=t("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=t("circle-arrow-down",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=t("circle-arrow-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=t("circle-arrow-out-down-left",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=t("circle-arrow-out-down-right",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=t("circle-arrow-out-up-left",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=t("circle-arrow-out-up-right",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=t("circle-arrow-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=t("circle-arrow-up",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=t("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=t("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=t("circle-chevron-down",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=t("circle-chevron-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=t("circle-chevron-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=t("circle-chevron-up",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=t("circle-dashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=t("circle-divide",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=t("circle-dollar-sign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=t("circle-dot-dashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=t("circle-dot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=t("circle-ellipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=t("circle-equal",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=t("circle-fading-arrow-up",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=t("circle-fading-plus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=t("circle-gauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=t("circle-minus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=t("circle-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=t("circle-parking-off",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=t("circle-parking",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=t("circle-pause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=t("circle-percent",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=t("circle-play",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=t("circle-plus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=t("circle-pound-sterling",[["path",{d:"M10 16V9.5a1 1 0 0 1 5 0",key:"1i1are"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M8 16h7",key:"sbedsn"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=t("circle-power",[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=t("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=t("circle-slash-2",[["path",{d:"M22 2 2 22",key:"y4kqgn"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=t("circle-slash",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=t("circle-small",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=t("circle-stop",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=t("circle-user",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=t("circle-user-round",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=t("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=t("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=t("circuit-board",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=t("citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=t("clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=t("clipboard-check",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=t("clipboard-copy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=t("clipboard-list",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=t("clipboard-minus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=t("clipboard-paste",[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=t("clipboard-pen-line",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=t("clipboard-pen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=t("clipboard-plus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=t("clipboard-type",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=t("clipboard-x",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=t("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=t("clock-1",[["path",{d:"M12 6v6l2-4",key:"miptyd"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=t("clock-10",[["path",{d:"M12 6v6l-4-2",key:"cedpoo"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=t("clock-11",[["path",{d:"M12 6v6l-2-4",key:"ns39ag"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=t("clock-12",[["path",{d:"M12 6v6",key:"1ipuwl"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=t("clock-2",[["path",{d:"M12 6v6l4-2",key:"1r2kuh"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=t("clock-3",[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=t("clock-4",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=t("clock-5",[["path",{d:"M12 6v6l2 4",key:"1287s9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=t("clock-6",[["path",{d:"M12 6v10",key:"wf7rdh"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=t("clock-7",[["path",{d:"M12 6v6l-2 4",key:"1095bu"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=t("clock-8",[["path",{d:"M12 6v6l-4 2",key:"imc3wl"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=t("clock-9",[["path",{d:"M12 6v6H8",key:"u39vzm"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=t("clock-alert",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M20 12v5",key:"12wsvk"}],["path",{d:"M20 21h.01",key:"1p6o6n"}],["path",{d:"M21.25 8.2A10 10 0 1 0 16 21.16",key:"17fp9f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=t("clock-arrow-down",[["path",{d:"M12 6v6l2 1",key:"19cm8n"}],["path",{d:"M12.337 21.994a10 10 0 1 1 9.588-8.767",key:"28moa"}],["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M18 14v8",key:"irew45"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=t("clock-arrow-up",[["path",{d:"M12 6v6l1.56.78",key:"14ed3g"}],["path",{d:"M13.227 21.925a10 10 0 1 1 8.767-9.588",key:"jwkls1"}],["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M18 22v-8",key:"su0gjh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=t("clock-fading",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=t("clock-plus",[["path",{d:"M12 6v6l3.644 1.822",key:"1jmett"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M21.92 13.267a10 10 0 1 0-8.653 8.653",key:"1u0osk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=t("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=t("cloud-alert",[["path",{d:"M12 12v4",key:"tww15h"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708",key:"xsb5ju"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=t("cloud-check",[["path",{d:"m17 15-5.5 5.5L9 18",key:"15q87x"}],["path",{d:"M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742",key:"9ho6ki"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=t("cloud-cog",[["path",{d:"m10.852 19.772-.383.924",key:"r7sl7d"}],["path",{d:"m13.148 14.228.383-.923",key:"1d5zpm"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1ydik7"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1m1vsf"}],["path",{d:"m14.772 15.852.923-.383",key:"660p6e"}],["path",{d:"m14.772 18.148.923.383",key:"hrcpis"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"j2q98n"}],["path",{d:"m9.228 15.852-.923-.383",key:"1p9ong"}],["path",{d:"m9.228 18.148-.923.383",key:"6558rz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=t("cloud-download",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=t("cloud-fog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=t("cloud-drizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=t("cloud-hail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=t("cloud-lightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=t("cloud-moon-rain",[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=t("cloud-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=t("cloud-moon",[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=t("cloud-rain-wind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=t("cloud-rain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=t("cloud-snow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=t("cloud-sun-rain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=t("cloud-sun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=t("cloud-upload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=t("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=t("cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=t("clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=t("club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=t("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=t("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=t("codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=t("codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=t("coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=t("cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=t("coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=t("columns-2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=t("columns-3-cog",[["path",{d:"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5",key:"1g2yzs"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"M15 3v7.5",key:"7lm50a"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=t("columns-3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=t("columns-4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=t("combine",[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1",key:"ru65g8"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"e30een"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"2ahx8o"}],["path",{d:"m7 21 3-3-3-3",key:"127cv2"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=t("command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=t("compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=t("component",[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=t("computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=t("concierge-bell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=t("cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=t("construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=t("contact-round",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=t("contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=t("container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=t("contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=t("cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=t("cooking-pot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=t("copy-check",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=t("copy-minus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=t("copy-plus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=t("copy-slash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=t("copy-x",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=t("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=t("copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=t("copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=t("corner-down-left",[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=t("corner-down-right",[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=t("corner-left-down",[["path",{d:"m14 15-5 5-5-5",key:"1eia93"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=t("corner-left-up",[["path",{d:"M14 9 9 4 4 9",key:"1af5af"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=t("corner-right-down",[["path",{d:"m10 15 5 5 5-5",key:"1hpjnr"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=t("corner-right-up",[["path",{d:"m10 9 5-5 5 5",key:"9ctzwi"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=t("corner-up-left",[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=t("corner-up-right",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=t("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=t("creative-commons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=t("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=t("croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=t("crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=t("cross",[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=t("crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=t("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=t("cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=t("cup-soda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=t("cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=t("currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=t("dam",[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"157kva"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"d7q6m6"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",key:"pr6s65"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=t("database-backup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=t("database-zap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=t("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=t("decimals-arrow-left",[["path",{d:"m13 21-3-3 3-3",key:"s3o1nf"}],["path",{d:"M20 18H10",key:"14r3mt"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5",key:"v9paqo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=t("delete",[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=t("decimals-arrow-right",[["path",{d:"M10 18h10",key:"1y5s8o"}],["path",{d:"m17 21 3-3-3-3",key:"1ammt0"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{x:"15",y:"3",width:"5",height:"8",rx:"2.5",key:"76md6a"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5",key:"v9paqo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=t("dessert",[["path",{d:"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826",key:"xi88qy"}],["path",{d:"M20.804 14.869a9 9 0 0 1-17.608 0",key:"1r28rg"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=t("diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=t("diamond-minus",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=t("diamond-percent",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=t("diamond-plus",[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=t("diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=t("dice-1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=t("dice-2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=t("dice-3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=t("dice-4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=t("dice-5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=t("dice-6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=t("disc-2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=t("dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=t("diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=t("disc-3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=t("disc-album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=t("disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=t("divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=t("dna-off",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",key:"1bivrr"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3",key:"nxix30"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",key:"18cutr"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",key:"rlvei3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=t("dna",[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=t("dock",[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=t("dog",[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=t("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=t("donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=t("door-closed-locked",[["path",{d:"M10 12h.01",key:"1kxr2c"}],["path",{d:"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"1bnhmg"}],["path",{d:"M2 20h8",key:"10ntw1"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}],["rect",{x:"14",y:"17",width:"8",height:"5",rx:"1",key:"15pjcy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=t("door-closed",[["path",{d:"M10 12h.01",key:"1kxr2c"}],["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=t("door-open",[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=t("dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=t("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=t("drafting-compass",[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=t("drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=t("dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=t("drill",[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",key:"ioqxb1"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",key:"1rs59n"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"m7 18 2-8",key:"1bzku2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=t("drone",[["path",{d:"M10 10 7 7",key:"zp14k7"}],["path",{d:"m10 14-3 3",key:"1jrpxk"}],["path",{d:"m14 10 3-3",key:"7tigam"}],["path",{d:"m14 14 3 3",key:"vm23p3"}],["path",{d:"M14.205 4.139a4 4 0 1 1 5.439 5.863",key:"1tm5p2"}],["path",{d:"M19.637 14a4 4 0 1 1-5.432 5.868",key:"16egi2"}],["path",{d:"M4.367 10a4 4 0 1 1 5.438-5.862",key:"1wta6a"}],["path",{d:"M9.795 19.862a4 4 0 1 1-5.429-5.873",key:"q39hpv"}],["rect",{x:"10",y:"8",width:"4",height:"8",rx:"1",key:"phrjt1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=t("droplet-off",[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",key:"8suz2t"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",key:"19dw9m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=t("droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=t("droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=t("drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=t("drumstick",[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=t("dumbbell",[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=t("ear-off",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=t("ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=t("earth-lock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=t("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=t("eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=t("egg-fried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=t("egg-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19",key:"13g2jy"}],["path",{d:"M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568",key:"1581id"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=t("egg",[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12",key:"1le142"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=t("ellipsis-vertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=t("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=t("equal-approximately",[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=t("equal-not",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=t("equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=t("eraser",[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=t("ethernet-port",[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",key:"rbahqx"}],["path",{d:"M6 8v1",key:"1636ez"}],["path",{d:"M10 8v1",key:"1talb4"}],["path",{d:"M14 8v1",key:"1rsfgr"}],["path",{d:"M18 8v1",key:"gnkwox"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=t("euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=t("expand",[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=t("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=t("eye-closed",[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=t("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=t("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=t("facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=t("factory",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=t("fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=t("fast-forward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=t("feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=t("fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=t("ferris-wheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=t("file-archive",[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=t("figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=t("file-audio-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=t("file-audio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=t("file-axis-3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=t("file-badge-2",[["path",{d:"m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88",key:"7a4gmr"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=t("file-badge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072",key:"n6s66f"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88",key:"1e6yvx"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=t("file-box",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=t("file-chart-column",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=t("file-chart-column-increasing",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=t("file-chart-line",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=t("file-chart-pie",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",key:"1dl6s6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=t("file-check-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=t("file-check",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=t("file-clock",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M8 14v2.2l1.6 1",key:"6m4bie"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=t("file-code-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=t("file-code",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=t("file-cog",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m2.305 15.53.923-.382",key:"yfp9st"}],["path",{d:"m3.228 12.852-.924-.383",key:"bckynb"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",key:"1yo3oz"}],["path",{d:"m4.852 11.228-.383-.923",key:"1j88i9"}],["path",{d:"m4.852 16.772-.383.924",key:"sag1dv"}],["path",{d:"m7.148 11.228.383-.923",key:"rj39hk"}],["path",{d:"m7.53 17.696-.382-.924",key:"1uu5cs"}],["path",{d:"m8.772 12.852.923-.383",key:"13811l"}],["path",{d:"m8.772 15.148.923.383",key:"z1a5l0"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=t("file-diff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=t("file-digit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=t("file-down",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=t("file-heart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=t("file-image",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=t("file-input",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=t("file-json-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=t("file-json",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=t("file-key-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=t("file-key",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=t("file-lock-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=t("file-lock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=t("file-minus-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=t("file-minus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=t("file-music",[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4",key:"1d3kfm"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}],["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=t("file-output",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=t("file-pen-line",[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=t("file-pen",[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=t("file-plus-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=t("file-plus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=t("file-question-mark",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=t("file-scan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=t("file-search-2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=t("file-search",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=t("file-sliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=t("file-spreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=t("file-symlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=t("file-stack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=t("file-terminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=t("file-type-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=t("file-type",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=t("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=t("file-user",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=t("file-up",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=t("file-video-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=t("file-video",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=t("file-volume-2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=t("file-volume",[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",key:"ifyjnl"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",key:"mk8rxu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=t("file-warning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=t("file-x-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=t("file-x",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=t("file",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=t("files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=t("film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=t("fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=t("fire-extinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=t("fish-off",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=t("fish-symbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=t("fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=t("flag-off",[["path",{d:"M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1q158e"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347",key:"xj1b71"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=t("flag-triangle-right",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=t("flag-triangle-left",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=t("flag",[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=t("flame-kindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=t("flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=t("flashlight-off",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=t("flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=t("flask-conical-off",[["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",key:"k0duyd"}],["path",{d:"M6.453 15H15",key:"1f0z33"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=t("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=t("flask-round",[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2",key:"1s42pc"}],["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=t("flip-horizontal-2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=t("flip-horizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=t("flip-vertical-2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=t("flip-vertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=t("flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=t("flower-2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=t("focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=t("fold-horizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=t("fold-vertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=t("folder-archive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=t("folder-check",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=t("folder-clock",[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=t("folder-closed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=t("folder-code",[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=t("folder-cog",[["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",key:"128dxu"}],["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=t("folder-dot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=t("folder-git-2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=t("folder-down",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=t("folder-git",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=t("folder-heart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"wpff58"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=t("folder-input",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=t("folder-kanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=t("folder-key",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=t("folder-lock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=t("folder-minus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=t("folder-open-dot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=t("folder-open",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=t("folder-output",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=t("folder-pen",[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1saktj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=t("folder-plus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=t("folder-root",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=t("folder-search-2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=t("folder-search",[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=t("folder-symlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=t("folder-sync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=t("folder-tree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=t("folder-up",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=t("folder-x",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=t("folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=t("folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=t("forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=t("footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=t("forward",[["path",{d:"m15 17 5-5-5-5",key:"nf172w"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=t("frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=t("framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=t("frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=t("fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=t("fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=t("funnel-plus",[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",key:"8mvsmf"}],["path",{d:"M16 6h6",key:"1dogtp"}],["path",{d:"M19 3v6",key:"1ytpjt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=t("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=t("funnel-x",[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",key:"ol2ft2"}],["path",{d:"m16.5 3.5 5 5",key:"15e6fa"}],["path",{d:"m21.5 3.5-5 5",key:"m0lwru"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=t("gallery-horizontal-end",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=t("gallery-horizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=t("gallery-thumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=t("gallery-vertical-end",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=t("gamepad-2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=t("gallery-vertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=t("gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=t("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=t("gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=t("gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=t("georgian-lari",[["path",{d:"M11.5 21a7.5 7.5 0 1 1 7.35-9",key:"1gyj8k"}],["path",{d:"M13 12V3",key:"18om2a"}],["path",{d:"M4 21h16",key:"1h09gz"}],["path",{d:"M9 12V3",key:"geutu0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=t("ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=t("gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=t("git-branch-plus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=t("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=t("git-commit-horizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=t("git-commit-vertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=t("git-compare-arrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=t("git-compare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=t("git-fork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=t("git-graph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=t("git-merge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=t("git-pull-request-arrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=t("git-pull-request-create-arrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=t("git-pull-request-closed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=t("git-pull-request-draft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=t("git-pull-request-create",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=t("git-pull-request",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=t("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=t("gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=t("glass-water",[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=t("glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=t("globe-lock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=t("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=t("goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=t("grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"edstyy"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"19wdwo"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"1lugqo"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1hbeus"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"1etffm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=t("gpu",[["path",{d:"M2 21V3",key:"1bzk4w"}],["path",{d:"M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26",key:"1d64pi"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",key:"5hbqbf"}],["circle",{cx:"16",cy:"11",r:"2",key:"qt15rb"}],["circle",{cx:"8",cy:"11",r:"2",key:"ssideg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=t("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=t("grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=t("grid-2x2-check",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=t("grid-2x2-plus",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 22v-6",key:"qhmiwi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=t("grid-2x2-x",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=t("grid-2x2",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=t("grid-3x2",[["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=t("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=t("grip-horizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=t("grip-vertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=t("grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=t("group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=t("guitar",[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",key:"1de1vg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=t("ham",[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=t("hamburger",[["path",{d:"M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25",key:"5dloqd"}],["path",{d:"M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2",key:"1vl3my"}],["path",{d:"M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0",key:"1us75o"}],["path",{d:"m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"qqzweh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=t("hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=t("hand-coins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=t("hand-heart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=t("hand-helping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=t("hand-metal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"wc6myp"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=t("hand-platter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",key:"n2g93r"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2",key:"1o2jem"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M5 10a7 7 0 0 1 14 0",key:"1ega1o"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2",key:"1hescx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=t("hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=t("handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=t("hard-drive-download",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=t("hard-drive-upload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=t("hard-drive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=t("hard-hat",[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=t("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=t("haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=t("hdmi-port",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=t("heading-1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=t("heading-2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=t("heading-3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=t("heading-4",[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=t("heading-5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=t("heading-6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=t("heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=t("headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=t("headphone-off",[["path",{d:"M21 14h-1.343",key:"1jdnxi"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343",key:"6kipu2"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",key:"9x50f4"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",key:"1bkxnm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=t("headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=t("heart-crack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=t("heart-handshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=t("heart-minus",[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5",key:"vd0vy5"}],["path",{d:"M15 15h6",key:"1u4692"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=t("heart-off",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=t("heart-plus",[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5",key:"vd0vy5"}],["path",{d:"M15 15h6",key:"1u4692"}],["path",{d:"M18 12v6",key:"1houu1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=t("heart-pulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=t("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=t("heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=t("hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=t("highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=t("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=t("hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=t("hop-off",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=t("hospital",[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=t("hotel",[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=t("hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=t("house-plug",[["path",{d:"M10 12V8.964",key:"1vll13"}],["path",{d:"M14 12V8.964",key:"1x3qvg"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",key:"ppykja"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",key:"1gvg2z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=t("house-plus",[["path",{d:"M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475",key:"uubd2h"}],["path",{d:"M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8",key:"p7f341"}],["path",{d:"M15 18h6",key:"3b3c90"}],["path",{d:"M18 15v6",key:"9wciyi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=t("house-wifi",[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01",key:"1wy54i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0",key:"exoy2g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=t("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=t("ice-cream-bowl",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=t("ice-cream-cone",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=t("id-card-lanyard",[["path",{d:"M13.5 8h-3",key:"xvov4w"}],["path",{d:"m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3",key:"16uttc"}],["path",{d:"M16.899 22A5 5 0 0 0 7.1 22",key:"1d0ppr"}],["path",{d:"m9 2 3 6",key:"1o7bd9"}],["circle",{cx:"12",cy:"15",r:"3",key:"g36mzq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=t("id-card",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=t("image-down",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=t("image-minus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=t("image-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=t("image-plus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=t("image-play",[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=t("image-up",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=t("image-upscale",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2",key:"130fy9"}],["path",{d:"M21 12v3",key:"1wzk3p"}],["path",{d:"m21 3-5 5",key:"1g5oa7"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2",key:"kk3yz1"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",key:"fyekpt"}],["path",{d:"M9 3h3",key:"d52fa"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1",key:"1wpmix"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=t("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=t("images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=t("import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=t("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=t("indent-decrease",[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=t("indian-rupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=t("indent-increase",[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=t("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=t("infinity",[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=t("inspection-panel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=t("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=t("italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=t("iteration-ccw",[["path",{d:"m16 14 4 4-4 4",key:"hkso8o"}],["path",{d:"M20 10a8 8 0 1 0-8 8h8",key:"1bik7b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=t("iteration-cw",[["path",{d:"M4 10a8 8 0 1 1 8 8H4",key:"svv66n"}],["path",{d:"m8 22-4-4 4-4",key:"6g7gki"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=t("japanese-yen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=t("joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=t("kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=t("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=t("key-square",[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",key:"165ttr"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",key:"1ubxi2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=t("key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=t("keyboard-music",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=t("keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=t("keyboard-off",[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=t("lamp-ceiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M14.829 15.998a3 3 0 1 1-5.658 0",key:"1pybiy"}],["path",{d:"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",key:"ma1wor"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=t("lamp-desk",[["path",{d:"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",key:"sb8slu"}],["path",{d:"m14.207 4.793-3.414 3.414",key:"m2x3oj"}],["path",{d:"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",key:"8b3myj"}],["path",{d:"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18",key:"43s6cu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=t("lamp-floor",[["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z",key:"1o95gh"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=t("lamp-wall-down",[["path",{d:"M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z",key:"u4w2d7"}],["path",{d:"M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",key:"15356w"}],["path",{d:"M8 6h4a2 2 0 0 1 2 2v5",key:"1m6m7x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=t("lamp-wall-up",[["path",{d:"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z",key:"1uvrbf"}],["path",{d:"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",key:"154r2a"}],["path",{d:"M8 18h4a2 2 0 0 0 2-2v-5",key:"z9mbu0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=t("lamp",[["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",key:"1l7kg2"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",key:"1mmzpi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=t("land-plot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=t("landmark",[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=t("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=t("laptop-minimal-check",[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=t("laptop-minimal",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=t("laptop",[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=t("lasso-select",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",key:"72q637"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=t("lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=t("laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=t("layers-2",[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",key:"15q6uc"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",key:"byia6g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=t("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=t("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=t("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=t("layout-list",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=t("layout-panel-left",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=t("layout-panel-top",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=t("layout-template",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=t("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=t("leafy-green",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=t("lectern",[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=t("letter-text",[["path",{d:"M15 12h6",key:"upa0zy"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13",key:"blevx4"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3.92 11h6.16",key:"1bqo8m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=t("library-big",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=t("library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=t("life-buoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=t("ligature",[["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M14 20h4",key:"lzx1xo"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M8 20V8a4 4 0 0 1 7.464-2",key:"wk9t6r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=t("lightbulb-off",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=t("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=t("line-squiggle",[["path",{d:"M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2",key:"1lrphd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=t("link-2-off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=t("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=t("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=t("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=t("list-check",[["path",{d:"M11 18H3",key:"n3j2dh"}],["path",{d:"m15 18 2 2 4-4",key:"1szwhi"}],["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=t("list-checks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=t("list-collapse",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"m3 10 3-3-3-3",key:"i7pm08"}],["path",{d:"m3 20 3-3-3-3",key:"20gx1n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=t("list-end",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=t("list-filter-plus",[["path",{d:"M10 18h4",key:"1ulq68"}],["path",{d:"M11 6H3",key:"1u26ik"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 9V3",key:"xwwp7m"}],["path",{d:"M7 12h8",key:"7a1bxv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=t("list-filter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=t("list-minus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=t("list-music",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=t("list-ordered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=t("list-plus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=t("list-restart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=t("list-start",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=t("list-todo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=t("list-tree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=t("list-video",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=t("list-x",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=t("list",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=t("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=t("loader-pinwheel",[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",key:"1lzz15"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=t("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=t("locate-fixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=t("locate-off",[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M18.89 13.24a7 7 0 0 0-8.13-8.13",key:"1v9jrh"}],["path",{d:"M19 12h3",key:"osuazr"}],["path",{d:"M2 12h3",key:"1wrr53"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.05 7.05a7 7 0 0 0 9.9 9.9",key:"rc5l2e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=t("locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=t("location-edit",[["path",{d:"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468",key:"1fahp3"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=t("lock-keyhole-open",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=t("lock-keyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=t("lock-open",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=t("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=t("log-in",[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=t("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=t("logs",[["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M3 18h1",key:"1eiwyy"}],["path",{d:"M3 6h1",key:"rgxa97"}],["path",{d:"M8 12h1",key:"1con00"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M8 6h1",key:"tn6mkg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=t("lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=t("luggage",[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1m57jg"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=t("magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=t("mail-check",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=t("mail-minus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=t("mail-open",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=t("mail-plus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=t("mail-question-mark",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=t("mail-search",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"8lzu5m"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=t("mail-warning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=t("mail-x",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=t("mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",key:"15i455"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=t("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=t("mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=t("map-pin-check-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=t("map-pin-check",[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",key:"1dq61d"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m16 18 2 2 4-4",key:"1mkfmb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=t("map-pin-house",[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",key:"1p1rcz"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",key:"mcbcs9"}],["path",{d:"M18 22v-3",key:"1t1ugv"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=t("map-pin-minus",[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"11uxia"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=t("map-pin-off",[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16",key:"1d4wjd"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",key:"12yil7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",key:"lhrkcz"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74",key:"13wojd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=t("map-pin-minus-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=t("map-pin-plus-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=t("map-pin-plus",[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"fcdtly"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}],["path",{d:"M19 15v6",key:"10aioa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=t("map-pin-x-inside",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=t("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=t("map-pin-x",[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",key:"y0ewhp"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m21.5 15.5-5 5",key:"11iqnx"}],["path",{d:"m21.5 20.5-5-5",key:"1bylgx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=t("map-pinned",[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=t("map-plus",[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",key:"svfegj"}],["path",{d:"M15 5.764V12",key:"1ocw4k"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=t("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=t("mars-stroke",[["path",{d:"m14 6 4 4",key:"1q72g9"}],["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"m21 3-7.75 7.75",key:"1cjbfd"}],["circle",{cx:"9",cy:"15",r:"6",key:"bx5svt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=t("martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=t("mars",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=t("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=t("maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=t("medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=t("megaphone-off",[["path",{d:"M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344",key:"bycexp"}],["path",{d:"M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1",key:"1t17s6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 8v6",key:"aieo6v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=t("megaphone",[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=t("meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=t("memory-stick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=t("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=t("merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=t("message-circle-code",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=t("message-circle-dashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=t("message-circle-heart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=t("message-circle-more",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=t("message-circle-off",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=t("message-circle-plus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=t("message-circle-question-mark",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=t("message-circle-reply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=t("message-circle-warning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=t("message-circle-x",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=t("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=t("message-square-code",[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=t("message-square-dashed",[["path",{d:"M10 17H7l-4 4v-7",key:"1r71xu"}],["path",{d:"M14 17h1",key:"nufu4t"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2",key:"29akq3"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=t("message-square-diff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=t("message-square-dot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=t("message-square-heart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=t("message-square-lock",[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2",key:"h3d1vz"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",key:"xsnnhn"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1",key:"1ccwuk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=t("message-square-more",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=t("message-square-off",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=t("message-square-plus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=t("message-square-quote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=t("message-square-share",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=t("message-square-reply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=t("message-square-text",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=t("message-square-warning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=t("message-square-x",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=t("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=t("messages-square",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=t("mic-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=t("mic-vocal",[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=t("mic",[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=t("microchip",[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=t("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=t("microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=t("milestone",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",key:"1btarq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=t("milk-off",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=t("milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=t("minimize-2",[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=t("minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=t("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=t("monitor-check",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=t("monitor-cog",[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m14.305 7.53.923-.382",key:"1mlnsw"}],["path",{d:"m15.228 4.852-.923-.383",key:"82mpwg"}],["path",{d:"m16.852 3.228-.383-.924",key:"ln4sir"}],["path",{d:"m16.852 8.772-.383.923",key:"1dejw0"}],["path",{d:"m19.148 3.228.383-.924",key:"192kgf"}],["path",{d:"m19.53 9.696-.382-.924",key:"fiavlr"}],["path",{d:"m20.772 4.852.924-.383",key:"1j8mgp"}],["path",{d:"m20.772 7.148.924.383",key:"zix9be"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=t("monitor-dot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=t("monitor-down",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=t("monitor-off",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=t("monitor-pause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=t("monitor-play",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=t("monitor-smartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=t("monitor-speaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=t("monitor-stop",[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=t("monitor-up",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=t("monitor-x",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=t("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=t("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=t("moon-star",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=t("mountain-snow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=t("mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=t("mouse-off",[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=t("mouse-pointer-2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=t("mouse-pointer-ban",[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",key:"11pp1i"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=t("mouse-pointer-click",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=t("mouse-pointer",[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=t("mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=t("move-3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=t("move-diagonal-2",[["path",{d:"M19 13v6h-6",key:"1hxl6d"}],["path",{d:"M5 11V5h6",key:"12e2xe"}],["path",{d:"m5 5 14 14",key:"11anup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=t("move-diagonal",[["path",{d:"M11 19H5v-6",key:"8awifj"}],["path",{d:"M13 5h6v6",key:"7voy1q"}],["path",{d:"M19 5 5 19",key:"wwaj1z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=t("move-down-left",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=t("move-down-right",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=t("move-down",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=t("move-horizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=t("move-left",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=t("move-right",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=t("move-up-right",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=t("move-up-left",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=t("move-up",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=t("move-vertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=t("move",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=t("music-2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=t("music-3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=t("music-4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=t("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=t("navigation-2-off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=t("navigation-2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=t("navigation-off",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=t("navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=t("newspaper",[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=t("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=t("nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=t("non-binary",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"m8.5 4 7 4",key:"m1xjk3"}],["path",{d:"m8.5 8 7-4",key:"t0m5j6"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=t("notebook-pen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=t("notebook-tabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=t("notebook-text",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=t("notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=t("notepad-text-dashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=t("notepad-text",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=t("nut-off",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=t("nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=t("octagon-alert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=t("octagon-minus",[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=t("octagon-pause",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=t("octagon-x",[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=t("octagon",[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=t("omega",[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",key:"1x94xo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=t("option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=t("orbit",[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=t("origami",[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=t("package-2",[["path",{d:"M12 3v6",key:"1holv5"}],["path",{d:"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z",key:"187q7i"}],["path",{d:"M3.054 9.013h17.893",key:"grwhos"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=t("package-check",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=t("package-minus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=t("package-open",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=t("package-plus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=t("package-search",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=t("package-x",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=t("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=t("paint-bucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=t("paint-roller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=t("paintbrush-vertical",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=t("paintbrush",[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=t("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=t("panda",[["path",{d:"M11.25 17.25h1.5L12 18z",key:"1wmwwj"}],["path",{d:"m15 12 2 2",key:"k60wz4"}],["path",{d:"M18 6.5a.5.5 0 0 0-.5-.5",key:"1ch4h4"}],["path",{d:"M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83",key:"1c660l"}],["path",{d:"M6 6.5a.495.495 0 0 1 .5-.5",key:"eviuep"}],["path",{d:"m9 12-2 2",key:"326nkw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=t("panel-bottom-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=t("panel-bottom-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=t("panel-bottom-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=t("panel-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=t("panel-left-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=t("panel-left-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=t("panel-left-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=t("panel-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=t("panel-right-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=t("panel-right-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=t("panel-right-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=t("panel-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=t("panel-top-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=t("panel-top-dashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=t("panel-top-open",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=t("panel-top",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=t("panels-left-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=t("panels-right-bottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=t("panels-top-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=t("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=t("parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=t("parking-meter",[["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",key:"1jofit"}],["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=t("party-popper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=t("pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=t("paw-print",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=t("pc-case",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=t("pen-line",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=t("pen-off",[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=t("pen-tool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=t("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=t("pencil-line",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=t("pencil-off",[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=t("pencil-ruler",[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=t("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=t("pentagon",[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",key:"2hea0t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=t("percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=t("person-standing",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=t("philippine-peso",[["path",{d:"M20 11H4",key:"6ut86h"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",key:"1ana5r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=t("phone-call",[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=t("phone-forwarded",[["path",{d:"M14 6h8",key:"yd68k4"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=t("phone-incoming",[["path",{d:"M16 2v6h6",key:"1mfrl5"}],["path",{d:"m22 2-6 6",key:"6f0sa0"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=t("phone-missed",[["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"m22 2-6 6",key:"6f0sa0"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=t("phone-off",[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",key:"1wngk7"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",key:"10hv5p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=t("phone-outgoing",[["path",{d:"m16 8 6-6",key:"oawc05"}],["path",{d:"M22 8V2h-6",key:"oqy2zc"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=t("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=t("pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=t("piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=t("pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=t("picture-in-picture-2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=t("picture-in-picture",[["path",{d:"M2 10h6V4",key:"zwrco"}],["path",{d:"m2 4 6 6",key:"ug085t"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7",key:"git5jr"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3",key:"1f7fh3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1",key:"1wjs3o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=t("piggy-bank",[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=t("pilcrow-left",[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=t("pilcrow-right",[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=t("pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=t("pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=t("pill-bottle",[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=t("pin-off",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=t("pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=t("pipette",[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=t("pizza",[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=t("plane-landing",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=t("plane-takeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=t("plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=t("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=t("plug-2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z",key:"wtfw2c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=t("plug-zap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=t("plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=t("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=t("pocket-knife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=t("pocket",[["path",{d:"M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z",key:"1uodqw"}],["path",{d:"m8 10 4 4 4-4",key:"1mxd5q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=t("podcast",[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=t("pointer-off",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=t("pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1agjmk"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",key:"wdbh2u"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",key:"1ibuk9"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=t("popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=t("popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=t("pound-sterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=t("power-off",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=t("power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=t("presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=t("printer-check",[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",key:"qeb09x"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",key:"1md90i"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=t("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=t("projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=t("proportions",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=t("puzzle",[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=t("pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=t("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=t("quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=t("rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=t("radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=t("radiation",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z",key:"1y4lzb"}],["path",{d:"M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z",key:"163ggk"}],["path",{d:"M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z",key:"1l9i0b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=t("radical",[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=t("radio-receiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=t("radio-tower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=t("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=t("radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=t("rail-symbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=t("rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=t("rat",[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5",key:"1tbvmo"}],["path",{d:"M16 9h.01",key:"1bdo4e"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",key:"9ch7kn"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",key:"3s7e9i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=t("ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=t("receipt-cent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=t("receipt-euro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=t("receipt-japanese-yen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=t("receipt-indian-rupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=t("receipt-pound-sterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=t("receipt-russian-ruble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=t("receipt-swiss-franc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=t("receipt-text",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=t("receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=t("rectangle-circle",[["path",{d:"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z",key:"1m5n7q"}],["circle",{cx:"14",cy:"12",r:"8",key:"1pag6k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=t("rectangle-ellipsis",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=t("rectangle-goggles",[["path",{d:"M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"d5y1f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=t("rectangle-horizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=t("rectangle-vertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=t("recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=t("redo-2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=t("redo-dot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=t("redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=t("refresh-ccw-dot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=t("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=t("refresh-cw-off",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=t("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=t("refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=t("regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=t("remove-formatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=t("repeat-1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=t("repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=t("repeat-2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=t("replace-all",[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"1yyzbs"}],["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"zfj4xr"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1",key:"1ageje"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=t("replace",[["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1",key:"3y3t5z"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=t("reply-all",[["path",{d:"m12 17-5-5 5-5",key:"1s3y5u"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}],["path",{d:"m7 17-5-5 5-5",key:"1ed8i2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=t("reply",[["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}],["path",{d:"m9 17-5-5 5-5",key:"nvlc11"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=t("rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=t("ribbon",[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",key:"1rnhq3"}],["path",{d:"m12 18 2.57-3.5",key:"116vt7"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009",key:"10dq0b"}],["path",{d:"M9.35 14.53 12 11.22",key:"tdsyp2"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",key:"nmifey"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=t("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=t("rocking-chair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=t("roller-coaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=t("rotate-3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=t("rotate-ccw-key",[["path",{d:"m14.5 9.5 1 1",key:"159eiq"}],["path",{d:"m15.5 8.5-4 4",key:"iirg3q"}],["path",{d:"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8",key:"g2jlw"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["circle",{cx:"10",cy:"14",r:"2",key:"1239so"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=t("rotate-ccw-square",[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=t("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=t("rotate-cw-square",[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=t("rotate-cw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=t("route-off",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=t("route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=t("router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=t("rows-2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=t("rows-3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=t("rows-4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=t("rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=t("ruler-dimension-line",[["path",{d:"M12 15v-3.014",key:"aw6ppf"}],["path",{d:"M16 15v-3.014",key:"9e0vc7"}],["path",{d:"M20 6H4",key:"1lfz86"}],["path",{d:"M20 8V4",key:"1l2g47"}],["path",{d:"M4 8V4",key:"sppxzt"}],["path",{d:"M8 15v-3.014",key:"when08"}],["rect",{x:"3",y:"12",width:"18",height:"7",rx:"1",key:"1ucwdz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=t("ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=t("russian-ruble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=t("sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=t("salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=t("sandwich",[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",key:"f1wd0e"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",key:"1pfu07"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",key:"1oq9qw"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"1fnwu5"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1",key:"itshg"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=t("satellite",[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=t("satellite-dish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=t("saudi-riyal",[["path",{d:"m20 19.5-5.5 1.2",key:"1aenhr"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2",key:"2rtezt"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2",key:"1kbm92"}],["path",{d:"M20 10 4 13.5",key:"8nums9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=t("save-all",[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=t("save-off",[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7",key:"h8g396"}],["path",{d:"M14 8h1",key:"1lfen6"}],["path",{d:"M17 21v-4",key:"1yknxs"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",key:"1t4vdl"}],["path",{d:"M29.5 11.5s5 5 4 5",key:"zzn4i6"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",key:"24cby9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=t("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=t("scale-3d",[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=t("scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=t("scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=t("scan-eye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=t("scan-barcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=t("scan-face",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=t("scan-heart",[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",key:"1algrk"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=t("scan-line",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=t("scan-qr-code",[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4",key:"uk4fdo"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M17 8V7",key:"q2g9wo"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1",key:"m9kyts"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=t("scan-search",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=t("scan-text",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=t("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=t("school",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=t("scissors-line-dashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=t("screen-share-off",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=t("scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=t("screen-share",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=t("scroll",[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=t("scroll-text",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=t("search-check",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=t("search-code",[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=t("search-x",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=t("search-slash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=t("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=t("section",[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=t("send-horizontal",[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=t("send-to-back",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=t("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=t("separator-horizontal",[["path",{d:"m16 16-4 4-4-4",key:"3dv8je"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"m8 8 4-4 4 4",key:"2bscm2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=t("separator-vertical",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m16 16 4-4-4-4",key:"1js579"}],["path",{d:"m8 8-4 4 4 4",key:"1whems"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=t("server-crash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=t("server-cog",[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1v3clb"}],["path",{d:"m13.148 9.228.383-.923",key:"t2zzyc"}],["path",{d:"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1bxfiv"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=t("server-off",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=t("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=t("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=t("settings-2",[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=t("shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=t("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=t("share",[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=t("sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=t("shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=t("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=t("shield-ban",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=t("shield-ellipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=t("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=t("shield-half",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=t("shield-minus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=t("shield-off",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=t("shield-plus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=t("shield-question-mark",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=t("shield-user",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003",key:"hnjrf2"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=t("shield-x",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=t("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=t("ship-wheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=t("shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=t("ship",[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=t("shopping-bag",[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=t("shopping-basket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=t("shopping-cart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=t("shower-head",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=t("shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=t("shrimp",[["path",{d:"M11 12h.01",key:"1lr4k6"}],["path",{d:"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1",key:"fatpdi"}],["path",{d:"M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8",key:"kehrqe"}],["path",{d:"M14 8a8.5 8.5 0 0 1 0 8",key:"1imjx2"}],["path",{d:"M16 16c2 0 4.5-4 4-6",key:"z0nejz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=t("shredder",[["path",{d:"M10 22v-5",key:"sfixh4"}],["path",{d:"M14 19v-2",key:"pdve8j"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M18 20v-3",key:"uox2gk"}],["path",{d:"M2 13h20",key:"5evz65"}],["path",{d:"M20 13V7l-5-5H6a2 2 0 0 0-2 2v9",key:"1rnpe2"}],["path",{d:"M6 20v-3",key:"c6pdcb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=t("shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=t("shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=t("sigma",[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=t("shrub",[["path",{d:"M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5",key:"1p17fm"}],["path",{d:"M14.5 14.5 12 17",key:"dy5w4y"}],["path",{d:"M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z",key:"6z7b3o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=t("signal-high",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=t("signal-low",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=t("signal-zero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=t("signal-medium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=t("signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=t("signature",[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",key:"y32ogt"}],["path",{d:"M3 21h18",key:"itz85i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=t("signpost-big",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=t("signpost",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",key:"gqqp9m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=t("siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=t("skip-back",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=t("skip-forward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=t("skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=t("slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=t("slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=t("slice",[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",key:"1sllp5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=t("sliders-horizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=t("sliders-vertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=t("smartphone-charging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=t("smartphone-nfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=t("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=t("smile-plus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=t("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=t("snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=t("snowflake",[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=t("soap-dispenser-droplet",[["path",{d:"M10.5 2v4",key:"1xt6in"}],["path",{d:"M14 2H7a2 2 0 0 0-2 2",key:"e6xig3"}],["path",{d:"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19",key:"adq7uc"}],["path",{d:"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"t9hm96"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=t("sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=t("space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=t("soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=t("spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=t("sparkle",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=t("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=t("speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=t("speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=t("spell-check-2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=t("spell-check",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=t("spline-pointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=t("spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=t("split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=t("spool",[["path",{d:"M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66",key:"13vns8"}],["path",{d:"m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178",key:"s8x3u0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=t("spray-can",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=t("sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=t("square-activity",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=t("square-arrow-down-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=t("square-arrow-down-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=t("square-arrow-down",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=t("square-arrow-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=t("square-arrow-out-down-left",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=t("square-arrow-out-down-right",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=t("square-arrow-out-up-left",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=t("square-arrow-out-up-right",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=t("square-arrow-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=t("square-arrow-up-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=t("square-arrow-up-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=t("square-asterisk",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=t("square-arrow-up",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=t("square-bottom-dashed-scissors",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=t("square-chart-gantt",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=t("square-check-big",[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=t("square-check",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=t("square-chevron-down",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=t("square-chevron-right",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=t("square-chevron-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=t("square-chevron-up",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=t("square-code",[["path",{d:"m10 9-3 3 3 3",key:"1oro0q"}],["path",{d:"m14 15 3-3-3-3",key:"bz13h7"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=t("square-dashed-bottom-code",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=t("square-dashed-bottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=t("square-dashed-kanban",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=t("square-dashed-mouse-pointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=t("square-dashed-top-solid",[["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"89voep"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 21h1",key:"15o7lz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=t("square-dashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=t("square-divide",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=t("square-dot",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=t("square-equal",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=t("square-kanban",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=t("square-function",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=t("square-library",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=t("square-m",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=t("square-menu",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=t("square-minus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=t("square-mouse-pointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=t("square-parking-off",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=t("square-parking",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=t("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=t("square-percent",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=t("square-pi",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=t("square-pilcrow",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=t("square-play",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=t("square-plus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=t("square-power",[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=t("square-round-corner",[["path",{d:"M21 11a8 8 0 0 0-8-8",key:"1lxwo5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1dv2y5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=t("square-radical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=t("square-scissors",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=t("square-sigma",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=t("square-slash",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=t("square-split-horizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=t("square-split-vertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=t("square-square",[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=t("square-stack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=t("square-terminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=t("square-user-round",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=t("square-user",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=t("square-x",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=t("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=t("squares-exclude",[["path",{d:"M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0",key:"1mcohs"}],["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2",key:"1r1efp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=t("squares-intersect",[["path",{d:"M10 22a2 2 0 0 1-2-2",key:"i7yj1i"}],["path",{d:"M14 2a2 2 0 0 1 2 2",key:"170a0m"}],["path",{d:"M16 22h-2",key:"18d249"}],["path",{d:"M2 10V8",key:"7yj4fe"}],["path",{d:"M2 4a2 2 0 0 1 2-2",key:"ddgnws"}],["path",{d:"M20 8a2 2 0 0 1 2 2",key:"1770vt"}],["path",{d:"M22 14v2",key:"iot8ja"}],["path",{d:"M22 20a2 2 0 0 1-2 2",key:"qj8q6g"}],["path",{d:"M4 16a2 2 0 0 1-2-2",key:"1dnafg"}],["path",{d:"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z",key:"ci6f0b"}],["path",{d:"M8 2h2",key:"1gmkwm"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=t("squares-subtract",[["path",{d:"M10 22a2 2 0 0 1-2-2",key:"i7yj1i"}],["path",{d:"M16 22h-2",key:"18d249"}],["path",{d:"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",key:"1njgbb"}],["path",{d:"M20 8a2 2 0 0 1 2 2",key:"1770vt"}],["path",{d:"M22 14v2",key:"iot8ja"}],["path",{d:"M22 20a2 2 0 0 1-2 2",key:"qj8q6g"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=t("squircle-dashed",[["path",{d:"M13.77 3.043a34 34 0 0 0-3.54 0",key:"1oaobr"}],["path",{d:"M13.771 20.956a33 33 0 0 1-3.541.001",key:"95iq0j"}],["path",{d:"M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44",key:"1u6qty"}],["path",{d:"M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438",key:"1ew6g6"}],["path",{d:"M20.957 10.23a33 33 0 0 1 0 3.54",key:"1l9npr"}],["path",{d:"M3.043 10.23a34 34 0 0 0 .001 3.541",key:"1it6jm"}],["path",{d:"M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438",key:"14uchd"}],["path",{d:"M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44",key:"8k4agb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=t("squares-unite",[["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z",key:"17jnth"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=t("squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=t("squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=t("stamp",[["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13",key:"i9gjdv"}],["path",{d:"M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",key:"1vzg3v"}],["path",{d:"M5 22h14",key:"ehvnwv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=t("star-half",[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=t("star-off",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=t("step-back",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=t("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=t("step-forward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=t("stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=t("sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=t("sticky-note",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=t("store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=t("stretch-horizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=t("stretch-vertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=t("strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=t("subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=t("sun-dim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=t("sun-medium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=t("sun-moon",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M13 8.129A4 4 0 0 1 15.873 11",key:"my0cn3"}],["path",{d:"m19 5-1.256 1.256",key:"1yg6a6"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M9 8a5 5 0 1 0 7 7 7 7 0 1 1-7-7",key:"4qob92"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=t("sun-snow",[["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 9a3 3 0 0 0 0 6",key:"gv75dk"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6 1.5-3H22",key:"o5qa3v"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=t("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=t("sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=t("sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=t("superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=t("swatch-book",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h.01",key:"1euzgo"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=t("swiss-franc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=t("switch-camera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=t("sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=t("syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=t("swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=t("table-2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=t("table-cells-merge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=t("table-cells-split",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=t("table-columns-split",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=t("table-of-contents",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=t("table-properties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=t("table-rows-split",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=t("table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=t("tablet-smartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=t("tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=t("tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=t("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=t("tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=t("tally-1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=t("tally-2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=t("tally-3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=t("tally-4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=t("tally-5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=t("tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=t("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=t("telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=t("tent-tree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=t("tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=t("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=t("test-tube-diagonal",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=t("test-tube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=t("test-tubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",key:"1hjrqt"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",key:"16lc8n"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=t("text-cursor-input",[["path",{d:"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6",key:"1528k5"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1",key:"1mj8rg"}],["path",{d:"M9 6v12",key:"velyjx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=t("text-cursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=t("text-quote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=t("text-search",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=t("text-select",[["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M9 3h1",key:"1yesri"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=t("text",[["path",{d:"M15 18H3",key:"olowqp"}],["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H3",key:"2avoz0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=t("thermometer-snowflake",[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"M10.585 15H10",key:"4nqulp"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",key:"yu0u2z"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h2",key:"1bbqgq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=t("theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=t("thermometer-sun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=t("thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=t("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=t("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=t("ticket-check",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=t("ticket-minus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=t("ticket-percent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=t("ticket-plus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=t("ticket-slash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=t("ticket-x",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=t("ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=t("tickets-plane",[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",key:"16muxl"}],["path",{d:"m12 13.5 3.75.5",key:"1i9qhk"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=t("tickets",[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=t("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=t("timer-off",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=t("timer-reset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=t("toggle-left",[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=t("toggle-right",[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=t("toilet",[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",key:"kc4kqr"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",key:"1tqs57"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=t("tool-case",[["path",{d:"M10 15h4",key:"192ueg"}],["path",{d:"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27",key:"xbnumr"}],["path",{d:"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122",key:"eaw7gc"}],["path",{d:"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1vaooh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=t("tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=t("torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=t("touchpad-off",[["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"M19.656 14H22",key:"170xzr"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M9.656 4H20a2 2 0 0 1 2 2v10.344",key:"ovjcvl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=t("touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=t("tower-control",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=t("toy-brick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=t("tractor",[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",key:"she1j9"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",key:"1q1ert"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=t("traffic-cone",[["path",{d:"M16.05 10.966a5 2.5 0 0 1-8.1 0",key:"m5jpwb"}],["path",{d:"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04",key:"rbg3g8"}],["path",{d:"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z",key:"vap8c8"}],["path",{d:"M9.194 6.57a5 2.5 0 0 0 5.61 0",key:"15hn5c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=t("train-front",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=t("train-front-tunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=t("train-track",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=t("tram-front",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=t("transgender",[["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M14 20h-4",key:"m8m19d"}],["path",{d:"M18 2h4v4",key:"1341mj"}],["path",{d:"m2 2 7.17 7.17",key:"13q8l2"}],["path",{d:"M2 5.355V2h3.357",key:"18136r"}],["path",{d:"m22 2-7.17 7.17",key:"1epvy4"}],["path",{d:"M8 5 5 8",key:"mgbjhz"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=t("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=t("trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=t("tree-deciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=t("tree-palm",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=t("tree-pine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=t("trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=t("trending-down",[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=t("trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=t("trending-up-down",[["path",{d:"M14.828 14.828 21 21",key:"ar5fw7"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"m21 3-9 9-4-4-6 6",key:"1h02xo"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=t("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=t("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=t("triangle-dashed",[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013",key:"pltmmw"}],["path",{d:"M14 21h2",key:"v4qezv"}],["path",{d:"m15.874 7.743 1 1.732",key:"10m0iw"}],["path",{d:"m18.849 12.952 1 1.732",key:"zadnam"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824",key:"fvwuk4"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839",key:"1e1kah"}],["path",{d:"m5.136 12.952-1 1.732",key:"1u4ldi"}],["path",{d:"M8 21h2",key:"i9zjee"}],["path",{d:"m8.102 7.743-1 1.732",key:"1zzo4u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=t("triangle-right",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=t("triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=t("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=t("truck-electric",[["path",{d:"M14 19V7a2 2 0 0 0-2-2H9",key:"15peso"}],["path",{d:"M15 19H9",key:"18q6dt"}],["path",{d:"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14",key:"1dkp3j"}],["path",{d:"M2 13v5a1 1 0 0 0 1 1h2",key:"pkmmzz"}],["path",{d:"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02",key:"1n26pd"}],["circle",{cx:"17",cy:"19",r:"2",key:"1nxcgd"}],["circle",{cx:"7",cy:"19",r:"2",key:"gzo7y7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=t("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=t("turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=t("tv-minimal-play",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=t("tv-minimal",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=t("tv",[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=t("twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=t("type-outline",[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",key:"1reda3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=t("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=t("type",[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=t("umbrella-off",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=t("underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=t("umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=t("undo-2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=t("undo-dot",[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13",key:"8mp6z9"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=t("unfold-horizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=t("undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=t("unfold-vertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=t("ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=t("university",[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 16h.01",key:"plv8zi"}],["path",{d:"M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z",key:"1ogmi3"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["path",{d:"M6 16h.01",key:"1pmjb7"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=t("unlink-2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=t("unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=t("unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=t("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=t("usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=t("user-check",[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=t("user-cog",[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=t("user-lock",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["path",{d:"M15 15.5V14a2 2 0 0 1 4 0v1.5",key:"12ym5i"}],["rect",{width:"8",height:"5",x:"13",y:"16",rx:".899",key:"4p176n"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=t("user-minus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=t("user-pen",[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2",key:"15lzij"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=t("user-plus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=t("user-round-cog",[["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=t("user-round-check",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=t("user-round-minus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=t("user-round-pen",[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487",key:"1c8h7z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=t("user-round-plus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=t("user-round-search",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=t("user-round-x",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=t("user-round",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=t("user-x",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=t("user-search",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=t("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=t("users-round",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=t("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=t("utensils-crossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=t("utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=t("utility-pole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=t("variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=t("vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=t("vector-square",[["path",{d:"M19.5 7a24 24 0 0 1 0 10",key:"8n60xe"}],["path",{d:"M4.5 7a24 24 0 0 0 0 10",key:"2lmadr"}],["path",{d:"M7 19.5a24 24 0 0 0 10 0",key:"1q94o2"}],["path",{d:"M7 4.5a24 24 0 0 1 10 0",key:"2z8ypa"}],["rect",{x:"17",y:"17",width:"5",height:"5",rx:"1",key:"1ac74s"}],["rect",{x:"17",y:"2",width:"5",height:"5",rx:"1",key:"1e7h5j"}],["rect",{x:"2",y:"17",width:"5",height:"5",rx:"1",key:"1t4eah"}],["rect",{x:"2",y:"2",width:"5",height:"5",rx:"1",key:"940dhs"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=t("vegan",[["path",{d:"M16 8q6 0 6-6-6 0-6 6",key:"qsyyc4"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3",key:"41m9h7"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=t("venetian-mask",[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=t("venus-and-mars",[["path",{d:"M10 20h4",key:"ni2waw"}],["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M17 2h4v4",key:"vhe59"}],["path",{d:"m21 2-5.46 5.46",key:"19kypf"}],["circle",{cx:"12",cy:"11",r:"5",key:"16gxyc"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=t("vibrate-off",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=t("venus",[["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M9 19h6",key:"456am0"}],["circle",{cx:"12",cy:"9",r:"6",key:"1nw4tq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=t("vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=t("video-off",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=t("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=t("videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=t("view",[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=t("voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=t("volleyball",[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4",key:"2880wi"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5",key:"113sja"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5",key:"1qmsgl"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10",key:"1bmeqp"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5",key:"iekzv9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=t("volume-1",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=t("volume-off",[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=t("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=t("volume-x",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=t("volume",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=t("vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=t("wallet-cards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=t("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=t("wallet-minimal",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=t("wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=t("wand-sparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=t("wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=t("warehouse",[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11",key:"pb2vm6"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",key:"doq5xv"}],["path",{d:"M6 13h12",key:"yf64js"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=t("washing-machine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=t("waves-ladder",[["path",{d:"M19 5a2 2 0 0 0-2 2v11",key:"s41o68"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}],["path",{d:"M7 13h10",key:"1rwob1"}],["path",{d:"M7 9h10",key:"12czzb"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11",key:"x0q4gh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=t("watch",[["path",{d:"M12 10v2.2l1.6 1",key:"n3r21l"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=t("waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=t("waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=t("webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=t("webhook-off",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=t("webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=t("weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=t("wheat-off",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=t("wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=t("whole-word",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=t("wifi-cog",[["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"M2 7.82a15 15 0 0 1 20 0",key:"1ovjuk"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["path",{d:"M5 11.858a10 10 0 0 1 11.5-1.785",key:"3sn16i"}],["path",{d:"M8.5 15.429a5 5 0 0 1 2.413-1.31",key:"1pxovh"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=t("wifi-high",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=t("wifi-low",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=t("wifi-off",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=t("wifi-pen",[["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["path",{d:"M5 12.859a10 10 0 0 1 10.5-2.222",key:"rpb7oy"}],["path",{d:"M8.5 16.429a5 5 0 0 1 3-1.406",key:"r8bmzl"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=t("wifi-zero",[["path",{d:"M12 20h.01",key:"zekei9"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=t("wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=t("wind-arrow-down",[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 4 4-4",key:"k13n16"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=t("wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=t("wine-off",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=t("wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=t("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=t("worm",[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=t("wrap-text",[["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["path",{d:"M3 18h7",key:"sq21v6"}],["path",{d:"M3 6h18",key:"d0wm0j"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=t("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=t("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=t("youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=t("zap-off",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=t("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=t("zoom-in",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=t("zoom-out",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:yo,AArrowUp:uo,ALargeSmall:po,Accessibility:ko,Activity:fo,AirVent:Mo,Airplay:vo,AlarmClock:go,AlarmClockCheck:K1,AlarmClockMinus:X1,AlarmClockOff:mo,AlarmClockPlus:Q1,AlarmSmoke:xo,Album:wo,AlignCenter:Io,AlignCenterHorizontal:Lo,AlignCenterVertical:bo,AlignEndHorizontal:Co,AlignEndVertical:So,AlignHorizontalDistributeCenter:qo,AlignHorizontalDistributeEnd:Ao,AlignHorizontalDistributeStart:zo,AlignHorizontalJustifyCenter:Ho,AlignHorizontalJustifyEnd:Vo,AlignHorizontalJustifyStart:jo,AlignHorizontalSpaceAround:Po,AlignHorizontalSpaceBetween:_o,AlignJustify:Ro,AlignLeft:Bo,AlignRight:Do,AlignStartHorizontal:Fo,AlignStartVertical:To,AlignVerticalDistributeCenter:Oo,AlignVerticalDistributeEnd:Eo,AlignVerticalDistributeStart:Uo,AlignVerticalJustifyCenter:$o,AlignVerticalJustifyEnd:Zo,AlignVerticalJustifyStart:No,AlignVerticalSpaceAround:Go,AlignVerticalSpaceBetween:Wo,Ambulance:Ko,Ampersand:Xo,Ampersands:Qo,Amphora:Jo,Anchor:Yo,Angry:en,Annoyed:tn,Antenna:an,Anvil:cn,Aperture:on,AppWindow:rn,AppWindowMac:nn,Apple:dn,Archive:ln,ArchiveRestore:hn,ArchiveX:sn,Armchair:yn,ArrowBigDown:pn,ArrowBigDownDash:un,ArrowBigLeft:fn,ArrowBigLeftDash:kn,ArrowBigRight:vn,ArrowBigRightDash:Mn,ArrowBigUp:gn,ArrowBigUpDash:mn,ArrowDown:zn,ArrowDown01:xn,ArrowDown10:wn,ArrowDownAZ:J1,ArrowDownFromLine:Ln,ArrowDownLeft:bn,ArrowDownNarrowWide:In,ArrowDownRight:Cn,ArrowDownToDot:qn,ArrowDownToLine:Sn,ArrowDownUp:An,ArrowDownWideNarrow:Y1,ArrowDownZA:et,ArrowLeft:Pn,ArrowLeftFromLine:Hn,ArrowLeftRight:Vn,ArrowLeftToLine:jn,ArrowRight:Dn,ArrowRightFromLine:_n,ArrowRightLeft:Rn,ArrowRightToLine:Bn,ArrowUp:Wn,ArrowUp01:Fn,ArrowUp10:Tn,ArrowUpAZ:tt,ArrowUpDown:On,ArrowUpFromDot:En,ArrowUpFromLine:Un,ArrowUpLeft:$n,ArrowUpNarrowWide:at,ArrowUpRight:Zn,ArrowUpToLine:Nn,ArrowUpWideNarrow:Gn,ArrowUpZA:ct,ArrowsUpFromLine:Kn,Asterisk:Xn,AtSign:Qn,Atom:Jn,AudioLines:Yn,AudioWaveform:er,Award:tr,Axe:ar,Axis3d:ot,Baby:cr,Backpack:or,Badge:vr,BadgeAlert:nr,BadgeCent:rr,BadgeCheck:nt,BadgeDollarSign:ir,BadgeEuro:dr,BadgeIndianRupee:hr,BadgeInfo:sr,BadgeJapaneseYen:lr,BadgeMinus:yr,BadgePercent:pr,BadgePlus:ur,BadgePoundSterling:kr,BadgeQuestionMark:rt,BadgeRussianRuble:fr,BadgeSwissFranc:mr,BadgeX:Mr,BaggageClaim:gr,Ban:xr,Banana:Lr,Bandage:wr,Banknote:qr,BanknoteArrowDown:br,BanknoteArrowUp:Ir,BanknoteX:Cr,Barcode:Sr,Barrel:Ar,Baseline:zr,Bath:Hr,Battery:Fr,BatteryCharging:Vr,BatteryFull:jr,BatteryLow:Pr,BatteryMedium:_r,BatteryPlus:Rr,BatteryWarning:Br,Beaker:Dr,Bean:Or,BeanOff:Tr,Bed:$r,BedDouble:Er,BedSingle:Ur,Beef:Zr,Beer:Gr,BeerOff:Nr,Bell:G0,BellDot:Wr,BellElectric:Kr,BellMinus:Xr,BellOff:Qr,BellPlus:Yr,BellRing:Jr,BetweenHorizontalEnd:it,BetweenHorizontalStart:dt,BetweenVerticalEnd:ei,BetweenVerticalStart:ai,BicepsFlexed:ti,Bike:oi,Binary:ci,Binoculars:ni,Biohazard:ri,Bird:ii,Bitcoin:di,Blend:si,Blinds:hi,Blocks:li,Bluetooth:ki,BluetoothConnected:yi,BluetoothOff:pi,BluetoothSearching:ui,Bold:fi,Bolt:Mi,Bomb:vi,Bone:mi,Book:Ei,BookA:gi,BookAlert:xi,BookAudio:wi,BookCheck:Li,BookCopy:bi,BookDashed:ht,BookDown:Ii,BookHeadphones:Ci,BookHeart:qi,BookImage:Si,BookKey:Ai,BookLock:zi,BookMarked:Hi,BookMinus:Vi,BookOpen:W0,BookOpenCheck:ji,BookOpenText:Pi,BookPlus:_i,BookText:Ri,BookType:Bi,BookUp:Fi,BookUp2:Di,BookUser:Ti,BookX:Oi,Bookmark:Gi,BookmarkCheck:Ui,BookmarkMinus:$i,BookmarkPlus:Zi,BookmarkX:Ni,BoomBox:Wi,Bot:Qi,BotMessageSquare:Ki,BotOff:Xi,BottleWine:Ji,BowArrow:Yi,Box:ed,Boxes:td,Braces:st,Brackets:ad,Brain:nd,BrainCircuit:cd,BrainCog:od,BrickWall:id,BrickWallFire:rd,Briefcase:ld,BriefcaseBusiness:dd,BriefcaseConveyorBelt:hd,BriefcaseMedical:sd,BringToFront:yd,Brush:ud,BrushCleaning:pd,Bubbles:kd,Bug:vd,BugOff:fd,BugPlay:Md,Building:xd,Building2:md,Bus:wd,BusFront:gd,Cable:bd,CableCar:Ld,Cake:Cd,CakeSlice:Id,Calculator:qd,Calendar:Gd,Calendar1:Sd,CalendarArrowDown:Ad,CalendarArrowUp:zd,CalendarCheck:Vd,CalendarCheck2:Hd,CalendarClock:jd,CalendarCog:Pd,CalendarDays:_d,CalendarFold:Rd,CalendarHeart:Bd,CalendarMinus:Fd,CalendarMinus2:Dd,CalendarOff:Td,CalendarPlus:Ed,CalendarPlus2:Od,CalendarRange:Ud,CalendarSearch:$d,CalendarSync:Zd,CalendarX:Wd,CalendarX2:Nd,Camera:Xd,CameraOff:Kd,Candy:Yd,CandyCane:Qd,CandyOff:Jd,Cannabis:eh,Captions:lt,CaptionsOff:ah,Car:oh,CarFront:th,CarTaxiFront:ch,Caravan:nh,CardSim:rh,Carrot:ih,CaseLower:dh,CaseSensitive:sh,CaseUpper:hh,CassetteTape:lh,Cast:ph,Castle:yh,Cat:kh,Cctv:uh,ChartArea:yt,ChartBar:ut,ChartBarBig:pt,ChartBarDecreasing:fh,ChartBarIncreasing:Mh,ChartBarStacked:vh,ChartCandlestick:kt,ChartColumn:vt,ChartColumnBig:ft,ChartColumnDecreasing:mh,ChartColumnIncreasing:Mt,ChartColumnStacked:gh,ChartGantt:xh,ChartLine:mt,ChartNetwork:wh,ChartNoAxesColumn:xt,ChartNoAxesColumnDecreasing:Lh,ChartNoAxesColumnIncreasing:gt,ChartNoAxesCombined:bh,ChartNoAxesGantt:wt,ChartPie:Lt,ChartScatter:bt,ChartSpline:Ih,Check:Ah,CheckCheck:Ch,CheckLine:qh,ChefHat:Sh,Cherry:zh,ChevronDown:mc,ChevronFirst:Hh,ChevronLast:Vh,ChevronLeft:K0,ChevronRight:X0,ChevronUp:gc,ChevronsDown:Ph,ChevronsDownUp:jh,ChevronsLeft:xc,ChevronsLeftRight:Rh,ChevronsLeftRightEllipsis:_h,ChevronsRight:wc,ChevronsRightLeft:Bh,ChevronsUp:Dh,ChevronsUpDown:Th,Chrome:Fh,Church:Oh,Cigarette:Uh,CigaretteOff:Eh,Circle:Lc,CircleAlert:It,CircleArrowDown:Ct,CircleArrowLeft:qt,CircleArrowOutDownLeft:St,CircleArrowOutDownRight:At,CircleArrowOutUpLeft:zt,CircleArrowOutUpRight:Ht,CircleArrowRight:Vt,CircleArrowUp:jt,CircleCheck:_t,CircleCheckBig:Pt,CircleChevronDown:Rt,CircleChevronLeft:Bt,CircleChevronRight:Dt,CircleChevronUp:Ft,CircleDashed:$h,CircleDivide:Tt,CircleDollarSign:Zh,CircleDot:Gh,CircleDotDashed:Nh,CircleEllipsis:Wh,CircleEqual:Kh,CircleFadingArrowUp:Xh,CircleFadingPlus:Qh,CircleGauge:Ot,CircleMinus:Et,CircleOff:Jh,CircleParking:$t,CircleParkingOff:Ut,CirclePause:Zt,CirclePercent:Nt,CirclePlay:Gt,CirclePlus:Wt,CirclePoundSterling:Yh,CirclePower:Kt,CircleQuestionMark:h1,CircleSlash:es,CircleSlash2:Xt,CircleSmall:ts,CircleStop:Qt,CircleUser:Jt,CircleUserRound:Yt,CircleX:e2,CircuitBoard:as,Citrus:cs,Clapperboard:os,Clipboard:ps,ClipboardCheck:ns,ClipboardCopy:rs,ClipboardList:is,ClipboardMinus:ds,ClipboardPaste:hs,ClipboardPen:a2,ClipboardPenLine:t2,ClipboardPlus:ss,ClipboardType:ls,ClipboardX:ys,Clock:Hs,Clock1:us,Clock10:ks,Clock11:fs,Clock12:Ms,Clock2:vs,Clock3:ms,Clock4:gs,Clock5:xs,Clock6:ws,Clock7:Ls,Clock8:bs,Clock9:Is,ClockAlert:Cs,ClockArrowDown:qs,ClockArrowUp:Ss,ClockFading:As,ClockPlus:zs,Cloud:Gs,CloudAlert:Vs,CloudCheck:js,CloudCog:Ps,CloudDownload:c2,CloudDrizzle:Rs,CloudFog:_s,CloudHail:Bs,CloudLightning:Ds,CloudMoon:Os,CloudMoonRain:Fs,CloudOff:Ts,CloudRain:Us,CloudRainWind:Es,CloudSnow:$s,CloudSun:Ns,CloudSunRain:Zs,CloudUpload:o2,Cloudy:Ws,Clover:Ks,Club:Xs,Code:Qs,CodeXml:n2,Codepen:Js,Codesandbox:Ys,Coffee:el,Cog:tl,Coins:al,Columns2:r2,Columns3:i2,Columns3Cog:s1,Columns4:cl,Combine:ol,Command:nl,Compass:rl,Component:il,Computer:dl,ConciergeBell:hl,Cone:sl,Construction:ll,Contact:yl,ContactRound:d2,Container:pl,Contrast:ul,Cookie:kl,CookingPot:fl,Copy:wl,CopyCheck:Ml,CopyMinus:vl,CopyPlus:ml,CopySlash:gl,CopyX:xl,Copyleft:Ll,Copyright:bl,CornerDownLeft:Il,CornerDownRight:Cl,CornerLeftDown:ql,CornerLeftUp:Sl,CornerRightDown:Al,CornerRightUp:zl,CornerUpLeft:Hl,CornerUpRight:Vl,Cpu:jl,CreativeCommons:Pl,CreditCard:_l,Croissant:Rl,Crop:Bl,Cross:Dl,Crosshair:Fl,Crown:Tl,Cuboid:Ol,CupSoda:El,Currency:$l,Cylinder:Ul,Dam:Zl,Database:Wl,DatabaseBackup:Nl,DatabaseZap:Gl,DecimalsArrowLeft:Kl,DecimalsArrowRight:Ql,Delete:Xl,Dessert:Jl,Diameter:Yl,Diamond:ay,DiamondMinus:ey,DiamondPercent:h2,DiamondPlus:ty,Dice1:cy,Dice2:oy,Dice3:ny,Dice4:ry,Dice5:iy,Dice6:dy,Dices:sy,Diff:ly,Disc:uy,Disc2:hy,Disc3:yy,DiscAlbum:py,Divide:ky,Dna:My,DnaOff:fy,Dock:vy,Dog:my,DollarSign:gy,Donut:xy,DoorClosed:Ly,DoorClosedLocked:wy,DoorOpen:by,Dot:Iy,Download:bc,DraftingCompass:Cy,Drama:qy,Dribbble:Sy,Drill:Ay,Drone:zy,Droplet:Vy,DropletOff:Hy,Droplets:jy,Drum:Py,Drumstick:_y,Dumbbell:Ry,Ear:Dy,EarOff:By,Earth:s2,EarthLock:Fy,Eclipse:Ty,Egg:Uy,EggFried:Oy,EggOff:Ey,Ellipsis:y2,EllipsisVertical:l2,Equal:Ny,EqualApproximately:$y,EqualNot:Zy,Eraser:Gy,EthernetPort:Wy,Euro:Ky,Expand:Xy,ExternalLink:Qy,Eye:ep,EyeClosed:Jy,EyeOff:Yy,Facebook:tp,Factory:ap,Fan:cp,FastForward:op,Feather:np,Fence:rp,FerrisWheel:ip,Figma:hp,File:Ic,FileArchive:dp,FileAudio:lp,FileAudio2:sp,FileAxis3d:p2,FileBadge:pp,FileBadge2:yp,FileBox:up,FileChartColumn:u2,FileChartColumnIncreasing:k2,FileChartLine:f2,FileChartPie:M2,FileCheck:fp,FileCheck2:kp,FileClock:Mp,FileCode:mp,FileCode2:vp,FileCog:v2,FileDiff:gp,FileDigit:xp,FileDown:wp,FileHeart:Lp,FileImage:bp,FileInput:Ip,FileJson:qp,FileJson2:Cp,FileKey:Ap,FileKey2:Sp,FileLock:Hp,FileLock2:zp,FileMinus:jp,FileMinus2:Vp,FileMusic:Pp,FileOutput:_p,FilePen:g2,FilePenLine:m2,FilePlus:Bp,FilePlus2:Rp,FileQuestionMark:x2,FileScan:Dp,FileSearch:Tp,FileSearch2:Fp,FileSliders:Op,FileSpreadsheet:Ep,FileStack:$p,FileSymlink:Up,FileTerminal:Zp,FileText:Wp,FileType:Gp,FileType2:Np,FileUp:Xp,FileUser:Kp,FileVideo:Jp,FileVideo2:Qp,FileVolume:eu,FileVolume2:Yp,FileWarning:tu,FileX:cu,FileX2:au,Files:ou,Film:nu,Fingerprint:ru,FireExtinguisher:iu,Fish:su,FishOff:du,FishSymbol:hu,Flag:uu,FlagOff:lu,FlagTriangleLeft:pu,FlagTriangleRight:yu,Flame:fu,FlameKindling:ku,Flashlight:vu,FlashlightOff:Mu,FlaskConical:gu,FlaskConicalOff:mu,FlaskRound:xu,FlipHorizontal:Lu,FlipHorizontal2:wu,FlipVertical:Iu,FlipVertical2:bu,Flower:Cu,Flower2:qu,Focus:Su,FoldHorizontal:Au,FoldVertical:zu,Folder:Cc,FolderArchive:Hu,FolderCheck:Vu,FolderClock:ju,FolderClosed:Pu,FolderCode:_u,FolderCog:w2,FolderDot:Ru,FolderDown:Du,FolderGit:Fu,FolderGit2:Bu,FolderHeart:Tu,FolderInput:Ou,FolderKanban:Eu,FolderKey:Uu,FolderLock:$u,FolderMinus:Zu,FolderOpen:Q0,FolderOpenDot:Nu,FolderOutput:Gu,FolderPen:L2,FolderPlus:Wu,FolderRoot:Ku,FolderSearch:Qu,FolderSearch2:Xu,FolderSymlink:Ju,FolderSync:Yu,FolderTree:e4,FolderUp:t4,FolderX:a4,Folders:c4,Footprints:n4,Forklift:o4,Forward:r4,Frame:i4,Framer:d4,Frown:h4,Fuel:s4,Fullscreen:l4,Funnel:R1,FunnelPlus:y4,FunnelX:b2,GalleryHorizontal:u4,GalleryHorizontalEnd:p4,GalleryThumbnails:k4,GalleryVertical:v4,GalleryVerticalEnd:f4,Gamepad:m4,Gamepad2:M4,Gauge:g4,Gavel:x4,Gem:w4,GeorgianLari:L4,Ghost:b4,Gift:I4,GitBranch:q4,GitBranchPlus:C4,GitCommitHorizontal:I2,GitCommitVertical:S4,GitCompare:z4,GitCompareArrows:A4,GitFork:H4,GitGraph:V4,GitMerge:j4,GitPullRequest:F4,GitPullRequestArrow:P4,GitPullRequestClosed:R4,GitPullRequestCreate:D4,GitPullRequestCreateArrow:_4,GitPullRequestDraft:B4,Github:T4,Gitlab:O4,GlassWater:E4,Glasses:U4,Globe:Z4,GlobeLock:$4,Goal:N4,Gpu:W4,Grab:G4,GraduationCap:K4,Grape:X4,Grid2x2:A2,Grid2x2Check:C2,Grid2x2Plus:q2,Grid2x2X:S2,Grid3x2:Q4,Grid3x3:l1,Grip:ek,GripHorizontal:J4,GripVertical:Y4,Group:tk,Guitar:ak,Ham:ck,Hamburger:ok,Hammer:nk,Hand:sk,HandCoins:rk,HandHeart:ik,HandHelping:z2,HandMetal:dk,HandPlatter:hk,Handshake:lk,HardDrive:uk,HardDriveDownload:yk,HardDriveUpload:pk,HardHat:kk,Hash:fk,Haze:Mk,HdmiPort:vk,Heading:Ik,Heading1:mk,Heading2:gk,Heading3:xk,Heading4:wk,Heading5:Lk,Heading6:bk,HeadphoneOff:qk,Headphones:Ck,Headset:Sk,Heart:_k,HeartCrack:Ak,HeartHandshake:zk,HeartMinus:Hk,HeartOff:Vk,HeartPlus:jk,HeartPulse:Pk,Heater:Rk,Hexagon:Bk,Highlighter:Dk,History:Fk,Hop:Tk,HopOff:Ok,Hospital:Ek,Hotel:Uk,Hourglass:$k,House:H2,HousePlug:Zk,HousePlus:Nk,HouseWifi:Gk,IceCreamBowl:V2,IceCreamCone:j2,IdCard:Kk,IdCardLanyard:Wk,Image:c5,ImageDown:Xk,ImageMinus:Qk,ImageOff:Jk,ImagePlay:e5,ImagePlus:Yk,ImageUp:t5,ImageUpscale:a5,Images:o5,Import:n5,Inbox:r5,IndentDecrease:P2,IndentIncrease:_2,IndianRupee:i5,Infinity:h5,Info:d5,InspectionPanel:s5,Instagram:l5,Italic:y5,IterationCcw:p5,IterationCw:u5,JapaneseYen:k5,Joystick:f5,Kanban:M5,Key:g5,KeyRound:v5,KeySquare:m5,Keyboard:w5,KeyboardMusic:x5,KeyboardOff:L5,Lamp:A5,LampCeiling:b5,LampDesk:I5,LampFloor:C5,LampWallDown:q5,LampWallUp:S5,LandPlot:z5,Landmark:H5,Languages:V5,Laptop:P5,LaptopMinimal:R2,LaptopMinimalCheck:j5,Lasso:R5,LassoSelect:_5,Laugh:B5,Layers:B2,Layers2:D5,LayoutDashboard:qc,LayoutGrid:F5,LayoutList:T5,LayoutPanelLeft:O5,LayoutPanelTop:E5,LayoutTemplate:U5,Leaf:$5,LeafyGreen:Z5,Lectern:N5,LetterText:G5,Library:K5,LibraryBig:W5,LifeBuoy:X5,Ligature:Q5,Lightbulb:Y5,LightbulbOff:J5,LineSquiggle:e3,Link:c3,Link2:a3,Link2Off:t3,Linkedin:o3,List:x3,ListCheck:n3,ListChecks:r3,ListCollapse:i3,ListEnd:d3,ListFilter:s3,ListFilterPlus:h3,ListMinus:l3,ListMusic:y3,ListOrdered:p3,ListPlus:u3,ListRestart:k3,ListStart:f3,ListTodo:M3,ListTree:v3,ListVideo:m3,ListX:g3,Loader:L3,LoaderCircle:D2,LoaderPinwheel:w3,Locate:C3,LocateFixed:b3,LocateOff:I3,LocationEdit:q3,Lock:A3,LockKeyhole:S3,LockKeyholeOpen:F2,LockOpen:T2,LogIn:z3,LogOut:H3,Logs:V3,Lollipop:j3,Luggage:P3,Magnet:_3,Mail:$3,MailCheck:R3,MailMinus:B3,MailOpen:D3,MailPlus:F3,MailQuestionMark:O2,MailSearch:T3,MailWarning:O3,MailX:E3,Mailbox:U3,Mails:Z3,Map:n6,MapPin:t6,MapPinCheck:G3,MapPinCheckInside:N3,MapPinHouse:W3,MapPinMinus:K3,MapPinMinusInside:Q3,MapPinOff:X3,MapPinPlus:Y3,MapPinPlusInside:J3,MapPinX:a6,MapPinXInside:e6,MapPinned:c6,MapPlus:o6,Mars:d6,MarsStroke:r6,Martini:i6,Maximize:s6,Maximize2:h6,Medal:l6,Megaphone:p6,MegaphoneOff:y6,Meh:u6,MemoryStick:k6,Menu:f6,Merge:M6,MessageCircle:q6,MessageCircleCode:v6,MessageCircleDashed:m6,MessageCircleHeart:g6,MessageCircleMore:x6,MessageCircleOff:w6,MessageCirclePlus:L6,MessageCircleQuestionMark:E2,MessageCircleReply:b6,MessageCircleWarning:I6,MessageCircleX:C6,MessageSquare:U6,MessageSquareCode:S6,MessageSquareDashed:A6,MessageSquareDiff:z6,MessageSquareDot:H6,MessageSquareHeart:V6,MessageSquareLock:j6,MessageSquareMore:P6,MessageSquareOff:_6,MessageSquarePlus:R6,MessageSquareQuote:B6,MessageSquareReply:F6,MessageSquareShare:D6,MessageSquareText:T6,MessageSquareWarning:O6,MessageSquareX:E6,MessagesSquare:$6,Mic:N6,MicOff:Z6,MicVocal:U2,Microchip:G6,Microscope:W6,Microwave:K6,Milestone:X6,Milk:J6,MilkOff:Q6,Minimize:e8,Minimize2:Y6,Minus:t8,Monitor:u8,MonitorCheck:a8,MonitorCog:c8,MonitorDot:o8,MonitorDown:n8,MonitorOff:r8,MonitorPause:i8,MonitorPlay:d8,MonitorSmartphone:h8,MonitorSpeaker:s8,MonitorStop:l8,MonitorUp:y8,MonitorX:p8,Moon:k8,MoonStar:f8,Mountain:v8,MountainSnow:M8,Mouse:b8,MouseOff:m8,MousePointer:L8,MousePointer2:g8,MousePointerBan:x8,MousePointerClick:w8,Move:B8,Move3d:$2,MoveDiagonal:C8,MoveDiagonal2:I8,MoveDown:A8,MoveDownLeft:q8,MoveDownRight:S8,MoveHorizontal:z8,MoveLeft:H8,MoveRight:V8,MoveUp:_8,MoveUpLeft:P8,MoveUpRight:j8,MoveVertical:R8,Music:O8,Music2:D8,Music3:F8,Music4:T8,Navigation:Z8,Navigation2:U8,Navigation2Off:E8,NavigationOff:$8,Network:G8,Newspaper:N8,Nfc:W8,NonBinary:K8,Notebook:Y8,NotebookPen:X8,NotebookTabs:Q8,NotebookText:J8,NotepadText:t7,NotepadTextDashed:e7,Nut:c7,NutOff:a7,Octagon:n7,OctagonAlert:Z2,OctagonMinus:o7,OctagonPause:N2,OctagonX:G2,Omega:r7,Option:i7,Orbit:d7,Origami:h7,Package:M7,Package2:s7,PackageCheck:l7,PackageMinus:y7,PackageOpen:p7,PackagePlus:u7,PackageSearch:k7,PackageX:f7,PaintBucket:v7,PaintRoller:m7,Paintbrush:g7,PaintbrushVertical:W2,Palette:x7,Panda:w7,PanelBottom:I7,PanelBottomClose:L7,PanelBottomDashed:K2,PanelBottomOpen:b7,PanelLeft:Y2,PanelLeftClose:X2,PanelLeftDashed:Q2,PanelLeftOpen:J2,PanelRight:S7,PanelRightClose:C7,PanelRightDashed:ea,PanelRightOpen:q7,PanelTop:H7,PanelTopClose:A7,PanelTopDashed:ta,PanelTopOpen:z7,PanelsLeftBottom:V7,PanelsRightBottom:j7,PanelsTopLeft:aa,Paperclip:P7,Parentheses:_7,ParkingMeter:R7,PartyPopper:B7,Pause:D7,PawPrint:F7,PcCase:T7,Pen:oa,PenLine:ca,PenOff:O7,PenTool:E7,Pencil:J0,PencilLine:U7,PencilOff:$7,PencilRuler:Z7,Pentagon:N7,Percent:G7,PersonStanding:W7,PhilippinePeso:K7,Phone:af,PhoneCall:X7,PhoneForwarded:Q7,PhoneIncoming:J7,PhoneMissed:Y7,PhoneOff:ef,PhoneOutgoing:tf,Pi:cf,Piano:of,Pickaxe:nf,PictureInPicture:df,PictureInPicture2:rf,PiggyBank:hf,Pilcrow:yf,PilcrowLeft:sf,PilcrowRight:lf,Pill:pf,PillBottle:uf,Pin:ff,PinOff:kf,Pipette:Mf,Pizza:vf,Plane:xf,PlaneLanding:mf,PlaneTakeoff:gf,Play:wf,Plug:bf,Plug2:Lf,PlugZap:na,Plus:Y0,Pocket:Cf,PocketKnife:If,Podcast:qf,Pointer:Af,PointerOff:Sf,Popcorn:zf,Popsicle:Hf,PoundSterling:Vf,Power:Pf,PowerOff:jf,Presentation:_f,Printer:Bf,PrinterCheck:Rf,Projector:Df,Proportions:Ff,Puzzle:Tf,Pyramid:Of,QrCode:Ef,Quote:Uf,Rabbit:$f,Radar:Zf,Radiation:Nf,Radical:Gf,Radio:Xf,RadioReceiver:Wf,RadioTower:Kf,Radius:Qf,RailSymbol:Jf,Rainbow:Yf,Rat:e9,Ratio:t9,Receipt:s9,ReceiptCent:a9,ReceiptEuro:c9,ReceiptIndianRupee:n9,ReceiptJapaneseYen:o9,ReceiptPoundSterling:r9,ReceiptRussianRuble:i9,ReceiptSwissFranc:d9,ReceiptText:h9,RectangleCircle:l9,RectangleEllipsis:ra,RectangleGoggles:y9,RectangleHorizontal:p9,RectangleVertical:u9,Recycle:k9,Redo:v9,Redo2:f9,RedoDot:M9,RefreshCcw:g9,RefreshCcwDot:m9,RefreshCw:w9,RefreshCwOff:x9,Refrigerator:L9,Regex:b9,RemoveFormatting:I9,Repeat:q9,Repeat1:C9,Repeat2:S9,Replace:z9,ReplaceAll:A9,Reply:V9,ReplyAll:H9,Rewind:j9,Ribbon:P9,Rocket:_9,RockingChair:R9,RollerCoaster:B9,Rotate3d:ia,RotateCcw:T9,RotateCcwKey:D9,RotateCcwSquare:F9,RotateCw:E9,RotateCwSquare:O9,Route:$9,RouteOff:U9,Router:Z9,Rows2:da,Rows3:ha,Rows4:N9,Rss:G9,Ruler:K9,RulerDimensionLine:W9,RussianRuble:X9,Sailboat:Q9,Salad:J9,Sandwich:Y9,Satellite:eM,SatelliteDish:tM,SaudiRiyal:aM,Save:nM,SaveAll:cM,SaveOff:oM,Scale:rM,Scale3d:sa,Scaling:iM,Scan:fM,ScanBarcode:hM,ScanEye:dM,ScanFace:sM,ScanHeart:lM,ScanLine:yM,ScanQrCode:pM,ScanSearch:uM,ScanText:kM,School:MM,Scissors:gM,ScissorsLineDashed:vM,ScreenShare:xM,ScreenShareOff:mM,Scroll:wM,ScrollText:LM,Search:Sc,SearchCheck:bM,SearchCode:IM,SearchSlash:qM,SearchX:CM,Section:SM,Send:zM,SendHorizontal:la,SendToBack:AM,SeparatorHorizontal:HM,SeparatorVertical:VM,Server:RM,ServerCog:PM,ServerCrash:jM,ServerOff:_M,Settings:Ac,Settings2:BM,Shapes:DM,Share:TM,Share2:FM,Sheet:OM,Shell:EM,Shield:QM,ShieldAlert:UM,ShieldBan:$M,ShieldCheck:zc,ShieldEllipsis:ZM,ShieldHalf:NM,ShieldMinus:GM,ShieldOff:WM,ShieldPlus:KM,ShieldQuestionMark:ya,ShieldUser:XM,ShieldX:pa,Ship:ev,ShipWheel:JM,Shirt:YM,ShoppingBag:tv,ShoppingBasket:av,ShoppingCart:cv,Shovel:nv,ShowerHead:ov,Shredder:iv,Shrimp:rv,Shrink:dv,Shrub:lv,Shuffle:hv,Sigma:sv,Signal:fv,SignalHigh:yv,SignalLow:pv,SignalMedium:kv,SignalZero:uv,Signature:Mv,Signpost:mv,SignpostBig:vv,Siren:gv,SkipBack:xv,SkipForward:wv,Skull:Lv,Slack:bv,Slash:Iv,Slice:Cv,SlidersHorizontal:qv,SlidersVertical:ua,Smartphone:zv,SmartphoneCharging:Sv,SmartphoneNfc:Av,Smile:Vv,SmilePlus:Hv,Snail:jv,Snowflake:Pv,SoapDispenserDroplet:_v,Sofa:Rv,Soup:Dv,Space:Bv,Spade:Fv,Sparkle:Tv,Sparkles:ka,Speaker:Ov,Speech:Ev,SpellCheck:$v,SpellCheck2:Uv,Spline:Nv,SplinePointer:Zv,Split:Gv,Spool:Wv,SprayCan:Kv,Sprout:Xv,Square:om,SquareActivity:fa,SquareArrowDown:ma,SquareArrowDownLeft:Ma,SquareArrowDownRight:va,SquareArrowLeft:ga,SquareArrowOutDownLeft:xa,SquareArrowOutDownRight:wa,SquareArrowOutUpLeft:La,SquareArrowOutUpRight:ba,SquareArrowRight:Ia,SquareArrowUp:Aa,SquareArrowUpLeft:Ca,SquareArrowUpRight:qa,SquareAsterisk:Sa,SquareBottomDashedScissors:za,SquareChartGantt:y1,SquareCheck:Va,SquareCheckBig:Ha,SquareChevronDown:ja,SquareChevronLeft:_a,SquareChevronRight:Pa,SquareChevronUp:Ra,SquareCode:Ba,SquareDashed:Ta,SquareDashedBottom:Jv,SquareDashedBottomCode:Qv,SquareDashedKanban:Da,SquareDashedMousePointer:Fa,SquareDashedTopSolid:Yv,SquareDivide:Oa,SquareDot:Ea,SquareEqual:Ua,SquareFunction:Za,SquareKanban:$a,SquareLibrary:Na,SquareM:Ga,SquareMenu:Wa,SquareMinus:Ka,SquareMousePointer:Xa,SquareParking:Ja,SquareParkingOff:Qa,SquarePen:Ue,SquarePercent:Ya,SquarePi:e0,SquarePilcrow:t0,SquarePlay:a0,SquarePlus:c0,SquarePower:o0,SquareRadical:tm,SquareRoundCorner:em,SquareScissors:n0,SquareSigma:r0,SquareSlash:i0,SquareSplitHorizontal:d0,SquareSplitVertical:h0,SquareSquare:am,SquareStack:cm,SquareTerminal:s0,SquareUser:y0,SquareUserRound:l0,SquareX:p0,SquaresExclude:nm,SquaresIntersect:rm,SquaresSubtract:im,SquaresUnite:hm,Squircle:sm,SquircleDashed:dm,Squirrel:lm,Stamp:ym,Star:fm,StarHalf:pm,StarOff:um,StepBack:km,StepForward:Mm,Stethoscope:vm,Sticker:mm,StickyNote:gm,Store:xm,StretchHorizontal:wm,StretchVertical:Lm,Strikethrough:bm,Subscript:Im,Sun:zm,SunDim:Cm,SunMedium:qm,SunMoon:Sm,SunSnow:Am,Sunrise:Vm,Sunset:Hm,Superscript:jm,SwatchBook:Pm,SwissFranc:_m,SwitchCamera:Rm,Sword:Bm,Swords:Fm,Syringe:Dm,Table:Gm,Table2:Tm,TableCellsMerge:Om,TableCellsSplit:Em,TableColumnsSplit:Um,TableOfContents:$m,TableProperties:Zm,TableRowsSplit:Nm,Tablet:Km,TabletSmartphone:Wm,Tablets:Xm,Tag:Qm,Tags:Jm,Tally1:Ym,Tally2:eg,Tally3:tg,Tally4:ag,Tally5:cg,Tangent:og,Target:ng,Telescope:rg,Tent:dg,TentTree:ig,Terminal:hg,TestTube:sg,TestTubeDiagonal:u0,TestTubes:lg,Text:fg,TextCursor:pg,TextCursorInput:yg,TextQuote:ug,TextSearch:kg,TextSelect:k0,Theater:vg,Thermometer:gg,ThermometerSnowflake:Mg,ThermometerSun:mg,ThumbsDown:xg,ThumbsUp:wg,Ticket:Ag,TicketCheck:Lg,TicketMinus:bg,TicketPercent:Ig,TicketPlus:Cg,TicketSlash:qg,TicketX:Sg,Tickets:Hg,TicketsPlane:zg,Timer:Vg,TimerOff:jg,TimerReset:Pg,ToggleLeft:_g,ToggleRight:Rg,Toilet:Bg,ToolCase:Dg,Tornado:Fg,Torus:Tg,Touchpad:Eg,TouchpadOff:Og,TowerControl:Ug,ToyBrick:$g,Tractor:Zg,TrafficCone:Ng,TrainFront:Gg,TrainFrontTunnel:Wg,TrainTrack:Kg,TramFront:f0,Transgender:Xg,Trash:Hc,Trash2:Qg,TreeDeciduous:Jg,TreePalm:M0,TreePine:Yg,Trees:ex,Trello:ax,TrendingDown:tx,TrendingUp:ox,TrendingUpDown:cx,Triangle:ix,TriangleAlert:v0,TriangleDashed:nx,TriangleRight:rx,Trophy:dx,Truck:sx,TruckElectric:hx,Turtle:lx,Tv:px,TvMinimal:m0,TvMinimalPlay:yx,Twitch:ux,Twitter:fx,Type:Mx,TypeOutline:kx,Umbrella:gx,UmbrellaOff:vx,Underline:mx,Undo:bx,Undo2:xx,UndoDot:wx,UnfoldHorizontal:Lx,UnfoldVertical:Ix,Ungroup:Cx,University:g0,Unlink:Sx,Unlink2:qx,Unplug:Ax,Upload:zx,Usb:Hx,User:Vc,UserCheck:Vx,UserCog:jx,UserLock:Px,UserMinus:_x,UserPen:Rx,UserPlus:Bx,UserRound:C0,UserRoundCheck:w0,UserRoundCog:x0,UserRoundMinus:L0,UserRoundPen:Dx,UserRoundPlus:b0,UserRoundSearch:Fx,UserRoundX:I0,UserSearch:Ox,UserX:Tx,Users:Ex,UsersRound:q0,Utensils:A0,UtensilsCrossed:S0,UtilityPole:Ux,Variable:$x,Vault:Zx,VectorSquare:Nx,Vegan:Gx,VenetianMask:Wx,Venus:Qx,VenusAndMars:Kx,Vibrate:Jx,VibrateOff:Xx,Video:ew,VideoOff:Yx,Videotape:tw,View:aw,Voicemail:cw,Volleyball:ow,Volume:hw,Volume1:nw,Volume2:iw,VolumeOff:rw,VolumeX:dw,Vote:sw,Wallet:yw,WalletCards:lw,WalletMinimal:z0,Wallpaper:pw,Wand:uw,WandSparkles:H0,Warehouse:kw,WashingMachine:fw,Watch:vw,Waves:mw,WavesLadder:Mw,Waypoints:gw,Webcam:xw,Webhook:Lw,WebhookOff:ww,Weight:bw,Wheat:Cw,WheatOff:Iw,WholeWord:qw,Wifi:Pw,WifiCog:Sw,WifiHigh:Aw,WifiLow:zw,WifiOff:Hw,WifiPen:Vw,WifiZero:jw,Wind:Rw,WindArrowDown:_w,Wine:Dw,WineOff:Bw,Workflow:Fw,Worm:Tw,WrapText:Ow,Wrench:Ew,X:jc,Youtube:Uw,Zap:Zw,ZapOff:$w,ZoomIn:Nw,ZoomOut:Gw},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:yo,AArrowDownIcon:yo,AArrowUp:uo,AArrowUpIcon:uo,ALargeSmall:po,ALargeSmallIcon:po,Accessibility:ko,AccessibilityIcon:ko,Activity:fo,ActivityIcon:fo,ActivitySquare:fa,ActivitySquareIcon:fa,AirVent:Mo,AirVentIcon:Mo,Airplay:vo,AirplayIcon:vo,AlarmCheck:K1,AlarmCheckIcon:K1,AlarmClock:go,AlarmClockCheck:K1,AlarmClockCheckIcon:K1,AlarmClockIcon:go,AlarmClockMinus:X1,AlarmClockMinusIcon:X1,AlarmClockOff:mo,AlarmClockOffIcon:mo,AlarmClockPlus:Q1,AlarmClockPlusIcon:Q1,AlarmMinus:X1,AlarmMinusIcon:X1,AlarmPlus:Q1,AlarmPlusIcon:Q1,AlarmSmoke:xo,AlarmSmokeIcon:xo,Album:wo,AlbumIcon:wo,AlertCircle:It,AlertCircleIcon:It,AlertOctagon:Z2,AlertOctagonIcon:Z2,AlertTriangle:v0,AlertTriangleIcon:v0,AlignCenter:Io,AlignCenterHorizontal:Lo,AlignCenterHorizontalIcon:Lo,AlignCenterIcon:Io,AlignCenterVertical:bo,AlignCenterVerticalIcon:bo,AlignEndHorizontal:Co,AlignEndHorizontalIcon:Co,AlignEndVertical:So,AlignEndVerticalIcon:So,AlignHorizontalDistributeCenter:qo,AlignHorizontalDistributeCenterIcon:qo,AlignHorizontalDistributeEnd:Ao,AlignHorizontalDistributeEndIcon:Ao,AlignHorizontalDistributeStart:zo,AlignHorizontalDistributeStartIcon:zo,AlignHorizontalJustifyCenter:Ho,AlignHorizontalJustifyCenterIcon:Ho,AlignHorizontalJustifyEnd:Vo,AlignHorizontalJustifyEndIcon:Vo,AlignHorizontalJustifyStart:jo,AlignHorizontalJustifyStartIcon:jo,AlignHorizontalSpaceAround:Po,AlignHorizontalSpaceAroundIcon:Po,AlignHorizontalSpaceBetween:_o,AlignHorizontalSpaceBetweenIcon:_o,AlignJustify:Ro,AlignJustifyIcon:Ro,AlignLeft:Bo,AlignLeftIcon:Bo,AlignRight:Do,AlignRightIcon:Do,AlignStartHorizontal:Fo,AlignStartHorizontalIcon:Fo,AlignStartVertical:To,AlignStartVerticalIcon:To,AlignVerticalDistributeCenter:Oo,AlignVerticalDistributeCenterIcon:Oo,AlignVerticalDistributeEnd:Eo,AlignVerticalDistributeEndIcon:Eo,AlignVerticalDistributeStart:Uo,AlignVerticalDistributeStartIcon:Uo,AlignVerticalJustifyCenter:$o,AlignVerticalJustifyCenterIcon:$o,AlignVerticalJustifyEnd:Zo,AlignVerticalJustifyEndIcon:Zo,AlignVerticalJustifyStart:No,AlignVerticalJustifyStartIcon:No,AlignVerticalSpaceAround:Go,AlignVerticalSpaceAroundIcon:Go,AlignVerticalSpaceBetween:Wo,AlignVerticalSpaceBetweenIcon:Wo,Ambulance:Ko,AmbulanceIcon:Ko,Ampersand:Xo,AmpersandIcon:Xo,Ampersands:Qo,AmpersandsIcon:Qo,Amphora:Jo,AmphoraIcon:Jo,Anchor:Yo,AnchorIcon:Yo,Angry:en,AngryIcon:en,Annoyed:tn,AnnoyedIcon:tn,Antenna:an,AntennaIcon:an,Anvil:cn,AnvilIcon:cn,Aperture:on,ApertureIcon:on,AppWindow:rn,AppWindowIcon:rn,AppWindowMac:nn,AppWindowMacIcon:nn,Apple:dn,AppleIcon:dn,Archive:ln,ArchiveIcon:ln,ArchiveRestore:hn,ArchiveRestoreIcon:hn,ArchiveX:sn,ArchiveXIcon:sn,AreaChart:yt,AreaChartIcon:yt,Armchair:yn,ArmchairIcon:yn,ArrowBigDown:pn,ArrowBigDownDash:un,ArrowBigDownDashIcon:un,ArrowBigDownIcon:pn,ArrowBigLeft:fn,ArrowBigLeftDash:kn,ArrowBigLeftDashIcon:kn,ArrowBigLeftIcon:fn,ArrowBigRight:vn,ArrowBigRightDash:Mn,ArrowBigRightDashIcon:Mn,ArrowBigRightIcon:vn,ArrowBigUp:gn,ArrowBigUpDash:mn,ArrowBigUpDashIcon:mn,ArrowBigUpIcon:gn,ArrowDown:zn,ArrowDown01:xn,ArrowDown01Icon:xn,ArrowDown10:wn,ArrowDown10Icon:wn,ArrowDownAZ:J1,ArrowDownAZIcon:J1,ArrowDownAz:J1,ArrowDownAzIcon:J1,ArrowDownCircle:Ct,ArrowDownCircleIcon:Ct,ArrowDownFromLine:Ln,ArrowDownFromLineIcon:Ln,ArrowDownIcon:zn,ArrowDownLeft:bn,ArrowDownLeftFromCircle:St,ArrowDownLeftFromCircleIcon:St,ArrowDownLeftFromSquare:xa,ArrowDownLeftFromSquareIcon:xa,ArrowDownLeftIcon:bn,ArrowDownLeftSquare:Ma,ArrowDownLeftSquareIcon:Ma,ArrowDownNarrowWide:In,ArrowDownNarrowWideIcon:In,ArrowDownRight:Cn,ArrowDownRightFromCircle:At,ArrowDownRightFromCircleIcon:At,ArrowDownRightFromSquare:wa,ArrowDownRightFromSquareIcon:wa,ArrowDownRightIcon:Cn,ArrowDownRightSquare:va,ArrowDownRightSquareIcon:va,ArrowDownSquare:ma,ArrowDownSquareIcon:ma,ArrowDownToDot:qn,ArrowDownToDotIcon:qn,ArrowDownToLine:Sn,ArrowDownToLineIcon:Sn,ArrowDownUp:An,ArrowDownUpIcon:An,ArrowDownWideNarrow:Y1,ArrowDownWideNarrowIcon:Y1,ArrowDownZA:et,ArrowDownZAIcon:et,ArrowDownZa:et,ArrowDownZaIcon:et,ArrowLeft:Pn,ArrowLeftCircle:qt,ArrowLeftCircleIcon:qt,ArrowLeftFromLine:Hn,ArrowLeftFromLineIcon:Hn,ArrowLeftIcon:Pn,ArrowLeftRight:Vn,ArrowLeftRightIcon:Vn,ArrowLeftSquare:ga,ArrowLeftSquareIcon:ga,ArrowLeftToLine:jn,ArrowLeftToLineIcon:jn,ArrowRight:Dn,ArrowRightCircle:Vt,ArrowRightCircleIcon:Vt,ArrowRightFromLine:_n,ArrowRightFromLineIcon:_n,ArrowRightIcon:Dn,ArrowRightLeft:Rn,ArrowRightLeftIcon:Rn,ArrowRightSquare:Ia,ArrowRightSquareIcon:Ia,ArrowRightToLine:Bn,ArrowRightToLineIcon:Bn,ArrowUp:Wn,ArrowUp01:Fn,ArrowUp01Icon:Fn,ArrowUp10:Tn,ArrowUp10Icon:Tn,ArrowUpAZ:tt,ArrowUpAZIcon:tt,ArrowUpAz:tt,ArrowUpAzIcon:tt,ArrowUpCircle:jt,ArrowUpCircleIcon:jt,ArrowUpDown:On,ArrowUpDownIcon:On,ArrowUpFromDot:En,ArrowUpFromDotIcon:En,ArrowUpFromLine:Un,ArrowUpFromLineIcon:Un,ArrowUpIcon:Wn,ArrowUpLeft:$n,ArrowUpLeftFromCircle:zt,ArrowUpLeftFromCircleIcon:zt,ArrowUpLeftFromSquare:La,ArrowUpLeftFromSquareIcon:La,ArrowUpLeftIcon:$n,ArrowUpLeftSquare:Ca,ArrowUpLeftSquareIcon:Ca,ArrowUpNarrowWide:at,ArrowUpNarrowWideIcon:at,ArrowUpRight:Zn,ArrowUpRightFromCircle:Ht,ArrowUpRightFromCircleIcon:Ht,ArrowUpRightFromSquare:ba,ArrowUpRightFromSquareIcon:ba,ArrowUpRightIcon:Zn,ArrowUpRightSquare:qa,ArrowUpRightSquareIcon:qa,ArrowUpSquare:Aa,ArrowUpSquareIcon:Aa,ArrowUpToLine:Nn,ArrowUpToLineIcon:Nn,ArrowUpWideNarrow:Gn,ArrowUpWideNarrowIcon:Gn,ArrowUpZA:ct,ArrowUpZAIcon:ct,ArrowUpZa:ct,ArrowUpZaIcon:ct,ArrowsUpFromLine:Kn,ArrowsUpFromLineIcon:Kn,Asterisk:Xn,AsteriskIcon:Xn,AsteriskSquare:Sa,AsteriskSquareIcon:Sa,AtSign:Qn,AtSignIcon:Qn,Atom:Jn,AtomIcon:Jn,AudioLines:Yn,AudioLinesIcon:Yn,AudioWaveform:er,AudioWaveformIcon:er,Award:tr,AwardIcon:tr,Axe:ar,AxeIcon:ar,Axis3D:ot,Axis3DIcon:ot,Axis3d:ot,Axis3dIcon:ot,Baby:cr,BabyIcon:cr,Backpack:or,BackpackIcon:or,Badge:vr,BadgeAlert:nr,BadgeAlertIcon:nr,BadgeCent:rr,BadgeCentIcon:rr,BadgeCheck:nt,BadgeCheckIcon:nt,BadgeDollarSign:ir,BadgeDollarSignIcon:ir,BadgeEuro:dr,BadgeEuroIcon:dr,BadgeHelp:rt,BadgeHelpIcon:rt,BadgeIcon:vr,BadgeIndianRupee:hr,BadgeIndianRupeeIcon:hr,BadgeInfo:sr,BadgeInfoIcon:sr,BadgeJapaneseYen:lr,BadgeJapaneseYenIcon:lr,BadgeMinus:yr,BadgeMinusIcon:yr,BadgePercent:pr,BadgePercentIcon:pr,BadgePlus:ur,BadgePlusIcon:ur,BadgePoundSterling:kr,BadgePoundSterlingIcon:kr,BadgeQuestionMark:rt,BadgeQuestionMarkIcon:rt,BadgeRussianRuble:fr,BadgeRussianRubleIcon:fr,BadgeSwissFranc:mr,BadgeSwissFrancIcon:mr,BadgeX:Mr,BadgeXIcon:Mr,BaggageClaim:gr,BaggageClaimIcon:gr,Ban:xr,BanIcon:xr,Banana:Lr,BananaIcon:Lr,Bandage:wr,BandageIcon:wr,Banknote:qr,BanknoteArrowDown:br,BanknoteArrowDownIcon:br,BanknoteArrowUp:Ir,BanknoteArrowUpIcon:Ir,BanknoteIcon:qr,BanknoteX:Cr,BanknoteXIcon:Cr,BarChart:gt,BarChart2:xt,BarChart2Icon:xt,BarChart3:vt,BarChart3Icon:vt,BarChart4:Mt,BarChart4Icon:Mt,BarChartBig:ft,BarChartBigIcon:ft,BarChartHorizontal:ut,BarChartHorizontalBig:pt,BarChartHorizontalBigIcon:pt,BarChartHorizontalIcon:ut,BarChartIcon:gt,Barcode:Sr,BarcodeIcon:Sr,Barrel:Ar,BarrelIcon:Ar,Baseline:zr,BaselineIcon:zr,Bath:Hr,BathIcon:Hr,Battery:Fr,BatteryCharging:Vr,BatteryChargingIcon:Vr,BatteryFull:jr,BatteryFullIcon:jr,BatteryIcon:Fr,BatteryLow:Pr,BatteryLowIcon:Pr,BatteryMedium:_r,BatteryMediumIcon:_r,BatteryPlus:Rr,BatteryPlusIcon:Rr,BatteryWarning:Br,BatteryWarningIcon:Br,Beaker:Dr,BeakerIcon:Dr,Bean:Or,BeanIcon:Or,BeanOff:Tr,BeanOffIcon:Tr,Bed:$r,BedDouble:Er,BedDoubleIcon:Er,BedIcon:$r,BedSingle:Ur,BedSingleIcon:Ur,Beef:Zr,BeefIcon:Zr,Beer:Gr,BeerIcon:Gr,BeerOff:Nr,BeerOffIcon:Nr,Bell:G0,BellDot:Wr,BellDotIcon:Wr,BellElectric:Kr,BellElectricIcon:Kr,BellIcon:G0,BellMinus:Xr,BellMinusIcon:Xr,BellOff:Qr,BellOffIcon:Qr,BellPlus:Yr,BellPlusIcon:Yr,BellRing:Jr,BellRingIcon:Jr,BetweenHorizonalEnd:it,BetweenHorizonalEndIcon:it,BetweenHorizonalStart:dt,BetweenHorizonalStartIcon:dt,BetweenHorizontalEnd:it,BetweenHorizontalEndIcon:it,BetweenHorizontalStart:dt,BetweenHorizontalStartIcon:dt,BetweenVerticalEnd:ei,BetweenVerticalEndIcon:ei,BetweenVerticalStart:ai,BetweenVerticalStartIcon:ai,BicepsFlexed:ti,BicepsFlexedIcon:ti,Bike:oi,BikeIcon:oi,Binary:ci,BinaryIcon:ci,Binoculars:ni,BinocularsIcon:ni,Biohazard:ri,BiohazardIcon:ri,Bird:ii,BirdIcon:ii,Bitcoin:di,BitcoinIcon:di,Blend:si,BlendIcon:si,Blinds:hi,BlindsIcon:hi,Blocks:li,BlocksIcon:li,Bluetooth:ki,BluetoothConnected:yi,BluetoothConnectedIcon:yi,BluetoothIcon:ki,BluetoothOff:pi,BluetoothOffIcon:pi,BluetoothSearching:ui,BluetoothSearchingIcon:ui,Bold:fi,BoldIcon:fi,Bolt:Mi,BoltIcon:Mi,Bomb:vi,BombIcon:vi,Bone:mi,BoneIcon:mi,Book:Ei,BookA:gi,BookAIcon:gi,BookAlert:xi,BookAlertIcon:xi,BookAudio:wi,BookAudioIcon:wi,BookCheck:Li,BookCheckIcon:Li,BookCopy:bi,BookCopyIcon:bi,BookDashed:ht,BookDashedIcon:ht,BookDown:Ii,BookDownIcon:Ii,BookHeadphones:Ci,BookHeadphonesIcon:Ci,BookHeart:qi,BookHeartIcon:qi,BookIcon:Ei,BookImage:Si,BookImageIcon:Si,BookKey:Ai,BookKeyIcon:Ai,BookLock:zi,BookLockIcon:zi,BookMarked:Hi,BookMarkedIcon:Hi,BookMinus:Vi,BookMinusIcon:Vi,BookOpen:W0,BookOpenCheck:ji,BookOpenCheckIcon:ji,BookOpenIcon:W0,BookOpenText:Pi,BookOpenTextIcon:Pi,BookPlus:_i,BookPlusIcon:_i,BookTemplate:ht,BookTemplateIcon:ht,BookText:Ri,BookTextIcon:Ri,BookType:Bi,BookTypeIcon:Bi,BookUp:Fi,BookUp2:Di,BookUp2Icon:Di,BookUpIcon:Fi,BookUser:Ti,BookUserIcon:Ti,BookX:Oi,BookXIcon:Oi,Bookmark:Gi,BookmarkCheck:Ui,BookmarkCheckIcon:Ui,BookmarkIcon:Gi,BookmarkMinus:$i,BookmarkMinusIcon:$i,BookmarkPlus:Zi,BookmarkPlusIcon:Zi,BookmarkX:Ni,BookmarkXIcon:Ni,BoomBox:Wi,BoomBoxIcon:Wi,Bot:Qi,BotIcon:Qi,BotMessageSquare:Ki,BotMessageSquareIcon:Ki,BotOff:Xi,BotOffIcon:Xi,BottleWine:Ji,BottleWineIcon:Ji,BowArrow:Yi,BowArrowIcon:Yi,Box:ed,BoxIcon:ed,BoxSelect:Ta,BoxSelectIcon:Ta,Boxes:td,BoxesIcon:td,Braces:st,BracesIcon:st,Brackets:ad,BracketsIcon:ad,Brain:nd,BrainCircuit:cd,BrainCircuitIcon:cd,BrainCog:od,BrainCogIcon:od,BrainIcon:nd,BrickWall:id,BrickWallFire:rd,BrickWallFireIcon:rd,BrickWallIcon:id,Briefcase:ld,BriefcaseBusiness:dd,BriefcaseBusinessIcon:dd,BriefcaseConveyorBelt:hd,BriefcaseConveyorBeltIcon:hd,BriefcaseIcon:ld,BriefcaseMedical:sd,BriefcaseMedicalIcon:sd,BringToFront:yd,BringToFrontIcon:yd,Brush:ud,BrushCleaning:pd,BrushCleaningIcon:pd,BrushIcon:ud,Bubbles:kd,BubblesIcon:kd,Bug:vd,BugIcon:vd,BugOff:fd,BugOffIcon:fd,BugPlay:Md,BugPlayIcon:Md,Building:xd,Building2:md,Building2Icon:md,BuildingIcon:xd,Bus:wd,BusFront:gd,BusFrontIcon:gd,BusIcon:wd,Cable:bd,CableCar:Ld,CableCarIcon:Ld,CableIcon:bd,Cake:Cd,CakeIcon:Cd,CakeSlice:Id,CakeSliceIcon:Id,Calculator:qd,CalculatorIcon:qd,Calendar:Gd,Calendar1:Sd,Calendar1Icon:Sd,CalendarArrowDown:Ad,CalendarArrowDownIcon:Ad,CalendarArrowUp:zd,CalendarArrowUpIcon:zd,CalendarCheck:Vd,CalendarCheck2:Hd,CalendarCheck2Icon:Hd,CalendarCheckIcon:Vd,CalendarClock:jd,CalendarClockIcon:jd,CalendarCog:Pd,CalendarCogIcon:Pd,CalendarDays:_d,CalendarDaysIcon:_d,CalendarFold:Rd,CalendarFoldIcon:Rd,CalendarHeart:Bd,CalendarHeartIcon:Bd,CalendarIcon:Gd,CalendarMinus:Fd,CalendarMinus2:Dd,CalendarMinus2Icon:Dd,CalendarMinusIcon:Fd,CalendarOff:Td,CalendarOffIcon:Td,CalendarPlus:Ed,CalendarPlus2:Od,CalendarPlus2Icon:Od,CalendarPlusIcon:Ed,CalendarRange:Ud,CalendarRangeIcon:Ud,CalendarSearch:$d,CalendarSearchIcon:$d,CalendarSync:Zd,CalendarSyncIcon:Zd,CalendarX:Wd,CalendarX2:Nd,CalendarX2Icon:Nd,CalendarXIcon:Wd,Camera:Xd,CameraIcon:Xd,CameraOff:Kd,CameraOffIcon:Kd,CandlestickChart:kt,CandlestickChartIcon:kt,Candy:Yd,CandyCane:Qd,CandyCaneIcon:Qd,CandyIcon:Yd,CandyOff:Jd,CandyOffIcon:Jd,Cannabis:eh,CannabisIcon:eh,Captions:lt,CaptionsIcon:lt,CaptionsOff:ah,CaptionsOffIcon:ah,Car:oh,CarFront:th,CarFrontIcon:th,CarIcon:oh,CarTaxiFront:ch,CarTaxiFrontIcon:ch,Caravan:nh,CaravanIcon:nh,CardSim:rh,CardSimIcon:rh,Carrot:ih,CarrotIcon:ih,CaseLower:dh,CaseLowerIcon:dh,CaseSensitive:sh,CaseSensitiveIcon:sh,CaseUpper:hh,CaseUpperIcon:hh,CassetteTape:lh,CassetteTapeIcon:lh,Cast:ph,CastIcon:ph,Castle:yh,CastleIcon:yh,Cat:kh,CatIcon:kh,Cctv:uh,CctvIcon:uh,ChartArea:yt,ChartAreaIcon:yt,ChartBar:ut,ChartBarBig:pt,ChartBarBigIcon:pt,ChartBarDecreasing:fh,ChartBarDecreasingIcon:fh,ChartBarIcon:ut,ChartBarIncreasing:Mh,ChartBarIncreasingIcon:Mh,ChartBarStacked:vh,ChartBarStackedIcon:vh,ChartCandlestick:kt,ChartCandlestickIcon:kt,ChartColumn:vt,ChartColumnBig:ft,ChartColumnBigIcon:ft,ChartColumnDecreasing:mh,ChartColumnDecreasingIcon:mh,ChartColumnIcon:vt,ChartColumnIncreasing:Mt,ChartColumnIncreasingIcon:Mt,ChartColumnStacked:gh,ChartColumnStackedIcon:gh,ChartGantt:xh,ChartGanttIcon:xh,ChartLine:mt,ChartLineIcon:mt,ChartNetwork:wh,ChartNetworkIcon:wh,ChartNoAxesColumn:xt,ChartNoAxesColumnDecreasing:Lh,ChartNoAxesColumnDecreasingIcon:Lh,ChartNoAxesColumnIcon:xt,ChartNoAxesColumnIncreasing:gt,ChartNoAxesColumnIncreasingIcon:gt,ChartNoAxesCombined:bh,ChartNoAxesCombinedIcon:bh,ChartNoAxesGantt:wt,ChartNoAxesGanttIcon:wt,ChartPie:Lt,ChartPieIcon:Lt,ChartScatter:bt,ChartScatterIcon:bt,ChartSpline:Ih,ChartSplineIcon:Ih,Check:Ah,CheckCheck:Ch,CheckCheckIcon:Ch,CheckCircle:Pt,CheckCircle2:_t,CheckCircle2Icon:_t,CheckCircleIcon:Pt,CheckIcon:Ah,CheckLine:qh,CheckLineIcon:qh,CheckSquare:Ha,CheckSquare2:Va,CheckSquare2Icon:Va,CheckSquareIcon:Ha,ChefHat:Sh,ChefHatIcon:Sh,Cherry:zh,CherryIcon:zh,ChevronDown:mc,ChevronDownCircle:Rt,ChevronDownCircleIcon:Rt,ChevronDownIcon:mc,ChevronDownSquare:ja,ChevronDownSquareIcon:ja,ChevronFirst:Hh,ChevronFirstIcon:Hh,ChevronLast:Vh,ChevronLastIcon:Vh,ChevronLeft:K0,ChevronLeftCircle:Bt,ChevronLeftCircleIcon:Bt,ChevronLeftIcon:K0,ChevronLeftSquare:_a,ChevronLeftSquareIcon:_a,ChevronRight:X0,ChevronRightCircle:Dt,ChevronRightCircleIcon:Dt,ChevronRightIcon:X0,ChevronRightSquare:Pa,ChevronRightSquareIcon:Pa,ChevronUp:gc,ChevronUpCircle:Ft,ChevronUpCircleIcon:Ft,ChevronUpIcon:gc,ChevronUpSquare:Ra,ChevronUpSquareIcon:Ra,ChevronsDown:Ph,ChevronsDownIcon:Ph,ChevronsDownUp:jh,ChevronsDownUpIcon:jh,ChevronsLeft:xc,ChevronsLeftIcon:xc,ChevronsLeftRight:Rh,ChevronsLeftRightEllipsis:_h,ChevronsLeftRightEllipsisIcon:_h,ChevronsLeftRightIcon:Rh,ChevronsRight:wc,ChevronsRightIcon:wc,ChevronsRightLeft:Bh,ChevronsRightLeftIcon:Bh,ChevronsUp:Dh,ChevronsUpDown:Th,ChevronsUpDownIcon:Th,ChevronsUpIcon:Dh,Chrome:Fh,ChromeIcon:Fh,Church:Oh,ChurchIcon:Oh,Cigarette:Uh,CigaretteIcon:Uh,CigaretteOff:Eh,CigaretteOffIcon:Eh,Circle:Lc,CircleAlert:It,CircleAlertIcon:It,CircleArrowDown:Ct,CircleArrowDownIcon:Ct,CircleArrowLeft:qt,CircleArrowLeftIcon:qt,CircleArrowOutDownLeft:St,CircleArrowOutDownLeftIcon:St,CircleArrowOutDownRight:At,CircleArrowOutDownRightIcon:At,CircleArrowOutUpLeft:zt,CircleArrowOutUpLeftIcon:zt,CircleArrowOutUpRight:Ht,CircleArrowOutUpRightIcon:Ht,CircleArrowRight:Vt,CircleArrowRightIcon:Vt,CircleArrowUp:jt,CircleArrowUpIcon:jt,CircleCheck:_t,CircleCheckBig:Pt,CircleCheckBigIcon:Pt,CircleCheckIcon:_t,CircleChevronDown:Rt,CircleChevronDownIcon:Rt,CircleChevronLeft:Bt,CircleChevronLeftIcon:Bt,CircleChevronRight:Dt,CircleChevronRightIcon:Dt,CircleChevronUp:Ft,CircleChevronUpIcon:Ft,CircleDashed:$h,CircleDashedIcon:$h,CircleDivide:Tt,CircleDivideIcon:Tt,CircleDollarSign:Zh,CircleDollarSignIcon:Zh,CircleDot:Gh,CircleDotDashed:Nh,CircleDotDashedIcon:Nh,CircleDotIcon:Gh,CircleEllipsis:Wh,CircleEllipsisIcon:Wh,CircleEqual:Kh,CircleEqualIcon:Kh,CircleFadingArrowUp:Xh,CircleFadingArrowUpIcon:Xh,CircleFadingPlus:Qh,CircleFadingPlusIcon:Qh,CircleGauge:Ot,CircleGaugeIcon:Ot,CircleHelp:h1,CircleHelpIcon:h1,CircleIcon:Lc,CircleMinus:Et,CircleMinusIcon:Et,CircleOff:Jh,CircleOffIcon:Jh,CircleParking:$t,CircleParkingIcon:$t,CircleParkingOff:Ut,CircleParkingOffIcon:Ut,CirclePause:Zt,CirclePauseIcon:Zt,CirclePercent:Nt,CirclePercentIcon:Nt,CirclePlay:Gt,CirclePlayIcon:Gt,CirclePlus:Wt,CirclePlusIcon:Wt,CirclePoundSterling:Yh,CirclePoundSterlingIcon:Yh,CirclePower:Kt,CirclePowerIcon:Kt,CircleQuestionMark:h1,CircleQuestionMarkIcon:h1,CircleSlash:es,CircleSlash2:Xt,CircleSlash2Icon:Xt,CircleSlashIcon:es,CircleSlashed:Xt,CircleSlashedIcon:Xt,CircleSmall:ts,CircleSmallIcon:ts,CircleStop:Qt,CircleStopIcon:Qt,CircleUser:Jt,CircleUserIcon:Jt,CircleUserRound:Yt,CircleUserRoundIcon:Yt,CircleX:e2,CircleXIcon:e2,CircuitBoard:as,CircuitBoardIcon:as,Citrus:cs,CitrusIcon:cs,Clapperboard:os,ClapperboardIcon:os,Clipboard:ps,ClipboardCheck:ns,ClipboardCheckIcon:ns,ClipboardCopy:rs,ClipboardCopyIcon:rs,ClipboardEdit:a2,ClipboardEditIcon:a2,ClipboardIcon:ps,ClipboardList:is,ClipboardListIcon:is,ClipboardMinus:ds,ClipboardMinusIcon:ds,ClipboardPaste:hs,ClipboardPasteIcon:hs,ClipboardPen:a2,ClipboardPenIcon:a2,ClipboardPenLine:t2,ClipboardPenLineIcon:t2,ClipboardPlus:ss,ClipboardPlusIcon:ss,ClipboardSignature:t2,ClipboardSignatureIcon:t2,ClipboardType:ls,ClipboardTypeIcon:ls,ClipboardX:ys,ClipboardXIcon:ys,Clock:Hs,Clock1:us,Clock10:ks,Clock10Icon:ks,Clock11:fs,Clock11Icon:fs,Clock12:Ms,Clock12Icon:Ms,Clock1Icon:us,Clock2:vs,Clock2Icon:vs,Clock3:ms,Clock3Icon:ms,Clock4:gs,Clock4Icon:gs,Clock5:xs,Clock5Icon:xs,Clock6:ws,Clock6Icon:ws,Clock7:Ls,Clock7Icon:Ls,Clock8:bs,Clock8Icon:bs,Clock9:Is,Clock9Icon:Is,ClockAlert:Cs,ClockAlertIcon:Cs,ClockArrowDown:qs,ClockArrowDownIcon:qs,ClockArrowUp:Ss,ClockArrowUpIcon:Ss,ClockFading:As,ClockFadingIcon:As,ClockIcon:Hs,ClockPlus:zs,ClockPlusIcon:zs,Cloud:Gs,CloudAlert:Vs,CloudAlertIcon:Vs,CloudCheck:js,CloudCheckIcon:js,CloudCog:Ps,CloudCogIcon:Ps,CloudDownload:c2,CloudDownloadIcon:c2,CloudDrizzle:Rs,CloudDrizzleIcon:Rs,CloudFog:_s,CloudFogIcon:_s,CloudHail:Bs,CloudHailIcon:Bs,CloudIcon:Gs,CloudLightning:Ds,CloudLightningIcon:Ds,CloudMoon:Os,CloudMoonIcon:Os,CloudMoonRain:Fs,CloudMoonRainIcon:Fs,CloudOff:Ts,CloudOffIcon:Ts,CloudRain:Us,CloudRainIcon:Us,CloudRainWind:Es,CloudRainWindIcon:Es,CloudSnow:$s,CloudSnowIcon:$s,CloudSun:Ns,CloudSunIcon:Ns,CloudSunRain:Zs,CloudSunRainIcon:Zs,CloudUpload:o2,CloudUploadIcon:o2,Cloudy:Ws,CloudyIcon:Ws,Clover:Ks,CloverIcon:Ks,Club:Xs,ClubIcon:Xs,Code:Qs,Code2:n2,Code2Icon:n2,CodeIcon:Qs,CodeSquare:Ba,CodeSquareIcon:Ba,CodeXml:n2,CodeXmlIcon:n2,Codepen:Js,CodepenIcon:Js,Codesandbox:Ys,CodesandboxIcon:Ys,Coffee:el,CoffeeIcon:el,Cog:tl,CogIcon:tl,Coins:al,CoinsIcon:al,Columns:r2,Columns2:r2,Columns2Icon:r2,Columns3:i2,Columns3Cog:s1,Columns3CogIcon:s1,Columns3Icon:i2,Columns4:cl,Columns4Icon:cl,ColumnsIcon:r2,ColumnsSettings:s1,ColumnsSettingsIcon:s1,Combine:ol,CombineIcon:ol,Command:nl,CommandIcon:nl,Compass:rl,CompassIcon:rl,Component:il,ComponentIcon:il,Computer:dl,ComputerIcon:dl,ConciergeBell:hl,ConciergeBellIcon:hl,Cone:sl,ConeIcon:sl,Construction:ll,ConstructionIcon:ll,Contact:yl,Contact2:d2,Contact2Icon:d2,ContactIcon:yl,ContactRound:d2,ContactRoundIcon:d2,Container:pl,ContainerIcon:pl,Contrast:ul,ContrastIcon:ul,Cookie:kl,CookieIcon:kl,CookingPot:fl,CookingPotIcon:fl,Copy:wl,CopyCheck:Ml,CopyCheckIcon:Ml,CopyIcon:wl,CopyMinus:vl,CopyMinusIcon:vl,CopyPlus:ml,CopyPlusIcon:ml,CopySlash:gl,CopySlashIcon:gl,CopyX:xl,CopyXIcon:xl,Copyleft:Ll,CopyleftIcon:Ll,Copyright:bl,CopyrightIcon:bl,CornerDownLeft:Il,CornerDownLeftIcon:Il,CornerDownRight:Cl,CornerDownRightIcon:Cl,CornerLeftDown:ql,CornerLeftDownIcon:ql,CornerLeftUp:Sl,CornerLeftUpIcon:Sl,CornerRightDown:Al,CornerRightDownIcon:Al,CornerRightUp:zl,CornerRightUpIcon:zl,CornerUpLeft:Hl,CornerUpLeftIcon:Hl,CornerUpRight:Vl,CornerUpRightIcon:Vl,Cpu:jl,CpuIcon:jl,CreativeCommons:Pl,CreativeCommonsIcon:Pl,CreditCard:_l,CreditCardIcon:_l,Croissant:Rl,CroissantIcon:Rl,Crop:Bl,CropIcon:Bl,Cross:Dl,CrossIcon:Dl,Crosshair:Fl,CrosshairIcon:Fl,Crown:Tl,CrownIcon:Tl,Cuboid:Ol,CuboidIcon:Ol,CupSoda:El,CupSodaIcon:El,CurlyBraces:st,CurlyBracesIcon:st,Currency:$l,CurrencyIcon:$l,Cylinder:Ul,CylinderIcon:Ul,Dam:Zl,DamIcon:Zl,Database:Wl,DatabaseBackup:Nl,DatabaseBackupIcon:Nl,DatabaseIcon:Wl,DatabaseZap:Gl,DatabaseZapIcon:Gl,DecimalsArrowLeft:Kl,DecimalsArrowLeftIcon:Kl,DecimalsArrowRight:Ql,DecimalsArrowRightIcon:Ql,Delete:Xl,DeleteIcon:Xl,Dessert:Jl,DessertIcon:Jl,Diameter:Yl,DiameterIcon:Yl,Diamond:ay,DiamondIcon:ay,DiamondMinus:ey,DiamondMinusIcon:ey,DiamondPercent:h2,DiamondPercentIcon:h2,DiamondPlus:ty,DiamondPlusIcon:ty,Dice1:cy,Dice1Icon:cy,Dice2:oy,Dice2Icon:oy,Dice3:ny,Dice3Icon:ny,Dice4:ry,Dice4Icon:ry,Dice5:iy,Dice5Icon:iy,Dice6:dy,Dice6Icon:dy,Dices:sy,DicesIcon:sy,Diff:ly,DiffIcon:ly,Disc:uy,Disc2:hy,Disc2Icon:hy,Disc3:yy,Disc3Icon:yy,DiscAlbum:py,DiscAlbumIcon:py,DiscIcon:uy,Divide:ky,DivideCircle:Tt,DivideCircleIcon:Tt,DivideIcon:ky,DivideSquare:Oa,DivideSquareIcon:Oa,Dna:My,DnaIcon:My,DnaOff:fy,DnaOffIcon:fy,Dock:vy,DockIcon:vy,Dog:my,DogIcon:my,DollarSign:gy,DollarSignIcon:gy,Donut:xy,DonutIcon:xy,DoorClosed:Ly,DoorClosedIcon:Ly,DoorClosedLocked:wy,DoorClosedLockedIcon:wy,DoorOpen:by,DoorOpenIcon:by,Dot:Iy,DotIcon:Iy,DotSquare:Ea,DotSquareIcon:Ea,Download:bc,DownloadCloud:c2,DownloadCloudIcon:c2,DownloadIcon:bc,DraftingCompass:Cy,DraftingCompassIcon:Cy,Drama:qy,DramaIcon:qy,Dribbble:Sy,DribbbleIcon:Sy,Drill:Ay,DrillIcon:Ay,Drone:zy,DroneIcon:zy,Droplet:Vy,DropletIcon:Vy,DropletOff:Hy,DropletOffIcon:Hy,Droplets:jy,DropletsIcon:jy,Drum:Py,DrumIcon:Py,Drumstick:_y,DrumstickIcon:_y,Dumbbell:Ry,DumbbellIcon:Ry,Ear:Dy,EarIcon:Dy,EarOff:By,EarOffIcon:By,Earth:s2,EarthIcon:s2,EarthLock:Fy,EarthLockIcon:Fy,Eclipse:Ty,EclipseIcon:Ty,Edit:Ue,Edit2:oa,Edit2Icon:oa,Edit3:ca,Edit3Icon:ca,EditIcon:Ue,Egg:Uy,EggFried:Oy,EggFriedIcon:Oy,EggIcon:Uy,EggOff:Ey,EggOffIcon:Ey,Ellipsis:y2,EllipsisIcon:y2,EllipsisVertical:l2,EllipsisVerticalIcon:l2,Equal:Ny,EqualApproximately:$y,EqualApproximatelyIcon:$y,EqualIcon:Ny,EqualNot:Zy,EqualNotIcon:Zy,EqualSquare:Ua,EqualSquareIcon:Ua,Eraser:Gy,EraserIcon:Gy,EthernetPort:Wy,EthernetPortIcon:Wy,Euro:Ky,EuroIcon:Ky,Expand:Xy,ExpandIcon:Xy,ExternalLink:Qy,ExternalLinkIcon:Qy,Eye:ep,EyeClosed:Jy,EyeClosedIcon:Jy,EyeIcon:ep,EyeOff:Yy,EyeOffIcon:Yy,Facebook:tp,FacebookIcon:tp,Factory:ap,FactoryIcon:ap,Fan:cp,FanIcon:cp,FastForward:op,FastForwardIcon:op,Feather:np,FeatherIcon:np,Fence:rp,FenceIcon:rp,FerrisWheel:ip,FerrisWheelIcon:ip,Figma:hp,FigmaIcon:hp,File:Ic,FileArchive:dp,FileArchiveIcon:dp,FileAudio:lp,FileAudio2:sp,FileAudio2Icon:sp,FileAudioIcon:lp,FileAxis3D:p2,FileAxis3DIcon:p2,FileAxis3d:p2,FileAxis3dIcon:p2,FileBadge:pp,FileBadge2:yp,FileBadge2Icon:yp,FileBadgeIcon:pp,FileBarChart:k2,FileBarChart2:u2,FileBarChart2Icon:u2,FileBarChartIcon:k2,FileBox:up,FileBoxIcon:up,FileChartColumn:u2,FileChartColumnIcon:u2,FileChartColumnIncreasing:k2,FileChartColumnIncreasingIcon:k2,FileChartLine:f2,FileChartLineIcon:f2,FileChartPie:M2,FileChartPieIcon:M2,FileCheck:fp,FileCheck2:kp,FileCheck2Icon:kp,FileCheckIcon:fp,FileClock:Mp,FileClockIcon:Mp,FileCode:mp,FileCode2:vp,FileCode2Icon:vp,FileCodeIcon:mp,FileCog:v2,FileCog2:v2,FileCog2Icon:v2,FileCogIcon:v2,FileDiff:gp,FileDiffIcon:gp,FileDigit:xp,FileDigitIcon:xp,FileDown:wp,FileDownIcon:wp,FileEdit:g2,FileEditIcon:g2,FileHeart:Lp,FileHeartIcon:Lp,FileIcon:Ic,FileImage:bp,FileImageIcon:bp,FileInput:Ip,FileInputIcon:Ip,FileJson:qp,FileJson2:Cp,FileJson2Icon:Cp,FileJsonIcon:qp,FileKey:Ap,FileKey2:Sp,FileKey2Icon:Sp,FileKeyIcon:Ap,FileLineChart:f2,FileLineChartIcon:f2,FileLock:Hp,FileLock2:zp,FileLock2Icon:zp,FileLockIcon:Hp,FileMinus:jp,FileMinus2:Vp,FileMinus2Icon:Vp,FileMinusIcon:jp,FileMusic:Pp,FileMusicIcon:Pp,FileOutput:_p,FileOutputIcon:_p,FilePen:g2,FilePenIcon:g2,FilePenLine:m2,FilePenLineIcon:m2,FilePieChart:M2,FilePieChartIcon:M2,FilePlus:Bp,FilePlus2:Rp,FilePlus2Icon:Rp,FilePlusIcon:Bp,FileQuestion:x2,FileQuestionIcon:x2,FileQuestionMark:x2,FileQuestionMarkIcon:x2,FileScan:Dp,FileScanIcon:Dp,FileSearch:Tp,FileSearch2:Fp,FileSearch2Icon:Fp,FileSearchIcon:Tp,FileSignature:m2,FileSignatureIcon:m2,FileSliders:Op,FileSlidersIcon:Op,FileSpreadsheet:Ep,FileSpreadsheetIcon:Ep,FileStack:$p,FileStackIcon:$p,FileSymlink:Up,FileSymlinkIcon:Up,FileTerminal:Zp,FileTerminalIcon:Zp,FileText:Wp,FileTextIcon:Wp,FileType:Gp,FileType2:Np,FileType2Icon:Np,FileTypeIcon:Gp,FileUp:Xp,FileUpIcon:Xp,FileUser:Kp,FileUserIcon:Kp,FileVideo:Jp,FileVideo2:Qp,FileVideo2Icon:Qp,FileVideoIcon:Jp,FileVolume:eu,FileVolume2:Yp,FileVolume2Icon:Yp,FileVolumeIcon:eu,FileWarning:tu,FileWarningIcon:tu,FileX:cu,FileX2:au,FileX2Icon:au,FileXIcon:cu,Files:ou,FilesIcon:ou,Film:nu,FilmIcon:nu,Filter:R1,FilterIcon:R1,FilterX:b2,FilterXIcon:b2,Fingerprint:ru,FingerprintIcon:ru,FireExtinguisher:iu,FireExtinguisherIcon:iu,Fish:su,FishIcon:su,FishOff:du,FishOffIcon:du,FishSymbol:hu,FishSymbolIcon:hu,Flag:uu,FlagIcon:uu,FlagOff:lu,FlagOffIcon:lu,FlagTriangleLeft:pu,FlagTriangleLeftIcon:pu,FlagTriangleRight:yu,FlagTriangleRightIcon:yu,Flame:fu,FlameIcon:fu,FlameKindling:ku,FlameKindlingIcon:ku,Flashlight:vu,FlashlightIcon:vu,FlashlightOff:Mu,FlashlightOffIcon:Mu,FlaskConical:gu,FlaskConicalIcon:gu,FlaskConicalOff:mu,FlaskConicalOffIcon:mu,FlaskRound:xu,FlaskRoundIcon:xu,FlipHorizontal:Lu,FlipHorizontal2:wu,FlipHorizontal2Icon:wu,FlipHorizontalIcon:Lu,FlipVertical:Iu,FlipVertical2:bu,FlipVertical2Icon:bu,FlipVerticalIcon:Iu,Flower:Cu,Flower2:qu,Flower2Icon:qu,FlowerIcon:Cu,Focus:Su,FocusIcon:Su,FoldHorizontal:Au,FoldHorizontalIcon:Au,FoldVertical:zu,FoldVerticalIcon:zu,Folder:Cc,FolderArchive:Hu,FolderArchiveIcon:Hu,FolderCheck:Vu,FolderCheckIcon:Vu,FolderClock:ju,FolderClockIcon:ju,FolderClosed:Pu,FolderClosedIcon:Pu,FolderCode:_u,FolderCodeIcon:_u,FolderCog:w2,FolderCog2:w2,FolderCog2Icon:w2,FolderCogIcon:w2,FolderDot:Ru,FolderDotIcon:Ru,FolderDown:Du,FolderDownIcon:Du,FolderEdit:L2,FolderEditIcon:L2,FolderGit:Fu,FolderGit2:Bu,FolderGit2Icon:Bu,FolderGitIcon:Fu,FolderHeart:Tu,FolderHeartIcon:Tu,FolderIcon:Cc,FolderInput:Ou,FolderInputIcon:Ou,FolderKanban:Eu,FolderKanbanIcon:Eu,FolderKey:Uu,FolderKeyIcon:Uu,FolderLock:$u,FolderLockIcon:$u,FolderMinus:Zu,FolderMinusIcon:Zu,FolderOpen:Q0,FolderOpenDot:Nu,FolderOpenDotIcon:Nu,FolderOpenIcon:Q0,FolderOutput:Gu,FolderOutputIcon:Gu,FolderPen:L2,FolderPenIcon:L2,FolderPlus:Wu,FolderPlusIcon:Wu,FolderRoot:Ku,FolderRootIcon:Ku,FolderSearch:Qu,FolderSearch2:Xu,FolderSearch2Icon:Xu,FolderSearchIcon:Qu,FolderSymlink:Ju,FolderSymlinkIcon:Ju,FolderSync:Yu,FolderSyncIcon:Yu,FolderTree:e4,FolderTreeIcon:e4,FolderUp:t4,FolderUpIcon:t4,FolderX:a4,FolderXIcon:a4,Folders:c4,FoldersIcon:c4,Footprints:n4,FootprintsIcon:n4,ForkKnife:A0,ForkKnifeCrossed:S0,ForkKnifeCrossedIcon:S0,ForkKnifeIcon:A0,Forklift:o4,ForkliftIcon:o4,FormInput:ra,FormInputIcon:ra,Forward:r4,ForwardIcon:r4,Frame:i4,FrameIcon:i4,Framer:d4,FramerIcon:d4,Frown:h4,FrownIcon:h4,Fuel:s4,FuelIcon:s4,Fullscreen:l4,FullscreenIcon:l4,FunctionSquare:Za,FunctionSquareIcon:Za,Funnel:R1,FunnelIcon:R1,FunnelPlus:y4,FunnelPlusIcon:y4,FunnelX:b2,FunnelXIcon:b2,GalleryHorizontal:u4,GalleryHorizontalEnd:p4,GalleryHorizontalEndIcon:p4,GalleryHorizontalIcon:u4,GalleryThumbnails:k4,GalleryThumbnailsIcon:k4,GalleryVertical:v4,GalleryVerticalEnd:f4,GalleryVerticalEndIcon:f4,GalleryVerticalIcon:v4,Gamepad:m4,Gamepad2:M4,Gamepad2Icon:M4,GamepadIcon:m4,GanttChart:wt,GanttChartIcon:wt,GanttChartSquare:y1,GanttChartSquareIcon:y1,Gauge:g4,GaugeCircle:Ot,GaugeCircleIcon:Ot,GaugeIcon:g4,Gavel:x4,GavelIcon:x4,Gem:w4,GemIcon:w4,GeorgianLari:L4,GeorgianLariIcon:L4,Ghost:b4,GhostIcon:b4,Gift:I4,GiftIcon:I4,GitBranch:q4,GitBranchIcon:q4,GitBranchPlus:C4,GitBranchPlusIcon:C4,GitCommit:I2,GitCommitHorizontal:I2,GitCommitHorizontalIcon:I2,GitCommitIcon:I2,GitCommitVertical:S4,GitCommitVerticalIcon:S4,GitCompare:z4,GitCompareArrows:A4,GitCompareArrowsIcon:A4,GitCompareIcon:z4,GitFork:H4,GitForkIcon:H4,GitGraph:V4,GitGraphIcon:V4,GitMerge:j4,GitMergeIcon:j4,GitPullRequest:F4,GitPullRequestArrow:P4,GitPullRequestArrowIcon:P4,GitPullRequestClosed:R4,GitPullRequestClosedIcon:R4,GitPullRequestCreate:D4,GitPullRequestCreateArrow:_4,GitPullRequestCreateArrowIcon:_4,GitPullRequestCreateIcon:D4,GitPullRequestDraft:B4,GitPullRequestDraftIcon:B4,GitPullRequestIcon:F4,Github:T4,GithubIcon:T4,Gitlab:O4,GitlabIcon:O4,GlassWater:E4,GlassWaterIcon:E4,Glasses:U4,GlassesIcon:U4,Globe:Z4,Globe2:s2,Globe2Icon:s2,GlobeIcon:Z4,GlobeLock:$4,GlobeLockIcon:$4,Goal:N4,GoalIcon:N4,Gpu:W4,GpuIcon:W4,Grab:G4,GrabIcon:G4,GraduationCap:K4,GraduationCapIcon:K4,Grape:X4,GrapeIcon:X4,Grid:l1,Grid2X2:A2,Grid2X2Check:C2,Grid2X2CheckIcon:C2,Grid2X2Icon:A2,Grid2X2Plus:q2,Grid2X2PlusIcon:q2,Grid2X2X:S2,Grid2X2XIcon:S2,Grid2x2:A2,Grid2x2Check:C2,Grid2x2CheckIcon:C2,Grid2x2Icon:A2,Grid2x2Plus:q2,Grid2x2PlusIcon:q2,Grid2x2X:S2,Grid2x2XIcon:S2,Grid3X3:l1,Grid3X3Icon:l1,Grid3x2:Q4,Grid3x2Icon:Q4,Grid3x3:l1,Grid3x3Icon:l1,GridIcon:l1,Grip:ek,GripHorizontal:J4,GripHorizontalIcon:J4,GripIcon:ek,GripVertical:Y4,GripVerticalIcon:Y4,Group:tk,GroupIcon:tk,Guitar:ak,GuitarIcon:ak,Ham:ck,HamIcon:ck,Hamburger:ok,HamburgerIcon:ok,Hammer:nk,HammerIcon:nk,Hand:sk,HandCoins:rk,HandCoinsIcon:rk,HandHeart:ik,HandHeartIcon:ik,HandHelping:z2,HandHelpingIcon:z2,HandIcon:sk,HandMetal:dk,HandMetalIcon:dk,HandPlatter:hk,HandPlatterIcon:hk,Handshake:lk,HandshakeIcon:lk,HardDrive:uk,HardDriveDownload:yk,HardDriveDownloadIcon:yk,HardDriveIcon:uk,HardDriveUpload:pk,HardDriveUploadIcon:pk,HardHat:kk,HardHatIcon:kk,Hash:fk,HashIcon:fk,Haze:Mk,HazeIcon:Mk,HdmiPort:vk,HdmiPortIcon:vk,Heading:Ik,Heading1:mk,Heading1Icon:mk,Heading2:gk,Heading2Icon:gk,Heading3:xk,Heading3Icon:xk,Heading4:wk,Heading4Icon:wk,Heading5:Lk,Heading5Icon:Lk,Heading6:bk,Heading6Icon:bk,HeadingIcon:Ik,HeadphoneOff:qk,HeadphoneOffIcon:qk,Headphones:Ck,HeadphonesIcon:Ck,Headset:Sk,HeadsetIcon:Sk,Heart:_k,HeartCrack:Ak,HeartCrackIcon:Ak,HeartHandshake:zk,HeartHandshakeIcon:zk,HeartIcon:_k,HeartMinus:Hk,HeartMinusIcon:Hk,HeartOff:Vk,HeartOffIcon:Vk,HeartPlus:jk,HeartPlusIcon:jk,HeartPulse:Pk,HeartPulseIcon:Pk,Heater:Rk,HeaterIcon:Rk,HelpCircle:h1,HelpCircleIcon:h1,HelpingHand:z2,HelpingHandIcon:z2,Hexagon:Bk,HexagonIcon:Bk,Highlighter:Dk,HighlighterIcon:Dk,History:Fk,HistoryIcon:Fk,Home:H2,HomeIcon:H2,Hop:Tk,HopIcon:Tk,HopOff:Ok,HopOffIcon:Ok,Hospital:Ek,HospitalIcon:Ek,Hotel:Uk,HotelIcon:Uk,Hourglass:$k,HourglassIcon:$k,House:H2,HouseIcon:H2,HousePlug:Zk,HousePlugIcon:Zk,HousePlus:Nk,HousePlusIcon:Nk,HouseWifi:Gk,HouseWifiIcon:Gk,IceCream:j2,IceCream2:V2,IceCream2Icon:V2,IceCreamBowl:V2,IceCreamBowlIcon:V2,IceCreamCone:j2,IceCreamConeIcon:j2,IceCreamIcon:j2,Icon:lq,IdCard:Kk,IdCardIcon:Kk,IdCardLanyard:Wk,IdCardLanyardIcon:Wk,Image:c5,ImageDown:Xk,ImageDownIcon:Xk,ImageIcon:c5,ImageMinus:Qk,ImageMinusIcon:Qk,ImageOff:Jk,ImageOffIcon:Jk,ImagePlay:e5,ImagePlayIcon:e5,ImagePlus:Yk,ImagePlusIcon:Yk,ImageUp:t5,ImageUpIcon:t5,ImageUpscale:a5,ImageUpscaleIcon:a5,Images:o5,ImagesIcon:o5,Import:n5,ImportIcon:n5,Inbox:r5,InboxIcon:r5,Indent:_2,IndentDecrease:P2,IndentDecreaseIcon:P2,IndentIcon:_2,IndentIncrease:_2,IndentIncreaseIcon:_2,IndianRupee:i5,IndianRupeeIcon:i5,Infinity:h5,InfinityIcon:h5,Info:d5,InfoIcon:d5,Inspect:Xa,InspectIcon:Xa,InspectionPanel:s5,InspectionPanelIcon:s5,Instagram:l5,InstagramIcon:l5,Italic:y5,ItalicIcon:y5,IterationCcw:p5,IterationCcwIcon:p5,IterationCw:u5,IterationCwIcon:u5,JapaneseYen:k5,JapaneseYenIcon:k5,Joystick:f5,JoystickIcon:f5,Kanban:M5,KanbanIcon:M5,KanbanSquare:$a,KanbanSquareDashed:Da,KanbanSquareDashedIcon:Da,KanbanSquareIcon:$a,Key:g5,KeyIcon:g5,KeyRound:v5,KeyRoundIcon:v5,KeySquare:m5,KeySquareIcon:m5,Keyboard:w5,KeyboardIcon:w5,KeyboardMusic:x5,KeyboardMusicIcon:x5,KeyboardOff:L5,KeyboardOffIcon:L5,Lamp:A5,LampCeiling:b5,LampCeilingIcon:b5,LampDesk:I5,LampDeskIcon:I5,LampFloor:C5,LampFloorIcon:C5,LampIcon:A5,LampWallDown:q5,LampWallDownIcon:q5,LampWallUp:S5,LampWallUpIcon:S5,LandPlot:z5,LandPlotIcon:z5,Landmark:H5,LandmarkIcon:H5,Languages:V5,LanguagesIcon:V5,Laptop:P5,Laptop2:R2,Laptop2Icon:R2,LaptopIcon:P5,LaptopMinimal:R2,LaptopMinimalCheck:j5,LaptopMinimalCheckIcon:j5,LaptopMinimalIcon:R2,Lasso:R5,LassoIcon:R5,LassoSelect:_5,LassoSelectIcon:_5,Laugh:B5,LaughIcon:B5,Layers:B2,Layers2:D5,Layers2Icon:D5,Layers3:B2,Layers3Icon:B2,LayersIcon:B2,Layout:aa,LayoutDashboard:qc,LayoutDashboardIcon:qc,LayoutGrid:F5,LayoutGridIcon:F5,LayoutIcon:aa,LayoutList:T5,LayoutListIcon:T5,LayoutPanelLeft:O5,LayoutPanelLeftIcon:O5,LayoutPanelTop:E5,LayoutPanelTopIcon:E5,LayoutTemplate:U5,LayoutTemplateIcon:U5,Leaf:$5,LeafIcon:$5,LeafyGreen:Z5,LeafyGreenIcon:Z5,Lectern:N5,LecternIcon:N5,LetterText:G5,LetterTextIcon:G5,Library:K5,LibraryBig:W5,LibraryBigIcon:W5,LibraryIcon:K5,LibrarySquare:Na,LibrarySquareIcon:Na,LifeBuoy:X5,LifeBuoyIcon:X5,Ligature:Q5,LigatureIcon:Q5,Lightbulb:Y5,LightbulbIcon:Y5,LightbulbOff:J5,LightbulbOffIcon:J5,LineChart:mt,LineChartIcon:mt,LineSquiggle:e3,LineSquiggleIcon:e3,Link:c3,Link2:a3,Link2Icon:a3,Link2Off:t3,Link2OffIcon:t3,LinkIcon:c3,Linkedin:o3,LinkedinIcon:o3,List:x3,ListCheck:n3,ListCheckIcon:n3,ListChecks:r3,ListChecksIcon:r3,ListCollapse:i3,ListCollapseIcon:i3,ListEnd:d3,ListEndIcon:d3,ListFilter:s3,ListFilterIcon:s3,ListFilterPlus:h3,ListFilterPlusIcon:h3,ListIcon:x3,ListMinus:l3,ListMinusIcon:l3,ListMusic:y3,ListMusicIcon:y3,ListOrdered:p3,ListOrderedIcon:p3,ListPlus:u3,ListPlusIcon:u3,ListRestart:k3,ListRestartIcon:k3,ListStart:f3,ListStartIcon:f3,ListTodo:M3,ListTodoIcon:M3,ListTree:v3,ListTreeIcon:v3,ListVideo:m3,ListVideoIcon:m3,ListX:g3,ListXIcon:g3,Loader:L3,Loader2:D2,Loader2Icon:D2,LoaderCircle:D2,LoaderCircleIcon:D2,LoaderIcon:L3,LoaderPinwheel:w3,LoaderPinwheelIcon:w3,Locate:C3,LocateFixed:b3,LocateFixedIcon:b3,LocateIcon:C3,LocateOff:I3,LocateOffIcon:I3,LocationEdit:q3,LocationEditIcon:q3,Lock:A3,LockIcon:A3,LockKeyhole:S3,LockKeyholeIcon:S3,LockKeyholeOpen:F2,LockKeyholeOpenIcon:F2,LockOpen:T2,LockOpenIcon:T2,LogIn:z3,LogInIcon:z3,LogOut:H3,LogOutIcon:H3,Logs:V3,LogsIcon:V3,Lollipop:j3,LollipopIcon:j3,LucideAArrowDown:yo,LucideAArrowUp:uo,LucideALargeSmall:po,LucideAccessibility:ko,LucideActivity:fo,LucideActivitySquare:fa,LucideAirVent:Mo,LucideAirplay:vo,LucideAlarmCheck:K1,LucideAlarmClock:go,LucideAlarmClockCheck:K1,LucideAlarmClockMinus:X1,LucideAlarmClockOff:mo,LucideAlarmClockPlus:Q1,LucideAlarmMinus:X1,LucideAlarmPlus:Q1,LucideAlarmSmoke:xo,LucideAlbum:wo,LucideAlertCircle:It,LucideAlertOctagon:Z2,LucideAlertTriangle:v0,LucideAlignCenter:Io,LucideAlignCenterHorizontal:Lo,LucideAlignCenterVertical:bo,LucideAlignEndHorizontal:Co,LucideAlignEndVertical:So,LucideAlignHorizontalDistributeCenter:qo,LucideAlignHorizontalDistributeEnd:Ao,LucideAlignHorizontalDistributeStart:zo,LucideAlignHorizontalJustifyCenter:Ho,LucideAlignHorizontalJustifyEnd:Vo,LucideAlignHorizontalJustifyStart:jo,LucideAlignHorizontalSpaceAround:Po,LucideAlignHorizontalSpaceBetween:_o,LucideAlignJustify:Ro,LucideAlignLeft:Bo,LucideAlignRight:Do,LucideAlignStartHorizontal:Fo,LucideAlignStartVertical:To,LucideAlignVerticalDistributeCenter:Oo,LucideAlignVerticalDistributeEnd:Eo,LucideAlignVerticalDistributeStart:Uo,LucideAlignVerticalJustifyCenter:$o,LucideAlignVerticalJustifyEnd:Zo,LucideAlignVerticalJustifyStart:No,LucideAlignVerticalSpaceAround:Go,LucideAlignVerticalSpaceBetween:Wo,LucideAmbulance:Ko,LucideAmpersand:Xo,LucideAmpersands:Qo,LucideAmphora:Jo,LucideAnchor:Yo,LucideAngry:en,LucideAnnoyed:tn,LucideAntenna:an,LucideAnvil:cn,LucideAperture:on,LucideAppWindow:rn,LucideAppWindowMac:nn,LucideApple:dn,LucideArchive:ln,LucideArchiveRestore:hn,LucideArchiveX:sn,LucideAreaChart:yt,LucideArmchair:yn,LucideArrowBigDown:pn,LucideArrowBigDownDash:un,LucideArrowBigLeft:fn,LucideArrowBigLeftDash:kn,LucideArrowBigRight:vn,LucideArrowBigRightDash:Mn,LucideArrowBigUp:gn,LucideArrowBigUpDash:mn,LucideArrowDown:zn,LucideArrowDown01:xn,LucideArrowDown10:wn,LucideArrowDownAZ:J1,LucideArrowDownAz:J1,LucideArrowDownCircle:Ct,LucideArrowDownFromLine:Ln,LucideArrowDownLeft:bn,LucideArrowDownLeftFromCircle:St,LucideArrowDownLeftFromSquare:xa,LucideArrowDownLeftSquare:Ma,LucideArrowDownNarrowWide:In,LucideArrowDownRight:Cn,LucideArrowDownRightFromCircle:At,LucideArrowDownRightFromSquare:wa,LucideArrowDownRightSquare:va,LucideArrowDownSquare:ma,LucideArrowDownToDot:qn,LucideArrowDownToLine:Sn,LucideArrowDownUp:An,LucideArrowDownWideNarrow:Y1,LucideArrowDownZA:et,LucideArrowDownZa:et,LucideArrowLeft:Pn,LucideArrowLeftCircle:qt,LucideArrowLeftFromLine:Hn,LucideArrowLeftRight:Vn,LucideArrowLeftSquare:ga,LucideArrowLeftToLine:jn,LucideArrowRight:Dn,LucideArrowRightCircle:Vt,LucideArrowRightFromLine:_n,LucideArrowRightLeft:Rn,LucideArrowRightSquare:Ia,LucideArrowRightToLine:Bn,LucideArrowUp:Wn,LucideArrowUp01:Fn,LucideArrowUp10:Tn,LucideArrowUpAZ:tt,LucideArrowUpAz:tt,LucideArrowUpCircle:jt,LucideArrowUpDown:On,LucideArrowUpFromDot:En,LucideArrowUpFromLine:Un,LucideArrowUpLeft:$n,LucideArrowUpLeftFromCircle:zt,LucideArrowUpLeftFromSquare:La,LucideArrowUpLeftSquare:Ca,LucideArrowUpNarrowWide:at,LucideArrowUpRight:Zn,LucideArrowUpRightFromCircle:Ht,LucideArrowUpRightFromSquare:ba,LucideArrowUpRightSquare:qa,LucideArrowUpSquare:Aa,LucideArrowUpToLine:Nn,LucideArrowUpWideNarrow:Gn,LucideArrowUpZA:ct,LucideArrowUpZa:ct,LucideArrowsUpFromLine:Kn,LucideAsterisk:Xn,LucideAsteriskSquare:Sa,LucideAtSign:Qn,LucideAtom:Jn,LucideAudioLines:Yn,LucideAudioWaveform:er,LucideAward:tr,LucideAxe:ar,LucideAxis3D:ot,LucideAxis3d:ot,LucideBaby:cr,LucideBackpack:or,LucideBadge:vr,LucideBadgeAlert:nr,LucideBadgeCent:rr,LucideBadgeCheck:nt,LucideBadgeDollarSign:ir,LucideBadgeEuro:dr,LucideBadgeHelp:rt,LucideBadgeIndianRupee:hr,LucideBadgeInfo:sr,LucideBadgeJapaneseYen:lr,LucideBadgeMinus:yr,LucideBadgePercent:pr,LucideBadgePlus:ur,LucideBadgePoundSterling:kr,LucideBadgeQuestionMark:rt,LucideBadgeRussianRuble:fr,LucideBadgeSwissFranc:mr,LucideBadgeX:Mr,LucideBaggageClaim:gr,LucideBan:xr,LucideBanana:Lr,LucideBandage:wr,LucideBanknote:qr,LucideBanknoteArrowDown:br,LucideBanknoteArrowUp:Ir,LucideBanknoteX:Cr,LucideBarChart:gt,LucideBarChart2:xt,LucideBarChart3:vt,LucideBarChart4:Mt,LucideBarChartBig:ft,LucideBarChartHorizontal:ut,LucideBarChartHorizontalBig:pt,LucideBarcode:Sr,LucideBarrel:Ar,LucideBaseline:zr,LucideBath:Hr,LucideBattery:Fr,LucideBatteryCharging:Vr,LucideBatteryFull:jr,LucideBatteryLow:Pr,LucideBatteryMedium:_r,LucideBatteryPlus:Rr,LucideBatteryWarning:Br,LucideBeaker:Dr,LucideBean:Or,LucideBeanOff:Tr,LucideBed:$r,LucideBedDouble:Er,LucideBedSingle:Ur,LucideBeef:Zr,LucideBeer:Gr,LucideBeerOff:Nr,LucideBell:G0,LucideBellDot:Wr,LucideBellElectric:Kr,LucideBellMinus:Xr,LucideBellOff:Qr,LucideBellPlus:Yr,LucideBellRing:Jr,LucideBetweenHorizonalEnd:it,LucideBetweenHorizonalStart:dt,LucideBetweenHorizontalEnd:it,LucideBetweenHorizontalStart:dt,LucideBetweenVerticalEnd:ei,LucideBetweenVerticalStart:ai,LucideBicepsFlexed:ti,LucideBike:oi,LucideBinary:ci,LucideBinoculars:ni,LucideBiohazard:ri,LucideBird:ii,LucideBitcoin:di,LucideBlend:si,LucideBlinds:hi,LucideBlocks:li,LucideBluetooth:ki,LucideBluetoothConnected:yi,LucideBluetoothOff:pi,LucideBluetoothSearching:ui,LucideBold:fi,LucideBolt:Mi,LucideBomb:vi,LucideBone:mi,LucideBook:Ei,LucideBookA:gi,LucideBookAlert:xi,LucideBookAudio:wi,LucideBookCheck:Li,LucideBookCopy:bi,LucideBookDashed:ht,LucideBookDown:Ii,LucideBookHeadphones:Ci,LucideBookHeart:qi,LucideBookImage:Si,LucideBookKey:Ai,LucideBookLock:zi,LucideBookMarked:Hi,LucideBookMinus:Vi,LucideBookOpen:W0,LucideBookOpenCheck:ji,LucideBookOpenText:Pi,LucideBookPlus:_i,LucideBookTemplate:ht,LucideBookText:Ri,LucideBookType:Bi,LucideBookUp:Fi,LucideBookUp2:Di,LucideBookUser:Ti,LucideBookX:Oi,LucideBookmark:Gi,LucideBookmarkCheck:Ui,LucideBookmarkMinus:$i,LucideBookmarkPlus:Zi,LucideBookmarkX:Ni,LucideBoomBox:Wi,LucideBot:Qi,LucideBotMessageSquare:Ki,LucideBotOff:Xi,LucideBottleWine:Ji,LucideBowArrow:Yi,LucideBox:ed,LucideBoxSelect:Ta,LucideBoxes:td,LucideBraces:st,LucideBrackets:ad,LucideBrain:nd,LucideBrainCircuit:cd,LucideBrainCog:od,LucideBrickWall:id,LucideBrickWallFire:rd,LucideBriefcase:ld,LucideBriefcaseBusiness:dd,LucideBriefcaseConveyorBelt:hd,LucideBriefcaseMedical:sd,LucideBringToFront:yd,LucideBrush:ud,LucideBrushCleaning:pd,LucideBubbles:kd,LucideBug:vd,LucideBugOff:fd,LucideBugPlay:Md,LucideBuilding:xd,LucideBuilding2:md,LucideBus:wd,LucideBusFront:gd,LucideCable:bd,LucideCableCar:Ld,LucideCake:Cd,LucideCakeSlice:Id,LucideCalculator:qd,LucideCalendar:Gd,LucideCalendar1:Sd,LucideCalendarArrowDown:Ad,LucideCalendarArrowUp:zd,LucideCalendarCheck:Vd,LucideCalendarCheck2:Hd,LucideCalendarClock:jd,LucideCalendarCog:Pd,LucideCalendarDays:_d,LucideCalendarFold:Rd,LucideCalendarHeart:Bd,LucideCalendarMinus:Fd,LucideCalendarMinus2:Dd,LucideCalendarOff:Td,LucideCalendarPlus:Ed,LucideCalendarPlus2:Od,LucideCalendarRange:Ud,LucideCalendarSearch:$d,LucideCalendarSync:Zd,LucideCalendarX:Wd,LucideCalendarX2:Nd,LucideCamera:Xd,LucideCameraOff:Kd,LucideCandlestickChart:kt,LucideCandy:Yd,LucideCandyCane:Qd,LucideCandyOff:Jd,LucideCannabis:eh,LucideCaptions:lt,LucideCaptionsOff:ah,LucideCar:oh,LucideCarFront:th,LucideCarTaxiFront:ch,LucideCaravan:nh,LucideCardSim:rh,LucideCarrot:ih,LucideCaseLower:dh,LucideCaseSensitive:sh,LucideCaseUpper:hh,LucideCassetteTape:lh,LucideCast:ph,LucideCastle:yh,LucideCat:kh,LucideCctv:uh,LucideChartArea:yt,LucideChartBar:ut,LucideChartBarBig:pt,LucideChartBarDecreasing:fh,LucideChartBarIncreasing:Mh,LucideChartBarStacked:vh,LucideChartCandlestick:kt,LucideChartColumn:vt,LucideChartColumnBig:ft,LucideChartColumnDecreasing:mh,LucideChartColumnIncreasing:Mt,LucideChartColumnStacked:gh,LucideChartGantt:xh,LucideChartLine:mt,LucideChartNetwork:wh,LucideChartNoAxesColumn:xt,LucideChartNoAxesColumnDecreasing:Lh,LucideChartNoAxesColumnIncreasing:gt,LucideChartNoAxesCombined:bh,LucideChartNoAxesGantt:wt,LucideChartPie:Lt,LucideChartScatter:bt,LucideChartSpline:Ih,LucideCheck:Ah,LucideCheckCheck:Ch,LucideCheckCircle:Pt,LucideCheckCircle2:_t,LucideCheckLine:qh,LucideCheckSquare:Ha,LucideCheckSquare2:Va,LucideChefHat:Sh,LucideCherry:zh,LucideChevronDown:mc,LucideChevronDownCircle:Rt,LucideChevronDownSquare:ja,LucideChevronFirst:Hh,LucideChevronLast:Vh,LucideChevronLeft:K0,LucideChevronLeftCircle:Bt,LucideChevronLeftSquare:_a,LucideChevronRight:X0,LucideChevronRightCircle:Dt,LucideChevronRightSquare:Pa,LucideChevronUp:gc,LucideChevronUpCircle:Ft,LucideChevronUpSquare:Ra,LucideChevronsDown:Ph,LucideChevronsDownUp:jh,LucideChevronsLeft:xc,LucideChevronsLeftRight:Rh,LucideChevronsLeftRightEllipsis:_h,LucideChevronsRight:wc,LucideChevronsRightLeft:Bh,LucideChevronsUp:Dh,LucideChevronsUpDown:Th,LucideChrome:Fh,LucideChurch:Oh,LucideCigarette:Uh,LucideCigaretteOff:Eh,LucideCircle:Lc,LucideCircleAlert:It,LucideCircleArrowDown:Ct,LucideCircleArrowLeft:qt,LucideCircleArrowOutDownLeft:St,LucideCircleArrowOutDownRight:At,LucideCircleArrowOutUpLeft:zt,LucideCircleArrowOutUpRight:Ht,LucideCircleArrowRight:Vt,LucideCircleArrowUp:jt,LucideCircleCheck:_t,LucideCircleCheckBig:Pt,LucideCircleChevronDown:Rt,LucideCircleChevronLeft:Bt,LucideCircleChevronRight:Dt,LucideCircleChevronUp:Ft,LucideCircleDashed:$h,LucideCircleDivide:Tt,LucideCircleDollarSign:Zh,LucideCircleDot:Gh,LucideCircleDotDashed:Nh,LucideCircleEllipsis:Wh,LucideCircleEqual:Kh,LucideCircleFadingArrowUp:Xh,LucideCircleFadingPlus:Qh,LucideCircleGauge:Ot,LucideCircleHelp:h1,LucideCircleMinus:Et,LucideCircleOff:Jh,LucideCircleParking:$t,LucideCircleParkingOff:Ut,LucideCirclePause:Zt,LucideCirclePercent:Nt,LucideCirclePlay:Gt,LucideCirclePlus:Wt,LucideCirclePoundSterling:Yh,LucideCirclePower:Kt,LucideCircleQuestionMark:h1,LucideCircleSlash:es,LucideCircleSlash2:Xt,LucideCircleSlashed:Xt,LucideCircleSmall:ts,LucideCircleStop:Qt,LucideCircleUser:Jt,LucideCircleUserRound:Yt,LucideCircleX:e2,LucideCircuitBoard:as,LucideCitrus:cs,LucideClapperboard:os,LucideClipboard:ps,LucideClipboardCheck:ns,LucideClipboardCopy:rs,LucideClipboardEdit:a2,LucideClipboardList:is,LucideClipboardMinus:ds,LucideClipboardPaste:hs,LucideClipboardPen:a2,LucideClipboardPenLine:t2,LucideClipboardPlus:ss,LucideClipboardSignature:t2,LucideClipboardType:ls,LucideClipboardX:ys,LucideClock:Hs,LucideClock1:us,LucideClock10:ks,LucideClock11:fs,LucideClock12:Ms,LucideClock2:vs,LucideClock3:ms,LucideClock4:gs,LucideClock5:xs,LucideClock6:ws,LucideClock7:Ls,LucideClock8:bs,LucideClock9:Is,LucideClockAlert:Cs,LucideClockArrowDown:qs,LucideClockArrowUp:Ss,LucideClockFading:As,LucideClockPlus:zs,LucideCloud:Gs,LucideCloudAlert:Vs,LucideCloudCheck:js,LucideCloudCog:Ps,LucideCloudDownload:c2,LucideCloudDrizzle:Rs,LucideCloudFog:_s,LucideCloudHail:Bs,LucideCloudLightning:Ds,LucideCloudMoon:Os,LucideCloudMoonRain:Fs,LucideCloudOff:Ts,LucideCloudRain:Us,LucideCloudRainWind:Es,LucideCloudSnow:$s,LucideCloudSun:Ns,LucideCloudSunRain:Zs,LucideCloudUpload:o2,LucideCloudy:Ws,LucideClover:Ks,LucideClub:Xs,LucideCode:Qs,LucideCode2:n2,LucideCodeSquare:Ba,LucideCodeXml:n2,LucideCodepen:Js,LucideCodesandbox:Ys,LucideCoffee:el,LucideCog:tl,LucideCoins:al,LucideColumns:r2,LucideColumns2:r2,LucideColumns3:i2,LucideColumns3Cog:s1,LucideColumns4:cl,LucideColumnsSettings:s1,LucideCombine:ol,LucideCommand:nl,LucideCompass:rl,LucideComponent:il,LucideComputer:dl,LucideConciergeBell:hl,LucideCone:sl,LucideConstruction:ll,LucideContact:yl,LucideContact2:d2,LucideContactRound:d2,LucideContainer:pl,LucideContrast:ul,LucideCookie:kl,LucideCookingPot:fl,LucideCopy:wl,LucideCopyCheck:Ml,LucideCopyMinus:vl,LucideCopyPlus:ml,LucideCopySlash:gl,LucideCopyX:xl,LucideCopyleft:Ll,LucideCopyright:bl,LucideCornerDownLeft:Il,LucideCornerDownRight:Cl,LucideCornerLeftDown:ql,LucideCornerLeftUp:Sl,LucideCornerRightDown:Al,LucideCornerRightUp:zl,LucideCornerUpLeft:Hl,LucideCornerUpRight:Vl,LucideCpu:jl,LucideCreativeCommons:Pl,LucideCreditCard:_l,LucideCroissant:Rl,LucideCrop:Bl,LucideCross:Dl,LucideCrosshair:Fl,LucideCrown:Tl,LucideCuboid:Ol,LucideCupSoda:El,LucideCurlyBraces:st,LucideCurrency:$l,LucideCylinder:Ul,LucideDam:Zl,LucideDatabase:Wl,LucideDatabaseBackup:Nl,LucideDatabaseZap:Gl,LucideDecimalsArrowLeft:Kl,LucideDecimalsArrowRight:Ql,LucideDelete:Xl,LucideDessert:Jl,LucideDiameter:Yl,LucideDiamond:ay,LucideDiamondMinus:ey,LucideDiamondPercent:h2,LucideDiamondPlus:ty,LucideDice1:cy,LucideDice2:oy,LucideDice3:ny,LucideDice4:ry,LucideDice5:iy,LucideDice6:dy,LucideDices:sy,LucideDiff:ly,LucideDisc:uy,LucideDisc2:hy,LucideDisc3:yy,LucideDiscAlbum:py,LucideDivide:ky,LucideDivideCircle:Tt,LucideDivideSquare:Oa,LucideDna:My,LucideDnaOff:fy,LucideDock:vy,LucideDog:my,LucideDollarSign:gy,LucideDonut:xy,LucideDoorClosed:Ly,LucideDoorClosedLocked:wy,LucideDoorOpen:by,LucideDot:Iy,LucideDotSquare:Ea,LucideDownload:bc,LucideDownloadCloud:c2,LucideDraftingCompass:Cy,LucideDrama:qy,LucideDribbble:Sy,LucideDrill:Ay,LucideDrone:zy,LucideDroplet:Vy,LucideDropletOff:Hy,LucideDroplets:jy,LucideDrum:Py,LucideDrumstick:_y,LucideDumbbell:Ry,LucideEar:Dy,LucideEarOff:By,LucideEarth:s2,LucideEarthLock:Fy,LucideEclipse:Ty,LucideEdit:Ue,LucideEdit2:oa,LucideEdit3:ca,LucideEgg:Uy,LucideEggFried:Oy,LucideEggOff:Ey,LucideEllipsis:y2,LucideEllipsisVertical:l2,LucideEqual:Ny,LucideEqualApproximately:$y,LucideEqualNot:Zy,LucideEqualSquare:Ua,LucideEraser:Gy,LucideEthernetPort:Wy,LucideEuro:Ky,LucideExpand:Xy,LucideExternalLink:Qy,LucideEye:ep,LucideEyeClosed:Jy,LucideEyeOff:Yy,LucideFacebook:tp,LucideFactory:ap,LucideFan:cp,LucideFastForward:op,LucideFeather:np,LucideFence:rp,LucideFerrisWheel:ip,LucideFigma:hp,LucideFile:Ic,LucideFileArchive:dp,LucideFileAudio:lp,LucideFileAudio2:sp,LucideFileAxis3D:p2,LucideFileAxis3d:p2,LucideFileBadge:pp,LucideFileBadge2:yp,LucideFileBarChart:k2,LucideFileBarChart2:u2,LucideFileBox:up,LucideFileChartColumn:u2,LucideFileChartColumnIncreasing:k2,LucideFileChartLine:f2,LucideFileChartPie:M2,LucideFileCheck:fp,LucideFileCheck2:kp,LucideFileClock:Mp,LucideFileCode:mp,LucideFileCode2:vp,LucideFileCog:v2,LucideFileCog2:v2,LucideFileDiff:gp,LucideFileDigit:xp,LucideFileDown:wp,LucideFileEdit:g2,LucideFileHeart:Lp,LucideFileImage:bp,LucideFileInput:Ip,LucideFileJson:qp,LucideFileJson2:Cp,LucideFileKey:Ap,LucideFileKey2:Sp,LucideFileLineChart:f2,LucideFileLock:Hp,LucideFileLock2:zp,LucideFileMinus:jp,LucideFileMinus2:Vp,LucideFileMusic:Pp,LucideFileOutput:_p,LucideFilePen:g2,LucideFilePenLine:m2,LucideFilePieChart:M2,LucideFilePlus:Bp,LucideFilePlus2:Rp,LucideFileQuestion:x2,LucideFileQuestionMark:x2,LucideFileScan:Dp,LucideFileSearch:Tp,LucideFileSearch2:Fp,LucideFileSignature:m2,LucideFileSliders:Op,LucideFileSpreadsheet:Ep,LucideFileStack:$p,LucideFileSymlink:Up,LucideFileTerminal:Zp,LucideFileText:Wp,LucideFileType:Gp,LucideFileType2:Np,LucideFileUp:Xp,LucideFileUser:Kp,LucideFileVideo:Jp,LucideFileVideo2:Qp,LucideFileVolume:eu,LucideFileVolume2:Yp,LucideFileWarning:tu,LucideFileX:cu,LucideFileX2:au,LucideFiles:ou,LucideFilm:nu,LucideFilter:R1,LucideFilterX:b2,LucideFingerprint:ru,LucideFireExtinguisher:iu,LucideFish:su,LucideFishOff:du,LucideFishSymbol:hu,LucideFlag:uu,LucideFlagOff:lu,LucideFlagTriangleLeft:pu,LucideFlagTriangleRight:yu,LucideFlame:fu,LucideFlameKindling:ku,LucideFlashlight:vu,LucideFlashlightOff:Mu,LucideFlaskConical:gu,LucideFlaskConicalOff:mu,LucideFlaskRound:xu,LucideFlipHorizontal:Lu,LucideFlipHorizontal2:wu,LucideFlipVertical:Iu,LucideFlipVertical2:bu,LucideFlower:Cu,LucideFlower2:qu,LucideFocus:Su,LucideFoldHorizontal:Au,LucideFoldVertical:zu,LucideFolder:Cc,LucideFolderArchive:Hu,LucideFolderCheck:Vu,LucideFolderClock:ju,LucideFolderClosed:Pu,LucideFolderCode:_u,LucideFolderCog:w2,LucideFolderCog2:w2,LucideFolderDot:Ru,LucideFolderDown:Du,LucideFolderEdit:L2,LucideFolderGit:Fu,LucideFolderGit2:Bu,LucideFolderHeart:Tu,LucideFolderInput:Ou,LucideFolderKanban:Eu,LucideFolderKey:Uu,LucideFolderLock:$u,LucideFolderMinus:Zu,LucideFolderOpen:Q0,LucideFolderOpenDot:Nu,LucideFolderOutput:Gu,LucideFolderPen:L2,LucideFolderPlus:Wu,LucideFolderRoot:Ku,LucideFolderSearch:Qu,LucideFolderSearch2:Xu,LucideFolderSymlink:Ju,LucideFolderSync:Yu,LucideFolderTree:e4,LucideFolderUp:t4,LucideFolderX:a4,LucideFolders:c4,LucideFootprints:n4,LucideForkKnife:A0,LucideForkKnifeCrossed:S0,LucideForklift:o4,LucideFormInput:ra,LucideForward:r4,LucideFrame:i4,LucideFramer:d4,LucideFrown:h4,LucideFuel:s4,LucideFullscreen:l4,LucideFunctionSquare:Za,LucideFunnel:R1,LucideFunnelPlus:y4,LucideFunnelX:b2,LucideGalleryHorizontal:u4,LucideGalleryHorizontalEnd:p4,LucideGalleryThumbnails:k4,LucideGalleryVertical:v4,LucideGalleryVerticalEnd:f4,LucideGamepad:m4,LucideGamepad2:M4,LucideGanttChart:wt,LucideGanttChartSquare:y1,LucideGauge:g4,LucideGaugeCircle:Ot,LucideGavel:x4,LucideGem:w4,LucideGeorgianLari:L4,LucideGhost:b4,LucideGift:I4,LucideGitBranch:q4,LucideGitBranchPlus:C4,LucideGitCommit:I2,LucideGitCommitHorizontal:I2,LucideGitCommitVertical:S4,LucideGitCompare:z4,LucideGitCompareArrows:A4,LucideGitFork:H4,LucideGitGraph:V4,LucideGitMerge:j4,LucideGitPullRequest:F4,LucideGitPullRequestArrow:P4,LucideGitPullRequestClosed:R4,LucideGitPullRequestCreate:D4,LucideGitPullRequestCreateArrow:_4,LucideGitPullRequestDraft:B4,LucideGithub:T4,LucideGitlab:O4,LucideGlassWater:E4,LucideGlasses:U4,LucideGlobe:Z4,LucideGlobe2:s2,LucideGlobeLock:$4,LucideGoal:N4,LucideGpu:W4,LucideGrab:G4,LucideGraduationCap:K4,LucideGrape:X4,LucideGrid:l1,LucideGrid2X2:A2,LucideGrid2X2Check:C2,LucideGrid2X2Plus:q2,LucideGrid2X2X:S2,LucideGrid2x2:A2,LucideGrid2x2Check:C2,LucideGrid2x2Plus:q2,LucideGrid2x2X:S2,LucideGrid3X3:l1,LucideGrid3x2:Q4,LucideGrid3x3:l1,LucideGrip:ek,LucideGripHorizontal:J4,LucideGripVertical:Y4,LucideGroup:tk,LucideGuitar:ak,LucideHam:ck,LucideHamburger:ok,LucideHammer:nk,LucideHand:sk,LucideHandCoins:rk,LucideHandHeart:ik,LucideHandHelping:z2,LucideHandMetal:dk,LucideHandPlatter:hk,LucideHandshake:lk,LucideHardDrive:uk,LucideHardDriveDownload:yk,LucideHardDriveUpload:pk,LucideHardHat:kk,LucideHash:fk,LucideHaze:Mk,LucideHdmiPort:vk,LucideHeading:Ik,LucideHeading1:mk,LucideHeading2:gk,LucideHeading3:xk,LucideHeading4:wk,LucideHeading5:Lk,LucideHeading6:bk,LucideHeadphoneOff:qk,LucideHeadphones:Ck,LucideHeadset:Sk,LucideHeart:_k,LucideHeartCrack:Ak,LucideHeartHandshake:zk,LucideHeartMinus:Hk,LucideHeartOff:Vk,LucideHeartPlus:jk,LucideHeartPulse:Pk,LucideHeater:Rk,LucideHelpCircle:h1,LucideHelpingHand:z2,LucideHexagon:Bk,LucideHighlighter:Dk,LucideHistory:Fk,LucideHome:H2,LucideHop:Tk,LucideHopOff:Ok,LucideHospital:Ek,LucideHotel:Uk,LucideHourglass:$k,LucideHouse:H2,LucideHousePlug:Zk,LucideHousePlus:Nk,LucideHouseWifi:Gk,LucideIceCream:j2,LucideIceCream2:V2,LucideIceCreamBowl:V2,LucideIceCreamCone:j2,LucideIdCard:Kk,LucideIdCardLanyard:Wk,LucideImage:c5,LucideImageDown:Xk,LucideImageMinus:Qk,LucideImageOff:Jk,LucideImagePlay:e5,LucideImagePlus:Yk,LucideImageUp:t5,LucideImageUpscale:a5,LucideImages:o5,LucideImport:n5,LucideInbox:r5,LucideIndent:_2,LucideIndentDecrease:P2,LucideIndentIncrease:_2,LucideIndianRupee:i5,LucideInfinity:h5,LucideInfo:d5,LucideInspect:Xa,LucideInspectionPanel:s5,LucideInstagram:l5,LucideItalic:y5,LucideIterationCcw:p5,LucideIterationCw:u5,LucideJapaneseYen:k5,LucideJoystick:f5,LucideKanban:M5,LucideKanbanSquare:$a,LucideKanbanSquareDashed:Da,LucideKey:g5,LucideKeyRound:v5,LucideKeySquare:m5,LucideKeyboard:w5,LucideKeyboardMusic:x5,LucideKeyboardOff:L5,LucideLamp:A5,LucideLampCeiling:b5,LucideLampDesk:I5,LucideLampFloor:C5,LucideLampWallDown:q5,LucideLampWallUp:S5,LucideLandPlot:z5,LucideLandmark:H5,LucideLanguages:V5,LucideLaptop:P5,LucideLaptop2:R2,LucideLaptopMinimal:R2,LucideLaptopMinimalCheck:j5,LucideLasso:R5,LucideLassoSelect:_5,LucideLaugh:B5,LucideLayers:B2,LucideLayers2:D5,LucideLayers3:B2,LucideLayout:aa,LucideLayoutDashboard:qc,LucideLayoutGrid:F5,LucideLayoutList:T5,LucideLayoutPanelLeft:O5,LucideLayoutPanelTop:E5,LucideLayoutTemplate:U5,LucideLeaf:$5,LucideLeafyGreen:Z5,LucideLectern:N5,LucideLetterText:G5,LucideLibrary:K5,LucideLibraryBig:W5,LucideLibrarySquare:Na,LucideLifeBuoy:X5,LucideLigature:Q5,LucideLightbulb:Y5,LucideLightbulbOff:J5,LucideLineChart:mt,LucideLineSquiggle:e3,LucideLink:c3,LucideLink2:a3,LucideLink2Off:t3,LucideLinkedin:o3,LucideList:x3,LucideListCheck:n3,LucideListChecks:r3,LucideListCollapse:i3,LucideListEnd:d3,LucideListFilter:s3,LucideListFilterPlus:h3,LucideListMinus:l3,LucideListMusic:y3,LucideListOrdered:p3,LucideListPlus:u3,LucideListRestart:k3,LucideListStart:f3,LucideListTodo:M3,LucideListTree:v3,LucideListVideo:m3,LucideListX:g3,LucideLoader:L3,LucideLoader2:D2,LucideLoaderCircle:D2,LucideLoaderPinwheel:w3,LucideLocate:C3,LucideLocateFixed:b3,LucideLocateOff:I3,LucideLocationEdit:q3,LucideLock:A3,LucideLockKeyhole:S3,LucideLockKeyholeOpen:F2,LucideLockOpen:T2,LucideLogIn:z3,LucideLogOut:H3,LucideLogs:V3,LucideLollipop:j3,LucideLuggage:P3,LucideMSquare:Ga,LucideMagnet:_3,LucideMail:$3,LucideMailCheck:R3,LucideMailMinus:B3,LucideMailOpen:D3,LucideMailPlus:F3,LucideMailQuestion:O2,LucideMailQuestionMark:O2,LucideMailSearch:T3,LucideMailWarning:O3,LucideMailX:E3,LucideMailbox:U3,LucideMails:Z3,LucideMap:n6,LucideMapPin:t6,LucideMapPinCheck:G3,LucideMapPinCheckInside:N3,LucideMapPinHouse:W3,LucideMapPinMinus:K3,LucideMapPinMinusInside:Q3,LucideMapPinOff:X3,LucideMapPinPlus:Y3,LucideMapPinPlusInside:J3,LucideMapPinX:a6,LucideMapPinXInside:e6,LucideMapPinned:c6,LucideMapPlus:o6,LucideMars:d6,LucideMarsStroke:r6,LucideMartini:i6,LucideMaximize:s6,LucideMaximize2:h6,LucideMedal:l6,LucideMegaphone:p6,LucideMegaphoneOff:y6,LucideMeh:u6,LucideMemoryStick:k6,LucideMenu:f6,LucideMenuSquare:Wa,LucideMerge:M6,LucideMessageCircle:q6,LucideMessageCircleCode:v6,LucideMessageCircleDashed:m6,LucideMessageCircleHeart:g6,LucideMessageCircleMore:x6,LucideMessageCircleOff:w6,LucideMessageCirclePlus:L6,LucideMessageCircleQuestion:E2,LucideMessageCircleQuestionMark:E2,LucideMessageCircleReply:b6,LucideMessageCircleWarning:I6,LucideMessageCircleX:C6,LucideMessageSquare:U6,LucideMessageSquareCode:S6,LucideMessageSquareDashed:A6,LucideMessageSquareDiff:z6,LucideMessageSquareDot:H6,LucideMessageSquareHeart:V6,LucideMessageSquareLock:j6,LucideMessageSquareMore:P6,LucideMessageSquareOff:_6,LucideMessageSquarePlus:R6,LucideMessageSquareQuote:B6,LucideMessageSquareReply:F6,LucideMessageSquareShare:D6,LucideMessageSquareText:T6,LucideMessageSquareWarning:O6,LucideMessageSquareX:E6,LucideMessagesSquare:$6,LucideMic:N6,LucideMic2:U2,LucideMicOff:Z6,LucideMicVocal:U2,LucideMicrochip:G6,LucideMicroscope:W6,LucideMicrowave:K6,LucideMilestone:X6,LucideMilk:J6,LucideMilkOff:Q6,LucideMinimize:e8,LucideMinimize2:Y6,LucideMinus:t8,LucideMinusCircle:Et,LucideMinusSquare:Ka,LucideMonitor:u8,LucideMonitorCheck:a8,LucideMonitorCog:c8,LucideMonitorDot:o8,LucideMonitorDown:n8,LucideMonitorOff:r8,LucideMonitorPause:i8,LucideMonitorPlay:d8,LucideMonitorSmartphone:h8,LucideMonitorSpeaker:s8,LucideMonitorStop:l8,LucideMonitorUp:y8,LucideMonitorX:p8,LucideMoon:k8,LucideMoonStar:f8,LucideMoreHorizontal:y2,LucideMoreVertical:l2,LucideMountain:v8,LucideMountainSnow:M8,LucideMouse:b8,LucideMouseOff:m8,LucideMousePointer:L8,LucideMousePointer2:g8,LucideMousePointerBan:x8,LucideMousePointerClick:w8,LucideMousePointerSquareDashed:Fa,LucideMove:B8,LucideMove3D:$2,LucideMove3d:$2,LucideMoveDiagonal:C8,LucideMoveDiagonal2:I8,LucideMoveDown:A8,LucideMoveDownLeft:q8,LucideMoveDownRight:S8,LucideMoveHorizontal:z8,LucideMoveLeft:H8,LucideMoveRight:V8,LucideMoveUp:_8,LucideMoveUpLeft:P8,LucideMoveUpRight:j8,LucideMoveVertical:R8,LucideMusic:O8,LucideMusic2:D8,LucideMusic3:F8,LucideMusic4:T8,LucideNavigation:Z8,LucideNavigation2:U8,LucideNavigation2Off:E8,LucideNavigationOff:$8,LucideNetwork:G8,LucideNewspaper:N8,LucideNfc:W8,LucideNonBinary:K8,LucideNotebook:Y8,LucideNotebookPen:X8,LucideNotebookTabs:Q8,LucideNotebookText:J8,LucideNotepadText:t7,LucideNotepadTextDashed:e7,LucideNut:c7,LucideNutOff:a7,LucideOctagon:n7,LucideOctagonAlert:Z2,LucideOctagonMinus:o7,LucideOctagonPause:N2,LucideOctagonX:G2,LucideOmega:r7,LucideOption:i7,LucideOrbit:d7,LucideOrigami:h7,LucideOutdent:P2,LucidePackage:M7,LucidePackage2:s7,LucidePackageCheck:l7,LucidePackageMinus:y7,LucidePackageOpen:p7,LucidePackagePlus:u7,LucidePackageSearch:k7,LucidePackageX:f7,LucidePaintBucket:v7,LucidePaintRoller:m7,LucidePaintbrush:g7,LucidePaintbrush2:W2,LucidePaintbrushVertical:W2,LucidePalette:x7,LucidePalmtree:M0,LucidePanda:w7,LucidePanelBottom:I7,LucidePanelBottomClose:L7,LucidePanelBottomDashed:K2,LucidePanelBottomInactive:K2,LucidePanelBottomOpen:b7,LucidePanelLeft:Y2,LucidePanelLeftClose:X2,LucidePanelLeftDashed:Q2,LucidePanelLeftInactive:Q2,LucidePanelLeftOpen:J2,LucidePanelRight:S7,LucidePanelRightClose:C7,LucidePanelRightDashed:ea,LucidePanelRightInactive:ea,LucidePanelRightOpen:q7,LucidePanelTop:H7,LucidePanelTopClose:A7,LucidePanelTopDashed:ta,LucidePanelTopInactive:ta,LucidePanelTopOpen:z7,LucidePanelsLeftBottom:V7,LucidePanelsLeftRight:i2,LucidePanelsRightBottom:j7,LucidePanelsTopBottom:ha,LucidePanelsTopLeft:aa,LucidePaperclip:P7,LucideParentheses:_7,LucideParkingCircle:$t,LucideParkingCircleOff:Ut,LucideParkingMeter:R7,LucideParkingSquare:Ja,LucideParkingSquareOff:Qa,LucidePartyPopper:B7,LucidePause:D7,LucidePauseCircle:Zt,LucidePauseOctagon:N2,LucidePawPrint:F7,LucidePcCase:T7,LucidePen:oa,LucidePenBox:Ue,LucidePenLine:ca,LucidePenOff:O7,LucidePenSquare:Ue,LucidePenTool:E7,LucidePencil:J0,LucidePencilLine:U7,LucidePencilOff:$7,LucidePencilRuler:Z7,LucidePentagon:N7,LucidePercent:G7,LucidePercentCircle:Nt,LucidePercentDiamond:h2,LucidePercentSquare:Ya,LucidePersonStanding:W7,LucidePhilippinePeso:K7,LucidePhone:af,LucidePhoneCall:X7,LucidePhoneForwarded:Q7,LucidePhoneIncoming:J7,LucidePhoneMissed:Y7,LucidePhoneOff:ef,LucidePhoneOutgoing:tf,LucidePi:cf,LucidePiSquare:e0,LucidePiano:of,LucidePickaxe:nf,LucidePictureInPicture:df,LucidePictureInPicture2:rf,LucidePieChart:Lt,LucidePiggyBank:hf,LucidePilcrow:yf,LucidePilcrowLeft:sf,LucidePilcrowRight:lf,LucidePilcrowSquare:t0,LucidePill:pf,LucidePillBottle:uf,LucidePin:ff,LucidePinOff:kf,LucidePipette:Mf,LucidePizza:vf,LucidePlane:xf,LucidePlaneLanding:mf,LucidePlaneTakeoff:gf,LucidePlay:wf,LucidePlayCircle:Gt,LucidePlaySquare:a0,LucidePlug:bf,LucidePlug2:Lf,LucidePlugZap:na,LucidePlugZap2:na,LucidePlus:Y0,LucidePlusCircle:Wt,LucidePlusSquare:c0,LucidePocket:Cf,LucidePocketKnife:If,LucidePodcast:qf,LucidePointer:Af,LucidePointerOff:Sf,LucidePopcorn:zf,LucidePopsicle:Hf,LucidePoundSterling:Vf,LucidePower:Pf,LucidePowerCircle:Kt,LucidePowerOff:jf,LucidePowerSquare:o0,LucidePresentation:_f,LucidePrinter:Bf,LucidePrinterCheck:Rf,LucideProjector:Df,LucideProportions:Ff,LucidePuzzle:Tf,LucidePyramid:Of,LucideQrCode:Ef,LucideQuote:Uf,LucideRabbit:$f,LucideRadar:Zf,LucideRadiation:Nf,LucideRadical:Gf,LucideRadio:Xf,LucideRadioReceiver:Wf,LucideRadioTower:Kf,LucideRadius:Qf,LucideRailSymbol:Jf,LucideRainbow:Yf,LucideRat:e9,LucideRatio:t9,LucideReceipt:s9,LucideReceiptCent:a9,LucideReceiptEuro:c9,LucideReceiptIndianRupee:n9,LucideReceiptJapaneseYen:o9,LucideReceiptPoundSterling:r9,LucideReceiptRussianRuble:i9,LucideReceiptSwissFranc:d9,LucideReceiptText:h9,LucideRectangleCircle:l9,LucideRectangleEllipsis:ra,LucideRectangleGoggles:y9,LucideRectangleHorizontal:p9,LucideRectangleVertical:u9,LucideRecycle:k9,LucideRedo:v9,LucideRedo2:f9,LucideRedoDot:M9,LucideRefreshCcw:g9,LucideRefreshCcwDot:m9,LucideRefreshCw:w9,LucideRefreshCwOff:x9,LucideRefrigerator:L9,LucideRegex:b9,LucideRemoveFormatting:I9,LucideRepeat:q9,LucideRepeat1:C9,LucideRepeat2:S9,LucideReplace:z9,LucideReplaceAll:A9,LucideReply:V9,LucideReplyAll:H9,LucideRewind:j9,LucideRibbon:P9,LucideRocket:_9,LucideRockingChair:R9,LucideRollerCoaster:B9,LucideRotate3D:ia,LucideRotate3d:ia,LucideRotateCcw:T9,LucideRotateCcwKey:D9,LucideRotateCcwSquare:F9,LucideRotateCw:E9,LucideRotateCwSquare:O9,LucideRoute:$9,LucideRouteOff:U9,LucideRouter:Z9,LucideRows:da,LucideRows2:da,LucideRows3:ha,LucideRows4:N9,LucideRss:G9,LucideRuler:K9,LucideRulerDimensionLine:W9,LucideRussianRuble:X9,LucideSailboat:Q9,LucideSalad:J9,LucideSandwich:Y9,LucideSatellite:eM,LucideSatelliteDish:tM,LucideSaudiRiyal:aM,LucideSave:nM,LucideSaveAll:cM,LucideSaveOff:oM,LucideScale:rM,LucideScale3D:sa,LucideScale3d:sa,LucideScaling:iM,LucideScan:fM,LucideScanBarcode:hM,LucideScanEye:dM,LucideScanFace:sM,LucideScanHeart:lM,LucideScanLine:yM,LucideScanQrCode:pM,LucideScanSearch:uM,LucideScanText:kM,LucideScatterChart:bt,LucideSchool:MM,LucideSchool2:g0,LucideScissors:gM,LucideScissorsLineDashed:vM,LucideScissorsSquare:n0,LucideScissorsSquareDashedBottom:za,LucideScreenShare:xM,LucideScreenShareOff:mM,LucideScroll:wM,LucideScrollText:LM,LucideSearch:Sc,LucideSearchCheck:bM,LucideSearchCode:IM,LucideSearchSlash:qM,LucideSearchX:CM,LucideSection:SM,LucideSend:zM,LucideSendHorizonal:la,LucideSendHorizontal:la,LucideSendToBack:AM,LucideSeparatorHorizontal:HM,LucideSeparatorVertical:VM,LucideServer:RM,LucideServerCog:PM,LucideServerCrash:jM,LucideServerOff:_M,LucideSettings:Ac,LucideSettings2:BM,LucideShapes:DM,LucideShare:TM,LucideShare2:FM,LucideSheet:OM,LucideShell:EM,LucideShield:QM,LucideShieldAlert:UM,LucideShieldBan:$M,LucideShieldCheck:zc,LucideShieldClose:pa,LucideShieldEllipsis:ZM,LucideShieldHalf:NM,LucideShieldMinus:GM,LucideShieldOff:WM,LucideShieldPlus:KM,LucideShieldQuestion:ya,LucideShieldQuestionMark:ya,LucideShieldUser:XM,LucideShieldX:pa,LucideShip:ev,LucideShipWheel:JM,LucideShirt:YM,LucideShoppingBag:tv,LucideShoppingBasket:av,LucideShoppingCart:cv,LucideShovel:nv,LucideShowerHead:ov,LucideShredder:iv,LucideShrimp:rv,LucideShrink:dv,LucideShrub:lv,LucideShuffle:hv,LucideSidebar:Y2,LucideSidebarClose:X2,LucideSidebarOpen:J2,LucideSigma:sv,LucideSigmaSquare:r0,LucideSignal:fv,LucideSignalHigh:yv,LucideSignalLow:pv,LucideSignalMedium:kv,LucideSignalZero:uv,LucideSignature:Mv,LucideSignpost:mv,LucideSignpostBig:vv,LucideSiren:gv,LucideSkipBack:xv,LucideSkipForward:wv,LucideSkull:Lv,LucideSlack:bv,LucideSlash:Iv,LucideSlashSquare:i0,LucideSlice:Cv,LucideSliders:ua,LucideSlidersHorizontal:qv,LucideSlidersVertical:ua,LucideSmartphone:zv,LucideSmartphoneCharging:Sv,LucideSmartphoneNfc:Av,LucideSmile:Vv,LucideSmilePlus:Hv,LucideSnail:jv,LucideSnowflake:Pv,LucideSoapDispenserDroplet:_v,LucideSofa:Rv,LucideSortAsc:at,LucideSortDesc:Y1,LucideSoup:Dv,LucideSpace:Bv,LucideSpade:Fv,LucideSparkle:Tv,LucideSparkles:ka,LucideSpeaker:Ov,LucideSpeech:Ev,LucideSpellCheck:$v,LucideSpellCheck2:Uv,LucideSpline:Nv,LucideSplinePointer:Zv,LucideSplit:Gv,LucideSplitSquareHorizontal:d0,LucideSplitSquareVertical:h0,LucideSpool:Wv,LucideSprayCan:Kv,LucideSprout:Xv,LucideSquare:om,LucideSquareActivity:fa,LucideSquareArrowDown:ma,LucideSquareArrowDownLeft:Ma,LucideSquareArrowDownRight:va,LucideSquareArrowLeft:ga,LucideSquareArrowOutDownLeft:xa,LucideSquareArrowOutDownRight:wa,LucideSquareArrowOutUpLeft:La,LucideSquareArrowOutUpRight:ba,LucideSquareArrowRight:Ia,LucideSquareArrowUp:Aa,LucideSquareArrowUpLeft:Ca,LucideSquareArrowUpRight:qa,LucideSquareAsterisk:Sa,LucideSquareBottomDashedScissors:za,LucideSquareChartGantt:y1,LucideSquareCheck:Va,LucideSquareCheckBig:Ha,LucideSquareChevronDown:ja,LucideSquareChevronLeft:_a,LucideSquareChevronRight:Pa,LucideSquareChevronUp:Ra,LucideSquareCode:Ba,LucideSquareDashed:Ta,LucideSquareDashedBottom:Jv,LucideSquareDashedBottomCode:Qv,LucideSquareDashedKanban:Da,LucideSquareDashedMousePointer:Fa,LucideSquareDashedTopSolid:Yv,LucideSquareDivide:Oa,LucideSquareDot:Ea,LucideSquareEqual:Ua,LucideSquareFunction:Za,LucideSquareGanttChart:y1,LucideSquareKanban:$a,LucideSquareLibrary:Na,LucideSquareM:Ga,LucideSquareMenu:Wa,LucideSquareMinus:Ka,LucideSquareMousePointer:Xa,LucideSquareParking:Ja,LucideSquareParkingOff:Qa,LucideSquarePen:Ue,LucideSquarePercent:Ya,LucideSquarePi:e0,LucideSquarePilcrow:t0,LucideSquarePlay:a0,LucideSquarePlus:c0,LucideSquarePower:o0,LucideSquareRadical:tm,LucideSquareRoundCorner:em,LucideSquareScissors:n0,LucideSquareSigma:r0,LucideSquareSlash:i0,LucideSquareSplitHorizontal:d0,LucideSquareSplitVertical:h0,LucideSquareSquare:am,LucideSquareStack:cm,LucideSquareTerminal:s0,LucideSquareUser:y0,LucideSquareUserRound:l0,LucideSquareX:p0,LucideSquaresExclude:nm,LucideSquaresIntersect:rm,LucideSquaresSubtract:im,LucideSquaresUnite:hm,LucideSquircle:sm,LucideSquircleDashed:dm,LucideSquirrel:lm,LucideStamp:ym,LucideStar:fm,LucideStarHalf:pm,LucideStarOff:um,LucideStars:ka,LucideStepBack:km,LucideStepForward:Mm,LucideStethoscope:vm,LucideSticker:mm,LucideStickyNote:gm,LucideStopCircle:Qt,LucideStore:xm,LucideStretchHorizontal:wm,LucideStretchVertical:Lm,LucideStrikethrough:bm,LucideSubscript:Im,LucideSubtitles:lt,LucideSun:zm,LucideSunDim:Cm,LucideSunMedium:qm,LucideSunMoon:Sm,LucideSunSnow:Am,LucideSunrise:Vm,LucideSunset:Hm,LucideSuperscript:jm,LucideSwatchBook:Pm,LucideSwissFranc:_m,LucideSwitchCamera:Rm,LucideSword:Bm,LucideSwords:Fm,LucideSyringe:Dm,LucideTable:Gm,LucideTable2:Tm,LucideTableCellsMerge:Om,LucideTableCellsSplit:Em,LucideTableColumnsSplit:Um,LucideTableConfig:s1,LucideTableOfContents:$m,LucideTableProperties:Zm,LucideTableRowsSplit:Nm,LucideTablet:Km,LucideTabletSmartphone:Wm,LucideTablets:Xm,LucideTag:Qm,LucideTags:Jm,LucideTally1:Ym,LucideTally2:eg,LucideTally3:tg,LucideTally4:ag,LucideTally5:cg,LucideTangent:og,LucideTarget:ng,LucideTelescope:rg,LucideTent:dg,LucideTentTree:ig,LucideTerminal:hg,LucideTerminalSquare:s0,LucideTestTube:sg,LucideTestTube2:u0,LucideTestTubeDiagonal:u0,LucideTestTubes:lg,LucideText:fg,LucideTextCursor:pg,LucideTextCursorInput:yg,LucideTextQuote:ug,LucideTextSearch:kg,LucideTextSelect:k0,LucideTextSelection:k0,LucideTheater:vg,LucideThermometer:gg,LucideThermometerSnowflake:Mg,LucideThermometerSun:mg,LucideThumbsDown:xg,LucideThumbsUp:wg,LucideTicket:Ag,LucideTicketCheck:Lg,LucideTicketMinus:bg,LucideTicketPercent:Ig,LucideTicketPlus:Cg,LucideTicketSlash:qg,LucideTicketX:Sg,LucideTickets:Hg,LucideTicketsPlane:zg,LucideTimer:Vg,LucideTimerOff:jg,LucideTimerReset:Pg,LucideToggleLeft:_g,LucideToggleRight:Rg,LucideToilet:Bg,LucideToolCase:Dg,LucideTornado:Fg,LucideTorus:Tg,LucideTouchpad:Eg,LucideTouchpadOff:Og,LucideTowerControl:Ug,LucideToyBrick:$g,LucideTractor:Zg,LucideTrafficCone:Ng,LucideTrain:f0,LucideTrainFront:Gg,LucideTrainFrontTunnel:Wg,LucideTrainTrack:Kg,LucideTramFront:f0,LucideTransgender:Xg,LucideTrash:Hc,LucideTrash2:Qg,LucideTreeDeciduous:Jg,LucideTreePalm:M0,LucideTreePine:Yg,LucideTrees:ex,LucideTrello:ax,LucideTrendingDown:tx,LucideTrendingUp:ox,LucideTrendingUpDown:cx,LucideTriangle:ix,LucideTriangleAlert:v0,LucideTriangleDashed:nx,LucideTriangleRight:rx,LucideTrophy:dx,LucideTruck:sx,LucideTruckElectric:hx,LucideTurtle:lx,LucideTv:px,LucideTv2:m0,LucideTvMinimal:m0,LucideTvMinimalPlay:yx,LucideTwitch:ux,LucideTwitter:fx,LucideType:Mx,LucideTypeOutline:kx,LucideUmbrella:gx,LucideUmbrellaOff:vx,LucideUnderline:mx,LucideUndo:bx,LucideUndo2:xx,LucideUndoDot:wx,LucideUnfoldHorizontal:Lx,LucideUnfoldVertical:Ix,LucideUngroup:Cx,LucideUniversity:g0,LucideUnlink:Sx,LucideUnlink2:qx,LucideUnlock:T2,LucideUnlockKeyhole:F2,LucideUnplug:Ax,LucideUpload:zx,LucideUploadCloud:o2,LucideUsb:Hx,LucideUser:Vc,LucideUser2:C0,LucideUserCheck:Vx,LucideUserCheck2:w0,LucideUserCircle:Jt,LucideUserCircle2:Yt,LucideUserCog:jx,LucideUserCog2:x0,LucideUserLock:Px,LucideUserMinus:_x,LucideUserMinus2:L0,LucideUserPen:Rx,LucideUserPlus:Bx,LucideUserPlus2:b0,LucideUserRound:C0,LucideUserRoundCheck:w0,LucideUserRoundCog:x0,LucideUserRoundMinus:L0,LucideUserRoundPen:Dx,LucideUserRoundPlus:b0,LucideUserRoundSearch:Fx,LucideUserRoundX:I0,LucideUserSearch:Ox,LucideUserSquare:y0,LucideUserSquare2:l0,LucideUserX:Tx,LucideUserX2:I0,LucideUsers:Ex,LucideUsers2:q0,LucideUsersRound:q0,LucideUtensils:A0,LucideUtensilsCrossed:S0,LucideUtilityPole:Ux,LucideVariable:$x,LucideVault:Zx,LucideVectorSquare:Nx,LucideVegan:Gx,LucideVenetianMask:Wx,LucideVenus:Qx,LucideVenusAndMars:Kx,LucideVerified:nt,LucideVibrate:Jx,LucideVibrateOff:Xx,LucideVideo:ew,LucideVideoOff:Yx,LucideVideotape:tw,LucideView:aw,LucideVoicemail:cw,LucideVolleyball:ow,LucideVolume:hw,LucideVolume1:nw,LucideVolume2:iw,LucideVolumeOff:rw,LucideVolumeX:dw,LucideVote:sw,LucideWallet:yw,LucideWallet2:z0,LucideWalletCards:lw,LucideWalletMinimal:z0,LucideWallpaper:pw,LucideWand:uw,LucideWand2:H0,LucideWandSparkles:H0,LucideWarehouse:kw,LucideWashingMachine:fw,LucideWatch:vw,LucideWaves:mw,LucideWavesLadder:Mw,LucideWaypoints:gw,LucideWebcam:xw,LucideWebhook:Lw,LucideWebhookOff:ww,LucideWeight:bw,LucideWheat:Cw,LucideWheatOff:Iw,LucideWholeWord:qw,LucideWifi:Pw,LucideWifiCog:Sw,LucideWifiHigh:Aw,LucideWifiLow:zw,LucideWifiOff:Hw,LucideWifiPen:Vw,LucideWifiZero:jw,LucideWind:Rw,LucideWindArrowDown:_w,LucideWine:Dw,LucideWineOff:Bw,LucideWorkflow:Fw,LucideWorm:Tw,LucideWrapText:Ow,LucideWrench:Ew,LucideX:jc,LucideXCircle:e2,LucideXOctagon:G2,LucideXSquare:p0,LucideYoutube:Uw,LucideZap:Zw,LucideZapOff:$w,LucideZoomIn:Nw,LucideZoomOut:Gw,Luggage:P3,LuggageIcon:P3,MSquare:Ga,MSquareIcon:Ga,Magnet:_3,MagnetIcon:_3,Mail:$3,MailCheck:R3,MailCheckIcon:R3,MailIcon:$3,MailMinus:B3,MailMinusIcon:B3,MailOpen:D3,MailOpenIcon:D3,MailPlus:F3,MailPlusIcon:F3,MailQuestion:O2,MailQuestionIcon:O2,MailQuestionMark:O2,MailQuestionMarkIcon:O2,MailSearch:T3,MailSearchIcon:T3,MailWarning:O3,MailWarningIcon:O3,MailX:E3,MailXIcon:E3,Mailbox:U3,MailboxIcon:U3,Mails:Z3,MailsIcon:Z3,Map:n6,MapIcon:n6,MapPin:t6,MapPinCheck:G3,MapPinCheckIcon:G3,MapPinCheckInside:N3,MapPinCheckInsideIcon:N3,MapPinHouse:W3,MapPinHouseIcon:W3,MapPinIcon:t6,MapPinMinus:K3,MapPinMinusIcon:K3,MapPinMinusInside:Q3,MapPinMinusInsideIcon:Q3,MapPinOff:X3,MapPinOffIcon:X3,MapPinPlus:Y3,MapPinPlusIcon:Y3,MapPinPlusInside:J3,MapPinPlusInsideIcon:J3,MapPinX:a6,MapPinXIcon:a6,MapPinXInside:e6,MapPinXInsideIcon:e6,MapPinned:c6,MapPinnedIcon:c6,MapPlus:o6,MapPlusIcon:o6,Mars:d6,MarsIcon:d6,MarsStroke:r6,MarsStrokeIcon:r6,Martini:i6,MartiniIcon:i6,Maximize:s6,Maximize2:h6,Maximize2Icon:h6,MaximizeIcon:s6,Medal:l6,MedalIcon:l6,Megaphone:p6,MegaphoneIcon:p6,MegaphoneOff:y6,MegaphoneOffIcon:y6,Meh:u6,MehIcon:u6,MemoryStick:k6,MemoryStickIcon:k6,Menu:f6,MenuIcon:f6,MenuSquare:Wa,MenuSquareIcon:Wa,Merge:M6,MergeIcon:M6,MessageCircle:q6,MessageCircleCode:v6,MessageCircleCodeIcon:v6,MessageCircleDashed:m6,MessageCircleDashedIcon:m6,MessageCircleHeart:g6,MessageCircleHeartIcon:g6,MessageCircleIcon:q6,MessageCircleMore:x6,MessageCircleMoreIcon:x6,MessageCircleOff:w6,MessageCircleOffIcon:w6,MessageCirclePlus:L6,MessageCirclePlusIcon:L6,MessageCircleQuestion:E2,MessageCircleQuestionIcon:E2,MessageCircleQuestionMark:E2,MessageCircleQuestionMarkIcon:E2,MessageCircleReply:b6,MessageCircleReplyIcon:b6,MessageCircleWarning:I6,MessageCircleWarningIcon:I6,MessageCircleX:C6,MessageCircleXIcon:C6,MessageSquare:U6,MessageSquareCode:S6,MessageSquareCodeIcon:S6,MessageSquareDashed:A6,MessageSquareDashedIcon:A6,MessageSquareDiff:z6,MessageSquareDiffIcon:z6,MessageSquareDot:H6,MessageSquareDotIcon:H6,MessageSquareHeart:V6,MessageSquareHeartIcon:V6,MessageSquareIcon:U6,MessageSquareLock:j6,MessageSquareLockIcon:j6,MessageSquareMore:P6,MessageSquareMoreIcon:P6,MessageSquareOff:_6,MessageSquareOffIcon:_6,MessageSquarePlus:R6,MessageSquarePlusIcon:R6,MessageSquareQuote:B6,MessageSquareQuoteIcon:B6,MessageSquareReply:F6,MessageSquareReplyIcon:F6,MessageSquareShare:D6,MessageSquareShareIcon:D6,MessageSquareText:T6,MessageSquareTextIcon:T6,MessageSquareWarning:O6,MessageSquareWarningIcon:O6,MessageSquareX:E6,MessageSquareXIcon:E6,MessagesSquare:$6,MessagesSquareIcon:$6,Mic:N6,Mic2:U2,Mic2Icon:U2,MicIcon:N6,MicOff:Z6,MicOffIcon:Z6,MicVocal:U2,MicVocalIcon:U2,Microchip:G6,MicrochipIcon:G6,Microscope:W6,MicroscopeIcon:W6,Microwave:K6,MicrowaveIcon:K6,Milestone:X6,MilestoneIcon:X6,Milk:J6,MilkIcon:J6,MilkOff:Q6,MilkOffIcon:Q6,Minimize:e8,Minimize2:Y6,Minimize2Icon:Y6,MinimizeIcon:e8,Minus:t8,MinusCircle:Et,MinusCircleIcon:Et,MinusIcon:t8,MinusSquare:Ka,MinusSquareIcon:Ka,Monitor:u8,MonitorCheck:a8,MonitorCheckIcon:a8,MonitorCog:c8,MonitorCogIcon:c8,MonitorDot:o8,MonitorDotIcon:o8,MonitorDown:n8,MonitorDownIcon:n8,MonitorIcon:u8,MonitorOff:r8,MonitorOffIcon:r8,MonitorPause:i8,MonitorPauseIcon:i8,MonitorPlay:d8,MonitorPlayIcon:d8,MonitorSmartphone:h8,MonitorSmartphoneIcon:h8,MonitorSpeaker:s8,MonitorSpeakerIcon:s8,MonitorStop:l8,MonitorStopIcon:l8,MonitorUp:y8,MonitorUpIcon:y8,MonitorX:p8,MonitorXIcon:p8,Moon:k8,MoonIcon:k8,MoonStar:f8,MoonStarIcon:f8,MoreHorizontal:y2,MoreHorizontalIcon:y2,MoreVertical:l2,MoreVerticalIcon:l2,Mountain:v8,MountainIcon:v8,MountainSnow:M8,MountainSnowIcon:M8,Mouse:b8,MouseIcon:b8,MouseOff:m8,MouseOffIcon:m8,MousePointer:L8,MousePointer2:g8,MousePointer2Icon:g8,MousePointerBan:x8,MousePointerBanIcon:x8,MousePointerClick:w8,MousePointerClickIcon:w8,MousePointerIcon:L8,MousePointerSquareDashed:Fa,MousePointerSquareDashedIcon:Fa,Move:B8,Move3D:$2,Move3DIcon:$2,Move3d:$2,Move3dIcon:$2,MoveDiagonal:C8,MoveDiagonal2:I8,MoveDiagonal2Icon:I8,MoveDiagonalIcon:C8,MoveDown:A8,MoveDownIcon:A8,MoveDownLeft:q8,MoveDownLeftIcon:q8,MoveDownRight:S8,MoveDownRightIcon:S8,MoveHorizontal:z8,MoveHorizontalIcon:z8,MoveIcon:B8,MoveLeft:H8,MoveLeftIcon:H8,MoveRight:V8,MoveRightIcon:V8,MoveUp:_8,MoveUpIcon:_8,MoveUpLeft:P8,MoveUpLeftIcon:P8,MoveUpRight:j8,MoveUpRightIcon:j8,MoveVertical:R8,MoveVerticalIcon:R8,Music:O8,Music2:D8,Music2Icon:D8,Music3:F8,Music3Icon:F8,Music4:T8,Music4Icon:T8,MusicIcon:O8,Navigation:Z8,Navigation2:U8,Navigation2Icon:U8,Navigation2Off:E8,Navigation2OffIcon:E8,NavigationIcon:Z8,NavigationOff:$8,NavigationOffIcon:$8,Network:G8,NetworkIcon:G8,Newspaper:N8,NewspaperIcon:N8,Nfc:W8,NfcIcon:W8,NonBinary:K8,NonBinaryIcon:K8,Notebook:Y8,NotebookIcon:Y8,NotebookPen:X8,NotebookPenIcon:X8,NotebookTabs:Q8,NotebookTabsIcon:Q8,NotebookText:J8,NotebookTextIcon:J8,NotepadText:t7,NotepadTextDashed:e7,NotepadTextDashedIcon:e7,NotepadTextIcon:t7,Nut:c7,NutIcon:c7,NutOff:a7,NutOffIcon:a7,Octagon:n7,OctagonAlert:Z2,OctagonAlertIcon:Z2,OctagonIcon:n7,OctagonMinus:o7,OctagonMinusIcon:o7,OctagonPause:N2,OctagonPauseIcon:N2,OctagonX:G2,OctagonXIcon:G2,Omega:r7,OmegaIcon:r7,Option:i7,OptionIcon:i7,Orbit:d7,OrbitIcon:d7,Origami:h7,OrigamiIcon:h7,Outdent:P2,OutdentIcon:P2,Package:M7,Package2:s7,Package2Icon:s7,PackageCheck:l7,PackageCheckIcon:l7,PackageIcon:M7,PackageMinus:y7,PackageMinusIcon:y7,PackageOpen:p7,PackageOpenIcon:p7,PackagePlus:u7,PackagePlusIcon:u7,PackageSearch:k7,PackageSearchIcon:k7,PackageX:f7,PackageXIcon:f7,PaintBucket:v7,PaintBucketIcon:v7,PaintRoller:m7,PaintRollerIcon:m7,Paintbrush:g7,Paintbrush2:W2,Paintbrush2Icon:W2,PaintbrushIcon:g7,PaintbrushVertical:W2,PaintbrushVerticalIcon:W2,Palette:x7,PaletteIcon:x7,Palmtree:M0,PalmtreeIcon:M0,Panda:w7,PandaIcon:w7,PanelBottom:I7,PanelBottomClose:L7,PanelBottomCloseIcon:L7,PanelBottomDashed:K2,PanelBottomDashedIcon:K2,PanelBottomIcon:I7,PanelBottomInactive:K2,PanelBottomInactiveIcon:K2,PanelBottomOpen:b7,PanelBottomOpenIcon:b7,PanelLeft:Y2,PanelLeftClose:X2,PanelLeftCloseIcon:X2,PanelLeftDashed:Q2,PanelLeftDashedIcon:Q2,PanelLeftIcon:Y2,PanelLeftInactive:Q2,PanelLeftInactiveIcon:Q2,PanelLeftOpen:J2,PanelLeftOpenIcon:J2,PanelRight:S7,PanelRightClose:C7,PanelRightCloseIcon:C7,PanelRightDashed:ea,PanelRightDashedIcon:ea,PanelRightIcon:S7,PanelRightInactive:ea,PanelRightInactiveIcon:ea,PanelRightOpen:q7,PanelRightOpenIcon:q7,PanelTop:H7,PanelTopClose:A7,PanelTopCloseIcon:A7,PanelTopDashed:ta,PanelTopDashedIcon:ta,PanelTopIcon:H7,PanelTopInactive:ta,PanelTopInactiveIcon:ta,PanelTopOpen:z7,PanelTopOpenIcon:z7,PanelsLeftBottom:V7,PanelsLeftBottomIcon:V7,PanelsLeftRight:i2,PanelsLeftRightIcon:i2,PanelsRightBottom:j7,PanelsRightBottomIcon:j7,PanelsTopBottom:ha,PanelsTopBottomIcon:ha,PanelsTopLeft:aa,PanelsTopLeftIcon:aa,Paperclip:P7,PaperclipIcon:P7,Parentheses:_7,ParenthesesIcon:_7,ParkingCircle:$t,ParkingCircleIcon:$t,ParkingCircleOff:Ut,ParkingCircleOffIcon:Ut,ParkingMeter:R7,ParkingMeterIcon:R7,ParkingSquare:Ja,ParkingSquareIcon:Ja,ParkingSquareOff:Qa,ParkingSquareOffIcon:Qa,PartyPopper:B7,PartyPopperIcon:B7,Pause:D7,PauseCircle:Zt,PauseCircleIcon:Zt,PauseIcon:D7,PauseOctagon:N2,PauseOctagonIcon:N2,PawPrint:F7,PawPrintIcon:F7,PcCase:T7,PcCaseIcon:T7,Pen:oa,PenBox:Ue,PenBoxIcon:Ue,PenIcon:oa,PenLine:ca,PenLineIcon:ca,PenOff:O7,PenOffIcon:O7,PenSquare:Ue,PenSquareIcon:Ue,PenTool:E7,PenToolIcon:E7,Pencil:J0,PencilIcon:J0,PencilLine:U7,PencilLineIcon:U7,PencilOff:$7,PencilOffIcon:$7,PencilRuler:Z7,PencilRulerIcon:Z7,Pentagon:N7,PentagonIcon:N7,Percent:G7,PercentCircle:Nt,PercentCircleIcon:Nt,PercentDiamond:h2,PercentDiamondIcon:h2,PercentIcon:G7,PercentSquare:Ya,PercentSquareIcon:Ya,PersonStanding:W7,PersonStandingIcon:W7,PhilippinePeso:K7,PhilippinePesoIcon:K7,Phone:af,PhoneCall:X7,PhoneCallIcon:X7,PhoneForwarded:Q7,PhoneForwardedIcon:Q7,PhoneIcon:af,PhoneIncoming:J7,PhoneIncomingIcon:J7,PhoneMissed:Y7,PhoneMissedIcon:Y7,PhoneOff:ef,PhoneOffIcon:ef,PhoneOutgoing:tf,PhoneOutgoingIcon:tf,Pi:cf,PiIcon:cf,PiSquare:e0,PiSquareIcon:e0,Piano:of,PianoIcon:of,Pickaxe:nf,PickaxeIcon:nf,PictureInPicture:df,PictureInPicture2:rf,PictureInPicture2Icon:rf,PictureInPictureIcon:df,PieChart:Lt,PieChartIcon:Lt,PiggyBank:hf,PiggyBankIcon:hf,Pilcrow:yf,PilcrowIcon:yf,PilcrowLeft:sf,PilcrowLeftIcon:sf,PilcrowRight:lf,PilcrowRightIcon:lf,PilcrowSquare:t0,PilcrowSquareIcon:t0,Pill:pf,PillBottle:uf,PillBottleIcon:uf,PillIcon:pf,Pin:ff,PinIcon:ff,PinOff:kf,PinOffIcon:kf,Pipette:Mf,PipetteIcon:Mf,Pizza:vf,PizzaIcon:vf,Plane:xf,PlaneIcon:xf,PlaneLanding:mf,PlaneLandingIcon:mf,PlaneTakeoff:gf,PlaneTakeoffIcon:gf,Play:wf,PlayCircle:Gt,PlayCircleIcon:Gt,PlayIcon:wf,PlaySquare:a0,PlaySquareIcon:a0,Plug:bf,Plug2:Lf,Plug2Icon:Lf,PlugIcon:bf,PlugZap:na,PlugZap2:na,PlugZap2Icon:na,PlugZapIcon:na,Plus:Y0,PlusCircle:Wt,PlusCircleIcon:Wt,PlusIcon:Y0,PlusSquare:c0,PlusSquareIcon:c0,Pocket:Cf,PocketIcon:Cf,PocketKnife:If,PocketKnifeIcon:If,Podcast:qf,PodcastIcon:qf,Pointer:Af,PointerIcon:Af,PointerOff:Sf,PointerOffIcon:Sf,Popcorn:zf,PopcornIcon:zf,Popsicle:Hf,PopsicleIcon:Hf,PoundSterling:Vf,PoundSterlingIcon:Vf,Power:Pf,PowerCircle:Kt,PowerCircleIcon:Kt,PowerIcon:Pf,PowerOff:jf,PowerOffIcon:jf,PowerSquare:o0,PowerSquareIcon:o0,Presentation:_f,PresentationIcon:_f,Printer:Bf,PrinterCheck:Rf,PrinterCheckIcon:Rf,PrinterIcon:Bf,Projector:Df,ProjectorIcon:Df,Proportions:Ff,ProportionsIcon:Ff,Puzzle:Tf,PuzzleIcon:Tf,Pyramid:Of,PyramidIcon:Of,QrCode:Ef,QrCodeIcon:Ef,Quote:Uf,QuoteIcon:Uf,Rabbit:$f,RabbitIcon:$f,Radar:Zf,RadarIcon:Zf,Radiation:Nf,RadiationIcon:Nf,Radical:Gf,RadicalIcon:Gf,Radio:Xf,RadioIcon:Xf,RadioReceiver:Wf,RadioReceiverIcon:Wf,RadioTower:Kf,RadioTowerIcon:Kf,Radius:Qf,RadiusIcon:Qf,RailSymbol:Jf,RailSymbolIcon:Jf,Rainbow:Yf,RainbowIcon:Yf,Rat:e9,RatIcon:e9,Ratio:t9,RatioIcon:t9,Receipt:s9,ReceiptCent:a9,ReceiptCentIcon:a9,ReceiptEuro:c9,ReceiptEuroIcon:c9,ReceiptIcon:s9,ReceiptIndianRupee:n9,ReceiptIndianRupeeIcon:n9,ReceiptJapaneseYen:o9,ReceiptJapaneseYenIcon:o9,ReceiptPoundSterling:r9,ReceiptPoundSterlingIcon:r9,ReceiptRussianRuble:i9,ReceiptRussianRubleIcon:i9,ReceiptSwissFranc:d9,ReceiptSwissFrancIcon:d9,ReceiptText:h9,ReceiptTextIcon:h9,RectangleCircle:l9,RectangleCircleIcon:l9,RectangleEllipsis:ra,RectangleEllipsisIcon:ra,RectangleGoggles:y9,RectangleGogglesIcon:y9,RectangleHorizontal:p9,RectangleHorizontalIcon:p9,RectangleVertical:u9,RectangleVerticalIcon:u9,Recycle:k9,RecycleIcon:k9,Redo:v9,Redo2:f9,Redo2Icon:f9,RedoDot:M9,RedoDotIcon:M9,RedoIcon:v9,RefreshCcw:g9,RefreshCcwDot:m9,RefreshCcwDotIcon:m9,RefreshCcwIcon:g9,RefreshCw:w9,RefreshCwIcon:w9,RefreshCwOff:x9,RefreshCwOffIcon:x9,Refrigerator:L9,RefrigeratorIcon:L9,Regex:b9,RegexIcon:b9,RemoveFormatting:I9,RemoveFormattingIcon:I9,Repeat:q9,Repeat1:C9,Repeat1Icon:C9,Repeat2:S9,Repeat2Icon:S9,RepeatIcon:q9,Replace:z9,ReplaceAll:A9,ReplaceAllIcon:A9,ReplaceIcon:z9,Reply:V9,ReplyAll:H9,ReplyAllIcon:H9,ReplyIcon:V9,Rewind:j9,RewindIcon:j9,Ribbon:P9,RibbonIcon:P9,Rocket:_9,RocketIcon:_9,RockingChair:R9,RockingChairIcon:R9,RollerCoaster:B9,RollerCoasterIcon:B9,Rotate3D:ia,Rotate3DIcon:ia,Rotate3d:ia,Rotate3dIcon:ia,RotateCcw:T9,RotateCcwIcon:T9,RotateCcwKey:D9,RotateCcwKeyIcon:D9,RotateCcwSquare:F9,RotateCcwSquareIcon:F9,RotateCw:E9,RotateCwIcon:E9,RotateCwSquare:O9,RotateCwSquareIcon:O9,Route:$9,RouteIcon:$9,RouteOff:U9,RouteOffIcon:U9,Router:Z9,RouterIcon:Z9,Rows:da,Rows2:da,Rows2Icon:da,Rows3:ha,Rows3Icon:ha,Rows4:N9,Rows4Icon:N9,RowsIcon:da,Rss:G9,RssIcon:G9,Ruler:K9,RulerDimensionLine:W9,RulerDimensionLineIcon:W9,RulerIcon:K9,RussianRuble:X9,RussianRubleIcon:X9,Sailboat:Q9,SailboatIcon:Q9,Salad:J9,SaladIcon:J9,Sandwich:Y9,SandwichIcon:Y9,Satellite:eM,SatelliteDish:tM,SatelliteDishIcon:tM,SatelliteIcon:eM,SaudiRiyal:aM,SaudiRiyalIcon:aM,Save:nM,SaveAll:cM,SaveAllIcon:cM,SaveIcon:nM,SaveOff:oM,SaveOffIcon:oM,Scale:rM,Scale3D:sa,Scale3DIcon:sa,Scale3d:sa,Scale3dIcon:sa,ScaleIcon:rM,Scaling:iM,ScalingIcon:iM,Scan:fM,ScanBarcode:hM,ScanBarcodeIcon:hM,ScanEye:dM,ScanEyeIcon:dM,ScanFace:sM,ScanFaceIcon:sM,ScanHeart:lM,ScanHeartIcon:lM,ScanIcon:fM,ScanLine:yM,ScanLineIcon:yM,ScanQrCode:pM,ScanQrCodeIcon:pM,ScanSearch:uM,ScanSearchIcon:uM,ScanText:kM,ScanTextIcon:kM,ScatterChart:bt,ScatterChartIcon:bt,School:MM,School2:g0,School2Icon:g0,SchoolIcon:MM,Scissors:gM,ScissorsIcon:gM,ScissorsLineDashed:vM,ScissorsLineDashedIcon:vM,ScissorsSquare:n0,ScissorsSquareDashedBottom:za,ScissorsSquareDashedBottomIcon:za,ScissorsSquareIcon:n0,ScreenShare:xM,ScreenShareIcon:xM,ScreenShareOff:mM,ScreenShareOffIcon:mM,Scroll:wM,ScrollIcon:wM,ScrollText:LM,ScrollTextIcon:LM,Search:Sc,SearchCheck:bM,SearchCheckIcon:bM,SearchCode:IM,SearchCodeIcon:IM,SearchIcon:Sc,SearchSlash:qM,SearchSlashIcon:qM,SearchX:CM,SearchXIcon:CM,Section:SM,SectionIcon:SM,Send:zM,SendHorizonal:la,SendHorizonalIcon:la,SendHorizontal:la,SendHorizontalIcon:la,SendIcon:zM,SendToBack:AM,SendToBackIcon:AM,SeparatorHorizontal:HM,SeparatorHorizontalIcon:HM,SeparatorVertical:VM,SeparatorVerticalIcon:VM,Server:RM,ServerCog:PM,ServerCogIcon:PM,ServerCrash:jM,ServerCrashIcon:jM,ServerIcon:RM,ServerOff:_M,ServerOffIcon:_M,Settings:Ac,Settings2:BM,Settings2Icon:BM,SettingsIcon:Ac,Shapes:DM,ShapesIcon:DM,Share:TM,Share2:FM,Share2Icon:FM,ShareIcon:TM,Sheet:OM,SheetIcon:OM,Shell:EM,ShellIcon:EM,Shield:QM,ShieldAlert:UM,ShieldAlertIcon:UM,ShieldBan:$M,ShieldBanIcon:$M,ShieldCheck:zc,ShieldCheckIcon:zc,ShieldClose:pa,ShieldCloseIcon:pa,ShieldEllipsis:ZM,ShieldEllipsisIcon:ZM,ShieldHalf:NM,ShieldHalfIcon:NM,ShieldIcon:QM,ShieldMinus:GM,ShieldMinusIcon:GM,ShieldOff:WM,ShieldOffIcon:WM,ShieldPlus:KM,ShieldPlusIcon:KM,ShieldQuestion:ya,ShieldQuestionIcon:ya,ShieldQuestionMark:ya,ShieldQuestionMarkIcon:ya,ShieldUser:XM,ShieldUserIcon:XM,ShieldX:pa,ShieldXIcon:pa,Ship:ev,ShipIcon:ev,ShipWheel:JM,ShipWheelIcon:JM,Shirt:YM,ShirtIcon:YM,ShoppingBag:tv,ShoppingBagIcon:tv,ShoppingBasket:av,ShoppingBasketIcon:av,ShoppingCart:cv,ShoppingCartIcon:cv,Shovel:nv,ShovelIcon:nv,ShowerHead:ov,ShowerHeadIcon:ov,Shredder:iv,ShredderIcon:iv,Shrimp:rv,ShrimpIcon:rv,Shrink:dv,ShrinkIcon:dv,Shrub:lv,ShrubIcon:lv,Shuffle:hv,ShuffleIcon:hv,Sidebar:Y2,SidebarClose:X2,SidebarCloseIcon:X2,SidebarIcon:Y2,SidebarOpen:J2,SidebarOpenIcon:J2,Sigma:sv,SigmaIcon:sv,SigmaSquare:r0,SigmaSquareIcon:r0,Signal:fv,SignalHigh:yv,SignalHighIcon:yv,SignalIcon:fv,SignalLow:pv,SignalLowIcon:pv,SignalMedium:kv,SignalMediumIcon:kv,SignalZero:uv,SignalZeroIcon:uv,Signature:Mv,SignatureIcon:Mv,Signpost:mv,SignpostBig:vv,SignpostBigIcon:vv,SignpostIcon:mv,Siren:gv,SirenIcon:gv,SkipBack:xv,SkipBackIcon:xv,SkipForward:wv,SkipForwardIcon:wv,Skull:Lv,SkullIcon:Lv,Slack:bv,SlackIcon:bv,Slash:Iv,SlashIcon:Iv,SlashSquare:i0,SlashSquareIcon:i0,Slice:Cv,SliceIcon:Cv,Sliders:ua,SlidersHorizontal:qv,SlidersHorizontalIcon:qv,SlidersIcon:ua,SlidersVertical:ua,SlidersVerticalIcon:ua,Smartphone:zv,SmartphoneCharging:Sv,SmartphoneChargingIcon:Sv,SmartphoneIcon:zv,SmartphoneNfc:Av,SmartphoneNfcIcon:Av,Smile:Vv,SmileIcon:Vv,SmilePlus:Hv,SmilePlusIcon:Hv,Snail:jv,SnailIcon:jv,Snowflake:Pv,SnowflakeIcon:Pv,SoapDispenserDroplet:_v,SoapDispenserDropletIcon:_v,Sofa:Rv,SofaIcon:Rv,SortAsc:at,SortAscIcon:at,SortDesc:Y1,SortDescIcon:Y1,Soup:Dv,SoupIcon:Dv,Space:Bv,SpaceIcon:Bv,Spade:Fv,SpadeIcon:Fv,Sparkle:Tv,SparkleIcon:Tv,Sparkles:ka,SparklesIcon:ka,Speaker:Ov,SpeakerIcon:Ov,Speech:Ev,SpeechIcon:Ev,SpellCheck:$v,SpellCheck2:Uv,SpellCheck2Icon:Uv,SpellCheckIcon:$v,Spline:Nv,SplineIcon:Nv,SplinePointer:Zv,SplinePointerIcon:Zv,Split:Gv,SplitIcon:Gv,SplitSquareHorizontal:d0,SplitSquareHorizontalIcon:d0,SplitSquareVertical:h0,SplitSquareVerticalIcon:h0,Spool:Wv,SpoolIcon:Wv,SprayCan:Kv,SprayCanIcon:Kv,Sprout:Xv,SproutIcon:Xv,Square:om,SquareActivity:fa,SquareActivityIcon:fa,SquareArrowDown:ma,SquareArrowDownIcon:ma,SquareArrowDownLeft:Ma,SquareArrowDownLeftIcon:Ma,SquareArrowDownRight:va,SquareArrowDownRightIcon:va,SquareArrowLeft:ga,SquareArrowLeftIcon:ga,SquareArrowOutDownLeft:xa,SquareArrowOutDownLeftIcon:xa,SquareArrowOutDownRight:wa,SquareArrowOutDownRightIcon:wa,SquareArrowOutUpLeft:La,SquareArrowOutUpLeftIcon:La,SquareArrowOutUpRight:ba,SquareArrowOutUpRightIcon:ba,SquareArrowRight:Ia,SquareArrowRightIcon:Ia,SquareArrowUp:Aa,SquareArrowUpIcon:Aa,SquareArrowUpLeft:Ca,SquareArrowUpLeftIcon:Ca,SquareArrowUpRight:qa,SquareArrowUpRightIcon:qa,SquareAsterisk:Sa,SquareAsteriskIcon:Sa,SquareBottomDashedScissors:za,SquareBottomDashedScissorsIcon:za,SquareChartGantt:y1,SquareChartGanttIcon:y1,SquareCheck:Va,SquareCheckBig:Ha,SquareCheckBigIcon:Ha,SquareCheckIcon:Va,SquareChevronDown:ja,SquareChevronDownIcon:ja,SquareChevronLeft:_a,SquareChevronLeftIcon:_a,SquareChevronRight:Pa,SquareChevronRightIcon:Pa,SquareChevronUp:Ra,SquareChevronUpIcon:Ra,SquareCode:Ba,SquareCodeIcon:Ba,SquareDashed:Ta,SquareDashedBottom:Jv,SquareDashedBottomCode:Qv,SquareDashedBottomCodeIcon:Qv,SquareDashedBottomIcon:Jv,SquareDashedIcon:Ta,SquareDashedKanban:Da,SquareDashedKanbanIcon:Da,SquareDashedMousePointer:Fa,SquareDashedMousePointerIcon:Fa,SquareDashedTopSolid:Yv,SquareDashedTopSolidIcon:Yv,SquareDivide:Oa,SquareDivideIcon:Oa,SquareDot:Ea,SquareDotIcon:Ea,SquareEqual:Ua,SquareEqualIcon:Ua,SquareFunction:Za,SquareFunctionIcon:Za,SquareGanttChart:y1,SquareGanttChartIcon:y1,SquareIcon:om,SquareKanban:$a,SquareKanbanIcon:$a,SquareLibrary:Na,SquareLibraryIcon:Na,SquareM:Ga,SquareMIcon:Ga,SquareMenu:Wa,SquareMenuIcon:Wa,SquareMinus:Ka,SquareMinusIcon:Ka,SquareMousePointer:Xa,SquareMousePointerIcon:Xa,SquareParking:Ja,SquareParkingIcon:Ja,SquareParkingOff:Qa,SquareParkingOffIcon:Qa,SquarePen:Ue,SquarePenIcon:Ue,SquarePercent:Ya,SquarePercentIcon:Ya,SquarePi:e0,SquarePiIcon:e0,SquarePilcrow:t0,SquarePilcrowIcon:t0,SquarePlay:a0,SquarePlayIcon:a0,SquarePlus:c0,SquarePlusIcon:c0,SquarePower:o0,SquarePowerIcon:o0,SquareRadical:tm,SquareRadicalIcon:tm,SquareRoundCorner:em,SquareRoundCornerIcon:em,SquareScissors:n0,SquareScissorsIcon:n0,SquareSigma:r0,SquareSigmaIcon:r0,SquareSlash:i0,SquareSlashIcon:i0,SquareSplitHorizontal:d0,SquareSplitHorizontalIcon:d0,SquareSplitVertical:h0,SquareSplitVerticalIcon:h0,SquareSquare:am,SquareSquareIcon:am,SquareStack:cm,SquareStackIcon:cm,SquareTerminal:s0,SquareTerminalIcon:s0,SquareUser:y0,SquareUserIcon:y0,SquareUserRound:l0,SquareUserRoundIcon:l0,SquareX:p0,SquareXIcon:p0,SquaresExclude:nm,SquaresExcludeIcon:nm,SquaresIntersect:rm,SquaresIntersectIcon:rm,SquaresSubtract:im,SquaresSubtractIcon:im,SquaresUnite:hm,SquaresUniteIcon:hm,Squircle:sm,SquircleDashed:dm,SquircleDashedIcon:dm,SquircleIcon:sm,Squirrel:lm,SquirrelIcon:lm,Stamp:ym,StampIcon:ym,Star:fm,StarHalf:pm,StarHalfIcon:pm,StarIcon:fm,StarOff:um,StarOffIcon:um,Stars:ka,StarsIcon:ka,StepBack:km,StepBackIcon:km,StepForward:Mm,StepForwardIcon:Mm,Stethoscope:vm,StethoscopeIcon:vm,Sticker:mm,StickerIcon:mm,StickyNote:gm,StickyNoteIcon:gm,StopCircle:Qt,StopCircleIcon:Qt,Store:xm,StoreIcon:xm,StretchHorizontal:wm,StretchHorizontalIcon:wm,StretchVertical:Lm,StretchVerticalIcon:Lm,Strikethrough:bm,StrikethroughIcon:bm,Subscript:Im,SubscriptIcon:Im,Subtitles:lt,SubtitlesIcon:lt,Sun:zm,SunDim:Cm,SunDimIcon:Cm,SunIcon:zm,SunMedium:qm,SunMediumIcon:qm,SunMoon:Sm,SunMoonIcon:Sm,SunSnow:Am,SunSnowIcon:Am,Sunrise:Vm,SunriseIcon:Vm,Sunset:Hm,SunsetIcon:Hm,Superscript:jm,SuperscriptIcon:jm,SwatchBook:Pm,SwatchBookIcon:Pm,SwissFranc:_m,SwissFrancIcon:_m,SwitchCamera:Rm,SwitchCameraIcon:Rm,Sword:Bm,SwordIcon:Bm,Swords:Fm,SwordsIcon:Fm,Syringe:Dm,SyringeIcon:Dm,Table:Gm,Table2:Tm,Table2Icon:Tm,TableCellsMerge:Om,TableCellsMergeIcon:Om,TableCellsSplit:Em,TableCellsSplitIcon:Em,TableColumnsSplit:Um,TableColumnsSplitIcon:Um,TableConfig:s1,TableConfigIcon:s1,TableIcon:Gm,TableOfContents:$m,TableOfContentsIcon:$m,TableProperties:Zm,TablePropertiesIcon:Zm,TableRowsSplit:Nm,TableRowsSplitIcon:Nm,Tablet:Km,TabletIcon:Km,TabletSmartphone:Wm,TabletSmartphoneIcon:Wm,Tablets:Xm,TabletsIcon:Xm,Tag:Qm,TagIcon:Qm,Tags:Jm,TagsIcon:Jm,Tally1:Ym,Tally1Icon:Ym,Tally2:eg,Tally2Icon:eg,Tally3:tg,Tally3Icon:tg,Tally4:ag,Tally4Icon:ag,Tally5:cg,Tally5Icon:cg,Tangent:og,TangentIcon:og,Target:ng,TargetIcon:ng,Telescope:rg,TelescopeIcon:rg,Tent:dg,TentIcon:dg,TentTree:ig,TentTreeIcon:ig,Terminal:hg,TerminalIcon:hg,TerminalSquare:s0,TerminalSquareIcon:s0,TestTube:sg,TestTube2:u0,TestTube2Icon:u0,TestTubeDiagonal:u0,TestTubeDiagonalIcon:u0,TestTubeIcon:sg,TestTubes:lg,TestTubesIcon:lg,Text:fg,TextCursor:pg,TextCursorIcon:pg,TextCursorInput:yg,TextCursorInputIcon:yg,TextIcon:fg,TextQuote:ug,TextQuoteIcon:ug,TextSearch:kg,TextSearchIcon:kg,TextSelect:k0,TextSelectIcon:k0,TextSelection:k0,TextSelectionIcon:k0,Theater:vg,TheaterIcon:vg,Thermometer:gg,ThermometerIcon:gg,ThermometerSnowflake:Mg,ThermometerSnowflakeIcon:Mg,ThermometerSun:mg,ThermometerSunIcon:mg,ThumbsDown:xg,ThumbsDownIcon:xg,ThumbsUp:wg,ThumbsUpIcon:wg,Ticket:Ag,TicketCheck:Lg,TicketCheckIcon:Lg,TicketIcon:Ag,TicketMinus:bg,TicketMinusIcon:bg,TicketPercent:Ig,TicketPercentIcon:Ig,TicketPlus:Cg,TicketPlusIcon:Cg,TicketSlash:qg,TicketSlashIcon:qg,TicketX:Sg,TicketXIcon:Sg,Tickets:Hg,TicketsIcon:Hg,TicketsPlane:zg,TicketsPlaneIcon:zg,Timer:Vg,TimerIcon:Vg,TimerOff:jg,TimerOffIcon:jg,TimerReset:Pg,TimerResetIcon:Pg,ToggleLeft:_g,ToggleLeftIcon:_g,ToggleRight:Rg,ToggleRightIcon:Rg,Toilet:Bg,ToiletIcon:Bg,ToolCase:Dg,ToolCaseIcon:Dg,Tornado:Fg,TornadoIcon:Fg,Torus:Tg,TorusIcon:Tg,Touchpad:Eg,TouchpadIcon:Eg,TouchpadOff:Og,TouchpadOffIcon:Og,TowerControl:Ug,TowerControlIcon:Ug,ToyBrick:$g,ToyBrickIcon:$g,Tractor:Zg,TractorIcon:Zg,TrafficCone:Ng,TrafficConeIcon:Ng,Train:f0,TrainFront:Gg,TrainFrontIcon:Gg,TrainFrontTunnel:Wg,TrainFrontTunnelIcon:Wg,TrainIcon:f0,TrainTrack:Kg,TrainTrackIcon:Kg,TramFront:f0,TramFrontIcon:f0,Transgender:Xg,TransgenderIcon:Xg,Trash:Hc,Trash2:Qg,Trash2Icon:Qg,TrashIcon:Hc,TreeDeciduous:Jg,TreeDeciduousIcon:Jg,TreePalm:M0,TreePalmIcon:M0,TreePine:Yg,TreePineIcon:Yg,Trees:ex,TreesIcon:ex,Trello:ax,TrelloIcon:ax,TrendingDown:tx,TrendingDownIcon:tx,TrendingUp:ox,TrendingUpDown:cx,TrendingUpDownIcon:cx,TrendingUpIcon:ox,Triangle:ix,TriangleAlert:v0,TriangleAlertIcon:v0,TriangleDashed:nx,TriangleDashedIcon:nx,TriangleIcon:ix,TriangleRight:rx,TriangleRightIcon:rx,Trophy:dx,TrophyIcon:dx,Truck:sx,TruckElectric:hx,TruckElectricIcon:hx,TruckIcon:sx,Turtle:lx,TurtleIcon:lx,Tv:px,Tv2:m0,Tv2Icon:m0,TvIcon:px,TvMinimal:m0,TvMinimalIcon:m0,TvMinimalPlay:yx,TvMinimalPlayIcon:yx,Twitch:ux,TwitchIcon:ux,Twitter:fx,TwitterIcon:fx,Type:Mx,TypeIcon:Mx,TypeOutline:kx,TypeOutlineIcon:kx,Umbrella:gx,UmbrellaIcon:gx,UmbrellaOff:vx,UmbrellaOffIcon:vx,Underline:mx,UnderlineIcon:mx,Undo:bx,Undo2:xx,Undo2Icon:xx,UndoDot:wx,UndoDotIcon:wx,UndoIcon:bx,UnfoldHorizontal:Lx,UnfoldHorizontalIcon:Lx,UnfoldVertical:Ix,UnfoldVerticalIcon:Ix,Ungroup:Cx,UngroupIcon:Cx,University:g0,UniversityIcon:g0,Unlink:Sx,Unlink2:qx,Unlink2Icon:qx,UnlinkIcon:Sx,Unlock:T2,UnlockIcon:T2,UnlockKeyhole:F2,UnlockKeyholeIcon:F2,Unplug:Ax,UnplugIcon:Ax,Upload:zx,UploadCloud:o2,UploadCloudIcon:o2,UploadIcon:zx,Usb:Hx,UsbIcon:Hx,User:Vc,User2:C0,User2Icon:C0,UserCheck:Vx,UserCheck2:w0,UserCheck2Icon:w0,UserCheckIcon:Vx,UserCircle:Jt,UserCircle2:Yt,UserCircle2Icon:Yt,UserCircleIcon:Jt,UserCog:jx,UserCog2:x0,UserCog2Icon:x0,UserCogIcon:jx,UserIcon:Vc,UserLock:Px,UserLockIcon:Px,UserMinus:_x,UserMinus2:L0,UserMinus2Icon:L0,UserMinusIcon:_x,UserPen:Rx,UserPenIcon:Rx,UserPlus:Bx,UserPlus2:b0,UserPlus2Icon:b0,UserPlusIcon:Bx,UserRound:C0,UserRoundCheck:w0,UserRoundCheckIcon:w0,UserRoundCog:x0,UserRoundCogIcon:x0,UserRoundIcon:C0,UserRoundMinus:L0,UserRoundMinusIcon:L0,UserRoundPen:Dx,UserRoundPenIcon:Dx,UserRoundPlus:b0,UserRoundPlusIcon:b0,UserRoundSearch:Fx,UserRoundSearchIcon:Fx,UserRoundX:I0,UserRoundXIcon:I0,UserSearch:Ox,UserSearchIcon:Ox,UserSquare:y0,UserSquare2:l0,UserSquare2Icon:l0,UserSquareIcon:y0,UserX:Tx,UserX2:I0,UserX2Icon:I0,UserXIcon:Tx,Users:Ex,Users2:q0,Users2Icon:q0,UsersIcon:Ex,UsersRound:q0,UsersRoundIcon:q0,Utensils:A0,UtensilsCrossed:S0,UtensilsCrossedIcon:S0,UtensilsIcon:A0,UtilityPole:Ux,UtilityPoleIcon:Ux,Variable:$x,VariableIcon:$x,Vault:Zx,VaultIcon:Zx,VectorSquare:Nx,VectorSquareIcon:Nx,Vegan:Gx,VeganIcon:Gx,VenetianMask:Wx,VenetianMaskIcon:Wx,Venus:Qx,VenusAndMars:Kx,VenusAndMarsIcon:Kx,VenusIcon:Qx,Verified:nt,VerifiedIcon:nt,Vibrate:Jx,VibrateIcon:Jx,VibrateOff:Xx,VibrateOffIcon:Xx,Video:ew,VideoIcon:ew,VideoOff:Yx,VideoOffIcon:Yx,Videotape:tw,VideotapeIcon:tw,View:aw,ViewIcon:aw,Voicemail:cw,VoicemailIcon:cw,Volleyball:ow,VolleyballIcon:ow,Volume:hw,Volume1:nw,Volume1Icon:nw,Volume2:iw,Volume2Icon:iw,VolumeIcon:hw,VolumeOff:rw,VolumeOffIcon:rw,VolumeX:dw,VolumeXIcon:dw,Vote:sw,VoteIcon:sw,Wallet:yw,Wallet2:z0,Wallet2Icon:z0,WalletCards:lw,WalletCardsIcon:lw,WalletIcon:yw,WalletMinimal:z0,WalletMinimalIcon:z0,Wallpaper:pw,WallpaperIcon:pw,Wand:uw,Wand2:H0,Wand2Icon:H0,WandIcon:uw,WandSparkles:H0,WandSparklesIcon:H0,Warehouse:kw,WarehouseIcon:kw,WashingMachine:fw,WashingMachineIcon:fw,Watch:vw,WatchIcon:vw,Waves:mw,WavesIcon:mw,WavesLadder:Mw,WavesLadderIcon:Mw,Waypoints:gw,WaypointsIcon:gw,Webcam:xw,WebcamIcon:xw,Webhook:Lw,WebhookIcon:Lw,WebhookOff:ww,WebhookOffIcon:ww,Weight:bw,WeightIcon:bw,Wheat:Cw,WheatIcon:Cw,WheatOff:Iw,WheatOffIcon:Iw,WholeWord:qw,WholeWordIcon:qw,Wifi:Pw,WifiCog:Sw,WifiCogIcon:Sw,WifiHigh:Aw,WifiHighIcon:Aw,WifiIcon:Pw,WifiLow:zw,WifiLowIcon:zw,WifiOff:Hw,WifiOffIcon:Hw,WifiPen:Vw,WifiPenIcon:Vw,WifiZero:jw,WifiZeroIcon:jw,Wind:Rw,WindArrowDown:_w,WindArrowDownIcon:_w,WindIcon:Rw,Wine:Dw,WineIcon:Dw,WineOff:Bw,WineOffIcon:Bw,Workflow:Fw,WorkflowIcon:Fw,Worm:Tw,WormIcon:Tw,WrapText:Ow,WrapTextIcon:Ow,Wrench:Ew,WrenchIcon:Ew,X:jc,XCircle:e2,XCircleIcon:e2,XIcon:jc,XOctagon:G2,XOctagonIcon:G2,XSquare:p0,XSquareIcon:p0,Youtube:Uw,YoutubeIcon:Uw,Zap:Zw,ZapIcon:Zw,ZapOff:$w,ZapOffIcon:$w,ZoomIn:Nw,ZoomInIcon:Nw,ZoomOut:Gw,ZoomOutIcon:Gw,createLucideIcon:t,icons:AH},Symbol.toStringTag,{value:"Module"})),HH={class:"bg-white rounded-lg shadow-sm border border-gray-200"},VH={class:"p-4 border-b border-gray-200"},jH={class:"flex items-center justify-between"},PH={class:"flex items-center space-x-4"},_H={class:"relative"},RH={class:"flex items-center space-x-2"},BH={class:"flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"},DH={key:0,class:"mt-4 p-4 bg-gray-50 rounded-lg"},FH={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},TH={class:"block text-sm font-medium text-gray-700 mb-1"},OH=["onUpdate:modelValue","placeholder"],EH={class:"overflow-x-auto"},UH={class:"min-w-full"},$H={class:"bg-gray-50 border-b border-gray-200"},ZH={class:"px-6 py-4 text-left"},NH=["onClick"],GH={class:"flex items-center space-x-1"},WH={class:"flex flex-col"},KH={class:"bg-white divide-y divide-gray-100"},XH={class:"px-6 py-4"},QH=["checked","onChange"],JH=["onClick"],YH={key:0,class:"text-center py-16"},eV={class:"text-gray-400 mb-2"},tV={class:"text-gray-500 text-sm"},aV={class:"bg-gray-50 border-t border-gray-200 px-6 py-3"},cV={class:"flex items-center justify-between"},oV={class:"flex items-center space-x-4"},nV={class:"text-sm text-gray-600"},rV={key:0,class:"flex items-center space-x-2"},iV={class:"flex items-center space-x-4"},dV={class:"text-sm text-gray-600"},hV={class:"flex items-center space-x-1"},sV=["disabled"],lV=["disabled"],yV={class:"flex items-center space-x-1"},pV=["onClick"],uV=["disabled"],kV=["disabled"],mb={__name:"BaseTable",props:{columns:Array,rows:Array},setup(e){const a=e,c=Z(""),o=Z(!1),n=Z({}),r=Z(1),i=Z(20),h=Z(""),d=Z("asc"),s=Z([]),l=Z(!1);Je(()=>a.columns,H=>{H&&H.forEach(V=>{V in n.value||(n.value[V]="")})},{immediate:!0});const y=ue(()=>{if(!a.rows)return[];let H=[...a.rows];return c.value&&(H=H.filter(V=>Object.values(V).some(ie=>String(ie).toLowerCase().includes(c.value.toLowerCase())))),Object.keys(n.value).forEach(V=>{n.value[V]&&(H=H.filter(ie=>String(ie[V]).toLowerCase().includes(n.value[V].toLowerCase())))}),h.value&&H.sort((V,ie)=>{let T=V[h.value],W=ie[h.value];return typeof T=="string"&&(T=T.toLowerCase()),typeof W=="string"&&(W=W.toLowerCase()),d.value==="asc"?T>W?1:-1:T<W?1:-1}),H}),f=ue(()=>Math.ceil(y.value.length/i.value)),M=ue(()=>(r.value-1)*i.value),I=ue(()=>Math.min(M.value+i.value,y.value.length)),q=ue(()=>y.value.slice(M.value,I.value)),K=ue(()=>{const V=[],ie=[];for(let T=Math.max(2,r.value-2);T<=Math.min(f.value-1,r.value+2);T++)V.push(T);return r.value-2>2?ie.push(1,"..."):ie.push(1),ie.push(...V),r.value+2<f.value-1?ie.push("...",f.value):f.value>1&&ie.push(f.value),ie.filter((T,W,re)=>re.indexOf(T)===W)}),$=ue(()=>Object.values(n.value).some(H=>H!=="")),O=(H,V,ie)=>{ie!==0&&n.value[H]!==V&&(n.value[H]=V,r.value=1,o.value=!0)},N=()=>{o.value=!o.value},D=()=>{Object.keys(n.value).forEach(H=>{n.value[H]=""}),r.value=1},G=()=>{r.value=1,o.value=!1},oe=()=>{c.value="",D()},U=H=>{h.value===H?d.value=d.value==="asc"?"desc":"asc":(h.value=H,d.value="asc"),r.value=1},ee=(H,V)=>h.value===H&&d.value===V?"text-blue-600":"text-gray-400",S=H=>{H>=1&&H<=f.value&&(r.value=H)},te=H=>{const V=M.value+H,ie=s.value.indexOf(V);ie>-1?s.value.splice(ie,1):s.value.push(V),B()},he=()=>{if(l.value)for(let H=0;H<q.value.length;H++){const V=M.value+H;s.value.includes(V)||s.value.push(V)}else for(let H=0;H<q.value.length;H++){const V=M.value+H,ie=s.value.indexOf(V);ie>-1&&s.value.splice(ie,1)}},B=()=>{const H=[];for(let V=0;V<q.value.length;V++)H.push(M.value+V);l.value=H.length>0&&H.every(V=>s.value.includes(V))};return Je([r,y],()=>{B()}),(H,V)=>{const ie=C1("router-link");return m(),b("div",HH,[k("div",VH,[k("div",jH,[k("div",PH,[k("div",_H,[P(ce(Sc),{class:"w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),D1(k("input",{"onUpdate:modelValue":V[0]||(V[0]=T=>c.value=T),type:"text",placeholder:"Search...",class:"pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"},null,512),[[Ec,c.value]])]),k("button",{onClick:N,class:"flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"},[P(ce(R1),{class:"w-4 h-4"}),V[7]||(V[7]=k("span",null,"Filters",-1))])]),k("div",RH,[k("button",BH,[P(ce(bc),{class:"w-4 h-4"}),V[8]||(V[8]=k("span",null,"Export",-1))]),D1(k("select",{"onUpdate:modelValue":V[1]||(V[1]=T=>i.value=T),class:"border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"},V[9]||(V[9]=[k("option",{value:10},"10 per page",-1),k("option",{value:20},"20 per page",-1),k("option",{value:50},"50 per page",-1),k("option",{value:100},"100 per page",-1)]),512),[[NC,i.value]])])]),o.value?(m(),b("div",DH,[k("div",FH,[(m(!0),b(ke,null,Be(e.columns,(T,W)=>(m(),b("div",{key:W},[k("label",TH,F(T),1),D1(k("input",{"onUpdate:modelValue":re=>n.value[T]=re,type:"text",placeholder:`Filter by ${T}...`,class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"},null,8,OH),[[Ec,n.value[T]]])]))),128))]),k("div",{class:"mt-3 flex justify-end space-x-2"},[k("button",{onClick:D,class:"px-3 py-2 text-sm text-gray-600 hover:text-gray-800"}," Clear All "),k("button",{onClick:G,class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"}," Apply Filters ")])])):de("",!0)]),k("div",EH,[k("table",UH,[k("thead",null,[k("tr",$H,[k("th",ZH,[D1(k("input",{type:"checkbox","onUpdate:modelValue":V[2]||(V[2]=T=>l.value=T),onChange:he,class:"rounded border-gray-300 focus:ring-blue-500"},null,544),[[_A,l.value]])]),(m(!0),b(ke,null,Be(e.columns,(T,W)=>(m(),b("th",{key:W,class:"px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100",onClick:re=>U(T)},[k("div",GH,[k("span",null,F(T),1),k("div",WH,[P(ce(gc),{class:Le(["w-3 h-3",ee(T,"asc")])},null,8,["class"])])])],8,NH))),128))])]),k("tbody",KH,[(m(!0),b(ke,null,Be(q.value,(T,W)=>(m(),b("tr",{key:W,class:Le(["hover:bg-gray-50 transition-colors duration-150",{"bg-blue-50":s.value.includes(W)}])},[k("td",XH,[k("input",{type:"checkbox",checked:s.value.includes(W),onChange:re=>te(W),class:"rounded border-gray-300 focus:ring-blue-500"},null,40,QH)]),(m(!0),b(ke,null,Be(e.columns,(re,De)=>(m(),b("td",{key:De,class:Le(["px-6 py-4 whitespace-nowrap text-sm text-gray-900",De!==0?"cursor-pointer hover:bg-gray-100":""]),onClick:f1=>O(re,T[re],De)},[De===0?(m(),Se(ie,{key:0,to:`/accounts/${T[re]}`},{default:be(()=>[we(F(T[re]),1)]),_:2},1032,["to"])):(m(),b(ke,{key:1},[we(F(T[re]),1)],64))],10,JH))),128))],2))),128))])])]),!y.value||y.value.length===0?(m(),b("div",YH,[k("div",eV,[P(ce(Ic),{class:"w-12 h-12 mx-auto"})]),k("p",tV,F(c.value||$.value?"No results found":"No data"),1),c.value||$.value?(m(),b("button",{key:0,onClick:oe,class:"mt-2 text-blue-600 hover:text-blue-800 text-sm"}," Clear search and filters ")):de("",!0)])):de("",!0),k("div",aV,[k("div",cV,[k("div",oV,[k("span",nV,F(s.value.length)+" of "+F(y.value.length)+" selected ",1),s.value.length>0?(m(),b("div",rV,V[10]||(V[10]=[k("button",{class:"text-sm text-blue-600 hover:text-blue-800"}," Delete Selected ",-1),k("button",{class:"text-sm text-blue-600 hover:text-blue-800"}," Export Selected ",-1)]))):de("",!0)]),k("div",iV,[k("span",dV,F(M.value+1)+" - "+F(I.value)+" of "+F(y.value.length),1),k("div",hV,[k("button",{onClick:V[3]||(V[3]=T=>S(1)),disabled:r.value===1,class:"p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"},[P(ce(xc),{class:"w-4 h-4"})],8,sV),k("button",{onClick:V[4]||(V[4]=T=>S(r.value-1)),disabled:r.value===1,class:"p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"},[P(ce(K0),{class:"w-4 h-4"})],8,lV),k("div",yV,[(m(!0),b(ke,null,Be(K.value,T=>(m(),b("button",{key:T,onClick:W=>S(T),class:Le(["px-3 py-1 text-sm rounded",T===r.value?"bg-blue-600 text-white":"text-gray-600 hover:bg-gray-100"])},F(T),11,pV))),128))]),k("button",{onClick:V[5]||(V[5]=T=>S(r.value+1)),disabled:r.value===f.value,class:"p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"},[P(ce(X0),{class:"w-4 h-4"})],8,uV),k("button",{onClick:V[6]||(V[6]=T=>S(f.value)),disabled:r.value===f.value,class:"p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"},[P(ce(wc),{class:"w-4 h-4"})],8,kV)])])])])])}}},yq={__name:"BaseChip",props:{variant:{type:String,default:"default"},closable:{type:Boolean,default:!1}},setup(e){const c={default:"bg-gray-100 text-gray-800",primary:"bg-blue-100 text-blue-800",success:"bg-green-100 text-green-800",danger:"bg-red-100 text-red-800",warning:"bg-yellow-100 text-yellow-800",info:"bg-cyan-100 text-cyan-800"}[e.variant]||"bg-gray-100 text-gray-800";return(o,n)=>(m(),b("span",{class:Le(["inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",ce(c)])},[yL(o.$slots,"default"),e.closable?(m(),b("button",{key:0,onClick:n[0]||(n[0]=r=>o.$emit("close")),class:"ml-2 text-xs text-gray-500 hover:text-gray-700 focus:outline-none"}," × ")):de("",!0)],2))}},fV={class:"relative"},MV=["for"],vV={key:0,class:"text-red-500 ml-1"},mV=["id","disabled"],gV={class:"flex items-center gap-2 ml-2"},xV={key:1,class:"absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50 overflow-hidden"},wV={key:0,class:"px-4 py-2 border-b border-gray-200"},LV=["onClick"],bV={key:0,class:"px-4 py-2 text-gray-500 italic"},gb={__name:"CustomDropdown",props:{label:{type:String,default:""},required:{type:Boolean,default:!1},variant:{type:String,default:"neutral",validator:e=>["neutral","light","dark"].includes(e)},disabled:{type:Boolean,default:!1},options:{type:Array,required:!0},modelValue:{type:[String,Number],default:""},searchable:{type:Boolean,default:!1},placeholder:{type:String,default:"Select..."},showClearButton:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const c=e,o=a,n=Z(!1),r=Z(""),i=Z(`dropdown-${Math.random().toString(36).substr(2,9)}`),h=ue({get:()=>c.modelValue,set:I=>o("update:modelValue",I)}),d=ue(()=>{const I={neutral:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400",light:"bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 border border-gray-300",dark:"bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500"};return I[c.variant]||I.neutral}),s=ue(()=>{if(!h.value&&h.value!==0)return c.placeholder;const I=c.options.find(q=>q.value===h.value);return I?I.label:c.placeholder}),l=ue(()=>!c.searchable||r.value.trim()===""?c.options:c.options.filter(I=>I.label.toLowerCase().includes(r.value.toLowerCase())));function y(){c.disabled||(n.value=!n.value,n.value&&(r.value=""))}function f(I){o("update:modelValue",I.value),n.value=!1,r.value=""}function M(I){I.stopPropagation(),o("update:modelValue",""),r.value="",n.value=!1}return(I,q)=>(m(),b("div",fV,[e.label?(m(),b("label",{key:0,for:i.value,class:"block text-sm font-medium text-gray-700 mb-2"},[we(F(e.label)+" ",1),e.required?(m(),b("span",vV,"*")):de("",!0)],8,MV)):de("",!0),k("button",{id:i.value,class:Le(["px-4 py-2 rounded text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full flex items-center justify-between",d.value,e.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"]),disabled:e.disabled,onClick:y},[k("span",null,F(s.value),1),k("div",gV,[e.showClearButton&&h.value!==""&&!e.disabled?(m(),b("button",{key:0,onClick:j0(M,["stop"]),class:"ml-2 text-sm text-white hover:text-gray-100 cursor-pointer"},[P(ce(jc),{class:"h-4 w-4"})])):de("",!0),P(ce(mc),{class:Le(["h-4 w-4 transition-transform duration-200",n.value?"rotate-180":""])},null,8,["class"])])],10,mV),n.value?(m(),b("div",xV,[e.searchable?(m(),b("div",wV,[D1(k("input",{type:"text","onUpdate:modelValue":q[0]||(q[0]=K=>r.value=K),placeholder:"Search...",class:"w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",onClick:q[1]||(q[1]=j0(()=>{},["stop"]))},null,512),[[Ec,r.value]])])):de("",!0),k("ul",{class:"text-sm text-gray-700 max-h-60 overflow-y-auto",onMousedown:q[2]||(q[2]=j0(()=>{},["prevent"]))},[(m(!0),b(ke,null,Be(l.value,K=>(m(),b("li",{key:K.value,onClick:$=>f(K),class:Le(["px-4 py-2 cursor-pointer transition-colors duration-150",K.value===h.value?"bg-blue-50 text-blue-700 font-medium":"hover:bg-gray-50"])},F(K.label),11,LV))),128)),l.value.length===0?(m(),b("li",bV," No options found ")):de("",!0)],32)])):de("",!0)]))}},IV=["disabled","checked"],CV={__name:"BaseCheckbox",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const c=a,o=n=>{c("update:modelValue",n.target.checked)};return(n,r)=>(m(),b("label",{class:Le(["inline-flex items-center space-x-2",e.disabled?"opacity-50 cursor-not-allowed":""])},[k("input",{type:"checkbox",disabled:e.disabled,checked:e.modelValue,onChange:o,class:"form-checkbox h-5 w-5 rounded text-gray-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2"},null,40,IV),k("span",{class:Le(["text-sm",e.disabled?"text-gray-400":"text-gray-700"])},[yL(n.$slots,"default",{},void 0,!0)],2)],2))}},qV=c1(CV,[["__scopeId","data-v-5ba89d2d"]]),SV={class:"p-6 max-w-7xl mx-auto"},AV={class:"mb-12"},zV={class:"mb-12"},HV={class:"mb-12"},VV={class:"mb-12"},jV={class:"mb-12"},PV={class:"mb-12"},_V={class:"mb-12"},RV={class:"mb-12"},BV={__name:"Demo",setup(e){const a=Z(""),c=Z(""),o=Z(""),n=Z(!1),r=Z(!1),i=[{label:"Apple",value:"1"},{label:"Banana",value:"2"},{label:"Orange",value:"3"},{label:"Grapes",value:"4"},{label:"Pineapple",value:"5"}],h=()=>{alert(`Submitted: ${c.value}`)};return(d,s)=>(m(),b("div",SV,[s[16]||(s[16]=k("h1",{class:"text-4xl font-bold text-center mb-8"},"Vue Components Documentation",-1)),s[17]||(s[17]=k("div",{class:"mb-10"},[k("h2",{class:"text-2xl font-semibold mb-4"},"Introduction"),k("p",{class:"text-lg"}," This page provides a comprehensive guide to the available components in our Vue.js application. Each component comes with an example of how it can be used in your templates. ")],-1)),k("section",AV,[s[5]||(s[5]=S1(`<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseLabel</h2><p class="text-lg mb-4" data-v-9ccfc689> A wrapper for a label that binds to a form element. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseLabel for-id=&quot;email&quot;&gt;Email&lt;/BaseLabel&gt;</code>
      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>`,5)),P(IH,{"for-id":"email"},{default:be(()=>s[4]||(s[4]=[we("Email")])),_:1,__:[4]})]),k("section",zV,[s[6]||(s[6]=S1('<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseInput</h2><p class="text-lg mb-4" data-v-9ccfc689> An input field that binds to a model using \\`v-model\\`. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseInput v-model=&quot;email&quot; placeholder=&quot;Enter your email&quot; /&gt;</code>\n      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>',5)),P(aL,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=l=>c.value=l),placeholder:"Enter your email"},null,8,["modelValue"])]),k("section",HV,[s[7]||(s[7]=S1('<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseInput With search query</h2><p class="text-lg mb-4" data-v-9ccfc689> An input field that binds to a model using \\`v-model\\`. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseInput v-model=&quot;searchQuery&quot; placeholder=&quot;Enter name&quot; :suggestions=&quot;[&#39;Apple&#39;, &#39;Banana&#39;, &#39;Orange&#39;, &#39;Mango&#39;, &#39;Pineapple&#39;]&quot;/&gt;</code>\n      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>',5)),P(aL,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value=l),placeholder:"Search...",suggestions:["Apple","Banana","Orange","Mango","Pineapple"]},null,8,["modelValue"])]),k("section",VV,[s[9]||(s[9]=S1(`<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseButton</h2><p class="text-lg mb-4" data-v-9ccfc689> A button component that can trigger actions. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseButton class=&quot;mt-4&quot; @click=&quot;submit&quot;&gt;Submit&lt;/BaseButton&gt;</code>
      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>`,5)),P(F1,{class:"mt-4",onClick:h},{default:be(()=>s[8]||(s[8]=[we("Submit")])),_:1,__:[8]})]),k("section",jV,[s[11]||(s[11]=S1(`<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseChip</h2><p class="text-lg mb-4" data-v-9ccfc689> A small tag or badge, often used for statuses or categories. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseChip variant=&quot;primary&quot;&gt;Primary&lt;/BaseChip&gt;</code>
      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>`,5)),P(yq,{variant:"primary"},{default:be(()=>s[10]||(s[10]=[we("Primary")])),_:1,__:[10]})]),k("section",PV,[s[12]||(s[12]=S1(`<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>CustomDropdown</h2><p class="text-lg mb-4" data-v-9ccfc689> A customizable dropdown component for selecting an option. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;CustomDropdown v-model=&quot;selectedOption&quot; :options=&quot;dropdownOptions&quot; /&gt;</code>
      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>`,5)),P(gb,{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=l=>a.value=l),options:i,variant:"neutral",searchable:!0},null,8,["modelValue"]),k("p",null,"Selected: "+F(a.value),1)]),k("section",_V,[s[13]||(s[13]=S1(`<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseTable</h2><p class="text-lg mb-4" data-v-9ccfc689> A table component for displaying data in rows and columns. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseTable :columns=&quot;[&#39;Name&#39;, &#39;Email&#39;]&quot; :rows=&quot;[{ Name: &#39;John&#39;, Email: &#39;john@example.com&#39; }]&quot; /&gt;</code>
      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>`,5)),P(mb,{columns:["Name","Email"],rows:[{Name:"John",Email:"john@example.com"}]})]),k("section",RV,[s[15]||(s[15]=S1('<h2 class="text-2xl font-semibold mb-4" data-v-9ccfc689>BaseCheckbox</h2><p class="text-lg mb-4" data-v-9ccfc689> A customizable checkbox component that binds to a model using \\`v-model\\`. </p><h3 class="text-xl font-medium mb-2" data-v-9ccfc689>Example</h3><pre class="bg-gray-100 p-4 rounded-md overflow-x-auto" data-v-9ccfc689>        <code data-v-9ccfc689>&lt;BaseCheckbox v-model=&quot;isChecked&quot; :disabled=&quot;isDisabled&quot;&gt;Accept Terms&lt;/BaseCheckbox&gt;</code>\n      </pre><h3 class="text-xl font-medium mt-6 mb-2" data-v-9ccfc689>Rendered Result</h3>',5)),P(qV,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=l=>n.value=l),disabled:r.value},{default:be(()=>s[14]||(s[14]=[we("Accept Terms")])),_:1,__:[14]},8,["modelValue","disabled"])])]))}},DV=c1(BV,[["__scopeId","data-v-9ccfc689"]]),pq="Quantra",FV={class:"bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm"},TV={class:"text-xl font-bold text-gray-800 tracking-wide min-w-64"},OV={class:"flex-1 flex justify-between"},EV={class:"flex-1 max-w-md"},UV={class:"flex items-center space-x-6"},$V={class:"relative"},ZV={class:"text-2xl"},NV={key:0,class:"absolute right-0 mt-2 w-64 bg-white shadow-md rounded-lg z-10 p-4 text-sm text-gray-700"},GV={class:"mb-1 font-medium flex items-center gap-4"},WV={class:"relative"},KV={key:0,class:"absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-10 overflow-hidden"},XV={__name:"DashboardNavbar",setup(e){const a=Z(""),c=Z(!1),o=Z(!1);function n(){c.value=!c.value,o.value=!1}function r(){o.value=!o.value,c.value=!1}function i(){alert("Navigating to profile...")}const h=async()=>{await fetch("/api/method/logout"),router.push("/login")};return(d,s)=>(m(),b("nav",FV,[k("div",TV,F(ce(pq)),1),k("div",OV,[k("div",EV,[D1(k("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),class:"w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"},null,512),[[Ec,a.value]])]),k("div",UV,[k("div",$V,[k("button",{onClick:n,class:"text-gray-600 hover:text-blue-600 focus:outline-none relative"},[k("span",ZV,[P(ce(G0))]),s[1]||(s[1]=k("span",{class:"absolute -top-2 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"},"3",-1))]),P(Ub,{name:"fade"},{default:be(()=>[c.value?(m(),b("div",NV,[k("div",GV,[P(ce(G0),{class:"h-4 w-4"}),s[2]||(s[2]=we()),s[3]||(s[3]=k("span",null,"Notifications",-1))]),s[4]||(s[4]=k("ul",{class:"space-y-1 border-t border-slate-100 pt-2"},[k("li",null,"You have 3 new messages"),k("li",null,"New comment on your post"),k("li",null,"System update available")],-1))])):de("",!0)]),_:1})]),k("div",WV,[k("button",{onClick:r,class:"focus:outline-none"},s[5]||(s[5]=[k("img",{src:"https://xsgames.co/randomusers/avatar.php?g=male",alt:"Avatar",class:"w-10 h-10 rounded-full border-2 border-gray-200 hover:border-blue-500 transition"},null,-1)])),P(Ub,{name:"fade"},{default:be(()=>[o.value?(m(),b("div",KV,[k("ul",{class:"text-sm text-gray-700"},[k("li",{onClick:i,class:"px-4 py-2 hover:bg-gray-100 cursor-pointer"}," 👤 Profile "),k("li",{onClick:h,class:"px-4 py-2 hover:bg-gray-100 cursor-pointer"}," 🚪 Logout ")])])):de("",!0)]),_:1})])])])]))}},QV=c1(XV,[["__scopeId","data-v-59bf5bec"]]),JV={components:{LayoutDashboard:qc,BookOpen:W0,Settings:Ac,User:Vc,ShieldCheck:zc},data(){return{menuItems:[{name:"Dashboard",route:"/dashboard",icon:"Gauge"},{name:"Accounts",icon:"FolderKanban",isOpen:!1,parentRoute:"/accounts",children:[{name:"Chart Of Accounts",route:"/accounts/chart-of-accounts",icon:"ListOrdered"}]},{name:"Sales",icon:"TrendingUp",isOpen:!1,parentRoute:"/sales",children:[{name:"Invoice",parentRoute:"/sales/invoice",route:"/sales/invoice",icon:"FileText"}]},{name:"Purchase",icon:"ShoppingCart",isOpen:!1,parentRoute:"/purchase",children:[{name:"Invoice",route:"/purchase/expenses",icon:"ReceiptText"}]},{name:"Settings",icon:"Settings",isOpen:!1,parentRoute:"/settings",children:[{name:"Profile",route:"/settings/profile",icon:"UserCircle"},{name:"Privacy",route:"/settings/privacy",icon:"Shield"}]}]}},computed:{isExpanded(){return!0}},methods:{toggleSubMenu(e){e.children&&(e.isOpen=!e.isOpen)},isActive(e){if(e.route&&this.$route.path===e.route)return this.expandParent(e),!0;if(e.parentRoute&&this.$route.path.startsWith(e.parentRoute))return this.expandParent(e),!0;if(e.children){const a=e.children.some(c=>this.$route.path===c.route);return a&&this.expandParent(e),a}return!1},expandParent(e){!e.isOpen&&e.children&&(e.isOpen=!0)}}},YV={class:"sidebar w-64 bg-blue-50 max-h-[99%]"},ej={class:"flex-1 p-4 space-y-2"},tj=["onClick"],aj={class:"flex items-center space-x-3"},cj={key:1,class:"flex items-center w-full"},oj={class:"flex items-center space-x-3"},nj={key:0,class:"ml-4 space-y-1 border-l border-gray-200 pl-4"},rj={class:"font-base"},ij={class:"p-4 border-t border-gray-200"};function dj(e,a,c,o,n,r){const i=C1("router-link"),h=C1("ChevronDown");return m(),b("div",YV,[k("nav",ej,[(m(!0),b(ke,null,Be(n.menuItems,d=>(m(),b("div",{key:d.name,class:"space-y-1"},[k("div",{class:Le(["flex items-center justify-between px-3 py-2 rounded-lg","text-gray-700 hover:bg-black/50  hover:text-white","cursor-pointer transition-all duration-200",{"justify-center":!r.isExpanded,"bg-black text-white hover:bg-gray-400 hover:text-black":r.isActive(d)}]),onClick:s=>r.toggleSubMenu(d)},[d.route?(m(),Se(i,{key:0,to:d.route,class:"flex items-center w-full"},{default:be(()=>[k("div",aj,[(m(),Se(ro(d.icon),{class:"w-5 h-5 flex-shrink-0"})),k("span",{class:Le(["font-base transition-opacity duration-200",{"opacity-0":!r.isExpanded}])},F(d.name),3)])]),_:2},1032,["to"])):(m(),b("div",cj,[k("div",oj,[(m(),Se(ro(d.icon),{class:"w-5 h-5 flex-shrink-0"})),k("span",{class:Le(["font-base transition-opacity duration-200",{"opacity-0":!r.isExpanded}])},F(d.name),3)])])),d.children&&r.isExpanded?(m(),Se(h,{key:2,class:Le(["w-4 h-4 transition-transform duration-200",{"rotate-90":d.isOpen}])},null,8,["class"])):de("",!0)],10,tj),d.children&&d.isOpen&&r.isExpanded?(m(),b("div",nj,[(m(!0),b(ke,null,Be(d.children,s=>(m(),Se(i,{key:s.name,to:s.route,class:Le(["flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-black/50 hover:text-white transition-all duration-200",{"bg-black/80 text-white hover:bg-gray-400 hover:text-black":r.isActive(s)}])},{default:be(()=>[(m(),Se(ro(s.icon),{class:"w-4 h-4 flex-shrink-0"})),k("span",rj,F(s.name),1)]),_:2},1032,["to","class"]))),128))])):de("",!0)]))),128))]),k("div",ij,[k("div",{class:Le(["flex items-center space-x-3 px-3 py-2 rounded-lg","text-gray-700 hover:bg-gray-50 cursor-pointer","transition-all duration-200",{"justify-center":!r.isExpanded}])},[a[1]||(a[1]=k("div",{class:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"},[k("span",{class:"text-white text-sm font-medium"},"JD")],-1)),k("div",{class:Le(["transition-opacity duration-200",{"opacity-0":!r.isExpanded}])},a[0]||(a[0]=[k("div",{class:"text-sm font-medium text-gray-900"},"John Doe",-1),k("div",{class:"text-xs text-gray-500"},"john@example.com",-1)]),2)],2)])])}const hj=c1(JV,[["render",dj],["__scopeId","data-v-e15b5348"]]),sj={class:"h-screen flex flex-col overflow-hidden"},lj={class:"flex flex-1 overflow-hidden"},yj={class:"flex-1 p-6 overflow-y-auto"},_L={__name:"DashboardLayout",setup(e){return(a,c)=>{const o=C1("router-view");return m(),b("div",sj,[P(QV),k("div",lj,[P(hj),k("div",yj,[P(o)])])])}}},pj={class:"container mx-auto p-2"},uj={class:"flex items-center justify-between"},kj={class:"flex gap-2 items-center"},fj={key:0,class:"text-center text-lg"},Mj={key:1,class:"text-center text-red-500"},vj={__name:"ChartOfAccounts",props:{columns:{type:Array,default:()=>["Account Name","Account Type","Parent Account","Root Type","Account Currency"]},rows:{type:Array,default:()=>[]}},setup(e){document.title="Chart Of Accounts | Quantra";const a=Z("1"),c=Z([]),o=Z(!0),n=Z(null),r=[{label:"List View",value:"1"},{label:"Tree View",value:"2"}],i=async()=>{try{const h=await fetch('/api/resource/Account?fields=["*"]',{credentials:"include"});if(!h.ok)throw new Error("Failed to fetch accounts data");const d=await h.json();c.value=d.data.map(s=>({"Account Name":s.name,"Account Type":s.account_type||"N/A","Parent Account":s.parent_account||"N/A","Root Type":s.root_type,"Account Currency":s.account_currency}))}catch(h){n.value=h.message}finally{o.value=!1}};return a1(()=>{i()}),Je(a,h=>{h==="2"&&Jc.push("/accounts/view/treeview")}),(h,d)=>(m(),b("div",pj,[k("div",uj,[d[1]||(d[1]=k("h1",{class:"text-2xl font-semibold mb-4"},"Chart of Accounts",-1)),k("div",kj,[P(gb,{id:"View",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=s=>a.value=s),options:r,variant:"neutral",showClearButton:!1,searchable:!1},null,8,["modelValue"])])]),o.value?(m(),b("div",fj,"Loading accounts...")):de("",!0),n.value?(m(),b("div",Mj,[k("p",null,"Error fetching accounts: "+F(n.value),1)])):de("",!0),!o.value&&!n.value?(m(),Se(mb,{key:2,columns:e.columns,rows:c.value},null,8,["columns","rows"])):de("",!0)]))}},mj={name:"Spinner",props:{loading:{type:Boolean,required:!0}}},gj={class:"flex justify-center items-center h-16 w-16"},xj={key:0,class:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"};function wj(e,a,c,o,n,r){return m(),b("div",gj,[c.loading?(m(),b("div",xj)):de("",!0)])}const Qc=c1(mj,[["render",wj]]),Lj={class:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"},bj={class:"flex items-center justify-between mb-6"},Ij={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},Cj={class:"text-gray-900 dark:text-white"},qj={class:"text-gray-900 dark:text-white"},Sj={class:"text-gray-900 dark:text-white"},Aj={class:"text-gray-900 dark:text-white"},zj={class:"text-gray-900 dark:text-white"},Hj={class:"text-gray-900 dark:text-white"},Vj={class:"text-gray-900 dark:text-white"},jj={class:"text-900 dark:text-white"},Pj={class:"flex items-center gap-4"},_j={__name:"AccountDetails",props:{data:Object},setup(e){return(a,c)=>(m(),b("div",Lj,[k("div",bj,[c[1]||(c[1]=k("h2",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," Account Information ",-1)),P(F1,{variant:"light",class:"flex gap-2 items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-md px-3 py-1.5 transition-all duration-200"},{default:be(()=>[P(ce(J0),{size:"16"}),c[0]||(c[0]=we(" Edit "))]),_:1,__:[0]})]),k("div",Ij,[k("div",null,[c[2]||(c[2]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Account Name:",-1)),k("p",Cj,F(e.data.account_name),1)]),k("div",null,[c[3]||(c[3]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Account Number:",-1)),k("p",qj,F(e.data.account_number||"N/A"),1)]),k("div",null,[c[4]||(c[4]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Account Type:",-1)),k("p",Sj,F(e.data.account_type||"N/A"),1)]),k("div",null,[c[5]||(c[5]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Company:",-1)),k("p",Aj,F(e.data.company),1)]),k("div",null,[c[6]||(c[6]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Parent Account:",-1)),k("p",zj,F(e.data.parent_account),1)]),k("div",null,[c[7]||(c[7]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Root Type:",-1)),k("p",Hj,F(e.data.root_type),1)]),k("div",null,[c[8]||(c[8]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Account Currency:",-1)),k("p",Vj,F(e.data.account_currency),1)]),k("div",null,[c[9]||(c[9]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Tax Rate:",-1)),k("p",jj,F(e.data.tax_rate)+"%",1)]),k("div",Pj,[c[10]||(c[10]=k("strong",{class:"text-gray-700 dark:text-gray-300 text-sm font-medium"},"Status:",-1)),P(yq,{class:"text-xs font-medium",variant:e.data.disabled?"disabled":"success"},{default:be(()=>[we(F(e.data.disabled?"Disabled":"Active"),1)]),_:1},8,["variant"])])])]))}};function Rj(e){const a=new Date(e),c={weekday:"long",year:"numeric",month:"long",day:"numeric"};return a.toLocaleDateString("en-US",c)}const Bj={class:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg fadeIn"},Dj={class:"flex items-center mb-4"},Fj={key:0,class:"text-gray-600 dark:text-gray-300 flex-col items-center justify-center"},Tj={key:1,class:"text-red-500 text-sm"},Oj={key:2},Ej={class:"divide-y divide-gray-200 dark:divide-gray-700"},Uj={class:"text-gray-900 dark:text-white font-medium"},$j={class:"text-gray-600 dark:text-gray-300 text-sm font-semibold"},Zj={class:"text-gray-600 dark:text-gray-300 text-sm mt-2",style:{"max-width":"720px"}},Nj={class:"text-right"},Gj={class:"text-gray-600 dark:text-gray-300 text-xs"},Wj={class:"flex flex-wrap justify-end items-center gap-4 mt-6"},Kj={class:"text-sm text-gray-600 dark:text-gray-300"},Xj={class:"flex items-center gap-1"},Qj=["disabled"],Jj=["onClick"],Yj=["disabled"],eP={key:3,class:"text-gray-600 dark:text-gray-300"},tP={__name:"AccountTransactions",props:{id:String},setup(e){const a=e,c=Z([]),o=Z(!1),n=Z(null),r=Z(""),i=Z(null),h=Z(1),d=Z(10),s=Z(0),l=ue(()=>Math.ceil(s.value/d.value)),y=ue(()=>Math.min((h.value-1)*d.value,s.value)),f=ue(()=>Math.min(y.value+d.value,s.value));async function M(){o.value=!0,n.value=null;try{const G=encodeURIComponent(a.id),oe=(h.value-1)*d.value;let U=[`["account", "=", "${G}"]`];if(r.value.trim()){const te=r.value.trim();U=`or_filters=[["GL Entry","remarks","like","%${te}%"],["GL Entry","voucher_no","like","%${te}%"]]`}else U=`filters=[["account", "=", "${G}"]]`;const ee=await fetch(`/api/resource/GL Entry?${U}&order_by=posting_date desc&limit_start=${oe}&limit=${d.value}&fields=["name", "posting_date", "debit", "credit", "account_currency", "voucher_type", "voucher_no", "party_type", "party", "remarks"]`,{credentials:"include"});if(!ee.ok)throw new Error(await ee.text());const S=await ee.json();c.value=S.data,r.value.trim()?s.value=S.data.length<d.value&&h.value===1?S.data.length:(h.value-1)*d.value+S.data.length:await I()}catch(G){n.value=G.message}finally{o.value=!1}}async function I(){const G=encodeURIComponent(a.id),U=await(await fetch(`/api/resource/GL Entry?filters=[["account", "=", "${G}"]]&limit_page_length=0`,{credentials:"include"})).json();s.value=U.length??0}function q(){h.value<l.value&&h.value++}function K(){h.value>1&&h.value--}function $(G){G>=1&&G<=l.value&&(h.value=G)}function O(){h.value=1,M()}function N(){clearTimeout(i.value),i.value=setTimeout(()=>{h.value=1,M()},500)}function D(){r.value="",h.value=1,M()}return a1(()=>{M()}),Je([h,d],M),(G,oe)=>(m(),b("div",Bj,[oe[4]||(oe[4]=k("h2",{class:"text-xl font-semibold text-gray-900 dark:text-white mb-4"},"Transactions",-1)),k("div",Dj,[D1(k("input",{"onUpdate:modelValue":oe[0]||(oe[0]=U=>r.value=U),onInput:N,type:"text",placeholder:"Search by remarks, voucher no, etc...",class:"w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"},null,544),[[Ec,r.value]]),r.value?(m(),b("button",{key:0,onClick:D,class:"ml-2 text-sm px-3 py-2 rounded bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300"}," Clear ")):de("",!0)]),o.value?(m(),b("div",Fj,[P(Qc,{loading:!0}),oe[2]||(oe[2]=k("p",null,"Loading transactions...",-1))])):n.value?(m(),b("p",Tj,F(n.value),1)):c.value.length?(m(),b("div",Oj,[k("ul",Ej,[(m(!0),b(ke,null,Be(c.value,U=>(m(),b("li",{key:U.name,class:"py-3 flex justify-between items-center"},[k("div",null,[k("p",Uj,F(U.voucher_type)+" - "+F(U.voucher_no),1),k("p",$j,F(ce(Rj)(U.posting_date)),1),k("p",Zj,F(U.remarks),1)]),k("div",Nj,[k("p",{class:Le([{"text-green-600":U.debit>0,"text-red-600":U.credit>0},"font-semibold"])},F(U.debit>0?U.debit:U.credit)+" "+F(U.account_currency),3),k("p",Gj," Balance: "+F(U.base_balance??"N/A")+" "+F(U.account_currency),1)])]))),128))]),k("div",Wj,[k("p",Kj,F(y.value+1)+"–"+F(f.value)+" of "+F(s.value),1),D1(k("select",{"onUpdate:modelValue":oe[1]||(oe[1]=U=>d.value=U),onChange:O,class:"text-sm rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"},oe[3]||(oe[3]=[k("option",{value:10},"10",-1),k("option",{value:20},"20",-1),k("option",{value:50},"50",-1)]),544),[[NC,d.value]]),k("div",Xj,[k("button",{onClick:K,disabled:h.value===1,class:"p-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"},[P(ce(K0),{class:"w-4 h-4"})],8,Qj),(m(!0),b(ke,null,Be(l.value,U=>(m(),b("button",{key:U,onClick:ee=>$(U),class:Le(["px-3 py-1 rounded text-sm",U===h.value?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"])},F(U),11,Jj))),128)),k("button",{onClick:q,disabled:h.value===l.value,class:"p-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"},[P(ce(X0),{class:"w-4 h-4"})],8,Yj)])])])):(m(),b("p",eP," No transactions found for this account. "))]))}},aP=c1(tP,[["__scopeId","data-v-1990baa8"]]),cP={class:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"},oP={key:0,class:"text-gray-600 dark:text-gray-300 flex-col justify-center"},nP={key:1,class:"text-red-500 text-sm"},rP={key:2},iP={class:"divide-y divide-gray-200 dark:divide-gray-700"},dP={class:"text-gray-900 dark:text-white font-medium"},hP={class:"text-gray-600 dark:text-gray-300 text-sm"},sP={key:3,class:"text-gray-600 dark:text-gray-300"},lP={__name:"AccountSubAccounts",props:{id:String},setup(e){const a=e,c=Z([]),o=Z(!1),n=Z(null);return a1(async()=>{o.value=!0;try{const r=encodeURIComponent(a.id),i=await fetch(`/api/resource/Account?filters=[["parent_account", "=", "${r}"]]&fields=["name", "account_name", "account_type", "is_group"]`,{credentials:"include"});if(!i.ok)throw new Error(await i.text());c.value=(await i.json()).data}catch(r){n.value=r.message}finally{o.value=!1}}),(r,i)=>{const h=C1("router-link");return m(),b("div",cP,[i[1]||(i[1]=k("h2",{class:"text-xl font-semibold text-gray-900 dark:text-white mb-4"},"Sub Accounts",-1)),o.value?(m(),b("div",oP,[P(Qc,{loading:!0}),i[0]||(i[0]=k("p",null,"Loading sub accounts...",-1))])):n.value?(m(),b("p",nP,F(n.value),1)):c.value.length?(m(),b("div",rP,[k("ul",iP,[(m(!0),b(ke,null,Be(c.value,d=>(m(),b("li",{key:d.name,class:"py-3"},[P(h,{to:`/accounts/${e.id}/${d.account_name}`},{default:be(()=>[k("p",dP,F(d.account_name),1)]),_:2},1032,["to"]),k("p",hP,F(d.account_type),1)]))),128))])])):(m(),b("p",sP," No sub accounts found for this account. "))])}}},yP={class:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"},pP={key:0,class:"text-gray-600 dark:text-gray-300 flex-col items-center justify-center"},uP={key:1,class:"text-red-500 text-sm"},kP={key:2},fP={class:"divide-y divide-gray-200 dark:divide-gray-700"},MP={class:"text-gray-900 dark:text-white font-medium"},vP={class:"text-gray-600 dark:text-gray-300 text-sm"},mP={key:0,class:"text-gray-600 dark:text-gray-300 text-xs"},gP={key:1,class:"text-gray-700 dark:text-gray-400 text-sm mt-1"},xP={key:3,class:"text-gray-600 dark:text-gray-300"},wP={__name:"AccountActivity",props:{id:{type:String,required:!0}},setup(e){const a=e,c=Z(!1),o=Z(null),n=Z([]),r=async()=>{c.value=!0,o.value=null;try{const i=encodeURIComponent(a.id),h=await fetch(`/api/resource/Comment?filters=[["reference_doctype", "=", "Account"], ["reference_name", "=", "${i}"]]&order_by=creation desc`,{credentials:"include"});if(!h.ok){const s=await h.text();throw new Error(`Failed to fetch activity: ${h.status} ${h.statusText} - ${s}`)}const d=await h.json();n.value=d.data}catch(i){o.value=i.message,console.error("Error fetching activity:",i)}finally{c.value=!1}};return a1(()=>{r()}),(i,h)=>(m(),b("div",yP,[h[1]||(h[1]=k("h2",{class:"text-xl font-semibold text-gray-900 dark:text-white mb-4"},"Activity",-1)),c.value?(m(),b("div",pP,[P(Qc,{loading:!0}),h[0]||(h[0]=k("p",null,"Loading activity...",-1))])):o.value?(m(),b("p",uP,F(o.value),1)):n.value.length?(m(),b("div",kP,[k("ul",fP,[(m(!0),b(ke,null,Be(n.value,d=>(m(),b("li",{key:d.name,class:"py-3"},[k("p",MP,F(d.subject||d.comment_type||d.operation),1),k("p",vP,F(new Date(d.creation).toLocaleString())+" by "+F(d.owner),1),d.reference_doctype&&d.reference_name?(m(),b("p",mP," Ref: "+F(d.reference_doctype)+" - "+F(d.reference_name),1)):de("",!0),d.content?(m(),b("p",gP,F(d.content),1)):de("",!0)]))),128))])])):(m(),b("p",xP," No activity found for this account or related documents. "))]))}},LP=c1(wP,[["__scopeId","data-v-517f854e"]]),bP={key:0,class:"min-h-screen w-full flex justify-center items-center"},IP={key:1,class:"text-red-500 text-center text-sm font-medium"},CP={key:2,class:"px-0 sm:px-2 lg:px-4"},qP={class:"flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-6"},SP={class:"flex flex-col gap-1"},AP=["id"],zP={class:"text-gray-600 dark:text-gray-300 text-sm"},HP={class:"flex gap-3 border-b border-gray-200 dark:border-gray-700 mb-6"},VP={class:"mt-6 animate-fade-in"},jP={__name:"DynamicPage",setup(e){const a=Z(!0),c=Z(null),o=Z(null),n=Z("accountDetails"),i=sq().params.id;document.title=i+pq;const h=async()=>{a.value=!0,c.value=null;try{const s=await fetch(`/api/resource/Account/${i}`,{credentials:"include"});if(!s.ok){const y=await s.text();throw new Error(`Failed to fetch account details: ${s.status} ${s.statusText} - ${y}`)}const l=await s.json();o.value=l.data}catch(s){c.value=s.message,console.error("Error fetching account details:",s)}finally{a.value=!1}},d=s=>{n.value!==s&&(n.value=s)};return a1(()=>{h()}),Je(i,(s,l)=>{s!==l&&(o.value=null,h())}),(s,l)=>(m(),b(ke,null,[a.value?(m(),b("div",bP,[P(Qc,{loading:a.value},null,8,["loading"])])):de("",!0),c.value?(m(),b("p",IP,F(c.value),1)):de("",!0),o.value?(m(),b("div",CP,[k("div",qP,[k("div",SP,[k("h1",{class:"text-3xl font-bold text-gray-900 dark:text-white",id:ce(i)},F(ce(i)),9,AP),k("p",zP,F(o.value.company),1)])]),k("div",HP,[P(F1,{variant:n.value==="accountDetails"?"light":"ghost",onClick:l[0]||(l[0]=y=>d("accountDetails"))},{default:be(()=>l[4]||(l[4]=[we(" Account Details ")])),_:1,__:[4]},8,["variant"]),P(F1,{variant:n.value==="transactions"?"light":"ghost",onClick:l[1]||(l[1]=y=>d("transactions")),class:"px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"},{default:be(()=>l[5]||(l[5]=[we(" Transactions ")])),_:1,__:[5]},8,["variant"]),P(F1,{variant:n.value==="subAccounts"?"light":"ghost",onClick:l[2]||(l[2]=y=>d("subAccounts")),class:"px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"},{default:be(()=>l[6]||(l[6]=[we(" Sub Accounts ")])),_:1,__:[6]},8,["variant"]),P(F1,{variant:n.value==="activity"?"light":"ghost",onClick:l[3]||(l[3]=y=>d("activity")),class:"px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"},{default:be(()=>l[7]||(l[7]=[we(" Activity ")])),_:1,__:[7]},8,["variant"])]),k("div",VP,[n.value==="accountDetails"?(m(),Se(_j,{key:0,data:o.value},null,8,["data"])):de("",!0),n.value==="transactions"?(m(),Se(aP,{key:1,id:ce(i)},null,8,["id"])):de("",!0),n.value==="subAccounts"?(m(),Se(lP,{key:2,id:ce(i)},null,8,["id"])):de("",!0),n.value==="activity"?(m(),Se(LP,{key:3,id:ce(i)},null,8,["id"])):de("",!0)])])):de("",!0)],64))}},PP=c1(jP,[["__scopeId","data-v-63f3c425"]]),_P={name:"NotFound"},RP={class:"flex items-center justify-center min-h-screen bg-gray-100 px-4"},BP={class:"text-center max-w-lg p-10 bg-white rounded-lg shadow-lg space-y-8"},DP={class:"flex justify-center gap-4 mt-8 animate__animated animate__fadeIn animate__delay-3s"};function FP(e,a,c,o,n,r){const i=C1("router-link");return m(),b("div",RP,[k("div",BP,[a[2]||(a[2]=k("h1",{class:"text-6xl font-extrabold text-red-500 animate__animated animate__fadeIn"}," 404 ",-1)),a[3]||(a[3]=k("p",{class:"text-xl text-gray-700 animate__animated animate__fadeIn animate__delay-1s"}," Oops! The page you're looking for doesn't exist. ",-1)),a[4]||(a[4]=k("p",{class:"text-sm text-gray-500 animate__animated animate__fadeIn animate__delay-2s"}," It may have been moved, or the URL might be incorrect. ",-1)),k("div",DP,[P(i,{to:"/dashboard",class:"px-6 py-3 bg-red-500 text-white text-lg rounded-full hover:bg-red-600 transition duration-300"},{default:be(()=>a[0]||(a[0]=[we(" Go to Dashboard ")])),_:1,__:[0]}),P(i,{to:"/",class:"px-6 py-3 bg-gray-200 text-lg rounded-full hover:bg-gray-300 transition duration-300"},{default:be(()=>a[1]||(a[1]=[we(" Go to Home ")])),_:1,__:[1]})]),a[5]||(a[5]=k("div",{class:"mt-10 animate__animated animate__fadeIn animate__delay-4s"},null,-1))])])}const TP=c1(_P,[["render",FP]]),OP={key:0},EP={key:1,class:"error"},UP={key:2},$P={key:3},ZP={__name:"Subaccounts",setup(e){const a=sq(),c=Z(!0),o=Z(null),n=Z(null),r=ue(()=>a.params.account_name),i=ue(()=>a.params.id),h=async()=>{c.value=!0,o.value=null;try{const d=await fetch(`/api/resource/Account/${r.value}/${i.value}`,{credentials:"include"});if(!d.ok){const l=await d.text();throw new Error(`Failed to fetch account details: ${d.status} ${d.statusText} - ${l}`)}const s=await d.json();n.value=s.data}catch(d){o.value=d.message,console.error("Error fetching account details:",d)}finally{c.value=!1}};return a1(()=>{h()}),(d,s)=>(m(),b("div",null,[s[0]||(s[0]=k("h1",null,"Dynamic Page",-1)),c.value?(m(),b("p",OP,"Loading...")):de("",!0),o.value?(m(),b("p",EP,"Error: "+F(o.value),1)):de("",!0),n.value?(m(),b("p",UP,"Dynamic ID: "+F(i.value),1)):de("",!0),n.value?(m(),b("p",$P,"Account Details: "+F(n.value),1)):de("",!0)]))}};function JL(e,a=""){const c=new Intl.NumberFormat("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(e);return a?`${a} ${c}`:c}const NP={class:"ml-4 mt-1"},GP={class:"flex gap-2 items-center relative"},WP={class:"group-hover:underline"},KP={key:0,class:"text-decorbg-white border shadow-md rounded px-2 py-1 z-10 flex gap-1 text-sm min-w-sm"},XP={key:0,class:"ml-2 border-l border-gray-200 mt-2"},QP={name:"TreeNode"},JP=Object.assign(QP,{props:{node:Object,activeNodeName:{type:String,default:null}},emits:["update-active"],setup(e,{emit:a}){const c=e,o=a,n=Z(!1),r=()=>{n.value=!n.value,c.activeNodeName===c.node.name?o("update-active",null):o("update-active",c.node.name)},i=()=>{console.log("first")};return(h,d)=>{const s=C1("TreeNode",!0);return m(),b("div",NP,[k("div",{class:"flex gap-2 items-center cursor-pointer justify-between text-md font-normal hover:font-semibold group transition-all ease-in-out duration-75",onClick:r},[k("div",GP,[(m(),Se(ro(c.node.children&&c.node.children.length?n.value?ce(Q0):ce(Cc):ce(Lc)),{size:c.node.children&&c.node.children.length?16:10},null,8,["size"])),k("p",WP,F(c.node.name),1),c.activeNodeName===c.node.name?(m(),b("div",KP,[k("button",{class:"flex items-center gap-1 hover:bg-black/90 hover:text-white px-2 py-1 rounded",onClick:j0(i,["stop"])},[P(ce(Hc),{size:"14"}),d[1]||(d[1]=we(" Delete "))]),k("button",{class:"flex items-center gap-1 hover:bg-black/90 hover:text-white px-2 py-1 rounded",onClick:j0(i,["stop"])},[P(ce(J0),{size:"14"}),d[2]||(d[2]=we(" Edit "))]),k("button",{class:"flex items-center gap-1 hover:bg-black/90 hover:text-white px-2 py-1 rounded",onClick:j0(i,["stop"])},[P(ce(Y0),{size:"14"}),d[3]||(d[3]=we(" Add Child "))]),k("button",{class:"flex items-center gap-1 hover:bg-black/90 hover:text-white px-2 py-1 rounded",onClick:j0(i,["stop"])},[P(ce(W0),{size:"14"}),d[4]||(d[4]=we(" View Ledger "))])])):de("",!0)]),k("p",null,F(c.node.debit!==0?ce(JL)(c.node.debit,c.node.currency)+" "+c.node.entry_type:ce(JL)(c.node.credit,c.node.currency)+" "+c.node.entry_type),1)]),n.value&&c.node.children&&c.node.children.length?(m(),b("div",XP,[(m(!0),b(ke,null,Be(c.node.children,(l,y)=>(m(),Se(s,{key:y,node:l,"active-node-name":c.activeNodeName,onUpdateActive:d[0]||(d[0]=f=>o("update-active",f))},null,8,["node","active-node-name"]))),128))])):de("",!0)])}}}),YP={class:"flex items-center justify-between mb-4 border-b pb-4 border-slate-100"},e_={key:0,class:"text-gray-600 dark:text-gray-300 flex-col justify-center"},t_={key:1,class:"flex flex-col gap-2"},a_={class:"flex gap-2 items-center cursor-pointer text-xl font-semibold"},c_={class:"flex flex-col gap-2 ml-8 max-w-4xl"},AI="Kathmandu Hospital (Demo)",o_={__name:"TreeView",setup(e){const a=Z([]),c=Z(!0),o=[{label:"List View",value:"1"},{label:"Tree View",value:"2"}],n=Z(null);document.title="Chart Of Accounts | Quantra";const r=Z("2");a1(async()=>{const d=(await(await fetch(`/api/method/quantra.api.accounts.get_chart_of_accounts?company=${encodeURIComponent(AI)}`,{credentials:"include"})).json()).message;a.value=i(d),c.value=!1});function i(h){const d={},s=[];return h.forEach(l=>{d[l.name]={...l,children:[],expanded:!0}}),h.forEach(l=>{l.parent_account&&d[l.parent_account]?d[l.parent_account].children.push(d[l.name]):s.push(d[l.name])}),s}return Je(r,h=>{h==="1"&&Jc.push("/accounts/chart-of-accounts")}),(h,d)=>(m(),b("div",null,[k("div",YP,[d[2]||(d[2]=k("h1",{class:"text-2xl font-semibold"},"Chart of Accounts",-1)),P(gb,{id:"View",modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=s=>r.value=s),options:o,variant:"neutral",showClearButton:!1,searchable:!1},null,8,["modelValue"])]),c.value?(m(),b("div",e_,[P(Qc,{loading:!0}),d[3]||(d[3]=k("p",null,"Loading ...",-1))])):(m(),b("div",t_,[k("div",a_,[P(ce(Q0),{size:"20"}),we(" "+F(AI))]),k("div",c_,[(m(!0),b(ke,null,Be(a.value,s=>(m(),Se(JP,{key:s.name,node:s,"active-node-name":n.value,onUpdateActive:d[1]||(d[1]=l=>{n.value&&(n.value.value=l)})},null,8,["node","active-node-name"]))),128))])]))]))}},n_={class:"flex items-center justify-between"},r_={key:0,class:"text-gray-500"},i_={key:1,class:"text-red-500"},d_={key:2},h_={__name:"SalesInvoice",setup(e){const a=Z([]),c=Z(!0),o=Z(null);document.title="Sales Invoice | Quantra";const n=["Customer Name","Id","Grand Total","Currency","Status"],r=async()=>{try{const h=["customer_name","name","grand_total","currency","status"],d=new URLSearchParams({fields:JSON.stringify(h),order_by:"posting_date desc",limit_start:"0",limit_page_length:"100"}),l=await(await fetch(`/api/resource/Sales Invoice?${d.toString()}`,{method:"GET",credentials:"include"})).json();a.value=l.data.map(y=>({Id:y.name,"Customer Name":y.customer_name,"Grand Total":` ${JL(y.grand_total,"Rs")}`,Currency:y.currency,Status:y.status.toUpperCase()}))}catch(h){o.value=`Failed to load invoices: ${h.message}`}finally{c.value=!1}},i=()=>{Jc.push("/sales/invoice/new")};return a1(r),(h,d)=>(m(),b("div",null,[k("div",n_,[d[1]||(d[1]=k("h1",{class:"text-2xl font-semibold mb-4"},"Invoice",-1)),P(F1,{class:"flex items-center gap-2",onClick:i},{default:be(()=>[P(ce(Y0),{size:"14"}),d[0]||(d[0]=we("New Sales Invoice"))]),_:1,__:[0]})]),c.value?(m(),b("div",r_,"Loading invoices...")):o.value?(m(),b("div",i_,F(o.value),1)):(m(),b("div",d_,[P(mb,{columns:n,rows:a.value},null,8,["rows"])]))]))}},s_={};function l_(e,a){return"hello world"}const y_=c1(s_,[["render",l_]]),p_=[{path:"/",redirect:"/login"},{path:"/login",component:LH},{path:"/dashboard",component:_L,children:[{path:"",component:pH}],meta:{requiresAuth:!0}},{path:"/accounts",component:_L,children:[{path:"/accounts/chart-of-accounts",component:vj},{path:"/accounts/view/treeview",component:o_},{path:"/accounts/:id",name:"DynamicPage",component:PP,props:!0},{path:"/accounts/:account_name/:id",name:"Subaccounts",component:ZP,props:!0}],meta:{requiresAuth:!0}},{path:"/sales",component:_L,children:[{path:"invoice",component:h_},{path:"invoice/new",component:y_}],meta:{requiresAuth:!0}},{path:"/component-documentation",component:DV,meta:{requiresAuth:!1}},{path:"/:pathMatch(.*)*",component:TP}],Jc=tH({history:zz(),routes:p_});Jc.beforeEach(async(e,a,c)=>{const o=await oH();e.meta.requiresAuth&&o==="Guest"?c("/login"):e.path==="/login"&&o!=="Guest"?c("/dashboard"):c()});const mL=TA(NA);for(const[e,a]of Object.entries(zH))mL.component(e,a);mL.use(GA());mL.use(Jc);mL.mount("#app");

var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,k=null;function Ge(e){if(typeof He==`function`&&Ue(e),k&&typeof k.setStrictMode==`function`)try{k.setStrictMode(We,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=_i(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=_i(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Fa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=lt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=lt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[ht]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(k&&typeof k.onCommitFiberUnmount==`function`)try{k.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[ht]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[ht]=e,Ot(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[ht]=e,Ot(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,ot(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,k&&typeof k.onCommitFiberRoot==`function`)try{k.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),k&&typeof k.onPostCommitFiberRoot==`function`)try{k.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),dt(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Ot(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Ot(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Ot(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ot(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),k=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),u=e(((e,t)=>{t.exports=l()})),d=c(),f=n(),p=u(),m=`https://demo.smartshell.gg/`,h=`inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--ss-line-strong)] bg-[var(--ss-panel)] px-2 font-mono2 text-[10px] font-700 uppercase tracking-[0.04em] text-[var(--ss-text-2)] transition-colors duration-100 ease-linear hover:border-[var(--ss-primary)] hover:text-[var(--ss-text)] sm:px-3`;function g(){let e=(0,f.useRef)(null),[t,n]=(0,f.useState)(!1),[r,i]=(0,f.useState)(!1);return(0,p.jsx)(`div`,{className:`flex h-full min-h-[30rem] min-w-0 flex-col p-3 sm:p-5`,children:(0,p.jsxs)(`section`,{className:`flex min-h-0 min-w-0 flex-1 flex-col border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`header`,{className:`flex min-h-14 min-w-0 items-center border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)]`,children:[(0,p.jsxs)(`div`,{className:`min-w-0 flex-1 px-3 sm:px-4`,children:[(0,p.jsx)(`div`,{className:`truncate font-mono2 text-[9px] uppercase tracking-[0.16em] text-[var(--ss-primary)]`,children:`Панель / интерактивный режим`}),(0,p.jsx)(`h2`,{className:`mt-1 truncate text-sm font-800 text-[var(--ss-text)] sm:text-base`,children:`Управление клубом`})]}),(0,p.jsxs)(`div`,{className:`flex shrink-0`,children:[(0,p.jsxs)(`button`,{type:`button`,onClick:()=>{e.current?.requestFullscreen&&e.current.requestFullscreen()},"aria-label":`Демо на весь экран`,className:h,children:[`⤢ `,(0,p.jsx)(`span`,{className:`ml-1.5 hidden sm:inline`,children:`На весь экран`})]}),(0,p.jsxs)(`a`,{href:m,target:`_blank`,rel:`noreferrer`,className:h,children:[`↗ `,(0,p.jsx)(`span`,{className:`ml-1.5 hidden sm:inline`,children:`Открыть отдельно`})]})]})]}),(0,p.jsxs)(`div`,{ref:e,"data-demo-frame":!0,className:`relative min-h-[24rem] min-w-0 flex-1 overflow-hidden bg-[var(--ss-panel-deep)]`,children:[!t&&!r&&(0,p.jsxs)(`div`,{className:`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[var(--ss-panel-deep)] text-[var(--ss-text-2)]`,children:[(0,p.jsxs)(`div`,{className:`flex gap-1`,"aria-hidden":`true`,children:[(0,p.jsx)(`span`,{className:`h-2 w-2 bg-[var(--ss-primary)] animate-[pulse_0.8s_linear_infinite]`}),(0,p.jsx)(`span`,{className:`h-2 w-2 bg-[var(--ss-primary)] animate-[pulse_0.8s_linear_0.15s_infinite]`}),(0,p.jsx)(`span`,{className:`h-2 w-2 bg-[var(--ss-primary)] animate-[pulse_0.8s_linear_0.3s_infinite]`})]}),(0,p.jsx)(`span`,{className:`font-mono2 text-[10px] uppercase tracking-[0.08em]`,children:`Подключение к демо`})]}),r&&(0,p.jsxs)(`div`,{className:`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[var(--ss-panel-deep)] p-5 text-center`,children:[(0,p.jsx)(`p`,{className:`max-w-md text-sm leading-relaxed text-[var(--ss-text-2)]`,children:`Демо не загрузилось в окне экскурсии. Его можно открыть в отдельной вкладке.`}),(0,p.jsx)(`a`,{href:m,target:`_blank`,rel:`noreferrer`,className:`inline-flex min-h-11 items-center border border-[var(--ss-primary)] bg-[var(--ss-primary)] px-4 font-mono2 text-[10px] font-800 uppercase tracking-[0.05em] text-[#08101a]`,children:`Открыть демо ↗`})]}),(0,p.jsx)(`iframe`,{src:m,title:`Интерактивное демо панели управления SmartShell`,className:`h-full min-h-[24rem] w-full bg-white`,onLoad:()=>n(!0),onError:()=>i(!0),sandbox:`allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads`,referrerPolicy:`strict-origin-when-cross-origin`,allow:`fullscreen`})]})]})})}function _(){return(0,p.jsx)(`div`,{className:`flex h-full min-h-[32rem] min-w-0 flex-col p-3 sm:p-5`,children:(0,p.jsxs)(`section`,{className:`flex min-h-0 min-w-0 flex-1 flex-col border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`header`,{className:`flex min-h-14 items-center justify-between border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] px-3 sm:px-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.16em] text-[var(--ss-primary)]`,children:`Кабинет владельца / аналитика`}),(0,p.jsx)(`h2`,{className:`mt-1 text-sm font-800 text-[var(--ss-text)] sm:text-base`,children:`Показатели клуба`})]}),(0,p.jsx)(`span`,{className:`font-mono2 text-[9px] uppercase tracking-[0.08em] text-[var(--ss-text-3)]`,children:`Раздел 02 / 06`})]}),(0,p.jsxs)(`div`,{className:`grid min-h-0 min-w-0 flex-1 lg:grid-cols-[13rem_minmax(0,1fr)]`,children:[(0,p.jsx)(`aside`,{className:`hidden border-r border-[var(--ss-line)] bg-[var(--ss-panel-deep)] lg:block`,children:[`Сводка`,`Клубы`,`Финансы`,`Отчёты`].map((e,t)=>(0,p.jsxs)(`div`,{className:`flex min-h-12 items-center border-b border-[var(--ss-line)] px-4 font-mono2 text-[10px] uppercase tracking-[0.05em] ${t===0?`bg-[var(--ss-primary)] text-[#08101a]`:`text-[var(--ss-text-3)]`}`,children:[String(t+1).padStart(2,`0`),` / `,e]},e))}),(0,p.jsx)(`figure`,{className:`relative min-h-[25rem] min-w-0 overflow-hidden bg-[var(--ss-panel-deep)]`,children:(0,p.jsx)(`img`,{src:`screens/panel-analytics.webp`,alt:`Раздел аналитики в кабинете владельца SmartShell`,className:`absolute inset-0 h-full w-full object-contain object-top`})})]})]})})}var v=[{file:`screens/gamer-booking.avif`,time:`До визита`,title:`Бронирование места`,text:`Гость выбирает клуб, дату и свободное игровое место в приложении.`},{file:`screens/gamer-pay.avif`,time:`До визита`,title:`Пополнение депозита`,text:`Баланс пополняется в приложении до приезда в клуб.`},{file:`screens/gamer-qr.avif`,time:`В клубе`,title:`Вход по QR`,text:`QR-код связывает профиль гостя с его сессией в SmartShell.`},{file:`screens/gamer-pay-confirm.avif`,time:`После игры`,title:`История и профиль`,text:`В приложении остаются операции, активность и данные профиля гостя.`}],y=`inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--ss-line-strong)] bg-[var(--ss-panel)] font-mono2 text-xs text-[var(--ss-text-2)] transition-colors duration-100 ease-linear hover:border-[var(--ss-primary)] hover:text-[var(--ss-text)] disabled:cursor-not-allowed disabled:opacity-30`;function b(){let[e,t]=(0,f.useState)(0),n=v[e];return(0,p.jsx)(`div`,{className:`h-full min-h-[34rem] min-w-0 overflow-y-auto p-3 sm:p-5`,children:(0,p.jsxs)(`section`,{className:`mx-auto flex min-h-full w-full max-w-[100rem] min-w-0 flex-col border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`header`,{className:`flex min-h-14 items-center justify-between border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] px-3 sm:px-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.16em] text-[var(--ss-primary)]`,children:`SmartGamer / путь гостя`}),(0,p.jsx)(`h2`,{className:`mt-1 text-sm font-800 text-[var(--ss-text)] sm:text-base`,children:`От бронирования до истории сессии`})]}),(0,p.jsxs)(`span`,{className:`font-mono2 text-[9px] uppercase tracking-[0.08em] text-[var(--ss-text-3)]`,children:[String(e+1).padStart(2,`0`),` / `,String(v.length).padStart(2,`0`)]})]}),(0,p.jsxs)(`div`,{className:`grid min-h-0 min-w-0 flex-1 lg:grid-cols-[15rem_minmax(18rem,1fr)_20rem]`,children:[(0,p.jsx)(`div`,{className:`grid grid-cols-2 border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] sm:grid-cols-4 lg:block lg:border-b-0 lg:border-r`,role:`tablist`,"aria-label":`Этапы пути гостя`,children:v.map((n,r)=>(0,p.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":r===e,onClick:()=>t(r),className:`min-h-14 border-b border-r border-[var(--ss-line)] px-3 text-left font-mono2 text-[10px] uppercase tracking-[0.04em] transition-colors duration-100 ease-linear lg:w-full ${r===e?`bg-[var(--ss-primary)] text-[#08101a]`:`bg-[var(--ss-panel-deep)] text-[var(--ss-text-3)] hover:bg-[var(--ss-panel-soft)] hover:text-[var(--ss-text)]`}`,children:[(0,p.jsx)(`span`,{className:`mr-2 opacity-70`,children:String(r+1).padStart(2,`0`)}),n.title]},n.title))}),(0,p.jsx)(`div`,{className:`flex min-h-[22rem] min-w-0 items-center justify-center border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] p-3 lg:border-b-0 lg:border-r sm:p-5`,children:(0,p.jsx)(`div`,{className:`relative aspect-[870/840] h-full max-h-[34rem] w-full max-w-[34rem] overflow-hidden border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:(0,p.jsx)(`img`,{src:n.file,alt:`SmartGamer — ${n.title}`,className:`absolute inset-0 h-full w-full object-cover rise`},n.file)})}),(0,p.jsxs)(`aside`,{className:`flex min-h-[16rem] flex-col bg-[var(--ss-panel)] p-4 sm:p-5`,"aria-live":`polite`,children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.12em] text-[var(--ss-primary)]`,children:n.time}),(0,p.jsx)(`div`,{className:`mt-8 font-mono2 text-[2.75rem] font-800 leading-none text-[var(--ss-text-3)]`,children:String(e+1).padStart(2,`0`)}),(0,p.jsx)(`h3`,{className:`mt-4 text-xl font-800 leading-tight text-[var(--ss-text)]`,children:n.title}),(0,p.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-[var(--ss-text-2)]`,children:n.text}),(0,p.jsxs)(`div`,{className:`mt-auto flex justify-end pt-6`,children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(Math.max(0,e-1)),disabled:e===0,"aria-label":`Предыдущий этап`,className:y,children:`←`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(Math.min(v.length-1,e+1)),disabled:e===v.length-1,"aria-label":`Следующий этап`,className:y,children:`→`})]})]})]})]})})}var x=[{x:`26%`,y:`38%`,title:`Игры и приложения`,text:`Гость запускает доступный контент из оболочки, не переходя к рабочему столу Windows.`},{x:`74%`,y:`14%`,title:`Сессия и баланс`,text:`Время сессии и доступный баланс остаются в интерфейсе игрового места.`},{x:`82%`,y:`58%`,title:`Профиль гостя`,text:`Достижения и данные профиля доступны в том же клиентском контуре.`}];function ee(){let[e,t]=(0,f.useState)(0),n=x[e];return(0,p.jsx)(`div`,{className:`h-full min-h-[34rem] min-w-0 overflow-y-auto p-3 sm:p-5`,children:(0,p.jsxs)(`section`,{className:`mx-auto flex min-h-full w-full max-w-[100rem] min-w-0 flex-col border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`header`,{className:`flex min-h-14 items-center justify-between border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] px-3 sm:px-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.16em] text-[var(--ss-primary)]`,children:`Shell / игровое место`}),(0,p.jsx)(`h2`,{className:`mt-1 text-sm font-800 text-[var(--ss-text)] sm:text-base`,children:`Клиентская оболочка`})]}),(0,p.jsx)(`span`,{className:`font-mono2 text-[9px] uppercase tracking-[0.08em] text-[var(--ss-text-3)]`,children:`Выберите область`})]}),(0,p.jsxs)(`div`,{className:`grid min-h-0 min-w-0 flex-1 lg:grid-cols-[minmax(0,1fr)_21rem]`,children:[(0,p.jsxs)(`div`,{className:`relative min-h-[28rem] min-w-0 overflow-hidden border-b border-[var(--ss-line)] bg-black lg:border-b-0 lg:border-r`,children:[(0,p.jsx)(`img`,{src:`screens/shell-main-1920.webp`,srcSet:`screens/shell-main-1024.webp 1024w, screens/shell-main-1920.webp 1920w`,sizes:`(min-width: 1024px) 75vw, 100vw`,alt:`Клиентская оболочка Shell на игровом компьютере`,className:`absolute inset-0 h-full w-full object-cover`}),x.map((n,r)=>(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(r),"aria-label":`Показать область: ${n.title}`,"aria-pressed":r===e,style:{left:n.x,top:n.y,transform:`translate(-50%, -50%)`},className:`absolute z-10 flex h-9 w-9 items-center justify-center border font-mono2 text-[10px] font-800 transition-colors duration-100 ease-linear ${r===e?`border-[var(--ss-primary)] bg-[var(--ss-primary)] text-[#08101a]`:`border-white bg-black text-white hover:bg-[var(--ss-primary)] hover:text-[#08101a]`}`,children:String(r+1).padStart(2,`0`)},n.title))]}),(0,p.jsxs)(`aside`,{className:`flex min-h-[20rem] flex-col bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`div`,{className:`border-b border-[var(--ss-line)] p-4 sm:p-5`,"aria-live":`polite`,children:[(0,p.jsxs)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.12em] text-[var(--ss-primary)]`,children:[`Область `,String(e+1).padStart(2,`0`)]}),(0,p.jsxs)(`div`,{className:`rise`,children:[(0,p.jsx)(`h3`,{className:`mt-5 text-xl font-800 leading-tight text-[var(--ss-text)]`,children:n.title}),(0,p.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-[var(--ss-text-2)]`,children:n.text})]},e)]}),(0,p.jsx)(`div`,{className:`mt-auto`,children:x.map((n,r)=>(0,p.jsxs)(`button`,{type:`button`,onClick:()=>t(r),className:`flex min-h-12 w-full items-center border-t border-[var(--ss-line)] px-4 text-left font-mono2 text-[10px] uppercase tracking-[0.04em] transition-colors duration-100 ease-linear ${r===e?`bg-[var(--ss-primary)] text-[#08101a]`:`bg-[var(--ss-panel-deep)] text-[var(--ss-text-3)] hover:text-[var(--ss-text)]`}`,children:[(0,p.jsx)(`span`,{className:`mr-3 opacity-70`,children:String(r+1).padStart(2,`0`)}),n.title]},n.title))})]})]})]})})}var S=[`owner-cabinet`,`admin-panel`,`shell`,`smartgamer`,`smartkiosk`,`smartlock-tv`,`console-controller`,`smartpremium`,`api-integrations`],C=`https://lk.smartshell.gg/register`,te={"owner-cabinet":{slug:`owner-cabinet`,name:`Кабинет владельца`,category:`SmartShell Cloud`,audience:`Владелец и управляющий`,title:`Клубы, подписки и доступы — в одном кабинете.`,summary:`Точка входа для создания клуба, управления сетью и настройки организационной части SmartShell.`,description:`Кабинет владельца хранит структуру бизнеса: клубы, данные организаций, подписки и доступы. Из него владелец переходит к операционному управлению, подключает новые площадки и поддерживает единые настройки сети.`,capabilities:[{title:`Создание и настройка клуба`,description:`Карточка площадки, контакты, адрес, юридические данные и параметры, необходимые для подключения сервисов.`},{title:`Управление сетью`,description:`Объединение площадок одного владельца и настройка общих правил для клубов внутри сети.`},{title:`Подписка и игровые места`,description:`Выбор тарифа, управление подпиской и составом игровых мест без обращения к отдельной системе.`},{title:`Доступ к рабочим контурам`,description:`Переход к панели администратора и управление тем, какие сотрудники работают с клубом.`}],ecosystemRole:`Верхний уровень SmartShell Cloud. Здесь появляется клуб как объект управления, а ежедневная работа продолжается в панели администратора и клиентских приложениях.`,connections:[{label:`Передаёт структуру`,description:`Клубы, площадки и параметры становятся основой для панели администратора, Shell и гостевых сервисов.`},{label:`Собирает сеть`,description:`Несколько клубов объединяются в один контур владельца с согласованными настройками.`},{label:`Открывает платформу`,description:`После создания клуба можно подключать гостевые приложения, консольную зону, поддержку и интеграции.`}],related:[`admin-panel`,`api-integrations`,`smartpremium`],signals:[`Клубы`,`Сеть`,`Подписка`,`Доступы`],media:[],officialHref:`https://lk.smartshell.gg/login`,officialLabel:`Войти в кабинет`,primaryHref:C,primaryLabel:`Создать клуб`},"admin-panel":{slug:`admin-panel`,name:`Панель администратора`,category:`SmartShell Cloud`,audience:`Администратор смены и управляющий`,title:`Вся смена — в одном рабочем пространстве.`,summary:`Карта зала, биллинг, касса, гости, бронирования и отчёты связаны в ежедневный сценарий клуба.`,description:`Панель администратора помогает вести клуб без разрозненных таблиц и переключений между программами. Сотрудник видит состояние игровых мест, запускает сессии, работает с оплатами и сохраняет историю действий.`,capabilities:[{title:`Карта зала и сессии`,description:`Статусы игровых мест, активные сессии и действия с компьютерами доступны в общем контексте смены.`},{title:`Касса и операции`,description:`Пополнения, продажи, возвраты и способы оплаты сохраняются в истории операций клуба.`},{title:`Гости и лояльность`,description:`Профили гостей, депозиты, скидки и история посещений помогают администратору работать персонально.`},{title:`Брони и расписание`,description:`Бронирования связаны с картой зала и доступны сотрудникам в том же интерфейсе.`},{title:`Отчёты и контроль`,description:`Операционные данные, логи действий и разграничение прав помогают владельцу контролировать работу клуба.`}],ecosystemRole:`Операционное ядро клуба. Панель получает структуру из кабинета владельца, управляет игровыми местами через Shell и обслуживает сценарии SmartGamer, SmartKiosk и консольной зоны.`,connections:[{label:`Управляет залом`,description:`Команды и статусы игровых мест связывают работу администратора с клиентским Shell.`},{label:`Обслуживает гостей`,description:`Бронирования, пополнения и профили синхронизируются с гостевыми точками входа.`},{label:`Фиксирует события`,description:`Операции смены формируют историю, доступную для контроля и анализа.`}],related:[`owner-cabinet`,`shell`,`smartgamer`,`smartkiosk`],signals:[`Карта зала`,`Касса`,`Гости`,`Отчёты`],media:[{src:`screens/panel-dashboard.webp`,alt:`Дашборд смены в панели администратора SmartShell`,label:`Дашборд смены`,objectPosition:`top`},{src:`screens/panel-map.webp`,alt:`Карта игрового зала в панели администратора SmartShell`,label:`Карта зала`,objectPosition:`top`},{src:`screens/panel-payments.webp`,alt:`История платежей в панели администратора SmartShell`,label:`Платежи`,objectPosition:`top`},{src:`screens/panel-bookings.webp`,alt:`Бронирования в панели администратора SmartShell`,label:`Бронирования`,objectPosition:`top`},{src:`screens/panel-clients.webp`,alt:`Список клиентов в панели администратора SmartShell`,label:`Клиенты`,objectPosition:`top`},{src:`screens/panel-analytics.webp`,alt:`Аналитика клуба в панели администратора SmartShell`,label:`Аналитика`,objectPosition:`top`}],officialHref:`https://admin.smartshell.gg`,officialLabel:`Открыть панель`,primaryHref:C,primaryLabel:`Создать клуб`},shell:{slug:`shell`,name:`Shell`,category:`Игровое место`,audience:`Гость клуба`,title:`Игры и сессия — вместо рабочего стола Windows.`,summary:`Клиентская оболочка на игровом компьютере даёт гостю понятный старт и защищает системный контур клуба.`,description:`Shell показывает гостю каталог игр и приложений, состояние сессии и доступные действия. Администратор настраивает оболочку и ограничения централизованно, сохраняя игровой компьютер готовым к следующему гостю.`,capabilities:[{title:`Каталог игр и приложений`,description:`Гость запускает доступный контент из интерфейса клуба, не переходя к рабочему столу операционной системы.`},{title:`Сессия и баланс`,description:`В оболочке видны состояние аккаунта, игровое время и действия, связанные с текущим посещением.`},{title:`Настройки клуба`,description:`Правила, витрина товаров и доступные гостю функции задаются из панели управления.`},{title:`Защита игрового компьютера`,description:`Скрытие дисков, блокировка нежелательных окон и ограничение системных действий настраиваются под клуб.`},{title:`Связь с администратором`,description:`Гость может запросить помощь, а сотрудник видит обращение в рабочем контуре смены.`}],ecosystemRole:`Клиентский слой SmartShell на каждом игровом компьютере. Он исполняет настройки панели администратора и продолжает путь гостя после бронирования или входа.`,connections:[{label:`Получает настройки`,description:`Игры, приложения, правила и ограничения приходят из панели администратора.`},{label:`Продолжает сессию`,description:`После входа гостя Shell связывает игровой компьютер с его профилем и активным временем.`},{label:`Возвращает статус`,description:`Состояние игрового места остаётся видимым сотрудникам на карте зала.`}],related:[`admin-panel`,`smartgamer`,`smartkiosk`],signals:[`Игры`,`Сессия`,`Баланс`,`Безопасность`],media:[{src:`screens/shell-main-1920.webp`,alt:`Главный экран клиентского Shell SmartShell`,label:`Главный экран`,objectPosition:`center`},{src:`screens/shell-hide-drives.webp`,alt:`Настройка скрытия дисков для Shell SmartShell`,label:`Скрытие дисков`,objectPosition:`top`},{src:`screens/shell-block-windows.webp`,alt:`Настройка блокировки окон для Shell SmartShell`,label:`Блокировка окон`,objectPosition:`top`},{src:`screens/shell-taskmgr.webp`,alt:`Ограничение системных действий в Shell SmartShell`,label:`Защита системы`,objectPosition:`top`}],officialHref:`https://smartshell.gg/safety/`,officialLabel:`Подробнее о Shell`,primaryHref:C,primaryLabel:`Подключить SmartShell`},smartgamer:{slug:`smartgamer`,name:`SmartGamer`,category:`Приложение гостя`,audience:`До визита и в клубе`,title:`Клуб начинается в телефоне гостя.`,summary:`Поиск клуба, бронирование, пополнение и вход по QR продолжаются одной сессией в SmartShell.`,description:`SmartGamer связывает гостя с клубом до визита и во время игры. Пользователь выбирает площадку, изучает условия, бронирует место, пополняет депозит и входит в аккаунт без отдельной регистрации на стойке.`,capabilities:[{title:`Карта клубов`,description:`Гость видит площадки, их адреса, оснащение, цены, товары и акции.`},{title:`Онлайн-бронирование`,description:`Игровое место выбирается заранее, а бронь появляется в рабочем контуре клуба.`},{title:`Пополнение депозита`,description:`Баланс гостя можно пополнить в приложении до визита или во время сессии.`},{title:`Вход по QR`,description:`QR связывает профиль гостя с игровым местом или консольной сессией.`},{title:`Отзывы и активность`,description:`Гость может оценить посещение и видеть свою активность внутри клубной экосистемы.`}],ecosystemRole:`Мобильная точка входа гостя. SmartGamer передаёт бронирования и платежи в SmartShell, а в клубе помогает начать сессию на компьютере или консоли.`,connections:[{label:`До визита`,description:`Площадка, место и время выбираются до приезда в клуб.`},{label:`На входе`,description:`Профиль и депозит уже доступны системе, когда гость приходит играть.`},{label:`Во время сессии`,description:`Приложение остаётся связующим звеном для пополнения и QR-сценариев.`}],related:[`admin-panel`,`shell`,`smartlock-tv`],signals:[`Карта клубов`,`Бронь`,`Оплата`,`QR-вход`],media:[{src:`screens/gamer-booking.avif`,alt:`Выбор игрового места в приложении SmartGamer`,label:`Бронирование`,objectPosition:`center`},{src:`screens/gamer-pay.avif`,alt:`Пополнение депозита в приложении SmartGamer`,label:`Пополнение`,objectPosition:`center`},{src:`screens/gamer-pay-confirm.avif`,alt:`Подтверждение платежа в приложении SmartGamer`,label:`Подтверждение`,objectPosition:`center`},{src:`screens/gamer-qr.avif`,alt:`QR-вход в приложении SmartGamer`,label:`QR-вход`,objectPosition:`center`}],officialHref:`https://smartshell.gg/smartgamer/`,officialLabel:`Подробнее о SmartGamer`,primaryHref:C,primaryLabel:`Добавить свой клуб`},smartkiosk:{slug:`smartkiosk`,name:`SmartKiosk`,category:`Самообслуживание`,audience:`Гость у стойки`,title:`Гость решает типовые задачи без очереди.`,summary:`Терминал самообслуживания переносит регистрацию, пополнение и информацию о клубе на отдельную точку.`,description:`SmartKiosk работает в клубе рядом со стойкой администратора. Новый гость может зарегистрироваться, пополнить депозит, открыть правила и посмотреть состояние зала, пока сотрудник занимается ситуациями, где действительно нужна помощь.`,capabilities:[{title:`Самостоятельная регистрация`,description:`Новый гость создаёт аккаунт без ручного ввода данных сотрудником клуба.`},{title:`Пополнение через СБП`,description:`Депозит пополняется с терминала перед началом игровой сессии.`},{title:`Правила клуба`,description:`Условия посещения доступны гостю в понятном интерфейсе у стойки.`},{title:`Карта и загрузка зала`,description:`Гость видит состояние игровых мест, бронирования и техническое обслуживание.`},{title:`Кешбэк и витрина`,description:`Терминал показывает доступный кешбэк и товары клуба в момент пополнения.`}],ecosystemRole:`Стационарная гостевая точка SmartShell. Терминал использует данные клуба и профили гостей, а результаты действий сразу доступны администратору.`,connections:[{label:`Снимает очередь`,description:`Повторяемые операции переходят с рабочего места администратора на терминал.`},{label:`Работает с профилем`,description:`Регистрация и депозит остаются частью общей клиентской базы клуба.`},{label:`Показывает зал`,description:`Статусы игровых мест приходят из того же контура, которым управляет смена.`}],related:[`admin-panel`,`shell`,`smartgamer`],signals:[`Регистрация`,`СБП`,`Карта зала`,`Правила`],media:[],officialHref:`https://smartshell.gg/smartkiosk/`,officialLabel:`Подробнее о SmartKiosk`,primaryHref:C,primaryLabel:`Подключить SmartShell`},"smartlock-tv":{slug:`smartlock-tv`,name:`SmartLock TV`,category:`Консольная зона`,audience:`Гость и администратор`,title:`Телевизор становится интерфейсом консольной сессии.`,summary:`QR-вход, таймер и сообщения администратора выводятся прямо на экран игровой зоны.`,description:`SmartLock TV связывает телевизор, профиль гостя и биллинг клуба. Гость начинает сессию через SmartGamer, видит оставшееся время и получает уведомления, а администратор контролирует консольную зону из общей системы.`,capabilities:[{title:`QR-авторизация`,description:`Гость запускает консольную сессию через SmartGamer без отдельного входа у администратора.`},{title:`Таймер сессии`,description:`Оставшееся игровое время доступно гостю в контексте консольной зоны.`},{title:`Предупреждения`,description:`Система заранее сообщает о завершении оплаченного времени на экране телевизора.`},{title:`Сообщения администратора`,description:`Сотрудник может передать гостю уведомление через панель управления.`}],ecosystemRole:`Экранный слой консольной зоны. SmartLock TV работает вместе со SmartGamer и SmartShell, а контроллер приставки подключает физическое игровое место к биллингу.`,connections:[{label:`Начинается в SmartGamer`,description:`QR-вход связывает мобильный профиль гостя с консольной сессией.`},{label:`Подчиняется биллингу`,description:`Время и состояние сессии остаются частью общей системы клуба.`},{label:`Работает на TV`,description:`Таймер и сообщения появляются там, где гость играет.`}],related:[`smartgamer`,`console-controller`,`admin-panel`],signals:[`QR-вход`,`Таймер`,`Уведомления`,`TV`],media:[],officialHref:`https://smartshell.gg/smartlocktv/`,officialLabel:`Подробнее о SmartLock TV`,primaryHref:C,primaryLabel:`Подключить SmartShell`},"console-controller":{slug:`console-controller`,name:`Контроллер приставок`,category:`Консольная зона`,audience:`Администратор клуба`,title:`Приставки входят в общий биллинг клуба.`,summary:`Дополнительное устройство связывает видеосигнал консоли с управлением сессией в SmartShell.`,description:`Контроллер подключает консольное место к общей панели управления. Администратор видит приставки рядом с компьютерами, а игровое время учитывается в едином операционном контуре клуба.`,capabilities:[{title:`Единая карта мест`,description:`Консольные места доступны администратору в том же рабочем пространстве, что и игровые компьютеры.`},{title:`Учёт времени`,description:`Консольная сессия управляется правилами биллинга клуба.`},{title:`Поддержка разных зон`,description:`Контроллер подходит для приставок, устройств виртуальной реальности и симуляторов с видеовыходом.`},{title:`Управление видеопотоком`,description:`Устройство включается между игровой системой и телевизором и меняет состояние экрана по команде SmartShell.`}],ecosystemRole:`Аппаратный мост между консолью, телевизором и SmartShell. Вместе со SmartLock TV он превращает отдельную консольную зону в управляемую часть клуба.`,connections:[{label:`Принимает видеосигнал`,description:`Контроллер устанавливается в цепочку между игровой системой и экраном.`},{label:`Получает команды`,description:`SmartShell управляет состоянием места в соответствии с активной сессией.`},{label:`Дополняет SmartLock TV`,description:`Экранный интерфейс и аппаратный контроллер закрывают разные части одного сценария.`}],related:[`smartlock-tv`,`admin-panel`,`smartgamer`],signals:[`Консоль`,`Биллинг`,`Видеосигнал`,`TV`],media:[],officialHref:`https://smartshell.gg/gaming-console/`,officialLabel:`Подробнее о контроллере`,primaryHref:C,primaryLabel:`Подключить SmartShell`},smartpremium:{slug:`smartpremium`,name:`SmartPremium`,category:`Инженерный сервис`,audience:`Владелец и команда клуба`,title:`Инфраструктура клуба — на стороне профильных инженеров.`,summary:`Аудит, настройка, мониторинг и техническая поддержка дополняют программный контур SmartShell.`,description:`SmartPremium берёт на себя системные задачи клуба: сеть, серверы, игровые компьютеры, обновления и реакцию на инциденты. Администраторы получают прямой канал к инженерам, а владелец — единый контур ответственности за инфраструктуру.`,capabilities:[{title:`Аудит инфраструктуры`,description:`Инженеры проверяют сеть, серверы и игровые компьютеры и формируют план оптимизации.`},{title:`Настройка серверов и сети`,description:`Команда помогает выстроить хранение, загрузку игровых мест и сетевую схему клуба.`},{title:`Мониторинг и инциденты`,description:`Состояние оборудования и сети отслеживается, а проблемы передаются инженерам для разбора.`},{title:`Игры, ПО и драйверы`,description:`Обновления клиентского и серверного контура входят в регулярную техническую работу.`},{title:`Поддержка команды клуба`,description:`Администраторы связываются с техническими специалистами через рабочий канал поддержки.`}],ecosystemRole:`Сервисный слой вокруг SmartShell. Он не заменяет продукты платформы, а обеспечивает инфраструктуру, на которой стабильно работают панель, Shell и гостевые приложения.`,connections:[{label:`Поддерживает основу`,description:`Сеть, серверы и игровые компьютеры готовятся к работе программного комплекса.`},{label:`Сопровождает переход`,description:`Инженеры помогают перенести клуб и настроить систему.`},{label:`Помогает смене`,description:`Администраторы получают прямую связь с технической командой при инцидентах.`}],related:[`owner-cabinet`,`admin-panel`,`shell`],signals:[`Сеть`,`Серверы`,`Обновления`,`Поддержка`],media:[],officialHref:`https://smartshell.gg/smartpremium/`,officialLabel:`Условия SmartPremium`,primaryHref:C,primaryLabel:`Создать клуб`},"api-integrations":{slug:`api-integrations`,name:`API и интеграции`,category:`Платформа`,audience:`Команда продукта и разработчики`,title:`Данные клуба работают и за пределами интерфейса.`,summary:`GraphQL API связывает SmartShell с сайтом клуба, собственными модулями и внешними сервисами.`,description:`API открывает программный доступ к поддерживаемым данным и операциям SmartShell. Команда клуба может построить собственный пользовательский сценарий поверх единой платформы, не дублируя данные вручную.`,capabilities:[{title:`Запрос нужных данных`,description:`GraphQL позволяет клиенту получать только те поля, которые нужны конкретному интерфейсу.`},{title:`Сайт и личные сценарии`,description:`Интеграция может связать публичный сайт клуба с доступными данными SmartShell.`},{title:`Собственные модули`,description:`Команда может расширять внутренние процессы поверх существующей модели клуба.`},{title:`Внешние сервисы`,description:`Доступные методы позволяют подключать системы, которые участвуют в операционной работе клуба.`}],ecosystemRole:`Интеграционный слой платформы. API соединяет данные SmartShell с интерфейсами и сервисами, которые клуб разрабатывает или подключает отдельно.`,connections:[{label:`Читает платформу`,description:`Запросы работают с доступной схемой данных SmartShell.`},{label:`Питает интерфейсы`,description:`Сайт и собственные приложения могут получать данные из единого источника.`},{label:`Расширяет процессы`,description:`Интеграции добавляются вокруг основной системы без ручного дублирования данных.`}],related:[`owner-cabinet`,`admin-panel`,`smartgamer`],signals:[`GraphQL`,`Сайт клуба`,`Модули`,`Сервисы`],media:[],officialHref:`https://support.smartshell.gg/hc/en-us/articles/11056553046413-SmartShell-API-and-how-to-use-it`,officialLabel:`Документация API`,primaryHref:C,primaryLabel:`Создать клуб`}};function ne(e){return S.includes(e)}function re(e){return ne(e)?te[e]:void 0}var w=S.map(e=>te[e]);function ie(){return(0,p.jsx)(`div`,{className:`h-full min-h-[34rem] min-w-0 overflow-y-auto p-3 sm:p-5`,children:(0,p.jsxs)(`section`,{className:`mx-auto flex min-h-full w-full max-w-[100rem] min-w-0 flex-col border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`header`,{className:`flex min-h-14 items-center justify-between border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] px-3 sm:px-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.16em] text-[var(--ss-primary)]`,children:`SmartShell / карта продуктов`}),(0,p.jsx)(`h2`,{className:`mt-1 text-sm font-800 text-[var(--ss-text)] sm:text-base`,children:`Рабочие модули системы`})]}),(0,p.jsxs)(`span`,{className:`font-mono2 text-[9px] uppercase tracking-[0.08em] text-[var(--ss-text-3)]`,children:[`Продуктов / `,String(w.length).padStart(2,`0`)]})]}),(0,p.jsx)(`div`,{className:`grid min-w-0 flex-1 sm:grid-cols-2 lg:grid-cols-3`,children:w.map((e,t)=>(0,p.jsxs)(`a`,{href:`#/products/${e.slug}`,className:`group flex min-h-[10rem] min-w-0 flex-col border-b border-r border-[var(--ss-line)] bg-[var(--ss-panel)] p-4 transition-colors duration-100 ease-linear hover:bg-[var(--ss-panel-deep)] sm:p-5`,children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between font-mono2 text-[9px] uppercase tracking-[0.08em]`,children:[(0,p.jsx)(`span`,{className:`text-[var(--ss-primary)]`,children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`span`,{className:`truncate pl-3 text-[var(--ss-text-3)]`,children:e.category})]}),(0,p.jsx)(`h3`,{className:`mt-5 break-words text-lg font-800 leading-tight text-[var(--ss-text)]`,children:e.name}),(0,p.jsx)(`p`,{className:`mt-2 text-xs leading-relaxed text-[var(--ss-text-2)]`,children:e.audience}),(0,p.jsx)(`span`,{className:`mt-auto pt-5 font-mono2 text-[10px] font-700 uppercase tracking-[0.05em] text-[var(--ss-text-3)] transition-colors duration-100 ease-linear group-hover:text-[var(--ss-primary)]`,children:`Открыть модуль →`})]},e.slug))})]})})}var ae=[{title:`Резервная копия`,owner:`SmartShell`,description:`Контур данных клуба сохраняет состояние, необходимое для восстановления.`},{title:`Обновления игр и ПО`,owner:`SmartPremium`,description:`Инженерный контур отвечает за актуальность игр, программ и драйверов.`},{title:`Мониторинг инфраструктуры`,owner:`SmartPremium`,description:`Сеть, игровые компьютеры и серверы остаются в зоне наблюдения команды.`}];function oe(){return(0,p.jsx)(`div`,{className:`h-full min-h-[32rem] min-w-0 overflow-y-auto p-3 sm:p-5`,children:(0,p.jsxs)(`section`,{className:`mx-auto flex min-h-full w-full max-w-[100rem] min-w-0 flex-col border border-[var(--ss-line-strong)] bg-[var(--ss-panel)]`,children:[(0,p.jsxs)(`header`,{className:`flex min-h-14 items-center justify-between border-b border-[var(--ss-line)] bg-[var(--ss-panel-deep)] px-3 sm:px-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.16em] text-[var(--ss-primary)]`,children:`Система / инфраструктура`}),(0,p.jsx)(`h2`,{className:`mt-1 text-sm font-800 text-[var(--ss-text)] sm:text-base`,children:`Фоновые процессы клуба`})]}),(0,p.jsx)(`span`,{className:`font-mono2 text-[9px] uppercase tracking-[0.08em] text-[var(--ss-text-3)]`,children:`Контур / активен`})]}),(0,p.jsxs)(`div`,{className:`grid min-h-0 min-w-0 flex-1 lg:grid-cols-[minmax(0,1fr)_21rem]`,children:[(0,p.jsx)(`div`,{className:`min-w-0 border-b border-[var(--ss-line)] lg:border-b-0 lg:border-r`,children:(0,p.jsx)(`div`,{className:`grid min-h-full sm:grid-cols-3`,children:ae.map((e,t)=>(0,p.jsxs)(`article`,{className:`flex min-h-[16rem] flex-col border-b border-r border-[var(--ss-line)] bg-[var(--ss-panel)] p-4 sm:p-5`,children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[2.75rem] font-800 leading-none text-[var(--ss-text-3)]`,children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`div`,{className:`mt-6 font-mono2 text-[9px] uppercase tracking-[0.1em] text-[var(--ss-primary)]`,children:e.owner}),(0,p.jsx)(`h3`,{className:`mt-3 text-lg font-800 leading-tight text-[var(--ss-text)]`,children:e.title}),(0,p.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-[var(--ss-text-2)]`,children:e.description}),(0,p.jsxs)(`div`,{className:`mt-auto flex items-center justify-between border-t border-[var(--ss-line)] pt-4 font-mono2 text-[9px] uppercase tracking-[0.05em]`,children:[(0,p.jsx)(`span`,{className:`text-[var(--ss-text-3)]`,children:`Состояние`}),(0,p.jsx)(`span`,{className:`text-[var(--ss-success)]`,children:`В системе`})]})]},e.title))})}),(0,p.jsxs)(`aside`,{className:`flex min-h-[18rem] flex-col bg-[var(--ss-panel-deep)] p-4 sm:p-5`,children:[(0,p.jsx)(`div`,{className:`font-mono2 text-[9px] uppercase tracking-[0.12em] text-[var(--ss-primary)]`,children:`Разделение ответственности`}),(0,p.jsxs)(`dl`,{className:`mt-6 font-mono2 text-[10px] uppercase tracking-[0.04em]`,children:[(0,p.jsxs)(`div`,{className:`border-t border-[var(--ss-line)] py-4`,children:[(0,p.jsx)(`dt`,{className:`text-[var(--ss-text-3)]`,children:`Программный контур`}),(0,p.jsx)(`dd`,{className:`mt-2 text-[var(--ss-text)]`,children:`SmartShell`})]}),(0,p.jsxs)(`div`,{className:`border-y border-[var(--ss-line)] py-4`,children:[(0,p.jsx)(`dt`,{className:`text-[var(--ss-text-3)]`,children:`Инженерный контур`}),(0,p.jsx)(`dd`,{className:`mt-2 text-[var(--ss-text)]`,children:`SmartPremium`})]})]}),(0,p.jsx)(`p`,{className:`mt-auto pt-6 text-sm leading-relaxed text-[var(--ss-text-2)]`,children:`Продукт и инфраструктура показаны как связанные рабочие контуры, а не как отдельные рекламные услуги.`})]})]})]})})}var se=[{id:`demo`,time:`13:00`,label:`Панель`,component:g},{id:`analytics`,time:`19:00`,label:`Аналитика`,component:_},{id:`guest`,time:`21:00`,label:`Путь гостя`,component:b},{id:`shell`,time:`23:00`,label:`Shell`,component:ee},{id:`products`,time:`23:30`,label:`Продукты`,component:ie},{id:`night`,time:`02:00`,label:`Инфраструктура`,component:oe}],ce=(0,f.createContext)({open:()=>{},close:()=>{}}),le=()=>(0,f.useContext)(ce),ue=`a[href], button:not([disabled]), input:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])`;function T(){let e=location.hash.match(/#tour=(\d+)/);if(!e)return null;let t=Number(e[1])-1;return t>=0&&t<se.length?t:null}function E({children:e}){let[t,n]=(0,f.useState)(null),r=(0,f.useRef)(null),i=(0,f.useRef)(null),a=(0,f.useRef)(`#overview`),o=(0,f.useCallback)((e=0)=>{i.current=document.activeElement,T()===null&&(a.current=location.hash||`#overview`),n(Math.min(Math.max(e,0),se.length-1))},[]),s=(0,f.useCallback)(()=>{n(null);let e=a.current||`#overview`;history.replaceState(null,``,`${location.pathname}${location.search}${e}`)},[]);(0,f.useEffect)(()=>{let e=T();e!==null&&n(e);let t=()=>n(T());return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),(0,f.useEffect)(()=>{t!==null&&history.replaceState(null,``,`#tour=${t+1}`)},[t]),(0,f.useEffect)(()=>{if(t===null)return;let e=window.lenis,n=document.body.style.overflow,a=document.documentElement.style.overflow,o=document.documentElement.style.overscrollBehavior;return e?.stop(),document.body.style.overflow=`hidden`,document.documentElement.style.overflow=`hidden`,document.documentElement.style.overscrollBehavior=`none`,r.current?.querySelector(`button:not([disabled]), a[href]`)?.focus(),()=>{e?.start(),document.body.style.overflow=n,document.documentElement.style.overflow=a,document.documentElement.style.overscrollBehavior=o,i.current?.focus?.()}},[t===null]);let c=t!==null,l=t??0,u=(0,f.useCallback)(()=>n(e=>e===null?null:Math.min(se.length-1,e+1)),[]),d=(0,f.useCallback)(()=>n(e=>e===null?null:Math.max(0,e-1)),[]);(0,f.useEffect)(()=>{if(!c)return;let e=e=>{if(e.key===`Escape`)return s();if(e.key===`ArrowRight`)return u();if(e.key===`ArrowLeft`)return d();if(e.key!==`Tab`||!r.current)return;let t=Array.from(r.current.querySelectorAll(ue)).filter(e=>e.offsetParent!==null);if(!t.length)return;let n=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),n.focus())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[c,s,u,d]);let m=c?se[l].component:null;return(0,p.jsxs)(ce.Provider,{value:{open:o,close:s},children:[(0,p.jsx)(`div`,{"aria-hidden":c||void 0,hidden:c,inert:c,children:e}),c&&m&&(0,p.jsxs)(`div`,{ref:r,className:`fixed inset-0 z-[90] flex min-w-0 flex-col overflow-hidden bg-[var(--ss-page)] text-[var(--ss-text)] rise`,role:`dialog`,"aria-modal":`true`,"aria-label":`Экскурсия по SmartShell, шаг ${l+1} из ${se.length}: ${se[l].label}`,children:[(0,p.jsxs)(`header`,{className:`shrink-0 border-b border-[var(--ss-line-strong)] bg-[var(--ss-panel)] font-mono2`,children:[(0,p.jsxs)(`div`,{className:`flex min-h-14 items-center gap-3 px-3 sm:px-5`,children:[(0,p.jsxs)(`div`,{className:`min-w-0`,children:[(0,p.jsx)(`div`,{className:`truncate text-[10px] uppercase tracking-[0.18em] text-[var(--ss-text-3)]`,children:`SmartShell / рабочий тур`}),(0,p.jsx)(`div`,{className:`mt-0.5 text-xs font-700 uppercase tracking-[0.08em] text-[var(--ss-text)]`,children:se[l].label})]}),(0,p.jsxs)(`div`,{className:`ml-auto flex shrink-0 items-center`,children:[(0,p.jsxs)(`span`,{className:`hidden border-l border-[var(--ss-line)] px-3 text-[10px] text-[var(--ss-text-3)] sm:block`,children:[`ШАГ `,String(l+1).padStart(2,`0`),` / `,String(se.length).padStart(2,`0`)]}),(0,p.jsx)(`button`,{type:`button`,onClick:d,disabled:l===0,className:`inline-flex min-h-11 items-center border border-[var(--ss-line-strong)] bg-[var(--ss-panel)] px-3 text-[11px] font-700 uppercase tracking-[0.04em] text-[var(--ss-text-2)] transition-colors duration-100 ease-linear hover:border-[var(--ss-primary)] hover:text-[var(--ss-text)] disabled:cursor-not-allowed disabled:opacity-30 sm:px-4`,children:`← Назад`}),l<se.length-1?(0,p.jsx)(`button`,{type:`button`,onClick:u,className:`inline-flex min-h-11 items-center border border-[var(--ss-primary)] bg-[var(--ss-primary)] px-3 text-[11px] font-800 uppercase tracking-[0.04em] text-[#08101a] transition-colors duration-100 ease-linear hover:bg-[var(--ss-primary-hover)] sm:px-4`,children:`Далее →`}):(0,p.jsx)(`a`,{href:`https://lk.smartshell.gg/register`,target:`_blank`,onClick:s,rel:`noreferrer`,"aria-label":`Завершить экскурсию и перейти к регистрации`,className:`inline-flex min-h-11 items-center border border-[var(--ss-primary)] bg-[var(--ss-primary)] px-3 text-[11px] font-800 uppercase tracking-[0.04em] text-[#08101a] transition-colors duration-100 ease-linear hover:bg-[var(--ss-primary-hover)] sm:px-4`,children:`Регистрация ↗`}),(0,p.jsx)(`button`,{type:`button`,onClick:s,"aria-label":`Закрыть экскурсию`,className:`inline-flex h-11 w-11 shrink-0 items-center justify-center border border-l-0 border-[var(--ss-line-strong)] bg-[var(--ss-panel)] text-[var(--ss-text-2)] transition-colors duration-100 ease-linear hover:border-[var(--ss-primary)] hover:text-[var(--ss-text)]`,children:(0,p.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,p.jsx)(`path`,{d:`M6 6l12 12M18 6L6 18`,stroke:`currentColor`,strokeWidth:`2`})})})]})]}),(0,p.jsx)(`div`,{className:`flex min-w-0 overflow-x-auto border-t border-[var(--ss-line)]`,role:`tablist`,"aria-label":`Шаги экскурсии`,children:se.map((e,t)=>(0,p.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":t===l,onClick:()=>n(t),className:`min-h-10 shrink-0 border-r border-[var(--ss-line)] px-3 text-left text-[10px] font-700 uppercase tracking-[0.05em] transition-colors duration-100 ease-linear sm:px-4 ${t===l?`bg-[var(--ss-primary)] text-[#08101a]`:`bg-[var(--ss-panel-deep)] text-[var(--ss-text-3)] hover:bg-[var(--ss-panel-soft)] hover:text-[var(--ss-text)]`}`,children:[String(t+1).padStart(2,`0`),` `,e.label]},e.id))})]}),(0,p.jsx)(`div`,{className:`relative min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain`,children:(0,p.jsx)(`div`,{className:`h-full min-h-full rise`,children:(0,p.jsx)(m,{})},l)}),(0,p.jsxs)(`footer`,{className:`flex h-7 shrink-0 items-center justify-between border-t border-[var(--ss-line-strong)] bg-[var(--ss-panel-deep)] px-3 font-mono2 text-[9px] uppercase tracking-[0.08em] text-[var(--ss-text-3)] sm:px-5`,children:[(0,p.jsx)(`span`,{children:`Состояние / готово`}),(0,p.jsxs)(`span`,{className:`text-[var(--ss-primary)]`,children:[se[l].time,` · `,se[l].id]}),(0,p.jsx)(`span`,{className:`hidden sm:inline`,children:`← → навигация · esc выход`})]})]})]})}var de=[{id:`overview`,index:`00`,label:`Рабочий стол`,shortLabel:`Старт`},{id:`ecosystem`,index:`01`,label:`Модули системы`,shortLabel:`Модули`},{id:`products`,index:`02`,label:`Продукты`,shortLabel:`Продукты`},{id:`migration`,index:`03`,label:`Переход`,shortLabel:`Переход`},{id:`pricing`,index:`04`,label:`Тарифы`,shortLabel:`Тарифы`}];function fe({className:e=``}){return(0,p.jsx)(`a`,{href:`#overview`,className:`ss-logo ${e}`,"aria-label":`SmartShell — к рабочему столу`,children:(0,p.jsxs)(`svg`,{height:`32`,width:`102`,viewBox:`0 0 102 32`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,p.jsx)(`path`,{d:`M3.978 25.659V18.68L0 22.775v6.979C0 30.466.554 31 1.211 31h6.78l3.979-4.095H5.224c-.692.036-1.246-.534-1.246-1.246Zm24.044-6.98v6.98c0 .712-.554 1.246-1.211 1.246h-6.815L23.974 31h6.815C31.481 31 32 30.43 32 29.754v-6.98l-3.978-4.095ZM21.691 6.323l-4.809-4.95a1.19 1.19 0 0 0-1.73 0l-4.808 4.95v5.805l4.808-4.95a1.19 1.19 0 0 1 1.73 0l4.809 4.95V6.323Z`,fill:`#2C87FD`}),(0,p.jsx)(`path`,{d:`M92.729 7.04V5.482H102V7.04h-3.708v7.05h-1.891V7.04h-3.672ZM44.522 9.007h4.338a2.56 2.56 0 0 1 2.522 2.56 2.55 2.55 0 0 1-2.522 2.522h-6.378v-1.595h6.378a1.002 1.002 0 0 0 0-2.003h-4.338A2.53 2.53 0 0 1 42 7.968a2.54 2.54 0 0 1 2.522-2.523H50.9v1.558h-6.378a1.002 1.002 0 0 0 0 2.004Zm15.76 3.264 2.892-6.789H66.4v8.607h-1.668V6.818h-.408l-3.115 7.271h-1.78l-3.115-7.271h-.408v7.271h-1.669V5.482h3.152l2.893 6.789Zm28.072-6.789a2.855 2.855 0 0 1 1.075 5.491l1.483 3.08h-1.669l-1.409-2.857h-3.856V9.637h4.376a1.299 1.299 0 0 0 0-2.596h-5.378v7.048h-1.668V5.482h7.046ZM71.815 6.224A2.2 2.2 0 0 1 73.78 5c.853 0 1.595.445 1.965 1.224l3.82 7.94h-1.743l-1.261-2.635h-4.45l.742-1.558h2.966l-1.446-3.042c-.148-.334-.445-.371-.556-.371-.111 0-.408 0-.556.334l-3.523 7.197h-1.743l3.82-7.865ZM44.522 21.917h4.339a2.53 2.53 0 0 1 2.521 2.523 2.55 2.55 0 0 1-2.521 2.523h-6.379v-1.558h6.379a1.002 1.002 0 0 0 0-2.004h-4.339A2.53 2.53 0 0 1 42 20.879a2.54 2.54 0 0 1 2.522-2.523H50.9v1.558h-6.378a1.002 1.002 0 0 0 0 2.003Zm11.347 5.046H54.2v-8.57h1.669v8.57Zm.965-5.046h5.043v-3.524h1.669V27h-1.669v-3.524h-5.043v-1.559Zm9.752-3.524h8.492v1.558h-6.823v5.491h6.823V27h-8.492v-8.607Zm7.714 3.487v1.558h-5.007V21.88H74.3Zm3.819-3.487h1.669v7.049h6.341V27h-8.01v-8.607Zm11.83 0v7.049h6.341V27h-8.01v-8.607h1.669Z`,fill:`currentColor`})]})})}function pe({activeModule:e,mobile:t=!1}){return(0,p.jsxs)(`nav`,{className:t?`ss-mobile-modules`:`ss-module-rail`,"aria-label":`Модули страницы`,children:[de.map(n=>{let r=n.id===e;return(0,p.jsxs)(`a`,{href:`#${n.id}`,className:`ss-module-link ${r?`is-active`:``}`,"aria-current":r?`page`:void 0,children:[(0,p.jsx)(`span`,{className:`ss-module-index`,children:n.index}),(0,p.jsx)(`span`,{children:t?n.shortLabel:n.label}),(0,p.jsx)(`span`,{className:`ss-module-state`,"aria-hidden":`true`,children:r?`●`:`○`})]},n.id)}),!t&&(0,p.jsxs)(`div`,{className:`ss-rail-footer`,children:[(0,p.jsx)(`a`,{href:`https://demo.smartshell.gg/`,target:`_blank`,rel:`noreferrer`,children:`DEMO / ОТКРЫТЬ ↗`}),(0,p.jsx)(`span`,{children:`PRODUCT MODULES / 09`})]})]})}function me({activeModule:e,theme:t,onThemeToggle:n,onTrial:r}){let{open:i}=le(),a=de.find(t=>t.id===e)?.label??`Рабочий стол`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`header`,{className:`ss-topbar`,children:[(0,p.jsxs)(`div`,{className:`ss-topbar-brand`,children:[(0,p.jsx)(fe,{}),(0,p.jsxs)(`div`,{className:`ss-system-path`,children:[(0,p.jsx)(`span`,{children:`SYS / CONTROL`}),(0,p.jsx)(`strong`,{children:a})]})]}),(0,p.jsxs)(`div`,{className:`ss-topbar-actions`,children:[(0,p.jsxs)(`button`,{type:`button`,className:`ss-command ss-command-tour`,onClick:()=>i(0),"aria-label":`Экскурсия`,children:[(0,p.jsx)(`span`,{className:`ss-command-index`,children:`00`}),(0,p.jsx)(`span`,{className:`ss-command-label-full`,children:`Экскурсия`}),(0,p.jsx)(`span`,{className:`ss-command-label-short`,"aria-hidden":`true`,children:`ТУР`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`ss-command ss-theme-toggle`,onClick:n,"aria-label":`Включить ${t===`dark`?`светлую`:`тёмную`} тему`,"aria-pressed":t===`light`,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,children:t===`dark`?`☾`:`☀`}),(0,p.jsx)(`span`,{className:`ss-theme-label`,children:t===`dark`?`DARK`:`LIGHT`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`ss-command ss-command-primary`,onClick:r,"aria-label":`30 дней бесплатно`,children:[(0,p.jsx)(`span`,{className:`ss-command-label-full`,children:`30 дней бесплатно`}),(0,p.jsx)(`span`,{className:`ss-command-label-short`,"aria-hidden":`true`,children:`30 ДНЕЙ`}),(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]})]}),(0,p.jsx)(pe,{activeModule:e}),(0,p.jsx)(pe,{activeModule:e,mobile:!0})]})}var D=[{id:`seat-01`,number:`01`,status:`active`,zone:`Основной зал • 1`,x:13,y:24,deviceName:`PC-01`,details:[{label:`Сессия`,value:`02:47:31`},{label:`Тариф`,value:`3 часа Standard`},{label:`Гость`,value:`alex`}]},{id:`seat-02`,number:`02`,status:`free`,zone:`Основной зал • 2`,x:29,y:24,deviceName:`PC-02`,details:[{label:`Питание`,value:`Включен`},{label:`Сессия`,value:`Не запущена`},{label:`Зона`,value:`Основной зал • 2`}]},{id:`seat-03`,number:`03`,status:`free`,zone:`MAIN / A`,x:45,y:24},{id:`seat-04`,number:`04`,status:`reserved`,zone:`MAIN / A`,x:61,y:24},{id:`seat-05`,number:`05`,status:`free`,zone:`MAIN / B`,x:13,y:49},{id:`seat-06`,number:`06`,status:`active`,zone:`MAIN / B`,x:29,y:49},{id:`seat-07`,number:`07`,status:`active`,zone:`MAIN / B`,x:45,y:49},{id:`seat-08`,number:`08`,status:`offline`,zone:`MAIN / B`,x:61,y:49},{id:`seat-09`,number:`09`,status:`reserved`,zone:`Основной зал • 9`,x:13,y:74,deviceName:`PC-09`,details:[{label:`Питание`,value:`Выключен`},{label:`Бронь`,value:`Сегодня, 08:56`},{label:`Длительность`,value:`3 часа`}]},{id:`seat-10`,number:`10`,status:`free`,zone:`MAIN / C`,x:29,y:74},{id:`seat-11`,number:`11`,status:`active`,zone:`MAIN / C`,x:45,y:74},{id:`seat-12`,number:`12`,status:`offline`,zone:`Основной зал • 12`,x:61,y:74,deviceName:`PC-12`,details:[{label:`Питание`,value:`Включен`},{label:`Состояние`,value:`В обслуживании`},{label:`Комментарий`,value:`Плановая профилактика`}]},{id:`seat-13`,number:`13`,status:`active`,zone:`PRO / 01`,x:80,y:34},{id:`seat-14`,number:`14`,status:`reserved`,zone:`PRO / 01`,x:89,y:54},{id:`seat-15`,number:`15`,status:`free`,zone:`PRO / 01`,x:80,y:74}],O={free:{label:`Свободно`,explanation:`Место доступно. Выбор показывает зону и контекст запуска новой сессии.`},active:{label:`Активный сеанс`,explanation:`Место занято гостем. Выбор показывает контекст контроля времени и услуг.`},reserved:{label:`Есть бронь`,explanation:`Место ожидает гостя. Выбор показывает зону и состояние бронирования.`},offline:{label:`В обслуживании`,explanation:`Место недоступно для запуска. Выбор показывает его расположение для проверки.`}},he=`
  .cws {
    --cws-bg: #07080b;
    --cws-panel: #0c0e13;
    --cws-panel-2: #11141a;
    --cws-line: rgba(235, 238, 246, 0.14);
    --cws-line-strong: rgba(235, 238, 246, 0.28);
    --cws-text: #f1f3f7;
    --cws-muted: #838895;
    --cws-purple: #8b7cf6;
    --cws-green: #55d68b;
    --cws-orange: #e7a34b;
    --cws-red: #ef6262;
    position: relative;
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--cws-line-strong);
    background: var(--cws-bg);
    color: var(--cws-text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color-scheme: dark;
  }
  .cws *,
  .cws *::before,
  .cws *::after {
    box-sizing: border-box;
    border-radius: 0;
  }
  .cws__topbar,
  .cws__statusbar {
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 38px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--cws-line);
    background: var(--cws-panel);
    font-size: 10px;
    font-weight: 650;
    letter-spacing: 0.12em;
    line-height: 1.3;
    text-transform: uppercase;
  }
  .cws__statusbar {
    min-height: 32px;
    border-top: 1px solid var(--cws-line);
    border-bottom: 0;
    color: var(--cws-muted);
  }
  .cws__title {
    min-width: 0;
    overflow: hidden;
    color: var(--cws-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cws__title-code,
  .cws__accent {
    color: var(--cws-purple);
  }
  .cws__legend,
  .cws__status-items {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 14px;
  }
  .cws__legend-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--cws-muted);
    white-space: nowrap;
  }
  .cws__legend-mark {
    width: 7px;
    height: 7px;
    background: currentColor;
  }
  .cws__legend-item[data-status="free"] { color: var(--cws-green); }
  .cws__legend-item[data-status="active"] { color: var(--cws-purple); }
  .cws__legend-item[data-status="reserved"] { color: var(--cws-orange); }
  .cws__legend-item[data-status="offline"] { color: var(--cws-red); }
  .cws__body {
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(180px, 20%) minmax(0, 1fr);
  }
  .cws__rail {
    display: flex;
    min-width: 0;
    flex-direction: column;
    border-right: 1px solid var(--cws-line);
    background: var(--cws-panel);
  }
  .cws__rail-section {
    min-width: 0;
    padding: 16px;
    border-bottom: 1px solid var(--cws-line);
  }
  .cws__rail-section:last-child {
    flex: 1;
    border-bottom: 0;
  }
  .cws__label {
    margin: 0;
    color: var(--cws-muted);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 1.35;
    text-transform: uppercase;
  }
  .cws__club-name {
    margin: 8px 0 0;
    font-size: clamp(17px, 1.7vw, 24px);
    font-weight: 720;
    letter-spacing: -0.025em;
    line-height: 1.08;
  }
  .cws__summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 14px;
    border-top: 1px solid var(--cws-line);
    border-left: 1px solid var(--cws-line);
  }
  .cws__summary-item {
    min-width: 0;
    padding: 9px;
    border-right: 1px solid var(--cws-line);
    border-bottom: 1px solid var(--cws-line);
  }
  .cws__summary-value {
    display: block;
    font-size: 17px;
    font-weight: 720;
    font-variant-numeric: tabular-nums;
  }
  .cws__summary-name {
    display: block;
    margin-top: 2px;
    color: var(--cws-muted);
    font-size: 8px;
    font-weight: 650;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .cws__inspector {
    min-height: 132px;
  }
  .cws__inspector-head {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
    margin-top: 8px;
  }
  .cws__seat-number {
    font-size: clamp(25px, 2.2vw, 36px);
    font-weight: 760;
    letter-spacing: -0.06em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .cws__seat-state {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.35;
    text-align: left;
    text-transform: uppercase;
  }
  .cws__seat-state[data-status="free"] { color: var(--cws-green); }
  .cws__seat-state[data-status="active"] { color: var(--cws-purple); }
  .cws__seat-state[data-status="reserved"] { color: var(--cws-orange); }
  .cws__seat-state[data-status="offline"] { color: var(--cws-red); }
  .cws__inspector-copy,
  .cws__inspector-empty {
    margin: 12px 0 0;
    color: #aeb3bf;
    font-size: 11px;
    line-height: 1.55;
  }
  .cws__inspector-empty {
    color: var(--cws-muted);
  }
  .cws__zone {
    margin: 10px 0 0;
    color: var(--cws-muted);
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .cws__details {
    margin: 13px 0 0;
    border-top: 1px solid var(--cws-line);
  }
  .cws__detail-row {
    display: grid;
    grid-template-columns: minmax(68px, .8fr) minmax(0, 1.2fr);
    gap: 10px;
    padding: 7px 0;
    border-bottom: 1px solid var(--cws-line);
  }
  .cws__detail-row dt,
  .cws__detail-row dd {
    margin: 0;
    font-size: 9px;
    line-height: 1.35;
  }
  .cws__detail-row dt {
    color: var(--cws-muted);
    text-transform: uppercase;
  }
  .cws__detail-row dd {
    min-width: 0;
    overflow: hidden;
    color: var(--cws-text);
    font-weight: 650;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cws__canvas {
    position: relative;
    min-width: 0;
    min-height: 450px;
    overflow: hidden;
    background: var(--cws-bg);
    isolation: isolate;
  }
  .cws__plan {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    color: var(--cws-line-strong);
  }
  .cws__plan-fill {
    fill: var(--cws-panel);
    stroke: var(--cws-line);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
  .cws__plan-zone {
    fill: var(--cws-panel-2);
    stroke: var(--cws-line);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
  .cws__line {
    fill: none;
    stroke: currentColor;
    stroke-width: 1;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    vector-effect: non-scaling-stroke;
    animation: cws-line-build 360ms linear forwards;
  }
  .cws__line--accent {
    color: var(--cws-purple);
  }
  .cws__zone-label {
    fill: var(--cws-muted);
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: 12px;
    font-weight: 650;
    letter-spacing: 2px;
  }
  .cws__seat {
    position: absolute;
    z-index: 2;
    left: var(--cws-x);
    top: var(--cws-y);
    width: clamp(44px, 5.4vw, 64px);
    min-width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid currentColor;
    background: var(--cws-panel-2);
    color: var(--cws-muted);
    clip-path: inset(0 100% 0 0);
    cursor: pointer;
    font: inherit;
    font-size: 11px;
    font-weight: 720;
    font-variant-numeric: tabular-nums;
    transform: translate(-50%, -50%);
    animation: cws-seat-build 140ms linear forwards;
    transition:
      background-color 100ms linear,
      color 100ms linear,
      border-color 100ms linear;
  }
  .cws__seat[data-status="free"] { color: var(--cws-green); }
  .cws__seat[data-status="active"] { color: var(--cws-purple); }
  .cws__seat[data-status="reserved"] { color: var(--cws-orange); }
  .cws__seat[data-status="offline"] { color: var(--cws-red); }
  .cws__seat:hover,
  .cws__seat:focus-visible,
  .cws__seat[data-selected="true"] {
    background: currentColor;
    outline: 0;
  }
  .cws__seat:hover .cws__seat-text,
  .cws__seat:focus-visible .cws__seat-text,
  .cws__seat[data-selected="true"] .cws__seat-text {
    color: var(--cws-bg);
  }
  .cws__seat:focus-visible {
    outline: 2px solid var(--cws-text);
    outline-offset: 3px;
  }
  .cws__seat-text {
    color: currentColor;
    transition: color 100ms linear;
  }
  .cws__seat-edge {
    position: absolute;
    right: 3px;
    top: 3px;
    width: 4px;
    height: 4px;
    background: currentColor;
  }
  .cws__seat[data-demo-target="true"]::before {
    position: absolute;
    inset: -6px;
    border: 1px solid var(--cws-text);
    content: "";
    pointer-events: none;
    animation: cws-target-step 700ms steps(2, end) infinite;
  }
  .cws__demo-cursor {
    position: absolute;
    z-index: 4;
    left: var(--cws-demo-x);
    top: var(--cws-demo-y);
    width: 19px;
    height: 24px;
    color: var(--cws-text);
    pointer-events: none;
    transform: translate(13px, 10px);
    transition: left 320ms linear, top 320ms linear;
  }
  .cws__demo-cursor svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--cws-bg);
    stroke: currentColor;
    stroke-width: 1.5;
  }
  .cws__demo-cursor::after {
    position: absolute;
    top: -6px;
    left: -6px;
    width: 11px;
    height: 11px;
    border: 1px solid currentColor;
    content: "";
    animation: cws-cursor-click 900ms steps(2, end) infinite;
  }
  .cws__canvas-note {
    position: absolute;
    z-index: 1;
    right: 12px;
    top: 12px;
    margin: 0;
    padding: 7px 8px;
    border: 1px solid var(--cws-line);
    background: var(--cws-bg);
    color: var(--cws-muted);
    font-size: 9px;
    font-weight: 650;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  @keyframes cws-line-build {
    to { stroke-dashoffset: 0; }
  }
  @keyframes cws-seat-build {
    to { clip-path: inset(0 0 0 0); }
  }
  @keyframes cws-target-step {
    50% { opacity: .32; }
  }
  @keyframes cws-cursor-click {
    50% { transform: scale(.45); }
  }
  @media (max-width: 840px) {
    .cws__topbar {
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
    }
    .cws__legend {
      width: 100%;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }
    .cws__legend::-webkit-scrollbar {
      display: none;
    }
    .cws__body {
      grid-template-columns: minmax(0, 1fr);
    }
    .cws__rail {
      display: grid;
      grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
      border-right: 0;
      border-bottom: 1px solid var(--cws-line);
    }
    .cws__rail-section {
      border-right: 1px solid var(--cws-line);
      border-bottom: 0;
    }
    .cws__rail-section:last-child {
      border-right: 0;
    }
    .cws__canvas {
      min-height: 390px;
    }
    .cws__status-items span:nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 480px) {
    .cws__rail {
      grid-template-columns: minmax(0, 1fr);
    }
    .cws__rail-section {
      border-right: 0;
      border-bottom: 1px solid var(--cws-line);
    }
    .cws__rail-section:last-child {
      border-bottom: 0;
    }
    .cws__canvas {
      min-height: 360px;
    }
    .cws__seat {
      width: 44px;
    }
    .cws__canvas-note {
      display: none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .cws__line,
    .cws__seat,
    .cws__seat[data-demo-target="true"]::before,
    .cws__demo-cursor::after {
      animation: none;
      clip-path: none;
      stroke-dashoffset: 0;
      transition: none;
    }
    .cws__demo-cursor {
      display: none;
    }
  }
`;function ge({seats:e=D,selectedSeatId:t,defaultSelectedSeatId:n=null,onSeatSelect:r,demoTargetSeatId:i=null,activityLabel:a=`КАРТА ГОТОВА`,modeLabel:o=`SELECT`,className:s=``}){let c=(0,f.useId)(),l=(0,f.useId)(),[u,d]=(0,f.useState)(n),[m,h]=(0,f.useState)(null),g=t!==void 0,_=g?t??null:u,v=m??_,y=e.find(e=>e.id===v)??null,b=e.find(e=>e.id===i)??null,x=(0,f.useMemo)(()=>e.reduce((e,t)=>(e[t.status]+=1,e),{free:0,active:0,reserved:0,offline:0}),[e]);function ee(e){let t=_===e.id?null:e;g||d(t?.id??null),r?.(t)}return(0,p.jsxs)(`section`,{className:`cws ${s}`.trim(),"aria-labelledby":c,children:[(0,p.jsx)(`style`,{children:he}),(0,p.jsxs)(`header`,{className:`cws__topbar`,children:[(0,p.jsxs)(`div`,{id:c,className:`cws__title`,children:[(0,p.jsx)(`span`,{className:`cws__title-code`,children:`[CLUB_01]`}),` / `,`SMARTSHELL WORKSPACE`]}),(0,p.jsx)(`div`,{className:`cws__legend`,"aria-label":`Статусы игровых мест`,children:Object.keys(O).map(e=>(0,p.jsxs)(`span`,{className:`cws__legend-item`,"data-status":e,children:[(0,p.jsx)(`span`,{className:`cws__legend-mark`,"aria-hidden":`true`}),O[e].label]},e))})]}),(0,p.jsxs)(`div`,{className:`cws__body`,children:[(0,p.jsxs)(`aside`,{className:`cws__rail`,"aria-label":`Сводка и инспектор места`,children:[(0,p.jsxs)(`div`,{className:`cws__rail-section`,children:[(0,p.jsx)(`p`,{className:`cws__label`,children:`Рабочая область`}),(0,p.jsx)(`h3`,{className:`cws__club-name`,children:`Карта клуба`}),(0,p.jsx)(`div`,{className:`cws__summary`,children:Object.keys(O).map(e=>(0,p.jsxs)(`div`,{className:`cws__summary-item`,children:[(0,p.jsx)(`span`,{className:`cws__summary-value`,children:x[e]}),(0,p.jsx)(`span`,{className:`cws__summary-name`,children:O[e].label})]},e))})]}),(0,p.jsxs)(`div`,{id:l,className:`cws__rail-section cws__inspector`,role:y?`tooltip`:void 0,"aria-live":`polite`,children:[(0,p.jsx)(`p`,{className:`cws__label`,children:`Инспектор места`}),y?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`cws__inspector-head`,children:[(0,p.jsx)(`span`,{className:`cws__seat-number`,children:y.deviceName??y.number}),(0,p.jsx)(`span`,{className:`cws__seat-state`,"data-status":y.status,children:O[y.status].label})]}),(0,p.jsx)(`p`,{className:`cws__zone`,children:y.zone}),y.details?.length?(0,p.jsx)(`dl`,{className:`cws__details`,children:y.details.map(e=>(0,p.jsxs)(`div`,{className:`cws__detail-row`,children:[(0,p.jsx)(`dt`,{children:e.label}),(0,p.jsx)(`dd`,{children:e.value})]},e.label))}):(0,p.jsx)(`p`,{className:`cws__inspector-copy`,children:y.purpose??O[y.status].explanation})]}):(0,p.jsx)(`p`,{className:`cws__inspector-empty`,children:`Наведите фокус или нажмите на место, чтобы увидеть его номер, статус и роль в управлении клубом.`})]})]}),(0,p.jsxs)(`div`,{className:`cws__canvas`,children:[(0,p.jsx)(`p`,{className:`cws__canvas-note`,children:`INPUT / POINTER + KEYBOARD`}),(0,p.jsxs)(`svg`,{className:`cws__plan`,viewBox:`0 0 1000 600`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[(0,p.jsx)(`rect`,{className:`cws__plan-fill`,x:`24`,y:`24`,width:`952`,height:`552`}),(0,p.jsx)(`rect`,{className:`cws__plan-zone`,x:`730`,y:`52`,width:`218`,height:`496`}),(0,p.jsx)(`path`,{className:`cws__line`,pathLength:`1`,d:`M52 190H690`,style:{animationDelay:`80ms`}}),(0,p.jsx)(`path`,{className:`cws__line`,pathLength:`1`,d:`M52 342H690`,style:{animationDelay:`140ms`}}),(0,p.jsx)(`path`,{className:`cws__line`,pathLength:`1`,d:`M52 494H690`,style:{animationDelay:`200ms`}}),(0,p.jsx)(`path`,{className:`cws__line cws__line--accent`,pathLength:`1`,d:`M710 52V548`,style:{animationDelay:`260ms`}}),(0,p.jsx)(`path`,{className:`cws__line`,pathLength:`1`,d:`M760 300H920`,style:{animationDelay:`320ms`}}),(0,p.jsx)(`text`,{className:`cws__zone-label`,x:`54`,y:`54`,children:`MAIN HALL`}),(0,p.jsx)(`text`,{className:`cws__zone-label`,x:`754`,y:`82`,children:`PRO ZONE`})]}),b?(0,p.jsx)(`span`,{className:`cws__demo-cursor`,style:{"--cws-demo-x":`${b.x}%`,"--cws-demo-y":`${b.y}%`},"aria-hidden":`true`,children:(0,p.jsx)(`svg`,{viewBox:`0 0 20 24`,children:(0,p.jsx)(`path`,{d:`M2 1.5 17 15l-7 .8-4.1 6.1L2 1.5Z`})})}):null,e.map((e,t)=>{let n={"--cws-x":`${e.x}%`,"--cws-y":`${e.y}%`,animationDelay:`${180+t*34}ms`},r=y?.id===e.id;return(0,p.jsxs)(`button`,{type:`button`,className:`cws__seat`,"data-status":e.status,"data-selected":_===e.id?`true`:`false`,"data-demo-target":i===e.id?`true`:`false`,style:n,"aria-pressed":_===e.id,"aria-describedby":r?l:void 0,"aria-label":`${e.deviceName??`Место ${e.number}`}. ${O[e.status].label}. ${e.zone}`,onClick:()=>ee(e),onMouseEnter:()=>h(e.id),onMouseLeave:()=>h(null),onFocus:()=>h(e.id),onBlur:()=>h(null),children:[(0,p.jsx)(`span`,{className:`cws__seat-text`,children:e.number}),(0,p.jsx)(`span`,{className:`cws__seat-edge`,"aria-hidden":`true`})]},e.id)})]})]}),(0,p.jsxs)(`footer`,{className:`cws__statusbar`,children:[(0,p.jsxs)(`span`,{children:[`EVENT / `,(0,p.jsx)(`span`,{className:`cws__accent`,children:a})]}),(0,p.jsxs)(`span`,{className:`cws__status-items`,children:[(0,p.jsxs)(`span`,{children:[`SEATS / `,String(e.length).padStart(2,`0`)]}),(0,p.jsx)(`span`,{children:`INPUT / POINTER`}),(0,p.jsxs)(`span`,{children:[`MODE / `,o]})]})]})]})}var _e=[{seatId:`seat-02`,event:`PC-02 / ВКЛЮЧЕН`,duration:2200},{seatId:`seat-01`,event:`PC-01 / АКТИВНЫЙ СЕАНС`,duration:2600},{seatId:`seat-09`,event:`PC-09 / ЕСТЬ БРОНЬ`,duration:2400},{seatId:`seat-12`,event:`PC-12 / В ОБСЛУЖИВАНИИ`,duration:2400}];function ve({onTrial:e}){let{open:t}=le(),n=(0,f.useRef)(null),[r,i]=(0,f.useState)(0),[a,o]=(0,f.useState)(!0),[s,c]=(0,f.useState)(null),[l,u]=(0,f.useState)(!0),[d,m]=(0,f.useState)(()=>document.visibilityState===`visible`),[h,g]=(0,f.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),_=_e[r],v=a&&l&&d&&!h;(0,f.useEffect)(()=>{let e=n.current;if(!e||!(`IntersectionObserver`in window))return;let t=new IntersectionObserver(([e])=>u(e.isIntersecting),{threshold:.18});return t.observe(e),()=>t.disconnect()},[]),(0,f.useEffect)(()=>{let e=()=>m(document.visibilityState===`visible`);return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),(0,f.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>g(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,f.useEffect)(()=>{if(!v)return;let e=window.setTimeout(()=>i(e=>(e+1)%_e.length),_.duration);return()=>window.clearTimeout(e)},[v,_.duration]);let y=a?_.seatId:s;return(0,p.jsxs)(`section`,{ref:n,id:`overview`,"data-module":`overview`,className:`ss-hero-module`,"aria-labelledby":`hero-title`,children:[(0,p.jsxs)(`div`,{className:`ss-hero-status`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`i`,{className:`ss-status-dot ss-status-dot-success`}),`СИСТЕМА АКТИВНА`]}),(0,p.jsx)(`span`,{children:`МОДУЛИ / 09`}),(0,p.jsxs)(`span`,{children:[`ДЕМО / `,a?`ЗАПУЩЕНО`:`РУЧНОЙ РЕЖИМ`]}),(0,p.jsx)(`span`,{children:`РЕЖИМ / PRODUCT OVERVIEW`})]}),(0,p.jsxs)(`div`,{className:`ss-hero-console`,children:[(0,p.jsxs)(`div`,{className:`ss-hero-intro`,children:[(0,p.jsxs)(`div`,{className:`ss-hero-title-wrap`,children:[(0,p.jsx)(`span`,{className:`ss-kicker`,children:`SMARTSHELL / CONTROL SYSTEM`}),(0,p.jsxs)(`h1`,{id:`hero-title`,children:[`Клуб работает`,(0,p.jsx)(`span`,{children:`в одном интерфейсе.`})]})]}),(0,p.jsxs)(`div`,{className:`ss-hero-copy`,children:[(0,p.jsx)(`p`,{children:`Карта мест, смена, бронирования, платежи, гости и Shell связаны в одном рабочем процессе.`}),(0,p.jsxs)(`div`,{className:`ss-hero-actions`,children:[(0,p.jsxs)(`button`,{type:`button`,className:`ss-ui-button ss-ui-button-primary`,onClick:()=>t(0),children:[`Запустить экскурсию`,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]}),(0,p.jsxs)(`button`,{type:`button`,className:`ss-ui-button`,onClick:e,children:[`30 дней бесплатно`,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]})]}),(0,p.jsxs)(`div`,{className:`ss-hero-workspace`,children:[(0,p.jsxs)(`div`,{className:`ss-workspace-commandbar`,children:[(0,p.jsx)(`span`,{children:`[HALL_01] / КАРТА КЛУБА`}),(0,p.jsxs)(`button`,{type:`button`,className:`ss-demo-toggle`,"aria-pressed":a,onClick:()=>{if(a){c(_.seatId),o(!1);return}c(null),i(0),o(!0)},children:[(0,p.jsx)(`span`,{className:`ss-demo-toggle-mark ${v?`is-running`:``}`,"aria-hidden":`true`}),h?`ДЕМО / СТАТИЧНО`:a?`ДЕМО / ИДЁТ`:`ДЕМО / ПРОДОЛЖИТЬ`]})]}),(0,p.jsx)(ge,{seats:D,selectedSeatId:y,demoTargetSeatId:a?_.seatId:null,activityLabel:a?_.event:s?`МЕСТО ${s.replace(`seat-`,``)} / ВЫБРАНО`:`ОЖИДАНИЕ ВЫБОРА`,modeLabel:a?`AUTO DEMO`:`MANUAL`,onSeatSelect:e=>{o(!1),c(e?.id??null)}})]})]}),(0,p.jsxs)(`div`,{className:`ss-hero-foot`,children:[(0,p.jsx)(`span`,{children:`> workspace.init ... ok`}),(0,p.jsxs)(`span`,{children:[`> demo.sequence ... `,v?`running`:`paused`]}),(0,p.jsx)(`span`,{children:`> input.pointer ... takeover ready`}),(0,p.jsx)(`a`,{href:`https://demo.smartshell.gg/`,target:`_blank`,rel:`noreferrer`,children:`Открыть настоящее демо ↗`})]})]})}var ye=`#/products/`;function be(e){return`${ye}${e}`}function xe(e){let t;try{t=decodeURIComponent(e)}catch{return null}let n=t.trim().replace(/^https?:\/\/[^/]+/i,``).replace(/^#/,``).replace(/^\/+/,``).replace(/^products?\//,``).split(/[/?#]/,1)[0];return n&&ne(n)?n:null}function Se(e){let t=xe(e.hash);if(t)return t;let n=new URLSearchParams(e.search).get(`product`);return n&&ne(n)?n:xe(e.pathname)}var Ce=[{id:`hall`,code:`OPS/01`,title:`Зал и карта`,summary:`Места, сессии, брони и состояние смены на карте клуба.`,links:[{label:`Панель администратора`,slug:`admin-panel`},{label:`Кабинет владельца`,slug:`owner-cabinet`}]},{id:`checkout`,code:`OPS/02`,title:`Касса и платежи`,summary:`Пополнения, продажи, возвраты и история операций в кассовом разделе.`,links:[{label:`Кассовые операции`,slug:`admin-panel`},{label:`API и интеграции`,slug:`api-integrations`}]},{id:`guests`,code:`CRM/01`,title:`Гости и лояльность`,summary:`Путь гостя от брони и пополнения до QR-входа и следующего визита.`,links:[{label:`SmartGamer`,slug:`smartgamer`},{label:`SmartKiosk`,slug:`smartkiosk`}]},{id:`shell`,code:`SYS/01`,title:`Shell и аналитика`,summary:`Клиентские места, политики доступа и данные для операционных решений.`,links:[{label:`Shell`,slug:`shell`},{label:`Панель и отчёты`,slug:`admin-panel`},{label:`API и интеграции`,slug:`api-integrations`}]}],we=[[`A-01`,`СЕССИЯ`,`ПОД КОНТРОЛЕМ`],[`A-02`,`БРОНЬ`,`ОЖИДАЕТ ГОСТЯ`],[`A-03`,`СВОБОДНО`,`ГОТОВО`],[`B-01`,`СЕРВИС`,`НЕДОСТУПНО`]];function Te({tone:e=`idle`}){return(0,p.jsx)(`span`,{"aria-hidden":`true`,className:`h-2 w-2 shrink-0 border ${e===`accent`?`border-primary bg-primary`:e===`ok`?`border-emerald-400 bg-emerald-400`:`border-white/[0.35] bg-transparent`}`})}function Ee({label:e,status:t}){return(0,p.jsxs)(`div`,{className:`ss-console-mono flex min-h-10 items-center justify-between gap-4 border-b border-white/[0.14] bg-[#08090d] px-3 text-[9px] uppercase tracking-[0.12em] text-white/[0.42] sm:px-4 sm:text-[10px]`,children:[(0,p.jsx)(`span`,{children:e}),(0,p.jsxs)(`span`,{className:`flex items-center gap-2 text-primary`,children:[(0,p.jsx)(Te,{tone:`accent`}),t]})]})}function De({step:e}){return(0,p.jsxs)(`div`,{className:`border border-white/[0.16] bg-[#0a0b0f]`,children:[(0,p.jsx)(Ee,{label:`PREVIEW / FLOOR_MAP`,status:`DEMO STATE`}),(0,p.jsxs)(`div`,{className:`grid md:grid-cols-[minmax(12rem,0.72fr)_minmax(0,1.28fr)]`,children:[(0,p.jsxs)(`div`,{className:`border-b border-white/[0.14] p-4 md:border-b-0 md:border-r sm:p-5`,children:[(0,p.jsx)(`p`,{className:`ss-console-mono text-[9px] uppercase tracking-[0.12em] text-white/[0.35]`,children:`Зоны клуба`}),(0,p.jsx)(`div`,{className:`mt-4 border-b border-white/[0.12]`,children:[`Основной зал`,`Bootcamp`,`Консольная зона`].map((e,t)=>(0,p.jsxs)(`div`,{className:`flex items-center justify-between gap-4 border-t border-white/[0.12] py-3 text-sm text-white/[0.72]`,children:[(0,p.jsx)(`span`,{children:e}),(0,p.jsxs)(`span`,{className:`ss-console-mono text-[9px] text-white/[0.35]`,children:[`Z-0`,t+1]})]},e))})]}),(0,p.jsxs)(`div`,{className:`min-w-0 p-4 sm:p-5`,children:[(0,p.jsxs)(`div`,{className:`ss-console-mono grid grid-cols-[4rem_minmax(5rem,0.7fr)_minmax(0,1.3fr)] border-b border-white/[0.16] pb-2 text-[8px] uppercase tracking-[0.1em] text-white/[0.30] sm:text-[9px]`,children:[(0,p.jsx)(`span`,{children:`Место`}),(0,p.jsx)(`span`,{children:`Состояние`}),(0,p.jsx)(`span`,{children:`Контекст`})]}),we.map(([t,n,r],i)=>{let a=i===e%we.length;return(0,p.jsxs)(`div`,{"data-demo-active":a?`true`:`false`,className:`ss-demo-row grid min-h-12 grid-cols-[4rem_minmax(5rem,0.7fr)_minmax(0,1.3fr)] items-center border-b border-white/[0.10] px-2 text-[11px] last:border-b-0 sm:text-xs ${a?`bg-primary/[0.08]`:``}`,children:[(0,p.jsx)(`span`,{className:`ss-console-mono text-primary`,children:t}),(0,p.jsxs)(`span`,{className:`flex items-center gap-2 text-white/[0.72]`,children:[(0,p.jsx)(Te,{tone:a||i===2?`ok`:i<2?`accent`:`idle`}),n]}),(0,p.jsx)(`span`,{className:`truncate text-white/[0.38]`,children:r})]},t)})]})]})]})}function Oe({step:e}){let t=[[`01`,`Пополнение`,`КАРТА / НАЛИЧНЫЕ / СБП`],[`02`,`Продажа`,`ТОВАРЫ И УСЛУГИ`],[`03`,`Возврат`,`ИСТОРИЯ ОПЕРАЦИИ`]],n=t[e%t.length];return(0,p.jsxs)(`div`,{className:`border border-white/[0.16] bg-[#0a0b0f]`,children:[(0,p.jsx)(Ee,{label:`PREVIEW / CHECKOUT`,status:`SIMULATION`}),(0,p.jsxs)(`div`,{className:`grid lg:grid-cols-[minmax(0,1fr)_15rem]`,children:[(0,p.jsxs)(`div`,{className:`border-b border-white/[0.14] p-4 lg:border-b-0 lg:border-r sm:p-5`,children:[(0,p.jsx)(`p`,{className:`ss-console-mono text-[9px] uppercase tracking-[0.12em] text-white/[0.35]`,children:`Доступные операции`}),(0,p.jsx)(`div`,{className:`mt-4 border border-white/[0.12]`,children:t.map(([n,r,i],a)=>{let o=a===e%t.length;return(0,p.jsxs)(`div`,{"data-demo-active":o?`true`:`false`,className:`ss-demo-row grid min-h-14 grid-cols-[2.5rem_minmax(0,0.75fr)_minmax(0,1.25fr)] items-center border-b border-white/[0.12] px-3 last:border-b-0 ${o?`bg-primary/[0.08]`:``}`,children:[(0,p.jsx)(`span`,{className:`ss-console-mono text-[10px] text-primary`,children:n}),(0,p.jsx)(`span`,{className:`text-sm font-semibold text-white/[0.78]`,children:r}),(0,p.jsx)(`span`,{className:`ss-console-mono truncate text-[9px] text-white/[0.32]`,children:i})]},n)})})]}),(0,p.jsxs)(`div`,{className:`flex flex-col justify-between bg-[#08090d] p-4 sm:p-5`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`ss-console-mono text-[9px] uppercase tracking-[0.12em] text-primary`,children:`Операция`}),(0,p.jsx)(`p`,{className:`mt-3 text-xl font-bold text-white`,children:n[1]}),(0,p.jsx)(`p`,{className:`ss-console-mono mt-3 text-[9px] uppercase leading-relaxed text-white/[0.38]`,children:n[2]})]}),(0,p.jsx)(`div`,{className:`mt-8 border-y border-white/[0.14] py-3`,children:(0,p.jsxs)(`div`,{className:`ss-console-mono flex items-center justify-between text-[9px] uppercase text-white/[0.35]`,children:[(0,p.jsx)(`span`,{children:`Статус`}),(0,p.jsxs)(`span`,{className:`flex items-center gap-2 text-emerald-300`,children:[(0,p.jsx)(Te,{tone:`ok`}),`Готово`]})]})})]})]})]})}function ke({step:e}){let t=[[`01`,`Бронь`,`Гость выбирает клуб и место`],[`02`,`Депозит`,`Пополняет баланс онлайн`],[`03`,`QR-вход`,`Авторизуется в клубе`],[`04`,`Лояльность`,`Возвращается в общий профиль`]];return(0,p.jsxs)(`div`,{className:`border border-white/[0.16] bg-[#0a0b0f]`,children:[(0,p.jsx)(Ee,{label:`PREVIEW / GUEST_FLOW`,status:`SCENARIO`}),(0,p.jsx)(`div`,{className:`p-4 sm:p-5`,children:(0,p.jsx)(`div`,{className:`border-l border-primary/[0.55]`,children:t.map(([n,r,i],a)=>{let o=a===e%t.length;return(0,p.jsxs)(`div`,{"data-demo-active":o?`true`:`false`,className:`ss-demo-row relative grid min-h-16 gap-1 border-b border-white/[0.12] py-3 pl-6 last:border-b-0 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center sm:gap-5 ${o?`bg-primary/[0.08]`:``}`,children:[(0,p.jsx)(`span`,{className:`absolute -left-[4.5px] top-1/2 h-2 w-2 -translate-y-1/2 border border-primary ${o?`bg-primary`:`bg-[#0a0b0f]`}`}),(0,p.jsxs)(`span`,{className:`ss-console-mono text-[9px] uppercase text-primary`,children:[n,` / `,r]}),(0,p.jsx)(`span`,{className:`text-sm text-white/[0.58]`,children:i})]},n)})})})]})}function Ae({step:e}){let t=[[`SHELL`,`Интерфейс гостя`,`READY`],[`POLICY`,`Ограничения Windows`,`ACTIVE`],[`DATA`,`События игровых мест`,`SYNC`],[`REPORT`,`Отчёты смены`,`AVAILABLE`]];return(0,p.jsxs)(`div`,{className:`border border-white/[0.16] bg-[#0a0b0f]`,children:[(0,p.jsx)(Ee,{label:`PREVIEW / WORKSTATION`,status:`SYSTEM VIEW`}),(0,p.jsxs)(`div`,{className:`grid md:grid-cols-[minmax(0,1.3fr)_minmax(12rem,0.7fr)]`,children:[(0,p.jsx)(`div`,{className:`border-b border-white/[0.14] p-4 md:border-b-0 md:border-r sm:p-5`,children:t.map(([n,r,i],a)=>{let o=a===e%t.length;return(0,p.jsxs)(`div`,{"data-demo-active":o?`true`:`false`,className:`ss-demo-row grid min-h-[3.25rem] grid-cols-[4.5rem_minmax(0,1fr)_5.5rem] items-center border-b border-white/[0.12] px-2 last:border-b-0 ${o?`bg-primary/[0.08]`:``}`,children:[(0,p.jsx)(`span`,{className:`ss-console-mono text-[9px] text-primary`,children:n}),(0,p.jsx)(`span`,{className:`text-sm text-white/[0.66]`,children:r}),(0,p.jsx)(`span`,{className:`ss-console-mono text-right text-[8px] text-emerald-300`,children:i})]},n)})}),(0,p.jsxs)(`div`,{className:`flex min-h-44 flex-col justify-between bg-[#08090d] p-4 sm:p-5`,children:[(0,p.jsx)(`p`,{className:`ss-console-mono text-[9px] uppercase tracking-[0.12em] text-white/[0.35]`,children:`Контур`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-2xl font-bold leading-tight text-white`,children:`Место → смена → отчёт`}),(0,p.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-white/[0.42]`,children:`Один источник состояния для гостевого компьютера и панели клуба.`})]})]})]})]})}function je({module:e,step:t}){return e===`hall`?(0,p.jsx)(De,{step:t}):e===`checkout`?(0,p.jsx)(Oe,{step:t}):e===`guests`?(0,p.jsx)(ke,{step:t}):(0,p.jsx)(Ae,{step:t})}function Me({className:e=``,initialModule:t=`hall`,onModuleChange:n}){let r=(0,f.useId)(),i=(0,f.useRef)(null),[a,o]=(0,f.useState)(t),[s,c]=(0,f.useState)(0),[l,u]=(0,f.useState)(!0),[d,m]=(0,f.useState)(!1),[h,g]=(0,f.useState)(()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),_=Ce.find(e=>e.id===a)??Ce[0],v=`${r}-module-panel`,y=e=>{o(e),c(0),u(!1),n?.(e)};return(0,f.useEffect)(()=>{let e=i.current;if(!e||!(`IntersectionObserver`in window)){m(!0);return}let t=new IntersectionObserver(([e])=>m(e.isIntersecting),{threshold:.16});return t.observe(e),()=>t.disconnect()},[]),(0,f.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>g(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,f.useEffect)(()=>{if(!l||!d||h)return;let e=window.setTimeout(()=>{if(s<3){c(e=>e+1);return}let e=Ce[(Ce.findIndex(e=>e.id===a)+1)%Ce.length];o(e.id),c(0),n?.(e.id)},s===3?1700:1150);return()=>window.clearTimeout(e)},[a,l,s,d,n,h]),(0,p.jsxs)(`section`,{ref:i,className:`ss-ecosystem-console border border-white/[0.16] bg-[#08090d] text-white ${e}`,"aria-labelledby":`${r}-title`,children:[(0,p.jsxs)(`div`,{className:`ss-console-mono flex min-h-11 flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-white/[0.16] bg-[#07080b] px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-white/[0.38] sm:text-[10px]`,children:[(0,p.jsx)(`span`,{id:`${r}-title`,children:`SmartShell / ecosystem console`}),(0,p.jsxs)(`button`,{type:`button`,className:`ss-ecosystem-demo-toggle flex min-h-7 items-center gap-2 border-0 border-l border-white/[0.16] bg-transparent pl-3 text-primary`,"aria-pressed":l,onClick:()=>{c(0),u(e=>!e)},children:[(0,p.jsx)(Te,{tone:`accent`}),h?`DEMO / STATIC`:l?`DEMO / RUNNING`:`DEMO / CONTINUE`]})]}),(0,p.jsxs)(`div`,{className:`lg:grid lg:grid-cols-[21rem_minmax(0,1fr)]`,children:[(0,p.jsxs)(`div`,{className:`ss-ecosystem-module-list border-b border-white/[0.16] bg-[#0a0b0f] lg:border-b-0 lg:border-r`,children:[(0,p.jsx)(`div`,{className:`ss-console-mono border-b border-white/[0.12] px-4 py-3 text-[9px] uppercase tracking-[0.12em] text-white/[0.30]`,children:`Modules / 04`}),(0,p.jsx)(`div`,{className:`ss-ecosystem-module-tabs`,"aria-label":`Модули экосистемы SmartShell`,children:Ce.map((e,t)=>{let n=e.id===a;return(0,p.jsxs)(`button`,{type:`button`,"aria-pressed":n,"aria-controls":v,onClick:()=>y(e.id),className:`ss-ecosystem-module-button group grid w-full grid-cols-[2.75rem_minmax(0,1fr)_1.25rem] items-start border-b border-white/[0.12] px-4 py-4 text-left transition-colors duration-100 ease-linear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary ${n?`bg-[#12111a] text-white`:`bg-[#0a0b0f] text-white/[0.52] hover:bg-[#0d0e13] hover:text-white`}`,children:[(0,p.jsxs)(`span`,{className:`ss-console-mono pt-0.5 text-[9px] text-primary`,children:[`0`,t+1]}),(0,p.jsxs)(`span`,{className:`min-w-0`,children:[(0,p.jsx)(`span`,{className:`block text-sm font-bold`,children:e.title}),(0,p.jsx)(`span`,{className:`ss-ecosystem-module-summary mt-1.5 block text-xs leading-relaxed text-white/[0.34]`,children:e.summary})]}),(0,p.jsx)(`span`,{"aria-hidden":`true`,className:`ss-console-mono text-right text-sm ${n?`text-primary`:`text-white/[0.25]`}`,children:n?`■`:`□`})]},e.id)})})]}),(0,p.jsxs)(`div`,{id:v,className:`min-w-0 p-[clamp(1rem,2.8vw,2.5rem)]`,"aria-live":`polite`,children:[(0,p.jsxs)(`div`,{className:`grid gap-5 border-b border-white/[0.14] pb-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end`,children:[(0,p.jsxs)(`div`,{className:`min-w-0`,children:[(0,p.jsxs)(`p`,{className:`ss-console-mono text-[9px] uppercase tracking-[0.12em] text-primary`,children:[`[`,_.code,`] / ACTIVE MODULE`]}),(0,p.jsx)(`h3`,{className:`mt-3 text-[clamp(1.55rem,3vw,3.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-white`,children:_.title}),(0,p.jsx)(`p`,{className:`mt-3 max-w-[58ch] text-sm leading-relaxed text-white/[0.48]`,children:_.summary})]}),(0,p.jsx)(`div`,{className:`ss-console-mono flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.06em]`,children:_.links.map(e=>(0,p.jsxs)(`a`,{href:be(e.slug),className:`inline-flex min-h-10 items-center border border-white/[0.18] bg-[#0a0b0f] px-3 text-white/[0.62] transition-colors duration-100 ease-linear hover:border-primary hover:bg-primary hover:text-[#08090d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`,children:[e.label,` `,(0,p.jsx)(`span`,{className:`ml-2`,children:`→`})]},e.slug))})]}),(0,p.jsx)(`div`,{className:`mt-5`,children:(0,p.jsx)(je,{module:_.id,step:s})})]})]}),(0,p.jsxs)(`div`,{className:`ss-console-mono flex min-h-8 flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-white/[0.16] bg-[#07080b] px-4 py-2 text-[8px] uppercase tracking-[0.12em] text-white/[0.28] sm:text-[9px]`,children:[(0,p.jsx)(`span`,{children:`SYSTEM / SMARTSHELL`}),(0,p.jsxs)(`span`,{children:[`MODULE / `,_.code]}),(0,p.jsxs)(`span`,{children:[`STEP / 0`,s+1,` · `,l?`AUTO`:`MANUAL`]})]}),(0,p.jsx)(`style`,{children:`
        .ss-ecosystem-console {
          color-scheme: dark;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .ss-ecosystem-console .ss-console-mono {
          font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, monospace;
        }
        .ss-ecosystem-console button,
        .ss-ecosystem-console a {
          border-radius: 0;
          box-shadow: none;
        }
        .ss-ecosystem-console .ss-demo-row {
          border-left: 2px solid transparent;
          transition: background-color 100ms linear, color 100ms linear;
        }
        .ss-ecosystem-console .ss-demo-row[data-demo-active="true"] {
          border-left-color: var(--ss-primary);
        }
        .ss-ecosystem-demo-toggle {
          font: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          cursor: pointer;
        }
        .ss-ecosystem-demo-toggle:hover,
        .ss-ecosystem-demo-toggle:focus-visible {
          color: var(--ss-text);
          outline: 0;
        }
        @media (max-width: 1023px) {
          .ss-ecosystem-module-tabs {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
          }
          .ss-ecosystem-module-tabs::-webkit-scrollbar {
            display: none;
          }
          .ss-ecosystem-module-button {
            width: 220px;
            min-width: 220px;
            min-height: 88px;
            flex: 0 0 220px;
            border-right: 1px solid var(--ss-line);
            border-bottom: 0;
          }
        }
        @media (max-width: 680px) {
          .ss-ecosystem-module-button {
            width: 172px;
            min-width: 172px;
            min-height: 62px;
            flex-basis: 172px;
            grid-template-columns: 1.8rem minmax(0, 1fr) 1rem;
            padding: 11px 10px;
          }
          .ss-ecosystem-module-summary {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ss-ecosystem-console .ss-demo-row {
            transition: none;
          }
        }
      `})]})}var Ne=[{id:`starter`,code:`PLAN/01`,name:`Starter`,price:280,minimumHosts:1,note:`Карта клуба, биллинг, Shell, касса и базовые отчёты.`},{id:`business`,code:`PLAN/02`,name:`Business`,price:580,minimumHosts:1,note:`SmartGamer, лояльность, бронирования и расширенная аналитика.`},{id:`premium`,code:`PLAN/03`,name:`SmartPremium`,price:1200,minimumHosts:1,note:`Business и премиальная техническая поддержка 24/7; предложение для новых клиентов.`}],Pe=200,Fe=e=>`${new Intl.NumberFormat(`ru-RU`).format(e)} ₽`,Ie=e=>Ne.find(t=>t.id===e)??Ne[1],Le=(e,t)=>Math.min(Pe,Math.max(t,Math.round(e)));function Re({className:e=``,initialPlan:t=`business`,initialHosts:n=30,onTrial:r}){let i=(0,f.useId)(),a=Ie(t),[o,s]=(0,f.useState)(a.id),[c,l]=(0,f.useState)(()=>Le(n,a.minimumHosts)),u=Ie(o),d=(0,f.useMemo)(()=>c*u.price,[c,u.price]),m=`${i}-hosts-range`,h=`${i}-hosts-input`,g=e=>{s(e.id),l(t=>Le(t,e.minimumHosts))},_=e=>{Number.isFinite(e)&&l(Le(e,u.minimumHosts))};return(0,p.jsxs)(`section`,{className:`ss-checkout-console border border-white/[0.16] bg-[#08090d] text-white ${e}`,"aria-labelledby":`${i}-title`,children:[(0,p.jsxs)(`div`,{className:`ss-checkout-mono flex min-h-11 flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-white/[0.16] bg-[#07080b] px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-white/[0.38] sm:text-[10px]`,children:[(0,p.jsx)(`span`,{id:`${i}-title`,children:`SmartShell / checkout console`}),(0,p.jsxs)(`span`,{className:`flex items-center gap-2 text-primary`,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,className:`h-2 w-2 border border-primary bg-primary`}),`MODE / ESTIMATE`]})]}),(0,p.jsxs)(`div`,{className:`lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]`,children:[(0,p.jsxs)(`div`,{className:`border-b border-white/[0.16] lg:border-b-0 lg:border-r`,children:[(0,p.jsxs)(`fieldset`,{children:[(0,p.jsx)(`legend`,{className:`ss-checkout-mono w-full border-b border-white/[0.14] px-4 py-3 text-[9px] uppercase tracking-[0.12em] text-white/[0.35]`,children:`01 / Выберите тариф`}),(0,p.jsx)(`div`,{children:Ne.map(e=>{let t=e.id===u.id;return(0,p.jsxs)(`label`,{className:`grid cursor-pointer grid-cols-[2rem_minmax(0,1fr)_auto] gap-x-3 border-b border-white/[0.12] px-4 py-4 transition-colors duration-100 ease-linear focus-within:outline focus-within:outline-2 focus-within:outline-offset-[-2px] focus-within:outline-primary sm:grid-cols-[3rem_minmax(9rem,0.55fr)_minmax(0,1fr)_auto] sm:items-center ${t?`bg-[#12111a]`:`bg-[#0a0b0f] hover:bg-[#0d0e13]`}`,children:[(0,p.jsx)(`input`,{type:`radio`,name:`${i}-plan`,value:e.id,checked:t,onChange:()=>g(e),className:`sr-only`}),(0,p.jsx)(`span`,{"aria-hidden":`true`,className:`ss-checkout-mono pt-0.5 text-sm sm:pt-0 ${t?`text-primary`:`text-white/[0.25]`}`,children:t?`[x]`:`[ ]`}),(0,p.jsxs)(`span`,{className:`min-w-0`,children:[(0,p.jsx)(`span`,{className:`ss-checkout-mono block text-[9px] uppercase tracking-[0.1em] text-primary`,children:e.code}),(0,p.jsx)(`span`,{className:`mt-1 block text-base font-bold text-white`,children:e.name})]}),(0,p.jsx)(`span`,{className:`col-span-2 mt-3 text-xs leading-relaxed text-white/[0.38] sm:col-span-1 sm:mt-0`,children:e.note}),(0,p.jsxs)(`span`,{className:`col-start-2 mt-3 whitespace-nowrap text-right text-lg font-extrabold text-white sm:col-start-auto sm:mt-0`,children:[e.price,` ₽`,(0,p.jsx)(`span`,{className:`ss-checkout-mono ml-1 text-[8px] font-normal uppercase text-white/[0.30]`,children:`/ место · мес`})]})]},e.id)})})]}),(0,p.jsxs)(`div`,{className:`p-4 sm:p-6`,children:[(0,p.jsxs)(`div`,{className:`ss-checkout-mono flex items-center justify-between gap-5 border-b border-white/[0.14] pb-3 text-[9px] uppercase tracking-[0.12em] text-white/[0.35]`,children:[(0,p.jsx)(`label`,{htmlFor:m,children:`02 / Игровые места`}),(0,p.jsx)(`span`,{children:`STEP / 1`})]}),(0,p.jsxs)(`div`,{className:`mt-5 grid grid-cols-[2.75rem_minmax(5rem,7rem)_2.75rem] items-stretch`,children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>_(c-1),disabled:c<=u.minimumHosts,"aria-label":`Уменьшить количество игровых мест на одно`,className:`ss-checkout-mono min-h-12 border border-white/[0.18] bg-[#0a0b0f] text-base text-white/[0.62] transition-colors duration-100 ease-linear hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30`,children:`−`}),(0,p.jsx)(`input`,{id:h,type:`number`,min:u.minimumHosts,max:Pe,step:1,value:c,onChange:e=>_(Number(e.target.value)),"aria-label":`Количество игровых мест`,className:`min-h-12 min-w-0 border-y border-white/[0.18] bg-[#08090d] px-2 text-center text-2xl font-extrabold text-white outline-none focus:border-primary`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>_(c+1),disabled:c>=Pe,"aria-label":`Увеличить количество игровых мест на одно`,className:`ss-checkout-mono min-h-12 border border-white/[0.18] bg-[#0a0b0f] text-base text-white/[0.62] transition-colors duration-100 ease-linear hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30`,children:`+`})]}),(0,p.jsxs)(`div`,{className:`mt-5`,children:[(0,p.jsx)(`input`,{id:m,type:`range`,min:u.minimumHosts,max:Pe,step:1,value:c,onChange:e=>_(Number(e.target.value)),"aria-valuetext":`${c} игровых мест`,className:`ss-checkout-range h-11 w-full cursor-pointer`}),(0,p.jsxs)(`div`,{className:`ss-checkout-mono flex justify-between text-[9px] text-white/[0.30]`,children:[(0,p.jsxs)(`span`,{children:[`MIN / `,u.minimumHosts]}),(0,p.jsxs)(`span`,{children:[`MAX / `,Pe]})]})]})]})]}),(0,p.jsxs)(`div`,{className:`flex min-w-0 flex-col bg-[#0a0b0f]`,children:[(0,p.jsxs)(`div`,{className:`ss-checkout-mono flex min-h-10 items-center justify-between border-b border-white/[0.14] px-4 text-[9px] uppercase tracking-[0.12em] text-white/[0.35]`,children:[(0,p.jsx)(`span`,{children:`CHECK / SUBSCRIPTION`}),(0,p.jsx)(`span`,{children:`PREVIEW`})]}),(0,p.jsxs)(`div`,{className:`flex flex-1 flex-col p-4 sm:p-6`,children:[(0,p.jsxs)(`div`,{className:`ss-checkout-mono border-y border-dashed border-white/[0.20] py-4 text-[10px] uppercase`,children:[(0,p.jsxs)(`div`,{className:`flex items-start justify-between gap-4 py-1.5 text-white/[0.55]`,children:[(0,p.jsx)(`span`,{children:`Тариф`}),(0,p.jsx)(`span`,{className:`text-right text-white`,children:u.name})]}),(0,p.jsxs)(`div`,{className:`flex items-start justify-between gap-4 py-1.5 text-white/[0.55]`,children:[(0,p.jsx)(`span`,{children:`Игровые места`}),(0,p.jsx)(`span`,{className:`text-white`,children:c})]}),(0,p.jsxs)(`div`,{className:`flex items-start justify-between gap-4 py-1.5 text-white/[0.55]`,children:[(0,p.jsx)(`span`,{children:`Цена за место`}),(0,p.jsx)(`span`,{className:`text-white`,children:Fe(u.price)})]})]}),(0,p.jsxs)(`div`,{className:`border-b border-white/[0.14] py-6`,children:[(0,p.jsx)(`p`,{className:`ss-checkout-mono text-[9px] uppercase tracking-[0.12em] text-primary`,children:`Итого после пробного периода`}),(0,p.jsx)(`output`,{htmlFor:`${m} ${h}`,"aria-live":`polite`,className:`mt-2 block break-words text-[clamp(2rem,4vw,4.25rem)] font-extrabold leading-none tracking-[-0.045em] text-white`,children:Fe(d)}),(0,p.jsx)(`p`,{className:`ss-checkout-mono mt-2 text-[9px] uppercase text-white/[0.30]`,children:`/ месяц`})]}),(0,p.jsxs)(`div`,{className:`mt-5 border border-primary/[0.55] bg-[#111019] p-4`,children:[(0,p.jsx)(`p`,{className:`ss-checkout-mono text-[9px] uppercase tracking-[0.12em] text-primary`,children:`Trial / 30 дней`}),(0,p.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-white/[0.58]`,children:`Сегодня без списания. Платёжная карта для начала пробного периода не нужна.`})]}),u.id===`premium`&&(0,p.jsxs)(`p`,{className:`mt-4 text-xs leading-relaxed text-white/[0.36]`,children:[`1200 ₽ за место — предложение для новых клиентов SmartShell. Условия для действующих клиентов`,` `,(0,p.jsx)(`a`,{href:`https://smartshell.gg/price/`,target:`_blank`,rel:`noreferrer`,className:`text-primary underline underline-offset-4`,children:`указаны на странице тарифов`}),`.`]}),(0,p.jsxs)(`button`,{type:`button`,onClick:()=>{r({planId:u.id,planName:u.name,hosts:c,unitPrice:u.price,monthlyTotal:d,trialDays:30})},className:`ss-checkout-mono mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-between border border-primary bg-primary px-4 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#08090d] transition-colors duration-100 ease-linear hover:bg-[#08090d] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`,children:[(0,p.jsx)(`span`,{children:`Начать 30 дней бесплатно`}),(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`[ENTER]`})]})]})]})]}),(0,p.jsxs)(`div`,{className:`ss-checkout-mono flex min-h-8 flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-white/[0.16] bg-[#07080b] px-4 py-2 text-[8px] uppercase tracking-[0.12em] text-white/[0.28] sm:text-[9px]`,children:[(0,p.jsxs)(`span`,{children:[`PLAN / `,u.id]}),(0,p.jsxs)(`span`,{children:[`HOSTS / `,c]}),(0,p.jsx)(`span`,{children:`BILLING / MONTHLY`})]}),(0,p.jsx)(`style`,{children:`
        .ss-checkout-console {
          color-scheme: dark;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .ss-checkout-console .ss-checkout-mono {
          font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, monospace;
        }
        .ss-checkout-console button,
        .ss-checkout-console input {
          border-radius: 0;
          box-shadow: none;
        }
        .ss-checkout-console .ss-checkout-range {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          outline: none;
          touch-action: pan-y;
        }
        .ss-checkout-console .ss-checkout-range::-webkit-slider-runnable-track {
          height: 1px;
          background: rgba(255, 255, 255, 0.24);
        }
        .ss-checkout-console .ss-checkout-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 28px;
          margin-top: -14px;
          border: 1px solid #c4b5fd;
          border-radius: 0;
          background: #8b7cf6;
          box-shadow: none;
        }
        .ss-checkout-console .ss-checkout-range::-moz-range-track {
          height: 1px;
          background: rgba(255, 255, 255, 0.24);
        }
        .ss-checkout-console .ss-checkout-range::-moz-range-thumb {
          width: 16px;
          height: 28px;
          border: 1px solid #c4b5fd;
          border-radius: 0;
          background: #8b7cf6;
          box-shadow: none;
        }
      `})]})}var ze=[{index:`01`,title:`Знакомство со SmartShell`,description:`Демонстрация системы на сценариях конкретного клуба и ответы на вопросы команды.`,state:`DEMO / 30 MIN`},{index:`02`,title:`Подготовка к переходу`,description:`Разбор функций для работы с гостями и оборудованием, согласование состава переносимой базы.`,state:`REVIEW / 60 MIN`},{index:`03`,title:`Установка и дата переноса`,description:`Установка с технической поддержкой и выбор времени для переноса данных.`,state:`SETUP / 120 MIN`},{index:`04`,title:`Импорт, настройка и обучение`,description:`Перенос клиентской базы, бонусов, скидок и групп; проверка операций вместе с командой.`,state:`DATA / ONBOARDING`},{index:`05`,title:`SmartPremium — по желанию`,description:`Отдельный аудит и план технического сопровождения для клуба, которому нужен этот сервис.`,state:`OPTIONAL`}];function Be(){return(0,p.jsxs)(`section`,{id:`migration`,"data-module":`migration`,className:`ss-page-module ss-migration-module`,"aria-labelledby":`migration-title`,children:[(0,p.jsxs)(`div`,{className:`ss-section-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`ss-kicker`,children:`MIGRATION / CONTROLLED`}),(0,p.jsx)(`h2`,{id:`migration-title`,children:`Переход идёт по заранее проверенному сценарию.`})]}),(0,p.jsx)(`p`,{children:`Клуб сначала знакомится с системой, затем согласует состав данных и настроек, проверяет ключевые операции и только после этого меняет рабочую систему.`})]}),(0,p.jsxs)(`div`,{className:`ss-migration-console`,children:[(0,p.jsxs)(`div`,{className:`ss-registry-bar`,children:[(0,p.jsx)(`span`,{children:`SMARTSHELL / MIGRATION`}),(0,p.jsx)(`span`,{children:`SEQUENCE / 05`})]}),(0,p.jsxs)(`div`,{className:`ss-migration-grid`,children:[(0,p.jsx)(`ol`,{className:`ss-migration-steps`,children:ze.map((e,t)=>(0,p.jsxs)(`li`,{children:[(0,p.jsxs)(`div`,{className:`ss-migration-node`,children:[(0,p.jsx)(`span`,{children:e.index}),(0,p.jsx)(`span`,{className:`ss-migration-line`,"aria-hidden":`true`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`ss-migration-step-head`,children:[(0,p.jsx)(`strong`,{children:e.title}),(0,p.jsx)(`span`,{children:e.state})]}),(0,p.jsx)(`p`,{children:e.description})]}),(0,p.jsx)(`span`,{className:`ss-migration-check`,"aria-hidden":`true`,children:t===0?`●`:`○`})]},e.index))}),(0,p.jsxs)(`div`,{className:`ss-migration-readout`,children:[(0,p.jsxs)(`div`,{className:`ss-readout-head`,children:[(0,p.jsx)(`span`,{children:`MIGRATION PLAN`}),(0,p.jsx)(`span`,{children:`TO CONFIRM`})]}),(0,p.jsxs)(`dl`,{children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`Контакты гостей`}),(0,p.jsx)(`dd`,{children:`телефон или email`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`Баланс`}),(0,p.jsx)(`dd`,{children:`обычный и бонусный`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`Лояльность`}),(0,p.jsx)(`dd`,{children:`скидки и группы`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`Время переноса`}),(0,p.jsx)(`dd`,{children:`согласуется с клубом`})]})]}),(0,p.jsxs)(`a`,{href:`https://smartshell.gg/change_soft/`,target:`_blank`,rel:`noreferrer`,className:`ss-ui-button`,children:[`Уточнить условия перехода`,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]})]})]})}function Ve({media:e,eager:t=!1,prominent:n=!1}){return(0,p.jsxs)(`figure`,{className:`pv__frame${n?` pv__frame--prominent`:``}`,children:[(0,p.jsxs)(`div`,{className:`pv__bar`,children:[(0,p.jsx)(`span`,{children:`SMARTSHELL / INTERFACE`}),(0,p.jsx)(`span`,{children:e.label})]}),(0,p.jsx)(`div`,{className:`pv__viewport`,children:(0,p.jsx)(`img`,{src:e.src.replace(/^\//,``),alt:e.alt,loading:t?`eager`:`lazy`,decoding:t?`sync`:`async`,fetchPriority:t?`high`:`auto`,className:`pv__image${e.objectPosition===`top`?` pv__image--top`:``}`})}),(0,p.jsxs)(`figcaption`,{className:`pv__caption`,children:[(0,p.jsx)(`span`,{children:e.label}),(0,p.jsxs)(`span`,{children:[`UI / `,e.src.split(`.`).pop()?.toUpperCase()]})]})]})}function He({product:e}){return(0,p.jsxs)(`section`,{className:`pv__topology`,"aria-label":`${e.name}: место в экосистеме SmartShell`,children:[(0,p.jsxs)(`header`,{className:`pv__topology-head`,children:[(0,p.jsx)(`span`,{children:`SMARTSHELL / PRODUCT CONTEXT`}),(0,p.jsx)(`span`,{children:e.category})]}),(0,p.jsxs)(`div`,{className:`pv__topology-body`,children:[(0,p.jsxs)(`div`,{className:`pv__module`,children:[(0,p.jsx)(`span`,{className:`pv__key`,children:`SELECTED PRODUCT`}),(0,p.jsx)(`strong`,{children:e.name}),(0,p.jsx)(`span`,{className:`pv__audience`,children:e.audience})]}),(0,p.jsxs)(`div`,{className:`pv__signals`,children:[(0,p.jsxs)(`div`,{className:`pv__signals-head`,children:[(0,p.jsx)(`span`,{children:`FUNCTION SIGNALS`}),(0,p.jsx)(`span`,{children:String(e.signals.length).padStart(2,`0`)})]}),e.signals.map((e,t)=>(0,p.jsxs)(`div`,{className:`pv__signal-row`,children:[(0,p.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`span`,{children:e})]},e))]})]})]})}function Ue({product:e,mode:t=`hero`}){return e.media.length===0?(0,p.jsx)(He,{product:e}):t===`hero`?(0,p.jsx)(Ve,{media:e.media[0],eager:!0,prominent:!0}):(0,p.jsx)(`div`,{className:`pv__gallery`,children:e.media.map((t,n)=>(0,p.jsx)(`div`,{className:n===0&&e.media.length>2?`pv__gallery-feature`:void 0,children:(0,p.jsx)(Ve,{media:t,prominent:n===0})},t.src))})}var We=`
.pdp,
.pdp * {
  box-sizing: border-box;
}

.pdp {
  min-height: 100vh;
  overflow-x: clip;
  padding-bottom: 3rem;
  background: var(--ss-page);
  color: var(--ss-text);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.pdp a {
  color: inherit;
  text-decoration: none;
}

.pdp button,
.pdp a {
  -webkit-tap-highlight-color: transparent;
}

.pdp a:focus-visible {
  outline: 1px solid var(--ss-primary);
  outline-offset: 2px;
}

.pdp__shell {
  width: min(100%, 112rem);
  margin: 0 auto;
  padding-inline: clamp(1rem, 3.4vw, 4rem);
}

.pdp__mono,
.pdp__eyebrow,
.pdp__appbar,
.pdp__selector,
.pdp__section-kicker,
.pdp__metric,
.pdp__capability-index,
.pdp__connection-index,
.pdp__related-index,
.pdp__button,
.pv__bar,
.pv__caption,
.pv__topology-head,
.pv__key,
.pv__signals-head,
.pv__signal-row {
  font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
}

.pdp__appbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--ss-panel-deep);
  border-bottom: 1px solid var(--ss-line-strong);
  font-size: 0.6875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pdp__appbar-main {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: stretch;
  min-height: 3.25rem;
}

.pdp__back,
.pdp__appbar-action {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  gap: 0.65rem;
  padding-inline: 1rem;
  transition: color 120ms linear, background-color 120ms linear;
}

.pdp__back {
  margin-left: -1rem;
  border-right: 1px solid var(--ss-line);
  color: var(--ss-text-2);
}

.pdp__back:hover {
  background: var(--ss-panel-soft);
  color: var(--ss-text);
}

.pdp__breadcrumb {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-inline: 1rem;
  color: var(--ss-text-3);
}

.pdp__breadcrumb strong,
.pdp__breadcrumb span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdp__breadcrumb strong {
  color: var(--ss-text);
  font-weight: 700;
}

.pdp__breadcrumb-divider {
  flex: 0 0 auto;
  color: var(--ss-line-strong);
}

.pdp__appbar-action {
  margin-right: -1rem;
  justify-content: center;
  border-left: 1px solid var(--ss-line);
  background: var(--ss-primary);
  color: hsl(var(--primary-foreground));
  font-weight: 800;
}

.pdp__appbar-action:hover {
  background: var(--ss-primary-hover);
}

.pdp__selector {
  overflow-x: auto;
  scrollbar-width: none;
  border-top: 1px solid var(--ss-line);
}

.pdp__selector::-webkit-scrollbar {
  display: none;
}

.pdp__selector-track {
  display: flex;
  width: max-content;
  min-width: 100%;
}

.pdp__product-tab {
  display: grid;
  min-width: 9rem;
  min-height: 3.6rem;
  align-content: center;
  gap: 0.2rem;
  padding: 0.65rem 0.9rem;
  border-right: 1px solid var(--ss-line);
  color: var(--ss-text-3);
  transition: color 120ms linear, background-color 120ms linear;
}

.pdp__product-tab:hover {
  background: var(--ss-panel-soft);
  color: var(--ss-text);
}

.pdp__product-tab[aria-current="page"] {
  background: var(--ss-primary);
  color: hsl(var(--primary-foreground));
}

.pdp__product-tab-index {
  font-size: 0.5625rem;
  letter-spacing: 0.08em;
}

.pdp__product-tab-name {
  overflow: hidden;
  font-size: 0.6875rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdp__workspace {
  position: relative;
}

.pdp__overview {
  display: grid;
  grid-template-columns: minmax(22rem, 0.82fr) minmax(32rem, 1.18fr);
  min-width: 0;
  border-inline: 1px solid var(--ss-line);
  border-bottom: 1px solid var(--ss-line-strong);
}

.pdp__overview-copy {
  min-width: 0;
  padding: clamp(2rem, 5vw, 5.8rem) clamp(1.25rem, 3.5vw, 4.2rem);
  border-right: 1px solid var(--ss-line);
}

.pdp__overview-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  align-items: center;
  color: var(--ss-text-3);
  font-size: 0.75rem;
}

.pdp__eyebrow {
  color: var(--ss-primary);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pdp__overview h1 {
  max-width: 100%;
  margin: 2rem 0 0;
  overflow-wrap: normal;
  color: var(--ss-text);
  font-size: clamp(3rem, 3.95vw, 5.3rem);
  font-weight: 900;
  hyphens: auto;
  letter-spacing: -0.075em;
  line-height: 0.82;
  word-break: normal;
}

.pdp__product-statement {
  max-width: 18ch;
  margin: 2rem 0 0;
  color: var(--ss-text);
  font-size: clamp(1.45rem, 2.25vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.03;
}

.pdp__summary {
  max-width: 48rem;
  margin: 1.25rem 0 0;
  color: var(--ss-text-2);
  font-size: clamp(0.98rem, 1.15vw, 1.125rem);
  line-height: 1.65;
}

.pdp__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: 2rem;
}

.pdp__button {
  display: inline-flex;
  min-height: 2.9rem;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--ss-line-strong);
  background: var(--ss-panel);
  color: var(--ss-text);
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  transition: color 120ms linear, background-color 120ms linear, border-color 120ms linear;
}

.pdp__button + .pdp__button {
  margin-left: -1px;
}

.pdp__button:hover {
  border-color: var(--ss-primary);
  background: var(--ss-panel-soft);
}

.pdp__button--primary {
  border-color: var(--ss-primary);
  background: var(--ss-primary);
  color: hsl(var(--primary-foreground));
}

.pdp__button--primary:hover {
  background: var(--ss-primary-hover);
  color: hsl(var(--primary-foreground));
}

.pdp__overview-visual {
  position: relative;
  z-index: 2;
  min-width: 0;
  align-self: center;
  margin: clamp(2rem, 5vw, 5rem) clamp(-3.5rem, -3vw, -1.25rem) clamp(-2.5rem, -2vw, -1rem) clamp(1.5rem, 3vw, 3.5rem);
}

.pdp__metric-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-inline: 1px solid var(--ss-line);
  border-bottom: 1px solid var(--ss-line);
}

.pdp__metric {
  min-width: 0;
  padding: 0.8rem 1rem;
  border-right: 1px solid var(--ss-line);
  color: var(--ss-text-3);
  font-size: 0.625rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pdp__metric:last-child {
  border-right: 0;
}

.pdp__metric strong {
  display: block;
  margin-top: 0.25rem;
  overflow: hidden;
  color: var(--ss-text);
  font-size: 0.75rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdp__section {
  border-inline: 1px solid var(--ss-line);
  border-bottom: 1px solid var(--ss-line-strong);
}

.pdp__section-head {
  display: grid;
  grid-template-columns: minmax(14rem, 0.42fr) minmax(0, 1fr);
  border-bottom: 1px solid var(--ss-line);
}

.pdp__section-heading {
  min-width: 0;
  padding: clamp(1.4rem, 3vw, 3rem);
  border-right: 1px solid var(--ss-line);
}

.pdp__section-kicker {
  display: block;
  color: var(--ss-primary);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pdp__section h2 {
  max-width: 18ch;
  margin: 1.1rem 0 0;
  overflow-wrap: anywhere;
  font-size: clamp(2rem, 4.8vw, 5.8rem);
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.92;
}

.pdp__section-description {
  display: flex;
  min-width: 0;
  align-items: flex-end;
  margin: 0;
  padding: clamp(1.4rem, 3vw, 3rem);
  color: var(--ss-text-2);
  font-size: clamp(0.95rem, 1.15vw, 1.1rem);
  line-height: 1.7;
}

.pdp__capability-list {
  display: grid;
}

.pdp__capability {
  display: grid;
  grid-template-columns: 4rem minmax(12rem, 0.55fr) minmax(0, 1fr);
  min-width: 0;
  border-bottom: 1px solid var(--ss-line);
  transition: background-color 120ms linear;
}

.pdp__capability:last-child {
  border-bottom: 0;
}

.pdp__capability:hover {
  background: var(--ss-panel-soft);
}

.pdp__capability-index {
  padding: 1.4rem 1rem;
  border-right: 1px solid var(--ss-line);
  color: var(--ss-primary);
  font-size: 0.6875rem;
}

.pdp__capability h3 {
  min-width: 0;
  margin: 0;
  padding: 1.35rem clamp(1rem, 2vw, 2rem);
  border-right: 1px solid var(--ss-line);
  font-size: clamp(1rem, 1.4vw, 1.35rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.pdp__capability p {
  min-width: 0;
  margin: 0;
  padding: 1.35rem clamp(1rem, 2vw, 2rem);
  color: var(--ss-text-2);
  font-size: 0.9rem;
  line-height: 1.65;
}

.pdp__interface {
  background: var(--ss-panel-deep);
}

.pdp__interface-tools {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: clamp(1.4rem, 3vw, 3rem);
}

.pdp__interface-body {
  padding: clamp(1rem, 3vw, 3rem);
}

.pdp__operations {
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(21rem, 0.86fr);
}

.pdp__operation-panel {
  min-width: 0;
}

.pdp__operation-panel + .pdp__operation-panel {
  border-left: 1px solid var(--ss-line);
}

.pdp__operation-head {
  min-height: 7rem;
  padding: clamp(1.35rem, 2.5vw, 2.4rem);
  border-bottom: 1px solid var(--ss-line);
}

.pdp__operation-head h2 {
  max-width: 17ch;
  font-size: clamp(1.8rem, 3.4vw, 4rem);
}

.pdp__ecosystem-copy {
  margin: 0;
  padding: clamp(1.35rem, 2.5vw, 2.4rem);
  border-bottom: 1px solid var(--ss-line);
  color: var(--ss-text-2);
  line-height: 1.7;
}

.pdp__connection,
.pdp__related-link {
  display: grid;
  min-width: 0;
  border-bottom: 1px solid var(--ss-line);
}

.pdp__connection:last-child,
.pdp__related-link:last-child {
  border-bottom: 0;
}

.pdp__connection {
  grid-template-columns: 3.5rem minmax(0, 1fr);
}

.pdp__connection-index,
.pdp__related-index {
  padding: 1.15rem 0.9rem;
  border-right: 1px solid var(--ss-line);
  color: var(--ss-primary);
  font-size: 0.625rem;
}

.pdp__connection-copy {
  min-width: 0;
  padding: 1rem 1.2rem 1.1rem;
}

.pdp__connection h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 800;
}

.pdp__connection p {
  margin: 0.45rem 0 0;
  color: var(--ss-text-2);
  font-size: 0.85rem;
  line-height: 1.55;
}

.pdp__related-link {
  grid-template-columns: 3.5rem minmax(0, 1fr) 3rem;
  transition: background-color 120ms linear;
}

.pdp__related-link:hover {
  background: var(--ss-panel-soft);
}

.pdp__related-copy {
  min-width: 0;
  padding: 1rem 1.2rem;
}

.pdp__related-copy strong,
.pdp__related-copy span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pdp__related-copy strong {
  font-size: 0.95rem;
}

.pdp__related-copy span {
  margin-top: 0.35rem;
  color: var(--ss-text-3);
  font-size: 0.75rem;
}

.pdp__related-arrow {
  display: grid;
  place-items: center;
  border-left: 1px solid var(--ss-line);
  color: var(--ss-primary);
}

.pdp__cta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  min-width: 0;
  border-inline: 1px solid var(--ss-line);
  border-bottom: 1px solid var(--ss-line-strong);
  background: var(--ss-panel-soft);
}

.pdp__cta-copy {
  min-width: 0;
  padding: clamp(1.35rem, 2.8vw, 2.8rem);
}

.pdp__cta h2 {
  max-width: none;
  margin: 0.75rem 0 0;
  font-size: clamp(1.8rem, 3.5vw, 4rem);
  line-height: 0.95;
}

.pdp__cta p {
  max-width: 60rem;
  margin: 1rem 0 0;
  color: var(--ss-text-2);
  line-height: 1.6;
}

.pdp__cta-actions {
  display: grid;
  min-width: 15rem;
  border-left: 1px solid var(--ss-line);
}

.pdp__cta-actions .pdp__button {
  width: 100%;
  min-height: 4rem;
  border-width: 0 0 1px;
}

.pdp__cta-actions .pdp__button:last-child {
  border-bottom: 0;
}

.pdp__cta-actions .pdp__button + .pdp__button {
  margin-left: 0;
}

.pdp__not-found {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 1rem;
}

.pdp__not-found-panel {
  width: min(100%, 44rem);
  border: 1px solid var(--ss-line-strong);
  background: var(--ss-panel);
}

.pdp__not-found-head {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--ss-line);
}

.pdp__not-found-body {
  padding: clamp(1.5rem, 5vw, 4rem);
}

.pdp__not-found h1 {
  margin: 1rem 0 0;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.9;
}

.pdp__not-found p {
  margin: 1rem 0 0;
  color: var(--ss-text-2);
  line-height: 1.6;
}

.pv__frame,
.pv__topology {
  min-width: 0;
  border: 1px solid var(--ss-line-strong);
  background: var(--ss-panel);
}

.pv__bar,
.pv__caption,
.pv__topology-head {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--ss-text-3);
  font-size: 0.5625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pv__bar,
.pv__topology-head {
  min-height: 2.2rem;
  padding-inline: 0.8rem;
  border-bottom: 1px solid var(--ss-line);
}

.pv__bar span,
.pv__caption span,
.pv__topology-head span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pv__viewport {
  display: grid;
  min-height: 16rem;
  aspect-ratio: 16 / 10;
  place-items: center;
  overflow: hidden;
  background: var(--ss-panel-deep);
}

.pv__frame--prominent .pv__viewport {
  min-height: clamp(19rem, 38vw, 43rem);
}

.pv__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.pv__image--top {
  object-position: top center;
}

.pv__caption {
  min-height: 2.4rem;
  padding-inline: 0.8rem;
  border-top: 1px solid var(--ss-line);
  color: var(--ss-text-2);
}

.pv__topology {
  min-height: 25rem;
}

.pv__topology-head {
  color: var(--ss-primary);
}

.pv__topology-body {
  display: grid;
  min-height: 22.8rem;
  grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
}

.pv__module {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.25rem, 3vw, 2.6rem);
  border-right: 1px solid var(--ss-line);
}

.pv__key,
.pv__signals-head,
.pv__signal-row {
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pv__key {
  color: var(--ss-text-3);
}

.pv__module strong {
  margin-top: 1.2rem;
  overflow-wrap: anywhere;
  font-size: clamp(1.6rem, 3vw, 3.25rem);
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 0.95;
}

.pv__audience {
  margin-top: 0.9rem;
  color: var(--ss-text-2);
  font-size: 0.82rem;
  line-height: 1.5;
}

.pv__signals {
  min-width: 0;
}

.pv__signals-head,
.pv__signal-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 3.25rem;
  min-width: 0;
  border-bottom: 1px solid var(--ss-line);
}

.pv__signals-head {
  color: var(--ss-text-3);
}

.pv__signals-head span,
.pv__signal-row span {
  min-width: 0;
  padding: 1rem;
}

.pv__signals-head span:last-child,
.pv__signal-row span:first-child {
  border-left: 1px solid var(--ss-line);
  color: var(--ss-primary);
  text-align: center;
}

.pv__signal-row {
  grid-template-columns: 3.25rem minmax(0, 1fr);
  color: var(--ss-text-2);
}

.pv__signal-row span:first-child {
  border-right: 1px solid var(--ss-line);
  border-left: 0;
}

.pv__gallery {
  display: grid;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.pv__gallery-feature {
  grid-column: 1 / -1;
  width: calc(100% + clamp(0rem, 3vw, 3rem));
}

@media (max-width: 74rem) {
  .pdp__overview {
    grid-template-columns: minmax(19rem, 0.8fr) minmax(27rem, 1.2fr);
  }

  .pdp__overview-visual {
    margin-right: -1px;
  }
}

@media (max-width: 62rem) {
  .pdp__overview {
    grid-template-columns: 1fr;
  }

  .pdp__overview-copy {
    border-right: 0;
    border-bottom: 1px solid var(--ss-line);
  }

  .pdp__overview-visual {
    margin: 1rem;
  }

  .pdp__section-head,
  .pdp__operations {
    grid-template-columns: 1fr;
  }

  .pdp__section-heading {
    border-right: 0;
    border-bottom: 1px solid var(--ss-line);
  }

  .pdp__operation-panel + .pdp__operation-panel {
    border-top: 1px solid var(--ss-line);
    border-left: 0;
  }

  .pdp__cta {
    grid-template-columns: 1fr;
  }

  .pdp__cta-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--ss-line);
    border-left: 0;
  }

  .pdp__cta-actions .pdp__button {
    min-width: 0;
    border-right: 1px solid var(--ss-line);
    border-bottom: 0;
  }

  .pdp__cta-actions .pdp__button:last-child {
    border-right: 0;
  }
}

@media (max-width: 46rem) {
  .pdp__shell {
    padding-inline: 0.75rem;
  }

  .pdp__appbar-main {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .pdp__back {
    margin-left: -0.75rem;
  }

  .pdp__appbar-action {
    display: none;
  }

  .pdp__breadcrumb {
    padding-right: 0;
  }

  .pdp__breadcrumb > span:not(.pdp__breadcrumb-divider) {
    display: none;
  }

  .pdp__breadcrumb-divider {
    display: none;
  }

  .pdp__overview h1 {
    font-size: clamp(2rem, 10vw, 3.8rem);
    line-height: 0.88;
  }

  .pdp__metric-row {
    grid-template-columns: 1fr;
  }

  .pdp__metric {
    border-right: 0;
    border-bottom: 1px solid var(--ss-line);
  }

  .pdp__metric:last-child {
    border-bottom: 0;
  }

  .pdp__section h2 {
    font-size: clamp(2.2rem, 13vw, 4.25rem);
  }

  .pdp__capability {
    grid-template-columns: 3rem minmax(0, 1fr);
  }

  .pdp__capability-index {
    grid-row: 1 / 3;
    padding-inline: 0.65rem;
  }

  .pdp__capability h3 {
    border-right: 0;
    border-bottom: 1px solid var(--ss-line);
  }

  .pdp__capability p {
    grid-column: 2;
  }

  .pdp__interface-tools {
    justify-content: stretch;
  }

  .pdp__interface-tools .pdp__button {
    width: 100%;
  }

  .pdp__cta-actions {
    grid-template-columns: 1fr;
  }

  .pdp__cta-actions .pdp__button {
    border-right: 0;
    border-bottom: 1px solid var(--ss-line);
  }

  .pv__frame--prominent .pv__viewport {
    min-height: 14rem;
  }

  .pv__topology-body {
    grid-template-columns: 1fr;
  }

  .pv__module {
    min-height: 12rem;
    border-right: 0;
    border-bottom: 1px solid var(--ss-line);
  }

  .pv__gallery {
    grid-template-columns: 1fr;
  }

  .pv__gallery-feature {
    grid-column: auto;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pdp *,
  .pdp *::before,
  .pdp *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
`;function k({direction:e=`right`}){return(0,p.jsx)(`span`,{"aria-hidden":`true`,children:e===`left`?`←`:`→`})}function Ge({backHref:e,onBack:t}){return(0,p.jsxs)(`main`,{className:`pdp pdp__not-found`,children:[(0,p.jsx)(`style`,{children:We}),(0,p.jsxs)(`section`,{className:`pdp__not-found-panel`,children:[(0,p.jsx)(`header`,{className:`pdp__not-found-head`,children:(0,p.jsx)(`span`,{className:`pdp__eyebrow`,children:`SMARTSHELL / PRODUCTS / 404`})}),(0,p.jsxs)(`div`,{className:`pdp__not-found-body`,children:[(0,p.jsx)(`h1`,{children:`Продукт не найден.`}),(0,p.jsx)(`p`,{children:`Вернитесь к карте продуктов и выберите доступный раздел системы.`}),(0,p.jsx)(`div`,{className:`pdp__actions`,children:(0,p.jsxs)(`a`,{href:e,onClick:e=>{t&&(e.preventDefault(),t())},className:`pdp__button pdp__button--primary`,children:[(0,p.jsx)(k,{direction:`left`}),`К продуктам`]})})]})]})]})}function Ke({slug:e,backHref:t=`#products`,onBack:n,onProductNavigate:r}){let i=re(e);if((0,f.useEffect)(()=>{let e=document.title;return document.title=i?`${i.name} — SmartShell`:`Продукт не найден — SmartShell`,()=>{document.title=e}},[i?.name]),!i)return(0,p.jsx)(Ge,{backHref:t,onBack:n});let a=S.indexOf(i.slug),o=e=>{n&&(e.preventDefault(),n())},s=e=>t=>{r&&(t.preventDefault(),r(e))};return(0,p.jsxs)(`main`,{className:`pdp`,children:[(0,p.jsx)(`style`,{children:We}),(0,p.jsxs)(`header`,{className:`pdp__appbar`,children:[(0,p.jsx)(`div`,{className:`pdp__shell`,children:(0,p.jsxs)(`div`,{className:`pdp__appbar-main`,children:[(0,p.jsxs)(`a`,{href:t,onClick:o,className:`pdp__back`,children:[(0,p.jsx)(k,{direction:`left`}),(0,p.jsx)(`span`,{children:`Продукты`})]}),(0,p.jsxs)(`div`,{className:`pdp__breadcrumb`,"aria-label":`Текущий раздел`,children:[(0,p.jsx)(`strong`,{children:`SMARTSHELL`}),(0,p.jsx)(`span`,{className:`pdp__breadcrumb-divider`,children:`/`}),(0,p.jsx)(`span`,{children:`PRODUCTS`}),(0,p.jsx)(`span`,{className:`pdp__breadcrumb-divider`,children:`/`}),(0,p.jsx)(`span`,{children:i.name})]}),(0,p.jsxs)(`a`,{href:i.primaryHref,className:`pdp__appbar-action`,children:[i.primaryLabel,(0,p.jsx)(k,{})]})]})}),(0,p.jsx)(`nav`,{className:`pdp__selector`,"aria-label":`Продукты SmartShell`,children:(0,p.jsx)(`div`,{className:`pdp__shell`,children:(0,p.jsx)(`div`,{className:`pdp__selector-track`,children:S.map((e,t)=>{let n=te[e];return(0,p.jsxs)(`a`,{href:be(e),onClick:s(e),className:`pdp__product-tab`,"aria-current":e===i.slug?`page`:void 0,children:[(0,p.jsxs)(`span`,{className:`pdp__product-tab-index`,children:[String(t+1).padStart(2,`0`),` /`,` `,String(S.length).padStart(2,`0`)]}),(0,p.jsx)(`span`,{className:`pdp__product-tab-name`,children:n.name})]},e)})})})})]}),(0,p.jsxs)(`article`,{className:`pdp__workspace pdp__shell`,children:[(0,p.jsxs)(`section`,{className:`pdp__overview`,"aria-labelledby":`product-title`,children:[(0,p.jsxs)(`div`,{className:`pdp__overview-copy`,children:[(0,p.jsxs)(`div`,{className:`pdp__overview-meta`,children:[(0,p.jsxs)(`span`,{className:`pdp__eyebrow`,children:[`PRODUCT /`,` `,String(a+1).padStart(2,`0`)]}),(0,p.jsx)(`span`,{children:i.category}),(0,p.jsx)(`span`,{children:`—`}),(0,p.jsx)(`span`,{children:i.audience})]}),(0,p.jsx)(`h1`,{id:`product-title`,children:i.name}),(0,p.jsx)(`p`,{className:`pdp__product-statement`,children:i.title}),(0,p.jsx)(`p`,{className:`pdp__summary`,children:i.summary}),(0,p.jsxs)(`div`,{className:`pdp__actions`,children:[(0,p.jsxs)(`a`,{href:i.primaryHref,className:`pdp__button pdp__button--primary`,children:[i.primaryLabel,(0,p.jsx)(k,{})]}),(0,p.jsxs)(`a`,{href:i.officialHref,target:`_blank`,rel:`noreferrer`,className:`pdp__button`,children:[i.officialLabel,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]}),(0,p.jsx)(`div`,{className:`pdp__overview-visual`,children:(0,p.jsx)(Ue,{product:i})})]}),(0,p.jsxs)(`div`,{className:`pdp__metric-row`,"aria-label":`Контекст продукта`,children:[(0,p.jsxs)(`div`,{className:`pdp__metric`,children:[`Product`,(0,p.jsx)(`strong`,{children:i.name})]}),(0,p.jsxs)(`div`,{className:`pdp__metric`,children:[`Category`,(0,p.jsx)(`strong`,{children:i.category})]}),(0,p.jsxs)(`div`,{className:`pdp__metric`,children:[`User`,(0,p.jsx)(`strong`,{children:i.audience})]})]}),(0,p.jsxs)(`section`,{className:`pdp__section`,"aria-labelledby":`capabilities-title`,children:[(0,p.jsxs)(`header`,{className:`pdp__section-head`,children:[(0,p.jsxs)(`div`,{className:`pdp__section-heading`,children:[(0,p.jsx)(`span`,{className:`pdp__section-kicker`,children:`01 / Возможности`}),(0,p.jsx)(`h2`,{id:`capabilities-title`,children:`Что делает продукт.`})]}),(0,p.jsx)(`p`,{className:`pdp__section-description`,children:i.description})]}),(0,p.jsx)(`div`,{className:`pdp__capability-list`,children:i.capabilities.map((e,t)=>(0,p.jsxs)(`article`,{className:`pdp__capability`,children:[(0,p.jsx)(`span`,{className:`pdp__capability-index`,children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsx)(`p`,{children:e.description})]},e.title))})]}),i.media.length>1&&(0,p.jsxs)(`section`,{className:`pdp__section pdp__interface`,"aria-labelledby":`interface-title`,children:[(0,p.jsxs)(`header`,{className:`pdp__section-head`,children:[(0,p.jsxs)(`div`,{className:`pdp__section-heading`,children:[(0,p.jsx)(`span`,{className:`pdp__section-kicker`,children:`02 / Интерфейс`}),(0,p.jsxs)(`h2`,{id:`interface-title`,children:[i.name,` в работе.`]})]}),(0,p.jsx)(`div`,{className:`pdp__interface-tools`,children:(0,p.jsxs)(`a`,{href:i.officialHref,target:`_blank`,rel:`noreferrer`,className:`pdp__button`,children:[i.officialLabel,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})})]}),(0,p.jsx)(`div`,{className:`pdp__interface-body`,children:(0,p.jsx)(Ue,{product:i,mode:`gallery`})})]}),(0,p.jsxs)(`section`,{className:`pdp__section pdp__operations`,children:[(0,p.jsxs)(`article`,{className:`pdp__operation-panel`,"aria-labelledby":`ecosystem-title`,children:[(0,p.jsxs)(`header`,{className:`pdp__operation-head`,children:[(0,p.jsxs)(`span`,{className:`pdp__section-kicker`,children:[i.media.length>1?`03`:`02`,` / Система`]}),(0,p.jsx)(`h2`,{id:`ecosystem-title`,children:`Связи внутри SmartShell.`})]}),(0,p.jsx)(`p`,{className:`pdp__ecosystem-copy`,children:i.ecosystemRole}),(0,p.jsx)(`div`,{children:i.connections.map((e,t)=>(0,p.jsxs)(`div`,{className:`pdp__connection`,children:[(0,p.jsx)(`span`,{className:`pdp__connection-index`,children:String(t+1).padStart(2,`0`)}),(0,p.jsxs)(`div`,{className:`pdp__connection-copy`,children:[(0,p.jsx)(`h3`,{children:e.label}),(0,p.jsx)(`p`,{children:e.description})]})]},e.label))})]}),(0,p.jsxs)(`aside`,{className:`pdp__operation-panel`,"aria-labelledby":`related-title`,children:[(0,p.jsxs)(`header`,{className:`pdp__operation-head`,children:[(0,p.jsx)(`span`,{className:`pdp__section-kicker`,children:`Product map`}),(0,p.jsx)(`h2`,{id:`related-title`,children:`Продолжить по системе.`})]}),(0,p.jsx)(`nav`,{"aria-label":`Связанные продукты SmartShell`,children:i.related.map((e,t)=>{let n=te[e];return(0,p.jsxs)(`a`,{href:be(e),onClick:s(e),className:`pdp__related-link`,children:[(0,p.jsx)(`span`,{className:`pdp__related-index`,children:String(t+1).padStart(2,`0`)}),(0,p.jsxs)(`span`,{className:`pdp__related-copy`,children:[(0,p.jsx)(`strong`,{children:n.name}),(0,p.jsx)(`span`,{children:n.category})]}),(0,p.jsx)(`span`,{className:`pdp__related-arrow`,children:(0,p.jsx)(k,{})})]},e)})})]})]}),(0,p.jsxs)(`section`,{className:`pdp__cta`,"aria-labelledby":`cta-title`,children:[(0,p.jsxs)(`div`,{className:`pdp__cta-copy`,children:[(0,p.jsx)(`span`,{className:`pdp__section-kicker`,children:`SmartShell / Start`}),(0,p.jsx)(`h2`,{id:`cta-title`,children:`Начните работу со SmartShell.`}),(0,p.jsx)(`p`,{children:`Создайте клуб, настройте выбранный продукт и подключайте остальные компоненты SmartShell по задачам команды.`})]}),(0,p.jsxs)(`div`,{className:`pdp__cta-actions`,children:[(0,p.jsxs)(`a`,{href:i.primaryHref,className:`pdp__button pdp__button--primary`,children:[i.primaryLabel,(0,p.jsx)(k,{})]}),(0,p.jsxs)(`a`,{href:t,onClick:o,className:`pdp__button`,children:[(0,p.jsx)(k,{direction:`left`}),`Карта продуктов`]})]})]})]})]})}var qe={"owner-cabinet":`01`,"admin-panel":`02`,shell:`03`,smartgamer:`04`,smartkiosk:`05`,"smartlock-tv":`06`,"console-controller":`07`,smartpremium:`08`,"api-integrations":`09`};function Je(){let e=(0,f.useId)(),t=(0,f.useRef)([]),[n,r]=(0,f.useState)(`admin-panel`),i=(0,f.useMemo)(()=>w.find(e=>e.slug===n)??w[0],[n]),a=`${e}-panel`,o=(e,n)=>{let i;switch(e.key){case`ArrowRight`:case`ArrowDown`:i=(n+1)%w.length;break;case`ArrowLeft`:case`ArrowUp`:i=(n-1+w.length)%w.length;break;case`Home`:i=0;break;case`End`:i=w.length-1;break;default:return}e.preventDefault();let a=w[i];r(a.slug),t.current[i]?.focus()};return(0,p.jsxs)(`section`,{id:`products`,"data-module":`products`,className:`ss-page-module ss-products-module`,"aria-labelledby":`products-title`,children:[(0,p.jsxs)(`div`,{className:`ss-section-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`ss-kicker`,children:`PRODUCT REGISTRY / 09`}),(0,p.jsx)(`h2`,{id:`products-title`,children:`Продукты, сервисы и интеграции SmartShell.`})]}),(0,p.jsx)(`p`,{children:`Переключайте компоненты — интерфейс выбранного продукта открывается сразу. На отдельной странице собраны функции и связи внутри системы.`})]}),(0,p.jsxs)(`div`,{className:`ss-product-registry`,children:[(0,p.jsxs)(`div`,{className:`ss-registry-bar`,children:[(0,p.jsx)(`span`,{children:`SMARTSHELL / PRODUCTS`}),(0,p.jsx)(`span`,{children:`SELECT / MODULE`})]}),(0,p.jsxs)(`div`,{className:`ss-registry-body`,children:[(0,p.jsx)(`div`,{className:`ss-product-list`,role:`tablist`,"aria-label":`Продукты SmartShell`,children:w.map((n,s)=>{let c=i.slug===n.slug;return(0,p.jsxs)(`button`,{ref:e=>{t.current[s]=e},id:`${e}-tab-${n.slug}`,type:`button`,role:`tab`,tabIndex:c?0:-1,"aria-selected":c,"aria-controls":a,className:`ss-product-row ${c?`is-selected`:``}`,onClick:()=>r(n.slug),onKeyDown:e=>o(e,s),children:[(0,p.jsx)(`span`,{className:`ss-product-row-index`,children:qe[n.slug]}),(0,p.jsxs)(`span`,{className:`ss-product-row-copy`,children:[(0,p.jsx)(`strong`,{children:n.name}),(0,p.jsx)(`small`,{children:n.category})]}),(0,p.jsx)(`span`,{className:`ss-product-row-state`,"aria-hidden":`true`,children:c?`OPEN`:`→`})]},n.slug)})}),(0,p.jsxs)(`div`,{id:a,className:`ss-product-detail`,role:`tabpanel`,"aria-labelledby":`${e}-tab-${i.slug}`,tabIndex:0,children:[(0,p.jsxs)(`div`,{className:`ss-product-detail-status`,children:[(0,p.jsx)(`span`,{className:`ss-status-dot ss-status-dot-success`}),(0,p.jsx)(`span`,{children:i.media.length>0?`PRODUCT INTERFACE`:`PRODUCT SYSTEM VIEW`}),(0,p.jsxs)(`span`,{children:[qe[i.slug],` / 09`]})]}),(0,p.jsx)(`div`,{className:`ss-product-visual${i.media.length>0?` has-media`:``}`,children:(0,p.jsx)(Ue,{product:i,mode:`hero`})},i.slug),(0,p.jsxs)(`div`,{className:`ss-product-detail-footer`,children:[(0,p.jsxs)(`div`,{className:`ss-product-detail-copy`,children:[(0,p.jsx)(`span`,{className:`ss-kicker`,children:i.category}),(0,p.jsx)(`h3`,{children:i.name}),(0,p.jsx)(`p`,{className:`ss-product-title`,children:i.title})]}),(0,p.jsxs)(`div`,{className:`ss-product-detail-controls`,children:[(0,p.jsx)(`div`,{className:`ss-product-signal-list`,"aria-label":`Ключевые функции`,children:i.signals.slice(0,4).map(e=>(0,p.jsx)(`span`,{children:e},e))}),(0,p.jsxs)(`div`,{className:`ss-product-detail-actions`,children:[(0,p.jsxs)(`a`,{href:be(i.slug),className:`ss-ui-button ss-ui-button-primary`,children:[`Открыть продукт`,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]}),(0,p.jsxs)(`a`,{href:i.officialHref,target:`_blank`,rel:`noreferrer`,className:`ss-ui-button`,children:[`Подробнее`,(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]})]})]})]})]})]})}var Ye=`https://lk.smartshell.gg/register`,Xe=1100,Ze=`a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])`,Qe=`
  .tim {
    --tim-bg: #07080b;
    --tim-panel: #0c0e13;
    --tim-panel-2: #11141a;
    --tim-line: rgba(235, 238, 246, 0.16);
    --tim-line-strong: rgba(235, 238, 246, 0.3);
    --tim-text: #f1f3f7;
    --tim-muted: #858a96;
    --tim-purple: #8b7cf6;
    position: fixed;
    z-index: 120;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 20px;
    color: var(--tim-text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color-scheme: dark;
  }
  .tim *,
  .tim *::before,
  .tim *::after {
    box-sizing: border-box;
    border-radius: 0;
  }
  .tim__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(3, 4, 6, 0.86);
  }
  .tim__dialog {
    position: relative;
    width: min(100%, 610px);
    max-height: calc(100svh - 40px);
    overflow-y: auto;
    border: 1px solid var(--tim-line-strong);
    outline: 0;
    background: var(--tim-bg);
    animation: tim-dialog-enter 140ms linear both;
  }
  .tim__topbar {
    display: flex;
    min-height: 40px;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding-left: 14px;
    border-bottom: 1px solid var(--tim-line);
    background: var(--tim-panel);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.13em;
    line-height: 1.3;
    text-transform: uppercase;
  }
  .tim__code {
    color: var(--tim-purple);
  }
  .tim__close {
    align-self: stretch;
    min-width: 76px;
    min-height: 40px;
    padding: 0 13px;
    border: 0;
    border-left: 1px solid var(--tim-line);
    background: transparent;
    color: var(--tim-muted);
    cursor: pointer;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    transition:
      background-color 100ms linear,
      color 100ms linear;
  }
  .tim__close:hover,
  .tim__close:focus-visible {
    background: var(--tim-text);
    color: var(--tim-bg);
    outline: 0;
  }
  .tim__close:focus-visible {
    outline: 2px solid var(--tim-purple);
    outline-offset: -2px;
  }
  .tim__body {
    padding: clamp(24px, 6vw, 48px);
  }
  .tim__eyebrow {
    margin: 0;
    color: var(--tim-purple);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    line-height: 1.4;
    text-transform: uppercase;
  }
  .tim__title {
    max-width: 16ch;
    margin: 12px 0 0;
    color: var(--tim-text);
    font-size: clamp(28px, 6vw, 50px);
    font-weight: 760;
    letter-spacing: -0.055em;
    line-height: 0.98;
  }
  .tim__description {
    max-width: 54ch;
    margin: 18px 0 0;
    color: #aeb3bf;
    font-size: 13px;
    line-height: 1.6;
  }
  .tim__progress {
    position: relative;
    height: 12px;
    margin-top: 28px;
    border: 1px solid var(--tim-line-strong);
    background: var(--tim-panel);
    overflow: hidden;
  }
  .tim__progress-fill {
    position: absolute;
    inset: 2px;
    right: auto;
    width: calc(100% - 4px);
    background: var(--tim-purple);
    transform: scaleX(0);
    transform-origin: left center;
  }
  .tim__progress-fill[data-phase="initializing"] {
    animation: tim-progress ${Xe}ms linear forwards;
  }
  .tim__progress-fill[data-phase="ready"] {
    transform: scaleX(1);
  }
  .tim__progress-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 8px;
    color: var(--tim-muted);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .tim__progress-state {
    color: var(--tim-purple);
  }
  .tim__checks {
    margin: 28px 0 0;
    padding: 0;
    border-top: 1px solid var(--tim-line);
    list-style: none;
  }
  .tim__check {
    display: grid;
    min-width: 0;
    grid-template-columns: 38px minmax(0, 1fr) auto;
    gap: 12px;
    align-items: start;
    padding: 12px 0;
    border-bottom: 1px solid var(--tim-line);
  }
  .tim__check-index,
  .tim__check-state {
    color: var(--tim-purple);
    font-size: 9px;
    font-weight: 720;
    letter-spacing: 0.1em;
    line-height: 1.45;
    text-transform: uppercase;
  }
  .tim__check-title {
    display: block;
    color: var(--tim-text);
    font-size: 12px;
    font-weight: 690;
    line-height: 1.4;
  }
  .tim__check-copy {
    display: block;
    margin-top: 3px;
    color: var(--tim-muted);
    font-size: 11px;
    line-height: 1.45;
  }
  .tim__footer {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    border-top: 1px solid var(--tim-line);
  }
  .tim__action {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border: 0;
    background: transparent;
    color: var(--tim-text);
    cursor: pointer;
    font: inherit;
    font-size: 10px;
    font-weight: 740;
    letter-spacing: 0.1em;
    line-height: 1.35;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition:
      background-color 100ms linear,
      color 100ms linear;
  }
  .tim__action + .tim__action {
    border-left: 1px solid var(--tim-line);
  }
  .tim__action--primary {
    background: var(--tim-purple);
    color: var(--tim-bg);
  }
  .tim__action:hover,
  .tim__action:focus-visible {
    background: var(--tim-text);
    color: var(--tim-bg);
    outline: 0;
  }
  .tim__action:focus-visible {
    outline: 2px solid var(--tim-purple);
    outline-offset: -2px;
  }
  .tim__action:disabled {
    background: var(--tim-panel);
    color: var(--tim-muted);
    cursor: wait;
  }
  .tim__disclosure {
    margin: 14px 0 0;
    color: var(--tim-muted);
    font-size: 10px;
    line-height: 1.5;
  }
  @keyframes tim-dialog-enter {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes tim-progress {
    to { transform: scaleX(1); }
  }
  @media (max-width: 520px) {
    .tim {
      align-items: end;
      padding: 10px;
    }
    .tim__dialog {
      max-height: calc(100svh - 20px);
    }
    .tim__body {
      padding: 24px 18px;
    }
    .tim__check {
      grid-template-columns: 30px minmax(0, 1fr);
    }
    .tim__check-state {
      display: none;
    }
    .tim__footer {
      grid-template-columns: minmax(0, 1fr);
    }
    .tim__action + .tim__action {
      border-top: 1px solid var(--tim-line);
      border-left: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .tim__dialog,
    .tim__progress-fill {
      animation: none;
    }
    .tim__dialog {
      opacity: 1;
      transform: none;
    }
  }
`;function $e({open:e,onClose:t,className:n=``}){let r=(0,f.useId)(),i=(0,f.useId)(),a=(0,f.useRef)(null),o=(0,f.useRef)(null),[s,c]=(0,f.useState)(`initializing`);if((0,f.useEffect)(()=>{if(!e)return;c(`initializing`);let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=window.setTimeout(()=>c(`ready`),t?0:Xe);return()=>window.clearTimeout(n)},[e]),(0,f.useEffect)(()=>{if(!e)return;o.current=document.activeElement;let n=document.body.style.overflow;document.body.style.overflow=`hidden`,a.current?.focus();let r=e=>{if(e.key===`Escape`){e.preventDefault(),t();return}if(e.key!==`Tab`||!a.current)return;let n=Array.from(a.current.querySelectorAll(Ze)).filter(e=>e.offsetParent!==null);if(n.length===0){e.preventDefault(),a.current.focus();return}let r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())};return document.addEventListener(`keydown`,r),()=>{document.removeEventListener(`keydown`,r),document.body.style.overflow=n,o.current?.focus()}},[e,t]),!e)return null;let l=s===`ready`;return(0,p.jsxs)(`div`,{className:`tim ${n}`.trim(),children:[(0,p.jsx)(`style`,{children:Qe}),(0,p.jsx)(`div`,{className:`tim__backdrop`,onMouseDown:t,"aria-hidden":`true`}),(0,p.jsxs)(`div`,{ref:a,className:`tim__dialog`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":r,"aria-describedby":i,tabIndex:-1,children:[(0,p.jsxs)(`header`,{className:`tim__topbar`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`tim__code`,children:`[TRIAL_INIT]`}),` / `,`SMARTSHELL`]}),(0,p.jsx)(`button`,{type:`button`,className:`tim__close`,onClick:t,"aria-label":`Закрыть инициализацию пробного периода`,children:`ESC / CLOSE`})]}),(0,p.jsxs)(`div`,{className:`tim__body`,children:[(0,p.jsx)(`p`,{className:`tim__eyebrow`,children:l?`STATUS / READY`:`STATUS / LOCAL PREPARATION`}),(0,p.jsx)(`h2`,{id:r,className:`tim__title`,children:l?`Переход готов.`:`Инициализация пробного периода…`}),(0,p.jsx)(`p`,{id:i,className:`tim__description`,children:l?`Продолжите на официальной странице SmartShell. Аккаунт и пробный период создаются только после завершения регистрации в личном кабинете.`:`Подготавливаем переход в личный кабинет. На этом экране не создаётся аккаунт, не активируется подписка и не отправляются данные.`}),(0,p.jsx)(`div`,{className:`tim__progress`,role:`progressbar`,"aria-label":`Подготовка перехода в регистрацию`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":l?100:void 0,"aria-valuetext":l?`Переход готов`:`Подготовка перехода`,children:(0,p.jsx)(`span`,{className:`tim__progress-fill`,"data-phase":s})}),(0,p.jsxs)(`div`,{className:`tim__progress-meta`,"aria-live":`polite`,children:[(0,p.jsx)(`span`,{children:`LOCAL UI SEQUENCE`}),(0,p.jsx)(`span`,{className:`tim__progress-state`,children:l?`READY / 100`:`PREPARING`})]}),(0,p.jsxs)(`ul`,{className:`tim__checks`,children:[(0,p.jsxs)(`li`,{className:`tim__check`,children:[(0,p.jsx)(`span`,{className:`tim__check-index`,children:`01`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`tim__check-title`,children:`Назначение`}),(0,p.jsx)(`span`,{className:`tim__check-copy`,children:`Официальная регистрация SmartShell`})]}),(0,p.jsx)(`span`,{className:`tim__check-state`,children:`VERIFIED URL`})]}),(0,p.jsxs)(`li`,{className:`tim__check`,children:[(0,p.jsx)(`span`,{className:`tim__check-index`,children:`02`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`tim__check-title`,children:`Данные`}),(0,p.jsx)(`span`,{className:`tim__check-copy`,children:`Этот компонент ничего не отправляет`})]}),(0,p.jsx)(`span`,{className:`tim__check-state`,children:`LOCAL ONLY`})]}),(0,p.jsxs)(`li`,{className:`tim__check`,children:[(0,p.jsx)(`span`,{className:`tim__check-index`,children:`03`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`tim__check-title`,children:`Активация`}),(0,p.jsx)(`span`,{className:`tim__check-copy`,children:`Условия подтверждаются в личном кабинете`})]}),(0,p.jsx)(`span`,{className:`tim__check-state`,children:`EXTERNAL STEP`})]})]}),(0,p.jsx)(`p`,{className:`tim__disclosure`,children:`Визуальный прогресс показывает только подготовку интерфейса к переходу. Это не ответ сервера и не подтверждение созданного аккаунта.`})]}),(0,p.jsxs)(`footer`,{className:`tim__footer`,children:[(0,p.jsx)(`button`,{type:`button`,className:`tim__action`,onClick:t,children:`Отмена`}),l?(0,p.jsx)(`a`,{className:`tim__action tim__action--primary`,href:Ye,target:`_blank`,rel:`noreferrer`,onClick:t,children:`Продолжить на lk.smartshell.gg →`}):(0,p.jsx)(`button`,{type:`button`,className:`tim__action`,disabled:!0,"aria-disabled":`true`,children:`Подготовка перехода…`})]})]})]})}function et({module:e,theme:t}){return(0,p.jsxs)(`div`,{className:`ss-statusbar`,role:`status`,"aria-live":`polite`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`i`,{className:`ss-status-dot ss-status-dot-success`}),`PAGE / READY`]}),(0,p.jsxs)(`span`,{children:[`MODULE / `,e.toUpperCase()]}),(0,p.jsxs)(`span`,{children:[`THEME / `,t.toUpperCase()]}),(0,p.jsx)(`a`,{href:`https://demo.smartshell.gg/`,target:`_blank`,rel:`noreferrer`,children:`DEMO / AVAILABLE ↗`})]})}function tt(){return(0,p.jsx)(`footer`,{className:`ss-system-footer`,children:(0,p.jsxs)(`div`,{className:`ss-log-window`,children:[(0,p.jsxs)(`div`,{className:`ss-registry-bar`,children:[(0,p.jsx)(`span`,{children:`SMARTSHELL / SYSTEM LOG`}),(0,p.jsx)(`span`,{children:`END OF PAGE`})]}),(0,p.jsxs)(`div`,{className:`ss-log-lines`,"aria-label":`Системная информация сайта`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`>`}),` interface modules loaded `,(0,p.jsx)(`strong`,{children:`ok`})]}),(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`>`}),` product registry available `,(0,p.jsx)(`strong`,{children:`09 modules`})]}),(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`>`}),` demo environment`,` `,(0,p.jsx)(`a`,{href:`https://demo.smartshell.gg/`,target:`_blank`,rel:`noreferrer`,children:`open ↗`})]}),(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`>`}),` registration endpoint`,` `,(0,p.jsx)(`a`,{href:`https://lk.smartshell.gg/register`,target:`_blank`,rel:`noreferrer`,children:`available ↗`})]}),(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`>`}),` © 2026 SmartShell`]})]})]})})}function nt(){return document.documentElement.dataset.theme===`light`?`light`:`dark`}function rt(){let[e,t]=(0,f.useState)(nt),[n,r]=(0,f.useState)(`overview`),[i,a]=(0,f.useState)(!1),o=(0,f.useCallback)(()=>a(!0),[]),s=(0,f.useCallback)(()=>a(!1),[]);return(0,f.useEffect)(()=>{let t=document.documentElement;t.dataset.theme=e,t.classList.toggle(`dark`,e===`dark`),t.classList.toggle(`light`,e===`light`),localStorage.setItem(`smartshell-theme`,e),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,e===`dark`?`#0D1217`:`#F3F3F3`)},[e]),(0,f.useEffect)(()=>{let e=de.map(e=>document.querySelector(`[data-module="${e.id}"]`)).filter(e=>!!e),t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>Math.abs(e.boundingClientRect.top)-Math.abs(t.boundingClientRect.top))[0]?.target.getAttribute(`data-module`);t&&r(t)},{rootMargin:`-28% 0px -62% 0px`,threshold:[0,.1,.5]});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[]),(0,p.jsxs)(`div`,{className:`ss-app`,children:[(0,p.jsx)(me,{activeModule:n,theme:e,onThemeToggle:()=>t(e=>e===`dark`?`light`:`dark`),onTrial:o}),(0,p.jsxs)(`main`,{className:`ss-app-main`,children:[(0,p.jsx)(ve,{onTrial:o}),(0,p.jsxs)(`section`,{id:`ecosystem`,"data-module":`ecosystem`,className:`ss-page-module ss-ecosystem-module`,"aria-labelledby":`ecosystem-title`,children:[(0,p.jsxs)(`div`,{className:`ss-section-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`ss-kicker`,children:`ECOSYSTEM / OPERATIONS`}),(0,p.jsx)(`h2`,{id:`ecosystem-title`,children:`Система раскрывается по задачам смены.`})]}),(0,p.jsx)(`p`,{children:`Экран сам проходит карту зала, кассу, путь гостя и управление игровыми местами. Клик по модулю сразу включает ручной режим.`})]}),(0,p.jsx)(Me,{})]}),(0,p.jsx)(Je,{}),(0,p.jsx)(Be,{}),(0,p.jsxs)(`section`,{id:`pricing`,"data-module":`pricing`,className:`ss-page-module ss-pricing-module`,"aria-labelledby":`pricing-title`,children:[(0,p.jsxs)(`div`,{className:`ss-section-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`ss-kicker`,children:`CHECKOUT / SUBSCRIPTION`}),(0,p.jsx)(`h2`,{id:`pricing-title`,children:`Тариф и количество мест — в одном расчёте.`})]}),(0,p.jsx)(`p`,{children:`Выберите тариф и точное количество игровых мест. Шаг калькулятора — одно место, итог пересчитывается сразу.`})]}),(0,p.jsx)(Re,{onTrial:o})]}),(0,p.jsx)(tt,{})]}),(0,p.jsx)(et,{module:n,theme:e}),(0,p.jsx)($e,{open:i,onClose:s})]})}function it(){let[e,t]=(0,f.useState)(()=>Se(window.location));return(0,f.useEffect)(()=>{let e=()=>t(Se(window.location));return window.addEventListener(`hashchange`,e),window.addEventListener(`popstate`,e),()=>{window.removeEventListener(`hashchange`,e),window.removeEventListener(`popstate`,e)}},[]),(0,f.useEffect)(()=>{if(e){window.requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:`auto`})});return}let t=window.location.hash;!t||t===`#`||t.startsWith(`#tour`)||t.startsWith(`#/`)||window.requestAnimationFrame(()=>{let e=document.getElementById(t.slice(1));e&&e.scrollIntoView({behavior:`auto`,block:`start`})})},[e]),(0,p.jsx)(E,{children:e?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Ke,{slug:e,backHref:`#products`,onBack:()=>{window.location.hash=`products`},onProductNavigate:e=>{window.location.hash=be(e).slice(1)}}),(0,p.jsx)(et,{module:e,theme:nt()})]}):(0,p.jsx)(rt,{})})}(0,d.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(f.StrictMode,{children:(0,p.jsx)(it,{})}));
(window.webpackJsonpTeamCityAPI=window.webpackJsonpTeamCityAPI||[]).push([[404],{s2zK:function(e,t,n){"use strict";n.r(t),n.d(t,"track",(function(){return F}));n("9UJh");var r=n("OvAC"),o=n.n(r),c=n("Zfxy"),i=n("ljHE"),a=n("6M9s"),s=n("9VEv"),u=n("vZ/Q"),l=n("hSkc"),p=n("7rhj");const d={send:!1,mode:"internal",interval:3e4,actionQueue:[]};function f(e){e&&0!==e.length&&(d.actionQueue=d.actionQueue.concat(e),d.actionQueue.length>1e3&&d.actionQueue.splice(0,d.actionQueue.length-1e3))}n("y89P"),n("U00V");var b=n("RiSW"),O=n.n(b),y=n("awmn"),g=n("iGfu"),j=n.n(g),w=n("lKNH"),v=n("fs2M"),h=n("Nxzx"),P=n("Zxnk"),m=n("4b5y");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const E=function(){let e=P.a.getItem("trackingSalt");return null==e&&(e=Object(m.a)(),P.a.setItem("trackingSalt",e)),e}(),C=e=>"string"==typeof e&&j.a.sha1("".concat(E,":").concat(e))||"",{BASE:k}=w.d,T=O()(w.d,["BASE"]),B=Object(h.b)(T).map(([e,t])=>({path:t,key:e})),Q=e=>Object(y.pick)(B,(e=>(e.origin+e.pathname).replace("".concat(base_uri,"/"),""))(e)),D=e=>e?x({type:e.route.key},(e=>{const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=C(e[n]));return t})(e.params)):{type:null};function A(e){return Object.keys(e).length}const N={group:"teamcity.actions",groupVersion:"1",recorderVersion:"0.0.1"},R=(e,t,n)=>{const r=x(x({count:1,action:e},N),{},{payload:null!=t?t:{}});return!0===(null==n?void 0:n.withContext)&&(r.payload.context=function(){const e=Q(w.z.location);return D(e)}()),!0===(null==n?void 0:n.withReferrer)&&(r.payload.referrer=function(){const e=document.referrer;return""===e?"direct":e.indexOf("/login.html")?"login":e.indexOf(base_uri)>-1?"internal":"external"}()),r};function I({name:e,delta:t,id:n}){const r=Math.round("CLS"===e?1e3*t:t);f([R("PERFORMANCE_MEASURE",{name:e,value:r,id:n},{withContext:!0})])}var U=function(){p.d(I,!0),p.a(I,!0),p.b(I),p.c(I),p.e(I)};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const J=e=>{const t=Q(e);if(!t)return;const n=R("NAVIGATION",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},D(t)),{skipContext:!0,skipReferrer:!0});var r;(r=[n])&&0!==r.length&&f(r)};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const z=(e,t)=>window.setTimeout(()=>{L(e,t)},d.interval),K=e=>{const t=d.actionQueue;return{internalMode:!("real"===d.mode),user:Object(l.getClientId)(e),buildNumber:"61100",actions:t}},L=(e,t)=>{if(d.send&&d.actionQueue.length>0){const r=d.actionQueue,o=K(t);d.actionQueue=[];try{var n;H(null!==(n=e.serverUrl)&&void 0!==n?n:base_uri,e.endpoint,o),z(e,t)}catch(n){BS&&BS.Log.error(n),d.actionQueue=d.actionQueue.concat(r),z(e,t)}}else z(e,t)};function F(e,t){f(function(e){switch(e.type){case c.Tc:const n=R(e.type,null,{withReferrer:!0,withContext:!0});return[_(_({},n),{},{action:"view",group:"teamcity.pages",groupVersion:"1",recorderVersion:"2"}),n];case c.Lb:return[R(e.type,null,{withContext:!0})];case c.ad:case c.B:return[R(e.type,null)];case c.yb:const r={projects:"".concat(e.data&&e.data.entities&&e.data.entities.overviewProjects?A(e.data.entities.overviewProjects):-1),buildTypes:"".concat(e.data&&e.data.entities&&e.data.entities.overviewBuildTypes?A(e.data.entities.overviewBuildTypes):-1)};return[R(e.type,r)];case c.Jb:return[R(e.type,{custom:(!0===e.isCustom).toString(),error:(void 0!==e.error).toString(),defaultBranch:e.defaultBranch.toString()},{withContext:!0})];case c.s:return[R(e.type,{state:e.buildState},{withContext:!0})];case c.f:return[R(e.type,null,{withContext:!0})];case c.j:case s.a:case c.k:return[R(e.type,{next:(t=e.next,t?Object(l.projectTabPredefined)(t)||Object(l.buildTypeTabPredefined)(t)||Object(l.buildTabPredefined)(t)?Object(v.K)(t):"custom:".concat(C(Object(v.K)(t))):"default")},{withContext:!0})];case a.g:case a.j:case a.h:case i.e:case i.g:case i.f:case i.h:return[R(e.type)];default:return null}var t}(t)),function(e){if(!d.send){var t;const n=Object(l.getExtensionEndpoint)(e,"ui-statistics"),r=null==n?void 0:n.endpoint,o=null==n||null===(t=n.options)||void 0===t?void 0:t.disabled;n&&null!=r&&!o&&(d.send=!0,d.mode=n.options&&"real"===n.options.mode?"real":"internal",d.interval=n.options&&n.options.interval?n.options.interval:3e4,z(n,e))}}(e)}function H(e,t,n){if(null==t)return;const r=BS&&BS.CSRF.getCachedToken()||"",o=new FormData;o.append("tc-csrf-token",r),o.append("data",JSON.stringify(n)),"function"==typeof window.navigator.sendBeacon?window.navigator.sendBeacon("".concat(e).concat(t),o):function(e,t,n){Object(u.b)(e,"".concat(t),{method:"POST",body:JSON.stringify(n)})}(e,t,n)}window.addEventListener("beforeunload",()=>{if(d.send&&d.actionQueue.length>0){var e;f([R("BEACON_SENT",{},{withContext:!0})]);const t=window.ReactUI.store.getState(),n=K(t),r=Object(l.getExtensionEndpoint)(t,"ui-statistics");H(null!==(e=null==r?void 0:r.serverUrl)&&void 0!==e?e:base_uri,null==r?void 0:r.endpoint,n)}}),J(w.z.location),w.z.listen(e=>{e&&"PUSH"===e.action&&J(e.location)}),U()}}]);
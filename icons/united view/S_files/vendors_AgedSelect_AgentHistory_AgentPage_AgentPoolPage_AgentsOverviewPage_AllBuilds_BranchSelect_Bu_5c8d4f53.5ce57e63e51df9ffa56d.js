(window.webpackJsonpTeamCityAPI=window.webpackJsonpTeamCityAPI||[]).push([[2],{"2dyW":function(e,t,i){"use strict";i.d(t,"a",(function(){return _})),i.d(t,"b",(function(){return O}));i("aZFp"),i("U00V");var n=i("oYCi"),s=i("RiSW"),r=i.n(s),o=i("OvAC"),a=i.n(o),l=i("mXGw"),c=i("W0B4"),h=i.n(c),d=i("8Jek"),u=i.n(d),p=i("jP3q"),m=i("OcuC"),f="avatar__avatar--VJ",g="avatar__subavatar--2A",b="avatar__empty--1S";function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const _={Size18:18,Size20:20,Size24:24,Size32:32,Size40:40,Size48:48,Size56:56};class O extends l.PureComponent{constructor(...e){super(...e),a()(this,"state",{errorUrl:""}),a()(this,"handleError",()=>{this.setState({errorUrl:this.props.url})}),a()(this,"handleSuccess",()=>{this.setState({errorUrl:""})})}render(){const e=this.props,{size:t,url:i,dpr:s,style:o,round:a,subavatar:l,subavatarSize:c}=e,h=r()(e,["size","url","dpr","style","round","subavatar","subavatarSize"]),d="".concat(t,"px"),m="".concat(c,"px"),v=t<=_.Size18?"var(--ring-border-radius-small)":"var(--ring-border-radius)",O=y({borderRadius:a?"50%":v,height:d,width:d},o),w=y({borderRadius:"2px",height:m,width:m},o);if(!i||this.state.errorUrl===i)return Object(n.jsx)("span",y(y({},h),{},{className:u()(f,b,this.props.className),style:O}));let x=i;if(!Object(p.d)(i)){const[e,n]=i.split("?"),r=y(y({},Object(p.f)(n)),{},{dpr:s,size:t});x=Object(p.a)(e,r)}let j=null;if(l&&!Object(p.d)(l)){const[e,t]=l.split("?"),i=y(y({},Object(p.f)(t)),{},{dpr:s,subavatarSizeString:m});return j=Object(p.a)(e,i),Object(n.jsxs)("div",{children:[Object(n.jsx)("img",y(y({},h),{},{onError:this.handleError,onLoad:this.handleSuccess,className:u()(f,this.props.className),style:O,src:x,alt:"User avatar"})),Object(n.jsx)("img",y(y({},h),{},{onError:this.handleError,onLoad:this.handleSuccess,className:u()(g),style:w,src:j,alt:"Subavatar"}))]})}return Object(n.jsx)("img",y(y({},h),{},{onError:this.handleError,onLoad:this.handleSuccess,className:u()(f,this.props.className),style:O,src:x,alt:"User avatar"}))}}a()(O,"propTypes",{dpr:h.a.number,className:h.a.string,size:h.a.number,style:h.a.object,url:h.a.string,round:h.a.bool,subavatar:h.a.string,subavatarSize:h.a.number}),a()(O,"defaultProps",{dpr:Object(m.d)(),size:_.Size20,subavatarSize:_.Size20/2,style:{}})},AiOT:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));const n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function r(e){if(e.key){const t=n[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){const t=function(e){let t;const i=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===i&&(t=13)):t=i,t>=32||13===t?t:0}(e);return 32===t?"Enter":String.fromCharCode(t)}return"keydown"===e.type||"keyup"===e.type?s[e.keyCode]||"Unidentified":""}},O40u:function(e,t,i){"use strict";i.d(t,"a",(function(){return st})),i.d(t,"b",(function(){return rt}));i("kypl"),i("wCa+"),i("4NM0"),i("U00V");var n=i("oYCi"),s=i("RiSW"),r=i.n(s),o=i("OvAC"),a=i.n(o),l=(i("ze8t"),i("mXGw")),c=i("W0B4"),h=i.n(c),d=i("8Jek"),u=i.n(d),p=i("u7cg"),m=i("v+lG"),f=i("SDJZ"),g=i.n(f),b=i("NToG"),v=i.n(b),y=i("K4DB"),_=i.n(y),O=i("+IV6"),w=i.n(O),x=i("T1e2"),j=i.n(x),C=i("eef+"),I=i.n(C),T=i("xARA"),S=i("4OEb"),H=[],M=null,k=null;function E(){k&&(k=null,document.body&&null!=M&&(document.body.style.pointerEvents=M),M=null)}function N(){E(),H.forEach((function(e){return e.__resetIsScrolling()}))}function P(e){e.currentTarget===window&&null==M&&document.body&&(M=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),function(){k&&Object(S.a)(k);var e=0;H.forEach((function(t){e=Math.max(e,t.props.scrollingResetTimeInterval)})),k=Object(S.b)(N,e)}(),H.forEach((function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()}))}function z(e,t){H.some((function(e){return e.props.scrollElement===t}))||t.addEventListener("scroll",P),H.push(e)}function R(e,t){(H=H.filter((function(t){return t!==e}))).length||(t.removeEventListener("scroll",P),k&&(Object(S.a)(k),E()))}var A=function(e){return e===window},L=function(e){return e.getBoundingClientRect()};function D(e,t){if(e){if(A(e)){var i=window,n=i.innerHeight,s=i.innerWidth;return{height:"number"==typeof n?n:0,width:"number"==typeof s?s:0}}return L(e)}return{height:t.serverHeight,width:t.serverWidth}}function W(e,t){if(A(t)&&document.documentElement){var i=document.documentElement,n=L(e),s=L(i);return{top:n.top-s.top,left:n.left-s.left}}var r=F(t),o=L(e),a=L(t);return{top:o.top+r.top-a.top,left:o.left+r.left-a.left}}function F(e){return A(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}var U,B,G=i("QZIi");function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function V(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(i,!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var J=function(){return"undefined"!=typeof window?window:void 0},Z=(B=U=function(e){function t(){var e,i;g()(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=_()(this,(e=w()(t)).call.apply(e,[this].concat(s))),a()(j()(i),"_window",J()),a()(j()(i),"_isMounted",!1),a()(j()(i),"_positionFromTop",0),a()(j()(i),"_positionFromLeft",0),a()(j()(i),"_detectElementResize",void 0),a()(j()(i),"_child",void 0),a()(j()(i),"state",V({},D(i.props.scrollElement,i.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),a()(j()(i),"_registerChild",(function(e){!e||e instanceof Element||console.warn("WindowScroller registerChild expects to be passed Element or null"),i._child=e,i.updatePosition()})),a()(j()(i),"_onChildScroll",(function(e){var t=e.scrollTop;if(i.state.scrollTop!==t){var n=i.props.scrollElement;n&&("function"==typeof n.scrollTo?n.scrollTo(0,t+i._positionFromTop):n.scrollTop=t+i._positionFromTop)}})),a()(j()(i),"_registerResizeListener",(function(e){e===window?window.addEventListener("resize",i._onResize,!1):i._detectElementResize.addResizeListener(e,i._onResize)})),a()(j()(i),"_unregisterResizeListener",(function(e){e===window?window.removeEventListener("resize",i._onResize,!1):e&&i._detectElementResize.removeResizeListener(e,i._onResize)})),a()(j()(i),"_onResize",(function(){i.updatePosition()})),a()(j()(i),"__handleWindowScrollEvent",(function(){if(i._isMounted){var e=i.props.onScroll,t=i.props.scrollElement;if(t){var n=F(t),s=Math.max(0,n.left-i._positionFromLeft),r=Math.max(0,n.top-i._positionFromTop);i.setState({isScrolling:!0,scrollLeft:s,scrollTop:r}),e({scrollLeft:s,scrollTop:r})}}})),a()(j()(i),"__resetIsScrolling",(function(){i.setState({isScrolling:!1})})),i}return I()(t,e),v()(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,i=this.state,n=i.height,s=i.width,r=this._child||T.findDOMNode(this);if(r instanceof Element&&e){var o=W(r,e);this._positionFromTop=o.top,this._positionFromLeft=o.left}var a=D(e,this.props);n===a.height&&s===a.width||(this.setState({height:a.height,width:a.width}),t({height:a.height,width:a.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=Object(G.a)(),this.updatePosition(e),e&&(z(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var i=this.props.scrollElement,n=e.scrollElement;n!==i&&null!=n&&null!=i&&(this.updatePosition(i),R(this,n),z(this,i),this._unregisterResizeListener(n),this._registerResizeListener(i))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(R(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,i=t.isScrolling,n=t.scrollTop,s=t.scrollLeft,r=t.height,o=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:r,isScrolling:i,scrollLeft:s,scrollTop:n,width:o})}}]),t}(l.PureComponent),a()(U,"propTypes",null),B);a()(Z,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:J(),serverHeight:0,serverWidth:0});var q=Z,X=i("fBAK"),Y=i("ct8n"),Q=i.n(Y),$=i("WpNh"),ee=i("vmB6"),te=i("bFH+"),ie=i("wqOR"),ne=i("cB/l"),se=i("OcuC"),re=i("iDcn");var oe=i("fO27"),ae="list__list--Cw",le="list__simpleInner--wc",ce="list__scrolling--1e",he="list__separator--2l",de="list__separator_first--2P",ue="list__item--1p",pe="list__itemContainer--ci",me="list__compact--T_",fe="list__top--Qm",ge="list__left--3q",be="list__label--1K",ve="list__description--3L",ye="list__right--1T",_e="list__details--3C",Oe="list__padded--da",we="list__hint--1T",xe="list__action--1H",je="list__actionLink--13",Ce="list__hover--1f",Ie="list__icon--19",Te="list__glyph--2R",Se="list__avatar--2j list__glyph--2R",He="list__rightGlyph--3X list__glyph--2R",Me="list__checkboxContainer--1y",ke="list__title--1u",Ee="list__title_first--YF",Ne="list__text--1C",Pe="list__fade--1s",ze="list__disabled--32";function Re(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Ae(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Re(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}class Le extends l.PureComponent{render(){const e=this.props,{scrolling:t,"data-test":i,className:s,label:o,hover:a,description:l,rgItemType:c,url:h,onCheckboxChange:d,disabled:p,LinkComponent:m,compact:f,hoverClassName:g}=e,b=r()(e,["scrolling","data-test","className","label","hover","description","rgItemType","url","onCheckboxChange","disabled","LinkComponent","compact","hoverClassName"]),v=u()(ue,s,{[je]:!p,[me]:f,[ce]:t}),y=m?Object(oe.b)(m):oe.a;return Object(n.jsx)(y,Ae(Ae({pseudo:!this.props.href},b),{},{hover:a&&!p,className:v,"data-test":Object(ee.a)("ring-list-link",i),children:o}))}}a()(Le,"propTypes",Ae(Ae({},oe.a.propTypes),{},{description:h.a.string,label:h.a.oneOfType([h.a.element,h.a.string]),rgItemType:h.a.number,scrolling:h.a.bool,url:h.a.string,LinkComponent:h.a.oneOfType([h.a.instanceOf(l.Component),h.a.func,h.a.string]),onCheckboxChange:h.a.func,compact:h.a.bool}));var De=i("2dyW"),We=i("MBlZ"),Fe=i("29qe"),Ue="global__resetButton--1c";class Be extends l.PureComponent{constructor(...e){super(...e),a()(this,"id",Object(te.a)("list-item-")),a()(this,"stopBubbling",e=>e.stopPropagation()),a()(this,"_isString",e=>"string"==typeof e||e instanceof String)}render(){const e=this.props,{scrolling:t,className:i,disabled:s,checkbox:o,avatar:a,subavatar:l,glyph:c,icon:h,rightGlyph:d,description:p,label:m,title:f,details:g,hover:b,rgItemType:v,level:y,tabIndex:_,compact:O,onClick:w,onCheckboxChange:x,onMouseOver:j,onMouseDown:C,onMouseUp:I,rightNodes:T,leftNodes:S}=e,H=r()(e,["scrolling","className","disabled","checkbox","avatar","subavatar","glyph","icon","rightGlyph","description","label","title","details","hover","rgItemType","level","tabIndex","compact","onClick","onCheckboxChange","onMouseOver","onMouseDown","onMouseUp","rightNodes","leftNodes"]),M=void 0!==o&&(o||!(S||c||a)||b&&!s),k=u()(ue,Ue,i,{[xe]:!s,[Ce]:b&&!s,[me]:O,[ce]:t,[ze]:s}),E=u()({[_e]:g,[Oe]:void 0!==h||void 0!==o||void 0!==c}),N={paddingLeft:"".concat(8*(+y||0)+16+(M?28:0),"px")};let P=null;P=this._isString(f)?f:this._isString(m)?m:"";const z=Object(ee.a)({"ring-list-item":-1===(H["data-test"]||"").indexOf("ring-list-item"),"ring-list-item-action":!s,"ring-list-item-selected":o},H["data-test"]);return Object(n.jsxs)("div",{className:pe,"data-test":z,children:[M&&Object(n.jsx)("div",{className:Me,children:Object(n.jsx)(We.a,{"aria-labelledby":this.id,checked:o,disabled:s,onChange:x,onClick:this.stopBubbling})}),Object(n.jsxs)("button",{id:this.id,type:"button",tabIndex:_,onClick:w,onMouseOver:j,onMouseDown:C,onFocus:j,onMouseUp:I,className:k,style:N,children:[Object(n.jsxs)("div",{className:fe,onMouseOut:this.stopBubbling,onBlur:this.stopBubbling,children:[!M&&Object(n.jsxs)("div",{className:ge,children:[S,c&&Object(n.jsx)(Fe.b,{className:Te,glyph:c,size:this.props.iconSize}),a&&Object(n.jsx)(De.b,{className:Se,url:a,size:De.a.Size20,subavatar:l})]}),Object(n.jsx)("span",{className:be,title:P,"data-test":"ring-list-item-label",children:m}),p&&Object(n.jsx)("span",{className:ve,"data-test":"ring-list-item-description",children:p}),Object(n.jsxs)("div",{className:ye,children:[d&&Object(n.jsx)(Fe.b,{className:He,glyph:d,size:this.props.iconSize}),h&&Object(n.jsx)("div",{className:Ie,style:{backgroundImage:'url("'.concat(h,'")')}}),T]})]}),g&&Object(n.jsx)("div",{className:E,children:g})]})]})}}a()(Be,"propTypes",{scrolling:h.a.bool,hover:h.a.bool,details:h.a.string,disabled:h.a.bool,className:h.a.string,tabIndex:h.a.number,checkbox:h.a.bool,description:h.a.oneOfType([h.a.string,h.a.element,h.a.array]),avatar:h.a.string,subavatar:h.a.string,glyph:h.a.oneOfType([h.a.string,h.a.elementType]),icon:h.a.string,iconSize:h.a.number,rightNodes:h.a.oneOfType([h.a.string,h.a.element,h.a.array]),leftNodes:h.a.oneOfType([h.a.string,h.a.element,h.a.array]),label:h.a.oneOfType([h.a.string,h.a.element]),title:h.a.string,level:h.a.number,rgItemType:h.a.number,rightGlyph:h.a.oneOfType([h.a.string,h.a.elementType]),compact:h.a.bool,onClick:h.a.func,onCheckboxChange:h.a.func,onMouseOver:h.a.func,onMouseDown:h.a.func,onMouseUp:h.a.func,"data-test":h.a.string});var Ge=i("AiOT");class Ke extends l.PureComponent{constructor(...e){super(...e),a()(this,"handleKeyPress",e=>{const t=Object(Ge.a)(e);"Enter"!==t&&" "!==t||this.props.onClick(e)})}render(){const e=this.props,{scrolling:t,hover:i,className:s,disabled:o,template:a,rgItemType:l,tabIndex:c,onClick:h,onCheckboxChange:d,onMouseOver:p,onMouseUp:m}=e,f=r()(e,["scrolling","hover","className","disabled","template","rgItemType","tabIndex","onClick","onCheckboxChange","onMouseOver","onMouseUp"]),g=u()(ue,s,{[xe]:!o,[Ce]:i&&!o,[ce]:t}),b=Object(ee.a)("ring-list-item-custom",{"ring-list-item-action":!o},f["data-test"]),v="function"==typeof a?a(this.props):a;return Object(n.jsx)("span",{role:"button",tabIndex:c,onClick:h,onKeyPress:this.handleKeyPress,onMouseOver:p,onFocus:p,onMouseUp:m,className:g,"data-test":b,children:v})}}a()(Ke,"propTypes",{scrolling:h.a.bool,hover:h.a.bool,className:h.a.string,disabled:h.a.bool,rgItemType:h.a.number,tabIndex:h.a.number,template:h.a.oneOfType([h.a.func,h.a.element,h.a.string]),onClick:h.a.func,onMouseOver:h.a.func,onMouseUp:h.a.func,onCheckboxChange:h.a.func,"data-test":h.a.string}),a()(Ke,"defaultProps",{hover:!1});class Ve extends l.PureComponent{render(){const{className:e,description:t,label:i,isFirst:s}=this.props,r=u()(ke,e,{[Ee]:s});return Object(n.jsxs)("span",{className:r,"data-test":"ring-list-title",children:[Object(n.jsx)("span",{className:u()(be,Ne),"data-test":"ring-list-title-label",children:i}),Object(n.jsx)("div",{className:ve,"data-test":"ring-list-title-description",children:t})]})}}a()(Ve,"propTypes",{className:h.a.string,description:h.a.oneOfType([h.a.element,h.a.string]),label:h.a.oneOfType([h.a.element,h.a.string]),isFirst:h.a.bool});class Je extends l.PureComponent{render(){const{description:e,isFirst:t,className:i}=this.props,s=u()(he,i,{[de]:t});return Object(n.jsx)("span",{className:s,children:e})}}a()(Je,"propTypes",{className:h.a.string,description:h.a.oneOfType([h.a.element,h.a.string]),isFirst:h.a.bool});class Ze extends l.PureComponent{render(){return Object(n.jsx)("span",{className:u()(ue,we),"data-test":"ring-list-hint",children:this.props.label})}}a()(Ze,"propTypes",{label:h.a.node});var qe=i("fUcc");function Xe(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Ye(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Xe(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const Qe=Object(ie.a)(),$e=Object(ie.a)();function et(){}const tt=Q()(()=>{},"No key passed for list item with non-string label. It is considered as a bad practice and has been deprecated, please provide a key.");const it=[qe.c.SEPARATOR,qe.c.TITLE,qe.c.MARGIN];function nt(e){return null!=e&&!it.includes(e.rgItemType)&&!e.disabled}const st=function(e,t=""){const i=Object(l.createContext)(e),s=Object(l.createContext)(()=>{});function r({children:t}){const[r,o]=Object(l.useState)(e);return Object(n.jsx)(i.Provider,{value:r,children:Object(n.jsx)(s.Provider,{value:o,children:t})})}function o(e,t){const i=Object(l.useContext)(s);Object(l.useEffect)(()=>{t||i(e)},[i,e,t])}function a({value:e,skipUpdate:t}){return o(e,t),null}return r.propTypes={children:h.a.node},r.displayName="".concat(t,"Provider"),a.displayName="".concat(t,"Updater"),{ValueContext:i,UpdateContext:s,Provider:r,useUpdate:o,Updater:Object(l.memo)(a)}}(void 0,"ActiveItem");class rt extends l.Component{constructor(...e){super(...e),a()(this,"state",{activeIndex:null,prevActiveIndex:null,prevData:[],activeItem:null,needScrollToActive:!1,scrolling:!1,hasOverflow:!1,disabledHover:!1,scrolledToBottom:!1}),a()(this,"hoverHandler",Object(ne.a)(e=>()=>$e(()=>{this.state.disabledHover||this.container&&this.setState({activeIndex:e,activeItem:this.props.data[e],needScrollToActive:!1})}))),a()(this,"_activatableItems",!1),a()(this,"_bufferSize",10),a()(this,"sizeCacheKey",e=>{if(0===e||e===this.props.data.length+1)return qe.c.MARGIN;const t=this.props.data[e-1],i=1===e;switch(t.rgItemType){case qe.c.SEPARATOR:case qe.c.TITLE:return"".concat(t.rgItemType).concat(i?"_first":"").concat(t.description?"_desc":"");case qe.c.MARGIN:return qe.c.MARGIN;case qe.c.CUSTOM:return"".concat(qe.c.CUSTOM,"_").concat(t.key);case qe.c.ITEM:case qe.c.LINK:default:return t.details?"".concat(qe.c.ITEM,"_").concat(t.details):qe.c.ITEM}}),a()(this,"_cache",new X.b({defaultHeight:this.defaultItemHeight(),fixedWidth:!0,keyMapper:this.sizeCacheKey})),a()(this,"_hasActivatableItems",Object($.a)(e=>e.some(nt))),a()(this,"selectHandler",Object(ne.a)(e=>(t,i=!1)=>{const n=this.props.data[e];!this.props.useMouseUp&&n.onClick?n.onClick(n,t):this.props.useMouseUp&&n.onMouseUp&&n.onMouseUp(n,t),this.props.onSelect&&this.props.onSelect(n,t,{tryKeepOpen:i})})),a()(this,"checkboxHandler",Object(ne.a)(e=>t=>this.selectHandler(e)(t,!0))),a()(this,"upHandler",e=>{const{data:t,disableMoveOverflow:i}=this.props,n=this.state.activeIndex;let s;if(null===n||0===n){if(i)return;s=t.length-1}else s=n-1;this.moveHandler(s,this.upHandler,e)}),a()(this,"downHandler",e=>{const{data:t,disableMoveOverflow:i,disableMoveDownOverflow:n}=this.props,s=this.state.activeIndex;let r;if(null===s)r=0;else if(s+1===t.length){if(i||n)return;r=0}else r=s+1;this.moveHandler(r,this.downHandler,e)}),a()(this,"homeHandler",e=>{this.moveHandler(0,this.downHandler,e)}),a()(this,"endHandler",e=>{this.moveHandler(this.props.data.length-1,this.upHandler,e)}),a()(this,"onDocumentMouseMove",()=>{this.state.disabledHover&&this.setState({disabledHover:!1})}),a()(this,"onDocumentKeyDown",e=>{this.state.disabledHover||[16,17,18,19,20,91].includes(e.keyCode)||this.setState({disabledHover:!0})}),a()(this,"mouseHandler",()=>{this.setState({scrolling:!1})}),a()(this,"scrollHandler",()=>{this.setState({scrolling:!0},this.scrollEndHandler)}),a()(this,"enterHandler",(e,t)=>{if(null!==this.state.activeIndex){const i=this.props.data[this.state.activeIndex];return this.selectHandler(this.state.activeIndex)(e),i.href&&!e.defaultPrevented&&(["command+enter","ctrl+enter"].includes(t)?window.open(i.href,"_blank"):"shift+enter"===t?window.open(i.href):window.location.href=i.href),!1}return!0}),a()(this,"clearSelected",()=>{this.setState({activeIndex:null,needScrollToActive:!1})}),a()(this,"scrollEndHandler",()=>Qe(()=>{const e=this.inner;if(e){const t=e.scrollHeight,i=this.defaultItemHeight()/2,n=e.scrollTop+e.clientHeight+i,s=t>0&&n>=t;this.unmounted||this.setState({scrolledToBottom:s}),s&&this.props.onScrollToBottom()}})),a()(this,"checkOverflow",()=>{this.inner&&this.setState({hasOverflow:this.inner.scrollHeight-this.inner.clientHeight>1})}),a()(this,"renderItem",({index:e,style:t,isScrolling:i,parent:s,key:o})=>{let a,c;const h=e-1,d=this.props.data[h],p=this.getId(d);if(0===e||e===this.props.data.length+1||d.rgItemType===qe.c.MARGIN)a=o||"".concat(qe.c.MARGIN,"_").concat(e),c=Object(n.jsx)("div",{style:{height:qe.b.MARGIN}});else{const{selectedLabel:t,originalModel:s}=d,l=r()(d,["selectedLabel","originalModel"]),m=Object.assign({rgItemType:qe.a},l);m.url&&(m.href=m.url),m.href&&(m.rgItemType=qe.c.LINK),a=o||p,m.hover=h===this.state.activeIndex,null!=m.hoverClassName&&m.hover&&(m.className=u()(m.className,m.hoverClassName)),m.onMouseOver=this.hoverHandler(h),m.tabIndex=-1,m.scrolling=i;const f=this.selectHandler(h);let g;this.props.useMouseUp?m.onMouseUp=f:m.onClick=f,m.onCheckboxChange=this.checkboxHandler(h),null==m.compact&&(m.compact=this.props.compact);const b=1===e;switch(m.rgItemType){case qe.c.SEPARATOR:g=Je,m.isFirst=b;break;case qe.c.LINK:g=Le,this.addItemDataTestToProp(m);break;case qe.c.ITEM:g=Be,this.addItemDataTestToProp(m);break;case qe.c.CUSTOM:g=Ke,this.addItemDataTestToProp(m);break;case qe.c.TITLE:m.isFirst=b,g=Ve;break;default:throw new Error("Unknown menu element type: ".concat(m.rgItemType))}c=Object(n.jsx)(g,Ye({},m))}return s?Object(n.jsx)(X.a,{cache:this._cache,parent:s,rowIndex:e,columnIndex:0,children:({registerChild:e})=>Object(n.jsx)("div",{ref:e,style:t,role:"row",id:p,children:Object(n.jsx)("div",{role:"cell",children:c})})},a):Object(l.cloneElement)(c,{key:a})}),a()(this,"addItemDataTestToProp",e=>(e["data-test"]=Object(ee.a)("ring-list-item",e["data-test"]),e)),a()(this,"virtualizedListRef",e=>{this.virtualizedList=e}),a()(this,"containerRef",e=>{this.container=e}),a()(this,"id",Object(te.a)("list-")),a()(this,"shortcutsScope",this.id),a()(this,"shortcutsMap",{up:this.upHandler,down:this.downHandler,home:this.homeHandler,end:this.endHandler,enter:this.enterHandler,"meta+enter":this.enterHandler,"ctrl+enter":this.enterHandler,"command+enter":this.enterHandler,"shift+enter":this.enterHandler})}static getDerivedStateFromProps(e,t){const{prevActiveIndex:i,prevData:n,activeItem:s}=t,{data:r,activeIndex:o,restoreActiveIndex:a}=e,l={prevActiveIndex:o,prevData:r};if(r!==n&&Object.assign(l,{activeIndex:null,activeItem:null}),null!=o&&o!==i&&null!=r[o])Object.assign(l,{activeIndex:o,activeItem:r[o],needScrollToActive:!0});else if(r!==n&&a&&null!=s&&null!=s.key){const e=r.findIndex(e=>e.key===s.key);e>=0&&Object.assign(l,{activeIndex:e,activeItem:r[e]})}if(null==o&&null==t.activeIndex&&((c=e).activateFirstItem||c.activateSingleItem&&1===c.data.length)){const e=r.findIndex(nt);e>=0&&Object.assign(l,{activeIndex:e,activeItem:r[e],needScrollToActive:!0})}var c;return l}componentDidMount(){document.addEventListener("mousemove",this.onDocumentMouseMove),document.addEventListener("keydown",this.onDocumentKeyDown,!0)}shouldComponentUpdate(e,t){return e!==this.props||Object.keys(t).some(e=>t[e]!==this.state[e])}componentDidUpdate(e){this.virtualizedList&&e.data!==this.props.data&&this.virtualizedList.recomputeRowHeights(),this.checkOverflow()}componentWillUnmount(){this.unmounted=!0,document.removeEventListener("mousemove",this.onDocumentMouseMove),document.removeEventListener("keydown",this.onDocumentKeyDown,!0)}hasActivatableItems(){return this._hasActivatableItems(this.props.data)}moveHandler(e,t,i){let n;if(0===this.props.data.length||!this.hasActivatableItems())return;n=this.props.data.length<e?0:e;const s=this.props.data[n];this.setState({activeIndex:n,activeItem:s,needScrollToActive:!0},(function(){nt(s)?"Home"!==i.key&&"End"!==i.key&&Object(se.j)(i):t(i)}))}getFirst(){return this.props.data.find(e=>e.rgItemType===qe.c.ITEM||e.rgItemType===qe.c.CUSTOM)}getSelected(){return this.props.data[this.state.activeIndex]}defaultItemHeight(){return this.props.compact?qe.b.COMPACT_ITEM_HEIGHT:qe.b.ITEM_HEIGHT}getVisibleListHeight(e){return e.maxHeight-this.defaultItemHeight()-qe.b.INNER_PADDING}_deprecatedGenerateKeyFromContent(e){const t=e.label||e.description;return t&&!("string"==typeof t||t instanceof String)&&(tt(),"".concat(e.rgItemType,"_").concat(JSON.stringify(t))),"".concat(e.rgItemType,"_").concat(t)}getId(e){return null!=e?"".concat(this.id,":").concat(e.key||this._deprecatedGenerateKeyFromContent(e)):null}get inner(){return this._inner||(this._inner=this.container&&this.container.querySelector(".ring-list__i")),this._inner}renderVirtualizedInner({height:e,maxHeight:t,autoHeight:i=!1,rowCount:s,isScrolling:r,onChildScroll:o=et,scrollTop:a,registerChild:l}){const c={direction:"auto"};return Object(n.jsx)(m.a,{disableHeight:!0,onResize:this.props.onResize,children:({width:h})=>Object(n.jsx)("div",{ref:l,children:Object(n.jsx)(p.a,{"aria-label":this.props.ariaLabel,ref:this.virtualizedListRef,className:"ring-list__i",autoHeight:i,style:t?Ye({maxHeight:t,height:"auto"},c):c,autoContainerWidth:!0,height:e,width:h,isScrolling:r,onScroll:e=>{o(e),this.scrollEndHandler(e)},scrollTop:a,rowCount:s,estimatedRowSize:this.defaultItemHeight(),rowHeight:this._cache.rowHeight,rowRenderer:this.renderItem,overscanRowCount:this._bufferSize,noop:()=>{},scrollToIndex:!this.props.disableScrollToActive&&this.state.needScrollToActive&&null!=this.state.activeIndex?this.state.activeIndex+1:void 0,scrollToAlignment:"center",deferredMeasurementCache:this._cache,onRowsRendered:this.checkOverflow})})})}renderVirtualized(e,t){return e?this.renderVirtualizedInner({height:e,maxHeight:e,rowCount:t}):Object(n.jsx)(q,{children:e=>this.renderVirtualizedInner(Ye(Ye({},e),{},{rowCount:t,autoHeight:!0}))})}renderSimple(e,t){const i=[];for(let e=0;e<t;e++)i.push(this.renderItem({index:e,isScrolling:this.state.scrolling}));return Object(n.jsx)("div",{className:u()("ring-list__i",le),onScroll:this.scrollHandler,onMouseMove:this.mouseHandler,children:Object(n.jsx)("div",{"aria-label":this.props.ariaLabel,style:e?{maxHeight:this.getVisibleListHeight(this.props)}:null,children:i})})}render(){const e=this.getSelected()&&this.props.hintOnSelection||this.props.hint,t=e?{bottom:qe.b.ITEM_HEIGHT}:null,i=this.props.data.length+2,s=this.props.maxHeight&&this.getVisibleListHeight(this.props),r=u()(ae,this.props.className);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(st.Updater,{value:this.getId(this.state.activeItem),skipUpdate:this.props.hidden||!nt(this.state.activeItem)}),Object(n.jsxs)("div",{id:this.props.id,ref:this.containerRef,className:r,onMouseOut:this.props.onMouseOut,onBlur:this.props.onMouseOut,onMouseLeave:this.clearSelected,"data-test":"ring-list",children:[this.props.shortcuts&&Object(n.jsx)(re.a,{map:this.shortcutsMap,scope:this.shortcutsScope}),this.props.renderOptimization?this.renderVirtualized(s,i):this.renderSimple(s,i),this.state.hasOverflow&&!this.state.scrolledToBottom&&Object(n.jsx)("div",{className:Pe,style:t}),e&&Object(n.jsx)(Ze,{label:e})]})]})}}a()(rt,"propTypes",{id:h.a.string,className:h.a.string,hint:h.a.node,hintOnSelection:h.a.string,data:h.a.array,maxHeight:h.a.oneOfType([h.a.string,h.a.number]),activeIndex:h.a.number,restoreActiveIndex:h.a.bool,activateSingleItem:h.a.bool,activateFirstItem:h.a.bool,shortcuts:h.a.bool,onMouseOut:h.a.func,onSelect:h.a.func,onScrollToBottom:h.a.func,onResize:h.a.func,useMouseUp:h.a.bool,visible:h.a.bool,renderOptimization:h.a.bool,disableMoveOverflow:h.a.bool,disableMoveDownOverflow:h.a.bool,compact:h.a.bool,disableScrollToActive:h.a.bool,hidden:h.a.bool,ariaLabel:h.a.string}),a()(rt,"defaultProps",{data:[],restoreActiveIndex:!1,activateSingleItem:!1,activateFirstItem:!1,onMouseOut:et,onSelect:et,onScrollToBottom:et,onResize:et,shortcuts:!1,renderOptimization:!0,disableMoveDownOverflow:!1,ariaLabel:"List"}),a()(rt,"isItemType",(function(e,t){let i=t.rgItemType;return null==i&&(i=qe.a),i===e})),a()(rt,"ListHint",Ze),a()(rt,"ListProps",{Type:qe.c,Dimension:qe.b})},fBAK:function(e,t,i){"use strict";i.d(t,"a",(function(){return O})),i.d(t,"b",(function(){return w}));var n,s,r=i("SDJZ"),o=i.n(r),a=i("NToG"),l=i.n(a),c=i("K4DB"),h=i.n(c),d=i("+IV6"),u=i.n(d),p=i("T1e2"),m=i.n(p),f=i("eef+"),g=i.n(f),b=i("OvAC"),v=i.n(b),y=i("mXGw"),_=i("xARA"),O=(i("W0B4"),s=n=function(e){function t(){var e,i;o()(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return i=h()(this,(e=u()(t)).call.apply(e,[this].concat(s))),v()(m()(i),"_child",void 0),v()(m()(i),"_measure",(function(){var e=i.props,t=e.cache,n=e.columnIndex,s=void 0===n?0:n,r=e.parent,o=e.rowIndex,a=void 0===o?i.props.index||0:o,l=i._getCellMeasurements(),c=l.height,h=l.width;c===t.getHeight(a,s)&&h===t.getWidth(a,s)||(t.set(a,s,h,c),r&&"function"==typeof r.recomputeGridSize&&r.recomputeGridSize({columnIndex:s,rowIndex:a}))})),v()(m()(i),"_registerChild",(function(e){!e||e instanceof Element||console.warn("CellMeasurer registerChild expects to be passed Element or null"),i._child=e,e&&i._maybeMeasureCell()})),i}return g()(t,e),l()(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||Object(_.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var i=t.style.width,n=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var s=Math.ceil(t.offsetHeight),r=Math.ceil(t.offsetWidth);return i&&(t.style.width=i),n&&(t.style.height=n),{height:s,width:r}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,i=e.columnIndex,n=void 0===i?0:i,s=e.parent,r=e.rowIndex,o=void 0===r?this.props.index||0:r;if(!t.has(o,n)){var a=this._getCellMeasurements(),l=a.height,c=a.width;t.set(o,n,c,l),s&&"function"==typeof s.invalidateCellSizeAfterRender&&s.invalidateCellSizeAfterRender({columnIndex:n,rowIndex:o})}}}]),t}(y.PureComponent),v()(n,"propTypes",null),s);v()(O,"__internalCellMeasurerFlag",!1);var w=function(){function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,e),v()(this,"_cellHeightCache",{}),v()(this,"_cellWidthCache",{}),v()(this,"_columnWidthCache",{}),v()(this,"_rowHeightCache",{}),v()(this,"_defaultHeight",void 0),v()(this,"_defaultWidth",void 0),v()(this,"_minHeight",void 0),v()(this,"_minWidth",void 0),v()(this,"_keyMapper",void 0),v()(this,"_hasFixedHeight",void 0),v()(this,"_hasFixedWidth",void 0),v()(this,"_columnCount",0),v()(this,"_rowCount",0),v()(this,"columnWidth",(function(e){var i=e.index,n=t._keyMapper(0,i);return void 0!==t._columnWidthCache[n]?t._columnWidthCache[n]:t._defaultWidth})),v()(this,"rowHeight",(function(e){var i=e.index,n=t._keyMapper(i,0);return void 0!==t._rowHeightCache[n]?t._rowHeightCache[n]:t._defaultHeight}));var n=i.defaultHeight,s=i.defaultWidth,r=i.fixedHeight,a=i.fixedWidth,l=i.keyMapper,c=i.minHeight,h=i.minWidth;this._hasFixedHeight=!0===r,this._hasFixedWidth=!0===a,this._minHeight=c||0,this._minWidth=h||0,this._keyMapper=l||x,this._defaultHeight=Math.max(this._minHeight,"number"==typeof n?n:30),this._defaultWidth=Math.max(this._minWidth,"number"==typeof s?s:100)}return l()(e,[{key:"clear",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this._keyMapper(e,t);delete this._cellHeightCache[i],delete this._cellWidthCache[i],this._updateCachedColumnAndRowSizes(e,t)}},{key:"clearAll",value:function(){this._cellHeightCache={},this._cellWidthCache={},this._columnWidthCache={},this._rowHeightCache={},this._rowCount=0,this._columnCount=0}},{key:"hasFixedHeight",value:function(){return this._hasFixedHeight}},{key:"hasFixedWidth",value:function(){return this._hasFixedWidth}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this._hasFixedHeight)return this._defaultHeight;var i=this._keyMapper(e,t);return void 0!==this._cellHeightCache[i]?Math.max(this._minHeight,this._cellHeightCache[i]):this._defaultHeight}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this._hasFixedWidth)return this._defaultWidth;var i=this._keyMapper(e,t);return void 0!==this._cellWidthCache[i]?Math.max(this._minWidth,this._cellWidthCache[i]):this._defaultWidth}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this._keyMapper(e,t);return void 0!==this._cellHeightCache[i]}},{key:"set",value:function(e,t,i,n){var s=this._keyMapper(e,t);t>=this._columnCount&&(this._columnCount=t+1),e>=this._rowCount&&(this._rowCount=e+1),this._cellHeightCache[s]=n,this._cellWidthCache[s]=i,this._updateCachedColumnAndRowSizes(e,t)}},{key:"_updateCachedColumnAndRowSizes",value:function(e,t){if(!this._hasFixedWidth){for(var i=0,n=0;n<this._rowCount;n++)i=Math.max(i,this.getWidth(n,t));var s=this._keyMapper(0,t);this._columnWidthCache[s]=i}if(!this._hasFixedHeight){for(var r=0,o=0;o<this._columnCount;o++)r=Math.max(r,this.getHeight(e,o));var a=this._keyMapper(e,0);this._rowHeightCache[a]=r}}},{key:"defaultHeight",get:function(){return this._defaultHeight}},{key:"defaultWidth",get:function(){return this._defaultWidth}}]),e}();function x(e,t){return"".concat(e,"-").concat(t)}t.c=O},jP3q:function(e,t,i){"use strict";i.d(t,"c",(function(){return l})),i.d(t,"b",(function(){return h})),i.d(t,"e",(function(){return d})),i.d(t,"f",(function(){return u})),i.d(t,"a",(function(){return m})),i.d(t,"d",(function(){return f}));i("w13K"),i("y89P"),i("aZFp");var n=i("ct8n"),s=i.n(n),r=i("psGZ");const o=/^[a-z]+:\/\//i;function a(){const e=document.getElementsByTagName("base")[0];return e?e.href:void 0}function l(){const e=a(),t="".concat(window.location.protocol,"//").concat(window.location.host);let i;return i=e?o.test(e)?e:t+e:t,i}function c(){return window.location.href.split("#")[0]}function h(e,t=a){if(-1===e.indexOf("http://")&&-1===e.indexOf("https://")&&0!==e.indexOf("/")){const i=t();if(i)return i+e}return e}function d(e,t){return e&&-1===t.indexOf("http://")&&-1===t.indexOf("https://")?e+t:t}s()((function(e,t=a,i=c){return t()&&("firefox"===r.a.browser.name||"edge"===r.a.browser.name||"chrome"===r.a.browser.name&&r.a.browser.version[0]>=49)?i()+e:String(e)}),"resolveRelativeURL is deprecated");function u(e){if(null==e)return{};const t=/([^&;=]+)=?([^&;]*)/g,i={};function n(e){return decodeURIComponent(e.replace(/\+/g," "))}let s;for(;null!=(s=t.exec(e));)i[n(s[1])]=n(s[2]);return i}function p(e){return encodeURIComponent(e).replace(/%2C/g,",")}function m(e,t){const i=-1===e.indexOf("?")?"?":"&";let n,s=e,r=0;for(n in t)t.hasOwnProperty(n)&&null!=t[n]&&(s+=(0==r++?i:"&")+p(n)+"="+p(t[n]));return s}function f(e){return 0===e.indexOf("data:")}}}]);
webpackJsonp([0xd2a57dc1d883],{145:function(e,n){"use strict";function t(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var r=[]},444:function(e,n,t){"use strict";n.components={"component---src-templates-shoot-js":t(571),"component---src-templates-category-js":t(568),"component---src-templates-contact-js":t(569),"component---src-templates-index-js":t(570),"component---src-templates-work-js":t(572),"component---src-pages-404-js":t(567)},n.json={"layout-index.json":t(573),"work-wedding-pence.json":t(580),"work-wedding.json":t(579),"contact.json":t(576),"index.json":t(577),"work.json":t(578),"404.json":t(574),"404-html.json":t(575)},n.layouts={"layout---index":t(566)}},445:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(2),s=o(c),l=t(9),f=o(l),d=t(358),p=o(d),h=t(123),m=o(h),g=t(145),y=t(700),v=o(y),R=function(e){var n=e.children;return s.default.createElement("div",null,n())},w=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return p.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:p.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=p.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;p.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),p.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){p.default.getPage(e.state.location.pathname)&&n.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,v.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);w.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=w,e.exports=n.default},123:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(597),a=o(r),u=(0,a.default)();e.exports=u},446:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(143),a=t(359),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},447:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(203),a=o(r),u=t(145),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},575:function(e,n,t){t(13),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(588)})})}},574:function(e,n,t){t(13),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(589)})})}},576:function(e,n,t){t(13),e.exports=function(e){return t.e(0xa7f31e1aeaea,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(590)})})}},577:function(e,n,t){t(13),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(591)})})}},573:function(e,n,t){t(13),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(206)})})}},580:function(e,n,t){t(13),e.exports=function(e){return t.e(0x698e667c1757,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(592)})})}},579:function(e,n,t){t(13),e.exports=function(e){return t.e(40418410502201,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(593)})})}},578:function(e,n,t){t(13),e.exports=function(e){return t.e(32551418774257,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(594)})})}},566:function(e,n,t){t(13),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(448)})})}},358:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(2),a=(o(r),t(446)),u=o(a),i=t(123),c=o(i),s=t(359),l=o(s),f=void 0,d={},p={},h={},m={},g={},y=[],v=[],R={},w="",_=[],P={},x=function(e){return e&&e.default||e},j=void 0,k=!0,b=[],C={},N={},E=5;j=t(449)({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){S(e,function(){_=_.filter(function(n){return n!==e}),j.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){j.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){j.onPostLoadPageResources(e)});var O=function(e,n){return P[e]>P[n]?1:P[e]<P[n]?-1:0},L=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},S=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[n])e.nextTick(function(){t(null,m[n])});else{var o=void 0;o="component---"===n.slice(0,12)?p.components[n]:"layout---"===n.slice(0,9)?p.layouts[n]:p.json[n],o(function(e,o){m[n]=o,b.push({resource:n,succeeded:!e}),N[n]||(N[n]=e),b=b.slice(-E),t(e,o)})}},A=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):N[n]?e.nextTick(function(){t(N[n])}):S(n,function(e,o){if(e)t(e);else{var r=x(o());g[n]=r,t(e,r)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=b.find(function(e){return e.succeeded});return!!n},T=function(e,n){console.log(n),C[e]||(C[e]=n),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){v=[],R={},P={},_=[],y=[],w=""},addPagesArray:function(e){y=e,w="/rauch-photography",f=(0,u.default)(e,w)},addDevRequires:function(e){d=e},addProdRequires:function(e){p=e},dequeue:function(){return v.pop()},enqueue:function(e){var n=(0,l.default)(e,w);if(!y.some(function(e){return e.path===n}))return!1;var t=1/M;M+=1,R[n]?R[n]+=1:R[n]=1,U.has(n)||v.unshift(n),v.sort(L);var o=f(n);return o.jsonName&&(P[o.jsonName]?P[o.jsonName]+=1+t:P[o.jsonName]=1+t,_.indexOf(o.jsonName)!==-1||m[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(P[o.componentChunkName]?P[o.componentChunkName]+=1+t:P[o.componentChunkName]=1+t,_.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(O),j.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:P}},getPages:function(){return{pathArray:v,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return v.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(C[n])return T(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return T(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,h[n])return e.nextTick(function(){t(h[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[n]})}),h[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return A(o.componentChunkName,function(e,n){e&&T(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),A(o.jsonName,function(e,n){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&A(o.layout,function(e,n){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,t(12))},595:function(e,n){e.exports=[{componentChunkName:"component---src-templates-shoot-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"work-wedding-pence.json",path:"/work/wedding/pence/"},{componentChunkName:"component---src-templates-category-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"work-wedding.json",path:"/work/wedding"},{componentChunkName:"component---src-templates-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-work-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"work.json",path:"/work"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},449:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(145),u=t(2),i=o(u),c=t(395),s=o(c),l=t(143),f=t(584),d=t(552),p=o(d),h=t(205),m=t(447),g=o(m),y=t(123),v=o(y),R=t(595),w=o(R),_=t(596),P=o(_),x=t(445),j=o(x),k=t(444),b=o(k),C=t(358),N=o(C);t(475),window.___history=g.default,window.___emitter=v.default,N.default.addPagesArray(w.default),N.default.addProdRequires(b.default),window.asyncRequires=b.default,window.___loader=N.default,window.matchPath=l.matchPath;var E=P.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(450);var o=function(e){function n(e){e.page.path===N.default.getPage(o).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(u),window.___history.push(t))}var t=(0,h.createLocation)(e,null,null,g.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var u=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);N.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,d=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],m=function(e){var n=e.children;return i.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(j.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(d?d:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(j.default,r({page:!0},o)):(0,u.createElement)(j.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,p.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},596:function(e,n){e.exports=[]},450:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(123),a=o(r),u="/";u="/rauch-photography/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},359:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},552:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},13:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},597:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},700:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},567:function(e,n,t){t(13),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(462)})})}},568:function(e,n,t){t(13),e.exports=function(e){return t.e(0x93712ef0c6fe,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(463)})})}},569:function(e,n,t){t(13),e.exports=function(e){return t.e(0xa93b51d11daa,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(464)})})}},570:function(e,n,t){t(13),e.exports=function(e){return t.e(0x5eadfb0a5d2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(465)})})}},571:function(e,n,t){t(13),e.exports=function(e){return t.e(0x66d2577e027b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(466)})})}},572:function(e,n,t){t(13),e.exports=function(e){return t.e(0x7475c4ed206f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(467)})})}}});
//# sourceMappingURL=app-2bde8aa27dbf797502e5.js.map
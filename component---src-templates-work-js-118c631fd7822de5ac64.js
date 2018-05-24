webpackJsonp([0x7475c4ed206f],{51:function(e,t,n){var r,o;!function(i,s){r=s,o="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==o&&(e.exports=o))}(this,function(){"use strict";var e=function(){o.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.5",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var i,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,p=o.extend({},f,r),g=[],h=!1,v=0,m=u,w=!0,y=0,S=!0,E=function(){for(var t in p)f.hasOwnProperty(t)||(_(2,'WARNING: Unknown option "'+t+'"'),delete p[t]);if(p.container=o.get.elements(p.container)[0],!p.container)throw _(1,"ERROR creating object "+a+": No valid scroll container supplied"),a+" init failed.";w=p.container===window||p.container===document.body||!document.body.contains(p.container),w&&(p.container=window),y=x(),p.container.addEventListener("resize",C),p.container.addEventListener("scroll",C),p.refreshInterval=parseInt(p.refreshInterval)||f.refreshInterval,b(),_(3,"added new "+a+" controller (v"+e.version+")")},b=function(){p.refreshInterval>0&&(s=window.setTimeout(F,p.refreshInterval))},R=function(){return p.vertical?o.get.scrollTop(p.container):o.get.scrollLeft(p.container)},x=function(){return p.vertical?o.get.height(p.container):o.get.width(p.container)},O=this._setScrollPos=function(e){p.vertical?w?window.scrollTo(o.get.scrollLeft(),e):p.container.scrollTop=e:w?window.scrollTo(e,o.get.scrollTop()):p.container.scrollLeft=e},T=function(){if(S&&h){var e=o.type.Array(h)?h:g.slice(0);h=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(t,n){_(3,"updating Scene "+(n+1)+"/"+e.length+" ("+g.length+" total)"),t.update(!0)}),0===e.length&&p.loglevel>=3&&_(3,"updating 0 Scenes (nothing added to controller)")}},k=function(){i=o.rAF(T)},C=function(e){_(3,"event fired causing an update:",e.type),"resize"==e.type&&(y=x(),m=u),h!==!0&&(h=!0,k())},F=function(){if(!w&&y!=x()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}p.container.dispatchEvent(e)}g.forEach(function(e,t){e.refresh()}),b()},_=this._log=function(e,t){p.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),o.log.apply(window,arguments))};this._options=p;var z=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(o.type.Array(t))t.forEach(function(e,t){d.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=z(g),t.on("shift.controller_sort",function(){g=z(g)});for(var n in p.globalSceneOptions)t[n]&&t[n].call(t,p.globalSceneOptions[n]);_(3,"adding Scene (now "+g.length+" total)")}}else _(1,"ERROR: invalid argument supplied for '.addScene()'");return d},this.removeScene=function(e){if(o.type.Array(e))e.forEach(function(e,t){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),_(3,"removing Scene (now "+g.length+" left)"),e.remove())}return d},this.updateScene=function(t,n){return o.type.Array(t)?t.forEach(function(e,t){d.updateScene(e,n)}):n?t.update(!0):h!==!0&&t instanceof e.Scene&&(h=h||[],h.indexOf(t)==-1&&h.push(t),h=z(h),k()),d},this.update=function(e){return C({type:"resize"}),e&&T(),d},this.scrollTo=function(n,r){if(o.type.Number(n))O.call(p.container,n,r);else if(n instanceof e.Scene)n.controller()===d?d.scrollTo(n.scrollOffset(),r):_(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",n);else if(o.type.Function(n))O=n;else{var i=o.get.elements(n)[0];if(i){for(;i.parentNode.hasAttribute(t);)i=i.parentNode;var s=p.vertical?"top":"left",a=o.get.offset(p.container),l=o.get.offset(i);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}else _(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",n)}return d},this.scrollPos=function(e){return arguments.length?(o.type.Function(e)?R=e:_(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),d):R.call(d)},this.info=function(e){var t={size:y,vertical:p.vertical,scrollPos:v,scrollDirection:m,container:p.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void _(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(p.loglevel!=e&&(p.loglevel=e),d):p.loglevel},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return p.container.removeEventListener("resize",C),p.container.removeEventListener("scroll",C),o.cAF(i),_(3,"destroyed "+a+" (reset: "+(e?"true":"false")+")"),null},E(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var i,s,a="ScrollMagic.Scene",l="BEFORE",c="DURING",u="AFTER",f=r.defaults,d=this,p=o.extend({},f,n),g=l,h=0,v={start:0,end:0},m=0,w=!0,y=function(){for(var e in p)f.hasOwnProperty(e)||(E(2,'WARNING: Unknown option "'+e+'"'),delete p[e]);for(var t in f)F(t);k()},S={};this.on=function(e,t){return o.type.Function(t)?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],o=n[1];"*"!=r&&(S[r]||(S[r]=[]),S[r].push({namespace:o||"",callback:t}))})):E(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),d},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e,n){var r=e.split("."),o=r[0],i=r[1]||"",s="*"===o?Object.keys(S):[o];s.forEach(function(e){for(var n=S[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete S[e]})}),d):(E(1,"ERROR: Invalid event name supplied."),d)},this.trigger=function(t,n){if(t){var r=t.trim().split("."),o=r[0],i=r[1],s=S[o];E(3,"event fired:",o,n?"->":"",n||""),s&&s.forEach(function(t,r){i&&i!==t.namespace||t.callback.call(d,new e.Event(o,t.namespace,d,n))})}else E(1,"ERROR: Invalid event name supplied.");return d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?x():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){b(),d.update()});var E=this._log=function(e,t){p.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),o.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?s!=t&&(s&&s.removeScene(d),s=t,k(),R(!0),x(!0),b(),s.info("container").addEventListener("resize",O),t.addScene(d),d.trigger("add",{controller:s}),E(3,"added "+a+" to controller"),d.update()):E(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),d},this.enabled=function(e){return arguments.length?(w!=e&&(w=!!e,d.update(!0)),d):w},this.remove=function(){if(s){s.info("container").removeEventListener("resize",O);var e=s;s=void 0,e.removeScene(d),d.trigger("remove"),E(3,"removed "+a+" from controller")}return d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),E(3,"destroyed "+a+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&w){var t,n=s.info("scrollPos");t=p.duration>0?(n-v.start)/(v.end-v.start):n>=v.start?1:0,d.trigger("update",{startPos:v.start,endPos:v.end,scrollPos:n}),d.progress(t)}else _&&g===c&&M(!0);else s.updateScene(d,!1);return d},this.refresh=function(){return R(),x(),d},this.progress=function(e){if(arguments.length){var t=!1,n=g,r=s?s.info("scrollDirection"):"PAUSED",o=p.reverse||e>=h;if(0===p.duration?(t=h!=e,h=e<1&&o?0:1,g=0===h?l:c):e<0&&g!==l&&o?(h=0,g=l,t=!0):e>=0&&e<1&&o?(h=e,g=c,t=!0):e>=1&&g!==u?(h=1,g=u,t=!0):g!==c||o||M(),t){var i={progress:h,state:g,scrollDirection:r},a=g!=n,f=function(e){d.trigger(e,i)};a&&n!==c&&(f("enter"),f(n===l?"start":"end")),f("progress"),a&&g!==c&&(f(g===l?"start":"end"),f("leave"))}return d}return h};var b=function(){v={start:m+p.offset},s&&p.triggerElement&&(v.start-=s.info("size")*p.triggerHook),v.end=v.start+p.duration},R=function(e){if(i){var t="duration";C(t,i.call(d))&&!e&&(d.trigger("change",{what:t,newval:p[t]}),d.trigger("shift",{reason:t}))}},x=function(e){var n=0,r=p.triggerElement;if(s&&r){for(var i=s.info(),a=o.get.offset(i.container),l=i.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=o.get.offset(r);i.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=m;m=n,u&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})},O=function(e){p.triggerHook>0&&d.trigger("shift",{reason:"containerResize"})},T=o.extend(r.validate,{duration:function(e){if(o.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(o.type.Function(e)){i=e;try{e=parseFloat(i())}catch(t){e=-1}}if(e=parseFloat(e),!o.type.Number(e)||e<0)throw i?(i=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),k=function(e){e=arguments.length?[e]:Object.keys(T),e.forEach(function(e,t){var n;if(T[e])try{n=T[e](p[e])}catch(t){n=f[e];var r=o.type.String(t)?[t]:t;o.type.Array(r)?(r[0]="ERROR: "+r[0],r.unshift(1),E.apply(this,r)):E(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{p[e]=n}})},C=function(e,t){var n=!1,r=p[e];return p[e]!=t&&(p[e]=t,k(e),n=r!=p[e]),n},F=function(e){d[e]||(d[e]=function(t){return arguments.length?("duration"===e&&(i=void 0),C(e,t)&&(d.trigger("change",{what:e,newval:p[e]}),r.shifts.indexOf(e)>-1&&d.trigger("shift",{reason:e})),d):p[e]})};this.controller=function(){return s},this.state=function(){return g},this.scrollOffset=function(){return v.start},this.triggerPosition=function(){var e=p.offset;return s&&(e+=p.triggerElement?m:s.info("size")*d.triggerHook()),e};var _,z;d.on("shift.internal",function(e){var t="duration"===e.reason;(g===u&&t||g===c&&0===p.duration)&&M(),t&&N()}).on("progress.internal",function(e){M()}).on("add.internal",function(e){N()}).on("destroy.internal",function(e){d.removePin(e.reset)});var M=function(e){if(_&&s){var t=s.info(),n=z.spacer.firstChild;if(e||g!==c){var r={position:z.inFlow?"relative":"absolute",top:0,left:0},i=o.css(n,"position")!=r.position;z.pushFollowers?p.duration>0&&(g===u&&0===parseFloat(o.css(z.spacer,"padding-top"))?i=!0:g===l&&0===parseFloat(o.css(z.spacer,"padding-bottom"))&&(i=!0)):r[t.vertical?"top":"left"]=p.duration*h,o.css(n,r),i&&N()}else{"fixed"!=o.css(n,"position")&&(o.css(n,{position:"fixed"}),N());var a=o.get.offset(z.spacer,!0),f=p.reverse||0===p.duration?t.scrollPos-v.start:Math.round(h*p.duration*10)/10;a[t.vertical?"top":"left"]+=f,o.css(z.spacer.firstChild,{top:a.top,left:a.left})}}},N=function(){if(_&&s&&z.inFlow){var e=g===c,t=s.info("vertical"),n=z.spacer.firstChild,r=o.isMarginCollapseType(o.css(z.spacer,"display")),i={};z.relSize.width||z.relSize.autoFullWidth?e?o.css(_,{width:o.get.width(z.spacer)}):o.css(_,{width:"100%"}):(i["min-width"]=o.get.width(t?_:n,!0,!0),i.width=e?i["min-width"]:"auto"),z.relSize.height?e?o.css(_,{height:o.get.height(z.spacer)-(z.pushFollowers?p.duration:0)}):o.css(_,{height:"100%"}):(i["min-height"]=o.get.height(t?n:_,!0,!r),i.height=e?i["min-height"]:"auto"),z.pushFollowers&&(i["padding"+(t?"Top":"Left")]=p.duration*h,i["padding"+(t?"Bottom":"Right")]=p.duration*(1-h)),o.css(z.spacer,i)}},P=function(){s&&_&&g===c&&!s.info("isDocument")&&M()},I=function(){s&&_&&g===c&&((z.relSize.width||z.relSize.autoFullWidth)&&o.get.width(window)!=o.get.width(z.spacer.parentNode)||z.relSize.height&&o.get.height(window)!=o.get.height(z.spacer.parentNode))&&N()},L=function(e){s&&_&&g===c&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=o.extend({},r,n),e=o.get.elements(e)[0],!e)return E(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),d;if("fixed"===o.css(e,"position"))return E(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),d;if(_){if(_===e)return d;d.removePin()}_=e;var i=_.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];_.parentNode.style.display="none";var a="absolute"!=o.css(_,"position"),l=o.css(_,s.concat(["display"])),c=o.css(_,["width","height"]);_.parentNode.style.display=i,!a&&n.pushFollowers&&(E(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),n.pushFollowers=!1),window.setTimeout(function(){_&&0===p.duration&&n.pushFollowers&&E(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var u=_.parentNode.insertBefore(document.createElement("div"),_),f=o.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||o.extend(f,o.css(_,["width","height"])),o.css(u,f),u.setAttribute(t,""),o.addClass(u,n.spacerClass),z={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&o.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!_.___origStyle){_.___origStyle={};var g=_.style,h=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);h.forEach(function(e){_.___origStyle[e]=g[e]||""})}return z.relSize.width&&o.css(u,{width:c.width}),z.relSize.height&&o.css(u,{height:c.height}),u.appendChild(_),o.css(_,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(z.relSize.width||z.relSize.autoFullWidth)&&o.css(_,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",P),window.addEventListener("resize",P),window.addEventListener("resize",I),_.addEventListener("mousewheel",L),_.addEventListener("DOMMouseScroll",L),E(3,"added pin"),M(),d},this.removePin=function(e){if(_){if(g===c&&M(!0),e||!s){var n=z.spacer.firstChild;if(n.hasAttribute(t)){var r=z.spacer.style,i=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},i.forEach(function(e){margins[e]=r[e]||""}),o.css(n,margins)}z.spacer.parentNode.insertBefore(n,z.spacer),z.spacer.parentNode.removeChild(z.spacer),_.parentNode.hasAttribute(t)||(o.css(_,_.___origStyle),delete _.___origStyle)}window.removeEventListener("scroll",P),window.removeEventListener("resize",P),window.removeEventListener("resize",I),_.removeEventListener("mousewheel",L),_.removeEventListener("DOMMouseScroll",L),_=void 0,E(3,"removed pin (reset: "+(e?"true":"false")+")")}return d};var A,D=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=o.get.elements(e);return 0!==n.length&&o.type.String(t)?(D.length>0&&d.removeClassToggle(),A=t,D=n,d.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?o.addClass:o.removeClass;D.forEach(function(e,n){t(e,A)})}),d):(E(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),d)},this.removeClassToggle=function(e){return e&&D.forEach(function(e,t){o.removeClass(e,A)}),d.off("start.internal_class end.internal_class"),A=void 0,D=[],d},y(),d};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!o.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=o.get.elements(e)[0];if(!t)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(o.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!o.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,n,o,i){t in r.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(r.defaults[t]=n,r.validate[t]=o,i&&r.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var o in r)this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var o=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},o=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},i=function(t,n,i,s){if(n=n===document?e:n,n===e)s=!1;else if(!g.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(i?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(i&&s){var l=o(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],u=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),o=e.setTimeout(function(){t(n+r)},r);return a=n+r,o}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=["error","warn","log"],d=e.console||{};for(d.log=d.log||function(){},t=0;t<f.length;t++){var p=f[t];d[p]||(d[p]=d.log)}n.log=function(e){(e>f.length||e<=0)&&(e=f.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),r=f[e-1],o=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(d[r],d);o.unshift(n),i.apply(d,o)};var g=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};g.String=function(e){return"string"===g(e)},g.Function=function(e){return"function"===g(e)},g.Array=function(e){return Array.isArray(e)},g.Number=function(e){return!g.Array(e)&&e-parseFloat(e)+1>=0},g.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(g.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===g(t)||g.Array(t))for(var r=0,o=n.length=t.length;r<o;r++){var i=t[r];n[r]=g.DomElement(i)?i:h.elements(i)}else(g.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return i("width",e,t,n)},h.height=function(e,t,n){return i("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(g.String(t))return o(e)[s(t)];if(g.Array(t)){var n={},r=o(e);return t.forEach(function(e,t){n[e]=r[s(e)]}),n}for(var i in t){var a=t[i];a==parseFloat(a)&&(a+="px"),e.style[s(i)]=a}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e})},102:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Blank=void 0;var o=n(2),i=r(o),s=t.Blank=function(e){return i.default.createElement("div",{className:"hero-cover"},i.default.createElement("div",{className:"hero-content"},i.default.createElement("h1",{className:"hero-title"},"Nothing here yet")))};t.default=s},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(23),l=n(2),c=r(l),u=n(82),f=r(u),d=function(e){function t(n){o(this,t);var r=i(this,e.call(this,n));return r.link=function(){(0,a.navigateTo)("/"+r.props.path)},r.hoverOffText=function(){r.setState({textHover:!1})},r.hoverOnText=function(){r.setState({textHover:!0})},r.componentWillUnmount=function(){r.setState({controller:null})},r.initializeScene=function(e){new e.Scene({triggerElement:"#work-"+r.props.index,triggerHook:".5"}).duration(1e3).on("progress",function(e){r.setState({progress:e.progress,shift:Math.floor(50*e.progress)}),r.props.version?r.setState({cssForSmallerImages:{transform:"translate("+-Math.floor(100*e.progress)+"px, "+-Math.floor(50*e.progress)+"px)"},cssForLargerImages:{transform:"translate("+Math.floor(50*e.progress)+"px, "+-Math.floor(25*e.progress)+"px)"}}):r.setState({cssForSmallerImages:{transform:"translate("+Math.floor(100*e.progress)+"px, "+-Math.floor(50*e.progress)+"px)"},cssForLargerImages:{transform:"translate("+-Math.floor(50*e.progress)+"px, "+-Math.floor(25*e.progress)+"px)"}})}).addTo(r.state.controller)},r.state={textHover:!1,shift:0,progress:0,cssForLargerImages:{},cssForSmallerImages:{}},r}return s(t,e),t.prototype.componentDidMount=function(){var e=this,t="undefined"!=typeof window,r=t?n(51):void 0;r&&this.setState({controller:new r.Controller,textHover:!1},function(){e.initializeScene(r)})},t.prototype.render=function(){return c.default.createElement("div",{className:"work",id:"work-"+this.props.index},c.default.createElement("div",{className:"work-pictures version-"+this.props.version},c.default.createElement("div",{className:"col-1"},c.default.createElement("div",{key:10*this.state.progress,onClick:this.link,className:"no-motion-touch",style:this.state.cssForLargerImages,onMouseEnter:this.hoverOffText,onMouseLeave:this.hoverOnText},c.default.createElement(f.default,{className:"work-large-picture version-"+this.props.version,sizes:this.props.center}))),c.default.createElement("div",{className:"col-2"},c.default.createElement("div",{key:20*this.state.progress,className:"work-image-wrapper no-motion-touch",style:this.state.cssForSmallerImages,onClick:this.link,onMouseEnter:this.hoverOffText,onMouseLeave:this.hoverOnText},c.default.createElement(f.default,{className:"work-small-picture  version-"+this.props.version,sizes:this.props.left})),c.default.createElement("div",{className:"work-content-wrapper"},c.default.createElement("div",{className:"work-content  version-"+this.props.version,onClick:this.link},c.default.createElement("h3",{className:"strike "+(this.state.textHover?"":"strike-hover")},c.default.createElement("span",null,this.props.title," ")))))))},t}(l.Component);t.default=d,e.exports=t.default},306:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var a=n(2),l=r(a),c=n(301),u=r(c),f=n(23),d=(r(f),n(102)),p=r(d),g=function(e){function t(n){o(this,t);var r=i(this,e.call(this,n));return r.state={active:0},r}return s(t,e),t.prototype.render=function(){var e=void 0;return e=this.props.data.allMarkdownRemark?this.props.data.allMarkdownRemark.edges.map(function(e,t){var n=e.node,r=t%2;return l.default.createElement("div",{key:11*t},l.default.createElement(u.default,{left:n.frontmatter.left.childImageSharp.sizes,center:n.frontmatter.center.childImageSharp.sizes,right:n.frontmatter.right.childImageSharp.sizes,leftOrientation:n.frontmatter.leftOrientation,centerOrientation:n.frontmatter.centerOrientation,rightOrientation:n.frontmatter.rightOrientation,index:t,title:n.frontmatter.title,version:r,path:"work/"+n.frontmatter.path}))}):l.default.createElement(p.default,null),l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"work-spacer"}),e)},t}(a.Component);t.default=g;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-work-js-118c631fd7822de5ac64.js.map
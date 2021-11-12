(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var s=o[c];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("6cc3")},"163f":function(t,e,o){},4040:function(t,e,o){},4065:function(t,e,o){},"49a5":function(t,e,o){"use strict";var n=o("7557"),a=o.n(n);a.a},"55e9":function(t,e,o){},"6cc3":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("img",{staticStyle:{"max-width":"80%"},attrs:{alt:"Vue logo",src:o("c612")}}),t._m(0),n("p",{staticClass:"desc"},[t._v("Hotspot component for Vue.js.")]),t._l(t.hotspots,(function(e,o){return n("section",{key:o},[n("div",{staticClass:"container"},[n("div",{staticClass:"text mb-sm"},[n("span",{staticClass:"bold"},[t._v("Example "+t._s(o+1))])]),n("v-hotspot",{attrs:{"init-options":e},on:{"save-data":t.saveData,"after-delete":t.afterDelete}}),n("div",{staticClass:"text"},[t._v(" Editable: "+t._s(e.editable)+" | interactivity: "+t._s(e.interactivity)+" ")]),n("toggle",{attrs:{label:"Change Editable","hotspot-config":e},on:{"change-editable":t.changeEditable}})],1)])})),t._m(1)],2)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("a",{attrs:{href:"https://github.com/jamesxwang/vue-hotspot"}},[t._v("Vue-Hotspot")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("a",{attrs:{href:"//github.com/jamesxwang"}},[t._v("@James Wang")]),t._v("|"),o("a",{attrs:{href:"//github.com/jamesxwang/vue-hotspot/blob/master/LICENSE"}},[t._v("MIT License")]),t._v("|"),o("a",{attrs:{href:"//github.com/jamesxwang/vue-hotspot"}},[t._v("View on GitHub")])])}],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.config?o("div",{ref:"vueHotspot",staticClass:"ui__vue_hotspot"},[o("img",{ref:"vueHotspotBackgroundImage",staticClass:"ui__vue_hotspot_background_image",attrs:{src:t.config.image,alt:"Hotspot Image"},on:{load:t.successLoadImg}}),t.config.editable?o("span",{ref:"vueHotspotOverlay",staticClass:"ui__vue_hotspot_overlay",style:"height: "+t.overlayHeight+"; width: "+t.overlayWidth+"; left: "+t.overlayLeft+"; top: "+t.overlayTop+";",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addHotspot(e)}}},[o("p",[t._v(t._s(t.config.overlayText))])]):t._e(),t._l(t.config.data,(function(e,n){return o("DataPoint",{key:n,attrs:{hotspot:e,config:t.config,imageLoaded:t.imageLoaded,vueHotspotBackgroundImage:t.vueHotspotBackgroundImage,vueHotspot:t.vueHotspot}})})),o("ControlBox",{attrs:{config:t.config},on:{"save-data":t.saveAllHotspots,"after-delete":t.removeAllHotspots}})],2):t._e()},c=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui__vue_hotspot_hotspot",class:t.isActive||"none"===t.interactivity?"active":"",style:"top: "+t.positionTop+"; left: "+t.positionLeft+"; background-color: "+t.hotspotColor+";",on:{mouseenter:function(e){"hover"===t.interactivity&&(t.isActive=!0)},mouseleave:function(e){"hover"===t.interactivity&&(t.isActive=!1)},click:function(e){"click"===t.interactivity&&t.toggleActive()}}},[o("div",{style:"color:"+t.textColor},[o("div",{staticClass:"ui__vue_hotspot_title",style:"\n        background: "+t.messageBoxColor+";\n        opacity: "+t.opacity},[t._v(" "+t._s(t.hotspot["Title"])+" ")]),o("div",{staticClass:"ui__vue_hotspot_message",style:"\n        background: "+t.messageBoxColor+";\n        opacity: "+t.opacity},[t._v(" "+t._s(t.hotspot["Message"])+" ")])])])},u=[];function p(t,e){var o=null,n=Date.now();return function(){var a=this,i=arguments,r=Date.now(),c=e-(r-n);clearTimeout(o),c<=0?(t.apply(a,i),n=Date.now()):o=setTimeout(t,c)}}var f=o("750b");function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){Object(s["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d=Object(f["b"])({props:{hotspot:Object,config:Object,imageLoaded:Boolean,vueHotspotBackgroundImage:HTMLImageElement,vueHotspot:HTMLDivElement},setup:function(t,e){e.emit;var o=Object(f["h"])(!1),n=Object(f["g"])({positionTop:0,positionLeft:0,hotspotColor:Object(f["a"])((function(){return t.config&&t.config.hotspotColor})),interactivity:Object(f["a"])((function(){return t.config&&t.config.interactivity})),textColor:Object(f["a"])((function(){return t.config&&t.config.textColor})),messageBoxColor:Object(f["a"])((function(){return t.config&&t.config.messageBoxColor})),opacity:Object(f["a"])((function(){return t.config&&t.config.opacity}))});function a(){n.positionTop="".concat(t.hotspot.y*t.vueHotspotBackgroundImage.clientHeight/100+(t.vueHotspotBackgroundImage.offsetTop-t.vueHotspot.clientTop),"px;"),n.positionLeft="".concat(t.hotspot.x*t.vueHotspotBackgroundImage.clientWidth/100+(t.vueHotspotBackgroundImage.offsetLeft-t.vueHotspot.clientLeft),"px;")}function i(){o.value=!o.value}return Object(f["j"])((function(){return t.imageLoaded}),(function(t,e){t&&a()})),Object(f["e"])((function(){window.addEventListener("resize",p(a,50))})),Object(f["f"])((function(){window.removeEventListener("resize",p(a,50))})),g({isActive:o},Object(f["i"])(n),{getHotspotStyle:a,toggleActive:i})}}),b=d,h=(o("49a5"),o("2877")),m=Object(h["a"])(b,l,u,!1,null,"69a98390",null),y=m.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui__vue_hotspot_buttons_box"},[o("div",{staticClass:"ui__vue_hotspot_buttons",class:t.isEditable?"active":""},[o("button",{staticClass:"ui__vue_hotspot_save",on:{click:t.saveAllHotspots}},[t._v("Save")]),o("button",{staticClass:"ui__vue_hotspot_remove",on:{click:t.removeAllHotspots}},[t._v("Remove")])])])},_=[],j=Object(f["b"])({props:{config:Object},setup:function(t,e){var o=e.emit,n=Object(f["a"])((function(){return t.config&&t.config.editable}));function a(){o("save-data",t.config.data)}function i(){t.config.data=[],o("after-delete")}return{isEditable:n,saveAllHotspots:a,removeAllHotspots:i}}}),x=j,w=(o("843c"),Object(h["a"])(x,O,_,!1,null,"5089e8e9",null)),H=w.exports;function C(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function T(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?C(Object(o),!0).forEach((function(e){Object(s["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}n["a"].use(f["c"]);var k=Object(f["b"])({components:{DataPoint:y,ControlBox:H},props:{initOptions:Object},setup:function(t,e){var o=e.emit,n=Object(f["h"])(null),a=Object(f["h"])(null),i=Object(f["h"])(null),r=Object(f["g"])({data:[],image:"https://via.placeholder.com/600x500?text=Oops!+image+not+found...",editable:!0,interactivity:"hover",hotspotColor:"rgb(66, 184, 131)",messageBoxColor:"rgb(255, 255, 255)",textColor:"rgb(53, 73, 94)",overlayText:"Please Click The Image To Add Hotspots.",opacity:.8,schema:[{property:"Title",default:"Vue Hotspot"},{property:"Message",default:"This is a Vue Hotspot Component which lets you create hotspot. "}]}),c=Object(f["h"])(null),s=Object(f["h"])(!1),l=Object(f["g"])({overlayHeight:0,overlayWidth:0,overlayLeft:0,overlayTop:0});function u(t){for(var e=t.offsetX,o=t.offsetY,n=Object(f["d"])(c)?c.value:c,i=a.value.offsetHeight,r=a.value.offsetWidth,s={x:e/r*100,y:o/i*100},l=n.schema,u=0;u<l.length;u++){var p=l[u],v=prompt("Please enter ".concat(p.property),p.default);if(null===v)return;s[p.property]=v}n.data.push(s)}function v(){var t=Object(f["d"])(i)?i.value:i,e=Object(f["d"])(n)?n.value:n;l.overlayHeight="".concat(t.clientHeight/e.clientHeight*100,"%"),l.overlayWidth="".concat(t.clientWidth/e.clientWidth*100,"%"),l.overlayLeft="".concat(t.offsetLeft-e.clientLeft,"px"),l.overlayTop="".concat(t.offsetTop-e.clientTop,"px")}function g(t){return JSON.parse(JSON.stringify(t))}function d(t){!0===t.target.complete&&(s.value=!0)}function b(){var t=Object(f["d"])(c)?c.value:c;o("save-data",t.data)}function h(){o("after-delete")}return Object(f["j"])(s,(function(t,e){t&&v()})),Object(f["j"])((function(){return t.initOptions}),(function(t,e){c.value=T({},c.value?c.value:g(r),{},t)}),{deep:!0}),Object(f["e"])((function(){window.addEventListener("resize",p(v,50))})),Object(f["f"])((function(){window.removeEventListener("resize",p(v,50))})),T({defaultOptions:r,config:c,imageLoaded:s},Object(f["i"])(l),{vueHotspot:n,vueHotspotOverlay:a,vueHotspotBackgroundImage:i,deepCopy:g,successLoadImg:d,saveAllHotspots:b,removeAllHotspots:h,resizeOverlay:v,addHotspot:u})}}),P=k,E=(o("ab37"),Object(h["a"])(P,r,c,!1,null,null,null)),L=E.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toggle_button"},[o("p",{staticClass:"label"},[t._v(t._s(t.label)+": ")]),o("p",[o("label",{staticClass:"switch"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.hotspotConfig.editable},on:{change:t.handleToggleChange}}),o("span",{staticClass:"slider round"})])])])},D=[],B={props:{label:String,hotspotConfig:Object},methods:{handleToggleChange:function(){this.$emit("change-editable",this.hotspotConfig)}}},I=B,S=(o("761c"),Object(h["a"])(I,A,D,!1,null,null,null)),M=S.exports,V={components:{"v-hotspot":L,toggle:M},data:function(){return{hotspots:[{image:"http://youimg1.c-ctrip.com/target/tg/154/775/815/aea886e20493478a9c2f628d86e34cfc.jpg",editable:!0,interactivity:"hover"},{image:"http://youimg1.c-ctrip.com/target/100ghk1433p0arl5c3A3B.jpg",editable:!1,interactivity:"click"},{image:"http://5b0988e595225.cdn.sohucs.com/images/20171109/920c1cdc5d294a0eb2e17f2b9e731542.jpeg",editable:!1,interactivity:"hover",data:[{Message:"A prepopulated hotspot with custom color",Title:"Vue Hotspot 1",x:33.3973,y:58.3333},{Message:"Another prepopulated hotspot with custom color",Title:"Vue Hotspot 2",x:53.3973,y:78.3333},{Message:"Another prepopulated hotspot with custom color",Title:"Vue Hotspot 3",x:73.3973,y:28.3333}],hotspotColor:"#85ce61",messageBoxColor:"#409eff",textColor:"#333"},{image:"http://pic.rmb.bdstatic.com/a2aa78b5e58cefb983dc2b9ea0ff9910.jpeg",editable:!1,interactivity:"none",data:[{Message:"A prepopulated hotspot with interactivity: none",Title:"Vue Hotspot 1",x:33.3973,y:68.3333},{Message:"Another prepopulated hotspot with interactivity: none",Title:"Vue Hotspot 2",x:73.3973,y:38.3333}]},{image:"http://img3.doubanio.com/view/note/l/public/p46521381.jpg",editable:!0,overlayText:"🚀 Customize your own overlay text! 😄"}]}},methods:{changeEditable:function(t){t&&(t.editable=!t.editable)},saveData:function(t){console.log(t)},afterDelete:function(){console.log("Do something after delete ...")}}},$=V,W=(o("f888"),Object(h["a"])($,a,i,!1,null,null,null)),z=W.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},7557:function(t,e,o){},"761c":function(t,e,o){"use strict";var n=o("55e9"),a=o.n(n);a.a},"843c":function(t,e,o){"use strict";var n=o("4040"),a=o.n(n);a.a},ab37:function(t,e,o){"use strict";var n=o("4065"),a=o.n(n);a.a},c612:function(t,e,o){t.exports=o.p+"img/logo.4bd586bc.png"},f888:function(t,e,o){"use strict";var n=o("163f"),a=o.n(n);a.a}});
//# sourceMappingURL=app.02553e94.js.map
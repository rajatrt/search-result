(function(e){function t(t){for(var i,c,s=t[0],o=t[1],l=t[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},a={app:0},r=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="search-result/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"251d":function(e,t,n){"use strict";var i=n("578e"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("grid",{attrs:{id:"grid",images:e.images,"selected-image":e.selectedImage},on:{"selected-image":function(t){return e.selectedImageHandler(t)}}}),e.showSidePanel?n("side-panel",{attrs:{"selected-image":e.selectedImage,index:e.index},on:{"close-side-panel":function(t){return e.closeSidePanel()},"navigate-image":function(t){return e.navigateHandler(t)}}}):e._e()],1)},r=[],c=(n("99af"),n("2909")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-wrapper"},e._l(e.images,(function(t,i){return n("div",{key:t,class:["image",t==e.selectedImage?"selected":""],attrs:{id:t.id},on:{click:function(n){return e.clickHandler({image:t,index:i})}}},[n("img",{attrs:{src:t.download_url}}),n("div",{staticClass:"label"},[e._v(e._s("-by "+t.author))])])})),0)},o=[],l={props:{selectedImage:{type:Object,default:function(){return{}}},images:{type:Array,default:function(){return[]}}},methods:{clickHandler:function(e){var t=e.image,n=e.index;this.$emit("selected-image",{image:t,index:n})}}},u=l,d=(n("7658"),n("2877")),f=Object(d["a"])(u,s,o,!1,null,"62822fbe",null),p=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-panel-wrapper"},[n("img",{attrs:{src:e.selectedImage.download_url}}),n("div",{staticClass:"cross-button",on:{click:function(t){return e.closeSidePanel()}}},[n("i",{staticClass:"fa fa-times"})]),n("div",{staticClass:"navigation-button"},[n("i",{staticClass:"fa fa-chevron-circle-left",on:{click:function(t){return e.navigate(-1)}}}),n("i",{staticClass:"fa fa-chevron-circle-right",on:{click:function(t){return e.navigate(1)}}})])])},m=[],h=(n("a9e3"),{props:{selectedImage:{type:Object,required:!0},index:{type:Number,required:!0}},methods:{closeSidePanel:function(){this.$emit("close-side-panel")},navigate:function(e){this.$emit("navigate-image",e)}}}),v=h,b=(n("251d"),Object(d["a"])(v,g,m,!1,null,"15ac2144",null)),y=b.exports,x=(n("d3b7"),"https://picsum.photos/"),w=function(e){var t="".concat(x,"v2/list?page=").concat(e);return fetch(t).then((function(e){return e.json()}))},O={name:"app",data:function(){return{showSidePanel:!1,images:{},selectedImage:{},index:-1,page:0,fetchData:!0}},mounted:function(){var e=this;w(this.page).then((function(t){e.images=t})),document.getElementById("grid").onscroll=function(){var t=document.getElementById("grid");t.scrollHeight-t.scrollTop===t.offsetHeight&&e.fetchData&&(e.fetchData=!1,e.page++,w(e.page).then((function(t){e.images=[].concat(Object(c["a"])(e.images),Object(c["a"])(t)),e.fetchData=!0})))}},components:{Grid:p,"side-panel":y},methods:{selectedImageHandler:function(e){var t=e.image,n=e.index;this.showSidePanel=!0,this.selectedImage=t,this.index=n},closeSidePanel:function(){this.showSidePanel=!1,this.selectedImage={},this.index=-1},navigateHandler:function(e){var t=this.index+e;t>=0&&t<this.images.length&&(this.selectedImage=this.images[t],this.index=t,document.getElementById(this.selectedImage.id).scrollIntoView({behavior:"smooth"}))}}},_=O,j=(n("5c0b"),Object(d["a"])(_,a,r,!1,null,null,null)),I=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(I)}}).$mount("#app")},"578e":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},7658:function(e,t,n){"use strict";var i=n("9a75"),a=n.n(i);a.a},"9a75":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.bb4be37a.js.map
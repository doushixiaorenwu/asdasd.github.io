(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fb276ea"],{"255e":function(t,e,a){"use strict";var n=a("75da"),i=a.n(n);i.a},"642f":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"b",(function(){return r})),a.d(e,"f",(function(){return u}));var n=a("f350");function i(t){return Object(n["a"])({url:"/mv/all",params:{area:t.area,type:t.type,order:t.order,limit:t.limit,offset:t.offset}})}function l(t){return Object(n["a"])({url:"/mv/detail",params:{mvid:t}})}function s(t){return Object(n["a"])({url:"/mv/url",params:{id:t}})}function o(t){return Object(n["a"])({url:"/mv/detail/info",params:{mvid:t}})}function c(t){return Object(n["a"])({url:"/simi/mv",params:{mvid:t}})}function r(t,e,a){return Object(n["a"])({url:"/comment/mv",params:{id:t,limit:e,offset:a}})}function u(t){return Object(n["a"])({url:"/comment",params:{t:t.t,type:t.type,id:t.id,content:t.content,commentId:t.commentId}})}},"6c23":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"video"}},[t.videos.length>0?a("ul",{staticClass:"box"},t._l(t.videos,(function(e){return a("li",{key:e.id,staticClass:"item",on:{click:function(a){return t.pushDetail(e.id)}}},[a("div",{staticClass:"header"},[a("img",{staticClass:"img",attrs:{src:e.img,alt:""}}),a("i",{staticClass:"icon el-icon-video-camera"},[a("span",[t._v(t._s(e.count))])]),a("div",{staticClass:"time"},[a("span",[t._v(t._s(t._f("dateFormat")(e.time,"MM:SS")))])]),a("i",{staticClass:"contentIcon el-icon-video-camera"})]),a("div",{staticClass:"box"},[a("div",{staticClass:"title ellipsis"},[t._v(t._s(e.title))]),a("div",{staticClass:"creator"},[t._v(t._s(e.creator))])])])})),0):t._e(),t.loadStatus?a("div",{staticClass:"load-bottom"},[a("text-loading")],1):a("div",[t._v("哎呀，还没写呢")])])},i=[],l={props:["videos","loadStatus"],created:function(){console.log(this.videos)},methods:{pushDetail:function(t){console.log(),"number"==typeof t||t.length<10?this.$router.push({path:"/mvDetail",query:{id:t}}):this.$router.push({path:"/videoDetail",query:{id:t}})}}},s=l,o=(a("255e"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"5d79b34e",null);e["a"]=c.exports},"75da":function(t,e,a){},"825a2":function(t,e,a){"use strict";var n=a("c213"),i=a.n(n);i.a},c117:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"load-more"},[t._t("default")],2)},i=[],l={data:function(){return{}},methods:{getScrollTop:function(){var t=0;return document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t},getClientHeight:function(){var t=0;return t=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight),t},getScrollHeight:function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},created:function(){},mounted:function(){var t=this;window.onscroll=function(){t.getScrollTop()+t.getClientHeight()>=t.getScrollHeight()&&t.$emit("scroll-state",!0)}},destroyed:function(){}},s=l,o=a("2877"),c=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=c.exports},c213:function(t,e,a){},dbd0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mv"},[a("div",{staticClass:"header"},[a("ul",{staticClass:"area"},t._l(t.areaList,(function(e){return a("li",{key:e.label,class:{active:t.area==e.label},on:{click:function(a){return t.shooseType("area",e.label)}}},[t._v(t._s(e.label))])})),0),a("ul",{staticClass:"classify"},t._l(t.classifys,(function(e){return a("li",{key:e.label,class:{active:t.classify==e.label},on:{click:function(a){return t.shooseType("classify",e.label)}}},[t._v(t._s(e.label))])})),0),a("ul",{staticClass:"sort"},t._l(t.sortList,(function(e){return a("li",{key:e.label,class:{active:t.sort==e.value},on:{click:function(a){return t.shooseType("sort",e.value)}}},[t._v(t._s(e.label))])})),0)]),a("load-more",{on:{"scroll-state":t.load}},[a("mv-list",{attrs:{videos:t.mvlist,loadStatus:t.loadStatus}})],1),a("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1)},i=[],l=(a("99af"),a("4160"),a("159b"),a("642f")),s=a("6a93"),o=a("6c23"),c=a("c117"),r={components:{MvList:o["a"],loadMore:c["a"]},data:function(){return{area:"全部",loadStatus:!1,isLoading:!0,areaList:[{label:"全部"},{label:"内地"},{label:"港台"},{label:"欧美"},{label:"日本"},{label:"韩国"}],classify:"全部",classifys:[{label:"全部"},{label:"官方版"},{label:"原生"},{label:"现场版"},{label:"网易出品"}],sort:"上升最快",sortList:[{value:"上升最快",label:"上升"},{value:"最热",label:"最热"},{value:"最新",label:"最新"}],params:{type:"全部",area:"全部",order:"上升最快",limit:20,offset:0},mvlist:[],total:0,currentPage:0}},created:function(){this.allMv()},methods:{allMv:function(){var t=this;Object(l["a"])(this.params).then((function(e){t.mvlist=t.mvlist.concat(t.filer(e.data.data)),e.data.hasMore?(t.loadStatus=!0,t.params.offset+=t.params.limit):t.loadStatus=!1,t.isLoading=!1}))},shooseType:function(t,e){console.log(t,e),console.log(this.params),"area"==t?(this.area=e,this.params.area=e):"classify"==t?(this.classify=e,this.params.type=e):"sort"==t&&(this.sort=e,this.params.order=e),this.allMv()},filer:function(t){var e=[];return t.forEach((function(t){e.push(new s["i"](t))})),e},load:function(){var t=this;this.loadStatus&&setTimeout((function(){t.allMv()}),1e3)}}},u=r,d=(a("825a2"),a("2877")),m=Object(d["a"])(u,n,i,!1,null,"0bdfce52",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1fb276ea.62fe887e.js.map
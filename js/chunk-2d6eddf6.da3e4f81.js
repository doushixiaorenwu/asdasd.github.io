(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d6eddf6"],{"18ef":function(t,e,n){"use strict";n.d(e,"j",(function(){return s})),n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return v}));var i=n("f350");function s(t){return Object(i["a"])({url:"/video/url",params:{id:t}})}function a(t){return Object(i["a"])({url:"/video/detail",params:{id:t}})}function c(t){return Object(i["a"])({url:"/video/detail/info",params:{vid:t}})}function o(t){return Object(i["a"])({url:"/comment/video",params:{id:t.id,limit:t.limit,offset:t.offset}})}function r(t){return Object(i["a"])({url:"/comment",params:{t:t.t,type:t.type,id:t.id,content:t.content,commentId:t.commentId}})}function m(t,e,n,s){return Object(i["a"])({url:"/comment/like",params:{id:t,cid:e,t:n,type:s}})}function l(t){return Object(i["a"])({url:"/related/allvideo",params:{id:t}})}function d(){return Object(i["a"])({url:"/video/group/list"})}function u(){return Object(i["a"])({url:"/video/category/list"})}function v(t){return Object(i["a"])({url:"video/timeline/all",params:{offset:t}})}},"1b71":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" comments-list"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._l(t.commentsList,(function(e){return n("div",{key:e.commentId,staticClass:"content"},[n("div",{staticClass:"user"},[n("img",{attrs:{src:e.user.avatarUrl,title:e.user.nickname}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"top"},[n("div",{staticClass:"user-info"},[n("span",[t._v(t._s(e.user.nickname))]),n("span",{staticClass:"time"},[t._v(t._s(t.utils.formTime(e.time)))])]),n("div",{staticClass:"resources"},[n("p",{staticClass:" iconfont icon-zanpress count",class:e.liked?t.active:"",on:{click:function(n){return t.praise(e.commentId,e.liked)}}},[n("span",[t._v(" "+t._s(e.likedCount))])]),n("i",[t._v("|")]),n("span",{staticClass:" iconfont icon-xinxi",on:{click:function(n){return t.commentHandle(e.commentId)}}})])]),n("div",{staticClass:"container"},[n("div",{staticClass:"comments"},[t._v(t._s(e.content))]),t._l(e.beReplied,(function(e){return n("div",{key:e.beRepliedCommentId,staticClass:"be-replied"},[n("span",[t._v("@ "+t._s(e.user.nickname)+" ")]),t._v(" : "+t._s(e.content)+" ")])}))],2),t.currentCommentId==e.commentId?n("comment-board",{attrs:{currentCommentId:t.currentCommentId},on:{commentSubmit:t.commentSubmit,cancelHandle:t.cancelHandle}}):t._e()],1)])}))],2)},s=[],a=n("975e"),c={components:{commentBoard:a["a"]},props:["commentsList","title","currentCommentId"],methods:{commentHandle:function(t){this.$emit("commentHandle",t)},cancelHandle:function(){this.$emit("cancelHandle")},commentSubmit:function(t){this.$emit("commentSubmit",t)},praise:function(t,e){this.$emit("praise",t,e)}}},o=c,r=(n("65e7"),n("2877")),m=Object(r["a"])(o,i,s,!1,null,"38212bdf",null);e["a"]=m.exports},"23cf":function(t,e,n){},"2b92":function(t,e,n){"use strict";var i=n("85c9"),s=n.n(i);s.a},"5c25":function(t,e,n){"use strict";var i=n("7041"),s=n.n(i);s.a},"65e7":function(t,e,n){"use strict";var i=n("23cf"),s=n.n(i);s.a},7041:function(t,e,n){},"85c9":function(t,e,n){},"975e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-board"},[n("div",{staticClass:"user"},[n("div",[n("span",{staticClass:" iconfont icon-gerenzhongxin"}),n("span",{staticClass:"text"},[t._v(t._s(t.user.nickname)+", 您好")])]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.currentCommentId,expression:"currentCommentId"}],staticClass:"btn",on:{click:t.cancelHandle}},[t._v("取消回复")])]),n("div",{staticClass:"board"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.user.avatarUrl,title:t.user.nickname}})]),n("div",{staticClass:"mess"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],attrs:{placeholder:"别愣着，写啊！"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}})])]),n("div",{staticClass:"sub"},[n("button",{staticClass:"btn",on:{click:t.commentSubmit}},[t._v("评论")])])])},s=[],a=(n("498a"),n("5530")),c=n("2f62"),o={data:function(){return{commentContent:""}},computed:Object(a["a"])({},Object(c["c"])(["loginState","userInfo"])),props:["currentCommentId"],created:function(){this.user=JSON.parse(sessionStorage.getItem("userInfo"))||this.userInfo},methods:{cancelHandle:function(){this.$emit("cancelHandle")},commentSubmit:function(){0!==this.commentContent.trim().length?this.$emit("commentSubmit",this.commentContent):this.$message.error("喂喂，写点东西啊")}}},r=o,m=(n("5c25"),n("2877")),l=Object(m["a"])(r,i,s,!1,null,"7478988f",null);e["a"]=l.exports},d617:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"limit"},[n("div",{staticClass:"detail "},[n("div",{staticClass:"left"},[n("div",{staticClass:"video "},[n("video",{attrs:{src:t.url,autoplay:"",controls:"controls",controlslist:"nodownload"}})]),n("h3",{staticClass:"title"},[t._v(t._s(t.detail.title))]),n("div",{staticClass:"tag"},t._l(t.detail.videoGroup,(function(e){return n("span",{key:e.id,staticClass:"item"},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"date"},[n("span",[t._v("发布 ："+t._s(t._f("dateFormat")(t.detail.publishTime,"YYYY-MM-DD")))]),n("span",[t._v("播放次数 : "+t._s(t.detail.playTime))])]),n("div",{staticClass:"resource"},[n("span",{staticClass:" iconfont icon-zan"},[t._v(" "+t._s(t.resource.likedCount))]),n("span",{staticClass:"iconfont icon-shoucang"},[t._v(" "+t._s(t.detail.subscribeCount))]),n("span",{staticClass:"iconfont icon-fenxiang"},[t._v(" "+t._s(t.resource.shareCount))])]),n("div",{staticClass:"comments"},[n("div",{staticClass:"title"},[n("span",{staticClass:"iconfont icon-zu"}),n("span",{staticClass:"text"},[t._v(" Comments")]),t._v(" | "),n("span",{staticClass:"text"},[t._v(" "+t._s(t.resource.commentCount)+" 评论")])]),t.currentCommentId?t._e():n("comment-board",{on:{commentSubmit:t.commentSubmit}}),t.hotComments.length>0?n("comment-list",{attrs:{currentCommentId:t.currentCommentId,title:"精彩评论",commentsList:t.hotComments},on:{commentHandle:t.commentHandle,cancelHandle:t.cancelHandle,commentSubmit:t.commentSubmit,praise:t.praise}}):t._e(),t.comments.length>0?n("comment-list",{attrs:{currentCommentId:t.currentCommentId,title:"最新评论",commentsList:t.comments},on:{commentHandle:t.commentHandle,cancelHandle:t.cancelHandle,commentSubmit:t.commentSubmit,praise:t.praise}}):t._e(),n("el-pagination",{staticClass:"page",attrs:{"hide-on-single-page":"","current-page":t.currentPage,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handlePage}})],1)]),n("div",{staticClass:"right"},[t.creator?n("div",{staticClass:"introduce"},[n("div",{staticClass:"title"},[t._v("视频简介")]),n("div",{staticClass:"user-info"},[n("img",{attrs:{src:t.creator.avatarUrl,alt:""}}),n("span",[t._v(t._s(t.creator.nickname))])]),t.detail.description?n("div",[t._v(t._s(t.detail.description))]):n("div",[t._v("视频暂无简介")])]):t._e(),n("div",{staticClass:"related"},[n("div",{staticClass:"title"},[t._v("相关视频")]),n("div",{attrs:{id:"video"}},t._l(t.relatedVideo,(function(e){return n("div",{key:e.vid,staticClass:"item",on:{click:function(n){return t.pushDetail(e.vid)}}},[n("div",{staticClass:"header"},[n("img",{staticClass:"img",attrs:{src:e.coverUrl,alt:""}}),n("i",{staticClass:"icon el-icon-video-camera"},[n("span",[t._v(t._s(e.playTime))])]),n("div",{staticClass:"time"},[n("span",[t._v(t._s(t._f("dateFormat")(e.durationms,"MM:SS")))])]),n("i",{staticClass:"contentIcon el-icon-video-camera"})]),n("div",{staticClass:"box"},[n("div",{staticClass:"titlename ellipsis"},[t._v(t._s(e.title))]),t._l(e.creator,(function(e){return n("div",{key:e.userId,staticClass:"creator"},[t._v(t._s(e.userName))])}))],2)])})),0)])])])])},s=[],a=n("975e"),c=n("1b71"),o=n("18ef"),r={components:{commentBoard:a["a"],commentList:c["a"]},data:function(){return{id:"",url:"",detail:[],creator:[],resource:{},comments:[],total:0,currentPage:0,limit:20,hotComments:[],currentCommentId:"",relatedVideo:[]}},created:function(){var t=this;this.$route.query.id&&(this.id=this.$route.query.id),Object(o["j"])(this.id).then((function(e){t.url=e.data.urls[0].url})),Object(o["g"])(this.id).then((function(e){t.id=e.data.data.vid,t.detail=e.data.data,t.creator=e.data.data.creator})),Object(o["h"])(this.id).then((function(e){t.resource=e.data})),this.getVideoComment(),Object(o["c"])(this.id).then((function(e){t.relatedVideo=e.data.data,console.log(t.relatedVideo)}))},methods:{commentHandle:function(t){this.currentCommentId=t},cancelHandle:function(){this.currentCommentId=""},commentSubmit:function(t){(new Date).getTime();var e={type:5,id:this.id,content:t};""==this.currentCommentId?e.t=1:(e.t=2,e.commentId=this.currentCommentId),Object(o["d"])(e).then((function(t){console.log(t)})),this.$message.error("301状态码")},handlePage:function(t){this.currentPage=t,console.log(this.currentPage),this.offset=(t-1)*this.limit,this.getVideoComment()},getVideoComment:function(){var t=this,e={id:this.id,limit:this.limit,offset:this.offset};Object(o["f"])(e).then((function(e){t.total=e.data.total,t.comments=e.data.comments||[],t.hotComments=e.data.hotComments||[]}))},praise:function(t,e){var n=0;n=e?0:1,Object(o["a"])(this.id,t,n,5).then((function(t){console.log(t)})),this.$message.error("301状态码")},pushDetail:function(t){this.$router.push({path:"/videoDetail",query:{id:t}}),window.location.reload()}}},m=r,l=(n("2b92"),n("2877")),d=Object(l["a"])(m,i,s,!1,null,"236f3550",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d6eddf6.da3e4f81.js.map
!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=503)}({503:function(t,e,n){t.exports=n(504)},504:function(t,e){!function(t,e,n){t.pageMixin={data:function(){var e={};return void 0!==t._vueData&&(e=t._vueData),e},mounted:function(){this.$nextTick(function(){this.scrollToBottom(),this.listenTradeStatus(),this.listenTradeChats(),this.bindLadda()})},methods:{bindLadda:function(){this.ladda=Ladda.create(n("#submit")[0])},typing:function(t){13!==t.keyCode||t.shiftKey||(t.preventDefault(),this.sendMessage())},sendMessage:function(){var t=this;this.ladda.start(),axios.post(this.text_endpoint,{message:this.text}).then(function(e){t.ladda.stop()}).catch(function(t){var e=t.response.data;if(e&&void 0!==e.errors){var a=1e3;n.each(e.errors,function(t,e){n.each(e,function(t,e){setTimeout(function(){toastr.error(e)},a)}),a+=1e3})}else toastr.error(e)}),this.text=""},listenTradeStatus:function(){var t=this;Echo.private("trade."+t.token).listen("TradeStatusUpdated",function(e){t.status=e.status,t.confirmed=e.confirmed,t.dispute_comment=e.dispute_comment,t.dispute_by=e.dispute_by,t.scrollToTop()})},uploadMedia:function(t){var e=this;this.ladda.start(),axios.post(this.media_endpoint,t).then(function(t){e.ladda.stop()}).catch(function(t){var e=t.response.data;if(e&&void 0!==e.errors){var a=1e3;n.each(e.errors,function(t,e){n.each(e,function(t,e){setTimeout(function(){toastr.error(e)},a)}),a+=1e3})}else toastr.error(e)})},selectFiles:function(){var t=new FormData,e=this.$refs.fileSelect;Array.prototype.forEach.call(e.files,function(n){t.append(e.name,n,n.name)}),this.uploadMedia(t,e.files)},listenTradeChats:function(){var t=this;Echo.private("trade."+t.token).listen("NewTradeChatMessage",function(e){t.chats=e.chats,t.scrollToBottom()})},scrollToTop:function(){n(e).ready(function(){n("#chat").animate({scrollTop:0},1e3)})},scrollToBottom:function(){n(e).ready(function(){var t=n("#chat");t.animate({scrollTop:t.prop("scrollHeight")},1e3)})},getProfileAvatar:function(t){var e="/images/objects/default-avatar.png";return t.profile&&t.profile.picture&&(e=t.profile.picture),e},displayContent:function(t,e){var n=void 0;return"text"===e?t:(n="<a href='"+t+"' class='btn btn-float btn-float-lg m-1 btn-success'>",n+="<i class='la la-cloud-download'></i><span> Download </span></a>",n+="<br/> File: <b>"+this.truncate(t.replace(/^.*[\\\/]/,""),8)+"</b>")},truncate:function(t,e){var n=t.substring(t.lastIndexOf(".")+1,t.length).toLowerCase(),a=t.replace("."+n,"");return a.length<=e?t:(a=a.substr(0,e)+(t.length>e?"[...]":""))+"."+n},formatDate:function(t){return moment(t,"YYYY-MM-DD").calendar(null,{sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"MMMM Do, YYYY"})}}}}(window,document,jQuery)}});
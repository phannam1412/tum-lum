/* fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function(p,f,c,r){var g=c(p),j=c(f),b=c.fancybox=function(){b.open.apply(this,arguments)},v=!1,e=f.createTouch!==r,i=function(d){return"string"===c.type(d)},h=function(a,d){d&&i(a)&&0<a.indexOf("%")&&(a=b.getViewport()[d]/100*parseInt(a,10));return Math.round(a)+"px"};c.extend(b,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!e,autoCenter:!e,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!1,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3000,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+(c.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:300,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:300,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){b.close(!0);a&&!c.isArray(a)&&(a=a instanceof c?c(a).get():[a]);b.isActive=!0;b.opts=c.extend(!0,{},b.defaults,d);c.isPlainObject(d)&&d.keys!==r&&(b.opts.keys=d.keys?c.extend({},b.defaults.keys,d.keys):!1);b.group=a;b._start(b.opts.index||0)},cancel:function(){b.coming&&!1===b.trigger("onCancel")||(b.coming=null,b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onabort=b.imgPreload.onerror=null))},close:function(a){b.cancel();b.current&&!1!==b.trigger("beforeClose")&&(b.unbindEvents(),!b.isOpen||a&&!0===a[0]?(c(".fancybox-wrap").stop().trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,c(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0).removeClass("fancybox-opened"),b.inner.css("overflow","hidden"),b.transitions[b.current.closeMethod]()))},play:function(a){var d=function(){clearTimeout(b.player.timer)},k=function(){d();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},l=function(){d();c("body").unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(b.player.isActive||a&&!1===a[0]){l()}else{if(b.current&&(b.current.loop||b.current.index<b.group.length-1)){b.player.isActive=!0,c("body").bind({"afterShow.player onUpdate.player":k,"onCancel.player beforeClose.player":l,"beforeLoad.player":d}),k(),b.trigger("onPlayStart")}}},next:function(){b.current&&b.jumpto(b.current.index+1)},prev:function(){b.current&&b.jumpto(b.current.index-1)},jumpto:function(a){b.current&&(a=parseInt(a,10),1<b.group.length&&b.current.loop&&(a>=b.group.length?a=0:0>a&&(a=b.group.length-1)),b.group[a]!==r&&(b.cancel(),b._start(a)))},reposition:function(a,d){var k;b.isOpen&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,b.wrap.stop(!0,!0).animate(k,200)):b.wrap.css(k))},update:function(a){b.isOpen&&(v||setTimeout(function(){var d=b.current,k=!a||a&&"orientationchange"===a.type;if(v&&(v=!1,d)){if(!a||"scroll"!==a.type||k){d.autoSize&&"iframe"!==d.type&&(b.inner.height("auto"),d.height=b.inner.height()),(d.autoResize||k)&&b._setDimension(),d.canGrow&&"iframe"!==d.type&&b.inner.height("auto")}(d.autoCenter||k)&&b.reposition(a);b.trigger("onUpdate")}},200),v=!0)},toggle:function(){b.isOpen&&(b.current.fitToView=!b.current.fitToView,b.update())},hideLoading:function(){j.unbind("keypress.fb");c("#fancybox-loading").remove()},showLoading:function(){b.hideLoading();j.bind("keypress.fb",function(a){27===a.keyCode&&(a.preventDefault(),b.cancel())});c('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body")},getViewport:function(){return{x:g.scrollLeft(),y:g.scrollTop(),w:e&&p.innerWidth?p.innerWidth:g.width(),h:e&&p.innerHeight?p.innerHeight:g.height()}},unbindEvents:function(){b.wrap&&b.wrap.unbind(".fb");j.unbind(".fb");g.unbind(".fb")},bindEvents:function(){var a=b.current,d=a.keys;a&&(g.bind("resize.fb orientationchange.fb"+(a.autoCenter&&!a.fixed?" scroll.fb":""),b.update),d&&j.bind("keydown.fb",function(k){var l;l=k.target||k.srcElement;if(!k.ctrlKey&&!k.altKey&&!k.shiftKey&&!k.metaKey&&(!l||!l.type&&!c(l).is("[contenteditable]"))){l=k.keyCode,-1<c.inArray(l,d.close)?(b.close(),k.preventDefault()):-1<c.inArray(l,d.next)?(b.next(),k.preventDefault()):-1<c.inArray(l,d.prev)&&(b.prev(),k.preventDefault())}}),c.fn.mousewheel&&a.mouseWheel&&1<b.group.length&&b.wrap.bind("mousewheel.fb",function(k,l){var m=k.target||null;if(0!==l&&(!m||0===m.clientHeight||m.scrollHeight===m.clientHeight&&m.scrollWidth===m.clientWidth)){k.preventDefault(),b[0<l?"prev":"next"]()}}))},trigger:function(a,d){var k,l=d||b[-1<c.inArray(a,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(l){c.isFunction(l[a])&&(k=l[a].apply(l,Array.prototype.slice.call(arguments,1)));if(!1===k){return !1}l.helpers&&c.each(l.helpers,function(m,n){if(n&&c.isPlainObject(b.helpers[m])&&c.isFunction(b.helpers[m][a])){b.helpers[m][a](n,l)}});c.event.trigger(a+".fb")}},isImage:function(d){return i(d)&&d.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)},isSWF:function(d){return i(d)&&d.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},k=b.group[a]||null,l,m,n;if(k&&(k.nodeType||k instanceof c)){l=!0,c.metadata&&(d=c(k).metadata())}d=c.extend(!0,{},b.opts,{index:a,element:k},c.isPlainObject(k)?k:d);c.each(["href","title","content","type"],function(o,q){d[q]=b.opts[q]||l&&c(k).attr(q)||d[q]||null});"number"===typeof d.margin&&(d.margin=[d.margin,d.margin,d.margin,d.margin]);d.modal&&c.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});b.coming=d;if(!1===b.trigger("beforeLoad")){b.coming=null}else{m=d.type;a=d.href||k;m||(l&&(m=c(k).data("fancybox-type"),m||(m=(m=k.className.match(/fancybox\.(\w+)/))?m[1]:null)),!m&&i(a)&&(b.isImage(a)?m="image":b.isSWF(a)?m="swf":a.match(/^#/)&&(m="inline")),m||(m=l?"inline":"html"),d.type=m);if("inline"===m||"html"===m){if(d.content||(d.content="inline"===m?c(i(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):k),!d.content||!d.content.length){m=null}}else{a||(m=null)}"ajax"===m&&i(a)&&(n=a.split(/\s+/,2),a=n.shift(),d.selector=n.shift());d.href=a;d.group=b.group;d.isDom=l;switch(m){case"image":b._loadImage();break;case"ajax":b._loadAjax();break;case"inline":case"iframe":case"swf":case"html":b._afterLoad();break;default:b._error("type")}}},_error:function(a){b.hideLoading();c.extend(b.coming,{type:"html",autoSize:!0,minWidth:0,minHeight:0,padding:15,hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width;b.coming.height=this.height;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;(a.complete===r||!a.complete)&&b.showLoading()},_loadAjax:function(){b.showLoading();b.ajaxLoad=c.ajax(c.extend({},b.coming.ajax,{url:b.coming.href,error:function(a,d){b.coming&&"abort"!==d?b._error("ajax",a):b.hideLoading()},success:function(a,d){"success"===d&&(b.coming.content=a,b._afterLoad())}}))},_preloadImages:function(){var a=b.group,d=b.current,k=a.length,l,m,o,n=Math.min(d.preload,k-1);if(d.preload&&!(2>a.length)){for(o=1;o<=n;o+=1){if(l=a[(d.index+o)%k],m=l.href||c(l).attr("href")||l,"image"===l.type||b.isImage(m)){(new Image).src=m}}}},_afterLoad:function(){b.hideLoading();!b.coming||!1===b.trigger("afterLoad",b.current)?b.coming=!1:(b.isOpened?(c(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0).removeClass("fancybox-opened"),b.inner.css("overflow","hidden"),b.transitions[b.current.prevMethod]()):(c(".fancybox-wrap").stop().trigger("onReset").remove(),b.trigger("afterClose")),b.unbindEvents(),b.isOpen=!1,b.current=b.coming,b.wrap=c(b.current.tpl.wrap).addClass("fancybox-"+(e?"mobile":"desktop")+" fancybox-type-"+b.current.type+" fancybox-tmp "+b.current.wrapCSS).appendTo("body"),b.skin=c(".fancybox-skin",b.wrap).css("padding",h(b.current.padding)),b.outer=c(".fancybox-outer",b.wrap),b.inner=c(".fancybox-inner",b.wrap),b._setContent())},_setContent:function(){var a=b.current,d=a.content,k=a.type,l=a.minWidth,m=a.minHeight,o=a.maxWidth,n=a.maxHeight;switch(k){case"inline":case"ajax":case"html":a.selector?d=c("<div>").html(d).find(a.selector):d instanceof c&&(d.parent().hasClass("fancybox-inner")&&d.parents(".fancybox-wrap").unbind("onReset"),d=d.show().detach(),c(b.wrap).bind("onReset",function(){d.appendTo("body").hide()}));a.autoSize&&(l=c('<div class="fancybox-wrap '+b.current.wrapCSS+' fancybox-tmp"></div>').appendTo("body").css({minWidth:h(l,"w"),minHeight:h(m,"h"),maxWidth:h(o,"w"),maxHeight:h(n,"h")}).append(d),a.width=l.width(),a.height=l.height(),l.width(b.current.width),l.height()>a.height&&(l.width(a.width+1),a.width=l.width(),a.height=l.height()),d=l.contents().detach(),l.remove());break;case"image":d=a.tpl.image.replace("{href}",a.href);a.aspectRatio=!0;break;case"swf":d=a.tpl.swf.replace(/\{width\}/g,a.width).replace(/\{height\}/g,a.height).replace(/\{href\}/g,a.href);break;case"iframe":d=c(a.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",a.scrolling).attr("src",a.href),a.scrolling=e?"scroll":"auto"}if("image"===k||"swf"===k){a.autoSize=!1,a.scrolling="visible"}"iframe"===k&&a.autoSize?(b.showLoading(),b._setDimension(),b.inner.css("overflow",a.scrolling),d.bind({onCancel:function(){c(this).unbind();b._afterZoomOut()},load:function(){b.hideLoading();try{this.contentWindow.document.location&&(b.current.height=c(this).contents().find("body").height())}catch(q){b.current.autoSize=!1}b[b.isOpen?"_afterZoomIn":"_beforeShow"]()}}).appendTo(b.inner)):(b.inner.append(d),b._beforeShow())},_beforeShow:function(){b.coming=null;b.trigger("beforeShow");b._setDimension();b.wrap.hide().removeClass("fancybox-tmp");b.bindEvents();b._preloadImages();b.transitions[b.isOpened?b.current.nextMethod:b.current.openMethod]()},_setDimension:function(){var a=b.wrap,d=b.inner,n=b.current,o=b.getViewport(),q=n.margin,t=2*n.padding,s=n.width,u=n.height,A=n.maxWidth+t,w=n.maxHeight+t,x=n.minWidth+t,y=n.minHeight+t,z;o.w-=q[1]+q[3];o.h-=q[0]+q[2];i(s)&&0<s.indexOf("%")&&(s=(o.w-t)*parseFloat(s)/100);i(u)&&0<u.indexOf("%")&&(u=(o.h-t)*parseFloat(u)/100);q=s/u;s+=t;u+=t;n.fitToView&&(A=Math.min(o.w,A),w=Math.min(o.h,w));if(n.aspectRatio){if(s>A&&(s=A,u=(s-t)/q+t),u>w&&(u=w,s=(u-t)*q+t),s<x&&(s=x,u=(s-t)/q+t),u<y){u=y,s=(u-t)*q+t}}else{s=Math.max(x,Math.min(s,A)),u=Math.max(y,Math.min(u,w))}s=Math.round(s);u=Math.round(u);c(a.add(d)).width("auto").height("auto");d.width(s-t).height(u-t);a.width(s);z=a.height();if(s>A||z>w){for(;(s>A||z>w)&&s>x&&z>y;){u-=10,n.aspectRatio?(s=Math.round((u-t)*q+t),s<x&&(s=x,u=(s-t)/q+t)):s-=10,d.width(s-t).height(u-t),a.width(s),z=a.height()}}n.dim={width:h(s),height:h(z)};n.canGrow=n.autoSize&&u>y&&u<w;n.canShrink=!1;n.canExpand=!1;if(s-t<n.width||u-t<n.height){n.canExpand=!0}else{if((s>o.w||z>o.h)&&s>x&&u>y){n.canShrink=!0}}b.innerSpace=z-t-d.height()},_getPosition:function(a){var k=b.current,m=b.getViewport(),n=k.margin,l=b.wrap.width()+n[1]+n[3],q=b.wrap.height()+n[0]+n[2],o={position:"absolute",top:n[0]+m.y,left:n[3]+m.x};k.autoCenter&&k.fixed&&!a&&q<=m.h&&l<=m.w&&(o={position:"fixed",top:n[0],left:n[3]});o.top=h(Math.max(o.top,o.top+(m.h-q)*k.topRatio));o.left=h(Math.max(o.left,o.left+0.5*(m.w-l)));return o},_afterZoomIn:function(){var a=b.current,d=a?a.scrolling:"no";if(a&&(b.isOpen=b.isOpened=!0,b.wrap.addClass("fancybox-opened"),b.inner.css("overflow","yes"===d?"scroll":"no"===d?"hidden":d),b.trigger("afterShow"),b.update(),(a.closeClick||a.nextClick)&&b.inner.css("cursor","pointer").bind("click.fb",function(k){if(!c(k.target).is("a")&&!c(k.target).parent().is("a")){b[a.closeClick?"close":"next"]()}}),a.closeBtn&&c(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",b.close),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&c(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&c(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.opts.autoPlay&&!b.player.isActive)){b.opts.autoPlay=!1,b.play()}},_afterZoomOut:function(){var a=b.current;b.wrap.trigger("onReset").remove();c.extend(b,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,k=a.padding,l=c(a.orig),m={},o=50,n=50;!l.length&&a.isDom&&c(d).is(":visible")&&(l=c(d).find("img:first"),l.length||(l=c(d)));l.length?(m=l.offset(),l.is("img")&&(o=l.outerWidth(),n=l.outerHeight())):(a=b.getViewport(),m.top=a.y+0.5*(a.h-n),m.left=a.x+0.5*(a.w-o));return m={top:h(m.top-k),left:h(m.left-k),width:h(o+2*k),height:h(n+2*k)}},step:function(a,k){var m=k.prop,l,n;if("width"===m||"height"===m){l=Math.ceil(a-2*b.current.padding),"height"===m&&(n=(a-k.start)/(k.end-k.start),k.start>k.end&&(n=1-n),l-=b.innerSpace*n),b.inner[m](l)}},zoomIn:function(){var a=b.wrap,d=b.current,k=d.openEffect,l="elastic"===k,m=c.extend({},d.dim,b._getPosition(l)),n=c.extend({opacity:1},m);delete n.position;l?(m=this.getOrigPosition(),d.openOpacity&&(m.opacity=0),b.outer.add(b.inner).width("auto").height("auto")):"fade"===k&&(m.opacity=0);a.css(m).show().animate(n,{duration:"none"===k?0:d.openSpeed,easing:d.openEasing,step:l?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.wrap,k=b.current,l=k.openEffect,m="elastic"===l,n={opacity:0};m&&("fixed"===a.css("position")&&a.css(b._getPosition(!0)),n=this.getOrigPosition(),k.closeOpacity&&(n.opacity=0));a.animate(n,{duration:"none"===l?0:k.closeSpeed,easing:k.closeEasing,step:m?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.wrap,k=b.current,l=k.nextEffect,m="elastic"===l,n=b._getPosition(m),o={opacity:1};n.opacity=0;m&&(n.top=h(parseInt(n.top,10)-200),o.top="+=200px");a.css(n).show().animate(o,{duration:"none"===l?0:k.nextSpeed,easing:k.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.wrap,d=b.current,k=d.prevEffect,l={opacity:0};a.removeClass("fancybox-opened");"elastic"===k&&(l.top="+=200px");a.animate(l,{duration:"none"===k?0:d.prevSpeed,easing:d.prevEasing,complete:function(){c(this).trigger("onReset").remove()}})}};b.helpers.overlay={overlay:null,update:function(){var d,k;this.overlay.width("100%").height("100%");c.browser.msie||e?(d=Math.max(f.documentElement.scrollWidth,f.body.scrollWidth),k=Math.max(f.documentElement.offsetWidth,f.body.offsetWidth),d=d<k?g.width():d):d=j.width();this.overlay.width(d).height(j.height())},beforeShow:function(a){this.overlay||(a=c.extend(!0,{},b.defaults.helpers.overlay,a),this.overlay=c('<div id="fancybox-overlay"></div>').css(a.css).appendTo("body"),a.closeClick&&this.overlay.bind("click.fb",b.close),b.current.fixed&&!e?this.overlay.addClass("overlay-fixed"):(this.update(),this.onUpdate=function(){this.update()}),this.overlay.fadeTo(a.speedIn,a.opacity))},afterClose:function(d){this.overlay&&this.overlay.fadeOut(d.speedOut||0,function(){c(this).remove()});this.overlay=null}};b.helpers.title={beforeShow:function(a){var d;if(d=b.current.title){d=c('<div class="fancybox-title fancybox-title-'+a.type+'-wrap">'+d+"</div>").appendTo("body"),"float"===a.type&&(d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(parseInt(d.css("margin-bottom"),10))),d.appendTo("over"===a.type?b.inner:"outside"===a.type?b.wrap:b.skin)}}};c.fn.fancybox=function(a){var d=c(this),k=this.selector||"",l,m=function(n){var o=this,q=l,s;!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey&&!c(o).is(".fancybox-wrap")&&(n.preventDefault(),n=a.groupAttr||"data-fancybox-group",s=c(o).attr(n),s||(n="rel",s=o[n]),s&&""!==s&&"nofollow"!==s&&(o=k.length?c(k):d,o=o.filter("["+n+'="'+s+'"]'),q=o.index(this)),a.index=q,b.open(o,a))},a=a||{};l=a.index||0;k?j.undelegate(k,"click.fb-start").delegate(k,"click.fb-start",m):d.unbind("click.fb-start").bind("click.fb-start",m);return this};c(f).ready(function(){b.defaults.fixed=c.support.fixedPosition||!(c.browser.msie&&6>=c.browser.version)&&!e})})(window,document,jQuery);
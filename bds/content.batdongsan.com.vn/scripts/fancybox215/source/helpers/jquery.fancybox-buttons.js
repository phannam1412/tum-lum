/*
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
(function(a){var b=a.fancybox;b.helpers.buttons={defaults:{skipSingle:false,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(d,c){if(d.skipSingle&&c.group.length<2){c.helpers.buttons=false;c.closeBtn=true;return}c.margin[d.position==="bottom"?2:0]+=30},onPlayStart:function(){if(this.buttons){this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")}},onPlayEnd:function(){if(this.buttons){this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")}},afterShow:function(e,d){var c=this.buttons;if(!c){this.list=a(e.tpl).addClass(e.position).appendTo("body");c={prev:this.list.find(".btnPrev").click(b.prev),next:this.list.find(".btnNext").click(b.next),play:this.list.find(".btnPlay").click(b.play),toggle:this.list.find(".btnToggle").click(b.toggle),close:this.list.find(".btnClose").click(b.close)}}if(d.index>0||d.loop){c.prev.removeClass("btnDisabled")}else{c.prev.addClass("btnDisabled")}if(d.loop||d.index<d.group.length-1){c.next.removeClass("btnDisabled");c.play.removeClass("btnDisabled")}else{c.next.addClass("btnDisabled");c.play.addClass("btnDisabled")}this.buttons=c;this.onUpdate(e,d)},onUpdate:function(d,c){var e;if(!this.buttons){return}e=this.buttons.toggle.removeClass("btnDisabled btnToggleOn");if(c.canShrink){e.addClass("btnToggleOn")}else{if(!c.canExpand){e.addClass("btnDisabled")}}},beforeClose:function(){if(this.list){this.list.remove()}this.list=null;this.buttons=null}}}(jQuery));
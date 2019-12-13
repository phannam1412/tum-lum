﻿(function ($) {
$.fn.jCarouselLite = function (o) {
o = $.extend({ btnPrev: null, btnNext: null, btnGo: null, mouseWheel: false, auto: null, hoverPause: false, speed: 200, easing: null, vertical: false, circular: true, visible: 3, start: 0, scroll: 1, fade: false, beforeStart: null, afterEnd: null }, o || {});
return this.each(function () {
var running = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width"; var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;
if (o.circular) {
ul.prepend(tLi.slice(tl - v + 1).clone()).append(tLi.slice(0, o.scroll).clone());
o.start += v - 1;
}
var li = $("li", ul), itemLength = li.size(), curr = o.start; div.css("visibility", "visible");
li.css({ overflow: "hidden", float: o.vertical ? "none" : "left" });
ul.css({ margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1" });
div.css({ overflow: "hidden", position: "relative", "z-index": "2", left: "0px" });
var liSize = o.vertical ? height(li) : width(li);
var ulSize = liSize * itemLength;
var divSize = liSize * v; li.css({ width: li.width(), height: li.height() });
ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));
div.css(sizeCss, divSize + "px");
if (o.btnPrev) {
$(o.btnPrev).click(function () { return go(curr - o.scroll); }); if (o.hoverPause) { $(o.btnPrev).hover(function () { stopAuto(); }, function () { startAuto(); }); }
}
if (o.btnNext) {
$(o.btnNext).click(function () { return go(curr + o.scroll); }); if (o.hoverPause) { $(o.btnNext).hover(function () { stopAuto(); }, function () { startAuto(); }); }
}
if (o.btnGo)
$.each(o.btnGo, function (i, val) { $(val).click(function () { return go(o.circular ? o.visible + i : i); }); });
if (o.mouseWheel && div.mousewheel)
div.mousewheel(function (e, d) { return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll); });
var autoInterval;
function startAuto() {
stopAuto();
autoInterval = setInterval(function () { go(curr - o.scroll); }, 5000);
};
function stopAuto() { clearInterval(autoInterval); };
if (o.auto) {
if (o.hoverPause) { div.hover(function () { stopAuto(); }, function () { startAuto(); }); }
startAuto();
};
function vis() { return li.slice(curr).slice(0, v); };
function go(to) {
if (!running) {
if (o.beforeStart)
o.beforeStart.call(this, vis()); if (o.circular) { if (to < 0) { ul.css(animCss, -((curr + tl) * liSize) + "px"); curr = to + tl; } else if (to > itemLength - v) { ul.css(animCss, -((curr - tl) * liSize) + "px"); curr = to - tl; } else curr = to; } else { if (to < 0 || to > itemLength - v) return; else curr = to; }
running = true; ul.animate(animCss == "left" ? { left: -(curr * liSize) } : { top: -(curr * liSize) }, o.speed, o.easing, function () {
if (o.afterEnd)
o.afterEnd.call(this, vis()); running = false;
}); if (!o.circular) {
$(o.btnPrev + "," + o.btnNext).removeClass("disabled"); $((curr - o.scroll < 0 && o.btnPrev)
|| (curr + o.scroll > itemLength - v && o.btnNext)
|| []).addClass("disabled");
}
}
return false;
};
});
};
function css(el, prop) {
if (el.length > 0)
return parseInt($.css(el[0], prop)) || 0;
else
return 0;
};
function width(el) {
if (el.length > 0)
return el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
else
return 0;
};
function height(el) {
if (el.length > 0)
return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
else
return 0;
};
})(jQuery);

/* global modules:false */

modules.define('jquery__jQueryFormStyler', ['jquery'], function(provide, $) {
	window.jQuery = $;
	(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?module.exports=c(require("jquery")):c(jQuery)})(function(c){c.fn.styler=function(y){var d=c.extend({wrapper:"form",idSuffix:"-styler",filePlaceholder:"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",fileBrowse:"\u041e\u0431\u0437\u043e\u0440...",selectPlaceholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
		selectSearchPlaceholder:"\u041f\u043e\u0438\u0441\u043a...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}},y);return this.each(function(){function A(){var c="",u="",b="",l="";void 0!==a.attr("id")&&""!==a.attr("id")&&(c=' id="'+a.attr("id")+d.idSuffix+'"');void 0!==a.attr("title")&&""!==a.attr("title")&&(u=' title="'+a.attr("title")+'"');void 0!==a.attr("class")&&""!==a.attr("class")&&(b=
		" "+a.attr("class"));var e=a.data(),g;for(g in e)""!==e[g]&&(l+=" data-"+g+'="'+e[g]+'"');this.id=c+l;this.title=u;this.classes=b}var a=c(this),E=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i)?!0:!1,y=navigator.userAgent.match(/Android/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i)?!0:!1;if(a.is(":checkbox"))a.each(function(){if(1>a.parent("div.jq-checkbox").length){var d=function(){var d=new A,b=c("<div"+d.id+' class="jq-checkbox'+d.classes+
	'"'+d.title+'><div class="jq-checkbox__div"></div></div>');a.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(b).prependTo(b);b.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"});a.is(":checked")&&b.addClass("checked");a.is(":disabled")&&b.addClass("disabled");b.on("click.styler",function(){b.is(".disabled")||
	(a.is(":checked")?(a.prop("checked",!1),b.removeClass("checked")):(a.prop("checked",!0),b.addClass("checked")),a.change());return!1});a.closest("label").add('label[for="'+a.attr("id")+'"]').click(function(a){c(a.target).is("a")||(b.click(),a.preventDefault())});a.on("change.styler",function(){a.is(":checked")?b.addClass("checked"):b.removeClass("checked")}).on("keydown.styler",function(a){32==a.which&&b.click()}).on("focus.styler",function(){b.is(".disabled")||b.addClass("focused")}).on("blur.styler",
		function(){b.removeClass("focused")})};d();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();d()})}});else if(a.is(":radio"))a.each(function(){if(1>a.parent("div.jq-radio").length){var t=function(){var u=new A,b=c("<div"+u.id+' class="jq-radio'+u.classes+'"'+u.title+'><div class="jq-radio__div"></div></div>');a.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(b).prependTo(b);b.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none",
		"-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"});a.is(":checked")&&b.addClass("checked");a.is(":disabled")&&b.addClass("disabled");b.on("click.styler",function(){b.is(".disabled")||(b.closest(d.wrapper).find('input[name="'+a.attr("name")+'"]').prop("checked",!1).parent().removeClass("checked"),a.prop("checked",!0).parent().addClass("checked"),a.change());return!1});a.closest("label").add('label[for="'+a.attr("id")+'"]').click(function(a){c(a.target).is("a")||
	(b.click(),a.preventDefault())});a.on("change.styler",function(){a.parent().addClass("checked")}).on("focus.styler",function(){b.is(".disabled")||b.addClass("focused")}).on("blur.styler",function(){b.removeClass("focused")})};t();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();t()})}});else if(a.is(":file"))a.css({position:"absolute",top:0,right:0,width:"100%",height:"100%",opacity:0,margin:0,padding:0}).each(function(){if(1>a.parent("div.jq-file").length){var t=function(){var u=
		new A,b=a.data("placeholder");void 0===b&&(b=d.filePlaceholder);var l=a.data("browse");if(void 0===l||""===l)l=d.fileBrowse;var e=c("<div"+u.id+' class="jq-file'+u.classes+'"'+u.title+' style="display: inline-block; position: relative; overflow: hidden"></div>'),g=c('<div class="jq-file__name">'+b+"</div>").appendTo(e);c('<div class="jq-file__browse">'+l+"</div>").appendTo(e);a.after(e);e.append(a);a.is(":disabled")&&e.addClass("disabled");a.on("change.styler",function(){var c=a.val();if(a.is("[multiple]"))for(var c=
		"",F=a[0].files,p=0;p<F.length;p++)c+=(0<p?", ":"")+F[p].name;g.text(c.replace(/.+[\\\/]/,""));""===c?(g.text(b),e.removeClass("changed")):e.addClass("changed")}).on("focus.styler",function(){e.addClass("focused")}).on("blur.styler",function(){e.removeClass("focused")}).on("click.styler",function(){e.removeClass("focused")})};t();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();t()})}});else if(a.is("select"))a.each(function(){if(1>a.parent("div.jqselect").length){var t=function(){function u(a){a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",
		function(a){var b=null;"mousewheel"==a.type?b=-1*a.originalEvent.wheelDelta:"DOMMouseScroll"==a.type&&(b=40*a.originalEvent.detail);b&&(a.stopPropagation(),a.preventDefault(),c(this).scrollTop(b+c(this).scrollTop()))})}function b(){for(var a=0,c=g.length;a<c;a++){var b="",d="",e=b="",s="",q="",x="";g.eq(a).prop("selected")&&(d="selected sel");g.eq(a).is(":disabled")&&(d="disabled");g.eq(a).is(":selected:disabled")&&(d="selected sel disabled");void 0!==g.eq(a).attr("class")&&(s=" "+g.eq(a).attr("class"),
		x=' data-jqfs-class="'+g.eq(a).attr("class")+'"');var w=g.eq(a).data(),f;for(f in w)""!==w[f]&&(e+=" data-"+f+'="'+w[f]+'"');""!==d+s&&(b=' class="'+d+s+'"');b="<li"+x+e+b+">"+g.eq(a).html()+"</li>";g.eq(a).parent().is("optgroup")&&(void 0!==g.eq(a).parent().attr("class")&&(q=" "+g.eq(a).parent().attr("class")),b="<li"+x+e+' class="'+d+s+" option"+q+'">'+g.eq(a).html()+"</li>",g.eq(a).is(":first-child")&&(b='<li class="optgroup'+q+'">'+g.eq(a).parent().attr("label")+"</li>"+b));t+=b}}function l(){var e=
		new A,p="",n=a.data("placeholder"),h=a.data("search"),l=a.data("search-limit"),s=a.data("search-not-found"),q=a.data("search-placeholder"),x=a.data("z-index"),w=a.data("smart-positioning");void 0===n&&(n=d.selectPlaceholder);if(void 0===h||""===h)h=d.selectSearch;if(void 0===l||""===l)l=d.selectSearchLimit;if(void 0===s||""===s)s=d.selectSearchNotFound;void 0===q&&(q=d.selectSearchPlaceholder);if(void 0===x||""===x)x=d.singleSelectzIndex;if(void 0===w||""===w)w=d.selectSmartPositioning;var f=c("<div"+
	e.id+' class="jq-selectbox jqselect'+e.classes+'" style="display: inline-block; position: relative; z-index:'+x+'"><div class="jq-selectbox__select"'+e.title+' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');a.css({margin:0,padding:0}).after(f).prependTo(f);var G=c("div.jq-selectbox__select",f),v=c("div.jq-selectbox__select-text",f),e=g.filter(":selected");b();h&&(p='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+
	q+'"></div><div class="jq-selectbox__not-found">'+s+"</div>");var k=c('<div class="jq-selectbox__dropdown" style="position: absolute">'+p+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+t+"</ul></div>");f.append(k);var r=c("ul",k),m=c("li",k),z=c("input",k),y=c("div.jq-selectbox__not-found",k).hide();m.length<l&&z.parent().hide();""===a.val()?v.text(n).addClass("placeholder"):v.text(e.text());var B=0,H=0;m.each(function(){var a=c(this);a.css({display:"inline-block"});
		a.innerWidth()>B&&(B=a.innerWidth(),H=a.width());a.css({display:""})});p=f.clone().appendTo("body").width("auto");h=p.find("select").outerWidth();p.remove();h==f.width()&&v.width(H);B>f.width()&&k.width(B);v.is(".placeholder")&&v.width()>B&&v.width(v.width());""===g.first().text()&&""!==a.data("placeholder")&&m.first().hide();a.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var I=f.outerHeight(),C=z.outerHeight(),D=r.css("max-height"),p=m.filter(".selected");1>p.length&&
	m.first().addClass("selected sel");void 0===m.data("li-height")&&m.data("li-height",m.outerHeight());var J=k.css("top");"auto"==k.css("left")&&k.css({left:0});"auto"==k.css("top")&&k.css({top:I});k.hide();p.length&&(g.first().text()!=e.text()&&f.addClass("changed"),f.data("jqfs-class",p.data("jqfs-class")),f.addClass(p.data("jqfs-class")));if(a.is(":disabled"))return f.addClass("disabled"),!1;G.click(function(){c("div.jq-selectbox").filter(".opened").length&&d.onSelectClosed.call(c("div.jq-selectbox").filter(".opened"));
		a.focus();if(!E){var b=c(window),q=m.data("li-height"),e=f.offset().top,p=b.height()-I-(e-b.scrollTop()),h=a.data("visible-options");if(void 0===h||""===h)h=d.selectVisibleOptions;var n=5*q,l=q*h;0<h&&6>h&&(n=l);0===h&&(l="auto");var h=function(){k.height("auto").css({bottom:"auto",top:J});var a=function(){r.css("max-height",Math.floor((p-20-C)/q)*q)};a();r.css("max-height",l);"none"!=D&&r.css("max-height",D);p<k.outerHeight()+20&&a()},v=function(){k.height("auto").css({top:"auto",bottom:J});var a=
			function(){r.css("max-height",Math.floor((e-b.scrollTop()-20-C)/q)*q)};a();r.css("max-height",l);"none"!=D&&r.css("max-height",D);e-b.scrollTop()-20<k.outerHeight()+20&&a()};!0===w||1===w?p>n+C+20?(h(),f.removeClass("dropup").addClass("dropdown")):(v(),f.removeClass("dropdown").addClass("dropup")):(!1===w||0===w)&&p>n+C+20&&(h(),f.removeClass("dropup").addClass("dropdown"));f.offset().left+k.outerWidth()>b.width()&&k.css({left:"auto",right:0});c("div.jqselect").css({zIndex:x-1}).removeClass("opened");
			f.css({zIndex:x});k.is(":hidden")?(c("div.jq-selectbox__dropdown:visible").hide(),k.show(),f.addClass("opened focused"),d.onSelectOpened.call(f)):(k.hide(),f.removeClass("opened dropup dropdown"),c("div.jq-selectbox").filter(".opened").length&&d.onSelectClosed.call(f));z.length&&(z.val("").keyup(),y.hide(),z.keyup(function(){var b=c(this).val();m.each(function(){c(this).html().match(RegExp(".*?"+b+".*?","i"))?c(this).show():c(this).hide()});""===g.first().text()&&""!==a.data("placeholder")&&m.first().hide();
				1>m.filter(":visible").length?y.show():y.hide()}));m.filter(".selected").length&&(""===a.val()?r.scrollTop(0):(0!==r.innerHeight()/q%2&&(q/=2),r.scrollTop(r.scrollTop()+m.filter(".selected").position().top-r.innerHeight()/2+q)));u(r);return!1}});m.hover(function(){c(this).siblings().removeClass("selected")});m.filter(".selected").text();m.filter(":not(.disabled):not(.optgroup)").click(function(){a.focus();var b=c(this),q=b.text();if(!b.is(".selected")){var e=b.index(),e=e-b.prevAll(".optgroup").length;
		b.addClass("selected sel").siblings().removeClass("selected sel");g.prop("selected",!1).eq(e).prop("selected",!0);v.text(q);f.data("jqfs-class")&&f.removeClass(f.data("jqfs-class"));f.data("jqfs-class",b.data("jqfs-class"));f.addClass(b.data("jqfs-class"));a.change()}k.hide();f.removeClass("opened dropup dropdown");d.onSelectClosed.call(f)});k.mouseout(function(){c("li.sel",k).addClass("selected")});a.on("change.styler",function(){v.text(g.filter(":selected").text()).removeClass("placeholder");m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
		g.first().text()!=m.filter(".selected").text()?f.addClass("changed"):f.removeClass("changed")}).on("focus.styler",function(){f.addClass("focused");c("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){f.removeClass("focused")}).on("keydown.styler keyup.styler",function(c){var b=m.data("li-height");""===a.val()?v.text(n).addClass("placeholder"):v.text(g.filter(":selected").text());m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
		if(38==c.which||37==c.which||33==c.which||36==c.which)""===a.val()?r.scrollTop(0):r.scrollTop(r.scrollTop()+m.filter(".selected").position().top);40!=c.which&&39!=c.which&&34!=c.which&&35!=c.which||r.scrollTop(r.scrollTop()+m.filter(".selected").position().top-r.innerHeight()+b);13==c.which&&(c.preventDefault(),k.hide(),f.removeClass("opened dropup dropdown"),d.onSelectClosed.call(f))}).on("keydown.styler",function(a){32==a.which&&(a.preventDefault(),G.click())});c(document).on("click",function(a){c(a.target).parents().hasClass("jq-selectbox")||
	"OPTION"==a.target.nodeName||(c("div.jq-selectbox").filter(".opened").length&&d.onSelectClosed.call(c("div.jq-selectbox").filter(".opened")),z.length&&z.val("").keyup(),k.hide().find("li.sel").addClass("selected"),f.removeClass("focused opened dropup dropdown"))})}function e(){var e=new A,d=c("<div"+e.id+' class="jq-select-multiple jqselect'+e.classes+'"'+e.title+' style="display: inline-block; position: relative"></div>');a.css({margin:0,padding:0}).after(d);b();d.append("<ul>"+t+"</ul>");var n=
		c("ul",d).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),h=c("li",d).attr("unselectable","on"),e=a.attr("size"),l=n.outerHeight(),s=h.outerHeight();void 0!==e&&0<e?n.css({height:s*e}):n.css({height:4*s});l>d.height()&&(n.css("overflowY","scroll"),u(n),h.filter(".selected").length&&n.scrollTop(n.scrollTop()+h.filter(".selected").position().top));a.prependTo(d).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});if(a.is(":disabled"))d.addClass("disabled"),
		g.each(function(){c(this).is(":selected")&&h.eq(c(this).index()).addClass("selected")});else if(h.filter(":not(.disabled):not(.optgroup)").click(function(b){a.focus();var d=c(this);b.ctrlKey||b.metaKey||d.addClass("selected");b.shiftKey||d.addClass("first");b.ctrlKey||(b.metaKey||b.shiftKey)||d.siblings().removeClass("selected first");if(b.ctrlKey||b.metaKey)d.is(".selected")?d.removeClass("selected first"):d.addClass("selected first"),d.siblings().removeClass("first");if(b.shiftKey){var e=!1,f=!1;
			d.siblings().removeClass("selected").siblings(".first").addClass("selected");d.prevAll().each(function(){c(this).is(".first")&&(e=!0)});d.nextAll().each(function(){c(this).is(".first")&&(f=!0)});e&&d.prevAll().each(function(){if(c(this).is(".selected"))return!1;c(this).not(".disabled, .optgroup").addClass("selected")});f&&d.nextAll().each(function(){if(c(this).is(".selected"))return!1;c(this).not(".disabled, .optgroup").addClass("selected")});1==h.filter(".selected").length&&d.addClass("first")}g.prop("selected",
			!1);h.filter(".selected").each(function(){var a=c(this),b=a.index();a.is(".option")&&(b-=a.prevAll(".optgroup").length);g.eq(b).prop("selected",!0)});a.change()}),g.each(function(a){c(this).data("optionIndex",a)}),a.on("change.styler",function(){h.removeClass("selected");var a=[];g.filter(":selected").each(function(){a.push(c(this).data("optionIndex"))});h.not(".optgroup").filter(function(b){return-1<c.inArray(b,a)}).addClass("selected")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",
			function(){d.removeClass("focused")}),l>d.height())a.on("keydown.styler",function(a){38!=a.which&&37!=a.which&&33!=a.which||n.scrollTop(n.scrollTop()+h.filter(".selected").position().top-s);40!=a.which&&39!=a.which&&34!=a.which||n.scrollTop(n.scrollTop()+h.filter(".selected:last").position().top-n.innerHeight()+2*s)})}var g=c("option",a),t="";a.is("[multiple]")?y||E||e():l()};t();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();t()})}});else if(a.is(":reset"))a.on("click",function(){setTimeout(function(){a.closest(d.wrapper).find("input, select").trigger("refresh")},
		1)})}).promise().done(function(){d.onFormStyled.call()})}});
	provide($);


});
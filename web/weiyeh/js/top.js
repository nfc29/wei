/* ---------------------------------------------------------------
	
	TOP.JS
		
--------------------------------------------------------------- */
var wW;
var wH;
var areaW;
var areaH;
var fadeTime = 6000;
var moveSize = 0;//²¾°Ê¶q
var fadeNumber = 0;
$('head').append('<style type="text/css">#header, #catchCopy{display:none;}</style>');
$(function(){
	enablePNG ();
	bgResize();
	$('#bgGallery li:even div').css("top", 0);
	$('#bgGallery li:odd div').css("top", moveSize*(-1));
	init();
	$('#bgGallery li:last img').fadeIn(4000, function(){
		$('#catchCopy').fadeIn(1000, function(){
			$('#header').fadeIn(1000);
		});
	});
	$(window).resize(function(){
		bgResize();
	});
});

window.onunload = function(){
	enablePNG ();
	bgResize();
	$('#bgGallery li:even div').css("top", 0);
	$('#bgGallery li:odd div').css("top", moveSize*(-1));
	init();
	$('#bgGallery li:last img').fadeIn(1000, function(){
		$('#catchCopy').fadeIn(1000, function(){
			$('#header').fadeIn(1000);
		});
	});
	$(window).resize(function(){
		bgResize();
	});
}

function bgResize(){
	wW = $(window).width();
	wH = $(window).height()+30;
	if( wW < 1000 && wH < 612 ){
		areaW = 1000;
		areaH = 649;
	}
	else{
		if(wW/wH < 1.45){
			areaW = wH*1.45+3;
			areaH = wH;
		}
		else{
			areaW = wW+3;
			areaH = wW/1.45;
		}
	}
	$('#bgGallery li div').width(areaW).height(areaH);
	if(jQuery.browser.msie && jQuery.browser.version < 7){
		if(wW <1000){
			$('#wrapper, #bgGallery').width(1000);
		}
		else{
			$('#wrapper, #bgGallery').width('100%');
		}
	}
}
function init(){
	$('#bgGallery li:last div').bgGallery();
	timerID = setInterval("$('#bgGallery li:eq(1) div').bgGallery()", fadeTime*9/10);
}
$.fn.bgGallery = function(){
	var holder = this;
	fadeNumber = fadeNumber+1;
	if((fadeNumber % 2) == 0){
		holder.css({"top":moveSize*(-1)});
		holder.animate({"top":moveSize*(-1/10)}, fadeTime*9/10, "linear", function(){
			holder.find('img').fadeOut(fadeTime*1/10);
			holder.parent().prev().find('img').fadeIn(fadeTime*1/10);
			holder.animate({"top":0}, fadeTime*1/10, "linear", function(){
				holder.parent().prependTo('#bgGallery');
			});
		});
	}
	else{
		holder.css({"top":0});
		holder.animate({"top":moveSize*(-9/10)}, fadeTime*9/10, "linear", function(){
			holder.parent().find('img').fadeOut(fadeTime*1/10);
			holder.parent().prev().find('img').fadeIn(fadeTime*1/10);
			holder.animate({"top":moveSize*(-1)}, fadeTime*1/10, "linear", function(){
				holder.parent().prependTo('#bgGallery');
			});
		});
	}
}

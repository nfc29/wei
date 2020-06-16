// JavaScript Document

var page="news",totalbg=12;

var boxheight = 430;

$(function(){
	blogerOpen();
	$('.open').click(function(){
		blogerClickOpen();
	});
	$('#close').click(function(){
		blogerClickClose();
	});
	$("a.pic").fancybox();//lightbox
	$('.news_list li:last').css({border : 0});
});


function blogerOpen(){
	$('.news_list').css({ display : 'none'});
	$('.news_list_bg').delay(1500).animate({ width : '51%'}, 200).animate({ width : '50%'}, 500);
	$('.news_list').delay(2000).fadeIn(500);
};

function blogerClickOpen(){
	$('.news_list').css({ display : 'none'});
	$('.news_list_bg').delay(500).animate({ width : '51%'}, 200).animate({ width : '50%'}, 500);
	$('.news_list').delay(1000).fadeIn(500);
};

function blogerClickClose(){
	$('.news_list_bg').animate({ width : 0});
	$('.news_list').fadeOut(200);
};
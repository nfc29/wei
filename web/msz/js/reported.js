// JavaScript Document

var page="reported",totalbg=3;

var boxheight = 430;

$(function(){
	blogerOpen();
	$('.open').click(function(){
		blogerClickOpen();
	});
	$('#close').click(function(){
		blogerClickClose();
	});
	$(".reported a").addClass("pic");
	$("a.pic").fancybox();//lightbox
	
});


function blogerOpen(){
	$('.bloggers').css({ display : 'none'});
	$('.blogger_bg').delay(1500).animate({ left : '49%'}, 200).animate({ left : '50%'}, 500);
	$('.bloggers').delay(2000).fadeIn(500);
	$('.bloggers li').hover(function(){
		$(this).find('a').stop().animate({ top : 0}, 300);
	},function(){
		$(this).find('a').stop().animate({ top : 100}, 300);
	});
};

function blogerClickOpen(){
	$('.bloggers').css({ display : 'none'});
	$('.bloggers li').css({ opacity : 0.5});
	$('.blogger_bg').delay(500).animate({ left : '49%'}, 200).animate({ left : '50%'}, 500);
	$('.bloggers').delay(1000).fadeIn(500);
	$('.bloggers li').hover(function(){
		$(this).find('a').stop().animate({ top : 0}, 300);
		$(this).stop().animate({ opacity : 0.5}, 300);
	},function(){
		$(this).find('a').stop().animate({ top : 100, opacity : 0.5}, 300);
	});
};

function blogerClickClose(){
	$('.blogger_bg').animate({ left : '100%'});
	$('.bloggers').fadeOut(200);
};
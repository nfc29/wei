// JavaScript Document

var page="milieu",totalbg=5;

var boxheight = 360;

function startBg(){
	bg();
	$('#box').css({height : boxheight, marginTop : (boxheight / 2) * -1})
	$('#box').delay(1000).animate({
		right : 30,
		opacity : 1
	}, 200, 'easeOutQuad');
	$('#box').find('.content').delay(1500).fadeIn(700);
};

$(function(){
	$('.open').click(function(){
		$('#box').animate({
			right : 30,
			opacity : 1
		}, 200, 'easeOutQuad');
	});
	$('#close').click(function(e){
		$('#box').stop().animate({
			right : -360
		}, 200);
	});
});
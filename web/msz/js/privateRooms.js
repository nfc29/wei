// JavaScript Document

var page="privateRooms",totalbg=3;

var boxheight = 250;

function startBg(){
	bg();
	$('#box').css({height : boxheight, marginTop : (boxheight / 2) * -1, left : -360})
	$('#box').delay(1000).animate({
		left : 30,
		opacity : 1
	}, 200, 'easeOutQuad');
	$('#box').find('.content').delay(1500).fadeIn(700);
};

$(function(){
	$('.open').click(function(){
		$('#box').animate({
			left : 30,
			opacity : 1
		}, 200, 'easeOutQuad');
	});
	$('#close').click(function(e){
		$('#box').stop().animate({
			left : -360
		}, 200);
	});
});
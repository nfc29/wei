// JavaScript Document

var page="story",totalbg=4;

var boxheight = 230;

function startBg(){
	bg();
	$('#box').css({height : boxheight, marginTop : (boxheight / 2) * -1})
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
			left : -555
		}, 200);
	});
});
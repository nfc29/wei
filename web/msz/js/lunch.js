// JavaScript Document

var page="lunch",totalbg=5;

var boxheight = '100%',
	boxwidth = 550;

function startBg(){
	bg();
	$('#box').css({height : boxheight, marginTop : 0, marginLeft : 0})
	$('#box').delay(1000).animate({
		width : boxwidth,
		height : boxheight,
		marginLeft : boxwidth / 2 * -1,
		opacity : 1
	}, 200, 'easeOutBack');
	$('#box').find('.content').delay(1500).fadeIn(700);
};

$(function(){

	$('.open').click(function(){
		$('#box').animate({
			width : boxwidth,
			height : boxheight,
			marginLeft : boxwidth / 2 * -1,
			opacity : 1
		}, 200, 'easeOutBack');
	});
	$('#close').click(function(){
		$('#box').stop().animate({
			width : 0,
			marginLeft : 0,
			opacity : 0
		}, 400, 'easeOutQuad');
	});
	
	menu();
});
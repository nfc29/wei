// JavaScript Document

var page="reservation",totalbg=3;
var boxheight = 425,
	isBlock = 1;
	
$(document).ready(function(){
	$open = $('.open'),
	$close = $('.close'),
	$box = $('.box');
});

function startBg(){
	$('#wrap').fadeIn(700);
	$('#wrap').bgStretcher({
		images: imgary,//['images/bg/index01.jpg', 'images/bg/index02.jpg', 'images/bg/index03.jpg'],
		imageWidth: 1200, 
		imageHeight: 800, 
		slideShowSpeed: 1200,
		nextSlideDelay: 5000,
		pagination: '#nav',
		anchoring: 'center center',
		anchoringImg: 'center center'
	});
	
	$('.loading').fadeOut(500).remove();
	
	$box.delay(700).animate({
		top : '50%',
		height : boxheight,
		marginTop : (boxheight / 2 + 30) * -1,
		opacity : 1,
		zIndex : 8
	}, 700, 'easeOutBack');
	
	onResize();

	$('#nav').animate({
		bottom:50, 
		opacity:1
	},700 , 'easeOutBack');
};

$(function(){

	$close.click(function(){
		$box.stop().animate({
			top : '50%',
			left : '80%',
			height : boxheight,
			marginTop : (boxheight / 2 + 30) * -1,
			opacity : 0
		}, 700, 'easeInBack');
		$open.delay(500).animate({
			right : -19
		}, 400, 'easeOutBack');
		return false;
	});
	
	$open.click(function(){
		$(this).animate({
			right : -50
		}, 400, 'easeInBack');
		
		if(isBlock == 1){
			$box.delay(200).animate({
				top : '50%',
				left : '50%',
				height : boxheight,
				marginTop : (boxheight / 2 + 30) * -1,
				opacity : 1
			}, 700, 'easeOutBack');
		};
		return false;
	});
	
});

$(function(){
	// 轉換成 chosen 效果
	$(".chzn-select").chosen();
});
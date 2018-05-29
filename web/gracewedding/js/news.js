// JavaScript Document

var page="news",totalbg=3;
var boxheight = 342,
	boxheight2 = 400,
	isBlock = 1;
	
$(document).ready(function(){
	$open = $('.open'),
	$close = $('.close'),
	$box = $('.box'),
	$box1 = $('.box.news'),
	$box2 = $('.box.news_main');
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
	
	$box1.delay(700).animate({
		top : '50%',
		height : boxheight,
		marginTop : (boxheight / 2 + 30) * -1,
		opacity : 1,
		zIndex : 8
	}, 700, 'easeOutBack');
	
	$box2.delay(700).animate({
		top : '50%',
		height : boxheight2,
		marginTop : (boxheight2 / 2 + 30) * -1,
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
	/*
	$box1.find('.img a').click(function(){
		directorClose();
		teamOpen();
		return false;
	});
	
	$box2.find('.back').click(function(){
		teamClose();
		directorOpen();
		return false;
	});
	*/
	$close.click(function(){
		$box.stop().animate({
			top : '50%',
			left : '80%',
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
			$box1.delay(200).animate({
				top : '50%',
				left : '50%',
				height : boxheight,
				marginTop : (boxheight / 2 + 30) * -1,
				opacity : 1
			}, 700, 'easeOutBack');
		}else{
			$box2.delay(200).animate({
				top : '50%',
				left : '50%',
				height : boxheight2,
				marginTop : (boxheight2 / 2 + 30) * -1,
				opacity : 1
			}, 700, 'easeOutBack');
			$box1.stop().css({
				top : '50%',
				left : '20%',
				height : boxheight,
				marginTop : (boxheight / 2 + 30) * -1,
				opacity : 0,
				zIndex : 7
			}, 500);
		};
		return false;
	});
	
});

//news_list
$(function(){
	$('.news_list').cycle({
		fx:'scrollHorz',
		prev:'.prev',
		next:'.next',
		after: onAfter,
		timeout: 0,
		speed:1000
	});
	
	function onAfter(curr,next,opts) {
		var msg = '<span>' + (opts.currSlide + 1) + '</span>' + ' / ' + opts.slideCount;
		$('#caption').html(msg);
	};

});
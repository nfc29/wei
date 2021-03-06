// JavaScript Document

var page="contact",totalbg=3;
var boxheight = 390,
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

$(document).ready(function(){
	$('.map').gMap({ 
		zoom: 17, 
		markers: [{
			latitude: 25.052674,
			longitude: 121.52235,
			html: '<h4>葛芮絲婚禮 / GRACE Wedding</h4>台北市中山北路二段183巷4之1號1樓',
			title: "葛芮絲婚禮 / GRACE Wedding",
			popup: false,
			icon: {image: 'images/pin.png'}
		}]
	});
});
// JavaScript Document

var page="job",totalbg=1;

var boxheight = 430,
	boxheight2 = 200;
	
function startBg(){
	bg();
	if($('#box').hasClass('none')){
		$('#box').delay(1000).animate({
			height : 200,
			marginTop : (200 / 2) * -1,
			opacity : 1
		}, 200, 'easeOutBack');
	}else{
		$('#box').delay(1000).animate({
			height : 430,
			marginTop : (430 / 2) * -1,
			opacity : 1
		}, 200, 'easeOutBack');
	};
	$('#box').find('.content').delay(1500).fadeIn(700);
};

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
	
	//box開闔
	$('.open').click(function(){
		$(this).stop().fadeOut(200);
		$('#box.none').stop().animate({
			height : boxheight2,
			marginTop : (boxheight2 / 2) * -1,
			opacity : 1
		}, 200, 'easeOutBack');
		$('#box').find('.content').delay(500).fadeIn(700);
		$('#next, #prev').fadeOut(1000);
		isblock = true;
		return false;
	});
	
	$('#close').click(function(e){
		$('#box.none').stop().animate({
			height : 0,
			marginTop : 0,
			opacity : 1
		}, 200);
		$('#box').find('.content').fadeOut(700);
		$('.open').fadeIn(500);
		$('#next, #prev').fadeIn(1000);
		isblock = false;
		if(isblock == true){
			$('.open').fadeOut(200);
		}else{
			$('.open').fadeIn(200).stop().animate({
				left: e.pageX-25, 
				top: e.pageY-25,
				opacity:1
			}, 1000, 'easeOutQuad');
		};
		return false;
	});
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
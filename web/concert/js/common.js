// JavaScript Document

$(function(){
	newsBox();
	bannerSlider();
	linkBanner();
});

//最新消息輪播
function newsBox(){
	var $marqueeUl = $('.newsBox ul'),
		$marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
		_height = $('.newsBox').height() * -1,
		scrollSpeed = 800,
		timer,
		speed = 3000 + scrollSpeed;
		
	$marqueeli.hover(function(){
		clearTimeout(timer);
	}, function(){
		timer = setTimeout(showad, speed);
	});

	function showad(){
		var _now = $marqueeUl.position().top / _height;
		_now = (_now + 1) % $marqueeli.length;
 
		$marqueeUl.animate({
			top: _now * _height
		}, scrollSpeed, function(){
			if(_now == $marqueeli.length / 2){
				$marqueeUl.css('top', 0);
			}
		});

		timer = setTimeout(showad, speed);
	};
 
	timer = setTimeout(showad, speed);
 
	$('a').focus(function(){
		this.blur();
	});
};


//內頁banner 輪播
function bannerSlider(){
	var $block = $('.main_slider'), 
		$banner = $block.find('img'), 
		animateSpeed = 1500, 
		timer, 
		speed = 5000, 
		index = 0;
	
	$banner.css({
		position: 'absolute',
		top: 0,
		left: 0
	}).eq(index).siblings().css('opacity', 0);
	
	function auto(){
		$banner.eq(index).stop().animate({
			opacity: 0	
		}, animateSpeed);
	
		index = (index + 1) % $banner.length;
	
		$banner.eq(index).stop().animate({
			opacity: 1	
		}, animateSpeed);
		timer = setTimeout(auto, speed);
	}
	
	timer = setTimeout(auto, speed);
};


function linkBanner(){
	
	// 先取得 #cart 及其 top 值
	var $cart = $('#cart'),
		_top = $cart.offset().top;
 
	// 當網頁捲軸捲動時
	var $win = $(window).scroll(function(){
		// 如果現在的 scrollTop 大於原本 #cart 的 top 時
		if($win.scrollTop() >= _top){
			// 如果 $cart 的座標系統不是 fixed 的話
			if($cart.css('position')!='fixed'){
				// 設定 #cart 的座標系統為 fixed
				$cart.css({
					position: 'fixed',
					top: 0
				});
			}
		}else{
			// 還原 #cart 的座標系統為 absolute
			$cart.css({
				position: 'absolute'
			});
		}
	});

	//banner輪播
	var $block = $('.link_banner'),
		$banner = $block.find('a'),
		animatespeed = 2000,
		speed = 3000,
		timer, isHover = false,
		index = 0;
	
	$banner.css({
		position : 'absolute',
		top : 0,
		left : 0,
		zIndex : 1
	}).eq(index).siblings().css({
		opacity : 0,
		zIndex : 0
	});
	
	function auto(){
		$banner.eq(index).stop().animate({
			opacity : 0,
			zIndex : 0
		}, animatespeed);
		
		index = (index + 1) % $banner.length;
		
		$banner.eq(index).stop().animate({
			opacity : 1,
			zIndex : 1
		}, animatespeed);
		
		if(isHover == false){
			timer = setTimeout(auto, speed);
		}
	};
	
	$block.hover(function(){
		isHover = true;
		clearTimeout(timer);
	}, function(){
		isHover = false;
		timer = setTimeout(auto, speed);
	});
	
	timer = setTimeout(auto, speed);
};
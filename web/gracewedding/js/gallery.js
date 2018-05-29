// JavaScript Document

var page="brand",totalbg=3;
var boxheight = 495,
	isBlock = 1;
	
$(document).ready(function(){
	$open = $('.open'),
	$close = $('.close'),
	$box = $('.box'),
	$box_bg = $('.gallery_bg'),
	$box_title = $('.box h4'),
	$listbt = $('.gallerybar li');
});

function startBg(){
	$('#wrap').fadeTo(700 ,0);
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
	
	$box_bg.delay(1300).fadeIn(1000);
	$box_title.delay(1800).fadeIn(1000);
	
	onResize();
};

$(function(){
	
	$listbt.click(function(){
		if($(this).hasClass('now')){
			$(this).siblings().find('a').removeClass('now');
		}else{
			$(this).find('a').stop().addClass('now');
			$(this).siblings().find('a').removeClass('now');
		};
	});
	
});

$(function(){
	// 先一一取得相關的元素及高度
	var $block = $('.gallerybar'), 
		$thumbs = $block.find('.thumbs'), 
		$carousel = $block.find('.carousel'), 
		_carouselHeight = $carousel.height(), 
		$ul = $thumbs.find('ul'), 
		$li = $ul.find('li'), 
		_liHeight = $li.height(), 
		_set = Math.ceil(_carouselHeight / _liHeight), 
		_count = Math.ceil($li.length / _set), 
		_height = _set * _liHeight * -1, 
		timer, speed = 3000, _animateSpeed = 800, // 分別設定輪播速度及動畫速度
		_index = 0, _countIndex = 0;
 
	// 先在縮圖前面都插入一個 .nav-bar, 主要是當點選到該縮圖時的效果
	$('<span></span>').insertBefore($li.find('img'));
	// 先讓描述區塊的背景有透明度
 
	// 如果圖片組數超出一次能顯示的數量時, 產生可以切換的上下鈕
	var $controls = null;
	if(_count>1){
		$controls = $thumbs.append('<a href="#prev" class="prev" title="上一頁"></a><a href="#next" class="next" title="下一頁"></a>').find('.prev, .next'); 
		var $prev = $controls.eq(0).hide(), 
			$next = $controls.eq(1);
 
		// 當點擊上下鈕時
		$controls.click(function(e){
			// 計算要顯示第幾組
			_countIndex = Math.floor((e.target.className == 'prev' ? _countIndex - 1 + _count : _countIndex + 1) % _count);
 
			// 進行動畫
			$ul.stop().animate({
				top: _countIndex * _height 
			}, _animateSpeed, 'easeOutCirc');
 
			// 判斷上下鈕顯示與否
			$prev.toggle(_countIndex>0);
			$next.toggle(_countIndex!=_count-1);
 
			return false;
		});
	};
 
	// 如果縮圖 li 被點擊時
	$li.click(function(){
		var $this = $(this), 
			$a = $this.find('a'), 
			$img = $this.find('img');
 
		//clearTimeout(timer);
		_index = $this.index();
		// 分別改變左邊顯示區塊的超連結, 圖片, alt 及描述內容
		/*
		$photoA.attr('href', $a.attr('href'));
		$photoImg.attr({
			src: $img.attr('src'), 
			alt: $img.attr('alt')
		});
		$photoDesc.html($img.attr('alt'));
		*/
		$this.addClass('current').siblings('.current').removeClass('current');
 
		return false;
	}).eq(_index).click();

});

$(function(){
	$('#myGallery').galleryView({
		show_panel_nav: false,
		panel_width: 635,
		panel_height: 413,
		panel_animation: 'crossfade',
		show_filmstrip_nav: false,
		frame_width: 72,
		frame_height: 72,
		panel_scale: 'fit',
		frame_gap: 7,
		frame_opacity: 0.25,
		show_infobar: false,
	});
});
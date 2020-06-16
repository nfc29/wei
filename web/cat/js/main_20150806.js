$(function(){
    
    $(window).load(function(){
        headerBg();
        anchorHeight();
		pageTop();
    });
    
    $(window).scroll(function(){
        headerBg();
    });
    /*
    $(window).resize(function(){
        anchorHeight();
    });
    */
    
});

function headerBg(){

    var _main_title_height = $('.main_title').height(),
        _header_height = $('.header').height(),
        _scroll_height = _main_title_height - _header_height;
    
    if($('body').scrollTop() >= _scroll_height){
        $('.header .bg').css({opacity : 0.9});
    }else{
        $('.header .bg').css({opacity : 0.5});
    };
    
};

function anchorHeight(){
    var _anchor_height = $('.header').height();
    $('.anchor').css({ top : _anchor_height * -1});
};

function pageTop(){
	
	var $win = $(window),
		$ad = $('.btn_top').css('opacity', 0).show(),	// 讓廣告區塊變透明且顯示出來
		_width = $ad.width(),
		_height = $ad.height(),
		_diffY = 15, _diffX = 0,	// 距離右及下方邊距
		_moveSpeed = 800;	// 移動的速度
 
	// 先把 #abgne_float_ad 移動到定點
	$ad.css({
		top: $(document).height(),
		left: $win.width() - _width - _diffX,
		opacity: 1
	});
 
	// 幫網頁加上 scroll 及 resize 事件
	$win.bind('scroll resize', function(){
		var $this = $(this);
 
		// 控制 #abgne_float_ad 的移動
		$ad.stop().animate({
			top: $this.scrollTop() + $this.height() - _height - _diffY,
			left: $this.scrollLeft() + $this.width() - _width - _diffX
		}, _moveSpeed);
	}).scroll();	// 觸發一次 scroll()
	
	
	//點擊回到最上面
    $('.btn_top').on('click', function(e){
        e.preventDefault();
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		});
    });
	
};
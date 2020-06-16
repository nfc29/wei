(function(){

	var _backTopObj = {};
	$(function(){
		setButton();
		setEventListener();
        header();
	});
    
	
	$(window).load(function(){
        headerBg();
        anchorHeight();
    });
	
	$(window).scroll(function(){
        headerBg();
    });
    
    $(window).resize(anchorHeight);

	function setButton(){
		$('.btn_top').on('click', function(e){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: 0
			});
		});
	}

	function setEventListener(){
		$(window).on('resize', onResize);
		$(window).on('scroll', scrollChange);
		window.setTimeout(onResize, 100);
	}

	function onResize(){
		_backTopObj.winH = $(window).height();
		_backTopObj.footerH = $('.footer').height();
		_backTopObj.wrapH = $('.wrap').height();
		_backTopObj.btnTopH = $('.btn_top').height() + 10;
		_backTopObj.dis = _backTopObj.wrapH - _backTopObj.winH - _backTopObj.footerH;
		scrollChange();
	}

	function scrollChange(){
		var scrollTop = $(window).scrollTop(),
			moveObj = { top:0, right:0};
			moveObj.top = _backTopObj.winH + scrollTop - _backTopObj.btnTopH;
		if(scrollTop > _backTopObj.dis){
			//moveObj.top = _backTopObj.winH + _backTopObj.dis - _backTopObj.btnTopH;
			$('.btn_top').css({bottom:_backTopObj.footerH + 15});
		}else{
			$('.btn_top').css({bottom:15});
		}

		$('.btn_top').show();
        //$('.btn_top').css(moveObj);
		//$('.btn_top').stop().animate(moveObj, 400);
	}
	
	function headerBg(){
		var _main_title_height = $('.main_title').height(),
			_header_height = $('.header').height(),
			_scroll_height = _main_title_height - _header_height;
        
		if($('body').scrollTop() >= _scroll_height){
			$('.header .bg').css({opacity : 0.9});
		}else{
			$('.header .bg').css({opacity : 0.5});
		};
	}

	function anchorHeight(){
		var _anchor_height = $('.header').height();
		$('.anchor').css({ top : _anchor_height * -1});
	}
	
	function header(){
		//headroom
        var header = document.querySelector("#header");
        new Headroom(header, {
            tolerance: {
                down : 2,
                up : 2
            },
            offset : 100,
            classes: {
                initial: "slide",
                pinned: "slide_reset",
                unpinned: "slide_up"
            },
            onPin : function() {
            },
            onUnpin : function() {
            },
        }).init();
	}

})(jQuery);


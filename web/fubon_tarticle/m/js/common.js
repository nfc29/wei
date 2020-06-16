(function($){

	$(function(){
		if (device.desktop() ) {
      // 手機跟 pad
     	window.location.href="../index.html";
  		}
		btn_pageTop();
		windowScroll();
		menuOpen();
		menuClose();
		subMenu();
		sliderLoop();
	});
	
	function sliderLoop(){
		var swiper = new Swiper('.swiper-container', {
			/*pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',*/
			paginationClickable: true,
			spaceBetween: 30,
			centeredSlides: true,
			effect: 'fade',
			autoplay: 4000,
			autoplayDisableOnInteraction: false,
			loop: true
		});
	}
	
	function menuOpen(){
		$('.btn_menuOpen').on('click', function(e){
			e.preventDefault();
			$('.menu').fadeIn();
			$('.nav').animate({right: 0}, 'slow');
			$('body').css({overflow:'hidden'});
		});
	};
	
	function menuClose(){
		$('.btn_close').on('click', function(e){
			e.preventDefault();
			$('.menu').fadeOut();
			$('.nav').animate({right: '-100%'}, 'slow', function(){
				$('.dropdown').removeClass('on');
				$('.sub_menu').hide();
			});
			$('body').css({overflow:'auto'});
		});
	};
	
	function subMenu(){
		$('.dropdown > a').on('click', function(e){
			e.preventDefault();
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on').find('.sub_menu').slideToggle();
			}else{
				$('.sub_menu').slideUp();
				$('.dropdown').removeClass('on');
				$(this).parent().addClass('on').find('.sub_menu').slideToggle();
			}
		});
	};
	
	function btnShow(){
		var nowScrollTop = $(window).scrollTop();
		if(nowScrollTop >= 1){
			$('.btn_pageTop').fadeIn();
		}else if(nowScrollTop == 0){
			$('.btn_pageTop').stop().fadeOut();
		};
	};
	
	function windowScroll(){
		$(window).scroll(btnShow);
		btnShow();
	};
	
	function btn_pageTop(){
		$('.btn_pageTop').on('click', function(e){
			e.preventDefault();
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
				_speed = $('.wrap').height();
			$body.animate({
				scrollTop: 0
			}, 1000);
			//console.log(_speed);
		});
	};

})(jQuery);
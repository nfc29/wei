(function($){

	$(function(){
		if ( !device.desktop() ) {
      // 手機跟 pad
     	window.location.href="m/index.html";
  		}
		btn_pageTop();
		windowScroll();
		if(!(isIE() && isIE() < 10)){
			sliderLoop();
		}
		
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

	function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
})(jQuery);
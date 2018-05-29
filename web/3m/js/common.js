(function($){

	$(function(){
		if ( !device.desktop() ) {
      	// 手機跟 pad
     	window.location.href="m/index.html";
  		}
		sliderLoop();
	});
	
	function sliderLoop(){
		var swiper = new Swiper('.swiper-container', {
			//pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			paginationClickable: true,
			spaceBetween: 30,
			centeredSlides: true,
			//effect: 'fade',
			//autoplay: 4000,
			autoplayDisableOnInteraction: false,
			//loop: true
		});
	}

})(jQuery);
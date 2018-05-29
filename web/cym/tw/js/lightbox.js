;(function($){
	$(document).ready(function() {
		$(".product").fancybox({
			'width'				: 440,
			'height'			: 500,
			'autoScale'			: false,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		});
		$("a.news").fancybox({
		});
	});
})(jQuery);
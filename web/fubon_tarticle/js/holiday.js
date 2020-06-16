(function($){

	$(function(){
		var $tabs = $('.tabs li'),
			index = 0;

		var $defaultLi = $tabs.eq(index).addClass('active'),
			defaultHref = $defaultLi.find('a').attr('href');

		$(defaultHref).siblings().hide();

		$tabs.click(function () {
			var $this = $(this),
				clickHref = $this.find('a').attr('href');

			$(clickHref).fadeIn().siblings().hide();
			$this.not('.w9').addClass('active').siblings().removeClass('active');

			return false
		});
	});

})(jQuery);
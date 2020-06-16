(function($) {
	$(function() {
		setButton();
		setEventListener();
	});

	function setButton(){
		$('#searchBtn_festival').on('click', function(e){
			e.preventDefault();
			var moveObj = {}, selectId = $('.continent').val();
			selectId = '.' + selectId;
			moveObj.scrollTop = $(selectId).offset().top - 200;
			$('body, html').animate(moveObj, 600);
		});
	}

	function setEventListener(){
		$(window).on('scroll', function(){
			var scrollTop = $(this).scrollTop(),
				socketEle = $('.title_socket'),
				socketTopNum = 395;
			if(scrollTop >= socketTopNum && socketEle.hasClass('obj_abs')){
				socketEle.removeClass('obj_abs').addClass('obj_fix');
			}else if(scrollTop < socketTopNum && socketEle.hasClass('obj_fix')){
				socketEle.removeClass('obj_fix').addClass('obj_abs');
			}
		});

	}

})(jQuery);
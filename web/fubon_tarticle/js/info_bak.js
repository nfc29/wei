(function($) {
	var _winObj = {};
	$(function() {
		setButton();
		setEventListener();
	});

	function setButton(){
		$('#searchBtn_festival').on('click', function(e){
			e.preventDefault();
			var moveObj = {}, selectId = $('.continent').val();
			selectId = '.' + selectId;
			moveObj.scrollTop = $(selectId).offset().top - 140;
			$('body, html').animate(moveObj, 600);
		});
	}

	function setEventListener(){
		$(window).on('resize', function(){
			_winObj.scrollDis = 2644 - $(window).height() - 52;
			scrollChange();
		}).trigger('resize');

		$(window).on('scroll', function(){
			scrollChange();
		});

	}

	function scrollChange() {
	    var scrollTop = $(this).scrollTop(),
	        wrapEle = $('.wrap_info'),
	        socketEle = $('.title_socket'),
	        socketTopNum = 490,
	        bottomNum = scrollTop - _winObj.scrollDis;
	    if (scrollTop >= socketTopNum && !wrapEle.hasClass('down')) {
	        wrapEle.addClass('down');
	    } else if (scrollTop < socketTopNum && wrapEle.hasClass('down')) {
	        wrapEle.removeClass('down');
	    }
	    
	    if(wrapEle.hasClass('down')){
	    	if(bottomNum <= 0){
	    		bottomNum = 0;
	    	}
	    	bottomNum += 'px';
	    	socketEle.css('bottom', bottomNum);
	    }
	}

})(jQuery);
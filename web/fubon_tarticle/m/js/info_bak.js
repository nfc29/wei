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
			moveObj.scrollTop = $(selectId).offset().top - 200;
			$('body, html').animate(moveObj, 600);
		});
	}

	function setEventListener(){
		$(window).on('resize', function(){
			_winObj.scrollDis = 5362 - $(window).height() - 60;
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
	        pageTopEle = $('.btn_pageTop')
	        socketTopNum = 490,
	        bottomNum = scrollTop - _winObj.scrollDis;
	    if (scrollTop >= socketTopNum && !wrapEle.hasClass('down')) {
	        wrapEle.addClass('down');
	        pageTopEle.addClass('down');
	    } else if (scrollTop < socketTopNum && wrapEle.hasClass('down')) {
	        wrapEle.removeClass('down');
	        pageTopEle.removeClass('down');
	    }
	    
	    if(wrapEle.hasClass('down')){
	    	if(bottomNum <= 0){
	    		bottomNum = 0;
	    	}
	    	bottomNum += 'px';
	    	socketEle.css('bottom', bottomNum);
	    	pageTopEle.css('marginBottom', bottomNum);
	    }
	}

})(jQuery);
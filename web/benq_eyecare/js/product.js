$(function(){
    
    $('.btn_productItem01').on('click', function(e){
        //e.preventDefault();
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#product_tv').offset().top
		}, 'slow');
    });
    
    $('.btn_productItem02').on('click', function(e){
        //e.preventDefault();
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#product_monitor').offset().top
		});
    });
    
    $('.btn_productItem03').on('click', function(e){
        //e.preventDefault();
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#product_light').offset().top
		});
    });
    
    $('.btn_productItem04').on('click', function(e){
        //e.preventDefault();
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#product_mobile').offset().top
		});
    });
    
    $(window).scroll(function(){
        var $body_scrollTop = $(window).scrollTop();
        if($body_scrollTop > 1){
            $('.btn_pageTop').fadeIn();
        }else{
            $('.btn_pageTop').fadeOut();
        };
    });
    
    $('.btn_pageTop').on('click', function(e){
        e.preventDefault();
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		});
    });
    
    
});


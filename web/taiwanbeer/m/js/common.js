(function($){

    $(function(){
		if (device.desktop() ) {
     		window.location.href="../index.html";
  		}

		$('.content').automove({paused:true});
		setButton();
		footer_height();
		intro();
		$(window).resize(footer_height);
    });
	
	function setButton(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

		$('.btn_menu').on('click', function(e){
			e.preventDefault();
			$('.menu').fadeIn();
			$('.content').automove_pause();
		});
		$('.btn_close').on('click', function(e){
			e.preventDefault();
			$('.menu').fadeOut();
		});
		$('.btn_home').on('click', function(e){
			e.preventDefault();
			$('.menu').hide();
			$('.content').hide();
			$('.index').show().automove_restart();
			$('.index').scrollTop(0);
		});
		$('.btn_modalities').on('click', function(e){
			e.preventDefault();
			$('.menu').hide();
			$('.content').hide();
			$('.modalities').show().automove_restart();
			$('.modalities').scrollTop(0);
		});
		$('.btn_rules').on('click', function(e){
			e.preventDefault();
			$('.menu').hide();
			$('.content').hide();
			$('.rules').show().automove_restart();
			$('.rules').scrollTop(0);
		});
	};
	
	function intro(){
		$('.intro').automove();
		$('.yes').on('click', function(){
			$('.intro').fadeOut();
			$('.index').show('fast', function(){
				$(this).automove_play();
			});
			$('.btn_menu').fadeIn();
		});
		$('.no').on('click', function(){
			$('.intro .txt1').fadeOut(500);
			$('.intro .txt2').fadeIn(500,function(){
				setTimeout(timer, 3000);
			});
		});
	}
	
	function timer(){
		$('.intro .txt1').fadeIn(500);
		$('.intro .txt2').fadeOut(500);
	}
	
	function footer_height(){
		var _footerHeight = $('.footer').height();
		$('.wrap').css({paddingBottom:_footerHeight});
		//$('.intro .bg').css({marginBottom:_footerHeight});
		//console.log(_footerHeight);
	}
    
})(jQuery); 
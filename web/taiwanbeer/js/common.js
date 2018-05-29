(function($){
    
	$(function(){
		
		if ( !device.desktop() ) {
      		// 手機跟 pad
     		window.location.href="m/index.html";
  		}
		
		$('.section').automove({paused:true});
		intro();
		$('.rules_content').rollbar({zIndex:100, wheelSpeed:20, top:0, pathPadding:30, sliderOpacityDelay:100, lazyCheckScroll:100});
		
		$('.rules_content').on('mouseenter', function(e){
			$.fn.fullpage.setAllowScrolling(false);
		}).on('mouseleave', function(e){
			$.fn.fullpage.setAllowScrolling(true);
		});
	});
	
	function fullpage(){
		$('#fullpage').fullpage({
			anchors: ['home', 'description', 'rules', '', '', ''],
			menu: '#menu',
			afterRender: function(){
				changeStage(1, true);
			},
			afterLoad: function(anchorLink, index){
				changeStage(index, true);
			},
			onLeave: function(index, direction){
				changeStage(index);
			}
		});
		
		
	}
	
	function changeStage(pNum, pBol){
		pBol = pBol || false;
		var ele = $('.section').eq(pNum - 1);
		if(pBol){
			ele.automove_play();
		}else{
			ele.automove_reverse();
		}
	}
	
	function intro(){
		$('.intro').automove();
		$('.yes').on('click', function(){
			$('.intro').fadeOut();
			$('#fullpage').show('fast', function(){
				fullpage();
			});
			$('#menu').fadeIn();
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

})(jQuery);
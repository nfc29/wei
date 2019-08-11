// JavaScript Document

$(document).ready(ON_READY);
$(window).load(ON_LOAD);
$(window).resize(WINDOW_RESIZE);


function ON_READY(){
	
		$.stellar({
				horizontalScrolling: false,
				verticalOffset: 1
		});
		
	    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		
	    $(window).scroll(function(){
			var $this = $(this);
		    if( $this.scrollTop() > 0){
			   $('img.LogoSlogan').fadeOut(200);
		    }else{
			    $('img.LogoSlogan').fadeIn(200);
			}
	    });
          
        $('.menuMain ul a').click(function(e){
			e.preventDefault();
			var clickName = $(this).parent().attr('class'),
				indexSubMenuName = $(this).attr('class');
			//var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			if(clickName == "nav-Home"){
			   $body.animate({ scrollTop: 0}, 1000);
			}else if(clickName == "nav-Brand"){
				$body.animate({ scrollTop: 895}, 1000);
			}else if(indexSubMenuName == "brand"){
			   $body.animate({ scrollTop: 895}, 1000);
			}else if(indexSubMenuName == "delicacy"){
			   $body.animate({ scrollTop: 1760}, 1000);
			}else if(indexSubMenuName == "team"){
			   $body.animate({ scrollTop: 2690}, 1000);
			/*
			}else if(clickName == "nav-Contact"){
			   window.location.href = "mailto:jlee@sun9food.com";
			*/
			}
            return false;
	    });

		$('a.btnGotop').click(function(){
		   var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		   $body.animate({ scrollTop: 0}, 2000);
		   return false;
		});
		
		//往下箭頭
		$(window).scroll(function(){
			if($body.scrollTop() > 2850){
				$('.ScrollTip').fadeOut();
			}else{
				$('.ScrollTip').fadeIn();
			};
		//console.log($body.scrollTop());
		});
		
		//次選單
		$('.menuMain li').hover(function(){
			$(this).find('.subMenu').stop(false, true).fadeIn();
		},function(){
			$(this).find('.subMenu').stop(false, true).fadeOut();
		});
		
		/*
		$('.BrandArea .subMain .btnPrev a').hide();
		$(".BrandContant li.BrandOrigin").css({left: 200, opacity:0});
		
		$('.BrandArea .subMain .btnPrev a').mouseover(function(){
			 $(this).parent().animate({ left:0 },400);												   
		 });
		$('.BrandArea .subMain .btnPrev a').mouseleave(function(){
			 $(this).parent().animate({ left:10 },400);												   
		 });
		$('.BrandArea .subMain .btnNext a').mouseover(function(){
			 $(this).parent().animate({ right:0 },400);												   
		 });
		$('.BrandArea .subMain .btnNext a').mouseleave(function(){
			 $(this).parent().animate({ right:10 },400);												   
		 });
		
		$('.BrandArea .subMain .btnPrev a').click(function(){
			 $(this).fadeOut(400);
			 $(".BrandContant li.BrandOrigin").animate({ left: 200, opacity:0}, 1000);
			 $(".BrandContant li.BrandSecret").delay(400).animate({ left: 0, opacity:100}, 1000);
			 $('.BrandArea .subMain .btnNext a').fadeIn(400);
			 return false;
		});
		$('.BrandArea .subMain .btnNext a').click(function(){
			 $(this).fadeOut(400);
			 $(".BrandContant li.BrandSecret").animate({ left: -200, opacity:0}, 600);
			 $(".BrandContant li.BrandOrigin").delay(400).animate({ left: 0, opacity:100},1000);
			 $('.BrandArea .subMain .btnPrev a').fadeIn(400);
			 return false;
		});
		*/
		
};

function ON_LOAD(){
	   $('.loadingArea').fadeOut(600);


};

function WINDOW_RESIZE(){};
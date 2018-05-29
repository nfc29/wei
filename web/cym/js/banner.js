$(document).ready(function(){
	
	//　ニューススライダー
	var scrollBg = $("#scrollController");
	var scrollBar = $("#scrollControllerBar");
	
	var scrollPar = 0;
	var MOUSEWHEEL = "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
	setNewsScroll(0);
	$("#newsWrapperInner .right").bind(MOUSEWHEEL, function(event) {
		
		event = event || window.event;
		var _delta = Math.round(event.wheelDelta/10) || -event.detail;
		if(_delta>0){
			scrollPar-= 0.05;
		}else{
			scrollPar+= 0.05;
		}
		setNewsScroll(scrollPar);
		event.preventDefault();
	});
	$("#scrollController").mousedown(function(){
		
		$("html").mousemove(function(event){
			var my = event.pageY - scrollBg.offset().top - scrollBar.height()*0.5;
			if(my < 0){
				my = 0;
			}else if(my > scrollBg.height() - scrollBar.height()){
				my = scrollBg.height() - scrollBar.height();
			}
			var par = (my)/(scrollBg.height() - scrollBar.height());
			setNewsScroll(par);
			
		});
		$("html").mouseup(function(){
		
			//$("html").css({"cursor":"default"});
			//$("html").css({"cursor":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAACVBMVEX///8AAAD///9+749PAAAAA3RSTlP//wDXyg1BAAAASUlEQVR42qXNQQqAQAxD0cT7H3qQj/MVKi4MXb3SJscUtX0o0qTtTZHknBetHyCWHTTo1UVUDnfUqLtNUuVJRVRWYRGVv3XKf13yEgJFXOqs0wAAAABJRU5ErkJggg==') 6 6, default"});
			
			$("html").unbind("mousemove");
			$("html").unbind("mouseup");
		});
		return false;
	});
	function setNewsScroll(par){
		if(par<0){
			par = 0;
		}else if(par>1){
			par = 1;
		}
		scrollPar = par;
		scrollBar.css({"top":Math.round(par*(scrollBg.height() - scrollBar.height()))});
		$("#newsWrapperInner .right ul").css({"top":-Math.round(par*($("#newsWrapperInner .right ul").height() - $("#newsWrapperInner .right").height()))});
	}
	
});
$(window).load(function(){

	$("#visualNavi").html("");
	$("#slideVisualInner ul li").each(function(){
		$("#visualNavi").append('<a href="javascript:void(0);"></a>');
		//
		$(this).css({"visibility":"visible","display":"none"});
		$(this).hover(function(){
			$(this).find("img").fadeTo(50,1);
		},function(){
			$(this).find("img").fadeTo(500,1);
		});
	});
	$("#slideVisualInner ul li").each(function(){
		//
		$(this).css({"visibility":"visible"});
	});
	//
	slideVisual();
	
	
	
	
	if($("#slideVisualInner ul li").length>1){
		
		
		$("#slideVisualArwLeft").attr("href","javascript:void(0);");
		$("#slideVisualArwRight").attr("href","javascript:void(0);");
		$("#slideVisualArwLeft").fadeTo(500,1);
		$("#slideVisualArwRight").fadeTo(500,1);
		
		
		$("#slideVisualArwLeft").click(function(){
			slideVisualPrev();
		});
		$("#slideVisualArwRight").click(function(){
			slideVisualNext();
		});
		
		$("#visualNavi a").each(function(){
			
		});
		
	}
	
	
});
var nowSlide = 0;
var slideTimer;
function slideVisual(){
	var i=0;
	var prevNum = nowSlide-1;
	if(prevNum<0){
		prevNum = $("#slideVisualInner ul li").length-1;
	}
	var nextNum = nowSlide+1;
	if(nextNum>=$("#slideVisualInner ul li").length){
		nextNum = 0;
	}
	
	$("#slideVisualInner ul li").each(function(){
		
		var li = $(this);
		if(i==nowSlide){
			
			//$(this).css({"left":0});
			$(this).fadeOut(500).delay(500).fadeIn(500,function(){
				if($("#slideVisualInner ul li").length>1){
					clearTimeout(slideTimer);
					slideTimer = setTimeout("slideVisualNext()",8000);
				}
			});
		}else{
			$(this).fadeOut(500).fadeOut(500);
		}
		i++;
	});
	
	i=0;
	
	
	
	$("#visualNavi a").each(function(){
		if(i==nowSlide){
			$(this).html('<img src="images/visual_navi_selected.png" alt="" width="8" height="8" />');
			//$(this).removeClass("rollover");
			//$(this).addClass("selected");
			$(this).unbind("click");
			//$(this).unbind("hover");
		}else{
			
			$(this).html('<img src="images/visual_navi_normal.png" alt="" width="8" height="8" onmouseover="this.src=\'images/visual_navi_rollover.png\'" onmouseout="this.src=\'images//visual_navi_normal.png\'" />');
			//$(this).removeClass("selected");
			$(this).unbind("click");
			$(this).click(function(){
				nowSlide = $(this).index();
				slideVisual();
			});
			/*
			$(this).hover(function(){
				$(this).addClass("rollover");
			},function(){
				$(this).removeClass("rollover");
			});
			*/
		}
		i++;
	});
	
}
function slideVisualNext(){
	nowSlide++;
	if(nowSlide>=$("#slideVisualInner ul li").length){
		nowSlide = 0;
	}
	slideVisual();
}
function slideVisualPrev(){
	nowSlide--;
	if(nowSlide<0){
		nowSlide = $("#slideVisualInner ul li").length-1;
	}
	slideVisual();
}

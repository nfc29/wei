// JavaScript Document
//menu
$(function(){
	
	$(".all, .one").hover(function(){
		$(this).find(".menu_list").fadeIn();
	},function(){
		$(this).find(".menu_list").stop().fadeOut(200);
	});

	$(".one a").click(function(){
		$(".menu_list").fadeOut();
	});
	
	$(".single, .checklist, #title ul, .share .species, .share .data").buttonset();//checkbox
	$("#title h1 a").fadeIn(500);
	$("#title ul").delay(200).fadeIn(500);
});

$(function(){
	$('#tags').val('請輸入關鍵字');
	$('#tags').focus(function(){
		if(this.value=='請輸入關鍵字')this.value='';
		$(this).next('.keyword').fadeIn();
	});
	$('#tags').blur(function(){
		if(this.value=='')this.value='請輸入關鍵字';
		$(this).next('.keyword').fadeOut();
	});
});

$(document).ready(function(){
	imgZoom();
	nextBtn();
	$('.content_text p:first').remove();
	$(window).resize(function(){
		nextBtn();
	});

	$('.prevbox, .nextbox').css({ 
		display : 'block',
		opacity : 0
	});
	
	$('#main .left, #main .right').hover(function(){
		var _windowHeight = $(window).height();
		
		$(this).next('div').css({zIndex : 12}).stop().animate({
			top : _windowHeight / 2 - 80,
			opacity : 1		
		});
	},function(){
		$(this).next('div').css({zIndex : 0}).stop().animate({
			opacity : 0		
		});
	});
	
	$('#index .left, #index .right').hover(function(){
		var _windowHeight = $(window).height();
		
		$(this).next('div').css({zIndex : 12}).stop().animate({
			top : _windowHeight / 2 - 55,
			opacity : 1		
		});
	},function(){
		$(this).next('div').css({zIndex : 0}).stop().animate({
			opacity : 0		
		});
	});
	
});

function nextBtn(){
	var _windowHeight = $(window).height();
	/*	
	if(	$(window).width() < 1000 ){
		$('.left, .right').fadeOut();
	}else{
		$('.left, .right').fadeIn();
	};
	*/
	$('.left, .right').stop().animate({
		top : _windowHeight / 2
	});
	$('#main .prevbox, #main .nextbox').stop().animate({
		top : _windowHeight / 2 - 80
	});
	$('#index .prevbox, #index .nextbox').stop().animate({
		top : _windowHeight / 2 - 55
	});
};

//news
$(function(){
	// 先取得 div#abgne_marquee ul
	// 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
	// 再來取得 div#abgne_marquee 的高來決定每次跑馬燈移動的距離
	// 設定跑馬燈移動的速度及輪播的速度
	var $marqueeUl = $('.news ul'),
		$marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
		_height = $('.news').height() * -1,
		scrollSpeed = 1000,
		timer,
		speed = 3000 + scrollSpeed;
		
	$('.news_bg').css({
		display : 'block', 
		opacity : 0, 
		height : 25
	});
 
	// 幫左邊 $marqueeli 加上 hover 事件
	// 當滑鼠移入時停止計時器；反之則啟動
	$marqueeli.hover(function(){
		clearTimeout(timer);
		$('.news').stop().animate({
			height : 120
		});
		$('.news_bg').stop().animate({
			height : 133,
			opacity : 1
		});
		$('.news li a').stop().animate({
			paddingLeft : 20
		}, 200);
		$('.news').find('p').text('熱門推薦');
		$('.news li a').css({ 'background-image' : 'url(images/news_icon.png)', color : '#ccc'});
		$('.news li a:hover').css({ 'background-image' : 'url(images/news_icon_hover.png)', color : '#e15574'});
	}, function(){
		timer = setTimeout(showad, speed);
		$('.news').stop().animate({
			height : 25
		}, 200);
		$('.news_bg').stop().animate({
			height : 35,
			opacity : 0
		});
		$('.news li a').stop().animate({
			paddingLeft : 0
		}, 200);
		$('.news').find('p').text('熱門推薦：');
		$('.news li a').css({ 'background-image' : 'none', color : '#6ebce3'});
		$('.news li a:hover').css({ 'background-image' : 'url(images/news_icon_hover.png)', color : '#e15574'});
	});
 
	// 控制跑馬燈移動的處理函式
	function showad(){
		var _now = $marqueeUl.position().top / _height;
		_now = (_now + 1) % $marqueeli.length;
 
		// $marqueeUl 移動
		$marqueeUl.animate({
			top: _now * _height
		}, scrollSpeed, function(){
			// 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
			// 藉此產生不間斷的輪播
			if(_now == $marqueeli.length / 2){
				$marqueeUl.css('top', 0);
			}
		});
 
		// 再啟動計時器
		timer = setTimeout(showad, speed);
	}
 
	// 啟動計時器
	timer = setTimeout(showad, speed);
 
	$('a').focus(function(){
		this.blur();
	});
});

function loginbox(){
	
	var login='<div class="loginbg">';
		login+='<div class="loginbox">';
		login+='<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FYOMOpets.club&amp;send=false&amp;layout=standard&amp;width=200&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;" scrolling="no" frameborder="0" allowTransparency="true" class="left_fb"></iframe>';
		login+='<p>歡迎來到YOMOpets寵物事！<br>在這裡你可以分享寵物照片，<br>結交愛寵一族，<br>討論與寵物相關的話題喔！</p>';
		login+='<a href="#" class="fb" onclick="fbLogin()">使用Facebook帳號登入</a>';
		login+='<a href="#" class="visitors">我是訪客，我想先逛逛</a>';
		login+='</div>';
		login+='</div>';
	
	$("body").append(login);
	$('.visitors').live('click' , function(){
		record({});
		$('.loginbg').remove();
	});
};





//========================全部類別======================//

var url ="http://demo.ad.megais.com/yomo_test/?";
var bb="";

$(document).ready(function(){

	var get_area =$.query.get("area");
	var get_animal =$.query.get("animal");
	var get_keyword =$.query.get("keyword");
	var get_tag =encodeURIComponent($.query.get("tag"));
	var tag=""; 
	var area="";
	var animal="";
	/*地區*/
	$(".chk").click(function(){ 
		area=$('input[name=radio]:checked').val();  
			if(area!="") 
			{
			  bb+="area="+area;
			}
			if(get_tag!="")
			{
			   bb+="&tag="+get_tag;
			}
			if(get_keyword!="")
			{
			  bb+="&keyword="+get_keyword;
			}
			if(get_animal!="")
			{
			 bb+="&animal="+get_animal;
			}
		window.location.href=url+bb;
	});
	
	/*全部地區*/
	$(".select-all").click(function(){ 
		area="all";
			if(area!="") 
			{
			  bb+="area="+area;
			}
			if(get_tag!="")
			{
			   bb+="&tag="+get_tag;
			}
			if(get_keyword!="")
			{
			  bb+="&keyword="+get_keyword;
			}
			if(get_animal!="")
			{
			 bb+="&animal="+get_animal;
			}
		window.location.href=url+bb;
	});
	
	$(".select-area-del").click(function(){ 
		
			var removeArea = $.query.REMOVE("area");
			 window.location.href="http://demo.ad.megais.com/yomo_test/"+removeArea;
			 return false;
	}); 
	$(".animal").click(function(){ 
		animal=$('input[name=radio2]:checked').val();  
			if(animal!="")
			{
			 bb+="animal="+animal;
			}
			if(get_area!="") 
			{
			  bb+="&area="+get_area;
			}
			if(get_tag!="")
			{
			   bb+="&tag="+get_tag;
			}
			if(get_keyword!="")
			{
			  bb+="&keyword="+get_keyword;
			}
		window.location.href=url+bb;
	});
	
	//搜尋類別
	$(".select-use").click(function(){ 
		 $("input[name='check']:checkbox:checked").each(function(){ 
		 tag+=$(this).val()+","
		  }) 
			tag=encodeURIComponent(tag);
		
			if(tag!="")
			{
			   bb+="tag="+tag;
			}
			if(get_area!="") 
			{
			  bb+="&area="+get_area;
			}
			if(get_keyword!="")
			{
			  bb+="&keyword="+get_keyword;
			}
			if(get_animal!="")
			{
			 bb+="&animal="+get_animal;
			}
			
			 window.location.href=url+bb;
			 
		  
	}); 
	
	$(".select-del").click(function(){ 
		
			var removeTag = $.query.REMOVE("tag");
			 window.location.href="http://demo.ad.megais.com/yomo_test/"+removeTag;
			 return false;
	}); 
});

function form_submit()
{
		var get_area =$.query.get("area");
		var get_animal =$.query.get("animal");
		var get_keyword =$.query.get("keyword");
		var get_tag =encodeURIComponent($.query.get("tag"));	
		var keyword=$('input[name=k]').val() ; 
			//alert(keyword);
			if(keyword=="請輸入關鍵字")
			{
			var oldQueryAgain = $.query.REMOVE("keyword");
			//alert(oldQueryAgain);
			 window.location.href="http://demo.ad.megais.com/yomo_test/"+oldQueryAgain;
			 return false;
			}
		    if(keyword!="")
			{
			  bb+="keyword="+keyword;
			}
		    if(get_area!="") 
			{
			  bb+="&area="+get_area;
			}
			if(get_tag!="")
			{
			   bb+="&tag="+get_tag;
			}
			if(get_animal!="")
			{
			 bb+="&animal="+get_animal;
			}
		
		   window.location.href=url+bb;



}
//=================關鍵字=================//

$(function(){

	$('.key').click(function(){
	var a =$(this).text();
	
	$('input[name=k]').val(a);
	});
});

//=================mouseover&圖片移入放大=================//
function imgZoom(){
	
	//mouseover
	$(".box, #index .box_big").hover(function(){
		$(this).css("background-color","#f8f8f8");
		$(this).find(".box_bottom").css("background-color","#eee");
	},function(){
		$(this).css("background-color","#fff");
		$(this).find(".box_bottom").css("background-color","#f8f8f8");
	});
	
	$(".message_box li.message").hover(function(){
		$(this).css("background-color","#f8f8f8");
	},function(){
		$(this).css("background-color","#fff");
	});
	
	//div移入放大圖片
	// 設定遮罩的透明度及寬高, 位移縮放值
	var _overlayOpacity = 1, 
		_zoomWidthDiff = 25, 
		_zoomHeightDiff = 25, 
		_marginTopDiff = -12, 
		_marginLeftDiff = -12;
 
	// 把有 a.abgne-zoom-out 元素抓出來一一改造
	$('a.abgne-zoom-out').each(function(){
		// 先取得圖片及移除包裹圖的超連結
		// 並重新加上新的外框及產生超連結遮罩
		var $this = $(this), 
			$box = $this.closest('div'),
			$img = $this.find('img').unwrap(),  
			$frame = $img.wrap('<div class="abgne-frame-20120208"></div>').parents('.abgne-frame-20120208'), 
			$overlay = $('<a href="'+$this.attr('href')+'" class="overlay"></a>').css('opacity', _overlayOpacity);
			
 
		// 設定外框的寬高跟圖片寬高一樣
		// 並加入遮罩
		$frame.css({
			width: $img.width(),
			height: $img.height()
		});
		
		$overlay.insertBefore($img);
 
		// 當滑鼠移入及移出遮罩時
		
		$box.hover(function(e){
			// 把圖片的寬高依縮放值加大
			// 並變更 margin-left 及 margin-top
			$img.stop(false, true).animate({
				width: '+=' + _zoomWidthDiff + 'px',
				height: '+=' + _zoomHeightDiff + 'px',
				marginTop: _marginTopDiff,
				marginLeft: _marginLeftDiff
			},300);
 
			// 遮罩變成完全透明
			$(this).stop(false, true).animate({
				opacity: 1
			});
		}, function(){
			// 把圖片的寬高依縮放值減少
			// 並變更 margin-left 及 margin-top
			$img.stop(false, true).animate({
				width: '-=' + _zoomWidthDiff + 'px',
				height: '-=' + _zoomHeightDiff + 'px',
				marginTop: 0,
				marginLeft: 0,
				'border-radius': 5
			});
 
			// 遮罩變成完全指定透明度
			$(this).stop(false, true).animate({
				opacity: _overlayOpacity
			},300);
		});
	});
};
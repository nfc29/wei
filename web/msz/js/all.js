// JavaScript Document

var boxheight = 250;
var imgary=[];

$(function(){
	
	$('.reported, .bloggers, .menu, .news, .news_list').rollbar({zIndex:15,wheelSpeed:20});//scrollbar
	
	for(i=0;i<totalbg;i++){
		imgary.push('images/bg/'+page+(i+1)+'.jpg');
	};
	
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.")
	{
		startBg();
	}else{
		$("body").queryLoaderHack({
			backgroundColor: "#000",   //預載的背景顏色   預設黑色
			percentage: false,			//是否顯示百分比  預設關閉
			//percentageTop: "130px",		//百分比位置  預設0
			//percentageLeft: "0",		//百分比位置  預設0
			//percentageTextAlign: "center",    //百分比文字對齊方式  預設center
			//percentageFontSize: "10px",		//百分比文字大小  預設2em
			//percentageColor: "#FFF",    //百分比文字顏色(代碼)  預設白色
			//percentageFontFamily: 'Arial',     //百分比數字字型
			progressbg: "images/progressbg.jpg",  //進度表背景
			progressbar:  "images/progressbar.jpg",  //進度條圖案
			progressbarTop : "0px",   //進度條位置
			progressbarLeft : "0px", 	//進度條位置
			onComplete: startBg()
		});
	};
	
	$('#next').hover(function(){
		$(this).stop().animate({'right': '15px'}, 100);
	}, function(){
		$(this).stop().animate({'right': '20px'}, 100);
	});
	
	$('#prev').hover(function(){
		$(this).stop().animate({'left': '15px'}, 100);
	}, function(){
		$(this).stop().animate({'left': '20px'}, 100);
	});
	
	//box預設
	//$('#box').css({height : 0, marginTop : 0});
	
	$('#next, #prev').delay(1000).stop().fadeOut(1000);
	
	var isblock = true;
	
	//box開闔
	$('.open').click(function(){
		$(this).stop().fadeOut(200);
		$('#box').stop().animate({
			height : boxheight,
			marginTop : (boxheight / 2) * -1,
			opacity : 1
		}, 200, 'easeOutBack');
		$('#box').find('.content').delay(500).fadeIn(700);
		$('#next, #prev').fadeOut(1000);
		isblock = true;
		return false;
	});
	
	$('#close').click(function(e){
		$('#box').stop().animate({
			height : 0,
			marginTop : 0,
			opacity : 1
		}, 200);
		$('#box').find('.content').fadeOut(700);
		$('.open').fadeIn(500);
		$('#next, #prev').fadeIn(1000);
		isblock = false;
		if(isblock == true){
			$('.open').fadeOut(200);
		}else{
			$('.open').fadeIn(200).stop().animate({
				left: e.pageX-25, 
				top: e.pageY-25,
				opacity:1
			}, 1000, 'easeOutQuad');
		};
		return false;
	});
	
	if(isblock == true){
		$('.open').fadeOut(200);
	}else{};
	$('h1, #next, #prev, #menu, .menu2, .copyright, a.en, a.tw, a.home, a.fb').hover(function(){
		if(isblock == false){
			$('.open').stop().fadeOut();
		}else{};
	}, function(){
		if(isblock == true){
			$('.open').stop().fadeOut();
		}else{
			$('.open').stop().fadeIn();
		};
	});
	
	//物件跟隨滑鼠
	$('#wrap').mousemove(function(e){
		if(isblock == true){
			$('.open').fadeOut(200);
		}else{
			$('.open').fadeIn(200).stop().animate({
				left: e.pageX-25, 
				top: e.pageY-25,
				opacity:1
			}, 400, 'easeOutBack');
		};
	});
});

function startBg(){
	bg();
	$('#box').delay(1000).animate({
		height : boxheight,
		marginTop : (boxheight / 2) * -1,
		opacity : 1
	}, 200, 'easeOutBack');
	$('#box').find('.content').delay(1500).fadeIn(700);
};

function bg(){
	$('#wrap').fadeIn(700);
	$('#wrap').bgStretcher({
		images: imgary,//['images/bg/index01.jpg', 'images/bg/index02.jpg', 'images/bg/index03.jpg'],
		imageWidth: 1000, 
		imageHeight: 665, 
		slideDirection: 'N',
		slideShowSpeed: 1200,
		nextSlideDelay: 5000,
		transitionEffect: 'fade',
		sequenceMode: 'normal',
		buttonPrev: '#prev',
		buttonNext: '#next',
		pagination: '#nav',
		anchoring: 'center center',
		anchoringImg: 'center center',
		preloadImg:	true
	});
};

function menu(){
	// 先取得必要的元素並用 jQuery 包裝
	// 再來取得 $block 的寬度及設定動畫時間
	var $block = $('#box'), 
		$slides = $block.find('.content'), 
		$ul = $slides.find('.menu'), 
		_width = $slides.width(), 
		_left = _width * -1, 
		_animateSpeed = 500;
 
	// 先把最後一個 li 的內容插入到第一個 li 前面
	// 並設定 $ul 的 left 及 width
	$ul.find('li:first').before($ul.find('li:last')).end().css({
		left: _left,
		width: _width * ($ul.find('li').length + 1)
	});
 
	// 當點擊到 a.prev 時
	$block.find('a.prev').click(function(){
		// 移動 $ul
		$ul.stop(false, true).animate({'left' : _left + _width}, _animateSpeed, 'easeOutQuad' , function () {
			// 把最後一個 li 的內容插入到第一個 li 前面
			$ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
		});
		return false;
	});
	
	$block.find('a.prev').hover(function(){
		$(this).stop().css({left : -2});
	},function(){
		$(this).stop().css({left : 0});
	});
 
	// 當點擊到 a.next 時
	$block.find('a.next').click(function(){
		// 移動 $ul
		$ul.stop(false, true).animate({'left' : _left - _width}, _animateSpeed, 'easeOutQuad', function () {
			// 把第一個 li 的內容插入到最後一個 li 後面
			$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
		});
		return false;
	});
	
	$block.find('a.next').hover(function(){
		$(this).stop().css({right : -2});
	},function(){
		$(this).stop().css({right : 0});
	});
 
	$block.find('a').focus(function(){
		this.blur();
	});
};

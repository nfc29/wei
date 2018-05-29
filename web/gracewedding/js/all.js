// JavaScript Document

//loading
$(document).ready(function(){
	var loading = '<div class="loading"></div>';
	$('body').append(loading);
	$('.news_content').rollbar({zIndex:100,wheelSpeed:10});//scrollbar
	$('#block, .box, .gallerybar').css({ display:'block', opacity:0});
});

var preload_pictures  = function(picture_urls, callback)
{
    var loaded  = 0;

    for(var i = 0, j = picture_urls.length; i < j; i++)
    {
        var img     = new Image();

        img.onload  = function()
        {                               
            if(++loaded == picture_urls.length && callback)
            {
                callback();
            }
        }

        img.src = picture_urls[i];
    }
};

function startBg(){
	$('#wrap').fadeIn(700);
	$('#wrap').bgStretcher({
		images: imgary,//['images/bg/index01.jpg', 'images/bg/index02.jpg', 'images/bg/index03.jpg'],
		imageWidth: 1200, 
		imageHeight: 800, 
		slideShowSpeed: 1200,
		nextSlideDelay: 5000,
		pagination: '#nav',
		anchoring: 'center center',
		anchoringImg: 'center center'
	});
	
	$('.loading').fadeOut(500, function(){
		$(this).remove();
	});
	
	onResize();

	$('#nav').animate({
		bottom:50, 
		opacity:1
	},700 , 'easeOutBack');
};

var imgary=[];
$(function(){
	
	//背景輪播
	//var page="index";
	//var totalbg=3;
	
	$('#wrap').bgStretcher();
	
	for(i=0;i<totalbg;i++){
		imgary.push('images/bg/'+page+(i+1)+'.jpg');
	}
	
	//全部load完
	//preload_pictures(imgary,startBg);
	//load第一張
	preload_pictures(new Array(imgary[0]),startBg);
	//  Initialize Backgound Stretcher	   
	
	$(window).resize(onResize);
	
});

function onResize(){
	_windowWidth = $(window).width();
	
	$('#block').stop().animate({
		left : '1.6%',
		opacity : 1
	}, 400 , 'easeOutBack');	
	
	$('.gallerybar').stop().delay(50).animate({
		left : 187,
		opacity : 1
	}, 400 , 'easeOutBack',function(){
		$('.menu03').addClass('now');
		$('.now').animate({
			opacity : 1
		}, 200);
	});
};

function directorOpen(){
	$box1.delay(300).animate({
		top : '50%',
		left : '50%',
		height : boxheight,
		marginTop : (boxheight / 2 + 30) * -1,
		opacity : 1,
		zIndex : 8
	}, 500);
	isBlock = 1;
};

function directorClose(){
	$box1.stop().animate({
		top : '50%',
		left : '20%',
		height : boxheight,
		marginTop : (boxheight / 2 + 30) * -1,
		opacity : 0,
		zIndex : 7
	}, 500);
};

function teamOpen(){
	$box2.delay(300).animate({
		top : '50%',
		left : '50%',
		height : boxheight2,
		marginTop : (boxheight2 / 2 + 30) * -1,
		opacity : 1,
		zIndex : 8
	}, 500);
	isBlock = 2;
};

function teamClose(){
	$box2.stop().animate({
		top : '50%',
		left : '80%',
		height : boxheight2,
		marginTop : (boxheight2 / 2 + 30) * -1,
		opacity : 0,
		zIndex : 7
	}, 500);
};

//取消右鍵-----------------------------------------
function clickIE4(){
	if (event.button==2){
		return false;
	}//end if
}//end func

function clickNS4(e){
	if (document.layers||document.getElementById&&!document.all){
		if (e.which==2||e.which==3){
		return false;
		}//end if
	}//end if
}//end func

function OnDeny(){
	if(event.ctrlKey || event.keyCode==78 && event.ctrlKey || event.altKey || event.altKey && event.keyCode==115){
	return false;
	}//end if
}

if (document.layers){
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;
	document.onkeydown=OnDeny();
}else if (document.all&&!document.getElementById){
	document.onmousedown=clickIE4;
	document.onkeydown=OnDeny();
}//end if

document.oncontextmenu=new Function("return false");
//-----------------------------------------------
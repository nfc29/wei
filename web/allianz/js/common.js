(function($){
    var _windowObj = {},
    _indexObj = {};
    
	$(function(){
		if(Fun.detectmobile.isMobile){
			location.href = 'm/';
		}
		$('.section').automove({paused:true});
		$('.obj-news-txt-content, .obj-about-txt-content, .obj-more-txt-content').rollbar({zIndex:100, wheelSpeed:20, top:0, pathPadding:10, sliderOpacityDelay:100, lazyCheckScroll:100});
		
		$('#fullpage').fullpage({
			//anchors: ['home', 'news', 'about', 'more'],
			//menu: '.menu',
			scrollingSpeed: 700,
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
		//$.fn.fullpage.setRecordHistory(false);
		setStar();
		setButton();
		setEventListenr();
	});
	
	function setButton(){
		$('.menu-control a').on('click', function(e){
			e.preventDefault();
			menuChange(true);
		});

		$('.menu-btn-close a').on('click', function(e){
			e.preventDefault();
			menuChange();
		});

		$('.menu-open li a').on('click', function(e){
			e.preventDefault();
			var className = $(this).parent().attr('class').split(' ')[0];
			switch(className){
				case "menu-home":
					stageMoveTo('index');
				break;
				case "menu-news":
					stageMoveTo('news');
				break;
				case "menu-about":
					stageMoveTo('about');
				break;
				case "menu-more":
					stageMoveTo('more');
				break;

			}
			window.trackingEvent(className);
		})

		$('.obj-btn-gostep2').on('click', function(e){
			e.preventDefault();
			stageMoveTo('news');
		});

		$('.obj-btn-openVideo').on('click', function(e){
			e.preventDefault();
			$('#newsVideo').fadeIn();
			$('#newsVideo iframe').attr('src', 'https://www.youtube.com/embed/QQu8yv5qnGY?rel=0&autoplay=1');
		});

		$('#newsVideo .video-btn-close').on('click', function(e){
			e.preventDefault();
			$('#newsVideo').fadeOut();
			$('#newsVideo iframe').attr('src', '');
		});

		$('.obj-news-txt-content, .obj-about-txt-content, .obj-more-txt-content').on('mouseenter', function(e){
			$.fn.fullpage.setAllowScrolling(false);
		}).on('mouseleave', function(e){
			$.fn.fullpage.setAllowScrolling(true);
		});

		$('.scroll-remind').on('click', function(e){
			if($(this).find('span').hasClass('down')){
				$.fn.fullpage.moveSectionDown();
			}else{
				$.fn.fullpage.moveTo(1);
			}
		});

		$('.fb').on('click', function(e){
			window.open('https://www.facebook.com/sharer/sharer.php?u='.concat(encodeURIComponent('http://demo.ad.megais.com/allianz_201607/fb.html?rnd' +  parseInt(Math.random() * 10000))));
		});
	}

	function setEventListenr(){
		$(window).on('resize', function(e){
			_windowObj.centerY = parseInt($(window).height() / 2);
			_windowObj.centerX = parseInt($(window).width() / 2);
		}).trigger('resize');

		$('body').on('mousemove', function(e){
			console.log('mousemove');
			var dis = {};
			dis.y = e.pageY - _windowObj.centerY;
			dis.x = e.pageX - _windowObj.centerX;
			mouseMove(dis);
			
		});

		/*$('.wrapper').on('scroll', function(e){
			scrollChange();
		});*/
	}

	function mouseMove(pObj){
		console.log(pObj);
		$('.obj-news-people01').css(getDisCss(pObj, 30));
		$('.obj-news-people02').css(getDisCss(pObj, 20));
		$('.obj-news-people03').css(getDisCss(pObj, 10));
		$('.news h2.obj').css(getDisCss(pObj, 50));
		$('.obj-bg-house').css(getDisCssForBackground(pObj, 30));
		//console.log($('.obj-bg-house').css('background-position'));
	}

	function getDisCss(pObj, pNum){
		var css = {};
		css.marginTop = -parseInt(pObj.y / pNum);
		css.marginBottom = css.marginTop;
		css.marginLeft = -parseInt(pObj.x / pNum);
		css.marginTop += 'px';
		css.marginBottom += 'px';
		css.marginLeft += 'px';
		return css;
	}

	function getDisCssForBackground(pObj, pNum){
		var css = {};
		css.x = 50 + parseInt(pObj.x / pNum) / 10;
		css.y = 100/* - parseInt(pObj.y / pNum) / 10*/;
		css.x += '%';
		css.y += '%';
		css["background-position"] = css.x + " " + css.y;
		delete css.x;
		delete css.y;
		return css;
	}

	function setStar(){
		_indexObj.starObj = {};
		_indexObj.starObj.num = 12;
		_indexObj.starObj.radius = 320;
		_indexObj.starObj.strAngle = -90;
		_indexObj.starObj.totalAngle = 360;
		_indexObj.starObj.addAngle = _indexObj.starObj.totalAngle / _indexObj.starObj.num;
		for(var setNum = 0; setNum < _indexObj.starObj.num; setNum++){
			var starEle = renderStar(), obj = {}, cssObj = {};
			obj.angle = _indexObj.starObj.strAngle + setNum * _indexObj.starObj.addAngle;
			obj.nowAngle = obj.angle - _indexObj.starObj.totalAngle;
			starEle.data('data', obj);
			starEle.css('opacity', 0);
			$('.starBox').append(starEle);
		}
		_indexObj.starObj.children = $('.starBox .star');
		_indexObj.starObj.unRndObj = new UnRandom(_indexObj.starObj.children.length);

		_indexObj.sampleEle = $('<div></div>');
		_indexObj.moreTl = new TimelineLite({paused:true});

		_indexObj.moreTl.add([
			TweenMax.to(_indexObj.sampleEle, 2, {top:360, onUpdate:starUpdate})
		])

		_windowObj.remindEle = $('.scroll-remind');
		TweenMax.to(_windowObj.remindEle.find('span'), 0.5, {marginTop:-5, yoyo:true, repeat:-1, ease:Linear.easeNone});

	}

	function renderStar(){
		var ele = '';
		ele += '<div class="obj star"></div>';

		return $(ele);
	}

	function menuChange(pBol){
		pBol = pBol || false;
		var ele = $('.menu-open'), moveObj = {};
		moveObj.left = "-100%";
		if(pBol){
			moveObj.left = "0%";
		}
		TweenMax.to(ele, 0.5, moveObj);
	}

	function stageMoveTo(pStr){
		var pNum = 1;
		switch(pStr){
			case "index":
				pNum = 1;
			break;
			case "news":
				pNum = 2;
			break;
			case "about":
				pNum = 3;
			break;
			case "more":
				pNum = 4;
			break;
		}
		$.fn.fullpage.moveTo(pNum);
		menuChange();

	}

	function changeStage(pNum, pBol){
		pBol = pBol || false;
		var ele = $('.section').eq(pNum - 1);
		if(pBol){
			ele.automove_play();
			changeOther(pNum);
			if(pNum == 4){
				_indexObj.moreTl.timeScale(1);
				_indexObj.moreTl.play();
				starTimerStart();
			}
		}else{
			ele.automove_reverse();
			if(pNum == 4){
				_indexObj.moreTl.timeScale(2);
				_indexObj.moreTl.reverse();
				starTimerCancel();
			}
		}
	}

	function changeOther(pNum){

		if(pNum > 1 && !_indexObj.isntTop){
			_indexObj.isntTop = true;
			TweenMax.to($('.menu-control'), 0.5, {marginTop: -70});
		}else if(pNum == 1 && _indexObj.isntTop ){
			delete _indexObj.isntTop;
			TweenMax.to($('.menu-control'), 0.5, {marginTop: 0});
		}

		if(pNum == 4 && !_indexObj.isntBottom){
			_indexObj.isntBottom = true;
			_windowObj.remindEle.find('span').attr('class','p-abs up');
			_windowObj.remindEle.find('b').html('top');
		}else if(pNum < 4 && _indexObj.isntBottom){
			delete _indexObj.isntBottom;
			_windowObj.remindEle.find('span').attr('class','p-abs down');
			_windowObj.remindEle.find('b').html('scroll');
		}
		console.log(pNum)
	}

	function starUpdate(){
		_indexObj.starObj.children.each(function(i){
			var ele = $(this)
			, data = ele.data('data')
			, topNum = parseInt(_indexObj.sampleEle.css('top'))
			, moveAngle = data.nowAngle + topNum
			, cssObj = { opacity: 0};
			if(moveAngle >= -120){
				cssObj = getCss(moveAngle);
				/*if(i == 0){	
					console.log(cssObj);
				}*/
			}
			
			ele.css(cssObj);
		});
		//console.log('starUpdate');
	}

	function getCss(pNum){
		var css = {}, radianNum = (pNum) * Math.PI / 180, disNum = 0;
		css.top = parseInt(_indexObj.starObj.radius * Math.sin(radianNum), 10);
		css.left = parseInt(_indexObj.starObj.radius * Math.cos(radianNum), 10);
		if(pNum < _indexObj.starObj.strAngle){
			disNum = (_indexObj.starObj.strAngle - pNum) * -1;
			css.top += disNum * 5;
		}
		css.opacity = 1 - parseInt((disNum / _indexObj.starObj.addAngle) * 100) / 100;
		css.top += 'px';
		css.left += 'px';
		return css;
	}

	function starTimerStart(){
		_indexObj.starObj.timer = window.setTimeout(starTimerComplete, 2000 + parseInt(Math.random() * 2000));
		console.log("starTimerStart");
	}

	function starTimerComplete(){
		starTimerCancel();
		var showNum = 2 + parseInt(Math.random() * 2);
		while(showNum > 0){
			showNum --;
			starSingleMove(_indexObj.starObj.children.eq(_indexObj.starObj.unRndObj.getRandomNum()))
		}
		starTimerStart();
	}

	function starSingleMove(pEle){
		TweenMax.to(pEle, 0.25, {scale:1.2, ease:Circ.easeOut});
		TweenMax.to(pEle, 0.5, { delay: 0.25, scale:1, ease:Back.easeOut});
	}

	function starTimerCancel(){
		if(_indexObj.starObj.timer){
			window.clearTimeout(_indexObj.starObj.timer);
			delete _indexObj.starObj.timer;
		}
	}

})(jQuery);
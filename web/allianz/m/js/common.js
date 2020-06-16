(function($){
    var _windowObj = {},
    _indexObj = {};
	$(function(){
		init();
	});
	
	function init(){
		setStar();
		setMove();
		setButton();
		setEventListenr();
	}

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
			window.trackingEvent('m_' + className);
		});

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
		
		$('.fb').on('click', function(e){
			e.preventDefault();
			window.open('https://www.facebook.com/sharer/sharer.php?u='.concat(encodeURIComponent('http://demo.ad.megais.com/allianz_201607/fb.html?rnd' +  parseInt(Math.random() * 10000))));
		});

		$('.line').on('click', function(e){
			e.preventDefault();
			window.location.href = 'http://line.naver.jp/R/msg/text/?'.concat(encodeURIComponent('那個週末我與吳尊有約了，你要一起來嗎？\n來自德國，深耕台灣的安聯投信，邀請您與孩子一起來闖關，7/30(六)~7/31(日)在台北松菸文創園區廣場，跟吳尊一起體驗歐洲足球的精彩魅力！還能一人一腳做公益，鼓勵主動的年輕人為夢想揮灑色彩。\nhttp://event.allianzgi.com.tw/MKT/europeancarnival/'))
			//window.open('http://line.naver.jp/R/msg/text/?'.concat(encodeURIComponent('不只體驗歐洲足球魅力，還能一人一腳做公益！7/30(六)~7/31(日)台北文創大樓前廣場，吳尊邀請您一起來足動傳愛！ http://demo.ad.megais.com/allianz_201607/fb.html'));
		});
	}

	function setEventListenr(){
		$(window).on('resize', function(e){
			_windowObj.h = $(window).height();
			_windowObj.docH = 4000;

			console.log('_windowObj.docH=',_windowObj.docH);
			scrollChange();
		}).trigger('resize');

		$('.wrapper').on('scroll', function(e){
			scrollChange();
		});
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
	}

	function renderStar(){
		var ele = '';
		ele += '<div class="obj star"></div>';

		return $(ele);
	}

	function setMove(){
		var scrollTop = $('.wrapper').scrollTop()
		_indexObj.indexEle = $('#indexStage');
		_indexObj.indexEle.top = scrollTop + _indexObj.indexEle.offset().top;
		_indexObj.indexEle.automove(/*{paused:true}*/);
		_indexObj.newsEle = $('#newsStage');
		_indexObj.newsEle.top = scrollTop + _indexObj.newsEle.offset().top;
		_indexObj.newsEle.automove({paused:true});
		_indexObj.newsContentEle = $('#newsContentStage');
		_indexObj.newsContentEle.top = scrollTop + _indexObj.newsContentEle.offset().top;
		_indexObj.newsContentEle.automove({paused:true});
		_indexObj.aboutEle1 = $('#aboutStage .about, #aboutStage .about-txt');
		_indexObj.aboutEle1.top = scrollTop + $('#aboutStage .main').offset().top;
		_indexObj.aboutEle1.automove({paused:true});
		_indexObj.aboutEle2 = $('#aboutStage .obj-btn-about, #aboutStage .obj-bg-color');
		_indexObj.aboutEle2.top = scrollTop + $('#aboutStage .obj-btn-about').offset().top;
		_indexObj.aboutEle2.automove({paused:true});
		_indexObj.moreEle = $('#moreStage');
		_indexObj.moreEle.top = scrollTop + _indexObj.moreEle.offset().top;
		_indexObj.moreEle.automove({paused:true});
		_indexObj.disObj = {showNum:300, hideNum: 200};

		_indexObj.sampleEle = $('<div></div>');
		_indexObj.moreTl = new TimelineLite({paused:true});

		_indexObj.moreTl.add([
			TweenMax.to(_indexObj.sampleEle, 2, {top:360, onUpdate:starUpdate})
		])

		_windowObj.remindEle = $('.scroll-remind');
		TweenMax.to(_windowObj.remindEle.find('span'), 0.5, {marginTop:-5, yoyo:true, repeat:-1, ease:Linear.easeNone});

		/*window.setTimeout(function(){
			_indexObj.indexEle.automove_play();
		}, 1000);*/
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

	function menuChange(pBol){
		pBol = pBol || false;
		var ele = $('.menu-open'), moveObj = {};
		moveObj.left = "-100%";
		if(pBol){
			moveObj.left = "0%";
		}
		TweenMax.to(ele, 0.5, moveObj);
	}

	function menuControlBtnMove(pNum){
		var cssObj = {}, maxTop = 125;
		cssObj.marginTop = pNum;
		if(cssObj.marginTop > maxTop) cssObj.marginTop = maxTop;
		cssObj.marginTop *= -1;
		cssObj.marginTop += 'px';
		$('.menu-control').css(cssObj);
	}

	function stageMoveTo(pStr){
		var pNum = 0;
		switch(pStr){
			case "index":
				pNum = 0;
			break;
			case "news":
				pNum = _indexObj.newsEle.top;
			break;
			case "about":
				pNum = _indexObj.aboutEle1.top;
			break;
			case "more":
				pNum = _indexObj.moreEle.top;
			break;
		}

		$('.wrapper').animate({
			scrollTop: pNum
		}, 600);
		menuChange();
	}

	function stageChang(pNum){
		pNum += _windowObj.h;
		//console.log('pNum=', pNum);
		eleCheck(_indexObj.newsEle, pNum);
		eleCheck(_indexObj.newsContentEle, pNum);
		eleCheck(_indexObj.aboutEle1, pNum);
		eleCheck(_indexObj.aboutEle2, pNum);
		eleCheck(_indexObj.moreEle, pNum, true);
			/*console.log('_indexObj.moreEle.top + _indexObj.disObj.show=', (_indexObj.moreEle.top + _indexObj.disObj.showNum));
			console.log('pNum=', pNum);*/
		if(pNum >= _indexObj.moreEle.top + _indexObj.disObj.showNum && !_windowObj.remindEle.bottomBol){
			_windowObj.remindEle.bottomBol = true;
			_windowObj.remindEle.find('b').html('top');
			_windowObj.remindEle.find('span').attr('class','p-abs up');
			//console.log('change');
		}else if(pNum < _indexObj.moreEle.top + _indexObj.disObj.showNum && _windowObj.remindEle.bottomBol){
			delete _windowObj.remindEle.bottomBol;
			_windowObj.remindEle.find('b').html('scroll');
			_windowObj.remindEle.find('span').attr('class','p-abs down');

		}
	}

	function eleCheck(pEle, pNum, pOther){
		pOther = pOther || false;
		if(pNum >= pEle.top + _indexObj.disObj.showNum && !pEle.showBol){
			pEle.showBol = true;
			pEle.automove_play();
			//console.log('add1111');
			if(pOther){
				_indexObj.moreTl.timeScale(1);
				_indexObj.moreTl.play();
				starTimerStart();
			}
		}

		if(pNum < pEle.top + _indexObj.disObj.hideNum && pEle.showBol){
			delete pEle.showBol;
			pEle.automove_reverse(2);
			//console.log('add22222');
			if(pOther){
				_indexObj.moreTl.timeScale(2);
				_indexObj.moreTl.reverse();
				starTimerCancel();
			}
		}

	}

	function scrollChange(){
		var scrollTop = $('.wrapper').scrollTop();
		menuControlBtnMove(scrollTop);
		stageChang(scrollTop);
		//console.log(scrollTop);
	}

})(jQuery);
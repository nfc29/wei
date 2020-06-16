// JavaScript Document
function NumberGame(pObj){
	var _this = this,
		_gameObj = {
			gameBox		:false,
			scoreP 		:false,
			timerP 		:false,
			timeNum		:60,
			level		:1,
			addScore	:10,
			nowNum      :1,
			maxNum 		:25,
			startBol 	:false
		};

	_gameObj = $.extend(_gameObj, pObj);

	//private
	function reSetGame(){
		_gameObj.nowTimerNum = _gameObj.timeNum;
		_gameObj.nowScore = 0;
		_gameObj.level = 1;
		_gameObj.startBol = true;
		changeScoreP();
		changeTimerP();
		digitalSetting();
		countdown();
	}

	function digitalSetting(){
		_gameObj.nowNum = 1;
		_gameObj.gameBox.html("");
		var undNum = new UnRandom(_gameObj.maxNum);
		for(var setNum = 0; setNum < _gameObj.maxNum; setNum++){
			var cssObj = {};
			var disNum = 5;
			cssObj.left = disNum + setNum % 5 * (90 + disNum);
			cssObj.top = disNum + parseInt(setNum / 5, 10) * (93 + disNum);
			cssObj.left += "px";
			cssObj.top += "px";
			if(_gameObj.level >= 2){
				var scaleX = 1;
				if(Math.random() < 0.5){
					scaleX = -1;
				}
				cssObj.transform = "perspective(500px) scaleX(" + scaleX + ") ";
			}

			if(_gameObj.level >= 3){
				var rotNum = parseInt(Math.random() * 4, 10) * 90;
				cssObj.transform += "rotate(" + rotNum + "deg)";
			}
			cssObj["-webkit-transform"] = cssObj.transform;
			renderImg(undNum.getRandomNum() + 1, cssObj);
		}
	}

	function renderImg(pNum, pCss){
		var addImgSrc = Fun.str_pad(pNum, 2, "0");
		var img = '';
		img += '<span id="_id_" class="number color0_color_">';
		img += '	<img src="images/img__src_.png" height="93" width="90">';
		img += '</span>';
		img = img.replace("_id_", addImgSrc);
		img = img.replace("_color_", parseInt(Math.random() * 5, 10) + 1);
		img = img.replace("_src_", addImgSrc);
		img = $(img);
		img.on('mousedown touchstart', function(){
			if(!_gameObj.startBol) return false;
			console.log(this.id);
			if(parseInt(this.id, 10) == _gameObj.nowNum){
				$(this).attr('id', '-1').fadeOut();
				numHideMove($(this));
				_gameObj.nowScore += _gameObj.addScore;
				_gameObj.nowNum++;
				changeScoreP();
				if(_gameObj.nowNum > _gameObj.maxNum){
					_gameObj.level++;
					digitalSetting();
				}
			}
		}).css(pCss);
		_gameObj.gameBox.append(img);
		numShowMove(img);
	}

	function numHideMove(pEle){
		TweenMax.to(pEle, 0.2, {scale:1.2});
		TweenMax.to(pEle, 0.3, {scale:0, delay:0.2});
	}

	function numShowMove(pEle){
		TweenMax.fromTo(pEle, 0.3, {scale:0}, {scale:1});
	}

	function countdown(){
		changeTimerP();
		if(_gameObj.nowTimerNum <= 0){
			_gameObj.startBol = false;
			_gameObj.dtd.resolve();
			console.log("game over！");
			return false
		}
		_gameObj.nowTimerNum--;
		window.setTimeout(countdown, 1000);
	}

	function changeScoreP(){
		_gameObj.scoreP.html(Fun.str_pad(_gameObj.nowScore, 4, "0"));
	}

	function changeTimerP(){
		_gameObj.timerP.html(Fun.str_pad(_gameObj.nowTimerNum, 2, "0"));
	}

	//public
	this.startGame = function(){
		_gameObj.dtd = $.Deferred();
		reSetGame();
		return _gameObj.dtd.promise();
	}

	this.getScore = function(){
		return _gameObj.nowScore;
	}

}
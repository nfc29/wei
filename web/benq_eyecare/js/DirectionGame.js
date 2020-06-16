// JavaScript Document
function DirectionGame(pObj){
	var _this = this,
		_gameObj = {
			gameBox		:false,
			scoreP 		:false,
			timerP 		:false,
			timeNum		:60,
			initSpeed	:2,
			addSpeed	:1,
			addScore	:10,
			maxLeft 	:500,
			minLeft 	:-120,
			startBol 	:false
		};

	_gameObj = $.extend(_gameObj, pObj);
	//private
	function reSetGame(){
		_gameObj.nowTimerNum = _gameObj.timeNum;
		_gameObj.nowScore = 0;
		_gameObj.speed = _gameObj.initSpeed;
		_gameObj.startBol = true;
		_gameObj.imgAddNum = 1;
		_gameObj.imgNum = 1;
		_gameObj.gameBox.html("");
		changeScoreP();
		changeTimerP();
		countdown();
		TweenMax.ticker.addEventListener("tick", onTicker);
	}

	function onTicker(){
		if(_gameObj.startBol){
			var left = 0;
			_gameObj.gameBox.find('img').each(function(i){
				var ele = $(this);
				left = parseInt($(this).css('left'), 10);
				if(left > _gameObj.minLeft){
					var nexLeft = left - _gameObj.speed;
					$(this).css('left', nexLeft + "px");
				}else{
					if(!ele.hasClass('off')){
						gameOver();
					}
					ele.remove();
				}
			});

			if(left < _gameObj.maxLeft){
				if(left == 0) left = _gameObj.maxLeft;
				addImg(left);
			}

		}
	}

	function addImg(pLeftNum){
		pLeftNum += 140;
		renderImg({left:pLeftNum + "px"});
	}

	function renderImg(pCss){
		var dataArr = ["up", "down", "left", "right"];
		var rotArr = [-90, 90, 180, 0];
		var div = '<img id="_id_" class="direction" src="images/img_c0_src_.png" />';
		var type = parseInt(Math.random() * 4);
		var imgNum = parseInt(Math.random() * 5) + 1;
		div = div.replace("_id_", _gameObj.imgAddNum);
		div = div.replace("_src_", imgNum);
		div = $(div);
		pCss.transform = "rotate(" + rotArr[type] + "deg)";
		pCss["-webkik-transform"] = pCss.transform;
		div.css(pCss).data("data", dataArr[type]);
		_gameObj.gameBox.append(div);
		_gameObj.imgAddNum++;
	}

	function gameOver(){
		TweenMax.ticker.removeEventListener("tick", onTicker);
		if(_gameObj.countdown){
			window.clearTimeout(_gameObj.countdown);
			delete _gameObj.countdown;
		}
		
		_gameObj.startBol = false;
		_gameObj.dtd.resolve();
		console.log("game over！");
	}

	function countdown(){
		changeTimerP();
		/*switch(_gameObj.nowTimerNum){
			case 45:
			case 30:
			case 15:
				_gameObj.speed += _gameObj.addSpeed;
			break;
		}*/
		if(_gameObj.nowTimerNum <= 0){
			gameOver();
			return false
		}
		_gameObj.nowTimerNum--;
		_gameObj.countdown = window.setTimeout(countdown, 1000);
	}

	function changeScoreP(){
		_gameObj.scoreP.html(Fun.str_pad(_gameObj.nowScore, 4, "0"));
	}

	function changeTimerP(){
		_gameObj.timerP.html(Fun.str_pad(_gameObj.nowTimerNum, 2, "0"));
	}

	//public
	this.startGame = function(){
		if(_gameObj.startBol) return false;
		_gameObj.dtd = $.Deferred();
		reSetGame();
		return _gameObj.dtd.promise();
	}

	this.keyDownType = function(pType){
		if(!_gameObj.startBol) return false;
		var nowEle = $('#' + _gameObj.imgNum);
		var nowType = nowEle.data('data');
		if(nowType == pType){
			_gameObj.nowScore += _gameObj.addScore;
			switch(_gameObj.nowScore / _gameObj.addScore){
				case 56:
				case 45:
				case 35:
				case 26:
				case 18:
				case 11:
				case 5:
					_gameObj.speed += _gameObj.addSpeed;
				break;
			}
			changeScoreP();
			nowEle.addClass('off');
			TweenMax.to(nowEle, 0.3, {alpha:0.5});
			_gameObj.imgNum++;
		}else{
			gameOver();
		}
	}

	this.getScore = function(){
		return _gameObj.nowScore;
	}

}
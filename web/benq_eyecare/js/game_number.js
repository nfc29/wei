
(function($){
    var _nowGameScale = 1,
        _numberGame;
    $(function(){
        setButton();
        setEventListener();
    });

    function setButton(){
        $('.gameBox .btn_game_start').on('click', function(e){
            e.preventDefault();
            setGame();
        });

        $('#gameEnd .btn_replay, .btn_close').on('click', function(e){
            e.preventDefault();
            $('.gameBox .score span').html("0000");
            $('.gameBox .timer span').html("00");
            $('.gameBox .game_start').fadeIn();
            $('#gameEnd').hide();
            //location.href = "game.html";
        });

        $('#gameEnd .btn_fbShare').on('click', function(e){
            e.preventDefault();
            var shareUrl = "http://eyecare.benq.com.tw/fb_game.php?type=1&point=_point_&rnd=" + parseInt(Math.random()*100000, 10);
            shareUrl = shareUrl.replace("_point_", _numberGame.getScore());
            window.open('http://www.facebook.com/share.php?u='+ encodeURIComponent(shareUrl));
        });
        
    }

    function setEventListener(){
        $(window).resize(onResize);
        onResize();
    }

    function onResize(){
        var w = $(window).width();
        var changeW = 640;
        var scale = 1;
        if(w < changeW){
            scale = (w / changeW).toFixed(2);
        }

        if(scale != _nowGameScale){
            _nowGameScale = scale;
            $('.contentBox .gameBox').css({
                'transform':'scale('+_nowGameScale+')',
                '-webkit-transform':'scale('+_nowGameScale+')'
            });
            console.log($('.contentBox .gameBox .game img').height());
            $('.contentBox .index_content').css('height', (764*_nowGameScale) + 'px');

        }
    }

    function setGame(){
        if(!_numberGame){
            var initObj = {};
            initObj.scoreP = $('.gameBox .score span');
            initObj.timerP = $('.gameBox .timer span');
            initObj.gameBox = $('.gameBox .game');
            _numberGame = new NumberGame(initObj);
        }
        $.when(_numberGame.startGame()).done(gameEnd);
        $('.gameBox .game_start').hide();
    }

    function gameEnd(){
        var endMsgArr = [
            "BenQ關心您的眼睛健康，<br>提醒您多補充維生素A，<br>和富含花青素的食物喔！"
            ,"BenQ關心您的眼睛健康，<br>提醒您選用低藍光不閃爍的<br>3C產品喔！"
            ,"BenQ關心您的眼睛健康，<br>提醒您使用3C產品，<br>每30分鐘就要休息10分鐘喔！"
            ,"BenQ關心您的眼睛健康，<br>提醒您不要在燈光太暗的<br>地方看書喔！"
        ];
        $('#gameEnd .txt_result').html(endMsgArr[parseInt(endMsgArr.length * Math.random())]);
        $('#gameEnd').fadeIn().find('.score span').html(Fun.str_pad(_numberGame.getScore(), 3, '0'));
    }

})(jQuery);
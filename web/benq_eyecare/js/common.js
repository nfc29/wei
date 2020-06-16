
(function($){
    var _menuCssObj = {}
    $(function(){
        
        $('body').automove();
        setButton();
        setEventListener();
        if(!Fun.isIE8()){
            setMoveLoop();
        }
    });
    
    function setButton(){
        $('.btn_nav_open').on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('on')){
                $(this).removeClass('on').siblings('ul').slideUp(400, function(){
                    $(this).parent('.nav').css({ 'position' : 'absolute'});
                });
                _menuCssObj.display = "none";
            }else{
                $(this).parent('.nav').css({ 'position' : 'relative'});
                $(this).addClass('on').siblings('ul').slideDown();
                _menuCssObj.display = "block";
            };
        });
        
        $('.nav li a').click(function(e){
            var menu_li_class = $(this).attr('class');
            switch(menu_li_class){
                case 'btn_menu_home':
                    e.preventDefault();
                    location.href = 'index.html';
                    break;
                case 'btn_menu_rules':
                    e.preventDefault();
                    location.href = 'rules.html';
                    break;
                case 'btn_menu_signUp':
                    e.preventDefault();
                    location.href = 'signUp.html';
                    break;
                case 'btn_menu_game':
                    e.preventDefault();
                    location.href = 'game.html';
                    break;
                case 'btn_menu_product':
                    e.preventDefault();
                    location.href = 'product.html';
                    break;
                case 'btn_menu_fbShare':
                    e.preventDefault();
                    window.open('http://www.facebook.com/share.php?u='+ encodeURIComponent("http://eyecare.benq.com.tw/fb_event.php"+"?rnd=" + parseInt(Math.random()*10000)));
                    break;
            }
            window.trackingEvent("menu_" + menu_li_class, "click");
        });

        $('.footer_nav ul a').on('click', function(e){
            e.preventDefault();
            var index = $(this).parent().index();
            var url = "";
            switch(index){
                case 0:
                    window.open("http://www.benq.com.tw/");
                break;
                case 1:
                    location.href = "mailto:PR@BenQ.com";
                break;
                case 2:
                    window.open("https://www.facebook.com/benq.tw?fref=ts");
                break;
            }
            window.trackingEvent("footer_bt" + (index + 1), "click");
        })
    }

    function setEventListener(){
        $(window).resize(onResize);
        onResize();
    }

    function onResize(){
        if($(window).width() >= 641){
            $('.nav ul').show();
        }else{
            $('.nav ul').css(_menuCssObj);
        }
    }

    function setMoveLoop(){
        //背景 雲動態
        cloudLoop();
    }

    function cloudLoop(){
        var delayArr = [0, 0.2, 0.5];
        $('.bg_cloud img').each(function(i){
            var leftNum = 40 - parseInt(Math.random() * 10);
            if(Math.random() < 0.5){
                leftNum *= -1;
            }
            var delayNum = delayArr[parseInt(Math.random() * delayArr.length)];
            cloudMove($(this),leftNum, delayNum)
        });
    }

    function cloudMove(pEle, pLeft, pDelay){
        pDelay = pDelay || 0;
        var timerNum = 2;
        TweenMax.to(pEle, timerNum, {marginLeft:pLeft, delay:pDelay, ease:Linear.easeNone});
        TweenMax.to(pEle, timerNum, {marginLeft:0, delay:timerNum + pDelay, ease:Linear.easeNone, onComplete:cloudMove, onCompleteParams:[pEle, pLeft]});
    }

})(jQuery);
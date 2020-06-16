
(function($){
    $(function(){
        
        setButton_index();
        
        if(!Fun.isIE8()){
            setMoveLoop();
        }
    });
    
    function setButton_index(){
        $('.drBox .indexDr').click(function(e){
            e.preventDefault();
            /*var menu_li_class = $(this).attr('class').split(" ")[1];
            switch(menu_li_class){
                case 'man01':
                    location.href = 'game.html';
                    break;
                case 'man02':
                    location.href = 'rules.html';
                    break;
                case 'man03':
                    location.href = 'signUp.html';
                    break;
                case 'man04':
                    location.href = 'product.html';
                    break;
            }*/

            if($(this).hasClass('man01')){
                location.href = 'game.html';
            }
            if($(this).hasClass('man02')){
                location.href = 'rules.html';
            }
            if($(this).hasClass('man03')){
                location.href = 'signUp.html';
            }
            if($(this).hasClass('man04')){
                location.href = 'product.html';
            }
        });
    }

    function setMoveLoop(){
        handLoop();
    }

    function handLoop(){
        //首頁 手部動態
        var rotArr = [-10, 20, 25, 30];
        var delayArr = [0, 0.2, 0.4, 0.6];
        $('.hand').each(function(i) {
            var delayNum = delayArr.splice(parseInt(delayArr.length * Math.random()), 1)[0];
            handMove($(this), rotArr[i], delayNum);
        });
    }

    function handMove(pEle, pRotNum, pDelay){
        pDelay = pDelay || 0;
        var timerNum = 2;
        TweenMax.to(pEle, timerNum, {rotation:pRotNum, delay:pDelay, ease:Linear.easeNone});
        TweenMax.to(pEle, timerNum, {rotation:0, delay:timerNum + pDelay, ease:Linear.easeNone, onComplete:handMove, onCompleteParams:[pEle, pRotNum]});
    }

})(jQuery);
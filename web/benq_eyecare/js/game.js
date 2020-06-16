
(function($){
    $(function(){
        
        if(!Fun.isIE8()){
            setMoveLoop();
        }
        /*
        var cloudHeight = $('.indexCloudBox').height();
        $('.drBox').css({top : cloudHeight + 72 });
        */
    });

    function setMoveLoop(){
        boxBtLoop();
    }

    function boxBtLoop(){
        //首頁 手部動態
        var delayArr = [0, 0.2];
        $('.gameList_btn img').each(function(i) {
            var delayNum = delayArr.splice(parseInt(delayArr.length * Math.random()), 1)[0];
            boxBtMove($(this), delayNum);
        });
    }

    function boxBtMove(pEle, pDelay){
        pDelay = pDelay || 0;
        var timerNum = 0.5;
        TweenMax.to(pEle, 0.2, {scale:0.95, delay:pDelay/*, ease:Linear.easeNone*/});
        TweenMax.to(pEle, timerNum, {scale:1, delay:0.2 + pDelay, ease:Back.easeOut});

        TweenMax.delayedCall(3, boxBtMove, [pEle, pDelay]);
    }

})(jQuery);
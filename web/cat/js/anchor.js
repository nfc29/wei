$(function(){
	anchor_tag();
	$(window).resize(anchor_tag);
});

function anchor_tag(){
	var hashStr = location.hash.split('#')[1];
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var _anchor_height = $('.header').height();
    var _p1 = $('#part01').offset().top,
        _p2 = $('#part02').offset().top,
        _p3 = $('#part03').offset().top;
    var _p1_height = _p1 + _anchor_height,
        _p2_height = _p2 + _anchor_height,
        _p3_height = _p3 + _anchor_height;

    switch(hashStr){
        case 'part01':
            //e.preventDefault();
            $body.scrollTop(200);
            break;
        case 'part02':
            //e.preventDefault();
            $body.scrollTop(_p2_height);
            break;
        case 'part03':
            //e.preventDefault();
            $body.scrollTop(_p3_height);
            break;
    }
};
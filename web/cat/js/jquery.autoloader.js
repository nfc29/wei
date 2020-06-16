// JavaScript Document

(function(){
    function AutoLoader(element, settings){
        var _items = [];
        var _current = 0;
        var _errors = [];
        element.find('*:not(script)').each(function () {
            var url = "";
    
            if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
                url = $(this).css('background-image');
                if (url.indexOf('url') != -1) {
                    var temp = url.match(/url\((.*?)\)/);
                    url = temp[1].replace(/\"/g, '');
                }
            } else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof ($(this).attr('src')) != 'undefined') {
                url = $(this).attr('src');
            }
    
            if (url.length > 0) {
                _items.push(url);
            }
        });
        
        for (var i = 0; i < _items.length; i++) {
            if (loadImg(_items[i]));
        }
        
        function loadImg (url) {
            var imgLoad = new Image();
            $(imgLoad).load(function () {
                console.log(this.clientWidth);
                    completeLoading();
            }).error(function () {
                _errors.push($(this).attr('src'));
                console.log($(this).attr('src'));
                completeLoading();
            }).attr('src', url);  
        }
        
        function completeLoading() {
            _current++;
            var percentNum = Math.floor(_current / _items.length * 100);
            if(settings.complete && typeof settings.complete === "function"){settings.complete(percentNum);};
        }
    }
    $.fn.autoloader = function(options){
        var defaultSetting = {
            complete:false
        }
        
        var _setting = $.extend( defaultSetting, options );
        
        return this.each(function(){
            new AutoLoader($(this), _setting)
        });
    }
})(jQuery)
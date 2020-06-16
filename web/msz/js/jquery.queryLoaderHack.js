/*
* queryLoaderHack v2 - A simple script to create a preloader for images
*
* For instructions read the original post:
* http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
*
* Copyright (c) 2011 - Gaya Kessler
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
* Version: Hack
* Last update: 03-04-2012
*
*/
(function($) {


    if (!Array.prototype.indexOf)
{
Array.prototype.indexOf = function(elt /*, from*/)
             {
             var len = this.length >>> 0;
             var from = Number(arguments[1]) || 0;
                 from = (from < 0)
                      ? Math.ceil(from)
                      : Math.floor(from);
             if (from < 0)
                 from += len;
 
                 for (; from < len; from++)
                     {
                     if (from in this &&
                     this[from] === elt)
                     return from;
                     }
             return -1;
             };
       }


    var qLimages = new Array;
    var qLdone = 0;
    var qLdestroyed = false;

    var qLimageContainer = "";
    var qLoverlay = "";
    var qLwallpaper = "";
    var qLbg = "";
    var qLbg_w = "";
    var qLbg_h = "";
    var qLbar = "";
    var qLbar_w = "";
    var qLbar_h = "";
    var qLpercentage = "";
    var qLimageCounter = 0;
    var qLstart = 0;

    var qLoptions = {
        onComplete: function () {},
        backgroundColor: "#000",
        //barHeight: 1,
        percentage: false,
        percentageTop: "0",
        percentageLeft: "0",
        percentageColor: "white",
        percentageTextAlign: "center",
        percentageFontSize: "2em",
		percentageFontFamily: "Avian",
        progressbarTop: "0",
        progressbarLeft: "0",
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function () {
            //console.log(qLoptions.completeAnimation)
            if (qLoptions.completeAnimation == "grow") {
                var animationTime = 500;
                var currentTime = new Date();
                if ((currentTime.getTime() - qLstart) < qLoptions.minimumTime) {
                    animationTime = (qLoptions.minimumTime - (currentTime.getTime() - qLstart));
                }

                $(qLbar).stop().animate({
                    "width": "100%"
                }, animationTime, function () {
                    $(this).animate({
                        top: "0%",
                        width: "100%",
                        height: "100%"
                    }, 500, function () {
                        $(qLoverlay).fadeOut(500, function () {
                            $(this).remove();
                            qLoptions.onComplete();
                        })
                    });
                });
            } else {
                $(qLoverlay).fadeOut(500, function () {
                    $(qLoverlay).remove();
                    qLoptions.onComplete();
                });
            }
        }
    };

    var afterEach = function () {
        //start timer
        if(qLbg_w && qLbg_h && qLbar_w && qLbar_h){
            var currentTime = new Date();
            qLstart = currentTime.getTime();
            createPreloadContainer();
            createProgressbar();
        }
            
        
    };

    var ajaxStart = function(file, cb) {
        $.ajax({
            url: file,
            type: 'HEAD',
            complete: cb
        });
    };

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var i = 0; qLimages.length > i; i++) {
            ajaxStart(qLimages[i], function(data){
                if(!qLdestroyed){
                    qLimageCounter++;
                    addImageForPreload(this['url']);
                }
            })
        }
    };

    var addImageForPreload = function(url) {
        var image = $("<img />").attr("src", url).bind("load", function () {
            completeImageLoading();
        }).appendTo(qLimageContainer);
    };

    var completeImageLoading = function () {
        qLdone++;

        var percentage = (qLdone / qLimageCounter) * 100;
        $(qLbar).stop().animate({
            width: (qLbar_w * percentage / 100) + "px"
        }, 200, function () {
            if (qLdone == qLimageCounter) {
                destroyQueryLoader();
            }
        });

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

    };

    var destroyQueryLoader = function () {
        $(qLimageContainer).remove();
        qLoptions.onLoadComplete();
        qLdestroyed = true;
    };

    var createOverlayLoader = function () {
        qLoverlay = $("<div id='qLoverlay'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: qLoptions.backgroundColor,
            backgroundPosition: "fixed",
            position: "fixed",
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo("body");
    };

    var createProgressbar = function () {
        var win_H = $(window).height();
        qLwallpaper = $("<div id='qLwallpaper'></div>").css({
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "auto"
        }).appendTo(qLoverlay);
        qLbg = $("<div id='qLbg'></div>").css({
            background: '#CCC url("'+qLoptions.progressbg+'")  no-repeat',
            width: qLbg_w + "px",
            height: qLbg_h + "px",
            position: "relative",
            margin: "0 auto",
            top: ((win_H - qLbg_h) / 2) + "px"
        }).appendTo(qLwallpaper);
        qLbar = $("<div id='qLbar'></div>").css({
            position: "absolute",
            background: 'url("'+qLoptions.progressbar+'")  no-repeat',
            width: "0px",
            height: qLbar_h + "px",
            overflow: "hidden",
            top: qLoptions.progressbarTop,
            left: qLoptions.progressbarLeft
        }).appendTo(qLbg);
        if (qLoptions.percentage == true) {
            qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                position: "absolute",
				fontFamily: qLoptions.percentageFontFamily,
                top: qLoptions.percentageTop,
                left: qLoptions.percentageLeft,
                width: "100%",
                fontSize: qLoptions.percentageFontSize,
                textAlign: qLoptions.percentageTextAlign,
                overflow: "hidden",
                color: qLoptions.percentageColor
            }).appendTo(qLbg);
        }
    }

    var findImageInElement = function (element) {
        var url = "";

        if ($(element).css("background-image") != "none") {
            var url = $(element).css("background-image");
        } else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            var url = $(element).attr("src");
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");
            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);
                    }
                    qLimages.push(urls[i] + extra);
                }
            }
        }
    }

    $.fn.queryLoaderHack = function(options) {
        if(options) {
            $.extend(qLoptions, options );
        }

        if(qLoptions.progressbg && qLoptions.progressbar) {
            ajaxStart(qLoptions.progressbg, function(data){
                var image = $("<img />").attr("src", qLoptions.progressbg).bind("load", function (e) {
                    //console.log(e.currentTarget);
                    var target = $(this)[0];
                    qLbg_w = 400;
                    qLbg_h = 127;
                    afterEach();
                })
            });

            ajaxStart(qLoptions.progressbar, function(data){
                var image = $("<img />").attr("src", qLoptions.progressbar).bind("load", function (e) {
                    var target = $(this)[0];
                    qLbar_w = 400;
                    qLbar_h = 127;
                    afterEach();
                })
            })
        }

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        createOverlayLoader();

        return this;
    };

})(jQuery);

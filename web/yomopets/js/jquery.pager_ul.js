﻿/*
* jQuery pager plugin
* Version 1.0 (12/22/2008)
* @requires jQuery v1.2.6 or later
*
* Example at: http://jonpauldavies.github.com/JQuery/Pager/PagerDemo.html
*
* Copyright (c) 2008-2009 Jon Paul Davies
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 
* Read the related blog post and contact the author at http://www.j-dee.com/2008/12/22/jquery-pager-plugin/
*
* This version is far from perfect and doesn't manage it's own state, therefore contributions are more than welcome!
*
* Usage: .pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PagerClickTest });
*
* Where pagenumber is the visible page number
*       pagecount is the total number of pages to display
*       buttonClickCallback is the method to fire when a pager button is clicked.
*
* buttonClickCallback signiture is PagerClickTest = function(pageclickednumber) 
* Where pageclickednumber is the number of the page clicked in the control.
*
* The included Pager.CSS file is a dependancy but can obviously tweaked to your wishes
* Tested in IE6 IE7 Firefox & Safari. Any browser strangeness, please report.
*/
(function($) {
    $.fn.pager = function(options) {

        $.extend( $.fn.pager.defaults, options);

        return this.each(function() {

        
		if(parseInt(options.pagecount)>0){
			// empty out the destination element and then render out the pager with the supplied options
			$(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
		}else{
			$(this).empty();
		}
		
            
            
            // specify correct cursor activity
            $('.pages li').mouseover(function() { document.body.style.cursor = "pointer"; }).mouseout(function() { document.body.style.cursor = "auto"; });
        });
    };

    // render and return the pager with the supplied options
    function renderpager(pagenumber, pagecount, buttonClickCallback) {

        // setup $pager to hold render
        var $pager = $('<ul class="pages"></ul>');

        // add in the previous and next buttons
        $pager.append(renderButton( $.fn.pager.defaults.first, pagenumber, pagecount, buttonClickCallback)).append(renderButton( $.fn.pager.defaults.prev, pagenumber, pagecount, buttonClickCallback));

        // pager currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases
		//20130201
		//var midPoint = parseInt($.fn.pager.defaults.mid)/2;
		//20130201
        var startPoint = 1;
        var endPoint = parseInt($.fn.pager.defaults.pagegroup);
		
        if (pagenumber > Math.ceil(endPoint/2)) {
            startPoint = pagenumber - Math.floor(endPoint/2);
            endPoint = pagenumber + Math.ceil(endPoint/2)-1;
        }
		
        if (endPoint > pagecount) {
            startPoint = pagecount - (parseInt($.fn.pager.defaults.pagegroup)-1);
            endPoint = pagecount;
        }
        if (startPoint < 1) {
            startPoint = 1;
        }

        // loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {

            var currentButton = $('<li class="page-number">' + (page) + '</li>');

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data); });
            currentButton.appendTo($pager);
        }

        // render in the next and last buttons before returning the whole rendered control back.
        $pager.append(renderButton( $.fn.pager.defaults.next, pagenumber, pagecount, buttonClickCallback)).append(renderButton( $.fn.pager.defaults.last, pagenumber, pagecount, buttonClickCallback));

        return $pager;
    }

    // renders and returns a 'specialized' button, ie 'next', 'previous' etc. rather than a page number button
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {

        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');

        var destPage = 1;

        // work out destination page for required button type
        switch (buttonLabel) {
            case $.fn.pager.defaults.first:
                destPage = 1;
                break;
            case $.fn.pager.defaults.prev:
                destPage = pagenumber - 1;
                break;
            case $.fn.pager.defaults.next:
                destPage = pagenumber + 1;
                break;
            case $.fn.pager.defaults.last:
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == $.fn.pager.defaults.first || buttonLabel == $.fn.pager.defaults.prev) {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }

        return $Button;
    }

    // pager defaults. hardly worth bothering with in this case but used as placeholder for expansion in the next version
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1,
		//20130201
		pagegroup:	5,
		first:	'first',
		prev:	'prev',
		next:	'next',
		last:	'last'
		//20130201
    };

})(jQuery);






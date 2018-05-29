// JavaScript Document
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80425111-3', 'auto');
  ga('send', 'pageview');

  
function tracking(_trackpage){	
    ga('send', 'pageview', '/'+_trackpage);
}

function trackingEvent(_trackpage,_action){
    //console.log("tracking=" + _trackpage);
    ga('send', 'event', _trackpage, _action);
}

$(document).ready(trackingSetting);

function trackingSetting()
{
	$('[megais_ga]').click(
		function()
		{
			var trackStr = $(this).attr('megais_ga');
            //console.log("trackStr=" + trackStr);
			trackingEvent(trackStr, "click");
		}
	)
    
}

/*
var nowDateTime = new Date();
var _y = nowDateTime.getFullYear();
var _m = (nowDateTime.getMonth()+1);
var _d = nowDateTime.getDate();
var _day = _y+'-'+_m+'-'+_d;
if(_day<'2015-6-1'){
	window.location.href = "http://www.honda-taiwan.com.tw/auto/";
}
*/
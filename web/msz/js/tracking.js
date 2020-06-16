// JavaScript Document
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-6614005-60']);
  _gaq.push(['_trackPageview']);
  setTimeout("_gaq.push(['_trackEvent', '10_seconds', 'read'])",10000);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
  
function tracking(_trackpage){	
	_gaq.push(['_trackPageview', '/'+_trackpage]);
}

function trackingEvent(_trackpage,_action){
	_gaq.push(['_trackEvent', _trackpage, _action]);
}

$(document).ready(trackingSetting);

function trackingSetting()
{
	$('[megais_ga]').click(
		function()
		{
			var trackStr = $(this).attr('megais_ga');
			trackingEvent(trackStr, "click");
			//console.log($(this).attr('id'));
			/*console.log("trackStr="+trackStr);
			console.log("tracking mediaStr="+mediaStr);*/
		}
	)
}


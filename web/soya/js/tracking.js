// JavaScript Document


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47926001-1', 'soyaaa.com');
  ga('send', 'pageview');



  
function tracking(_trackpage){	
    ga('send', 'pageview', '/'+_trackpage);
}

function trackingEvent(_trackpage,_action){
    ga('send', 'event', _trackpage, _action);
	console.log(_trackpage);
}

$(document).ready(trackingSetting);

function trackingSetting()
{
	$('[megais_ga]').click(
		function()
		{
			var trackStr = $(this).attr('megais_ga');
			trackingEvent(trackStr, "click");
		}
	)
}


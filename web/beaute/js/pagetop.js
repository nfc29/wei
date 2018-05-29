// JavaScript Document

$(function(){
		$('a.top').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: 0
			}, 'slow'); 
			return false;
		});
});
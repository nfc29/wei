// JavaScript Document

$(function(){

	var $picBox = $('.newsPic');
		
	$picBox.find('img').each(function(){
		_picHeight = $(this).height();
		$(this).css({marginTop:_picHeight / 2 * -1});
	})
	
	$('.newsList').find('li:even').css({backgroundColor:'#eee'});
	$('.newsList').find('li:last').css({border:0});
});
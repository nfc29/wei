// JavaScript Document

$(function(){
	
	//產品搜尋
	$('#search').val($('#search').attr("prompt")).css({color:'#888'});
	
	$('#search').focus(function() {
		if($(this).val() == $(this).attr("prompt")){
			$(this).attr("value","").css({color:'#333'});
		};
	});
	
	$('#search').blur(function() {
		if($(this).val() == "" || $(this).val() == $(this).attr("prompt")) {
			$(this).val($(this).attr("prompt")).css({color:'#888'});
		};
	});
	
	//產品列表
	$('.product_list').find('ul:last').css({ border:0});
	
	$('.product_list').find('img').hover(function(){
		$(this).stop().animate({ top:3, left:4, width:170, height:170} ,100);
	},function(){
		$(this).stop().animate({ top:8, left:9, width:160, height:160} ,100);
	});
	
});
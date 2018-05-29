// JavaScript Document

$(function(){
	
	//圖片置中
	var $picBox = $('.teaching_main ul li a');
		
	$picBox.find('img').each(function(){
		
		var _picWidth = $(this).width(),
			_picHeight = $(this).height();
			
		$(this).css({
			marginTop:_picHeight / 2 * -1,
			marginLeft:_picWidth / 2 * -1
		});
	});
	
	//colorbox
	$(".jpg").colorbox({rel:'jpg'});
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
});
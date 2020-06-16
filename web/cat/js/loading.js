$(function(){
	//$('.wrap').hide();
	//$('.loading').hide();
	//$('body').css({height:2000});
    $('body').autoloader({complete:loading_progress});
});

function loading_progress(pNum){
	//$('.wrap').delay(100).fadeIn();
    if(pNum >= 100){
        $('.loading').delay(100).fadeOut(500);
    }
	/*
	var url = window.location.toString();
    var id = url.split('#')[1];
	
	if(id){
      var t = $('#'+id).offset().top;
      $(window).scrollTop(t);
	}
	*/
};
$(document).ready(function() {
    
	$( '[data-fancybox]' ).fancybox({
		caption : function( instance, item ) {
			var caption, link,
                $link = $(this).closest('li').data('link');

			if ( item.type === 'image' ) {
			caption = $(this).closest('li').data('caption');
			link    = '<a href="' + $link + '" target="_blank">前往連結</a>';

			return (caption ? caption + '<br />' : '') + link;
			}
		}
	});
    
    $('#grid a').on('click', function(){
        if($(this).hasClass('flash')){
            alert('此網站含有flash，請注意瀏覽器的flash player支援！');
        };
    });
    
});
(function(){
    
    $(function(){
        index_menu();
    });
    
    function index_menu(){
        $('.btn_menu').on('click', function(e){
            e.preventDefault();

            if($(this).hasClass('on')){
                $(this).parent().css({ paddingBottom: 25});
                $(this).removeClass('on');
                $(this).siblings('ul').hide();
            }else{
                $(this).parent().css({ paddingBottom: 0});
                $(this).addClass('on');
                $(this).siblings('ul').show();
            };

        });
    };
    
})(jQuery);


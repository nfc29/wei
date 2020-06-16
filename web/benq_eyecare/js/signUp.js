
(function($){
    var _userObj = {};
    $(function(){
        setButton();
        setForm();
        if(!Fun.isIE8()){
            setMoveLoop();
        }

    });

    function setForm(){
        //Fun.setForm();
        $("input:text").blur(function() {
            $(this).val(Fun.trim($(this).val()));
        }).val("");

        setVcode();

        //_userObj.event = "tpe";
        //$('#'+_userObj.event + ' .event_check').addClass('on');
        getEventTime({event:"tpe"});
    }
    
    function setButton(){
        $('.event_list').on('click', function(e){
            var checkBox = $(this).find('.event_check');
            if(!checkBox.hasClass('on')){
                $('.event_check').removeClass('on');
                checkBox.toggleClass('on');
                if(_userObj.event != this.id){
                    _userObj.event = this.id;
                    getEventTime(_userObj);
                }
            }
        });

        $('.timer_list li').on('click', function(e){
            var checkBox = $(this).find('.timer_check');
            if(!checkBox.hasClass('on')){
                $('.timer_check').removeClass('on');
                checkBox.addClass('on');
                _userObj.time = $(this).index() + 1;
            }
        });

        $('.btn_send').on('click', function(e){
            e.preventDefault();
            formCheck();
        });

        $('.noticeBox').on('click', function(e){
            e.preventDefault();
            $(this).find('.notice_check').toggleClass('on');
        })

    }

    function setMoveLoop(){
        
    }

    function setEventTimeData(pData){
        delete _userObj.time;
        $('.timer_check').removeClass('on');
        $('.timer_list li').each(function(i){
            var placesNum = 20 - parseInt(pData[i], 10);
            $(this).find('.places span').html(Fun.str_pad(placesNum, 2, "0"));
            if(placesNum <= 0){

            }
        });
    }

    function setVcode(){
        $('.vCode').attr('src', 'inc/vcode.php?rnd=' + parseInt(Math.random() * 100000, 10));
        $('.txt_vCode').val(" ");
    }

    function formCheck(){
        var name_check  =/^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5a-zA-Z0-9_ ]*$/;
        var inputName = $("input#name");
        if(Fun.trim(inputName.val()) == "" /*|| inputName.val() == inputName.attr('prompt')*/ ){ 
            alert("請填寫家長姓名");                          
            inputName.focus();     
            return false;
        }
        
        var child_names = [];
        var child_ages = [];
        $('.child_name').each(function(i) {
            var inputChild = $(this);
            if(inputChild.val() != "" ){
                var inputAge = $('.age_year').eq(i);
                child_names.push(inputChild.val());
                if(inputAge.val() == ""){
                    alert("請填寫小朋友年齡");
                    inputAge.focus();
                    child_ages = "error";
                    return false;
                }
                child_ages.push(inputAge.val());
            }
        });

        if(child_ages == "error") return false;

        if(child_names.length <= 0){
            alert("請填寫小朋友姓名");
            $('.child_name:eq(0)').focus();
            return false;
        }

        var email_check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var inputEmail = $("input#email");
        if(inputEmail.val() =="" /*|| inputEmail.val() == inputEmail.attr('prompt')*/ ){
            alert("請填寫電子郵件");
            inputEmail.focus();
            return false;
        }

        if(!email_check.test(inputEmail.val())){
            alert("電子郵件格式錯誤");
            inputEmail.focus();
            return false;
        }
        
        var phone_check=/^09[0-9]{8}$/;
        var inputPhone = $("input#phone");
        if(inputPhone.val() == "" /*|| inputPhone.val() == inputPhone.attr('prompt')*/ ){
            alert("請填寫行動電話");
            inputPhone.focus();
            return false;
        }
        if(!phone_check.test(inputPhone.val())){
            alert("行動電話格式錯誤");
            inputPhone.focus();
            return false;
        }
        
        if(!_userObj.event){
            alert("請選擇場次");
            return false;
        }

        if(!_userObj.time){
            alert("請選擇時段");
            return false;
        }

        if(!_userObj.time){
            alert("請選擇時段");
            return false;
        }

        if(!$('.noticeBox .notice_check').hasClass('on')){
            alert("您尚未同意個人資料保護法");             
            return false;
        }
        
        var inputVcode = $("input#txt_vCode");
        if(inputVcode.val() == ""){
            alert("請輸入驗證碼");
            return false;
        }

        var sendObj = {};
        sendObj.name = inputName.val();
        sendObj.email = inputEmail.val();
        sendObj.phone = inputPhone.val();
        sendObj.child_name = child_names.toString();
        sendObj.child_age = child_ages.toString();
        sendObj.vcode = inputVcode.val();
        sendObj = $.extend(sendObj, _userObj);
        addUserData(sendObj)
        
    }

    //data
    function addUserData(pObj){
        Fun.loadingChange(true);
        $.post("actions/AddUserData.php", pObj, function(data){
            if(data.result){
                window.setTimeout(function(){
                    Fun.loadingChange(false);
                    alert("請到您的信箱收取通知信，並點選信內確認連結，才算完成報名喔！");
                    location.href = "rules.html";
                },2000);
            }else{
                Fun.loadingChange(false);
                alert(data.msg);
                setVcode();
            }
            
        }, 'json')
        .fail(function(data){
            Fun.loadingChange(false);
            alert("error");
        });

    }

    function getEventTime(pObj){
        Fun.loadingChange(true);
        $.post("actions/GetEventTime.php", pObj, function(data){
            Fun.loadingChange(false);
            if(data.result){
                setEventTimeData(data.places);
            }else{
                alert(data.msg);
            }
        }, 'json')
        .fail(function(data){
            Fun.loadingChange(false);
            alert("error");
        });

    }

})(jQuery);
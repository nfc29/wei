// JavaScript Document
(function($){
	var _nowLightBox,
        _shareNum = 0;
    $(function(){
		
		if (milkmidi.detectmobile.isIPad()){
		
		}else if (milkmidi.detectmobile.isMobile()){
			window.location.href="m/index.html";
		};

        index_slide();
		//index_prompt();
		$('.rules_content, .winner_content').rollbar({zIndex:100, wheelSpeed:20, top:0, pathPadding:15, sliderOpacityDelay:100, lazyCheckScroll:100});
		$('.flow_content').rollbar({zIndex:100, wheelSpeed:20, top:0, pathPadding:15, sliderOpacityDelay:100, lazyCheckScroll:100});
		setButton();
		//lightboxChange($('#video'));
    });
    
    function setButton(){
    	$('.menu li a').on('click', function(e){
    		e.preventDefault();
    		var className = $(this).parent().attr('class').split(' ')[0];
    		//console.log(className);
    		switch(className){
    			case "btn_menu01":
    				lightboxChange($('#flow'), true);
    			break;
    			case "btn_menu02":
    				lightboxChange($('#video'), true);
    			break;
    			case "btn_menu03":
    				lightboxChange($('#live'), true);
    			break;
    			case "btn_menu04":
    				lightboxChange($('#rules'), true);
					//alert('敬請期待!');
    			break;
    			case "btn_menu05":
					lightboxChange($('#winner'), true);
					//alert('敬請期待!');
    			break;
    			case "btn_menuFb":
					window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent('http://ggyournet.com/')));
    			break;
				/*
    			case "btn_menuLine":
    			break;
				*/
    		}
            window.trackingEvent(className, "click");
			//$('#section2').hide(100);
    	});
        
    	$('.btn_onload').on('click', function(e){
    		e.preventDefault();
    		lightboxChange($('#video'), true);
    	});
        
        $('#video .btn_share').on('click', function(e){
            e.preventDefault();
            /*window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent('http://ggyournet.com/fb.html?rnd='+ parseInt(Math.random() * 100000))));
            window.fbUIShareCallBack();*/
            window.alert("活動已結束!");
            lightboxChange($('#video'));
        });

        $('#login .btn_login_fb').on('click', function(e){
            e.preventDefault();
            FBapi.fbLogin();
            Fun.loadingChange(true);
        });

        $('#userData .btn_check').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('on');
        });

        $('#userData .btn_rules').on('click', function(e){
            e.preventDefault();
            lightboxChange($('#rules'), true);
        });

        $('#userData .btn_send').on('click', function(e){
            e.preventDefault();
            formCheck();
        });

    	$('.lightbox .btn_close, #userData .btn_cancel').on('click', function(e){
    		e.preventDefault();
    		lightboxChange($(this).parent().parent());
    	});
    };

    function lightboxChange(pEle, pBol){
    	pBol = pBol || false;
    	/*if(_nowLightBox == pEle) return;
    	if(_nowLightBox){
    		Fun.eleFadeOut(_nowLightBox);
			//$('#section2').show(100);
    	}*/
    	if(pBol){
    		//_nowLightBox = pEle;
    		Fun.eleFadeIn(pEle);
            if (pEle.attr('id') == "video" ) {
                $('#video iframe').attr('src', "https://www.youtube.com/embed/3M-xv2PWU2M?rel=0&autoplay=1");
            }
    	}else{
            if (pEle.attr('id') != "login" ) {
                $('#video iframe').attr('src', "");
            }
            Fun.eleFadeOut(pEle);
    	}

    }

    function index_slide() {
		$('#fullpage').fullpage({
			//anchors: ['index', 'tagborad'],
			sectionsColor: ['#c51f16', '#000'],
			slidesNavigation: true,
			//loopHorizontal: false,
            scrollbar: true
		});
	};
	
	function index_prompt() {
		$('.indexPrompt').pictureani({ frameWidth: 361, frameHeight: 38, fps: 12, totalFrames: 3, loopDelay: 0.1, loop:true });
	};
	
    function setForm(){
        Fun.setForm();
        $('#address_select').twzipcode({
            countyName: "city",
            districtName: "area",
            zipcodeName: "zipcode",
            countySel: "",//預設縣市
            districtSel: "",//預設區
            css: ["city","area", "zipcode"]//可以單獨設定css
        });

    }
    
    function formCheck(){
        if(!$('.btn_check').hasClass('on')){
            alert("您尚未閱讀權利義務之相關條款");           
            return false;
        }
        
        var name_check  =/^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5a-zA-Z0-9_ ]*$/;
        var inputName = $("input#name");
        if(inputName.val() == "" || inputName.val() == inputName.attr('prompt') ){
            alert(inputName.attr('prompt'));                          
            inputName.focus();     
            return false;
        }
        
        var phone_check=/^09[0-9]{8,8}$/;
        var inputPhone = $("input#phone");
        if(inputPhone.val() == "" || inputPhone.val() == inputPhone.attr('prompt') ){
            alert(inputPhone.attr('prompt'));
            inputPhone.focus();
            return false;
        }
        if(!phone_check.test(inputPhone.val())){
            alert("請輸入正確手機號碼");
            inputPhone.focus();
            return false;
        }
        
        var email_check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var inputEmail = $("input#email");
        if(inputEmail =="" || inputEmail.val() == inputEmail.attr('prompt') ){
            alert(inputEmail.attr('prompt'));
            inputEmail.focus();
            return false;
        }

        if(!email_check.test(inputEmail.val())){
            alert("email格式錯誤");
            inputEmail.focus();
            return false;
        }
        
        if($('#city').val() == ""){
            alert("請選擇縣市");         
            return false;
        }
        
        var inputAddress = $("input#address");
        if(inputAddress =="" || inputAddress.val() == inputAddress.attr('prompt') ){
            alert(inputAddress.attr('prompt'));
            inputAddress.focus();
            return false;
        }
        
        var sendObj = {};
        sendObj.name = inputName.val();
        sendObj.email = inputEmail.val();
        sendObj.phone = inputPhone.val();
        sendObj.city = $('#city').val();
        sendObj.area = $('#area').val();
        //sendObj.code = $('.zipcode').val();
        sendObj.address = inputAddress.val();
        //sendObj.photo = _gameObj.photo;
        sendObj.fb_share = _shareNum;
        addUserData(sendObj);
    }

    function fbUIShare(){
        var shareObj = {};
        shareObj.link = FBapi.host_name + "fb.html?rnd=" + parseInt(Math.random() * 100000);
        shareObj.picture = FBapi.host_name + "images/fbShare.jpg" + "?rnd=" + parseInt(Math.random() * 100000);
        shareObj.name = "朋友低頭讓你都怒了？還不GG他的網路！";
        shareObj.caption = "零收訊咖啡館";
        shareObj.description = "朋友總是著迷手機上網，對你卻冷冰冰？立即約他到全台首創「零收訊咖啡館」GG他的網路、找回真心的對話，還可抽限量超殺網路ＧＧ杯！";
        FBapi.fbUIShare(shareObj);
        Fun.loadingChange(true);
    }

    //data
    function addUserData(pObj){
        var sendObj = $.extend(pObj, getFbObj());
        Fun.loadingChange(true);
        $.post("actions/AddUserData.php", sendObj, function(data){
            Fun.loadingChange(false);
            if(data.result){
                alert("資料送出成功！");
                lightboxChange($('#userData'));
            }else{
                alert(data.msg);
            }
        }, 'json');
        /*console.log(sendObj);
        lightboxChange($('#userData'));*/
    }

    function getFbObj(){
        var obj = {};
        obj.fb_id = FBapi.userObj.fb_id;
        obj.fb_name = FBapi.userObj.fb_name;
        obj.fb_token = FBapi.userObj.fb_accessToken;
        obj.device = "pc";
        if(Fun.detectmobile.isMobile){
            obj.device = "m";
        }

        return obj;
    }

    //facebook
    window.fbInitCallBack = function(pBol){
        pBol = pBol || false;
        lightboxChange($('#video'), true);
        setForm();
    }

    window.fbLoginCallBack = function(pBol){
        pBol = pBol || false;
        Fun.loadingChange();
        if(pBol){
            //fbUIShare();
        }else{

        }
        lightboxChange($('#login'));
    }
    
    window.fbUIShareCallBack = function(pBol){
        pBol = pBol || false;
        Fun.loadingChange();
        if(pBol){
            _shareNum = 1;
        }else{
            _shareNum = 0;
        }
        lightboxChange($('#video'));
        lightboxChange($('#userData'), true); 
        /*
        window.alert("活動已結束!");
        lightboxChange($('#userData'));
        */
    }

})(jQuery); 
this.milkmidi = this.milkmidi || {};
(function () { 
    var ua = navigator.userAgent.toLowerCase();
     var MOBILES_NAME/*Array*/ = [ 
        "android","iphone","windows ce","windows phone","symbian","blackberry",
        "mobile","phone","midp","cldc","opera mini","minimo","up.browser","up.link","docomo",
        "avantgo","palmos","ppc","xv6850","htc_","kindle","wap","mmp/","teleca","lge","portalmmm",
        "nintendo","nokia","armv","j2me","nook browser","webos","blazer","epoc","samsung","novarra-vision",
        "netfront","sec-sgh","sharp","au-mic/1.1.4.0","reqwirelessweb","sonyericsson","playstation","vodafone",
        "ucweb"
    ];    
    milkmidi.detectmobile = {
        isMobile : function(){
            for (var a in MOBILES_NAME) {
                if (ua.indexOf(MOBILES_NAME[a])!=-1) {
                    return true;
                }
            }
            return false;
        },
        isIphone :function (){
            return ua.indexOf("iphone") != -1;
        },
        isIPad:function(){
            return ua.indexOf("ipad") != -1;
        }
    };
    
})()
// JavaScript Document  
var xmlHttp;  
function S_xmlhttprequest(){  
        if(window.XMLHttpRequest){  
            //Mozilla??พน  
            xmlHttp=new XMLHttpRequest();  
        }else{  
            //IE??พน  
            if(window.ActiveXObject){  
                try{  
                    xmlHttp=new ActionXObject("Msxm12.XMLHTTP");  
                }catch(e){  
                    try{  
                        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");  
                    }catch(e){  
                          
                        }  
                }  
            }  
        }  
    }  
      
function funphp100(){  
        var f = document.myform.acc.value;  
        S_xmlhttprequest();  
        xmlHttp.onreadystatechange = byphp;  
        xmlHttp.open("GET","actions/acc_check2.php?acc="+f,true);  
        xmlHttp.send(null);  
    }  
      
function byphp(){  
        if(xmlHttp.readyState == 1){  
                document.getElementById('php100').innerHTML = "<img src = http://demo.megais.com/yomo_test/admins/images/loading.gif >";  
            }  
        if(xmlHttp.readyState == 4){  
            if(xmlHttp.status == 200){  
                var byphp100 = xmlHttp.responseText;
				if(byphp100==1)
				{
				document.getElementById('acc').focus();
				document.getElementById('acc').value="";
				return false;
				}
                document.getElementById('php100').innerHTML = byphp100;  
            }  
        }  
    }  
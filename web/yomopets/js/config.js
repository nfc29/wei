// JavaScript Document

/*var user_obj = {};
user_obj.fb_id="123456";
user_obj.fb_name="samuel";*/
var loginBol = false;

function setScorePoint(pStartW, pScoreNum)
{
	var starWidth = pStartW;
	if(pScoreNum > 10 && pScoreNum <= 20){
		starWidth *= 2 ;
	}else if(pScoreNum <= 30){
		starWidth *= 3 ;
	}else if(pScoreNum <= 40){
		starWidth *= 4 ;
	}else if(pScoreNum <= 50){
		starWidth *= 5 ;
	}else if(pScoreNum <= 60){
		starWidth *= 6 ;
	}else if(pScoreNum <= 70){
		starWidth *= 7 ;
	}else if(pScoreNum <= 80){
		starWidth *= 8 ;
	}else if(pScoreNum <= 90){
		starWidth *= 9 ;
	}else if(pScoreNum <= 100){
		starWidth *= 10 ;
	}
	return starWidth
	//$(pJqStr).stop().animate({ width:starWidth },500);
}

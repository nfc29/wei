// JavaScript Document
var actStr = "";
$(function(){

	//ajax 不快取
	$.ajaxSetup({ cache: false });

	//發表評論
	$('.comment a ,.leaveComments').click(function(){
	
		if(_loginStatus == 1){
			$('html,body').animate({scrollTop:$('.leave').offset().top},1000);
		}else{
			login();
		}
		
		return false;
	});
	
	//加入收藏
	$('.collect a').click(function(){
		
		if(_loginStatus == 1){
			actStr = "fa";
			loadFavorite();
		}else{
			login();
		}
		return false;
	});
	
	//更多訊息
	$('.messageBoard .more').click(function(){
	
		moreBol = !moreBol;
		if(moreBol){
		
			$('#msg').animate({height:(msgMaxHeight) + "px"});
		}else{
			
			$('#msg').animate({height:(msgMinHeight) + "px"});
		}
		return false;
	});

	if(_loginStatus != 1){
		$('.rating').hide();
		$('#leave_msg').hide();
		
	}else{
		$('.leaveComments').hide();
		$('.rating_nologin').hide();
	}
	$('a.rating, #MiniView').hover(function(){
		$('a.rating').addClass('hover');
		$('#MiniView').fadeIn();
		$('#MiniView').stop().animate({
			top:20,
			opacity:1
		},200 ,'easeOutBounce');
	},function(){
		$('#MiniView').stop().animate({
			top:10,
			opacity:0
		},200,function(){
			$(this).hide();
			$('a.rating').removeClass('hover');
		});
	});
	var UserVoteSpan = $('#UserVoteSpan');
	UserVoteSpan.hide();
	$('#MiniView img').click(function(){
		UserVoteSpan.fadeIn();
		$('#MiniView').find('p').fadeOut();

	});
	
	$('.messageBoard .send').click(function(){

		sendMsg();
		
		return false;
	});
	
	$(".main_more, #googlemap").colorbox({iframe:true, fixed:true, width:"80%", height:"90%"});
	
	$('.messageBoard li:last').css({border:0});
	
	$('.rating_nologin').click(login);
	loadMsg();
	loadFavorite();
	loadRelatedLink();
});


//===================留言設定===================
var msgMinHeight = 0;
var msgMaxHeight = 0;
var moreBol = false;

function loadMsg()
{
	$.get('actions/get_msg_list.php',{page_id:pageid},callbackLoadMsg,'XML');
}

function callbackLoadMsg(data)
{
	msgMinHeight = msgMaxHeight = 0;
	var li_length = $('#msg li').length;
	var msg_length = $(data).find("List").length;
	$('.message_box .score em#comment').text(msg_length);
	
	$(data).find("List").each(function(i){
		var liStr = '#msg li:eq(' + i + ')';
		var fbURL = 'http://graph.facebook.com/' + $(this).find("FBID").text() + '/picture';
		
		
		if(i >= li_length){
			var htmlStr = '<li>';
				htmlStr += '<span><img width="40" height="40" src="' + fbURL + '" /></span>';
				htmlStr += '<p id="user_text"><span>' + $(this).find("Name").text() + '</span>' + $(this).find("Text").text() + '</p>';
				htmlStr += '<em id="user_datetime">' + $(this).find("DateTime").text() + '</em>';
				htmlStr += '</li>';
			$('#msg').append(htmlStr);
		}else{
			$(liStr).find('#user_photo img').attr('src',fbURL);
			htmlStr = '<a id="user_name" href="#">'+ $(this).find("Name").text() +'</a>';
			//$(liStr).find('#user_name').html($(this).find("Name").text());
			$(liStr).find('#user_text').html(htmlStr + $(this).find("Text").text());
			$(liStr).find('#user_datetime').text($(this).find("DateTime").text());
		}
		//console.log(liStr);
		//console.log($(liStr).height());
		msgMaxHeight += $(liStr).height() + 28;
		if( i < 5){
			msgMinHeight = msgMaxHeight;
		}
	});
	msgMaxHeight += 34; 
	//console.log("msg_length="+msg_length);
	//console.log("moreBol="+moreBol);
	if(msg_length <= 5){
		$('.messageBoard .more').hide();
	}else if(moreBol){
		//$('.more').hide();
		$('#msg').animate({height:(msgMaxHeight) + "px"});
	}else{
		//console.log("msgMinHeight="+msgMinHeight);
		$('#msg').height(msgMinHeight);
	}
	/*$('#msg').attr("height",msgMinHeight + "px");
	console.log(msgMinHeight);
	while(li_length > msg_length){
		$('#msg li:eq(' + (msg_length-1) + ')').remove();
	}*/
}
//===================留言設定 END===================

//===================評分===================
$(document).ready(function(){

		$.post('actions/results.php',{page_id:pageid,act:'score'},myScore,'json');
		
		function myScore(data){
			
			if(_loginStatus != 1){
		
				setPoint(data.total_score);
				$('#UserVoteSpan').fadeOut();
			}else{
				
				setOpineo(data.pepole_score);
				setPoint(data.total_score);
				setStar(data.pepole_score, true);
				
			}
		
		}
		
	});
function setOpineo(pStarNum)
{
	$('#MiniView').opineo('actions/results.php', {curvalue:pStarNum, page_id:pageid, view: 'mini', callback: myCallback});
}

function myCallback(responseData)
{
	console.log(responseData);
	var userRating = responseData.rating_label;
	console.log("responseData.rating_label="+responseData.rating_label);
	if(userRating == '' || userRating == undefined){
		userRating = 'None';
	}
	console.log("userRating="+userRating);
	setStar(responseData.rating_number);
	console.log(responseData.page_id);
	setPoint(responseData.score);
};

function setStar(pStarNum, pBol)
{
	//pBol = pBol || "";
	if(pStarNum){
		var starStr="";
		switch(pStarNum){
			case "1":
				starStr = "一";
			break;
			case "2":
				starStr = "二";
			break;
			case "3":
				starStr = "三";
			break;
			case "4":
				starStr = "四";
			break;
			case "5":
				starStr = "五";
			break;
		}
		var str = "您已選擇了" + starStr + "顆星！";
		if(!pBol){
			str += "感謝您的評分！";
		}
		$('#UserVoteSpan').html(str);
		$('#UserVoteSpan').fadeIn();
		$('#MiniView').find('p').fadeOut();
		
	}
	
}

function setPoint(pNum)
{
	$('#score_point').stop().animate({ width:scorePoint(14, parseInt(pNum)) },500);
}

//===================評分 END===================

//===================收藏===================
function loadFavorite()
{
	
	$.post('actions/get_favorite.php',{page_id:pageid,act:actStr},callbackLoadFavorite,"json");
	
}
function callbackLoadFavorite(responseData)
{
	console.log(responseData);
	//======20120123======
	$('#favorite').text(responseData.favorite_num);
	if(responseData.favorite_bol == "0"){
		$('.collect a').removeClass('cancel');
		$('.record').fadeOut();
		
	}else if(responseData.favorite_bol == "1"){
		$('.collect a').addClass('cancel');
		$('.record').fadeIn();
		
	}
	
}

//===================收藏 END===================

//===================相關連結===================
function loadRelatedLink()
{
	//$.get('get_related_link.xml',{page_id:"1"},callbackLoadRelatedLink,'XML');
}

function callbackLoadRelatedLink(data)
{
	console.log(data);
	$(data).find("List").each(function(i){
		//console.log("=============="+i+"==============");
		var htmlStr = '<li class="message">';
			htmlStr += '<a href="#"><img src="' + $(this).find("PhotoURL").text() + '" width="45" height="45" /></a>';
			htmlStr += '<h3><a href="#">'+$(this).find("Text").text()+'</a></h3>';
			htmlStr += '</li>';
		$('#related_link').append(htmlStr);
		
	});
}

//===================相關連結 END===================

//===================留言===================
function sendMsg()
{
	//var pageid =$.query.get("c");
	var msgObj = {};
	msgObj.page_id = pageid;
	msgObj.msgTxt = $('#leave_msg').find('textarea').val();
	console.log("msgObj.msgTxt = " + msgObj.msgTxt );
	
	if(msgObj.msgTxt != "" && msgObj.msgTxt != "留個言吧…"){
		console.log("sendMSG");	
		$.post('actions/add_msg.php', msgObj, sendMsgCallBack);
	}
	
	
}

function sendMsgCallBack()
{
	loadMsg();
	$('#leave_msg').find('textarea').val("留個言吧…");
	var moveNum = $('.box_big').offset().top + $('.box_big').height()/2;
	$('html,body').stop().animate({scrollTop:moveNum},1000);
}

//===================留言 end===================
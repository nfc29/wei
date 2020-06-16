// JavaScript Document
var page_obj;//分頁參數
var favorite_num = 0;

$(document).ready(function() {
	//ajax 不快取
	$.ajaxSetup({ cache: false });
	
	page_obj = { pagenumber: 1, pagecount: 15, buttonClickCallback: PageClick, first:"第一頁", prev:"上一頁", next:"下一頁", last:"最末頁", pagegroup:10 };//分頁參數
	//scrollbar設定
	$('.record_box #msg_list').rollbar({zIndex:100,wheelSpeed:20});//scrollbar
	$('.record_box #msg_list li:last').css({ borderBottom:0});//取消最後一個li虛線
	//取得user留言記錄
	getUserMsgList();
	
	getUserFavoriteList(1);
});

//分頁設定
function setEasyPage()
{
	$("#pager").pager(page_obj);
}

//分頁click事件
PageClick = function(pageclickednumber) {
	page_obj.pagenumber = pageclickednumber;
	$("#pager").pager(page_obj);
	getUserFavoriteList(pageclickednumber);
}

//取得user留言記錄
function getUserMsgList()
{
	$.post("../actions/get_user_msg_list.php", {}, getUserMsgListCallBack, "XML");
	//$.get("get_user_msg_list.xml", {}, getUserMsgListCallBack, "XML");
}

//設定user留言
function getUserMsgListCallBack(data)
{
	$(data).find("List").each(function(i){
		var htmlStr = '<li>';
		htmlStr += '<a href="main?c=' + $(this).find("id").text() + '">' + $(this).find("cTitle").text() + '</a>';
		htmlStr += '<em>' + $(this).find("DateTime").text() + '</em>';
		htmlStr += '<p>' + $(this).find("Text").text() + '</p>';
		htmlStr += '</li>';
		$('#msg_list').append(htmlStr);
		
	});
}
	
//取得user最愛
function getUserFavoriteList(pPageNum)
{
	//$.post("../actions/get_user_favorite_list.php", {page:pPageNum}, getUserFavoriteListCallBack, "XML");
	$.post("get_user_favorite_list.xml", {page:pPageNum}, getUserFavoriteListCallBack, "XML");
}

//設定user留言
function getUserFavoriteListCallBack(data)
{
	console.log("data=" + data);
	$('.collect li').remove();
	page_obj.pagecount = $(data).find("TotalPage").text();
	if(page_obj.pagecount == ""){
		page_obj.pagecount = 0;
	}
	console.log("page_obj.pagecount=" + page_obj.pagecount);
	setEasyPage();
	
	favorite_num = 0;
	$(data).find("List").each(function(i){
		var htmlStr = '<li class="box">';
		htmlStr += '<h3><a href="main?c=' + $(this).find("id").text() + '">' + $(this).find("cTitle").text() + '</a></h3>';
		htmlStr += '<a href="#" class="del" title="取消收藏" onclick="delFavorite(' + $(this).find("id").text() + '); return false;">取消收藏</a>';
		htmlStr += '<img src="' + $(this).find("Photo").text() + '" width="50" height="50" />';
		htmlStr += '<p>' + $(this).find("cTitle").text() + '</p>';
		htmlStr += '<p>' + $(this).find("Text").text() + '</p>';
		htmlStr += '</li>';
		$('.collect').append(htmlStr);
		favorite_num++;
	});
	$('.box').css({display:'none'});
	$('.collect .box').each(function(i){
		console.log("i=" + i);
		//$(this).hide();
		$(this).delay(100*i).fadeIn(1000);
	})
	console.log("favorite_num=" + favorite_num);
}

function delFavorite(pID)
{	
	confirm("取消這篇收藏");
	if(confirm("取消這篇收藏")){
		$.post("../actions/del_user_favorite.php", {id:pID}, delFavoriteCallBack, "text");
		console.log(pID);
	}else{
		
	}
	
}

function delFavoriteCallBack(data)
{
	console.log(data);
	if(favorite_num == 1 && page_obj.pagenumber > 1){
		page_obj.pagenumber -= 1;
	}
	getUserFavoriteList(page_obj.pagenumber);
}
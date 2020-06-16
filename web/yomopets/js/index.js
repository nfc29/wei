// JavaScript Document

//自動排列
var stageW = 0;
var timer;
$(function($){
	
    $("#content").masonry({
		itemSelector: ".box, .box_big, .message_box, .box_none",
		//columnWidth: 20, 
		isAnimated: true,
		isResizable: false,
		isFitWidth: true
    });

	fillMasonryDummy($("#content"));
	
	$(window).resize(function() {
		if(stageW != $(window).width()){
			stageW=$(window).width();
			$(".box_none.dummy").remove();
			//fillMasonryDummy($("#content"));
			$("#content").masonry("reload");
			window.clearTimeout(timer);
			timer = setTimeout('fillMasonryDummy($("#content"))', 100);
		}
		
	});
	//var test = $('#content').find('.box:last').height();
	//console.log(test);

});
/*
function fillMasonryDummy(masonry){
	//masonry.masonry("remove", $(".box.dummy"));
	masonry.masonry("reload");

	var colYs = masonry.data("masonry").colYs.sort();
	console.log("總共會抓出:"+colYs);
	for (var i = 0; i < colYs.length-1; i++){
		console.log("數量="+i);
		if (colYs[i]==0) break;
		var height = colYs[colYs.length-1]-colYs[i]-72;
		console.log("最大高="+colYs[colYs.length-1]);
		console.log("高="+colYs[i]);
		if (height<5) continue;
		console.log("結果===="+height);
		var $dummy = $('<div class="box_none dummy"/>');
		$dummy.height(height).css("opacity", 0.5).hide();
		if (height>=5) $dummy.addClass("bg");
		masonry.append($dummy);
	};
	masonry.masonry("reload");
	$(".box_none.dummy").fadeIn(1000);
}
*/

function fillMasonryDummy(masonry){
	
	var colYs = masonry.data("masonry").colYs.sort();
	//console.log(colYs);
	var colYs = colYs.sort(sortNumber);
	//console.log(colYs);
	var maxY = 0;
	for(var checkNum=0;checkNum<colYs.length;checkNum++){
		if(maxY<colYs[checkNum]){
			maxY=colYs[checkNum];
		}
	};
	var test = $('.box_none').last();
	//var h =$("#content").height();
	//console.log(test);
	//console.log("總共會抓出:"+colYs);
	//console.log("最大高="+maxY);
	//console.log("=================");
	for (var i = 0; i < colYs.length; i++){
		//console.log("數量="+i);
		//if (colYs[i]==0) break;
		var height = maxY-colYs[i]-72;
		//console.log(maxY-colYs[i]);
		//console.log("高="+colYs[i]);
		if (height<5) continue;
		//console.log("i="+i);
		//console.log("結果===="+height);
		var $dummy = $('<div class="box_none dummy"/>');
		$dummy.height(height).css("opacity", 0.5).hide();
		if (height>=5) $dummy.addClass("bg");
		masonry.append($dummy);
		
	};
	
	masonry.masonry("reload");
	$(".box_none.dummy").fadeIn(1000);
};



$(function(){

	//排序按鈕
	$('.time, .fraction').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active').siblings('button').removeClass('active');
		};
	});

});


//samuel
function sortNumber(a,b)
{
	return a - b
};
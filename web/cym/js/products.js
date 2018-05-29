$(function(){
	$('.showBox').each(function(){
		// 先取得必要的元素並用 jQuery 包裝
		// 並設定移動速度
		var $showBox = $(this),
			$itemList = $showBox.find('ul.itemList'),
			$items = $itemList.find('li'),
			$product = $items.find('.product'),
			_margin = parseInt($product.css('margin-left')) || 0,
			speed = 400;

		// 判斷是不是 IE6 或 IE7
		var isIE67 = $.browser.msie && $.browser.version < 8;
			
		// 產生小圓點
		var rollStr = '';
		$items.each(function(i, ele){
			rollStr += '<a href="#">'+i+'</a>\r\n';
		});

		// 加入小圓點並加上 click 事件
		$showBox.find('.roll').html(rollStr).find('a').click(function(){
			move($(this).index());
		}).eq(0).addClass('on');
			
		// 當點擊左右鈕時
		$showBox.find('.prev, .next').click(function(){
			// 找出目前是顯示那一組
			var no = $showBox.find('.roll a.on').index();
			// 判斷接下來要移往那一組
			no = ($(this).attr('class').indexOf('prev')>-1 ? (no - 1 + $items.length) : (no + 1))  % $items.length;
			// 進行移動
			move(no);

			return false;
		});
			
		// 控制移動的函式
		function move(no){
			$itemList.stop().animate({
				left: $items.eq(no).position().left * -1 + (isIE67 ? _margin : 0)
			}, speed);
			$showBox.find('.roll a').eq(no).addClass('on').siblings().removeClass('on');
		}
	});
	
	$('a').focus(function(){
		this.blur();
	});
});
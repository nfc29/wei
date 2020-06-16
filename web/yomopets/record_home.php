<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="title" content="YOMOpets 寵物誌-悉心紀錄的寵物專屬部落格，豐富你的精采生活！" />
<meta name="description" content="『YOMOpets寵物誌』是一個專屬於你跟寵物寶貝們的網站，結合豐富資訊、互動、交流、有趣、多元的寵物社群網站" />
<meta name="keywords" content="寵物,飼育,晶片,YOMOpets" />
<meta name="author" content="邁格數位有限公司 Megais" />
<meta name="language" content="zh-TW" />
<title>YOMOpets 寵物事</title>
<link rel="shortcut icon" href="http://yam.yomopets.com/news/wp-content/uploads/2012/03/logo.gif" />
<link rel="image_src" type="image/jpeg" href="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc6/c17.14.173.173/s160x160/180713_190056891014941_7523555_n.jpg" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
<link rel="stylesheet" href="css/Pager.css" type="text/css" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="js/jquery.rollbar.min.js"></script>
<script type="text/javascript" src="js/jquery.pager.js"></script>
<script type="text/javascript" src="../js/jquery.urlget.js"></script>
<script type="text/javascript" src="js/facebook.js"></script>
<script type="text/javascript" src="js/opineo.js"></script>
<script type="text/javascript" src="js/config.js"></script>
<script type="text/javascript">
	<? session_start(); ?>
	<? if(isset($_SESSION["yomo_user_id"])){ ?>
		_loginStatus = 1;
	<? } ?>
</script>
<script type="text/javascript" src="js/menu.js"></script>
<script type="text/javascript" src="js/record_home.js"></script>
<!--<script type="text/javascript" src="js/main.js"></script>-->

</head>

<!--[if lt IE 8]>
<style type="text/css">
html,body { width:100%; height:100%; margin:0; overflow:hidden;}
table.warn { position:absolute; width:100%; height:100%; background:#efefef; z-index:999999;}
table.warn td { text-align:center; vertical-align:middle;}
</style>
<table class="warn">
	<tr><td><iframe src="ie/ie.html" width="330" height="242" scrolling="no" frameborder="0" allowtransparency="true"></iframe></td></tr>
</table>
<![endif]-->

<body id="main">

<div id="top">
	<ul>
    	<li><a href="index.html">YOMOpets首頁</a></li>
        <li><a href="#">寵物事</a></li>
        <li><a href="#">寵日誌</a></li>
        <li><a href="#">寵新聞</a></li>
        <li><a href="#">寵討論</a></li>
        <li class="login"><a href="#"><img src="http://graph.facebook.com/1553042695/picture" width="22" height="22" /></a><a href="#">Wei Chang</a><span>│</span><a href="#">登出</a></li>
    </ul>
</div>
<div id="title">
	<h1><a href="index.html">YOMOpets 寵物事</a></h1>
	<ul>
    	<li class="menu01"><input type="radio" id="menu01" name="radio" /><label for="menu01">全部</label></li>
        <li class="menu02"><input type="radio" id="menu02" name="radio" /><label for="menu02">狗狗</label></li>
        <li class="menu03"><input type="radio" id="menu03" name="radio" /><label for="menu03">貓貓</label></li>
        <li class="menu04"><input type="radio" id="menu04" name="radio" /><label for="menu04">其它</label></li>
    </ul>
</div>

<div id="menu">
	<div class="menubox">
        <div class="place">
            <p class="title">地點：</p>
            <div class="all">
            	<p>搜尋地區</p>
            	<div class="menu_list">
                	<span class="arrow"></span>
                	<ul class="single">
                    	<li><input type="radio" id="radio1" name="radio" /><label for="radio1">宜蘭</label></li>
                        <li><input type="radio" id="radio2" name="radio" /><label for="radio2">基隆</label></li>
                        <li><input type="radio" id="radio3" name="radio" /><label for="radio3">台北</label></li>
                        <li><input type="radio" id="radio4" name="radio" /><label for="radio4">新北</label></li>
                        <li><input type="radio" id="radio5" name="radio" /><label for="radio5">桃園</label></li>
                        <li><input type="radio" id="radio6" name="radio" /><label for="radio6">新竹</label></li>
                        <li><input type="radio" id="radio7" name="radio" /><label for="radio7">苗栗</label></li>
                        <li><input type="radio" id="radio8" name="radio" /><label for="radio8">台中</label></li>
                        <li><input type="radio" id="radio9" name="radio" /><label for="radio9">彰化</label></li>
                        <li><input type="radio" id="radio10" name="radio" /><label for="radio10">南投</label></li>
                        <li><input type="radio" id="radio11" name="radio" /><label for="radio11">雲林</label></li>
                        <li><input type="radio" id="radio12" name="radio" /><label for="radio12">嘉義</label></li>
                        <li><input type="radio" id="radio13" name="radio" /><label for="radio13">台南</label></li>
                        <li><input type="radio" id="radio14" name="radio" /><label for="radio14">高雄</label></li>
                        <li><input type="radio" id="radio15" name="radio" /><label for="radio15">屏東</label></li>
                        <li><input type="radio" id="radio16" name="radio" /><label for="radio16">花蓮</label></li>
                        <li><input type="radio" id="radio17" name="radio" /><label for="radio17">台東</label></li>
                        <li><input type="radio" id="radio18" name="radio" /><label for="radio18">國外</label></li>
                    </ul>
                    <a href="#" class="select-del">全選</a>
                </div>
            </div>
            <p class="title">類別：</p>
            <div class="all">
            	<p>搜尋類別</p>
                <div class="menu_list">
                	<span class="arrow"></span>
                	<ul class="checklist">
                    	<li>
                        	<h2>外出玩樂</h2>
                            <input type="checkbox" id="check1" name="check" /><label for="check1">寵餐廳</label>
                            <input type="checkbox" id="check2" name="check" /><label for="check2">寵旅行</label>
                            <input type="checkbox" id="check3" name="check" /><label for="check3">寵住宿</label>
                            <input type="checkbox" id="check4" name="check" /><label for="check4">寵聚會</label>
                        </li>
                        <li>
                        	<h2>生活用品</h2>
                        	<input type="checkbox" id="check5" name="check" /><label for="check5">寵愛吃</label>
                        	<input type="checkbox" id="check6" name="check" /><label for="check6">寵愛用</label>
                        	<input type="checkbox" id="check7" name="check" /><label for="check7">寵店家</label>
                        	<input type="checkbox" id="check8" name="check" /><label for="check8">寵手作</label>
                        	<input type="checkbox" id="check9" name="check" /><label for="check9">寵試用</label>
                        </li>
                        <li>
                        	<h2>健康美容</h2>
                        	<input type="checkbox" id="check10" name="check" /><label for="check10">寵醫院</label>
                        	<input type="checkbox" id="check11" name="check" /><label for="check11">寵美容</label>
                        	<input type="checkbox" id="check12" name="check" /><label for="check12">寵寄宿</label>
                        	<input type="checkbox" id="check13" name="check" /><label for="check13">寵健康</label>
                        </li>
                        <li class="last">
                        	<h2>趣聞資訊</h2>
                        	<input type="checkbox" id="check14" name="check" /><label for="check14">寵趣聞</label>
                        	<input type="checkbox" id="check15" name="check" /><label for="check15">寵教養</label>
                        	<input type="checkbox" id="check16" name="check" /><label for="check16">寵快報</label>
                        </li>
                    </ul>
                    <!--<span class="bottom"></span>-->
                    <a href="#" class="select-all">全選</a>
                    <a href="#" class="select-use">套用</a>
                </div>
            </div>
            <div class="search">
                <input name="" type="text" id="tags" />
                <div class="keyword">
                	<span class="arrow"></span>
                    <ul>
                        <li><a href="#" class="tt">北海巨妖</a></li>
                        <li><a href="#">九把刀女友</a></li>
                        <li><a href="#">松坂桃李</a></li>
                        <li><a href="#">泫雅</a></li>
                        <li><a href="#">邵庭</a></li>
                        <li><a href="#">水果過敏</a></li>
                        <li><a href="#" class="tt">北海巨妖</a></li>
                        <li><a href="#">九把刀女友</a></li>
                        <li><a href="#">松坂桃李</a></li>
                        <li><a href="#">泫雅</a></li>
                        <li><a href="#">邵庭</a></li>
                        <li><a href="#">水果過敏</a></li>
                        <li><a href="#" class="tt">北海巨妖</a></li>
                        <li><a href="#">九把刀女友</a></li>
                        <li><a href="#">松坂桃李</a></li>
                        <li><a href="#">泫雅</a></li>
                        <li><a href="#">邵庭</a></li>
                        <li><a href="#">水果過敏</a></li>
                    </ul>
                </div>
                <a href="#" class="bt">Search</a>
            </div>
            <div class="news">
            	<p>熱門推薦：</p>
            	<ul>
            		<li><a href="main.html">樂樂第一次的外宿生活-miya甜蜜貓旅店樂樂第一次的外宿生活-miya甜蜜貓旅店</a></li>
                    <li><a href="main.html">[K週刊旅遊版]鹽寮海濱公園海狗現身</a></li>
                    <li><a href="main.html">樂樂第一次的外宿生活-miya甜蜜貓旅店</a></li>
                    <li><a href="main.html">[K週刊旅遊版]鹽寮海濱公園海狗現身</a></li>
                    <li><a href="main.html">樂樂第一次的外宿生活-miya甜蜜貓旅店</a></li>
                </ul>
            </div>
            <div class="news_bg"></div>
        </div>
    </div>
</div>

<div id="content" class="record_box">
    <h2>我的記錄<span>點選右上方自己的名字或圖示也可進入我的記錄喔</span></h2>
    <h4>您有<span>1</span>則<b>收藏</b><span>2</span>則<b>評論</b></h4>
    
    <div class="messageBoard">
        <ul id="msg_list"></ul>
    </div>
    
    <div class="collect"></div>
    <div id="pager" ></div>

</div>


<div id="footer">
	<div>
    	<ul>
    		<li><a href="#">關於我們</a></li>
            <li><a href="#">聯絡我們</a></li>
            <li><a href="message_board.html">網友留言</a></li>
            <li class="last"><a href="share_step1.html">我要分享</a></li>
        </ul>
        <p>© 2012 YOMOpets. All Rights Reserved.  服務條款 & 隱私權政策</p>
        <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FYOMOpets.club%3Ffref%3Dts&amp;width=480&amp;height=170&amp;colorscheme=light&amp;show_faces=true&amp;border_color=%23dddddd&amp;stream=false&amp;header=false" scrolling="no" frameborder="0" style="border-bottom:#999 1px solid; overflow:hidden; width:480px; height:154px;" allowTransparency="true" class="footer_fb"></iframe>
    </div>
</div>

</body>
</html>

<?
include("lib/config.php");
$login_control=new news();
$result=$login_control->news_web_list($data);
$data['id']=filter_input(INPUT_GET,'id',FILTER_SANITIZE_NUMBER_INT);
$news=$login_control->get_news($data);
$start=$login_control->get_start($data);
if($data['id']==""||$news=="")
{
?>
<script>
window.location.href="http://msz.com.tw/news.php?id=<?=$start['news_id']?>";
</script>
<?
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="明水然,鍋物,鐵板燒,火鍋,美食" />
<meta name="description" content="如果「明水然」的整體空間設計，能帶給您是覺得享受，那麼「明水然」不惜成本在鮮活食材與鍋具的講究，及來自主廚精心調製的獨門醬汁，都是挑動味蕾的秘訣。這一刻「明水然」將帶您經歷一場味覺饗宴。" />
<meta name="author" content="邁格數位有限公司 Megais" />
<title>明水然 鍋物。鐵板燒 - 最新消息</title>
<link rel="shortcut icon" href="images/favicon.ico" />
<link rel="image_src" type="image/jpeg" href="images/fb.jpg" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script type="text/javascript" src="js/bgstretcher.js"></script>
<script type="text/javascript" src="js/jquery.queryLoaderHack.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
<script type="text/javascript" src="js/jquery.rollbar.min.js"></script>
<script type="text/javascript" src="js/jquery-fancybox.js"></script>
<script type="text/javascript" src="js/all.js"></script>
<script type="text/javascript" src="js/news.js"></script>
<script type="text/javascript" src="js/tracking.js"></script>
</head>

<!--[if lt IE 8]>
<script src="js/DD_belatedPNG.js"></script>
<style type="text/css">
html,body { width:100%; height:100%; margin:0; overflow:hidden;}
table.warn { position:absolute; top:0; left:0; width:100%; height:100%; background:#efefef; z-index:99999999;}
table.warn td { width:100%; height:100%; text-align:center; vertical-align:middle;}
</style>
<table class="warn">
	<tr><td><iframe src="ie/ie.html" width="330" height="242" scrolling="no" frameborder="0" allowtransparency="true"></iframe></td></tr>
</table>
<![endif]-->

<body id="news">
	<h1><a href="index.php" megais_ga="logo_bt">明水然 鍋物。鐵板燒</a></h1>
<?include("topMenu.php");?>
    <a href="index.php" title="返回首頁" class="home" megais_ga="menu_home_bt">返回首頁</a>
	
    <div id="box">
    	<div class="content">
            <h2>最新消息</h2>
            <div class="news">
				<b><?=$news['news_title']?></b>
                <a href="uploads/news_img/<?=$news['news_img']?>" class="pic"><img src="uploads/news_img/<?=$news['news_img']?>" /></a>
				<?=$news['news_content']?>
				
          	</div>
            <a href="http://www.wretch.cc/blog/shaupin/26501140" class="link" target="_blank">部落格連結</a>
            <a href="#" id="close" title="關閉內容">關閉內容</a>
        </div>
        <div class="news_list_bg">
         <ul class="news_list">
				<?for($i=0;$i<count($result);$i++){?>
                <li><a href="news.php?id=<?=$result[$i]['news_id']?>" class="now"><?=$result[$i]['news_title']?></a></li>
				<?}?>
		</ul>
        </div>
    </div>
    <a href="#" class="open">OPEN</a>
    
    <a href="javascript:;" id="prev">Previouse image</a>
    <a href="javascript:;" id="next">Next image</a>
    <p class="copyright"><span>訂位專線：02 8502-7019</span>&copy;  2012 MSZ Shabu Shabu Teppanyaki  Designed By <a href="http://www.megais.com/" target="_blank">Megais</a></p>
    <a href="https://www.facebook.com/MSZ888" target="_blank" class="fb" megais_ga="fb_bt">明水然Facebook粉絲團</a>
	<div id="wrap"></div>

</body>
</html>
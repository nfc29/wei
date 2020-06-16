<?php
    
    $point = filter_input(INPUT_GET, "point");
    $type = filter_input(INPUT_GET, "type");
    $rnd = filter_input(INPUT_GET, "rnd");
    if(!$point){
        $point = "0";
    }else{

    }
    if(!$type){
        $type = "1";
    }
    if(!$rnd){
        $rnd = mt_rand(0,10000);
    }
    $title = "護眼小遊戲 數字點點看";
    $subTitle = "我得到_point_分，";
    $descriptionArr = array(
        "BenQ關心您的眼睛健康，提醒您多補充維生素A，和富含花青素的食物喔！",
        "BenQ關心您的眼睛健康，提醒您選用低藍光不閃爍的3C產品喔！",
        "BenQ關心您的眼睛健康，提醒您使用3C產品，每30分鐘就要休息10分鐘喔！",
        "BenQ關心您的眼睛健康，提醒您不要在燈光太暗的地方看書喔！");
    $description = $descriptionArr[mt_rand(0,3)];
    $img = "fb_share_game1.jpg";
    $parmas = "point=_point_.type=_type_.rnd=_rnd_";

    if($type == "2") {
        $title = "護眼小遊戲 眼力黑白猜";
        $img = "fb_share_game2.jpg";
    }

    $pointNum = (int)$point;
    
    if($pointNum <= 200){
        $subTitle .= "應該是昨天沒睡好啦！快跟我一起來挑戰。";
    }else if($pointNum <= 600){
        $subTitle .= "眼明手快的我真是太厲害了！快跟我一起來挑戰。";
    }else{
        $subTitle .= "耳聰目明叫我護眼達人吧！快跟我一起來挑戰。";
    }

    $subTitle = str_replace("_point_", $point, $subTitle);
    $parmas = str_replace("_point_", $point, $parmas);
    $parmas = str_replace("_type_", $type, $parmas);
    $parmas = str_replace("_rnd_", $rnd, $parmas);

    $description = $subTitle . $description;
?>
<html>
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name=“google-site-verification” content=“06UB9myV97Nacv5dRttvhAAaIZezDxBba13iw0lccBs” />
    <title><?php echo $title ?></title>
    <meta name="keywords" content="" />
    <meta property="og:description" content="<?php echo $description ?>" />
    <meta property="og:title" content="<?php echo $title ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://eyecare.benq.com.tw/images/<?php echo $img ?>" />
    <meta property="og:url" content="http://eyecare.benq.com.tw/fb_game_test.php?<?php echo $parmas ?>" />
    <meta property="og:site_name" content="<?php echo $title ?>" />
    <script src="js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/tracking.js"></script>
    <script type="text/javascript">
        //window.location.href = "game.html";
    </script>
</head>

<body>
    <?php echo print_r($_SERVER['QUERY_STRING']); ?>
</body>

</html>

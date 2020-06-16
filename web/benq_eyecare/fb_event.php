<?php
    $rnd = filter_input(INPUT_GET, "rnd");
    if($rnd){
        $rnd = "?rnd=" . $rnd;
    }else{
        $rnd = "";
    }
?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name=“google-site-verification” content=“06UB9myV97Nacv5dRttvhAAaIZezDxBba13iw0lccBs” />
    <title>BenQ 小小眼科醫師爭霸戰</title>
    <meta name="keywords" content="BenQ小小眼科醫師爭霸戰, 小小眼科醫師, 護眼, 視力保健, 護眼知識, 黃斑部病變, 視力檢測, 視力測驗, 護眼小遊戲 , BenQ 護眼產品, 護眼產品" />
    <meta name="description" content="『您知道小朋友的眼睛要到12歲才會發育完成嗎？健康護眼觀念從小培養，BenQ邀請您全家一同來挑戰，讓孩子在遊戲中學習視力保健" />
    <meta property="og:description" content="『小小眼科醫師爭霸戰』正式啟動。親子視力保健觀念從小培養，BenQ邀請您全家攜手來挑戰，每日12場共240個名額，讓孩子在遊戲中學習視力保健。結業即贈貼心小禮物，通通有獎額滿為止。" />
    <meta property="og:title" content="BenQ 小小眼科醫師爭霸戰" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://eyecare.benq.com.tw/fb_event.php<?php echo $rnd ?>" />
    <meta property="og:image" content="http://eyecare.benq.com.tw/images/fb_share_event2.jpg" />
    <meta property="og:site_name" content="BenQ 小小眼科醫師爭霸戰" />
    <script src="js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/tracking.js"></script>
    <script type="text/javascript">
        window.location.href = "index.html";
    </script>
</head>

<body>
</body>

</html>

<?php
header("Content-Type:text/html; charset=utf-8");
include('inc/db_conn.php');
include('lib/game.php');

$data['key']=$_GET['key'];


$domain=$_SERVER['HTTP_HOST'];

if($domain=='www.benq.com.tw'){
	
	$url='http://www.benq.com.tw/microsite/tw_eyecare/';
	
}else{
	
	$url='http://eyecare.benq.com.tw/';
}

$GameController = new game();
$user=$GameController->get_user($data);


$check_key=$GameController->check_key($data);
$check_key_active=$GameController->check_key_active($data);

$data['event']=$user['event'];
$data['time']=$user['time'];

$check_event=$GameController->check_event($data);

if($check_event >=20){
	
	echo "<script>alert('場次已額滿！請選擇其他場次重新報名，謝謝！'); location.href = '$url';</script>";
	exit;
}

if($data['key']==''){
	
	echo "<script>alert('無效連結'); location.href = '$url';</script>";
	exit;
}
if($check_key==0){
	
	echo "<script>alert('無效連結'); location.href = '$url';</script>";
	exit;
	
}
if($check_key_active==1){
	
	echo "<script>alert('你已經報名成功! 此連結已無效'); location.href = '$url';</script>";
	exit;
	
}

if($GameController->update_active($data)){
	
	echo "<script>alert('報名成功!'); location.href = '$url';</script>";
	exit;
	
}

//$re=$GameController->update_active($data);

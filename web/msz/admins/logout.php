<?
header("Content-type: text/html; charset=utf-8");
session_start();
unset($_SESSION);
session_destroy();
?>
<script language="javascript">
			//alert("已登出！");
			window.location.href="login.php";
</script>
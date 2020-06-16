<?
session_start();
include("lib/config.php");
$login_control=new account();
if(!isset($_SESSION["login"])||!$_SESSION["login"])
{
	$data['id']=filter_input(INPUT_POST,'account',FILTER_SANITIZE_STRING);
	$data['pwd']=md5(filter_input(INPUT_POST,'password',FILTER_SANITIZE_STRING));
	if($login_control->login_check($data))
	{
		$_SESSION['accname']=$login_control->get_admin_name($data);
		$_SESSION["login"]=true;
	}
	else
	{
		$_SESSION["login"]=false;
		?>
		<script language="javascript">
			//alert("登入資訊有誤！");
			window.location.href="login.php?error=fail";
		</script>
		<?
		exit;
	}
}
?>
<?
header("Content-type: text/html; charset=utf-8"); 
include("../lib/config.php");
session_start();
if($_SESSION['login'])
{
	$login_control=new account();
	switch($_POST['act'])
	{	/*-----新增-------*/
		case "add":
			$data['acc']=filter_input(INPUT_POST,'acc',FILTER_SANITIZE_STRING);
			$data['acc_name']=filter_input(INPUT_POST,'acc_name',FILTER_SANITIZE_STRING);
			$data['acc_pwd']=md5(filter_input(INPUT_POST,'acc_pwd',FILTER_SANITIZE_STRING));
			if($login_control->add_account($data))
			{
				echo "add_ok";
				exit;
			}
			else
			{
			echo "fail";
			exit;
			}
			break;
			
		/*-----修改-----*/	
		case "mod":
			 $data['acc_id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			 $pwd=$login_control->get_account($data);
			 if($_POST['acc_pwd']=="")
			 {
				$data['acc_pwd']=filter_input(INPUT_POST,'acc_pwd_old',FILTER_SANITIZE_STRING);
			 }
			 else
			{
				$data['acc_pwd']=md5(filter_input(INPUT_POST,'acc_pwd',FILTER_SANITIZE_STRING));
			}
			$data['acc_name']=filter_input(INPUT_POST,'acc_name',FILTER_SANITIZE_STRING);
			$data['acc_id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			if($login_control->upd_account($data))
			{
				echo "mod_ok";
				exit;
			}
			else
			{
			echo "fail";
			exit;
			}
			break;
			
		/*-----刪除-----*/
		case "del":
			$data['acc_id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			if($login_control->del_account($data))
			{
				echo '1';
				exit;
			}
			else
			{	
				echo '0';
				exit;
			}
			break;
		default:
			?>
			<?
			break;
		}
	}
	else
	{
	echo "fail";
	}
?>

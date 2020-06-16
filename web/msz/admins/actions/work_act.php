<?
header("Content-type: text/html; charset=utf-8"); 
include("../lib/config.php");
session_start();
if($_SESSION['login'])
{
	$login_control=new work();
	switch($_POST['act'])
	{	/*-----新增-------*/
		case "add":
			$data['title']=filter_input(INPUT_POST,'title',FILTER_SANITIZE_STRING);
			$data['content']=filter_input(INPUT_POST,'content',FILTER_UNSAFE_RAW);
			$data['enable']=filter_input(INPUT_POST,'enable',FILTER_SANITIZE_NUMBER_INT);
			if($login_control->add_work($data))
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
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			$data['title']=filter_input(INPUT_POST,'title',FILTER_SANITIZE_STRING);
			$data['content']=filter_input(INPUT_POST,'content',FILTER_UNSAFE_RAW);
			$data['enable']=filter_input(INPUT_POST,'enable',FILTER_SANITIZE_NUMBER_INT);
			if($login_control->upd_work($data))
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
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			if($login_control->del_work($data))
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

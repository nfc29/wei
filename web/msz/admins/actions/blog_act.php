<?
header("Content-type: text/html; charset=utf-8"); 
include("../lib/config.php");
require_once('../lib/php_image_magician.php');
session_start();
if($_SESSION['login'])
{
	$blog_control= new blog();
	switch($_POST['act'])
	{

		case "add":
		    
			if($_POST['pic'] != ''){			
				$pic_type = explode('.', $_POST['pic']);
				$ext = strtolower($pic_type[count($pic_type)-1]);
				$file_name = date('Ymd_His');
				$pic = $file_name.'.'.$ext;
				
				$magicianObj = new imageLib('../../uploads/pic_temp/'.$_POST['pic']);
				$magicianObj -> resizeImage(100, 100);
				$magicianObj -> saveImage('../../uploads/blog_img/'.$pic, 100);
				
				unlink('../../uploads/pic_temp/'.$_POST['pic']);
			}
			$data['title']=filter_input(INPUT_POST,'title',FILTER_SANITIZE_STRING);
			$data['content']=filter_input(INPUT_POST,'content',FILTER_UNSAFE_RAW);
			$data['url']=filter_input(INPUT_POST,'url',FILTER_SANITIZE_STRING);
			$data['file1']=$pic;
			$data['enable']=filter_input(INPUT_POST,'enable',FILTER_SANITIZE_NUMBER_INT);
			if($blog_control->blog_add($data))
			{
			
			 echo "add_ok";	
			 exit;
			}
			break;
		case "mod":
			$pic = $_POST['pic_old'];
			if($_POST['pic'] != ''){			
				$pic_type = explode('.', $_POST['pic']);
				$ext = strtolower($pic_type[count($pic_type)-1]);
				$file_name = date('Ymd_His');
				$pic = $file_name.'.'.$ext;
				
				$magicianObj = new imageLib('../../uploads/pic_temp/'.$_POST['pic']);
				$magicianObj -> resizeImage(100, 100);
				$magicianObj -> saveImage('../../uploads/blog_img/'.$pic, 100);
				
				unlink('../../uploads/pic_temp/'.$_POST['pic']);
			}
			$data['title']=filter_input(INPUT_POST,'title',FILTER_SANITIZE_STRING);
			$data['content']=filter_input(INPUT_POST,'content',FILTER_UNSAFE_RAW);
			$data['url']=filter_input(INPUT_POST,'url',FILTER_SANITIZE_STRING);
			$data['file1']=$pic;
			$data['enable']=filter_input(INPUT_POST,'enable',FILTER_SANITIZE_NUMBER_INT);
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			if($blog_control->blog_mod($data))
			{
				echo "mod_ok";	
				exit;
			}
			break;
		case "del_img":
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			$data['file1']="";
			if(file_exists('../../uploads/blog_img/'.$_POST['pic']))
			{
				unlink('../../uploads/blog_img/'.$_POST['pic']);
			}
			
			if($blog_control->blog_delimg_mod($data))
			{
				echo "1";
				exit;
			}
			else
			{
				echo "0";
				exit;
			}
			break;
		case "del":
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			if($blog_control->blog_del($data))
			{
				echo "1";
				exit;
				}
			else
			{
				echo "0";
				exit;
				}	
			break;
		default:
			?>
			<?
			break;
		}
	}
?>
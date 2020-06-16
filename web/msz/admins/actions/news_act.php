<?
header("Content-type: text/html; charset=utf-8"); 
include("../lib/config.php");
include("../lib/resize_img.php");
require_once('../lib/php_image_magician.php');
session_start();
if($_SESSION['login'])
{
	$news_control= new news();
	switch($_POST['act'])
	{

		case "add":
		    
			if($_POST['pic'] != ''){			
				$pic_type = explode('.', $_POST['pic']);
				$ext = strtolower($pic_type[count($pic_type)-1]);
				$file_name = date('Ymd_His');
				$pic = $file_name.'.'.$ext;
				
				$magicianObj = new imageLib('../../uploads/pic_temp/'.$_POST['pic']);
				//$magicianObj -> resizeImage(100, 100);
				$magicianObj -> saveImage('../../uploads/news_img/'.$pic, 100);
				
				unlink('../../uploads/pic_temp/'.$_POST['pic']);
			}
			$data['title']=filter_input(INPUT_POST,'title',FILTER_SANITIZE_STRING);
			$data['content']=filter_input(INPUT_POST,'content',FILTER_UNSAFE_RAW);
			$data['file1']=$pic;
			$data['enable']=filter_input(INPUT_POST,'enable',FILTER_SANITIZE_NUMBER_INT);
			if($news_control->news_add($data))
			{
			//echo $data['content'];
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
				//$magicianObj -> resizeImage(100, 100);
				$magicianObj -> saveImage('../../uploads/news_img/'.$pic, 100);
				unlink('../../uploads/pic_temp/'.$_POST['pic']);
			}
			$data['title']=filter_input(INPUT_POST,'title',FILTER_SANITIZE_STRING);
			$data['content']=filter_input(INPUT_POST,'content',FILTER_UNSAFE_RAW);
			$data['file1']=$pic;
			$data['enable']=filter_input(INPUT_POST,'enable',FILTER_SANITIZE_NUMBER_INT);
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			if($news_control->news_mod($data))
			{
				echo "mod_ok";	
				exit;
			}
			break;
		case "upload":
			if($_FILES['img']['error']!=4)
			{
				$upload_control=new upload($_FILES['img']);
				$data['url']=$upload_control->file_copy("news/");
				$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
				$name_temp=explode("/",$data['url']);
				$upload_control->resize_pic_by_gdlib(119,119,"news/s_".$name_temp[count($name_temp)-1]);
				$news_control->news_img_add($data);
				}
			$result=$news_control->news_img_list($data);
			?>
			<ul id="img_ul">
			<?
			for($i=0;$i<count($result);$i++)
			{
				$name_temp=explode("/",$result[$i]['ni_url']);
				?>
				<li><img src="../web/uploads/news/s_<?=$name_temp[count($name_temp)-1]?>"><a href="#" onclick="del_img(<?=$result[$i]['ni_id']?>,<?=$result[$i]['news_id']?>,'status','../actions/news_act.php');">刪除</a></li>
				<?
				}
			?>
			</ul>
			<?
			exit;
			break;
		case "del_img":
			$data['id']=filter_input(INPUT_POST,'id',FILTER_SANITIZE_NUMBER_INT);
			$data['file1']="";
			if(file_exists('../../uploads/news_img/'.$_POST['pic']))
			{
				unlink('../../uploads/news_img/'.$_POST['pic']);
			}
			
			if($news_control->news_delimg_mod($data))
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
			/*$result=$news_control->news_img_list($data);
			for($i=0;$i<count($result);$i++)
			{
				if(file_exists($result[$i]["ni_url"]))
				{
					unlink($result[$i]["ni_url"]);
					$news_control->news_img_del($result[$i]["ni_id"]);
					}
				$name_temp=explode("/",$result[$i]["ni_url"]);
				if(file_exists("../web/uploads/news/s_".$name_temp[count($name_temp)-1]))
				{
					unlink("../web/uploads/news/s_".$name_temp[count($name_temp)-1]);
					}
				}*/
			if($news_control->news_del($data))
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
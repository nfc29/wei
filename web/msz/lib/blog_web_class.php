<?
Class blog {
	var $success = true;
	var $err_msg = '';
	var $dbh;
  
	function __construct(){
		$dbh = new dbConnect();
		$this->dbh =$dbh->_Link;
		}
		
#################分頁###################
	function blog_web_list($data) 
	{
	
		$sqlstr="Select * from `blog` where `b_enable`=0 order by`b_cdate` desc;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->execute();
		if($stmt->errorCode()=="0000")
		{
			return $stmt->fetchAll(PDO::FETCH_ASSOC);
			}
		else
		{
			return $stmt->errorCode();
			}
	}
	function get_blog($data)
	{
		$sqlstr="Select * from `blog` "
				." where `b_id`=:id ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	function get_start($data)
	{
		$sqlstr="Select * from `blog` where 1=1 and `b_enable`=0 order by `b_id` desc ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	
//////////////////////////////////////////////////////////
#################前台顯示分頁###################
	function pr_blog_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `blog` where 1=1 ";
		$sqlstr.=" order by `b_cdate` asc limit $start_recoders,$page_Number ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->execute();
		if($stmt->errorCode()=="0000")
		{
			return $stmt->fetchAll(PDO::FETCH_ASSOC);
			}
		else
		{
			return $stmt->errorCode();
			}
		}
	function  pr_blog_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `blog` where `b_enable`=0";
		$stmt =$this->dbh->prepare($sqlstr);
		$stmt->execute();
		$count =$stmt ->fetchColumn(); //總筆數//print_r($count);
		$total_page = ceil($count/$page_Number);	
		if($stmt->errorCode()=="0000")
		{
			return $total_page;
			}
		else
		{
			return false;
			}

	
}





}



?>
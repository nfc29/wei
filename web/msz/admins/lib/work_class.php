<?
Class work {
	var $success = true;
	var $err_msg = '';
	var $dbh;

	function __construct(){
		$dbh = new dbConnect();
		$this->dbh =$dbh->_Link;
	}
	
	
	
	function add_work($data)
	{
		$sqlstr=" Insert into `work` (`w_title`,`w_content`,`w_enable`,`w_cdate`) "
				." values (:title,:content,:enable,now()) ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":title",$data['title'],PDO::PARAM_STR);
		$stmt->bindParam(":content",$data['content'],PDO::PARAM_STR);
		$stmt->bindParam(":enable",$data['enable'],PDO::PARAM_INT);
		$stmt->execute();
		if($stmt->errorCode()=="0000")
		{	
			return true;
			}
		else
		{
			return false;
			}
	}
		
	
	function upd_work($data)
	{
		$sqlstr=" Update `work` set "
				." `w_title`=:title "
				." ,`w_content`=:content"
				." ,`w_enable`=:enable"	
				." where `w_id`=:id  limit 1; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->bindParam(":title",$data['title'],PDO::PARAM_STR);
		$stmt->bindParam(":content",$data['content'],PDO::PARAM_STR);
		$stmt->bindParam(":enable",$data['enable'],PDO::PARAM_INT);
		$stmt->execute();
		if($stmt->errorCode()=="0000")
		{	
			return true;
			}
		else
		{
			return false;
			}
		}
	
	function del_work($data)
	{
		$sqlstr=" Delete from `work` "
				." where `w_id`=:id  limit 1; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		if($stmt->errorCode()=="0000")
		{	
			return true;
			}
		else
		{
			return false;
			}
		}
	
	function get_work($data)
	{
		$sqlstr="Select * from `work` "
				." where `w_id`=:id ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
		}


	
	function work_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `work` where 1=1 ";
		$sqlstr.=" order by `w_cdate` asc limit $start_recoders,$page_Number ;";
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
	
	function  work_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `work`";
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
<?
Class media {
	var $success = true;
	var $err_msg = '';
	var $dbh;
  
	function __construct(){
		$dbh = new dbConnect();
		$this->dbh =$dbh->_Link;
		}
		
#################分頁###################
	function media_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `media` where 1=1 ";
		$sqlstr.=" order by `m_cdate` desc limit $start_recoders,$page_Number ;";
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
	function  media_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `media`";
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
	function media_add($data)
	{
		$sqlstr=" Insert into `media` (`m_title`,`m_content`,`m_url`,`m_img`,`m_enable`,`m_cdate`) "
				." values (:title,:content,:url,:file1,:enable,now()) ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":title",$data['title'],PDO::PARAM_STR);
		$stmt->bindParam(":content",$data['content'],PDO::PARAM_STR);
		$stmt->bindParam(':url',$data['url'],PDO::PARAM_STR);
		$stmt->bindParam(":file1",$data['file1'],PDO::PARAM_STR);
		$stmt->bindParam(":enable",$data['enable'],PDO::PARAM_STR);
		$stmt->execute();
		if($stmt->errorCode()=="0000")
		{	
			return true;
			}
		else
		{
			return $stmt->errorCode();
			}
	}

	function media_mod($data)
	{
		
			$sqlstr="update `media` set"
					."`m_title`=:title , "
					."`m_content`=:content , "
					."`m_url`=:url , "
					."`m_img`=:file1 , "
					."`m_enable`=:enable"
					." where `m_id`=:id;";	
					
			$stmt=$this->dbh->prepare($sqlstr);
			$stmt->bindParam(':title',$data['title'],PDO::PARAM_STR);
			$stmt->bindParam(':content',$data['content'],PDO::PARAM_STR);
			$stmt->bindParam(':url',$data['url'],PDO::PARAM_STR);
			$stmt->bindParam(':file1',$data['file1'],PDO::PARAM_STR);
			$stmt->bindParam(':enable',$data['enable'],PDO::PARAM_INT);
			$stmt->bindParam(':id',$data['id'],PDO::PARAM_INT);
			$stmt->execute();
			if($stmt->errorCode()=="0000")
			{
			return true;
			}
			else
			{
			return $stmt->errorCode();
			}
				
	
	}
	function media_delimg_mod($data)
	{
		
			$sqlstr="update `media` set`m_img`=:file1 where `m_id`=:id;";	
					
			$stmt=$this->dbh->prepare($sqlstr);
			$stmt->bindParam(':file1',$data['file1'],PDO::PARAM_STR);
			$stmt->bindParam(':id',$data['id'],PDO::PARAM_INT);
			$stmt->execute();
			if($stmt->errorCode()=="0000")
			{
			return true;
			}
			else
			{
			return $stmt->errorCode();
			}
				
	
	}

	function media_del($data) {
	
		$sqlstr=" Delete from `media` "
				." where `m_id`=:id ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(':id',$data['id'],PDO::PARAM_INT);
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
	function get_media($data)
	{
		$sqlstr="Select * from `media` "
				." where `m_id`=:id ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	
//////////////////////////////////////////////////////////
#################前台顯示分頁###################
	function pr_media_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `media` where 1=1 ";
		$sqlstr.=" order by `m_cdate` asc limit $start_recoders,$page_Number ;";
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
	function  pr_media_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `media` where `m_enable`=0";
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
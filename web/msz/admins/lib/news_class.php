<?

Class news {
	var $success = true;
	var $err_msg = '';
	var $dbh;
  
	function __construct(){
		$dbh = new dbConnect();
		$this->dbh =$dbh->_Link;
		}
		
#################分頁###################
	function news_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `news` where 1=1 ";
		$sqlstr.=" order by `news_cdate` desc limit $start_recoders,$page_Number ;";
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
	function  news_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `news` where `news_enable`=0";
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
	function news_index_list($data) {
	
		
		$sqlstr="Select * from `news` where 1=1 and `news_enable`=0";
		$sqlstr.=" order by `news_startdate` desc limit 0,3;";
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
	function m_news_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `news` where 1=1 ";
		$sqlstr.=" order by `news_startdate` desc limit $start_recoders,$page_Number ;";
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
	function  m_news_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `news` where `news_enable`=0";
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
	function m_news_index_list($data) {
	
		
		$sqlstr="Select * from `news` where 1=1 and `news_enable`=0";
		$sqlstr.=" order by `news_startdate` desc limit 0,3;";
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

	function news_add($data)
	{
		$sqlstr=" Insert into `news` (`news_title`,`news_content`,`news_img`,`news_enable`,`news_cdate`) "
				." values (:title,:content,:file1,:enable,now()) ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":title",$data['title'],PDO::PARAM_STR);
		$stmt->bindParam(":content",$data['content'],PDO::PARAM_STR);
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

	function news_mod($data)
	{
		
			$sqlstr="update `news` set"
					."`news_title`=:title , "
					."`news_content`=:content , "
					."`news_img`=:file1 , "
					."`news_enable`=:enable"
					." where `news_id`=:id;";	
					
			$stmt=$this->dbh->prepare($sqlstr);
			$stmt->bindParam(':title',$data['title'],PDO::PARAM_STR);
			$stmt->bindParam(':content',$data['content'],PDO::PARAM_STR);
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
	function news_delimg_mod($data)
	{
		
			$sqlstr="update `news` set`news_img`=:file1 where `news_id`=:id;";	
					
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

	function news_del($data) {
	
		$sqlstr=" Delete from `news` "
				." where `news_id`=:id ;";
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
	function get_news($data)
	{
		$sqlstr="Select * from `news` "
				." where `news_id`=:id ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
		}
//////////////////////////////////////////////////////////
#################前台顯示分頁###################
	function pr_news_page_list($data) {
	
		$page_Number =10; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `news` where 1=1 ";
		$sqlstr.=" order by `news_cdate` asc limit $start_recoders,$page_Number ;";
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
	function  pr_news_page_total($data)
	{
		$page_Number =10;
		$sqlstr="Select count(*) from `news` where `news_enable`=0";
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
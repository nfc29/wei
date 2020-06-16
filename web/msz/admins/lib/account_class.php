<?
Class account {
	var $success = true;
	var $err_msg = '';
	var $dbh;

	function __construct(){
		$dbh = new dbConnect();
		$this->dbh =$dbh->_Link;
	}
	
	/*檢查帳號是否已重覆*/
	function check_acc($data)
	{
	
		$sqlstr="Select count(*) as total from `account` "
				." where `acc`=:acc ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(':acc',$data['acc'],PDO::PARAM_STR);	
		$stmt->execute();
		$result= $stmt->fetch(PDO::FETCH_ASSOC);
		if($stmt->errorCode()=="00000")
		{
			return $result['total'];
		}
		else
		{
			return $stmt->errorCode();
		}
	}
	/*後台登入check*/
	function login_check($data)
	{
		$sqlstr="Select count(*) as total from `account` "
				." where `acc`=:id and `acc_pwd`=:pwd ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_STR);
		$stmt->bindParam(":pwd",$data['pwd'],PDO::PARAM_STR);
		$stmt->execute();
		$result=$stmt->fetch(PDO::FETCH_ASSOC);
		return intval($result['total']);
	}
	
	/*帳號新增*/
	function add_account($data)
	{
		$sqlstr=" Insert into `account` (`acc`,`acc_name`,`acc_pwd`,`acc_cdate`) "
				." values (:acc,:acc_name,:acc_pwd,now()) ;";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":acc",$data['acc'],PDO::PARAM_STR);
		$stmt->bindParam(":acc_name",$data['acc_name'],PDO::PARAM_STR);
		$stmt->bindParam(":acc_pwd",$data['acc_pwd'],PDO::PARAM_STR);
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
		
	/*帳號修改*/
	function upd_account($data)
	{
		$sqlstr=" Update `account` set "
				." `acc_pwd`=:acc_pwd "
				." ,`acc_name`=:acc_name"
				." where `acc_id`=:acc_id  limit 1; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":acc_id",$data['acc_id'],PDO::PARAM_INT);
		$stmt->bindParam(":acc_name",$data['acc_name'],PDO::PARAM_STR);
		$stmt->bindParam(":acc_pwd",$data['acc_pwd'],PDO::PARAM_STR);
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
	/*帳號刪除*/
	function del_account($data)
	{
		$sqlstr=" Delete from `account` "
				." where `acc_id`=:acc_id  limit 1; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":acc_id",$data['acc_id'],PDO::PARAM_INT);
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
	
	function get_account($data)
	{
		$sqlstr="Select * from `account` "
				." where `acc_id`=:id ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
		}

		
	function list_account($data)
	{
		$sqlstr="Select * from `account` ";
				//." Limit :row , :limit ";
		$stmt=$this->dbh->prepare($sqlstr);
		//$stmt->bindParam(":row",$data['row'],PDO::PARAM_INT);
		//$stmt->bindParam(":limit",$data['limit'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	}
	/*( 前台管理,系統管理 )  主項目*/
	function get_perm($data)
	{
		$sqlstr="Select `acc_right` from `account` "
				." where  `acc`=:id and `acc_pwd`=:pwd ; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_STR);
		$stmt->bindParam(":pwd",$data['pwd'],PDO::PARAM_STR);
		$stmt->execute();
		$result=$stmt->fetch(PDO::FETCH_ASSOC);
		return $result['acc_right'];
	}
	/* 前台管理 子項目*/
	function get_subitem($data)
	{
		$sqlstr="Select `acc_item` from `account` "
				." where  `acc`=:id and `acc_pwd`=:pwd ; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_STR);
		$stmt->bindParam(":pwd",$data['pwd'],PDO::PARAM_STR);
		$stmt->execute();
		$result=$stmt->fetch(PDO::FETCH_ASSOC);
		return $result['acc_item'];
	}
	/* 系統管理 子項目*/
	function get_subitem2($data)
	{
		$sqlstr="Select `acc_item2` from `account` "
				." where  `acc`=:id and `acc_pwd`=:pwd ; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_STR);
		$stmt->bindParam(":pwd",$data['pwd'],PDO::PARAM_STR);
		$stmt->execute();
		$result=$stmt->fetch(PDO::FETCH_ASSOC);
		return $result['acc_item2'];
	}
	/* 取得 帳號姓名*/
	function get_admin_name($data)
	{
		$sqlstr="Select `acc_name` from `account` "
				." where  `acc`=:id and `acc_pwd`=:pwd ; ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_STR);
		$stmt->bindParam(":pwd",$data['pwd'],PDO::PARAM_STR);
		$stmt->execute();
		$result=$stmt->fetch(PDO::FETCH_ASSOC);
		return $result['acc_name'];
	}
	
	/*帳號 分頁*/
	function account_page_list($data) {
	
		$page_Number =5; //預設每頁筆
		$num_page = 1; //預設頁數
		if(isset($_GET['page']))
		{
		$num_page = $_GET['page'];
		}
		$start_recoders =($num_page -1) * $page_Number;
		$sqlstr="Select * from `account` where 1=1 ";
		$sqlstr.=" order by `acc_cdate` asc limit $start_recoders,$page_Number ;";
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
	/*帳號 分頁總數*/	
	function  account_page_total($data)
	{
		$page_Number =5;
		$sqlstr="Select count(*) from `account`";
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
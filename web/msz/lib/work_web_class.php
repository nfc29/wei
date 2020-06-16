<?
Class work {
	var $success = true;
	var $err_msg = '';
	var $dbh;
  
	function __construct(){
		$dbh = new dbConnect();
		$this->dbh =$dbh->_Link;
		}
		
#################分頁###################
	function work_web_list($data) 
	{
	
		$sqlstr="Select * from `work` where `w_enable`=0 order by `w_cdate` desc;";
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
	function get_work($data)
	{
		$sqlstr="Select * from `work` "
				." where  `w_id`=:id and `w_enable`=0 ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	function get_start($data)
	{
		$sqlstr="Select * from `work` where 1=1 and `w_enable`=0 order by `w_id` desc ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	
//////////////////////////////////////////////////////////


}



?>
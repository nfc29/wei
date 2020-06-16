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
	function media_web_list($data) 
	{
	
		$sqlstr="Select * from `media` where `m_enable`=0 order by `m_cdate` desc;";
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
	function get_media($data)
	{
		$sqlstr="Select * from `media` "
				." where  `m_id`=:id ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->bindParam(":id",$data['id'],PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	function get_start($data)
	{
		$sqlstr="Select * from `media` where 1=1 and `m_enable`=0 order by `m_id` desc ";
		$stmt=$this->dbh->prepare($sqlstr);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	
//////////////////////////////////////////////////////////


}



?>
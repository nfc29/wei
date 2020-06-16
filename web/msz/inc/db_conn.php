<?php
//error_reporting(0);
ini_set("memory_limit", "256M");

class dbConnect {
	var $_Link;
	function __construct() {
		$dbInfo['database_target'] = "localhost";
		$dbInfo['database_name'] = "msz";
		
		$dbInfo['username'] = 'msz';
		$dbInfo['password'] = '2013msz0220';

		$dbConnString = "mysql:host=" . $dbInfo['database_target'] . "; dbname=" . $dbInfo['database_name'];
		$dbh = new PDO($dbConnString, $dbInfo['username'], $dbInfo['password']);
		if(! $dbh ){
			echo "Database connection error\n";
		}
		$dbh->query("SET NAMES 'utf8'");
		$this->_Link = $dbh;
	}
}
?>
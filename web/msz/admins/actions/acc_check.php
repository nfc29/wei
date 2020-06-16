<?
include("../inc/db_conn.php");
include("../lib/account_class.php");
$account_control=new account();
$data['acc']=filter_input(INPUT_POST,'acc',FILTER_SANITIZE_STRING);
echo $account_control->check_acc($data);
?>
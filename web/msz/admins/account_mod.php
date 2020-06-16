<?
	if( get_class($login_control) != "account")
	{
		$login_control=new account();
		}
	$acc_data['id']=filter_input(INPUT_GET,'id',FILTER_SANITIZE_NUMBER_INT);
	$result=$login_control->get_account($acc_data);
?>
<script>
	$(document).ready(function() {
		$('#mod').submit(function() {
	   var formData = $(this).serialize();
		  $.post('actions/account_act.php',formData,processData).error('ouch');
		  function processData(data) {
			var success="mod_ok";
			if (success=data) {
			  alert('修改成功!');
			  window.history.go(-1);
			} else {
			  alert('修改失敗!');
			   window.history.go(-1);  
			 }
		   } 
		   return false;
	   }); 
			
	});
</script>
<div class="row-fluid sortable">
<div class="box span12">
	<div class="box-header well">
		<h2>帳號管理</h2>
			<div class="box-icon">
			<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
			</div>
	</div>
	<div class="box-content">
	
		<ul class="nav nav-tabs">
			<li><a href="?perm=acc&act=list">列表</a></li>
			<li class="active"><a href="#">編輯</a></li>
		</ul>
		
		<form  method="POST" id="mod" class="form-horizontal">
			<fieldset>
				<div class="control-group">
					<label class="control-label" for="typeahead">帳號</label>
					<div class="controls">
						<input type="text" class="input-xlarge focused" id="acc" name="acc" value="<?=$result['acc']?>" readonly="readonly">				
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="typeahead">姓名</label>
					<div class="controls">
						<input type="text" class="input-xlarge focused" id="acc_name" name="acc_name" value="<?=$result['acc_name']?>">				
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="typeahead">密碼</label>
					<div class="controls">
						<input type="password" class="input-xlarge focused" id="acc_pwd" name="acc_pwd" value="">	(不更改留空)			
					</div>
				</div>
					
				<div class="form-actions">		
					<input type="hidden" name="act" value="mod">
					<input type="hidden" name="acc_pwd_old" value="<?=$result['acc_pwd']?>">
					<input type="hidden" name="id" value="<?=$result['acc_id']?>">
					<input type="submit"   class="btn btn-primary" onclick="return check_mod();" value="確認送出">	
					<input type="reset"   class="btn btn-primary" onClick="history.back();" value="取消回上一頁">					
				</div>
			</fieldset>
			
		</form> 
					
				
	</div>
					
</div>
</div>
<script>
$(document).ready(function() {
	$('#add').submit(function() {
	   var formData = $(this).serialize();
		  $.post('actions/account_act.php',formData,addform).error('ouch');
		  function addform(data) {
				if (data="add_ok") {
				
					alert('新增成功!');
					window.history.go(-1);
				}
				else {
					alert('新增失敗!');
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
			<li class="active"><a href="?perm=acc&act=add">新增</a></li>
		</ul>
		
		<form  method="POST" id="add" class="form-horizontal">
			<fieldset>
				<div class="control-group">
					<label class="control-label" for="typeahead">帳號</label>
					<div class="controls">
						<input type="text" class="input-xlarge focused" id="acc" name="acc" onchange="checkacc();">				
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="typeahead">姓名</label>
					<div class="controls">
						<input type="text" class="input-xlarge focused" id="acc_name" name="acc_name">				
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="typeahead">密碼</label>
					<div class="controls">
						<input type="password" class="input-xlarge focused" id="acc_pwd" name="acc_pwd">				
					</div>
				</div>
					
				<div class="form-actions">		
					<input type="submit"   class="btn btn-primary" onclick="return check();" value="送出">	
					<input type="reset"   class="btn btn-primary" onClick="history.back();" value="回上一頁">					
				</div>
			</fieldset>
			<input type="hidden" name="act" value="add">
		</form> 
					
				
	</div>
					
</div>
</div>
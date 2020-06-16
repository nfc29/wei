<script>
$(document).ready(function() {
	$('#add').submit(function() {
	 $("#hidDescription").val(CKEDITOR.instances.txtdescription.getData()); 
	   var formData = $(this).serialize();
		  $.post('actions/work_act.php',formData,addform).error('ouch');
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
		<h2>徵才資訊</h2>
			<div class="box-icon">
			<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
			</div>
	</div>
	<div class="box-content">
	
		<ul class="nav nav-tabs">
			<li><a href="?perm=work&act=list">列表</a></li>
			<li class="active"><a href="?perm=work&act=add">新增</a></li>
		</ul>
		
		<form  method="POST" id="add" class="form-horizontal">
			<fieldset>
				<div class="control-group">
					<label class="control-label" for="typeahead">工作職缺</label>
					<div class="controls">
						<input type="text" class="input-xlarge focused" id="title" name="title">				
					</div>
				</div>
				
				<div class="control-group">
					<label class="control-label" for="textarea2">內容</label>
					<div class="controls">
						<textarea class="textarea ckeditor" id="txtdescription"name="txtdescription" cols="79" rows="15" >
						「工作內容」：<br>
						<br>「工作地點」：</br>
						<br>「工作時間」：</br>
						<br>「工作性質」：</br>
						<br>「職務類別」：</br>
						<br>「工作待遇」：</br>
						<br>「聯 絡 人」：</br>
						<br>「聯絡電話」：</br>
						<br>「電子郵件」：</br>
						<br>「其它方式」：</br>
						</textarea>
						<?php
						include_once "scripts/CKEdit/ckeditor/ckeditor.php";
						$CKEditor = new CKEditor();
						$CKEditor->basePath = 'scripts/CKEdit/ckeditor/';
						$CKEditor->replace("txtdescription");
						?>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" ></label>
					
					<td>
									顯示<label class="radio"><input type="radio" name="enable" id="enable" value="0" checked>  </label>
									關閉<label class="radio"><input type="radio" name="enable" id="enable" value="1">  </label>
					</td>
								
				</div>	
				<div class="form-actions">		
					<input type="hidden" name="content" id="hidDescription" >
					<input type="submit"   class="btn btn-primary" onclick="return work_addform();" value="送出">	
					<input type="reset"   class="btn btn-primary" onClick="history.back();" value="回上一頁">					
				</div>
			</fieldset>
			<input type="hidden" name="act" value="add">
		</form> 
					
				
	</div>
					
</div>
</div>
<script>
function  work_addform()
{
	
	if(document.getElementById("title").value=="")
	{	
				alert("請填寫工作職缺");
				document.getElementById("title").focus();
				return false;
	}
		if(oEditor.getData()==""){ 	//判斷 textarea 是否為空
	
				$("#txtdescription").focus();
				alert("請填寫內容");
				return false;
	}

	
}
</script>	
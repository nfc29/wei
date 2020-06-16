<script>
	$(document).ready(function() {
	 $('#add').submit(function() {
	  $("#hidDescription").val(CKEDITOR.instances.txtdescription.getData()); 
	   var formData = $(this).serialize();
		  $.post('actions/news_act.php',formData,processData).error('ouch');
		  function processData(data) {
			
			if (data="add_ok") {
			  alert('新增成功!');
			window.history.go(-1);
			} else {
			 
				 alert('新增失敗!');  
			 }
		   } 
		   return false;
	   }); 
			
	}); 
	$(document).ready(function(){
				$('#pic_upload').uploadify({
					'uploader'		 : 'scripts/uploadify/uploadify.swf',
					'script'		 : 'scripts/uploadify/uploadify.php',
					'cancelImg'		 : 'scripts/uploadify/cancel.png',
					//'buttonImg'		 : '../images/icons/uploadimag.png',
					'width'			 : 150,
					'folder'		 : '../uploads/pic_temp/',
					'multi'			 : false,				//設置為true時可以上傳多個文件
					'queueSizeLimit' : 1,					//一次上傳數量
					'auto'			 : true,
					'fileExt'		 : '*.jpg;*.gif;*.png',
					'fileDesc'		 : 'Image Files (.JPG, .GIF, .PNG)',
					'removeCompleted': false,
					'sizeLimit'		 : 2048000,
					'onSelect'		 : function(event,ID,fileObj){
											$('#pic').attr('value',fileObj.name);
										},
					'onCancel'		 : function(event, ID, fileObj, data, remove, clearFast){
											$('#pic').val('');
										}
				});
			})
</script>
<div class="row-fluid sortable">
<div class="box span12">
	<div class="box-header well">
		<h2>最新消息</h2>
			<div class="box-icon">
			<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
			</div>
	</div>
	<div class="box-content">
	
		<ul class="nav nav-tabs">
			<li><a href="?perm=news&act=list">列表</a></li>
			<li class="active"><a href="?perm=news&act=add">新增</a></li>
		</ul>
		
		<form method="POST" id="add" class="form-horizontal" enctype="multipart/form-data">
			<fieldset>
				<div class="control-group">
					<label class="control-label" for="typeahead">標題</label>
					<div class="controls">
						<input type="text" class="span6 typeahead" id="title" name="title">				
					</div>
				</div>
				
				<div class="control-group">
					<label class="control-label" for="textarea2">內容</label>
					<div class="controls">
						<textarea class="textarea ckeditor" id="txtdescription"name="txtdescription" cols="79" rows="15" ></textarea>
						<?php
						include_once "scripts/CKEdit/ckeditor/ckeditor.php";
						$CKEditor = new CKEditor();
						$CKEditor->basePath = 'scripts/CKEdit/ckeditor/';
						$CKEditor->config['toolbar'] = array();
						$CKEditor->replace("txtdescription");
						?>

					</div>
				</div>
				<div class="control-group">
					<label class="control-label" >上傳</label>
					<div class="controls">
					<input data-no-uniform="true" type="file" id="pic_upload" name="pic_upload"/>
					<input type="hidden" id="pic" name="pic" />
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
					<input type="hidden" name="act" value="add">
					<input type="submit"  class="btn btn-primary" onClick="return content_addform();"value="送出">	
					<input type="reset"   class="btn btn-primary" onClick="history.back();" value="回上一頁">					
				</div>
			</fieldset>
			
		</form> 
					
				
	</div>
					
</div>
</div>
<script>
function  content_addform()
{
	var oEditor = CKEDITOR.instances.txtdescription;
	
	if(document.getElementById("title").value=="")
	{	
				alert("請填寫標題");
				document.getElementById("title").focus();
				return false;
	}

	

	if(oEditor.getData()==""){ 	//判斷 textarea 是否為空
	
				$("#txtdescription").focus();
				alert("請填寫內容");
				return false;
	}
	if(document.getElementById("pic").value=="")
	{	
				alert("請上傳圖片");
				document.getElementById("pic").focus();
				return false;
	}
	
	
}
</script>	
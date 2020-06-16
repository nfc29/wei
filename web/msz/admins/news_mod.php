<?
include_once "scripts/CKEdit/ckeditor/ckeditor.php";

	if( get_class($login_control) != "news")
	{
		$login_control=new news();
	}
	$data['id']=filter_input(INPUT_GET,'id',FILTER_SANITIZE_NUMBER_INT);
	$result=$login_control->get_news($data);


?>
<script>
	$(document).ready(function() {
	 $('#mod').submit(function() {
	  $("#hidDescription").val(CKEDITOR.instances.txtdescription.getData()); 
	   var formData = $(this).serialize();
		  $.post('actions/news_act.php',formData,processData).error('ouch');
		  function processData(data) {
			
			if (data="add_ok") {
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
	$(document).ready(function(){
				$('#pic_upload').uploadify({
					'uploader'		 : 'scripts/uploadify/uploadify.swf',
					'script'		 : 'scripts/uploadify/uploadify.php',
					'cancelImg'		 : 'scripts/uploadify/cancel.png',
					//'buttonImg'		 : '../images/icons/uploadimag.png',
					'width'			 : 120,
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
			<li class="active"><a href="#">編輯</a></li>
		</ul>
		
		<form method="POST" id="mod" class="form-horizontal" enctype="multipart/form-data">
			<fieldset>
				<div class="control-group">
					<label class="control-label" for="typeahead">標題</label>
					<div class="controls">
						<input type="text" class="span6 typeahead" id="title" name="title" value="<?=$result['news_title']?>">				
					</div>
				</div>
				
				<div class="control-group">
					<label class="control-label" for="textarea2">內容</label>
					<div class="controls">
						<textarea class="textarea ckeditor" id="txtdescription"name="txtdescription" cols="79" rows="15" ><?=$result['news_content']?></textarea>
						<?
						$CKEditor = new CKEditor();
						$CKEditor->basePath ='scripts/CKEdit/ckeditor/';
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
					
					<?if($result['news_img']!=""){?>
					<input type="hidden" id="pic_old" name="pic_old" value="<?=$result['news_img']?>">
	
					<span id="pic_show">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="del_img('actions/news_act.php','<?=$result['news_img']?>','<?=$result['news_id']?>')" title="刪除展示圖">
					<img src="img/icons/Close-2-icon.png" style="margin:5px;"></a><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../uploads/news_img/<?=$result['news_img']?>"rel="lightbox" ><img src="../uploads/news_img/<?=$result['news_img']?>" style="width:60px;"></a>
					</span><span style="font-weight:bold;"></span>
					<?}?>
					</div>
					
				</div>
				<div class="control-group">
					<label class="control-label" ></label>
					
					<td>
									顯示<label class="radio"><input type="radio" name="enable" id="enable" value="0" <?=($result['news_enable']==0)?"checked":"" ?>> </label>
									關閉<label class="radio"><input type="radio" name="enable" id="enable" value="1" <?=($result['news_enable']==1)?"checked":"" ?>>  </label>
					</td>
								
					</div>
					
								
				<div class="form-actions">		
					<input type="hidden" name="content" id="hidDescription" >
					<input type="hidden" name="act" value="mod">
					<input type="hidden" name="id" value="<?=$result['news_id']?>">
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
	
	
	
}
</script>	
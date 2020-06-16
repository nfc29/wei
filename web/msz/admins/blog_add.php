<script>

	$(document).ready(function() {
	 $('#add').submit(function() {
	  $("#hidDescription").val(CKEDITOR.instances.txtdescription.getData()); 
	   var formData = $(this).serialize();
		  $.post('actions/blog_act.php',formData,processData).error('ouch');
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
				$.ajaxSetup({ cache: false });
				var jcrop_api;
				var complete_pic="";
				$('div#cp').hide();
				$('#pic_upload').uploadify({
					'uploader'		 : 'scripts/uploadify/uploadify.swf',
					'script'		 : 'lib/uploadify.php',
					'cancelImg'		 : 'scripts/uploadify/cancel.png',
					'width'			 : 150,
					'folder'		 : '../uploads/pic_temp/',
					'buttonText'	 : '', //按鈕上的文字  
					'multi'			 : false,				
					'queueSizeLimit' : 1,				
					'auto'			 : true,
					'fileExt'		 : '*.jpg;*.gif;*.png',
					'fileDesc'		 : 'Image Files (.JPG, .GIF, .PNG)',
					'removeCompleted': false,
					'sizeLimit'		 : 2048000,
					'onSelect'		 : function(event,ID,fileObj){
											$('#pic').attr('value',fileObj.name);
											jcrop_api.destroy(); 
										},
					'onCancel'		 : function(event, ID, fileObj, data, remove, clearFast){
											$('#pic').val('');
											
										},					
					'onComplete' 	:	function(event,ID,fileObj){
											var url='../uploads/pic_temp/'+fileObj.name;
											complete_pic="s_"+fileObj.name;
											$('img#jcop_pic').attr('src',url);
											
											$('input[name="jcop"]').val(fileObj.name);
										
											$(".inline").colorbox({inline:true,open:true,width:'75%',height:'75%' });
											
											$('#jcop_pic').Jcrop({
												 aspectRatio: 1,
												 onSelect: updateCoords
											},function(){
												jcrop_api = this;
												jcrop_api.animateTo([100,100,400,300]);
											});
										}								
				});
				
			
		$('#jcrop').submit(function() {
			
						var formData = $(this).serialize();
			
						$.post('crop.php',formData,processData).error('ouch');
				
						function processData(data) {
							if(data=="1"){
								var aurl='../uploads/pic_temp/'+complete_pic;
								alert('裁圖成功!');
								parent.$.fn.colorbox.close(); //完成後 colorbox 關閉
								jcrop_api.destroy();  //完成後裁切關閉
								$('#pic').attr('value',complete_pic);	
								$('img#complete').attr('src',aurl);
								$('a#complete').attr('href',aurl);
								$('div#cp').fadeIn(2000);
							
							}
							if(data=="0"){}
							
						
						}
			   
						return false;
					});
		});			
		function updateCoords(c)
		{
								$('#x').val(c.x);
								$('#y').val(c.y);
								$('#w').val(c.w);
								$('#h').val(c.h);
		};

		function checkCoords()
		{
								if (parseInt($('#w').val())) return true;
								alert('請選擇裁切位置');
								return false;
		};		
</script>
<div class="row-fluid sortable">
<div class="box span12">
	<div class="box-header well">
		<h2>部落客推薦</h2>
			<div class="box-icon">
			<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
			</div>
	</div>
	<div class="box-content">
	
		<ul class="nav nav-tabs">
			<li><a href="?perm=blog&act=list">列表</a></li>
			<li class="active"><a href="?perm=blog&act=add">新增</a></li>
			
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
						$CKEditor->replace("txtdescription");
						?>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="typeahead">詳細報導連結</label>
					<div class="controls">
						<input type="text" class="span6 typeahead" id="url" name="url">				
				</div>
				</div>
				<div class="control-group">
					<label class="control-label" >上傳(小圖)</label>
					
					<div class="controls">
					<input data-no-uniform="true" type="file" id="pic_upload" name="pic_upload"/>
					<input type="hidden" id="pic" name="pic" />
					</div>
					
					<!--裁切後圖片-->
					<div class="controls">
						<div id="cp">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  class='iframe2' id="complete" href="" >
							<img src="" id="complete" style="width:60px;"></a><span style="font-weight:bold;">( 裁切後圖片 )</span>
						</div>
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
		
		<!------裁圖------->
			<p><a class='inline' href="#inline_content"></a></p>
			
			<div style='display:none'>
				
				<div id='inline_content'>
				
					<img src="" id="jcop_pic"/>
					
					<form action="crop.php" method="post" id="jcrop" onsubmit="return checkCoords();">
					<input type="hidden" id="x" name="x" />
					<input type="hidden" id="y" name="y" />
					<input type="hidden" id="w" name="w" />
					<input type="hidden" id="h" name="h" />
					<input type="hidden"  name="jcop" />
					<p>(拖拉選取圖片)</p>
					<input  type="submit" class="button" value="裁圖" />
					
					</form>

						
				</div>
			</div>
		<!------end------->			
				
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
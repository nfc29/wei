	<!-- jQuery -->
	<script src="js/jquery-1.7.2.min.js"></script>
	<!-- jQuery UI -->
	<script src="js/jquery-ui-1.8.21.custom.min.js"></script>
	<!-- transition / effect library -->
	<script src="js/bootstrap-transition.js"></script>
	<!-- alert enhancer library -->
	<script src="js/bootstrap-alert.js"></script>
	<!-- modal / dialog library -->
	<script src="js/bootstrap-modal.js"></script>
	<!-- custom dropdown library -->
	<script src="js/bootstrap-dropdown.js"></script>
	<!-- scrolspy library -->
	<script src="js/bootstrap-scrollspy.js"></script>
	<!-- library for creating tabs -->
	<script src="js/bootstrap-tab.js"></script>
	<!-- library for advanced tooltip -->
	<script src="js/bootstrap-tooltip.js"></script>
	<!-- popover effect library -->
	<script src="js/bootstrap-popover.js"></script>
	<!-- button enhancer library -->
	<script src="js/bootstrap-button.js"></script>
	<!-- accordion library (optional, not used in demo) -->
	<script src="js/bootstrap-collapse.js"></script>
	<!-- carousel slideshow library (optional, not used in demo) -->
	<script src="js/bootstrap-carousel.js"></script>
	<!-- autocomplete library -->
	<script src="js/bootstrap-typeahead.js"></script>
	<!-- tour library -->
	<script src="js/bootstrap-tour.js"></script>
	<!-- library for cookie management -->
	<script src="js/jquery.cookie.js"></script>
	<!-- calander plugin -->
	<script src='js/fullcalendar.min.js'></script>
	<!-- data table plugin -->
	<script src='js/jquery.dataTables.min.js'></script>

	<!-- chart libraries start -->
	<script src="js/excanvas.js"></script>
	<script src="js/jquery.flot.min.js"></script>
	<script src="js/jquery.flot.pie.min.js"></script>
	<script src="js/jquery.flot.stack.js"></script>
	<script src="js/jquery.flot.resize.min.js"></script>
	<!-- chart libraries end -->

	<!-- select or dropdown enhancer -->
	<script src="js/jquery.chosen.min.js"></script>
	<!-- checkbox, radio, and file input styler -->
	<script src="js/jquery.uniform.min.js"></script>
	<!-- plugin for gallery image view -->
	<script src="js/jquery.colorbox.min.js"></script>
	<script src="js/jquery.colorbox.js"></script>
	<!-- rich text editor library -->
	<script src="js/jquery.cleditor.min.js"></script>
	<!-- notification plugin -->
	<script src="js/jquery.noty.js"></script>
	<!-- file manager library -->
	<script src="js/jquery.elfinder.min.js"></script>
	<!-- star rating plugin -->
	<script src="js/jquery.raty.min.js"></script>
	<!-- for iOS style toggle switch -->
	<script src="js/jquery.iphone.toggle.js"></script>
	<!-- autogrowing textarea plugin -->
	<script src="js/jquery.autogrow-textarea.js"></script>
	<!-- multiple file upload plugin -->
	<script src="js/jquery.uploadify-3.1.min.js"></script>
	<!-- history.js for cross-browser state change on ajax -->
	<script src="js/jquery.history.js"></script>
	<!-- application script for Charisma demo -->
	<script src="js/charisma.js"></script>
	
	<!-- ckedit-->
	<!--<script src="scripts/CKEdit/ckeditor/ckeditor.js"></script>-->
	
	<script  src="scripts/uploadify/jquery.uploadify.v2.1.4.min.js"></script>
	<!-- lightbox-->	
	<script src="scripts/lightbox/lightbox.js"></script>
	<!--jcrop-->
	<script src="scripts/jcrop/js/jquery.Jcrop.js"></script>
<script language="javascript" >
	 function check()
	{

	if(document.getElementById("acc").value=="")
		{	
				alert("請填寫帳號");
				document.getElementById("acc").focus();
				return false;
		}
	if(document.getElementById("acc_name").value=="")
		{	
				alert("請填寫姓名");
				document.getElementById("acc_name").focus();
				return false;
		}	

	if(document.getElementById("acc_pwd").value=="")
		{	
				alert("請填寫密碼");
				document.getElementById("acc_pwd").focus();
				return false;
		}
		
	}
	function export_form()
	{

	if(document.getElementById("sdate").value=="")
		{	
				alert("填寫開始時間");
				document.getElementById("sdate").focus();
				return false;
		}
	if(document.getElementById("edate").value=="")
		{	
				alert("填寫結束時間");
				document.getElementById("edate").focus();
				return false;
		}	

		
	}
	
	function checkacc() 
	{


	jQuery.post("actions/acc_check.php",
				{"acc":document.getElementById('acc').value},
				function (data){
					
					if(parseInt(data)==1)
					{
						alert("帳號重覆");
						document.getElementById('acc').focus();
						document.getElementById('acc').value="";
						}
					}
	
		);
		

	
	}
	
	function check_mod()
	{

	if(document.getElementById("acc").value=="")
		{	
				alert("請填寫帳號");
				document.getElementById("acc").focus();
				return false;
		}
		
	}
	
	function keyword_check()
	{

	if(document.getElementById("kw_name").value=="")
		{	
				alert("請填寫關鍵字");
				document.getElementById("kw_name").focus();
				return false;
		}
		
	}

	
	function check_form()
	{

	if(document.getElementById("title").value=="")
		{	
				alert("請填寫消息標題");
				document.getElementById("title").focus();
				return false;
		}
	if(document.getElementById("startdate").value=="")
		{	
				alert("請填寫公告日期");
				document.getElementById("startdate").focus();
				return false;
		}	
	
   /*if(document.getElementById("pic_old").value=="")
	   {
		
					alert("請上傳圖片");
					document.getElementById("pic").focus();
					return false;
			

			
		}*/
	}
	function Category()
	{
	if(document.getElementById("cate_name").value=="")
		{	
				alert("請填寫類別名稱");
				document.getElementById("cate_name").focus();
				return false;
		}
	if(document.getElementById("cate_sort").value==0)
		{	
				alert("請填寫類別排序");
				document.getElementById("cate_sort").focus();
				return false;
		}	
	
	
	
	}
	

		function del(url,id,acc,scate_id)
		{
			if(confirm("您確定要刪除:"+acc+"?"))
			{
				$.post( url ,{"id":id,"act":"del","scate_id":scate_id},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								alert("刪除成功");
								window.location.reload();
								}
							else if(data=='2')
							{
								alert("刪除失敗,子項目未刪除。");
								window.location.reload();
								}
							else
							{
								alert("刪除失敗");
								window.location.reload();
								}
						}
					);
				}
		}
		function keyword_del(url,id,keywordName)
		{
			if(confirm("您確定要刪除:"+keywordName+"?"))
			{
				$.post( url ,{"kw_id":id,"act":"del"},
					function(data){
				
							//alert(data);
							if(data=='1')
							{	
								alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("刪除失敗");
								window.location.reload();
							}
						}
					);
				}
		}
		function content_del(url,id,tempAddr_id,acc)
		{
			if(confirm("您確定要刪除:"+acc+"?"))
			{
				$.post( url ,{"id":id,"act":"del","tempAddr_id":tempAddr_id},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								alert("刪除成功");
								window.location.reload();
								}
							else if(data=='2')
							{
								alert("刪除失敗,子項目未刪除。");
								window.location.reload();
								}
							else
							{
								alert("刪除失敗");
								window.location.reload();
								}
						}
					);
				}
		}
		
		function news_del(url,id,newsTitle)
		{
			if(confirm("您確定要刪除:"+newsTitle+"?"))
			{
				$.post( url ,{"news_id":id,"act":"del"},
					function(data){
				
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("刪除失敗");
								window.location.reload();
							}
						}
					);
				}
		}
		
		
		
		
		
		function mod_enable(url,id,enable,acc)
		{
			
				$.post( url ,{"id":id,"enable":enable,"act":"mod_enable"},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								//alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("修改失敗");
								window.location.reload();
							}
						}
					);
				
		}
		function keywordmod_enable(url,id,enable)
		{
			
				$.post( url ,{"kw_id":id,"enable":enable,"act":"keywordmod_enable"},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								//alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("修改失敗");
								window.location.reload();
							}
						}
					);
				
		}
		function member_enable(url,id,enable)
		{
			
				$.post( url ,{"member_id":id,"enable":enable,"act":"member_enable"},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								//alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("修改失敗");
								window.location.reload();
							}
						}
					);
				
		}
		function message_enable(url,id,enable)
		{
			
				$.post( url ,{"message_id":id,"enable":enable,"act":"message_enable"},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								//alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("修改失敗");
								window.location.reload();
							}
						}
					);
				
		}
		function news_enable(url,id,enable)
		{
			
				$.post( url ,{"news_id":id,"enable":enable,"act":"news_enable"},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								//alert("刪除成功");
								window.location.reload();
							}
							else
							{
								alert("修改失敗");
								window.location.reload();
							}
						}
					);
				
		}
		function del_img(url,pic,id)
		{
		  if(confirm("您確定要刪除圖片?"))
		  {
			$.post(url, {"id":id,"pic":pic,"act":"del_img"},
				function (data){
				data=data.replace(/\D/g,"");
					if(data=='1')
						{	
								alert("圖片刪除成功");
								window.location.reload();
						}
					else
						{
									alert("刪除失敗");
									window.location.reload();
						}		
					}
				);
			}
		}
		function enable(url,id)
		{
			if(confirm("確認發送？"))
			{
				$.post( url ,{"id":id,"act":"enable"},
					function(data){
							data=data.replace(/\D/g,"");
							if(data=='1')
							{	
								alert("發送成功");
								window.location.reload();
								}
							
								
							else
							{
								alert("發送失敗");
								window.location.reload();
								}
						}
					);
				}
		}
		function load_stop(){
			$('#content').show('fast');
		}
		setTimeout('load_stop()',500);	
		
</script>
<script>
/**********************colorbox*************/
$(document).ready(function(){
				$(".group1").colorbox({rel:'group1'});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
				$(".ajax").colorbox();
				$(".youtube1").colorbox({iframe:true, innerWidth:900, innerHeight:500});
				$(".iframe").colorbox({iframe:true, innerWidth:1200, innerHeight:700});
				$(".iframe2").colorbox({iframe:true, innerWidth:330, innerHeight:330});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});
</script>
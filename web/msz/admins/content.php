<div id="content" class="span10" style="display:none">
			
	<div class="row-fluid">
		
			<?
			switch($_GET["perm"])
			{
				case "acc":
					switch($_GET['act'])
					{
						case "add":
							include("account_add.php");
						break;
						
						case "mod":
							include("account_mod.php");
						break;
						
						default:
							include("account_list.php");
						break;
					
					}
				break;
					
				case "news":
					switch($_GET['act'])
					{
						case "add":
							include("news_add.php");
						break;
						
						case "mod":
							include("news_mod.php");
						break;
						
						default:
							include("news_list.php");
						break;
					
					}
				break;	
				
				case "blog":
				
					switch($_GET['act'])
					{
						case "add":
							include("blog_add.php");
						break;
						
						case "mod":
							include("blog_mod.php");
						break;
						
						default:
							include("blog_list.php");
						break;
					
					}
				break;	
				
				case "media":
				
					switch($_GET['act'])
					{
						case "add":
							include("media_add.php");
						break;
						
						case "mod":
							include("media_mod.php");
						break;
						
						default:
							include("media_list.php");
						break;
					
					}
				break;	
				
				case "work":
				
					switch($_GET['act'])
					{
						case "add":
							include("work_add.php");
						break;
						
						case "mod":
							include("work_mod.php");
						break;
						
						default:
							include("work_list.php");
						break;
					
					}
				break;
				
				default:
					?>
				<div class="box span12">
					
					<div class="box-content">
						
						<h5><p align="center">歡迎來到 明水然 管理系統</p><h5>

						<div class="clearfix"></div>
					</div>
				</div>
					
					<?
					break;
				}
			?>	
	</div>					
</div>
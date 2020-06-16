<?
	if( get_class($login_control) != "news")
	{
		$login_control=new news();
	}
	$result=$login_control->news_page_list();
	$total=$login_control->news_page_total($data);
?>
<div class="box span12">
	<div class="box-header well">
		<h2>最新消息</h2>
			<div class="box-icon">
			<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
			</div>
	</div>
	<div class="box-content">
		<ul class="nav nav-tabs">
		<li <?=($_GET['act']="list")?"class='active'":""?>><a href="?perm=news&act=list">列表</a></li>
		<li><a href="?perm=news&act=add">新增</a></li>
		</ul>
			<table class="table table-striped">
				<thead>
					<tr>
						<th>標題</th>
						<th>圖片</th>
						<th></th>
						<th>狀態</th>
						<th>建立日期</th>                                          
					</tr>
				</thead> 		
				<tbody>
				<?
				for($i=0;$i<count($result);$i++){
				?>	
					<tr>
								<td><a href="http://msz.com.tw/news.php?id=<?=$result[$i]['news_id']?>" class='iframe' target="_blank" ><?=$result[$i]['news_title']?></a></td>
							<td class="center">
								<a href="../uploads/news_img/<?=$result[$i]['news_img']?>"rel="lightbox" ><img src="../uploads/news_img/<?=$result[$i]['news_img']?>" style="width:40px;height:40px;"></a>

							</td>
							<td class="center">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								
								<a href="?perm=news&act=mod&id=<?=$result[$i]['news_id']?>" title="編輯" ><img src="img/icons/pencil.png"/></a>
								
								&nbsp;&nbsp;
								
								<a href="#" onclick="del('actions/news_act.php','<?=$result[$i]['news_id']?>','<?=$result[$i]['news_title']?>')" title="刪除">
								<img src="img/icons/Close-2-icon.png"/></a>
							</td> 
							<td class="center">
								<?=($result[$i]['news_enable']==0)?"<span class='label label-success'>顯示":"<span class='label label-important'>關閉"?></span>
							</td>								
							<td class="center"><?=$result[$i]['news_cdate']?></td> 
						                               
					</tr>
				<?}?>		                     
				</tbody>
		    </table>  
	<div class="pagination pagination-centered">
				<ul>
					<?
					if($_GET['page']<1)
					{
					
						$_GET['page']=1;
					}
					#------------第一頁 上一頁---------#
					if($_GET['page']>1)
					{
						$prepage=$_GET['page']-1;
					
						echo " <li> <a href='?perm=news&act=list&page=1'>&laquo;</a></li>";
						
						echo " <li> <a href='?perm=news&act=list&page=$prepage'>&lsaquo;</a></li>";
					}
					else
					{
						echo " <li> <a href='#' style='color:#DDD' >&laquo;</a></li> ";
						echo " <li> <a href='#' style='color:#DDD' >&lsaquo;</a></li>";
					}
					 
					$range = 3; // 顯示的頁數範圍
					for ($x = (($_GET['page'] - $range) - 1); $x < (($_GET['page'] + $range) + 1); $x++) 
					{
	
						if (($x > 0) && ($x <= $total)) 
						{
						
							if ($x == $_GET['page']) 
							{
								// 不使用連結, 但用高亮度顯示
						
								echo "<li class='active'> <a href='?perm=news&act=list&page=$x'>$x</a><li>";
						
								// 如果這一頁不是當前頁數...
							}
							else 
							{
								// 顯示連結
								echo "<li> <a href='?perm=news&act=list&page=$x'>$x</a><li>";
							}	

						}
					}
					#------------最後一頁  下一頁---------#
					
					if($_GET['page']!=$total)
					{
						$nextpage=$_GET['page']+1;
							
						echo " <li> <a href='?perm=news&act=list&page=$nextpage'>&rsaquo;</a></li>";
						echo " <li> <a href='?perm=news&act=list&page=$total'>&raquo;</a></li>";
					}
					else
					{
						echo " <li> <a href='#' style='color:#DDD' >&rsaquo;</a></li> ";
						echo " <li> <a href='#' style='color:#DDD' >&raquo;</a></li>";
					
					}
					
					?>
	
				</ul>
			</div>     
					
				
	</div>
					
</div>

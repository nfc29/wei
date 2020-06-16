<?
	if( get_class($login_control) != "work")
	{
		$login_control=new work();
	}
	$result=$login_control->work_page_list();
	$total=$login_control->work_page_total($data);
?>
<div class="box span12">
	<div class="box-header well">
		<h2>徵才資訊</h2>
			<div class="box-icon">
			<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
			</div>
	</div>
	<div class="box-content">
		<ul class="nav nav-tabs">
		<li <?=($_GET['act']="list")?"class='active'":""?>><a href="?perm=work&act=list">列表</a></li>
		<li><a href="?perm=work&act=add">新增</a></li>
		</ul>
			<table class="table table-striped">
				<thead>
					<tr>
						<th>工作職缺</th>
						<th></th>
						<th></th>  
						<th></th>		
					</tr>
				</thead> 		
				<tbody>
				<?
				for($i=0;$i<count($result);$i++){
				?>	
					<tr>
							<td><a href="http://msz.com.tw/job.php?id=<?=$result[$i]['w_id']?>" class='iframe' target="_blank" ><?=$result[$i]['w_title']?></a></td>
				
							<td class="center">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								
								<a href="?perm=work&act=mod&id=<?=$result[$i]['w_id']?>" title="編輯" ><img src="img/icons/pencil.png"/></a>
								
								&nbsp;&nbsp;
								
								<a href="#" onclick="del('actions/work_act.php','<?=$result[$i]['w_id']?>','<?=$result[$i]['w_title']?>')" title="刪除">
								<img src="img/icons/Close-2-icon.png"/></a>
							</td>
							<td class="center">
								<?=($result[$i]['w_enable']==0)?"<span class='label label-success'>職缺開啟":"<span class='label label-important'>職缺關閉"?></span>
							</td>
							<td class="center"><?=$result[$i]['w_cdate']?></td> 
						                               
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
					
						echo " <li> <a href='?perm=work&act=list&page=1'>&laquo;</a></li>";
						
						echo " <li> <a href='?perm=work&act=list&page=$prepage'>&lsaquo;</a></li>";
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
						
								echo "<li class='active'> <a href='?perm=work&act=list&page=$x'>$x</a><li>";
						
								// 如果這一頁不是當前頁數...
							}
							else 
							{
								// 顯示連結
								echo "<li> <a href='?perm=work&act=list&page=$x'>$x</a><li>";
							}	

						}
					}
					#------------最後一頁  下一頁---------#
					
					if($_GET['page']!=$total)
					{
						$nextpage=$_GET['page']+1;
							
						echo " <li> <a href='?perm=work&act=list&page=$nextpage'>&rsaquo;</a></li>";
						echo " <li> <a href='?perm=work&act=list&page=$total'>&raquo;</a></li>";
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

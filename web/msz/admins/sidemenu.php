<div class="span2 main-menu-span">
	<div class="well nav-collapse sidebar-nav">
		<ul class="nav nav-tabs nav-stacked main-menu">
			<li class="nav-header hidden-tablet">管理項目</li>
			<li <?=($_GET['perm']=="acc")?"class='active'":""?> ><a class="ajax-link" href="main.php?perm=acc&act=list"><i class="icon-edit"></i><span class="hidden-tablet"> 帳號管理</span></a></li>
			<li <?=($_GET['perm']=="news")?"class='active'":""?> ><a class="ajax-link" href="main.php?perm=news&act=list"><i class="icon-edit"></i><span class="hidden-tablet"> 最新消息</span></a></li>
			<li <?=($_GET['perm']=="blog")?"class='active'":""?> ><a class="ajax-link" href="main.php?perm=blog&act=list"><i class="icon-edit"></i><span class="hidden-tablet"> 部落客推薦</span></a></li>
			<li <?=($_GET['perm']=="media")?"class='active'":""?> ><a class="ajax-link" href="main.php?perm=media&act=list"><i class="icon-edit"></i><span class="hidden-tablet"> 媒體報導</span></a></li>
			<li <?=($_GET['perm']=="work")?"class='active'":""?> ><a class="ajax-link" href="main.php?perm=work&act=list"><i class="icon-edit"></i><span class="hidden-tablet"> 徵才資訊</span></a></li>
						
		</ul>				
	</div>
</div>
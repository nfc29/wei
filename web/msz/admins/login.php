<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<title>明水然_後台管理系統</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">

	<!-- The css -->
	<?include("css.php")?>
	
	<!-- The js -->
	<?include("js.php")?>
	
	<link rel="shortcut icon" href="img/msz.ico">
		
</head>

<body style="background-color:#000">
	<div class="container-fluid">
		<div class="row-fluid">
		
			<div class="row-fluid">
				<div class="span12 center login-header">
					<img src="img/admin_logo.png">
					
				</div><!--/span-->
			</div><!--/row-->
			
			
			<div class="row-fluid">
					<div class="well span5 center login-box">
					
						<?if($_GET['error']!=""){?>
						<div class="alert alert-info">
							<?echo "<p style='color:red'>登入失敗</p>";?>
						</div>
						<?}?>
						
						<form class="form-horizontal" action="main.php" method="post">
							<fieldset>
								<div class="input-prepend" title="請輸入帳號" data-rel="tooltip">
									<span class="add-on"><i class="icon-user"></i></span><input autofocus class="input-large span10" name="account" id="account" type="text" value="" />
								</div>
								
								<div class="clearfix"></div>

								<div class="input-prepend" title="請輸入密碼" data-rel="tooltip">
									<span class="add-on"><i class="icon-lock"></i></span><input class="input-large span10" name="password" id="password" type="password" value="" />
								</div>
								
								<div class="clearfix"></div>

								<div class="clearfix"></div>

								<p class="center span5">
								<button type="submit" class="btn btn-primary">登入</button>
								</p>
							</fieldset>
						</form>
					
					</div>	
			</div>	
		</div>
		
	</div>	

</body>
</html>

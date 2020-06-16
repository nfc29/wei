<?php

	if($_POST['x']!=""&&$_POST['y']!=""&&$_POST['w']!=""&&$_POST['h']!="")
	{
		$targ_w = $targ_h = 300;
		$jpeg_quality = 90;
		$src = '../uploads/pic_temp/'.$_POST['jcop'];
		$s_src = '../uploads/pic_temp/s_'.$_POST['jcop'];
		$type = strtolower(substr(strrchr($src,"."),1));
		switch($type)
		{
		case 'bmp': $img_r = imagecreatefromwbmp($src); break;
		case 'gif': $img_r = imagecreatefromgif($src); break;
		case 'jpg': $img_r = imagecreatefromjpeg($src); break;
		case 'png': $img_r = imagecreatefrompng($src); break;
		default : return "Unsupported picture type!";
		}	
		
		$dst_r = ImageCreateTrueColor( $targ_w, $targ_h );

		imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],$targ_w,$targ_h,$_POST['w'],$_POST['h']);

		 if($type == "gif" or $type == "png")
		{
		imagecolortransparent($dst_r, imagecolorallocatealpha($dst_r, 0, 0, 0, 127));
		imagealphablending($dst_r, false);
		imagesavealpha($dst_r, true);
		}
		switch($type){
		case 'jpg': header('Content-type: image/jpeg'); break;
		case 'png': header('Content-type: image/png'); break;
		}

		switch($type){
		case 'jpg': @imagejpeg($dst_r,$s_src,$jpeg_quality); break;
		case 'png': @imagepng($dst_r,$s_src); break;
		}
		//unlink('../uploads/pic_temp/'.$_POST['jcop']);
		echo "1";
	}else{
	
	echo '0';
	
	}



?>

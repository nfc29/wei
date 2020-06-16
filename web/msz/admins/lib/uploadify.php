<?php
require_once('php_image_magician.php');
require_once('resize_img.php');
$pic_type =strtolower(get_type($_FILES['Filedata']["name"]));


if ($pic_type ==".jpg" || $pic_type ==".jpeg"|| $pic_type ==".gif" || $pic_type ==".png")
{

	if (!empty($_FILES)) {
		$tempFile = $_FILES['Filedata']['tmp_name'];
		$targetPath = $_SERVER['DOCUMENT_ROOT'] . $_REQUEST['folder'] . '/';

		if (!is_dir($targetPath)) {
			mkdir($targetPath);
			chmod($targetPath,0777);
		}

			$targetFile =  str_replace('//','/',$targetPath) . $_FILES['Filedata']['name'];	
			$fileTypes = array('jpg','jpeg','gif','png');
			$fileParts = pathinfo($_FILES['Filedata']['name']);
			
			$size=300;
			$array = getimagesize($_FILES['Filedata']["tmp_name"]);
			$w=$array[0];
			$h=$array[1];
		
			if(($w>=$size) && ($h >=$size))
			{
				move_uploaded_file($tempFile,$targetFile);
				echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
			}
			
			if(($w<$size) && ($h >=$size))
			{
				move_uploaded_file($tempFile,$targetFile);
				$new_h=round($h*($size/$w));
				$magicianObj = new imageLib($targetFile);
				$magicianObj -> resizeImage(300, $new_h);
				$magicianObj -> saveImage($targetFile, 100);
				echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
			}
			
			if(($w>=$size) && ($h <$size))
			{
				move_uploaded_file($tempFile,$targetFile);
				$new_w=round($w*($size/$h));
				$magicianObj = new imageLib($targetFile);
				$magicianObj -> resizeImage($new_w,300);
				$magicianObj -> saveImage($targetFile, 100);
				echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
			}
			// 寬 小於 300 高 小於 300
			if(($w<$size) && ($h <$size))
			{
			
				
				if($w>$h)
				{
				move_uploaded_file($tempFile,$targetFile);	
				$new_w=round($w*(300/$h));
				$magicianObj = new imageLib($targetFile);
				$magicianObj -> resizeImage($new_w,300);
				$magicianObj -> saveImage($targetFile, 100);
				echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
				}
				if($w<$h)
				{
				move_uploaded_file($tempFile,$targetFile);
				$new_h=round($h*(300/$w));
				$magicianObj = new imageLib($targetFile);
				$magicianObj -> resizeImage(300,$new_h);
				$magicianObj -> saveImage($targetFile, 100);
				echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
				}
				if($w==$h)
				{
				move_uploaded_file($tempFile,$targetFile);
				$magicianObj = new imageLib($targetFile);
				$magicianObj -> resizeImage(300,300);
				$magicianObj -> saveImage($targetFile, 100);
				echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
				}
				
			}
	
		
	}
}


	function get_type ($FileName) {
		$num=strrpos($FileName,"."); 
		return ".".substr($FileName,$num+1);
	}

?>
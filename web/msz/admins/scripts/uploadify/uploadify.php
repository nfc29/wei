<?php
/*
Uploadify v2.1.4
Release Date: November 8, 2010

Copyright (c) 2010 Ronnie Garcia, Travis Nickels

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
$pic_type =strtolower(get_type($_FILES['Filedata']["name"]));
if ($pic_type ==".jpg" || $pic_type ==".jpeg"|| $pic_type ==".gif" || $pic_type ==".png")
{

	if (!empty($_FILES)) {
		echo $tempFile = $_FILES['Filedata']['tmp_name'];
		$targetPath = $_SERVER['DOCUMENT_ROOT'] . $_REQUEST['folder'] . '/';

		if (!is_dir($targetPath)) {
			mkdir($targetPath);
			chmod($targetPath,0777);
		}

			$targetFile =  str_replace('//','/',$targetPath) . $_FILES['Filedata']['name'];	
			$fileTypes = array('jpg','jpeg','gif','png');
			$fileParts = pathinfo($_FILES['Filedata']['name']);
			
		 if (in_array($fileParts['extension'],$fileTypes)) 
		 {	
			move_uploaded_file($tempFile,$targetFile);
			echo str_replace($_SERVER['DOCUMENT_ROOT'],'',$targetFile);
		 } 
		 else 
		 {
		 	echo 'Invalid file type.';
		 }
	}
}
	function get_type ($FileName) {
		$num=strrpos($FileName,"."); 
		return ".".substr($FileName,$num+1);
	}

?>
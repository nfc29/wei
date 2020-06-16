<?
class upload {
	var $file;
	function __construct($data){
		$this->file=$data;
	}
	function get_type() {
		$ext=explode(".",$this->get_name());
		if($this->file['type']=="application/x-shockwave-flash")
			return "swf";
		if($this->file['type']=="application/x-flash-video")
			return "flv";
		if($this->file['type']=="image/jpeg"||$this->file['type']=="image/pjpeg")
			return "jpg";
		if($this->file['type']=="image/gif")
			return "gif";
		if($this->file['type']=="image/png")
			return "png";
		return $ext[sizeof($ext)-1];
	}
	function get_filesize() {
		return $this->file['size'];
	}
	function file_copy($path) {
		$ext=explode(".", $this->file['name']);
		$this->file['name']=time().".".$this->get_type();
		if(copy($this->file['tmp_name'],strtolower(UPLOAD_DIR.$path.$this->file['name']))){
			$this->file['uri']=strtolower(UPLOAD_DIR.$path.$this->file['name']);
			return $this->file['uri'];
		}
		else {
			return "none";
		}
	}
	function get_uri() {
		return $this->file['uri'];
	}
	function get_name() {
		return strtolower($this->file['name']);
	}
	function get_width() {
		list($width,$height)=getimagesize($this->file['tmp_name']);
		return $width;
	}
	function get_height() {
		list($width,$height)=getimagesize($this->file['tmp_name']);
		return $height;
	}


	
	function resize_pic_by_gdlib($new_width, $new_height,$dest_file) {
	 $image = getimagesize($this->file['tmp_name']);
	if( $image[0] <= 0 || $image[1] <= 0 ) return false;
 
    // Calculate measurements
    if( $image[0] > $image[1] ) {
        // For landscape images
        $x_offset = ($image[0] - $image[1]) / 2;
        $y_offset = 0;
        $square_size = $image[0] - ($x_offset * 2);
    } else {
        // For portrait and square images
        $x_offset = 0;
        $y_offset = ($image[1] - $image[0]) / 2;
        $square_size = $image[1] - ($y_offset * 2);
    }
		
		
			
			// GD lib 2.0xx版使用
			
			$dst_img= imagecreatetruecolor($new_width, $new_height);	
			//$dst_img=imagecreate($new_width, $new_height);
			 //$img =imagecreatetruecolor($new_width, $new_height);
			//$white = imagecolorallocate($dst_img, 255, 255, 255);	
			//$grey = imagecolorallocate($img, 128, 128, 128);
			//$black = imagecolorallocate($img, 0, 0, 0);
			//$bg = imagecolorallocate($img,255,0,255);
			//$dst_img=imagefilledrectangle($img,0,0,$square_size,$square_size,$bg);
			//imagefill($dst_img, 0, 0, $white);
			//$dst_img=imagecolortransparent($img,$white);
			
			
			//$dst_img = ImageCreate($new_width,  $new_height);
			//$white = imagecolorallocate($dst_img, 240, 240, 240);
			//imagefill($dst_img, 0, 0, $white);
			
			
			// 開啟來源檔
			switch($this->get_type()) {
				case 'jpg' :
				case 'jpeg' :
						$src_img = imagecreatefromjpeg($this->file['tmp_name']);
						break;
				case 'gif' :
						$src_img = imagecreatefromgif($this->file['tmp_name']);				
						break;
				case 'png' :
						$src_img = imagecreatefrompng($this->file['tmp_name']);				
						break;
				default : break;
			}
			
			// 將原圖複製、調整尺寸，再貼在新圖上
			//2.0xx版使用
			//imageAlphaBlending($dst_img, false);
			//imageSaveAlpha($dst_img, true);
			imagecopyresampled($dst_img,$src_img,0, 0, $x_offset, $y_offset, $new_width, $new_height, $square_size, $square_size);
			//imagecopyresampled($dst_img, $src_img, 0, 0, 0, 0, $new_width, $new_height, imagesx($src_img), imagesy($src_img));		
			// 先釋放來源圖檔，如此等下才能直接寫回
			imagedestroy($src_img);

			switch($this->get_type()) {
				case 'jpg' :
				case 'jpeg' :
					imagejpeg($dst_img, UPLOAD_DIR.$dest_file);
					break;
				case 'gif' :
					imagegif($dst_img, UPLOAD_DIR.$dest_file);
					break;
				case 'png' :
					imagepng($dst_img, UPLOAD_DIR.$dest_file);
					   
					break;
				default: break;
			}
			
			// 釋放儲存空間
			imagedestroy($dst_img);
			if($dest_file!=$this->get_uri())
			{
				return UPLOAD_DIR.$dest_file;
				}
			else
			{
				return $this->get_uri();
				}
		
	} // end of function
}
?>
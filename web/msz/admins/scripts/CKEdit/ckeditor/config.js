/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	 //config.language = 'zh-cn';
	//config.uiColor = '#AADC6E';
	config.width=800;
	config.height=700;
	//工具列設定
	config.toolbar = 'TadToolbar';
	//config.toolbar = 'blogToolbar';
   /* config.toolbar_TadToolbar =
    [
       ['Source','-','Templates','-','Cut','Copy','Paste'],
       ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	    //['Bold','Link','Unlink'],
		'/'
        ['Link','Unlink','Anchor'],
        ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
        '/',
       ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['Format','FontSize','-','TextColor','BGColor']
    ];*/
	config.toolbar_TadToolbar =
    [
      // ['Source','-','Templates','-','Cut','Copy','Paste'],
       //['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
	    //['Bold','Link','Unlink'],
		'/'
        ['Link','Unlink','Anchor'],
        ['Image'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        
    ];
	// config.toolbar_blogToolbar =[[]];
	//開啟圖片上傳功能
	config.filebrowserBrowseUrl = 'scripts/CKEdit/ckfinder/ckfinder.html';
	config.filebrowserImageBrowseUrl = 'scripts/CKEdit/ckfinder/ckfinder.html?Type=Images';
	config.filebrowserFlashBrowseUrl = 'scripts/CKEdit/ckfinder/ckfinder.html?Type=Flash';
	config.filebrowserUploadUrl = 'scripts/CKEdit/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
	config.filebrowserImageUploadUrl = 'scripts/CKEdit/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
	config.filebrowserFlashUploadUrl = 'scripts/CKEdit/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';
	config.forcePasteAsPlainText =true;
	config.FillEmptyBlocks =false;
	config.entities = false;
	config.HtmlEncodeOutput =false;
	config.stylesSet = 'my_styles';
	
};
CKEDITOR.stylesSet.add( 'my_styles',
[
    // Inline styles
    { name : '', element : 'a', attributes : { 'class' : 'pic' } },
]);

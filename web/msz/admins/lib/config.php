<?php
define("UPLOAD_DIR","uploads/");
if(!class_exists('dbConnect')){
	if(file_exists('../inc/db_conn.php'))
	{
		require_once('../inc/db_conn.php');
		}
	else if(file_exists('inc/db_conn.php'))
	{
		require_once('inc/db_conn.php');
		}
}

if(!class_exists('account')){
	if(file_exists('../lib/account_class.php'))
	{
		require_once('../lib/account_class.php');
		}
	else if(file_exists('lib/account_class.php'))
	{
		require_once('lib/account_class.php');
		}
}


if(!class_exists('upload')){
	if(file_exists('../lib/upload_class.php'))
	{
		require_once('../lib/upload_class.php');
		}
	else if(file_exists('lib/upload_class.php'))
	{
		require_once('lib/upload_class.php');
		}
}


if(!class_exists('news')){
	if(file_exists('../lib/news_class.php'))
	{
		require_once('../lib/news_class.php');
		}
	else if(file_exists('lib/news_class.php'))
	{
		require_once('lib/news_class.php');
		}
		
	
}

if(!class_exists('blog')){
	if(file_exists('../lib/blog_class.php'))
	{
		require_once('../lib/blog_class.php');
		}
	else if(file_exists('lib/blog_class.php'))
	{
		require_once('lib/blog_class.php');
		}
}
if(!class_exists('media')){
	if(file_exists('../lib/media_class.php'))
	{
		require_once('../lib/media_class.php');
		}
	else if(file_exists('lib/media_class.php'))
	{
		require_once('lib/media_class.php');
		}
}
if(!class_exists('work')){
	if(file_exists('../lib/work_class.php'))
	{
		require_once('../lib/work_class.php');
		}
	else if(file_exists('lib/work_class.php'))
	{
		require_once('lib/work_class.php');
		}
}
/*if(!class_exists('message')){
	if(file_exists('../lib/message_web_class.php'))
	{
		require_once('../lib/message_web_class.php');
		}
	else if(file_exists('lib/message_web_class.php'))
	{
		require_once('lib/message_web_class.php');
		}
}
if(!class_exists('keyword')){
	if(file_exists('../lib/keyword_web_class.php'))
	{
		require_once('../lib/keyword_web_class.php');
		}
	else if(file_exists('lib/keyword_web_class.php'))
	{
		require_once('lib/keyword_web_class.php');
		}
}
if(!class_exists('news')){
	if(file_exists('../lib/news_web_class.php'))
	{
		require_once('../lib/news_web_class.php');
		}
	else if(file_exists('lib/news_web_class.php'))
	{
		require_once('lib/news_web_class.php');
		}
}
if(!class_exists('favorite')){
	if(file_exists('../lib/favorite_web_class.php'))
	{
		require_once('../lib/favorite_web_class.php');
		}
	else if(file_exists('lib/favorite_web_class.php'))
	{
		require_once('lib/favorite_web_class.php');
		}
}*/


/*if(!class_exists('member')){
	if(file_exists('../lib/message_class.php'))
	{
		require_once('../lib/message_class.php');
		}
	else if(file_exists('lib/message_class.php'))
	{
		require_once('lib/message_class.php');
		}
}*/
/*if(!class_exists('friendlink')){
	if(file_exists('../lib/friendlink_class.php'))
	{
		require_once('../lib/friendlink_class.php');
		}
	else if(file_exists('lib/friendlink_class.php'))
	{
		require_once('lib/friendlink_class.php');
		}
}
if(!class_exists('article')){
	if(file_exists('../lib/article_class.php'))
	{
		require_once('../lib/article_class.php');
		}
	else if(file_exists('lib/article_class.php'))
	{
		require_once('lib/article_class.php');
		}
}
if(!class_exists('course')){
	if(file_exists('../lib/course_class.php'))
	{
		require_once('../lib/course_class.php');
		}
	else if(file_exists('lib/course_class.php'))
	{
		require_once('lib/course_class.php');
		}
}
if(!class_exists('registration')){
	if(file_exists('../lib/registration_class.php'))
	{
		require_once('../lib/registration_class.php');
		}
	else if(file_exists('lib/registration_class.php'))
	{
		require_once('lib/registration_class.php');
		}
}
if(!class_exists('contact')){
	if(file_exists('../lib/contact_class.php'))
	{
		require_once('../lib/contact_class.php');
		}
	else if(file_exists('lib/contact_class.php'))
	{
		require_once('lib/contact_class.php');
		}
}
if(!class_exists('member')){
	if(file_exists('../lib/member_class.php'))
	{
		require_once('../lib/member_class.php');
		}
	else if(file_exists('lib/member_class.php'))
	{
		require_once('lib/member_class.php');
		}
}
if(!class_exists('courseexp')){
	if(file_exists('../lib/courseexp_class.php'))
	{
		require_once('../lib/courseexp_class.php');
		}
	else if(file_exists('lib/courseexp_class.php'))
	{
		require_once('lib/courseexp_class.php');
		}
}
if(!class_exists('edm')){
	if(file_exists('../lib/edm_class.php'))
	{
		require_once('../lib/edm_class.php');
		}
	else if(file_exists('lib/edm_class.php'))
	{
		require_once('lib/edm_class.php');
		}
}
if(!class_exists('knowledge')){
	if(file_exists('../lib/knowledge_class.php'))
	{
		require_once('../lib/knowledge_class.php');
		}
	else if(file_exists('lib/knowledge_class.php'))
	{
		require_once('lib/knowledge_class.php');
		}
}*/


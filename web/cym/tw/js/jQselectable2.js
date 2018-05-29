// JavaScript Document

	jQuery(function($){
		$(".selectable").jQselectable({
			set: "fadeIn",
			setDuration: "fast",
			opacity: 1
		});
		
		$(".simpleBox").jQselectable({
			style: "simple",
			set: "slideup",
			out: "fadeOut",
			setDuration: "fast",
			outDuration: "fast",
			height: 101,
			opacity: 1
		});
	});
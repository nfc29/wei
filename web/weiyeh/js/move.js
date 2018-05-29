// JavaScript Document
                        // custom easing called "custom"
$.easing.custom = function (x, t, b, c, d) {
	 var s = 1.70158; 
	if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
} 
// use the custom easing
$("div.scrollable").scrollable({easing: '', speed: 500, circular: true});
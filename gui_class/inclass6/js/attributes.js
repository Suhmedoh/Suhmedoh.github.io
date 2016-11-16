$(function() {
	var bgc = $("li:first-child").attr('background-color');
	console.log(bgc);
	$("ul").append(bgc);
	$("li").css({"background-color" : "#c5a996", "border" : "white solid 1px", "color" : "black", "text-shadow" : "none", "font-family" : "Georgia"});
});
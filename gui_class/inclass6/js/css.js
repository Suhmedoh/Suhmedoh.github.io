$(function() {
	var bgc = $("li:first-child").css('background-color');
	$("ul").append("<p>Color was: " + bgc + "</p>");
	$("li").css({"background-color" : "#c5a996", "border" : "white solid 1px", "color" : "black", "text-shadow" : "none", "font-family" : "Georgia"});
});
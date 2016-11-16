$(function() {
	$("li:contains('pine')").text("almonds");
	$("li[class*='hot']").html(function(){ return "<em>" + $(this).text() + "</em>";});
	$("li#one").remove();
});
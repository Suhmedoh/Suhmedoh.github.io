$(function() {
	$("ul").before("<p> Just Updated.</p>");
	$("li[class*='hot']").prepend("+");
	$("li:nth-child(3)").removeClass();
	$(function() {
		var x = "<li> Gluten Free Soy Sauce </li>";
		$("ul:last-child").after(x);
	});
	$("li[class*='hot']").addClass("favorite");
});
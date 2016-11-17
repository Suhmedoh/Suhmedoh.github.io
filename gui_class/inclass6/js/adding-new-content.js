$(function() {
	$("ul").before("<p> Just Updated.</p>");
	$("li[class*='hot']").prepend("+");
	$(function() {
		var x = "<li> Gluten Free Soy Sauce </li>";
		$("ul:last-child").after(x);
	});
});
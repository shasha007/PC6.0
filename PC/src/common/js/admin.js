$(function(){
	var index;
	$(".menu>ul p").click(function(){
		$(this).siblings("ul").slideToggle();
		$(this).parent().addClass("selected");
		$(this).addClass("sub");
		$(this).parents("ul").find(".menuItem").eq(index).find("ul").slideUp();
		$(this).parents("ul").find(".menuItem").eq(index).removeClass("selected");
		$(this).parents("ul").find(".menuItem").eq(index).find("p").removeClass("sub");
		index=$(this).parent().index();
	});
});

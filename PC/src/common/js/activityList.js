//	全省活动显示/隐藏获取控价
	$("#L_province").hover(function(){	
		$(".L_qs_down").slideDown("fast");
	});
	$("#L_province").mousemove(function(){
		$(".L_qs_down").css("display","block");
	});
	$("#L_province").mouseout(function(){
		$(".L_qs_down").css("display","none");
	});
	
//	全校活动显示/隐藏获取控价
	$("#L_school").hover(function(){	
		$(".L_qx_down").slideDown("fast");
	});
	$("#L_school").mousemove(function(){
		$(".L_qx_down").css("display","block");
	});
	$("#L_school").mouseout(function(){
		$(".L_qx_down").css("display","none");
	});
$(function(){
//背景轮播
	$(".initBody").css("height",document.body.scrollHeight+"px");
	var bgPath=[
		["common/images/u2.jpg","#007AFF"],
		["common/images/u6.jpg","green"]
	];
	var bgIndex=0;
	
	function bgChange(){
		bgIndex++;
		if(bgIndex==bgPath.length){
			bgIndex=0;
		}
		$(".wk_container_login").css("background-color",bgPath[bgIndex][1]);
		$(".wk_container_login .adBanner").css("background-image","url("+bgPath[bgIndex][0]+")");
	}
	setInterval(bgChange,5000);
//	选择登录方式
	$(".wk_login_area p:first-child span").click(function(){
		$(this).siblings().removeClass("wk_selected");
		$(this).addClass("wk_selected");
		if($(this).index()==0){
			$(".wk_loginByPhone").hide();
			$(".wk_loginByNumber").show();
		}
		else{
			$(".wk_loginByNumber").hide();
			$(".wk_loginByPhone").show();
		}
	});
//	显示/隐藏获取学校控价
	$(".wk_login_school").hover(function(){	
		$(".wk_loginSchool").slideDown("fast");
	});
	$(".wk_loginSchool").mousemove(function(){
		$(".wk_loginSchool").css("display","block");
	});
	$(".wk_loginSchool").mouseout(function(){
		$(".wk_loginSchool").css("display","none");
	});
//	根据相应首字母获取学校
	$(".wk_login_schoolMu span").click(function() {
		$.ajax({
			//contentType:"application/json;charset=UTF-8",
			type:"post",
			url:"http://192.168.1.190:8080/pu-portal/pc/user/getSchoolsOrderByFirstSpellASC",
			//async:true,
			data:{"token":"1","param":{}},
			success:function(data){
				console.log(data);
				//var schoolArray=data.school;
				//for(var i=0;i<schoolArray.length;i++){
				//	var span=document.createElement("span");
				//	span.innerText=schoolArray[i];
				//	$(".wk_loginSchool div").append(span);
				//}
			}
		});
	});
//	$(".wk_login_schoolMu span:nth-child(5)").hover(function(){
//		$.ajax({
//			//contentType:"application/json;charset=UTF-8",
//			type:"post",
//			url:"http://192.168.1.190:8080/pu-portal/pc/user/getSchoolsOrderByFirstSpellASC",
//			//async:true,
//			data:{"token":"1","param":{}},
//			success:function(data){
//				console.log(data);
//				//var schoolArray=data.school;
//				//for(var i=0;i<schoolArray.length;i++){
//				//	var span=document.createElement("span");
//				//	span.innerText=schoolArray[i];
//				//	$(".wk_loginSchool div").append(span);
//				//}
//			}
//		});
		//$.ajax({
		//	type:"get",
		//	url:"../json/school.json",
		//	async:true,
		//	data:"A",
		//	success:function(data){
		//		var schoolArray=data.school;
		//		for(var i=0;i<schoolArray.length;i++){
		//			var span=document.createElement("span");
		//			span.innerText=schoolArray[i];
		//			$(".wk_loginSchool div").append(span);
		//		}
		//	}
		//});
	//});
//	上传学生证
	$(".wk_autContiner ul li input").change(function(){
		console.log($(this).parent())
	});
	$(".wk_autContiner ul li").click(function(){
		console.log($(this).parent())
	});
});

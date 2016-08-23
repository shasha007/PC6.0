///上传注册头像/
function uploadIcon(){
	if(typeof FileReader==='undefined'){
		alert("抱歉，你的浏览器不支持预览图像");
	}
	else{
		var file=document.getElementById("file").files[0];
		var fn=document.getElementById("filename");
		var icon=document.getElementById("icon");
		if(!/image\/\w+/.test(file.type)){
	    	alert("文件必须为图片！");
	    }
		else{
			fn.innerText=file.name;
			var fr=new FileReader();
			fr.readAsDataURL(file);
			fr.onload=function(){
				icon.src=this.result;
			}
		}
	}
}

//显示提示信息


//	显示/隐藏获取学校控价
$(".wk_regist_choose").click(function(){
	$(".wk_registSchool").slideDown("fast");
	$(".wk_registSchool").css("display","block");
});
//$(".wk_regist_choose").mousemove(function(){
//
//});
//$(".wk_regist_choose").mouseout(function(){
//	$(".wk_registSchool").css("display","none");
//});

//	根据相应首字母获取学校
$(".wk_regist_schoolMu span").click(function() {
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
	$(".wk_registSchool").css("display","none");
});
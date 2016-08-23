//	显示/隐藏获取学校控价
$(".H_School_Swap").hover(function(){
    $(".wk_loginSchool").slideDown("fast");
});
$(".H_School_Swap").mousemove(function(){
    $(".wk_loginSchool").css("display","block");
});
$(".wk_loginSchool > i").click(function(){
    $(".wk_loginSchool").css({"display":"none"});
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
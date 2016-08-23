
//加载公共头尾
//$("#pFooter").load("PublicFooter.html");
$("#GHead").load("HuoHeader.html");
//保持左右高度一致
$(function(){
	$(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
	
			//修改备注
	var PreRemark = "";//上次备注
	$(".L_Remarks>div").on('click', function () {
	    var UserId  = $(this).parent('.L_Remarks').data("userid").toString().trim();
	    var Remark = PreRemark = $(this).parent('.L_Remarks').text().toString().trim();
	    $(this).hide();
	    $(this).next(".L_remark_hover").hide();
	    $(this).parent('.L_Remarks').append("<input type=\"text\" class=\"L_Remarks_Input\" value=\""+Remark+"\" onblur=\"GetRemark(this,'"+UserId+"');\">");
//	    $(this).parent('.L_Remarks').append("<input type='text' class='L_Remarks_Input' value='"+Remark+"' onblur='GetRemark(this,'"+UserId+"');\">");
	    $(this).next(".L_Remarks_Input").focus();
	});

	
	//input 修改备注 失去获得焦点事件
	function GetRemark(dom,userid){
	        console.log(userid); //用户id
	        var _dom = $(dom);
	        var Num = _dom.val();
	        if(Num==PreRemark){
	            //没变
	            console.log("没变");
	            _dom.parent('.L_Remarks').find("div").html(Num).show();
	            _dom.parent('.L_Remarks').find("input").remove();
	        }else{

	            _dom.parent('.L_Remarks').find("div").html(Num).show();
	            _dom.parent('.L_Remarks').find("input").remove();
	        }
	
	}
});




//左侧菜单点击事件
$(".L_AManage_Nav li").click(function () {
    var type = $(this).data("managetype");
    console.log(type);
    switch (type){
        case 1:
            Swap($(this),1);
            break;
        case 2:
            Swap($(this),2);
            break;
        case 3:
            Swap($(this),3);
            break;
        case 4:
            Swap($(this),4);
            break;
        case 5:
            Swap($(this),5);
            break;
        case 6:
            Swap($(this),6);
            break;
        case 7:
            Swap($(this),7);
            break;
        case 8:
            Swap($(this),8);
            break;
        case 9:
            Swap($(this),9);
            break;
    }
});

//切换菜单
var Swap = function(dom,type) {
    $(".L_on").removeClass("L_on");
    dom.addClass("L_on");
    switch (type) {
        case 1:
            $(".L_AManage_Swap").load("ActivityInfo.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 2:
            $(".L_AManage_Swap").load("activityMember.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 3:
            $(".L_AManage_Swap").load("memberVerify.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 4:
            $(".L_AManage_Swap").load("activityNotice.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 5:
            $(".L_AManage_Swap").load("voteMember.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 6:
            $(".L_AManage_Swap").load("voterVerify.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 7:
            $(".L_AManage_Swap").load("sunSpot.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 8:
            $(".L_AManage_Swap").load("sunVedio.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
        case 9:
            $(".L_AManage_Swap").load("endEvent.html");
            $(".L_AManage_Nav").height($(".L_AManage_Set").height() + "px");
            break;
    }
}


	//字数限制
function words_deal() 
{ 
	var curLength=$("#L_TextArea1").val().length; 
	if(curLength>250) 
	{ 
		var num=$("#L_TextArea1").val().substr(0,250); 
		$("#L_TextArea1").val(num); 
	} 
	else 
	{ 
		$("#textCount").text(250-$("#L_TextArea1").val().length); 
	} 
} 

	//上传图片
function UploadImg(){
    if(typeof FileReader==='undefined'){
        alert("抱歉，你的浏览器不支持预览图像");
    }
    else{
        var file=document.getElementById("file").files[0];
        var icon=document.getElementById("icon");
        if(!/image\/\w+/.test(file.type)){
            alert("文件必须为图片！");
        }
        else{
            var fr=new FileReader();
            fr.readAsDataURL(file);
            fr.onload=function(){
                icon.src=this.result;
            }
        }
    }
}
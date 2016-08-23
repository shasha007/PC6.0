/**
 * Created by huqiwen on 16/7/18.部落管理js
 */

var PriorityNum = 0;//优先级
//修改优先级
$("body").on('click',".H_Priority >span" ,function () {
    var Num = PriorityNum = $(this).parent('.H_Priority').data("priority");
    var ActiveId = $(this).parent('.H_Priority').data("activeid");
    $(this).hide();
    $(this).parent('.H_Priority').append("<input type=\"text\" class=\"Priority_Input\" value=\""+Num+"\" onblur=\"GetPriority(this,'"+ActiveId+"');\">");
    $(this).next(".Priority_Input").focus();
});

//input 修改优先级 失去获得焦点事件
function GetPriority(dom,id){
    console.log(id);//活动id
        var _dom = $(dom);
        var Num = _dom.val();
        if(Num==""){
            alert("请输入优先级!");
        }else if(Num==PriorityNum){
            //没变
            console.log("没变");
            _dom.parent('.H_Priority').find("span").html(Num).show();
            _dom.parent('.H_Priority').find("input").remove();
            _dom.parent('.H_Priority').data("priority",Num+"");
        }else{
            //todo 修改优先级
            _dom.parent('.H_Priority').find("span").html(Num).show();
            _dom.parent('.H_Priority').find("input").remove();
            _dom.parent('.H_Priority').data("priority",Num+"");
        }

}

//修改备注
var PreRemark = "";//上次备注
$("body").on('click',".H_Remarks >span", function () {
    var UserId  = $(this).parent('.H_Remarks').data("userid").toString().trim();
    var Remark = PreRemark = $(this).parent('.H_Remarks').text().toString().trim();
    $(this).hide();
    $(this).parent('.H_Remarks').append("<input type=\"text\" class=\"Remarks_Input\" value=\""+Remark+"\" onblur=\"GetRemark(this,'"+UserId+"');\">");
    $(this).next(".Remarks_Input").focus();
});

//input 修改备注 失去获得焦点事件
function GetRemark(dom,userid){
        console.log(userid); //用户id
        var _dom = $(dom);
        var Num = _dom.val();
        if(Num==PreRemark){
            //没变
            console.log("没变");
            _dom.parent('.H_Remarks').find("span").html(Num).show();
            _dom.parent('.H_Remarks').find("input").remove();
        }else{
            //todo 修改优先级
            _dom.parent('.H_Remarks').find("span").html(Num).show();
            _dom.parent('.H_Remarks').find("input").remove();
        }

}
//分享js
$("#socialShare").socialShare({
    content: '',
    url:'',
    titile:''
});



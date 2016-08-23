/**
 * Created by huqiwen on 16/7/29.
 */
//部落活动下拉选项
$('.H_GroupAct_Down').on('mouseenter mouseout',function(event){
    if(event.type=="mouseenter"){
        console.log( $(this).parent().find(".H_GroupAct_Down_Div").show());
        $(this).parent().find(".H_GroupAct_Down_Div").show();
    }else {
    }
});

$(".H_GroupAct_Down_Cover").hover(function (event) {
    if(event.type=="mouseenter"){
    }else{
        $(this).find(".H_GroupAct_Down_Div").hide();
    }
});
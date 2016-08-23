/**
 * Created by huqiwen on 16/8/1.
 */

$(".H_GHum_Nav >p").on('click', function () {
    var _type = $(this).index();
    if(_type==1){
        //主席
        $(".H_HumOn").removeClass("H_HumOn");
        $(this).addClass("H_HumOn");
        $("#H_Number_List").hide();
        $("#H_Timeline").show();
        $(".H_Foot_pagination").hide();
    }else if(_type==0){
        //成员列表
        $(".H_HumOn").removeClass("H_HumOn");
        $(this).addClass("H_HumOn");
        $("#H_Number_List").show();
        $("#H_Timeline").hide();
        $(".H_Foot_pagination").show();
    }
});

/**
 * Created by huqiwen on 16/7/29. 下载/上传表格 js
 */

//下载申请表格 切换
$(".H_DForm_Tit >span").on("click", function () {
    var _type = $(this).index();
    if(_type==1){
        //提交表单
        $(".H_On").removeClass("H_On");
        $(this).addClass("H_On");
        $(".H_DForm").hide();
        $(".H_SubForm").show();
    }else if(_type==0){
        //我的申请
        $(".H_On").removeClass("H_On");
        $(this).addClass("H_On");
        $(".H_DForm").show();
        $(".H_SubForm").hide();
    }
});
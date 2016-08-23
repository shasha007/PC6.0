/**
 * Created by huqiwen on 16/7/15. 管理后台 公共js
 */


//加载公共头尾
$("#pFooter").load("PublicFooter.html");
$("#GHead").load("HuoHeader.html");

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


//保持左右高度一致
$(".H_GManage_Nav").height($(".H_GManage_Set").height()+"px");

//左侧菜单点击事件
$(".H_GManage_Nav li").click(function () {
    var type = $(this).data("managetype");
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


    }
});

//切换菜单
var Swap = function(dom,type) {
    $(".H_on").removeClass("H_on");
    dom.addClass("H_on");
    switch (type) {
        case 1:
            $(".H_GManage_Swap").load("GroupSet.html", function () {
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
        case 2:
            $(".H_GManage_Swap").load("NumberManage.html",function(){
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
        case 3:
            $(".H_GManage_Swap").load("AlbumManage.html", function () {
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
        case 4:
            $(".H_GManage_Swap").load("DownloadFormManage.html", function () {
                console.log("DownloadFormManage");
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
        case 5:
            $(".H_GManage_Swap").load("UploadFormManage.html", function () {
                console.log("UploadFormManage");
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
        case 6:
            $(".H_GManage_Swap").load("ActiveManage.html", function () {
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
        case 7:
            $(".H_GManage_Swap").load("NotifyManage.html", function () {
                $(".H_GManage_Nav").height($(".H_GManage_Set").height() + "px");
            });
            break;
    }
}


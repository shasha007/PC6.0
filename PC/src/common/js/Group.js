/**
 * Created by huqiwen on 16/7/12. 部落js
 */
$(".h_GI_In").click(function () {
    var GroupId = $(this).data("groupid");
    $("#H_GroIn_Alert").modal("show");
});


//点击好友
$(".H_GInfor_Add li").on('click', function () {
    var AddId = $(".H_GInfor_AddOn").data("friendid");
    var position = $(this).data("position");
    $(".H_GInfor_AddOn").removeClass("H_GInfor_AddOn");
    $(this).addClass("H_GInfor_AddOn");
    if ((position == "1")) {
        DoAddFriend();
    } else {
        DoDelFriend();
    }
});

//添加好友server
var DoAddFriend = function () {
    var AddFlag = $(".H_GInfor_AddOn");
    AddFlag.removeClass("H_GInfor_AddOn");
    AddFlag.data("position", 0);//切换位置 0右 1左
    $(AddFlag).appendTo(".H_GInfor_AddR ul");
}

//删除好友server
var DoDelFriend = function () {
    var DelFlag = $(".H_GInfor_AddOn");
    DelFlag.removeClass("H_GInfor_AddOn");
    DelFlag.data("position", 1);//切换位置 0右 1左
    $(DelFlag).appendTo(".H_GInfor_AddL ul");
}
//确认按钮
$(".H_AddFriend_Close").click(function () {
    var FriendId = new Array();//数组 添加好友的id
    for (var i = 1; i < $(".H_GInfor_AddR li").length + 1; i++) {
        FriendId[i] = $(".H_GInfor_AddR li:nth-child(" + i + ")").data("friendid");
    }
    $("#H_GInfor_AddFriend").modal("hide");
});

//部落详情点击切换
$(".H_Ginfo_Nav div").click(function () {
    var type = $(this).data("grouptype");
    switch (type){
        case 1: //公告
            Swap($(this),1);
            break;
        case 2: //活动
            Swap($(this),2);
            break;
        case 3: //相册
            Swap($(this),3);
            break;
        case 4: //成员
            Swap($(this),4);
            break;
        case 5: //部落
            Swap($(this),5);
            break;
    }
});

//切换菜单
var Swap = function(dom,type) {
    $(".H_on").removeClass("H_on");
    dom.addClass("H_on");
    switch (type) {
        case 1:
            $(".h_Group_Swap").load("GroupNotify.html");
            break;
        case 2:
            $(".h_Group_Swap").load("GroupAct.html");
            break;
        case 3:
            $(".h_Group_Swap").load("GroupAlbum.html");
            break;
        case 4:
            $(".h_Group_Swap").load("GroupNumber.html");
            break;
        case 5:
            $(".h_Group_Swap").load("GroupSth.html");
            break;
    }
}

//进入相册详情
$("body").on("click",".thumbnail",function () {
    var _falg = $(this).data("albumid");
    $(".h_Group_Swap").load("Album.html?id="+_falg);
});

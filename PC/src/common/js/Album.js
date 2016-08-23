/**
 * Created by huqiwen on 16/7/28. 相册
 */
//封面设置成功 html
var SetOk = " <p class=\"setOK\"> <img src=\"common/images/ablum_ok.png\">设置封面成功 </p>";
//确认删除 html
var Del= " <p class=\"Del_p\">确定要将照片删除吗?</p> <footer class=\"Del_foot\"> <a class=\"cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">取消</a> <a class=\"Del_btn\">确定</a> </footer>";

var Crate = " <p class=\"tit\">创建相册 </p> <p class=\"input\"> <input type=\"text\"> </p> <p class=\"text\"> <textarea placeholder=\"输入描述\"> </textarea> </p> <footer> <a class=\"cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">取消</a> <a class=\"ok\">确定</a> </footer>";

// 相册详情 编辑
$(document).on("click",".H_Album_Edit",function(){
    var _picid = $(this).parent().data("albumpicid");
    //todo sth
    $("#AlbumEdit .modal-content").html(Crate);
    $("#AlbumEdit").modal('show');
});

$(document).on("click",".H_Album_SetCover",function(){
    var _picid = $(this).parent().data("albumpicid");
    //todo sth
    //改变弹出框文本
    $("#AlbumEdit .modal-content").html(SetOk);
    $("#AlbumEdit").modal('show');
    //1s后关闭
    setTimeout(function () {
        $("#AlbumEdit").modal('hide');
    },800);
});

$(document).on("click",".H_Album_Del",function(){
    var _picid = $(this).parent().data("albumpicid");
    //todo sth
    //改变弹出框文本
    $("#AlbumEdit .modal-content").html(Del);
    $("#AlbumEdit").modal('show');

});
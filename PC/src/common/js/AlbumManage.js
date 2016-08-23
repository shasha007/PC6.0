/**
 * Created by huqiwen on 16/7/28. 相册
 */
//编辑相册信息 html
var Edit = "<p class=\"tit\">编辑相册信息</p> <p class=\"input\"> <input type=\"text\" class=\"AlbumManageEdit\"> </p> <footer> <a class=\"cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">取消</a> <a class=\"AlbumManageOk\">确定</a> </footer>";
//确认删除 html
var Del= " <p class=\"Del_p\">确定删除该相册?相册中有张";
var Del2 = "照片</p> <footer class=\"Del_foot\"> <a class=\"cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">取消</a> <a class=\"Del_btn\">确定</a> </footer>";
//创建相册 html
var Crate = " <p class=\"tit\">创建相册 </p> <p class=\"input\"> <input type=\"text\"> </p> <p class=\"text\"> <textarea placeholder=\"输入描述\"> </textarea> </p> <footer> <a class=\"cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">取消</a> <a class=\"ok\">确定</a> </footer>";

//创建相册
$(".H_Album_Manage_AddBtn").on('click',function () {
    $("#AlbumCreate textarea").val("");
    $("#AlbumCreate .modal-content").html(Crate);
    $("#AlbumCreate").modal('show');
});

$(".H_AlbumManage_BtnDel").on('click', function () {
    var _picid = $(this).parent().data("albumid");
    var _num = $(this).parent().parent().siblings(".H_Album_Num").text().trim();
    $("#AlbumCreate .modal-content").html(Del+_num+Del2);
    $("#AlbumCreate").modal('show');
});
$(".H_AlbumManage_BtnEdit").on('click', function () {
    var _picid = $(this).parent().data("albumid");
    $("#AlbumCreate .modal-content").html(Edit);
    $("#AlbumCreate").modal('show');
});
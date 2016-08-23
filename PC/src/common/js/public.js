/**
 * Created by huqiwen on 16/6/21. 公共js文件
 */

//加载公共头尾
$("#pHead").load("PublicHeader.html");
$("#pFooter").load("PublicFooter.html");
$("#pHead2").load("HuoHeader.html");
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

///上传文件/
function uploadFile(){
    if(typeof FileReader==='undefined'){
        alert("抱歉，你的浏览器不支持预览图像");
    }
    else{
        var file=document.getElementById("file").files[0];
        var fn=document.getElementById("filename");
        var icon=document.getElementById("icon");
        if(!/image\/\w+/.test(file.type)){
            alert("文件必须为图片！");
        }
        else{
            fn.innerText=file.name;
            var fr=new FileReader();
            fr.readAsDataURL(file);

        }
    }
}



//保持左右高度一致

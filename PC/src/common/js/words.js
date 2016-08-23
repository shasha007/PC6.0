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
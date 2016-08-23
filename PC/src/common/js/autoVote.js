///上传注册头像/
function uploadIcon(){
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
			fr.onload=function(){
				icon.src=this.result;
			}
		}
	}	
}

//上传选手照片
$(function(){
//	上传学生证
	$(".L_autPhoto ul li input").change(function(){
		console.log($(this).parent())
	});
	$(".L_autPhoto ul li").click(function(){
//		console.log($(this).parent())
		if(typeof FileReader==='undefined'){ 
			alert("抱歉，你的浏览器不支持预览图像");
		}
		else{
			var file=document.getElementById("L_file").files[0];
			var fn=document.getElementById("filename");
			var icon=document.getElementById("L_icon");
			if(!/image\/\w+/.test(file.type)){ 
		    	alert("文件必须为图片！"); 
		    }
			else{
				fn.innerText=file.name;
				var fr=new FileReader();
				fr.readAsDataURL(file);
				fr.onload=function(){
					icon.src=this.result;
				}
			}
		}	
	});
});

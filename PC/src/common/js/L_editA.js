//编辑活动 切换
$(".L_edit_AG").on("click", function () {
        //编辑活动
		$(".L_AManage_Swap").load("editActivity.html");
});
//添加选手切换
$(".L_addVoter").on("click", function () {
        //添加选手
		$(".L_AManage_Swap").load("addVoter.html");
});
//添加公告切换
$(".L_addNotice").on("click", function () {
        //添加公告
		$(".L_AManage_Swap").load("addNotice.html");
});
//编辑公告切换
$(".L_editNotice").on("click", function () {
        //编辑公告
		$(".L_AManage_Swap").load("editNotice.html");
});
//返回公告列表切换
$(".L_noticeList").on("click", function () {
        //返回公告列表
		$(".L_AManage_Swap").load("activityNotice.html");
});
//返回选手列表切换
$(".L_voteList").on("click", function () {
        //返回选手列表
		$(".L_AManage_Swap").load("voteMember.html");
});
//添加图片切换
$(".L_addPhoto").on("click", function () {
        //添加图片
		$(".L_AManage_Swap").load("addPhoto.html");
});
//返回图片列表切换
$(".L_photoList").on("click", function () {
        //返回图片列表
		$(".L_AManage_Swap").load("sunSpot.html");
});
//add
//编辑靓照切换
$(".L_edit_sunPhoto").on("click", function () {
        
		$(".L_AManage_Swap").load("editSunSpot.html");
});
//编辑视频切换
$(".L_edit_sunVideo").on("click", function () {
	
		$(".L_AManage_Swap").load("editSunVedio.html");
});

//编辑视频切换
$(".L_edit_video").on("click", function () {
		$(".L_AManage_Swap").load("editVideo.html");
});
//添加视频切换
$(".L_add_video").on("click", function () {
		$(".L_AManage_Swap").load("editVideo.html");
});
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

	//级联菜单
	var groups = document.getElementById("L_province_select").options.length; 
	var group = new Array(groups) 
	for (i = 0; i < groups; i ++) 
	group[i] = new Array() 
	
	group[0][0] = new Option("苏州","1") 
	group[0][1] = new Option("南京","2") 
	
	group[1][0] = new Option("杭州","3") 
	group[1][1] = new Option("南浔","4") 	
	
	var temp = document.getElementById("L_city_select"); 
	function Redirect(x){ 
	 for (m = temp.options.length-1; m > 0; m --) 
	 temp.options[m] = null 
	 for (i = 0; i < group[x].length; i ++){ 
	 temp.options[i] = new Option(group[x][i].text,group[x][i].value); 
	 } 
	 temp.options[0].selected = true 
	} 
	
	$("#L_province_select").change(function(){
		
		document.getElementById("L_all_schools").style.display="none";
		document.getElementById("L_selected_school").style.display="none";
		//清除上次勾选记录
		$(".L_hover_school input").attr('checked',false);
	});
	

//	根据相应首字母获取学校
    $("#L_city_select").change(function(){
			if($(this).children('option:selected').val()=='1'){
				document.getElementById("L_all_schools").style.display="block";
					$.ajax({
						//contentType:"application/json;charset=UTF-8",
						type:"get",
						url:"../json/schools.json",
						async:true,
						data:"A",
						success:function(data){
							var schoolArray=data.school;
							for(var i=0;i<schoolArray.length;i++){
								var span=document.createElement("span");
								var checkBox=document.createElement("input");
								checkBox.setAttribute('type','checkbox');
								checkBox.setAttribute('id',i)
								checkBox.setAttribute('value',i)
								checkBox.setAttribute('name','L_cb')
								checkBox.setAttribute('class','inputCheck')
								span.appendChild(checkBox);
								span.appendChild(document.createTextNode(schoolArray[i]));
								$(".L_hover_school").append(span);
							}
												
					        $("input[name='L_cb']").on('click',function(){
//							$("#checkbox").each(function(){
									if($(this).is(":checked")){
										var tex=$(this).val()
									    var s=document.createElement("span");
									    var checkBox=document.createElement("input");
										checkBox.setAttribute('type','checkbox');
										checkBox.setAttribute('checked','checked');
										checkBox.setAttribute('id',$(this).val())
										s.appendChild(checkBox);
										s.appendChild(document.createTextNode(schoolArray[tex]));
										//显示已选学校
										
										//防止重复选择
										if($(".L_checked_school").children().text().indexOf(schoolArray[tex]) >=0){
	//										alert(22)
										}else{
											$(".L_checked_school").append(s);
										}
										
										$("#L_province_select").change(function(){
											$(".L_checked_school span").remove();
											$(".L_all_schools input").attr('checked',false);
										});
									}
//  							 });
					        });
					        
//					        $("input[name='L_cb']").on('click',function(){
							$("input[name='L_cb']").on('click',function(){
								if($(this).is(":checked")){
						        	var tex=$(this).val()
								    var s=document.createElement("span");
								    var checkBox=document.createElement("input");
									checkBox.setAttribute('type','checkbox');
									checkBox.setAttribute('checked','checked');
									checkBox.setAttribute('id',$(this).val())
									s.appendChild(checkBox);
									s.appendChild(document.createTextNode(schoolArray[tex]));
									//显示第一栏已选学校
									//防止重复选择
									if($(".L_selected_school").children().text().indexOf(schoolArray[tex]) >=0){
//										alert(22)
									}else{
										$(".L_selected_school").append(s);
									}
									
									
									$("#L_province_select").change(function(){
										$(".L_selected_school span").remove();
										$(".L_all_schools input").attr('checked',false);
									});
									
									var selectSchool=document.getElementById("L_selected_school");
									//显示隐藏选择学校
									if(document.getElementById("L_selected_school").getElementsByTagName("span").length!=0){
										document.getElementById("L_selected_school").style.display="block";
									}else{
										document.getElementById("L_selected_school").style.display="none";
									}
								}
					        });
						}

					});


			} else if($(this).children('option:selected').val()=='3'){
					document.getElementById("L_all_schools").style.display="block";
					$.ajax({
						//contentType:"application/json;charset=UTF-8",
						type:"get",
						url:"../json/schools.json",
						async:true,
						data:"A",
						success:function(data){
							var schoolArray=data.school;
							for(var i=0;i<schoolArray.length;i++){
								var span=document.createElement("span");
								var checkBox=document.createElement("input");
								checkBox.setAttribute('type','checkbox');
								checkBox.setAttribute('id',i)
								checkBox.setAttribute('value',i)
								checkBox.setAttribute('name','L_cb')
								checkBox.setAttribute('class','inputCheck')
								span.appendChild(checkBox);
								span.appendChild(document.createTextNode(schoolArray[i]));
								$(".L_hover_school").append(span);
							}
												
					        $("input[name='L_cb']").on('click',function(){
//							$("#checkbox").each(function(){
									if($(this).is(":checked")){
										var tex=$(this).val()
									    var s=document.createElement("span");
									    var checkBox=document.createElement("input");
										checkBox.setAttribute('type','checkbox');
										checkBox.setAttribute('checked','checked');
										checkBox.setAttribute('id',$(this).val())
										s.appendChild(checkBox);
										s.appendChild(document.createTextNode(schoolArray[tex]));
										//显示已选学校
																				//防止重复选择
										if($(".L_checked_school").children().text().indexOf(schoolArray[tex]) >=0){
	//										alert(22)
										}else{
											$(".L_checked_school").append(s);
										}
										
										$("#L_province_select").change(function(){
											$(".L_checked_school span").remove();
										});
									}
//  							 });
					        });
					        
//					        $("input[name='L_cb']").on('click',function(){
							$("input[name='L_cb']").on('click',function(){
								if($(this).is(":checked")){
						        	var tex=$(this).val()
								    var s=document.createElement("span");
								    var checkBox=document.createElement("input");
									checkBox.setAttribute('type','checkbox');
									checkBox.setAttribute('checked','checked');
									checkBox.setAttribute('id',$(this).val())
									s.appendChild(checkBox);
									s.appendChild(document.createTextNode(schoolArray[tex]));
									//显示第一栏已选学校
									//防止重复选择
									if($(".L_selected_school").children().text().indexOf(schoolArray[tex]) >=0){
//										alert(22)
									}else{
										$(".L_selected_school").append(s);
									}
									
									$("#L_province_select").change(function(){
										$(".L_selected_school span").remove();
									});
									
									var selectSchool=document.getElementById("L_selected_school");
									//显示隐藏选择学校
									if(document.getElementById("L_selected_school").getElementsByTagName("span").length!=0){
										document.getElementById("L_selected_school").style.display="block";
									}else{
										document.getElementById("L_selected_school").style.display="none";
									}
								}
					        });
						}

					});

		}else{


		}
	});
	
    $(function(){
	//	显示/隐藏获取学校控价
		$(".L_checked_school").hover(function(){	
			$(".L_all_schools").slideDown("fast");
		});
		$(".L_selected_school").mousemove(function(){
			$(".L_all_schools").css("display","block");
		});
		$(".L_selected_school").mouseout(function(){
			$(".L_all_schools").css("display","none");
		});
    });
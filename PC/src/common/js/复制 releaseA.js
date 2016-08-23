	
	//活动类型
//	function repayStyle(){
//		var index=0;
//		var li=document.getElementsByClassName("L_huoitems")[0].getElementsByTagName("li");
//		for(var i=0;i<li.length;i++){
//			li[i].addEventListener("click",select);
//			li[i].index=i;
//		}
//		function select(){
//			li[index].setAttribute("data-checked",false);
//			li[index].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="none"
//			li[index].style.backgroundColor="#FFFFFF";
//			index=this.index;
//			this.setAttribute("data-checked",true);
//			this.getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="block"
//			li[index].style.backgroundColor="#D1D5E1";
//		}
//	}

	//显示年级
//	function repayStyle(){
//		var index=0;
//		var li=document.getElementsByClassName("L_huoGrade")[0].getElementsByTagName("li");
//		li[0].addEventListener("click",selectAll);
//		function selectAll(callback){
//			console.log(11)
//				for(var i=0;i<li.length;i++){
//					li[i].setAttribute("data-checked",false);
//					li[i].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="none"
//				}
//				if(callback){
//					run();
//				}
//		}
//		function run(){
//				for(var i=0;i<li.length;i++){
//					li[i].setAttribute("data-checked",true);
//					li[i].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="block"
//				}
//		}
		
//		li[0].addEventListener("click",selectAll);
//		function selectAll(){
//			if(li[0].getAttribute("data-checked")=='true'){
//				for(var i=0;i<li.length;i++){
//					li[i].setAttribute("data-checked",false);
//					li[i].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="none"
//				}
//			}else{
//				for(var i=0;i<li.length;i++){
//					li[i].setAttribute("data-checked",true);
//					li[i].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="block"
//				}
//			}
//		}
//		for(var i=0;i<li.length;i++){
//			li[i].addEventListener("click",select);
//			li[i].index=i;
//		}
//		function select(){
//			li[index].setAttribute("data-checked",false);
//			li[index].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="none"
//			index=this.index;
//			this.setAttribute("data-checked",true);
//			this.getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="block"
//		}
//	}
	//活动选项
	function repayStylePeaple(){
		var index=0;
		var li=document.getElementsByClassName("L_huoPeaple")[0].getElementsByTagName("li");
		for(var i=0;i<li.length;i++){
			li[i].addEventListener("click",select);
			li[i].index=i;
		}
		function select(){
			if(li[index].getAttribute("data-checked")=='true'){
				index=this.index;
				li[index].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="none";
				li[index].setAttribute("data-checked",false);
				
			}else{
				index=this.index;
				li[index].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="block";
				li[index].setAttribute("data-checked",true);
				
			}
		}
	}
	//报名费用
	function repayStyleMoney(){
		var index=0;
		var li=document.getElementsByClassName("L_huoMoney")[0].getElementsByTagName("li");
		for(var i=0;i<li.length;i++){
			li[i].addEventListener("click",select);
			li[i].index=i;
		}
		function select(){
			li[index].setAttribute("data-checked",false);
			li[index].getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="none"
			index=this.index;
			this.setAttribute("data-checked",true);
			this.getElementsByTagName("div")[0].getElementsByTagName("img")[0].style.display="block"
		}
	}
	//活动签名
	$( function(){
	    $("#L_sign span").click(function(){
	        $(".L_On").removeClass("L_On");
	        $(this).addClass("L_On");
	        var s=document.createElement("span");
	        s.innerText=$(this).html();
	        $('#L_textarea').append(s);
	        $("#L_textarea span").click(function(){
		    	$(this).remove();
		    });
	    });
	});

	window.onload=function(){
//		repayStyle();
		DoCheck();
		repayStylePeaple();
		repayStyleMoney();
		$("input[name='L_up_time']").on('click',function(){
			if($('#L_close_radio').is(":checked")){
				$('.L_time_detail').hide();
			} 
			if($('#L_open_radio').is(":checked")){
				$('.L_time_detail').show();
			} 
		});
		$("input[name='L_function_open']").on('click',function(){
			if($('#L_function_open').is(":checked")){
				
				$('.L_config_all').show();

			}else{
				$('.L_config_all').hide();
			}
		});
		L_function_open
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
	//全选
	function DoCheck(){
		var ch=document.getElementsByName("L_grade");
		if(document.getElementsByName("L_allchecked")[0].checked==true)
		{
			for(var i=0;i<ch.length;i++)
				{
					ch[i].checked=true;
				}
		}else{
			for(var i=0;i<ch.length;i++)
				{
					ch[i].checked=false;
				}
		}
	}

	//级联菜单

	function changeProv(obj){ 
		
		var sid = $(obj).siblings('span');
	    var city = $(obj).siblings('select');
	    var provId = $(obj).val();
	    city.empty();
	    sid.empty();
	    if (provId == 0) {
	        city.hide();
	        return false;
	    }
	    city.show();
	    $.get(U('home/Public/ajaxCityByProv'), {provId: provId}, function (data) {
	        var json = $.parseJSON(data);
	        var option = '<option value="0" >-全省-</option>';
	        $.each(json, function (k, v) {
	            option += "<option value=\"" + v['id'] + "\">" + v['city'] + "</option>";
	        });
	        city.append(option);
	    });
		
			var groups = document.getElementById("L_province_select_v").options.length; 
	var group = new Array(groups) 
	for (i = 0; i < groups; i ++) 
	group[i] = new Array() 
	
	group[0][0] = new Option("苏州","1") 
	group[0][1] = new Option("南京","2") 
	
	group[1][0] = new Option("杭州","3") 
	group[1][1] = new Option("南浔","4") 	
	
	var temp = document.getElementById("L_city_select_v"); 
		
	 for (m = temp.options.length-1; m > 0; m --) 
	 temp.options[m] = null 
	 for (i = 0; i < group[x].length; i ++){ 
	 temp.options[i] = new Option(group[x][i].text,group[x][i].value); 
	 } 
	 temp.options[0].selected = true 
	} 
	
	$("#L_province_select_v").change(function(){
		
		document.getElementById("L_all_schools_v").style.display="none";
		document.getElementById("L_selected_school_v").style.display="none";
		//清除上次勾选记录
		$(".L_hover_school_v input").attr('checked',false);
	});
	

//	根据相应首字母获取学校
    $("#L_city_select_v").change(function(){
			if($(this).children('option:selected').val()=='1'){
				document.getElementById("L_all_schools_v").style.display="block";
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
								$(".L_hover_school_v").append(span);
							}
												
					        $("input[name='L_cb']").on('click',function(){
//							$("#checkbox").each(function(){
									if($(this).is(":checked")){
										var tex=$(this).val()
									    var s=document.createElement("span");
									    var checkBox=document.createElement("input");
										checkBox.setAttribute('type','checkbox');
										checkBox.setAttribute('checked','checked');
										checkBox.setAttribute('id',$(this).val());
										checkBox.setAttribute('name',$(this).val());
										s.setAttribute('class','L_checked_span');
										s.setAttribute('data-id',$(this).val());
										s.appendChild(checkBox);
										s.appendChild(document.createTextNode(schoolArray[tex]));
										//显示已选学校
										//防止重复选择
										if($(".L_checked_school_v").children().text().indexOf(schoolArray[tex]) >=0){
	//										alert(22)
										}else{
											$(".L_checked_school_v").append(s);
										}
										
										$("#L_province_select_v").change(function(){
											$(".L_checked_school_v span").remove();
											$(".L_all_schools_v input").attr('checked',false);
										});
									}else{
										var tex=$(this).val()
										var span=$(".L_checked_span").find('input[name='+tex+']').parent();
										span.remove();
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
									checkBox.setAttribute('name',$(this).val())
									s.setAttribute('class','L_select_span');
									s.setAttribute('id',$(this).val());
									s.appendChild(checkBox);
									s.appendChild(document.createTextNode(schoolArray[tex]));
									//显示第一栏已选学校
									//防止重复选择
									if($(".L_selected_school_v").children().text().indexOf(schoolArray[tex]) >=0){
//										alert(22)
									}else{
										$(".L_selected_school_v").append(s);
									}
									
									$("#L_province_select_v").change(function(){
										$(".L_selected_school_v span").remove();
										$(".L_all_schools_v input").attr('checked',false);
									});
									
									var selectSchool=document.getElementById("L_selected_school_v");
									//显示隐藏选择学校
									if(document.getElementById("L_selected_school_v").getElementsByTagName("span").length!=0){
										document.getElementById("L_selected_school_v").style.display="block";
									}else{
										document.getElementById("L_selected_school_v").style.display="none";
									}
								}else{
										var tex=$(this).val()
										var span=$(".L_select_span").find('input[name='+tex+']').parent();
										span.remove();
									}
					        });
						}

					});


			} else if($(this).children('option:selected').val()=='3'){
					document.getElementById("L_all_schools_v").style.display="block";
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
								$(".L_hover_school_v").append(span);
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
										checkBox.setAttribute('name',$(this).val())
										s.setAttribute('class','L_checked_span');
										s.appendChild(checkBox);
										s.appendChild(document.createTextNode(schoolArray[tex]));
										//显示已选学校
										//防止重复选择
										if($(".L_checked_school_v").children().text().indexOf(schoolArray[tex]) >=0){
	//										alert(22)
										}else{
											$(".L_checked_school_v").append(s);
										}
										
										$("#L_province_select_v").change(function(){
											$(".L_checked_school_v span").remove();
										});
									}else{
										var tex=$(this).val()
										var span=$(".L_checked_span").find('input[name='+tex+']').parent();
										span.remove();
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
									checkBox.setAttribute('name',$(this).val())
									s.setAttribute('class','L_select_span');
									s.appendChild(checkBox);
									s.appendChild(document.createTextNode(schoolArray[tex]));
									//显示第一栏已选学校
									//防止重复选择
									if($(".L_selected_school_v").children().text().indexOf(schoolArray[tex]) >=0){
//										alert(22)
									}else{
										$(".L_selected_school_v").append(s);
									}
									
									$("#L_province_select_v").change(function(){
										$(".L_selected_school_v span").remove();
									});
									
									var selectSchool=document.getElementById("L_selected_school_v");
									//显示隐藏选择学校
									if(document.getElementById("L_selected_school_v").getElementsByTagName("span").length!=0){
										document.getElementById("L_selected_school_v").style.display="block";
									}else{
										document.getElementById("L_selected_school_v").style.display="none";
									}
								}else{
										var tex=$(this).val()
										var span=$(".L_select_span").find('input[name='+tex+']').parent();
										span.remove();
									}
					        });
						}

					});

		}else{


		}
	});
	
      $(function(){
	//	显示/隐藏获取学校控价
		$(".L_checked_school_v").hover(function(){	
			$(".L_all_schools_v").slideDown("fast");
		});
		$(".L_selected_school_v").mousemove(function(){
			$(".L_all_schools_v").css("display","block");
		});
		$(".L_selected_school_v").mouseout(function(){
			$(".L_all_schools_v").css("display","none");
		});
    });
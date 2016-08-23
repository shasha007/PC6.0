	
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
	window.onload=function(){
//		repayStyle();
		DoCheck();
		repayStylePeaple();
		repayStyleMoney();

//		addArea();

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
	
	}

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
	//年级全选
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
		//年级全选
	function GradeCheck(){
		var ch=document.getElementsByName("L_grade_N");
		if(document.getElementsByName("L_allchecked_N")[0].checked==true)
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
	//院系全选
	function AllCheck(){
		var ch=document.getElementsByName("L_yuan");
		if(document.getElementsByName("L_yuanAllchecked")[0].checked==true)
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

	function changeProv(obj) {
	
	    var sid = $(obj).siblings('.L_selected_school_v');
	    var city = $(obj).siblings('select');
	    var provId = $(obj).val();
	    city.empty();
	    sid.empty().hide();
	    if (provId == 0) {
	        city.hide();
	        return false;
	    }
	    city.show();
	    $.ajax({
					//contentType:"application/json;charset=UTF-8",
					type:"get",
					url:"../json/CityByProv.json",
					async:true,
					data:{provId: provId},
					success:function(data){
						var json=data;
//							var json = $.parseJSON(data.data);
				        var option = '<option value="0" >-全国-</option>';
				        $.each(json, function (k, v) {
				            option += "<option value=\"" + v['id'] + "\">" + v['city'] + "</option>";
				        });
				        city.append(option);
					}
				});
	}

	function getSchools(obj){
		var divspan = $(obj).siblings('.L_selected_school_v');
	    if ($(obj).val() == 0) {
	        divspan.hide();
	        return false;
	    }
	    console.log($(obj).val())
	    divspan.show();
	    divspan.empty();
	    var cityId = $(obj).val();
	    $.ajax({
						//contentType:"application/json;charset=UTF-8",
						type:"get",
						url:"../json/schools.json",
						async:true,
						data:{cityId: cityId},
						success:function(data){
							console.log(data.school)
							var schoolArray=data.school;
//							var json = $.parseJSON(data);
					        var string = "<input name='schools" + cityId + "[]'  type='checkbox' onclick='checkAllSchool(this," + cityId + ")' value='0' checked='true' />全选";
					        $.each(schoolArray, function (k, v)
					        {
					            string += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='schools" + cityId + "[]' type='checkbox' value='" + v.id + "' checked='true' />" + v.title;
					        });
					        divspan.append(string);
							
						}
				});	
	}

    	   	//增加投放地区
	   	function addArea() {
		    var obj = $('.L_detail_school:last-child').clone(true).insertAfter(".L_detail_school:last-child");
			$(obj).find(".L_selected_school_v").empty().hide();
//			$(obj).find('.L_all_schools_v').find(".L_checked_school_v span").empty();
//			$(obj).find(".L_all_schools_v").find("input").attr('checked',false);
		    $(obj).find('.L_addN').html('<a href="javascript:void(0);" onclick="delArea(this);" class="L_delete_school" style="color:  #3a9fdf;">-删除投放地区</a>');
		    $(obj).find('select').eq(0).val(0); 
		    $(obj).find('select').eq(1).val(0);
		    
		}
		function delArea(obj) {
		    $(obj).parent().parent().remove();
		}
		function checkAllSchool(o,cityId){
				var inp=$('input[name="schools'+cityId+'[]"]');
			    if($('input[name="schools'+cityId+'[]"]')[0].checked==true){
			    	for(var i=0;i<inp.length;i++)
						{
							inp[i].checked=true;
						}
			    }else{
			    	for(var i=0;i<inp.length;i++)
						{
							inp[i].checked=false;
						}
			    }
		}
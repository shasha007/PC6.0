		//修改备注
	var PreRemark = "";//上次备注
	$(".L_Remarks>div").on('click', function () {
	    var UserId  = $(this).parent('.L_Remarks').data("userid").toString().trim();
	    var Remark = PreRemark = $(this).parent('.L_Remarks').text().toString().trim();
	    $(this).hide();
	    $(this).next(".L_remark_hover").hide();
	    $(this).parent('.L_Remarks').append("<input type=\"text\" class=\"L_Remarks_Input\" value=\""+Remark+"\" onblur=\"GetRemark(this,'"+UserId+"');\">");
//	    $(this).parent('.L_Remarks').append("<input type='text' class='L_Remarks_Input' value='"+Remark+"' onblur='GetRemark(this,'"+UserId+"');\">");
	    $(this).next(".L_Remarks_Input").focus();
	});

	
	//input 修改备注 失去获得焦点事件
	function GetRemark(dom,userid){
	        console.log(userid); //用户id
	        var _dom = $(dom);
	        var Num = _dom.val();
	        if(Num==PreRemark){
	            //没变
	            console.log("没变");
	            _dom.parent('.L_Remarks').find("div").html(Num).show();
	            _dom.parent('.L_Remarks').find("input").remove();
	        }else{

	            _dom.parent('.L_Remarks').find("div").html(Num).show();
	            _dom.parent('.L_Remarks').find("input").remove();
	        }
	
	}
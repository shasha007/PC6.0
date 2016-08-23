   	//上传配置添加选手信息
   $(function(){
		$("#addConfig").click(function(){
			$(".L_tbody_footer").before("	<div class='L_tbody_th'>"+
			"<span><input type='text' class='L_Config_Content' id='L_Config_Content' placeholder='' onblur='copyL();' /></span>"+
//			"<span id='L_default' class='L_default'>&nbsp;</span>"+
			"<span><select class='L_default'><option>附件</option><option>文本框</option></select></span>"+
			"<span><input type='checkbox'/></span>"+
			"<span><input type='checkbox'/></span>"+
			"<span><a href='javascript:void(0);' onclick='delAdd(this);' class='L_delete_add' style='color:  #3a9fdf;'>删除</a></span>"+
		"</div>");
		});
		//图文混排插件
	    tinymce.init({
	        selector: '.L_huomessage_tinymce textarea',
	        height: 300,
	        width:880,
	        
	        dragDropUpload:true,
	        automatic_uploads:true,
	        upload_url:'http://localhost:8089/pu_img/upload/filesUpload',
	        base_uri:"http://localhost:8089/pu_img/",
	        plugins: [
	            "advlist autolink lists link image charmap print preview anchor",
	            "searchreplace visualblocks code fullscreen",
	            "insertdatetime media table contextmenu paste image upload"
	        ],
	        toolbar: "insertfile undo redo | " +
	        "styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
	        "bullist numlist outdent indent | link image upload | table",
	        
	    });
	    //时间控件插件
        $(".L_time_detail").datetimepicker({
            //showOn: "button",
            //buttonImage: "./css/images/icon_calendar.gif",
            //buttonImageOnly: true,
//              showSecond: true,
////              timeFormat: 'hh:mm',
//              stepHour: 1,
//              stepMinute: 1,
//              stepSecond: 1
        })
    });
//
//	function copyL(){
//		var inputC=$('.L_tbody_footer').prev().find($('.L_Config_Content')).val();
//		$('.L_tbody_footer').prev().find($('.L_default')).html('默认：'+inputC);
//	}
		function delAdd(obj) {
		    $(obj).parent().parent().remove();
		}
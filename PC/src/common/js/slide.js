var imgIndex=0;
var max=$("#L_slideImg div").length;

$(function(){
	autoSlide();
	$("#L_downs").change(function(){
		if($(this).children('option:selected').val()=='5秒'){
			clearInterval(slideObj);
			autoSlide1();
		}else if($(this).children('option:selected').val()=='10秒'){
			clearInterval(slideObj);
			autoSlide2();
		}else{
			clearInterval(slideObj);
			autoSlide3();
		}
	});
});
//自动播放
function autoSlide(){
	slideObj=setInterval(function(){
		$("#L_slideImg").find("div").eq(imgIndex).fadeOut();
		$("#L_slideSmall").find("div").eq(imgIndex).removeClass("swiper-slide-active");
		imgIndex++;
		if(imgIndex==max){
			imgIndex=0;
		}
		$("#L_slideImg").find("div").eq(imgIndex).fadeIn();
		$("#L_slideSmall").find("div").eq(imgIndex).addClass("swiper-slide-active");
	},2000);
	
	//鼠标移动选取
	$("#L_slideSmall div").hover(function(){
		if(imgIndex!=$(this).index()){
			clearInterval(slideObj);
			$("#L_slideImg").find("div").eq(imgIndex).fadeOut();
			$("#L_slideSmall").find("div").eq(imgIndex).removeClass("swiper-slide-active");
			imgIndex=$(this).index();
			$("#L_slideImg").find("div").eq(imgIndex).fadeIn();
			$("#L_slideSmall").find("div").eq(imgIndex).addClass("swiper-slide-active");
			autoSlide();
		}
	},function(){
		$("#L_slideImg").find("div").fadeOut().stop();
		$("#L_slideSmall").find("div").removeClass("swiper-slide-active").stop();
	});	
}

	
//隔5秒自动播放
function autoSlide2(){
	slideObj=setInterval(function(){
		$("#L_slideImg").find("div").eq(imgIndex).fadeOut();
		$("#L_slideSmall").find("div").eq(imgIndex).removeClass("swiper-slide-active");
		imgIndex++;
		if(imgIndex==max){
			imgIndex=0;
		}
		$("#L_slideImg").find("div").eq(imgIndex).fadeIn();
		$("#L_slideSmall").find("div").eq(imgIndex).addClass("swiper-slide-active");
	},5000);
}
//隔10秒自动播放
function autoSlide2(){
	slideObj=setInterval(function(){
		$("#L_slideImg").find("div").eq(imgIndex).fadeOut();
		$("#L_slideSmall").find("div").eq(imgIndex).removeClass("swiper-slide-active");
		imgIndex++;
		if(imgIndex==max){
			imgIndex=0;
		}
		$("#L_slideImg").find("div").eq(imgIndex).fadeIn();
		$("#L_slideSmall").find("div").eq(imgIndex).addClass("swiper-slide-active");
	},10000);
}
//隔20秒自动播放
function autoSlide3(){
	slideObj=setInterval(function(){
		$("#L_slideImg").find("div").eq(imgIndex).fadeOut();
		$("#L_slideSmall").find("div").eq(imgIndex).removeClass("swiper-slide-active");
		imgIndex++;
		if(imgIndex==max){
			imgIndex=0;
		}
		$("#L_slideImg").find("div").eq(imgIndex).fadeIn();
		$("#L_slideSmall").find("div").eq(imgIndex).addClass("swiper-slide-active");
	},20000);
}

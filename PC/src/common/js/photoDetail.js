	var galleryTop = new Swiper('.gallery-top',{
	    pagination: '.swiper-pagination',
		mousewheelControl:true,//鼠标滚轮
//		loop : true,
//		loopAdditionalSlides : 1,
		slidesPerView : 1,
	    autoplay:5000,
	   onInit: function(galleryTop){//Swiper初始化了
        //console.log("提示Swiper的当前索引 "+mySwiper.activeIndex);//提示Swiper的当前索引
        
	    },
	})
	galleryTop.stopAutoplay();
	
	$('.swiper-button-prev').on('click', function(e){/*向前*/
	    e.preventDefault();
	    galleryTop.slidePrev();
		galleryTop.slideTo(galleryTop.activeIndex+6,2000,false);
	})
	
	$('.swiper-button-next').on('click', function(e){/*向后*/
	    e.preventDefault();
	    galleryTop.slideNext();
		galleryTop.slideTo(galleryTop.activeIndex-6,2000,false);
	})
	$('#L_pre_play').on('click', function(e){/*前一张*/
		
	    e.preventDefault();
	    galleryTop.slidePrev();
	})
	
	$('#L_next_play').on('click', function(e){/*后一张*/
	    e.preventDefault();
	    galleryTop.slideNext();
	})
	
	//暂停
	$('#L_stop_play').on('click',function(e){
		if($('#L_stop_play').data('stop')=='1'){
			$('#L_stop_play').attr('src','../src/common/images/L_stop_mouseDown.png')
			e.preventDefault();
		    galleryTop.stopAutoplay();
		    $('#L_stop_play').data("stop", 0);
		}
		else
		{
			$('#L_stop_play').attr('src','../src/common/images/L_stop_play.png')
			e.preventDefault();
		    galleryTop.startAutoplay();
		    $('#L_stop_play').data('stop',1);
		}
	})
	
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
		mousewheelControl:true,//鼠标滚轮
		slidesPerView : 'auto',
		loopedSlides :3,
    });
	
	//更改自动播放时间	
    $("#L_downs").change(function(){
		galleryTop.stopAutoplay();
			if($(this).children('option:selected').val()=='10秒'){
				galleryTop.params.autoplay=10000;
				galleryTop.startAutoplay();
				galleryTop.params.control = galleryThumbs;
		        galleryThumbs.params.control = galleryTop;
			} else if($(this).children('option:selected').val()=='20秒'){
				galleryTop.params.autoplay=20000;
				galleryTop.startAutoplay();
			galleryTop.params.control = galleryThumbs;
			galleryThumbs.params.control = galleryTop;
		}else{
				galleryTop.params.autoplay=5000;
				galleryTop.startAutoplay();
			galleryTop.params.control = galleryThumbs;
			galleryThumbs.params.control = galleryTop;
		}
	});
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
	//跳到上一组 图片更换
	$('#L_next').hover(function(){
		$('#L_next').attr('src','../src/common/images/L_next_mouseOver.png')
	},function(){
		$('#L_next').attr('src','../src/common/images/L_next.png')
	});
	//跳到下一组 图片更换
	$('#L_pre').hover(function(){
		$('#L_pre').attr('src','../src/common/images/L_pre_mouseOver.png')
	},function(){
		$('#L_pre').attr('src','../src/common/images/L_pre.png')
	});
	//上一张
	$('#L_pre_play').hover(function(){
		$('#L_pre_play').attr('src','../src/common/images/L_prePlay_mouseOver.png')
	},function(){
		$('#L_pre_play').attr('src','../src/common/images/L_pre_play.png')
	});
	//下一张
	$('#L_next_play').hover(function(){
		$('#L_next_play').attr('src','../src/common/images/L_nextPlay_mouseOver.png')
	},function(){
		$('#L_next_play').attr('src','../src/common/images/L_next_play.png')
	});
	//跳到图片明细
	$('#L_detail').hover(function(){
		$('#L_detail').attr('src','../src/common/images/L_detail_mouseOver.png')
	},function(){
		$('#L_detail').attr('src','../src/common/images/L_detail.png')
	});
// JavaScript Document
$(document).ready(function($){
	var clock = [
	'<div id="seconds"></div>'
	].join('');			
		
//将html内容引入到页面中
$(clock).fadeIn().appendTo('#cn-wrapper');

//(function Clock(){
//	//获取系统当前时间
////	var seconds = new Date().getSeconds();  
//      var srotate = seconds * 6; 
////		
//		$("#seconds").css({
//	    'transform'	:  'rotate('+ srotate +'deg)',
//		'-moz-transform'	:'rotate('+ srotate +'deg)',
//		'-webkit-transform'	:'rotate('+ srotate +'deg)',
//	}); 
//	}
//	
//	var num = srotate/30;
//	for(i=0;i<12;i++){
//		if(num==i){
//			$(".solu-show").removeClass('block');
//			$(".solu-show").eq(Math.floor(num)).addClass('block');
//		}
//	}
//	$(".cn-wrapper li").each(function(i) {
//    $(this).mouseover(function(){
//		$(".solu-show").removeClass('block');
//		$(".solu-show").eq(i).addClass('block');
//		for(j=0;j<12;j++){
//			if(j==i){
//				 $("#seconds").css({
//					'transform'	:  'rotate('+ j * 30+'deg)',
//					'-moz-transform'	:'rotate('+ j * 30 +'deg)',
//					'-webkit-transform'	:'rotate('+ j * 30  +'deg)'
//				}); 
//			}
//		 }
//    });
//	});
//});
var srotate = 0;
var yes = true;
(function Clock(){
	if(yes){
	    srotate+=6; 
	    $("#seconds").css({
		    'transform'	:  'rotate('+ srotate +'deg)',
			'-moz-transform'	:'rotate('+ srotate +'deg)',
			'-webkit-transform'	:'rotate('+ srotate +'deg)'
		});
		if(srotate==360){
			srotate=0;
		}
		
	}
	setTimeout(Clock,1000);
	$('.cn_wra ul li').each(function(i){
		$(this).find('a').css('border','10px solid #0000000');
		$(this).find('a').hover(function(){
			yes =false;
			srotate = i * 30; 
			$('#seconds').css('transform','rotate('+srotate+'deg)');
		},function(){ 
			yes = true;
		})
	})
	var num = srotate/30;
	for(i=0;i<12;i++){
		if(num==i){
			$(".solu-show").removeClass('block');
			$(".solu-show").eq(Math.floor(num)).addClass('block');
		}
	}
})();

	
  var $timeline_block = $('.cd-timeline-block');
  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.45) {
      $(this).find('.show_back,.xian_how,.nub,.ad,.cn-wrapper,.solu-show').addClass('is-hidden');
    }
  });
  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.45 && $(this).find('.show_back,.xian_how,.nub,.ad,.cn-wrapper,.solu-show').hasClass('is-hidden') ) {
        $(this).find('.show_back,.xian_how,.nub,.ad,.cn-wrapper,.solu-show').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
  $("#main-menu li").eq(7).click(function(){
		$(".contact").css("display","block");
	});
	$(".close_btn").click(function(){
		$(this).closest(".contact").hide();
	});
	
	$(".app_list li").each(function(i) {
        $(this).mouseover(function(){
			$(this).addClass("app-active");
			$(".app_hide").removeClass('block');
			$(".app_hide").eq(i).addClass('block');
			$(".business_intr").find(".business_cont").addClass("app-show");
			$(".business_intr").find(".business_show").addClass("app-show");
		}).mouseleave(function(){
			$(this).removeClass("app-active");	
		});
    });

	$(".swiper-slide a").mouseenter(function(){
  			var aname=$(this).attr("name");
  			$("div[id='"+aname+"']").addClass('block');
  			$("div[id!='"+aname+"']").removeClass('block');			
  	});

	
});


// @ 给窗口加滚动条事件
	$(window).scroll(function(){
		
		// 获得窗口滚动上去的距离
		var ling = $(document).scrollTop();
		// 在标题栏显示滚动的距离
		//document.title = ling;
		// 如果滚动距离大于1534的时候让滚动框出来
		if(ling>550){
			$('.right_menu').css({"display":"block","transform":"scale(1)"});
		}			
		if(ling>2805 || ling<500){
			// $('#box').css('display','none');  // @ 这一句和下一句效果一样。
			$('.right_menu').css({"display":"none","transform":"scale(0)"});
		}
		
	});

$(function(){    				
			 $(".navbar-example").scrollspy();
//  		$('body').scrollspy({ target: '.navbar-example',offset:140 });
			$(".closes").click(function(){
				$(this).closest(".navbar-example").hide();;
			});
			/*弹出、关闭调查结果页*/
			$(".simit-an button").click(function(){
				$(".offer-result").show();
			});
			$(".close-btn").click(function(){
				$(this).closest(".offer-result").hide();
			});
			$("#up").click(function () {
		        var speed=500;//滑动的速度
		        $('body,html').animate({ scrollTop: 0 }, speed);
		        return false;
		 	});
		 	$(".more-click").click(function(){
		 		$(".hide-content").toggle("slow");
		 	});
		 	$(".advant-word").mouseover(function(){
				var name=$(this).attr("id");
				$("."+name+" img").attr("src","images/"+name+"-white.png");
			});
			$(".advant-word").mouseout(function(){
				var name=$(this).attr("id");
				$("."+name+" img").attr("src","images/"+name+".png");
			});	
			/*复选框*/
			 var _idpay=$(".check-btn:has(:checkbox)");
			_idpay.click(function(){
				var $chk=$(this).find("input:checkbox");
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$chk.attr("checked",false);
				} else {
					$(this).addClass("on");
					$chk.attr("checked",true);
				}
			});
			
			$(window).scroll(function () {
	            if ($(this).scrollTop() > 50) {
	                $('#back-top').fadeIn();
	            } else {
	                $('#back-top').fadeOut();
	            }
	        });
	      // scroll body to 0px on click
	      $('#back-top').click(function () {
	          $('#back-top a').tooltip('hide');
	          $('body,html').animate({
	              scrollTop: 0
	          }, 800);
	          return false;
	      });      
		$('#back-top').tooltip('hide');
    	})


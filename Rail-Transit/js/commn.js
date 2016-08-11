/*--------banner图轮播----------*/
var ie6 = !-[1,] && !window.XMLHttpRequest; 
var userAgent = navigator.userAgent.toLowerCase();
var browser = {
	ie8: /msie 8/.test(userAgent),
	ie7: /msie 7/.test(userAgent)
};
// www.198zone.com
//Slide func
$.fn.slide=function(){
var defaults,opts,data_opts,$this,$b_,t,n=0,count,$nav,$p,$n,DelayObj,Delay=false;
	defaults={
		fade:true,
		auto:true,
		time:4000,
		action:'mouseover',
		fn:null
		};
	$this=$(this);
	data_opts=$this.data('slide')||{};
	opts=$.extend({},defaults,data_opts);
	$b_=$this.children('.ban_c');
	count=$b_.length;
	if($this.find('.ban_nav').length){$nav=$this.find('.ban_nav')}else{
			$nav=$('<div class="ban_nav"></div>');
			for(i=0;i<count;i++){$nav.append('<a>'+(i+1)+'</a>')};
			$this.append($nav)
			};
//	$this.append('<a class="Left" onselectstart="return false;"></a><a class="Right" onselectstart="return false;"></a>');
//	$nav.children('a').eq(0).addClass('on');
//	$nav.children('a').eq(1).addClass('ban_next');
//	$nav.children('a').eq(count-1).addClass('ban_prev');
	$b_.hide().eq(0).show();
	if(ie6){$b_.height($b_.attr('height') || $this.height())};
	$nav.children('a').each(function(index) {
		$(this).on(opts.action,function(event) {
			event.preventDefault();
			event.stopPropagation();
			if (index >= count){return false}else{
					$nav.children('a').eq(index-1).addClass('ban_prev').siblings().removeClass('ban_prev');
					$nav.children('a').eq(index==count-1 ? 0 : index+1).addClass('ban_next').siblings().removeClass('ban_next')
					};
			if(opts.fade){$b_.stop(1,1).fadeOut(200).eq(index).stop(1,1).fadeIn(500)}else{$b_.hide().eq(index).show()};
			$(this).addClass('on').siblings().removeClass("on");
			n=index
		})
	});
	$p=$(this).find('.Left');
	$n=$(this).find('.Right');
	if(opts.auto){
		t = setInterval(function(){showAuto()}, opts.time);
		$this.mouseenter(function(){
			clearInterval(t);
			}).mouseleave(function(){
				t=setInterval(function(){showAuto()},opts.time);
				})
		};
	$p.click(function(){showPre()});
	$n.click(function(){showAuto()});
	function showAuto(){n=n>=(count - 1) ? 0 : ++n;$nav.find('a').eq(n).trigger(opts.action);};
	function showPre(){n=n<=0 ? (count - 1) : --n;$nav.find('a').eq(n).trigger(opts.action)};
	if(opts.fn){eval(opts.fn+"(opts,$b_,$nav)")}
};
$('.slide').each(function() {$(this).slide()});
//banner专辑封面
function banner_ext(opts,$b_,$nav){
	var album=$b_.filter(function(){return $(this).hasClass('album')}),
		 newslink=$('.banner').find('.link');
		 newslink.eq(0).show();
	if(browser.ie8) opts.fade=false;
	$b_.each(function(i){
		$(this).data('index',i)
		});
	album.each(function(i){
		$('.frontCover').append('<li index="'+($(this).data('index'))+'"><div class="img">'+$(this).find('a').eq(0).html()+'</div>'+$(this).find('img').eq(0).attr('alt')+'</li>')
		});
	$nav.children('a').each(function(index) {
      $(this).click(function(){
			$('.frontCover').children('li').filter(function() {
				return $(this).attr('index')==index
			}).addClass('open').siblings().removeClass('open');
			newslink.eq($('.frontCover').find('.open').index()).show().siblings('.link').hide();
		})
   });
	$('.frontCover').children('li').click(function(){
		$nav.children('a').eq($(this).attr('index')).trigger('click')
		});
	$('.frontCover').children('li').eq(0).addClass('open').end().eq(-1).css('margin',0)
	};


/*--------banner图轮播----------*/

$(function(){
				// Brand Carousal
	$(window).load(function() {
		$('#brandcarousal').carouFredSel({
				width: '100%',
				scroll: 1,
				auto: false,
				prev: '#prev',
				next: '#next',
				//pagination: "#pager2",
				mousewheel: true,
				swipe: {
					onMouse: true,
					onTouch: true
				}
		});
	});
	$(".skill-list ul li").mouseover(function(){
		$(this).addClass("active");
	});
	$(".skill-list ul li").mouseleave(function(){
		$(this).removeClass("active");
	});

	$(".lo-click").click(function(){
		$(".sign-in").toggle("slow");
	});
	$(".closes").click(function(){
		$(this).closest(".sign-in").hide();
	});
	/*返回顶部*/
	$("#up").click(function () {
        var speed=500;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});
 	/**/
 	$(".right-menu ul li").mouseover(function(){
		var name=$(this).attr("id");
		$("."+name+" img").attr("src","images/"+name+"-white.png");
	});
	$(".right-menu ul li").mouseout(function(){
		var name=$(this).attr("id");
		$("."+name+" img").attr("src","images/"+name+".png");
		
	});
	/*搜索*/	
	$(".close").click(function(){
		$(this).closest($(this).parent().parent()).hide();
	});
	$(".screen-list dd a").click(function () {
		var t= $(this).text();
		var copyT=$(".breadcrumb .expert-nub");		
		copyT.before("<li class='active'><a href='javascript:void(0)'>" + t + "<button class='close' aria-label='Close'><i aria-hidden='true'>x</i></button></a></li>");
		
	});	
//	$("#select1 dd a").click(function () {		
//			var copyThisA = $(this).clone();
//			if ($("#selectA").length > 0) {
//				$("#selectA a").html($(this).text());
//			} else {
//				$(".breadcrumb").append(copyThisA.attr("id", "selectA"));
//			}
//			var t= $(this).text();
//		var copyT=$(".breadcrumb");		
//		copyT.append("<li class='active'><a href='javascript:void(0)'>" + t + "<button class='close' aria-label='Close'><i aria-hidden='true'>x</i></button></a></li>");
//	});
	
//	$("#select2 dd a").click(function () {
//		
//			var copyThisB = $(this).clone();
//			if ($("#selectB").length > 0) {
//				$("#selectB a").html($(this).text());
//			} else {
//				$(".breadcrumb").append(copyThisB.attr("id", "selectB"));
//			}
//	});
	
//	$("#select3 dd a").click(function () {
//		$(this).addClass("selected").siblings().removeClass("selected");
//		if ($(this).hasClass("select-all")) {
//			$("#selectC").remove();
//		} else {
//			var copyThisC = $(this).clone();
//			if ($("#selectC").length > 0) {
//				$("#selectC a").html($(this).text());
//			} else {
//				$(".breadcrumb").append(copyThisC.attr("id", "selectC"));
//			}
//		}
//	});
//	$("#select4 dd a").click(function () {
//		$(this).addClass("selected").siblings().removeClass("selected");
//		if ($(this).hasClass("select-all")) {
//			$("#selectC").remove();
//		} else {
//			var copyThisC = $(this).clone();
//			if ($("#selectC").length > 0) {
//				$("#selectC a").html($(this).text());
//			} else {
//				$(".breadcrumb").append(copyThisC.attr("id", "selectD"));
//			}
//		}
//	});
	
//	$("#selectA").live("click", function () {
//		$(this).remove();
//	});
//	
//	$("#selectB").live("click", function () {
//		$(this).remove();
//	});
//	
//	$("#selectC").live("click", function () {
//		$(this).remove();
//	});
//	$("#selectD").live("click", function () {
//		$(this).remove();		
//	});

})

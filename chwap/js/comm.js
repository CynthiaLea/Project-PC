$(document).ready(function(){
	$(".search button").click(function(){
		$(".btn-list").toggle();
	});
	$(".share-friend").click(function(){
		$(".share").css("display","block");
	});
//	动态排序箭头
	$(".comm-filter dt").click(function(){				
		if($(".down").attr("src")=="images/down.png"){
			$(".down").attr("src","images/down_red.png");
		}else{
			$(".down").attr("src","images/down.png");
		}
		if($(".up").attr("src")=="images/up.png"){
			$(".up").attr("src","images/up_red.png");
		}else{
			$(".up").attr("src","images/up.png");
		}
	});
	//收藏
	$(".collect").click(function(){
		if($(this).find("img").attr("src")=="images/shoucang.png"){
			$(this).find("img").attr("src","images/shoucang-red.png");
			$(this).find("p").text("已收藏");
		}else{
			$(this).find("img").attr("src","images/shoucang.png");
			$(this).find("p").text("收藏");
		}
		
	});
	$(".choice-procu").click(function(){
		$(".selective-type").fadeIn("fast");
	});
	$(".sback").click(function(){
		$(this).closest(".selective-type").hide();
	});
	/*单选框*/
	var _pay=$(".check-address:has(:radio)");	
	 _pay.click(function(){
		_pay.removeClass("on");
		$(this).addClass("on");
		$(this).find(":radio").attr("checked",true);
	 });
	 var _pay2=$(".meth-intr:has(:radio)");	
	 _pay2.click(function(){
		_pay2.removeClass("radio-check");
		$(this).addClass("radio-check");
		$(this).find(":radio").attr("checked",true);
	 });
	 /*复选框*/
	 var _idpay=$(".search-add:has(:checkbox)");
	_idpay.click(function(){
	    var $chk=$(this).find("input:checkbox");
		if($(this).hasClass("check-btn")){
			$(this).removeClass("check-btn");
			$chk.attr("checked",false);
		} else {
			$(this).addClass("check-btn");
			$chk.attr("checked",true);
		}
	});
	 var _idpay2=$(".check:has(:checkbox)");
	_idpay2.click(function(){
	    var $chk2=$(this).find("input:checkbox");
		if($(this).hasClass("tick")){
			$(this).removeClass("tick");
			$chk2.attr("checked",false);
		} else {
			$(this).addClass("tick");
			$chk2.attr("checked",true);
		}
	});
	var _idpay3=$(".rec:has(:checkbox)");
	_idpay3.click(function(){
	    var $chk3=$(this).find("input:checkbox");
		if($(this).hasClass("consent")){
			$(this).removeClass("consent");
			$chk3.attr("checked",false);
		} else {
			$(this).addClass("consent");
			$chk3.attr("checked",true);
		}
	});
	var _idpay4=$(".agree:has(:checkbox)");
	_idpay4.click(function(){
	    var $chk4=$(this).find("input:checkbox");
		if($(this).hasClass("agree-clause")){
			$(this).removeClass("agree-clause");
			$chk4.attr("checked",false);
		} else {
			$(this).addClass("agree-clause");
			$chk4.attr("checked",true);
		}
	});
	var _idpay5=$(".check-eva:has(:checkbox)");
	_idpay5.click(function(){
	    var $chk5=$(this).find("input:checkbox");
		if($(this).hasClass("eva-tic")){
			$(this).removeClass("eva-tic");
			$chk5.attr("checked",false);
		} else {
			$(this).addClass("eva-tic");
			$chk5.attr("checked",true);
		}
	});
});
/*===================密码强度验证=============================*/
//CharMode函数
		//测试某个字符是属于哪一类.
		function CharMode(iN){
			if (iN>=48 && iN <=57) //数字
				return 1;
			if (iN>=65 && iN <=90) //大写字母
				return 2;
			if (iN>=97 && iN <=122) //小写
				return 4;
			else
				return 8; //特殊字符
		}
		//bitTotal函数
		//计算出当前密码当中一共有多少种模式
		function bitTotal(num){
			modes=0;
			for (i=0;i<4;i++){
				if (num & 1) modes++;
				num>>>=1;
			}
			return modes;
		}
		//checkStrong函数
		//返回密码的强度级别
		function checkStrong(sPW){
		if (sPW.length<=4)
			return 0; //密码太短
			Modes=0;
			for (i=0;i<sPW.length;i++){
				//测试每一个字符的类别并统计一共有多少种模式.
				Modes|=CharMode(sPW.charCodeAt(i));
			}
			return bitTotal(Modes);
		}
		//pwStrength函数
		//当用户放开键盘或密码输入框失去焦点时,根据不同的级别显示不同的颜色
		function pwStrength(pwd){
			O_color="#d9d9d9";
			L_color="#c32621";
			M_color="#FF9900";
			H_color="#33CC00";
			if (pwd==null||pwd==''){
			Lcolor=Mcolor=Hcolor=O_color;
			}
			else{
				S_level=checkStrong(pwd);
				switch(S_level) {
					case 0:
					Lcolor=Mcolor=Hcolor=O_color;
					case 1:
					Lcolor=L_color;
					Mcolor=Hcolor=O_color;
					break;
					case 2:
					Lcolor=Mcolor=M_color;
					Hcolor=O_color;
					break;
					default:
					Lcolor=Mcolor=Hcolor=H_color;
				}
			}
			document.getElementById("strength_L").style.background=Lcolor;
			document.getElementById("strength_M").style.background=Mcolor;
			document.getElementById("strength_H").style.background=Hcolor;
			//document.getElementsByClassName("color").style.color=bcolor;
			return;
		}

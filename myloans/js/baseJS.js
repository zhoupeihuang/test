$(function() {
	/*
	 * 通用的JS
	 * 作者：周佩煌
	 * 公司：小财迷
	 * */
	//通用的显示和隐藏 格式
	$(".headerBox li").click(function() {
		$(".contentBoxs li.contBox").hide();
		$(this).children("a").addClass("headerBanActive");
		$(this).siblings().find("a").removeClass("headerBanActive");
		var indexs = $(this).index();
		$('.contentBoxs').children("li").eq(indexs).fadeIn("slow");
	});
	//格式化金额
		$(".jine").formatMoney({
			n: 2,
			h: "元"
		});
	//通用的faTag 方法
	$(".faTag").click(function(){
		$(this).nextAll("dd").slideToggle("slow");
	})
})
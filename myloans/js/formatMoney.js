(function($) {
	/*
	 * 格式化 金额的插件 如果使用 可以不引用
	 * 作者：周佩煌
	 * 公司：小财迷
	 * */
	$.fn.formatMoney = function(options) { //定义插件的名称，formatMoney		
		$(this).each(function(val, i){
			var dft = {
				//以下为该插件的属性及其默认值
				s: $(this).text(), //值
				n: "2", //后面留几位
				h: "", //后缀
			};
			var ops = $.extend(dft, options);
			ops.h = ops.h != '' ? ops.h : '';
			if(ops.s!=""){
				ops.n = ops.n > 0 && ops.n <= 20 ? ops.n : 2;
				ops.s = parseFloat((ops.s + "").replace(/[^\d\.-]/g, "")).toFixed(ops.n) + "";
				var l = ops.s.split(".")[0].split("").reverse(),
					r = ops.s.split(".")[1];
				t = "";
				for (i = 0; i < l.length; i++) {
					t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
				}
				$(this).html(t.split("").reverse().join("") + "." + r + ops.h); 
			}
		})
	}
})(jQuery);
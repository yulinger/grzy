jQuery.fn.extend({
	test:function(){
		$(function(){
			   $(".one") .click(function(){
			   	$(".r1,.r2,.r3").hide();
						$(".right").show();
						
						
					
					
				});
			   $(".two").click(function(){
			   	$(".right,.r2,.r3").hide();
			   	$(".r1").show();
			   	
			   });
			   $(".fr").click(function(){
			   	$(".right,.r1,.r3").hide();
			   	$(".r2").show();
			   	
			   });
			   $(".fi").click(function(){
			   	$(".right,.r1,.r2").hide();
			   	$(".r3").show();
			   	
			   });
		});

	}
})

// JavaScript Document
$(document).ready(function(){
	$(".main_content_left>ul>li").mouseover(function(){
		var index=$(this).index();
		
		if(index==0){
			$("#one>a>img").attr("src","./images/list1_img_hover.png");
			$("#two>a>img").attr("src","./images/list2_img.png");
	
			}
		else if(index==1){
			$("#one>a>img").attr("src","./images/list1_img.png");
			$("#two>a>img").attr("src","./images/list2_img_hover.png");
			
			}
	
		
		$(this).parent().parent().siblings().children("div:visible").hide();
		$(this).parent().parent().siblings().children("div:eq("+index+")").show();
		
		});
	});
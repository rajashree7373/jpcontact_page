$(document).ready(function(){
	
	$(window).scroll(function(){
		if($(window).scrollTop() > 2)
		{
			$(".top_arow").fadeIn();
			$(".navbar").animate(1000).addClass("top_right_fx");
		}
		else
		{
			$(".top_arow").fadeOut();
			$(".navbar").animate(1000).removeClass("top_right_fx");
		}
	});
	$(".top_arow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});




	// Home Page Projects Section
	$(".pr_tb_ready_to_move").click(function(){
        $("#hPrready_to_move").fadeIn();
        $("#hProngoing").fadeOut();
        $("#hProngoing").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).siblings().removeClass("btn-primary");
    });
	$(".pr_tb_ongoing").click(function(){
        $("#hPrready_to_move").fadeOut();
        $("#hProngoing").fadeIn();
        $(this).addClass("btn-primary");
        $(this).siblings().removeClass("btn-primary");
	});
	



    $(".asp-active").click(function(){
        $("html").removeClass("responsive-menu-open");
        $(".responsive-menu-button").removeClass("is-active");
    });



	jQuery('.fadeinup').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
	    offset: 100    
	 });
	
	jQuery('.fadeindown').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100    
	 });
	jQuery('.bounceleft').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.bounceright').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.bounceup').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100    
	});	
	jQuery('.fadeinleft').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	});
	jQuery('.fadeinright').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
	    offset: 100    
	});
	
	jQuery('.slideinright').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated slideInRight', // Class to add to the elements when they are visible
	    offset: 100    
	});




		$(".navMenu").click(function(){
		
		$(".navMenu").fadeOut("slow");
		$(".navMenu").css("display","none");
		$(".navMenu1").fadeIn("slow");
		$(".navMenu1").css("display","initial");
		
		$(".menuPop").fadeIn("slow");
		$(".menuPop").css("display","initial");
		
		});
		
		
		$(".navMenu1").click(function(){
		$(".navMenu1").fadeOut("slow");
		$(".navMenu1").css("display","none");
		$(".navMenu").fadeIn("slow");
		$(".navMenu").css("display","initial");
		
		
		
		$(".menuPop").fadeOut("slow");
		$(".menuPop").css("display","none");
		
		
		});
	


});
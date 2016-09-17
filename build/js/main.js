
$(function(){
	$('#fullpage').fullpage();
	
	var portfolioRange = {start: $("#portfolio").offset().top , finish: ($("#portfolio").offset().top + $("#portfolio").outerHeight())- $(window).height()};
	
	// get the current window width
	winWidth = $(window).width();
	//hide extra portfolio on mobile
	$(".portfolio-item").each(function(i){
		if (i >= 1) {
			$(this).hide();
		}
	});
	
	//menu items click scrolling
	$("nav.menu-desktop a").on("click", function(){
		var clickedItem = $(this).attr("data-scroll");
		var offsetTop = $("section#"+clickedItem).offset().top;
		$('html, body').animate({
	        scrollTop: offsetTop-150
	    }, 400);

	});

	//headshot greeting animation
	$("img.head-shot").mouseenter(function(e){
		$("span.greetings").addClass("animated bounceIn");
		$("span.greetings").css("display", "block");
		setTimeout(function(){
			$("span.greetings").removeClass("animated bounceIn");
			$("span.greetings").css("display", "none");
			$(this).mouseout(function(){
				return;
			})
		}, 3000)
	});

	//seemore button click toggle
	$("#togglePortfolio").on("click", function(){
		if ($(this).hasClass("seeMore")) {
			console.log("show");
			$(".portfolio-item").each(function(i){
					$(this).slideDown();
				});
				$("#togglePortfolio").text('See Less');
				$("#togglePortfolio").addClass("seeLess");
				$("#togglePortfolio").removeClass("seeMore");
			}
		else if ($(this).hasClass("seeLess")) {
			console.log("hide");
			$(".portfolio-item").each(function(i){
				if (i >= 1) {
					$(this).slideUp()
				};
			});
			$("#togglePortfolio").text('See More');
			$("#togglePortfolio").addClass("seeMore");
			$("#togglePortfolio").removeClass("seeLess");
		}
	});

});

//fixed nav onresize
	$(window).on("resize", function(){
			console.log("onresize");
	winWidth = $(window).width();
	if ( winWidth >= 992) {
		$("header").addClass("fixed-nav");
		$(".title-col").hide();
	}
	else{
		$("header").removeClass("fixed-nav");
		$(".title-col").show();
	}
	});





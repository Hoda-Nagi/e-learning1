 // loading
 $(window).load(function() {
 	$(".loading,.spinner ").fadeOut(3000);
 });
 // end loading
 $(document).ready(function () {
 	// nicescroll
 	$('body').niceScroll({
     cursorcolor:"#e91e63"

	}
	);
	// end nicescroll
	// $('.carousel').carousel({
	// 	  interval:500
 //  });
	// $('.carousel').css("transation","all 0.3s ease")
	$(".select1").click(function () {
		$("this").css("borderWidth","0")
		// body...
	});
	console.log($(window).width());

	$(window).scroll(function() {
		if($(this).scrollTop() >=21){
			$(".navbar ,.about-nav").css("top","-21px");
			$(".navbar").css("borderBottom","2px solid #ddd");
		    $(" .navbar .navbar-brand").css("fontSize","33px");
		    $(".header").css("display","none");
		    $(".search").css("top","83px");
		    $(".search").css("position","fixed");

		}


		else{
			$(".navbar").css("top","24px");
			$(".navbar").css("borderBottom","none");
			$(" .navbar .navbar-brand").css("fontSize","39px");
		    $(".header").css("display","block");
		    $(".search").css("top","127px");
		     $(".search").css("position","absolute");

		}
	});
	
	$(".glyphicon-search").click(function() {
		$(".search").slideToggle();
	});

 // end navigator
 // show scroll button
 $(window).scroll(function() {
 	if ($(window).scrollTop()>= 700) {
 		$(".scrolltop").show();
 	}
 	else{
 		$(".scrolltop").hide();
 	}
 });
// click to scrollTop
  $(".scrolltop").click(function() {
  	$('html,body').animate({scrollTop:"0"},600);
  })



 });
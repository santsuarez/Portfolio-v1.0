//flecha para volver al inicio
$(function(){
	$("#arrow").hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 150)
		{
			$("#arrow").show();
		}
		else{
			$("#arrow").hide();
		}
	});
	$("#arrow").on("click", function(){
		$("html, body").animate({scrollTop:0}, 0700);
	});
});
//filtrado mediante radio buttons
$(document).ready(function(){
	$("#all").click(function(){
		if ($("#all").is(':checked')) {
			$("#graphicDesign").fadeIn();
			$("#webDesign").fadeIn();
			$("#brands").fadeIn();
			$("#webDev").fadeIn();
		}
	});
	$("#graphic-design").click(function(){
		if ($("#graphic-design").is(':checked')) {
			$("#graphicDesign").fadeIn();
			$("#webDesign").fadeOut();
			$("#brands").fadeOut();
			$("#webDev").fadeOut();
		}
	});
	$("#web-design").click(function(){
		if ($("#web-design").is(':checked')) {
			$("#webDesign").fadeIn();
			$("#graphicDesign").fadeOut();
			$("#brands").fadeOut();
			$("#webDev").fadeOut();
		}
	});
	$("#brand").click(function(){
		if ($("#brand").is(':checked')) {
			$("#brands").fadeIn();
			$("#graphicDesign").fadeOut();
			$("#webDesign").fadeOut();
			$("#webDev").fadeOut();
		}
	});
	$("#web-dev").click(function(){
		if ($("#web-dev").is(':checked')) {
			$("#webDev").fadeIn();
			$("#graphicDesign").fadeOut();
			$("#webDesign").fadeOut();
			$("#brands").fadeOut();
		}
	});
});
//Smooth scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
//Loader
function hideloader(){
	document.getElementById("loader").style.display = "none";
	document.getElementById("content").style.display = "Block";
}
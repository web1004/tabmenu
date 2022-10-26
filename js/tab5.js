$(document).ready(function(){

  $("dl dt").click(function(){

    $(this).siblings("dd").hide("slow");
    // $(this).find("+dd").show("slow");
    $(this).next().show("slow");
		$(this).siblings("dt").removeClass("selected"); 
    $(this).addClass("selected"); 

    let dataImage = $(this).attr("data-background");
    $(".image img").attr('src',dataImage).hide().fadeIn();

  });

});

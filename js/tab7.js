$(document).ready(function(){

  $(".tab li").click(function() {

    numh = $(this).index();
    moveh = +70 * numh; //세로높이 70px씩 증가됨

    $(".tab-header .tab-highlight").animate({top: moveh});
    $(this).siblings().removeClass("active"); 
    $(this).addClass("active"); 

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#" + result).addClass("active");

  });

});
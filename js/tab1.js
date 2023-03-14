$(document).ready(function(){

  $(".testimonial-pic img").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".testimonial .content").removeClass("active");
    $("#"+$(this).attr("data-alt")).addClass("active"); //$("#tab1").addClass("active")
    //#tab1== $(this).attr("data-alt")
  });

});

// siblings() : 앞의 선택자를 제외한 나머지 요소를 말함
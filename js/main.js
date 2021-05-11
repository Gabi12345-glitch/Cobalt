$(document).ready(function(){
  $("button").click(function(){
    $("header").addClass("active");
    $("main").addClass("active");
    $(".overlay__bg").addClass("active");
    $(".item__contact--us").addClass("active");
    $("footer").addClass("active");
  })
  $(".close").click(function(){
    $("header").removeClass("active");
    $("main").removeClass("active");
    $(".overlay__bg").removeClass("active");
    $(".item__contact--us").removeClass("active");
    $("footer").removeClass("active");
  })
  $(".overlay__bg").click(function(){
    $("header").removeClass("active");
    $("main").removeClass("active");
    $(".overlay__bg").removeClass("active");
    $(".item__contact--us").removeClass("active");
    $("footer").removeClass("active");
  })
  $(".btn__contact--send").click(function(){
    $(".item__contact--us.active").removeClass("active");
    $(".item__thank").addClass("active");
    
  })



    $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
              nav: true,
              dots: true,
              loop: true,
            
    });
  });
});


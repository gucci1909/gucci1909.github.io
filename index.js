$(document).ready(function(){
 $(window).scroll(function(){
    if(this.scrollY > 1980){
      $('.navbar').addClass("remove");
    }  
    if(this.scrollY >20){
      $('.navbar').addClass("sticky");
    }
    else{
        $(`.navbar`).removeClass("sticky");
        $('.navbar').removeClass("remove");

    }
 })
 $('.menu-btn').click(function(){
    $(`.navbar .menu`).toggleClass("active");
    $(`.menu-btn i`).toggleClass("active")
 })

 var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
    $(".owl-nav").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      fontSize: "300px",
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);

})
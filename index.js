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
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");

    }
    else{
      $('.scroll-up-btn').removeClass("show")
    }
 })
 $(`.scroll-up-btn`).click(function(){
  $(`html`).animate({scrollTop:0})
 })
 $('.menu-btn').click(function(){
    $(`.navbar .menu`).toggleClass("active");
    $(`.menu-btn i`).toggleClass("active")
 })

 var typed = new Typed(".typing",{
  strings : ["Full Stack Developer"],
  typeSpeed :100,
  backSpeed : 60,
  loop:true
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
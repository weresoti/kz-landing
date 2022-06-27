document.addEventListener("click", function (event) {
   if (event.target.closest(".header__burger")) {
     document.querySelector(".header-bottom__menu").classList.toggle("header-bottom__menu-active");
     document.querySelector(".header__burger").classList.toggle("active");
     document.querySelector(".mobile-overlay").classList.toggle("active");
     $("body").toggleClass("lock");
   }
   if (event.target.closest(".header-bottom__menu-link") || (event.target.closest(".mobile-overlay"))) {
       document.querySelector(".header-bottom__menu").classList.remove("header-bottom__menu-active");
       document.querySelector(".header__burger").classList.remove("active");
       document.querySelector(".mobile-overlay").classList.toggle("active");
       document.querySelector("body").classList.remove("lock");
   }
 })

 $(function() {
   let header = $('.header-fixed');
    
   $(window).scroll(function() {
     if($(this).scrollTop() > 100) {
      header.addClass('active');
     } else {
      header.removeClass('active');
     }
   });
});

$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      /* navText : ["",""], */
      navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
      dots: false,
      responsive:{
         320:{
            items:1
         },
         842:{
            items:2
         }, 
         1024:{
            items:2
         }

      }
   });
 });

 new WOW().init();
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      /* navText : ["",""], */
      navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
      dots: false,
      responsive:{
         0:{
            items:1
         },
         600:{
            items:1
         },
         1420:{
            items:2
         }
      }
   });
 });
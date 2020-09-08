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

$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name'
});

/* Валидация формы регистрации */
function isEmail(email) {
  
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   return regex.test(email);
   
}


$(document).ready(function(){
    $('#form-popup').validate({
        rules: {
            login: {
                required: true,
                minlength:3
            },
            email: {
                required: true,
                email: true
            },
            password: { 
                required: true,
                minlength: 6,
                maxlength: 10,
            },
            passwordConfirm: { 
                equalTo: "#password",
                minlength: 6,
                maxlength: 10,
            }

        },
        messages: {
            login: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 3-х символов в поле 'Имя'"
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email" 
            },
            password: { 
                required:"Введите пароль",
                maxlength: "Символов не более 10",
                minlength: "Введите не менее 6-и символов"
            },
            passwordConfirm: {
                minlength: "Введите не менее 6-и символов",
                maxlength: "Символов не более 10",
                equalTo: "Не совпадает! Проверьте правильность набора",
            },
        },

    });
    $('#form-login').validate({
        rules: {
            email: {
                email: true
            },

        },
        messages: {
            email: {
                email: "Необходим формат адреса email" 
            },

        }
    });
}); 

jQuery(function($){
    $("#phone").mask("(999) 999-99-99");
});

$(document).ready(function(){

        $('.mobile__menu').click(function() {
            console.log ('клик по кнопке');
            $(".mobile__menu").toggleClass("activity");
            $('.header__nav').addClass('nav-open').slideToggle('300');
        });


});

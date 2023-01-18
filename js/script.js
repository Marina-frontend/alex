//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu, .menu__body').toggleClass('menu-open');
        $('body'),toggleClass('lock');
    });

    new Swiper('.portfolio__slider', {
        //Arrows
        slidesPerView: 2,
        navigation: {
            nextEl: '.portfolio__arrow_right',
            prevEl:'.portfolio__arrow_left'
        }
    });
});






$(document).ready(function(){
    new Swiper('.portfolio__slider', {
        slidesPerView: 3,
        resizeObserver: false,
        spaceBetween: 56,
        navigation: {
            nextEl: '.portfolio__arrow_right',
            prevEl:'.portfolio__arrow_left',
        }
    });
});
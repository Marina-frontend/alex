$(document).ready(function(){
    new Swiper('.portfolio__slider', {
        spaceBetween: 56,
        initialSlide: 1,
        navigation: {
            nextEl: '.portfolio__arrow_right',
            prevEl:'.portfolio__arrow_left',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                autoHeight: true,
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 56,
            },

        }
    });
});
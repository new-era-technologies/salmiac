'use strict';

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: window.matchMedia("(min-width: 1200px)").matches ? 3 : 1,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
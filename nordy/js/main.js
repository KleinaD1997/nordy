let $carousel = $('#my-carousel').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    pageDots: false
});

let $carousel2 = $('#my-carousel2').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    pageDots: false
});

let $carousel3 = $('#my-carousel3').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    pageDots: false
});
jQuery(document).ready(function($) {
$('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
});
});


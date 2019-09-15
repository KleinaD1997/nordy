let $carousel = $('#my-carousel').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    wrapAround: true,
    pageDots: false,
});

let $carousel2 = $('#my-carousel2').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    wrapAround: true,
    pageDots: false,
});

let $carousel3 = $('#my-carousel3').flickity({
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    contain: true,
    wrapAround: true,
    pageDots: false,

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
$('.carousel1-prev').on( 'click', function() {
            $carousel.flickity('previous');
        });
        $('.carousel1-next').on( 'click', function() {
          $carousel.flickity('next');
        });
$('.carousel2-prev').on( 'click', function() {
            $carousel2.flickity('previous');
        });
        $('.carousel2-next').on( 'click', function() {
          $carousel2.flickity('next');
        });
$('.carousel3-prev').on( 'click', function() {
            $carousel3.flickity('previous');
        });
        $('.carousel3-next').on( 'click', function() {
          $carousel3.flickity('next');
        });


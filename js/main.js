$(document).ready(function() {

  // --- SLIDER ---

    $('.content__workmans').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        adaptiveHeight: true,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

// --- BURGER ---

      $(".header__burger").click(function(event) {
        $(".header__burger, .header__nav").toggleClass("active")

      });

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
    breakpoints: {
    0: {
      slidesPerView: 1,
        spaceBetween: 10,
    },
    480: {
      slidesPerView: 2, 
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 16,
    },

  } 

});








const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    keyboard: {
        enabled: true,
    },
    effect: "coverflow",
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev'
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
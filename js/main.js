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
ymaps.ready(init);
function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [7.57375451, 79.80072573],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 15
      });
  }  
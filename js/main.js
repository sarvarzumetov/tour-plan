var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  effect: "coverflow",
});

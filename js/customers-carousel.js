var swiper = new Swiper('.customers__swiper__container', {
  pagination: '.customers__swiper__pagination',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 0,
    stretch: 573,
    depth: 50,
    modifier: 1,
    slideShadows : false
  },
  loop: true
});
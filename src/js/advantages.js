import Swiper from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },

  breakpoints: {
    320: {
      direction: 'horizontal',
      slidesPerView: 1,
    },

    1200: {
      direction: 'vertical',
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

document
  .querySelector('.swiper-button-next-custom')
  .addEventListener('click', () => {
    swiper.slideNext();
  });

document
  .querySelector('.swiper-button-prev-custom')
  .addEventListener('click', () => {
    swiper.slidePrev();
  });

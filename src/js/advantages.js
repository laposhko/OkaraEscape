import Swiper from 'swiper';
import 'swiper/css/bundle';
// import 'swiper/scss';
// import 'swiper/scss/navigation';

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
      height: '320px',
      //   autoHeight: true,
    },
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  swiper.slideNext();
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  swiper.slidePrev();
});

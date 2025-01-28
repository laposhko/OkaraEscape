if (
  !('ontouchstart' in window) &&
  window.matchMedia('(min-width: 1200px)').matches
) {
  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.gallery-item');
    let currentIndex = 2;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'left', 'next', 'right');

        if (index === currentIndex) {
          slide.classList.add('active');
        } else if (
          index ===
          (currentIndex - 1 + slides.length) % slides.length
        ) {
          slide.classList.add('prev');
        } else if (
          index ===
          (currentIndex - 2 + slides.length) % slides.length
        ) {
          slide.classList.add('left');
        } else if (index === (currentIndex + 1) % slides.length) {
          slide.classList.add('next');
        } else if (index === (currentIndex + 2) % slides.length) {
          slide.classList.add('right');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    }

    // Event listeners for navigation
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    });
    //Event listener for click scroll
    const gallerySection = document.getElementById('gallery');
    gallerySection.addEventListener('click', event => {
      const screenWidth = window.innerWidth;
      const clickX = event.clientX;

      if (clickX > screenWidth / 2) {
        nextSlide();
      } else {
        prevSlide();
      }
    });
    updateSlides();
  });
}

const slides = document.querySelectorAll('.slide');
let currentIndex = 1; // Start with the second image (centered)

function updateSlider() {
  slides.forEach((slide, index) => {
    const offset = index - currentIndex;
    slide.style.transform = `translateX(${offset * 320}px) scale(${
      index === currentIndex ? 1.2 : 1
    })`;
    slide.style.opacity = index === currentIndex ? 1 : 0.5;
    slide.style.zIndex = index === currentIndex ? 2 : 1;
  });
}

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

updateSlider();

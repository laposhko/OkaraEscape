document
  .querySelector('.uniqueness-list')
  .addEventListener('click', function () {
    const items = document.querySelectorAll(
      '.uniqueness-list .uniqueness-item'
    );

    let currentIndex = [...items].findIndex(item =>
      item.classList.contains('visible-element')
    );

    if (currentIndex === -1) return;

    let currentItem = items[currentIndex];
    let nextIndex = (currentIndex + 1) % items.length;
    let nextItem = items[nextIndex];
    let animationName = window.matchMedia('(min-width: 1024px)').matches
      ? 'moveOut-desktop'
      : 'moveOut-mobile';
    currentItem.style.animation = `${animationName} 0.5s forwards`;
    currentItem.addEventListener('animationend', function handleAnimationEnd() {
      currentItem.classList.remove('visible-element');
      currentItem.style.animation = ''; // Reset animation
      nextItem.classList.add('visible-element');
      nextItem.style.animation = 'fadeIn 0.5s forwards';
      currentItem.removeEventListener('animationend', handleAnimationEnd);
    });
  });

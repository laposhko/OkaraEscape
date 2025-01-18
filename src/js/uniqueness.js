document
  .querySelector('.uniqueness-list')
  .addEventListener('click', function () {
    const items = document.querySelectorAll(
      '.uniqueness-list  .uniqueness-item'
    );
    let currentIndex = [...items].findIndex(item =>
      item.classList.contains('visible-element')
    );
    items[currentIndex].classList.remove('visible-element');
    let nextIndex = (currentIndex + 1) % items.length;
    items[nextIndex].classList.add('visible-element');
  });

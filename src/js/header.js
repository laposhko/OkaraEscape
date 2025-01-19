const headerBtn = document.querySelector('.header-btn');
const backdrop = document.querySelector('.backdrop');
const links = document.querySelectorAll('.mobmenu-link');
function showMobileMenu() {
  backdrop.classList.remove('backdrop--hide');
  backdrop.classList.add('backdrop--show');
}
function closeMobileMenu(event) {
  if (event.target === event.currentTarget) {
    backdrop.classList.remove('backdrop--show');
    backdrop.classList.add('backdrop--hide');
  }
}
headerBtn.addEventListener('click', showMobileMenu);
backdrop.addEventListener('click', closeMobileMenu);
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const wishedSection = document.getElementById(link.getAttribute('href'));
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
    closeMobileMenu(event);
  });
});

//header links smooth scroll

const headerLinks = document.querySelectorAll('.header-link');
headerLinks.forEach(link =>
  link.addEventListener('click', event => {
    event.preventDefault();
    const wishedSection = document.getElementById(link.getAttribute('href'));
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
  })
);

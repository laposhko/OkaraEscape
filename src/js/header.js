const headerBtn = document.querySelector('.header-btn');
const backdrop = document.querySelector('.backdrop');
const links = document.querySelectorAll('.mobmenu-link');
function showMobileMenu() {
  backdrop.classList.add('backdrop--show');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu(event) {
  if (event.target === event.currentTarget) {
    backdrop.classList.remove('backdrop--show');
    document.body.style.overflow = 'auto';
  }
}
headerBtn.addEventListener('click', showMobileMenu);
backdrop.addEventListener('click', closeMobileMenu);
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const wishedSection = document.getElementById(targetId);

    closeMobileMenu(event);

    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//header links smooth scroll

const headerLinks = document.querySelectorAll('.header-link');
headerLinks.forEach(link =>
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1); 
    const wishedSection = document.getElementById(targetId);

    if (wishedSection) {
      wishedSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  })
);

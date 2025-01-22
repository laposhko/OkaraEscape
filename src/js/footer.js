const footerLinks = document.querySelectorAll('.footer-scroll');
footerLinks.forEach(link =>
  link.addEventListener('click', event => {
    event.preventDefault();
    const wishedSection = document.getElementById(link.getAttribute('href'));
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
  })
);

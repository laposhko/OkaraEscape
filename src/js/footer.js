// const footerLinks = document.querySelectorAll('.footer-scroll');
// footerLinks.forEach(link =>
//   link.addEventListener('click', event => {
//     event.preventDefault();
//     const navigateId = link.getAttribute('href');
//     const wishedSection =
//       document.getElementById(navigateId) ||
//       document.getElementById(link.getAttribute('href'));

//     wishedSection.scrollIntoView({
//       behavior: 'smooth',
//     });

//     if (window.location.pathname !== '/index.html') {
//       window.location.href = '/index.html';
//     }
//   })
// );

// console.log(window.location.pathname !== '/index.html');

const footerLinks = document.querySelectorAll('.footer-scroll');

footerLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href').substring(1);
    const currentPath = window.location.pathname;

    if (
      currentPath === '/index.html' ||
      currentPath === '/' ||
      currentPath.endsWith('index.html')
    ) {
      event.preventDefault();
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } else {
      window.location.href = `/index.html#${targetId}`;
    }
  });
});

const navMenu = document.querySelector('.nav_toggler');
const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const body = document.querySelector('body');

navOpen.addEventListener('click', () => {
  navMenu.setAttribute('data-toggled', 'true');
  body.style.overflow = 'hidden';
});

navClose.addEventListener('click', () => {
  navMenu.setAttribute('data-toggled', 'false');
  body.style.overflow = 'scroll';
});

const menu = document.querySelector('.main-nav');
const btnOpen = document.querySelector('.main-nav__open');
const btnClose = document.querySelector('.main-nav__close');

btnOpen.addEventListener('click', () => {
  menu.classList.add('main-nav--opened');
});

btnClose.addEventListener('click', () => {
  menu.classList.remove('main-nav--opened');
});

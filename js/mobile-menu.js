const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const backdrop = document.querySelector('.backdrop');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
window.addEventListener('keydown', clickEscape);    
backdrop.addEventListener('click', clickBackdrop);

function toggleMenu() {
  
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  backdrop.classList.toggle('is-hidden');

  const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  
  bodyScrollLock[scrollLockMethod](document.body);
};

function clickEscape (evt) {
    if (evt.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMenu();
    }
}
  
function clickBackdrop(evt) {
    if (evt.target === backdrop) {
        toggleMenu();
    }
}


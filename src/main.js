document.addEventListener('pointerup', event => {
  const interactiveElement = event.target.closest(
    '.button, .header-social-link, .mobile-menu-social-link, .footer-social-link'
  );

  if (interactiveElement) {
    interactiveElement.blur();
  }
});

const mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.header-menu-button');
const closeMenuButton = document.querySelector('.mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav-link');
const desktopMedia = window.matchMedia('(min-width: 1280px)');

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  closeMenuButton.focus();
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  menuButton.focus();
}

menuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);

mobileMenu.addEventListener('click', event => {
  if (!event.target.closest('.mobile-menu-panel')) {
    closeMobileMenu();
  }
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMobileMenu();
  }
});

desktopMedia.addEventListener('change', event => {
  if (event.matches && mobileMenu.classList.contains('is-open')) {
    closeMobileMenu();
  }
});

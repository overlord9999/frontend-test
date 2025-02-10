const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

// Ensure modal is closed on page load (Improved, need to change)
const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// Event listeners for open and close buttons
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

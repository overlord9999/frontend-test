const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Ensure modal is closed on page load (Improved, need to change)
const toggleModal = () => modal.classList.toggle('is-hidden');

// Event listeners for open and close buttons
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

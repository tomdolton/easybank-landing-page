// -----------------------------------------------------------------------------
// Mobile nav dropdown toggle
// -----------------------------------------------------------------------------

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__menu");
const modalBackground = document.querySelector(".modal-background");

// Toggles "active" classes on nav elements to view or hide them
// Called when hamburger button is clicked
function toggleNav() {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("nav__menu--active");
  modalBackground.classList.toggle("modal-background--active");
}

// If model background is clicke when open, it closes
window.onclick = function (e) {
  if (e.target == modalBackground) {
    toggleNav();
  }
}
// -----------------------------------------------------------------------------
// Mobile nav dropdown toggle
// -----------------------------------------------------------------------------

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__menu");
const modalBackground = document.querySelector(".modal-background");



// Toggles "active" classes on nav elements to view or hide them
function toggleNav() {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("nav__menu--active");
  modalBackground.classList.toggle("modal-background--active");
}

// Removes "active" classes on nav elements to hide them
function closeNav() {
  hamburger.classList.remove("hamburger--active");
  menu.classList.remove("nav__menu--active");
  modalBackground.classList.remove("modal-background--active");
}



// Toggle menu when hamburger is clicked
hamburger.addEventListener("click", toggleNav);

// If modal background is clicked when open, menu closes
window.onclick = (e) => {
  if (e.target == modalBackground) closeNav();
}

// If window is resized, menu closes
window.onresize = () => closeNav();
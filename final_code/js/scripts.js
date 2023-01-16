// 1. Add the current year to the footer
const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// 2. Add proper styling to the header when the user scrolls down
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--on-scroll');
  } else {
    header.classList.remove('header--on-scroll');
  }
});

// 3. Add hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav-list');
hamburger.addEventListener('click', () => {
  console.log('clicked');
  hamburger.classList.toggle('hamburger--active');
  navMenu.classList.toggle('header__nav-list--active');
});

// 4. Add disable functionality to the hamburger menu when the user clicks on a link
const navLinks = document.querySelectorAll('.header__nav-list li a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('hamburger--active');
    navMenu.classList.remove('header__nav-list--active');
  });
});

//5. Add clearing form after submission
const form = document.querySelector('.contact__form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

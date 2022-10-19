const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-nav');
const logo = document.querySelector('.nav-logo-link');
const bars = document.querySelector('.bars');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    logo.classList.toggle('active');
    bars.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('active');
  }));


  document.querySelectorAll('.close-button').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('active');
  }));
const tagline = document.querySelector('.tagline');
const text = "Creative Developer & Designer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    tagline.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}


// dark mode
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});

// Show/hide back-to-top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamically set the current year
document.getElementById('currentYear').textContent = new Date().getFullYear();



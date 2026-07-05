document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// Navbar glass scroll effect
const nav = document.querySelector(".nav-inner");

window.addEventListener("scroll", () => {
  if (!nav) return;

  if (window.scrollY > 10) {
    nav.style.transform = "translateY(-2px)";
    nav.style.boxShadow = "0 20px 60px rgba(0,0,0,0.55)";
    nav.style.background = "rgba(255,255,255,0.08)";
  } else {
    nav.style.transform = "translateY(0)";
    nav.style.boxShadow = "0 10px 40px rgba(0,0,0,0.35)";
    nav.style.background = "rgba(255,255,255,0.06)";
  }
});


// Active nav link highlight on scroll
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));

      const active = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );

      if (active) active.classList.add('active');
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(section => observer.observe(section));
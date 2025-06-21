// Smooth scroll and navbar highlight
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight + 1,
          behavior: 'smooth'
        });
      }
      // Close mobile menu on click
      document.getElementById('navLinks').classList.remove('show');
    });
  });
  
  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
      if (window.pageYOffset >= sectionTop - 10) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Hamburger menu for mobile
  const hamburger = document.getElementById('hamburger');
  const navLinksMenu = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('show');
  });
  
  // Animated transitions on scroll
  const revealElements = document.querySelectorAll('.fade-in, .slide-in, .section');
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // Optional: Close navbar when clicking outside on mobile
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinksMenu.contains(e.target)) {
      navLinksMenu.classList.remove('show');
    }
  });

  // JavaScript

function showThanks() {
  const msg = document.getElementById('thankyou-message');
  msg.classList.remove('hidden');
  setTimeout(() => {
    msg.classList.add('visible');
  }, 50);
}
/**
 * PHASICA — EDITORIAL INTERACTION CONTROLLER
 * Pure Vanilla JavaScript for Navigation Overlay & Editorial Motion
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Menu Overlay Elements
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuLinks = document.querySelectorAll('.menu-nav-link, .menu-footer-link');

  // Toggle Menu Functionality
  function openMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.add('is-active');
    menuOverlay.setAttribute('aria-hidden', 'false');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('is-active');
    menuOverlay.setAttribute('aria-hidden', 'true');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openMenu);
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  // Close menu on link click
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on ESC keypress
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Restrained Editorial Reveal Motion via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.fade-in-up');
  revealElements.forEach(el => revealObserver.observe(el));
});

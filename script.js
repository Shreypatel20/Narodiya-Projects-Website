// =========================================================
// NARODIYA PROJECTS — site behavior
// Kept plain/vanilla on purpose so it's easy to read line by
// line while you're learning. Each section below does one job.
// =========================================================

// ---- 1. Mobile nav toggle ----
// Grabs the hamburger button and the nav menu, and shows/hides
// the menu (via the "open" CSS class) every time it's clicked.
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu automatically once a link is tapped,
// so the menu doesn't stay open after navigating to a section.
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ---- 2. Footer year ----
// Fills in the current year automatically so you never have to
// remember to update the copyright line by hand.
document.getElementById('year').textContent = new Date().getFullYear();

// ---- 3. Quote form ----
// The form now posts directly to Formspree (see the action="..."
// attribute on the <form> tag in index.html), so no JavaScript is
// needed here anymore. The browser handles the submit natively:
// visitor fills it out, hits Send, Formspree emails you the entry
// and redirects the visitor to the page set in the form's "_next"
// hidden field.

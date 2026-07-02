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
// This form has no backend yet. On submit, it builds a plain-text
// summary of the answers and opens the visitor's email app with
// everything pre-filled, addressed to your business inbox.
//
// When you're ready to collect submissions without opening an email
// app (recommended once the site is live), replace this block with
// a form service like Formspree or FormSubmit — happy to wire that
// up whenever you want.
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the default full-page form submit

  const data = new FormData(quoteForm);

  const subject = `Quote request: ${data.get('equipment')} — ${data.get('name')}`;

  const body = [
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Equipment needed: ${data.get('equipment')}`,
    `Site location: ${data.get('location')}`,
    `Rental duration: ${data.get('duration') || 'Not specified'}`,
    `Project details: ${data.get('details') || 'None provided'}`
  ].join('\n');

  const mailtoLink = `mailto:narodiyaprojects@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});

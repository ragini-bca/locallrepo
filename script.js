// ------------------------------
// 🔹 HAMBURGER & MOBILE MENU
// ------------------------------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // X animation
  navLinks.classList.toggle('show');    // show mobile menu
});

// ------------------------------
// 🔹 MOBILE DROPDOWN (Courses)
// ------------------------------
const dropdownToggle = document.getElementById('courses-toggle');
const dropdown = dropdownToggle?.parentElement;

dropdownToggle?.addEventListener('click', (e) => {
  // Only activate on mobile
  if (window.innerWidth <= 768) {
    e.preventDefault();  // prevent page jump
    dropdown.classList.toggle('open'); // open/close submenu
  }
});

// ------------------------------
// 🔹 CLOSE MENU WHEN LINK CLICKED (MOBILE)
// ------------------------------
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
      dropdown.classList.remove('open');
    }
  });
});

// ------------------------------
// 🔹 OPTIONAL: CLOSE MOBILE MENU ON RESIZE TO DESKTOP
// ------------------------------
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
    dropdown.classList.remove('open');
  }
});

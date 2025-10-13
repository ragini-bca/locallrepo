document.addEventListener("DOMContentLoaded", function() {
    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Dropdown toggle (for mobile and desktop click)
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // prevent default link navigation
            const dropdownContent = toggle.nextElementSibling;
            dropdownContent.classList.toggle('show'); // toggle visibility
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(e) {
        dropdownToggles.forEach(toggle => {
            const dropdownContent = toggle.nextElementSibling;
            if (!toggle.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Mobile dropdown toggle
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdownContent = toggle.nextElementSibling;
      dropdownContent.classList.toggle('show');
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function(e) {
    dropdownToggles.forEach(toggle => {
      const dropdownContent = toggle.nextElementSibling;
      if (!toggle.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  });
});
onclick="location.href='courses/bca.html'"

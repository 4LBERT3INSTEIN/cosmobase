// --- Wait for the DOM to be fully loaded ---
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});

/**
 * Handles the logic for showing and hiding the mobile navigation menu.
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.menu-toggle');

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the menu and the hamburger icon
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active'); // Add this if you want to animate the hamburger to an 'X'
        
        // Update ARIA attribute for accessibility
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close the menu if a user clicks a link (helpful for single-page style navigation)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            hamburger.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
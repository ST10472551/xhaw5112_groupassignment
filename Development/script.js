// Only essential functionality remains
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
});

// Setup Mobile Menu - Only essential JS remains
function setupMobileMenu() {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (toggleButton && mobileNav) {
        toggleButton.addEventListener('click', () => {
            const isOpen = !mobileNav.classList.contains('hidden');
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
}

function openMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileNav && menuIcon && closeIcon) {
        mobileNav.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileNav && menuIcon && closeIcon) {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileNav = document.getElementById('mobile-nav');
    const toggleButton = document.getElementById('mobile-menu-toggle');
    
    if (mobileNav && !mobileNav.classList.contains('hidden') && 
        !mobileNav.contains(e.target) && 
        !toggleButton.contains(e.target)) {
        closeMobileMenu();
    }
});
const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

// Change menu style when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Change menu style on menu item hover
const menuItems = document.querySelectorAll('#navbar a');
menuItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#007BFF';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = '#333';
    });
});

// Sticky Navigation
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reservation Form Submission Interaction
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = reservationForm.querySelector('button');
    const originalText = submitBtn.innerText;
    
    submitBtn.innerText = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Grazie! Your reservation request has been sent. We will confirm via email shortly.');
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        reservationForm.reset();
    }, 1500);
});

// Menu Item Hover Effects (Optional Enhancement)
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Any specific hover logic can go here
    });
});

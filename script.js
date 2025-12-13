// Navigation functionality
const navLinks = document.querySelectorAll('.nav-links a, .btn');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Add active class to target section
        document.getElementById(targetPage).classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value
        };
        
        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted with data:', formData);
        
        // Hide form and show success message
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form and show it again after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);
    });
}

// Smooth animation for cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all cards and steps
document.querySelectorAll('.about-card, .artisan-card, .step, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Book button functionality
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Booking feature coming soon! This will redirect to the booking page.');
    });
});
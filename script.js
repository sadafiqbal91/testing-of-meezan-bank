document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Login button click effect
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
        loginBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            loginBtn.style.transform = 'translateY(-2px)';
            alert('Redirecting to secure login...');
        }, 150);
    });

    // Card hover audio feedback (optional/silent for now)
    const cards = document.querySelectorAll('.card-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle interaction logic if needed
        });
    });
});

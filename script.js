// DOM Elements
const modal = document.getElementById('waitlistModal');
const modalClose = document.querySelector('.modal-close');
const ctaButtons = document.querySelectorAll('.cta-button, .primary-button');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const waitlistForm = document.querySelector('.waitlist-form');

// Modal Functionality
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners for Modal
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .pricing-card, .testimonial-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Form Handling
waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form elements
    const nameInput = waitlistForm.querySelector('input[type="text"]');
    const emailInput = waitlistForm.querySelector('input[type="email"]');
    const languageSelect = waitlistForm.querySelector('select');
    const submitButton = waitlistForm.querySelector('button[type="submit"]');
    
    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const language = languageSelect.value;
    
    // Basic validation
    if (!name) {
        showError('Please enter your name');
        nameInput.focus();
        return;
    }
    
    if (!email) {
        showError('Please enter your email address');
        emailInput.focus();
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    if (!language) {
        showError('Please select your target language');
        languageSelect.focus();
        return;
    }
    
    // Clear any previous errors
    clearErrors();
    
    // Simulate form submission
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showSuccessMessage(name, email, language);
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        waitlistForm.reset();
        
        // Track successful submission
        trackEvent('waitlist_submitted', {
            name: name,
            email: email,
            language: language
        });
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(message) {
    clearErrors();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorDiv.style.cssText = `
        color: #ef4444;
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.5rem;
        padding: 0.75rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    const form = document.querySelector('.waitlist-form');
    form.insertBefore(errorDiv, form.firstChild);
}

// Clear error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}

// Success Message
function showSuccessMessage(name, email, language) {
    const modalBody = document.querySelector('.modal-body');
    const originalContent = modalBody.innerHTML;
    
    modalBody.innerHTML = `
        <div class="success-message text-center">
            <div class="success-icon">🎉</div>
            <h3>Welcome to Linguviq!</h3>
            <p>Thank you, ${name}! You've been added to our waitlist.</p>
            <p>We'll notify you at <strong>${email}</strong> when we launch.</p>
            <p>Target language: <strong>${language}</strong></p>
            <div class="success-benefits">
                <h4>What's next?</h4>
                <ul>
                    <li>📧 Early access notification</li>
                    <li>🎁 Exclusive launch benefits</li>
                    <li>📱 App preview access</li>
                </ul>
            </div>
            <button class="primary-button" onclick="closeModal()">
                <i class="fas fa-check"></i>
                Got it!
            </button>
        </div>
    `;
    
    // Reset modal content after closing
    modal.addEventListener('click', function resetModal() {
        if (event.target === modal) {
            modalBody.innerHTML = originalContent;
            modal.removeEventListener('click', resetModal);
        }
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.textContent.replace(/,/g, ''));
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number, .cta-number');
    counters.forEach(counter => {
        if (counter.textContent.includes('+')) {
            counterObserver.observe(counter);
        }
    });
});

// Phone Mockup Animation
function animatePhoneMockup() {
    const phoneScreen = document.querySelector('.phone-screen');
    const actionCards = document.querySelectorAll('.action-card');
    
    // Add floating animation to phone
    phoneScreen.style.animation = 'float 6s ease-in-out infinite';
    
    // Animate action cards on hover
    actionCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Add floating animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .success-message {
        text-align: center;
    }
    
    .success-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .success-benefits {
        background: #f8fafc;
        border-radius: 0.75rem;
        padding: 1.5rem;
        margin: 1.5rem 0;
        text-align: left;
    }
    
    .success-benefits h4 {
        margin-bottom: 1rem;
        color: #1f2937;
    }
    
    .success-benefits ul {
        list-style: none;
        padding: 0;
    }
    
    .success-benefits li {
        padding: 0.5rem 0;
        color: #4b5563;
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        border-top: 1px solid #e5e7eb;
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Logo click handler - scroll to top
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    animatePhoneMockup();
    
    // Add loading animation to page
    document.body.classList.add('loaded');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
    
    // Enter key to submit form when modal is open
    if (e.key === 'Enter' && modal.classList.contains('active')) {
        const submitButton = waitlistForm.querySelector('button[type="submit"]');
        if (submitButton && !submitButton.disabled) {
            submitButton.click();
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading state to body
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Preload critical images
function preloadImages() {
    const images = [
        'https://raw.githubusercontent.com/fun-with-codinng/linguviq/refs/heads/main/linguviq-new.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track modal opens
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('waitlist_modal_opened', {
                source: button.textContent.trim()
            });
        });
    });
    
    // Track form submissions
    waitlistForm.addEventListener('submit', (e) => {
        const formData = new FormData(waitlistForm);
        trackEvent('waitlist_submitted', {
            language: formData.get('language') || 'not_selected'
        });
    });
    
    // Track feature card clicks
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const featureName = card.querySelector('h3').textContent;
            trackEvent('feature_card_clicked', {
                feature: featureName
            });
        });
    });
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for potential external use
window.LinguviqApp = {
    openModal,
    closeModal,
    trackEvent
}; 
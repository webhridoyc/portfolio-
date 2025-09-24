// Portfolio Website JavaScript

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update theme toggle icon
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    bindEvents() {
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.activeSection = 'home';
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateActiveLink();
        this.setupScrollSpy();
    }

    bindEvents() {
        // Mobile menu toggle
        hamburger.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e);
                this.closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
    }

    toggleMobileMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    closeMobileMenu() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    handleScroll() {
        // Add scrolled class to navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active section
        this.updateActiveSection();
    }

    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                if (this.activeSection !== section.id) {
                    this.activeSection = section.id;
                    this.updateActiveLink();
                }
            }
        });
    }

    updateActiveLink() {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${this.activeSection}`) {
                link.classList.add('active');
            }
        });
    }

    setupScrollSpy() {
        // Initial call
        this.updateActiveSection();
    }
}

// Scroll Reveal Animation Manager
class ScrollRevealManager {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.setupElements();
        this.bindEvents();
        this.checkElements();
    }

    setupElements() {
        // Add scroll reveal to various elements
        const selectors = [
            '.about-content',
            '.skills-category',
            '.project-card',
            '.contact-content',
            '.stat-item',
            '.highlight-item'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.classList.add('scroll-reveal');
                this.elements.push(el);
            });
        });
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.checkElements());
        window.addEventListener('resize', () => this.checkElements());
    }

    checkElements() {
        this.elements.forEach(element => {
            if (this.isElementInViewport(element)) {
                element.classList.add('revealed');
            }
        });
    }

    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return (
            rect.top <= windowHeight * 0.75 &&
            rect.bottom >= 0
        );
    }
}

// Form Validation Manager
class FormValidationManager {
    constructor() {
        this.form = contactForm;
        this.fields = {};
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.setupFields();
        this.bindEvents();
    }

    setupFields() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            this.fields[input.name] = {
                element: input,
                errorElement: document.getElementById(`${input.name}-error`),
                isValid: false
            };
        });
    }

    bindEvents() {
        // Real-time validation
        Object.values(this.fields).forEach(field => {
            field.element.addEventListener('input', () => {
                this.validateField(field);
            });

            field.element.addEventListener('blur', () => {
                this.validateField(field);
            });
        });

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateField(field) {
        const value = field.element.value.trim();
        const fieldName = field.element.name;
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (!value) {
            isValid = false;
            errorMessage = `${this.capitalizeFirst(fieldName)} is required.`;
        } else {
            // Specific field validation
            switch (fieldName) {
                case 'email':
                    if (!this.isValidEmail(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address.';
                    }
                    break;
                case 'name':
                    if (value.length < 2) {
                        isValid = false;
                        errorMessage = 'Name must be at least 2 characters long.';
                    }
                    break;
                case 'subject':
                    if (value.length < 5) {
                        isValid = false;
                        errorMessage = 'Subject must be at least 5 characters long.';
                    }
                    break;
                case 'message':
                    if (value.length < 10) {
                        isValid = false;
                        errorMessage = 'Message must be at least 10 characters long.';
                    }
                    break;
            }
        }

        this.setFieldValidation(field, isValid, errorMessage);
        return isValid;
    }

    setFieldValidation(field, isValid, errorMessage) {
        field.isValid = isValid;
        const formGroup = field.element.closest('.form-group');
        
        if (isValid) {
            formGroup.classList.remove('error');
            field.errorElement.textContent = '';
            field.errorElement.classList.remove('show');
        } else {
            formGroup.classList.add('error');
            field.errorElement.textContent = errorMessage;
            field.errorElement.classList.add('show');
        }
    }

    validateForm() {
        let isFormValid = true;
        
        Object.values(this.fields).forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validateForm()) {
            this.submitForm();
        } else {
            this.showNotification('Please fix the errors in the form.', 'error');
        }
    }

    async submitForm() {
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Simulate form submission (replace with actual endpoint)
            await this.simulateFormSubmission();
            
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.form.reset();
            this.clearValidation();
        } catch (error) {
            this.showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    simulateFormSubmission() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success/failure (90% success rate)
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Submission failed'));
                }
            }, 2000);
        });
    }

    clearValidation() {
        Object.values(this.fields).forEach(field => {
            const formGroup = field.element.closest('.form-group');
            formGroup.classList.remove('error');
            field.errorElement.textContent = '';
            field.errorElement.classList.remove('show');
            field.isValid = false;
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            backgroundColor: type === 'success' ? '#10b981' : '#ef4444'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
}

// Project Cards Interaction Manager
class ProjectCardsManager {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.handleCardHover(card));
            card.addEventListener('mouseleave', () => this.handleCardLeave(card));
        });
    }

    handleCardHover(card) {
        // Add subtle animation or effect
        card.style.transform = 'translateY(-8px) scale(1.02)';
    }

    handleCardLeave(card) {
        card.style.transform = '';
    }
}

// Statistics Counter Animation
class StatsCounterManager {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.checkCounters());
    }

    checkCounters() {
        if (this.hasAnimated) return;

        const statsSection = document.querySelector('.about-stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.75) {
            this.animateCounters();
            this.hasAnimated = true;
        }
    }

    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 50;
            const duration = 2000;
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current) + suffix;
            }, stepTime);
        });
    }
}

// Smooth Scroll Enhancement
class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Scroll indicator click
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Performance and Accessibility Manager
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[src*="placeholder"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // Simulate lazy loading (in real scenario, you'd load actual images)
                        img.style.backgroundColor = 'var(--bg-secondary)';
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for interactive elements
        const interactiveElements = document.querySelectorAll(
            'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        interactiveElements.forEach(element => {
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                        element.click();
                    }
                }
            });
        });
    }

    setupFocusManagement() {
        // Improve focus visibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// Main Application Class
class PortfolioApp {
    constructor() {
        this.managers = {};
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeManagers());
        } else {
            this.initializeManagers();
        }
    }

    initializeManagers() {
        try {
            this.managers.theme = new ThemeManager();
            this.managers.navigation = new NavigationManager();
            this.managers.scrollReveal = new ScrollRevealManager();
            this.managers.formValidation = new FormValidationManager();
            this.managers.projectCards = new ProjectCardsManager();
            this.managers.statsCounter = new StatsCounterManager();
            this.managers.smoothScroll = new SmoothScrollManager();
            this.managers.performance = new PerformanceManager();

            console.log('Portfolio app initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
        }
    }

    // Public methods for external access
    setTheme(theme) {
        if (this.managers.theme) {
            this.managers.theme.setTheme(theme);
        }
    }

    showNotification(message, type) {
        if (this.managers.formValidation) {
            this.managers.formValidation.showNotification(message, type);
        }
    }
}

// Initialize the application
const portfolioApp = new PortfolioApp();

// Add some CSS for keyboard navigation focus
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color) !important;
        outline-offset: 2px !important;
    }
    
    .keyboard-navigation *:focus:not(:focus-visible) {
        outline: none !important;
    }
`;
document.head.appendChild(style);

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.feature-card, .journey-step, .pricing-card, .section-title').forEach(el => {
    observer.observe(el);
});

// Button hover effects
document.querySelectorAll('.nav-button, .hero-button, .pricing-button, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 4px 12px var(--shadow)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect when hero section is in view
    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeWriter();
            heroObserver.unobserve(entries[0].target);
        }
    }, observerOptions);
    
    heroObserver.observe(heroTitle);
}

// Counter animation for pricing
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 20);
};

// Observe pricing section for counter animation
const pricingObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.pricing-price').forEach(price => {
            const value = price.textContent.replace(/[^0-9]/g, '');
            if (value) {
                animateCounter(price, parseInt(value));
            }
        });
        pricingObserver.unobserve(entries[0].target);
    }
}, observerOptions);

const pricingSection = document.querySelector('.pricing');
if (pricingSection) {
    pricingObserver.observe(pricingSection);
}

// Mobile menu toggle
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add button to navbar
    navbar.querySelector('.nav-container').appendChild(menuButton);
    
    // Toggle menu on click
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
        }
    });
};

// Initialize mobile menu for small screens
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-primary);
        cursor: pointer;
        padding: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
        
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: var(--background);
            padding: 1rem;
            flex-direction: column;
            align-items: center;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px var(--shadow);
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .nav-links a {
            margin: 1rem 0;
        }
    }
    
    .mobile-menu-button.active i::before {
        content: '\\f00d';
    }
    
    button span {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

document.head.appendChild(style);

// Add floating animation to hero elements
const floatingItems = document.querySelectorAll('.floating-item');
floatingItems.forEach((item, index) => {
    const delay = index * 2000;
    item.style.animationDelay = `${delay}ms`;
});

// Enhanced button hover effects
document.querySelectorAll('.download-btn, .hero-btn, .pricing-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Mouse move parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const floatingElements = document.querySelectorAll('.floating-item');
    floatingElements.forEach((item, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        item.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add stagger animation to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Add mouse tilt effect to cards
document.querySelectorAll('.feature-card, .journey-card, .pricing-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Performance optimization: Throttle scroll events
let ticking = false;
const updateParallax = () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Intersection Observer for progress bars (if needed)
const progressBars = document.querySelectorAll('.progress-bar');
if (progressBars.length > 0) {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.dataset.width || '100%';
                progressBar.style.width = targetWidth;
            }
        });
    });

    progressBars.forEach(bar => progressObserver.observe(bar));
}

// Scroll Progress Indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.transform = `scaleX(${progress / 100})`;
    });
};

createScrollProgress();

// Enhanced Parallax Effect
const parallaxElements = document.querySelectorAll('.feature-card, .journey-step, .pricing-card');
const handleParallax = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
        
        const deltaX = (clientX - centerX) / 50;
        const deltaY = (clientY - centerY) / 50;
        
        const distanceX = elementCenterX - centerX;
        const distanceY = elementCenterY - centerY;
        
        const moveX = (distanceX / centerX) * deltaX;
        const moveY = (distanceY / centerY) * deltaY;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
};

document.addEventListener('mousemove', handleParallax);

// Enhanced Card Interactions
document.querySelectorAll('.feature-card, .journey-step, .pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '0';
        card.style.transform = '';
    });
});

// Enhanced Button Interactions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Enhanced Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'var(--primary)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.color = '';
    });
});

// Enhanced Mobile Menu
const enhanceMobileMenu = () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
};

enhanceMobileMenu();

// Enhanced Loading Animation
const addLoadingAnimation = () => {
    const loadingElements = document.querySelectorAll('.feature-card, .journey-step, .pricing-card');
    
    loadingElements.forEach(element => {
        element.classList.add('loading');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.remove('loading');
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
};

addLoadingAnimation();

// Enhanced Scroll Animations
const enhanceScrollAnimations = () => {
    const elements = document.querySelectorAll('.feature-card, .journey-step, .pricing-card, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.animationDelay = `${entry.target.dataset.index * 0.1}s`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach((element, index) => {
        element.dataset.index = index;
        observer.observe(element);
    });
};

enhanceScrollAnimations();

// Enhanced Hero Section
const enhanceHeroSection = () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle && heroDescription && heroButtons) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                heroTitle.classList.add('animate-fade-in');
                setTimeout(() => heroDescription.classList.add('animate-fade-in'), 200);
                setTimeout(() => heroButtons.classList.add('animate-fade-in'), 400);
                observer.unobserve(entries[0].target);
            }
        });
        
        observer.observe(heroTitle);
    }
};

enhanceHeroSection();

// Enhanced Pricing Section
const enhancePricingSection = () => {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            pricingCards.forEach(c => {
                if (c !== card) {
                    c.style.transform = 'scale(0.95)';
                    c.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            pricingCards.forEach(c => {
                c.style.transform = '';
                c.style.opacity = '';
            });
        });
    });
};

enhancePricingSection();

// Enhanced Social Links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) rotate(8deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = '';
    });
});

// Add floating animation to specific elements
document.querySelectorAll('.feature-icon, .step-number').forEach(element => {
    element.classList.add('animate-float');
});

// Add pulse animation to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.classList.add('animate-pulse');
}

// Dark Mode Toggle
const initDarkMode = () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Add to navbar
    const navLinks = document.querySelector('.nav-links');
    navLinks.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
};

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    // ... existing initialization code ...
});

// Interactive Hero Decoration
const initHeroDecoration = () => {
    const decorationContainer = document.querySelector('.decoration-container');
    const decorationElements = document.querySelectorAll('.decoration-element');
    
    if (!decorationContainer) return;
    
    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = decorationContainer.getBoundingClientRect();
        
        // Calculate mouse position relative to container
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        // Update decoration elements
        decorationElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const moveX = (x - 0.5) * speed * 50;
            const moveY = (y - 0.5) * speed * 50;
            
            // Add 3D rotation effect
            const rotateX = (y - 0.5) * 20;
            const rotateY = (x - 0.5) * -20;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Update opacity based on mouse position
            const distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
            const opacity = 0.1 + (1 - distance) * 0.2;
            element.style.opacity = opacity;
        });
        
        // Update container perspective
        decorationContainer.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * -5}deg)`;
    });
    
    // Reset position on mouse leave
    decorationContainer.addEventListener('mouseleave', () => {
        decorationElements.forEach(element => {
            element.style.transform = '';
            element.style.opacity = '0.1';
        });
        decorationContainer.style.transform = '';
    });
    
    // Add hover effect to floating circles
    const floatingCircles = document.querySelectorAll('.floating-circle');
    floatingCircles.forEach(circle => {
        circle.addEventListener('mouseenter', () => {
            circle.style.borderColor = 'var(--primary)';
            circle.style.opacity = '0.4';
            circle.style.transform = 'scale(1.1)';
        });
        
        circle.addEventListener('mouseleave', () => {
            circle.style.borderColor = '';
            circle.style.opacity = '0.2';
            circle.style.transform = '';
        });
    });
};

// Initialize hero decoration when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroDecoration();
    // ... existing initialization code ...
}); 
// // Parallax Scrolling Effect
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.parallax');
    
//     parallaxElements.forEach(element => {
//         const speed = 0.5;
//         element.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

// // Navbar scroll effect
// const navbar = document.querySelector('.navbar');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
    
//     if (currentScroll <= 0) {
//         navbar.style.transform = 'translateY(0)';
//         return;
//     }
    
//     if (currentScroll > lastScroll && currentScroll > 100) {
//         // Scrolling down
//         navbar.style.transform = 'translateY(-100%)';
//     } else {
//         // Scrolling up
//         navbar.style.transform = 'translateY(0)';
//     }
    
//     lastScroll = currentScroll;
// });

// // Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Intersection Observer for fade-in animations
// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in');
//             observer.unobserve(entry.target);
//         }
//     });
// }, observerOptions);

// // Observe elements for fade-in animation
// document.querySelectorAll('.feature-card, .journey-step, .pricing-card, .section-title').forEach(el => {
//     observer.observe(el);
// });

// // Button hover effects
// document.querySelectorAll('.nav-button, .hero-button, .pricing-button, .cta-button').forEach(button => {
//     button.addEventListener('mouseenter', () => {
//         button.style.transform = 'translateY(-2px)';
//         button.style.boxShadow = '0 4px 12px var(--shadow)';
//     });
    
//     button.addEventListener('mouseleave', () => {
//         button.style.transform = 'translateY(0)';
//         button.style.boxShadow = 'none';
//     });
// });

// // Add ripple effect to buttons
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', function(e) {
//         const x = e.clientX - e.target.offsetLeft;
//         const y = e.clientY - e.target.offsetTop;
        
//         const ripple = document.createElement('span');
//         ripple.style.left = `${x}px`;
//         ripple.style.top = `${y}px`;
        
//         this.appendChild(ripple);
        
//         setTimeout(() => {
//             ripple.remove();
//         }, 600);
//     });
// });

// // Typing effect for hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const text = heroTitle.textContent;
//     heroTitle.textContent = '';
    
//     let i = 0;
//     const typeWriter = () => {
//         if (i < text.length) {
//             heroTitle.textContent += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, 50);
//         }
//     };
    
//     // Start typing effect when hero section is in view
//     const heroObserver = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//             typeWriter();
//             heroObserver.unobserve(entries[0].target);
//         }
//     }, observerOptions);
    
//     heroObserver.observe(heroTitle);
// }

// // Counter animation for pricing
// const animateCounter = (element, target) => {
//     let current = 0;
//     const increment = target / 50;
//     const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//             element.textContent = target.toLocaleString();
//             clearInterval(timer);
//         } else {
//             element.textContent = Math.floor(current).toLocaleString();
//         }
//     }, 20);
// };

// // Observe pricing section for counter animation
// const pricingObserver = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//         document.querySelectorAll('.pricing-price').forEach(price => {
//             const value = price.textContent.replace(/[^0-9]/g, '');
//             if (value) {
//                 animateCounter(price, parseInt(value));
//             }
//         });
//         pricingObserver.unobserve(entries[0].target);
//     }
// }, observerOptions);

// const pricingSection = document.querySelector('.pricing');
// if (pricingSection) {
//     pricingObserver.observe(pricingSection);
// }

// // Mobile menu toggle
// const createMobileMenu = () => {
//     const navbar = document.querySelector('.navbar');
//     const navLinks = document.querySelector('.nav-links');
    
//     // Create mobile menu button
//     const menuButton = document.createElement('button');
//     menuButton.className = 'mobile-menu-button';
//     menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
//     // Add button to navbar
//     navbar.querySelector('.nav-container').appendChild(menuButton);
    
//     // Toggle menu on click
//     menuButton.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         menuButton.classList.toggle('active');
//     });
    
//     // Close menu when clicking outside
//     document.addEventListener('click', (e) => {
//         if (!navbar.contains(e.target)) {
//             navLinks.classList.remove('active');
//             menuButton.classList.remove('active');
//         }
//     });
// };

// // Initialize mobile menu for small screens
// if (window.innerWidth <= 768) {
//     createMobileMenu();
// }

// // Add loading animation
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

// // Add CSS for mobile menu
// const style = document.createElement('style');
// style.textContent = `
//     .mobile-menu-button {
//         display: none;
//         background: none;
//         border: none;
//         font-size: 1.5rem;
//         color: var(--text-primary);
//         cursor: pointer;
//         padding: 0.5rem;
//     }
    
//     @media (max-width: 768px) {
//         .mobile-menu-button {
//             display: block;
//         }
        
//         .nav-links {
//             position: fixed;
//             top: 70px;
//             left: 0;
//             width: 100%;
//             background: var(--background);
//             padding: 1rem;
//             flex-direction: column;
//             align-items: center;
//             transform: translateY(-100%);
//             opacity: 0;
//             transition: all 0.3s ease;
//             box-shadow: 0 4px 12px var(--shadow);
//         }
        
//         .nav-links.active {
//             transform: translateY(0);
//             opacity: 1;
//         }
        
//         .nav-links a {
//             margin: 1rem 0;
//         }
//     }
    
//     .mobile-menu-button.active i::before {
//         content: '\\f00d';
//     }
    
//     button span {
//         position: absolute;
//         background: rgba(255, 255, 255, 0.3);
//         border-radius: 50%;
//         transform: scale(0);
//         animation: ripple 0.6s linear;
//         pointer-events: none;
//     }
    
//     @keyframes ripple {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }
// `;

// document.head.appendChild(style);

// // Add floating animation to hero elements
// const floatingItems = document.querySelectorAll('.floating-item');
// floatingItems.forEach((item, index) => {
//     const delay = index * 2000;
//     item.style.animationDelay = `${delay}ms`;
// });

// // Enhanced button hover effects
// document.querySelectorAll('.download-btn, .hero-btn, .pricing-btn').forEach(btn => {
//     btn.addEventListener('mouseenter', function() {
//         this.style.transform = 'translateY(-3px) scale(1.02)';
//     });
    
//     btn.addEventListener('mouseleave', function() {
//         this.style.transform = 'translateY(0) scale(1)';
//     });
// });

// // Mouse move parallax effect for hero section
// document.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX / window.innerWidth;
//     const mouseY = e.clientY / window.innerHeight;
    
//     const floatingElements = document.querySelectorAll('.floating-item');
//     floatingElements.forEach((item, index) => {
//         const speed = (index + 1) * 0.5;
//         const x = (mouseX - 0.5) * speed * 50;
//         const y = (mouseY - 0.5) * speed * 50;
//         item.style.transform = `translate(${x}px, ${y}px)`;
//     });
// });

// // Add stagger animation to feature cards
// const featureCards = document.querySelectorAll('.feature-card');
// featureCards.forEach((card, index) => {
//     card.style.animationDelay = `${index * 0.2}s`;
// });

// // Add mouse tilt effect to cards
// document.querySelectorAll('.feature-card, .journey-card, .pricing-card').forEach(card => {
//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const rotateX = (y - centerY) / 10;
//         const rotateY = (centerX - x) / 10;
        
//         card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
//     });
// });

// // Performance optimization: Throttle scroll events
// let ticking = false;
// const updateParallax = () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.parallax');
    
//     parallaxElements.forEach(element => {
//         const speed = 0.5;
//         element.style.transform = `translateY(${scrolled * speed}px)`;
//     });
    
//     ticking = false;
// };

// window.addEventListener('scroll', () => {
//     if (!ticking) {
//         requestAnimationFrame(updateParallax);
//         ticking = true;
//     }
// });

// // Intersection Observer for progress bars (if needed)
// const progressBars = document.querySelectorAll('.progress-bar');
// if (progressBars.length > 0) {
//     const progressObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const progressBar = entry.target;
//                 const targetWidth = progressBar.dataset.width || '100%';
//                 progressBar.style.width = targetWidth;
//             }
//         });
//     });

//     progressBars.forEach(bar => progressObserver.observe(bar));
// }

// // Scroll Progress Indicator
// const createScrollProgress = () => {
//     const progressBar = document.createElement('div');
//     progressBar.className = 'scroll-progress';
//     document.body.appendChild(progressBar);
    
//     window.addEventListener('scroll', () => {
//         const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         const progress = (window.scrollY / windowHeight) * 100;
//         progressBar.style.transform = `scaleX(${progress / 100})`;
//     });
// };

// createScrollProgress();

// // Enhanced Parallax Effect
// const parallaxElements = document.querySelectorAll('.feature-card, .journey-step, .pricing-card');
// const handleParallax = (e) => {
//     const { clientX, clientY } = e;
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
    
//     parallaxElements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         const elementCenterX = rect.left + rect.width / 2;
//         const elementCenterY = rect.top + rect.height / 2;
        
//         const deltaX = (clientX - centerX) / 50;
//         const deltaY = (clientY - centerY) / 50;
        
//         const distanceX = elementCenterX - centerX;
//         const distanceY = elementCenterY - centerY;
        
//         const moveX = (distanceX / centerX) * deltaX;
//         const moveY = (distanceY / centerY) * deltaY;
        
//         element.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     });
// };

// document.addEventListener('mousemove', handleParallax);

// // Enhanced Card Interactions
// document.querySelectorAll('.feature-card, .journey-step, .pricing-card').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         card.style.zIndex = '1';
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.zIndex = '0';
//         card.style.transform = '';
//     });
// });

// // Enhanced Button Interactions
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('mousedown', () => {
//         button.style.transform = 'scale(0.95)';
//     });
    
//     button.addEventListener('mouseup', () => {
//         button.style.transform = '';
//     });
    
//     button.addEventListener('mouseleave', () => {
//         button.style.transform = '';
//     });
// });

// // Enhanced Navigation Links
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('mouseenter', () => {
//         link.style.color = 'var(--primary)';
//     });
    
//     link.addEventListener('mouseleave', () => {
//         link.style.color = '';
//     });
// });

// // Enhanced Mobile Menu
// const enhanceMobileMenu = () => {
//     const menuButton = document.querySelector('.mobile-menu-button');
//     const navLinks = document.querySelector('.nav-links');
    
//     if (menuButton && navLinks) {
//         menuButton.addEventListener('click', () => {
//             menuButton.classList.toggle('active');
//             navLinks.classList.toggle('active');
            
//             if (navLinks.classList.contains('active')) {
//                 document.body.style.overflow = 'hidden';
//             } else {
//                 document.body.style.overflow = '';
//             }
//         });
//     }
// };

// enhanceMobileMenu();

// // Enhanced Loading Animation
// const addLoadingAnimation = () => {
//     const loadingElements = document.querySelectorAll('.feature-card, .journey-step, .pricing-card');
    
//     loadingElements.forEach(element => {
//         element.classList.add('loading');
        
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     element.classList.remove('loading');
//                     observer.unobserve(element);
//                 }
//             });
//         });
        
//         observer.observe(element);
//     });
// };

// addLoadingAnimation();

// // Enhanced Scroll Animations
// const enhanceScrollAnimations = () => {
//     const elements = document.querySelectorAll('.feature-card, .journey-step, .pricing-card, .section-title');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate-fade-in');
                
//                 if (entry.target.classList.contains('feature-card')) {
//                     entry.target.style.animationDelay = `${entry.target.dataset.index * 0.1}s`;
//                 }
                
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     });
    
//     elements.forEach((element, index) => {
//         element.dataset.index = index;
//         observer.observe(element);
//     });
// };

// enhanceScrollAnimations();

// // Enhanced Hero Section
// const enhanceHeroSection = () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const heroDescription = document.querySelector('.hero-description');
//     const heroButtons = document.querySelector('.hero-buttons');
    
//     if (heroTitle && heroDescription && heroButtons) {
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting) {
//                 heroTitle.classList.add('animate-fade-in');
//                 setTimeout(() => heroDescription.classList.add('animate-fade-in'), 200);
//                 setTimeout(() => heroButtons.classList.add('animate-fade-in'), 400);
//                 observer.unobserve(entries[0].target);
//             }
//         });
        
//         observer.observe(heroTitle);
//     }
// };

// enhanceHeroSection();

// // Enhanced Pricing Section
// const enhancePricingSection = () => {
//     const pricingCards = document.querySelectorAll('.pricing-card');
    
//     pricingCards.forEach((card, index) => {
//         card.addEventListener('mouseenter', () => {
//             pricingCards.forEach(c => {
//                 if (c !== card) {
//                     c.style.transform = 'scale(0.95)';
//                     c.style.opacity = '0.7';
//                 }
//             });
//         });
        
//         card.addEventListener('mouseleave', () => {
//             pricingCards.forEach(c => {
//                 c.style.transform = '';
//                 c.style.opacity = '';
//             });
//         });
//     });
// };

// enhancePricingSection();

// // Enhanced Social Links
// document.querySelectorAll('.social-link').forEach(link => {
//     link.addEventListener('mouseenter', () => {
//         link.style.transform = 'translateY(-3px) rotate(8deg)';
//     });
    
//     link.addEventListener('mouseleave', () => {
//         link.style.transform = '';
//     });
// });

// // Add floating animation to specific elements
// document.querySelectorAll('.feature-icon, .step-number').forEach(element => {
//     element.classList.add('animate-float');
// });

// // Add pulse animation to CTA button
// const ctaButton = document.querySelector('.cta-button');
// if (ctaButton) {
//     ctaButton.classList.add('animate-pulse');
// }

// // Dark Mode Toggle
// const initDarkMode = () => {
//     const themeToggle = document.createElement('button');
//     themeToggle.className = 'theme-toggle';
//     themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//     themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
//     // Add to navbar
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.appendChild(themeToggle);

//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         document.body.classList.add('dark-mode');
//         themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//     }

//     // Toggle theme
//     themeToggle.addEventListener('click', () => {
//         const isDark = document.body.classList.toggle('dark-mode');
//         themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
//         localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     });
// };

// // Initialize dark mode when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     initDarkMode();
//     // ... existing initialization code ...
// });

// // Interactive Hero Decoration
// const initHeroDecoration = () => {
//     const decorationContainer = document.querySelector('.decoration-container');
//     const decorationElements = document.querySelectorAll('.decoration-element');
    
//     if (!decorationContainer) return;
    
//     // Mouse move effect
//     document.addEventListener('mousemove', (e) => {
//         const { clientX, clientY } = e;
//         const { left, top, width, height } = decorationContainer.getBoundingClientRect();
        
//         // Calculate mouse position relative to container
//         const x = (clientX - left) / width;
//         const y = (clientY - top) / height;
        
//         // Update decoration elements
//         decorationElements.forEach((element, index) => {
//             const speed = (index + 1) * 0.5;
//             const moveX = (x - 0.5) * speed * 50;
//             const moveY = (y - 0.5) * speed * 50;
            
//             // Add 3D rotation effect
//             const rotateX = (y - 0.5) * 20;
//             const rotateY = (x - 0.5) * -20;
            
//             element.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
//             // Update opacity based on mouse position
//             const distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
//             const opacity = 0.1 + (1 - distance) * 0.2;
//             element.style.opacity = opacity;
//         });
        
//         // Update container perspective
//         decorationContainer.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * -5}deg)`;
//     });
    
//     // Reset position on mouse leave
//     decorationContainer.addEventListener('mouseleave', () => {
//         decorationElements.forEach(element => {
//             element.style.transform = '';
//             element.style.opacity = '0.1';
//         });
//         decorationContainer.style.transform = '';
//     });
    
//     // Add hover effect to floating circles
//     const floatingCircles = document.querySelectorAll('.floating-circle');
//     floatingCircles.forEach(circle => {
//         circle.addEventListener('mouseenter', () => {
//             circle.style.borderColor = 'var(--primary)';
//             circle.style.opacity = '0.4';
//             circle.style.transform = 'scale(1.1)';
//         });
        
//         circle.addEventListener('mouseleave', () => {
//             circle.style.borderColor = '';
//             circle.style.opacity = '0.2';
//             circle.style.transform = '';
//         });
//     });
// };

// // Initialize hero decoration when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     initHeroDecoration();
//     // ... existing initialization code ...
// });


//     function downloadApp() {
//         window.location.href = "https://drive.google.com/uc?export=download&id=1DNBspmF-Suo3KqlxV_Sr4z3yRo09z8oM";
//     }

// ===== PERFORMANCE OPTIMIZATIONS =====
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// ===== ADVANCED PARALLAX SYSTEM =====
class AdvancedParallax {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        // Multi-layer parallax with different speeds
        document.querySelectorAll('[data-parallax]').forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            const direction = el.dataset.direction || 'vertical';
            this.elements.push({ element: el, speed, direction });
        });

        this.bindEvents();
    }

    bindEvents() {
        const updateParallax = throttle(() => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            this.elements.forEach(({ element, speed, direction }) => {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + scrollTop;
                const elementHeight = rect.height;
                
                // Calculate visibility percentage
                const elementVisible = Math.max(0, Math.min(1, 
                    (windowHeight + scrollTop - elementTop) / (windowHeight + elementHeight)
                ));

                if (elementVisible > 0) {
                    const translateValue = (scrollTop - elementTop) * speed;
                    
                    if (direction === 'horizontal') {
                        element.style.transform = `translateX(${translateValue}px)`;
                    } else {
                        element.style.transform = `translateY(${translateValue}px)`;
                    }
                }
            });
        }, 16);

        window.addEventListener('scroll', updateParallax);
    }
}

// ===== MAGNETIC CURSOR EFFECT =====
class MagneticCursor {
    constructor() {
        this.cursor = null;
        this.followers = [];
        this.init();
    }

    init() {
        if (window.innerWidth > 1024) { // Only on desktop
            this.createCursor();
            this.bindEvents();
        }
    }

    createCursor() {
        // Main cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'magnetic-cursor';
        this.cursor.innerHTML = '<div class="cursor-inner"></div>';
        document.body.appendChild(this.cursor);

        // Cursor followers for trail effect
        for (let i = 0; i < 8; i++) {
            const follower = document.createElement('div');
            follower.className = `cursor-follower cursor-follower-${i}`;
            document.body.appendChild(follower);
            this.followers.push({ element: follower, x: 0, y: 0 });
        }
    }

    bindEvents() {
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor movement
        const updateCursor = () => {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;

            if (this.cursor) {
                this.cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }

            // Update followers with delay
            this.followers.forEach((follower, index) => {
                const delay = (index + 1) * 0.05;
                follower.x += (currentX - follower.x) * (0.1 - delay);
                follower.y += (currentY - follower.y) * (0.1 - delay);
                
                follower.element.style.transform = `translate(${follower.x}px, ${follower.y}px)`;
            });

            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Hover effects for interactive elements
        document.querySelectorAll('a, button, .interactive').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor?.classList.add('cursor-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor?.classList.remove('cursor-hover');
            });
        });
    }
}

// ===== MODERN NAVIGATION WITH GLASSMORPHISM =====
class ModernNavigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        this.createGlassmorphismEffect();
        this.bindScrollEffects();
        this.createMobileMenu();
        this.addActiveIndicator();
    }

    createGlassmorphismEffect() {
        if (this.navbar) {
            this.navbar.classList.add('glassmorphism-nav');
        }
    }

    bindScrollEffects() {
        const handleScroll = throttle(() => {
            const currentScroll = window.pageYOffset;
            
            if (!this.navbar) return;

            // Hide/show navbar
            if (currentScroll <= 0) {
                this.navbar.style.transform = 'translateY(0)';
                this.navbar.classList.remove('navbar-scrolled');
            } else if (currentScroll > this.lastScroll && currentScroll > 100) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
                this.navbar.classList.add('navbar-scrolled');
            }

            this.lastScroll = currentScroll;
        }, 10);

        window.addEventListener('scroll', handleScroll);
    }

    addActiveIndicator() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const indicator = document.createElement('div');
        indicator.className = 'nav-indicator';
        
        if (navLinks.length > 0) {
            navLinks[0].parentElement.appendChild(indicator);
            
            navLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    const rect = link.getBoundingClientRect();
                    const container = link.parentElement.getBoundingClientRect();
                    
                    indicator.style.left = `${rect.left - container.left}px`;
                    indicator.style.width = `${rect.width}px`;
                    indicator.style.opacity = '1';
                });
            });

            navLinks[0].parentElement.addEventListener('mouseleave', () => {
                indicator.style.opacity = '0';
            });
        }
    }

    createMobileMenu() {
        if (window.innerWidth <= 768) {
            const menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-toggle';
            menuButton.innerHTML = `
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            `;
            
            const navContainer = this.navbar?.querySelector('.nav-container');
            navContainer?.appendChild(menuButton);
            
            const navLinks = document.querySelector('.nav-links');
            
            menuButton.addEventListener('click', () => {
                menuButton.classList.toggle('active');
                navLinks?.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
        }
    }
}

// ===== ADVANCED INTERSECTION OBSERVER =====
class AdvancedAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupRevealAnimations();
        this.setupCounterAnimations();
        this.setupProgressAnimations();
        this.setupStaggeredAnimations();
    }

    setupRevealAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.dataset.animation || 'fadeInUp';
                    const delay = entry.target.dataset.delay || '0';
                    
                    setTimeout(() => {
                        entry.target.classList.add('animate-' + animation);
                    }, parseInt(delay));
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('[data-reveal]').forEach(el => {
            observer.observe(el);
        });
    }

    setupCounterAnimations() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('[data-counter]').forEach(el => {
            counterObserver.observe(el);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = parseInt(element.dataset.duration) || 2000;
        const start = performance.now();

        const updateCounter = (timestamp) => {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }

    setupProgressAnimations() {
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const width = progress.dataset.width || '100%';
                    progress.style.width = width;
                }
            });
        });

        document.querySelectorAll('.progress-bar').forEach(bar => {
            progressObserver.observe(bar);
        });
    }

    setupStaggeredAnimations() {
        document.querySelectorAll('[data-stagger-parent]').forEach(parent => {
            const children = parent.children;
            const delay = parseInt(parent.dataset.staggerDelay) || 100;
            
            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * delay}ms`;
            });
        });
    }
}

// ===== MODERN BUTTON INTERACTIONS =====
class ModernButtons {
    constructor() {
        this.init();
    }

    init() {
        this.addRippleEffect();
        this.addMorphingEffects();
        this.addFloatingLabels();
    }

    addRippleEffect() {
        document.querySelectorAll('.btn, button').forEach(button => {
            button.addEventListener('click', (e) => {
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    addMorphingEffects() {
        document.querySelectorAll('.btn-morph').forEach(button => {
            const originalText = button.textContent;
            const hoverText = button.dataset.hoverText || originalText;
            
            button.addEventListener('mouseenter', () => {
                button.textContent = hoverText;
                button.style.transform = 'scale(1.05)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.textContent = originalText;
                button.style.transform = 'scale(1)';
            });
        });
    }

    addFloatingLabels() {
        document.querySelectorAll('.form-group').forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                input.addEventListener('focus', () => {
                    label.classList.add('floating');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.classList.remove('floating');
                    }
                });
            }
        });
    }
}

// ===== ADVANCED CARD INTERACTIONS =====
class AdvancedCards {
    constructor() {
        this.init();
    }

    init() {
        this.addTiltEffect();
        this.addHoverGlow();
        this.addFlipCards();
        this.addStackEffect();
    }

    addTiltEffect() {
        document.querySelectorAll('.card-tilt').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = (mouseY / rect.height) * -20;
                const rotateY = (mouseX / rect.width) * 20;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(20px)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    addHoverGlow() {
        document.querySelectorAll('.card-glow').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    addFlipCards() {
        document.querySelectorAll('.card-flip').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    }

    addStackEffect() {
        document.querySelectorAll('.card-stack').forEach(stack => {
            const cards = stack.querySelectorAll('.card');
            
            cards.forEach((card, index) => {
                card.style.zIndex = cards.length - index;
                card.style.transform = `translateY(${index * -5}px) rotate(${index * 2}deg)`;
                
                card.addEventListener('mouseenter', () => {
                    card.style.zIndex = cards.length + 1;
                    card.style.transform = 'translateY(0) rotate(0deg) scale(1.05)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.zIndex = cards.length - index;
                    card.style.transform = `translateY(${index * -5}px) rotate(${index * 2}deg)`;
                });
            });
        });
    }
}

// ===== SMOOTH SCROLL WITH CUSTOM SCROLLBAR =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        this.setupCustomScrollbar();
        this.setupSmoothScrolling();
        this.setupScrollProgress();
    }

    setupCustomScrollbar() {
        // Add custom scrollbar styles dynamically
        const scrollbarStyle = document.createElement('style');
        scrollbarStyle.textContent = `
            ::-webkit-scrollbar {
                width: 8px;
            }
            
            ::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
            }
            
            ::-webkit-scrollbar-thumb {
                background: linear-gradient(45deg, var(--primary), var(--secondary));
                border-radius: 10px;
                transition: all 0.3s ease;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(45deg, var(--secondary), var(--primary));
            }
        `;
        document.head.appendChild(scrollbarStyle);
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(progressBar);
        
        const updateProgress = throttle(() => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            
            progressBar.style.transform = `scaleX(${progress / 100})`;
        }, 10);
        
        window.addEventListener('scroll', updateProgress);
    }
}

// ===== MODERN DARK MODE TOGGLE =====
class ModernDarkMode {
    constructor() {
        this.init();
    }

    init() {
        this.createToggle();
        this.loadSavedTheme();
        this.addSystemThemeDetection();
    }

    createToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'theme-toggle-modern';
        toggle.innerHTML = `
            <div class="toggle-track">
                <div class="toggle-thumb">
                    <i class="fas fa-sun sun-icon"></i>
                    <i class="fas fa-moon moon-icon"></i>
                </div>
            </div>
        `;
        
        const navbar = document.querySelector('.nav-links');
        navbar?.appendChild(toggle);
        
        toggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-mode');
        const toggle = document.querySelector('.theme-toggle-modern');
        
        toggle?.classList.toggle('dark', isDark);
        localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
        
        // Smooth color transition
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme-preference');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            document.body.classList.add('dark-mode');
            document.querySelector('.theme-toggle-modern')?.classList.add('dark');
        }
    }

    addSystemThemeDetection() {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {
                if (!localStorage.getItem('theme-preference')) {
                    if (e.matches) {
                        document.body.classList.add('dark-mode');
                    } else {
                        document.body.classList.remove('dark-mode');
                    }
                }
            });
    }
}

// ===== LOADING SCREEN WITH MODERN ANIMATIONS =====
class ModernLoader {
    constructor() {
        this.init();
    }

    init() {
        this.createLoader();
        this.handlePageLoad();
    }

    createLoader() {
        const loader = document.createElement('div');
        loader.className = 'modern-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-animation">
                    <div class="loader-circle"></div>
                    <div class="loader-circle"></div>
                    <div class="loader-circle"></div>
                </div>
                <div class="loader-text">Loading...</div>
                <div class="loader-progress">
                    <div class="progress-fill"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(loader);
    }

    handlePageLoad() {
        let progress = 0;
        const progressFill = document.querySelector('.progress-fill');
        
        const updateProgress = () => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
            
            if (progress < 100) {
                setTimeout(updateProgress, 100);
            }
        };
        
        updateProgress();
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
                const loader = document.querySelector('.modern-loader');
                loader?.remove();
            }, 500);
        });
    }
}

// ===== FLOATING ACTION BUTTON =====
class FloatingActionButton {
    constructor() {
        this.init();
    }

    init() {
        this.createFAB();
        this.addScrollBehavior();
    }

    createFAB() {
        const fab = document.createElement('div');
        fab.className = 'floating-action-button';
        fab.innerHTML = `
            <button class="fab-main">
                <i class="fas fa-plus"></i>
            </button>
            <div class="fab-options">
                <button class="fab-option" data-action="top">
                    <i class="fas fa-arrow-up"></i>
                    <span class="fab-tooltip">Back to Top</span>
                </button>
                <button class="fab-option" data-action="contact">
                    <i class="fas fa-envelope"></i>
                    <span class="fab-tooltip">Contact</span>
                </button>
                <button class="fab-option" data-action="share">
                    <i class="fas fa-share"></i>
                    <span class="fab-tooltip">Share</span>
                </button>
            </div>
        `;
        
        document.body.appendChild(fab);
        
        const fabMain = fab.querySelector('.fab-main');
        fabMain.addEventListener('click', () => {
            fab.classList.toggle('active');
        });
        
        // Add actions
        fab.querySelector('[data-action="top"]').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        fab.querySelector('[data-action="contact"]').addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
        });
        
        fab.querySelector('[data-action="share"]').addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            }
        });
    }

    addScrollBehavior() {
        const fab = document.querySelector('.floating-action-button');
        let lastScroll = 0;
        
        window.addEventListener('scroll', throttle(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 200) {
                fab?.classList.add('visible');
            } else {
                fab?.classList.remove('visible');
            }
            
            if (currentScroll > lastScroll) {
                fab?.classList.add('scroll-down');
            } else {
                fab?.classList.remove('scroll-down');
            }
            
            lastScroll = currentScroll;
        }, 100));
    }
}

// ===== MODERN NOTIFICATIONS SYSTEM =====
class ModernNotifications {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.createContainer();
    }

    createContainer() {
        this.container = document.createElement('div');
        this.container.className = 'notification-container';
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${icons[type]}"></i>
                <span class="notification-message">${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="notification-progress"></div>
        `;
        
        this.container.appendChild(notification);
        
        // Auto-close
        const progressBar = notification.querySelector('.notification-progress');
        progressBar.style.animationDuration = `${duration}ms`;
        
        setTimeout(() => {
            this.hide(notification);
        }, duration);
        
        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hide(notification);
        });
    }

    hide(notification) {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

// ===== ENHANCED CSS STYLES =====
const modernStyles = `
    /* ===== MODERN CURSOR ===== */
    .magnetic-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.2s ease;
    }
    
    .cursor-inner {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: inherit;
    }
    
    .cursor-hover {
        transform: scale(2);
        background: var(--secondary);
    }
    
    .cursor-follower {
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.6;
    }
    
    /* ===== GLASSMORPHISM NAVIGATION ===== */
    .glassmorphism-nav {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
    }
    
    .navbar-scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .nav-indicator {
        position: absolute;
        bottom: -2px;
        height: 3px;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        border-radius: 2px;
        transition: all 0.3s ease;
        opacity: 0;
    }
    
    /* ===== MODERN MOBILE MENU ===== */
    .mobile-menu-toggle {
        display: none;
        flex-direction: column;
        width: 30px;
        height: 24px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
    
    .hamburger-line {
        width: 100%;
        height: 3px;
        background: var(--text-primary);
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 2px;
    }
    
    .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
        transform: rotate(45deg) translateY(12px);
    }
    
    .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
        transform: rotate(-45deg) translateY(-12px);
    }
    
    /* ===== MODERN ANIMATIONS ===== */
    .animate-fadeInUp {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .animate-fadeInLeft {
        animation: fadeInLeft 0.8s ease forwards;
    }
    
    .animate-fadeInRight {
        animation: fadeInRight 0.8s ease forwards;
    }
    
    .animate-fadeInDown {
        animation: fadeInDown 0.8s ease forwards;
    }
    
    .animate-scaleIn {
        animation: scaleIn 0.6s ease forwards;
    }
    
    .animate-slideInUp {
        animation: slideInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* ===== RIPPLE EFFECT ===== */
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* ===== MODERN CARD EFFECTS ===== */
    .card-tilt {
        transition: all 0.3s ease;
        transform-style: preserve-3d;
    }
    
    .card-glow {
        position: relative;
        overflow: hidden;
    }
    
    .card-glow::before {
        content: '';
        position: absolute;
        top: var(--mouse-y, 50%);
        left: var(--mouse-x, 50%);
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(var(--primary-rgb), 0.2) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    .card-glow:hover::before {
        opacity: 1;
    }
    
    .card-flip {
        perspective: 1000px;
    }
    
    .card-flip .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }
    
    .card-flip.flipped .card-inner {
        transform: rotateY(180deg);
    }
    
    .card-flip .card-front,
    .card-flip .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    
    .card-flip .card-back {
        transform: rotateY(180deg);
    }
    
    /* ===== SCROLL PROGRESS BAR ===== */
    .scroll-progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        transform-origin: left;
        transform: scaleX(0);
        z-index: 9999;
        transition: transform 0.1s ease;
    }
    
    /* ===== MODERN DARK MODE TOGGLE ===== */
    .theme-toggle-modern {
        width: 60px;
        height: 30px;
        border: none;
        border-radius: 25px;
        background: linear-gradient(45deg, #87CEEB, #4682B4);
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
        overflow: hidden;
    }
    
    .toggle-track {
        width: 100%;
        height: 100%;
        position: relative;
    }
    
    .toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 26px;
        height: 26px;
        background: white;
        border-radius: 50%;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .sun-icon, .moon-icon {
        position: absolute;
        font-size: 12px;
        transition: all 0.3s ease;
    }
    
    .sun-icon {
        color: #FFA500;
        opacity: 1;
    }
    
    .moon-icon {
        color: #4169E1;
        opacity: 0;
    }
    
    .theme-toggle-modern.dark {
        background: linear-gradient(45deg, #2C3E50, #34495E);
    }
    
    .theme-toggle-modern.dark .toggle-thumb {
        transform: translateX(30px);
    }
    
    .theme-toggle-modern.dark .sun-icon {
        opacity: 0;
    }
    
    .theme-toggle-modern.dark .moon-icon {
        opacity: 1;
    }
    
    /* ===== MODERN LOADER ===== */
    .modern-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--background), var(--background-alt));
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    }
    
    .loader-content {
        text-align: center;
        color: var(--text-primary);
    }
    
    .loader-animation {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        justify-content: center;
    }
    
    .loader-circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        animation: loaderBounce 1.4s ease-in-out infinite both;
    }
    
    .loader-circle:nth-child(1) { animation-delay: -0.32s; }
    .loader-circle:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes loaderBounce {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
    
    .loader-text {
        font-size: 1.2rem;
        margin-bottom: 20px;
        font-weight: 600;
    }
    
    .loader-progress {
        width: 200px;
        height: 4px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        overflow: hidden;
        margin: 0 auto;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        width: 0%;
        transition: width 0.3s ease;
    }
    
    .loaded .modern-loader {
        opacity: 0;
        pointer-events: none;
    }
    
    /* ===== FLOATING ACTION BUTTON ===== */
    .floating-action-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .floating-action-button.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .floating-action-button.scroll-down {
        transform: translateY(100px);
    }
    
    .fab-main {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .fab-main:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
    }
    
    .fab-options {
        position: absolute;
        bottom: 70px;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        transform: translateY(20px);
    }
    
    .floating-action-button.active .fab-options {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .floating-action-button.active .fab-main {
        transform: rotate(45deg);
    }
    
    .fab-option {
        position: relative;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: var(--background);
        border: 2px solid var(--primary);
        color: var(--primary);
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .fab-option:hover {
        background: var(--primary);
        color: white;
        transform: scale(1.1);
    }
    
    .fab-tooltip {
        position: absolute;
        right: 55px;
        top: 50%;
        transform: translateY(-50%);
        background: var(--text-primary);
        color: var(--background);
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        pointer-events: none;
    }
    
    .fab-option:hover .fab-tooltip {
        opacity: 1;
        visibility: visible;
        transform: translateY(-50%) translateX(-5px);
    }
    
    /* ===== MODERN NOTIFICATIONS ===== */
    .notification-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
    }
    
    .notification {
        background: var(--background);
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border-left: 4px solid var(--primary);
        animation: slideIn 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .notification-success {
        border-left-color: #10B981;
    }
    
    .notification-error {
        border-left-color: #EF4444;
    }
    
    .notification-warning {
        border-left-color: #F59E0B;
    }
    
    .notification-info {
        border-left-color: #3B82F6;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-content i {
        font-size: 20px;
    }
    
    .notification-success i {
        color: #10B981;
    }
    
    .notification-error i {
        color: #EF4444;
    }
    
    .notification-warning i {
        color: #F59E0B;
    }
    
    .notification-info i {
        color: #3B82F6;
    }
    
    .notification-message {
        flex: 1;
        color: var(--text-primary);
        font-weight: 500;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: all 0.2s ease;
    }
    
    .notification-close:hover {
        background: rgba(0, 0, 0, 0.1);
        color: var(--text-primary);
    }
    
    .notification-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        animation: progressBar linear;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    @keyframes progressBar {
        from {
            width: 100%;
        }
        to {
            width: 0%;
        }
    }
    
    /* ===== FLOATING LABELS ===== */
    .form-group {
        position: relative;
        margin-bottom: 24px;
    }
    
    .form-group label {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        color: var(--text-secondary);
        transition: all 0.3s ease;
        pointer-events: none;
        font-size: 16px;
    }
    
    .form-group label.floating {
        top: 8px;
        font-size: 12px;
        color: var(--primary);
        transform: translateY(0);
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 16px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-primary);
        font-size: 16px;
        transition: all 0.3s ease;
        outline: none;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        border-color: var(--primary);
        background: rgba(255, 255, 255, 0.1);
    }
    
    .form-group input:focus + label,
    .form-group textarea:focus + label,
    .form-group input:not(:placeholder-shown) + label,
    .form-group textarea:not(:placeholder-shown) + label {
        top: 8px;
        font-size: 12px;
        color: var(--primary);
        transform: translateY(0);
    }
    
    /* ===== RESPONSIVE DESIGN ===== */
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: flex;
        }
        
        .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 20px;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .nav-links.active {
            transform: translateY(-100%);
            opacity: 1;
            visibility: visible;
        }
        
        .menu-open {
            overflow: hidden;
        }
        
        .floating-action-button {
            bottom: 20px;
            right: 20px;
        }
        
        .notification-container {
            left: 20px;
            right: 20px;
            max-width: none;
        }
        
        .magnetic-cursor,
        .cursor-follower {
            display: none;
        }
    }
    
    @media (max-width: 480px) {
        .fab-main {
            width: 50px;
            height: 50px;
            font-size: 20px;
        }
        
        .fab-option {
            width: 40px;
            height: 40px;
            font-size: 16px;
        }
        
        .loader-progress {
            width: 150px;
        }
    }
    
    /* ===== DARK MODE STYLES ===== */
    .dark-mode {
        --background: #0f0f23;
        --background-alt: #1a1a2e;
        --text-primary: #ffffff;
        --text-secondary: #a0a0a0;
        --primary: #6366f1;
        --secondary: #8b5cf6;
        --accent: #06d6a0;
        --shadow: rgba(0, 0, 0, 0.3);
    }
    
    .dark-mode .glassmorphism-nav {
        background: rgba(15, 15, 35, 0.9);
        border-bottom-color: rgba(255, 255, 255, 0.1);
    }
    
    .dark-mode .navbar-scrolled {
        background: rgba(15, 15, 35, 0.95);
    }
    
    .dark-mode .notification {
        background: var(--background-alt);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }
    
    .dark-mode .nav-links {
        background: rgba(15, 15, 35, 0.95);
    }
`;

// ===== INITIALIZATION SYSTEM =====
class ModernWebEffects {
    constructor() {
        this.components = [];
        this.init();
    }

    init() {
        // Add modern styles
        this.addStyles();
        
        // Initialize components when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }

    addStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = modernStyles;
        document.head.appendChild(styleSheet);
    }

    initializeComponents() {
        // Initialize all modern components
        this.components = [
            new ModernLoader(),
            new AdvancedParallax(),
            new MagneticCursor(),
            new ModernNavigation(),
            new AdvancedAnimations(),
            new ModernButtons(),
            new AdvancedCards(),
            new SmoothScroll(),
            new ModernDarkMode(),
            new FloatingActionButton(),
            new ModernNotifications()
        ];

        // Legacy function support
        this.initLegacyFunctions();
        
        // Performance monitoring
        this.monitorPerformance();
    }

    // initLegacyFunctions() {
    //     // Tambahkan konfirmasi sebelum download
    //     window.downloadApp = function() {
    //         const confirmDownload = confirm("Apakah Anda ingin mengunduh aplikasi DietIn?");
    //         if (confirmDownload) {
    //             window.location.href = "https://drive.google.com/uc?export=download&id=1DNBspmF-Suo3KqlxV_Sr4z3yRo09z8oM";
    //         }
    //     };
    
    //     // Enhanced typing effect
    //     this.initTypingEffect();
    
    //     // Enhanced counter animations
    //     this.initCounterAnimations();
    // }

    initLegacyFunctions() {
        // Tombol klik akan memicu modal, bukan langsung download
        window.downloadApp = function() {
            const modal = document.getElementById("downloadModal");
            modal.style.display = "flex";
        };
    
        // Event listener untuk tombol Ya, Unduh
        document.getElementById("confirmDownload").addEventListener("click", function() {
            window.location.href = "https://github.com/Tim1357912/dietIn-release/releases/download/V2.0.0/DietIn.apk";
            document.getElementById("downloadModal").style.display = "none";
        });
    
        // Event listener untuk tombol Batal
        document.getElementById("cancelDownload").addEventListener("click", function() {
            document.getElementById("downloadModal").style.display = "none";
        });
    
        // Fitur lain tetap jalan
        this.initTypingEffect();
        this.initCounterAnimations();
    }
    
    

    initTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    this.typeWriter(heroTitle, originalText);
                    observer.unobserve(entries[0].target);
                }
            }, { threshold: 0.5 });
            
            observer.observe(heroTitle);
        }
    }

    typeWriter(element, text, speed = 50) {
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                element.classList.add('typing-complete');
            }
        }, speed);
    }

    initCounterAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const finalValue = parseInt(element.textContent.replace(/[^0-9]/g, ''));
                    
                    if (finalValue) {
                        this.animateCounter(element, finalValue);
                    }
                    
                    observer.unobserve(element);
                }
            });
        });

        document.querySelectorAll('.pricing-price, [data-counter]').forEach(el => {
            observer.observe(el);
        });
    }

    animateCounter(element, target, duration = 2000) {
        let start = 0;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOutCubic);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    }

    monitorPerformance() {
        // Monitor frame rate
        let frameCount = 0;
        let lastTime = performance.now();
        
        const checkFPS = (currentTime) => {
            frameCount++;
            
            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                
                if (fps < 30) {
                    console.warn('Low FPS detected:', fps);
                    this.optimizePerformance();
                }
                
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(checkFPS);
        };
        
        requestAnimationFrame(checkFPS);
    }

    optimizePerformance() {
        // Reduce animation complexity on low-end devices
        const reduceAnimations = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (reduceAnimations) {
            document.body.classList.add('reduced-motion');
        }
        
        // Disable cursor effects on mobile/low-performance devices
        if (window.innerWidth <= 1024) {
            const cursor = document.querySelector('.magnetic-cursor');
            const followers = document.querySelectorAll('.cursor-follower');
            
            cursor?.remove();
            followers.forEach(f => f.remove());
        }
    }

    // Public API for external usage
    showNotification(message, type, duration) {
        const notificationSystem = this.components.find(c => c instanceof ModernNotifications);
        if (notificationSystem) {
            notificationSystem.show(message, type, duration);
        }
    }

    addParallaxElement(element, speed, direction) {
        const parallaxSystem = this.components.find(c => c instanceof AdvancedParallax);
        if (parallaxSystem) {
            parallaxSystem.elements.push({ element, speed, direction });
        }
    }
}

// ===== AUTO-INITIALIZATION =====
const modernEffects = new ModernWebEffects();

// Export for external usage
window.ModernWebEffects = {
    showNotification: (message, type = 'info', duration = 5000) => {
        modernEffects.showNotification(message, type, duration);
    },
    addParallax: (selector, speed = 0.5, direction = 'vertical') => {
        const element = document.querySelector(selector);
        if (element) {
            modernEffects.addParallaxElement(element, speed, direction);
        }
    }
};


// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initChatbot();
    initContactForm();
    initMobileMenu();
    initScrollToTop();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.problem-card, .feature-card, .timeline-item, .solution-text, .solution-visual'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Advanced animations
function initAnimations() {
    // Parallax effect for hero background orbs
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.2 + (index * 0.1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Counter animation for statistics
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        typeWriter(heroTitle, text, 50);
    }

    // Health metrics animation
    animateHealthMetrics();
}

// Counter animation function
function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/[^\d]/g, ''));
    const suffix = text.replace(/[\d]/g, '');
    
    if (number) {
        let current = 0;
        const increment = number / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = number + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 20);
    }
}

// Typing effect function
function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Health metrics animation
function animateHealthMetrics() {
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            metric.style.animation = 'slideInUp 0.5s ease-out forwards';
        }, index * 200);
    });
}

// Groq API Configuration
// You can either:
// 1. Replace YOUR_GROQ_API_KEY below with your actual key
// 2. Create a config.js file with GROQ_API_CONFIG object
// 3. Set it via environment or other secure method

let GROQ_CONFIG = {
    apiKey: 'YOUR_GROQ_API_KEY', // Replace with your actual Groq API key
    model: 'llama3-8b-8192', // or 'mixtral-8x7b-32768' for more advanced responses
    baseURL: 'https://api.groq.com/openai/v1/chat/completions',
    maxTokens: 500,
    temperature: 0.7
};

// Try to load configuration from external config if available
try {
    if (typeof GROQ_API_CONFIG !== 'undefined') {
        GROQ_CONFIG = { ...GROQ_CONFIG, ...GROQ_API_CONFIG };
    }
} catch (e) {
    // Config file not found, use default configuration
    console.log('Using default Groq configuration. Create config.js for custom settings.');
}

// PrismDx context for the AI
const PRISMDX_CONTEXT = `
You are a helpful AI assistant for PrismDx, an AI-powered healthcare platform. PrismDx focuses on:

CORE SERVICES:
- Personalized healthcare and lifestyle management
- AI-driven solutions for obesity, diabetes, and blood pressure management
- Tailored diet plans and nutrition guidance
- Progress tracking and health monitoring
- Lifestyle coaching and behavior change support

KEY FEATURES:
- Personalized Diet Plans: AI-crafted meal plans based on health conditions and preferences
- Health Monitoring: Blood pressure, blood sugar, and weight tracking with insights
- Lifestyle Tracking: Activity monitoring, sleep tracking, stress management
- Educational Content: Interactive guides, video tutorials, expert insights
- Smart Reminders: Medication, meal timing, and health check alerts
- Community Support: Support groups, success stories, expert Q&A

EXPANSION ROADMAP:
- Phase 1 (Current): Core health management (obesity, diabetes, blood pressure)
- Phase 2 (2024): Cardiovascular health and heart monitoring
- Phase 3 (2025): Eye care, mental health, sleep disorders
- Phase 4 (Future): Home diagnostics and telemedicine integration

CONTACT INFO:
- Email: hello@prismdx.com
- Phone: +1 (555) 123-4567
- Location: San Francisco, CA

Keep responses helpful, professional, and focused on health and wellness. Encourage users to join the waitlist if they're interested. Be empathetic about health challenges and emphasize personalized, AI-driven solutions.
`;

// Chatbot functionality with Groq API
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbot = document.getElementById('chatbot');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const apiStatus = document.getElementById('apiStatus');

    let conversationHistory = [
        {
            role: 'system',
            content: PRISMDX_CONTEXT
        }
    ];

    // Update API status indicator
    function updateApiStatus(status) {
        apiStatus.className = 'api-status';
        switch(status) {
            case 'online':
                apiStatus.classList.add('online');
                apiStatus.title = 'AI Assistant Online';
                break;
            case 'offline':
                apiStatus.classList.add('offline');
                apiStatus.title = 'AI Assistant Offline - Using Fallback Responses';
                break;
            case 'error':
                apiStatus.classList.add('error');
                apiStatus.title = 'AI Assistant Error - Please Try Again';
                break;
        }
    }

    // Check API status on initialization
    checkApiStatus();

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('active');
        if (chatbot.classList.contains('active')) {
            chatbotInput.focus();
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbot.classList.remove('active');
    });

    // Send message functionality
    async function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatbotInput.value = '';
            
            // Add user message to conversation history
            conversationHistory.push({
                role: 'user',
                content: message
            });
            
            // Show typing indicator
            addTypingIndicator();
            
            try {
                const response = await getGroqResponse(message);
                removeTypingIndicator();
                addMessage(response, 'bot');
                updateApiStatus('online');
                
                // Add bot response to conversation history
                conversationHistory.push({
                    role: 'assistant',
                    content: response
                });
                
                // Keep conversation history manageable (last 10 messages + system prompt)
                if (conversationHistory.length > 21) {
                    conversationHistory = [
                        conversationHistory[0], // Keep system prompt
                        ...conversationHistory.slice(-20) // Keep last 20 messages
                    ];
                }
            } catch (error) {
                removeTypingIndicator();
                updateApiStatus('error');
                addMessage(getFallbackResponse(message), 'bot');
                console.error('Groq API Error:', error);
                
                // Show user-friendly error message if it's an API key issue
                if (error.message.includes('API key not configured')) {
                    addMessage("⚠️ The AI assistant requires configuration to work properly. Currently using basic responses.", 'bot');
                }
            }
        }
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Get response from Groq API
    async function getGroqResponse(message) {
        // Check if API key is configured
        if (!GROQ_CONFIG.apiKey || GROQ_CONFIG.apiKey === 'YOUR_GROQ_API_KEY') {
            throw new Error('Groq API key not configured');
        }

        const response = await fetch(GROQ_CONFIG.baseURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_CONFIG.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: GROQ_CONFIG.model,
                messages: conversationHistory,
                max_tokens: GROQ_CONFIG.maxTokens,
                temperature: GROQ_CONFIG.temperature,
                stream: false
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || 'I apologize, but I encountered an issue generating a response. Please try again.';
    }

    // Fallback responses when API fails
    function getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        const fallbackResponses = {
            greetings: "Hello! I'm your PrismDx assistant. While I'm experiencing some technical difficulties, I'm here to help you learn about our AI-powered healthcare platform. What would you like to know?",
            features: "PrismDx offers personalized diet plans, health monitoring, lifestyle tracking, educational content, smart reminders, and community support. I'd love to tell you more about any specific feature!",
            health: "PrismDx specializes in helping people manage obesity, diabetes, and blood pressure through personalized AI-driven solutions. We're expanding to include heart health, eye care, and home diagnostics.",
            pricing: "We're currently preparing for launch! Sign up for our waitlist at the bottom of the page to get early access and special pricing.",
            contact: "You can reach our team at hello@prismdx.com or call +1 (555) 123-4567. We're based in San Francisco, CA.",
            default: "I apologize, but I'm experiencing some technical difficulties. For detailed information about PrismDx, please contact our team at hello@prismdx.com or explore our website. Is there anything specific I can help you with?"
        };

        // Simple keyword matching for fallback
        if (['hello', 'hi', 'hey'].some(word => lowerMessage.includes(word))) {
            return fallbackResponses.greetings;
        } else if (['feature', 'what', 'how', 'diet', 'track'].some(word => lowerMessage.includes(word))) {
            return fallbackResponses.features;
        } else if (['health', 'diabetes', 'obesity', 'pressure'].some(word => lowerMessage.includes(word))) {
            return fallbackResponses.health;
        } else if (['price', 'cost', 'pricing', 'much'].some(word => lowerMessage.includes(word))) {
            return fallbackResponses.pricing;
        } else if (['contact', 'reach', 'phone', 'email'].some(word => lowerMessage.includes(word))) {
            return fallbackResponses.contact;
        }
        
        return fallbackResponses.default;
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = `<p>${text}</p>`;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Add entrance animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease-out';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 50);
    }

    // Add typing indicator
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content typing-content';
        content.innerHTML = `
            <div class="typing-animation">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(content);
        
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Check API status
    async function checkApiStatus() {
        try {
            if (!GROQ_CONFIG.apiKey || GROQ_CONFIG.apiKey === 'YOUR_GROQ_API_KEY') {
                updateApiStatus('offline');
                return;
            }

            // Test API with a simple request
            const testResponse = await fetch(GROQ_CONFIG.baseURL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_CONFIG.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: GROQ_CONFIG.model,
                    messages: [{ role: 'user', content: 'test' }],
                    max_tokens: 1
                })
            });

            if (testResponse.ok) {
                updateApiStatus('online');
            } else {
                updateApiStatus('error');
            }
        } catch (error) {
            updateApiStatus('offline');
        }
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                condition: formData.get('condition'),
                message: formData.get('message')
            };

            // Validate form
            if (!data.name || !data.email || !data.condition) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Joining...';
            submitButton.disabled = true;
            submitButton.classList.add('loading');

            setTimeout(() => {
                // Reset form
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
                
                showNotification('Thank you for joining our waitlist! We\'ll be in touch soon.', 'success');
                
                // Store in localStorage for demo purposes
                const waitlistData = JSON.parse(localStorage.getItem('prismdx_waitlist') || '[]');
                waitlistData.push({
                    ...data,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('prismdx_waitlist', JSON.stringify(waitlistData));
                
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        z-index: 10000;
        background: ${type === 'success' ? 'var(--gradient-success)' : type === 'error' ? 'var(--gradient-secondary)' : 'var(--gradient-primary)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-medium);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Close functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-primary);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: var(--shadow-light);
        transition: var(--transition);
        opacity: 0;
        visibility: hidden;
        z-index: 999;
    `;

    document.body.appendChild(scrollButton);

    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
    });
}

// Utility functions
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

function throttle(func, limit) {
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
}

// Performance optimizations
const debouncedScroll = debounce(() => {
    // Handle scroll events that don't need immediate response
}, 100);

const throttledScroll = throttle(() => {
    // Handle scroll events that need immediate response
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);
window.addEventListener('scroll', throttledScroll);

// Add custom CSS animations
const customStyles = document.createElement('style');
customStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s;
        margin-left: auto;
    }

    .notification-close:hover {
        opacity: 1;
    }

    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }

    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius);
        padding: 1rem;
        gap: 1rem;
    }

    .nav-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

document.head.appendChild(customStyles);

// Initialize service worker for PWA capabilities (optional)
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

// Analytics and tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, properties);
    
    // Example: Custom analytics
    // analytics.track(eventName, properties);
}

// Track important user interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
        trackEvent('cta_clicked', { button_text: e.target.textContent });
    }
    
    if (e.target.matches('.nav-link')) {
        trackEvent('nav_clicked', { section: e.target.getAttribute('href') });
    }
});

// Track form submissions
document.addEventListener('submit', (e) => {
    if (e.target.id === 'contactForm') {
        trackEvent('form_submitted', { form_type: 'waitlist' });
    }
});

// Track chatbot usage
let chatbotInteractions = 0;
document.addEventListener('click', (e) => {
    if (e.target.closest('#chatbotSend') || e.target.closest('#chatbotToggle')) {
        chatbotInteractions++;
        trackEvent('chatbot_interaction', { interaction_count: chatbotInteractions });
    }
});

console.log('PrismDx website initialized successfully! 🎉');
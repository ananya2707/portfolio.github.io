// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar scroll effect
const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
});

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll reveal animation
const sections = document.querySelectorAll('section');

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Typing animation
const typingText = document.querySelector('.typing-text');
const words = ["Software Developer", "AI Enthusiast", "Problem Solver", "Tech Lover"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

const type = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingText.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
};

// Start typing animation
setTimeout(type, 1000);

// Video modal
const videoModal = document.getElementById('video-modal');
const openVideoBtn = document.getElementById('open-video-btn');
const closeModal = document.querySelector('.close-modal');

openVideoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For demonstration, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 3D tilt effect for cards
const cards = document.querySelectorAll('.card-3d');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

// Dragon animation
const dragons = document.querySelectorAll('.dragon-bg');
dragons.forEach((dragon, index) => {
    dragon.style.animationDelay = `${index * 2}s`;
});

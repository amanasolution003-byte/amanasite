// Multilingual Data for Amana-Solution Website
const translations = {
    fr: {
        heroTitle: "Création de Sites Web<br>et Solutions Digitales",
        heroSubtitle: "Des solutions sur mesure pour les PME : sites web, CRM, ERP et automatisation",
        aboutTitle: "À propos de nous",
        aboutPara1: "Amana-Solution accompagne les petites et moyennes entreprises dans leur transformation digitale. Nous créons des sites web modernes, des solutions CRM et ERP sur mesure, et nous automatisons vos processus pour optimiser votre productivité.",
        aboutPara2: "Notre équipe combine expertise technique et compréhension des besoins business pour livrer des solutions qui génèrent de la valeur.",
        servicesTitle: "Nos Services",
        contactTitle: "Contactez-nous",
        contactLabelPhone: "Téléphone",
        contactLabelEmail: "Email",
        contactLabelAddress: "Adresse",
        contactLabelWhatsApp: "WhatsApp",
        ctaBtn: "Discutons de votre projet",
        formName: "Votre nom",
        formEmail: "Votre email",
        formMessage: "Votre message",
        formSubmit: "Envoyer le message",
        footerBrand: "Amana-Solution",
        footerDesc: "Création de sites web et solutions digitales pour PME",
        footerAbout: "À propos",
        footerServices: "Services",
        footerPortfolio: "Garanties",
        footerContact: "Contact",
        footerSocialLabel: "Suivez-nous",
        footerCopyright: "2026 Amana-Solution. Tous droits réservés."
    },
    ar: {
        heroTitle: "خلق مواقع ويب<br>و حلول رقمية",
        heroSubtitle: "حلول مخصصة لـ SME : مواقع ويب، CRM، ERP والأتمتة",
        aboutTitle: "من نحن",
        aboutPara1: "توافق أmana-Solution الشركات الصغيرة والمتوسطة في تحولها الرقمي. ننشئ مواقع ويب حديثة، وحلول CRM و ERP مخصصة، ونقوم بأتمتة عملياتك لتحسين الإنتاجية.",
        aboutPara2: "يركز فريقنا على الخبرة التقنية وفهم احتياجات الأعمال لتقديم حلول تخلق قيمة.",
        servicesTitle: "خدماتنا",
        contactTitle: "تواصل معنا",
        contactLabelPhone: "هاتف",
        contactLabelEmail: "بريد إلكتروني",
        contactLabelAddress: "عنوان",
        contactLabelWhatsApp: "واتساب",
        ctaBtn: "لنقم بمناقشة مشروعك",
        formName: "اسمك",
        formEmail: "بريدك الإلكتروني",
        formMessage: "رسالتك",
        formSubmit: "إرسال الرسالة",
        footerBrand: "أmana-Solution",
        footerDesc: "خلق مواقع ويب وحلول رقمية للشركات الصغيرة والمتوسطة",
        footerAbout: "من نحن",
        footerServices: "خدمات",
        footerPortfolio: "ضمانات",
        footerContact: "تواصل",
        footerSocialLabel: "تابعنا",
        footerCopyright: "2026 أmana-Solution. جميع الحقوق محفوظة."
    },
    en: {
        heroTitle: "Web Creation<br>and Digital Solutions",
        heroSubtitle: "Custom solutions for SMEs: websites, CRM, ERP and automation",
        aboutTitle: "About Us",
        aboutPara1: "Amana-Solution accompanies small and medium enterprises in their digital transformation. We create modern websites, custom CRM and ERP solutions, and automate your processes to optimize productivity.",
        aboutPara2: "Our team combines technical expertise and business understanding to deliver value-creating solutions.",
        servicesTitle: "Our Services",
        contactTitle: "Contact Us",
        contactLabelPhone: "Phone",
        contactLabelEmail: "Email",
        contactLabelAddress: "Address",
        contactLabelWhatsApp: "WhatsApp",
        ctaBtn: "Let's discuss your project",
        formName: "Your name",
        formEmail: "Your email",
        formMessage: "Your message",
        formSubmit: "Send Message",
        footerBrand: "Amana-Solution",
        footerDesc: "Web creation and digital solutions for SME",
        footerAbout: "About",
        footerServices: "Services",
        footerPortfolio: "Guarantees",
        footerContact: "Contact",
        footerSocialLabel: "Follow us",
        footerCopyright: "2026 Amana-Solution. All rights reserved."
    }
};

// Current language
let currentLang = 'fr';

// Initialize element references
function initElements() {
    // Collect all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        // Store the key
        el.dataset.key = el.dataset.i18n;
        
        // For input/textarea/buttons, also set placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
            el.dataset.placeholder = el.placeholder;
        }
    });
}

// Switch language function
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update button active states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
                // For form elements, set both value and placeholder
                el.placeholder = translations[lang][key];
                // Keep original value if it's not a submit button
                if (el.type !== 'submit' && el.type !== 'button') {
                    el.value = '';
                }
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update direction-specific classes
    document.body.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('ltr', lang !== 'ar');
    
    // Update hero title with animation
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        heroTitle.classList.add('fade-out');
        setTimeout(() => {
            heroTitle.innerHTML = translations[lang]['heroTitle'];
            heroTitle.classList.remove('fade-out');
        }, 300);
    }
    
    // Store current lang in localStorage for persistence
    localStorage.setItem('userLanguage', lang);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang && translations[savedLang]) {
        switchLanguage(savedLang);
    }
    
    // Initialize element references
    initElements();
    
    // Language selector event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Toggle mobile navigation
function toggleNav() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.getElementById('hamburger');
    
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.mobile a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        const hamburger = document.getElementById('hamburger');
        
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
});
/* ============================================================
   Amana-Solution — App script (v2)
   i18n FR/AR/EN · Services & FAQ injection · Animations
   Contact form → WhatsApp · Scroll effects
   ============================================================ */
'use strict';

const WHATSAPP_NUMBER = '213561790077';

const translations = {
    fr: {
        navAbout: 'À propos', navServices: 'Services', navProcess: 'Démarche',
        navFaq: 'FAQ', navContact: 'Contact', navCta: 'Devis gratuit',
        documentTitle: 'Amana-Solution — Création de sites web & solutions digitales',

        heroBadge: 'Agence digitale pour PME',
        heroTitle: 'Création de sites web<br>et <span class="gradient-text">solutions digitales</span>',
        heroSubtitle: 'Des solutions sur mesure pour les PME : sites web, CRM, ERP et automatisation — pour gagner du temps, de la crédibilité et des clients.',
        ctaPrimary: 'Discutons de votre projet',
        ctaSecondary: 'Découvrir nos services',

        statYears: "Années d'expérience", statProjects: 'Projets livrés',
        statClients: 'Clients accompagnés', statSatisfaction: 'Clients satisfaits',

        aboutEyebrow: 'Qui sommes-nous ?',
        aboutTitle: 'À propos de nous',
        aboutPara1: 'Amana-Solution accompagne les petites et moyennes entreprises dans leur transformation digitale. Nous créons des sites web modernes, des solutions CRM et ERP sur mesure, et nous automatisons vos processus pour optimiser votre productivité.',
        aboutPara2: 'Notre équipe combine expertise technique et compréhension des besoins business pour livrer des solutions qui génèrent de la valeur — avec des prix clairs et des délais tenus.',
        aboutPoint1: 'Conception sur mesure, adaptée à votre activité',
        aboutPoint2: 'Technologies modernes et évolutives',
        aboutPoint3: 'Accompagnement du premier contact à la livraison',
        aboutPoint4: 'Support après livraison inclus',
        aboutCardTag: 'Votre partenaire digital de confiance',
        aboutCardStat1: 'Sites + CRMs', aboutCardStat2: 'livrés clé en main',
        aboutCardStat3: '1 an', aboutCardStat4: "d'hébergement offert",
        chipFast: 'Rapide', chipSecure: 'Sécurisé',

        servicesEyebrow: 'Ce que nous faisons',
        servicesTitle: 'Nos Services',
        servicesSubtitle: 'Des solutions complètes, pensées pour les besoins réels des PME.',
        services: [
            { title: 'Site Vitrine Pro', desc: 'Un site rapide, élégant et optimisé pour convertir vos visiteurs en clients.', tags: ['Design', 'SEO', 'Responsive'] },
            { title: 'Boutique E-commerce', desc: 'Vendez en ligne avec une boutique simple à gérer : produits, paiements, commandes.', tags: ['Paiement', 'Catalogue', 'Livraison'] },
            { title: 'CRM sur mesure', desc: 'Suivez vos clients, devis et relances dans un outil adapté à votre façon de travailler.', tags: ['Clients', 'Devis', 'Relances'] },
            { title: 'Mini ERP / Gestion', desc: 'Factures, stocks, commandes : pilotez toute votre activité au même endroit.', tags: ['Facturation', 'Stock', 'Reporting'] },
            { title: 'Automatisation', desc: 'Relances, rappels, tâches répétitives : nous les automatisons pour vous faire gagner du temps.', tags: ['WhatsApp', 'Email', 'Zapier'] },
            { title: 'Maintenance & SEO', desc: 'Site toujours à jour, sécurisé et bien référencé pour rester visible sur Google.', tags: ['Sécurité', 'Sauvegarde', 'Mise à jour'] }
        ],

        pillarsEyebrow: 'Notre méthode',
        pillarsTitle: 'Trois piliers pour votre activité',
        pillarsSubtitle: "Chaque solution est construite autour d'un objectif clair : vous faire gagner du temps, de la crédibilité et des clients.",
        pillar1Title: 'Développement Web',
        pillar1Desc: 'Une vitrine claire, rapide et conçue pour convertir les visiteurs en clients.',
        pillar2Title: 'Mini CRM & ERP',
        pillar2Desc: 'Outils simples, faits pour vous : suivi des clients, devis, factures, stocks — tout au même endroit.',
        pillar3Title: 'Automatisation',
        pillar3Desc: 'Relances, devis, rappels : ce qui se répète chaque semaine se fait tout seul. Vous gagnez du temps dès le premier mois.',
        pillarBtn: 'Demander un devis',

        processEyebrow: 'Comment ça marche ?',
        processTitle: 'Un déroulement simple et transparent',
        process1Title: 'Écoute & audit', process1Desc: 'Nous comprenons votre activité, vos objectifs et vos contraintes.',
        process2Title: 'Devis clair', process2Desc: 'Un devis fixe et détaillé, sans frais cachés ni mauvaise surprise.',
        process3Title: 'Conception & développement', process3Desc: 'Design, maquettes puis développement avec des points de validation réguliers.',
        process4Title: 'Livraison & support', process4Desc: 'Mise en ligne, formation et accompagnement pour la suite.',

        guaranteesEyebrow: 'Confiance',
        guaranteesTitle: 'Nos Garanties',
        guaranteesSubtitle: 'Trois piliers de confiance pour votre activité',
        guarantee1Title: 'Prix fixe', guarantee1Desc: 'Le devis que vous signez est le prix final. Aucun frais caché.',
        guarantee2Title: 'Délais tenus', guarantee2Desc: 'Un délai de réalisation clair et adapté au projet, respecté.',
        guarantee3Title: 'Support à la livraison', guarantee3Desc: "Livré ne veut pas dire oublié : vous restez accompagné pour les évolutions.",
        guaranteeBtn: 'Demander un devis',

        faqEyebrow: 'Questions fréquentes',
        faqTitle: 'FAQ',
        faq: [
            { q: 'Combien coûte un site web ?', a: 'Nos prix varient selon la complexité du projet, de 500€ à 5000€ selon les fonctionnalités requises. Le devis signé est le prix final : aucun frais caché.' },
            { q: 'Combien de temps pour créer un site ?', a: 'En général, comptez 3 à 6 semaines de la conception au lancement, selon la taille du projet. Un planning précis est fourni avant le démarrage.' },
            { q: 'Proposez-vous un hébergement ?', a: "Nous incluons l'hébergement pendant la première année. Ensuite, les renouvellements sont à la charge du client et nous nous occupons de tout." },
            { q: 'Puis-je modifier mon site après la livraison ?', a: "Oui. Vous restez accompagné après la livraison : petites modifications, évolutions ou nouvelle fonctionnalité, nous sommes disponibles en continu." }
        ],

        contactEyebrow: 'Parlons de votre projet',
        contactTitle: 'Contactez-nous',
        contactIntro: 'Une question, un projet, une idée ? Écrivez-nous, nous répondons rapidement.',
        contactLabelPhone: 'Téléphone', contactLabelEmail: 'Email', contactLabelWhatsApp: 'WhatsApp',
        contactResponse: 'Réponse en moins de 24h ouvrées ⏱️',
        formNameLabel: 'Votre nom', formEmailLabel: 'Votre email', formMessageLabel: 'Votre message',
        formSubmit: 'Envoyer le message',
        formNote: 'Votre message sera envoyé directement via WhatsApp — réponse rapide garantie.',
        formSuccess: '✅ Merci ! Votre message s\'ouvre dans WhatsApp, cliquez sur envoyer pour nous le transmettre.',

        footerDesc: 'Création de sites web et solutions digitales pour PME',
        footerNav: 'Navigation',
        footerAbout: 'À propos', footerServices: 'Services', footerPortfolio: 'Garanties', footerContact: 'Contact',
        footerContactTitle: 'Contact', footerSocialTitle: 'Réseaux',
        footerCopyright: 'Tous droits réservés.'
    },

    ar: {
        navAbout: 'من نحن', navServices: 'خدماتنا', navProcess: 'منهجيتنا',
        navFaq: 'الأسئلة', navContact: 'اتصل بنا', navCta: 'عرض سعر مجاني',
        documentTitle: 'Amana-Solution — إنشاء مواقع وحلول رقمية',

        heroBadge: 'وكالة رقمية للمؤسسات الصغيرة والمتوسطة',
        heroTitle: 'خلق مواقع ويب<br>و <span class="gradient-text">حلول رقمية</span>',
        heroSubtitle: 'حلول مخصصة للمؤسسات الصغيرة والمتوسطة : مواقع ويب، CRM، ERP والأتمتة — لتوفير الوقت والمصداقية وجذب العملاء.',
        ctaPrimary: 'لنناقش مشروعك',
        ctaSecondary: 'اكتشف خدماتنا',

        statYears: 'سنوات من الخبرة', statProjects: 'مشروع مُنجز',
        statClients: 'عميل مرافق', statSatisfaction: 'عملاء راضون',

        aboutEyebrow: 'من نحن ؟',
        aboutTitle: 'من نحن',
        aboutPara1: 'ترافق Amana-Solution المؤسسات الصغيرة والمتوسطة في تحولها الرقمي. ننشئ مواقع ويب حديثة، وحلول CRM و ERP مخصصة، ونقوم بأتمتة عملياتك لتحسين الإنتاجية.',
        aboutPara2: 'يجمع فريقنا بين الخبرة التقنية وفهم احتياجات الأعمال لتقديم حلول تُحدث قيمة حقيقية — بأسعار واضحة وآجال محترمة.',
        aboutPoint1: 'تصميم مخصص يناسب نشاطك',
        aboutPoint2: 'تقنيات حديثة وقابلة للتطور',
        aboutPoint3: 'مرافقة من أول اتصال حتى التسليم',
        aboutPoint4: 'دعم ما بعد التسليم مضمون',
        aboutCardTag: 'شريكك الرقمي الموثوق',
        aboutCardStat1: 'مواقع + أنظمة CRM', aboutCardStat2: 'مسلّمة وجاهزة',
        aboutCardStat3: 'سنة واحدة', aboutCardStat4: 'استضافة مجانية',
        chipFast: 'سريع', chipSecure: 'آمن',

        servicesEyebrow: 'ما نقوم به',
        servicesTitle: 'خدماتنا',
        servicesSubtitle: 'حلول متكاملة، مصممة حسب الاحتياجات الحقيقية للمؤسسات الصغيرة والمتوسطة.',
        services: [
            { title: 'موقع عرض احترافي', desc: 'موقع سريع وأنيق محسّن لتحويل زوارك إلى عملاء.', tags: ['تصميم', 'SEO', 'متجاوب'] },
            { title: 'متجر إلكتروني', desc: 'بِع عبر الإنترنت بمتجر سهل الإدارة : المنتجات، الدفع، الطلبات.', tags: ['دفع', 'كتالوج', 'توصيل'] },
            { title: 'نظام CRM مخصص', desc: 'تابع عملاءك وعروض الأسعار والتذكيرات في أداة تناسب طريقة عملك.', tags: ['عملاء', 'عروض', 'تذكيرات'] },
            { title: 'نظام إدارة مصغّر', desc: 'الفواتير، المخزون، الطلبات : سيطر على كل نشاطك من مكان واحد.', tags: ['فواتير', 'مخزون', 'تقارير'] },
            { title: 'الأتمتة', desc: 'التذكيرات والمهام المتكررة : نؤتمتها لتوفير وقتك.', tags: ['واتساب', 'بريد', 'Zapier'] },
            { title: 'الصيانة و SEO', desc: 'موقع محدّث وآمن ومرتّب جيداً في Google.', tags: ['أمان', 'نسخ احتياطي', 'تحديثات'] }
        ],

        pillarsEyebrow: 'منهجيتنا',
        pillarsTitle: 'ثلاث ركائز لنشاطك',
        pillarsSubtitle: 'كل حل يُبنى حول هدف واضح : توفير وقتك، مصداقيتك واجتذاب عملائك.',
        pillar1Title: 'تطوير الويب',
        pillar1Desc: 'واجهة واضحة وسريعة مصممة لتحويل الزوار إلى عملاء.',
        pillar2Title: 'نظام CRM و ERP مصغّر',
        pillar2Desc: 'أدوات بسيطة مصممة لك : متابعة العملاء، عروض الأسعار، الفواتير، المخزون — كل شيء في مكان واحد.',
        pillar3Title: 'الأتمتة',
        pillar3Desc: 'التذكيرات، عروض الأسعار، التذكيرات المتكررة تتم وحدها. توفر الوقت والمال من الشهر الأول.',
        pillarBtn: 'اطلب عرض سعر',

        processEyebrow: 'كيف نعمل ؟',
        processTitle: 'مسار بسيط وشفاف',
        process1Title: 'استماع و تدقيق', process1Desc: 'نفهم نشاطك وأهدافك وقيودك.',
        process2Title: 'عرض سعر واضح', process2Desc: 'عرض سعر ثابت ومفصل، دون تكاليف خفية.',
        process3Title: 'تصميم وتطوير', process3Desc: 'تصميم ونماذج ثم تطوير مع نقاط تحقق منتظمة.',
        process4Title: 'تسليم ودعم', process4Desc: 'نشر الموقع وتكوينك ومرافقتك بعد ذلك.',

        guaranteesEyebrow: 'ثقة',
        guaranteesTitle: 'ضماناتنا',
        guaranteesSubtitle: 'ثلاث ركائز للثقة لنشاطك',
        guarantee1Title: 'سعر ثابت', guarantee1Desc: 'عرض السعر الذي توقعه هو السعر النهائي. دون تكاليف خفية.',
        guarantee2Title: 'آجال محترمة', guarantee2Desc: 'آجال إنجاز واضحة ومناسبة للمشروع ومحترمة.',
        guarantee3Title: 'دعم عند التسليم', guarantee3Desc: 'التسليم لا يعني النسيان : نبقى معك للتطورات.',
        guaranteeBtn: 'اطلب عرض سعر',

        faqEyebrow: 'أسئلة شائعة',
        faqTitle: 'الأسئلة الشائعة',
        faq: [
            { q: 'كم يكلف موقع الويب ؟', a: 'تختلف أسعارنا حسب تعقيد المشروع، من 500€ إلى 5000€ حسب الوظائف المطلوبة. عرض السعر الموقع هو السعر النهائي : دون تكاليف خفية.' },
            { q: 'كم يستغرق إنشاء موقع ؟', a: 'غالباً من 3 إلى 6 أسابيع من التصميم إلى الإطلاق، حسب حجم المشروع. يُقدَّم جدول زمني دقيق قبل البدء.' },
            { q: 'هل تقدمون استضافة ؟', a: 'نشمل الاستضافة خلال السنة الأولى. بعد ذلك، يكون التجديد على عاتق العميل ونحن نتكفل بكل شيء.' },
            { q: 'هل يمكنني تعديل موقعي بعد التسليم ؟', a: 'نعم. نبقى معك بعد التسليم : تعديلات صغيرة، تطورات أو وظائف جديدة، نحن متاحون دائماً.' }
        ],

        contactEyebrow: 'لنتحدث عن مشروعك',
        contactTitle: 'اتصل بنا',
        contactIntro: 'سؤال، مشروع، فكرة ؟ اكتب لنا، نرد بسرعة.',
        contactLabelPhone: 'هاتف', contactLabelEmail: 'بريد إلكتروني', contactLabelWhatsApp: 'واتساب',
        contactResponse: 'رد خلال أقل من 24 ساعة عمل ⏱️',
        formNameLabel: 'اسمك', formEmailLabel: 'بريدك الإلكتروني', formMessageLabel: 'رسالتك',
        formSubmit: 'إرسال الرسالة',
        formNote: 'ستُرسل رسالتك مباشرة عبر واتساب — رد سريع مضمون.',
        formSuccess: '✅ شكراً ! رسالتك ستفتح في واتساب، اضغط إرسال لنقلها إلينا.',

        footerDesc: 'خلق مواقع ويب وحلول رقمية للمؤسسات الصغيرة والمتوسطة',
        footerNav: 'التنقل',
        footerAbout: 'من نحن', footerServices: 'خدماتنا', footerPortfolio: 'ضماناتنا', footerContact: 'اتصل بنا',
        footerContactTitle: 'اتصال', footerSocialTitle: 'شبكات',
        footerCopyright: 'جميع الحقوق محفوظة.'
    },

    en: {
        navAbout: 'About', navServices: 'Services', navProcess: 'Process',
        navFaq: 'FAQ', navContact: 'Contact', navCta: 'Free quote',
        documentTitle: 'Amana-Solution — Website Creation & Digital Solutions',

        heroBadge: 'Digital agency for SMEs',
        heroTitle: 'Website creation<br>& <span class="gradient-text">digital solutions</span>',
        heroSubtitle: 'Tailor-made solutions for SMEs: websites, CRM, ERP and automation — to save time, gain credibility and win clients.',
        ctaPrimary: "Let's discuss your project",
        ctaSecondary: 'Discover our services',

        statYears: 'Years of experience', statProjects: 'Projects delivered',
        statClients: 'Clients supported', statSatisfaction: 'Happy clients',

        aboutEyebrow: 'Who are we?',
        aboutTitle: 'About Us',
        aboutPara1: 'Amana-Solution supports small and medium businesses in their digital transformation. We build modern websites, custom CRM and ERP solutions, and automate your processes to boost productivity.',
        aboutPara2: 'Our team combines technical expertise and business understanding to deliver value — with clear pricing and on-time delivery.',
        aboutPoint1: 'Custom design tailored to your business',
        aboutPoint2: 'Modern, scalable technologies',
        aboutPoint3: 'Support from first contact to delivery',
        aboutPoint4: 'Post-delivery support included',
        aboutCardTag: 'Your trusted digital partner',
        aboutCardStat1: 'Websites + CRMs', aboutCardStat2: 'delivered turnkey',
        aboutCardStat3: '1 year', aboutCardStat4: 'free hosting',
        chipFast: 'Fast', chipSecure: 'Secure',

        servicesEyebrow: 'What we do',
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Complete solutions designed around the real needs of SMEs.',
        services: [
            { title: 'Pro Showcase Website', desc: 'A fast, elegant website optimized to turn visitors into clients.', tags: ['Design', 'SEO', 'Responsive'] },
            { title: 'E-commerce Store', desc: 'Sell online with an easy-to-manage store: products, payments, orders.', tags: ['Payments', 'Catalog', 'Shipping'] },
            { title: 'Custom CRM', desc: 'Track clients, quotes and follow-ups in a tool that fits how you work.', tags: ['Clients', 'Quotes', 'Follow-ups'] },
            { title: 'Mini ERP / Management', desc: 'Invoices, inventory, orders: run your whole activity in one place.', tags: ['Invoicing', 'Stock', 'Reporting'] },
            { title: 'Automation', desc: 'Follow-ups, reminders, repetitive tasks: we automate them to save you time.', tags: ['WhatsApp', 'Email', 'Zapier'] },
            { title: 'Maintenance & SEO', desc: 'Keep your site up to date, secure and well ranked on Google.', tags: ['Security', 'Backup', 'Updates'] }
        ],

        pillarsEyebrow: 'Our method',
        pillarsTitle: 'Three pillars for your business',
        pillarsSubtitle: 'Every solution is built around one clear goal: help you save time, gain credibility and win clients.',
        pillar1Title: 'Web Development',
        pillar1Desc: 'A clear, fast showcase designed to turn visitors into clients.',
        pillar2Title: 'Mini CRM & ERP',
        pillar2Desc: 'Simple tools made for you: client tracking, quotes, invoices, stock — all in one place.',
        pillar3Title: 'Automation',
        pillar3Desc: 'Follow-ups, quotes, reminders: what repeats every week happens on its own. Save time from month one.',
        pillarBtn: 'Request a quote',

        processEyebrow: 'How it works',
        processTitle: 'A simple, transparent process',
        process1Title: 'Listen & audit', process1Desc: 'We understand your business, goals and constraints.',
        process2Title: 'Clear quote', process2Desc: 'A fixed, detailed quote with no hidden fees or surprises.',
        process3Title: 'Design & build', process3Desc: 'Design, mockups then development with regular checkpoints.',
        process4Title: 'Delivery & support', process4Desc: 'Launch, training and ongoing support for what comes next.',

        guaranteesEyebrow: 'Trust',
        guaranteesTitle: 'Our Guarantees',
        guaranteesSubtitle: 'Three pillars of trust for your business',
        guarantee1Title: 'Fixed price', guarantee1Desc: 'The quote you sign is the final price. No hidden fees.',
        guarantee2Title: 'On-time delivery', guarantee2Desc: 'A clear delivery timeline, matched to the project.',
        guarantee3Title: 'Delivery support', guarantee3Desc: 'Delivered doesn’t mean forgotten: we stay with you for evolutions.',
        guaranteeBtn: 'Request a quote',

        faqEyebrow: 'Frequently asked questions',
        faqTitle: 'FAQ',
        faq: [
            { q: 'How much does a website cost?', a: 'Prices vary with project complexity, from €500 to €5000 depending on the features required. The quote you sign is the final price: no hidden fees.' },
            { q: 'How long does it take to build a site?', a: 'Usually 3 to 6 weeks from design to launch, depending on the scope. A clear schedule is provided before starting.' },
            { q: 'Do you provide hosting?', a: 'We include hosting for the first year. After that, renewals are the client’s responsibility and we handle everything for you.' },
            { q: 'Can I update my site after delivery?', a: 'Yes. You stay supported after launch: small tweaks, evolutions or new features — we are always available.' }
        ],

        contactEyebrow: 'Let’s talk about your project',
        contactTitle: 'Contact Us',
        contactIntro: 'A question, a project, an idea? Write to us, we reply fast.',
        contactLabelPhone: 'Phone', contactLabelEmail: 'Email', contactLabelWhatsApp: 'WhatsApp',
        contactResponse: 'Reply within 24 working hours ⏱️',
        formNameLabel: 'Your name', formEmailLabel: 'Your email', formMessageLabel: 'Your message',
        formSubmit: 'Send Message',
        formNote: 'Your message will be sent via WhatsApp — fast reply guaranteed.',
        formSuccess: '✅ Thank you! Your message opens in WhatsApp, hit send to deliver it to us.',

        footerDesc: 'Website creation and digital solutions for SMEs',
        footerNav: 'Navigation',
        footerAbout: 'About', footerServices: 'Services', footerPortfolio: 'Guarantees', footerContact: 'Contact',
        footerContactTitle: 'Contact', footerSocialTitle: 'Social',
        footerCopyright: 'All rights reserved.'
    }
};

let currentLang = null;

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function translatePage() {
    // Static [data-i18n] elements
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[currentLang][key];
        if (typeof value !== 'string') return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
        } else {
            el.innerHTML = value;
        }
    });
    renderServices();
    renderFAQ();
}

/* ---------- Services injection ---------- */
const SERVICE_ICONS = [
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 15h18M9 3v18"/>',
    '<path d="M3 9l9-6 9 6"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 14h3"/><path d="M14 14h3"/>',
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13v3"/><path d="M16 13v3"/>',
    '<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>',
    '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'
];

function renderServices() {
    const grid = $('#servicesGrid');
    if (!grid || !translations[currentLang].services) return;
    grid.innerHTML = translations[currentLang].services.map((s, i) => {
        const c = SERVICE_COLORS[i] || SERVICE_COLORS[0];
        return `
        <article class="service-card reveal visible" style="--ic: ${c[0]}; --ic2: ${c[1]};">
            <div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SERVICE_ICONS[i]}</svg></div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="service-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </article>`;
    }).join('');
}

// Per-card icon gradient colors (6 services)
const SERVICE_COLORS = [
    ['#6366f1', '#06b6d4'],
    ['#10b981', '#06b6d4'],
    ['#8b5cf6', '#6366f1'],
    ['#f59e0b', '#ef4444'],
    ['#ec4899', '#8b5cf6'],
    ['#06b6d4', '#10b981']
];

/* ---------- FAQ injection ---------- */
function renderFAQ() {
    const list = $('#faqList');
    if (!list || !translations[currentLang].faq) return;
    list.innerHTML = translations[currentLang].faq.map((item, i) => `
        <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-${i}">
                <span>${item.q}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-a" id="faq-a-${i}"><p>${item.a}</p></div>
        </div>
    `).join('');
    $$('.faq-q', list).forEach(btn => btn.addEventListener('click', () => toggleFaq(btn)));
}

function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const answer = $('.faq-a', item);
    const isOpen = item.classList.contains('open');
    // Close siblings
    $$('.faq-item.open').forEach(other => {
        if (other !== item) {
            other.classList.remove('open');
            $('.faq-a', other).style.maxHeight = null;
            $('.faq-q', other).setAttribute('aria-expanded', 'false');
        }
    });
    if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
    } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
    }
}

/* ---------- Language switching ---------- */
function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    $$('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    translatePage();
    localStorage.setItem('userLanguage', lang);
    const metaTitle = translations[lang].documentTitle;
    if (metaTitle) document.title = metaTitle;
}

/* ---------- Mobile nav ---------- */
function setNav(open) {
    $('#hamburger').classList.toggle('open', open);
    $('#hamburger').setAttribute('aria-expanded', String(open));
    $('#mobileNav').classList.toggle('open', open);
    $('#navOverlay').classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
}
window.toggleNav = () => setNav(!$('#mobileNav').classList.contains('open'));

/* ---------- Scroll reveal ---------- */
function initReveal() {
    const els = $$('.reveal');
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
}

/* ---------- Counters ---------- */
function initCounters() {
    const counters = $$('.stat-number');
    if (!counters.length) return;
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            io.unobserve(el);
            const target = parseInt(el.dataset.count, 10) || 0;
            const suffix = el.dataset.suffix || '';
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                el.textContent = target + suffix;
                return;
            }
            const duration = 1400;
            const start = performance.now();
            const tick = now => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.4 });
    counters.forEach(el => io.observe(el));
}

/* ---------- Navbar & misc scroll effects ---------- */
function initScroll() {
    const navbar = $('#navbar');
    const scrollTop = $('#scrollTop');

    const onScroll = () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 40);
        scrollTop.classList.toggle('show', y > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Active link highlighting
    const sections = $$('section[id]');
    const links = $$('.nav-links a[href^="#"]');
    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = '#' + entry.target.id;
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(sec => spy.observe(sec));
}

/* ---------- Contact form ---------- */
function initForm() {
    const form = $('#contactForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = $('#formName').value.trim();
        const email = $('#formEmail').value.trim();
        const message = $('#formMessage').value.trim();

        if (!name || !email || !message) {
            const note = $('.form-note', form);
            note.style.color = 'var(--danger)';
            setTimeout(() => { note.style.color = ''; }, 2500);
            return;
        }

        const text = `${translations[currentLang].formSuccessPrefix || ''}` +
            `👋 Bonjour Amana-Solution !\n\n` +
            `👤 Nom : ${name}\n📧 Email : ${email}\n\n💬 Message :\n${message}`;
        const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(wa, '_blank', 'noopener');

        const success = $('.form-success', form);
        success.textContent = translations[currentLang].formSuccess;
        success.classList.add('show');
        form.reset();
        setTimeout(() => success.classList.remove('show'), 8000);
    });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
    // Default language
    const saved = localStorage.getItem('userLanguage');
    const lang = saved && translations[saved] ? saved : 'fr';
    switchLanguage(lang);

    // Mobile nav events
    $('#hamburger').addEventListener('click', toggleNav);
    $('#navOverlay').addEventListener('click', () => setNav(false));
    $$('#mobileNav a').forEach(a => a.addEventListener('click', () => setNav(false)));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') setNav(false);
    });

    // Smooth anchor scrolling (native)
    $$('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = $(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Year
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initReveal();
    initCounters();
    initScroll();
    initForm();
});
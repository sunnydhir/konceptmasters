/**
 * KonceptMasters - Bilingual Language System
 * Supports English (EN) and Hindi (HI) for international students
 */

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Book Free Assessment',
    'lang.switch': 'Switch Language',

    // Hero Section
    'hero.badge': 'Serving students across Canada and internationally',
    'hero.title1': 'Master Concepts.',
    'hero.title2': 'Build Confidence.',
    'hero.title3': 'Achieve Excellence.',
    'hero.description': 'KonceptMasters offers personalized, high-quality math and science tutoring for students in Grades 8-12, guided by an Ontario College of Teachers OCT-certified educator with international teaching experience.',
    'hero.cta1': 'Book Free Assessment',
    'hero.cta2': 'View Services',
    'hero.trust1': 'OCT-Certified Teacher',
    'hero.trust2': 'Ontario, CBSE & ICSE',
    'hero.trust3': 'Personalized Learning',
    'hero.card1.title': 'Years Experience',
    'hero.card2.title': 'OCT Certified',

    // Stats
    'stats.students': 'Students Helped',
    'stats.hours': 'Hours Tutored',
    'stats.success': 'Success Rate',
    'stats.reviews': '5-Star Reviews',

    // About
    'about.experience': 'Years Experience',
    'about.title': 'Master the Concept, Master the Subject',
    'about.description1': 'KonceptMasters is led by an Ontario College of Teachers OCT-certified educator with more than 20 years of diverse teaching and professional experience across India, China, Turkey, and Canada. This cross-cultural background allows us to understand different learning styles, curriculums, and academic expectations.',
    'about.description2': 'We believe that true learning goes beyond memorization — it begins with clarity, curiosity, and the ability to apply concepts independently. Our mission is to help students master concepts, not just complete homework.',
    'about.feature1': 'OCT-Certified Educator',
    'about.feature2': 'Ontario, CBSE & ICSE Curriculum',
    'about.feature3': 'Personalized Learning Plans',
    'about.feature4': 'Global Student Experience',

    // Services
    'services.title': 'Personalized Tutoring for Home School Students',
    'services.subtitle': 'Structured, high-quality tutoring designed to build confidence, clarity, and long-term academic success.',
    'services.math.title': 'Math Tutoring',
    'services.math.description': 'Ontario Curriculum, CBSE, ICSE. From foundational algebra to advanced calculus and functions.',
    'services.math.grades': 'Grades 8-12',
    'services.science.title': 'Science Tutoring',
    'services.science.description': 'Physics and General Science with focus on conceptual understanding and real-world applications.',
    'services.science.grades': 'Grades 8-10',
    'services.concept.title': 'Concept Strengthening',
    'services.concept.description': 'Identifying and addressing learning gaps. Building strong foundations for lasting understanding.',
    'services.concept.grades': 'All Grades',
    'services.exam.title': 'Exam Preparation',
    'services.exam.description': 'Homework support, test prep, and enrichment for advanced learners. Customized learning plans.',
    'services.exam.grades': 'All Grades',
    'services.online.title': 'Live Online Sessions',
    'services.online.description': 'Interactive virtual classes with digital whiteboards, screen sharing, and real-time collaboration. Learn from anywhere in Canada or internationally.',
    'services.online.grades': 'All Grades',
    'services.inperson.title': 'In-Person Coaching',
    'services.inperson.description': 'Face-to-face tutoring sessions in a focused, structured environment. Personalized attention with hands-on problem solving.',
    'services.inperson.grades': 'All Grades',

    // Programs
    'programs.title': 'Mathematics Programs',
    'programs.subtitle': 'Ontario Curriculum aligned instruction with support for CBSE, ICSE, and international pathways',
    'programs.g910.title': 'Grades 9 & 10 — Foundational',
    'programs.g910.courses': 'Courses: MTH1W (Grade 9), MTH2W (Grade 10)',
    'programs.g910.topic1': 'Number systems and algebraic reasoning',
    'programs.g910.topic2': 'Linear relations and equations',
    'programs.g910.topic3': 'Polynomials, coordinate geometry, trigonometry',
    'programs.g11.title': 'Grade 11 — University Prep',
    'programs.g11.courses': 'Course: MCR3U — Functions',
    'programs.g11.topic1': 'Polynomial, rational, trigonometric functions',
    'programs.g11.topic2': 'Exponential and logarithmic functions',
    'programs.g11.topic3': 'Sequences, series, and mathematical modeling',
    'programs.g12af.title': 'Grade 12 — Advanced Functions',
    'programs.g12af.courses': 'Course: MHF4U — Advanced Functions',
    'programs.g12af.topic1': 'Function transformations and inverses',
    'programs.g12af.topic2': 'Trigonometric identities and equations',
    'programs.g12af.topic3': 'Rates of change and mathematical proofs',
    'programs.g12cv.title': 'Grade 12 — Calculus & Vectors',
    'programs.g12cv.courses': 'Course: MCV4U — Calculus & Vectors',
    'programs.g12cv.topic1': 'Limits, continuity, derivatives',
    'programs.g12cv.topic2': 'Optimization and integrals introduction',
    'programs.g12cv.topic3': 'Vector operations in 2D and 3D',
    'programs.uni.title': 'University-Level Mathematics Support',
    'programs.uni.description': 'Support for Engineering, Computer Science, Physical Sciences, Economics, and Data Science programs.',

    // Why Choose
    'why.title': 'Why KonceptMasters?',
    'why.subtitle': 'We prioritize quality over volume, ensuring every student receives focused attention',
    'why.certified.title': 'Certified Professional',
    'why.certified.description': 'Instruction led exclusively by an OCT-certified educator with 20+ years of international experience.',
    'why.personal.title': 'Individual Learning Plans',
    'why.personal.description': 'Never one-size-fits-all. Each lesson is tailored to your pace, goals, and curriculum requirements.',
    'why.concept.title': 'Concept-First Teaching',
    'why.concept.description': 'Not shortcut-based learning. We build deep conceptual understanding that lasts beyond exams.',
    'why.environment.title': 'Structured Environment',
    'why.environment.description': 'Calm, disciplined learning environment with regular feedback for parents on student progress.',

    // How It Works
    'how.title': 'How It Works',
    'how.subtitle': 'Getting started is easy - just four simple steps',
    'how.step1.title': 'Book a Call',
    'how.step1.description': 'Schedule a free consultation to discuss your goals and learning needs.',
    'how.step2.title': 'Assessment',
    'how.step2.description': "We'll assess current knowledge and create a personalized learning plan.",
    'how.step3.title': 'Start Learning',
    'how.step3.description': 'Begin your tailored tutoring sessions online.',
    'how.step4.title': 'Track Progress',
    'how.step4.description': 'Regular progress updates and adjustments to maximize results.',

    // Testimonials
    'testimonials.title': 'What Parents & Students Say',
    'testimonials.subtitle': 'Real feedback from real families',
    'testimonials.t1.text': '"KonceptMasters helped my child truly understand math concepts instead of memorizing steps. We saw a big improvement in confidence."',
    'testimonials.t1.location': 'Toronto, Canada',
    'testimonials.t2.text': '"The teaching approach is structured, patient, and very effective. Highly recommended."',
    'testimonials.t2.location': 'International Student',
    'testimonials.t3.text': '"Excellent balance of discipline and encouragement. Concepts are explained clearly and thoroughly."',
    'testimonials.t3.location': 'Mississauga, Canada',

    // Pricing
    'pricing.title': 'Transparent & Value-Driven Pricing',
    'pricing.subtitle': 'Tiered by grade level — all prices in CAD',
    'pricing.popular': 'Recommended',
    'pricing.cta': 'Get Quote',
    'pricing.row.oneOnOne': 'One-on-One',
    'pricing.row.group': 'Group (2-4)',
    'pricing.row.monthly': 'Monthly · 8 sessions',
    'pricing.g89.title': 'Grade 8 – 9',
    'pricing.g89.description': 'Foundational math & science — building blocks for high school',
    'pricing.g89.feature1': 'Concept-building from the ground up',
    'pricing.g89.feature2': 'Ontario, CBSE & ICSE curriculum',
    'pricing.g89.feature3': 'Homework support & progress reports',
    'pricing.g910.title': 'Grade 9 – 10',
    'pricing.g910.description': 'MTH1W & MTH2W — algebra, functions, and trigonometry foundations',
    'pricing.g910.feature1': 'Linear, polynomial & trig fundamentals',
    'pricing.g910.feature2': 'Personalized learning plan',
    'pricing.g910.feature3': 'Regular parent updates',
    'pricing.g1112.title': 'Grade 11 – 12',
    'pricing.g1112.description': 'MCR3U, MHF4U, MCV4U — university-prep math & physics',
    'pricing.g1112.feature1': 'Functions, calculus & vectors',
    'pricing.g1112.feature2': 'University-prep test strategy',
    'pricing.g1112.feature3': 'Exam prep & final-grade lift',
    'pricing.note': 'All prices in CAD. Monthly plans cover 8 one-hour sessions and can be used across subjects. Group rates apply for 2-4 students of the same grade level. Contact us for a free consultation.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about tutoring with KonceptMasters',
    'faq.q1': 'What grade levels do you support?',
    'faq.a1': 'We support students in Grades 8 through 12 for mathematics, and Grades 8-10 for science. We also provide university-level mathematics support for students in Engineering, Computer Science, Physical Sciences, Economics, and Data Science programs.',
    'faq.q2': 'Which curriculum do you teach?',
    'faq.a2': 'We teach Ontario Curriculum (including MTH1W, MTH2W, MCR3U, MHF4U, MCV4U), as well as CBSE and ICSE curriculums. Our cross-cultural teaching experience allows us to adapt instruction to meet the unique needs of each student regardless of their academic background.',
    'faq.q3': 'Are sessions online or in person?',
    'faq.a3': 'Sessions are currently offered online, with interactive and engaging lessons using digital whiteboards, screen sharing, and collaborative tools. This allows us to serve students across Canada and internationally with the same high-quality instruction.',
    'faq.q4': 'Who teaches the classes?',
    'faq.a4': 'All sessions are conducted by an Ontario College of Teachers OCT-certified educator with more than 20 years of diverse teaching and professional experience across India, China, Turkey, and Canada. This ensures every student receives expert, qualified instruction.',
    'faq.q5': 'Do you offer trial sessions?',
    'faq.a5': 'Yes, a consultation session is available to assess fit and learning needs. This allows us to understand your academic goals, identify any learning gaps, and determine how we can best support your educational journey.',

    // Contact
    'contact.title': "Begin Your Child's Academic Journey with Confidence",
    'contact.subtitle': 'Whether your child needs concept strengthening, curriculum support, or academic enrichment, KonceptMasters offers a refined and results-focused learning experience.',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.whatsapp.text': 'Send a message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.select': 'Select a subject',
    'contact.form.multiple': 'Multiple Subjects',
    'contact.form.grade': "Student's Grade",
    'contact.form.selectgrade': 'Select grade level',
    'contact.form.message': 'Tell me about your goals',
    'contact.form.submit': 'Book Free Assessment',
    'contact.success.title': 'Message Sent!',
    'contact.success.text': "Thank you for reaching out. We'll get back to you within 24 hours.",

    // Footer
    'footer.description': 'Premium Math & Science tutoring for students in Canada and internationally. Where Concepts Become Confidence.',
    'footer.quicklinks': 'Quick Links',
    'footer.subjects': 'Subjects',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },

  hi: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Book Free Assessment',
    'lang.switch': 'Switch Language',

    // Hero Section
    'hero.badge': 'Serving students across Canada and internationally',
    'hero.title1': 'Master Concepts.',
    'hero.title2': 'Build Confidence.',
    'hero.title3': 'Achieve Excellence.',
    'hero.description': 'KonceptMasters offers personalized, high-quality math and science tutoring for students in Grades 8-12, guided by an OCT-certified educator with international teaching experience.',
    'hero.cta1': 'Book Free Assessment',
    'hero.cta2': 'View Services',
    'hero.trust1': 'OCT-Certified Teacher',
    'hero.trust2': 'Ontario, CBSE & ICSE',
    'hero.trust3': 'Personalized Learning',
    'hero.card1.title': 'Years Experience',
    'hero.card2.title': 'OCT Certified',

    // Stats
    'stats.students': 'Students Helped',
    'stats.hours': 'Hours Tutored',
    'stats.success': 'Success Rate',
    'stats.reviews': '5-Star Reviews',

    // About
    'about.experience': 'Years Experience',
    'about.title': 'Master the Concept, Master the Subject',
    'about.description1': 'KonceptMasters is led by an OCT-certified educator with more than 20 years of diverse teaching experience across India, China, Turkey, and Canada.',
    'about.description2': 'We believe true learning goes beyond memorization — it begins with clarity, curiosity, and the ability to apply concepts independently.',
    'about.feature1': 'OCT-Certified Educator',
    'about.feature2': 'Ontario, CBSE & ICSE Curriculum',
    'about.feature3': 'Personalized Learning Plans',
    'about.feature4': 'Global Student Experience',

    // Services
    'services.title': 'Personalized Tutoring for Home School Students',
    'services.subtitle': 'Structured tutoring designed to build confidence and long-term academic success.',
    'services.math.title': 'Math Tutoring',
    'services.math.description': 'Ontario Curriculum, CBSE, ICSE. From algebra to calculus.',
    'services.math.grades': 'Grades 8-12',
    'services.science.title': 'Science Tutoring',
    'services.science.description': 'Physics and General Science with conceptual understanding.',
    'services.science.grades': 'Grades 8-10',
    'services.concept.title': 'Concept Strengthening',
    'services.concept.description': 'Identifying and addressing learning gaps.',
    'services.concept.grades': 'All Grades',
    'services.exam.title': 'Exam Preparation',
    'services.exam.description': 'Homework support, test prep, and enrichment.',
    'services.exam.grades': 'All Grades',
    'services.online.title': 'Live Online Sessions',
    'services.online.description': 'Interactive virtual classes with digital whiteboards and real-time collaboration.',
    'services.online.grades': 'All Grades',
    'services.inperson.title': 'In-Person Coaching',
    'services.inperson.description': 'Face-to-face tutoring in a focused, structured environment.',
    'services.inperson.grades': 'All Grades',

    // Programs
    'programs.title': 'Mathematics Programs',
    'programs.subtitle': 'Ontario Curriculum with CBSE, ICSE support',
    'programs.g910.title': 'Grades 9 & 10 — Foundational',
    'programs.g910.courses': 'Courses: MTH1W (Grade 9), MTH2W (Grade 10)',
    'programs.g910.topic1': 'Number systems and algebraic reasoning',
    'programs.g910.topic2': 'Linear relations and equations',
    'programs.g910.topic3': 'Polynomials, coordinate geometry, trigonometry',
    'programs.g11.title': 'Grade 11 — University Prep',
    'programs.g11.courses': 'Course: MCR3U — Functions',
    'programs.g11.topic1': 'Polynomial, rational, trigonometric functions',
    'programs.g11.topic2': 'Exponential and logarithmic functions',
    'programs.g11.topic3': 'Sequences, series, and modeling',
    'programs.g12af.title': 'Grade 12 — Advanced Functions',
    'programs.g12af.courses': 'Course: MHF4U',
    'programs.g12af.topic1': 'Function transformations and inverses',
    'programs.g12af.topic2': 'Trigonometric identities',
    'programs.g12af.topic3': 'Rates of change and proofs',
    'programs.g12cv.title': 'Grade 12 — Calculus & Vectors',
    'programs.g12cv.courses': 'Course: MCV4U',
    'programs.g12cv.topic1': 'Limits, continuity, derivatives',
    'programs.g12cv.topic2': 'Optimization and integrals',
    'programs.g12cv.topic3': 'Vector operations',
    'programs.uni.title': 'University-Level Math Support',
    'programs.uni.description': 'Engineering, CS, Sciences, Economics, Data Science',

    // Why Choose
    'why.title': 'Why KonceptMasters?',
    'why.subtitle': 'Quality over volume — focused attention for every student',
    'why.certified.title': 'Certified Professional',
    'why.certified.description': 'OCT-certified educator with 20+ years international experience.',
    'why.personal.title': 'Individual Learning Plans',
    'why.personal.description': 'Tailored to your pace, goals, and curriculum.',
    'why.concept.title': 'Concept-First Teaching',
    'why.concept.description': 'Deep understanding that lasts beyond exams.',
    'why.environment.title': 'Structured Environment',
    'why.environment.description': 'Calm learning with regular parent feedback.',

    // How It Works
    'how.title': 'How It Works',
    'how.subtitle': 'Four simple steps to get started',
    'how.step1.title': 'Book a Call',
    'how.step1.description': 'Free consultation to discuss goals.',
    'how.step2.title': 'Assessment',
    'how.step2.description': 'Create personalized learning plan.',
    'how.step3.title': 'Start Learning',
    'how.step3.description': 'Begin tailored online sessions.',
    'how.step4.title': 'Track Progress',
    'how.step4.description': 'Regular updates and adjustments.',

    // Testimonials
    'testimonials.title': 'What Parents & Students Say',
    'testimonials.subtitle': 'Real feedback from families',
    'testimonials.t1.text': '"KonceptMasters helped my child truly understand math concepts. Big improvement in confidence."',
    'testimonials.t1.location': 'Toronto, Canada',
    'testimonials.t2.text': '"Structured, patient, and effective teaching. Highly recommended."',
    'testimonials.t2.location': 'International Student',
    'testimonials.t3.text': '"Excellent balance of discipline and encouragement."',
    'testimonials.t3.location': 'Mississauga, Canada',

    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Tiered by grade level — all prices in CAD',
    'pricing.popular': 'Recommended',
    'pricing.cta': 'Get Quote',
    'pricing.row.oneOnOne': 'One-on-One',
    'pricing.row.group': 'Group (2-4)',
    'pricing.row.monthly': 'Monthly · 8 sessions',
    'pricing.g89.title': 'Grade 8 – 9',
    'pricing.g89.description': 'Foundational math & science',
    'pricing.g89.feature1': 'Concept-building from the ground up',
    'pricing.g89.feature2': 'Ontario, CBSE & ICSE curriculum',
    'pricing.g89.feature3': 'Homework support & progress reports',
    'pricing.g910.title': 'Grade 9 – 10',
    'pricing.g910.description': 'MTH1W & MTH2W — algebra & functions',
    'pricing.g910.feature1': 'Linear, polynomial & trig fundamentals',
    'pricing.g910.feature2': 'Personalized learning plan',
    'pricing.g910.feature3': 'Regular parent updates',
    'pricing.g1112.title': 'Grade 11 – 12',
    'pricing.g1112.description': 'MCR3U, MHF4U, MCV4U — university-prep',
    'pricing.g1112.feature1': 'Functions, calculus & vectors',
    'pricing.g1112.feature2': 'University-prep test strategy',
    'pricing.g1112.feature3': 'Exam prep & final-grade lift',
    'pricing.note': 'Contact us for personalized consultation.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything about KonceptMasters tutoring',
    'faq.q1': 'What grade levels do you support?',
    'faq.a1': 'Grades 8-12 for math, Grades 8-10 for science, plus university-level math support.',
    'faq.q2': 'Which curriculum do you teach?',
    'faq.a2': 'Ontario Curriculum, CBSE, and ICSE.',
    'faq.q3': 'Are sessions online or in person?',
    'faq.a3': 'Currently online with interactive tools.',
    'faq.q4': 'Who teaches the classes?',
    'faq.a4': 'OCT-certified educator with 20+ years experience.',
    'faq.q5': 'Do you offer trial sessions?',
    'faq.a5': 'Yes, consultation sessions are available.',

    // Contact
    'contact.title': "Begin Your Academic Journey",
    'contact.subtitle': 'Concept strengthening, curriculum support, or enrichment — we provide results-focused learning.',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.whatsapp.text': 'Send message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.select': 'Select subject',
    'contact.form.multiple': 'Multiple Subjects',
    'contact.form.grade': "Student's Grade",
    'contact.form.selectgrade': 'Select grade',
    'contact.form.message': 'Your goals',
    'contact.form.submit': 'Book Free Assessment',
    'contact.success.title': 'Message Sent!',
    'contact.success.text': "We'll respond within 24 hours.",

    // Footer
    'footer.description': 'Premium Math & Science tutoring. Where Concepts Become Confidence.',
    'footer.quicklinks': 'Quick Links',
    'footer.subjects': 'Subjects',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  }
};

// Language state
let currentLanguage = localStorage.getItem('konceptmasters-lang') || 'en';

/**
 * Initialize language system
 */
function initLanguage() {
  // Check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');

  if (langParam && (langParam === 'en' || langParam === 'hi')) {
    currentLanguage = langParam;
    localStorage.setItem('konceptmasters-lang', currentLanguage);
  }

  // Apply current language
  applyLanguage(currentLanguage);

  // Set up toggle buttons
  setupLanguageToggle();
}

/**
 * Apply language to all elements
 */
function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach(function(element) {
    const key = element.getAttribute('data-lang');
    const translation = translations[lang][key];

    if (translation) {
      element.textContent = translation;
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update flag and language text in toggle
  updateToggleDisplay(lang);

  // Store preference
  localStorage.setItem('konceptmasters-lang', lang);
  currentLanguage = lang;
}

/**
 * Update language toggle display
 */
function updateToggleDisplay(lang) {
  const currentFlag = document.getElementById('currentFlag');
  const currentLang = document.getElementById('currentLang');

  if (currentFlag) {
    currentFlag.textContent = lang === 'en' ? '🇨🇦' : '🇮🇳';
  }

  if (currentLang) {
    currentLang.textContent = lang === 'en' ? 'EN' : 'HI';
  }
}

/**
 * Set up language toggle buttons
 */
function setupLanguageToggle() {
  const toggleBtn = document.getElementById('langToggle');
  const toggleBtnMobile = document.getElementById('langToggleMobile');

  function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'hi' : 'en';

    // Add transition class
    document.body.classList.add('lang-switching');

    // Apply new language
    applyLanguage(newLang);

    // Remove transition class
    setTimeout(function() {
      document.body.classList.remove('lang-switching');
    }, 300);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }

  if (toggleBtnMobile) {
    toggleBtnMobile.addEventListener('click', toggleLanguage);
  }
}

/**
 * Get translation by key
 */
function t(key) {
  return translations[currentLanguage][key] || key;
}

/**
 * Get current language
 */
function getCurrentLanguage() {
  return currentLanguage;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initLanguage);

// Export for use in other scripts
window.KonceptMastersLang = {
  t: t,
  getCurrentLanguage: getCurrentLanguage,
  applyLanguage: applyLanguage
};

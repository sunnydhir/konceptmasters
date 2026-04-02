/**
 * KonceptMasters - Main JavaScript
 * Core functionality for the tutoring website
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initPageLoader();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initCounters();
  initTestimonials();
  initPricing();
  initFAQ();
  initContactForm();
  initFooterYear();
});

/**
 * Page Loader
 */
function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;

  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 500);
  });

  // Fallback: hide loader after 3 seconds max
  setTimeout(function() {
    loader.classList.add('hidden');
  }, 3000);
}

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });

  // Initial check
  updateNavbar();
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const close = document.getElementById('mobileClose');
  const links = menu ? menu.querySelectorAll('a') : [];

  if (!toggle || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    overlay.style.display = 'block';
    toggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(function() {
      overlay.style.display = 'none';
    }, 300);
  }

  toggle.addEventListener('click', function() {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  close.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu when clicking a link
  links.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const navbar = document.getElementById('navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 80;

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/**
 * Animated Counters
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach(function(counter) {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);

    element.textContent = current.toLocaleString() + suffix;
    element.classList.add('counting');

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString() + suffix;
      element.classList.remove('counting');
    }
  }

  requestAnimationFrame(update);
}

/**
 * Testimonials Carousel
 */
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.testimonial-card');
  if (cards.length === 0) return;

  let currentIndex = 0;
  let cardsToShow = getCardsToShow();
  let autoPlayInterval;

  function getCardsToShow() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // var(--space-6)
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }

  function nextSlide() {
    const maxIndex = Math.max(0, cards.length - cardsToShow);
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateCarousel();
  }

  function prevSlide() {
    const maxIndex = Math.max(0, cards.length - cardsToShow);
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateCarousel();
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  nextBtn.addEventListener('click', function() {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  prevBtn.addEventListener('click', function() {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);

  // Handle resize
  window.addEventListener('resize', function() {
    cardsToShow = getCardsToShow();
    currentIndex = 0;
    updateCarousel();
  });

  // Start autoplay
  startAutoPlay();
}

/**
 * Pricing Currency Toggle
 */
function initPricing() {
  const currencyBtns = document.querySelectorAll('.currency-btn');
  const priceElements = document.querySelectorAll('[data-price]');
  const currencySymbols = document.querySelectorAll('[data-price-currency]');

  if (currencyBtns.length === 0) return;

  currencyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const currency = this.getAttribute('data-currency');

      // Update active button
      currencyBtns.forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');

      // Update prices
      priceElements.forEach(function(el) {
        if (currency === 'TRY') {
          el.textContent = el.getAttribute('data-price-try');
        } else {
          el.textContent = el.getAttribute('data-price');
        }
      });

      // Update currency symbol
      currencySymbols.forEach(function(el) {
        el.textContent = currency === 'TRY' ? '₺' : '$';
      });
    });
  });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length === 0) return;

  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const content = item.querySelector('.faq-answer-content');

    if (!question || !answer || !content) return;

    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('active');

      // Close all items
      faqItems.forEach(function(i) {
        i.classList.remove('active');
        const ans = i.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = '0';
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = content.offsetHeight + 'px';
      }
    });
  });
}

/**
 * Contact Form
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const grade = form.querySelector('#grade');

    let isValid = true;

    [name, email, subject, grade].forEach(function(field) {
      if (!field.value.trim()) {
        field.classList.add('shake');
        isValid = false;
        setTimeout(function() {
          field.classList.remove('shake');
        }, 500);
      }
    });

    if (!isValid) return;

    // Simulate form submission (replace with actual form handling)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    // For demo purposes - replace with actual Formspree or backend submission
    setTimeout(function() {
      form.style.display = 'none';
      if (successMessage) {
        successMessage.classList.remove('hidden');
        successMessage.style.display = 'flex';
        successMessage.style.flexDirection = 'column';
        successMessage.style.alignItems = 'center';
        successMessage.style.textAlign = 'center';
        successMessage.style.padding = 'var(--space-12)';
      }

      // Reset form
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      if (this.required && !this.value.trim()) {
        this.style.borderColor = 'var(--accent-red)';
      } else {
        this.style.borderColor = '';
      }
    });

    input.addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });
}

/**
 * Footer Year
 */
function initFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = function() {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);
    }
  };
}

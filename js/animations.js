/**
 * KonceptMasters - Scroll Animations
 * Intersection Observer based scroll reveal animations
 */

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initParallax();
});

/**
 * Initialize Scroll Animations
 * Uses Intersection Observer for performance
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  if (animatedElements.length === 0) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show all elements immediately without animation
    animatedElements.forEach(function(el) {
      el.classList.add('animated');
    });
    return;
  }

  // Intersection Observer options
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -50px 0px', // trigger slightly before element enters viewport
    threshold: 0.1 // 10% of element visible
  };

  // Create observer
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Get delay if specified
        const delay = entry.target.getAttribute('data-delay');

        if (delay) {
          setTimeout(function() {
            entry.target.classList.add('animated');
          }, parseInt(delay));
        } else {
          entry.target.classList.add('animated');
        }

        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  animatedElements.forEach(function(el) {
    observer.observe(el);
  });
}

/**
 * Initialize Parallax Effects
 * Subtle parallax on scroll for hero section
 */
function initParallax() {
  const heroVisual = document.querySelector('.hero-visual');
  const floatingCards = document.querySelectorAll('.floating-card');

  if (!heroVisual && floatingCards.length === 0) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Only apply parallax in hero section area
    if (scrollY < windowHeight * 1.5) {
      // Parallax for hero visual
      if (heroVisual) {
        const translateY = scrollY * 0.15;
        heroVisual.style.transform = `translateY(${translateY}px)`;
      }

      // Parallax for floating cards (different speeds)
      floatingCards.forEach(function(card, index) {
        const speed = index === 0 ? 0.1 : 0.2;
        const translateY = scrollY * speed;
        const baseAnimation = index === 0 ? 'float 6s ease-in-out infinite' : 'float 6s ease-in-out infinite 2s';
        card.style.transform = `translateY(${translateY}px)`;
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

/**
 * Animate element on scroll (utility function)
 * Can be called manually for dynamic content
 */
function animateOnScroll(element, animationType, delay) {
  if (!element) return;

  element.setAttribute('data-animate', animationType || 'fade-up');

  if (delay) {
    element.setAttribute('data-delay', delay);
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const d = entry.target.getAttribute('data-delay');

        if (d) {
          setTimeout(function() {
            entry.target.classList.add('animated');
          }, parseInt(d));
        } else {
          entry.target.classList.add('animated');
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  observer.observe(element);
}

/**
 * Stagger animations for a group of elements
 * Adds incremental delays for cascade effect
 */
function staggerAnimation(elements, baseDelay, increment) {
  if (!elements || elements.length === 0) return;

  baseDelay = baseDelay || 0;
  increment = increment || 100;

  elements.forEach(function(el, index) {
    const delay = baseDelay + (index * increment);
    el.setAttribute('data-delay', delay.toString());
  });
}

/**
 * Typing animation effect
 * Creates typewriter effect for text elements
 */
function typeWriter(element, text, speed) {
  if (!element) return;

  speed = speed || 50;
  let index = 0;
  element.textContent = '';

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

/**
 * Counter animation
 * Animates number from 0 to target
 */
function animateCounter(element, target, duration, suffix) {
  if (!element) return;

  duration = duration || 2000;
  suffix = suffix || '';

  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease out cubic)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);

    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

/**
 * Scroll Progress Indicator
 * Shows page scroll progress (optional feature)
 */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');

  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updateProgress);
  });
}

/**
 * Reveal on scroll with custom animation
 */
function revealElement(element, options) {
  if (!element) return;

  options = options || {};
  const animation = options.animation || 'fade-up';
  const delay = options.delay || 0;
  const threshold = options.threshold || 0.1;
  const once = options.once !== false; // default true

  element.setAttribute('data-animate', animation);

  if (delay > 0) {
    element.setAttribute('data-delay', delay.toString());
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const d = entry.target.getAttribute('data-delay');

        if (d) {
          setTimeout(function() {
            entry.target.classList.add('animated');
          }, parseInt(d));
        } else {
          entry.target.classList.add('animated');
        }

        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        entry.target.classList.remove('animated');
      }
    });
  }, {
    root: null,
    rootMargin: options.rootMargin || '0px 0px -50px 0px',
    threshold: threshold
  });

  observer.observe(element);
}

// Export functions for external use
window.KonceptMastersAnimations = {
  animateOnScroll: animateOnScroll,
  staggerAnimation: staggerAnimation,
  typeWriter: typeWriter,
  animateCounter: animateCounter,
  revealElement: revealElement
};

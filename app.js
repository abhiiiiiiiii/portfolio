/**
 * Portfolio Interactive Controller — Bruno Cardozo Style Reference
 * Handles: Project case study modals, clipboard copying with toast, smooth navigation
 */

import padikkamLogo from './assets/images/padikkam-logo.png';
import dinatoLogo from './assets/images/dinato-logo.png';
import bharathaatLogo from './assets/images/bharathaat-logo.png';
import quicksearchLogo from './assets/images/quicksearch-logo.png';

document.addEventListener('DOMContentLoaded', () => {
  initProjectModals();
  initCopyButtons();
  initMobileNavigation();
  initContactLinks();
  initNavigationAndUrlHandling();
  initRingCarousels();
});

/* --------------------------------------------------------------------------
   Project Case Studies Data & Modal Handler
   -------------------------------------------------------------------------- */
const projectsData = {
  padikkam: {
    title: 'Padikkam.com',
    category: 'Full-Stack Educational Discovery Platform • Next.js & AWS Serverless',
    image: padikkamLogo,
    isLogo: true,
    link: 'https://padikkam.com/',
    description: 'Architected and deployed a multi-tenant educational discovery platform connecting students with academic institutions using Next.js, TypeScript, and a serverless AWS backend.',
    highlights: [
      '<strong>Full-Stack Cloud Architecture:</strong> Architected and deployed a multi-tenant educational discovery platform connecting students with academic institutions using Next.js, TypeScript, and a serverless AWS backend.',
      '<strong>Real-Time Discovery & Multilingual Support:</strong> Engineered dynamic discovery feeds for academic admissions, competitive exams, scholarships, financial aid schemes, and multilingual career roadmaps.',
      '<strong>Monetization & Quota Engine:</strong> Integrated an end-to-end payment gateway for subscription billing, designing an automated freemium view quota tracker and paywall system.',
      '<strong>Secure Authentication & Cloud Workflows:</strong> Implemented robust role-based access control (RBAC) with Amazon Cognito, powering headless SMS OTP authentication and automated transactional messaging pipelines via AWS Lambda.',
      '<strong>High-Performance UI/UX:</strong> Built an intuitive, mobile-first interface using Tailwind CSS and Framer Motion, delivering smooth layout animations and sub-second page load times.'
    ],
    tags: ['Next.js', 'TypeScript', 'AWS Serverless', 'Amazon Cognito', 'AWS Lambda', 'Tailwind CSS', 'Framer Motion', 'Payment Gateway / Subscriptions', 'RBAC']
  },
  onroad: {
    title: 'Onroad Breakdown Assistance & EV Platform',
    category: 'Smart Mobility & Infrastructure • Python & Flask',
    description: 'An emergency roadside assistance and electric vehicle infrastructure platform designed to connect stranded drivers with verified nearby mechanics and EV charging stations based on real-time location metrics.',
    highlights: [
      '<strong>Emergency Geolocation Dispatch:</strong> Built interactive map matching algorithm allowing users to identify nearby mechanics and dispatch requests with real-time ETA.',
      '<strong>EV Charging & Fuel Locator:</strong> Integrated database mapping verified charging speeds, plug types, and station operational statuses for EV owners across major routes.',
      '<strong>Relational Schema & Query Optimization:</strong> Designed normalized MySQL schemas with indexed geospatial coordinates, optimizing distance-calculation queries for sub-second responses.',
      '<strong>Responsive Cross-Device Client:</strong> Crafted an intuitive, mobile-optimized web interface using responsive HTML5/CSS3 and Vanilla JavaScript for smooth emergency access.'
    ],
    tags: ['Python', 'Flask', 'MySQL', 'JavaScript', 'RESTful APIs', 'HTML5/CSS3', 'Geolocation APIs']
  },
  'travel-saas': {
    title: 'B2B Flight Search & Booking Platform',
    category: 'Enterprise Travel SaaS • Codely.ai',
    description: 'A high-throughput enterprise travel SaaS engine developed at Codely.ai that aggregates airline flight inventory across major suppliers, normalizing disparate supplier data into a unified, high-speed booking API powered by MongoDB.',
    highlights: [
      '<strong>Multi-Supplier API Pipeline:</strong> Integrated 4+ external flight supplier APIs (<strong>Amadeus, Air Arabia, Flynas, Flyadeal</strong>) into a scalable B2B SaaS travel platform serving <strong>100K+ routes</strong>.',
      '<strong>Database Architecture & Caching:</strong> Utilized <strong>MongoDB</strong> as the primary database for high-throughput route queries, indexing flight availability, and caching supplier responses.',
      '<strong>API Analysis & Postman Testing:</strong> Handled original APIs of recognized airlines, thoroughly analyzing and evaluating API request/response schemas, payload specifications, and system integration requirements using <strong>Postman</strong> before production implementation.',
      '<strong>High-Throughput Payload Normalization:</strong> Parsed and transformed massive <strong>JSON and XML</strong> payloads across 4 supplier APIs, maintaining <strong>99%+ data accuracy</strong> for fare calculation and seat availability responses.',
      '<strong>Production UI Engineering:</strong> Engineered and shipped <strong>15+ production React.js / TypeScript features</strong>, reducing UI inconsistencies by <strong>~30%</strong> and improving booking-flow performance.',
      '<strong>Reusable Component Library:</strong> Architected a reusable component library of <strong>20+ components</strong>, cutting front-end development effort by <strong>~25%</strong> across all subsequent sprints.',
      '<strong>Agile Scrum Collaboration:</strong> Collaborated in Agile Scrum within an 8-person team — led sprint planning, stand-ups, and retrospectives, sustaining <strong>90%+ sprint velocity</strong>.',
      '<strong>Docker CI/CD Optimization:</strong> Streamlined CI/CD pipelines with <strong>Docker</strong>, reducing deployment time by <strong>~40%</strong> and eliminating error-prone manual release steps.',
      '<strong>Code Reviews & Quality:</strong> Drove code reviews for 3 engineers, enforcing ES6+ standards and cutting PR rework cycles by <strong>~20%</strong>.',
      '<strong>Production Stability & Incident Resolution:</strong> Diagnosed and resolved <strong>12+ critical production incidents</strong>, improving platform uptime and reducing user-reported error rate.'
    ],
    tags: ['React.js', 'TypeScript', 'MongoDB', 'Postman', 'Amadeus API', 'Air Arabia API', 'Flynas API', 'Flyadeal API', 'Docker', 'JSON/XML', 'CI/CD', 'Agile Scrum']
  },
  dinato: {
    title: 'Dinato',
    category: 'Hyperlocal Food Marketplace • Flutter & Firebase',
    image: dinatoLogo,
    isLogo: true,
    link: 'https://play.google.com/store/apps/details?id=com.corbittech.dinato&pcampaignid=web_share',
    linkLabel: 'View on Google Play Store',
    description: 'A dual-sided hyperlocal home-cooked food marketplace connecting local home chefs with customers across iOS and Android, built with Flutter, Firebase, real-time order dispatch, and multi-tier monetization.',
    highlights: [
      '<strong>Hyperlocal Marketplace Architecture:</strong> Built and launched Dinato, a dual-sided hyperlocal home-cooked food marketplace connecting local home chefs with customers across iOS and Android using Flutter and Firebase.',
      '<strong>Home Chef Operations Portal:</strong> Developed the home chef management portal featuring KYC document validation (Aadhaar / FSSAI), dynamic menu pricing, live preparation timers, and continuous audio-alert order dispatch.',
      '<strong>Multi-Tier Monetization & Payments:</strong> Integrated Razorpay and Apple In-App Purchases (StoreKit) for multi-tier chef subscriptions and customer order payments with serverless receipt verification.',
      '<strong>Real-Time Mid-Order Add-on Engine:</strong> Built a live mid-order Add-on Engine allowing customers to request additional food items in real time, automatically merging approved items into the chef active ticket.',
      '<strong>Automated Dispute & Refund Pipeline:</strong> Engineered an automated 2-step dispute and refund pipeline using Node.js Cloud Functions, automating timeout rejections and managing bank/UPI payouts.',
      '<strong>Administrative Web Dashboard:</strong> Created a responsive React & TypeScript web administration dashboard for KYC verification, live platform financial analytics, and targeted scheduled FCM push broadcasts.'
    ],
    tags: ['Flutter', 'Firebase', 'Node.js Cloud Functions', 'React', 'TypeScript', 'Razorpay', 'Apple StoreKit', 'Google Play', 'KYC Verification', 'FCM Push Notifications']
  },
  bharathaat: {
    title: 'Bharat Haat',
    category: 'Hyperlocal Marketplace & Classifieds • Flutter & Supabase',
    image: bharathaatLogo,
    isLogo: true,
    link: 'https://play.google.com/store/apps/details?id=com.optimabiz.bharathaat&pcampaignid=web_share',
    linkLabel: 'View on Google Play Store',
    description: 'A full-featured hyperlocal marketplace and classifieds mobile application on Android and iOS using Flutter and Supabase, featuring PostGIS geospatial proximity discovery, direct WhatsApp order routing, and a real-time vendor CRM pipeline.',
    highlights: [
      '<strong>Hyperlocal Marketplace Architecture:</strong> Architected & shipped BharatHaat, a full-featured hyperlocal marketplace and classifieds mobile application on Android and iOS using <strong>Flutter and Supabase</strong>.',
      '<strong>PostGIS Proximity Discovery:</strong> Implemented geospatial proximity discovery using <strong>PostGIS spatial queries and GiST indexing</strong>, delivering sub-50ms search and radius filtering across 6 distinct industry verticals.',
      '<strong>Frictionless WhatsApp Checkout:</strong> Engineered a frictionless WhatsApp & Direct Inquiry checkout model, enabling local merchants to receive structured, itemized orders directly in WhatsApp with zero transaction commission.',
      '<strong>Real-Time C2C & Vendor CRM:</strong> Built a real-time C2C communication & CRM pipeline using <strong>Supabase Realtime</strong>, automatically converting ad chat threads into actionable leads in the vendor pipeline.',
      '<strong>Cross-Platform Monetization:</strong> Integrated compliant cross-platform monetization, orchestrating <strong>Razorpay UPI on Android and Apple StoreKit on iOS</strong> for recurring merchant and ad boost subscription tiers.',
      '<strong>High-Performance Media Pipeline:</strong> Reduced network bandwidth and cloud storage costs by <strong>65%</strong> by deploying client-side image compression and BlurHash progressive image rendering.'
    ],
    tags: ['Flutter', 'Supabase', 'PostGIS', 'PostgreSQL', 'GiST Indexing', 'Razorpay', 'Apple StoreKit', 'Google Play', 'WhatsApp API', 'BlurHash']
  },
  quicksearch: {
    title: 'Quick Search',
    category: 'Hyperlocal Marketplace & Job Portal • Flutter & Supabase',
    image: quicksearchLogo,
    isLogo: true,
    link: 'https://play.google.com/store/apps/details?id=com.quqsearch.app&pcampaignid=web_share',
    linkLabel: 'View on Google Play Store',
    description: 'A production-ready hyperlocal marketplace and job portal serving mobile users on Android/iOS (Flutter) and administrators on Web (React 19 Vite Monorepo), featuring official DigiLocker OAuth2 e-KYC verification, low-latency Supabase chat, and automated listing moderation.',
    highlights: [
      '<strong>Cross-Platform Mobile & Web Monorepo:</strong> Architected a production-ready hyperlocal marketplace and job portal serving mobile users on Android/iOS (<strong>Flutter</strong>) and administrators on Web (<strong>React 19 Vite Monorepo</strong>).',
      '<strong>DigiLocker OAuth2 PKCE e-KYC:</strong> Integrated official <strong>Government of India DigiLocker OAuth2 PKCE e-KYC verification</strong>, reducing marketplace fraud and boosting buyer-seller trust through automated verification badges.',
      '<strong>Low-Latency Realtime Chat & Sync:</strong> Implemented low-latency peer-to-peer real-time chat and listing status synchronization using <strong>Supabase Realtime WebSockets</strong> and PostgreSQL Row-Level Security (RLS).',
      '<strong>High-Efficiency Upload Pipeline:</strong> Optimized listing media upload pipelines by introducing client-side image compression, reducing upload times by <strong>~65%</strong> and saving storage egress.',
      '<strong>Admin Operations & Push Campaigns:</strong> Built a robust Admin & Staff operations dashboard featuring live listing moderation, targeted <strong>FCM push broadcast campaigns</strong>, and Razorpay monetization management.'
    ],
    tags: ['Flutter', 'Supabase', 'React 19', 'Vite', 'DigiLocker API', 'OAuth2 PKCE', 'PostgreSQL RLS', 'WebSockets', 'FCM', 'Razorpay']
  }
};

/* --------------------------------------------------------------------------
   Experience Detail Data (from Resume)
   -------------------------------------------------------------------------- */
const experienceData = {
  corbit: {
    role: 'Full Stack Developer',
    company: 'Corbit Technologies',
    period: 'May 2026 – Present',
    badgeColor: '#d8a47f',
    overview: 'Owned end-to-end development of scalable web and mobile applications using Next.js, React.js, TypeScript, and Flutter from project setup to production deployment.',
    points: [
      'Discussed and analyzed direct client requirements to understand business needs, identify challenges, and define suitable technical solutions.',
      'Contributed to solution design and technical decision-making, selecting the right technologies, architecture, and implementation approach based on project requirements.',
      'Owned end-to-end development of web and mobile applications using <strong>Next.js, React.js, TypeScript, and Flutter</strong>, from project setup and architecture through production deployment.',
      'Developed backend services, REST APIs, authentication, and data management using <strong>Supabase, AWS DynamoDB, and Firebase</strong>.',
      'Focused on building optimized, scalable, and maintainable solutions, improving application performance and ensuring efficient resource usage.',
      'Worked across the <strong>Software Development Life Cycle (SDLC)</strong>, including requirement analysis, planning, development, testing, debugging, deployment, production support, and continuous improvements.',
      'Collaborated with clients and team members to refine requirements, evaluate possible approaches, and deliver practical solutions within project timelines.',
      'Managed production issues and implemented improvements based on client feedback and evolving business requirements.'
    ],
    skills: ['Next.js', 'React.js', 'TypeScript', 'Flutter', 'Dart', 'Supabase', 'AWS DynamoDB', 'Firebase', 'REST APIs', 'SDLC']
  },
  codely: {
    role: 'Software Associate Engineer',
    company: 'Codely.ai',
    period: 'Jul 2025 – Mar 2026',
    badgeColor: '#4ec5cb',
    overview: 'Integrated 4+ external flight supplier APIs into a scalable B2B SaaS travel platform serving 100K+ routes, handling original recognized airline APIs, Postman schema analysis, and high-throughput booking workflows.',
    points: [
      '<strong>Real Flight API Study & Analysis:</strong> Handled original APIs of recognized airlines, thoroughly analyzing and studying real flight API request/response schemas, payload structures, and system integration requirements using <strong>Postman</strong> before production implementation.',
      '<strong>Multi-Supplier Flight API Integration:</strong> Integrated 4+ external flight supplier APIs (<strong>Amadeus, Air Arabia, Flynas, Flyadeal</strong>) into a scalable B2B SaaS travel platform serving <strong>100K+ routes</strong>.',
      '<strong>High-Throughput Payload Normalization:</strong> Parsed and transformed massive <strong>JSON and XML</strong> payloads across 4 supplier APIs, maintaining <strong>99%+ data accuracy</strong> for fare calculation and seat availability responses.',
      '<strong>Database Architecture & Caching:</strong> Utilized <strong>MongoDB</strong> as the primary database for high-throughput route queries, indexing flight availability, and caching supplier responses for sub-second lookups.',
      '<strong>Production UI Engineering:</strong> Engineered and shipped <strong>15+ production React.js / TypeScript features</strong>, reducing UI inconsistencies by <strong>~30%</strong> and improving booking-flow performance.',
      '<strong>Reusable Component Library:</strong> Architected a reusable component library of <strong>20+ components</strong>, cutting front-end development effort by <strong>~25%</strong> across all subsequent sprints.',
      '<strong>Agile Scrum Collaboration:</strong> Collaborated in Agile Scrum within an 8-person team — led sprint planning, stand-ups, and retrospectives, sustaining <strong>90%+ sprint velocity</strong>.',
      '<strong>Docker CI/CD Optimization:</strong> Streamlined CI/CD pipelines with <strong>Docker</strong>, reducing deployment time by <strong>~40%</strong> and eliminating error-prone manual release steps.',
      '<strong>Code Reviews & Quality:</strong> Drove code reviews for 3 engineers, enforcing ES6+ standards and cutting PR rework cycles by <strong>~20%</strong>.',
      '<strong>Production Stability & Incident Resolution:</strong> Diagnosed and resolved <strong>12+ critical production incidents</strong>, improving platform uptime and reducing user-reported error rate.'
    ],
    skills: ['React.js', 'TypeScript', 'Postman', 'Airline API Integration', 'Amadeus API', 'Air Arabia API', 'Flynas API', 'Flyadeal API', 'MongoDB', 'Docker', 'JSON/XML', 'CI/CD', 'Agile Scrum']
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-area');
  const closeBtn = document.getElementById('modal-close-btn');
  const projectCards = document.querySelectorAll('.project-clickable');
  const expCards = document.querySelectorAll('.exp-clickable');

  if (!modal || !modalBody) return;

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      ${data.image ? (data.isLogo ? `
        <div class="modal-logo-banner">
          <img src="${data.image}" alt="${data.title}" class="modal-logo-img">
        </div>
      ` : `
        <img src="${data.image}" alt="${data.title}" class="modal-preview-img">
      `) : ''}
      <span class="modal-project-cat">${data.category}</span>
      <h2 class="modal-project-title">${data.title}</h2>
      ${data.link ? `
        <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="modal-live-link">
          <span>${data.linkLabel || 'Visit Live Website: ' + data.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
        </a>
      ` : ''}
      <p class="modal-project-desc">${data.description}</p>
      
      <h3 style="font-size: 1.1rem; color: #f3f0fb; margin-bottom: 0.75rem; font-weight: 600;">Key Engineering Highlights:</h3>
      <ul class="modal-highlights">
        ${data.highlights.map(item => `<li><span style="color: #d8a47f; font-weight: bold;">•</span> <span>${item}</span></li>`).join('')}
      </ul>

      <h3 style="font-size: 1.1rem; color: #f3f0fb; margin-bottom: 0.75rem; font-weight: 600;">Technologies Used:</h3>
      <div class="modal-tags">
        ${data.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openExperienceModal(expId) {
    const data = experienceData[expId];
    if (!data) return;

    modalBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 3px; transform: rotate(45deg); background: ${data.badgeColor};"></span>
        <span class="modal-project-cat" style="margin-bottom: 0; color: ${data.badgeColor};">${data.company} • ${data.period}</span>
      </div>
      <h2 class="modal-project-title" style="margin-bottom: 1rem;">${data.role}</h2>
      <p class="modal-project-desc" style="margin-bottom: 1.75rem;">${data.overview}</p>
      
      <h3 style="font-size: 1.1rem; color: #f3f0fb; margin-bottom: 0.85rem; font-weight: 600;">Key Contributions & Impact:</h3>
      <ul class="modal-highlights" style="margin-bottom: 1.75rem;">
        ${data.points.map(item => `<li><span style="color: ${data.badgeColor}; font-weight: bold; flex-shrink: 0; line-height: 1.5;">✓</span> <span style="line-height: 1.6;">${item}</span></li>`).join('')}
      </ul>

      <h3 style="font-size: 1.1rem; color: #f3f0fb; margin-bottom: 0.85rem; font-weight: 600;">Core Tech Stack:</h3>
      <div class="modal-tags">
        ${data.skills.map(skill => `<span class="tag-pill">${skill}</span>`).join('')}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project');
      openModal(id);
    });
  });

  expCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-experience');
      openExperienceModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   Copy Buttons & Toast Notification
   -------------------------------------------------------------------------- */
function showToast(text) {
  const toast = document.getElementById('toast-message');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = text;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-small-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const val = btn.getAttribute('data-copy');
      if (!val) return;

      try {
        await navigator.clipboard.writeText(val);
        btn.textContent = 'Copied!';
        showToast(`Copied "${val}" to clipboard`);
        setTimeout(() => {
          btn.textContent = 'Copy';
        }, 2000);
      } catch (e) {
        showToast(`Copied "${val}"`);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Menu Controller
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('nav-mobile-toggle');
  const navLinks = document.getElementById('main-nav-links');
  if (!toggleBtn || !navLinks) return;

  const toggleMenu = () => {
    const isOpened = navLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active', isOpened);
    toggleBtn.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
  };

  const closeMenu = () => {
    navLinks.classList.remove('active');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking any navigation link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Keep --nav-height synchronized for mobile drawer alignment
  const updateNavHeight = () => {
    const topNav = document.querySelector('.top-nav');
    if (topNav) {
      document.documentElement.style.setProperty('--nav-height', `${topNav.offsetHeight}px`);
    }
  };
  updateNavHeight();

  // Close if resized to desktop breakpoint and recalculate nav height
  window.addEventListener('resize', () => {
    updateNavHeight();
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   Direct Contact Action Handlers (Email & Phone)
   -------------------------------------------------------------------------- */
function initContactLinks() {
  const directActionLinks = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]');

  directActionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetUrl = link.getAttribute('href');
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Smooth Section Scrolling, Offset Management & Clean Address Bar Handling
   -------------------------------------------------------------------------- */
function initNavigationAndUrlHandling() {
  const topNav = document.querySelector('.top-nav');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('.screen-section[id]');
  const mainNavAnchorList = document.querySelectorAll('.nav-links a');

  const getNavOffset = () => {
    return topNav ? topNav.offsetHeight : 70;
  };

  const smoothScrollToSection = (targetId, cleanAddress = true) => {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const navOffset = getNavOffset();
    const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
    // Provide 20px extra breathing room below the fixed navigation bar
    const offsetPosition = Math.max(0, elementPosition - navOffset - 20);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Clean address bar so ugly #about / #projects hashes do not linger
    if (cleanAddress && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  // Intercept in-page anchor links for smooth scrolling without ugly address hashes
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return;

      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        smoothScrollToSection(targetId, true);
      }
    });
  });

  // Handle direct loads or reloads with hash in address bar (e.g. localhost:5173/#about)
  if (window.location.hash) {
    const initialHash = window.location.hash.substring(1);
    // Allow initial layout to render, then smoothly scroll with offset and clean address bar
    setTimeout(() => {
      smoothScrollToSection(initialHash, true);
    }, 150);
  }

  // ScrollSpy: highlight active nav link as user scrolls
  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;
    const navOffset = getNavOffset() + 60;

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navOffset;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    mainNavAnchorList.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();
}

function initRingCarousels() {
  const carousels = document.querySelectorAll('.ring-carousel');
  
  carousels.forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll('.work-card'));
    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoScrollInterval;
    let isAnimating = false;

    // Is this a website carousel (where cards have data-url)?
    const isWebsites = carousel.id === 'websites-ring';

    function updateCarousel(direction = 'next') {
      if (isAnimating) return;
      isAnimating = true;

      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      const nextIndex = (currentIndex + 1) % slides.length;
      const hiddenIndex = (currentIndex + 2) % slides.length;

      slides.forEach((slide, i) => {
        slide.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        slide.style.pointerEvents = 'none';

        // ONLY clear onclick if this is a website card. 
        // For project cards, we don't touch their click handler so the modals still work!
        if (isWebsites) {
          slide.onclick = null;
        } else {
          // If it's a project card, we still want to block the modal from opening if you click a SIDE card,
          // but we can't easily remove EventListener. However, `pointer-events: none` handles this nicely!
          // We will dynamically add/remove an overlay or just let `pointer-events` block it.
        }

        if (i === currentIndex) {
          slide.style.opacity = '1';
          slide.style.transform = 'translateX(0) scale(1)';
          slide.style.zIndex = '10';
          slide.style.pointerEvents = 'auto'; // allow clicking the modal/url!
          
          if (isWebsites) {
            slide.onclick = () => window.open(slide.dataset.url, '_blank');
          }
        } else if (i === prevIndex) {
          slide.style.opacity = '0.5';
          slide.style.transform = 'translateX(-110%) scale(0.85)';
          slide.style.zIndex = '5';
          slide.style.pointerEvents = 'auto';
          // When clicking side card, we want to slide, not open modal/url.
          slide.onclick = (e) => { 
            e.preventDefault(); 
            e.stopImmediatePropagation(); 
            currentIndex = prevIndex; 
            updateCarousel('prev'); 
          };
        } else if (i === nextIndex) {
          slide.style.opacity = '0.5';
          slide.style.transform = 'translateX(110%) scale(0.85)';
          slide.style.zIndex = '5';
          slide.style.pointerEvents = 'auto';
          slide.onclick = (e) => { 
            e.preventDefault(); 
            e.stopImmediatePropagation(); 
            currentIndex = nextIndex; 
            updateCarousel('next'); 
          };
        } else {
          slide.style.opacity = '0';
          slide.style.zIndex = '1';
          
          if (direction === 'next') {
            slide.style.transform = 'translateX(-200%) scale(0.5)';
          } else if (direction === 'prev') {
            slide.style.transform = 'translateX(200%) scale(0.5)';
          } else {
            slide.style.transform = 'translateX(0) scale(0.5)';
          }
        }
      });

      setTimeout(() => {
        const hiddenSlide = slides[hiddenIndex];
        if (hiddenSlide) {
          hiddenSlide.style.transition = 'none';
          if (direction === 'next') hiddenSlide.style.transform = 'translateX(200%) scale(0.5)';
          else if (direction === 'prev') hiddenSlide.style.transform = 'translateX(-200%) scale(0.5)';
        }
        isAnimating = false;
      }, 500);
    }

    function startAutoScroll() {
      autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel('next');
      }, 1000); 
    }

    updateCarousel('none');
    startAutoScroll();

    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    function handleSwipe() {
      const swipeThreshold = 40;
      if (touchEndX < touchStartX - swipeThreshold) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel('next');
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel('prev');
      }
    }

    carousel.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(autoScrollInterval);
    }, { passive: true });

    carousel.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoScroll();
    }, { passive: true });

    carousel.addEventListener('mousedown', e => {
      isDragging = true;
      touchStartX = e.screenX;
      clearInterval(autoScrollInterval);
      carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseup', e => {
      if (!isDragging) return;
      isDragging = false;
      touchEndX = e.screenX;
      handleSwipe();
      carousel.style.cursor = 'default';
      startAutoScroll();
    });

    carousel.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        carousel.style.cursor = 'default';
        startAutoScroll();
      }
    });

    // Capture click phase to prevent link opening when we are just swiping
    carousel.addEventListener('click', e => {
      if (Math.abs(touchEndX - touchStartX) > 15) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, true);

    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoScrollInterval);
    });
  });
}

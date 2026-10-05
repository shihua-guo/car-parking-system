/**
 * ParkPro Technology - Interactive Scripts
 * Handles Navigation & ScrollSpy, Modals, Tabs, Lightbox, Form Validation & Responsive UI
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // =========================================================================
  // 1. Navigation Active Highlighting, Hash Routing & ScrollSpy
  // =========================================================================
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const sidebarItems = document.querySelectorAll('.sidebar-nav-item');
  const pathname = window.location.pathname.toLowerCase();
  const isHomePage = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '' || pathname.endsWith('\\index.html');

  function setActiveNavLink(targetNavId) {
    navLinks.forEach(link => {
      const navId = link.getAttribute('data-nav') || '';
      const href = link.getAttribute('href') || '';

      let match = false;
      if (targetNavId === 'scenarios') {
        match = (navId === 'scenarios' || href.includes('#scenariosSection'));
      } else if (targetNavId === 'software') {
        match = (navId === 'software' || href.includes('#softwareSection'));
      } else if (targetNavId === 'home') {
        match = (navId === 'home' || href === 'index.html' || href === './index.html');
      } else if (targetNavId) {
        match = (navId === targetNavId);
      }

      if (match) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function setActiveSidebarItem(targetId) {
    if (!sidebarItems.length) return;
    sidebarItems.forEach(item => {
      const a = item.querySelector('a');
      if (a && a.getAttribute('href') === '#' + targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Smooth scroll handler for anchor links
  function handleAnchorClick(e) {
    const href = this.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 75;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        try {
          history.pushState(null, null, href);
        } catch (err) {}

        if (href === '#scenariosSection') {
          setActiveNavLink('scenarios');
          setActiveSidebarItem('scenariosSection');
        } else if (href === '#softwareSection') {
          setActiveNavLink('software');
          setActiveSidebarItem('softwareSection');
        } else {
          setActiveNavLink('home');
          setActiveSidebarItem(href.substring(1));
        }
      }
    }
  }

  // Bind click on hash links in nav and sidebar
  document.querySelectorAll('.main-nav a[href^="#"], .sidebar-nav-list a[href^="#"]').forEach(a => {
    a.addEventListener('click', handleAnchorClick);
  });

  // Check URL hash on load or on hashchange
  function checkHashAndActivate() {
    const hash = window.location.hash;
    if (hash === '#scenariosSection') {
      setActiveNavLink('scenarios');
      setActiveSidebarItem('scenariosSection');
      const targetEl = document.getElementById('scenariosSection');
      if (targetEl) {
        setTimeout(() => {
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 75;
          window.scrollTo({
            top: targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight,
            behavior: 'smooth'
          });
        }, 120);
      }
    } else if (hash === '#softwareSection') {
      setActiveNavLink('software');
      setActiveSidebarItem('softwareSection');
      const targetEl = document.getElementById('softwareSection');
      if (targetEl) {
        setTimeout(() => {
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 75;
          window.scrollTo({
            top: targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight,
            behavior: 'smooth'
          });
        }, 120);
      }
    } else if (hash && document.querySelector(hash)) {
      setActiveSidebarItem(hash.substring(1));
    } else if (isHomePage) {
      setActiveNavLink('home');
      setActiveSidebarItem('projectOverview');
    }
  }

  // ScrollSpy on homepage
  if (isHomePage) {
    const sections = [
      { id: 'projectOverview', nav: 'home' },
      { id: 'systemArchitecture', nav: 'home' },
      { id: 'entryStation', nav: 'home' },
      { id: 'exitStation', nav: 'home' },
      { id: 'cashierWorkstation', nav: 'home' },
      { id: 'softwareSection', nav: 'software' },
      { id: 'scenariosSection', nav: 'scenarios' },
      { id: 'techSpecs', nav: 'home' },
      { id: 'inquirySection', nav: 'home' }
    ];

    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;

        // If near top of page, Home is always active
        if (window.scrollY < 350) {
          setActiveNavLink('home');
          setActiveSidebarItem('projectOverview');
          return;
        }

        const headerHeight = (document.querySelector('.site-header')?.offsetHeight || 75) + 60;
        let currentSectionId = null;
        let currentNav = 'home';

        for (let i = sections.length - 1; i >= 0; i--) {
          const secEl = document.getElementById(sections[i].id);
          if (secEl) {
            const rect = secEl.getBoundingClientRect();
            if (rect.top <= headerHeight + 50) {
              currentSectionId = sections[i].id;
              currentNav = sections[i].nav;
              break;
            }
          }
        }

        if (currentSectionId) {
          setActiveNavLink(currentNav);
          setActiveSidebarItem(currentSectionId);
        }
      }, 70);
    }, { passive: true });
  }

  window.addEventListener('hashchange', checkHashAndActivate);
  checkHashAndActivate();


  // =========================================================================
  // 2. Scenario Tabs Switching
  // =========================================================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });


  // =========================================================================
  // 3. Image Lightbox for High-Res Diagrams & Photos
  // =========================================================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const clickableImgs = document.querySelectorAll('.img-container img');

  clickableImgs.forEach(img => {
    img.addEventListener('click', function () {
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt || 'ParkPro Product System Diagram';
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }


  // =========================================================================
  // 4. Quote / Leave a Message Modal
  // =========================================================================
  const quoteModal = document.getElementById('quoteModal');
  const modalClose = document.getElementById('modalClose');
  const openQuoteButtons = document.querySelectorAll('.open-quote-modal');

  function openModal() {
    if (quoteModal) {
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (quoteModal) {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openQuoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (quoteModal) {
    quoteModal.addEventListener('click', function (e) {
      if (e.target === quoteModal) {
        closeModal();
      }
    });
  }

  // Close modals on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
    }
  });


  // =========================================================================
  // 5. Toast Notification System
  // =========================================================================
  function showToast(message, duration = 4000) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastMsg';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }


  // =========================================================================
  // 6. Form Handlers & Validation
  // =========================================================================
  const forms = document.querySelectorAll('.inquiry-form-submit');
  forms.forEach(form => {
    const textarea = form.querySelector('textarea');
    const counter = form.querySelector('.char-counter span');

    if (textarea && counter) {
      textarea.addEventListener('input', function () {
        const len = this.value.length;
        counter.textContent = len;
        if (len < 15 || len > 3000) {
          counter.style.color = '#ef4444';
        } else {
          counter.style.color = '#10b981';
        }
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const msgInput = form.querySelector('textarea');

      if (emailInput && !emailInput.value.includes('@')) {
        const errEmail = (window.ParkProI18N && window.ParkProI18N.getLanguage() === 'zh')
          ? '请输入有效的商业企业邮箱地址。'
          : 'Please enter a valid business email address.';
        alert(errEmail);
        emailInput.focus();
        return;
      }

      if (msgInput && msgInput.value.trim().length < 10) {
        const errMsg = (window.ParkProI18N && window.ParkProI18N.getLanguage() === 'zh')
          ? '请输入您的项目需求详情（至少10个字符），以便我们为您提供准确报价。'
          : 'Please enter your project requirements so we can provide an accurate quotation.';
        alert(errMsg);
        msgInput.focus();
        return;
      }

      // Success feedback
      const successMsg = (window.ParkProI18N && window.ParkProI18N.t('toast_success'))
        || '✓ Thank you! Your RFQ has been received. Our overseas engineer will reply within 24 hours.';
      showToast(successMsg);
      form.reset();
      if (counter) counter.textContent = '0';
      closeModal();
    });
  });


  // =========================================================================
  // 7. Scroll to Top Button
  // =========================================================================
  const topBtn = document.getElementById('floatTop');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        topBtn.style.display = 'flex';
      } else {
        topBtn.style.display = 'none';
      }
    }, { passive: true });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // =========================================================================
  // 8. Mobile Menu Toggle
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.querySelector('.main-nav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      if (mainNav.style.display === 'flex') {
        mainNav.style.display = '';
      } else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '100%';
        mainNav.style.left = '0';
        mainNav.style.right = '0';
        mainNav.style.background = '#ffffff';
        mainNav.style.padding = '16px';
        mainNav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      }
    });
  }
});

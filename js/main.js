/**
 * ParkPro Technology - Interactive Scripts
 * Handles Modals, Tabs, Lightbox, Form Validation & Responsive Navigation
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Language Dropdown Toggle
  const langSelector = document.getElementById('langSelector');
  const langDropdown = document.getElementById('langDropdown');

  if (langSelector && langDropdown) {
    langSelector.addEventListener('click', function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function () {
      langDropdown.classList.remove('show');
    });
  }

  // 2. Scenario Tabs Switching
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

  // 3. Image Lightbox for High-Res Diagrams & Photos
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

  // 4. Quote / Leave a Message Modal
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

  // 5. Toast Notification System
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

  // 6. Form Handlers & Validation
  const forms = document.querySelectorAll('.inquiry-form-submit');
  forms.forEach(form => {
    const textarea = form.querySelector('textarea');
    const counter = form.querySelector('.char-counter span');

    if (textarea && counter) {
      textarea.addEventListener('input', function () {
        const len = this.value.length;
        counter.textContent = len;
        if (len < 20 || len > 3000) {
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
        alert('Please enter a valid business email address.');
        emailInput.focus();
        return;
      }

      if (msgInput && msgInput.value.trim().length < 15) {
        alert('Please enter your project requirements (at least 15 characters) so we can provide an accurate quotation.');
        msgInput.focus();
        return;
      }

      // Success feedback
      showToast('✓ Thank you! Your RFQ has been received. Our overseas engineer will reply within 24 hours.');
      form.reset();
      if (counter) counter.textContent = '0';
      closeModal();
    });
  });

  // 7. Scroll to Top Button
  const topBtn = document.getElementById('floatTop');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        topBtn.style.display = 'flex';
      } else {
        topBtn.style.display = 'none';
      }
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 8. Mobile Menu Toggle
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

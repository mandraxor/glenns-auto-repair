/**
 * Glenn's Automotive Repair and Maintenance - Main Application Logic
 * 4125 Arctic Spring Ave. Unit 11, Las Vegas, NV 89115
 * Phone: (702) 491-4514
 */

class GlennsAutomotiveApp {
  constructor() {
    this.initHeaderScroll();
    this.initLiveStatus();
    this.initModal();
    this.initFAQ();
    this.initServiceFilter();
    this.initForms();
    this.initMobileDrawer();
    this.initCurrentDayHighlight();
  }

  /* --- 1. LIVE SHOP STATUS CALCULATOR --- */
  initLiveStatus() {
    this.updateStatusPill();
    // Refresh every 60 seconds
    setInterval(() => this.updateStatusPill(), 60000);
  }

  getVegasTime() {
    // Uses America/Los_Angeles (Pacific Time)
    const now = new Date();
    const vegasString = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
    return new Date(vegasString);
  }

  updateStatusPill() {
    const statusPills = document.querySelectorAll('.status-pill');
    const statusTexts = document.querySelectorAll('.shop-status-text, #shopStatusText');
    const hoursNoticeText = document.getElementById('hoursNoticeStatus');
    if (!statusPills.length) return;

    const vegasDate = this.getVegasTime();
    const day = vegasDate.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
    const hour = vegasDate.getHours();
    const min = vegasDate.getMinutes();
    const currentDecimalTime = hour + (min / 60);

    let isOpen = false;
    let statusMessage = '';

    // Schedule:
    // Mon-Fri: 8:00 AM - 5:00 PM (8.0 to 17.0)
    // Sat: 9:00 AM - 5:00 PM (9.0 to 17.0)
    // Sun: Closed
    if (day >= 1 && day <= 5) {
      if (currentDecimalTime >= 8.0 && currentDecimalTime < 17.0) {
        isOpen = true;
        statusMessage = 'Open Today • Closes 5:00 PM';
      } else if (currentDecimalTime < 8.0) {
        isOpen = false;
        statusMessage = 'Closed • Opens 8:00 AM Today';
      } else {
        isOpen = false;
        const nextDay = day === 5 ? 'Saturday 9:00 AM' : 'Tomorrow 8:00 AM';
        statusMessage = `Closed • Opens ${nextDay}`;
      }
    } else if (day === 6) {
      if (currentDecimalTime >= 9.0 && currentDecimalTime < 17.0) {
        isOpen = true;
        statusMessage = 'Open Today • Closes 5:00 PM';
      } else if (currentDecimalTime < 9.0) {
        isOpen = false;
        statusMessage = 'Closed • Opens 9:00 AM Today';
      } else {
        isOpen = false;
        statusMessage = 'Closed Sunday • Opens Monday 8:00 AM';
      }
    } else {
      // Sunday
      isOpen = false;
      statusMessage = 'Closed Sunday • Opens Monday 8:00 AM';
    }

    statusPills.forEach(pill => {
      pill.className = `status-pill ${isOpen ? 'open' : 'closed'}`;
    });

    statusTexts.forEach(textEl => {
      textEl.textContent = statusMessage;
    });

    if (hoursNoticeText) {
      hoursNoticeText.textContent = isOpen 
        ? 'Shop is currently OPEN. Diagnostic bays ready!'
        : 'Shop is currently CLOSED. Book online 24/7 for priority queue!';
    }
  }

  /* --- 2. HEADER SCROLL EFFECT & DYNAMIC HEIGHT --- */
  initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const setHeaderHeight = () => {
      const h = header.getBoundingClientRect().height;
      if (h > 0) {
        document.documentElement.style.setProperty('--header-height', `${Math.round(h)}px`);
      }
    };

    // Calculate immediately and on window load
    setHeaderHeight();
    window.addEventListener('load', setHeaderHeight);
    window.addEventListener('resize', setHeaderHeight, { passive: true });
    window.addEventListener('orientationchange', () => setTimeout(setHeaderHeight, 150));

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      setHeaderHeight();
    }, { passive: true });
  }

  /* --- 3. MODAL CONTROLLER --- */
  initModal() {
    this.modal = document.getElementById('bookingModal');
    this.closeBtn = document.getElementById('modalCloseBtn');

    if (this.closeBtn && this.modal) {
      this.closeBtn.addEventListener('click', () => this.closeBookingModal());
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeBookingModal();
        }
      });
    }

    const dateInput = document.getElementById('modalPreferredDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeBookingModal();
      }
    });
  }

  openBookingModal(preselectedService = '', customNotes = '') {
    if (!this.modal) return;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const serviceSelect = document.getElementById('modalServiceSelect');
    const notesField = document.getElementById('modalNotes');

    if (serviceSelect && preselectedService) {
      // Look for matching option or default to first
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(preselectedService.toLowerCase()) ||
            serviceSelect.options[i].value.toLowerCase().includes(preselectedService.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (notesField && customNotes) {
      notesField.value = `Issue reported: ${customNotes}`;
    }
  }

  closeBookingModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* --- 4. FAQ ACCORDION --- */
  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other FAQs
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* --- 5. SERVICES FILTER --- */
  initServiceFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        serviceCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* --- 6. FORM HANDLERS & TOAST NOTIFICATIONS --- */
  initForms() {
    const heroForm = document.getElementById('heroEstimateForm');
    const modalForm = document.getElementById('modalAppointmentForm');

    if (heroForm) {
      heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const year = heroForm.querySelector('[name="year_make_model"]')?.value || 'Vehicle';
        const service = heroForm.querySelector('[name="service"]')?.value || 'Service';
        const phone = heroForm.querySelector('[name="phone"]')?.value || 'your phone';

        this.showToast(`Estimate Request Received! We'll text/call ${phone} shortly regarding your ${year}.`, 'success');
        heroForm.reset();
      });
    }

    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = modalForm.querySelector('[name="client_name"]')?.value || 'Customer';
        const date = modalForm.querySelector('[name="preferred_date"]')?.value || 'requested date';

        this.showToast(`Thank you, ${name}! Your appointment slot for ${date} has been prioritized. Glenn's team will confirm via SMS.`, 'success');
        modalForm.reset();
        this.closeBookingModal();
      });
    }
  }

  showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  /* --- 7. MOBILE DRAWER --- */
  initMobileDrawer() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    const closeBtn = document.getElementById('mobileDrawerClose');
    if (!toggleBtn || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', () => {
      if (drawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    drawer.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        closeDrawer();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  /* --- 8. CURRENT DAY HIGHLIGHTING IN HOURS TABLE --- */
  initCurrentDayHighlight() {
    const vegasDate = this.getVegasTime();
    const day = vegasDate.getDay(); // 0=Sun, 1=Mon...6=Sat
    const rows = document.querySelectorAll('.hours-row');
    if (rows && rows.length === 7) {
      // Adjust: 0 is Sunday (7th row, index 6), 1 is Mon (index 0), 2 is Tue (index 1), etc.
      const indexMap = [6, 0, 1, 2, 3, 4, 5];
      const targetIndex = indexMap[day];
      if (rows[targetIndex]) {
        rows[targetIndex].classList.add('current-day');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.GlennsApp = new GlennsAutomotiveApp();
});

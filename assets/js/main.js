/**
 * Alpine Coat Gem - Interactive & Atelier Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky & Blur Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '100%';
        mainNav.style.left = '0';
        mainNav.style.right = '0';
        mainNav.style.background = 'rgba(11, 19, 31, 0.98)';
        mainNav.style.padding = '24px';
        mainNav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
    });
  }

  // 3. Interactive Alpine Coat Matcher Quiz
  const stepCards = document.querySelectorAll('.quiz-step-card');
  const resultTitle = document.getElementById('coat-match-title');
  const resultDesc = document.getElementById('coat-match-desc');
  const resultTemp = document.getElementById('coat-match-temp');

  const coatRecommendations = {
    'subzero': {
      title: 'The Matterhorn Expedition Goose Down Parka',
      desc: 'Engineered with 900-fill-power ethical goose down, aerogel thermal baffles, and storm-proof waterproof Japanese ripstop shell.',
      temp: 'Rated to -35°C (-31°F)'
    },
    'city': {
      title: 'The St. Moritz Bespoke Cashmere Greatcoat',
      desc: 'Handcrafted double-faced Loro Piana storm-system cashmere with full horsehair canvas chest piece and detachable mink collar.',
      temp: 'Rated to -10°C (14°F)'
    },
    'chalet': {
      title: 'The Cortina Tuscan Shearling Alpine Duster',
      desc: 'Full-grain Spanish merino shearling with antique horn buttons, storm-tab collar, and hand-waxed weatherproof leather exterior.',
      temp: 'Rated to -20°C (-4°F)'
    }
  };

  if (stepCards.length > 0 && resultTitle) {
    stepCards.forEach(card => {
      card.addEventListener('click', () => {
        stepCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const climate = card.getAttribute('data-climate');
        if (coatRecommendations[climate]) {
          resultTitle.textContent = coatRecommendations[climate].title;
          resultDesc.textContent = coatRecommendations[climate].desc;
          if (resultTemp) resultTemp.textContent = coatRecommendations[climate].temp;
        }
      });
    });
  }

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
});

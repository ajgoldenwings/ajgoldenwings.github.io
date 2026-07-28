import { renderNavbar, initNavbarScrollDismiss } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderTools } from './pages/tools.js';
import { renderToolsAI } from './pages/tools-ai.js';
import { renderToolsBookmarks } from './pages/tools-bookmarks.js';
import { renderPrivacy } from './pages/privacy.js';
import { renderTerms } from './pages/terms.js';
import { renderNotFound } from './pages/not-found.js';

const app = document.getElementById('app');

const SITE_NAME = 'Anthony Pearson';
const ROUTE_TITLES = {
  '/': 'Developer Tools & Resources',
  '/about': 'About',
  '/tools': 'Tools',
  '/tools/ai': 'AI Tools',
  '/tools/bookmarks': 'Bookmarks',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Use',
};

function getRoute() {
  return window.location.hash.slice(1) || '/';
}

function render() {
  window.scrollTo(0, 0);
  const route = getRoute();
  let pageContent = '';

  // Update document title per route
  const pageTitle = ROUTE_TITLES[route] || 'Page Not Found';
  document.title = route === '/' ? `${SITE_NAME} - ${pageTitle}` : `${pageTitle} | ${SITE_NAME}`;

  switch (route) {
    case '/':
      pageContent = renderHome();
      break;
    case '/about':
      pageContent = renderAbout();
      break;
    case '/tools':
      pageContent = renderTools();
      break;
    case '/tools/ai':
      pageContent = renderToolsAI();
      break;
    case '/tools/bookmarks':
      pageContent = renderToolsBookmarks();
      break;
    case '/privacy':
      pageContent = renderPrivacy();
      break;
    case '/terms':
      pageContent = renderTerms();
      break;
    default:
      pageContent = renderNotFound();
  }

  const needsContainer = route !== '/';

  app.innerHTML = `
    ${renderNavbar(route)}
    <main id="main-content" tabindex="-1" role="main" class="pt-16 ${needsContainer ? 'container mx-auto px-4 py-6' : ''}">
      ${pageContent}
    </main>
    ${renderFooter()}
  `;

  initScrollReveal();
  initNavbarScrollDismiss();

  // Move focus to main content on route change for screen reader users
  const mainEl = document.getElementById('main-content');
  if (mainEl) {
    mainEl.focus({ preventScroll: true });
  }
}

function initScrollReveal() {
  const sections = document.querySelectorAll('.fade-in-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener('hashchange', render);
render();

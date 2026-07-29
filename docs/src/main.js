import { renderNavbar, initNavbarToggle } from './components/navbar.js';
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

// Per-page theme pairs: [lightTheme, darkTheme]
const ROUTE_THEMES = {
  '/': ['light', 'dark'],
  '/about': ['cupcake', 'dracula'],
  '/tools': ['corporate', 'business'],
  '/tools/ai': ['winter', 'synthwave'],
  '/tools/bookmarks': ['garden', 'forest'],
  '/privacy': ['lofi', 'coffee'],
  '/terms': ['nord', 'night'],
  '404': ['lemonade', 'halloween'],
};

/**
 * Determines if the user prefers dark mode via system preference.
 */
function prefersDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Applies the correct theme to the <html> element based on route and system preference.
 */
function applyRouteTheme(route) {
  const themes = ROUTE_THEMES[route] || ROUTE_THEMES['404'];
  const [lightTheme, darkTheme] = themes;
  const theme = prefersDarkMode() ? darkTheme : lightTheme;
  document.documentElement.setAttribute('data-theme', theme);
}

// Listen for system color scheme changes and re-apply theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const { path: route } = getRoute();
  applyRouteTheme(route);
});

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  // Separate the route path from any in-page anchor (e.g. /tools#externalToolsList)
  const anchorIndex = hash.indexOf('#');
  if (anchorIndex !== -1) {
    return { path: hash.slice(0, anchorIndex), anchor: hash.slice(anchorIndex + 1) };
  }
  return { path: hash, anchor: null };
}

function render() {
  const { path: route, anchor } = getRoute();
  let pageContent = '';

  // Apply the per-page theme
  applyRouteTheme(route);

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

  const fullWidthRoutes = ['/', '/about'];
  const needsContainer = !fullWidthRoutes.includes(route);

  app.innerHTML = `
    ${renderNavbar(route)}
    <main id="main-content" tabindex="-1" role="main" class="${needsContainer ? 'container mx-auto px-4 pt-18 pb-6' : ''}">
      ${pageContent}
    </main>
    ${renderFooter()}
  `;

  initScrollReveal();
  initNavbarToggle();

  // Scroll to anchor if present, otherwise scroll to top
  if (anchor) {
    const anchorEl = document.getElementById(anchor);
    if (anchorEl) {
      anchorEl.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.scrollTo(0, 0);
  }

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

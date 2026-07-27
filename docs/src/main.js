import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderTools } from './pages/tools.js';
import { renderToolsAI } from './pages/tools-ai.js';
import { renderToolsBookmarks } from './pages/tools-bookmarks.js';
import { renderPrivacy } from './pages/privacy.js';
import { renderTerms } from './pages/terms.js';

const app = document.getElementById('app');

function getRoute() {
  return window.location.hash.slice(1) || '/';
}

function render() {
  window.scrollTo(0, 0);
  const route = getRoute();
  let pageContent = '';

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
      pageContent = renderHome();
  }

  const needsContainer = route !== '/';

  app.innerHTML = `
    ${renderNavbar(route)}
    <main class="${needsContainer ? 'container mx-auto px-4 py-6' : ''}">
      ${pageContent}
    </main>
    ${renderFooter()}
  `;

  initScrollReveal();
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

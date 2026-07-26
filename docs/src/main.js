import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderToolsAI } from './pages/tools-ai.js';
import { renderToolsBookmarks } from './pages/tools-bookmarks.js';

const app = document.getElementById('app');

function getRoute() {
  return window.location.hash.slice(1) || '/';
}

function render() {
  const route = getRoute();
  let pageContent = '';

  switch (route) {
    case '/':
      pageContent = renderHome();
      break;
    case '/about':
      pageContent = renderAbout();
      break;
    case '/tools/ai':
      pageContent = renderToolsAI();
      break;
    case '/tools/bookmarks':
      pageContent = renderToolsBookmarks();
      break;
    default:
      pageContent = renderHome();
  }

  app.innerHTML = `
    ${renderNavbar(route)}
    <main class="container mx-auto p-6">
      ${pageContent}
    </main>
    ${renderFooter()}
  `;
}

window.addEventListener('hashchange', render);
render();

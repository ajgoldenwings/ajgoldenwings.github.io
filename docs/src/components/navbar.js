export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  // Build breadcrumb items based on current route
  const breadcrumbItems = getBreadcrumbs(currentRoute);
  const showBreadcrumbs = currentRoute !== '/';

  const breadcrumbsHtml = showBreadcrumbs && breadcrumbItems.length > 0
    ? `<div class="breadcrumbs text-sm ms-3 badge badge-ghost badge-xl">
            <ul>
            ${breadcrumbItems.map((item, i) =>
              i === breadcrumbItems.length - 1
                ? `<li>${item.label}</li>`
                : `<li><a href="${item.href}">${item.label}</a></li>`
            ).join('\n            ')}
            </ul>
        </div>`
    : '';

  return `
    <nav aria-label="Main navigation" class="megamenu p-2 fixed top-4 left-4 z-50">
        <span class="megamenu-active"></span>

        <button class="after:content-none btn btn-square" popovertarget="nav-dropdown" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </button>

        <div id="nav-dropdown" class="p-2" popover>
            <ul class="menu w-56">
                <li class="menu-title">Pages</li>
                <li><a href="#/" class="${currentRoute === '/' ? 'menu-active' : ''}" data-nav-link>Home</a></li>
                <li><a href="#/about" class="${currentRoute === '/about' ? 'menu-active' : ''}" data-nav-link>About</a></li>
            </ul>
            <ul class="menu w-56 mt-1">
                <li class="menu-title">Tools</li>
                <li><a href="#/tools" class="${currentRoute === '/tools' && !currentRoute.includes('/tools/') ? 'menu-active' : ''}" data-nav-link>All Tools</a></li>
                <li><a href="#/tools/ai" class="${currentRoute === '/tools/ai' ? 'menu-active' : ''}" data-nav-link>AI Tools</a></li>
                <li><a href="#/tools/bookmarks" class="${currentRoute === '/tools/bookmarks' ? 'menu-active' : ''}" data-nav-link>Bookmarks</a></li>
                <li><a href="#/tools/health" class="${currentRoute === '/tools/health' ? 'menu-active' : ''}" data-nav-link>Health Check</a></li>
                <li><a href="#/tools/network" class="${currentRoute === '/tools/network' ? 'menu-active' : ''}" data-nav-link>Skill Network</a></li>
                <li><a href="#/tools#externalToolsList" data-nav-link>External Tools</a></li>
            </ul>
        </div>

        ${breadcrumbsHtml}
    </nav>
  `;
}

/**
 * Generates breadcrumb items for a given route.
 * Returns an array of { label, href } objects.
 * The last item has no href (it's the current page).
 */
function getBreadcrumbs(route) {
  const routeMap = {
    '/': [],
    '/about': [
      { label: 'Home', href: '#/' },
      { label: 'About' },
    ],
    '/tools': [
      { label: 'Home', href: '#/' },
      { label: 'Tools' },
    ],
    '/tools/ai': [
      { label: 'Home', href: '#/' },
      { label: 'Tools', href: '#/tools' },
      { label: 'AI' },
    ],
    '/tools/bookmarks': [
      { label: 'Home', href: '#/' },
      { label: 'Tools', href: '#/tools' },
      { label: 'Bookmarks' },
    ],
    '/tools/health': [
      { label: 'Home', href: '#/' },
      { label: 'Tools', href: '#/tools' },
      { label: 'Health Check' },
    ],
    '/tools/network': [
      { label: 'Home', href: '#/' },
      { label: 'Tools', href: '#/tools' },
      { label: 'Skill Network' },
    ],
    '/privacy': [
      { label: 'Home', href: '#/' },
      { label: 'Privacy Policy' },
    ],
    '/terms': [
      { label: 'Home', href: '#/' },
      { label: 'Terms of Use' },
    ],
  };

  return routeMap[route] || [];
}

/**
 * Initializes the mobile nav dropdown toggle behavior.
 * The dropdown is a regular element inside the fixed container,
 * so it stays positioned below the button even when scrolling.
 */
export function initNavbarToggle() {
  const btn = document.getElementById('nav-toggle-btn');
  const dropdown = document.getElementById('nav-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', () => {
    const isOpen = !dropdown.classList.contains('hidden');
    dropdown.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close dropdown when a nav link is clicked
  dropdown.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', () => {
      dropdown.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

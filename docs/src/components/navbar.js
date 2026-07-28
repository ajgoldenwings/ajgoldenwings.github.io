export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  return `
    <div class="fixed top-4 left-4 z-50 sm:hidden">
      <button class="btn btn-square" id="nav-toggle-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <div id="nav-dropdown" class="hidden mt-2 bg-base-100 border border-base-300 rounded-box shadow-lg p-2 w-56">
        <ul class="menu">
          <li class="menu-title">Pages</li>
          <li><a href="#/" class="${currentRoute === '/' ? 'active' : ''}" data-nav-link>Home</a></li>
          <li><a href="#/about" class="${currentRoute === '/about' ? 'active' : ''}" data-nav-link>About</a></li>
        </ul>
        <ul class="menu mt-1">
          <li class="menu-title">Tools</li>
          <li><a href="#/tools" class="${currentRoute === '/tools' && !currentRoute.includes('/tools/') ? 'active' : ''}" data-nav-link>All Tools</a></li>
          <li><a href="#/tools/ai" class="${currentRoute === '/tools/ai' ? 'active' : ''}" data-nav-link>AI Tools</a></li>
          <li><a href="#/tools/bookmarks" class="${currentRoute === '/tools/bookmarks' ? 'active' : ''}" data-nav-link>Bookmarks</a></li>
        </ul>
      </div>
    </div>
    <nav aria-label="Main navigation" class="hidden sm:flex fixed top-4 left-4 z-50">
      <div class="megamenu bg-base-100 shadow-lg text-base-content">
        <span class="megamenu-active"></span>
        <button popovertarget="nav-pages-desktop">Pages</button>
        <div id="nav-pages-desktop" popover>
          <ul class="menu">
            <li><a href="#/" class="${currentRoute === '/' ? 'active' : ''}">Home</a></li>
            <li><a href="#/about" class="${currentRoute === '/about' ? 'active' : ''}">About</a></li>
          </ul>
        </div>

        <button popovertarget="nav-tools-desktop">Tools</button>
        <div id="nav-tools-desktop" popover>
          <ul class="menu">
            <li><a href="#/tools" class="${isToolsRoute ? 'active' : ''}">All Tools</a></li>
            <li><a href="#/tools/ai" class="${currentRoute === '/tools/ai' ? 'active' : ''}">AI Tools</a></li>
            <li><a href="#/tools/bookmarks" class="${currentRoute === '/tools/bookmarks' ? 'active' : ''}">Bookmarks</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
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

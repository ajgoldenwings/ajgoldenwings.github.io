export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  return `
    <div class="fixed top-4 left-4 z-50 sm:hidden">
      <button class="btn btn-square" popovertarget="nav-megamenu" aria-label="Open navigation menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <div class="megamenu megamenu-vertical text-base-content" id="nav-megamenu" popover>
        <button popovertarget="nav-pages">Pages</button>
        <div id="nav-pages" popover>
          <ul class="menu">
            <li><a href="#/" onclick="document.getElementById('nav-megamenu')?.hidePopover()">Home</a></li>
            <li><a href="#/about" onclick="document.getElementById('nav-megamenu')?.hidePopover()">About</a></li>
          </ul>
        </div>

        <button popovertarget="nav-tools">Tools</button>
        <div id="nav-tools" popover>
          <ul class="menu">
            <li><a href="#/tools" onclick="document.getElementById('nav-megamenu')?.hidePopover()">All Tools</a></li>
            <li><a href="#/tools/ai" onclick="document.getElementById('nav-megamenu')?.hidePopover()">AI Tools</a></li>
            <li><a href="#/tools/bookmarks" onclick="document.getElementById('nav-megamenu')?.hidePopover()">Bookmarks</a></li>
          </ul>
        </div>
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
 * Initializes the navbar scroll-dismiss behavior.
 * Call this after rendering the navbar to ensure the megamenu
 * closes when the user scrolls the page.
 */
export function initNavbarScrollDismiss() {
  let scrollHandler = null;

  const megamenu = document.getElementById('nav-megamenu');
  if (!megamenu) return;

  megamenu.addEventListener('toggle', (e) => {
    if (e.newState === 'open') {
      scrollHandler = () => {
        megamenu.hidePopover();
      };
      window.addEventListener('scroll', scrollHandler, { once: true, passive: true });
    } else {
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
        scrollHandler = null;
      }
    }
  });
}

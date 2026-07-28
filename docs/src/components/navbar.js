export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  return `
    <div class="fixed top-4 left-4 z-50 sm:hidden">
      <button class="btn btn-square" popovertarget="nav-megamenu" aria-label="Open navigation menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
    </div>
    <div class="megamenu megamenu-vertical text-base-content fixed top-16 left-4 z-50" id="nav-megamenu" popover>
      <button class="after:content-none" popovertarget="nav-pages">Pages</button>
      <div id="nav-pages" popover>
        <ul class="menu bg-base-200 rounded-box w-56 shadow-lg">
          <li><a href="#/" onclick="document.getElementById('nav-megamenu')?.hidePopover()">Home</a></li>
          <li><a href="#/about" onclick="document.getElementById('nav-megamenu')?.hidePopover()">About</a></li>
        </ul>
      </div>

      <button class="after:content-none" popovertarget="nav-tools">Tools</button>
      <div id="nav-tools" popover>
        <ul class="menu bg-base-200 rounded-box w-56 shadow-lg">
          <li><a href="#/tools" onclick="document.getElementById('nav-megamenu')?.hidePopover()">All Tools</a></li>
          <li><a href="#/tools/ai" onclick="document.getElementById('nav-megamenu')?.hidePopover()">AI Tools</a></li>
          <li><a href="#/tools/bookmarks" onclick="document.getElementById('nav-megamenu')?.hidePopover()">Bookmarks</a></li>
        </ul>
      </div>
    </div>
    <nav aria-label="Main navigation" class="hidden sm:block fixed top-0 left-0 right-0 z-50">
      <div class="flex justify-center py-2">
        <ul class="menu menu-horizontal bg-base-200 rounded-box shadow-lg gap-1">
          <li><a href="#/" class="${currentRoute === '/' ? 'active' : ''}">Home</a></li>
          <li><a href="#/about" class="${currentRoute === '/about' ? 'active' : ''}">About</a></li>
          <li><a href="#/tools" class="${isToolsRoute ? 'active' : ''}">Tools</a></li>
        </ul>
      </div>
    </nav>
  `;
}

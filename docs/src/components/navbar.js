export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  return `
    <div class="navbar">
      <div class="navbar-start">
        <a href="#/" class="btn btn-ghost text-xl">ajgoldenwings</a>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="#/about" class="${currentRoute === '/about' ? 'active' : ''}">About</a>
          </li>
          <li>
            <details>
              <summary class="${isToolsRoute ? 'active' : ''}">Tools</summary>
              <ul class="bg-base-100 rounded-t-none p-2 z-10">
                <li><a href="#/tools/ai" class="${currentRoute === '/tools/ai' ? 'active' : ''}">AI</a></li>
                <li><a href="#/tools/bookmarks" class="${currentRoute === '/tools/bookmarks' ? 'active' : ''}">Bookmarks</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  `;
}

export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  return `
    <div class="navbar bg-base-100 shadow-md">
      <div class="navbar-start">
        <a href="#/" class="btn btn-ghost text-xl">ajgoldenwings</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="#/" class="${currentRoute === '/' ? 'active' : ''}">Home</a>
          </li>
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
      <div class="navbar-end lg:hidden">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li>
              <a>Tools</a>
              <ul class="p-2">
                <li><a href="#/tools/ai">AI</a></li>
                <li><a href="#/tools/bookmarks">Bookmarks</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

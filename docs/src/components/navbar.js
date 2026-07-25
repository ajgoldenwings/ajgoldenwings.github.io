export function renderNavbar(currentRoute) {
  const isToolsRoute = currentRoute.startsWith('/tools');

  return `
    <div class="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div class="navbar-start">
        <a href="#/" class="btn btn-ghost text-xl">ajgoldenwings</a>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="#/about" class="${currentRoute === '/about' ? 'active' : ''}">About</a>
          </li>
          <li>
            <button onclick="document.getElementById('tools-modal').showModal()" class="${isToolsRoute ? 'active' : ''}">Tools</button>
          </li>
        </ul>
      </div>
    </div>

    <dialog id="tools-modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-4">Tools</h3>
        <ul class="menu bg-base-200 rounded-box w-full">
          <li><a href="#/tools/ai" onclick="document.getElementById('tools-modal').close()" class="${currentRoute === '/tools/ai' ? 'active' : ''}">AI</a></li>
          <li><a href="#/tools/bookmarks" onclick="document.getElementById('tools-modal').close()" class="${currentRoute === '/tools/bookmarks' ? 'active' : ''}">Bookmarks</a></li>
        </ul>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer bg-base-200 text-base-content p-10 mt-12" role="contentinfo">
      <nav>
        <h6 class="footer-title">Pages</h6>
        <a href="#/" class="link link-hover">Home</a>
        <a href="#/about" class="link link-hover">About</a>
        <a href="#/tools/ai" class="link link-hover">AI Tools</a>
        <a href="#/tools/bookmarks" class="link link-hover">Bookmarks</a>
      </nav>
      <nav>
        <h6 class="footer-title">Social</h6>
        <a href="https://github.com/ajgoldenwings" target="_blank" rel="noopener noreferrer" class="link link-hover">GitHub</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a href="#/privacy" class="link link-hover">Privacy Policy</a>
        <a href="#/terms" class="link link-hover">Terms of Use</a>
      </nav>
    </footer>
    <footer class="footer footer-center bg-base-200 text-base-content border-t border-base-300 p-4">
      <aside>
        <p class="text-sm opacity-60">&copy; ${year} Anthony Pearson. All rights reserved.</p>
      </aside>
    </footer>
  `;
}

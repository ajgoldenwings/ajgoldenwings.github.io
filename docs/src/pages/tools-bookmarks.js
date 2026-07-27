export function renderToolsBookmarks() {
  const bookmarkLinks = [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Comprehensive web development documentation' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Q&A community for programmers' },
    { name: 'Dev.to', url: 'https://dev.to', description: 'Community of software developers' },
    { name: 'CSS-Tricks', url: 'https://css-tricks.com', description: 'Tips, tricks, and techniques on CSS' },
    { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com', description: 'Web design and development articles' },
    { name: 'Hacker News', url: 'https://news.ycombinator.com', description: 'Tech news and discussions' },
    { name: 'Product Hunt', url: 'https://www.producthunt.com', description: 'Discover new products and startups' },
    { name: 'CodePen', url: 'https://codepen.io', description: 'Online code editor and front-end playground' },
    { name: 'Can I Use', url: 'https://caniuse.com', description: 'Browser support tables for web technologies' },
    { name: 'Web.dev', url: 'https://web.dev', description: 'Google guidance on modern web development' },
  ];

  const listRows = bookmarkLinks
    .map(
      (link) => `
      <li class="list-row">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
        <div>
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="font-semibold hover:underline">${link.name}</a>
          <div class="text-xs uppercase opacity-60">${link.description}</div>
        </div>
      </li>
    `
    )
    .join('');

  return `
    <div>
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/tools/bookmarks">Tools</a></li>
          <li>Bookmarks</li>
        </ul>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div>
          <h2 class="text-3xl font-bold">Bookmarks</h2>
          <p class="text-base opacity-70 mt-1">Useful web development resources and communities worth bookmarking.</p>
        </div>
        <div class="badge badge-neutral badge-lg shrink-0">${bookmarkLinks.length} links</div>
      </div>

      <ul class="list bg-base-100 rounded-box shadow-md">
        ${listRows}
      </ul>
    </div>
  `;
}

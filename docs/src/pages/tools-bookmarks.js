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
        <div class="text-4xl font-thin opacity-30 tabular-nums">${String(bookmarkLinks.indexOf(link) + 1).padStart(2, '0')}</div>
        <div>
          <div class="font-semibold">${link.name}</div>
          <div class="text-xs uppercase opacity-60">${link.description}</div>
        </div>
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-neutral btn-outline">
          Visit &#8599;
        </a>
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

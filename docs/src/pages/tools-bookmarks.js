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

  const linkCards = bookmarkLinks
    .map(
      (link) => `
      <li class="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow">
        <div class="flex-1">
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link link-secondary font-semibold text-lg">
            ${link.name}
          </a>
          <p class="text-sm opacity-70">${link.description}</p>
        </div>
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline btn-secondary">
          Visit
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
      <h2 class="text-3xl font-bold mb-6">Bookmarks</h2>
      <p class="mb-6 text-lg opacity-80">Useful web development resources and communities worth bookmarking.</p>
      <ul class="space-y-3">
        ${linkCards}
      </ul>
    </div>
  `;
}

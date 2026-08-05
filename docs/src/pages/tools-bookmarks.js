export function renderToolsBookmarks() {
  const bookmarkLinks = [
    { name: 'Anthony James Pearson', url: 'https://anthonyjamespearson.com', description: 'Senior .NET/AWS Engineer & Full-Stack Developer portfolio', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>` },
  ];

  const bentoCards = bookmarkLinks
    .map(
      (link, i) => {
        const span = i === 0 ? 'col-span-1 sm:col-span-2' : 'col-span-1';
        return `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="flex flex-col gap-2 p-6 rounded-2xl border border-base-300/25 no-underline text-inherit transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 ${span}">
          <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-primary-content mb-1">${link.icon}</div>
          <div class="flex items-center gap-2">
            <h3 class="text-base font-bold m-0">${link.name}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 opacity-40 shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
          <p class="text-xs opacity-60 m-0 leading-relaxed">${link.description}</p>
        </a>
      `;
      }
    )
    .join('');

  return `
    <div>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div>
          <h2 class="text-3xl font-bold">Bookmarks</h2>
          <p class="text-base opacity-70 mt-1">Useful web development resources and communities worth bookmarking.</p>
        </div>
        <div class="badge badge-neutral badge-lg shrink-0">${bookmarkLinks.length} links</div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${bentoCards}
      </div>
    </div>
  `;
}

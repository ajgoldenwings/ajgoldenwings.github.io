export function renderTools() {
  const toolCategories = [
    {
      name: 'AI Tools',
      route: '#/tools/ai',
      description: 'Curated collection of AI platforms and assistants to boost your productivity.',
      count: 10,
    },
    {
      name: 'Bookmarks',
      route: '#/tools/bookmarks',
      description: 'Essential web development resources, communities, and references worth bookmarking.',
      count: 10,
    },
  ];

  const externalTools = [
    {
      name: 'Tax Tools - State Income Taxes—On Earned Income',
      url: 'https://taxes.anthonyjamespearson.com',
      description: 'Compare state earned income tax obligations across different income levels for all 50 US states.',
    },
  ];

  const listRows = toolCategories
    .map(
      (cat) => `
      <li class="list-row">
        <div>
          <a href="${cat.route}" class="link link-hover text-lg font-semibold">${cat.name}</a>
          <div class="text-xs opacity-60">${cat.description}</div>
        </div>
      </li>
    `
    )
    .join('');

  const externalRows = externalTools
    .map(
      (tool) => `
      <li class="list-row">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
        <div>
          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="font-semibold hover:underline">${tool.name}</a>
          <div class="text-xs uppercase opacity-60">${tool.description}</div>
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
          <li>Tools</li>
        </ul>
      </div>

      <div class="mb-6">
        <h2 class="text-3xl font-bold">Tools</h2>
        <p class="text-base opacity-70 mt-1">Browse all tool collections and resources in one place.</p>
      </div>

      <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Tool Collections</li>
        ${listRows}
      </ul>

      <ul class="list bg-base-100 rounded-box shadow-md mt-6">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">External Tools</li>
        ${externalRows}
      </ul>
    </div>
  `;
}

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
    </div>
  `;
}

export function renderTools() {
  const toolCategories = [
    {
      name: 'AI Tools',
      route: '#/tools/ai',
      icon: '&#129302;',
      description: 'Curated collection of AI platforms and assistants to boost your productivity.',
      count: 10,
    },
    {
      name: 'Bookmarks',
      route: '#/tools/bookmarks',
      icon: '&#128278;',
      description: 'Essential web development resources, communities, and references worth bookmarking.',
      count: 10,
    },
  ];

  const listRows = toolCategories
    .map(
      (cat) => `
      <li class="list-row">
        <div class="text-4xl">${cat.icon}</div>
        <div>
          <a href="${cat.route}" class="font-semibold text-lg hover:underline">${cat.name}</a>
          <div class="text-xs opacity-60">${cat.description}</div>
        </div>
        <div class="flex items-center">
          <span class="badge badge-neutral">${cat.count} items</span>
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
        ${listRows}
      </ul>
    </div>
  `;
}

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

  const cards = toolCategories
    .map(
      (cat) => `
      <a href="${cat.route}" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow cursor-pointer">
        <div class="card-body items-center text-center">
          <div class="text-5xl mb-2">${cat.icon}</div>
          <h3 class="card-title">${cat.name}</h3>
          <p class="opacity-70">${cat.description}</p>
          <div class="badge badge-neutral mt-2">${cat.count} items</div>
        </div>
      </a>
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${cards}
      </div>
    </div>
  `;
}

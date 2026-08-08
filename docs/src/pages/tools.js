export function renderTools() {
  const internalTools = [
    {
      name: 'AI Tools',
      route: '#/tools/ai',
      description: 'Curated collection of AI platforms and assistants to boost your productivity.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
      count: 10,
      span: 'col-span-1 sm:col-span-2',
    },
    {
      name: 'Bookmarks',
      route: '#/tools/bookmarks',
      description: 'Essential web development resources, communities, and references worth bookmarking.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>`,
      count: 11,
      span: 'col-span-1 sm:col-span-1',
    },
    {
      name: 'Health Check',
      route: '#/tools/health',
      description: 'Monitor the availability and response times of your websites with real-time health checks.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
      count: 4,
      span: 'col-span-1 sm:col-span-1',
    },
    {
      name: 'Skill Network Graph',
      route: '#/tools/network',
      description: 'Interactive force-directed graph visualizing how tech skills connect — drag, filter, and explore.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>`,
      count: 21,
      span: 'col-span-1 sm:col-span-2',
    },
  ];

  const externalTools = [
    {
      name: 'State Income Taxes—On Earned Income',
      subtitle: 'Compare state earned income tax obligations across different income levels for all 50 US states',
      url: 'https://taxes.anthonyjamespearson.com',
      description: 'Interactive tax calculator and visualization tool for informed financial planning. Tax data sourced from Tax Foundation state income tax rates (2025 & 2026). Data includes current tax brackets, rates, and standard deductions for accurate tax obligation calculations.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
      span: 'col-span-1 sm:col-span-3',
    },
  ];

  const internalCards = internalTools
    .map(
      (tool) => `
      <a href="${tool.route}" class="flex flex-col gap-2 p-6 rounded-2xl border border-base-300/25 no-underline text-inherit transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 ${tool.span}">
        <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-primary-content mb-1">${tool.icon}</div>
        <h3 class="text-base font-bold m-0">${tool.name}</h3>
        <p class="text-xs opacity-60 m-0 leading-relaxed">${tool.description}</p>
        <div class="badge badge-neutral badge-sm mt-auto">${tool.count} items</div>
      </a>
    `
    )
    .join('');

  const externalCards = externalTools
    .map(
      (tool) => `
      <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="flex flex-col gap-2 p-6 rounded-2xl border border-base-300/25 no-underline text-inherit transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 ${tool.span}">
        <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-primary-content mb-1">${tool.icon}</div>
        <div class="flex items-center gap-2">
          <h3 class="text-base font-bold m-0">${tool.name}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 opacity-50 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
        ${tool.subtitle ? `<p class="text-xs opacity-50 -mt-1">${tool.subtitle}</p>` : ''}
        <p class="text-xs opacity-60 m-0 leading-relaxed">${tool.description}</p>
      </a>
    `
    )
    .join('');

  return `
    <div>
      <div class="mb-6">
        <h2 class="text-3xl font-bold">Tools</h2>
        <p class="text-base opacity-70 mt-1">Browse all tool collections and resources in one place.</p>
      </div>

      <h3 class="text-lg font-semibold mb-3 opacity-80">Tool Collections</h3>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        ${internalCards}
      </div>

      <h3 class="text-lg font-semibold mb-3 mt-8 opacity-80">External Tools</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${externalCards}
      </div>
    </div>
  `;
}

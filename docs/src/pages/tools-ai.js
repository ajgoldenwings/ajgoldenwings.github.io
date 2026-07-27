export function renderToolsAI() {
  const aiLinks = [
    { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'Conversational AI by OpenAI' },
    { name: 'Claude', url: 'https://claude.ai', description: 'AI assistant by Anthropic' },
    { name: 'Midjourney', url: 'https://www.midjourney.com', description: 'AI image generation tool' },
    { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI-powered code completion' },
    { name: 'Hugging Face', url: 'https://huggingface.co', description: 'Open-source AI model hub' },
    { name: 'Runway', url: 'https://runwayml.com', description: 'AI-powered creative tools for video' },
    { name: 'Perplexity AI', url: 'https://www.perplexity.ai', description: 'AI-powered search engine' },
    { name: 'Stable Diffusion', url: 'https://stability.ai', description: 'Open-source image generation' },
    { name: 'Notion AI', url: 'https://www.notion.so/product/ai', description: 'AI writing assistant in Notion' },
    { name: 'Replit AI', url: 'https://replit.com', description: 'AI-powered coding environment' },
  ];

  const listRows = aiLinks
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
          <li><a href="#/tools">Tools</a></li>
          <li>AI</li>
        </ul>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div>
          <h2 class="text-3xl font-bold">AI Tools</h2>
          <p class="text-base opacity-70 mt-1">A curated collection of AI tools and platforms to boost your productivity.</p>
        </div>
        <div class="badge badge-neutral badge-lg shrink-0">${aiLinks.length} tools</div>
      </div>

      <ul class="list bg-base-100 rounded-box shadow-md">
        ${listRows}
      </ul>
    </div>
  `;
}

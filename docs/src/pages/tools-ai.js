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

  const linkCards = aiLinks
    .map(
      (link) => `
      <div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
        <div class="card-body p-5">
          <h3 class="card-title text-base">
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link link-primary link-hover">
              ${link.name}
            </a>
          </h3>
          <p class="text-sm opacity-70">${link.description}</p>
          <div class="card-actions justify-end mt-2">
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-primary btn-outline">
              Visit &#8599;
            </a>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <div>
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/tools/ai">Tools</a></li>
          <li>AI</li>
        </ul>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div>
          <h2 class="text-3xl font-bold">AI Tools</h2>
          <p class="text-base opacity-70 mt-1">A curated collection of AI tools and platforms to boost your productivity.</p>
        </div>
        <div class="badge badge-primary badge-lg">${aiLinks.length} tools</div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${linkCards}
      </div>
    </div>
  `;
}

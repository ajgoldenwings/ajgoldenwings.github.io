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
      <li class="flex items-center gap-4 p-4 rounded-lg">
        <div class="flex-1">
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link link-primary font-semibold text-lg">
            ${link.name}
          </a>
          <p class="text-sm opacity-70">${link.description}</p>
        </div>
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline btn-primary">
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
          <li><a href="#/tools/ai">Tools</a></li>
          <li>AI</li>
        </ul>
      </div>
      <h2 class="text-3xl font-bold mb-6">AI Tools</h2>
      <p class="mb-6 text-lg opacity-80">A curated collection of AI tools and platforms to boost your productivity.</p>
      <ul class="space-y-3">
        ${linkCards}
      </ul>
    </div>
  `;
}

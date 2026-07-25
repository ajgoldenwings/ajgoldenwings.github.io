export function renderAbout() {
  return `
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">About</h2>
        <p class="text-lg">
          This is a personal site built to organize and share useful tools and resources. 
          Whether you're looking for AI-powered tools or curated bookmarks to helpful places 
          on the web, you'll find them here.
        </p>
        <div class="divider"></div>
        <p>
          Built with <span class="badge badge-primary">Vite</span> 
          <span class="badge badge-secondary">Tailwind CSS</span> 
          <span class="badge badge-accent">DaisyUI</span>
        </p>
      </div>
    </div>
  `;
}

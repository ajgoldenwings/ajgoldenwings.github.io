export function renderHome() {
  return `
    <div class="hero min-h-[60vh]">
      <div class="hero-content text-center">
        <div class="max-w-2xl prose prose-lg">
          <h1>Welcome</h1>
          <p>
            A personal hub for tools, resources, and everything in between.
          </p>
          <div class="flex gap-4 justify-center flex-wrap not-prose">
            <a href="#/tools" class="btn btn-neutral">Browse Tools</a>
            <a href="#/about" class="btn btn-outline">About</a>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      <div class="prose text-center">
        <p class="text-4xl">&#129302;</p>
        <h3>AI Tools</h3>
        <p>Curated collection of AI platforms to boost your productivity.</p>
        <a href="#/tools/ai" class="btn btn-sm btn-outline not-prose">Explore</a>
      </div>
      <div class="prose text-center">
        <p class="text-4xl">&#128278;</p>
        <h3>Bookmarks</h3>
        <p>Essential web development resources and communities.</p>
        <a href="#/tools/bookmarks" class="btn btn-sm btn-outline not-prose">Browse</a>
      </div>
      <div class="prose text-center">
        <p class="text-4xl">&#9997;&#65039;</p>
        <h3>About</h3>
        <p>Learn more about this site and the tech behind it.</p>
        <a href="#/about" class="btn btn-sm btn-outline not-prose">Read</a>
      </div>
    </div>

    <div class="stats shadow w-full mt-4">
      <div class="stat">
        <div class="stat-title">Tools</div>
        <div class="stat-value">20</div>
        <div class="stat-desc">Across 2 categories</div>
      </div>
      <div class="stat">
        <div class="stat-title">Categories</div>
        <div class="stat-value">2</div>
        <div class="stat-desc">AI Tools &amp; Bookmarks</div>
      </div>
      <div class="stat">
        <div class="stat-title">Built with</div>
        <div class="stat-value">3</div>
        <div class="stat-desc">Vite + Tailwind + daisyUI</div>
      </div>
    </div>
  `;
}

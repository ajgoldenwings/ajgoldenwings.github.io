export function renderHome() {
  return `
    <div class="hero min-h-[60vh]">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold">Welcome</h1>
          <p class="py-6 text-lg opacity-80">
            A personal hub for tools, resources, and everything in between.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="#/tools/ai" class="btn btn-neutral">AI Tools</a>
            <a href="#/tools/bookmarks" class="btn btn-outline">Bookmarks</a>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      <div class="card card-border bg-base-100 shadow-md">
        <div class="card-body items-center text-center">
          <div class="text-4xl mb-2">&#129302;</div>
          <h3 class="card-title">AI Tools</h3>
          <p class="opacity-70">Curated collection of AI platforms to boost your productivity.</p>
          <div class="card-actions mt-2">
            <a href="#/tools/ai" class="btn btn-sm btn-outline">Explore</a>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100 shadow-md">
        <div class="card-body items-center text-center">
          <div class="text-4xl mb-2">&#128278;</div>
          <h3 class="card-title">Bookmarks</h3>
          <p class="opacity-70">Essential web development resources and communities.</p>
          <div class="card-actions mt-2">
            <a href="#/tools/bookmarks" class="btn btn-sm btn-outline">Browse</a>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100 shadow-md">
        <div class="card-body items-center text-center">
          <div class="text-4xl mb-2">&#9997;&#65039;</div>
          <h3 class="card-title">About</h3>
          <p class="opacity-70">Learn more about this site and the tech behind it.</p>
          <div class="card-actions mt-2">
            <a href="#/about" class="btn btn-sm btn-outline">Read</a>
          </div>
        </div>
      </div>
    </div>

    <div class="stats shadow w-full mt-4">
      <div class="stat">
        <div class="stat-title">AI Tools</div>
        <div class="stat-value">10</div>
        <div class="stat-desc">Curated picks</div>
      </div>
      <div class="stat">
        <div class="stat-title">Bookmarks</div>
        <div class="stat-value">10</div>
        <div class="stat-desc">Dev resources</div>
      </div>
      <div class="stat">
        <div class="stat-title">Built with</div>
        <div class="stat-value">3</div>
        <div class="stat-desc">Vite + Tailwind + daisyUI</div>
      </div>
    </div>
  `;
}

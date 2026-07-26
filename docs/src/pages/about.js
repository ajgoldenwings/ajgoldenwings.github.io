export function renderAbout() {
  return `
    <div>
      <div class="breadcrumbs text-sm mb-6">
        <ul>
          <li><a href="#/">Home</a></li>
          <li>About</li>
        </ul>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl">About This Site</h2>
          <p class="text-lg opacity-80 mt-2">
            A personal site built to organize and share useful tools and resources.
            Whether you're looking for AI-powered tools or curated bookmarks to helpful places
            on the web, you'll find them here.
          </p>
        </div>
      </div>

      <div class="divider">How It Was Built</div>

      <ul class="timeline timeline-vertical">
        <li>
          <div class="timeline-start timeline-box">Project scaffolding</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class="bg-primary"/>
        </li>
        <li>
          <hr class="bg-primary"/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Tailwind CSS 4 + daisyUI 5 integration</div>
          <hr class="bg-primary"/>
        </li>
        <li>
          <hr class="bg-primary"/>
          <div class="timeline-start timeline-box">SPA routing with hash navigation</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class="bg-secondary"/>
        </li>
        <li>
          <hr class="bg-secondary"/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-secondary">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Theme toggle with light/dark support</div>
          <hr class="bg-secondary"/>
        </li>
        <li>
          <hr class="bg-secondary"/>
          <div class="timeline-start timeline-box">Deployed to GitHub Pages</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-accent">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
        </li>
      </ul>

      <div class="divider">Tech Stack</div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="card bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title text-primary">Vite</h3>
            <p class="text-sm opacity-70">Lightning-fast build tool and dev server</p>
            <div class="badge badge-primary badge-outline mt-2">Build</div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title text-secondary">Tailwind CSS 4</h3>
            <p class="text-sm opacity-70">Utility-first CSS framework</p>
            <div class="badge badge-secondary badge-outline mt-2">Styling</div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title text-accent">daisyUI 5</h3>
            <p class="text-sm opacity-70">Component library with semantic class names</p>
            <div class="badge badge-accent badge-outline mt-2">Components</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

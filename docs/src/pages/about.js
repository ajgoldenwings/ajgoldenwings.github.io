export function renderAbout() {
  return `
    <div>
      <div class="breadcrumbs text-sm mb-6">
        <ul>
          <li><a href="#/">Home</a></li>
          <li>About</li>
        </ul>
      </div>

      <div class="card card-border bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl">About This Site</h2>
          <p class="text-lg opacity-80 mt-2">
            A personal site built to organize and share useful tools and resources.
            Whether you're looking for AI-powered tools or curated bookmarks to helpful places
            on the web, you'll find them here.
          </p>
          <p class="opacity-80 mt-2">
            The goal was simple: create a lightweight, fast-loading personal hub without the overhead
            of heavy frameworks. Everything is vanilla JavaScript with a hash-based SPA router,
            styled with Tailwind CSS and daisyUI components. No build-time rendering, no server required
            — just static files served from GitHub Pages.
          </p>
        </div>
      </div>

      <div class="divider">Development Workflow</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Kiro
            </h3>
            <p class="text-sm opacity-70">
              This site was built using <a href="https://kiro.dev" target="_blank" rel="noopener noreferrer" class="link link-hover font-medium">Kiro</a>,
              an AI-powered development environment. Kiro assisted with scaffolding, component creation,
              styling decisions, and iterating on the design — all through natural conversation in the editor.
            </p>
          </div>
        </div>
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </h3>
            <p class="text-sm opacity-70">
              Source code lives in a public <a href="https://github.com/ajgoldenwings/ajgoldenwings.github.io" target="_blank" rel="noopener noreferrer" class="link link-hover font-medium">GitHub repository</a>.
              Every push to the master branch triggers a GitHub Actions workflow that builds the site
              and deploys it automatically to GitHub Pages — zero manual steps after commit.
            </p>
          </div>
        </div>
      </div>

      <div class="divider">Architecture</div>

      <div class="card card-border bg-base-100 shadow-md">
        <div class="card-body">
          <ul class="list-disc list-inside space-y-2 opacity-80">
            <li><span class="font-medium">Single-page app</span> — hash-based routing (<code class="text-sm">#/about</code>, <code class="text-sm">#/tools/ai</code>) with no page reloads.</li>
            <li><span class="font-medium">No framework</span> — pure ES modules, render functions return template literal HTML.</li>
            <li><span class="font-medium">Component structure</span> — shared navbar and footer, page-level modules for each route.</li>
            <li><span class="font-medium">Theming</span> — light/dark toggle powered by daisyUI theme controller (retro / halloween).</li>
            <li><span class="font-medium">Static output</span> — Vite produces a <code class="text-sm">dist/</code> folder of static assets, no server runtime needed.</li>
          </ul>
        </div>
      </div>

      <div class="divider">How It Was Built</div>

      <ul class="timeline timeline-vertical">
        <li>
          <div class="timeline-start timeline-box">Project scaffolding with Vite</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Tailwind CSS 4 + daisyUI 5 integration</div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-start timeline-box">SPA routing with hash navigation</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Theme toggle with light/dark support</div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-start timeline-box">Built with Kiro, an AI-powered IDE</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Version control and collaboration via GitHub</div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-start timeline-box">CI/CD with GitHub Actions</div>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <hr class="bg-neutral"/>
        </li>
        <li>
          <hr class="bg-neutral"/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Deployed to GitHub Pages</div>
        </li>
      </ul>

      <div class="divider">Tech Stack</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title">Vite</h3>
            <p class="text-sm opacity-70">Lightning-fast build tool and dev server</p>
          </div>
        </div>
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title">Tailwind CSS 4</h3>
            <p class="text-sm opacity-70">Utility-first CSS framework</p>
          </div>
        </div>
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title">daisyUI 5</h3>
            <p class="text-sm opacity-70">Component library with semantic class names</p>
          </div>
        </div>
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title">Kiro</h3>
            <p class="text-sm opacity-70">AI-powered IDE for building with conversation</p>
          </div>
        </div>
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title">GitHub</h3>
            <p class="text-sm opacity-70">Source control and collaboration platform</p>
          </div>
        </div>
        <div class="card card-border bg-base-100 shadow-md">
          <div class="card-body items-center text-center p-5">
            <h3 class="card-title">GitHub Actions</h3>
            <p class="text-sm opacity-70">Automated CI/CD pipeline for deployment</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

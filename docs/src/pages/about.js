export function renderAbout() {
  return `
    <!-- ABOUT HERO -->
    <section class="relative py-20 md:py-28 flex items-center justify-center overflow-hidden">
      <!-- Background orbs (same style as home) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>

      <div class="relative z-10 text-center max-w-3xl mx-auto px-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/60 backdrop-blur-sm border border-base-300/50 mb-8 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span class="text-sm font-medium opacity-80">The story behind the site</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up">
          Built with
          <span class="hero-gradient-text">Curiosity</span>
          &amp; Code
        </h1>

        <p class="text-lg md:text-xl opacity-70 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          A developer's personal hub — no bloat, no frameworks war, just a fast static site
          built entirely through AI-assisted conversation.
        </p>
      </div>
    </section>

    <!-- PHILOSOPHY SECTION -->
    <section class="py-16 px-4 border-t border-base-300/50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why This Exists</h2>
          <p class="text-base opacity-60 max-w-xl mx-auto">
            Every developer has a junk drawer of bookmarks. This is mine — organized, public, and actually useful.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-8 text-center fade-in-section">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Fast by Default</h3>
            <p class="text-sm opacity-60">No server runtime. No heavy bundles. Static files served from the edge in milliseconds.</p>
          </div>

          <div class="p-8 text-center fade-in-section">
            <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">AI-Crafted</h3>
            <p class="text-sm opacity-60">Every component was designed through conversation with Kiro — from layout to copy to deployment.</p>
          </div>

          <div class="p-8 text-center fade-in-section">
            <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Zero Dependencies*</h3>
            <p class="text-sm opacity-60">Pure ES modules. No React. No Vue. Just template literals and a hash router. <span class="italic opacity-40">*at runtime</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE SECTION -->
    <section class="py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Under the Hood</h2>
          <p class="text-base opacity-60 max-w-xl mx-auto">The architecture is deliberately simple. Here's how it all fits together.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-section">
          <div class="space-y-6">
            <div class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold mb-1">Hash-Based Routing</h4>
                <p class="text-sm opacity-60">URLs like <code class="bg-base-200 px-1.5 py-0.5 rounded text-xs">#/about</code> drive navigation. No server config, no 404 pages on refresh.</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold mb-1">Component Architecture</h4>
                <p class="text-sm opacity-60">Shared navbar and footer wrap page-level render functions. Each route is a standalone ES module.</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold mb-1">Dual Theming</h4>
                <p class="text-sm opacity-60">Light (retro) and dark (halloween) themes via daisyUI's theme controller. Respects system preference.</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold mb-1">Template Literals</h4>
                <p class="text-sm opacity-60">Render functions return raw HTML strings. No virtual DOM, no JSX transpilation, no build-time rendering.</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold mb-1">Static Output</h4>
                <p class="text-sm opacity-60">Vite produces a <code class="bg-base-200 px-1.5 py-0.5 rounded text-xs">dist/</code> folder of optimized static assets. No Node.js runtime in production.</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold mb-1">Accessible First</h4>
                <p class="text-sm opacity-60">Skip links, ARIA labels, focus management, reduced-motion support — baked in from day one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKFLOW / HOW IT WAS BUILT -->
    <section class="py-16 px-4 border-t border-base-300/50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">The Workflow</h2>
          <p class="text-base opacity-60 max-w-xl mx-auto">From zero to deployed in a single conversation loop.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center fade-in-section">
          <!-- Left: Kiro -->
          <div class="p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold">Kiro</h3>
                <p class="text-xs opacity-50">AI-Powered IDE</p>
              </div>
            </div>
            <p class="text-sm opacity-70 leading-relaxed mb-4">
              The entire site was scaffolded, iterated, and refined through natural conversation inside
              <a href="https://kiro.dev" target="_blank" rel="noopener noreferrer" class="link link-primary font-medium">Kiro</a>.
              Components, styling, routing logic, accessibility — all shaped by prompts, not boilerplate.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-outline badge-sm">Scaffolding</span>
              <span class="badge badge-outline badge-sm">Component Design</span>
              <span class="badge badge-outline badge-sm">CSS Architecture</span>
              <span class="badge badge-outline badge-sm">Accessibility</span>
            </div>
          </div>

          <!-- Right: GitHub -->
          <div class="p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-base-300/50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold">GitHub</h3>
                <p class="text-xs opacity-50">Source &amp; Deployment</p>
              </div>
            </div>
            <p class="text-sm opacity-70 leading-relaxed mb-4">
              Code lives in a
              <a href="https://github.com/ajgoldenwings/ajgoldenwings.github.io" target="_blank" rel="noopener noreferrer" class="link link-primary font-medium">public repository</a>.
              Push to master triggers GitHub Actions — builds with Vite and deploys to GitHub Pages. Zero manual steps.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-outline badge-sm">Version Control</span>
              <span class="badge badge-outline badge-sm">CI/CD</span>
              <span class="badge badge-outline badge-sm">GitHub Actions</span>
              <span class="badge badge-outline badge-sm">GitHub Pages</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK GRID -->
    <section class="py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p class="text-base opacity-60 max-w-xl mx-auto">Intentionally minimal. Every tool earns its spot.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 fade-in-section">
          <div class="p-6 text-center group">
            <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-warning/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="font-bold text-sm mb-1">Vite</h4>
            <p class="text-xs opacity-50">Build tool & dev server</p>
          </div>
          <div class="p-6 text-center group">
            <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
              </svg>
            </div>
            <h4 class="font-bold text-sm mb-1">Tailwind CSS 4</h4>
            <p class="text-xs opacity-50">Utility-first styling</p>
          </div>
          <div class="p-6 text-center group">
            <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.657-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
              </svg>
            </div>
            <h4 class="font-bold text-sm mb-1">daisyUI 5</h4>
            <p class="text-xs opacity-50">Component library</p>
          </div>
          <div class="p-6 text-center group">
            <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
            </div>
            <h4 class="font-bold text-sm mb-1">Kiro</h4>
            <p class="text-xs opacity-50">AI-powered IDE</p>
          </div>
          <div class="p-6 text-center group">
            <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-base-300/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h4 class="font-bold text-sm mb-1">GitHub</h4>
            <p class="text-xs opacity-50">Source & collaboration</p>
          </div>
          <div class="p-6 text-center group">
            <div class="w-10 h-10 mx-auto mb-3 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h4 class="font-bold text-sm mb-1">GitHub Actions</h4>
            <p class="text-xs opacity-50">Automated CI/CD</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-20 px-4 border-t border-base-300/50">
      <div class="max-w-3xl mx-auto text-center fade-in-section">
        <div class="relative">
          <div class="absolute inset-0 bg-linear-to-r from-primary/35 via-secondary/35 to-accent/35 rounded-3xl blur-3xl"></div>
          <div class="relative p-12 md:p-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Want to build something like this?</h2>
            <p class="opacity-60 mb-8 max-w-md mx-auto">Fork the repo, open Kiro, and start a conversation. That's literally the whole process.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/ajgoldenwings/ajgoldenwings.github.io" target="_blank" rel="noopener noreferrer" class="btn btn-neutral btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Fork on GitHub
              </a>
              <a href="#/tools" class="btn btn-outline btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

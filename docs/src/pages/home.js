export function renderHome() {
  return `
    <!-- HERO SECTION -->
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <!-- Animated background orbs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>

      <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/60 backdrop-blur-sm border border-base-300/50 mb-8 animate-fade-in-down">
          <span class="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          <span class="text-sm font-medium opacity-80">Curated by a developer, for developers</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
          Your Next Favorite
          <span class="hero-gradient-text block md:inline"> Tool Starts Here</span>
        </h1>

        <p class="text-lg md:text-xl opacity-70 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          Stop doomscrolling for the perfect resource. We've already found, tested, and organized the best AI tools and dev bookmarks so you don't have to.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <a href="#/tools" class="btn btn-neutral btn-lg group relative overflow-hidden">
            <span class="relative z-10 flex items-center gap-2">
              Explore the Collection
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a href="#/about" class="btn btn-ghost btn-lg opacity-80 hover:opacity-100">
            How it's built &rarr;
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- SOCIAL PROOF / STATS STRIP -->
    <section class="py-12 border-y border-base-300/50">
      <div class="max-w-5xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="fade-in-section">
            <div class="text-4xl font-black hero-gradient-text">20+</div>
            <div class="text-sm opacity-60 mt-1 font-medium">Handpicked Tools</div>
          </div>
          <div class="fade-in-section">
            <div class="text-4xl font-black hero-gradient-text">2</div>
            <div class="text-sm opacity-60 mt-1 font-medium">Curated Categories</div>
          </div>
          <div class="fade-in-section">
            <div class="text-4xl font-black hero-gradient-text">0</div>
            <div class="text-sm opacity-60 mt-1 font-medium">Sponsored Picks</div>
          </div>
          <div class="fade-in-section">
            <div class="text-4xl font-black hero-gradient-text">&infin;</div>
            <div class="text-sm opacity-60 mt-1 font-medium">Hours Saved</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURE CARDS -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 fade-in-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Built Different</h2>
          <p class="text-base opacity-60 max-w-xl mx-auto">No fluff. No paywalls. Just the good stuff, organized the way you'd want it.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card 1: AI Tools -->
          <a href="#/tools/ai" class="group fade-in-section">
            <div class="p-8">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:hero-gradient-text transition-all">AI Tools</h3>
              <p class="opacity-60 text-sm leading-relaxed mb-4">From chatbots to code generators — the AI platforms actually worth your time.</p>
              <span class="inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>

          <!-- Card 2: Bookmarks -->
          <a href="#/tools/bookmarks" class="group fade-in-section">
            <div class="p-8">
              <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:hero-gradient-text transition-all">Bookmarks</h3>
              <p class="opacity-60 text-sm leading-relaxed mb-4">The links you'd pin if you had infinite tabs. Dev communities, docs, and hidden gems.</p>
              <span class="inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Browse
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>

          <!-- Card 3: Open Source -->
          <a href="#/about" class="group fade-in-section">
            <div class="p-8">
              <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:hero-gradient-text transition-all">Open Source</h3>
              <p class="opacity-60 text-sm leading-relaxed mb-4">Built in public with Kiro + Vite + Tailwind. Fork it, learn from it, make it yours.</p>
              <span class="inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                See How
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- MARQUEE / TECH STRIP -->
    <section class="py-8 border-y border-base-300/30 overflow-hidden">
      <div class="flex overflow-hidden whitespace-nowrap">
        <div class="flex items-center gap-8 animate-[marquee_30s_linear_infinite]">
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Vite</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Tailwind CSS 4</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">daisyUI 5</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Vanilla JS</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">GitHub Pages</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">GitHub Actions</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Kiro AI</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Vite</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Tailwind CSS 4</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">daisyUI 5</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Vanilla JS</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">GitHub Pages</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">GitHub Actions</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
          <span class="text-sm font-semibold opacity-50 uppercase tracking-widest">Kiro AI</span>
          <span class="w-1 h-1 rounded-full bg-current opacity-30 shrink-0"></span>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-24 px-4">
      <div class="max-w-3xl mx-auto text-center fade-in-section">
        <div class="relative">
          <div class="absolute inset-0 bg-linear-to-r from-primary/35 via-secondary/35 to-accent/35 rounded-3xl blur-3xl"></div>
          <div class="relative p-12 md:p-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to level up?</h2>
            <p class="opacity-60 mb-8 max-w-md mx-auto">Dive into the collection. Every tool has been vetted, every bookmark earned its spot.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#/tools" class="btn btn-neutral btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Browse All Tools
              </a>
              <a href="https://github.com/ajgoldenwings/ajgoldenwings.github.io" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

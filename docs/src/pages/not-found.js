export function renderNotFound() {
  return `
    <div class="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div class="text-8xl font-black hero-gradient-text mb-4">404</div>
      <h1 class="text-3xl font-bold mb-2">Page Not Found</h1>
      <p class="opacity-60 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <div class="flex gap-4">
        <a href="#/" class="btn btn-neutral">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </a>
        <a href="#/tools" class="btn btn-outline">
          Browse Tools
        </a>
      </div>
    </div>
  `;
}

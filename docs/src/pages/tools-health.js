const DEFAULT_URLS = [
  'https://anthonyjamespearson.com',
  'https://mountaintechnologiesllc.com',
  'https://yytt.media',
  'https://www.2dau.com',
];

let healthChecks = [];

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function getStatusBadge(check) {
  if (check.status === 'pending') {
    return `<span class="badge badge-neutral badge-sm gap-1"><span class="loading loading-spinner loading-xs"></span> Checking...</span>`;
  }
  if (check.status === 'healthy') {
    return `<span class="badge badge-success badge-sm gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
      Healthy
    </span>`;
  }
  if (check.status === 'unhealthy') {
    return `<span class="badge badge-error badge-sm gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
      Unhealthy
    </span>`;
  }
  if (check.status === 'error') {
    return `<span class="badge badge-warning badge-sm gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
      Error
    </span>`;
  }
  return '';
}

function getStatusIcon(check) {
  if (check.status === 'pending') {
    return `<div class="w-10 h-10 flex items-center justify-center rounded-xl bg-base-300 text-base-content">
      <span class="loading loading-spinner loading-sm"></span>
    </div>`;
  }
  if (check.status === 'healthy') {
    return `<div class="w-10 h-10 flex items-center justify-center rounded-xl bg-success text-success-content">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    </div>`;
  }
  if (check.status === 'unhealthy') {
    return `<div class="w-10 h-10 flex items-center justify-center rounded-xl bg-error text-error-content">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
    </div>`;
  }
  if (check.status === 'error') {
    return `<div class="w-10 h-10 flex items-center justify-center rounded-xl bg-warning text-warning-content">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
    </div>`;
  }
  return `<div class="w-10 h-10 flex items-center justify-center rounded-xl bg-base-300 text-base-content">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
  </div>`;
}

function renderCard(check) {
  const hostname = (() => {
    try {
      return new URL(check.url).hostname;
    } catch {
      return check.url;
    }
  })();

  return `
    <div class="flex flex-col gap-3 p-5 rounded-2xl border border-base-300/25 bg-base-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${check.status === 'healthy' ? 'border-success/20' : ''} ${check.status === 'unhealthy' ? 'border-error/20' : ''} ${check.status === 'error' ? 'border-warning/20' : ''} ${check.status === 'pending' ? 'animate-pulse' : ''}" data-check-id="${check.id}">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3 min-w-0">
          ${getStatusIcon(check)}
          <div class="min-w-0">
            <h3 class="text-sm font-bold m-0 truncate">${hostname}</h3>
            <p class="text-xs opacity-50 m-0 truncate">${check.url}</p>
          </div>
        </div>
        <button class="btn btn-ghost btn-xs btn-square shrink-0 health-remove-btn" data-check-id="${check.id}" aria-label="Remove ${hostname}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        ${getStatusBadge(check)}
        ${check.responseTime != null ? `<span class="badge badge-ghost badge-sm">${check.responseTime}ms</span>` : ''}
        ${check.statusCode != null ? `<span class="badge badge-ghost badge-sm">HTTP ${check.statusCode}</span>` : ''}
      </div>
      ${check.message ? `<p class="text-xs m-0 leading-relaxed opacity-70 border-l-2 border-base-300 pl-3 ${check.status === 'error' || check.status === 'unhealthy' ? 'text-error border-error/40' : ''}">${check.message}</p>` : ''}
    </div>
  `;
}

function renderGrid() {
  const container = document.getElementById('health-grid');
  if (!container) return;

  if (healthChecks.length === 0) {
    container.innerHTML = `
      <div class="col-span-full flex flex-col items-center justify-center py-12 opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mb-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <p class="text-sm">No websites to check. Add a URL above to get started.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = healthChecks.map(renderCard).join('');
}

async function checkHealth(check) {
  const startTime = performance.now();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(check.url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: controller.signal,
    });

    clearTimeout(timeout);
    const elapsed = Math.round(performance.now() - startTime);

    // In no-cors mode, response is opaque (status 0) but if we get here, the server responded
    if (response.type === 'opaque') {
      check.status = 'healthy';
      check.responseTime = elapsed;
      check.statusCode = null;
      check.message = `Server responded successfully in ${elapsed}ms. (Exact HTTP status hidden due to cross-origin restrictions — the server is reachable and accepting connections.)`;
    } else {
      check.responseTime = elapsed;
      check.statusCode = response.status;
      if (response.ok) {
        check.status = 'healthy';
        check.message = `HTTP ${response.status} ${response.statusText} — Server responded successfully in ${elapsed}ms. The website is up and reachable.`;
      } else if (response.status >= 400 && response.status < 500) {
        check.status = 'unhealthy';
        check.message = `HTTP ${response.status} ${response.statusText} — Client error response received in ${elapsed}ms. The server is reachable but returned an error. This may indicate a misconfigured page, access restriction, or missing resource.`;
      } else if (response.status >= 500) {
        check.status = 'unhealthy';
        check.message = `HTTP ${response.status} ${response.statusText} — Server error response received in ${elapsed}ms. The server is reachable but experiencing internal issues.`;
      } else {
        check.status = 'healthy';
        check.message = `HTTP ${response.status} — Server responded in ${elapsed}ms with a redirect or informational status.`;
      }
    }
  } catch (err) {
    const elapsed = Math.round(performance.now() - startTime);
    check.responseTime = elapsed;

    if (err.name === 'AbortError') {
      check.status = 'unhealthy';
      check.message = `Request timed out after 15 seconds. The server did not respond within the allowed time. This could indicate the server is down, overloaded, or there are network connectivity issues.`;
    } else if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
      // In no-cors mode, a TypeError with "Failed to fetch" typically means the server is truly unreachable
      check.status = 'unhealthy';
      check.message = `Failed to reach the server (${elapsed}ms). The website may be down, the domain may not resolve, or a network/firewall issue is preventing the connection. Error: ${err.message}`;
    } else {
      check.status = 'error';
      check.message = `An unexpected error occurred after ${elapsed}ms while attempting to reach this website. Error: ${err.message}`;
    }
  }

  renderGrid();
}

function runAllChecks() {
  healthChecks.forEach((check) => {
    check.status = 'pending';
    check.message = '';
    check.responseTime = null;
    check.statusCode = null;
  });
  renderGrid();
  healthChecks.forEach((check) => checkHealth(check));
}

function addUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return { success: false, message: 'Please enter a URL.' };

  // Auto-prepend https:// if no protocol
  let normalizedUrl = trimmed;
  if (!/^https?:\/\//i.test(normalizedUrl)) {
    normalizedUrl = 'https://' + normalizedUrl;
  }

  if (!isValidUrl(normalizedUrl)) {
    return { success: false, message: `"${trimmed}" is not a valid URL. Please enter a valid URL starting with http:// or https:// (e.g., https://example.com).` };
  }

  // Check for duplicates
  const existing = healthChecks.find((c) => c.url.toLowerCase() === normalizedUrl.toLowerCase());
  if (existing) {
    return { success: false, message: `"${normalizedUrl}" is already in the list.` };
  }

  const check = {
    id: generateId(),
    url: normalizedUrl,
    status: 'pending',
    message: '',
    responseTime: null,
    statusCode: null,
  };

  healthChecks.push(check);
  renderGrid();
  checkHealth(check);

  return { success: true, message: '' };
}

function removeCheck(id) {
  healthChecks = healthChecks.filter((c) => c.id !== id);
  renderGrid();
  updateCount();
}

function updateCount() {
  const countEl = document.getElementById('health-count');
  if (countEl) {
    countEl.textContent = `${healthChecks.length} site${healthChecks.length !== 1 ? 's' : ''}`;
  }
}

export function renderToolsHealth() {
  // Initialize checks from defaults on first render
  healthChecks = DEFAULT_URLS.map((url) => ({
    id: generateId(),
    url,
    status: 'pending',
    message: '',
    responseTime: null,
    statusCode: null,
  }));

  // Schedule the health checks after DOM is ready
  setTimeout(() => {
    healthChecks.forEach((check) => checkHealth(check));
    initHealthEvents();
  }, 0);

  return `
    <div>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div>
          <h2 class="text-3xl font-bold">Check Health of Websites</h2>
          <p class="text-base opacity-70 mt-1">Monitor the availability and response times of your websites.</p>
        </div>
        <div class="flex items-center gap-2">
          <div id="health-count" class="badge badge-neutral badge-lg shrink-0">${healthChecks.length} sites</div>
          <button id="health-recheck-all" class="btn btn-primary btn-sm gap-1" aria-label="Re-check all websites">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
            Re-check All
          </button>
        </div>
      </div>

      <div class="mb-6">
        <div class="flex flex-row gap-2">
          <label class="input input-bordered flex-1 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 opacity-50"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            <input id="health-url-input" type="url" class="grow" placeholder="Enter a website URL (e.g., https://example.com)" aria-label="Website URL to check" />
          </label>
          <button id="health-add-btn" class="btn btn-neutral btn-md gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add<div class="hidden sm:block"> & Check</div>
          </button>
        </div>
        <p id="health-input-error" class="text-xs text-error mt-2 hidden" role="alert"></p>
      </div>

      <div id="health-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        ${healthChecks.map(renderCard).join('')}
      </div>
    </div>
  `;
}

function initHealthEvents() {
  const addBtn = document.getElementById('health-add-btn');
  const input = document.getElementById('health-url-input');
  const errorEl = document.getElementById('health-input-error');
  const recheckBtn = document.getElementById('health-recheck-all');

  if (addBtn && input) {
    const handleAdd = () => {
      const result = addUrl(input.value);
      if (result.success) {
        input.value = '';
        if (errorEl) {
          errorEl.classList.add('hidden');
          errorEl.textContent = '';
        }
        updateCount();
      } else {
        if (errorEl) {
          errorEl.textContent = result.message;
          errorEl.classList.remove('hidden');
        }
      }
    };

    addBtn.addEventListener('click', handleAdd);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
      }
    });

    // Clear error on input change
    input.addEventListener('input', () => {
      if (errorEl && !errorEl.classList.contains('hidden')) {
        errorEl.classList.add('hidden');
        errorEl.textContent = '';
      }
    });
  }

  if (recheckBtn) {
    recheckBtn.addEventListener('click', runAllChecks);
  }

  // Event delegation for remove buttons
  const grid = document.getElementById('health-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.health-remove-btn');
      if (removeBtn) {
        const id = removeBtn.dataset.checkId;
        removeCheck(id);
      }
    });
  }
}

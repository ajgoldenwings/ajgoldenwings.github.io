// Interactive Network Graph Visualizer
// A stunning force-directed graph that visualizes professional skills & connections

const CATEGORIES = {
  frontend: { color: '#6366f1', label: 'Frontend' },
  backend: { color: '#10b981', label: 'Backend' },
  devops: { color: '#f59e0b', label: 'DevOps' },
  data: { color: '#ec4899', label: 'Data' },
  soft: { color: '#8b5cf6', label: 'Soft Skills' },
};

const DEFAULT_NODES = [
  { id: 'js', label: 'JavaScript', category: 'frontend', size: 38 },
  { id: 'ts', label: 'TypeScript', category: 'frontend', size: 34 },
  { id: 'react', label: 'React', category: 'frontend', size: 36 },
  { id: 'vue', label: 'Vue.js', category: 'frontend', size: 28 },
  { id: 'css', label: 'CSS / Tailwind', category: 'frontend', size: 30 },
  { id: 'html', label: 'HTML5', category: 'frontend', size: 26 },
  { id: 'node', label: 'Node.js', category: 'backend', size: 34 },
  { id: 'python', label: 'Python', category: 'backend', size: 32 },
  { id: 'api', label: 'REST APIs', category: 'backend', size: 30 },
  { id: 'graphql', label: 'GraphQL', category: 'backend', size: 26 },
  { id: 'db', label: 'Databases', category: 'backend', size: 28 },
  { id: 'docker', label: 'Docker', category: 'devops', size: 30 },
  { id: 'k8s', label: 'Kubernetes', category: 'devops', size: 26 },
  { id: 'ci', label: 'CI/CD', category: 'devops', size: 28 },
  { id: 'aws', label: 'AWS', category: 'devops', size: 32 },
  { id: 'ml', label: 'Machine Learning', category: 'data', size: 30 },
  { id: 'analytics', label: 'Analytics', category: 'data', size: 26 },
  { id: 'ai', label: 'AI / LLMs', category: 'data', size: 32 },
  { id: 'leadership', label: 'Leadership', category: 'soft', size: 30 },
  { id: 'communication', label: 'Communication', category: 'soft', size: 28 },
  { id: 'agile', label: 'Agile / Scrum', category: 'soft', size: 26 },
];


const DEFAULT_EDGES = [
  { from: 'js', to: 'ts' }, { from: 'js', to: 'react' }, { from: 'js', to: 'vue' },
  { from: 'js', to: 'node' }, { from: 'ts', to: 'react' }, { from: 'ts', to: 'node' },
  { from: 'react', to: 'css' }, { from: 'vue', to: 'css' }, { from: 'css', to: 'html' },
  { from: 'node', to: 'api' }, { from: 'node', to: 'graphql' }, { from: 'node', to: 'db' },
  { from: 'python', to: 'api' }, { from: 'python', to: 'ml' }, { from: 'python', to: 'ai' },
  { from: 'api', to: 'graphql' }, { from: 'docker', to: 'k8s' }, { from: 'docker', to: 'ci' },
  { from: 'ci', to: 'aws' }, { from: 'k8s', to: 'aws' }, { from: 'ml', to: 'ai' },
  { from: 'ml', to: 'analytics' }, { from: 'ai', to: 'analytics' },
  { from: 'leadership', to: 'communication' }, { from: 'leadership', to: 'agile' },
  { from: 'agile', to: 'ci' }, { from: 'node', to: 'docker' }, { from: 'aws', to: 'db' },
  { from: 'react', to: 'ts' }, { from: 'ai', to: 'node' },
];


let canvas, ctx, animationId;
let nodes = [];
let edges = [];
let particles = [];
let dragging = null;
let hoveredNode = null;
let mouseX = 0, mouseY = 0;
let canvasWidth = 0, canvasHeight = 0;
let simulationRunning = true;
let selectedCategory = null;

function initNodes() {
  nodes = DEFAULT_NODES.map((n, i) => {
    const angle = (i / DEFAULT_NODES.length) * Math.PI * 2;
    const radius = Math.min(canvasWidth, canvasHeight) * 0.3;
    return {
      ...n,
      x: canvasWidth / 2 + Math.cos(angle) * radius * (0.5 + Math.random() * 0.5),
      y: canvasHeight / 2 + Math.sin(angle) * radius * (0.5 + Math.random() * 0.5),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      targetX: null,
      targetY: null,
      pulsePhase: Math.random() * Math.PI * 2,
      opacity: 1,
    };
  });
  edges = DEFAULT_EDGES.map(e => ({ ...e }));
}


function spawnParticle(fromNode, toNode) {
  particles.push({
    x: fromNode.x,
    y: fromNode.y,
    targetX: toNode.x,
    targetY: toNode.y,
    progress: 0,
    speed: 0.01 + Math.random() * 0.02,
    color: CATEGORIES[fromNode.category].color,
    size: 2 + Math.random() * 2,
    opacity: 1,
  });
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.progress += p.speed;
    if (p.progress >= 1) {
      particles.splice(i, 1);
      continue;
    }
    // Update target positions in case nodes moved
    p.opacity = p.progress < 0.1 ? p.progress / 0.1 : p.progress > 0.8 ? (1 - p.progress) / 0.2 : 1;
  }
}

function applyForces() {
  if (!simulationRunning) return;
  const damping = 0.92;
  const repulsion = 3000;
  const attraction = 0.005;
  const centerGravity = 0.01;

  // Repulsion between all nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[j].x - nodes[i].x;
      const dy = nodes[j].y - nodes[i].y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = repulsion / (dist * dist);
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      nodes[i].vx -= fx;
      nodes[i].vy -= fy;
      nodes[j].vx += fx;
      nodes[j].vy += fy;
    }
  }


  // Attraction along edges
  for (const edge of edges) {
    const from = nodes.find(n => n.id === edge.from);
    const to = nodes.find(n => n.id === edge.to);
    if (!from || !to) continue;
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const idealDist = 150;
    const force = (dist - idealDist) * attraction;
    const fx = (dx / dist) * force;
    const fy = (dy / dist) * force;
    from.vx += fx;
    from.vy += fy;
    to.vx -= fx;
    to.vy -= fy;
  }

  // Center gravity
  for (const node of nodes) {
    const dx = canvasWidth / 2 - node.x;
    const dy = canvasHeight / 2 - node.y;
    node.vx += dx * centerGravity;
    node.vy += dy * centerGravity;
  }

  // Apply velocity with damping and boundary constraints
  for (const node of nodes) {
    if (node === dragging) continue;
    node.vx *= damping;
    node.vy *= damping;
    node.x += node.vx;
    node.y += node.vy;
    // Keep within bounds
    const padding = node.size + 10;
    node.x = Math.max(padding, Math.min(canvasWidth - padding, node.x));
    node.y = Math.max(padding, Math.min(canvasHeight - padding, node.y));
  }
}


function drawEdges(time) {
  for (const edge of edges) {
    const from = nodes.find(n => n.id === edge.from);
    const to = nodes.find(n => n.id === edge.to);
    if (!from || !to) continue;

    const isHighlighted = hoveredNode && (edge.from === hoveredNode.id || edge.to === hoveredNode.id);
    const isCategoryFiltered = selectedCategory && (from.category !== selectedCategory && to.category !== selectedCategory);
    const baseOpacity = isCategoryFiltered ? 0.05 : isHighlighted ? 0.8 : 0.2;

    // Animated gradient along edge
    const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
    const fromColor = CATEGORIES[from.category].color;
    const toColor = CATEGORIES[to.category].color;
    gradient.addColorStop(0, fromColor + Math.round(baseOpacity * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(1, toColor + Math.round(baseOpacity * 255).toString(16).padStart(2, '0'));

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = isHighlighted ? 2.5 : 1.2;
    ctx.stroke();

    // Spawn particles along highlighted edges
    if (isHighlighted && Math.random() < 0.03) {
      spawnParticle(from, to);
    }
  }
}


function drawParticles() {
  for (const p of particles) {
    ctx.beginPath();
    const x = p.x + (p.targetX - p.x) * p.progress;
    const y = p.y + (p.targetY - p.y) * p.progress;
    ctx.arc(x, y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color + Math.round(p.opacity * 200).toString(16).padStart(2, '0');
    ctx.fill();

    // Glow effect
    ctx.beginPath();
    ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = p.color + Math.round(p.opacity * 40).toString(16).padStart(2, '0');
    ctx.fill();
  }
}

function drawNodes(time) {
  for (const node of nodes) {
    const isHovered = node === hoveredNode;
    const isConnected = hoveredNode && edges.some(e =>
      (e.from === hoveredNode.id && e.to === node.id) ||
      (e.to === hoveredNode.id && e.from === node.id)
    );
    const isCategoryFiltered = selectedCategory && node.category !== selectedCategory;
    const baseOpacity = isCategoryFiltered ? 0.15 : 1;

    const color = CATEGORIES[node.category].color;
    const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.15 + 1;
    const radius = node.size * (isHovered ? 1.3 : isConnected ? 1.1 : 1) * pulse * 0.5;

    // Outer glow
    if (!isCategoryFiltered) {
      const glowSize = radius * (isHovered ? 3 : 2);
      const glowGradient = ctx.createRadialGradient(node.x, node.y, radius * 0.5, node.x, node.y, glowSize);
      glowGradient.addColorStop(0, color + (isHovered ? '40' : '20'));
      glowGradient.addColorStop(1, color + '00');
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
    }


    // Main node circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    const nodeGradient = ctx.createRadialGradient(
      node.x - radius * 0.3, node.y - radius * 0.3, 0,
      node.x, node.y, radius
    );
    nodeGradient.addColorStop(0, color + Math.round(baseOpacity * 255).toString(16).padStart(2, '0'));
    nodeGradient.addColorStop(1, adjustBrightness(color, -30) + Math.round(baseOpacity * 255).toString(16).padStart(2, '0'));
    ctx.fillStyle = nodeGradient;
    ctx.fill();

    // Border ring
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius + 1, 0, Math.PI * 2);
    ctx.strokeStyle = color + Math.round(baseOpacity * 120).toString(16).padStart(2, '0');
    ctx.lineWidth = isHovered ? 3 : 1.5;
    ctx.stroke();

    // Label
    if (!isCategoryFiltered || isHovered) {
      ctx.font = `${isHovered ? 'bold ' : ''}${isHovered ? 13 : 11}px system-ui, -apple-system, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Text background for readability
      const textMetrics = ctx.measureText(node.label);
      const textWidth = textMetrics.width + 10;
      const textHeight = 18;
      const textY = node.y + radius + 16;

      ctx.fillStyle = `rgba(0, 0, 0, ${baseOpacity * 0.6})`;
      ctx.beginPath();
      ctx.roundRect(node.x - textWidth / 2, textY - textHeight / 2, textWidth, textHeight, 4);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity * 0.95})`;
      ctx.fillText(node.label, node.x, textY);
    }
  }
}


function adjustBrightness(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, ((num >> 16) & 0xff) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (num & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function drawBackground(time) {
  // Subtle animated grid
  ctx.strokeStyle = 'rgba(128, 128, 128, 0.04)';
  ctx.lineWidth = 0.5;
  const gridSize = 50;
  const offsetX = (time * 0.01) % gridSize;
  const offsetY = (time * 0.008) % gridSize;

  for (let x = -gridSize + offsetX; x < canvasWidth + gridSize; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
    ctx.stroke();
  }
  for (let y = -gridSize + offsetY; y < canvasHeight + gridSize; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.stroke();
  }
}

function animate(time) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawBackground(time);
  applyForces();
  updateParticles();
  drawEdges(time);
  drawParticles();
  drawNodes(time);

  // Random ambient particles
  if (Math.random() < 0.02) {
    const edgeIdx = Math.floor(Math.random() * edges.length);
    const edge = edges[edgeIdx];
    const from = nodes.find(n => n.id === edge.from);
    const to = nodes.find(n => n.id === edge.to);
    if (from && to && !selectedCategory) {
      spawnParticle(from, to);
    }
  }

  animationId = requestAnimationFrame(animate);
}


function getNodeAtPosition(x, y) {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    const dx = x - node.x;
    const dy = y - node.y;
    const radius = node.size * 0.5 + 5;
    if (dx * dx + dy * dy < radius * radius) {
      return node;
    }
  }
  return null;
}

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY,
  };
}

function getTouchPos(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const touch = e.touches[0];
  return {
    x: (touch.clientX - rect.left) * scaleX,
    y: (touch.clientY - rect.top) * scaleY,
  };
}

function handleMouseDown(e) {
  const pos = getMousePos(e);
  const node = getNodeAtPosition(pos.x, pos.y);
  if (node) {
    dragging = node;
    dragging.vx = 0;
    dragging.vy = 0;
    canvas.style.cursor = 'grabbing';
  }
}

function handleMouseMove(e) {
  const pos = getMousePos(e);
  mouseX = pos.x;
  mouseY = pos.y;
  if (dragging) {
    dragging.x = pos.x;
    dragging.y = pos.y;
  } else {
    const node = getNodeAtPosition(pos.x, pos.y);
    hoveredNode = node;
    canvas.style.cursor = node ? 'grab' : 'default';
    updateTooltip(node, e.clientX, e.clientY);
  }
}


function handleMouseUp() {
  if (dragging) {
    dragging = null;
    canvas.style.cursor = hoveredNode ? 'grab' : 'default';
  }
}

function handleTouchStart(e) {
  e.preventDefault();
  const pos = getTouchPos(e);
  const node = getNodeAtPosition(pos.x, pos.y);
  if (node) {
    dragging = node;
    dragging.vx = 0;
    dragging.vy = 0;
  }
}

function handleTouchMove(e) {
  e.preventDefault();
  if (dragging && e.touches.length > 0) {
    const pos = getTouchPos(e);
    dragging.x = pos.x;
    dragging.y = pos.y;
  }
}

function handleTouchEnd(e) {
  e.preventDefault();
  dragging = null;
}

function updateTooltip(node, clientX, clientY) {
  const tooltip = document.getElementById('network-tooltip');
  if (!tooltip) return;
  if (!node) {
    tooltip.style.opacity = '0';
    tooltip.style.pointerEvents = 'none';
    return;
  }
  const connections = edges.filter(e => e.from === node.id || e.to === node.id);
  const connectedNodes = connections.map(e => {
    const otherId = e.from === node.id ? e.to : e.from;
    return nodes.find(n => n.id === otherId);
  }).filter(Boolean);

  tooltip.innerHTML = `
    <div class="font-bold text-sm mb-1" style="color: ${CATEGORIES[node.category].color}">${node.label}</div>
    <div class="text-xs opacity-70 mb-2">${CATEGORIES[node.category].label}</div>
    <div class="text-xs opacity-90">${connections.length} connection${connections.length !== 1 ? 's' : ''}</div>
    <div class="text-xs opacity-60 mt-1">${connectedNodes.map(n => n.label).join(', ')}</div>
  `;
  tooltip.style.opacity = '1';
  tooltip.style.pointerEvents = 'auto';
  tooltip.style.left = `${clientX + 16}px`;
  tooltip.style.top = `${clientY - 10}px`;

  // Keep tooltip in viewport
  const rect = tooltip.getBoundingClientRect();
  if (rect.right > window.innerWidth) {
    tooltip.style.left = `${clientX - rect.width - 16}px`;
  }
  if (rect.bottom > window.innerHeight) {
    tooltip.style.top = `${clientY - rect.height - 10}px`;
  }
}


function resizeCanvas() {
  const container = document.getElementById('network-canvas-container');
  if (!container || !canvas) return;
  const rect = container.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvasWidth = rect.width;
  canvasHeight = rect.height;
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function filterByCategory(category) {
  selectedCategory = selectedCategory === category ? null : category;
  // Update filter buttons
  document.querySelectorAll('.network-filter-btn').forEach(btn => {
    const cat = btn.dataset.category;
    if (cat === selectedCategory) {
      btn.classList.add('btn-active');
    } else {
      btn.classList.remove('btn-active');
    }
  });
  // Update "all" button
  const allBtn = document.getElementById('network-filter-all');
  if (allBtn) {
    if (!selectedCategory) allBtn.classList.add('btn-active');
    else allBtn.classList.remove('btn-active');
  }
}

function shuffleLayout() {
  for (const node of nodes) {
    node.vx = (Math.random() - 0.5) * 20;
    node.vy = (Math.random() - 0.5) * 20;
  }
}

function initNetworkGraph() {
  canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  resizeCanvas();
  initNodes();
  window.addEventListener('resize', resizeCanvas);

  // Mouse events
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
    updateTooltip(null, 0, 0);
    if (dragging) dragging = null;
  });

  // Touch events
  canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
  canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
  canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

  // Filter buttons
  document.querySelectorAll('.network-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
  });
  const allBtn = document.getElementById('network-filter-all');
  if (allBtn) {
    allBtn.addEventListener('click', () => {
      selectedCategory = null;
      document.querySelectorAll('.network-filter-btn').forEach(b => b.classList.remove('btn-active'));
      allBtn.classList.add('btn-active');
    });
  }

  // Shuffle button
  const shuffleBtn = document.getElementById('network-shuffle-btn');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', shuffleLayout);
  }

  animationId = requestAnimationFrame(animate);
}


export function renderToolsNetwork() {
  // Clean up any previous animation
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  particles = [];
  hoveredNode = null;
  dragging = null;
  selectedCategory = null;

  setTimeout(() => initNetworkGraph(), 0);

  const filterButtons = Object.entries(CATEGORIES).map(([key, cat]) => `
    <button class="network-filter-btn btn btn-xs btn-ghost gap-1" data-category="${key}">
      <span class="w-2.5 h-2.5 rounded-full inline-block" style="background: ${cat.color}"></span>
      ${cat.label}
    </button>
  `).join('');

  return `
    <div>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div>
          <h2 class="text-3xl font-bold">Skill Network Graph</h2>
          <p class="text-base opacity-70 mt-1">Interactive visualization of how tech skills connect and relate.</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="badge badge-neutral badge-lg shrink-0">${nodes.length || DEFAULT_NODES.length} skills</div>
          <button id="network-shuffle-btn" class="btn btn-primary btn-sm gap-1" aria-label="Shuffle layout">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" /></svg>
            Shuffle
          </button>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-1 mb-3">
        <span class="text-xs opacity-50 mr-1">Filter:</span>
        <button id="network-filter-all" class="btn btn-xs btn-ghost btn-active">All</button>
        ${filterButtons}
      </div>

      <div id="network-canvas-container" class="relative w-full rounded-2xl border border-base-300/25 bg-base-200/50 overflow-hidden" style="height: 520px;">
        <canvas id="network-canvas" class="w-full h-full block"></canvas>
        <div id="network-tooltip" class="fixed bg-base-100 border border-base-300 rounded-xl px-4 py-3 shadow-xl max-w-xs z-50 transition-opacity duration-150 pointer-events-none" style="opacity: 0;"></div>
        <div class="absolute bottom-3 left-3 text-xs opacity-40 pointer-events-none">Drag nodes to rearrange &bull; Hover for details</div>
      </div>

      <div class="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
        ${Object.entries(CATEGORIES).map(([key, cat]) => {
          const count = DEFAULT_NODES.filter(n => n.category === key).length;
          const conns = DEFAULT_EDGES.filter(e => {
            const from = DEFAULT_NODES.find(n => n.id === e.from);
            const to = DEFAULT_NODES.find(n => n.id === e.to);
            return from && to && (from.category === key || to.category === key);
          }).length;
          return `
            <div class="p-3 rounded-xl border border-base-300/25 bg-base-100 text-center">
              <div class="w-3 h-3 rounded-full mx-auto mb-2" style="background: ${cat.color}"></div>
              <div class="text-xs font-bold">${cat.label}</div>
              <div class="text-xs opacity-50">${count} skills &bull; ${conns} links</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

const PLANETS = [
  {
    name: 'Mercury',
    image: 'assets/images/Mercury.png',
    order: '1st Planet from the Sun',
    description: 'The smallest and innermost planet. Mercury has no atmosphere and experiences extreme temperature swings, from scorching days to frigid nights.',
    temperature: '-180°C to 430°C',
    gravity: '3.7 m/s²',
    diameter: '4,879 km',
    distance: '57.9M km',
    day: '1,408 hours',
    year: '88 Earth days',
    glowColor: 'rgba(180, 140, 100, 0.5)',
    orbitRadius: 78,
    orbitDuration: 8,
    planetSize: 12,
    orbitStartDeg: 20,
    facts: [
      'Mercury has no moons.',
      'A day on Mercury is longer than its year.',
      'Its core makes up 85% of the planet\'s radius.',
      'Mercury\'s surface is heavily cratered, similar to the Moon.',
    ],
},
  {
    name: 'Venus',
    image: 'assets/images/Venus.png',
    order: '2nd Planet from the Sun',
    description: 'The hottest planet in our Solar System, shrouded in thick clouds of sulfuric acid. Venus rotates backwards compared to most planets.',
    temperature: '465°C (average)',
    gravity: '8.87 m/s²',
    diameter: '12,104 km',
    distance: '108.2M km',
    day: '5,832 hours',
    year: '225 Earth days',
    glowColor: 'rgba(255, 200, 80, 0.5)',
    orbitRadius: 121,
    orbitDuration: 14,
    planetSize: 18,
    orbitStartDeg: 110,
    facts: [
      'Venus is the brightest natural object in the night sky after the Moon.',
      'Its thick CO₂ atmosphere causes a runaway greenhouse effect.',
      'One day on Venus is longer than one Venusian year.',
      'Venus spins clockwise — the opposite direction to Earth.',
    ],
},
  {
    name: 'Earth',
    image: 'assets/images/Earth.png',
    order: '3rd Planet from the Sun',
    description: 'Our home — the only known planet to harbour life. Earth is covered 71% by water and has a protective magnetic field and ozone layer.',
    temperature: '15°C (average)',
    gravity: '9.81 m/s²',
    diameter: '12,742 km',
    distance: '149.6M km',
    day: '24 hours',
    year: '365.25 days',
    glowColor: 'rgba(50, 130, 255, 0.5)',
    orbitRadius: 169,
    orbitDuration: 20,
    planetSize: 20,
    orbitStartDeg: 220,
    facts: [
      'Earth is the densest planet in the Solar System.',
      'The Moon stabilizes Earth\'s axial tilt at around 23.5°.',
      'Plate tectonics recycle Earth\'s crust over millions of years.',
      'Earth\'s magnetic field shields life from harmful solar wind.',
    ],
},
  {
    name: 'Mars',
    image: 'assets/images/Mars.png',
    order: '4th Planet from the Sun',
    description: 'The Red Planet features the largest volcano and longest canyon in the Solar System. Mars has thin air and evidence of ancient liquid water.',
    temperature: '-65°C (average)',
    gravity: '3.72 m/s²',
    diameter: '6,779 km',
    distance: '227.9M km',
    day: '24.6 hours',
    year: '687 Earth days',
    glowColor: 'rgba(220, 80, 50, 0.5)',
    orbitRadius: 217,
    orbitDuration: 28,
    planetSize: 16,
    orbitStartDeg: 300,
    facts: [
      'Olympus Mons on Mars is the tallest volcano in the Solar System at 21 km.',
      'Valles Marineris stretches 4,000 km — as wide as the USA.',
      'Mars has two small moons: Phobos and Deimos.',
      'Scientists have found evidence of ancient liquid water on Mars.',
    ],
},
  {
    name: 'Jupiter',
    image: 'assets/images/Jupiter.png',
    order: '5th Planet from the Sun',
    description: 'The largest planet — a gas giant with a Great Red Spot storm larger than Earth. Jupiter acts as a gravitational shield for the inner planets.',
    temperature: '-110°C (cloud tops)',
    gravity: '24.79 m/s²',
    diameter: '142,984 km',
    distance: '778.5M km',
    day: '9.9 hours',
    year: '11.9 Earth years',
    glowColor: 'rgba(210, 150, 80, 0.5)',
    orbitRadius: 269,
    orbitDuration: 38,
    planetSize: 36,
    orbitStartDeg: 60,
    facts: [
      'Jupiter has at least 95 known moons.',
      'The Great Red Spot has been raging for over 350 years.',
      'Jupiter is twice as massive as all other planets combined.',
      'It has the shortest day — rotating once every 9 hours 55 minutes.',
    ],
},
  {
    name: 'Saturn',
    image: 'assets/images/Saturn.png',
    order: '6th Planet from the Sun',
    description: 'Famous for its stunning ring system made of ice and rock. Saturn is the least dense planet — it would float on water.',
    temperature: '-140°C (average)',
    gravity: '10.44 m/s²',
    diameter: '120,536 km',
    distance: '1.43B km',
    day: '10.7 hours',
    year: '29.5 Earth years',
    glowColor: 'rgba(200, 170, 100, 0.5)',
    orbitRadius: 317,
    orbitDuration: 50,
    planetSize: 30,
    orbitStartDeg: 160,
    facts: [
      'Saturn\'s rings extend up to 282,000 km from the planet.',
      'It has 146 confirmed moons — the most of any planet.',
      'Saturn is the only planet less dense than water.',
      'Titan, Saturn\'s largest moon, has rivers of liquid methane.',
    ],
},
  {
    name: 'Uranus',
    image: 'assets/images/Uranus.png',
    order: '7th Planet from the Sun',
    description: 'An ice giant that rotates on its side with an axial tilt of 98°. Uranus has faint rings and appears blue-green due to methane in its atmosphere.',
    temperature: '-195°C (average)',
    gravity: '8.69 m/s²',
    diameter: '51,118 km',
    distance: '2.87B km',
    day: '17.2 hours',
    year: '84 Earth years',
    glowColor: 'rgba(80, 210, 200, 0.5)',
    orbitRadius: 360,
    orbitDuration: 66,
    planetSize: 24,
    orbitStartDeg: 255,
    facts: [
      'Uranus tilts at 98° — it essentially rolls around the Sun.',
      'It has 13 known rings — some are as thin as 1 km.',
      'Uranus is the coldest planetary atmosphere in the Solar System.',
      'Its magnetic field is tilted 59° from its rotational axis.',
    ],
},
  {
    name: 'Neptune',
    image: 'assets/images/Neptune.png',
    order: '8th Planet from the Sun',
    description: 'The windiest planet with storms reaching 2,100 km/h. Neptune takes 165 Earth years to orbit the Sun and was discovered through mathematical prediction.',
    temperature: '-200°C (average)',
    gravity: '11.15 m/s²',
    diameter: '49,528 km',
    distance: '4.5B km',
    day: '16.1 hours',
    year: '165 Earth years',
    glowColor: 'rgba(60, 80, 220, 0.5)',
    orbitRadius: 400,
    orbitDuration: 82,
    planetSize: 22,
    orbitStartDeg: 340,
    facts: [
      'Neptune has the strongest winds of any planet — up to 2,100 km/h.',
      'It was the first planet found by mathematical prediction, not observation.',
      'Triton, Neptune\'s largest moon, orbits backwards.',
      'Neptune\'s Great Dark Spot appears and disappears over years.',
    ],
},
];

let currentPlanetIndex = 2;

function buildOrbitalSystem() {
  const container = document.getElementById('orbits-container');
  if (!container) return;
  container.innerHTML = '';

  PLANETS.forEach((planet, i) => {
    const r = planet.orbitRadius;

    const ring = document.createElement('div');
    ring.className = 'orbit-ring';
    ring.style.cssText = `width:${r * 2}px; height:${r * 2}px;`;
    container.appendChild(ring);

    const wrapper = document.createElement('div');
    wrapper.className = 'planet-orbit-wrapper';
    wrapper.style.cssText = `
      --orbit-r: ${r}px;
      --orbit-start: ${planet.orbitStartDeg}deg;
      animation-duration: ${planet.orbitDuration}s;
    `;

    const dot = document.createElement('div');
    dot.className = 'planet-dot';
    dot.setAttribute('data-planet', planet.name);
    dot.setAttribute('data-index', i);
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');
    dot.setAttribute('aria-label', `Select ${planet.name}`);
    dot.style.cssText = `
      width: ${planet.planetSize}px;
      height: ${planet.planetSize}px;
    `;

    const imgWrap = document.createElement('div');
    imgWrap.className = 'planet-img-wrap';
    imgWrap.style.cssText = `width: 100%; height: 100%;`;
    const img = document.createElement('img');
    img.src = planet.image;
    img.alt = planet.name;
    img.loading = 'lazy';
    imgWrap.appendChild(img);

    const nameTag = document.createElement('span');
    nameTag.className = 'planet-name-tag';
    nameTag.textContent = planet.name.toUpperCase();

    dot.appendChild(imgWrap);
    dot.appendChild(nameTag);
    wrapper.appendChild(dot);
    container.appendChild(wrapper);

    dot.addEventListener('click', () => selectPlanet(i));
    dot.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPlanet(i); } });
});

  updateOrbitalSelection(currentPlanetIndex);
}

function buildPlanetGrid() {
  const grid = document.getElementById('planet-grid-selector');
  if (!grid) return;
  grid.innerHTML = '';
  PLANETS.forEach((planet, i) => {
    const item = document.createElement('div');
    item.className = 'planet-grid-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Select ${planet.name}`);
    item.setAttribute('data-index', i);
    item.innerHTML = `
      <div class="planet-grid-img-wrap">
        <img src="${planet.image}" alt="${planet.name}" loading="lazy" />
      </div>
      <span class="planet-grid-name">${planet.name}</span>
    `;
    item.addEventListener('click', () => selectPlanet(i));
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPlanet(i); } });
    grid.appendChild(item);
});
  updateGridSelection(currentPlanetIndex);
}

function buildNavDots() {
  const dotsContainer = document.getElementById('planet-nav-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  PLANETS.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `nav-dot${i === currentPlanetIndex ? ' active' : ''}`;
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');
    dot.setAttribute('aria-label', `Go to planet ${i + 1}`);
    dot.addEventListener('click', () => selectPlanet(i));
    dot.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPlanet(i); } });
    dotsContainer.appendChild(dot);
});
}

function populateCompareSelect() {
  const sel = document.getElementById('compare-select');
  if (!sel) return;
  sel.innerHTML = '<option value="">— Select a planet —</option>';
  PLANETS.forEach((p, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = p.name;
    sel.appendChild(opt);
});
}

function selectPlanet(index) {
  if (index < 0 || index >= PLANETS.length) return;
  currentPlanetIndex = index;

  updateOrbitalSelection(index);
  updateGridSelection(index);
  updatePlanetCard(index);
  updateNavDots(index);
  updateSelectedBar(index);

  const explorerSection = document.getElementById('planet-explorer');
  if (explorerSection) {
    const top = explorerSection.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
}
}

function updateOrbitalSelection(index) {
  document.querySelectorAll('.planet-dot').forEach((dot) => {
    dot.classList.toggle('selected', parseInt(dot.dataset.index) === index);
});
}

function updateGridSelection(index) {
  document.querySelectorAll('.planet-grid-item').forEach((item) => {
    item.classList.toggle('selected', parseInt(item.dataset.index) === index);
});
}

function updateNavDots(index) {
  document.querySelectorAll('.nav-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});
}

function updateSelectedBar(index) {
  const nameEl = document.getElementById('selected-bar-name');
  if (nameEl) nameEl.textContent = PLANETS[index].name;
}

function updatePlanetCard(index) {
  const p = PLANETS[index];
  const card = document.getElementById('planet-card');
  if (card) {
    card.classList.remove('updating');
    void card.offsetWidth;
    card.classList.add('updating');
}

  setElText('planet-card-name', p.name);
  setElText('planet-card-order', p.order);
  setElText('planet-card-desc', p.description);
  setElText('val-temperature', p.temperature);
  setElText('val-gravity', p.gravity);
  setElText('val-diameter', p.diameter);
  setElText('val-distance', p.distance);
  setElText('val-day', p.day);
  setElText('val-year', p.year);

  const img = document.getElementById('planet-card-img');
  if (img) { img.src = p.image; img.alt = p.name; }

  const glow = document.getElementById('planet-card-glow');
  if (glow) glow.style.background = `radial-gradient(circle at center, ${p.glowColor} 0%, transparent 70%)`;

  const factsList = document.getElementById('planet-facts-list');
  if (factsList) {
    factsList.innerHTML = p.facts.map(f => `<li>${f}</li>`).join('');
}

  const sel = document.getElementById('compare-select');
  if (sel) {
    Array.from(sel.options).forEach(opt => {
      if (opt.value !== '') opt.disabled = parseInt(opt.value) === index;
});
    sel.value = '';
    document.getElementById('compare-result').innerHTML = '';
}
}

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function prevPlanet() {
  const newIndex = (currentPlanetIndex - 1 + PLANETS.length) % PLANETS.length;
  selectPlanet(newIndex);
}

function nextPlanet() {
  const newIndex = (currentPlanetIndex + 1) % PLANETS.length;
  selectPlanet(newIndex);
}

function handleCompare(targetIndex) {
  const result = document.getElementById('compare-result');
  if (!result) return;

  if (targetIndex === '' || targetIndex === null) {
    result.innerHTML = '';
    return;
}

  const a = PLANETS[currentPlanetIndex];
  const b = PLANETS[parseInt(targetIndex)];

  const rows = [
    { label: 'Avg Temperature', icon: '🌡️', a: a.temperature, b: b.temperature },
    { label: 'Surface Gravity', icon: '⚖️', a: a.gravity, b: b.gravity },
    { label: 'Diameter', icon: '⭕', a: a.diameter, b: b.diameter },
    { label: 'Distance from Sun', icon: '📏', a: a.distance, b: b.distance },
    { label: 'Length of Day', icon: '🔄', a: a.day, b: b.day },
    { label: 'Orbital Period', icon: '🔭', a: a.year, b: b.year },
  ];

  result.innerHTML = `
    <!-- Dual Comparison Cards: Primary Planet & Second Planet -->
    <div class="compare-cards-wrapper">
      <div class="compare-planet-card card-a">
        <div class="compare-card-badge">PRIMARY WORLD</div>
        <div class="compare-card-media">
          <div class="compare-card-glow" style="background: radial-gradient(circle at center, ${a.glowColor} 0%, transparent 70%);"></div>
          <img src="${a.image}" alt="${a.name}" class="compare-card-img" />
        </div>
        <div class="compare-card-info">
          <h4 class="compare-card-name">${a.name}</h4>
          <p class="compare-card-order">${a.order}</p>
          <p class="compare-card-desc">${a.description}</p>
        </div>
      </div>

      <div class="compare-vs-divider">
        <span class="compare-vs-badge">VS</span>
      </div>

      <div class="compare-planet-card card-b">
        <div class="compare-card-badge">COMPARED WORLD</div>
        <div class="compare-card-media">
          <div class="compare-card-glow" style="background: radial-gradient(circle at center, ${b.glowColor} 0%, transparent 70%);"></div>
          <img src="${b.image}" alt="${b.name}" class="compare-card-img" />
        </div>
        <div class="compare-card-info">
          <h4 class="compare-card-name">${b.name}</h4>
          <p class="compare-card-order">${b.order}</p>
          <p class="compare-card-desc">${b.description}</p>
        </div>
      </div>
    </div>

    <!-- Telemetry Comparison Table with perfectly aligned columns -->
    <div class="compare-table-container">
      <div class="compare-table-head">
        <div class="th-metric">SPECIFICATION</div>
        <div class="th-val th-a">
          <span class="badge-dot badge-a"></span> ${a.name.toUpperCase()}
        </div>
        <div class="th-sep"></div>
        <div class="th-val th-b">
          <span class="badge-dot badge-b"></span> ${b.name.toUpperCase()}
        </div>
      </div>

      <div class="compare-table-body">
        ${rows.map(row => `
          <div class="compare-table-row">
            <div class="td-metric">
              <span class="td-icon">${row.icon}</span>
              <span class="td-label">${row.label}</span>
            </div>
            <div class="td-val td-a">${row.a}</div>
            <div class="td-sep">vs</div>
            <div class="td-val td-b">${row.b}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function initCompareToggle() {
  const btn = document.getElementById('compare-toggle-btn');
  const panel = document.getElementById('compare-panel');
  const sel = document.getElementById('compare-select');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    panel.hidden = expanded;
});

  if (sel) sel.addEventListener('change', () => handleCompare(sel.value));
}

function initPlanets() {
  buildOrbitalSystem();
  buildPlanetGrid();
  buildNavDots();
  populateCompareSelect();
  updatePlanetCard(currentPlanetIndex);
  updateSelectedBar(currentPlanetIndex);
  initCompareToggle();

  document.getElementById('prev-planet-btn')?.addEventListener('click', prevPlanet);
  document.getElementById('next-planet-btn')?.addEventListener('click', nextPlanet);
}

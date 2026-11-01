const SPACE_FACTS = [
  {
    text: 'The Sun contains 99.86% of the total mass of the Solar System. Everything else — all eight planets, moons, asteroids and comets — makes up the remaining 0.14%.',
    category: 'THE SUN',
},
  {
    text: 'Light from the Sun takes approximately 8 minutes and 20 seconds to travel to Earth, covering 149.6 million kilometres at 299,792 km/s.',
    category: 'SOLAR PHYSICS',
},
  {
    text: 'A day on Venus (243 Earth days) is longer than its year (225 Earth days). Venus also rotates in the opposite direction to most planets.',
    category: 'VENUS',
},
  {
    text: 'Jupiter is so massive that it does not technically orbit the Sun. Instead, both Jupiter and the Sun orbit a common centre of gravity called the barycentre — located just above the Sun\'s surface.',
    category: 'JUPITER',
},
  {
    text: 'Saturn\'s rings are mostly made of ice particles and rocky debris, ranging in size from tiny grains to chunks as large as houses. The rings are extremely thin — only about 10 metres thick in some places.',
    category: 'SATURN',
},
  {
    text: 'There are more stars in the observable universe than there are grains of sand on all of Earth\'s beaches — roughly 10²⁴ stars.',
    category: 'THE UNIVERSE',
},
  {
    text: 'Olympus Mons on Mars is the tallest volcano in the Solar System at 21.9 km high — nearly 2.5 times taller than Mount Everest.',
    category: 'MARS',
},
  {
    text: 'Uranus rotates on its side with an axial tilt of 97.77°. Scientists believe a massive collision billions of years ago knocked it over.',
    category: 'URANUS',
},
  {
    text: 'Neptune was the first planet found by mathematical prediction rather than direct observation. Le Verrier and Adams independently calculated its position in 1846.',
    category: 'NEPTUNE',
},
  {
    text: 'The Great Red Spot on Jupiter is a storm that has been raging for at least 350 years. It is so large that roughly 1.3 Earths could fit inside it.',
    category: 'JUPITER',
},
  {
    text: 'Mercury has water ice in permanently shadowed craters near its poles, despite surface temperatures reaching 430°C on its sun-facing side.',
    category: 'MERCURY',
},
  {
    text: 'Ganymede, Jupiter\'s largest moon, is bigger than the planet Mercury. It is the largest moon in the Solar System and even has its own magnetic field.',
    category: 'MOONS',
},
  {
    text: 'The Voyager 1 spacecraft, launched in 1977, is currently over 23 billion kilometres from Earth — the farthest human-made object ever built.',
    category: 'SPACE EXPLORATION',
},
  {
    text: 'One million Earths could fit inside the Sun. If the Sun were hollow, you could fit 960,000 spheres the size of Earth inside it.',
    category: 'THE SUN',
},
  {
    text: 'The asteroid belt between Mars and Jupiter contains millions of space rocks, but their total mass is less than 4% of the Moon\'s mass.',
    category: 'ASTEROID BELT',
},
  {
    text: 'Titan, Saturn\'s largest moon, is the only moon in the Solar System known to have a dense atmosphere — thicker than Earth\'s — with rivers and lakes of liquid methane.',
    category: 'MOONS',
},
  {
    text: 'The Solar System is estimated to be 4.6 billion years old — roughly one-third the age of the observable universe.',
    category: 'SOLAR SYSTEM',
},
  {
    text: 'Sound cannot travel through space because there is no medium (no air or water) to carry sound waves. Space is effectively a perfect vacuum.',
    category: 'SPACE SCIENCE',
},
];

let currentFactIndex = 0;
let shownFactIndices = [0];

function getRandomFactIndex() {
  if (shownFactIndices.length >= SPACE_FACTS.length) {
    shownFactIndices = [currentFactIndex];
}
  let next;
  do {
    next = Math.floor(Math.random() * SPACE_FACTS.length);
} while (shownFactIndices.includes(next));
  return next;
}

function buildFactDots() {
  const dotsContainer = document.getElementById('fact-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  SPACE_FACTS.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `fact-dot${i === currentFactIndex ? ' active' : ''}`;
    dot.setAttribute('role', 'listitem');
    dot.setAttribute('title', `Fact ${i + 1}`);
    dot.addEventListener('click', () => showFact(i));
    dotsContainer.appendChild(dot);
});
}

function showFact(index) {
  currentFactIndex = index;
  shownFactIndices.push(index);

  const fact = SPACE_FACTS[index];
  const card = document.getElementById('fact-card');
  const textEl = document.getElementById('fact-text');
  const catEl = document.getElementById('fact-category');
  const numEl = document.getElementById('fact-number');
  const srcEl = document.getElementById('fact-source');

  if (!card || !textEl) return;

  card.classList.remove('updating');
  void card.offsetWidth;
  card.classList.add('updating');

  const numStr = String(index + 1).padStart(2, '0');
  if (numEl) numEl.textContent = numStr;
  if (catEl) catEl.textContent = fact.category;
  textEl.textContent = fact.text;
  if (srcEl) srcEl.textContent = '';

  document.querySelectorAll('.fact-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});
}

function showNextFact() {
  const nextIndex = getRandomFactIndex();
  shownFactIndices.push(nextIndex);
  showFact(nextIndex);
}

function initFacts() {
  currentFactIndex = Math.floor(Math.random() * SPACE_FACTS.length);
  shownFactIndices = [currentFactIndex];

  buildFactDots();
  showFact(currentFactIndex);

  document.getElementById('discover-fact-btn')?.addEventListener('click', showNextFact);
}

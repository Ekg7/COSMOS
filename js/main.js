(function initStars() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  const NUM_STARS = 280;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
}

  function generateStars() {
    stars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height,
        r:    Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.85
          ? `hsl(${200 + Math.random() * 60}, 80%, 80%)`
          : '#ffffff',
});
}
}

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      const flicker = s.alpha + Math.sin(t * s.speed + s.phase) * 0.25;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, flicker));
      ctx.fill();
});
    ctx.globalAlpha = 1;
}

  function loop(t) {
    draw(t * 0.001);
    requestAnimationFrame(loop);
}

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(loop);
})();

(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const NUM = 30;
  const particles = [];

  for (let i = 0; i < NUM; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 8 + 6;
    const opacity = Math.random() * 0.5 + 0.2;
    const hue = Math.random() > 0.5 ? '200' : '280';

    p.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      left:${x}%;bottom:${Math.random() * 30}%;
      background:hsl(${hue}, 90%, 70%);
      border-radius:50%;
      opacity:${opacity};
      animation: particle-float ${duration}s ${delay}s ease-in infinite;
    `;
    container.appendChild(p);
    particles.push(p);
}
})();

(function addNebulaBlobs() {
  const blobs = [
    { top: '8%',  left: '3%',   size: 420, hue: 200 },
    { top: '38%', right: '4%',  size: 520, hue: 275 },
    { top: '65%', left: '28%',  size: 360, hue: 170 },
    { top: '20%', left: '55%',  size: 300, hue: 240 },
  ];
  blobs.forEach((b, i) => {
    const el = document.createElement('div');
    el.className = 'nebula-blob';
    el.style.cssText = `
      width:${b.size}px;height:${b.size}px;
      top:${b.top || 'auto'};
      ${b.left ? `left:${b.left};` : ''}
      ${b.right ? `right:${b.right};` : ''}
      background:radial-gradient(circle, hsla(${b.hue},80%,60%,0.05) 0%, transparent 70%);
      animation-delay:${-i * 5}s;
    `;
    document.body.appendChild(el);
});
})();

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });

      closeMobileNav();
});
});
}

function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
};
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initActiveSection() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
});
}
});
}, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

function initSectionReveal() {
  const sections = document.querySelectorAll('.section');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
}
});
}, { threshold: 0.08 });
  sections.forEach(s => revealObs.observe(s));

  setTimeout(() => {
    sections.forEach(s => s.classList.add('in-view'));
}, 1500);
}

function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = Math.ceil(target / 20);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(interval);
}, 60);
      observer.unobserve(el);
});
}, { threshold: 0.5 });
  stats.forEach(s => observer.observe(s));

  setTimeout(() => {
    stats.forEach(el => {
      if (el.dataset.target && el.textContent === '0') {
        el.textContent = el.dataset.target;
}
});
}, 2000);
}

function initMobileNav() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
});

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMobileNav();
});
}

function closeMobileNav() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-links');
  if (!btn || !menu) return;
  btn.classList.remove('open');
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileNav();
});

function initCosmos() {
  initNavScroll();
  initSmoothScroll();
  initActiveSection();
  initSectionReveal();
  initStatCounters();
  initMobileNav();

  if (typeof initPlanets === 'function') initPlanets();
  if (typeof initFacts   === 'function') initFacts();

  console.log('%c🔵 COSMOS SOLAR SYSTEM EXPLORER LOADED 🔵', 'color:#38bdf8;font-family:monospace;font-size:14px;font-weight:bold;');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCosmos);
} else {
  initCosmos();
}

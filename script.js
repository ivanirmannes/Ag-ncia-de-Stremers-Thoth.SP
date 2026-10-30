const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Tilt interaction is disabled on touch devices; CSS keeps the visual depth everywhere.
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (canHover && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      if (card.classList.contains('is-expanded')) return;
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      card.style.transform = `rotateY(${x * 9 - 4}deg) rotateX(${-y * 8 + 2}deg) translateZ(8px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}


// O logo do destaque pode ser projetado para a frente por clique, toque ou teclado.
const logoCard = document.querySelector('.hero-logo-card');
function toggleLogoProjection() {
  logoCard.style.removeProperty('transform');
  const expanded = logoCard.classList.toggle('is-expanded');
  logoCard.setAttribute('aria-pressed', String(expanded));
}
logoCard.addEventListener('click', toggleLogoProjection);
logoCard.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleLogoProjection();
  }
});

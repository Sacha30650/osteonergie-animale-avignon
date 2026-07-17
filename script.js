// Nav scroll state
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Reveal on scroll
const els = document.querySelectorAll('.pillar-item, .price-card, .avis-card, .soin-card, .contact-card, .section-head, .fusion-note, .animals-strip, .approche-photo, .galerie-item, .order-note');
els.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
els.forEach(el => io.observe(el));

// Galerie lightbox simple
document.querySelectorAll('.galerie-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
      position: fixed; inset: 0; z-index: 1000;
      background: rgba(0,0,0,.9); display: grid; place-items: center;
      cursor: zoom-out; padding: 40px;
    `;
    const big = document.createElement('img');
    big.src = img.src;
    big.style.cssText = 'max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;';
    lightbox.appendChild(big);
    lightbox.addEventListener('click', () => lightbox.remove());
    document.body.appendChild(lightbox);
  });
});

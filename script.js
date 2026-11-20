const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.photo-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.photo-open').forEach(button => button.addEventListener('click', () => {
  lightboxImage.src = button.dataset.full;
  lightboxImage.alt = button.querySelector('img').alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}));
function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

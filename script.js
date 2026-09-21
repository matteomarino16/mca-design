/* ==========================================================================
   MCA design s.r.l. — script della landing page
   ==========================================================================

   ►►► UNICO PUNTO DA MODIFICARE: il blocco CONFIG qui sotto. ◄◄◄
   Tutti i link (WhatsApp, telefono, email, social, footer) si aggiornano da soli.
   ========================================================================== */

const CONFIG = {
  // Numero WhatsApp in formato internazionale, SENZA "+", spazi o trattini.
  // Esempio per un numero italiano 333 1234567  ->  '393331234567'
  whatsapp: '393331234567',

  // Recapiti mostrati nella sezione Contatti e nel footer
  telefono:  '+39 333 123 4567',
  email:     'info@mcadesign.it',
  indirizzo: 'Via Esempio 1, 70121 Bari (BA), Italia',
  orari:     'Lun – Ven  9:00 – 13:00 / 15:00 – 18:00',
  piva:      'P.IVA 00000000000',

  // Social dell'azienda — lascia '' e l'icona sparisce dal sito
  instagram: '',
  facebook:  '',

  // Credito in fondo alla pagina ("Web by Matteo Marino")
  devInstagram: 'https://www.instagram.com/_matteomarino/'
};

/* ==========================================================================
   Galleria — per aggiungere o togliere foto basta modificare questa lista.
   cat: 'progetti' | 'bagni' | 'pavimenti' | 'design'
   ========================================================================== */
const GALLERIA = [
  { id: 'g01', cat: 'progetti',  alt: 'Scalinata in marmo del Grand Hotel delle Nazioni',      cap: 'Grand Hotel delle Nazioni — Bari' },
  { id: 'g02', cat: 'progetti',  alt: 'Salone con volte in pietra e pavimento in Trani',        cap: 'Relais Hist — Salone' },
  { id: 'g03', cat: 'progetti',  alt: 'Camera con pavimento in pietra di Trani patinata',       cap: 'Relais Hist San Pietro sul Mar Piccolo — Taranto' },
  { id: 'g04', cat: 'progetti',  alt: 'Sala colazione con pavimento in pietra naturale',        cap: 'Sala colazione — Relais Hist' },
  { id: 'g05', cat: 'progetti',  alt: 'Lastra di marmo retroilluminata nella spa',              cap: 'Culti Day Spa — Milano' },
  { id: 'g06', cat: 'progetti',  alt: 'Parete in marmo scuro retroilluminata',                  cap: 'Culti Day Spa — Milano' },
  { id: 'g07', cat: 'progetti',  alt: 'Scala e volume in pietra nella hall della spa',          cap: 'Culti Day Spa — Milano' },
  { id: 'g08', cat: 'progetti',  alt: 'Bordo piscina rivestito in pietra naturale',             cap: 'Bordo piscina in pietra' },
  { id: 'g09', cat: 'bagni',     alt: 'Bagno con mobile e lavabo in travertino noce',           cap: 'Bagno in Travertino Noce' },
  { id: 'g10', cat: 'bagni',     alt: 'Bagno rivestito in marmo grafite con lavabi bianchi',    cap: 'Bagno in Grafite' },
  { id: 'g11', cat: 'bagni',     alt: 'Bagno rivestito in pietra patinata chiara',              cap: 'Bagno in Trani patinato' },
  { id: 'g12', cat: 'bagni',     alt: 'Dettaglio del lavabo incassato in travertino',           cap: 'Dettaglio lavabo in pietra' },
  { id: 'g13', cat: 'pavimenti', alt: 'Pavimento in Trani patinato in camera d’albergo',        cap: 'Pavimento in Trani patinato' },
  { id: 'g14', cat: 'pavimenti', alt: 'Pavimento in pietra di Trani burattata',                 cap: 'Trani burattato' },
  { id: 'g15', cat: 'pavimenti', alt: 'Dettaglio della finitura patinata del pavimento',        cap: 'Dettaglio finitura patinata' },
  { id: 'g16', cat: 'design',    alt: 'Vasi scolpiti in pietra naturale',                       cap: 'Vasi in pietra naturale' },
  { id: 'g17', cat: 'design',    alt: 'Lavabo monolitico scolpito in pietra',                   cap: 'Lavabo monolitico' },
  { id: 'g18', cat: 'design',    alt: 'Parete sagomata a onde in pietra',                       cap: 'Parete sagomata' },
  { id: 'g19', cat: 'design',    alt: 'Oggettistica e complementi in pietra',                   cap: 'Oggettistica in pietra' }
];

/* ========================================================================== */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const waLink = (msg) =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------- 1. Recapiti e link dinamici ---------- */
  function applyConfig() {
    const set = (key, fn) => $$(`[data-cfg="${key}"]`).forEach(fn);

    set('tel',       el => el.textContent = CONFIG.telefono);
    set('mail',      el => el.textContent = CONFIG.email);
    set('address',   el => el.textContent = CONFIG.indirizzo);
    set('hours',     el => el.textContent = CONFIG.orari);
    set('piva',      el => el.textContent = CONFIG.piva);
    set('tel-link',  el => el.href = 'tel:' + CONFIG.telefono.replace(/[^\d+]/g, ''));
    set('mail-link', el => el.href = 'mailto:' + CONFIG.email);
    set('dev-link',  el => el.href = CONFIG.devInstagram);

    // Un social senza indirizzo verrebbe fuori come pulsante morto: meglio nasconderlo.
    const social = (key, url) => $$(`[data-cfg="${key}"]`).forEach(el => {
      if (url) el.href = url;
      else el.remove();
    });
    social('ig-link', CONFIG.instagram);
    social('fb-link', CONFIG.facebook);

    $$('[data-wa]').forEach(el => {
      el.href = waLink(el.dataset.wa);
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });

    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- 2. Header: sfondo allo scroll + link attivo ---------- */
  function initHeader() {
    const header = $('#header');
    const waFloat = $('.wa-float');
    const links = $$('.nav > a[href^="#"]');
    const sections = links
      .map(a => $(a.getAttribute('href')))
      .filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 40);
      if (waFloat) waFloat.classList.toggle('show', y > window.innerHeight * 0.6);

      let current = null;
      sections.forEach(sec => {
        if (sec.getBoundingClientRect().top <= 140) current = sec.id;
      });
      links.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + current)
      );
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 3. Menu mobile ---------- */
  function initBurger() {
    const burger = $('#burger');
    if (!burger) return;

    const close = () => {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Apri il menu');
    };

    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    });

    $$('.nav a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- 4. Animazioni all'ingresso ---------- */
  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      let shown = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add('in'), Math.min(shown++, 5) * 60);
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });

    items.forEach(el => io.observe(el));
  }

  /* ---------- 5. Galleria + filtri ---------- */
  function initGallery() {
    const grid = $('#gallery');
    if (!grid) return;

    grid.innerHTML = GALLERIA.map((img, i) => `
      <button class="g-item" data-cat="${img.cat}" data-index="${i}"
              aria-label="Apri: ${img.cap}">
        <img src="assets/img/${img.id}.jpg" alt="${img.alt}" loading="lazy">
        <span class="g-cap">${img.cap}</span>
      </button>`).join('');

    const items = $$('.g-item', grid);

    $$('.filter').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;

        $$('.filter').forEach(b => {
          const on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', String(on));
        });

        items.forEach(item => {
          const show = cat === 'all' || item.dataset.cat === cat;
          item.hidden = !show;
          if (show) {
            item.style.animation = 'none';
            void item.offsetWidth;          // forza il restart dell'animazione
            item.style.animation = '';
          }
        });
      });
    });

    initLightbox(items);
  }

  /* ---------- 6. Lightbox ---------- */
  function initLightbox(items) {
    const box   = $('#lightbox');
    const imgEl = $('#lb-img');
    const capEl = $('#lb-cap');
    if (!box) return;

    let current = 0;
    let lastFocus = null;

    const visible = () => items.filter(el => !el.hidden);

    const show = (index) => {
      const list = visible();
      if (!list.length) return;
      current = (index + list.length) % list.length;

      const data = GALLERIA[Number(list[current].dataset.index)];
      imgEl.src = `assets/img/${data.id}-full.jpg`;
      imgEl.alt = data.alt;
      capEl.textContent = data.cap;
    };

    const open = (index) => {
      lastFocus = document.activeElement;
      show(index);
      box.hidden = false;
      document.body.classList.add('no-scroll');
      $('#lb-close').focus();
    };

    const close = () => {
      box.hidden = true;
      document.body.classList.remove('no-scroll');
      if (lastFocus) lastFocus.focus();
    };

    items.forEach(item => {
      item.addEventListener('click', () => open(visible().indexOf(item)));
    });

    $('#lb-close').addEventListener('click', close);
    $('#lb-prev').addEventListener('click', () => show(current - 1));
    $('#lb-next').addEventListener('click', () => show(current + 1));
    box.addEventListener('click', e => { if (e.target === box) close(); });

    document.addEventListener('keydown', e => {
      if (box.hidden) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });

    // Swipe su mobile
    let startX = null;
    box.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  }

  /* ---------- 7. Form contatti -> WhatsApp ---------- */
  function initForm() {
    const form = $('#contact-form');
    if (!form) return;
    const error = $('#form-error');

    form.addEventListener('submit', e => {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const msg  = form.messaggio.value.trim();

      if (!nome || !msg) {
        error.hidden = false;
        (!nome ? form.nome : form.messaggio).focus();
        return;
      }
      error.hidden = true;

      const intestazione = [
        `Salve, sono ${nome}.`,
        `Interesse: ${form.tipo.value}.`,
        form.telefono.value.trim() ? `Telefono: ${form.telefono.value.trim()}.` : ''
      ].filter(Boolean).join('\n');

      const testo = `${intestazione}\n\n${msg}`;

      window.open(waLink(testo), '_blank', 'noopener');
    });
  }

  /* ---------- Avvio ---------- */
  applyConfig();
  initHeader();
  initBurger();
  initReveal();
  initGallery();
  initForm();
})();

/* ==========================================================================
   MCA design s.r.l. — script del sito
   ==========================================================================

   ►►► PUNTI DA MODIFICARE: i tre blocchi qui sotto (CONFIG, PROMOZIONI, GALLERIA).
   Tutto il resto si aggiorna da solo.
   ========================================================================== */

const CONFIG = {
  // Numero WhatsApp in formato internazionale, SENZA "+", spazi o trattini.
  // Esempio per un numero italiano 333 1234567  ->  '393331234567'
  whatsapp: '393331234567',

  // Recapiti mostrati nella sezione Contatti e nel footer
  telefono:  '+39 333 123 4567',
  email:     'info@mcadesign.it',
  indirizzo: 'Via xxxx',          // mostrato come "Deposito materiali"
  piva:      'P.IVA 00000000000',

  // Foto grande dell'hero. Lascia '' e l'hero resta chiaro, con il solo logo.
  // Appena avete la foto: mettetela in assets/img/ e scrivete qui il percorso,
  // es. 'assets/img/hero.jpg'
  heroImage: '',

  // Mappa Google nella sezione Contatti.
  // '' = mappa nascosta. Per riattivarla scrivere qui l'indirizzo, es. 'Via Rossi 1, Bari'.
  mappa: '',

  // Social dell'azienda.
  // ⚠️ SEGNAPOSTO: questi due portano alla home di Instagram/Facebook,
  //    NON al profilo di MCA design. Sostituiscili con gli indirizzi veri.
  //    Se lasci '' l'icona corrispondente sparisce dal sito.
  instagram: 'https://www.instagram.com/',
  facebook:  'https://www.facebook.com/',

  // Credito in fondo alla pagina ("Web by Matteo Marino")
  devInstagram: 'https://www.instagram.com/_matteomarino/'
};

/* ==========================================================================
   Promozioni — compaiono sia in home (le prime 3) sia su promozioni.html.
   ⚠️ Prezzi e testi sono SEGNAPOSTO: da sostituire con quelli veri.
   Le immagini vanno messe in assets/img/.
   ========================================================================== */
const PROMOZIONI = [
  {
    img: 'promo-1.jpg',
    alt: 'Pavimento in pietra di Trani patinata',
    titolo: 'Trani patinato — lotto in pronta consegna',
    descrizione: 'Lastre 60×30×2 cm, finitura patinata anticata. Ideale per pavimenti interni e sale di rappresentanza.',
    prezzo: '€ 00,00 / m²',
    nota: 'Fino a esaurimento scorte'
  },
  {
    img: 'promo-2.jpg',
    alt: 'Lastra di travertino classico',
    titolo: 'Travertino classico — fornitura e posa',
    descrizione: 'Pacchetto fornitura + posa per superfici oltre i 40 m², con sopralluogo e rilievo inclusi.',
    prezzo: '€ 00,00 / m²',
    nota: 'Valido fino al 00/00/0000'
  },
  {
    img: 'promo-3.jpg',
    alt: 'Bagno rivestito in pietra patinata',
    titolo: 'Top bagno + piatto doccia su misura',
    descrizione: 'Top con lavabo incassato e piatto doccia filo pavimento, stesso materiale e stessa finitura.',
    prezzo: '€ 000,00',
    nota: 'Prezzo a partire da'
  }
];

/* ==========================================================================
   Galleria — per aggiungere o togliere foto basta modificare questa lista.
   cat: 'progetti' | 'bagni' | 'pavimenti' | 'design'
   Per ogni voce servono due file: <id>.jpg (miniatura) e <id>-full.jpg (ingrandimento).
   ========================================================================== */
const GALLERIA = [
  { id: 'g01', cat: 'progetti',  alt: 'Scalinata in marmo del Grand Hotel delle Nazioni',      cap: 'Grand Hotel delle Nazioni — Bari' , w:900, h:630 },
  { id: 'g02', cat: 'progetti',  alt: 'Salone con volte in pietra e pavimento in Trani',        cap: 'Relais Hist — Salone' , w:900, h:598 },
  { id: 'g03', cat: 'progetti',  alt: 'Camera con pavimento in pietra di Trani patinata',       cap: 'Relais Hist San Pietro sul Mar Piccolo — Taranto' , w:900, h:603 },
  { id: 'g04', cat: 'progetti',  alt: 'Sala colazione con pavimento in pietra naturale',        cap: 'Sala colazione — Relais Hist' , w:900, h:598 },
  { id: 'g05', cat: 'progetti',  alt: 'Lastra di marmo retroilluminata nella spa',              cap: 'Culti Day Spa — Milano' , w:871, h:863 },
  { id: 'g06', cat: 'progetti',  alt: 'Parete in marmo scuro retroilluminata',                  cap: 'Culti Day Spa — Milano' , w:900, h:901 },
  { id: 'g07', cat: 'progetti',  alt: 'Scala e volume in pietra nella hall della spa',          cap: 'Culti Day Spa — Milano' , w:867, h:859 },
  { id: 'g08', cat: 'progetti',  alt: 'Bordo piscina rivestito in pietra naturale',             cap: 'Bordo piscina in pietra' , w:900, h:672 },
  { id: 'g09', cat: 'bagni',     alt: 'Bagno con mobile e lavabo in travertino noce',           cap: 'Bagno in Travertino Noce' , w:900, h:884 },
  { id: 'g10', cat: 'bagni',     alt: 'Bagno rivestito in marmo grafite con lavabi bianchi',    cap: 'Bagno in Grafite' , w:900, h:598 },
  { id: 'g11', cat: 'bagni',     alt: 'Bagno rivestito in pietra patinata chiara',              cap: 'Bagno in Trani patinato' , w:900, h:598 },
  { id: 'g12', cat: 'bagni',     alt: 'Dettaglio del lavabo incassato in travertino',           cap: 'Dettaglio lavabo in pietra' , w:900, h:849 },
  { id: 'g13', cat: 'pavimenti', alt: 'Pavimento in Trani patinato in camera d’albergo',        cap: 'Pavimento in Trani patinato' , w:900, h:598 },
  { id: 'g14', cat: 'pavimenti', alt: 'Pavimento in pietra di Trani burattata',                 cap: 'Trani burattato' , w:850, h:638 },
  { id: 'g15', cat: 'pavimenti', alt: 'Dettaglio della finitura patinata del pavimento',        cap: 'Dettaglio finitura patinata' , w:900, h:598 },
  { id: 'g16', cat: 'design',    alt: 'Vasi scolpiti in pietra naturale',                       cap: 'Vasi in pietra naturale' , w:900, h:675 },
  { id: 'g17', cat: 'design',    alt: 'Lavabo monolitico scolpito in pietra',                   cap: 'Lavabo monolitico' , w:900, h:675 },
  { id: 'g19', cat: 'design',    alt: 'Oggettistica e complementi in pietra',                   cap: 'Oggettistica in pietra' , w:900, h:598 }
];

/* ========================================================================== */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

  const waLink = (msg) =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------- 1. Recapiti e link dinamici ---------- */
  function applyConfig() {
    const set = (key, fn) => $$(`[data-cfg="${key}"]`).forEach(fn);

    set('tel',       el => el.textContent = CONFIG.telefono);
    set('mail',      el => el.textContent = CONFIG.email);
    set('address',   el => el.textContent = CONFIG.indirizzo);
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

  /* ---------- 2. Foto dell'hero (opzionale) ---------- */
  function initHeroFoto() {
    const media = $('#hero-media');
    if (!media) return;

    if (!CONFIG.heroImage) { media.remove(); return; }

    const img = document.createElement('img');
    img.src = CONFIG.heroImage;
    img.alt = '';
    img.setAttribute('fetchpriority', 'high');
    media.append(img);
    document.body.classList.add('ha-foto');   // la foto copre il fondo in marmo
  }

  /* ---------- 3. Hero 3D: il logo si inclina col mouse e vola nell'header ----------
     Due trasformazioni separate per non interferire fra loro:
       · il PALCO (.hero-stage) porta l'inclinazione 3d, con perno al centro;
       · il LOGO porta il volo verso l'header, con perno in alto a sinistra.
     L'inclinazione si spegne man mano che il logo arriva in barra, così
     all'atterraggio la trasformazione è di nuovo piatta e combacia al pixel. */
  function initHero3D() {
    const hero   = $('#hero');
    const stage  = $('#hero-stage');
    const logo   = $('#hero-logo');
    const brand  = $('#brand');
    const header = $('#header');
    if (!hero || !stage || !logo || !brand || !header) return;

    const brandImg = brand.querySelector('img');
    const sub = $('#hero-sub');
    const cta = $('#hero-cta');
    const texImg = $('#hero-texture img');

    const fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const puntatoreFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let partenza = null, arrivo = null, corsa = 1;
    let mira = { x: 0, y: 0 };      // dove vuole andare l'inclinazione
    let ora  = { x: 0, y: 0 };      // dov'è adesso (insegue "mira")
    let inCoda = false;

    // Posizione del logo come se non ci fosse nessuna trasformazione addosso:
    // la catena degli offset ignora transform e animazioni, quindi posso misurare
    // anche mentre l'ingresso 3d sta ancora girando.
    function posizioneAFermo(el) {
      let x = 0, y = 0, n = el;
      while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
      return { left: x, top: y, h: el.offsetHeight };
    }

    function misura() {
      partenza = posizioneAFermo(logo);
      if (!partenza.h) return;       // immagine non ancora dimensionata

      // l'header da fermo è più alto: misuro il logo nello stato finale,
      // senza transizioni, così la destinazione non si sposta durante il viaggio
      const eraRidotto = header.classList.contains('scrolled');
      header.classList.add('senza-transizione', 'scrolled');
      const b = brandImg.getBoundingClientRect();
      arrivo = { top: b.top, left: b.left, h: b.height };
      if (!eraRidotto) header.classList.remove('scrolled');
      void header.offsetWidth;
      header.classList.remove('senza-transizione');

      corsa = Math.max(hero.offsetHeight * 0.55, 1);
      disegna();
    }

    function disegna() {
      if (!partenza || !arrivo) return;

      const p  = clamp(window.scrollY / corsa, 0, 1);
      const su = partenza.top - window.scrollY;        // dov'è ora, senza trasformazioni

      const dx = (arrivo.left - partenza.left) * p;
      const dy = (arrivo.top - su) * p;
      const sc = 1 + (arrivo.h / partenza.h - 1) * p;
      logo.style.transform = `translate(${dx}px, ${dy}px) scale(${sc})`;

      // l'inclinazione svanisce entro il primo terzo del viaggio
      const quota = Math.max(1 - p * 3, 0);
      if (!fermo) {
        const rx = (-ora.y * 9) * quota;
        const ry = ( ora.x * 11) * quota;
        const tz = (Math.abs(ora.x) + Math.abs(ora.y)) * 14 * quota;
        stage.style.transform = quota > 0.001
          ? `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px)`
          : 'none';

        // i testi scorrono meno del logo: è quello che dà la sensazione di profondità
        const px = (-ora.x * 12) * quota, py = (-ora.y * 8) * quota;
        if (sub) sub.style.translate = `${px}px ${py}px`;
        if (cta) cta.style.translate = `${px * 0.6}px ${py * 0.6}px`;

        // la pietra sul fondo si muove pochissimo e al contrario: è lo strato più lontano
        if (texImg) {
          texImg.style.transform =
            `scale(1.06) translate(${(-ora.x * 16) * quota}px, ${(-ora.y * 11) * quota}px)`;
        }
      }

      // scambio alla fine del viaggio, così non si vedono due loghi insieme
      const scambio = clamp((p - 0.84) / 0.16, 0, 1);
      logo.style.opacity  = String(1 - scambio);
      brand.style.opacity = String(scambio);
      brand.style.pointerEvents = scambio > 0.5 ? 'auto' : 'none';
    }

    function chiediFrame() {
      if (inCoda) return;
      inCoda = true;
      requestAnimationFrame(() => { inCoda = false; disegna(); });
    }

    // inseguimento morbido del puntatore: senza, l'inclinazione sarebbe a scatti
    function insegui() {
      ora.x += (mira.x - ora.x) * 0.08;
      ora.y += (mira.y - ora.y) * 0.08;
      disegna();
      if (Math.abs(mira.x - ora.x) > 0.001 || Math.abs(mira.y - ora.y) > 0.001) {
        requestAnimationFrame(insegui);
      }
    }

    misura();

    window.addEventListener('scroll', chiediFrame, { passive: true });
    window.addEventListener('resize', misura);
    window.addEventListener('load', misura);

    if (!fermo && puntatoreFine) {
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        mira.x = clamp((e.clientX - r.left) / r.width  * 2 - 1, -1, 1);
        mira.y = clamp((e.clientY - r.top)  / r.height * 2 - 1, -1, 1);
        requestAnimationFrame(insegui);
      });
      hero.addEventListener('pointerleave', () => {
        mira.x = 0; mira.y = 0;
        requestAnimationFrame(insegui);
      });
    }
  }

  /* ---------- 4. Mappa Google (disattivabile da CONFIG) ---------- */
  function initMap() {
    const box = $('#contact-map');
    if (!box) return;

    const luogo = (CONFIG.mappa || '').trim();
    const q = encodeURIComponent(luogo);

    if (!luogo) {
      box.remove();
      $('.contact')?.classList.add('contact--senza-mappa');
      return;
    }

    $$('[data-cfg="maps-link"]').forEach(el => {
      el.href = `https://www.google.com/maps/search/?api=1&query=${q}`;
    });

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps?q=${q}&hl=it&z=14&output=embed`;
    iframe.title = `Mappa: dove siamo — ${luogo}`;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    box.prepend(iframe);
  }

  /* ---------- 5. Seconda striscia social, sotto "Chi siamo" ----------
     Clonata dalla prima: le icone restano identiche e c'è un solo punto
     da modificare. */
  function duplicaBandaSocial() {
    const banda = $('.social-band');
    const chiSiamo = $('#chi-siamo');
    if (!banda || !chiSiamo) return;

    const copia = banda.cloneNode(true);
    copia.classList.add('social-band--sotto-chi-siamo');
    chiSiamo.after(copia);
  }

  /* ---------- 6. Promozioni ---------- */
  function initPromozioni() {
    const scheda = (p) => `
      <article class="promo reveal">
        <div class="promo-img"><img src="assets/img/${p.img}" alt="${p.alt}" loading="lazy"></div>
        <div class="promo-body">
          ${p.nota ? `<span class="promo-nota">${p.nota}</span>` : ''}
          <h3 class="promo-titolo">${p.titolo}</h3>
          <p class="promo-desc">${p.descrizione}</p>
          <p class="promo-prezzo">${p.prezzo}</p>
          <a class="btn btn-wa promo-btn" href="#"
             data-wa="Salve, vorrei informazioni sulla promozione: ${p.titolo}."><span class="lungo">Richiedi questa offerta</span><span class="corto">Richiedi</span></a>
        </div>
      </article>`;

    const home = $('#promos-home');
    if (home) home.innerHTML = PROMOZIONI.slice(0, 3).map(scheda).join('');

    const pagina = $('#promos-page');
    if (pagina) pagina.innerHTML = PROMOZIONI.map(scheda).join('');

    // le schede nascono dopo applyConfig: i loro link WhatsApp vanno risolti ora
    $$('.promo [data-wa]').forEach(el => {
      el.href = waLink(el.dataset.wa);
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });
  }

  /* ---------- 7. Header: sfondo allo scroll + link attivo ---------- */
  function initHeader() {
    const header = $('#header');
    if (!header) return;

    const floats = $$('.wa-float, .tel-float');
    const links = $$('.nav > a[href^="#"]');
    const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
    const hero = $('#hero');

    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 40);

      if (hero) {
        const oltreHero = y > window.innerHeight * 0.6;
        floats.forEach(el => el.classList.toggle('show', oltreHero));
      }

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

  /* ---------- 8. Menu mobile ---------- */
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

  /* ---------- 9. Animazioni all'ingresso ---------- */
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

  /* ---------- 10. Galleria + filtri ---------- */
  function initGallery() {
    const grid = $('#gallery');
    if (!grid) return;

    grid.innerHTML = GALLERIA.map((img, i) => `
      <button class="g-item" data-cat="${img.cat}" data-index="${i}"
              aria-label="Apri: ${img.cap}">
        <img src="assets/img/${img.id}.jpg" alt="${img.alt}" loading="lazy"
             width="${img.w}" height="${img.h}">
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

  /* ---------- 11. Lightbox ---------- */
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

  /* ---------- 12. Form contatti -> WhatsApp ---------- */
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

      window.open(waLink(`${intestazione}\n\n${msg}`), '_blank', 'noopener');
    });
  }

  /* ---------- Avvio ---------- */
  applyConfig();
  initHeroFoto();
  duplicaBandaSocial();
  initPromozioni();
  initMap();
  initHero3D();
  initHeader();
  initBurger();
  initReveal();
  initGallery();
  initForm();
})();

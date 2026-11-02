# MCA design s.r.l. — landing page

Sito one-page statico: solo HTML, CSS e JavaScript, nessuna dipendenza e nessun
build. Si pubblica caricando la cartella su qualsiasi hosting (Netlify, Vercel,
GitHub Pages, Aruba, spazio FTP…).

## Struttura

```
index.html       la home (struttura e testi)
promozioni.html  pagina esterna con tutte le promozioni
style.css        tutti gli stili, desktop e mobile
script.js        comportamenti + CONFIG + PROMOZIONI + GALLERIA
assets/img/      immagini ottimizzate per il web (generate da galleria/)
galleria/        archivio originale delle foto (non usato dal sito)
logo.PNG         logo originale
```

Sezioni della home: Hero · Chi siamo · Servizi · Materiali · Prodotti ·
Complementi di design · Promozioni · Galleria · Contatti.

## Cosa modificare

### 1. Recapiti e numero WhatsApp

Tutto in cima a `script.js`, nel blocco `CONFIG`:

```js
const CONFIG = {
  whatsapp: '393331234567',   // internazionale, senza + né spazi
  telefono:  '+39 333 123 4567',
  email:     'info@mcadesign.it',
  indirizzo: 'Via xxxx',      // mostrato come "Deposito materiali"
  piva:      'P.IVA 00000000000',
  heroImage: '',              // '' = hero chiaro col solo logo
  mappa:     '',              // '' = mappa Google nascosta
  instagram: 'https://www.instagram.com/',  // ⚠️ segnaposto
  facebook:  'https://www.facebook.com/',   // ⚠️ segnaposto
  devInstagram: 'https://www.instagram.com/_matteomarino/'
};
```

Telefono, email, indirizzo, social, i 13 link WhatsApp della pagina e il credito
in fondo si aggiornano da soli. Instagram e Facebook lasciati vuoti spariscono
dalla pagina, così non resta nessun pulsante che non porta da nessuna parte.

### 2. Foto grande dell'hero

L'hero è scuro: sul fondo c'è `assets/img/hero-stone.jpg` (marmo Forest Green),
con logo, menu e testi in bianco. Quando avete la foto: mettetela in
`assets/img/` e indicatela in `CONFIG.heroImage` (es. `'assets/img/hero.jpg'`).
La foto copre il marmo e il resto resta com'è, già impostato per il chiaro su scuro.

### 3. Promozioni

L'array `PROMOZIONI` in `script.js` alimenta sia la sezione in home (le prime 3)
sia la pagina `promozioni.html` (tutte). Ogni voce ha immagine, titolo,
descrizione, prezzo e una nota facoltativa.
**Prezzi e testi attuali sono segnaposto.**

### 4. Foto della galleria

Subito sotto il CONFIG c'è l'array `GALLERIA`. Ogni voce:

```js
{ id: 'g01', cat: 'progetti', alt: 'testo alternativo', cap: 'Didascalia' }
```

`id` è il nome del file: servono **due** immagini in `assets/img/`,
`g01.jpg` (miniatura, lato lungo 900 px) e `g01-full.jpg` (ingrandimento, 1700 px).
`cat` può essere `progetti`, `bagni`, `pavimenti` o `design` — sono i filtri della
sezione.

### 5. Marchi trattati

I loghi partner stanno in fondo alla sezione Materiali, in `index.html`
(blocco `.partners`). I file sono `assets/img/partner-*.png`, in trasparenza.
Ogni logo è collegato al sito ufficiale del marchio (si apre in una nuova
scheda). Gli indirizzi sono quelli linkati dalla home di Cosentino Italia:

| Marchio | Indirizzo |
|---|---|
| Cosentino | `https://www.cosentino.com/it-it/` |
| Dekton | `https://www.cosentino.com/it-it/dekton/` |
| Silestone | `https://www.cosentino.com/it-it/silestone/` |
| Sensa | `https://www.cosentino.com/it-it/sensa/` |

Per aggiungerne uno: converti il PDF/AI in PNG trasparente alto 220 px e
aggiungi una voce `<li><a href="..."><img ...></a></li>`. In pagina sono in
bianco e nero e tornano a colori al passaggio del mouse.

### 6. Testi

Sono direttamente in `index.html`, dentro le sezioni commentate
(`CHI SIAMO`, `SERVIZI`, `PRODOTTI`, `GALLERIA`, `CONTATTI`, `FOOTER`).

## Anteprima in locale

```bash
python3 -m http.server 4173
```

Poi apri `http://localhost:4173`.

## Cache del browser

In `index.html` e `promozioni.html` i collegamenti sono scritti così:

```html
<link rel="stylesheet" href="style.css?v=2">
<script src="script.js?v=2"></script>
```

Quel `?v=2` serve a non far vedere ai visitatori una versione vecchia del sito.
**Ogni volta che modificate `style.css` o `script.js`, alzate il numero**
(`?v=3`, `?v=4`…) in entrambi i file HTML. Senza, chi ha già visitato il sito
continua a vedere il vecchio foglio di stile finché non svuota la cache.

## Note

- Il form contatti non richiede un server: compone il messaggio e lo apre
  su WhatsApp. In alternativa c'è il link `mailto:`.
- La mappa Google è disattivata (`CONFIG.mappa` vuoto): il blocco viene rimosso
  e i recapiti restano da soli, centrati. Per riattivarla basta scrivere
  l'indirizzo in `CONFIG.mappa`. Essendo un contenuto di Google, in quel caso
  valutate se serve un banner cookie.
- Hero 3D (`initHero3D` in `script.js`), senza librerie:
  il logo entra inclinato e si raddrizza, segue il mouse con un'inclinazione
  prospettica (testi e bottoni si muovono in controparte: è questo che dà la
  profondità) e, scorrendo, vola fino a sovrapporsi al logo della barra.
  L'inclinazione si spegne nel primo terzo del volo, così l'atterraggio è piatto
  e combacia al pixel. Niente inclinazione su touch; con `prefers-reduced-motion`
  resta solo lo spostamento verso l'header.
- Le immagini in `assets/img/` sono state rigenerate da `galleria/` con
  ridimensionamento e compressione (≈4,7 MB in totale invece di ~500 MB).
- Layout responsive con tre livelli: desktop, tablet (≤900 px) e mobile
  (≤760 px, con un ulteriore ritocco sotto i 400 px). Su mobile testi, spaziature,
  bottoni e immagini sono tutti riscalati; prodotti e galleria passano a due colonne.
- I campi del form restano a 16 px su mobile: è la soglia sotto la quale iOS
  zooma da solo quando si tocca un campo.
- Supporta `prefers-reduced-motion` ed è navigabile da tastiera
  (galleria e lightbox inclusi).

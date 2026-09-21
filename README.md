# MCA design s.r.l. — landing page

Sito one-page statico: solo HTML, CSS e JavaScript, nessuna dipendenza e nessun
build. Si pubblica caricando la cartella su qualsiasi hosting (Netlify, Vercel,
GitHub Pages, Aruba, spazio FTP…).

## Struttura

```
index.html      la pagina (struttura e testi)
style.css       tutti gli stili, desktop e mobile
script.js       comportamenti + CONFIG + elenco foto della galleria
assets/img/     immagini ottimizzate per il web (generate da galleria/)
galleria/       archivio originale delle foto (non usato dal sito)
logo.PNG        logo originale
```

## Cosa modificare

### 1. Recapiti e numero WhatsApp

Tutto in cima a `script.js`, nel blocco `CONFIG`:

```js
const CONFIG = {
  whatsapp: '393331234567',   // internazionale, senza + né spazi
  telefono:  '+39 333 123 4567',
  email:     'info@mcadesign.it',
  indirizzo: 'Via xxxx',      // segnaposto, da sostituire
  mappa:     'Bari, Italia',  // punto mostrato dalla mappa Google
  orari:     'Lun – Ven  9:00 – 13:00 / 15:00 – 18:00',
  piva:      'P.IVA 00000000000',
  instagram: '',            // vuoto = l'icona non viene mostrata
  facebook:  '',            // vuoto = l'icona non viene mostrata
  devInstagram: 'https://www.instagram.com/_matteomarino/'
};
```

Telefono, email, indirizzo, social, i 13 link WhatsApp della pagina e il credito
in fondo si aggiornano da soli. Instagram e Facebook lasciati vuoti spariscono
dalla pagina, così non resta nessun pulsante che non porta da nessuna parte.

### 2. Foto della galleria

Subito sotto il CONFIG c'è l'array `GALLERIA`. Ogni voce:

```js
{ id: 'g01', cat: 'progetti', alt: 'testo alternativo', cap: 'Didascalia' }
```

`id` è il nome del file: servono **due** immagini in `assets/img/`,
`g01.jpg` (miniatura, lato lungo 900 px) e `g01-full.jpg` (ingrandimento, 1700 px).
`cat` può essere `progetti`, `bagni`, `pavimenti` o `design` — sono i filtri della
sezione.

### 3. Testi

Sono direttamente in `index.html`, dentro le sezioni commentate
(`CHI SIAMO`, `SERVIZI`, `PRODOTTI`, `GALLERIA`, `CONTATTI`, `FOOTER`).

## Anteprima in locale

```bash
python3 -m http.server 4173
```

Poi apri `http://localhost:4173`.

## Note

- Il form contatti non richiede un server: compone il messaggio e lo apre
  su WhatsApp. In alternativa c'è il link `mailto:`.
- La mappa è un `<iframe>` di Google Maps costruito da `script.js` a partire da
  `CONFIG.mappa` (o, se vuoto, da `CONFIG.indirizzo`): nessuna chiave API,
  nessun indirizzo da scrivere due volte. Essendo un contenuto di Google,
  prima della pubblicazione valutate se serve un banner cookie.
- Le immagini in `assets/img/` sono state rigenerate da `galleria/` con
  ridimensionamento e compressione (≈4,7 MB in totale invece di ~500 MB).
- Layout responsive con tre livelli: desktop, tablet (≤900 px) e mobile
  (≤760 px, con un ulteriore ritocco sotto i 400 px). Su mobile testi, spaziature,
  bottoni e immagini sono tutti riscalati; prodotti e galleria passano a due colonne.
- I campi del form restano a 16 px su mobile: è la soglia sotto la quale iOS
  zooma da solo quando si tocca un campo.
- Supporta `prefers-reduced-motion` ed è navigabile da tastiera
  (galleria e lightbox inclusi).

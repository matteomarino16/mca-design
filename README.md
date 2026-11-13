# MCA design s.r.l. — landing page

Sito one-page statico: solo HTML, CSS e JavaScript, nessuna dipendenza e nessun
build. Si pubblica caricando la cartella su qualsiasi hosting (Netlify, Vercel,
GitHub Pages, Aruba, spazio FTP…).

## Struttura

```
index.html       la home (struttura e testi)
promozioni.html  pagina esterna con tutte le promozioni
privacy.html     informativa privacy
cookie.html      cookie policy
robots.txt       istruzioni per i motori di ricerca e per gli assistenti AI
sitemap.xml      elenco di pagine e immagini per i motori di ricerca
llms.txt         scheda sintetica dell'azienda, leggibile dagli assistenti AI
style.css        tutti gli stili, desktop e mobile
script.js        comportamenti + CONFIG + PROMOZIONI + GALLERIA
assets/img/      immagini ottimizzate per il web (generate da galleria/)
assets/fonts/    i due caratteri, serviti dal nostro sito
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
  whatsapp: '393495519357',   // internazionale, senza + né spazi
  telefono:  '+39 349 551 9357',
  email:     'info@mca-design.it',
  indirizzo: 'Via Curcio 17, 70011 Alberobello (BA)',
  orari:     'Lun – Ven  8:00 – 13:00 / 14:00 – 17:00',
  piva:      'P.IVA IT03223160734',
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

L'hero è scuro: sul fondo c'è `assets/img/hero-cucina.jpg` (cucina con isola e
rivestimento in marmo), con logo, menu e testi in bianco.

Per cambiarla: sostituite il file oppure indicate un altro percorso nell'`<img>`
dentro `.hero-texture` in `index.html`. La foto va **scurita prima**, nel file:
il sito non ci mette sopra nessun velo, quindi se è chiara il logo bianco non si
legge. Riferimento: nelle zone dove cadono logo e testi la luminosità media deve
stare intorno a 60–70 su 255.

⚠️ Se sostituite il file **mantenendo lo stesso nome**, aggiungete `?v=2` (poi
`?v=3`…) al percorso nell'`<img>`, altrimenti i visitatori continuano a vedere
quella vecchia dalla cache.

### 3. Promozioni

L'array `PROMOZIONI` in `script.js` alimenta sia la sezione in home (le prime 3)
sia la pagina `promozioni.html` (tutte). Ogni voce ha immagine, titolo,
descrizione, prezzo e una nota facoltativa.

**Al momento l'array è vuoto**, quindi:
- la sezione Promozioni **resta in pagina** con titolo e testo introduttivo, ma
  al posto delle schede compare "Al momento non ci sono promozioni attive";
- sparisce solo il pulsante "Vedi tutte le promozioni", che porterebbe a una
  pagina con lo stesso messaggio;
- `promozioni.html` resta online e mostra lo stesso avviso;
- i numeri delle sezioni si rinumerano comunque da soli (01, 02, 03…), quindi
  se un domani si toglie una sezione la sequenza non salta.

Per riattivarla basta rimettere una o più voci dentro `PROMOZIONI`: sotto
l'array ci sono le tre promozioni di prova lasciate come esempio commentato.
Le immagini `assets/img/promo-*.jpg` sono ancora al loro posto.

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

## SEO — cosa completare prima di pubblicare

Il sito è già impostato per i motori di ricerca, ma **i dati dell'azienda sono
segnaposto**. Finché non li sostituite, Google indicizzerà informazioni false.

**Già inseriti:** dominio, telefono, WhatsApp, email, indirizzo del deposito,
provincia, regione, zone servite, orari di apertura e P.IVA.

**1. Coordinate esatte del deposito.** Ora ci sono quelle del centro di
Alberobello (40.784124, 17.237703), perché Via Curcio non risulta negli archivi
cartografici pubblici. Per la ricerca "vicino a me" conviene il punto preciso:
aprite Google Maps sul deposito, clic destro sul punto, copiate i due numeri e
sostituiteli nei meta `geo.position` / `ICBM` e nel campo `geo` dei dati
strutturati di `index.html`.

**2. Profili social.** In `index.html`, nel blocco *DATI AZIENDA*, i campi
`INSTAGRAM_DA_COMPLETARE` e `FACEBOOK_DA_COMPLETARE`, più gli stessi indirizzi
nel `CONFIG` di `script.js`.

**4. Profilo Google Business.** Questo non dipende dal sito: per comparire nelle
ricerche locali e nelle mappe serve un profilo su *Google Business Profile* con
nome, indirizzo e telefono **identici** a quelli del sito. È il fattore che pesa
di più per una ricerca tipo «marmista vicino a me».

**3. Dopo la pubblicazione.** Registrare il sito su Google Search Console e
inviare `sitemap.xml`.

## Anteprima dei link

Condividendo il sito su WhatsApp, Facebook, LinkedIn o X compare
`assets/img/social-preview.jpg`: la foto dell'hero ritagliata a 1200×630 con il
logo sopra.

Se cambiate la foto dell'hero, va rigenerata anche questa (stesso ritaglio) e va
alzato il contatore `?v=` nei meta `og:image` e `twitter:image` di `index.html` e
`promozioni.html`. **WhatsApp e Facebook tengono in cache l'anteprima a lungo**:
senza contatore continuerebbero a mostrare quella vecchia per settimane.

## Assistenti AI (GEO)

Tre cose fanno sì che ChatGPT, Claude, Perplexity e Gemini possano citare
l'azienda correttamente:

- `robots.txt` **consente esplicitamente** i loro crawler (GPTBot, OAI-SearchBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended). Per vietarne uno,
  cambiate `Allow: /` in `Disallow: /` sotto il suo nome.
- `llms.txt` è una scheda sintetica in testo semplice con recapiti, prodotti,
  materiali e servizi: **va tenuta allineata al `CONFIG`** quando cambiano i dati.
- I dati strutturati `LocalBusiness` e `FAQPage` nell'`<head>` di `index.html`
  sono la fonte che gli assistenti leggono per rispondere a domande come
  «chi lavora il marmo ad Alberobello».

## Domande frequenti

Stanno in `index.html`, in fondo alla sezione Contatti (blocco `.faq`), fatte con
`<details>`/`<summary>`: si aprono senza JavaScript e il testo resta sempre nel
codice, quindi i motori di ricerca lo leggono anche a risposta chiusa.

Le stesse domande sono ripetute nei dati strutturati `FAQPage` in fondo
all'`<head>`: **se modificate una domanda o una risposta, aggiornate entrambi i
punti**, altrimenti Google mostrerebbe un testo diverso da quello della pagina.

Sono cinque e **non contengono segnaposto**: si possono pubblicare così.

## Pagine legali

`privacy.html` e `cookie.html` sono collegate in fondo a ogni pagina.

Il sito **non usa cookie** e non carica nulla da server esterni (i caratteri sono
ospitati in `assets/fonts/`, non presi da Google), quindi **non serve il banner
dei cookie** e la cookie policy dice semplicemente questo.

⚠️ I testi sono una base solida ma **vanno fatti controllare da chi segue gli
adempimenti privacy dell'azienda** prima di pubblicare, e completati con i dati
reali del titolare del trattamento. Se in futuro aggiungete statistiche di visita,
una mappa incorporata o un modulo che invia dati a un server, **entrambe le pagine
vanno aggiornate** e con ogni probabilità servirà un banner di consenso.

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

Quel `?v=…` serve a non far vedere ai visitatori una versione vecchia del sito.
**Ogni volta che modificate `style.css` o `script.js`, alzate il numero**
in entrambi i file HTML. Senza, chi ha già visitato il sito continua a vedere
il vecchio foglio di stile finché non svuota la cache.

Lo stesso vale per le **immagini sostituite mantenendo lo stesso nome file**:
l'hero è scritto `hero-salone.jpg?v=2` proprio per questo. Se rigenerate quel
file, alzate anche lì il numero (oppure cambiate nome all'immagine).

## Note

- Il form contatti non richiede un server: compone il messaggio e lo apre
  su WhatsApp. In alternativa c'è il link `mailto:`.
- La mappa Google è disattivata (`CONFIG.mappa` vuoto): il blocco viene rimosso
  e i recapiti restano da soli, centrati. Per riattivarla basta scrivere
  l'indirizzo in `CONFIG.mappa`. Essendo un contenuto di Google, in quel caso
  valutate se serve un banner cookie.
- Header su una riga: marchio a sinistra, menu a destra. Su telefono il marchio
  va al centro, con l'hamburger sovrapposto a sinistra e il menu nel pannello a
  tutto schermo. Fra 821 e 1120 px il logo scende a 46 px, altrimenti le sette
  voci non entrerebbero accanto a un logo da 64.
- Nell'header non c'è nessun pulsante WhatsApp: resta il tondo flottante in
  basso a destra e i pulsanti nella sezione Contatti.
- Hero statico: foto, testi e bottoni **non si muovono col mouse**. L'unica
  animazione continua è il logo che, scorrendo, vola fino a sovrapporsi a quello
  della barra (`initLogoVolante` in `script.js`, senza librerie): a ogni frame
  calcola quanta strada manca e la percorre in proporzione allo scorrimento,
  atterrando al pixel. Restano due animazioni d'ingresso al caricamento (il logo
  che si raddrizza, testi e bottoni che salgono), disattivate da
  `prefers-reduced-motion`.
- Le immagini in `assets/img/` sono state rigenerate da `galleria/` con
  ridimensionamento e compressione (≈4,7 MB in totale invece di ~500 MB).
- Layout responsive con tre livelli: desktop, tablet (≤900 px) e mobile
  (≤760 px, con un ulteriore ritocco sotto i 400 px). Su mobile testi, spaziature,
  bottoni e immagini sono tutti riscalati; prodotti e galleria passano a due colonne.
- I campi del form restano a 16 px su mobile: è la soglia sotto la quale iOS
  zooma da solo quando si tocca un campo.
- Supporta `prefers-reduced-motion` ed è navigabile da tastiera
  (galleria e lightbox inclusi).

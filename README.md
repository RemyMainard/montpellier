# Montpellier — Site vitrine

Site one-page immersif dédié à Montpellier. Expérience visuelle éditoriale dark mode, construite autour de 4 sections : hero plein écran fixe, grille de spots, vibe locale et CTA.

---

## Stack

| Outil | Usage |
|---|---|
| React 18 | UI composants |
| Vite 5 | Build tool + dev server |
| Tailwind CSS 3 | Utility classes + design tokens |
| Framer Motion 11 | Animations fade-in, stagger, hover |
| Vercel | Déploiement |

---

## Démarrage

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

---

## Structure du projet

```
montpellier/
├── public/
│   └── images/              # Images statiques (optionnel — voir section Images)
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx  # US-01 — Hero plein écran fixe
│   │   ├── SpotsGrid.jsx    # US-02 — Grille 6 spots avec overlay hover
│   │   ├── VibeSection.jsx  # US-03 — Ambiance locale + profils + stats
│   │   └── CTASection.jsx   # US-04 — Bouton borderless doré bas de page
│   ├── data/
│   │   ├── spots.json       # Données des 6 spots incontournables
│   │   └── vibe.json        # Stats, profils résidents, prose ambiance
│   ├── App.jsx              # Composant racine — composition des 4 sections
│   ├── index.css            # Directives Tailwind + variables CSS globales
│   └── main.jsx             # Point d'entrée React
├── index.html               # Entrée HTML + import Google Fonts
├── tailwind.config.js       # Config Tailwind — palette + fonts + tokens
├── vite.config.js           # Config Vite standard React
└── package.json
```

---

## Design system

### Palette

| Token | Valeur | Usage |
|---|---|---|
| `primary` | `#0A5F7F` | Bleu méditerranéen |
| `secondary` | `#D4A574` | Doré ocre — accents, bordures CTA |
| `background` | `#0F1419` | Fond général charbon |
| `surface` | `#1A1F2E` | Fond cards et overlays |
| `accent` | `#C9A961` | Chiffres clés, liens hover |
| `text-primary` | `#F5F3F0` | Texte principal |
| `text-secondary` | `#B8B5B0` | Texte secondaire, sous-titres |

Les tokens sont disponibles en variables CSS (`--color-*`) dans `src/index.css` ET en classes Tailwind (`text-primary`, `bg-surface`…) via `tailwind.config.js`.

### Typographie

| Rôle | Font | Import |
|---|---|---|
| Heading (`font-heading`) | Playfair Display | Google Fonts via `index.html` |
| Body (`font-body`) | Inter | Google Fonts via `index.html` |

Poids utilisés : Playfair Display 400/700, Inter 400/500/600/700.

### Règles globales

- **Border-radius** : `0` — style éditorial sharp
- **Transition** : `all 0.3s ease-out` — `var(--transition-default)`
- **Spacing base** : 24px — `var(--spacing-base)`
- **Line-height** : `1.6` (body), `1.2` (heading)
- **Scroll** : `scroll-behavior: smooth` — navigation par ancres

---

## Sections

### `HeroSection` — US-01

Hero plein écran avec `background-attachment: fixed` (parallax natif). Heading responsive via `clamp(48px, 7vw, 72px)`. Contenu positionné dans le tiers inférieur de l'écran. Animations : fade-in 0.8s + slide-up au mount.

> ⚠️ `background-attachment: fixed` est désactivé sur iOS Safari — comportement attendu.

### `SpotsGrid` — US-02

Grille CSS `auto-fill minmax(300px, 1fr)` — 3 colonnes desktop, 2 colonnes tablette, 1 mobile. Cards 280px de hauteur avec image full-cover. Overlay `rgba(15,20,25,0.7)` + titre + description au hover. Titre toujours visible en idle via gradient bottom. Stagger `whileInView` avec délai de 0.3s par card.

### `VibeSection` — US-03

`borderLeft: 4px solid var(--color-secondary)` comme ancre visuelle dorée. Fond `rgba(26,31,46,0.8)` avec `backdrop-filter: blur(4px)`. Trois blocs : prose ambiance, stats chiffrées (accent ocre), profils résidents (emoji + nom + descriptor). Animations fade-in + slide au scroll.

### `CTASection` — US-04

Bouton borderless `2px solid var(--color-secondary)`, fond transparent → `var(--color-surface)` au hover (géré via `whileHover` Framer Motion). `scale: 1.02` au hover. Ancre `href="#hero"` pour revenir en haut via smooth-scroll.

---

## Données contenu

### `src/data/spots.json`

Tableau de 6 objets :

```json
{
  "id": 1,
  "title": "Place de la Comédie",
  "description": "Description courte du lieu.",
  "image": "https://..."
}
```

Pour remplacer une image : modifie le champ `image` avec une URL Unsplash ou un chemin local `"/images/nom.jpg"`.

### `src/data/vibe.json`

```json
{
  "headline": "Titre de la section",
  "description": "Prose ambiance (1-2 phrases).",
  "stats": [
    { "value": "300", "unit": "jours de soleil", "label": "par an" }
  ],
  "profiles": [
    { "id": 1, "name": "L'Étudiant", "emoji": "🎓", "descriptor": "..." }
  ]
}
```

---

## Images

Actuellement, les images sont servies depuis **Unsplash CDN**. Pour la production, il est recommandé de les remplacer par des photos locales afin d'éliminer la dépendance externe et d'optimiser le LCP :

1. Placer les images dans `public/images/`
2. Mettre à jour les chemins dans `src/data/spots.json` → `"/images/nom.jpg"`
3. Mettre à jour l'image hero dans `src/components/HeroSection.jsx` → `HERO_IMAGE`

---

## Déploiement Vercel

Le projet est configuré pour Vercel. Connecter le repo GitHub sur [vercel.com](https://vercel.com) — build automatique détecté (Vite). Aucune variable d'environnement requise (site 100% statique).

---

## Navigation

La navigation est gérée par ancres smooth-scroll — pas de router. Les ancres disponibles :

| Ancre | Section |
|---|---|
| `#hero` | Hero |
| `#spots` | Spots incontournables |
| `#vibe` | Vibe locale |
| `#cta` | CTA bas de page |

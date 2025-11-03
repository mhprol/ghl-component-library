# GHL Component Library

React component library for GoHighLevel custom code blocks - deployed via CloudFlare Pages CDN.

**Stack**: React 18 + TypeScript + Tailwind CSS + Vite  
**Hosting**: CloudFlare Pages (Free Tier)  
**CI/CD**: GitHub Actions (Auto-deploy on push)  
**CDN**: https://1416326d.ghl-component-library.pages.dev/

---

## Components

- **Header**: Responsive navigation with mobile menu
- **Hero**: Full-width hero section with dual CTAs
- **CTA**: Call-to-action blocks for conversions
- **Footer**: Multi-column footer with social links

See [COMPONENT-INDEX.md](./COMPONENT-INDEX.md) for full component documentation and usage examples.

---

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm (install: `npm install -g pnpm`)

### Local Development

```bash
# Clone repository
git clone https://github.com/mhprol/ghl-component-library.git
cd ghl-component-library

# Install dependencies
pnpm install

# Start dev server
pnpm run dev
# Visit http://localhost:5173

# Build for production
pnpm run build
# Output in dist/ directory
```

---

## GHL Integration

### One-Time Setup (Per GHL Site)

Add this to **GHL Site Settings → Tracking Code → Header**:

```html
<!-- Load React & ReactDOM -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Load Component Library -->
<link href="https://1416326d.ghl-component-library.pages.dev/style.css" rel="stylesheet">
<script src="https://1416326d.ghl-component-library.pages.dev/components.js"></script>
```

### Per-Component Usage (In Custom Code Block)

```html
<!-- 1. Create container -->
<div id="hero-section"></div>

<!-- 2. Initialize component -->
<script>
  window.GHLComponents.render('Hero', 'hero-section', {
    headline: "Your Headline Here",
    subheadline: "Supporting text here",
    ctaText: "Get Started",
    ctaLink: "/contact"
  });
</script>
```

See [COMPONENT-INDEX.md](./COMPONENT-INDEX.md) for all component props and examples.

---

## Development Workflow

### Creating New Component

```bash
# 1. Create branch
git checkout -b feat/new-component

# 2. Create component files
mkdir -p src/components/NewComponent
touch src/components/NewComponent/{NewComponent.tsx,NewComponent.types.ts,index.ts}

# 3. Write component code
# - NewComponent.tsx (React component)
# - NewComponent.types.ts (TypeScript interfaces)
# - index.ts (barrel export)

# 4. Export from barrel
echo "export * from './NewComponent'" >> src/components/index.ts

# 5. Register in main.tsx
# Add to window.GHLComponents

# 6. Test locally
pnpm run dev

# 7. Commit and push
git add .
git commit -m "feat: add NewComponent"
git push origin feat/new-component

# 8. Create and merge PR
# CloudFlare auto-deploys on merge to main
```

### Updating Existing Component

```bash
# 1. Branch from main
git checkout main && git pull
git checkout -b fix/component-issue

# 2. Edit component
# Update Component.tsx or Component.types.ts

# 3. Test locally
pnpm run dev

# 4. Commit, push, PR, merge
# CloudFlare auto-deploys
```

---

## Architecture

### Build Output

Vite compiles to:
- `dist/components.js` - UMD bundle (React externalized)
- `dist/style.css` - Compiled Tailwind CSS

### Global API

Components are exposed on `window.GHLComponents`:

```javascript
window.GHLComponents = {
  Header: [React Component],
  Hero: [React Component],
  CTA: [React Component],
  Footer: [React Component],
  render: function(component, elementId, props)
}
```

### Library Mode

Configured in `vite.config.ts`:
- Format: UMD (universal module definition)
- External: React, ReactDOM (loaded separately)
- Output: Single `components.js` file
- Global name: `GHLComponents`

---

## Deployment

### CloudFlare Pages Setup

**Initial Setup** (One-Time):
1. CloudFlare Dashboard → Pages → Create Project
2. Connect to GitHub → Select `ghl-component-library`
3. Build settings:
   - Build command: `pnpm run build`
   - Output directory: `dist`
4. Deploy

**Auto-Deployment**:
- Every push to `main` triggers GitHub Actions
- Workflow builds project and deploys to CloudFlare
- Components available at: https://1416326d.ghl-component-library.pages.dev/

**GitHub Secrets Required**:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

See CloudFlare dashboard for API token and account ID.

---

## Project Structure

```
ghl-component-library/
├── src/
│   ├── components/           # React components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.types.ts
│   │   │   └── index.ts
│   │   ├── Hero/
│   │   ├── CTA/
│   │   ├── Footer/
│   │   └── index.ts          # Barrel exports
│   ├── lib/
│   │   └── utils.ts          # cn() helper
│   ├── styles/
│   │   └── index.css         # Tailwind imports
│   └── main.tsx              # Global registration
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD
├── dist/                     # Build output (git-ignored)
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml            # pnpm lock file
├── COMPONENT-INDEX.md        # Component docs
└── README.md
```

---

## Tech Stack

- **React 18**: UI framework (stable)
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **Vite**: Build tool
- **pnpm**: Package manager (solves npm Rollup bug on Windows)
- **CloudFlare Pages**: CDN hosting (free)
- **GitHub Actions**: CI/CD

---

## Costs

**CloudFlare Pages Free Tier**:
- ✅ Unlimited sites
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds/month
- ✅ Custom domains

**Current Usage**: ~20-50 builds/month  
**Cost**: $0/month

---

## Troubleshooting

### Component Not Rendering
1. Check browser console for errors
2. Verify React/ReactDOM loaded (Network tab)
3. Verify component library loaded
4. Verify container div exists
5. Verify component name matches registration

### Styles Not Applying
1. Check if `style.css` loaded (Network tab)
2. Check for CSS conflicts with GHL defaults
3. Use browser inspector to verify classes

### Build Failures
1. Check GitHub Actions logs
2. Run `pnpm run build` locally to reproduce
3. Common issues: TypeScript errors, missing deps

### npm Rollup Bug (Windows)
If you encounter Rollup native binary errors with npm:
- **Solution**: Use pnpm instead (`npm install -g pnpm`)
- **Why**: npm has a bug with optional dependencies on Windows
- **Status**: pnpm is locked in package.json as the official package manager

---

## Contributing

This is a private library for Caiçara Marketing Digital internal use.

**Maintainer**: Matheus Prol  
**Organization**: Caiçara Marketing Digital  
**Purpose**: GHL-based web development standardization

---

## License

Private - Internal use only

---

## Version History

### v1.0.0 (2025-11-03)
- Initial release
- 4 core components (Header, Hero, CTA, Footer)
- React 18 + TypeScript + Tailwind CSS
- pnpm dependency management (solves npm Rollup bug)
- CloudFlare Pages deployment: https://1416326d.ghl-component-library.pages.dev/
- GitHub Actions CI/CD
- Comprehensive documentation

---

**Need Help?** Check [COMPONENT-INDEX.md](./COMPONENT-INDEX.md) for component usage or TECHNICAL-ARCHITECTURE.md in the parent project for full architecture details.

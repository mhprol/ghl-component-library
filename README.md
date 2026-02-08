# GHL Component Library

A high-performance React component library designed to enhance GoHighLevel (GHL) websites with custom, interactive, and responsive UI elements.

**Current Version**: v1.0.0
**Status**: Active Development
**Hosting**: [CloudFlare Pages](https://1416326d.ghl-component-library.pages.dev/)

---

## 🎯 Project Overview

This library provides a suite of pre-built React components (Headers, Heroes, CTAs, Footers) that can be easily integrated into any GoHighLevel site using custom code blocks. It solves the limitation of GHL's native builder by offering fully customizable, code-based components that maintain a consistent design system.

**Who is this for?**
- Developers building custom GHL sites who need more flexibility than the drag-and-drop builder offers.
- Agencies looking to standardize their web development workflow on GHL.

---

## ✨ Features

- **React 18**: Leveraging the latest React features for optimal performance.
- **TypeScript**: Strictly typed components for robust and error-free development.
- **Tailwind CSS**: Utility-first styling for rapid, responsive design.
- **Vite**: Ultra-fast build tool bundling everything into a single UMD file.
- **CloudFlare Pages**: Blazing fast global CDN delivery.
- **Zero-Config GHL Integration**: Simply copy-paste script tags to get started.

---

## 🚀 Installation & Local Development

This project uses **pnpm** for package management to ensure consistent dependency resolution (and avoid Windows-specific npm bugs).

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mhprol/ghl-component-library.git
   cd ghl-component-library
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view the development playground.

4. **Build for production**
   ```bash
   pnpm run build
   ```
   This generates `dist/components.js` and `dist/style.css`.

---

## 🔌 GHL Integration

To use these components on a GoHighLevel site, add the following code to the global site settings.

**Location**: GHL Site Settings → Tracking Code → Header Code

```html
<!-- 1. Load React & ReactDOM (Required Dependencies) -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- 2. Load Component Library (Styles & Script) -->
<link href="https://1416326d.ghl-component-library.pages.dev/style.css" rel="stylesheet">
<script src="https://1416326d.ghl-component-library.pages.dev/components.js"></script>
```

---

## 💻 Usage

Once integrated, you can render any component using a Custom Code element in the GHL page builder.

### Example: Adding a Hero Section

1. **Add a Custom Code element** where you want the component to appear.
2. **Paste the following code**:

```html
<!-- Container with a unique ID -->
<div id="hero-section"></div>

<!-- Render Script -->
<script>
  window.GHLComponents.render('Hero', 'hero-section', {
    headline: "Transform Your Business with AI",
    subheadline: "Automate your workflow and scale faster than ever before.",
    ctaText: "Get Started Free",
    ctaLink: "/signup",
    backgroundImage: "https://source.unsplash.com/random/1920x1080/?business"
  });
</script>
```

---

## 📚 Component Catalog

| Component | Description | Key Props |
| :--- | :--- | :--- |
| **[Header](./COMPONENT-INDEX.md#header)** | Responsive navigation bar with mobile menu support. | `logo`, `menuItems`, `ctaText`, `ctaLink` |
| **[Hero](./COMPONENT-INDEX.md#hero)** | Full-width hero section with headline, subhead, and dual CTAs. | `headline`, `subheadline`, `backgroundImage`, `ctaText` |
| **[CTA](./COMPONENT-INDEX.md#cta)** | High-conversion call-to-action block with optional icon. | `headline`, `description`, `ctaText`, `icon` |
| **[Footer](./COMPONENT-INDEX.md#footer)** | Multi-column footer with social links and copyright. | `siteName`, `columns`, `socialLinks`, `copyrightText` |

For detailed documentation on props and more examples, see **[COMPONENT-INDEX.md](./COMPONENT-INDEX.md)**.

---

## 🤝 Contributing

We welcome contributions! This project is maintained internally by Caiçara Marketing Digital, but improvements are always welcome.

### Workflow
1. **Fork & Clone**: Clone the repo locally.
2. **Branch**: Create a feature branch (`git checkout -b feat/amazing-feature`).
3. **Develop**:
   - Create new components in `src/components/<ComponentName>`.
   - Ensure you export them in `src/components/index.ts`.
   - Add types in `<ComponentName>.types.ts`.
4. **Test**: Run `pnpm run dev` to test your changes.
5. **Commit**: Use conventional commit messages (e.g., `feat: add Testimonial component`).
6. **Push & PR**: Push to your branch and open a Pull Request.

### Code Style
- Use **TypeScript** for all components.
- Use **Tailwind CSS** for styling (avoid custom CSS files if possible).
- Ensure components are responsive.

---

## 📄 License

**Private - Internal Use Only**

Property of **Caiçara Marketing Digital**. Unauthorized reproduction or distribution is prohibited.

---

## 🔧 Troubleshooting

### Component Not Rendering?
1. Check the browser console (F12) for errors.
2. Ensure `React` and `ReactDOM` are loaded **before** the component library.
3. Verify the `id` in your HTML matches the one passed to `render()`.

### Styles Not Applying?
1. Check if `style.css` is loaded in the Network tab.
2. Ensure no GHL native styles are overriding the component classes (use `!important` in Tailwind config if necessary, or specific selectors).

### Build Errors?
- If you see Rollup errors on Windows, ensure you are using **pnpm** instead of npm.

---
*Maintained by Matheus Prol*

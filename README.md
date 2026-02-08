# GHL Component Library

[**AI Manual**](./AI-MANUAL.md) | [**Repository**](https://github.com/mhprol/ghl-component-library) | [**Contributing**](#-contributing) | [**License**](#-license)

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

## 🚀 Installation & Setup

This project assumes **Node.js 18+**. We recommend using **pnpm** for dependency management, but `npm` and `yarn` are also supported.

### Prerequisites

- Node.js 18 or higher
- Package Manager: `pnpm` (recommended), `npm`, or `yarn`

### Quick Start Guide

1.  **Clone the repository**
    ```bash
    git clone https://github.com/mhprol/ghl-component-library.git
    cd ghl-component-library
    ```

2.  **Install dependencies**

    Using pnpm (recommended):
    ```bash
    pnpm install
    ```

    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

3.  **Start the development server**
    ```bash
    pnpm dev
    # or npm run dev
    # or yarn dev
    ```

    The playground will be available at [http://localhost:5173](http://localhost:5173).

4.  **Build for production**
    ```bash
    pnpm build
    ```
    This generates the `dist/` folder containing `components.js` (UMD bundle) and `style.css`.

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

## 🔌 Integration in React Projects

While this library is primarily distributed as a UMD build for GHL, you can easily use these components in standard React projects (Next.js, Vite, Create React App) by copying the source code.

1.  **Copy Components**: Copy the desired component folder (e.g., `src/components/Header`) to your project.
2.  **Install Dependencies**: Ensure you have the required peer dependencies installed:
    ```bash
    npm install lucide-react clsx tailwind-merge
    ```
3.  **Import & Use**:
    ```tsx
    import { Header } from './components/Header';

    export default function App() {
      return (
        <Header
          logo="/logo.png"
          ctaText="Get Started"
          ctaLink="/signup"
        />
      );
    }
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

| Component | Purpose | Props Summary | Example Usage |
| :--- | :--- | :--- | :--- |
| **[Header](./COMPONENT-INDEX.md#header)** | Primary site navigation with mobile menu & CTA. | `logo`, `menuItems`, `ctaText`, `ctaLink`, `className` | [View Usage](./COMPONENT-INDEX.md#header) |
| **[Hero](./COMPONENT-INDEX.md#hero)** | High-impact intro section with dual CTAs & background support. | `headline`, `subheadline`, `backgroundImage`, `ctaText`, `secondaryCtaText` | [View Usage](./COMPONENT-INDEX.md#hero) |
| **[CTA](./COMPONENT-INDEX.md#cta)** | Dedicated conversion block for mid-page calls to action. | `headline`, `description`, `ctaText`, `ctaLink`, `icon`, `backgroundColor` | [View Usage](./COMPONENT-INDEX.md#cta) |
| **[Footer](./COMPONENT-INDEX.md#footer)** | Comprehensive footer with links, social icons, and copyright. | `siteName`, `columns`, `socialLinks`, `copyrightText`, `backgroundColor` | [View Usage](./COMPONENT-INDEX.md#footer) |

For detailed documentation on props and more examples, see **[COMPONENT-INDEX.md](./COMPONENT-INDEX.md)**.

---

## 🎨 Theming & Customization

This library is built with **Tailwind CSS**, making it highly customizable.

### Customizing via Props
Most components accept a `className` prop, allowing you to append any valid Tailwind utility class.

```javascript
window.GHLComponents.render('Hero', 'hero-id', {
  // ...other props
  className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
});
```

Some components also expose specific style props like `backgroundColor` for convenience.

### Overriding Global Styles
The library's styles are scoped to avoid conflicts, but you can override them in your GHL "Custom CSS" settings. Ensure your styles load *after* the library's `style.css` or use higher specificity.

```css
/* Example: Force a specific font on all headers */
.ghl-component-header {
  font-family: 'Open Sans', sans-serif !important;
}
```

---

## 💡 Common Use Cases

Here are some frequent implementation patterns:

### Minimal Header with CTA
A simple navigation bar with a logo and a call-to-action button.

```javascript
window.GHLComponents.render('Header', 'header-container', {
  logo: "https://your-site.com/logo.png",
  menuItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ],
  ctaText: "Get a Quote",
  ctaLink: "/quote"
});
```

### High-Conversion CTA Section
A focused block to drive user action, often placed at the bottom of a page.

```javascript
window.GHLComponents.render('CTA', 'cta-container', {
  headline: "Ready to Scale Your Business?",
  description: "Join over 500 agencies using our tools today.",
  ctaText: "Start Your Free Trial",
  ctaLink: "/signup",
  backgroundColor: "bg-indigo-600"
});
```

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

### Component Not Rendering
- **Check Console**: Open F12 developer tools and look for red errors in the Console tab.
- **Check Dependencies**: Ensure `React` and `ReactDOM` are loaded **before** `components.js`.
- **Verify ID**: The element ID passed to `window.GHLComponents.render('...', 'my-id', ...)` must match `<div id="my-id"></div>`.

### Styles Not Applying
- **Check CSS Load**: Verify `style.css` is loaded in the Network tab.
- **Specificity Issues**: GHL's native CSS might be overriding styles. Use the `!important` modifier in your `className` prop if necessary (e.g., `!bg-blue-500`).
- **Cache**: Clear your browser cache or GHL's cache if updates aren't reflecting.

### Icons Not Showing
- **Valid Names**: Ensure you are using valid Lucide icon names (PascalCase, e.g., `ArrowRight`, not `arrow-right`).
- **React Node**: If passing a custom element, ensure it's a valid React node.

### Build Errors
- **Windows Users**: If you encounter Rollup errors, please use **pnpm** as recommended.
- **Node Version**: Ensure you are running Node 18+.

---
*Maintained by Matheus Prol*

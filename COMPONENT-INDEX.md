# Component Index

**Version**: v1.0.0  
**Last Updated**: 2025-11-03  
**Total Components**: 4

---

## Global Setup (One-Time Configuration)

**IMPORTANT**: Before using any components, add this code to your GHL site's global header:

**Location**: GHL Site Settings → Tracking Code → Header Code

```html
<!-- Load React & ReactDOM from CDN -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Load Component Library (UPDATE THIS URL after CloudFlare deployment) -->
<link href="https://YOUR-PROJECT.pages.dev/style.css" rel="stylesheet">
<script src="https://YOUR-PROJECT.pages.dev/components.js"></script>
```

**Replace `YOUR-PROJECT.pages.dev`** with your actual CloudFlare Pages URL after deployment.

**This loads once globally** - all pages inherit these scripts. After this setup, you can use any component on any page using custom code blocks.

---

## Header

**Description**: Responsive navigation header with logo, menu items, and CTA button. Includes mobile hamburger menu.

**Props**:
- `logo` (string, optional): URL to logo image
- `logoAlt` (string, optional): Alt text for logo (default: "Logo")
- `siteName` (string, optional): Site name displayed if no logo (default: "Brand")
- `menuItems` (array, optional): Navigation items `[{ label, href }]`
- `ctaText` (string, optional): CTA button text (default: "Get Started")
- `ctaLink` (string, optional): CTA button link (default: "#")
- `className` (string, optional): Additional CSS classes

**GHL Integration**:
```html
<div id="header"></div>
<script>
  window.GHLComponents.render('Header', 'header', {
    siteName: "Caiçara Marketing",
    menuItems: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    ctaText: "Get Quote",
    ctaLink: "/contact"
  });
</script>
```

---

## Hero

**Description**: Full-width hero section with headline, subheadline, and CTA buttons. Supports background image or solid color.

**Props**:
- `headline` (string, required): Main headline text
- `subheadline` (string, optional): Supporting text below headline
- `ctaText` (string, optional): Primary CTA text (default: "Get Started")
- `ctaLink` (string, optional): Primary CTA link (default: "#")
- `secondaryCtaText` (string, optional): Secondary CTA text
- `secondaryCtaLink` (string, optional): Secondary CTA link
- `backgroundImage` (string, optional): URL to background image
- `backgroundColor` (string, optional): Tailwind color class (default: "bg-gray-900")
- `className` (string, optional): Additional CSS classes

**GHL Integration**:
```html
<div id="hero"></div>
<script>
  window.GHLComponents.render('Hero', 'hero', {
    headline: "Transform Your Business with AI-Powered Marketing",
    subheadline: "Websites that work as hard as you do. Starting at R$1,500/month.",
    ctaText: "Start Free Trial",
    ctaLink: "/trial",
    secondaryCtaText: "See How It Works",
    secondaryCtaLink: "/demo",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  });
</script>
```

---

## CTA

**Description**: Call-to-action section with headline, description, and button. Perfect for mid-page conversion points.

**Props**:
- `headline` (string, required): CTA headline
- `description` (string, optional): Supporting description text
- `ctaText` (string, required): Button text
- `ctaLink` (string, required): Button link
- `backgroundColor` (string, optional): Tailwind color class (default: "bg-blue-600")
- `icon` (ReactNode, optional): Icon element to display above headline
- `className` (string, optional): Additional CSS classes

**GHL Integration**:
```html
<div id="cta"></div>
<script>
  window.GHLComponents.render('CTA', 'cta', {
    headline: "Ready to Get Started?",
    description: "Join hundreds of businesses already growing with Caiçara Marketing.",
    ctaText: "Schedule Consultation",
    ctaLink: "/schedule",
    backgroundColor: "bg-green-600"
  });
</script>
```

---

## Footer

**Description**: Multi-column footer with logo, link columns, social links, and copyright.

**Props**:
- `logo` (string, optional): URL to logo image
- `logoAlt` (string, optional): Alt text for logo (default: "Logo")
- `siteName` (string, optional): Site name (default: "Brand")
- `tagline` (string, optional): Tagline below logo
- `columns` (array, optional): Link columns `[{ title, links: [{ label, href }] }]`
- `socialLinks` (array, optional): Social links `[{ platform, href, icon }]`
- `copyrightText` (string, optional): Custom copyright (auto-generated if omitted)
- `backgroundColor` (string, optional): Tailwind color class (default: "bg-gray-900")
- `className` (string, optional): Additional CSS classes

**GHL Integration**:
```html
<div id="footer"></div>
<script>
  window.GHLComponents.render('Footer', 'footer', {
    siteName: "Caiçara Marketing",
    tagline: "AI-Powered Digital Marketing Solutions",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Website Development", href: "/services/web" },
          { label: "Google Ads", href: "/services/ads" },
          { label: "SEO", href: "/services/seo" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact", href: "/contact" }
        ]
      }
    ],
    copyrightText: "© 2025 Caiçara Marketing Digital. Todos os direitos reservados."
  });
</script>
```

---

## Version History

### v1.0.0 (2025-11-03)
- Initial release
- Header component with mobile menu
- Hero component with dual CTAs
- CTA component with icon support
- Footer component with multi-column layout
- React 18 + TypeScript + Tailwind CSS
- pnpm dependency management
- CloudFlare Pages deployment ready

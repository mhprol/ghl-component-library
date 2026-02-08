# AI Manual for GHL Component Library

This document provides a high-level overview of the `ghl-component-library` project for AI agents and developers.

## Project Overview

**Name**: GHL Component Library
**Purpose**: A collection of high-performance React components designed to enhance GoHighLevel (GHL) websites.
**Key Features**:
-   **React 18**: Uses the latest React features.
-   **TypeScript**: Strongly typed for reliability.
-   **Tailwind CSS**: Utility-first styling.
-   **Vite**: Fast build tool for UMD output.
-   **UMD Build**: Bundles components into a single file (`dist/components.js`) for easy integration via script tags.

## Directory Structure

-   `src/components/`: Contains the React components (Header, Hero, CTA, Footer). Each component has its own directory with implementation and types.
-   `src/styles/`: Global styles and Tailwind configuration.
-   `src/main.tsx`: Entry point for the library. Exposes components to `window.GHLComponents`.
-   `public/`: Static assets.
-   `dist/`: Build artifacts (generated).

## Key Components

-   **Header**: Responsive navigation bar.
-   **Hero**: Full-width hero section.
-   **CTA**: Call-to-action block.
-   **Footer**: Multi-column footer.

## Build Process

-   `pnpm install`: Install dependencies.
-   `pnpm run dev`: Start development server.
-   `pnpm run build`: Build for production (UMD format).

## Integration

Components are designed to be used in GHL custom code blocks.
Example:
```html
<script src="path/to/components.js"></script>
<script>
  window.GHLComponents.render('Hero', 'element-id', { ...props });
</script>
```

## Contributing

-   Follow TypeScript best practices.
-   Use Tailwind CSS for styling.
-   Ensure components are responsive.

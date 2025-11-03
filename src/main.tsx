import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header, Hero, CTA, Footer } from './components'
import './styles/index.css'

// Global type declarations for GHL integration
declare global {
  interface Window {
    GHLComponents: {
      Header: typeof Header
      Hero: typeof Hero
      CTA: typeof CTA
      Footer: typeof Footer
      render: (component: string, elementId: string, props: any) => void
    }
  }
}

// Register components on window object
window.GHLComponents = {
  Header,
  Hero,
  CTA,
  Footer,
  render: (component: string, elementId: string, props: any) => {
    const Component = window.GHLComponents[component as keyof typeof window.GHLComponents]
    if (!Component || typeof Component !== 'function') {
      console.error(`Component ${component} not found or is not a valid React component`)
      return
    }
    const element = document.getElementById(elementId)
    if (!element) {
      console.error(`Element with id "${elementId}" not found`)
      return
    }
    const root = ReactDOM.createRoot(element)
    root.render(React.createElement(Component as any, props))
  },
}

// Log successful initialization
console.log('GHL Components Library loaded successfully')
console.log('Available components:', Object.keys(window.GHLComponents).filter(k => k !== 'render'))

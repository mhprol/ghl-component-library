import React from 'react'
import { cn } from '@/lib/utils'
import type { FooterProps } from './Footer.types'

export const Footer: React.FC<FooterProps> = ({
  logo,
  logoAlt = 'Logo',
  siteName = 'Brand',
  tagline,
  columns = [],
  socialLinks = [],
  copyrightText,
  backgroundColor = 'bg-gray-900',
  className,
}) => {
  const currentYear = new Date().getFullYear()
  const defaultCopyright = `© ${currentYear} ${siteName}. All rights reserved.`

  return (
    <footer className={cn(backgroundColor, 'text-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {logo ? (
              <img src={logo} alt={logoAlt} className="h-8 w-auto mb-4" />
            ) : (
              <h3 className="text-2xl font-bold mb-4">{siteName}</h3>
            )}
            {tagline && <p className="text-gray-400">{tagline}</p>}
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {copyrightText || defaultCopyright}
          </p>
          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

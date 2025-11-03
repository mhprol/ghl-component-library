import React from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { HeaderProps } from './Header.types'

export const Header: React.FC<HeaderProps> = ({
  logo,
  logoAlt = 'Logo',
  siteName = 'Brand',
  menuItems = [],
  ctaText = 'Get Started',
  ctaLink = '#',
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className={cn('bg-white shadow-sm', className)}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {logo ? (
              <img src={logo} alt={logoAlt} className="h-8 w-auto" />
            ) : (
              <span className="text-2xl font-bold text-gray-900">{siteName}</span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-gray-900 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaLink}
              className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg text-center transition-colors"
            >
              {ctaText}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

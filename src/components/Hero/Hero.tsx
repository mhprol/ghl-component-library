import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { HeroProps } from './Hero.types'

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctaText = 'Get Started',
  ctaLink = '#',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  backgroundColor = 'bg-gray-900',
  className,
}) => {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center bg-cover bg-center',
        !backgroundImage && backgroundColor,
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Overlay */}
      {backgroundImage && <div className="absolute inset-0 bg-black/50" />}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </a>
          {secondaryCtaText && secondaryCtaLink && (
            <a
              href={secondaryCtaLink}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-white/20"
            >
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

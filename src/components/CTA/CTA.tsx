import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CTAProps } from './CTA.types'

export const CTA: React.FC<CTAProps> = ({
  headline,
  description,
  ctaText,
  ctaLink,
  backgroundColor = 'bg-blue-600',
  icon,
  className,
}) => {
  return (
    <section className={cn('py-16 px-4', backgroundColor, className)}>
      <div className="max-w-4xl mx-auto text-center">
        {icon && <div className="flex justify-center mb-6">{icon}</div>}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {headline}
        </h2>
        {description && (
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <a
          href={ctaLink}
          className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

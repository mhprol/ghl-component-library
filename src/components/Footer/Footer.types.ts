export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: React.ReactNode
}

export interface FooterProps {
  logo?: string
  logoAlt?: string
  siteName?: string
  tagline?: string
  columns?: FooterColumn[]
  socialLinks?: SocialLink[]
  copyrightText?: string
  backgroundColor?: string
  className?: string
}

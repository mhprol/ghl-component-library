import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add brand colors here as needed
      },
    },
  },
  plugins: [],
} satisfies Config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Margot-Inspired Palette
        'charcoal': '#1a1a1a',
        'charcoal-light': '#2a2a2a',
        'charcoal-lighter': '#333333',
        'gold': '#c9a961',
        'gold-light': '#FFD700',
        'gold-bright': '#FFF700',
        'gold-dark': '#b8995a',
        'cream': '#f5f3f0',
        'cream-dark': '#e8e4de',
        'warm-white': '#fafaf9',
        'warm-gray': '#4a4a4a',
        'warm-gray-light': '#666666',
        'soft-black': '#0d0d0d',
        'elegant-beige': '#f0ede8',
        
        // Legacy colors for backward compatibility
        'clay-red': '#933f2f',
        'muted-ivory': '#f9f3ea',
        'antique-gold': '#d4af37',
        'text-dark': '#2e2e2e',
        'text-light': '#f8f8f8',
        'background-deep': '#1e1e1e',
        'background-brown': '#3b2c26',
        'maroon': '#8B1A1A',
        'text-gray': '#3E3E3E'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'elegant': ['Cormorant Garamond', 'Playfair Display', 'serif']
      },
      letterSpacing: {
        'relaxed': '0.025em',
        'spacious': '0.05em',
        'refined': '0.015em',
        'elegant': '0.1em'
      },
      lineHeight: {
        'calm': '1.7',
        'spacious': '1.8',
        'refined': '1.6',
        'elegant': '1.5'
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        'display': '5.5rem'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 1s ease-out',
        'fade-in': 'fadeIn 1.5s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          from: { boxShadow: '0 0 20px #D4AF37' },
          to: { boxShadow: '0 0 30px #D4AF37, 0 0 40px #D4AF37' }
        },
        slideIn: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
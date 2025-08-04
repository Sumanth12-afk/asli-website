/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // New Asli Brand Colors
        'clay-red': '#933f2f',
        'muted-ivory': '#f9f3ea', 
        'antique-gold': '#d4af37',
        'text-dark': '#2e2e2e',
        'text-light': '#f8f8f8',
        'background-deep': '#1e1e1e',
        'background-brown': '#3b2c26',
        
        // Legacy colors (keeping for backward compatibility)
        'cream': '#FAF4EC',
        'gold': '#D4AF37',
        'maroon': '#8B1A1A',
        'text-gray': '#3E3E3E',
        'warm-white': '#FFF8F0'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'Inter', 'sans-serif']
      },
      letterSpacing: {
        'relaxed': '0.025em',
        'spacious': '0.05em'
      },
      lineHeight: {
        'calm': '1.7',
        'spacious': '1.8'
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
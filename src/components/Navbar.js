import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavItems = [
    { id: 'ambience', label: 'Gallery' },
    { id: 'food', label: 'Cuisine' },
  ];

  const rightNavItems = [
    { id: 'menu', label: 'Menu' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${isScrolled
      ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-white/5'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Left Nav Items - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {leftNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${isScrolled
                  ? 'text-warm-white hover:text-gold'
                  : 'text-warm-white hover:text-gold'
                  } ${activeSection === item.id ? 'text-gold' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Left */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-warm-white' : 'text-warm-white'
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Centered Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="cursor-pointer flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
          >
            <h1 className={`font-elegant text-2xl lg:text-3xl tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-gold' : 'text-warm-white'
              }`}>
              ASLI
            </h1>
          </div>

          {/* Right Nav Items - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {rightNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${isScrolled
                  ? 'text-warm-white hover:text-gold'
                  : 'text-warm-white hover:text-gold'
                  } ${activeSection === item.id ? 'text-gold' : ''}`}
              >
                {item.label}
              </button>
            ))}

            {/* Reserve Button */}
            <button
              onClick={() => scrollToSection('reservations')}
              className={`text-xs uppercase tracking-[0.15em] px-6 py-2.5 border transition-all duration-300 ${isScrolled
                ? 'border-gold text-gold hover:bg-gold hover:text-charcoal'
                : 'border-warm-white/80 text-warm-white hover:border-gold hover:text-gold'
                }`}
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Reserve Button */}
          <button
            onClick={() => scrollToSection('reservations')}
            className={`lg:hidden text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-all duration-300 ${isScrolled
              ? 'border-gold text-gold'
              : 'border-warm-white/80 text-warm-white'
              }`}
          >
            Reserve
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute left-0 right-0 top-full transition-all duration-300 ${isScrolled ? 'bg-charcoal/98' : 'bg-charcoal/98'
            } backdrop-blur-md border-t ${isScrolled ? 'border-white/10' : 'border-white/10'}`}>
            <div className="px-6 py-8 space-y-1">
              {[...leftNavItems, ...rightNavItems, { id: 'reservations', label: 'Reservations' }].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 ${isScrolled
                    ? 'text-warm-white hover:text-gold'
                    : 'text-warm-white hover:text-gold'
                    } ${activeSection === item.id ? 'text-gold border-l-2 border-gold pl-4' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
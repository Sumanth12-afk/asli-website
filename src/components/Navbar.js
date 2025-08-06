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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ambience', label: 'Gallery' },
    { id: 'food', label: 'Cuisine' },
    { id: 'menu', label: 'Menu' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`sophisticated-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
      isScrolled ? 'bg-charcoal/98 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="text-xl sm:text-2xl font-elegant font-light">
              <span className="font-elegant text-gold">
                Asli Indian
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`sophisticated-nav-link ${
                  activeSection === item.id ? 'active text-gold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Reserve Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('reservations')}
              className="sophisticated-btn-secondary text-xs px-8 py-3"
            >
              Reserve
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-warm-white hover:text-gold transition-colors duration-300 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-4 px-6 transition-all duration-300 font-medium tracking-refined text-sm uppercase ${
                    activeSection === item.id
                      ? 'text-gold border-l-2 border-gold bg-gold/10'
                      : 'text-warm-white hover:text-gold hover:border-l-2 hover:border-gold hover:bg-gold/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gold/20">
                <button
                  onClick={() => {
                    scrollToSection('reservations');
                    setIsMobileMenuOpen(false);
                  }}
                  className="sophisticated-btn-primary w-full text-xs"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
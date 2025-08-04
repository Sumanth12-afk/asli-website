import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ambience', label: 'Ambience' },
    { id: 'food', label: 'Food' },
    { id: 'menu', label: 'Menu' },
    { id: 'reservations', label: 'Reservations' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
      isScrolled 
        ? 'bg-clay-red/95 backdrop-blur-md shadow-2xl asli-gold-glow' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="text-xl sm:text-2xl font-serif font-bold">
              <span className="bg-gradient-to-r from-antique-gold to-yellow-400 bg-clip-text text-transparent asli-text-glow">
                Asli Indian
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-relaxed transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-antique-gold'
                      : 'text-text-light hover:text-antique-gold'
                  }`}
                >
                  {item.label}
                  
                  {/* Active indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-antique-gold to-yellow-400 transform origin-left transition-transform duration-300 ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                  
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 bg-antique-gold/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-text-light hover:text-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold transition-colors duration-300"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-clay-red/90 backdrop-blur-md rounded-b-lg border-t border-antique-gold/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium tracking-relaxed transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? 'text-antique-gold bg-antique-gold/10 border-l-4 border-antique-gold'
                    : 'text-text-light hover:text-antique-gold hover:bg-antique-gold/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
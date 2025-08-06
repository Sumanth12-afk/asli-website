import React, { useState, useEffect, useRef } from 'react';

const HeroSection = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Curated sophisticated background images
  const heroImages = [
    '/images/ambience01.jpg',
    '/images/ambience02.jpg', 
    '/images/ambience03.jpg',
    '/images/ambience04.jpg'
  ];

  // Subtle mouse parallax (very minimal)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Elegant entrance timing
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Slow, elegant image transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 12000); // 12 seconds for sophisticated pacing
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-charcoal"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            <img
              src={image}
              alt="Asli Indian Restaurant"
              className="w-full h-full object-cover"
              style={{
                filter: 'contrast(1.1) brightness(0.8) saturate(0.9)',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
        
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle corner accents */}
        <div className="absolute top-12 left-12 w-16 h-px bg-gold/30" />
        <div className="absolute top-12 left-12 w-px h-16 bg-gold/30" />
        <div className="absolute top-12 right-12 w-16 h-px bg-gold/30" />
        <div className="absolute top-12 right-12 w-px h-16 bg-gold/30" />
        <div className="absolute bottom-12 left-12 w-16 h-px bg-gold/30" />
        <div className="absolute bottom-12 left-12 w-px h-16 bg-gold/30" />
        <div className="absolute bottom-12 right-12 w-16 h-px bg-gold/30" />
        <div className="absolute bottom-12 right-12 w-px h-16 bg-gold/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-8">
          
          {/* Refined Logo */}
          <div 
            className={`transform transition-all duration-2000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="font-elegant text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-12 tracking-[0.15em] leading-none text-gold"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                }}>
                ASLI
            </h1>
          </div>

          {/* Elegant separator */}
          <div 
            className={`transform transition-all duration-2000 delay-300 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          >
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gold w-24" />
              <div className="mx-8 w-2 h-2 bg-gold transform rotate-45" />
              <div className="h-px bg-gold w-24" />
            </div>
          </div>

          {/* Refined tagline */}
          <div 
            className={`transform transition-all duration-2000 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-serif text-warm-white text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] leading-relaxed mb-8">
              UNHURRIED · REFINED · INDIAN
            </p>
            <p className="text-warm-white/80 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              An intimate culinary journey through India's diverse heritage, 
              presented with contemporary elegance in Jubilee Hills.
            </p>
          </div>

          {/* Sophisticated buttons */}
          <div 
            className={`transform transition-all duration-2000 delay-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <button
                onClick={() => scrollToSection('reservations')}
                className="sophisticated-btn-primary hover:scale-105 transition-transform duration-300"
              >
                Reserve Table
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="sophisticated-btn-secondary hover:scale-105 transition-transform duration-300"
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Minimal scroll indicator */}
          <div 
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col items-center text-warm-white/60">
              <span className="text-xs uppercase tracking-widest mb-4 font-light">Explore</span>
              <div className="w-px h-12 bg-gold/50" />
              <div className="w-1 h-1 bg-gold/80 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Minimal image indicators */}
      <div className="absolute bottom-20 right-8 flex flex-col space-y-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-px h-6 transition-all duration-500 ${
              index === currentImageIndex 
                ? 'bg-gold' 
                : 'bg-warm-white/20 hover:bg-warm-white/40'
            }`}
          />
        ))}
      </div>

      {/* Subtle brand mark */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gold/30 text-xs tracking-[0.2em] font-light">
          EST. JUBILEE HILLS
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
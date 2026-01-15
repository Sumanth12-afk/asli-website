import React, { useState, useEffect, useRef } from 'react';

const HeroSection = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  // Hero background images
  const heroImages = [
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/hero3.png'
  ];

  // Elegant entrance timing
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Slow, elegant image transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-charcoal"
    >
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt="Asli Indian Restaurant"
              className="w-full h-full object-cover ken-burns"
              style={{
                filter: 'brightness(0.6) contrast(1.1)',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Badge */}
        <div
          className={`transform transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">
            Authentic Indian Fine Dining
          </span>
        </div>

        {/* Main Headline */}
        <div
          className={`transform transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-white mt-6 mb-4 leading-snug max-w-3xl"
            style={{
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
            }}>
            Experience <span className="text-gold">Asli</span>.<br />
            Experience authentic India.
          </h1>
        </div>

        {/* Subheadline */}
        <div
          className={`transform transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <p className="text-warm-white/80 text-base md:text-lg max-w-2xl mx-auto mt-4 mb-10 font-light leading-relaxed">
            An intimate culinary journey through India's diverse heritage,
            presented with contemporary elegance in Jubilee Hills, Hyderabad.
          </p>
        </div>

        {/* Decorative separator */}
        <div
          className={`transform transition-all duration-1500 delay-800 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
        >
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gold/50 w-16" />
            <div className="mx-4 w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="h-px bg-gold/50 w-16" />
          </div>
        </div>


        {/* CTA Button - Galvin Ghost Style */}
        <div
          className={`transform transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <button
            onClick={() => scrollToSection('reservations')}
            className="galvin-btn"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
      >
        <div className="flex flex-col items-center text-warm-white/50">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-4 font-light">Scroll</span>
          <div className="w-px h-10 bg-warm-white/30" />
        </div>
      </div>

      {/* Slide Indicators - Subtle Galvin Style */}
      <div className="absolute bottom-12 right-8 hidden lg:flex flex-col space-y-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-6 h-px transition-all duration-500 ${index === currentImageIndex
              ? 'bg-gold'
              : 'bg-warm-white/30 hover:bg-warm-white/50'
              }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
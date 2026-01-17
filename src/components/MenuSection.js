import React, { useState, useEffect, useCallback } from 'react';
import { loadImagesByPrefix } from '../utils/imageLoader';

const MenuSection = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const menuImages = loadImagesByPrefix('menu');
    setImages(menuImages);
  }, []);

  const nextSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const prevSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="menu" className="py-20 bg-charcoal relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-xs uppercase tracking-[0.3em] block mb-4">
            Taste of Asli
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
            Our Menu
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        {/* Carousel */}
        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/60 italic">Loading menu...</p>
          </div>
        ) : (
          <div className="relative">
            {/* Main Carousel Container */}
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {/* Left Arrow */}
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
                className="flex-shrink-0 w-12 h-12 border border-gold/50 text-gold 
                           hover:bg-gold hover:text-charcoal flex items-center justify-center 
                           transition-all duration-300 rounded-full cursor-pointer z-50 relative"
                aria-label="Previous menu page"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative w-full max-w-lg aspect-[3/4] bg-white shadow-2xl overflow-hidden">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title || `Menu Page ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Page Counter Overlay */}
                <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-sm px-4 py-2 text-white text-sm">
                  <span className="text-gold font-serif text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
                  <span className="mx-1 opacity-50">/</span>
                  <span className="opacity-70">{String(images.length).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
                className="flex-shrink-0 w-12 h-12 border border-gold/50 text-gold 
                           hover:bg-gold hover:text-charcoal flex items-center justify-center 
                           transition-all duration-300 rounded-full cursor-pointer z-50 relative"
                aria-label="Next menu page"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 h-1 rounded-full cursor-pointer ${index === currentSlide
                    ? 'w-8 bg-gold'
                    : 'w-4 bg-white/30 hover:bg-white/50'
                    }`}
                  aria-label={`Go to menu page ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Page Title */}
            {images[currentSlide] && images[currentSlide].title && (
              <div className="text-center mt-6">
                <p className="text-white font-serif text-xl">{images[currentSlide].title}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
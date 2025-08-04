import React, { useState, useEffect, useCallback } from 'react';
import { loadImagesByPrefix, createFallbackSVG } from '../utils/imageLoader';

const AmbienceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [images, setImages] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);

  // Load ambience images using prefix
  useEffect(() => {
    const ambienceImages = loadImagesByPrefix('ambience');
    setImages(ambienceImages);
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning || images.length === 0) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, images.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || images.length === 0) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, images.length]);

  const goToSlide = (index) => {
    if (isTransitioning || images.length === 0) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance slides every 6 seconds when playing
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;
    
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isTransitioning, images.length, nextSlide, isPlaying]);

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-400 font-serif text-lg">Loading ambience gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <section id="ambience" className="min-h-screen bg-muted-ivory relative overflow-hidden asli-texture-bg">
      {/* Section Title */}
      <div className="relative z-40 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 text-center px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-dark mb-4 sm:mb-6 asli-fade-in">
          <span className="bg-gradient-to-r from-clay-red to-antique-gold bg-clip-text text-transparent">
            Ambience & Interiors
          </span>
        </h2>
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-r from-transparent to-antique-gold"></div>
          <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 bg-antique-gold transform rotate-45 asli-gold-glow"></div>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-l from-transparent to-antique-gold"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-calm tracking-relaxed asli-slide-up">
          Step into a world where tradition meets luxury, every corner tells a story of heritage and elegance
        </p>
      </div>

      {/* Slideshow Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 rounded-xl sm:rounded-2xl bg-black">
        {/* Images with Ken Burns Effect */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
            >
              {/* Ken Burns zoom effect */}
              <div className={`w-full h-full transform transition-transform duration-[20000ms] ease-linear ${
                currentSlide === index ? 'scale-110' : 'scale-100'
              }`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    e.target.src = createFallbackSVG(image.title, 1920, 700);
                  }}
                />
              </div>
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>



        {/* Navigation Controls */}
        <div className="absolute inset-0 z-30 flex items-center justify-between p-4 sm:p-6 md:p-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Play/Pause Control */}
        <div className="absolute top-8 right-8 z-30">
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="relative z-30 flex justify-center py-8 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-yellow-400 scale-125 shadow-lg' 
                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
            } disabled:cursor-not-allowed`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default AmbienceSection;
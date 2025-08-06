import React, { useState, useEffect, useCallback, useRef } from 'react';
import { loadImagesByPrefix } from '../utils/imageLoader';

const AmbienceSection = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Load images
  useEffect(() => {
    const ambienceImages = loadImagesByPrefix('ambience');
    setImages(ambienceImages);
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Auto-advance slides
  const nextSlide = useCallback(() => {
    if (images.length > 0) {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const prevSlide = useCallback(() => {
    if (images.length > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  useEffect(() => {
    if (!isPlaying || images.length === 0) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, images.length]);

  // Premium modal functions
  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
    setIsPlaying(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setIsPlaying(true);
    document.body.style.overflow = 'unset';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, nextSlide, prevSlide]);

  // Always show the section even if images fail to load

  return (
    <>
      <section 
        ref={sectionRef}
        id="ambience" 
        className="py-4 bg-gradient-to-b from-charcoal to-charcoal-light relative overflow-hidden"
      >
        {/* Revolutionary Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/2 via-transparent to-charcoal-lighter/50" />
        
        {/* Section Header */}
        <div className="container-padding max-w-7xl mx-auto py-4">
          <div 
            className={`text-center mb-2 transform transition-all duration-1500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-px bg-gold" />
                <div className="w-2 h-2 bg-gold rotate-45" />
                <div className="w-8 h-px bg-gold" />
              </div>
            </div>
            <h2 className="font-elegant text-4xl lg:text-5xl text-gold mb-4">
              Ambience & Interiors
            </h2>
            <p className="sophisticated-text text-lg max-w-2xl mx-auto leading-spacious">
              Step into our world of refined elegance
            </p>
          </div>
        </div>

        {/* Ultra-Premium Gallery - Full Width */}
        <div className="relative">
          {images.length === 0 ? (
            <div className="text-center py-32 h-screen flex items-center justify-center"
                 style={{
                   marginLeft: 'calc(-50vw + 50%)',
                   marginRight: 'calc(-50vw + 50%)',
                 }}>
              <div>
                <p className="text-gold text-xl">Loading ambience gallery...</p>
                <p className="text-warm-white/70 mt-4">Images: {images.length}</p>
              </div>
            </div>
          ) : (
            <>
              {/* Main Image Display */}
              <div 
                className="relative h-screen w-screen overflow-hidden group cursor-zoom-in"
                onClick={() => openModal(images[currentSlide])}
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                  marginLeft: 'calc(-50vw + 50%)',
                  marginRight: 'calc(-50vw + 50%)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                
                {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : `opacity-0 ${direction > 0 ? 'scale-105' : 'scale-95'}`
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  style={{
                    filter: 'contrast(1.1) brightness(0.95) saturate(1.2)',
                    objectPosition: 'center center',
                  }}
                />
              </div>
            ))}

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            
            {/* Zoom Indicator */}
            <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/50 backdrop-blur-sm text-warm-white p-3 rounded-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {/* Sophisticated Navigation */}
            <div className="absolute inset-y-0 left-4 flex items-center z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="group bg-black/30 hover:bg-black/50 backdrop-blur-sm text-warm-white p-4 rounded-none transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-4 flex items-center z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="group bg-black/30 hover:bg-black/50 backdrop-blur-sm text-warm-white p-4 rounded-none transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Premium Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              <div className="flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative overflow-hidden transition-all duration-500 ${
                      index === currentSlide
                        ? 'w-12 h-1 bg-gold'
                        : 'w-8 h-1 bg-warm-white/30 hover:bg-warm-white/50'
                    }`}
                  >
                    {index === currentSlide && (
                      <div className="absolute top-0 left-0 h-full bg-gold-light w-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Play/Pause Control */}
            <div className="absolute top-6 left-6 z-30">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-warm-white p-3 rounded-none transition-all duration-300"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              </div>
            </div>
              </>
            )}
          </div>

        {/* Thumbnail Gallery */}
        {images.length > 0 && (
          <div className="container-padding max-w-7xl mx-auto py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative aspect-square overflow-hidden cursor-pointer group transition-all duration-500 ${
                  index === currentSlide 
                    ? 'ring-2 ring-gold shadow-xl' 
                    : 'hover:ring-1 hover:ring-warm-white/50'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  index === currentSlide 
                    ? 'bg-gold/20' 
                    : 'bg-black/20 group-hover:bg-black/10'
                }`} />
              </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Ultra-Premium Modal */}
      {isModalOpen && modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-[90vh] w-full mx-8">
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="w-full h-full object-contain"
            />
            
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-warm-white p-3 rounded-none transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-center">
              <h3 className="font-elegant text-2xl text-gold mb-2">{modalImage.title}</h3>
              <p className="sophisticated-text">{modalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AmbienceSection;
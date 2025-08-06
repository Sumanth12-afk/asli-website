import React, { useState, useEffect, useCallback, useRef } from 'react';
import { loadImagesByPrefix, createFallbackSVG } from '../utils/imageLoader';

const FoodSection = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const foodImages = loadImagesByPrefix('food');
    setImages(foodImages);
  }, []);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = useCallback((direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    setSelectedImage({ ...images[newIndex], index: newIndex });
  }, [selectedImage, images]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, navigateLightbox]);

  if (images.length === 0) return null;

  return (
    <>
      <section 
        ref={sectionRef}
        id="food" 
        className="py-8 bg-gradient-to-b from-charcoal-light to-charcoal relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/1 via-transparent to-charcoal-lighter/30" />
        
        <div className="container-padding max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-8 transform transition-all duration-1500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-px bg-gold" />
                <div className="w-2 h-2 bg-gold rotate-45" />
                <div className="w-8 h-px bg-gold" />
              </div>
            </div>
            <h2 className="font-elegant text-4xl lg:text-5xl text-gold mb-4">
              Signature Dishes
            </h2>
            <p className="sophisticated-text text-lg max-w-2xl mx-auto">
              Discover our culinary masterpieces, each dish crafted with passion 
              and presented with the finest ingredients from across India.
            </p>
          </div>

          {/* Premium Food Grid - Custom Layout: 4 + 3 */}
          <div className="mt-12 space-y-8">
            {/* First Row - 4 Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden elegant-card cursor-pointer hover-lift transform transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        filter: 'contrast(1.1) brightness(0.95) saturate(1.2)',
                      }}
                      onError={(e) => {
                        e.target.src = createFallbackSVG(image.title);
                      }}
                    />
                    
                    {/* Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gold/90 text-charcoal px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>

                    {/* Zoom Indicator */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm text-warm-white p-2 rounded-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-elegant text-xl lg:text-2xl text-gold mb-3 group-hover:text-gold-light transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="sophisticated-text text-sm lg:text-base leading-relaxed mb-4 opacity-90">
                      {image.description}
                    </p>
                    
                    {/* Ingredients */}
                    {image.ingredients && (
                      <div className="pt-4 border-t border-warm-gray/20">
                        <span className="text-gold text-xs font-medium tracking-wide uppercase mb-2 block">
                          Key Ingredients
                        </span>
                        <p className="text-warm-white/70 text-xs leading-relaxed">
                          {image.ingredients}
                        </p>
                      </div>
                    )}

                    {/* Premium Action Button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="sophisticated-btn-secondary text-xs px-6 py-3 w-full">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>

            {/* Second Row - 3 Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
              {images.slice(4, 7).map((image, index) => (
                <div
                  key={index + 4}
                  className={`group relative overflow-hidden elegant-card cursor-pointer hover-lift transform transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                  onClick={() => openLightbox(image, index + 4)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        filter: 'contrast(1.1) brightness(0.95) saturate(1.2)',
                      }}
                      onError={(e) => {
                        e.target.src = createFallbackSVG(image.title);
                      }}
                    />
                    
                    {/* Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gold/90 text-charcoal px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>

                    {/* Zoom Indicator */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm text-warm-white p-2 rounded-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-elegant text-xl lg:text-2xl text-gold mb-3 group-hover:text-gold-light transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="sophisticated-text text-sm lg:text-base leading-relaxed mb-4 opacity-90">
                      {image.description}
                    </p>
                    
                    {/* Ingredients */}
                    {image.ingredients && (
                      <div className="pt-4 border-t border-warm-gray/20">
                        <span className="text-gold text-xs font-medium tracking-wide uppercase mb-2 block">
                          Key Ingredients
                        </span>
                        <p className="text-warm-white/70 text-xs leading-relaxed">
                          {image.ingredients}
                        </p>
                      </div>
                    )}

                    {/* Premium Action Button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="sophisticated-btn-secondary text-xs px-6 py-3 w-full">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Premium Call to Action */}
          <div 
            className={`text-center mt-8 transform transition-all duration-1500 delay-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="sophisticated-text text-lg mb-8 max-w-2xl mx-auto">
              Experience the authentic flavors that have made Asli Indian a culinary destination
            </p>
            <button className="sophisticated-btn-primary">
              Explore Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] w-full mx-8">
            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-warm-white p-3 rounded-none transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => navigateLightbox('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-warm-white p-3 rounded-none transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Content Panel */}
            <div className="bg-charcoal-light/95 backdrop-blur-sm p-8 mt-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="bg-gold text-charcoal px-3 py-1 text-xs font-medium tracking-wide uppercase mb-3 inline-block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-elegant text-2xl text-gold mb-4">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={closeLightbox}
                  className="bg-black/50 hover:bg-black/70 text-warm-white p-3 rounded-none transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="sophisticated-text text-lg leading-relaxed mb-6 opacity-90">
                {selectedImage.description}
              </p>
              
              {selectedImage.ingredients && (
                <div className="pt-4 border-t border-warm-gray/20">
                  <span className="text-gold text-sm font-medium tracking-wide uppercase mb-3 block">
                    Key Ingredients
                  </span>
                  <p className="text-warm-white/80 leading-relaxed">
                    {selectedImage.ingredients}
                  </p>
                </div>
              )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-warm-white px-3 py-2 rounded-none text-sm">
                {selectedImage.index + 1} of {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FoodSection;
import React, { useState, useEffect, useCallback } from 'react';
import { loadImagesByPrefix, createFallbackSVG } from '../utils/imageLoader';

const FoodSection = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, navigateLightbox]);

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-yellow-400 font-serif text-lg">Loading signature dishes...</p>
        </div>
      </div>
    );
  }

  return (
    <section id="food" className="min-h-screen bg-gradient-to-b from-background-deep to-background-brown py-20">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-light mb-4 sm:mb-6 asli-fade-in">
          <span className="bg-gradient-to-r from-antique-gold to-yellow-400 bg-clip-text text-transparent asli-text-glow">
            Signature Dishes
          </span>
        </h2>
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-r from-transparent to-antique-gold"></div>
          <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 bg-antique-gold transform rotate-45 asli-gold-glow"></div>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-l from-transparent to-antique-gold"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-ivory max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-calm tracking-relaxed asli-slide-up">
          Discover our exquisite culinary creations, each dish crafted with passion and authentic Indian flavors
        </p>
      </div>

      {/* Food Grid/Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openLightbox(image, index)}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/20">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = createFallbackSVG(image.title, 400, 300);
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                        Click to view details
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.category}
                  </div>

                  {/* Tilt Effect Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                    {image.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">View Details</span>
                    <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="relative max-w-6xl max-h-[90vh] w-full mx-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative h-96 lg:h-[600px]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {selectedImage.category}
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedImage.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3 text-lg">Key Ingredients:</h4>
                    <p className="text-gray-400 leading-relaxed">{selectedImage.ingredients}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {selectedImage.index + 1} of {images.length}
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
          />
        </div>
      )}
    </section>
  );
};

export default FoodSection;
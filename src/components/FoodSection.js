import React, { useState, useEffect, useRef } from 'react';
import { loadImagesByPrefix, createFallbackSVG } from '../utils/imageLoader';
import CircularGallery from './CircularGallery';

const FoodSection = () => {
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const foodImages = loadImagesByPrefix('food');
    // Map existing images to the format CircularGallery expects
    const galleryItems = foodImages.map(img => ({
      image: img.src,
      text: img.title
    }));
    setImages(galleryItems);
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="food"
        className="py-12 bg-charcoal relative overflow-hidden h-[900px]"
      >
        {/* Decorative watermark */}
        <div className="absolute bottom-0 left-0 opacity-[0.02] pointer-events-none">
          <span className="text-[25rem] font-elegant text-gold leading-none">A</span>
        </div>

        <div className="w-full h-full relative z-10 flex flex-col">
          {/* Section Header */}
          <div
            className={`text-center mb-8 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-px bg-gold/50" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-12 h-px bg-gold/50" />
            </div>
            <span className="text-gold text-xs uppercase tracking-[0.2em] block mb-2">
              Our Cuisine
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-white">
              Signature Dishes
            </h2>
          </div>

          {/* 3D Circular Gallery */}
          <div className="flex-1 w-full relative">
            {images.length > 0 ? (
              <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery
                  items={images}
                  bend={2.5}
                  textColor="#C5A059"
                  borderRadius={0.05}
                  font="bold 30px Playfair Display"
                  scrollSpeed={2.5}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gold">Loading gallery...</p>
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <p className="text-warm-white/50 text-sm italic">Drag to explore • Scroll to browse</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodSection;
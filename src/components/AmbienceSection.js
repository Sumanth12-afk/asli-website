import React, { useState, useEffect, useCallback, useRef } from 'react';
import { loadImagesByPrefix } from '../utils/imageLoader';

const AmbienceSection = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionRef = useRef(null);

    // Load images
    useEffect(() => {
        const ambienceImages = loadImagesByPrefix('ambience');
        setImages(ambienceImages);
    }, []);

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Slide navigation with transition
    const goToSlide = useCallback((index) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [currentSlide, isTransitioning]);

    const nextSlide = useCallback(() => {
        if (images.length > 0 && !isTransitioning) {
            goToSlide((currentSlide + 1) % images.length);
        }
    }, [images.length, currentSlide, isTransitioning, goToSlide]);

    const prevSlide = useCallback(() => {
        if (images.length > 0 && !isTransitioning) {
            goToSlide((currentSlide - 1 + images.length) % images.length);
        }
    }, [images.length, currentSlide, isTransitioning, goToSlide]);

    // Auto-advance
    useEffect(() => {
        if (!isPlaying || images.length === 0) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPlaying, nextSlide, images.length]);

    return (
        <section
            ref={sectionRef}
            id="ambience"
            className="min-h-screen bg-black relative overflow-hidden"
        >
            {/* Full-screen background image */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-110'
                            }`}
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                        />
                    </div>
                ))}
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex">
                {/* Left Side - Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        {/* Section Label */}
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-px bg-gold" />
                            <span className="text-gold text-xs uppercase tracking-[0.3em]">
                                Our Space
                            </span>
                        </div>

                        {/* Main Title */}
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-8">
                            Ambience<br />
                            <span className="text-gold">&amp; Interiors</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white/70 text-base md:text-lg max-w-lg mb-12 leading-relaxed font-light">
                            Step into our world of refined elegance, where every detail has been
                            thoughtfully curated to create an unforgettable dining experience.
                        </p>


                        {/* Navigation Controls */}
                        <div className="flex items-center space-x-6">
                            {/* Progress Indicators */}
                            <div className="flex items-center space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className="group relative"
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        <div
                                            className={`h-0.5 transition-all duration-500 ${index === currentSlide
                                                    ? 'w-12 bg-gold'
                                                    : 'w-6 bg-white/30 group-hover:bg-white/60'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Slide Counter */}
                            <div className="text-white/50 text-sm font-light tracking-wider">
                                <span className="text-gold text-lg font-serif">
                                    {String(currentSlide + 1).padStart(2, '0')}
                                </span>
                                <span className="mx-2">/</span>
                                <span>{String(images.length).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Visual Focus Area */}
                <div className="hidden lg:flex w-1/2 items-center justify-center relative">
                    {/* Decorative frame */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] border border-gold/20 pointer-events-none" />

                    {/* Navigation Arrows */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 border border-white/30 text-white/60 hover:border-gold hover:text-gold 
                         flex items-center justify-center transition-all duration-300"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 border border-white/30 text-white/60 hover:border-gold hover:text-gold 
                         flex items-center justify-center transition-all duration-300"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Play/Pause Button */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute bottom-8 right-8 w-10 h-10 border border-white/30 text-white/60 
                       hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
                        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                    >
                        {isPlaying ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden absolute bottom-8 left-8 right-8 flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 border border-white/30 text-white flex items-center justify-center"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 border border-white/30 text-white flex items-center justify-center"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </section>
    );
};

export default AmbienceSection;

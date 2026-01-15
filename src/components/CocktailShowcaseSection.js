import React, { useRef, useEffect, useState, useCallback } from 'react';

const cocktails = [
    {
        image: '/images/signature_cocktail.png',
        name: 'Anaar Spritz',
        tagline: 'Pomegranate • Chili Salt • Lime • Sparkling'
    },
    {
        image: '/images/signature_cocktail_2.png',
        name: 'Spiced Amrood',
        tagline: 'Juicy, a little spicy, and honestly way too addictive'
    }
];

const CocktailShowcaseSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Auto-rotate cocktails
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cocktails.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const currentCocktail = cocktails[currentIndex];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 lg:py-24 bg-black overflow-hidden"
        >
            {/* Subtle border */}
            <div className="absolute inset-4 md:inset-6 border border-gold/20 rounded-2xl pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12">

                {/* Left Side - Text Content */}
                <div
                    className={`lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}
                >
                    {/* Tagline */}
                    <span className="text-gold text-xs uppercase tracking-[0.3em] font-light mb-4 block">
                        Signature Mocktails
                    </span>

                    {/* Main Headline */}
                    <h2
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
                    >
                        Crafted with<br />
                        <span className="text-gold">Passion.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-white/70 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
                        Where tradition meets the unexpected. Sip slowly.
                    </p>

                    {/* Decorative separator */}
                    <div className="flex items-center justify-center lg:justify-start mb-8">
                        <div className="h-px bg-gold/40 w-12" />
                        <div className="mx-3 w-1.5 h-1.5 bg-gold rotate-45" />
                        <div className="h-px bg-gold/40 w-12" />
                    </div>

                    {/* Featured Cocktail Name - Dynamic */}
                    <div className="text-center lg:text-left mb-8">
                        <span className="text-gold/80 text-sm uppercase tracking-widest">Featured</span>
                        <h3
                            key={currentCocktail.name}
                            className="font-serif text-2xl text-white mt-2 transition-all duration-500"
                        >
                            {currentCocktail.name}
                        </h3>
                        <p
                            key={`${currentCocktail.name}-tagline`}
                            className="text-white/50 text-sm mt-1 transition-all duration-500"
                        >
                            {currentCocktail.tagline}
                        </p>
                    </div>

                    {/* Cocktail Indicators */}
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                        {cocktails.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 ${index === currentIndex
                                    ? 'w-10 h-1 bg-gold'
                                    : 'w-6 h-1 bg-white/30 hover:bg-white/60'
                                    }`}
                                aria-label={`View cocktail ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side - Image Carousel */}
                <div
                    className={`w-full lg:w-2/3 flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}
                >
                    <div className="w-full h-[300px] md:h-[400px] lg:h-[550px] relative flex items-center justify-center lg:translate-x-8">
                        {cocktails.map((cocktail, index) => (
                            <img
                                key={cocktail.name}
                                src={cocktail.image}
                                alt={`${cocktail.name} Signature Cocktail`}
                                className={`absolute max-w-[90%] md:max-w-full max-h-full object-contain transition-all duration-700 ${index === currentIndex
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-95'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </section>
    );
};

export default CocktailShowcaseSection;

import React, { useRef, useEffect, useState } from 'react';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Full-width Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/A Culinary Journey Through India.png"
                    alt="A Culinary Journey Through India"
                    className="w-full h-full object-cover"
                    style={{
                        animation: 'kenBurnsZoom 25s ease-in-out infinite alternate',
                    }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <div className="max-w-2xl">
                    {/* Section Label */}
                    <div
                        className={`flex items-center space-x-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div className="w-12 h-px bg-gold" />
                        <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Story</span>
                    </div>

                    {/* Headline */}
                    <h2
                        className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        A Culinary Journey<br />
                        <span className="text-gold">Through India</span>
                    </h2>

                    {/* Tagline */}
                    <p
                        className={`text-gold/80 text-xl font-serif italic mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        'Proudly Authentic & Family-Inspired'
                    </p>

                    {/* Description */}
                    <div
                        className={`space-y-5 text-white/80 text-base md:text-lg leading-relaxed mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <p>
                            With a passion for cooking and the desire to create an exceptional dining experience,
                            Asli Indian brings together the rich culinary traditions of India with contemporary elegance.
                        </p>
                        <p>
                            Our kitchen celebrates seasonal and sustainably sourced ingredients,
                            with menus that change to reflect the best of each season. Every dish is crafted
                            with the same philosophy – honest flavors, excellent service, and luxurious surroundings.
                        </p>
                    </div>

                    {/* Quote */}
                    <blockquote
                        className={`border-l-2 border-gold pl-6 mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <p className="font-serif text-xl text-white italic">
                            "Each dish tells a story of India's diverse heritage."
                        </p>
                    </blockquote>

                    {/* CTA Button */}
                    <div
                        className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <button className="border border-gold text-gold px-10 py-4 text-sm uppercase tracking-widest 
                                         hover:bg-gold hover:text-charcoal transition-all duration-300">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center space-y-2 text-white/40">
                <span className="text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
            </div>
        </section>
    );
};

export default AboutSection;

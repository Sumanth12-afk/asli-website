import React, { useRef, useEffect, useState } from 'react';
import CardSwap, { Card } from './CardSwap';

const signatureDishes = [
    {
        name: 'Karnataka Military Mutton Pulao',
        description: 'Aromatic basmati rice with tender mutton, cooked in traditional military style',
        image: '/images/food01.jpg'
    },
    {
        name: 'Murgh Kalmi',
        description: 'Tender chicken drumettes marinated in aromatic spices and grilled to perfection',
        image: '/images/food02.jpg'
    },
    {
        name: 'Yakhni Gosht Pulao',
        description: 'Fragrant rice dish with succulent mutton cooked in aromatic yakhni stock',
        image: '/images/food03.jpg'
    },
    {
        name: 'Shahi Shadoot Tukda & Gulkand Chocolate',
        description: 'Royal bread pudding with rich cream and rose-chocolate fusion dessert',
        image: '/images/food04.jpg'
    },
    {
        name: 'Garlic Naan',
        description: 'Soft, fluffy bread topped with fresh garlic and herbs, baked in tandoor',
        image: '/images/food05.jpg'
    },
    {
        name: 'Jhol Momo',
        description: 'Steamed dumplings served in flavorful spiced broth',
        image: '/images/food06.jpg'
    },
    {
        name: 'Filter Kaapi Biscoot',
        description: 'Traditional South Indian filter coffee served with crispy biscuits',
        image: '/images/food07.jpg'
    }
];

const SignatureDishesSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [cardSize, setCardSize] = useState({ width: 420, height: 530 });

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

    // Responsive card sizing
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 480) {
                // Mobile
                setCardSize({ width: 280, height: 350 });
            } else if (width < 768) {
                // Tablet portrait
                setCardSize({ width: 320, height: 400 });
            } else if (width < 1024) {
                // Tablet landscape
                setCardSize({ width: 360, height: 450 });
            } else {
                // Desktop
                setCardSize({ width: 420, height: 530 });
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-charcoal relative overflow-hidden py-16 md:py-24 pb-64 md:pb-24"
        >
            {/* Background decorative element */}
            <div className="absolute top-0 left-0 opacity-[0.02] pointer-events-none hidden lg:block">
                <span className="text-[25rem] font-elegant text-gold leading-none">S</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side - Text Content */}
                    <div
                        className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        {/* Section Label */}
                        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                            <div className="w-12 h-px bg-gold" />
                            <span className="text-gold text-xs uppercase tracking-[0.3em]">
                                Chef's Selection
                            </span>
                        </div>

                        {/* Main Title */}
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
                            Signature<br />
                            <span className="text-gold">Dishes</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white/70 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed font-light">
                            Each signature creation tells a story of heritage, innovation, and the finest
                            ingredients. Discover the dishes that define the Asli experience.
                        </p>

                        {/* Features List - Hidden on mobile for cleaner look */}
                        <div className="hidden md:block space-y-4 mb-10">
                            {['Locally sourced ingredients', 'Traditional recipes reimagined', 'Seasonal specialties'].map((item, index) => (
                                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                                    <div className="w-1.5 h-1.5 bg-gold rotate-45" />
                                    <span className="text-white/60 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA - Hidden on mobile */}
                        <button
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden md:inline-block border border-gold text-gold px-6 md:px-8 py-3 text-xs md:text-sm uppercase tracking-widest 
                             hover:bg-gold hover:text-charcoal transition-all duration-300">
                            View Full Menu
                        </button>
                    </div>

                    {/* Right Side - Card Swap */}
                    <div
                        className={`relative h-[400px] md:h-[500px] lg:h-[600px] w-full mt-4 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                    >
                        <CardSwap
                            cardDistance={window.innerWidth < 768 ? 35 : 55}
                            verticalDistance={window.innerWidth < 768 ? 45 : 65}
                            delay={4000}
                            pauseOnHover={true}
                            width={cardSize.width}
                            height={cardSize.height}
                            skewAmount={window.innerWidth < 768 ? 3 : 4}
                            easing="elastic"
                        >
                            {signatureDishes.map((dish, index) => (
                                <Card key={index}>
                                    <img src={dish.image} alt={dish.name} />
                                    <div className="card-content">
                                        <h3 className="card-title">{dish.name}</h3>
                                        <p className="card-description">{dish.description}</p>
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </section>
    );
};

export default SignatureDishesSection;

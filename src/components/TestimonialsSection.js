import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    const testimonials = [
        {
            quote: "Very rich experience restaurant. Right from entrance to service its very rich and royal. Ambience is pleasant with double floor ceiling height and royal chandeliers. Service is very good and prompt. The food is unique and tasty!",
            source: "Google Review",
        },
        {
            quote: "The food is delicious - Gongura chicken wings, Haleem cutlet, momos, lamb pepper fry, gutti vankayya kura were all 10/10!",
            source: "Google Review",
        },
        {
            quote: "Amazing Onam Sadhya experience at Asli. Highly recommend it for an authentic sadhya experience with an excellent ambience and service here at Hyderabad. The quality and quantity does total justice to this experience.",
            source: "Google Review",
        },
        {
            quote: "Asli is a fine dining destination in Hyderabad, offering a stunning royal ambiance that sets it apart as a truly one-of-a-kind experience in the city. You will find amazing range of food to try here!",
            source: "Google Review",
        },
        {
            quote: "A fine dining with calm and luxury. The food was good, service was excellent. The Mutton Marag was one of the best! We tried appetizers, jackfruit Haleem, main course and desserts - all amazing.",
            source: "Google Review",
        },
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-charcoal relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40rem] font-elegant text-gold">
                    A
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-12 h-px bg-gold/50" />
                        <div className="w-2 h-2 bg-gold rotate-45" />
                        <div className="w-12 h-px bg-gold/50" />
                    </div>
                    <span className="text-gold text-xs uppercase tracking-[0.2em]">
                        What People Say
                    </span>
                </div>

                {/* Testimonial Carousel */}
                {/* Testimonial Carousel */}
                <div className="grid grid-cols-1 items-center justify-items-center">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`col-start-1 row-start-1 flex flex-col items-center justify-center text-center transition-all duration-1000 ${index === currentQuote
                                ? 'opacity-100 translate-y-0 z-10'
                                : 'opacity-0 translate-y-4 -z-10'
                                }`}
                        >
                            {/* Quote Mark */}
                            <div className="text-gold text-6xl font-serif mb-4 opacity-60">"</div>

                            {/* Quote Text */}
                            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-warm-white leading-relaxed max-w-3xl font-light italic">
                                {testimonial.quote}
                            </blockquote>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-3 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentQuote(index)}
                            className={`transition-all duration-300 ${index === currentQuote
                                ? 'w-8 h-1 bg-gold'
                                : 'w-4 h-1 bg-warm-white/30 hover:bg-warm-white/50'
                                }`}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Source - Fixed position below bar */}
                <div className="text-center mt-6">
                    <cite className="text-gold text-sm uppercase tracking-[0.15em] not-italic font-medium">
                        Google Review
                    </cite>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

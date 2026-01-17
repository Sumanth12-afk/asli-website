import React, { useState, useEffect } from 'react';
import StaggeredMenu from './components/StaggeredMenu';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import MenuSection from './components/MenuSection';
import AmbienceSection from './components/AmbienceSection';
import CocktailShowcaseSection from './components/CocktailShowcaseSection';
import ContactSection from './components/ContactSection';
import ReservationSection from './components/ReservationSection';
import SignatureDishesSection from './components/SignatureDishesSection';
import { preloadImage } from './utils/imageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Preload critical images including hero images
    const loadAssets = async () => {
      try {
        // Hero images to preload
        const heroImagePaths = [
          '/images/hero1.png',
          '/images/hero2.png',
          '/images/hero3.png'
        ];

        // Start loading all hero images in parallel
        const heroImagePromises = heroImagePaths.map(src => preloadImage(src));

        // Minimum loading time for smooth animation (4 seconds)
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 4000));

        // Wait for BOTH: all images loaded AND minimum time passed
        await Promise.all([
          Promise.all(heroImagePromises),
          minLoadingTime
        ]);

        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load assets:', error);
        // Still hide loading after minimum time even if images fail
        await new Promise(resolve => setTimeout(resolve, 4000));
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-charcoal z-50 flex flex-col items-center justify-center">
        {/* Elegant spinner */}
        <div className="relative w-20 h-20 mb-10">
          <div className="absolute inset-0 border-t-2 border-gold rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-warm-white/30 rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gold font-serif text-3xl">A</span>
          </div>
        </div>

        {/* Welcome Message - Option 7 */}
        <h1 className="font-serif text-3xl md:text-4xl text-warm-white mb-3 tracking-wide">
          Welcome to Asli
        </h1>
        <p className="text-gold text-sm md:text-base uppercase tracking-[0.3em] font-light">
          A Taste of Tradition
        </p>

        {/* Subtle decorative line */}
        <div className="flex items-center gap-3 mt-8">
          <div className="w-8 h-px bg-gold/40"></div>
          <div className="w-1.5 h-1.5 bg-gold rotate-45"></div>
          <div className="w-8 h-px bg-gold/40"></div>
        </div>
      </div>
    );
  }

  const menuItems = [
    { label: 'Home', link: '#home', onClick: () => scrollToSection('home') },
    { label: 'Our Story', link: '#about', onClick: () => scrollToSection('about') },
    { label: 'Signature Dishes', link: '#signature-dishes', onClick: () => document.querySelector('.min-h-screen.bg-charcoal.relative.overflow-hidden.py-16')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Signature Mocktails', link: '#cocktails', onClick: () => document.querySelector('.relative.py-20.lg\\:py-24.bg-black')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Ambience', link: '#ambience', onClick: () => scrollToSection('ambience') },
    { label: 'Menu', link: '#menu', onClick: () => scrollToSection('menu') },
    { label: 'Reservations', link: '#reservations', onClick: () => scrollToSection('reservations') },
    { label: 'Contact', link: '#contact', onClick: () => scrollToSection('contact') }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/asli.experience/' },
    { label: 'WhatsApp', link: 'https://wa.me/918977710146' }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-warm-white overflow-x-hidden elegant-spacing">
      {/* Staggered Navigation Menu with 3-stripe hamburger button - Right Side */}
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={menuItems}
        socialItems={socialItems}
        logoUrl={null}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        accentColor="#C5A059"
        colors={['#1a1a1a', '#2c2c2c', '#C5A059']}
      />

      {/* Main Content */}
      <HeroSection scrollToSection={scrollToSection} />
      <TestimonialsSection />
      <AboutSection />
      <SignatureDishesSection />
      <CocktailShowcaseSection />
      <AmbienceSection />
      <MenuSection />
      <ReservationSection />
      <ContactSection />
    </div>
  );
}

export default App;
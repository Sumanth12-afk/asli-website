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
import { loadImagesByPrefix, preloadImage } from './utils/imageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Preload critical images
    const loadAssets = async () => {
      try {
        const heroImages = loadImagesByPrefix('ambience');
        await Promise.all(heroImages.slice(0, 3).map(img => preloadImage(img.src)));

        // Minimum loading time for animation
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load assets:', error);
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
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-t-2 border-gold rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-warm-white rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gold font-serif text-2xl animate-pulse">A</span>
          </div>
        </div>
        <div className="tracking-[0.5em] text-xs text-gold uppercase animate-pulse">
          ASLI • Authenticity
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
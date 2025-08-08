import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AmbienceSection from './components/AmbienceSection';
import FoodSection from './components/FoodSection';
import TestSection from './components/TestSection';
import SimpleFoodSection from './components/SimpleFoodSection';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import ContactSection from './components/ContactSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'ambience', 'food', 'menu', 'reservations', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section === 'home') continue;
        
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          {/* Elegant loading animation */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-yellow-400/50 rounded-full animate-ping mx-auto"></div>
          </div>
          <h2 className="font-elegant text-3xl text-gold mb-2">Asli Indian</h2>
          <p className="text-gray-400 tracking-wide">Preparing your culinary journey...</p>
          
          {/* Loading progress indicator */}
          <div className="mt-6 w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal text-warm-white overflow-x-hidden elegant-spacing">
      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Ambience Section */}
      <AmbienceSection />

      {/* Test Section */}
      <TestSection />
      
      {/* Simple Food Section */}
      <SimpleFoodSection />
      
      {/* Food Section */}
      <FoodSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Reservations Section */}
      <ReservationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Sophisticated Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918977710146?text=Hello! I would like to make a reservation at Asli Indian."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-green-500/50 flex items-center justify-center group"
          title="WhatsApp Reservation"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>

        {/* Phone */}
        <a
          href="tel:+918977710146"
          className="w-12 h-12 bg-gold hover:bg-gold-dark text-charcoal rounded-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gold-light/50 flex items-center justify-center group"
          title="Call Restaurant"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Scroll to top */}
        <button
          onClick={() => scrollToSection('home')}
          className="w-12 h-12 bg-charcoal-light/80 hover:bg-charcoal-lighter backdrop-blur-sm rounded-none border border-warm-gray/30 hover:border-gold/50 flex items-center justify-center text-warm-white hover:text-gold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
          title="Back to Top"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Sophisticated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-16 w-96 h-96 bg-gold/2 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-96 h-96 bg-gold/1 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charcoal-light/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '8s'}}></div>
      </div>
    </div>
  );
}

export default App;
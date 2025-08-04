import React, { useEffect, useRef, useState } from 'react';

const HeroSection = ({ scrollToSection }) => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating particles animation
    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.life = Math.random() * 100 + 50;
        this.age = 0;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.age++;

        // Gentle floating motion
        this.x += Math.sin(this.age * 0.01) * 0.2;
        this.y += Math.cos(this.age * 0.01) * 0.2;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Fade in/out lifecycle
        if (this.age < 30) {
          this.opacity = (this.age / 30) * 0.4;
        } else if (this.age > this.life - 30) {
          this.opacity = ((this.life - this.age) / 30) * 0.4;
        }

        if (this.age > this.life) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.age = 0;
        this.life = Math.random() * 100 + 50;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create elegant gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      gradient.addColorStop(0, 'rgba(20, 20, 20, 0.1)');
      gradient.addColorStop(0.5, 'rgba(139, 26, 26, 0.05)');
      gradient.addColorStop(1, 'rgba(212, 175, 55, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden bg-background-deep">
      {/* Cinematic Background with Asli Clay Tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background-brown to-clay-red/20">
        {/* Background Image/Video would go here */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 asli-texture-bg"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3CradialGradient id='bg' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23933f2f;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%23d4af37;stop-opacity:0.1'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3C/svg%3E")`
             }}
        />
      </div>

      {/* Animated Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10"
      />

      {/* Elegant Overlay Pattern */}
      <div className="absolute inset-0 z-20 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-6">
          {/* Animated Logo */}
          <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-text-light mb-4 sm:mb-6 md:mb-8 tracking-spacious text-center asli-fade-in">
              <span className="bg-gradient-to-r from-antique-gold via-yellow-300 to-antique-gold bg-clip-text text-transparent drop-shadow-2xl asli-text-glow">
                Asli Indian
              </span>
            </h1>
            
            {/* Elegant Divider */}
            <div className="flex items-center justify-center mb-8 asli-slide-up">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-antique-gold"></div>
              <div className="mx-4 w-3 h-3 bg-antique-gold transform rotate-45 asli-gold-glow"></div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-antique-gold"></div>
            </div>
          </div>

          {/* Animated Tagline */}
          <div className={`transition-all duration-2000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-light font-light tracking-spacious mb-2 sm:mb-4 font-serif text-center asli-slide-up">
              Unhurried. Refined. Indian.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-ivory font-light max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-calm mb-8 sm:mb-10 md:mb-12 px-4 text-center asli-slide-up">
              Experience the pinnacle of Indian culinary artistry in an atmosphere of refined luxury
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className={`transition-all duration-2000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="asli-btn-primary w-full sm:w-auto"
              >
                View Menu
              </button>
              
              <button 
                onClick={() => scrollToSection('reservations')}
                className="asli-btn-secondary w-full sm:w-auto"
              >
                Reserve a Table
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center animate-bounce">
              <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center mb-2">
                <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-yellow-400 text-sm font-medium tracking-wider">EXPLORE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;
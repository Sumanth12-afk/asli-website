import React from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      title: 'Location',
      details: [
        'Plot no. 8-2-293/82/A/771/A&B',
        'Rd Number 44, CBI Colony',
        'Jubilee Hills, Hyderabad',
        'Telangana 500033, India'
      ]
    },
    {
      title: 'Contact',
      details: [
        '+91 89777 10146',
        'reservations@asliindian.com'
      ]
    },
    {
      title: 'Hours',
      details: [
        'Mon - Thu: 12:00 PM - 10:30 PM',
        'Fri - Sun: 12:00 PM - 11:00 PM'
      ]
    }
  ];

  const navLinks = [
    { label: 'Gallery', href: '#ambience' },
    { label: 'Cuisine', href: '#food' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section id="contact" className="bg-charcoal relative overflow-hidden">
      {/* Large Decorative Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[50rem] font-elegant text-warm-white/[0.02] leading-none select-none">
          A
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Top Section - Logo & Description */}
          <div className="text-center mb-16">
            <h2 className="font-elegant text-4xl lg:text-5xl text-gold mb-4 tracking-[0.1em]">
              ASLI
            </h2>
            <p className="text-warm-white/60 text-sm tracking-[0.15em] uppercase">
              Unhurried · Refined · Indian
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-warm-white/70 hover:text-gold text-xs uppercase tracking-[0.15em] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-16 h-px bg-gold/30" />
            <div className="mx-4 w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="w-16 h-px bg-gold/30" />
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <h3 className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-warm-white/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://www.instagram.com/asli.experience/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors duration-300"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/918977710146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors duration-300"
              title="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <div className="relative overflow-hidden h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3989082!3d17.4340659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91aba365ce31%3A0xf8390fdda9bf1019!2sAsli!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asli Indian Restaurant Location"
              ></iframe>
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 pointer-events-none" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-warm-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-warm-white/40 text-xs">
                © 2024 Asli Indian Restaurant. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="/" className="text-warm-white/40 hover:text-warm-white/60 text-xs transition-colors">
                  Privacy
                </a>
                <a href="/" className="text-warm-white/40 hover:text-warm-white/60 text-xs transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
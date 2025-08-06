import React from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      title: 'Location',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      details: [
        'Asli Indian Restaurant',
        'Jubilee Hills, Hyderabad',
        'Telangana, India'
      ]
    },
    {
      title: 'Contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      details: [
        '+91 89777 10146',
        'reservations@asliindian.com'
      ]
    },
    {
      title: 'Operating Hours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        'Mon - Thu: 12:00 PM - 10:30 PM',
        'Fri - Sun: 12:00 PM - 11:00 PM',
        'Kitchen closes 30 mins before'
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/asli.experience/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-background-brown to-background-deep py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gold mb-4 sm:mb-6 asli-fade-in">
            <span className="bg-gradient-to-r from-antique-gold to-yellow-400 bg-clip-text text-transparent asli-text-glow">
              Visit Us
            </span>
          </h2>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-r from-transparent to-antique-gold"></div>
            <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 bg-antique-gold transform rotate-45 asli-gold-glow"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-l from-transparent to-antique-gold"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-ivory max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-calm tracking-relaxed asli-slide-up">
            Find us in the heart of Hyderabad, where tradition meets modern luxury
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-clay-red/30 to-background-deep/50 backdrop-blur-sm rounded-3xl p-8 border border-antique-gold/30 asli-gold-glow hover:border-antique-gold/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-antique-gold to-yellow-400 rounded-2xl flex items-center justify-center text-background-deep flex-shrink-0 asli-gold-glow">
                    {info.icon}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-elegant text-xl sm:text-2xl  text-gold mb-3 sm:mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-1 sm:space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-ivory text-base sm:text-lg leading-calm tracking-relaxed break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-gradient-to-b from-clay-red/30 to-background-deep/50 backdrop-blur-sm rounded-3xl p-8 border border-antique-gold/30 asli-gold-glow">
              <h3 className="font-elegant text-2xl  text-gold mb-6 text-center">
                Follow Our Journey
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-br from-background-brown to-background-deep hover:from-antique-gold hover:to-yellow-400 rounded-2xl flex items-center justify-center text-muted-ivory hover:text-background-deep transition-all duration-300 hover:scale-110 hover:shadow-lg asli-gold-glow"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div className="bg-gradient-to-b from-clay-red/30 to-background-deep/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-antique-gold/30 asli-gold-glow">
              <div className="p-6 border-b border-antique-gold/30">
                <h3 className="font-elegant text-2xl  text-gold text-center">
                  Our Location
                </h3>
              </div>
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15227.776157653846!2d78.4376169!3d17.4398859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9150a5b1c3c5%3A0x8b7b8a0c2d4c6e1!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1642534567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Asli Indian Restaurant Location"
                ></iframe>
              </div>
              <div className="p-4 bg-clay-red/20">
                <button 
                  onClick={() => window.open('https://maps.app.goo.gl/PHWH1DyUAPoth6w29', '_blank')}
                  className="asli-btn-primary w-full"
                >
                  Get Directions
                </button>
              </div>
            </div>

            {/* Getting Here */}
            <div className="bg-gradient-to-b from-clay-red/30 to-background-deep/50 backdrop-blur-sm rounded-3xl p-8 border border-antique-gold/30 asli-gold-glow">
              <h3 className="font-elegant text-2xl  text-gold mb-6 text-center">
                Getting Here
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-antique-gold/20 to-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-antique-gold/30">
                    <svg className="w-6 h-6 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" text-gold text-lg mb-1">By Metro</h4>
                    <p className="text-muted-ivory">Jubilee Hills Checkpost</p>
                    <p className="text-muted-ivory/70 text-sm">5 minutes by auto/cab</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-antique-gold/20 to-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-antique-gold/30">
                    <svg className="w-6 h-6 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" text-gold text-lg mb-1">Parking</h4>
                    <p className="text-muted-ivory">Ample parking available</p>
                    <p className="text-muted-ivory/70 text-sm">Free for restaurant guests</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-antique-gold/20 to-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-antique-gold/30">
                    <svg className="w-6 h-6 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" text-gold text-lg mb-1">Landmarks</h4>
                    <p className="text-muted-ivory">Jubilee Hills Road No. 36</p>
                    <p className="text-muted-ivory/70 text-sm">Near GVK One Mall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-antique-gold/30 text-center">
          <div className="mb-8">
            <h3 className="font-elegant text-3xl text-gold mb-2">
              <span className="bg-gradient-to-r from-antique-gold to-yellow-400 bg-clip-text text-transparent asli-text-glow">
                Asli Indian
              </span>
            </h3>
            <p className="text-muted-ivory/70">Unhurried. Refined. Indian.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <a href="tel:+918977710146" className="text-muted-ivory hover:text-antique-gold transition-colors duration-300">
              +91 89777 10146
            </a>
            <a href="mailto:info@asliindian.com" className="text-muted-ivory hover:text-antique-gold transition-colors duration-300">
              info@asliindian.com
            </a>
            <span className="text-muted-ivory">Jubilee Hills, Hyderabad</span>
          </div>
          
          <p className="text-muted-ivory/50 text-sm">
            © 2024 Asli Indian Restaurant. All rights reserved. | Crafted with passion for authentic Indian cuisine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
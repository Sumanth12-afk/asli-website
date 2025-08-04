import React, { useState } from 'react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const occasions = [
    'Birthday Celebration',
    'Anniversary',
    'Business Meeting',
    'Date Night',
    'Family Gathering',
    'Special Occasion',
    'Just Dining'
  ];

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const guestOptions = Array.from({ length: 20 }, (_, i) => (i + 1).toString());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree Integration - Live Form
      const response = await fetch('https://formspree.io/f/mwpqngww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          occasion: formData.occasion,
          requests: formData.requests,
          restaurant: 'Asli Indian Restaurant',
          submitted_at: new Date().toISOString()
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          occasion: '',
          requests: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your reservation. Please call us directly at +91 89777 10146');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Reservations
            </span>
          </h2>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="mx-3 sm:mx-4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 transform rotate-45"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Reservation Form */}
          <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 className="font-serif text-3xl text-white mb-8 text-center">
              Book Your Table
            </h3>

            {showSuccess && (
              <div className="mb-8 p-6 bg-green-900/20 border border-green-500/30 rounded-2xl">
                <div className="flex items-center text-green-400">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <div className="font-semibold">Reservation Confirmed!</div>
                    <div className="text-sm">We'll contact you shortly to confirm your booking.</div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                  placeholder="+91 89777 10146"
                />
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                  >
                    {guestOptions.map(option => (
                      <option key={option} value={option}>{option} {option === '1' ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Occasion
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                >
                  <option value="">Select Occasion (Optional)</option>
                  {occasions.map(occasion => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300 resize-none"
                  placeholder="Any dietary restrictions, seating preferences, or special arrangements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Confirming Reservation...
                  </div>
                ) : (
                  'Reserve Your Table'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & Hours */}
          <div className="space-y-8">
            {/* Restaurant Hours */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="font-serif text-2xl text-white mb-6">Restaurant Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">Monday - Thursday</span>
                  <span className="text-yellow-400 font-medium">12:00 PM - 10:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                  <span className="text-gray-300">Friday - Sunday</span>
                  <span className="text-yellow-400 font-medium">12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Kitchen Closes</span>
                  <span className="text-gray-400">30 minutes before closing</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="font-serif text-2xl text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+918977710146"
                  className="flex flex-col sm:flex-row items-center sm:items-center p-4 sm:p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 hover:from-yellow-400/20 hover:to-yellow-500/20 rounded-xl transition-all duration-300 group border border-yellow-400/20 space-y-3 sm:space-y-0"
                >
                  <div className="w-14 h-14 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-7 h-7 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-white text-lg sm:text-base">Call Now</div>
                    <div className="text-gray-400 text-base sm:text-sm break-words">+91 89777 10146</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918977710146?text=Hello! I would like to make a reservation at Asli Indian."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center sm:items-center p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 rounded-xl transition-all duration-300 group border border-green-500/20 space-y-3 sm:space-y-0"
                >
                  <div className="w-14 h-14 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-7 h-7 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-white text-lg sm:text-base">WhatsApp</div>
                    <div className="text-gray-400 text-base sm:text-sm">Chat with us</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="font-serif text-2xl text-white mb-6">Important Information</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Reservations are recommended, especially for weekends and special occasions
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Large groups (8+ people) require special arrangements
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cancellations should be made at least 2 hours in advance
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Smart casual dress code is preferred
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
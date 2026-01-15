import React, { useState } from 'react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting
  };

  return (
    <section id="reservations" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Image Parallax */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/ambience02.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-charcoal/95 border border-gold/30 p-8 md:p-12 lg:p-16 text-center shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="mb-12">
            <span className="text-gold text-xs uppercase tracking-[0.2em] block mb-4">
              Book a Table
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-white">
              Reservations
            </h2>
          </div>

          {/* Form - Galvin Clean Style */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="block w-full bg-transparent border-b border-warm-white/30 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors peer"
                  required
                />
                <label className="absolute left-0 top-3 text-warm-white/50 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="block w-full bg-transparent border-b border-warm-white/30 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors peer"
                  required
                />
                <label className="absolute left-0 top-3 text-warm-white/50 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="block w-full bg-transparent border-b border-warm-white/30 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors peer"
                  required
                />
                <label className="absolute left-0 top-3 text-warm-white/50 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                  Phone
                </label>
              </div>

              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-warm-white/30 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num} className="bg-charcoal text-warm-white">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-warm-white/50">
                  Must be > 2
                </div>
              </div>

              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-warm-white/30 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-warm-white/30 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors appearance-none"
                  required
                >
                  <option value="" className="bg-charcoal">Select Time</option>
                  <option value="18:00" className="bg-charcoal">6:00 PM</option>
                  <option value="19:00" className="bg-charcoal">7:00 PM</option>
                  <option value="20:00" className="bg-charcoal">8:00 PM</option>
                  <option value="21:00" className="bg-charcoal">9:00 PM</option>
                </select>
              </div>
            </div>

            <button type="submit" className="galvin-btn mt-8 hover:bg-gold hover:text-charcoal hover:border-gold">
              Confirm Reservation
            </button>
          </form>

          <div className="mt-8 text-warm-white/40 text-xs">
            For larger groups or special events, please contact us directly.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
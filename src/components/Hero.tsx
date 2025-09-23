'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError('Enter an email address like example@mysite.com.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    if (!firstName || !lastName || !email || !message || emailError) return;
    // Submit placeholder
    console.log({ firstName, lastName, email, phone, message });
    alert('Thanks! We\'ll contact you shortly.');
  };

  return (
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden xl:px-[48px] lg:px-[48px] md:px-0 m sm:px-0  mt-[160px]">
      {/* Background Image */}
      

      {/* Content */}
      <div className="relative  w-full z-10 text-center text-gray-800  md:mx-1 sm:mx-0  lg:mx-">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font_0 font-medium leading-tight mb-6">
            DEPENDABLE
            <br />
            LEGAL SUPPORT
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl lg:text-2xl font-serif italic text-gray-900 mb-8"
        >
          Experience the Difference
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className=" relative flex flex-col justify-end  sm:flex-row sm:justify-end gap-4  w-full items-end sm:items-center lg:p-10 md:p-10  sm:px-0"
          style={{
            backgroundImage: "url('/heroImg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        >


          <div className='ml-auto mr-10 mt-30 w-full max-w-xl bg-white   p-6 sm:p-8 text-left shadow-sm'>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900 ">Get a free consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">First name *</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 px-0 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Last name *</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 px-0 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => validateEmail(e.target.value)}
                    required
                    className={`w-full bg-transparent border-0 border-b px-0 py-2 focus:ring-0 ${emailError ? 'border-red-500 focus:border-red-600' : 'border-gray-400 focus:border-gray-900'}`}
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 px-0 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Write a message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 px-0 py-2 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="px-6 py-3 border border-gray-800 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
                  
        </motion.div>
          {/* Significant Figures Section */}
          <motion.div
          ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-full mt-16 bg-white/80">
            <h3 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 tracking-wide text-center">SIGNIFICANT FIGURES</h3>
            <p className="mt-4 text-gray-700 text-center italic">Our Achievements Spotlighted</p>
            <div className="mt-6 border-t border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-gray-300 border-b">
              <div className="py-12 text-center">
                <div className="text-6xl sm:text-7xl font-serif text-gray-900">30+</div>
                <div className="mt-4 italic text-lg sm:text-xl text-gray-700">Years in the industry</div>
              </div>
              <div className="py-12 text-center">
                <div className="text-6xl sm:text-7xl font-serif text-gray-900">500+</div>
                <div className="mt-4 italic text-lg sm:text-xl text-gray-700">Warmly served clients</div>
              </div>
              <div className="py-12 text-center">
                <div className="text-6xl sm:text-7xl font-serif text-gray-900">99%</div>
                <div className="mt-4 italic text-lg sm:text-xl text-gray-700">Victorious case outcomes</div>
              </div>
            </div>
          </motion.div>
      </div>

     
    </section>
  );
};

export default Hero;

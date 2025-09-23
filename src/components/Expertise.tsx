'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Static content cards per provided design

  return (
    <section id="expertise" ref={ref} className="py-20 bg-gray-50 ">
      <div className="w-full x-full  px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto">
            Legal Expertise & Support
          </p>
        </motion.div>

        {/* Top row: three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
            className="bg-gray-200  p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">
              <Image src="/hollow-circle.png" alt="Hollow circle icon" width={36} height={36} className="w-9 h-9" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Divorce Mediation</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Navigating the complexities of divorce proceedings with <br /> care and expertise.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-gray-200  p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">
              <Image src="/hollow-circle.png" alt="Hollow circle icon" width={36} height={36} className="w-9 h-9" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Child Custody</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Protecting the best interests of your child through <br /> skilled legal representation.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-gray-200  p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">
              <Image src="/hollow-circle.png" alt="Hollow circle icon" width={36} height={36} className="w-9 h-9" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Family Law Advocacy</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Advocating for your family&apos;s rights and interests with <br />professionalism and dedication.</p>
          </motion.div>

        </div>

        {/* Bottom row: 55/45 ratio on md+, 50/50 on sm */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[55%_44.5%] gap-2 md:gap-2">
          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-gray-200  p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">
              <Image src="/hollow-circle.png" alt="Hollow circle icon" width={36} height={36} className="w-9 h-9" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Mediation & Resolution</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Facilitating amicable solutions through <br /> mediation and focused resolution strategies.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-gray-200  p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">
              <Image src="/hollow-circle.png" alt="Hollow circle icon" width={36} height={36} className="w-9 h-9" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Legal Consultation</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Providing tailored legal advice and consultation to address your <br/> family&apos;s unique needs.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="text-center mt-12 sm:mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;

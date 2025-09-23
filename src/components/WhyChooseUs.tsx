'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const OurAttorneys = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const attorneys = [
    {
      name: 'AIDEN WALTERS',
      role: 'PARTNER',
      tel: 'Tel: 123-456-7890',
      email: 'info@mysite.com',
      img: '/l1.jpg',
    },
    {
      name: 'JULIA KNOLL',
      role: 'PARTNER',
      tel: 'Tel: 123-456-7890',
      email: 'info@mysite.com',
      img: '/l2.jpg',
    },
    {
      name: 'JAMES LOPEZ',
      role: 'PARTNER',
      tel: 'Tel: 123-456-7890',
      email: 'info@mysite.com',
      img: '/l3.jpg',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-wide">
            OUR ATTORNEYS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {attorneys.map((a, index) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-56 shadow-md overflow-hidden">
                <Image src={a.img} alt={a.name} width={192} height={224} className="w-full h-full object-cover" />
              </div>
              <div className="mt-6">
                <h3 className="text-gray-900 font-semibold tracking-wide">{a.name}</h3>
                <p className="text-[#2a6b95] text-sm">{a.role}</p>
              </div>
              <div className="mt-6 text-sm text-gray-900">
                <p>{a.tel}</p>
                <p>{a.email}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-end">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-sm shadow hover:bg-gray-800 transition-colors">
            CHAT WITH US!
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurAttorneys;

// src/components/Services.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  'MVP Development',
  'Pitch Deck Creation',
  'Startup Branding',
  'Early GTM Support',
  'Founder Mentoring',
  'Fundraising Guidance',
];

export default function Services() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl border shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-[#1c8d14] mb-2">{service}</h3>
            <p className="text-gray-600">High-impact services designed for startup success.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// src/components/Hero.js

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-green-100 to-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-[#1c8d14]">
          Accelerate Your Startup from Idea to MVP
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          TVA Labs is your launchpad — turning early-stage ideas into investable startups.
        </p>
        <Button className="bg-[#1c8d14] text-white px-6 py-3 rounded-xl hover:bg-green-700">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}

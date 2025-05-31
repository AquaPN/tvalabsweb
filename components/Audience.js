// src/components/Audience.js

'use client';

import React from 'react';

const personas = [
  'Aspiring Founders',
  'University Spin-offs',
  'First-time Entrepreneurs',
  'Bootstrapped Builders',
];

export default function Audience() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Who It’s For</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        TVA Labs is built for:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {personas.map((persona, i) => (
          <span
            key={i}
            className="bg-white px-4 py-2 rounded-full shadow text-[#1c8d14] font-medium"
          >
            {persona}
          </span>
        ))}
      </div>
    </section>
  );
}

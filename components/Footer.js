// src/components/Footer.js

'use client';

import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 text-center bg-white border-t">
      <div className="flex flex-col items-center gap-3">
        <Rocket className="text-[#1c8d14]" size={32} />
        <p className="text-gray-600">TVA Labs © {new Date().getFullYear()}</p>
        <p className="text-sm text-gray-500">hello@tvalabs.in</p>
      </div>
    </footer>
  );
}

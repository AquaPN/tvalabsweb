'use client';
import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-[#1c8d14] hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

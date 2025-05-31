// src/app/layout.js

// FIX: Adjust the import path to correctly point to styles/globals.css
// src/app/layout.js
import '../styles/globals.css';export const metadata = {
  title: 'TVA Labs - Accelerate Your Startup',
  description: 'TVA Labs is your launchpad — turning early-stage ideas into investable startups.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
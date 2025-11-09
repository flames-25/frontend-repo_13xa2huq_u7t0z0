import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Resources from './components/Resources';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} CircuLaunch — Crafted for a greener future.</p>
          <div className="text-xs text-gray-500">
            Built with an interactive 3D globe, images, and video to inspire circular innovation.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Resources />
      <Footer />
    </div>
  );
}

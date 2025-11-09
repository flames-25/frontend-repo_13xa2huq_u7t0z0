import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md ring-1 ring-white/20">
        <svg
          viewBox="0 0 48 48"
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 24c0-8.284 6.716-15 15-15 3.407 0 6.55 1.128 9.06 3.02" />
          <path d="M39 24c0 8.284-6.716 15-15 15-3.407 0-6.55-1.128-9.06-3.02" />
          <path d="M24 6v7" />
          <path d="M24 35v7" />
          <path d="M10 24h7" />
          <path d="M31 24h7" />
        </svg>
      </div>
      <div className="leading-tight">
        <p className="font-semibold text-gray-900">CircuLaunch</p>
        <p className="text-xs text-gray-600">Circular Economy & Green Entrepreneurship</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="shrink-0" aria-label="CircuLaunch Home">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#gallery" className="hover:text-gray-900 transition">Gallery</a>
            <a href="#resources" className="hover:text-gray-900 transition">Resources</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Leaf className="h-3.5 w-3.5" /> Green-first
            </span>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3.5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
            >
              <Recycle className="h-4 w-4" /> Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

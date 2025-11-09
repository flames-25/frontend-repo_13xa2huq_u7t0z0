import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-black text-white" aria-label="Interactive 3D hero">
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        <Spline
          scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Gradient overlay for readable text (does not block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:pb-0">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Circular Economy & Green Entrepreneurship
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                Explore sustainable business models that turn waste into value. Learn, prototype,
                and launch ventures that regenerate our planet.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-400 transition"
                >
                  Start Learning
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  See Examples
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

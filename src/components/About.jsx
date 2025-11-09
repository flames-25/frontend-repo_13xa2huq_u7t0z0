import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What is the Circular Economy?
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The circular economy keeps products and materials in use, designs out waste,
              and regenerates natural systems. For entrepreneurs, it opens new markets by
              transforming by-products into resources and prioritizing durability, sharing,
              repair, and recycling.
            </p>
            <ul className="mt-6 grid gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-gray-700">Design out waste and pollution</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-gray-700">Keep products and materials in use</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-gray-700">Regenerate natural systems</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <video
                className="h-full w-full object-cover"
                src="https://cdn.coverr.co/videos/coverr-green-forest-2-2017/1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Short looped footage symbolizing regeneration and nature-positive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

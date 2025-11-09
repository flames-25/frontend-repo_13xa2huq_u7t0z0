import React from 'react';

const items = [
  {
    title: 'Upcycled Products',
    img: 'https://images.unsplash.com/photo-1563284319-1b0b6a41d51f?q=80&w=1600&auto=format&fit=crop',
    caption: 'Turning waste streams into high-value goods.'
  },
  {
    title: 'Clean Energy Startups',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
    caption: 'Solar, wind, and circular energy loops.'
  },
  {
    title: 'Repair & Reuse',
    img: 'https://images.unsplash.com/photo-1523419409543-7a0df3c10c5b?q=80&w=1600&auto=format&fit=crop',
    caption: 'Extending product lifecycles through maintenance.'
  },
  {
    title: 'Closed-Loop Manufacturing',
    img: 'https://images.unsplash.com/photo-1581093806997-124204d9fa1b?q=80&w=1600&auto=format&fit=crop',
    caption: 'Designing factories that reuse materials.'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Inspiration Gallery</h2>
          <p className="text-sm text-gray-600 max-w-md">
            Real-world visuals of circular initiatives and planet-positive ventures.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card) => (
            <figure key={card.title} className="group overflow-hidden rounded-xl bg-white shadow ring-1 ring-gray-200/60">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <figcaption className="p-4">
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{card.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const resources = [
  {
    title: 'Ellen MacArthur Foundation',
    description: 'Leading research and frameworks for circular economy transition.',
    url: 'https://ellenmacarthurfoundation.org/'
  },
  {
    title: 'UNEP: Green Entrepreneurship',
    description: 'United Nations resources on sustainable enterprise development.',
    url: 'https://www.unep.org/'
  },
  {
    title: 'IDEO Circular Design Guide',
    description: 'Practical methods to design circular products and services.',
    url: 'https://www.circulardesignguide.com/'
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Learn & Explore</h2>
        <p className="mt-2 text-gray-700 max-w-2xl">
          Dive deeper with curated tools, playbooks, and institutions accelerating the shift to
          regenerative business models.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">{r.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{r.description}</p>
              <span className="mt-3 inline-block text-xs font-medium text-emerald-700">Visit resource →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

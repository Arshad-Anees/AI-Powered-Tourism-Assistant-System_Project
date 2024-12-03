import React from 'react';
import { DestinationCard } from './DestinationCard';

const destinations = [
  {
    title: "Sigiriya Rock Fortress",
    location: "Dambulla",
    image: "https://images.unsplash.com/photo-1586516478796-98455240ca6a?auto=format&fit=crop&q=80",
    rating: 4.8,
    description: "Ancient palace and fortress complex with stunning frescoes and lion-shaped gateway."
  },
  {
    title: "Temple of the Tooth",
    location: "Kandy",
    image: "https://images.unsplash.com/photo-1625048146179-5c661d85cd19?auto=format&fit=crop&q=80",
    rating: 4.7,
    description: "Sacred Buddhist temple housing the relic of Buddha's tooth."
  },
  {
    title: "Galle Fort",
    location: "Galle",
    image: "https://images.unsplash.com/photo-1586516478749-f6a8d431afb8?auto=format&fit=crop&q=80",
    rating: 4.6,
    description: "UNESCO World Heritage site featuring colonial architecture and ocean views."
  }
];

export function DestinationsGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.title} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
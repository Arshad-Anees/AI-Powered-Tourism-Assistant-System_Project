import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  location: string;
  image: string;
  rating: number;
  description: string;
}

export function DestinationCard({ title, location, image, rating, description }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
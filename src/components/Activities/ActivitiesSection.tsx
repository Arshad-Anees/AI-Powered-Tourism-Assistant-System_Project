import React, { useState } from 'react';
import { Activity, ActivityFilters } from '../../types/activities';
import { ActivityCard } from './ActivityCard';
import { Filter } from 'lucide-react';

const activities: Activity[] = [
  {
    id: '1',
    title: 'Ancient Temples Tour',
    category: 'culture',
    duration: '8 hours',
    price: 75,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1625048146179-5c661d85cd19?auto=format&fit=crop&q=80',
    description: 'Explore the ancient temples of Anuradhapura',
    location: 'Anuradhapura',
    included: ['Expert guide', 'Lunch', 'Transport', 'Entrance fees']
  },
  {
    id: '2',
    title: 'Wildlife Safari',
    category: 'nature',
    duration: '6 hours',
    price: 90,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&q=80',
    description: 'Spot elephants and leopards in their natural habitat',
    location: 'Yala National Park',
    included: ['Jeep safari', 'Experienced tracker', 'Refreshments', 'Park fees']
  },
  {
    id: '3',
    title: 'Surfing Adventure',
    category: 'adventure',
    duration: '4 hours',
    price: 60,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80',
    description: 'Catch waves at one of Sri Lanka\'s best surf spots',
    location: 'Arugam Bay',
    included: ['Equipment', 'Instructor', 'Safety gear', 'Beach facilities']
  }
];

export function ActivitiesSection() {
  const [filters, setFilters] = useState<ActivityFilters>({
    category: null,
    priceRange: [0, 200],
    duration: null
  });

  const filteredActivities = activities.filter(activity => {
    if (filters.category && activity.category !== filters.category) return false;
    if (activity.price < filters.priceRange[0] || activity.price > filters.priceRange[1]) return false;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Activities</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700">Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
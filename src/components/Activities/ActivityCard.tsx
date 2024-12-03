import React from 'react';
import { Clock, MapPin, Star, Check } from 'lucide-react';
import { Activity } from '../../types/activities';

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-900">
            ${activity.price}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium
            ${activity.category === 'culture' ? 'bg-purple-100 text-purple-700' :
            activity.category === 'nature' ? 'bg-green-100 text-green-700' :
            activity.category === 'adventure' ? 'bg-orange-100 text-orange-700' :
            'bg-blue-100 text-blue-700'}`}>
            {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {activity.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {activity.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{activity.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{activity.duration}</span>
        </div>

        <div className="space-y-2 mb-4">
          {activity.included.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}
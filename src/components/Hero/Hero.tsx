import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588258524675-c61945788959?auto=format&fit=crop&q=80"
          alt="Sigiriya Rock Fortress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Experience the Wonder of Sri Lanka
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover ancient temples, pristine beaches, and lush landscapes with our AI-powered travel companion.
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-600 transition-colors">
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
}
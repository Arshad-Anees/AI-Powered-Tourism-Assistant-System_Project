import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { getWeather } from '../../services/weatherService';
import { WEATHER_CONFIG } from '../../config/constants';

export function WeatherWidget() {
  const { data: weather, isLoading, error } = useQuery({
    queryKey: ['weather', WEATHER_CONFIG.DEFAULT_CITY],
    queryFn: () => getWeather(WEATHER_CONFIG.DEFAULT_CITY),
    refetchInterval: WEATHER_CONFIG.REFRESH_INTERVAL,
    retry: 2
  });

  if (isLoading) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex items-center justify-center text-gray-500">
          <Cloud className="h-5 w-5 mr-2" />
          <span>Weather data unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{weather.location}</h3>
          <p className="text-gray-600">{weather.condition}</p>
        </div>
        <div className="text-3xl font-bold text-gray-900">
          {weather.temperature}°C
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4" />
          <span>{weather.condition}</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4" />
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="h-4 w-4" />
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
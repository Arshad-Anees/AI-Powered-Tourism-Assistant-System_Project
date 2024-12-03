import axios from 'axios';
import { WeatherResponse, WeatherData } from '../types/weather';
import { WEATHER_CONFIG, MOCK_WEATHER_DATA } from '../config/constants';

const isDevelopment = import.meta.env.DEV;

export async function getWeather(city: string): Promise<WeatherData> {
  if (isDevelopment) {
    // Return mock data in development
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_WEATHER_DATA), 500);
    });
  }

  try {
    const response = await axios.get<WeatherResponse>(
      `${WEATHER_CONFIG.BASE_URL}/current.json`,
      {
        params: {
          key: WEATHER_CONFIG.API_KEY,
          q: city,
          aqi: 'no'
        }
      }
    );

    return {
      location: response.data.location.name,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon,
      humidity: response.data.current.humidity,
      windSpeed: response.data.current.wind_kph
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.error?.message || 'Failed to fetch weather data'
      );
    }
    throw error;
  }
}
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { DestinationsGrid } from './components/Destinations/DestinationsGrid';
import { ActivitiesSection } from './components/Activities/ActivitiesSection';
import { ChatBox } from './components/AIAssistant/ChatBox';
import { WeatherWidget } from './components/Weather/WeatherWidget';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <div className="fixed top-20 right-6 z-40 w-80">
          <WeatherWidget />
        </div>
        <DestinationsGrid />
        <ActivitiesSection />
        <ChatBox />
      </div>
    </QueryClientProvider>
  );
}

export default App;
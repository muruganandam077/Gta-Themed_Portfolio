'use client';

import { useEffect, useState } from 'react';

interface StatusBarProps {
  currentScene: number;
}

export default function StatusBar({ currentScene }: StatusBarProps) {
  const [signal, setSignal] = useState(98.4);
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState(new Date());

  // Calculate money based on scene
  const getMoney = () => {
    const baseAmount = 2750000;
    const increment = 150000; // Add $150k per scene
    return baseAmount + (currentScene * increment);
  };

  // Calculate health based on scene
  const getHealth = () => {
    // Health decreases as you progress, then regenerates
    const healthValues = [100, 95, 85, 80, 90, 100, 100]; // Different health per scene
    return healthValues[currentScene] || 100;
  };

  // Calculate stars based on scene (1-5 stars)
  const getStars = () => {
    return Math.min(currentScene + 1, 5);
  };

  useEffect(() => {
    setIsMounted(true);

    // Subtle signal fluctuation
    const signalInterval = setInterval(() => {
      setSignal(prev => Math.max(95, Math.min(100, prev + (Math.random() - 0.5) * 2)));
    }, 2000);

    // Update time every second
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(signalInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const stars = getStars();
  const money = getMoney();
  const health = getHealth();

  // Format time as HH:MM:SS
  const formatTime = () => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      {/* Top center - Signal and Time in floating island containers */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center space-y-3">
        {/* Signal Container */}
        <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-3 text-sm font-pricedown text-white">
            <div className="w-2 h-2 bg-gta-pink animate-pulse rounded-full" />
            <span className="opacity-60 tracking-wider">SIGNAL</span>
            <span className="font-bold text-lg">{signal.toFixed(1)}</span>
          </div>
        </div>

        {/* Time Container */}
        <div className="bg-black/70 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-3 text-sm font-pricedown text-white">
            <span className="opacity-60 tracking-wider">TIME</span>
            <span className="font-bold text-lg tracking-widest">{isMounted ? formatTime() : '00:00:00'}</span>
          </div>
        </div>
      </div>

      {/* Top right - Stats No Container */}
      <div className="fixed top-10 right-10 z-50">
        <div className="flex flex-col items-end space-y-3 font-sans text-white">
          {/* Money - Changes with scene */}
          <div className="text-2xl font-bold text-green-400 transition-all duration-500">
            ${isMounted ? money.toLocaleString('en-US') : '2,750,000'}
          </div>

          {/* Health - Changes with scene */}
          <div className="flex items-center space-x-2">
            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500"
                style={{ width: `${health}%` }}
              />
            </div>
            <span className="text-sm">{health}</span>
          </div>

          {/* Wanted stars - changes based on scene */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`text-lg transition-all duration-300 ${
                  i < stars ? 'text-yellow-400 scale-110' : 'text-white/20'
                }`}
              >
                ★
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

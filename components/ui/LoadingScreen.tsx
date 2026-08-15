'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const stages = [
      { label: 'LOADING WORLD', duration: 800 },
      { label: 'LOADING PLAYER', duration: 600 },
      { label: 'LOADING MISSIONS', duration: 700 },
    ];

    let currentProgress = 0;
    const totalDuration = stages.reduce((acc, s) => acc + s.duration, 0);
    const interval = 50;

    const timer = setInterval(() => {
      currentProgress += (interval / totalDuration) * 100;
      setProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setIsComplete(true), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="max-w-md w-full px-8">
        <div className="text-center mb-8">
          <h1 className="text-7xl font-pricedown text-white mb-2 text-gta-shadow">
            PORTFOLIO
          </h1>
          <p className="text-sm font-sans text-white/60">INITIALIZING EXPERIENCE...</p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gta-pink transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-center text-sm font-sans text-white/40">
          {progress < 100 ? `${Math.floor(progress)}%` : 'COMPLETE'}
        </div>
      </div>
    </div>
  );
}

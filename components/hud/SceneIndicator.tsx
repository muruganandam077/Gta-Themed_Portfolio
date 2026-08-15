'use client';

import { scenes } from '@/lib/data/scenes';

interface SceneIndicatorProps {
  currentScene: number;
}

export default function SceneIndicator({ currentScene }: SceneIndicatorProps) {
  const scene = scenes[currentScene];

  // Always show on all screens
  return (
    <div className="fixed top-8 left-8 z-50 text-white pointer-events-none">
      <div className="flex flex-col space-y-2">
        <div className="text-7xl font-pricedown leading-none tracking-tight text-gta-shadow">
          {currentScene === 0 ? 'Muruganandam' : scene?.title || 'START'}
        </div>
        <div className="text-3xl font-pricedown text-gta-pink text-gta-shadow italic">
          {scene?.subtitle || 'Portfolio'}
        </div>
      </div>

      {/* Scene progress */}
      <div className="mt-4 flex items-center space-x-2 text-sm opacity-60 font-sans">
        <span>{String(currentScene + 1).padStart(2, '0')}</span>
        <span>/</span>
        <span>{String(scenes.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

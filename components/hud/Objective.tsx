'use client';

import { scenes } from '@/lib/data/scenes';

interface ObjectiveProps {
  currentScene: number;
}

export default function Objective({ currentScene }: ObjectiveProps) {
  const scene = scenes[currentScene];

  // Always show on all screens
  return (
    <div className="fixed bottom-12 left-16 z-50 text-white">
      <div className="bg-black/90 backdrop-blur-sm border-l-4 border-gta-pink px-6 py-4 max-w-md rounded-lg">
        <div className="text-xs font-pricedown tracking-wider text-gta-pink mb-2">
          CURRENT OBJECTIVE
        </div>
        <div className="text-lg font-pricedown text-white">
          {scene?.objective || 'PRESS SCROLL TO BEGIN'}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { scenes } from '@/lib/data/scenes';
import SceneIndicator from './SceneIndicator';
import StatusBar from './StatusBar';
import Objective from './Objective';
import MiniMap from './MiniMap';

interface GameHUDProps {
  currentScene: number;
  onNavigateHome?: () => void;
}

export default function GameHUD({ currentScene, onNavigateHome }: GameHUDProps) {
  return (
    <>
      <SceneIndicator currentScene={currentScene} />
      <StatusBar currentScene={currentScene} />
      <Objective currentScene={currentScene} />
      <MiniMap currentScene={currentScene} onEscPress={onNavigateHome} />

      {/* Bottom right quote */}
      <div className="fixed bottom-10 right-10 z-50 text-white text-right max-w-xs">
        <div className="text-sm italic opacity-70 font-sans leading-relaxed">
          "Code is my weapon,<br />
          Creativity is my world."
          <div className="text-xs mt-2 opacity-50">— Muruganandam</div>
        </div>
      </div>
    </>
  );
}

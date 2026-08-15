'use client';

import { useState, useEffect } from 'react';
import { scenes } from '@/lib/data/scenes';

interface GTANavigationProps {
  currentScene: number;
  onNavigate: (sceneId: string | number) => void;
}

const labels = ['START GAME', 'ABOUT ME', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'ACHIEVEMENTS', 'CONTACT'];
const menuItems = scenes.map((s, i) => ({
  label: labels[i] ?? s.title.toUpperCase(),
  sceneId: s.id,
  index: i,
}));

export default function GTANavigation({ currentScene, onNavigate }: GTANavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Only show navigation on start screen (scene 0)
  useEffect(() => {
    setIsVisible(currentScene === 0);
  }, [currentScene]);

  if (!isVisible) return null;

  const handleNavigate = (sceneIndex: number) => {
    onNavigate(sceneIndex);
  };

  return (
    <nav className="fixed left-16 top-1/2 -translate-y-1/2 z-40">
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => {
              console.debug('GTANavigation click', item.label, item.sceneId, item.index);
              handleNavigate(item.sceneId);
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              gta-menu-item block text-left font-pricedown text-4xl tracking-wider leading-tight
              ${currentScene === item.index ? 'active text-gta-pink' : 'text-white'}
              ${hoveredIndex === index ? 'text-gta-pink' : ''}
              text-gta-shadow transition-all
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

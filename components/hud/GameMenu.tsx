'use client';

import { useState, useEffect } from 'react';

import { scenes } from '@/lib/data/scenes';

interface GameMenuProps {
  onNavigate: (sceneId: string | number) => void;
  currentScene: number;
}

const labels = ['START EXPERIENCE', 'ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'ACHIEVEMENTS', 'CONTACT'];
const menuItems = scenes.map((s, i) => ({ label: labels[i] ?? s.title.toUpperCase(), sceneId: s.id, index: i }));

export default function GameMenu({ onNavigate, currentScene }: GameMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(!isOpen);
      }

      if (isOpen) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + menuItems.length) % menuItems.length);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % menuItems.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          onNavigate(menuItems[selectedIndex].sceneIndex);
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, onNavigate]);

  return (
    <>
      {/* Menu toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 right-6 -translate-y-1/2 z-50 text-white opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col space-y-1.5 w-8">
          <div className="h-0.5 bg-white transition-all" />
          <div className="h-0.5 bg-white transition-all" />
          <div className="h-0.5 bg-white transition-all" />
        </div>
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div className="max-w-2xl w-full px-8">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-condensed font-bold text-white mb-2">
                PORTFOLIO
              </h2>
              <p className="text-sm text-white/60 font-sans">
                Use arrow keys or click to navigate
              </p>
            </div>

            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                    <button
                        key={item.label}
                        onClick={() => {
                          console.debug('GameMenu click', item.label, item.sceneId, item.index);
                          onNavigate(item.sceneId);
                          setIsOpen(false);
                        }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`
                    w-full text-left px-6 py-4 font-condensed text-2xl
                    transition-all duration-200 relative group
                          ${selectedIndex === index ? 'bg-white/10 text-gta-cyan' : 'text-white/60'}
                          ${currentScene === item.index ? 'border-l-4 border-gta-cyan' : ''}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>

                  {selectedIndex === index && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gta-cyan rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-12 text-center text-sm text-white/40">
              <p>Press ESC to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

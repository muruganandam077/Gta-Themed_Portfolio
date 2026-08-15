'use client';

import { useRef, useEffect, useState } from 'react';
import { scenes } from '@/lib/data/scenes';
import VideoScene from './VideoScene';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CinematicStageProps {
  children: React.ReactNode;
  onSceneChange?: (sceneIndex: number) => void;
}

export default function CinematicStage({ children, onSceneChange }: CinematicStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the cinematic stage
      ScrollTrigger.create({
        trigger: stageRef.current,
        start: 'top top',
        end: `+=${scenes.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // Calculate which scene should be active based on scroll progress
          const sceneIndex = Math.min(
            Math.floor(self.progress * scenes.length),
            scenes.length - 1
          );

          if (sceneIndex !== activeScene) {
            setActiveScene(sceneIndex);
            onSceneChange?.(sceneIndex);
          }
        },
      });

      // Camera zoom/movement effects per scene
      scenes.forEach((scene, index) => {
        const progress = index / scenes.length;
        const nextProgress = (index + 1) / scenes.length;

        gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            start: 'top top',
            end: `+=${scenes.length * 100}%`,
            scrub: 1,
            onEnter: () => setActiveScene(index),
          },
        });
      });
    }, stageRef);

    return () => ctx.revert();
  }, [activeScene, onSceneChange]);

  return (
    <div ref={stageRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video layers */}
      <div className="absolute inset-0">
        {scenes.map((scene, index) => (
          <VideoScene
            key={scene.id}
            video={scene.video}
            isActive={index === activeScene}
            opacity={index === activeScene ? 1 : 0}
          />
        ))}
      </div>

      {/* HUD and content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

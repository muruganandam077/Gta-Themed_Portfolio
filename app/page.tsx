'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { scenes } from '@/lib/data/scenes';
import LoadingScreen from '@/components/ui/LoadingScreen';
import LenisSmoothScroll from '@/components/cinematic/LenisSmoothScroll';
import CinematicStage from '@/components/cinematic/CinematicStage';
import GameHUD from '@/components/hud/GameHUD';
import GTANavigation from '@/components/hud/GTANavigation';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import HomeScene from '@/components/sections/HomeScene';
import AboutScene from '@/components/sections/AboutScene';
import SkillsScene from '@/components/sections/SkillsScene';
import ProjectsScene from '@/components/sections/ProjectsScene';
import ExperienceScene from '@/components/sections/ExperienceScene';
import AchievementsScene from '@/components/sections/AchievementsScene';
import ContactScene from '@/components/sections/ContactScene';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [spacerHeight, setSpacerHeight] = useState<number | null>(null);

  useEffect(() => {
    // Hide loading screen after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide scroll indicator after first scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // set spacer height to scenes.length * innerHeight to match ScrollTrigger end
    if (typeof window === 'undefined') return;
    const sceneCount = scenes.length;
    const full = sceneCount * window.innerHeight;
    setSpacerHeight(full);
    const onResize = () => setSpacerHeight(sceneCount * window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavigate = (sceneIdOrIndex: number | string) => {
    // Accept either a numeric index (0-based) or a scene id string
    let targetIndex: number;
    if (typeof sceneIdOrIndex === 'number') {
      targetIndex = sceneIdOrIndex;
    } else {
      targetIndex = scenes.findIndex((s) => s.id === sceneIdOrIndex);
    }

    if (targetIndex < 0) targetIndex = 0;

    // Calculate scroll position based on viewport height per scene (each scene = 100vh)
    const targetScroll = targetIndex * window.innerHeight;

    // If Lenis is available, use its scrollTo for smooth scrolling
    // @ts-ignore
    if (typeof window !== 'undefined' && (window.__lenis as any)?.scrollTo) {
      // @ts-ignore
      window.__lenis.scrollTo(targetScroll);
      return;
    }

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentScene(0);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <LenisSmoothScroll>
        <main className="relative">
          {/* Main cinematic experience */}
          <CinematicStage onSceneChange={setCurrentScene}>
            <GameHUD currentScene={currentScene} onNavigateHome={handleNavigateHome} />
            <GTANavigation onNavigate={handleNavigate} currentScene={currentScene} />

            {/* Scene content */}
            <HomeScene isActive={currentScene === 0} />
            <AboutScene isActive={currentScene === 1} />
            <SkillsScene isActive={currentScene === 2} />
            <ProjectsScene isActive={currentScene === 3} />
            <ExperienceScene isActive={currentScene === 4} />
            <AchievementsScene isActive={currentScene === 5} />
            <ContactScene isActive={currentScene === 6} />

            {showScrollIndicator && currentScene === 0 && <ScrollIndicator />}
          </CinematicStage>

          {/* Spacer for scroll height - computed to match ScrollTrigger */}
          <div style={{ height: spacerHeight ? `${spacerHeight}px` : `${(scenes.length - 1) * 100}vh` }} />
        </main>
      </LenisSmoothScroll>
    </>
  );
}

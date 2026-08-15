'use client';

import { achievements } from '@/lib/data/achievements';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AchievementsScene({ isActive }: { isActive: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.achievement-item', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div ref={containerRef} className="flex items-center justify-start h-full px-16 tracking-wider">
      <div className="max-w-4xl w-full text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="achievement-item"
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>

              <h3 className="text-2xl font-pricedown text-white mb-2">
                {achievement.title}
              </h3>

              <p className="text-sm font-pricedown text-white/80 mb-2">
                {achievement.description}
              </p>

              <div className="flex justify-between items-center text-xs font-pricedown text-white/60">
                <span className="uppercase text-gta-pink">{achievement.category}</span>
                <span>{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

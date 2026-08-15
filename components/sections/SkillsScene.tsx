'use client';

import { skillCategories } from '@/lib/data/skills';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SkillsSceneProps {
  isActive: boolean;
}

export default function SkillsScene({ isActive }: SkillsSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.skill-item', {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.skill-bar', {
        scaleX: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div ref={containerRef} className="flex items-start justify-start h-full px-7 pt-80 pb-15" style={{ letterSpacing: '0.10em' }}>
      <div className="w-full flex justify-start ml-12">
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-item">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-pricedown text-white">
                  {category.name}
                </h3>
                <span className="text-2xl font-pricedown" style={{ color: category.color }}>
                  {category.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full origin-left"
                  style={{
                    backgroundColor: category.color,
                    transform: `scaleX(${category.level / 100})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

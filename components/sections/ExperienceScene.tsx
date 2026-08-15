'use client';

import { experiences } from '@/lib/data/experience';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ExperienceScene({ isActive }: { isActive: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div ref={containerRef} className="flex items-center justify-start h-full px-16 tracking-wider">
      <div className="max-w-3xl w-full text-left">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gta-pink/50" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-gta-pink rounded-full -translate-x-[5px]" />

                <div>
                  <div className="text-sm text-gta-pink font-pricedown mb-1">
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-pricedown text-white mb-1">
                    {exp.title}
                  </h3>
                  {exp.organization && (
                    <div className="text-sm font-pricedown text-white/60 mb-2">
                      {exp.organization}
                    </div>
                  )}
                  <p className="font-pricedown text-white/80">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { projects } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ProjectsScene({ isActive }: { isActive: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div ref={containerRef} className="flex items-start justify-start h-full px-6 pt-48 pb-16 overflow-y-auto" style={{ letterSpacing: '0.15em' }}>
      <div className="max-w-2xl w-full ml-12">
        <div className="space-y-4">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

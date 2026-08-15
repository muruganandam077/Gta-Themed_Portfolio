'use client';

import React from 'react';

type Project = {
  id: string | number;
  mission?: string;
  name: string;
  category?: string;
  status?: 'completed' | 'in progress' | string;
  description?: string;
  techStack?: string[];
  keyResult?: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card bg-transparent rounded-lg p-6 mb-6 border border-white/5" style={{ letterSpacing: '0.15em' }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-pricedown text-white leading-tight">{project.name}</h3>
          <div className="text-lg font-rage text-white/60 mt-2">{project.category}</div>
        </div>
      </div>

      <div className="flex space-x-6">
        {project.github && (
          <a href={project.github} className="text-xl font-pricedown text-gta-pink hover:text-white transition-colors">GITHUB →</a>
        )}
        {project.demo && (
          <a href={project.demo} className="text-xl font-pricedown text-gta-pink hover:text-white transition-colors">DEMO →</a>
        )}
      </div>
    </div>
  );
}

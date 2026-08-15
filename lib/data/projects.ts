export interface Project {
  id: string;
  mission: string;
  name: string;
  category: string;
  description: string;
  techStack: string[];
  keyResult?: string;
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    id: 'project-1',
    mission: 'MISSION 01',
    name: '[PROJECT NAME]',
    category: 'AI / ML',
    description: '[Brief description of the project and what problem it solves]',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    keyResult: '[Key achievement or metric]',
    github: '#',
    demo: '#',
    status: 'completed',
  },
  {
    id: 'project-2',
    mission: 'MISSION 02',
    name: '[PROJECT NAME]',
    category: 'Full Stack',
    description: '[Brief description of the project and what problem it solves]',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'],
    keyResult: '[Key achievement or metric]',
    github: '#',
    demo: '#',
    status: 'completed',
  },
  {
    id: 'project-3',
    mission: 'MISSION 03',
    name: '[PROJECT NAME]',
    category: 'Computer Vision',
    description: '[Brief description of the project and what problem it solves]',
    techStack: ['Python', 'OpenCV', 'YOLO', 'Flutter'],
    keyResult: '[Key achievement or metric]',
    github: '#',
    demo: '#',
    status: 'in-progress',
  },
];

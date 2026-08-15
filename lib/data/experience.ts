export interface Experience {
  id: string;
  year: string;
  title: string;
  organization?: string;
  description: string;
  type: 'work' | 'education' | 'project';
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    year: '2026',
    title: '[Current Role]',
    organization: '[Organization Name]',
    description: '[Brief description of responsibilities and achievements]',
    type: 'work',
  },
  {
    id: 'exp-2',
    year: '2025',
    title: '[Previous Role/Internship]',
    organization: '[Organization Name]',
    description: '[Brief description of responsibilities and achievements]',
    type: 'work',
  },
  {
    id: 'exp-3',
    year: '2024-2025',
    title: '[Education]',
    organization: '[University/College Name]',
    description: '[Degree and specialization]',
    type: 'education',
  },
];

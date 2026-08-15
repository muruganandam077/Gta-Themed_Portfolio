export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: 'hackathon' | 'certification' | 'award' | 'project';
  unlocked: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: '[Achievement Title]',
    description: '[Description of achievement]',
    date: '2026',
    icon: '🏆',
    category: 'award',
    unlocked: true,
  },
  {
    id: 'ach-2',
    title: '[Achievement Title]',
    description: '[Description of achievement]',
    date: '2025',
    icon: '💡',
    category: 'hackathon',
    unlocked: true,
  },
  {
    id: 'ach-3',
    title: '[Achievement Title]',
    description: '[Description of achievement]',
    date: '2025',
    icon: '📜',
    category: 'certification',
    unlocked: true,
  },
  {
    id: 'ach-4',
    title: '[Achievement Title]',
    description: '[Description of achievement]',
    date: '2024',
    icon: '⚡',
    category: 'project',
    unlocked: true,
  },
];

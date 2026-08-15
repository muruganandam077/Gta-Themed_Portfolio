export interface Scene {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  video: string;
  description: string;
  objective: string;
  accent: string;
  duration: number; // video duration in seconds
  category?: string;
}

export const scenes: Scene[] = [
  {
    id: 'home',
    index: 1,
    title: 'START',
    subtitle: 'Experience',
    video: '/videos/Start.mp4',
    description: 'Welcome to the portfolio',
    objective: 'PRESS SCROLL TO BEGIN',
    accent: '#00ffff',
    duration: 5.6,
  },
  {
    id: 'about',
    index: 2,
    title: 'ABOUT',
    subtitle: 'Profile',
    video: '/videos/about.mp4',
    description: 'Developer & AI Engineer',
    objective: 'EXPLORE THE PLAYER PROFILE',
    accent: '#00ffff',
    duration: 8.0,
    category: 'AI & Data Science Developer',
  },
  {
    id: 'skills',
    index: 3,
    title: 'SKILLS',
    subtitle: 'Abilities',
    video: '/videos/skills.mp4',
    description: 'Technical expertise',
    objective: 'REVIEW SKILL STATS',
    accent: '#ff00ff',
    duration: 8.0,
  },
  {
    id: 'projects',
    index: 4,
    title: 'PROJECTS',
    subtitle: 'Missions',
    video: '/videos/projects.mp4',
    description: 'Completed missions',
    objective: 'INSPECT COMPLETED MISSIONS',
    accent: '#ff6b35',
    duration: 8.0,
  },
  {
    id: 'experience',
    index: 5,
    title: 'EXPERIENCE',
    subtitle: 'Timeline',
    video: '/videos/experience.mp4',
    description: 'Career progression',
    objective: 'VIEW CAREER TIMELINE',
    accent: '#00ffff',
    duration: 8.0,
  },
  {
    id: 'achievements',
    index: 6,
    title: 'ACHIEVEMENTS',
    subtitle: 'Unlocked',
    video: '/videos/achivement.mp4',
    description: 'Awards & recognition',
    objective: 'CHECK UNLOCKED ACHIEVEMENTS',
    accent: '#ff00ff',
    duration: 8.0,
  },
  {
    id: 'contact',
    index: 7,
    title: 'CONTACT',
    subtitle: 'Connect',
    video: '/videos/contact.mp4',
    description: 'Get in touch',
    objective: 'ESTABLISH CONNECTION',
    accent: '#ff6b35',
    duration: 8.0,
  },
];

export const getTotalScenes = () => scenes.length;
export const getSceneByIndex = (index: number) => scenes[index - 1];
export const getSceneById = (id: string) => scenes.find(s => s.id === id);

export interface SkillCategory {
  id: string;
  name: string;
  level: number; // 0-100
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI / ML',
    level: 85,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    color: '#00ffff',
  },
  {
    id: 'fullstack',
    name: 'FULL STACK',
    level: 90,
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python'],
    color: '#ff00ff',
  },
  {
    id: 'python',
    name: 'PYTHON',
    level: 95,
    skills: ['FastAPI', 'Django', 'Flask', 'Data Analysis', 'Automation'],
    color: '#ff6b35',
  },
  {
    id: 'cv',
    name: 'COMPUTER VISION',
    level: 80,
    skills: ['OpenCV', 'YOLO', 'Object Detection', 'Image Processing'],
    color: '#00ffff',
  },
  {
    id: 'data',
    name: 'DATA',
    level: 85,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Data Visualization'],
    color: '#ff00ff',
  },
  {
    id: 'mobile',
    name: 'MOBILE',
    level: 75,
    skills: ['Flutter', 'React Native', 'iOS', 'Android'],
    color: '#ff6b35',
  },
  {
    id: 'creative',
    name: '3D / CREATIVE',
    level: 70,
    skills: ['Three.js', 'GSAP', 'WebGL', 'Creative Coding'],
    color: '#00ffff',
  },
];

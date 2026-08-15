# 🎮 GTA-Themed Portfolio Website

A cinematic, Grand Theft Auto-inspired portfolio website built with Next.js 14, Three.js, and GSAP. Features immersive video backgrounds, smooth scroll animations, and authentic GTA-style HUD elements.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎬 **Cinematic Experience**: 7 scroll-controlled video scenes with smooth transitions
- 🎮 **GTA-Style HUD**: Authentic game interface with signal, time, money, health, and wanted stars
- 🗺️ **Interactive Mini-Map**: Custom Tambaram GTA map with player marker
- 🎨 **Authentic Design**: Pricedown and Rage Italic fonts, pink accent colors (#FF006E)
- 🎯 **Scene Navigation**: Quick navigation menu on home screen
- ⚡ **Smooth Scrolling**: Lenis smooth scroll with GSAP ScrollTrigger animations
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🎭 **Vintage Effects**: Film grain and vignette overlays for cinematic feel
- 🔄 **Dynamic Stats**: Money and health values change as you navigate scenes

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Fonts**: Pricedown (GTA font), Rage Italic

## 📁 Project Structure

```
portfoliogtatheme/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Main page with scene management
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles and fonts
├── components/
│   ├── cinematic/               # Video and scroll components
│   │   ├── CinematicStage.tsx  # Main pinned stage
│   │   ├── VideoScene.tsx      # Individual video scenes
│   │   └── LenisSmoothScroll.tsx
│   ├── hud/                     # Game HUD components
│   │   ├── GameHUD.tsx         # Main HUD orchestrator
│   │   ├── GTANavigation.tsx   # Navigation menu
│   │   ├── SceneIndicator.tsx  # Scene title display
│   │   ├── StatusBar.tsx       # Stats (money, health, stars)
│   │   ├── Objective.tsx       # Current objective box
│   │   └── MiniMap.tsx         # Mini-map with player marker
│   ├── sections/                # Content sections
│   │   ├── HomeScene.tsx       # Start screen
│   │   ├── AboutScene.tsx      # About/Profile section
│   │   ├── SkillsScene.tsx     # Skills with progress bars
│   │   ├── ProjectsScene.tsx   # Projects showcase
│   │   ├── ProjectCard.tsx     # Individual project card
│   │   ├── ExperienceScene.tsx # Timeline
│   │   ├── AchievementsScene.tsx # Achievements grid
│   │   └── ContactScene.tsx    # Contact form
│   └── ui/                      # UI components
│       ├── LoadingScreen.tsx
│       ├── CustomCursor.tsx
│       └── ScrollIndicator.tsx
├── lib/
│   └── data/                    # Data files
│       ├── scenes.ts           # Scene configuration
│       ├── skills.ts           # Skills data
│       ├── projects.ts         # Projects data
│       ├── experience.ts       # Experience timeline
│       └── achievements.ts     # Achievements data
├── config/
│   └── siteConfig.ts           # Main configuration file
├── public/
│   ├── videos/                 # Scene video backgrounds
│   ├── images/                 # Images and map
│   └── fonts/                  # Custom fonts
└── tailwind.config.ts          # Tailwind configuration
```

## 🎯 Scenes

1. **HOME** - Start screen with navigation menu
2. **ABOUT** - Profile with age, location, and bio
3. **SKILLS** - Two-column skill showcase with progress bars
4. **PROJECTS** - Project cards with links
5. **EXPERIENCE** - Career timeline
6. **ACHIEVEMENTS** - Achievement grid
7. **CONTACT** - Contact information and message form

## 🎨 Customization

### Update Content

Edit `config/siteConfig.ts` to update all text content:

```typescript
export const siteConfig = {
  personal: {
    name: "Your Name",
    age: 20,
    location: "Your Location",
    bio: "Your bio...",
  },
  contact: {
    email: "your.email@example.com",
    linkedin: { url: "...", display: "..." },
    github: { url: "...", display: "..." },
  },
  // ... more configuration
};
```

### Update Skills

Edit `lib/data/skills.ts`:

```typescript
export const skillCategories = [
  {
    id: 'skill-1',
    name: 'AI / ML',
    level: 85,
    color: '#00FFFF',
    skills: ['TensorFlow', 'PyTorch', ...],
  },
  // ... more skills
];
```

### Update Projects

Edit `lib/data/projects.ts`:

```typescript
export const projects = [
  {
    id: '1',
    name: 'Your Project',
    category: 'Category',
    description: 'Description...',
    github: 'https://github.com/...',
    demo: 'https://...',
  },
  // ... more projects
];
```

### Change Videos

Replace video files in `public/videos/` directory:
- Start.mp4
- about.mp4
- skills.mp4
- projects.mp4
- experience.mp4
- achivement.mp4
- contact.mp4

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'gta-pink': '#FF006E',     // Main accent color
  'gta-magenta': '#ff00ff',  // Secondary accent
  'gta-orange': '#ff6b35',   // Tertiary accent
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfoliogtatheme.git
cd portfoliogtatheme
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add your video files to `public/videos/`

4. Add your custom map image to `public/images/` (optional)

5. Update configuration in `config/siteConfig.ts`

6. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Key Features Explained

### Scroll-Controlled Videos
Videos are pinned to the viewport and transition based on scroll position using GSAP ScrollTrigger.

### Dynamic HUD
- **Signal**: Fluctuates between 95-100
- **Time**: Real-time clock (HH:MM:SS)
- **Money**: Increases $150k per scene ($2.75M → $3.65M)
- **Health**: Changes per scene (100% → 95% → 85% → 80% → 90% → 100% → 100%)
- **Stars**: Increases 1-5 stars as you progress

### Scene Navigation
Click navigation items on the home screen to jump directly to any section.

### Contact Form
Centered modal form with smooth animations when "MESSAGE ME" is clicked.

## 🎮 Fonts

- **Pricedown**: Authentic GTA font for headers and labels
- **Rage Italic**: GTA-style italic font for descriptions and secondary text

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Muruganandam**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Grand Theft Auto series for design inspiration
- Next.js team for the amazing framework
- GSAP and Lenis for smooth animations
- Three.js community

---

⭐ Star this repo if you like it!

# GTA-Inspired Cinematic Portfolio

A production-quality, cinematic developer portfolio website inspired by GTA's visual language and interaction style. Built with Next.js, Three.js, GSAP, and your custom video assets.

## Features

- 🎮 **Game-Style Interface**: GTA-inspired HUD, menu system, and visual language
- 🎬 **Cinematic Experience**: Scroll-controlled video transitions with camera movement
- 🎯 **7 Interactive Scenes**: Home, About, Skills, Projects, Experience, Achievements, Contact
- ⚡ **Smooth Animations**: GSAP + ScrollTrigger + Lenis for buttery smooth scrolling
- 🎨 **Custom Design System**: GTA-inspired typography, colors, and UI components
- ⌨️ **Keyboard Navigation**: Full keyboard support with arrow keys and ESC
- 📱 **Responsive**: Optimized for desktop, tablet, and mobile
- ♿ **Accessible**: Reduced motion support, semantic HTML, keyboard navigation

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: GSAP, ScrollTrigger
- **Smooth Scroll**: Lenis
- **3D/Effects**: Three.js, React Three Fiber (ready for enhancement)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Verify video files are in place:**
   Your 7 videos should be in `/videos/`:
   - Start.mp4
   - about.mp4
   - skills.mp4
   - projects.mp4
   - experience.mp4
   - achivement.mp4
   - contact.mp4

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information

Update these files with your actual data:

**`lib/data/scenes.ts`** - Scene descriptions and objectives

**`components/sections/HomeScene.tsx`** - Replace `[YOUR NAME]` with your name

**`components/sections/AboutScene.tsx`** - Add your role, location, education, focus

**`components/sections/ContactScene.tsx`** - Update email, GitHub, LinkedIn links

### 2. Projects

**`lib/data/projects.ts`** - Replace placeholder projects with your actual projects:
```typescript
{
  id: 'unique-id',
  mission: 'MISSION 01',
  name: 'Your Project Name',
  category: 'AI / ML',
  description: 'What problem does it solve?',
  techStack: ['Python', 'TensorFlow', 'React'],
  keyResult: 'Key achievement or metric',
  github: 'https://github.com/you/project',
  demo: 'https://your-demo.com',
  status: 'completed',
}
```

### 3. Skills

**`lib/data/skills.ts`** - Update skill categories, levels, and technologies

### 4. Experience

**`lib/data/experience.ts`** - Add your work history, education, internships

### 5. Achievements

**`lib/data/achievements.ts`** - Add hackathons, certifications, awards, projects

### 6. Brand Voice

**`components/hud/GameHUD.tsx`** (bottom right) - Change the quote to your personal tagline

**`app/layout.tsx`** - Update metadata (title, description, author name)

## Controls

- **Scroll**: Navigate through scenes
- **ESC**: Open/close menu
- **Arrow Keys**: Navigate menu (when open)
- **Enter**: Select menu item
- **Click**: Interact with buttons and links

## Project Structure

```
portfoliogtatheme/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── cinematic/
│   │   ├── CinematicStage.tsx    # Main stage container
│   │   ├── VideoScene.tsx        # Video player component
│   │   └── LenisSmoothScroll.tsx # Smooth scroll wrapper
│   ├── hud/
│   │   ├── GameHUD.tsx           # Main HUD orchestrator
│   │   ├── SceneIndicator.tsx    # Top-left scene title
│   │   ├── StatusBar.tsx         # Top-right stats
│   │   ├── Objective.tsx         # Bottom-left objective
│   │   ├── MiniMap.tsx           # Bottom-left map
│   │   └── GameMenu.tsx          # Navigation menu
│   ├── sections/
│   │   ├── HomeScene.tsx
│   │   ├── AboutScene.tsx
│   │   ├── SkillsScene.tsx
│   │   ├── ProjectsScene.tsx
│   │   ├── ExperienceScene.tsx
│   │   ├── AchievementsScene.tsx
│   │   └── ContactScene.tsx
│   └── ui/
│       ├── LoadingScreen.tsx
│       ├── CustomCursor.tsx
│       └── ScrollIndicator.tsx
├── lib/
│   └── data/
│       ├── scenes.ts         # Scene configuration
│       ├── projects.ts       # Project data
│       ├── skills.ts         # Skill categories
│       ├── experience.ts     # Work/education history
│       └── achievements.ts   # Awards & achievements
├── videos/                   # Your video assets
└── public/                   # Static assets

```

## Performance Optimization

The portfolio is optimized for performance:

- Videos are preloaded and paused when not active
- Lazy loading for off-screen components
- Reduced motion support for accessibility
- Compressed video files recommended (H.264, 1920×1080)
- Film grain and effects use CSS/SVG (lightweight)

### Video Optimization Tips

```bash
# Compress videos with FFmpeg (recommended)
ffmpeg -i input.mp4 -vcodec h264 -crf 23 -preset slow -vf scale=1920:1080 output.mp4
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other Platforms

```bash
npm run build
npm start
```

Build output goes to `.next/` directory.

## Troubleshooting

**Videos not playing:**
- Check video paths in `/videos/`
- Ensure videos are H.264 encoded
- Check browser console for errors

**Scroll not smooth:**
- Lenis may need initialization delay
- Check for conflicting scroll libraries
- Try disabling browser extensions

**Performance issues:**
- Reduce video file sizes
- Lower video resolution for mobile
- Disable custom cursor on mobile (already handled)

## Future Enhancements

Ready-to-add features:
- Three.js camera movement and depth effects
- Particle systems and environmental effects
- Sound effects (architecture in place)
- Transitions between scenes (chromatic aberration, glitch)
- Project detail modals
- Blog integration
- Analytics tracking

## License

This portfolio template is free to use for personal projects. Please do not copy the exact design for commercial template sales.

## Credits

- **Design Inspiration**: Grand Theft Auto series UI/UX
- **Fonts**: Bebas Neue (condensed), Pacifico (script), Inter (sans)
- **Animation**: GSAP by GreenSock
- **Smooth Scroll**: Lenis by Studio Freight

---

Built with ❤️ using Next.js, GSAP, and cinematic vision.

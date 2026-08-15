# Setup Instructions

## Quick Start

1. **Install dependencies** (if npm install fails due to network restrictions, you'll need to run this when you have network access):
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Go to [http://localhost:3000](http://localhost:3000)

## What's Already Done

✅ Complete Next.js project structure
✅ All 7 videos mapped to scenes
✅ GTA-style HUD (scene title, status bar, objective, mini-map)
✅ Game menu with keyboard navigation
✅ Smooth scrolling with Lenis
✅ GSAP ScrollTrigger master timeline
✅ All 7 scene components (Home, About, Skills, Projects, Experience, Achievements, Contact)
✅ Custom cursor for desktop
✅ Loading screen
✅ Scroll indicator
✅ Responsive design
✅ Placeholder data structure

## What to Customize

### Priority 1: Personal Information

1. **`components/sections/HomeScene.tsx`**
   - Line 12: Replace `[YOUR NAME]` with your actual name

2. **`components/sections/AboutScene.tsx`**
   - Lines 18-33: Fill in your role, location, education, focus

3. **`components/sections/ContactScene.tsx`**
   - Lines 49-63: Update email, GitHub, LinkedIn

4. **`components/hud/GameHUD.tsx`**
   - Line 19: Change the quote to your personal tagline

### Priority 2: Content Data

5. **`lib/data/projects.ts`**
   - Replace all `[PROJECT NAME]` and `[Brief description]` with actual projects

6. **`lib/data/experience.ts`**
   - Add your work history, internships, education

7. **`lib/data/achievements.ts`**
   - Add your hackathons, certifications, awards

8. **`lib/data/skills.ts`**
   - Adjust skill levels and technologies to match your expertise

### Priority 3: Metadata

9. **`app/layout.tsx`**
   - Line 8: Update author name in metadata

## Folder Structure Created

```
portfoliogtatheme/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── responsive.css
├── components/
│   ├── cinematic/
│   │   ├── CinematicStage.tsx
│   │   ├── VideoScene.tsx
│   │   └── LenisSmoothScroll.tsx
│   ├── hud/
│   │   ├── GameHUD.tsx
│   │   ├── GameMenu.tsx
│   │   ├── SceneIndicator.tsx
│   │   ├── StatusBar.tsx
│   │   ├── Objective.tsx
│   │   └── MiniMap.tsx
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
│       ├── scenes.ts
│       ├── projects.ts
│       ├── skills.ts
│       ├── experience.ts
│       └── achievements.ts
├── videos/ (your 7 videos already here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.mjs
```

## Testing Checklist

After running `npm install` and `npm run dev`:

- [ ] Loading screen appears
- [ ] Home video plays automatically
- [ ] Scroll down smoothly transitions scenes
- [ ] Press ESC to open menu
- [ ] Use arrow keys to navigate menu
- [ ] Click project cards, links work
- [ ] Test on mobile device
- [ ] Custom cursor works on desktop
- [ ] Videos play/pause correctly
- [ ] All 7 scenes load properly

## Known Placeholders to Replace

Search for these strings and replace:
- `[YOUR NAME]`
- `[Your Role]`
- `[Your Location]`
- `[Your Education]`
- `[PROJECT NAME]`
- `[Brief description]`
- `[Achievement Title]`
- `your.email@example.com`
- `@yourhandle`
- `/in/yourprofile`

## Performance Tips

- Keep videos under 10MB each if possible
- Use H.264 codec for best browser compatibility
- Videos are already 1920×1080 @ 30fps (optimal)
- Consider creating poster frames for faster initial load

## Need Help?

Check:
1. Console for errors (F12 in browser)
2. Verify all video files are in `/videos/`
3. Ensure Node.js 18+ is installed
4. Try deleting `node_modules` and `.next`, then reinstall

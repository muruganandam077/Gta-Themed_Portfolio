// Main Configuration File
// Edit this file to update all text content across the website

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Muruganandam",
    firstName: "Muruganandam",
    age: 20,
    education: "Final year B.Tech AI-DS",
    location: "Tamil Nadu, India",
    status: "Building my dreams",
    title: "AI & Data Science Developer",
    bio: "Hey, I'm Muruganandam. A software developer, designer and AI creator who builds digital experiences that aren't just functional — they're memorable.",
  },

  // Contact Information
  contact: {
    email: "your.email@example.com",
    linkedin: {
      url: "https://linkedin.com/in/yourprofile",
      display: "/in/yourprofile",
    },
    github: {
      url: "https://github.com/yourhandle",
      display: "@yourhandle",
    },
  },

  // HUD Elements
  hud: {
    money: 2750000,
    health: 100,
    quote: "Code is my weapon, Creativity is my world. — Sanjai",
  },

  // Scene Titles and Objectives
  scenes: {
    home: {
      title: "START",
      subtitle: "Experience",
      objective: "PRESS SCROLL TO BEGIN",
    },
    about: {
      title: "ABOUT",
      subtitle: "Profile",
      objective: "EXPLORE THE PLAYER PROFILE",
    },
    skills: {
      title: "SKILLS",
      subtitle: "Abilities",
      objective: "REVIEW SKILL STATS",
    },
    projects: {
      title: "PROJECTS",
      subtitle: "Missions",
      objective: "INSPECT COMPLETED MISSIONS",
    },
    experience: {
      title: "EXPERIENCE",
      subtitle: "Timeline",
      objective: "VIEW CAREER TIMELINE",
    },
    achievements: {
      title: "ACHIEVEMENTS",
      subtitle: "Unlocked",
      objective: "CHECK UNLOCKED ACHIEVEMENTS",
    },
    contact: {
      title: "CONTACT",
      subtitle: "Connect",
      objective: "ESTABLISH CONNECTION",
    },
  },

  // Navigation Menu
  navigation: [
    { label: "START GAME", sceneIndex: 0 },
    { label: "ABOUT ME", sceneIndex: 1 },
    { label: "SKILLS", sceneIndex: 2 },
    { label: "PROJECTS", sceneIndex: 3 },
    { label: "EXPERIENCE", sceneIndex: 4 },
    { label: "ACHIEVEMENTS", sceneIndex: 5 },
    { label: "CONTACT", sceneIndex: 6 },
  ],

  // About Section
  about: {
    ageLabel: "AGE",
    ageValue: "20 – Final year B.Tech IT",
    locationLabel: "LOCATION",
    locationValue: "Tamil Nadu, India",
    statusLabel: "STATUS",
    statusValue: "Building my dreams",
    journeyButton: "VIEW JOURNEY",
  },

  // Contact Section
  contactSection: {
    emailLabel: "EMAIL",
    linkedinLabel: "LINKEDIN",
    githubLabel: "GITHUB",
    messageLabel: "MESSAGE ME",
    messageDescription: "Send a direct message",
    formTitle: "SEND MESSAGE",
    formLabels: {
      name: "NAME",
      email: "EMAIL",
      message: "MESSAGE",
    },
    formPlaceholders: {
      name: "Your name",
      email: "your.email@example.com",
      message: "Your message...",
    },
    submitButton: "SEND MESSAGE",
    backButton: "← BACK",
    sendingStatus: "SENDING...",
    successStatus: "MESSAGE SENT ✓",
  },
};

export default siteConfig;

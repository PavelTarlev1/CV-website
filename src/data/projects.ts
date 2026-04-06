import type { IProject } from '../types';

export const projects: IProject[] = [
  {
    title: "Denev Calibration Suite",
    description: "Desktop app for tank volume calibration supporting multiple tank shapes (horizontal, vertical, inclined, rectangular, wine). Features volume calculations, calibration history, and PDF report export.",
    tech: ["Python", "PyQt5", "PyInstaller"],
  },
  {
    title: "HandsFree Linux",
    description: "Bluetooth hands-free kit for Linux. Makes your computer act like a car speakerphone — handles incoming/outgoing calls via HFP, syncs contacts from phone via PBAP, detects active VoIP apps (Teams, Zoom, Meet, Slack, Discord), and shows pop-up call notifications.",
    tech: ["Python", "PyQt6", "Bluetooth", "D-Bus", "Linux"],
    githubLink: "https://github.com/PavelTarlev1/handsfree-linux",
  },
  {
    title: "CV Website",
    description: "Personal CV website hosted on GitHub Pages, built with React, TypeScript, and Vite. Features dark/light mode, PDF export, and automated deployment via GitHub Actions.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions", "GitHub Pages"],
  }
];
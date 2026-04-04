import type { IProject } from '../types';

export const projects: IProject[] = [
  {
    title: "Denev Calibration Suite",
    description: "Desktop app for tank volume calibration supporting multiple tank shapes (horizontal, vertical, inclined, rectangular, wine). Features volume calculations, calibration history, and PDF report export.",
    tech: ["Python", "PyQt5", "PyInstaller"],
  },
  {
    title: "AWS-Hosted CV Website",
    description: "Personal CV website hosted on AWS S3 + CloudFront, built with React, TypeScript, and Vite. Features dark/light mode, PDF export, and infrastructure managed with Terraform.",
    tech: ["React", "TypeScript", "AWS S3", "CloudFront", "Terraform", "Vite"],
  }
];
import type { IProject } from '../types';

export const projects: IProject[] = [
  {
    title: "AWS-hosted CV Website",
    description: "A responsive, modern CV/portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme toggle, PDF generation, and deployed on AWS S3 with CloudFront CDN.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS S3", "CloudFront", "Puppeteer"],
    githubLink: "https://github.com/PavelTarlev1/My-AWS-hosted-CV-website",
    liveDemoLink: "https://cv.paveltarlev.com",
    imageUrl: "/project-images/cv-website.png"
  },
  {
    title: "Microservices E-commerce Platform",
    description: "A scalable e-commerce platform built with microservices architecture using Node.js, NestJS, Docker, and Kubernetes. Implements product catalog, shopping cart, and order management services with API Gateway.",
    tech: ["Node.js", "NestJS", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL", "AWS"],
    githubLink: "https://github.com/PavelTarlev1/ecommerce-microservices",
    liveDemoLink: "https://demo-ecommerce.paveltarlev.com",
    imageUrl: "/project-images/ecommerce.png"
  },
  {
    title: "Real-time Collaborative Task Manager",
    description: "A real-time task management application with WebSocket support, team collaboration features, and drag-and-drop functionality. Includes user authentication, file sharing, and real-time updates.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "WebSocket"],
    githubLink: "https://github.com/PavelTarlev1/task-manager",
    liveDemoLink: "https://tasks.paveltarlev.com",
    imageUrl: "/project-images/task-manager.png"
  },
  {
    title: "CI/CD Pipeline Automation Tool",
    description: "A custom CI/CD pipeline automation tool that integrates with Jenkins, Git, and Docker. Provides visualization of pipeline status, automated testing, and deployment tracking with Slack notifications.",
    tech: ["Python", "Jenkins API", "Docker", "Git", "Slack API", "React", "FastAPI"],
    githubLink: "https://github.com/PavelTarlev1/cicd-automation",
    liveDemoLink: "https://cicd.paveltarlev.com",
    imageUrl: "/project-images/cicd-tool.png"
  }
];
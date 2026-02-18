import React from 'react';
import { Hero } from './Hero';
import { Summary } from './Summary';
import { TechStack } from './TechStack';
import { Experience } from './Experience';

interface MainContentProps {
  openProjects: {
    altice: boolean;
    dbs: boolean;
    wpx: boolean;
  };
  onToggleProject: (project: 'altice' | 'dbs' | 'wpx') => void;
}

export const MainContent: React.FC<MainContentProps> = ({ openProjects, onToggleProject }) => {
  return (
    <div>
      <Hero />
      <Summary />
      <TechStack />
      <Experience openProjects={openProjects} onToggleProject={onToggleProject} />
    </div>
  );
};
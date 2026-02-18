import React from 'react';
import { useTheme } from '../Layout/ThemeProvider';
import { ExperienceCard } from './ExperienceCard';
import type { IExperience } from '../../types';
import { experiences } from '../../data/experiencees';

interface ExperienceProps {
  openProjects: {
    altice: boolean;
    dbs: boolean;
    wpx: boolean;
  };
  onToggleProject: (project: 'altice' | 'dbs' | 'wpx') => void;
}

export const Experience: React.FC<ExperienceProps> = ({ openProjects, onToggleProject }) => {
  const { theme } = useTheme();

  const getProjectKey = (exp: IExperience): 'altice' | 'dbs' | 'wpx' | null => {
    if (exp.project === "Altice Project") return 'altice';
    if (exp.project === "DBS Project") return 'dbs';
    if (exp.company === "WPX.net") return 'wpx';
    return null;
  };

  return (
    <div id="experience" style={{ marginBottom: '48px' }}>
      <h2 style={{ color: theme.accent, fontSize: '24px', margin: '0 0 24px 0' }}>Professional Experience</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp, index) => {
          const projectKey = getProjectKey(exp);
          return (
            <ExperienceCard
              key={index}
              exp={exp}
              isProjectOpen={projectKey ? openProjects[projectKey] : false}
              onToggleProject={() => projectKey && onToggleProject(projectKey)}
            />
          );
        })}
      </div>
    </div>
  );
};
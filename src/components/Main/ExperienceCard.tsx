import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { useTheme } from '../Layout/ThemeProvider';
import { getTechIcon } from '../Shared/icons';
import type { IExperience } from '../../types';

interface ExperienceCardProps {
  exp: IExperience;
  isProjectOpen: boolean;
  onToggleProject: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  exp, isProjectOpen, onToggleProject
}) => {
  const { theme } = useTheme();

  return (
    <div className="card" style={{
      backgroundColor: theme.cardBg,
      padding: '24px',
      borderRadius: '12px',
      border: `1px solid ${theme.border}`
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
        flexWrap: 'wrap'
      }}>
        <div>
          <h3 style={{ color: theme.accent, fontSize: '20px', margin: '0 0 4px 0' }}>{exp.title}</h3>
          <p style={{ color: theme.textSecondary, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            {exp.company} {exp.project && `• ${exp.project}`}
            
            {(exp.project === "Altice Project" || exp.project === "DBS Project" || exp.company === "WPX.net") && (
              <button
                onClick={onToggleProject}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  color: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  borderRadius: '4px',
                  padding: '2px 8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  marginLeft: '4px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                  e.currentTarget.style.color = theme.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.accent;
                }}
              >
                <FaInfoCircle style={{ marginRight: '4px' }} /> info
              </button>
            )}
          </p>
        </div>
        <span style={{
          backgroundColor: `${theme.accent}20`,
          color: theme.accent,
          padding: '4px 12px',
          borderRadius: '9999px',
          fontSize: '14px'
        }}>
          {exp.period}
        </span>
      </div>
      
      {exp.projectInfo && isProjectOpen && (
        <div style={{
          backgroundColor: theme.bg,
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '16px',
          border: `1px solid ${theme.border}`
        }}>
          <p style={{ color: theme.textSecondary, fontSize: '13px', margin: '0 0 12px 0', lineHeight: '1.6' }}>
            {exp.projectInfo}
          </p>
          {exp.projectLink && (
            <a 
              href={exp.projectLink}
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: theme.accent,
                fontSize: '13px',
                textDecoration: 'none',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              More info <span style={{ fontSize: '16px' }}>→</span>
            </a>
          )}
        </div>
      )}
      
      <ul style={{ margin: '0 0 20px 0', padding: '0 0 0 20px' }}>
        {exp.description.map((item, i) => (
          <li key={i} style={{ color: theme.textSecondary, marginBottom: '8px', lineHeight: '1.6' }}>
            {item}
          </li>
        ))}
      </ul>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {exp.tech.map((tech, i) => (
          <span key={i} style={{
            backgroundColor: theme.bg,
            color: theme.textSecondary,
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '13px',
            display: 'inline-flex',
            alignItems: 'center',
            border: `1px solid ${theme.border}`
          }}>
            {getTechIcon(tech, theme.accent)}
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
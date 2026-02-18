import React from 'react';
import { useTheme } from '../Layout/ThemeProvider';
// Import both versions of your photo
import profileDark from '../../assets/images/aI.Generated.png';
import profileLight from '../../assets/images/Untitled.jpeg';
import { name, title } from '../../config/personalInfo';

export const Profile: React.FC = () => {
  const { theme, darkMode } = useTheme();

  // Choose which image to use based on theme
  const profileImage = darkMode ? profileDark : profileLight;

  return (
    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: theme.border,
        margin: '0 auto 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `3px solid ${theme.accent}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease'
      }}>
        <img 
          src={profileImage}
          alt={name}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'opacity 0.3s ease'
          }}
        />
      </div>
      <h2 style={{ 
        color: theme.text, 
        fontSize: '20px', 
        margin: '0 0 4px 0',
        transition: 'color 0.3s ease'
      }}>
        {name}
      </h2>
      <p style={{ 
        color: theme.textSecondary, 
        fontSize: '14px', 
        margin: 0,
        transition: 'color 0.3s ease'
      }}>
        {title}
      </p>
    </div>
  );
};
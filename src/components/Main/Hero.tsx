import React from 'react';
import { useTheme } from '../Layout/ThemeProvider';
import { ThemeToggle } from '../Shared/ThemeToggle';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div style={{ 
      marginBottom: '48px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ 
          color: theme.accent, 
          fontSize: '42px', 
          fontWeight: 'bold',
          margin: '0 0 8px 0'
        }}>
          Pavel Tarlev
        </h1>
        <p style={{ 
          color: theme.textSecondary, 
          fontSize: '18px',
          margin: 0
        }}>
          Senior Software Developer
        </p>
      </div>
      
      <ThemeToggle />
    </div>
  );
};
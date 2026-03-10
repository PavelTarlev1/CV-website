import React from 'react';
import { useTheme } from '../Layout/ThemeProvider';
import { summary } from '../../config/personalInfo';

export const Summary: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 style={{ color: theme.accent, fontSize: '24px', margin: '0 0 16px 0' }}>Summary</h2>
      <div className="card" style={{
        backgroundColor: theme.cardBg,
        padding: '24px',
        borderRadius: '12px',
        border: `1px solid ${theme.border}`
      }}>
        <p style={{ color: theme.textSecondary, fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
          {summary}
        </p>
      </div>
    </div>
  );
};
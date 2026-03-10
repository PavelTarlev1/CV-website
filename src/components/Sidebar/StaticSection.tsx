import React from 'react';
import { useTheme } from '../Layout/ThemeProvider';

interface StaticSectionProps {
  title: string;
  children: React.ReactNode;
}

export const StaticSection: React.FC<StaticSectionProps> = ({
  title, children
}) => {
  const { theme } = useTheme();

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{
        padding: '12px 0',
        borderBottom: `1px solid ${theme.border}`,
        color: theme.accent,
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        <span>{title}</span>
      </div>
      <div style={{ padding: '16px 0' }}>
        {children}
      </div>
    </div>
  );
};
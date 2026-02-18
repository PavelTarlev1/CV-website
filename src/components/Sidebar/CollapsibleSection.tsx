import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '../Layout/ThemeProvider';

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title, isOpen, onToggle, children
}) => {
  const { theme } = useTheme();

  return (
    <div style={{ marginBottom: '16px' }}>
      <div 
        onClick={onToggle}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '12px 0',
          borderBottom: `1px solid ${theme.border}`,
          color: theme.accent,
          fontWeight: 'bold',
          fontSize: '18px'
        }}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
      </div>
      {isOpen && children}
    </div>
  );
};
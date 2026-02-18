import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../Layout/ThemeProvider';

export const ThemeToggle: React.FC = () => {
  const { darkMode, theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: theme.cardBg,
        borderRadius: '50%',
        border: `2px solid ${theme.accent}`,
        color: theme.accent,
        fontSize: '24px',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = theme.accent;
        e.currentTarget.style.color = theme.cardBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.cardBg;
        e.currentTarget.style.color = theme.accent;
      }}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};
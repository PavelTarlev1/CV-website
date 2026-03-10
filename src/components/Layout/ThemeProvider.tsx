import React, { createContext, useContext, useState } from 'react';
import { ITheme } from '../../types';

const themes = {
  dark: {
    bg: '#0f172a',        // Dark blue-black
    cardBg: '#1e293b',     // Slightly lighter dark blue
    border: '#334155',     // Gray-blue border
    text: 'white',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    accent: '#ff6600',     // KTM orange
    accentLight: '#ff944d',
    hover: '#ff8533'
  },
  light: {
    bg: '#f0f0f0',         // Very light gray (was too dark/brownish)
    cardBg: '#ffffff',      // Pure white cards
    border: '#d1d5db',      // Light gray border
    text: '#1f2937',        // Dark gray text
    textSecondary: '#4b5563', // Medium gray secondary text
    textMuted: '#6b7280',    // Muted gray
    accent: '#ff6600',      // KTM orange stays the same
    accentLight: '#ff944d',
    hover: '#ff8533'
  }
};

interface ThemeContextType {
  darkMode: boolean;
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? themes.dark : themes.light;

  // Apply theme to document body
  React.useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
    document.documentElement.style.backgroundColor = theme.bg;
  }, [theme.bg]);

  return (
    <ThemeContext.Provider value={{ darkMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
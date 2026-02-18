import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { useTheme } from '../Layout/ThemeProvider';

interface DownloadButtonProps {
  onExport: () => void;
  isExporting: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onExport, isExporting }) => {
  const { theme } = useTheme();

  return (
    <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={onExport}
        disabled={isExporting}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          backgroundColor: theme.accent,
          color: 'white',
          padding: '12px 24px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          border: 'none',
          cursor: isExporting ? 'not-allowed' : 'pointer',
          width: '100%',
          transition: 'transform 0.2s, opacity 0.2s',
          opacity: isExporting ? 0.7 : 1
        }}
        onMouseEnter={(e) => {
          if (!isExporting) {
            e.currentTarget.style.transform = 'scale(1.02)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FaFilePdf /> 
        {isExporting ? 'Generating PDF...' : 'Download CV as PDF'}
      </button>
    </div>
  );
};
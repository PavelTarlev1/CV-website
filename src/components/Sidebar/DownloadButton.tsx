import React, { useState, useRef, useEffect } from 'react';
import { FaFilePdf, FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../Layout/ThemeProvider';

export const DownloadButton: React.FC = () => {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const mainBtn: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: open ? '12px 12px 0 0' : '12px',
    fontWeight: '600',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.2s, border-radius 0.15s',
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
    border: `1px solid ${darkMode ? '#333' : '#e2e8f0'}`,
    borderTop: 'none',
    borderRadius: '0 0 12px 12px',
    overflow: 'hidden',
    zIndex: 100,
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  };

  const optionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.15s',
  };

  return (
    <div ref={ref} style={{ marginBottom: '24px', position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={mainBtn}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e65c00')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff6600')}
      >
        <FaFilePdf />
        Download CV
        <FaChevronDown style={{ marginLeft: 'auto', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {open && (
        <div style={dropdownStyle}>
          <a
            href="/Pavel_Tarlev_CV_Black.pdf"
            download="Pavel_Tarlev_CV_Black.pdf"
            style={{ ...optionStyle, color: '#00bcd4', backgroundColor: '#1a1a1a' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#242424')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
            onClick={() => setOpen(false)}
          >
            <FaFilePdf style={{ color: '#00bcd4' }} />
            Dark Version
          </a>
          <a
            href="/Pavel_Tarlev_CV_White.pdf"
            download="Pavel_Tarlev_CV_White.pdf"
            style={{ ...optionStyle, color: '#ff6600', backgroundColor: darkMode ? '#2a2a2a' : '#fff8f4' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = darkMode ? '#333' : '#fff0e6')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = darkMode ? '#2a2a2a' : '#fff8f4')}
            onClick={() => setOpen(false)}
          >
            <FaFilePdf style={{ color: '#ff6600' }} />
            Light Version
          </a>
        </div>
      )}
    </div>
  );
};

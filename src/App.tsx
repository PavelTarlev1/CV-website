import React, { useState, useRef } from 'react';
import { ThemeProvider, useTheme } from './components/Layout/ThemeProvider';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainContent } from './components/Main/MainContent';
import { contact } from './config/personalInfo';

const AppContent: React.FC = () => {
  // Since Languages, Hobbies & Interests, and Bio are now static (non-collapsible),
  // we only need to track the About section (which is currently commented out)
  const [openSections, setOpenSections] = useState({
    about: true  // Only keeping this for the commented-out About Me section
  });
  
  // Projects should be collapsed by default
  const [openProjects, setOpenProjects] = useState({
    altice: false,  // Changed from true to false - collapsed by default
    dbs: false,     // Changed from true to false - collapsed by default
    wpx: false      // Changed from true to false - collapsed by default
  });
  
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);
  
  const phoneRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();

  const handleToggleSection = (section: 'about') => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleToggleProject = (project: 'altice' | 'dbs' | 'wpx') => {
    setOpenProjects(prev => ({ ...prev, [project]: !prev[project] }));
  };

  const handlePhoneClick = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
    setShowLinkedin(false);
  };

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
    setShowPhone(false);
    setShowLinkedin(false);
  };

  const handleLinkedinClick = () => {
    setShowLinkedin(!showLinkedin);
    setShowPhone(false);
    setShowEmail(false);
  };

  const handleClosePopups = () => {
    setShowPhone(false);
    setShowEmail(false);
    setShowLinkedin(false);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyLinkedin = () => {
    navigator.clipboard.writeText(contact.linkedin.url);
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };

  return (
    <div 
      id="cv-container"
      className="cv-main-container"
      style={{
        backgroundColor: theme.bg,
        minHeight: '100vh',
        width: '100%',
        color: theme.text,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Geometric pattern background */}
      <>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${theme.accent}10 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, ${theme.accent}06 0%, transparent 35%),
            radial-gradient(circle at 40% 80%, ${theme.accent}04 0%, transparent 40%),
            radial-gradient(circle at 90% 20%, ${theme.accent}08 0%, transparent 30%)
          `,
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
        {/* Diagonal lines pattern - very subtle */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `repeating-linear-gradient(45deg, ${theme.accent}08 0px, ${theme.accent}08 2px, transparent 2px, transparent 35px)`,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 1
        }} />
      </>

      {/* Main content with higher z-index */}
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(24px, 5vw, 48px) clamp(12px, 4vw, 20px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(20px, 3vw, 32px)',
          backgroundColor: 'transparent',
          transition: 'background-color 0.3s ease',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Sidebar
          openSections={openSections}
          showPhone={showPhone}
          showEmail={showEmail}
          showLinkedin={showLinkedin}
          copiedPhone={copiedPhone}
          copiedEmail={copiedEmail}
          copiedLinkedin={copiedLinkedin}
          onToggleSection={handleToggleSection}
          onPhoneClick={handlePhoneClick}
          onEmailClick={handleEmailClick}
          onLinkedinClick={handleLinkedinClick}
          onCopyPhone={handleCopyPhone}
          onCopyEmail={handleCopyEmail}
          onCopyLinkedin={handleCopyLinkedin}
          onClosePopups={handleClosePopups}
          phoneRef={phoneRef}
          emailRef={emailRef}
          linkedinRef={linkedinRef}
        />
        
        <MainContent
          openProjects={openProjects}
          onToggleProject={handleToggleProject}
        />
      </div>

      <footer className="card" style={{
        backgroundColor: theme.cardBg,
        borderTop: `1px solid ${theme.border}`,
        padding: 'clamp(16px, 3vw, 24px) 0',
        marginTop: 'clamp(32px, 6vw, 48px)',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(12px, 4vw, 20px)',
          textAlign: 'center'
        }}>
                      <p style={{ color: theme.textMuted, fontSize: 'clamp(12px, 2vw, 14px)' }}>
            © 2024 Pavel Tarlev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
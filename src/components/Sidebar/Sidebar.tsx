import React from 'react';
import { Profile } from './Profile';
import { ContactInfo } from './ContactInfo';
import { DownloadButton } from './DownloadButton';
import { StaticSection } from './StaticSection';
import { useTheme } from '../Layout/ThemeProvider';
import { FaMusic, FaMotorcycle, FaPlane, FaHiking } from 'react-icons/fa';
import { languages, hobbies, about } from '../../config/personalInfo';

interface SidebarProps {
  openSections: {
    about: boolean;
  };
  showPhone: boolean;
  showEmail: boolean;
  showLinkedin: boolean;
  copiedPhone: boolean;
  copiedEmail: boolean;
  copiedLinkedin: boolean;
  onToggleSection: (section: 'about') => void;
  onPhoneClick: () => void;
  onEmailClick: () => void;
  onLinkedinClick: () => void;
  onCopyPhone: () => void;
  onCopyEmail: () => void;
  onCopyLinkedin: () => void;
  onClosePopups: () => void;
  phoneRef: React.RefObject<HTMLDivElement>;
  emailRef: React.RefObject<HTMLDivElement>;
  linkedinRef: React.RefObject<HTMLDivElement>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  showPhone, 
  showEmail, 
  showLinkedin,
  copiedPhone, 
  copiedEmail,
  copiedLinkedin,
  onPhoneClick, 
  onEmailClick,
  onLinkedinClick,
  onCopyPhone, 
  onCopyEmail,
  onCopyLinkedin,
  onClosePopups,
  phoneRef, 
  emailRef,
  linkedinRef
}: SidebarProps) => {
  const { theme } = useTheme();

  // Map icon components to hobby data
  const hobbyIcons = [
    <FaMusic />,
    <FaMotorcycle />,
    <FaPlane />,
    <FaHiking />
  ];

  return (
    <div className="card" style={{
      backgroundColor: theme.cardBg,
      borderRadius: '16px',
      padding: '24px',
      border: `1px solid ${theme.border}`,
      height: 'fit-content',
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <Profile />
      
      <ContactInfo
        showPhone={showPhone}
        showEmail={showEmail}
        showLinkedin={showLinkedin}
        copiedPhone={copiedPhone}
        copiedEmail={copiedEmail}
        copiedLinkedin={copiedLinkedin}
        onPhoneClick={onPhoneClick}
        onEmailClick={onEmailClick}
        onLinkedinClick={onLinkedinClick}
        onCopyPhone={onCopyPhone}
        onCopyEmail={onCopyEmail}
        onCopyLinkedin={onCopyLinkedin}
        onClosePopups={onClosePopups}
        phoneRef={phoneRef}
        emailRef={emailRef}
        linkedinRef={linkedinRef}
      />

      {/* PDF Download Button */}
      <DownloadButton />

      {/* About Me section commented out */}
      {/* <CollapsibleSection
        title="About Me"
        isOpen={openSections.about}
        onToggle={() => onToggleSection('about')}
      >
        <div style={{ padding: '16px 0', color: theme.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
          Passionate Senior Software Developer with over 3 years of experience in cloud-native architectures and microservices. I thrive on solving complex problems and building scalable solutions that make a difference.
        </div>
      </CollapsibleSection> */}

      {/* Languages section - now static (non-collapsible) */}
      <StaticSection title="Languages">
        <div>
          {languages.map((lang, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: index < languages.length - 1 ? '12px' : 0 
            }}>
              <span style={{ color: theme.text }}>{lang.name}</span>
              <span style={{ color: theme.accent }}>
                {'★'.repeat(lang.proficiency)}
                {'☆'.repeat(5 - lang.proficiency)}
              </span>
            </div>
          ))}
        </div>
      </StaticSection>

      {/* Hobbies & Interests section - now static (non-collapsible) */}
      <StaticSection title="Hobbies & Interests">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {hobbies.map((item, i) => (
            <span key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: theme.bg,
              padding: '6px 12px',
              borderRadius: '20px',
              border: `1px solid ${theme.border}`
            }}>
              <span style={{ color: theme.accent }}>{hobbyIcons[i]}</span>
              <span style={{ color: theme.textSecondary }}>{item.label}</span>
            </span>
          ))}
        </div>
      </StaticSection>

      {/* Bio section - now static (non-collapsible) */}
      <StaticSection title="Bio">
        <div style={{ color: theme.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
          {about}
        </div>
      </StaticSection>
    </div>
  );
};
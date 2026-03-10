import React, { useEffect, useCallback } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../Layout/ThemeProvider';
import { contact } from '../../config/personalInfo';

interface ContactInfoProps {
  showPhone: boolean;
  showEmail: boolean;
  showLinkedin: boolean;
  copiedPhone: boolean;
  copiedEmail: boolean;
  copiedLinkedin: boolean;
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

export const ContactInfo: React.FC<ContactInfoProps> = ({
  showPhone, showEmail, showLinkedin, copiedPhone, copiedEmail, copiedLinkedin,
  onPhoneClick, onEmailClick, onLinkedinClick, onCopyPhone, onCopyEmail, onCopyLinkedin,
  onClosePopups, phoneRef, emailRef, linkedinRef
}) => {
  const { theme } = useTheme();

  // Handle clicking outside to close popups
  const handleClickOutside = useCallback((event: MouseEvent) => {
    // Check if click is outside all popups and their icons
    const isOutsidePhone = phoneRef.current && !phoneRef.current.contains(event.target as Node);
    const isOutsideEmail = emailRef.current && !emailRef.current.contains(event.target as Node);
    const isOutsideLinkedin = linkedinRef.current && !linkedinRef.current.contains(event.target as Node);
    
    // If any popup is open and click is outside all of them, close all popups
    if ((showPhone || showEmail || showLinkedin) && isOutsidePhone && isOutsideEmail && isOutsideLinkedin) {
      onClosePopups();
    }
  }, [phoneRef, emailRef, linkedinRef, showPhone, showEmail, showLinkedin, onClosePopups]);

  useEffect(() => {
    // Add event listener with capture phase to ensure it catches all clicks
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: theme.bg,
    borderRadius: '50%',
    border: `2px solid ${theme.accent}`,
    color: theme.accent,
    fontSize: '22px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative' as const,
    zIndex: 10,
    transform: 'scale(1)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const iconHoverStyle = {
    backgroundColor: theme.accent,
    color: 'white',
    transform: 'scale(1.1)',
    boxShadow: `0 4px 12px ${theme.accent}40`
  };

  const popupStyle = {
    position: 'absolute' as const,
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.cardBg,
    border: `2px solid ${theme.accent}`,
    borderRadius: '8px',
    padding: '12px',
    minWidth: '200px',
    zIndex: 1000,
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    pointerEvents: 'auto' as const,
    animation: 'fadeIn 0.2s ease'
  };

  const copyButtonStyle = {
    backgroundColor: theme.accent,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.2s ease',
    marginBottom: '8px',
    transform: 'scale(1)'
  } as React.CSSProperties;

  const linkButtonStyle = {
    backgroundColor: 'transparent',
    color: theme.accent,
    border: `1px solid ${theme.accent}`,
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    width: '100%',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
    transition: 'all 0.2s ease',
    transform: 'scale(1)'
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <h3 style={{ 
        color: theme.accent, 
        fontSize: '16px', 
        fontWeight: '600', 
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        textAlign: 'center' // Center the heading
      }}>
        Contact Information
      </h3>
      
      <div style={{ 
        display: 'flex',
        justifyContent: 'center', // Changed from 'space-around' to 'center'
        alignItems: 'center',
        gap: '20px', // Add gap between icons
        padding: '8px 0',
        position: 'relative',
        width: '100%'
      }}>
        {/* Phone */}
        <div ref={phoneRef} style={{ position: 'relative' }}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onPhoneClick();
            }}
            style={iconStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, iconHoverStyle);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.bg;
              e.currentTarget.style.color = theme.accent;
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            <FaPhone />
          </div>
          
          {showPhone && (
            <div 
              className="card"
              style={popupStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <p style={{ color: theme.text, margin: '0 0 8px 0', fontSize: '14px' }}>{contact.phone}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCopyPhone();
                }}
                style={copyButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.hover;
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {copiedPhone ? '✓ Copied!' : 'Copy Number'}
              </button>
            </div>
          )}
        </div>

        {/* Email */}
        <div ref={emailRef} style={{ position: 'relative' }}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onEmailClick();
            }}
            style={iconStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, iconHoverStyle);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.bg;
              e.currentTarget.style.color = theme.accent;
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            <FaEnvelope />
          </div>
          
          {showEmail && (
            <div 
              className="card"
              style={popupStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <p style={{ color: theme.text, margin: '0 0 8px 0', fontSize: '14px' }}>{contact.email}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCopyEmail();
                }}
                style={copyButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.hover;
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {copiedEmail ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>
          )}
        </div>

        {/* LinkedIn */}
        <div ref={linkedinRef} style={{ position: 'relative' }}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onLinkedinClick();
            }}
            style={iconStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, iconHoverStyle);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.bg;
              e.currentTarget.style.color = theme.accent;
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            <FaLinkedin />
          </div>
          
          {showLinkedin && (
            <div 
              className="card"
              style={popupStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <p style={{ color: theme.text, margin: '0 0 12px 0', fontSize: '14px', fontWeight: '500' }}>
                {contact.linkedin.display}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCopyLinkedin();
                }}
                style={copyButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.hover;
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {copiedLinkedin ? '✓ Copied!' : 'Copy Link'}
              </button>
              <a 
                href={contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                style={linkButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.accent;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Go to Profile →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
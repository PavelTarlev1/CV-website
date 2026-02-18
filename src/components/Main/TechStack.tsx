import React from 'react';
import { useTheme } from '../Layout/ThemeProvider';
import { 
  FaAws, FaDocker, FaJenkins, FaNodeJs, FaVuejs, FaReact, FaJava 
} from 'react-icons/fa';
import { 
  SiKubernetes, SiNestjs, SiTerraform, SiJest, SiMongodb,
  SiRabbitmq, SiKong, SiTypescript, SiApache, SiAmazondynamodb,
  SiAmazonapigateway, SiAmazoncognito, SiPostgresql
} from 'react-icons/si';

export const TechStack: React.FC = () => {
  const { theme } = useTheme();

  const techItems = [
    { icon: <FaAws />, label: 'AWS' },
    { icon: <SiAmazoncognito />, label: 'Cognito' },
    { icon: <SiAmazonapigateway />, label: 'API Gateway' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <SiKubernetes />, label: 'K8s' },
    { icon: <FaDocker />, label: 'Docker' },
    { icon: <FaJenkins />, label: 'Jenkins' },
    { icon: <SiApache />, label: 'Camel' },
    { icon: <SiNestjs />, label: 'NestJS' },
    { icon: <SiTerraform />, label: 'Terraform' },
    { icon: <SiJest />, label: 'Jest' },
    { icon: <FaJava />, label: 'Java' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiAmazondynamodb />, label: 'DynamoDB' },
    { icon: <SiRabbitmq />, label: 'RabbitMQ' },
    { icon: <SiKong />, label: 'Kong' },
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <FaVuejs />, label: 'Vue.js' },
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTypescript />, label: 'TypeScript' }
  ];

  // Responsive styling with inline media queries
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 'clamp(8px, 2vw, 16px)',
    backgroundColor: theme.cardBg,
    padding: 'clamp(12px, 3vw, 20px)',
    borderRadius: '12px',
    border: `1px solid ${theme.border}`,
    '@media (max-width: 480px)': {
      gap: '8px',
      padding: '12px'
    }
  };

  const itemStyle = {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: 'clamp(4px, 1vw, 8px)',
    color: theme.textSecondary,
    fontSize: 'clamp(12px, 1.8vw, 14px)',
    flex: '0 1 auto',
    '@media (max-width: 480px)': {
      fontSize: '12px',
      gap: '4px'
    }
  };

  const iconStyle = {
    color: theme.accent,
    fontSize: 'clamp(16px, 2.2vw, 20px)',
    '@media (max-width: 480px)': {
      fontSize: '16px'
    }
  };

  return (
    <div id="skills" style={{ marginBottom: 'clamp(24px, 4vw, 32px)' }}>
      <h2 style={{ 
        color: theme.accent, 
        fontSize: 'clamp(20px, 3vw, 24px)', 
        margin: '0 0 clamp(12px, 2vw, 16px) 0' 
      }}>
        Tech Stack
      </h2>
      <div style={containerStyle}>
        {techItems.map((item, i) => (
          <span key={i} style={itemStyle}>
            <span style={iconStyle}>{item.icon}</span> 
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
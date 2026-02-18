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

  return (
    <div id="skills" style={{ marginBottom: '32px' }}>
      <h2 style={{ color: theme.accent, fontSize: '24px', margin: '0 0 16px 0' }}>Tech Stack</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '16px',
        backgroundColor: theme.cardBg,
        padding: '20px',
        borderRadius: '12px',
        border: `1px solid ${theme.border}`
      }}>
        {techItems.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: theme.textSecondary }}>
            <span style={{ color: theme.accent, fontSize: '20px' }}>{item.icon}</span> 
            <span style={{ fontSize: '14px' }}>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
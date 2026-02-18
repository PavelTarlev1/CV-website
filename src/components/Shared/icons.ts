import React from 'react';
import { 
  FaAws, FaJava, FaDocker, FaNodeJs, FaVuejs, FaReact, FaJenkins
} from 'react-icons/fa';
import { 
  SiNestjs, SiKubernetes, SiTerraform, SiJest, SiMongodb,
  SiRabbitmq, SiKong, SiTypescript, SiApache, SiAmazondynamodb,
  SiAmazonapigateway, SiAmazoncognito, SiPostgresql
} from 'react-icons/si';

export const getTechIcon = (techName: string, color: string): React.ReactNode => {
  const iconStyle = { marginRight: '4px', color };
  
  switch(techName) {
    case 'AWS':
      return React.createElement(FaAws, { style: iconStyle });
    case 'Cognito':
      return React.createElement(SiAmazoncognito, { style: iconStyle });
    case 'API Gateway':
      return React.createElement(SiAmazonapigateway, { style: iconStyle });
    case 'PostgreSQL':
      return React.createElement(SiPostgresql, { style: iconStyle });
    case 'Kubernetes':
      return React.createElement(SiKubernetes, { style: iconStyle });
    case 'Docker':
      return React.createElement(FaDocker, { style: iconStyle });
    case 'Jenkins':
      return React.createElement(FaJenkins, { style: iconStyle });
    case 'Apache Camel':
      return React.createElement(SiApache, { style: iconStyle });
    case 'NestJS':
      return React.createElement(SiNestjs, { style: iconStyle });
    case 'Terraform':
      return React.createElement(SiTerraform, { style: iconStyle });
    case 'Jest':
      return React.createElement(SiJest, { style: iconStyle });
    case 'Java':
      return React.createElement(FaJava, { style: iconStyle });
    case 'Node.js':
      return React.createElement(FaNodeJs, { style: iconStyle });
    case 'Vue.js':
      return React.createElement(FaVuejs, { style: iconStyle });
    case 'DynamoDB':
      return React.createElement(SiAmazondynamodb, { style: iconStyle });
    case 'RabbitMQ':
      return React.createElement(SiRabbitmq, { style: iconStyle });
    case 'Kong':
      return React.createElement(SiKong, { style: iconStyle });
    case 'Lambda':
      return React.createElement(FaAws, { style: iconStyle });
    case 'React':
      return React.createElement(FaReact, { style: iconStyle });
    case 'TypeScript':
      return React.createElement(SiTypescript, { style: iconStyle });
    case 'MongoDB':
      return React.createElement(SiMongodb, { style: iconStyle });
    default:
      return null;
  }
};
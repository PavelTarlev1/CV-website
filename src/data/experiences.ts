import type { IExperience } from '../types';

export const experiences: IExperience[] = [
  {
    title: "Senior Software Developer",
    company: "Amdocs",
    project: "Altice Project",
    period: "04/2024 - Present",
    description: [
      "Focused on performance optimization, identifying bottlenecks and implementing strategic enhancements",
      "Designed architectural improvements for scalability, maintainability, and long-term reliability",
      "Managed containerized microservices using Docker and Kubernetes",
      "Configured and optimized Jenkins pipelines for automated CI/CD",
      "Integrated Apache Camel for microservices communication"
    ],
    tech: ["Java", "Kubernetes", "Docker", "Jenkins", "Apache Camel", "Apache Maven", "Perforce", "Jenkins CI/CD"],
    projectInfo: "Altice USA (Optimum) delivers Internet, TV, Phone, and Mobile services via its Fiber Network to ~4.4 million customers across 21 states. The Amdocs engagement covers BSS/OSS modernization supporting convergent mobile and broadband services on a TM Forum-aligned microservices platform.",
    projectLink: "https://www.optimum.com/about-us/"
  },
  {
    title: "Mid-Level Software Developer",
    company: "Amdocs",
    project: "DBS Project",
    period: "08/2022 - 04/2024",
    description: [
      "Designed and implemented TM Forum (TMF) standard APIs using NestJS across product catalog, order management, and customer management domains",
      "Built and maintained domain-driven microservices using AWS Lambda for event-driven business logic with automatic scaling across 200+ integrated event sources",
      "Created CI/CD pipelines with Jenkins and Terraform, enabling automated deployments across multiple AWS environments",
      "Led AWS environment setup including Lambda, S3, DynamoDB, API Gateway, Cognito, and SNS services",
      "Implemented Amazon Cognito authentication and IAM-based authorization across internal and partner-facing API surfaces",
      "Wrote unit and integration tests with Jest; optimized API response times and database query performance"
    ],
    tech: ["AWS", "NestJS", "Terraform", "Jest", "Lambda", "MongoDB", "DynamoDB", "Cognito", "SNS", "S3", "API Gateway", "Jenkins CI/CD"],
    projectInfo: "Amdocs Digital Brands Suite (DBS) is a cloud-native, multi-tenant SaaS BSS platform built on AWS, enabling telecom operators and MVNOs to launch and manage digital service offerings. The platform exposes 500+ microservices through TM Forum Open APIs covering product catalog, order management, billing, and customer management.",
    projectLink: "https://developer.amdocs-dbs.com/"
  },
  {
    title: "Internship - Full Stack Developer",
    company: "WPX.net",
    period: "11/2021 - 06/2022",
    description: [
      "Contributed to development and maintenance of a high-performance managed WordPress hosting platform serving thousands of businesses worldwide",
      "Developed REST APIs and microservices using Node.js, NestJS, and Vue.js to support core platform backend functionality",
      "Implemented microservice architecture for horizontal scalability using Docker containerization",
      "Used RabbitMQ for async inter-service communication and Kong API Gateway for routing, rate limiting, and security",
      "Worked with CDN infrastructure optimisations and server-side performance improvements for ultra-fast page load times"
    ],
    tech: ["Node.js", "NestJS", "Vue.js", "Docker", "RabbitMQ", "Kong", "REST APIs"],
    projectInfo: "WPX.net is a premium fully managed WordPress hosting provider serving thousands of businesses globally, known for ultra-fast loading times powered by a custom CDN with 41+ global endpoints, proactive daily malware scanning, and a 'Fixed For You' expert support guarantee.",
    projectLink: "https://wpx.net/"
  }
];

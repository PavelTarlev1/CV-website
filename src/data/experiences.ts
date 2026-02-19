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
      "Led efforts to reduce security vulnerabilities and implement best practices",
      "Managed containerized microservices using Docker and Kubernetes",
      "Configured and optimized Jenkins pipelines for automated CI/CD",
      "Integrated Apache Camel for microservices communication"
    ],
    tech: ["Java", "Kubernetes", "Docker", "Jenkins", "Apache Camel"],
    projectInfo: "Optimum is a telecommunications company that delivers Internet, TV, Phone, and Mobile services via its advanced Fiber Network to about 4.4 million customers in 21 states. It also offers local news through News 12, advertising solutions via Optimum Media, and is expanding its 100% Fiber Internet network with speeds up to 8 Gig.",
    projectLink: "https://www.optimum.com/about-us/"
  },
  {
    title: "Mid-Level Software Developer",
    company: "Amdocs",
    project: "DBS Project",
    period: "08/2021 - 04/2024",
    description: [
      "Designed and implemented TM Forum (TMF) standard APIs using NestJS",
      "Created CI/CD pipelines with Jenkins and Terraform",
      "Led AWS environment setup (Lambda, S3, DynamoDB, API Gateway)",
      "Wrote unit and integration tests with Jest",
      "Optimized API response times and database queries"
    ],
    tech: ["AWS", "NestJS", "Terraform", "Jest", "Lambda", "DynamoDB"],
    projectInfo: "Amdocs Digital Brands Suite (DBS) is a cloud-native SaaS solution that helps telecom companies launch, manage, and optimize digital offerings. It provides APIs for product catalog management, shopping cart operations, and order handling. The platform includes DBS Studio with AI-powered onboarding, branding tools, and pre-integrated partners.",
    projectLink: "https://developer.amdocs-dbs.com/"
  },
  {
    title: "Internship - Full Stack Developer",
    company: "WPX.net",
    period: "11/2021-06/2022",
    description: [
      "Contributed to the development and maintenance of a high-performance, managed WordPress hosting platform used by thousands of businesses",
      "Developed REST APIs and microservices with Node.js, NestJS, and Vue.js to support the platform's backend functionality",
      "Implemented microservice architecture for scalability using Docker containerization",
      "Used RabbitMQ for inter-service communication and implemented Kong API Gateway for routing and security",
      "Gained exposure to the tools and practices of a company renowned for its 'Fixed For You Guarantee' and proactive, expert-level customer support",
      "Worked within an infrastructure designed for ultra-fast loading times, utilizing custom CDN and optimized server configurations"
    ],
    tech: ["Node.js", "NestJS", "Vue.js", "Docker", "RabbitMQ", "Kong"],
    projectInfo: "WPX.net is a premium, fully managed WordPress hosting provider known for its ultra-fast loading times, powered by custom high-speed CDN and optimized servers. Founded by Terry Kyle and Georgi Petrov to solve common problems of slow hosting, poor support, and hidden fees. Key features include expert support with 'Fixed For You Guarantee', 41+ CDN endpoints worldwide, proactive security with daily malware scanning, and developer-friendly tools.",
    projectLink: "https://wpx.net/"
  }
];
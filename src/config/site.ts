import { currentExperience } from '../utils/experience';

const site = {
  name: "Ankit Kumar",
  title: "Ankit Kumar - DevOps Engineer",
  description: "DevOps Engineer specializing in Cloud Security and Infrastructure",
  social: {
    github: "https://github.com/thestrid3r",
    linkedin: "https://linkedin.com/in/ankitkumar-dev",
    twitter: "https://twitter.com/ankitkumar_dev",
  },
  navigation: [
    { name: "About", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
  ],
  cv: {
    path: "public/cv/AnkitKumarResume.pdf",
    displayName: "Ankit Kumar - Resume.pdf"
  },
  summary: "DevOps Engineer with expertise in Cloud Security, Infrastructure, and Automation. Passionate about building secure and scalable systems.",
  expertise: [
    "Cloud Security & Infrastructure",
    "DevOps & Automation",
    "Security Compliance",
    "Development",
  ],
  skills: {
    "Cloud & Infrastructure": [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Linux",
      "Windows",
    ],
    "DevOps & Security": [
      "CI/CD",
      "GitHub Actions",
      "Azure DevOps",
      "Jenkins",
      "Ansible",
      "Puppet",
      "Chef",
      "Prometheus",
      "Grafana",
      "ELK Stack",
    ],
    "Security Compliance": [
      "SOC 2",
      "ISO 27001",
      "PCI DSS",
      "HIPAA",
      "GDPR",
      "NIST",
      "CIS",
    ],
    "Development": [
      "Python",
      "Go",
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "SQL",
      "NoSQL",
    ],
  },
};

export { site }; 
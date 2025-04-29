import { currentExperience } from '../utils/experience';

const site = {
  name: "Ankit Kumar",
  title: "Ankit Kumar - DevOps Engineer",
  description: "DevOps Engineer specializing in Cloud Security and Infrastructure",
  social: {
    github: "https://github.com/thestrid3r",
    linkedin: "https://www.linkedin.com/in/ankeetsinha/",
  },
  navigation: [
    { name: "About", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Ops Odyssey", href: "#" },
    { name: "Work With Me", href: "/#contact" },
  ],
  cv: {
    path: "public/cv/AnkitKumarResume.pdf",
    displayName: "Ankit Kumar - Resume.pdf"
  },
  summary: "DevOps Engineer with expertise in Cloud Security, Infrastructure, and Automation. Passionate about building secure and scalable systems.",
  availability: "Available for freelance and contract DevOps & cloud security engagements.",
  services: [
    {
      title: "Kubernetes Architecture & Implementation",
      description: "Expert Kubernetes cluster deployment, scaling & migrations with enterprise-grade security and high availability",
      keywords: "kubernetes, container orchestration, cloud-native, microservices, devops"
    },
    {
      title: "CI/CD Pipeline Engineering",
      description: "End-to-end CI/CD pipeline design, implementation & automation for faster, more reliable software delivery",
      keywords: "ci/cd, devops automation, continuous integration, continuous deployment, github actions, jenkins"
    },
    {
      title: "Multi-Cloud Infrastructure Design",
      description: "Hybrid & multi-cloud infrastructure architecture (AWS & GCP) with seamless integration and cost optimization",
      keywords: "aws, gcp, cloud architecture, hybrid cloud, infrastructure design"
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Infrastructure automation using Terraform and Ansible for consistent, repeatable, and secure deployments",
      keywords: "terraform, ansible, infrastructure as code, devops automation, cloud automation"
    },
    {
      title: "Cloud Operations & Optimization",
      description: "Comprehensive Day 2 operations: system monitoring, incident management & continuous optimization",
      keywords: "cloud operations, system monitoring, incident management, performance optimization"
    },
    {
      title: "Cloud Cost Optimization (FinOps)",
      description: "Strategic FinOps implementation: cost monitoring, optimization & budgeting for cloud resources",
      keywords: "finops, cloud cost optimization, cost management, cloud budgeting"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Enterprise-grade cloud security & compliance implementation (PCI DSS, ISO, NIST) for regulated industries",
      keywords: "cloud security, pci dss, iso 27001, nist, security compliance"
    },
    {
      title: "Linux System Engineering",
      description: "Advanced Linux system administration, performance tuning & troubleshooting for mission-critical systems",
      keywords: "linux administration, system engineering, performance tuning, troubleshooting"
    }
  ],
  contact: {
    email: "freelancedevops@yourdomain.com",
    calendly: "https://calendly.com/your-link",
    formspree: "https://formspree.io/your-form"
  },
  testimonials: [
    {
      quote: "Ankit transformed our cloud infrastructure with his expertise in Kubernetes and security. His work was instrumental in achieving our PCI DSS compliance.",
      author: "John Doe",
      role: "CTO, Tech Company"
    },
    {
      quote: "Working with Ankit was a game-changer for our DevOps practices. His automation solutions saved us countless hours and improved our deployment reliability.",
      author: "Jane Smith",
      role: "Engineering Lead, Startup"
    }
  ],
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
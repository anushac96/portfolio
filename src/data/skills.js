import { 
  Database, Cloud, Brain, Zap, Code, Server, 
  GitBranch, Shield, BarChart3, Settings 
} from 'lucide-react';

export const skillCategories = [
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    icon: Database,
    color: "blue",
    skills: [
      { name: "Microservices Architecture", level: 95, experience: "5+ years" },
      { name: "Event-Driven Design", level: 90, experience: "4+ years" },
      { name: "Consensus Algorithms", level: 85, experience: "3+ years" },
      { name: "Fault Tolerance", level: 88, experience: "4+ years" },
      { name: "Load Balancing", level: 92, experience: "5+ years" },
      { name: "Data Consistency", level: 87, experience: "4+ years" }
    ],
    projects: ["DistributedML", "StreamForge"],
    certifications: ["AWS Solutions Architect Professional"]
  },
  {
    id: "cloud-infrastructure", 
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "purple",
    skills: [
      { name: "AWS (Advanced)", level: 95, experience: "6+ years" },
      { name: "Kubernetes", level: 88, experience: "4+ years" },
      { name: "Terraform", level: 85, experience: "3+ years" },
      { name: "Docker", level: 92, experience: "5+ years" },
      { name: "Serverless", level: 90, experience: "4+ years" },
      { name: "CI/CD Pipelines", level: 88, experience: "5+ years" }
    ],
    projects: ["All major projects"],
    certifications: ["AWS Solutions Architect", "CKA"]
  },
  {
    id: "ai-ml",
    title: "AI/ML Engineering", 
    icon: Brain,
    color: "pink",
    skills: [
      { name: "Deep Learning", level: 88, experience: "3+ years" },
      { name: "MLOps", level: 85, experience: "3+ years" },
      { name: "Model Fine-tuning", level: 82, experience: "2+ years" },
      { name: "Vector Databases", level: 80, experience: "2+ years" },
      { name: "LLM Integration", level: 78, experience: "2+ years" },
      { name: "Custom Training", level: 85, experience: "3+ years" }
    ],
    projects: ["DistributedML", "CodeIntel"],
    certifications: ["AWS Machine Learning Specialty"]
  },
  {
    id: "performance",
    title: "Performance Engineering",
    icon: Zap,
    color: "yellow",
    skills: [
      { name: "High-Frequency Systems", level: 90, experience: "4+ years" },
      { name: "Memory Optimization", level: 88, experience: "5+ years" },
      { name: "Concurrency", level: 92, experience: "5+ years" },
      { name: "Profiling & Debugging", level: 90, experience: "6+ years" },
      { name: "Cache Optimization", level: 85, experience: "4+ years" },
      { name: "Network Optimization", level: 83, experience: "3+ years" }
    ],
    projects: ["StreamForge", "DistributedML"],
    certifications: []
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    color: "green",
    skills: [
      { name: "Python", level: 95, experience: "6+ years" },
      { name: "Java", level: 92, experience: "6+ years" }, 
      { name: "Go", level: 85, experience: "3+ years" },
      { name: "TypeScript", level: 88, experience: "4+ years" },
      { name: "C++", level: 75, experience: "2+ years" },
      { name: "Rust", level: 70, experience: "1+ years" }
    ],
    projects: ["All projects"],
    certifications: ["Oracle Java Certification"]
  },
  {
    id: "data-systems",
    title: "Data Systems",
    icon: Server,
    color: "indigo",
    skills: [
      { name: "PostgreSQL", level: 90, experience: "5+ years" },
      { name: "Redis", level: 88, experience: "4+ years" },
      { name: "DynamoDB", level: 85, experience: "4+ years" },
      { name: "Apache Kafka", level: 87, experience: "3+ years" },
      { name: "Neo4j", level: 80, experience: "2+ years" },
      { name: "ClickHouse", level: 75, experience: "2+ years" }
    ],
    projects: ["All major projects"],
    certifications: []
  }
];

export const tools = [
  {
    category: "Development",
    items: ["VS Code", "IntelliJ IDEA", "Postman", "Git", "GitHub Actions"]
  },
  {
    category: "Monitoring", 
    items: ["Prometheus", "Grafana", "Datadog", "AWS CloudWatch", "Jaeger"]
  },
  {
    category: "Testing",
    items: ["Jest", "PyTest", "JUnit", "K6", "JMeter", "Cypress"]
  },
  {
    category: "Design",
    items: ["Figma", "Lucidchart", "Draw.io", "Miro", "Notion"]
  }
];
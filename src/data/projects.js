export const projects = [
  {
    id: "distributedml",
    title: "DistributedML Training Platform",
    subtitle: "Scalable ML Training Infrastructure",
    description: "End-to-end distributed machine learning platform that reduces training time by 75% through custom parameter server architecture and fault-tolerant scaling.",
    image: "/projects/distributedml-demo.png",
    demoUrl: "https://distributed-ml-demo.com",
    githubUrl: "https://github.com/yourname/distributed-ml",
    blogUrl: "/blog/building-distributed-ml-platform",
    featured: true,
    status: "Production",
    tech: [
      "Python", "PyTorch", "Kubernetes", "Redis Cluster", 
      "AWS EC2", "Docker", "FastAPI", "PostgreSQL", "Terraform"
    ],
    highlights: [
      "75% reduction in training time",
      "Auto-scaling across 100+ nodes", 
      "Fault-tolerant parameter servers",
      "Production SLA: 99.9% uptime",
      "Handles 1000+ concurrent training jobs"
    ],
    metrics: {
      performance: "2.5x faster than baseline",
      scale: "1000+ concurrent training jobs",
      reliability: "99.9% uptime",
      cost: "40% cost reduction"
    },
    architecture: {
      components: ["API Gateway", "Job Scheduler", "Worker Nodes", "Parameter Servers", "Model Registry"],
      patterns: ["Microservices", "Event-Driven", "Auto-scaling", "Circuit Breaker"]
    },
    challenges: [
      "Implementing fault-tolerant distributed training",
      "Optimizing network communication between nodes",
      "Dynamic resource allocation and cost optimization",
      "Handling heterogeneous hardware configurations"
    ],
    impact: "Reduced ML model training costs by 40% while improving training speed by 2.5x for the data science team."
  },
  {
    id: "streamforge",
    title: "StreamForge Event Processor", 
    subtitle: "High-Performance Real-time Processing",
    description: "Ultra-low latency event processing engine handling 2M+ events/second with custom lock-free algorithms and exactly-once processing guarantees.",
    image: "/projects/streamforge-demo.png",
    demoUrl: "https://streamforge-demo.com",
    githubUrl: "https://github.com/yourname/streamforge",
    blogUrl: "/blog/achieving-sub-50ms-latency",
    featured: true,
    status: "Production",
    tech: [
      "Java", "Go", "Apache Kafka", "RocksDB", "Redis", 
      "Kubernetes", "Prometheus", "Grafana", "JMeter"
    ],
    highlights: [
      "Sub-50ms p99 latency",
      "2M+ events/second throughput",
      "Custom lock-free algorithms", 
      "Exactly-once processing guarantees",
      "Zero-downtime deployments"
    ],
    metrics: {
      latency: "<50ms p99",
      throughput: "2M+ events/sec", 
      efficiency: "60% cost reduction",
      availability: "99.99% uptime"
    },
    architecture: {
      components: ["Ingestion Layer", "Stream Router", "Processing Nodes", "State Stores", "Output Sinks"],
      patterns: ["CQRS", "Event Sourcing", "Backpressure", "Circuit Breaker"]
    },
    challenges: [
      "Achieving consistent sub-50ms latency at scale",
      "Implementing exactly-once processing semantics", 
      "Memory optimization for high-frequency data",
      "Handling backpressure during traffic spikes"
    ],
    impact: "Enabled real-time fraud detection system processing millions of transactions daily with 99.99% accuracy."
  },
  {
    id: "codeintel",
    title: "CodeIntel Analysis Platform",
    subtitle: "AI-Powered Code Intelligence", 
    description: "Advanced code analysis platform using custom transformer models and graph neural networks to provide intelligent insights and reduce code review time by 60%.",
    image: "/projects/codeintel-demo.png",
    demoUrl: "https://codeintel-demo.com",
    githubUrl: "https://github.com/yourname/codeintel", 
    blogUrl: "/blog/fine-tuning-transformers-for-code",
    featured: true,
    status: "Beta",
    tech: [
      "PyTorch", "Transformers", "Neo4j", "FastAPI", "React",
      "Docker", "AWS SageMaker", "Pinecone", "TypeScript"
    ],
    highlights: [
      "Custom transformer fine-tuning",
      "Graph neural networks for code",
      "10M+ code embeddings processed",
      "60% reduction in review time",
      "94% pattern detection accuracy"
    ],
    metrics: {
      accuracy: "94% pattern detection",
      scale: "10M+ lines analyzed",
      adoption: "500+ developers using",
      efficiency: "60% faster code reviews"
    },
    architecture: {
      components: ["Code Parser", "ML Pipeline", "Graph Database", "Vector Store", "Web Interface"],
      patterns: ["Microservices", "Event-Driven", "CQRS", "Hexagonal Architecture"]
    },
    challenges: [
      "Fine-tuning transformer models for code understanding",
      "Scaling graph neural networks to large codebases",
      "Real-time code analysis and feedback",
      "Integration with multiple development workflows"
    ],
    impact: "Improved code quality scores by 40% and reduced time-to-market for new features by 25%."
  }
];

export const sideProjects = [
  {
    title: "Distributed Hash Table Implementation",
    description: "Custom DHT with consistent hashing and fault tolerance",
    tech: ["Go", "Raft Consensus"],
    githubUrl: "https://github.com/yourname/distributed-hash-table"
  },
  {
    title: "Transformer from Scratch",
    description: "Complete transformer implementation with training pipeline",
    tech: ["Python", "PyTorch", "NumPy"],
    githubUrl: "https://github.com/yourname/transformer-from-scratch"
  },
  {
    title: "High-Performance HTTP Server",
    description: "Custom HTTP server with epoll and zero-copy techniques",
    tech: ["C++", "Linux", "Benchmarking"],
    githubUrl: "https://github.com/yourname/http-server"
  }
];
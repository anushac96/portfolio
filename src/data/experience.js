export const workExperience = [
  {
    company: "CS Optima Inc. - Merck Sharp & Dohme",
    position: "Full Stack Software Engineer",
    duration: "2025 - Present",
    location: "Remote",
    type: "Full-time",
    logo: "/companies/company3.png", // TODO: Add company logos to public/companies/
    website: "https://csoptima.com/",
    achievements: [
      "* Built an error-handling system for AWS Lambda functions that detected failed tasks in complex workflows, logged detailed error info, and allowed quick rollbacks to keep clinical trial data accurate",
      "* Wrote thorough unit tests covering all Lambda function cases, maintaining over 80% code coverage",
      "* Designed a workflow orchestration setup using AWS Step Functions, Lambda Function, and DynamoDB to handle different workflow types and stages, streamlining clinical data processing",
      "* Built a robust file upload system with Excel parsing, validation pipeline, and AWS S3 integration using pre-signed URLs, implementing comprehensive error handling for participant data processing with healthcare applications",
      "* Ensured collision-free workflow IDs under concurrent Lambda invocations, improving data integrity and system reliability"
    ],
    technologies: ["AWS Lambda", "Step Functions", "DynamoDB", "S3", "Python", "Healthcare Systems"],
    highlights: [
      "80%+ code coverage maintained",
      "Zero data collision incidents",
      "Clinical trial data accuracy improved by 40%"
    ]
  },
  {
    company: "CS Optima Inc.", // Update with actual company
    position: "Software Engineer",
    duration: "2022 - 2025",
    location: "Remote",
    type: "Full-time",
    logo: "/companies/company2.png",
    website: "https://csoptima.com/",
    achievements: [
      "* Designed and implemented SDTM-compliant, full-stack software solutions using AWS SAM and serverless architecture (Lambda, API Gateway, DynamoDB), with additional support for e-commerce and healthcare use cases",
      "* Developed efficient APIs and data pipelines using GraphQL (AppSync), RESTful APIs, and Python in AWS Lambda, enabling CRUD operations across DynamoDB and RDS",
      "* Built responsive front-end components using React and Material-UI (MUI) to manage and visualize CODELIST data from RDS, including features like pagination, sorting, and user-friendly interfaces",
      "* Integrated scalable infrastructure and automation practices using Terraform, CloudFormation, Step Functions, and Lambda triggers",
      "* Secured cloud environments and improved system monitoring by implementing AWS PrivateLink for private Lambda-to-DynamoDB access, Lambda Authorizers for API Gateway, and centralized logging/monitoring with AWS CloudWatch, X-Ray"
    ],
    technologies: ["AWS SAM", "GraphQL", "React", "Material-UI", "Terraform", "CloudFormation"],
    highlights: [
      "SDTM compliance achieved",
      "99.9% system uptime",
      "40% reduction in deployment time"
    ]
  },
  {
    company: "Mphasis Pvt Ltd", // Update with actual company
    position: "Software Developer",
    duration: "2018 - 2020",
    location: "Office Location",
    type: "Full-time",
    logo: "/companies/company1.png",
    website: "https://www.mphasis.com/home.html",
    achievements: [
      "* Managed a microservices application using Java 8 and Spring Boot, overseeing development, testing, and maintenance, resulting in enhanced operational efficiency and cross-team collaboration",
      "* Adhered to the Agile software development lifecycle, emphasizing ontology integration and ensuring alignment with SDLC best practices for continuous improvement",
      "* Executed Unit and Cucumber tests, substantially increasing code coverage while applying Test-Driven Development (TDD) for enhanced reliability",
      "* Reviewed and debugged team members' code to ensure quality, optimize performance, and uphold best practices, while leading end-to-end testing and bug fixing using Splunk",
      "* Utilized CI/CD pipelines to automate the build, test, and deployment processes, ensuring smooth and rapid delivery of software to production",
      "* Mentored junior engineers and participated in planning discussions, ensuring project alignment with goals and effectively evaluating feature requests"
    ],
    technologies: ["Java 8", "Spring Boot", "Microservices", "CI/CD", "Splunk", "TDD"],
    highlights: [
      "Led team of 5 developers",
      "50% improvement in code coverage",
      "Mentored 3 junior engineers"
    ]
  },
  {
    company: "First Company", // Update with actual company
    position: "Software Engineer Intern → Junior Developer",
    duration: "2017 - 2018",
    location: "Office Location",
    type: "Full-time",
    logo: "/companies/company0.png",
    website: "https://company0.com",
    achievements: [
      "* Successfully migrated over 1,000 Java Maven applications between data centers, ensuring seamless transitions and optimal performance",
      "* Established a rigorous compliance check process using specialized tools, ensuring that each application met the standards required for relocation",
      "* Resolved non-compliance by adjusting dependencies and configurations, ensuring all applications met required standards",
      "* Documented migration changes, compliance status, and application updates in MS Word and Excel, maintaining organized and comprehensive records throughout the process",
      "* Gathered, analyzed, and drew conclusions from large, diverse data sets to identify problems and contribute to decision-making in service of secure, stable application development"
    ],
    technologies: ["Java", "Maven", "Data Migration", "Compliance Tools", "Documentation"],
    highlights: [
      "1,000+ applications migrated successfully",
      "100% compliance rate achieved",
      "Zero downtime during migrations"
    ]
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "California State University, Fullerton",
    duration: "2022 - 2024",
    location: "Fullerton, CA",
    gpa: "3.8/4.0", // TODO: Update with actual GPA if you want to include it
    coursework: [
      "Advanced Algorithms and Data Structures",
      "Distributed Systems",
      "Machine Learning",
      "Database Systems",
      "Software Engineering",
      "Computer Networks"
    ],
    projects: [
      "Thesis: Optimizing Distributed Machine Learning Systems",
      "Research on High-Performance Computing"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",  //TODO: Update with actual degree
    school: "Your Previous University", // TODO: Update with actual university
    duration: "2013 - 2017",
    location: "Location",
    gpa: "3.7/4.0",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering"
    ],
    projects: [
      "Final Year Project: Web-based Healthcare Management System",
      "Internship Project: E-commerce Platform Development"
    ]
  }
];

export const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAP-2023-XXX",
    badge: "/certifications/aws-sap.png"
  },
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services", 
    date: "2023",
    credentialId: "AWS-MLS-2023-XXX",
    badge: "/certifications/aws-mls.png"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-XXX",
    badge: "/certifications/cka.png"
  },
  {
    name: "Oracle Certified Professional, Java SE",
    issuer: "Oracle",
    date: "2021",
    credentialId: "OCP-JAVA-2021-XXX",
    badge: "/certifications/oracle-java.png"
  }
];
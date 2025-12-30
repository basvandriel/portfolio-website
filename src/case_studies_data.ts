export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  visual?: {
    type: "mesh" | "waves" | "geometric" | "abstract";
    colors: string[];
  };
  problem: {
    title: string;
    description: string;
    pain_points: string[];
  };
  solution: {
    title: string;
    approach: string;
    key_technologies: string[];
  };
  results: {
    primary_metric: {
      value: string;
      label: string;
    };
    secondary_metrics: Array<{
      value: string;
      label: string;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "basf-chemical-data-platform",
    title: "Building Large-Scale Data Platform for Chemical Research Innovation",
    client: "BASF",
    industry: "Chemical Manufacturing",
    timeline: "May 2025 - Present",
    visual: {
      type: "mesh",
      colors: ["#8B5CF6", "#EC4899", "#6366F1"],
    },
    problem: {
      title: "Fragmented data systems preventing AI-driven innovation",
      description:
        "BASF needed a unified data platform to integrate and transform data from multiple disconnected systems. Scientists and researchers required seamless access to large-scale data for AI/ML workflows, but legacy infrastructure made this impossible. The challenge included cloud migration, security compliance, and building production-grade Kubernetes infrastructure.",
      pain_points: [
        "Data scattered across 50+ disconnected legacy systems",
        "No unified platform for AI/ML model deployment and data access",
        "Complex security and compliance requirements for cloud migration",
        "Need for production-grade container orchestration at scale",
      ],
    },
    solution: {
      title: "Enterprise data platform with Kubernetes and Azure Databricks",
      approach:
        "Developed and managed a comprehensive data platform for large-scale data integrations and transformation using Azure Databricks. Built data pipelines with Pyspark, Pandas, and Dagster orchestration. Containerized data processing applications with Docker and deployed via Kubernetes with ArgoCD for GitOps. Set up production-grade Kubernetes clusters with multi-tenant isolation, implemented security controls including threat modeling, RBAC policies, and network policies. Automated infrastructure with Terraform and Ansible.",
      key_technologies: [
        "Azure Databricks",
        "Apache Spark",
        "Python (Pyspark, Pandas)",
        "Dagster",
        "Kubernetes",
        "ArgoCD",
        "Terraform",
        "Ansible",
        "Azure Data Factory",
        "Apache Airflow",
        "Docker",
      ],
    },
    results: {
      primary_metric: {
        value: "Unified Platform",
        label: "All data sources with AI/ML capabilities",
      },
      secondary_metrics: [
        {
          value: "Production-Grade",
          label: "Kubernetes infrastructure with GitOps",
        },
        {
          value: "Automated",
          label: "ETL processes with orchestration",
        },
        {
          value: "100%",
          label: "Security compliance achieved",
        },
      ],
    },
    tags: ["Data Platform", "Azure Databricks", "Kubernetes", "DevOps", "Security"],
  },
  {
    id: "abn-amro-data-pipeline",
    title: "Building Enterprise Data Platform for Financial Data Processing",
    client: "ABN AMRO",
    industry: "Financial Services",
    timeline: "May 2023 - Sep 2024",
    visual: {
      type: "geometric",
      colors: ["#10B981", "#14B8A6", "#06B6D4"],
    },
    problem: {
      title: "Large-scale financial data transformation and availability challenges",
      description:
        "ABN AMRO required a robust platform for processing and transforming massive volumes of financial data across multiple systems. The existing infrastructure couldn't handle the scale, and there was a critical need for automated data pipelines, secure cloud infrastructure, and production-ready container orchestration for regulatory compliance.",
      pain_points: [
        "Legacy systems unable to handle large-scale data processing",
        "Manual data transformation processes causing delays",
        "Complex security and compliance requirements",
        "Need for automated CI/CD and production-grade Kubernetes",
      ],
    },
    solution: {
      title: "Azure-based data platform with GitOps and automated pipelines",
      approach:
        "Developed and managed a custom software solution for large-scale data availability and transformation using Azure Databricks and Apache Spark. Built data pipelines with Pyspark, Pandas, and Dagster orchestration. Implemented ETL processes with Azure Data Factory and Apache Airflow. Containerized applications with Docker and deployed via Kubernetes with ArgoCD for GitOps. Set up production-grade Kubernetes clusters on Azure with multi-tenant isolation. Implemented comprehensive security controls including threat modeling, RBAC, and network policies. Automated infrastructure with Terraform and Ansible.",
      key_technologies: [
        "Azure Databricks",
        "Apache Spark",
        "Python (Pyspark, Pandas)",
        "Dagster",
        "Azure Data Factory",
        "Apache Airflow",
        "Kubernetes",
        "ArgoCD",
        "Terraform",
        "Ansible",
        "Apache Kafka",
      ],
    },
    results: {
      primary_metric: {
        value: "Enterprise-Scale",
        label: "Data platform with automated processing",
      },
      secondary_metrics: [
        {
          value: "GitOps",
          label: "Deployment with ArgoCD on Kubernetes",
        },
        {
          value: "Automated",
          label: "CI/CD with security scanning",
        },
        {
          value: "Production-Ready",
          label: "Multi-tenant Kubernetes clusters",
        },
      ],
    },
    tags: ["Data Platform", "Azure", "Kubernetes", "FinTech", "DevOps"],
  },
  {
    id: "minvws-healthcare-devops",
    title: "Modernizing Healthcare System Infrastructure with Cloud-Native DevOps",
    client: "Ministry of Health, Welfare and Sport (MinVWS)",
    industry: "Government Healthcare",
    timeline: "Sep 2024 - Jan 2025",
    visual: {
      type: "mesh",
      colors: ["#0EA5E9", "#6366F1", "#8B5CF6"],
    },
    problem: {
      title:
        "Critical healthcare systems requiring modern infrastructure and automation",
      description:
        "The iRealisatie project needed to enhance the Dutch healthcare system with modern cloud infrastructure and automated deployment practices. Legacy systems and manual processes created security risks and operational inefficiencies. The government required production-grade Kubernetes infrastructure with comprehensive security controls and compliance measures.",
      pain_points: [
        "Legacy healthcare applications lacking automation",
        "Manual deployment processes causing security risks",
        "Complex government security and compliance requirements",
        "Need for production-grade container orchestration",
      ],
    },
    solution: {
      title: "Cloud-native microservices with automated CI/CD and Kubernetes",
      approach:
        "Developed and managed applications for the iRealisatie project using Python microservices with FastAPI and Pydantic. Containerized all applications with Docker and orchestrated via Kubernetes on Azure (AKS). Set up and managed production Kubernetes clusters with monitoring and logging. Automated infrastructure provisioning with Terraform modules for Azure resources. Implemented comprehensive security measures including network segmentation, secrets management, and compliance policies. Automated server configuration with Ansible. Developed and managed CI/CD pipelines in Azure DevOps with automated testing and SonarQube code quality checks.",
      key_technologies: [
        "Python",
        "FastAPI",
        "Pydantic",
        "Kubernetes (AKS)",
        "Docker",
        "Terraform",
        "Ansible",
        "Azure DevOps",
        "SonarQube",
        "C#",
        ".NET",
      ],
    },
    results: {
      primary_metric: {
        value: "Cloud-Native",
        label: "Healthcare infrastructure on Azure Kubernetes",
      },
      secondary_metrics: [
        {
          value: "Automated",
          label: "CI/CD with security scanning",
        },
        {
          value: "IaC",
          label: "Infrastructure as Code with Terraform",
        },
        {
          value: "100%",
          label: "Security compliance achieved",
        },
      ],
    },
    tags: ["Healthcare", "DevOps", "Azure", "Kubernetes", "Security"],
  },
  {
    id: "het-veer-iot-platform",
    title:
      "Building Real-Time IoT Platform for Medium-Voltage Installation Control",
    client: "Het Veer",
    industry: "Manufacturing & IoT",
    timeline: "Nov 2022 - May 2023",
    visual: {
      type: "waves",
      colors: ["#F97316", "#EF4444", "#DC2626"],
    },
    problem: {
      title: "Legacy embedded systems lacking real-time control and cloud connectivity",
      description:
        "Het Veer needed a modern application for real-time control and testing of medium-voltage installations. Their existing embedded systems lacked cloud connectivity and real-time monitoring capabilities. The challenge was to bridge legacy embedded systems with modern cloud infrastructure while ensuring reliability and security.",
      pain_points: [
        "No real-time monitoring of equipment performance",
        "Legacy embedded systems with no API capabilities",
        "Manual data collection and testing processes",
        "Need for scalable cloud infrastructure and DevOps practices",
      ],
    },
    solution: {
      title: "Cloud-connected real-time platform with React frontend",
      approach:
        "Developed and managed an application for real-time control and testing of medium-voltage installations. Built backend APIs using Python with FastAPI and Pydantic for data validation and real-time processing. Containerized with Docker and orchestrated via Kubernetes for scalable deployment. Implemented security best practices including secrets management and network isolation. Set up CI/CD pipelines in Jenkins for automated builds and deployments. Automated deployment with Ansible and managed Azure Cloud infrastructure. Developed React front-end components with integration to backend services.",
      key_technologies: [
        "Python",
        "FastAPI",
        "Pydantic",
        "React",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Ansible",
        "Azure Cloud",
        "PostgreSQL",
      ],
    },
    results: {
      primary_metric: {
        value: "Real-Time",
        label: "Control and testing of installations",
      },
      secondary_metrics: [
        {
          value: "Cloud-Connected",
          label: "Modern platform replacing embedded systems",
        },
        {
          value: "Automated",
          label: "CI/CD with Jenkins",
        },
        {
          value: "Scalable",
          label: "Kubernetes-based deployment",
        },
      ],
    },
    tags: ["IoT", "Real-time Systems", "React", "Manufacturing", "DevOps"],
  },
  {
    id: "ns-railway-operations",
    title: "Real-Time Decision Support System for Railway Maintenance Planning",
    client: "NS (Dutch Railways)",
    industry: "Transportation",
    timeline: "Jun 2022 - Nov 2023",
    visual: {
      type: "abstract",
      colors: ["#3B82F6", "#06B6D4", "#0EA5E9"],
    },
    problem: {
      title: "Manual railway maintenance planning causing operational inefficiencies",
      description:
        "NS needed a modern decision-support application for real-time scheduling of railway maintenance. The existing manual processes couldn't handle the complexity of scheduling maintenance across the national railway network. They required data processing pipelines, cloud infrastructure, and automated deployment practices.",
      pain_points: [
        "Manual maintenance scheduling processes",
        "No real-time visibility into railway operations",
        "Legacy systems unable to handle data processing at scale",
        "Need for automated CI/CD and cloud infrastructure",
      ],
    },
    solution: {
      title: "Python-based decision support system with Azure integration",
      approach:
        "Developed a decision-support application for real-time railway maintenance planning. Built data processing pipelines using Python with Pandas for data analysis and visualization. Containerized applications with Docker and deployed via Kubernetes with ArgoCD for GitOps. Automated infrastructure with Ansible for consistent environments across development and production. Managed Azure Cloud resources and integrated with Azure DevOps for CI/CD. Implemented code quality checks with SonarQube in the build pipeline.",
      key_technologies: [
        "Python",
        "Pandas",
        "Docker",
        "Kubernetes",
        "ArgoCD",
        "Ansible",
        "Azure Cloud",
        "Azure DevOps",
        "SonarQube",
        "Java",
        "Maven",
      ],
    },
    results: {
      primary_metric: {
        value: "Real-Time",
        label: "Maintenance planning and scheduling",
      },
      secondary_metrics: [
        {
          value: "Automated",
          label: "Data processing pipelines",
        },
        {
          value: "GitOps",
          label: "Deployment with ArgoCD",
        },
        {
          value: "Cloud-Native",
          label: "Azure-based infrastructure",
        },
      ],
    },
    tags: ["Transportation", "Data Processing", "Python", "Azure", "DevOps"],
  },
  {
    id: "beugelbuddy-saas-platform",
    title: "Building Multi-Tenant SaaS Platform for Orthodontic Practice Management",
    client: "BeugelBuddy",
    industry: "Healthcare Technology",
    timeline: "Apr 2021 - Present",
    visual: {
      type: "waves",
      colors: ["#8B5CF6", "#A855F7", "#C084FC"],
    },
    problem: {
      title:
        "Manual orthodontic practice management causing inefficiencies",
      description:
        "Orthodontic practices needed a modern SaaS platform to automate patient management, treatment planning, and practice operations. Manual processes with paper forms and spreadsheets were causing errors and inefficiencies. The challenge was to build a scalable multi-tenant platform accessible on web, smartphone, and tablet with real-time data synchronization.",
      pain_points: [
        "Manual patient data management across multiple systems",
        "No unified platform for practice management",
        "Need for mobile and web accessibility",
        "Real-time data synchronization requirements",
      ],
    },
    solution: {
      title: "Full-stack SaaS platform with microservices architecture",
      approach:
        "Developed and managed a SaaS platform for orthodontic practices, accessible on web, smartphone, and tablet. Built microservices using Python with Django for the main application and Flask for API services. Implemented data pipelines with Dagster for workflow orchestration and Pandas for data processing. Containerized all services with Docker and orchestrated via Kubernetes for multi-tenant architecture. Set up message streaming with Apache Kafka for real-time event processing. Developed React.js front-end application with TypeScript for type-safe development. Automated deployment with Ansible and managed AWS infrastructure.",
      key_technologies: [
        "Python",
        "Django",
        "Flask",
        "Dagster",
        "React.js",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Apache Kafka",
        "Ansible",
        "AWS",
        "Node.js",
      ],
    },
    results: {
      primary_metric: {
        value: "Multi-Tenant",
        label: "SaaS platform for orthodontic practices",
      },
      secondary_metrics: [
        {
          value: "Cross-Platform",
          label: "Web, smartphone, and tablet access",
        },
        {
          value: "Real-Time",
          label: "Event processing with Kafka",
        },
        {
          value: "Scalable",
          label: "Kubernetes-based microservices",
        },
      ],
    },
    tags: ["Healthcare", "SaaS", "Full-stack", "Kubernetes", "Multi-tenant"],
  },
];

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
    title: "Accelerating Chemical Research with Unified AI-Ready Data Platform",
    client: "BASF",
    industry: "Chemical Manufacturing",
    timeline: "Ongoing",
    visual: {
      type: "mesh",
      colors: ["#8B5CF6", "#EC4899", "#6366F1"],
    },
    problem: {
      title: "Fragmented data systems preventing AI-driven innovation",
      description:
        "BASF's chemical research and production data was scattered across legacy systems, making it impossible to leverage AI/ML for process optimization. Multiple data silos prevented scientists from accessing critical research data, slowing innovation cycles.",
      pain_points: [
        "Data spread across 50+ disconnected systems",
        "Weeks required to compile data for research projects",
        "No unified platform for AI/ML model deployment",
        "Compliance and security challenges with cloud migration",
      ],
    },
    solution: {
      title: "Enterprise-grade data platform with AI/ML capabilities",
      approach:
        "Built scalable Azure-based data platform with Databricks and Apache Spark for unified data access. Implemented secure data pipelines with Dagster orchestration, enabling scientists to deploy AI models directly. Established DevOps practices with Kubernetes for container orchestration.",
      key_technologies: [
        "Azure Databricks",
        "Apache Spark",
        "Python",
        "Dagster",
        "Kubernetes",
        "PostgreSQL",
      ],
    },
    results: {
      primary_metric: {
        value: "50 → 1",
        label: "Data sources unified into single platform",
      },
      secondary_metrics: [
        {
          value: "Weeks → Hours",
          label: "Research data compilation time",
        },
        {
          value: "3x",
          label: "Faster AI model deployment",
        },
        {
          value: "100%",
          label: "Security compliance achieved",
        },
      ],
    },
    tags: ["Data Platform", "AI/ML", "Azure", "Chemical Industry"],
  },
  {
    id: "het-veer-iot-platform",
    title:
      "Transforming Legacy Manufacturing Equipment into Cloud-Connected IoT Platform",
    client: "Het Veer",
    industry: "Manufacturing & IoT",
    timeline: "6 months",
    visual: {
      type: "waves",
      colors: ["#F97316", "#EF4444", "#DC2626"],
    },
    problem: {
      title: "Legacy embedded systems blocking IoT expansion",
      description:
        "Het Veer's manufacturing equipment ran on outdated embedded systems with no cloud connectivity. They couldn't scale their IoT offering or provide real-time monitoring to customers, limiting their competitive position in smart manufacturing.",
      pain_points: [
        "No remote monitoring of equipment performance",
        "Manual data collection from factory floors",
        "Unable to offer predictive maintenance services",
        "Embedded systems with no API capabilities",
      ],
    },
    solution: {
      title: "Cloud-connected IoT platform with real-time analytics",
      approach:
        "Developed FastAPI-based microservices to bridge legacy embedded systems with Azure cloud. Built React dashboard for real-time equipment monitoring and created data pipelines for predictive analytics. Implemented secure device authentication and containerized deployment.",
      key_technologies: [
        "Python",
        "FastAPI",
        "React",
        "Azure",
        "Docker",
        "PostgreSQL",
      ],
    },
    results: {
      primary_metric: {
        value: "Real-time",
        label: "Equipment monitoring (was manual)",
      },
      secondary_metrics: [
        {
          value: "40%",
          label: "Reduction in equipment downtime",
        },
        {
          value: "€320K/year",
          label: "New predictive maintenance revenue",
        },
        {
          value: "15x",
          label: "Faster issue detection",
        },
      ],
      testimonial: {
        quote:
          "The new IoT platform transformed our business model. We went from selling equipment to selling uptime guarantees.",
        author: "Pieter van Dam",
        role: "CTO, Het Veer",
      },
    },
    tags: ["IoT", "Embedded Systems", "Manufacturing", "Real-time"],
  },
  {
    id: "abn-amro-data-pipeline",
    title: "Reducing Financial Data Processing Time from 6 Hours to 45 Minutes",
    client: "ABN AMRO",
    industry: "Financial Services",
    timeline: "6 months",
    visual: {
      type: "geometric",
      colors: ["#10B981", "#14B8A6", "#06B6D4"],
    },
    problem: {
      title: "Legacy data pipelines causing SLA breaches and operational risk",
      description:
        "ABN AMRO's critical financial data processing system took 6+ hours to process daily transaction data, risking regulatory compliance and SLA breaches. The system processed millions of transactions daily but couldn't scale during peak periods.",
      pain_points: [
        "6+ hour processing time for daily financial data",
        "Manual interventions required during peak loads",
        "Risk of missing regulatory reporting deadlines",
        "€2M+ annual infrastructure costs with poor performance",
      ],
    },
    solution: {
      title: "Scalable cloud-native data pipeline with Apache Spark",
      approach:
        "Architected and implemented a modern data pipeline using Azure Databricks and Apache Spark, with automated orchestration via Dagster. Migrated from monolithic batch processing to distributed, real-time processing architecture.",
      key_technologies: [
        "Azure Databricks",
        "Apache Spark",
        "Dagster",
        "Python",
        "Kubernetes",
        "Apache Kafka",
      ],
    },
    results: {
      primary_metric: {
        value: "6hrs → 45min",
        label: "Processing time reduced by 88%",
      },
      secondary_metrics: [
        {
          value: "€850K/year",
          label: "Infrastructure cost savings",
        },
        {
          value: "99.97%",
          label: "Processing success rate",
        },
        {
          value: "0",
          label: "SLA breaches since deployment",
        },
      ],
      testimonial: {
        quote:
          "The new data pipeline transformed our operations. We went from constant firefighting to confident, predictable data processing.",
        author: "Jan de Vries",
        role: "Data Engineering Lead, ABN AMRO",
      },
    },
    tags: ["Data Engineering", "Azure", "FinTech", "Real-time Processing"],
  },
  {
    id: "ns-realtime-operations",
    title:
      "Cutting Train Operational Delays by 65% with Real-Time Control Systems",
    client: "NS (Dutch Railways)",
    industry: "Transportation",
    timeline: "8 months",
    visual: {
      type: "abstract",
      colors: ["#3B82F6", "#06B6D4", "#0EA5E9"],
    },
    problem: {
      title: "Legacy train control systems causing operational delays",
      description:
        "NS operated critical train control systems on outdated infrastructure with limited real-time visibility. Manual processes for train dispatching led to delays and poor resource utilization affecting 1.3M daily passengers.",
      pain_points: [
        "No real-time visibility into train operations",
        "Manual dispatching decisions causing 15-min average delays",
        "Legacy systems impossible to scale or maintain",
        "Poor integration between control systems",
      ],
    },
    solution: {
      title: "Modern microservices architecture with real-time dashboards",
      approach:
        "Built cloud-native Python/FastAPI microservices for train operations with React-based real-time control dashboards. Implemented event-driven architecture for instant updates and automated decision support systems.",
      key_technologies: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "Kubernetes",
        "PostgreSQL",
      ],
    },
    results: {
      primary_metric: {
        value: "65%",
        label: "Reduction in operational delays",
      },
      secondary_metrics: [
        {
          value: "€1.2M/year",
          label: "Operational cost savings",
        },
        {
          value: "2min",
          label: "Average decision time (was 15min)",
        },
        {
          value: "99.9%",
          label: "System uptime",
        },
      ],
    },
    tags: ["Microservices", "Real-time Systems", "React", "Transportation"],
  },
  {
    id: "healthcare-deployment-automation",
    title:
      "Automating Critical Healthcare Deployments to Eliminate Service Disruptions",
    client: "Ministerie van Volksgezondheid",
    industry: "Government Healthcare",
    timeline: "4 months",
    visual: {
      type: "mesh",
      colors: ["#0EA5E9", "#6366F1", "#8B5CF6"],
    },
    problem: {
      title:
        "Manual deployments causing service disruptions in critical healthcare systems",
      description:
        "Government healthcare applications required 2-hour manual deployment processes with frequent rollbacks. Each deployment carried risk of downtime for systems serving millions of citizens.",
      pain_points: [
        "2+ hour manual deployment process",
        "60% of deployments required rollbacks",
        "No automated testing or validation",
        "Compliance and security vulnerabilities",
      ],
    },
    solution: {
      title: "Fully automated CI/CD with security compliance",
      approach:
        "Implemented comprehensive DevOps pipeline with automated testing, security scanning, and zero-downtime deployments. Built infrastructure-as-code with Azure DevOps and Kubernetes for reproducible, compliant deployments.",
      key_technologies: [
        "Azure DevOps",
        "Kubernetes",
        "Docker",
        "Python",
        ".NET",
        "Terraform",
      ],
    },
    results: {
      primary_metric: {
        value: "2hrs → 8min",
        label: "Deployment time reduced by 93%",
      },
      secondary_metrics: [
        {
          value: "95%",
          label: "Reduction in deployment failures",
        },
        {
          value: "€450K/year",
          label: "Operational cost savings",
        },
        {
          value: "100%",
          label: "Security compliance achieved",
        },
      ],
    },
    tags: ["DevOps", "Healthcare", "Azure", "CI/CD", "Security"],
  },
  {
    id: "beugelbuddy-dental-automation",
    title:
      "Saving Orthodontic Practices 3.5 Hours Daily Through Treatment Automation",
    client: "BeugelBuddy",
    industry: "Healthcare Technology",
    timeline: "1 year",
    visual: {
      type: "waves",
      colors: ["#8B5CF6", "#A855F7", "#C084FC"],
    },
    problem: {
      title:
        "Manual orthodontic treatment management causing delays and errors",
      description:
        "Orthodontic practices were managing patient treatments manually with paper forms, Excel spreadsheets, and fragmented communication. This led to appointment scheduling errors, treatment plan inconsistencies, and poor patient experience. Dentists needed hours to coordinate between systems.",
      pain_points: [
        "Manual patient data entry across multiple systems",
        "Treatment plan errors due to paper-based workflows",
        "No real-time visibility into patient progress",
        "Hours wasted on administrative tasks per day",
      ],
    },
    solution: {
      title: "Full-stack healthcare automation platform",
      approach:
        "Built comprehensive web and mobile application using Django/Flask backend with React frontend. Implemented automated treatment planning workflows, integrated calendar systems, and created patient portal for self-service. Deployed on AWS with CI/CD pipelines for rapid iteration.",
      key_technologies: [
        "Python",
        "Django",
        "Flask",
        "React",
        "Node.js",
        "AWS",
      ],
    },
    results: {
      primary_metric: {
        value: "4hrs → 30min",
        label: "Daily admin time per practice",
      },
      secondary_metrics: [
        {
          value: "85%",
          label: "Reduction in scheduling errors",
        },
        {
          value: "€125K/year",
          label: "Average cost savings per practice",
        },
        {
          value: "95%",
          label: "Patient satisfaction score",
        },
      ],
      testimonial: {
        quote:
          "BeugelBuddy transformed our practice. We spend less time on paperwork and more time with patients. The automation is a game-changer.",
        author: "Dr. Sophie Jansen",
        role: "Orthodontist, Dental Care Amsterdam",
      },
    },
    tags: ["Healthcare", "SaaS", "Automation", "Full-stack"],
  },
];

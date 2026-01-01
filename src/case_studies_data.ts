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
    title: "From Weeks to Hours: Accelerating Biological Research Data Access at BASF",
    client: "BASF",
    industry: "Chemical Manufacturing",
    timeline: "May 2025 - Present",
    visual: {
      type: "mesh",
      colors: ["#8B5CF6", "#EC4899", "#6366F1"],
    },
    problem: {
      title: "Research teams losing weeks waiting for biological data access",
      description:
        "BASF's research scientists needed rapid access to biological data (FASTA, FASTQ files) from 50+ disconnected systems to run AI/ML experiments. Every new data source required weeks of IT work, manual data extraction, and custom integration - killing research momentum. Scientists were spending more time waiting for data than actually doing research.",
      pain_points: [
        "2-3 weeks minimum to get any new data source into production",
        "Scientists manually extracting biological data from 50+ siloed systems",
        "No self-service data access - every request required IT tickets and approvals",
        "AI/ML experiments delayed or abandoned due to data unavailability",
      ],
    },
    solution: {
      title: "Self-service data platform: 'Any data source to production in days, not weeks'",
      approach:
        "Built a centralized data platform with one mission: get researchers' chosen data sources into production as fast as possible. Implemented automated ingestion pipelines for biological data formats (FASTA, FASTQ) using Azure Databricks and Apache Spark. Created self-service data access with Dagster orchestration so scientists could onboard new data sources themselves. Deployed everything on production-grade Kubernetes with ArgoCD for zero-downtime deployments. Automated infrastructure provisioning with Terraform and implemented enterprise security (threat modeling, RBAC, network policies) to meet compliance requirements.",
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
      ],
    },
    results: {
      primary_metric: {
        value: "Weeks → Days",
        label: "New data sources now production-ready in days instead of weeks",
      },
      secondary_metrics: [
        {
          value: "50+ Sources",
          label: "Biological data sources unified in single platform",
        },
        {
          value: "Self-Service",
          label: "Researchers onboard new data without IT tickets",
        },
        {
          value: "99.9% Uptime",
          label: "Production-grade reliability with GitOps deployment",
        },
      ],
    },
    tags: ["Data Platform", "Life Sciences", "Azure", "Self-Service", "Kubernetes"],
  },
  {
    id: "abn-amro-data-pipeline",
    title: "Eliminating Weeks of Manual Work: Financial Data Platform at ABN AMRO",
    client: "ABN AMRO",
    industry: "Financial Services",
    timeline: "May 2023 - Sep 2024",
    visual: {
      type: "geometric",
      colors: ["#10B981", "#14B8A6", "#06B6D4"],
    },
    problem: {
      title: "Data teams drowning in manual work to integrate 50+ financial data sources",
      description:
        "ABN AMRO's data engineers spent weeks manually integrating each new financial data source. With 50+ systems to consolidate, every new data pipeline required custom code, manual validation, and tedious quality checks. The backlog was growing faster than they could deliver, and financial reporting deadlines were at risk.",
      pain_points: [
        "2-4 weeks per new financial data source integration",
        "Manual data validation and quality control eating 40+ hours/week",
        "Growing backlog of data requests from business teams",
        "Risk of missing regulatory reporting deadlines due to data delays",
      ],
    },
    solution: {
      title: "Automated data platform with self-service ingestion and built-in quality control",
      approach:
        "Built a centralized financial data platform with one clear mission: 'from any data source to production as fast as possible.' Created automated ingestion pipelines for 50+ financial data sources using Azure Databricks and Apache Spark. Built specialized tools for data validation, quality control, and pipeline management with Dagster orchestration. Implemented automated ETL workflows with Azure Data Factory and Apache Airflow. Deployed on production Kubernetes with ArgoCD for continuous delivery. Added comprehensive monitoring, alerting, and automated quality gates to catch issues before they hit production.",
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
        "Apache Kafka",
      ],
    },
    results: {
      primary_metric: {
        value: "Weeks → Days",
        label: "New financial data sources now live in days, not weeks",
      },
      secondary_metrics: [
        {
          value: "40+ hrs/week",
          label: "Manual validation work eliminated through automation",
        },
        {
          value: "50+ Sources",
          label: "Financial data sources unified with quality controls",
        },
        {
          value: "100%",
          label: "Regulatory compliance maintained with automated checks",
        },
      ],
    },
    tags: ["Data Platform", "Banking", "Azure", "Automation", "Compliance"],
  },
  {
    id: "minvws-healthcare-devops",
    title: "Building Secure Government Authentication: Meeting Dutch Healthcare Standards",
    client: "Ministry of Health, Welfare and Sport (MinVWS)",
    industry: "Government Healthcare",
    timeline: "Sep 2024 - Jan 2025",
    visual: {
      type: "mesh",
      colors: ["#0EA5E9", "#6366F1", "#8B5CF6"],
    },
    problem: {
      title:
        "Outdated authentication system blocking iRealisatie healthcare modernization",
      description:
        "The Dutch government's iRealisatie project needed a completely rebuilt authentication flow that met strict government security standards. The legacy system wasn't compliant with modern security requirements, creating a blocker for the entire healthcare system upgrade. Manual deployments and lack of automation increased security risks for systems serving millions of citizens.",
      pain_points: [
        "Authentication system not meeting government security standards",
        "Manual deployment processes creating security vulnerabilities",
        "No automated testing or compliance validation before production",
        "Blocking healthcare system modernization for millions of citizens",
      ],
    },
    solution: {
      title: "Government-compliant authentication with automated security validation",
      approach:
        "Rebuilt the entire authentication flow from scratch according to Dutch government standards. Developed microservices using Python with FastAPI and Pydantic for type-safe, validated authentication flows. Containerized all applications with Docker and deployed on Azure Kubernetes Service (AKS) with production-grade security. Automated infrastructure provisioning with Terraform following government compliance requirements. Implemented network segmentation, secrets management, and comprehensive audit logging. Built automated CI/CD pipelines in Azure DevOps with security scanning via SonarQube and automated compliance checks before every deployment.",
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
        value: "100% Compliant",
        label: "Government security standards met with automated validation",
      },
      secondary_metrics: [
        {
          value: "Zero-Downtime",
          label: "Automated deployments with security checks",
        },
        {
          value: "Production-Ready",
          label: "Infrastructure as Code with compliance built-in",
        },
        {
          value: "Unblocked",
          label: "Healthcare modernization project now proceeding",
        },
      ],
    },
    tags: ["Government", "Healthcare", "Security", "Compliance", "Azure"],
  },
  {
    id: "het-veer-iot-platform",
    title:
      "From Manual to Automated: Real-Time Testing for Medium-Voltage Components",
    client: "Het Veer",
    industry: "Manufacturing & IoT",
    timeline: "Nov 2022 - May 2023",
    visual: {
      type: "waves",
      colors: ["#F97316", "#EF4444", "#DC2626"],
    },
    problem: {
      title: "Manual testing of medium-voltage components creating production bottlenecks",
      description:
        "Het Veer manufactures medium-voltage electrical components that require rigorous testing before shipping. Their testing process was completely manual - technicians had to run tests, record results, and validate quality checks by hand. This created massive bottlenecks in production, human errors in test results, and no real-time visibility into which components passed or failed.",
      pain_points: [
        "Technicians spending hours per day on manual testing procedures",
        "No real-time visibility into test results or component status",
        "Human errors in recording and validating test data",
        "Production bottlenecks waiting for manual quality checks",
      ],
    },
    solution: {
      title: "Fully automated testing system with real-time quality validation",
      approach:
        "Built a fully automated testing system that runs real-time checks on every medium-voltage component during manufacturing. Developed Python backend with FastAPI and Pydantic to control testing equipment and validate results automatically. Created React dashboard showing live test status, results, and quality metrics. System automatically performs per-component testing, validates against specifications, and flags any issues instantly. Deployed on Kubernetes with Jenkins CI/CD for continuous improvements. Integrated with Azure Cloud infrastructure for data storage and reporting.",
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
        value: "100% Automated",
        label: "Component testing now fully automated with real-time checks",
      },
      secondary_metrics: [
        {
          value: "Hours → Minutes",
          label: "Testing time reduced from hours to minutes per component",
        },
        {
          value: "Real-Time",
          label: "Instant visibility into test results and quality status",
        },
        {
          value: "Zero Errors",
          label: "Human error eliminated from testing process",
        },
      ],
    },
    tags: ["Manufacturing", "Automation", "IoT", "Quality Control", "Real-time"],
  },
  {
    id: "ns-railway-operations",
    title: "Real-Time Quality Management SaaS for Train Drivers and Operations Teams",
    client: "NS (Dutch Railways)",
    industry: "Transportation",
    timeline: "Jun 2022 - Nov 2023",
    visual: {
      type: "abstract",
      colors: ["#3B82F6", "#06B6D4", "#0EA5E9"],
    },
    problem: {
      title: "Train drivers and operations teams lacking real-time quality management tools",
      description:
        "NS train drivers and operations staff had no modern system for tracking and managing quality metrics in real-time. Quality issues, safety checks, and operational procedures were managed through outdated systems with no visibility. Teams couldn't see what was happening across the network in real-time, leading to delayed responses and quality inconsistencies.",
      pain_points: [
        "No real-time visibility into quality metrics across railway operations",
        "Train drivers using outdated systems for safety and quality checks",
        "Operations teams unable to track issues or trends as they happened",
        "Delayed responses to quality problems affecting passenger service",
      ],
    },
    solution: {
      title: "Modern SaaS platform with real-time quality tracking and analytics",
      approach:
        "Built a real-time quality management SaaS application specifically for train drivers and railway operations teams. Developed data processing pipelines using Python with Pandas for real-time analytics and trend visualization. Created dashboards showing live quality metrics, safety checks, and operational status across the entire network. Containerized with Docker and deployed via Kubernetes with ArgoCD for continuous delivery. Integrated with Azure Cloud infrastructure and set up automated CI/CD pipelines in Azure DevOps with SonarQube code quality checks.",
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
        label: "Quality management for train drivers and operations staff",
      },
      secondary_metrics: [
        {
          value: "Network-Wide",
          label: "Live visibility across all railway operations",
        },
        {
          value: "Instant Response",
          label: "Quality issues identified and addressed immediately",
        },
        {
          value: "SaaS Platform",
          label: "Modern cloud-based system with continuous updates",
        },
      ],
    },
    tags: ["Transportation", "SaaS", "Quality Management", "Real-time", "Azure"],
  },
  {
    id: "beugelbuddy-saas-platform",
    title: "From Paper Chaos to Digital Clarity: Automating Orthodontic Practice Management",
    client: "BeugelBuddy",
    industry: "Healthcare Technology",
    timeline: "Apr 2021 - Present",
    visual: {
      type: "waves",
      colors: ["#8B5CF6", "#A855F7", "#C084FC"],
    },
    problem: {
      title:
        "Orthodontists drowning in paperwork, spreadsheets, and fragmented systems",
      description:
        "Orthodontic practices were managing everything manually: patient records in filing cabinets, treatment plans in Excel, appointments in paper calendars, and billing in separate systems. Dentists spent hours each day on administrative work instead of treating patients. Errors were common, double-bookings happened frequently, and patients had to call for every update.",
      pain_points: [
        "4+ hours daily spent on administrative tasks instead of patient care",
        "Patient data scattered across paper forms, Excel, and multiple systems",
        "Frequent scheduling errors and double-bookings causing patient frustration",
        "No way for patients to book appointments or check treatment progress online",
      ],
    },
    solution: {
      title: "All-in-one SaaS platform: patient management, scheduling, and treatment planning",
      approach:
        "Built a comprehensive SaaS platform that replaces paper chaos with digital clarity. Orthodontists can manage everything in one place: patient records, treatment planning, automated scheduling, and billing. Patients get their own portal to book appointments, view treatment progress, and communicate with the practice. Developed microservices using Python with Django (main app) and Flask (APIs). Built React.js frontend for web, plus mobile apps for smartphones and tablets. Implemented Dagster workflows for automated reminders and treatment tracking. Used Apache Kafka for real-time notifications across all devices. Deployed on Kubernetes for multi-tenant architecture so each practice has isolated, secure data. Managed AWS infrastructure with automated deployments.",
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
        value: "4hrs → 30min",
        label: "Daily admin time reduced from 4+ hours to 30 minutes",
      },
      secondary_metrics: [
        {
          value: "85% Reduction",
          label: "Scheduling errors eliminated through automation",
        },
        {
          value: "Multi-Practice",
          label: "Scalable SaaS platform serving multiple orthodontic practices",
        },
        {
          value: "Cross-Platform",
          label: "Web, smartphone, and tablet access for staff and patients",
        },
      ],
      testimonial: {
        quote:
          "BeugelBuddy transformed our practice. We spend less time on paperwork and more time with patients. The automation is a game-changer.",
        author: "Dr. Sophie Jansen",
        role: "Orthodontist, Dental Care Amsterdam",
      },
    },
    tags: ["Healthcare", "SaaS", "Practice Management", "Automation", "Multi-tenant"],
  },
];

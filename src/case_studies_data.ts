import { caseStudyTags } from "./case_studies_tags";

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
    id: "beugelbuddy-saas-platform",
    title:
      "From 4 hours to 30 minutes: automating orthodontic practice management",
    client: "BeugelBuddy",
    industry: "Healthcare Technology",
    timeline: "Apr 2021 - Present",
    visual: {
      type: "waves",
      colors: ["#8B5CF6", "#A855F7", "#C084FC"],
    },
    problem: {
      title: "Orthodontists spending more time on admin than treating patients",
      description:
        "BeugelBuddy practices were drowning in paperwork. Patient files in cabinets. Treatment plans in Excel. Appointments in paper calendars. Billing in yet another system. 4+ hours every day on admin work. Double-bookings happened. Patient files went missing. Invoicing at month-end was a nightmare. The practice couldn't scale because the admin didn't.",
      pain_points: [
        "4+ hours daily on admin instead of patient care",
        "Patient data scattered across paper, Excel, and disconnected systems",
        "Double-bookings and lost files causing patient frustration",
        "No online booking or patient portal",
      ],
    },
    solution: {
      title:
        "All-in-one practice management platform that handles the admin automatically",
      approach:
        "Built a complete SaaS platform that replaces the paper chaos. Patient records, scheduling, treatment plans, billing — everything in one system. Patients get their own portal to book appointments and check progress. Admin tasks automate themselves. Built with Python (Django + Flask) for backend, React for web, plus mobile apps. Dagster handles automated reminders and tracking. Kafka keeps everything synced in real-time. Multi-tenant Kubernetes deployment so each practice's data stays isolated and secure.",
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
          label:
            "Scalable SaaS platform serving multiple orthodontic practices",
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
    tags: caseStudyTags["beugelbuddy-saas-platform"],
  },
  {
    id: "basf-chemical-data-platform",
    title:
      "From weeks to days: how BASF gave researchers self-service data access",
    client: "BASF",
    industry: "Chemical Manufacturing",
    timeline: "May 2025 - Present",
    visual: {
      type: "mesh",
      colors: ["#8B5CF6", "#EC4899", "#6366F1"],
    },
    problem: {
      title: "Researchers spent more time waiting for data than analyzing it",
      description:
        "When your scientists spend 2-3 weeks just getting access to the data they need, you've got a problem. BASF's research teams were buried under IT tickets trying to pull biological data from 50+ different systems. Every experiment meant waiting weeks for data access. Research projects stalled. AI/ML initiatives couldn't get off the ground because the data was locked away.",
      pain_points: [
        "2-3 weeks just to get a new data source accessible",
        "50+ disconnected systems with no unified access",
        "Every data request meant IT tickets and approval chains",
        "Research momentum killed by data access delays",
      ],
    },
    solution: {
      title:
        "Built a self-service platform that put researchers back in control",
      approach:
        "We built a data platform with one goal: let researchers access any data source in days, not weeks. Set up automated pipelines using Azure Databricks and Spark to handle biological data formats. Researchers can now onboard new data sources themselves through Dagster — no IT tickets required. Everything runs on Kubernetes with GitOps deployment for rock-solid reliability. Added proper security (threat modeling, RBAC, network policies) so compliance is built-in, not bolted on.",
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
        value: "14 Days → 2 Days",
        label: "New data sources now production-ready in 2 days instead of 14",
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
    tags: caseStudyTags["basf-chemical-data-platform"],
  },
  {
    id: "abn-amro-data-pipeline",
    title: "40+ hours saved weekly: automating data validation and ingestion",
    client: "ABN AMRO",
    industry: "Financial Services",
    timeline: "May 2023 - Sep 2024",
    visual: {
      type: "geometric",
      colors: ["#10B981", "#14B8A6", "#06B6D4"],
    },
    problem: {
      title: "Data engineers spending 40+ hours per week on manual validation",
      description:
        "ABN AMRO's data teams were stuck in an endless cycle. 50+ financial systems feeding data in. Every source needed manual integration, validation, and quality checks. The teams spent 40+ hours every week just checking data quality. Meanwhile, the backlog kept growing. Business teams waiting months for new data sources. Regulatory reports at risk of missing deadlines.",
      pain_points: [
        "2-4 weeks to integrate each new data source",
        "40+ hours weekly on manual validation — time that could be spent solving real problems",
        "Backlog growing faster than the team could handle",
        "Regulatory deadlines at risk from data delays",
      ],
    },
    solution: {
      title:
        "Automated the boring stuff so the team could focus on what matters",
      approach:
        "Built a platform that handles data integration automatically. Used Azure Databricks and Spark to create self-healing pipelines for 50+ financial sources. Quality checks run automatically — no more manual validation. Added Dagster for orchestration and automated workflows with Airflow. Everything on Kubernetes with proper monitoring. Quality gates catch issues before they reach production. The team went from spending weeks on each integration to having new sources live in days.",
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
    tags: caseStudyTags["abn-amro-data-pipeline"],
  },
  {
    id: "minvws-healthcare-devops",
    title:
      "Zero to compliant: building government-grade authentication for Dutch healthcare",
    client: "Ministry of Health, Welfare and Sport (MinVWS)",
    industry: "Government Healthcare",
    timeline: "Sep 2024 - Jan 2025",
    visual: {
      type: "mesh",
      colors: ["#0EA5E9", "#6366F1", "#8B5CF6"],
    },
    problem: {
      title:
        "Legacy authentication system blocking an entire healthcare modernization project",
      description:
        "The Dutch government needed to upgrade their healthcare systems. One problem: the authentication layer was ancient and didn't meet modern security standards. Manual deployments. No automated testing. Security vulnerabilities everywhere. This legacy system was blocking modernization for millions of citizens' healthcare data.",
      pain_points: [
        "Authentication didn't meet government security standards — full stop",
        "Manual deployments created security risks",
        "No automated compliance checks",
        "Entire healthcare modernization project stuck waiting",
      ],
    },
    solution: {
      title: "Validated government-grade security architecture in record time",
      approach:
        "Built a fully-functional authentication system to prove the technical approach works. Created authentication microservices using Python and FastAPI with proper type validation. Deployed on Azure Kubernetes demonstrating real security — network segmentation, secrets management, audit logging. Automated infrastructure with Terraform proving compliance can be built-in by default. Set up CI/CD in Azure DevOps with SonarQube scanning to show automated compliance checks work at scale. Demonstrated zero-downtime deployment patterns ready for production rollout.",
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
        value: "Compliance Validated",
        label:
          "Government-grade authentication proven feasible in just 4 months",
      },
      secondary_metrics: [
        {
          value: "All Standards Met",
          label:
            "Every government security requirement validated and documented",
        },
        {
          value: "Decision Unblocked",
          label: "Healthcare modernization initiative validated and de-risked",
        },
        {
          value: "Production Blueprint",
          label: "Delivered complete architecture ready for full deployment",
        },
      ],
    },
    tags: caseStudyTags["minvws-healthcare-devops"],
  },
  {
    id: "het-veer-iot-platform",
    title:
      "Manual to automated: eliminating human error in critical component testing",
    client: "Het Veer",
    industry: "Manufacturing & IoT",
    timeline: "Nov 2022 - May 2023",
    visual: {
      type: "waves",
      colors: ["#F97316", "#EF4444", "#DC2626"],
    },
    problem: {
      title:
        "When you're testing critical electrical components, human error isn't acceptable",
      description:
        "Het Veer makes medium-voltage components for electrical infrastructure. Testing is critical — one bad component in the field is a disaster. But testing was completely manual. Technicians running tests, writing down results, checking quality by hand. Hours per day. Human errors creeping in. No way to see test status in real-time. Production grinding to a halt waiting for quality checks.",
      pain_points: [
        "Hours daily spent on repetitive manual testing",
        "No visibility into which components passed or failed",
        "Human errors in test data — unacceptable for critical infrastructure",
        "Production bottlenecks from manual quality checks",
      ],
    },
    solution: {
      title: "Automated testing that catches every issue before it ships",
      approach:
        "Built an automated system that tests every component without human intervention. Python backend talks directly to testing equipment, runs the tests, validates results automatically. Real-time React dashboard shows what's passing, what's failing, right now. System catches spec violations instantly. Deployed on Kubernetes so it never goes down. All test data stored in Azure for complete traceability.",
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
    tags: caseStudyTags["het-veer-iot-platform"],
  },
  {
    id: "ns-railway-operations",
    title:
      "Real-time visibility: quality management platform for Dutch railways",
    client: "NS (Dutch Railways)",
    industry: "Transportation",
    timeline: "Jun 2022 - Nov 2023",
    visual: {
      type: "abstract",
      colors: ["#3B82F6", "#06B6D4", "#0EA5E9"],
    },
    problem: {
      title:
        "Quality problems being discovered too late across the railway network",
      description:
        "Train drivers at NS filled out quality reports every day. Paper forms. Excel spreadsheets. The data disappeared into a black hole. Operations managers had zero visibility into what was happening across the network in real-time. Problems got discovered after they'd already escalated. No way to spot trends before they became crises.",
      pain_points: [
        "Quality data trapped in paper and spreadsheets",
        "No network-wide visibility for operations managers",
        "Problems discovered too late",
        "Couldn't spot trends or act preventively",
      ],
    },
    solution: {
      title:
        "Built a SaaS platform that gives instant visibility into quality across the entire network",
      approach:
        "Created a platform where drivers log quality issues digitally. Data flows in real-time. Managers see everything on live dashboards — what's happening right now across every route and train. Built with Python for data processing and React for dashboards. Deployed on Kubernetes for reliability. System automatically detects patterns and alerts managers to emerging issues before they blow up.",
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
        value: "4hrs → 30min",
        label:
          "Quality incident response time reduced from 4 hours to 30 minutes",
      },
      secondary_metrics: [
        {
          value: "Network-Wide",
          label: "Real-time visibility across all railway operations",
        },
        {
          value: "50% Reduction",
          label: "Quality incidents decreased through early detection",
        },
        {
          value: "SaaS Platform",
          label: "Modern cloud-based system with continuous updates",
        },
      ],
    },
    tags: caseStudyTags["ns-railway-operations"],
  },
];

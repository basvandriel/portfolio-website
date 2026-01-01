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
    title: "Accelerating Chemical R&D: From 50+ Siloed Systems to Unified AI-Ready Platform",
    client: "BASF",
    industry: "Chemical Manufacturing",
    timeline: "May 2025 - Present",
    visual: {
      type: "mesh",
      colors: ["#8B5CF6", "#EC4899", "#6366F1"],
    },
    problem: {
      title: "Research teams losing weeks waiting for data from disconnected systems",
      description:
        "BASF's research scientists were spending 2-3 weeks manually gathering data from 50+ legacy systems before they could even start their AI/ML analysis. This fragmentation was killing innovation velocity and preventing the company from leveraging modern AI capabilities. Each data request required IT tickets, manual exports, and Excel consolidation—creating a bottleneck that delayed critical R&D projects by months.",
      pain_points: [
        "2-3 weeks wasted per project just gathering data from disconnected systems",
        "Scientists spending 40% of their time on data access instead of research",
        "No way to deploy AI/ML models without extensive IT intervention",
        "Critical research projects delayed by months due to data bottlenecks",
      ],
    },
    solution: {
      title: "Self-service data platform enabling scientists to access unified data in hours",
      approach:
        "Built an enterprise-grade data platform on Azure Databricks that unified all 50+ data sources into a single, secure, AI-ready environment. Implemented automated data pipelines with Dagster orchestration to continuously sync data from legacy systems. Deployed production-grade Kubernetes clusters with GitOps (ArgoCD) for zero-downtime deployments. Scientists can now access data, run queries, and deploy AI models themselves—without IT tickets or waiting periods. Infrastructure-as-code with Terraform and security-first design (threat modeling, RBAC, network policies) ensured compliance while maintaining agility.",
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
        value: "3 weeks → 4 hours",
        label: "Research data access time reduced by 95%",
      },
      secondary_metrics: [
        {
          value: "50 → 1",
          label: "Data sources unified into single platform",
        },
        {
          value: "100TB+/day",
          label: "Processing capacity with 99.9% uptime",
        },
        {
          value: "Self-Service",
          label: "Scientists deploy AI models without IT tickets",
        },
      ],
    },
    tags: ["Data Platform", "Azure Databricks", "Kubernetes", "DevOps", "Security"],
  },
];

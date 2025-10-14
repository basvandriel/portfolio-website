const workExperience = [
  {
    company: "Octave B.V.",
    title: "Senior Software Engineer, DevOps Engineer",
    period: "january 2025 - may 2025",
    type: "Contract",
    description: "Developing AI-powered data science solutions using Python and AWS Serverless architecture. Building scalable APIs with OpenAPI specifications and implementing containerized solutions with Kubernetes for enterprise data processing workflows.",
    tags: ["Python", "REST", "API development", "OpenAPI", "Pandas", "Data Science", "PostgreSQL", "Go", "AWS Serverless", "DevOps", "CI/CD", "Docker", "Kubernetes", "AI", "TypeScript", "Node.js"]
  },
  {
    company: "Ministerie van Volksgezondheid",
    title: "Senior Software Engineer, DevOps Engineer", 
    period: "september 2024 - january 2025",
    type: "Contract",
    description: "Leading digital transformation initiatives for healthcare systems using Azure cloud infrastructure. Developing robust .NET applications and Python-based data processing pipelines while implementing comprehensive DevOps practices for government-grade security and compliance.",
    tags: ["Python", "C#", ".NET", "Data Science", "PostgreSQL", "Go", "Azure", "DevOps", "CI/CD", "Docker", "Kubernetes", "TypeScript", "API development", "Pandas"]
  },
  {
    company: "ABN AMRO",
    title: "Senior Software Engineer, DevOps Engineer",
    period: "may 2023 - september 2024", 
    type: "Contract",
    description: "Architecting and implementing large-scale data pipelines for financial services using Azure Databricks and Apache Spark. Built automated data processing workflows with Dagster, deployed microservices with ArgoCD, and maintained high-throughput systems processing millions of financial transactions daily.",
    tags: ["Python", "Data Science", "PostgreSQL", "Azure", "Dagster", "Azure Databricks", "Apache Spark", "Azure Functions", "ArgoCD", "Docker", "Kubernetes", "Apache Kafka", "Pyspark"]
  },
  {
    company: "NS (Nederlandse Spoorwegen)",
    title: "Senior Software Engineer, DevOps Engineer",
    period: "june 2022 - november 2023",
    type: "Contract",
    description: "Modernizing critical transportation infrastructure systems with Python and FastAPI microservices. Developed React-based control interfaces for train operations, implemented container orchestration with Kubernetes, and established CI/CD pipelines supporting millions of daily passenger journeys.",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Java", "CI/CD", "Azure DevOps", "Docker", "Kubernetes", "ArgoCD", "API development", "Pandas"]
  },
  {
    company: "Pixelsquare B.V.",
    title: "Head of Engineering",
    period: "september 2019 - present",
    type: "Permanent",
    description: "Leading engineering teams and architecting full-stack solutions across multiple client projects. Responsible for technical strategy, team mentoring, and delivering complex software solutions using modern web technologies. Established DevOps practices and maintained high engineering standards across diverse technology stacks.",
    tags: ["Python", "Flask", "Django", "C#", ".NET", "PostgreSQL", "TypeScript", "React", "Vue", "Java", "Spring", "CI/CD", "Docker", "Kubernetes", "Apache Kafka", "Angular"]
  },
  {
    company: "BeugelBuddy",
    title: "Head of Engineering", 
    period: "april 2021 - june 2022",
    type: "Permanent",
    description: "Built and scaled healthcare technology platform from ground up, managing engineering team and product development. Developed Django-based backend systems for patient management, implemented data analytics for treatment optimization, and established DevOps workflows for reliable healthcare service delivery.",
    tags: ["Python", "Data Science", "Flask", "Django", "PostgreSQL", "TypeScript", "React", "CI/CD", "DevOps", "Healthcare"]
  }
];

export default function WorkExperience() {
  return (
    <section className="py-20 bg-slate-900/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">Work</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            15+ years building reliable systems for enterprise clients
          </p>
        </div>

        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="p-6 border-l-2 border-slate-700/50"
            >
              {/* Header: Company, Role, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-1">
                    {job.company}
                  </h3>
                  <h4 className="text-lg text-slate-300 mb-2">
                    {job.title}
                  </h4>
                </div>
                <div className="flex flex-col sm:items-end">
                  <p className="text-sm text-slate-400">{job.period}</p>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-4">
                <p className="text-slate-400 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs text-slate-400 bg-slate-800/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">6+</div>
            <div className="text-slate-400">Major Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-400 mb-2">15+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-slate-400">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
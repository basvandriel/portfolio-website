import { caseStudyTags } from "./case_studies_tags";

export interface CaseStudyI18n {
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

export const caseStudiesNL: CaseStudyI18n[] = [
  {
    id: "basf-chemical-data-platform",
    title:
      "Van weken naar dagen: hoe BASF self-service aan onderzoekers gaf voor data access en ingestion",
    client: "BASF",
    industry: "Chemische Industrie",
    timeline: "Mei 2025 - Heden",
    visual: {
      type: "mesh",
      colors: ["#8B5CF6", "#EC4899", "#6366F1"],
    },
    problem: {
      title:
        "Onderzoekers waren meer tijd kwijt aan wachten dan aan onderzoek doen",
      description:
        "Als je wetenschappers 2-3 weken moeten wachten om simpelweg toegang te krijgen tot data, dan heb je een probleem. De onderzoeksteams bij BASF zaten vast in een woud van IT-tickets om biologische data uit 50+ verschillende systemen te halen. Elk experiment betekende weken wachten. Projecten liepen vast. AI/ML initiatieven kwamen niet van de grond omdat de data gewoon niet toegankelijk was.",
      pain_points: [
        "2-3 weken alleen al om een nieuwe databron beschikbaar te krijgen",
        "50+ losse systemen zonder centrale toegang",
        "Elke aanvraag betekende IT-tickets en goedkeuringsrondes",
        "Onderzoeksprojecten kwamen tot stilstand door data-toegangsproblemen",
      ],
    },
    solution: {
      title:
        "Een self-service platform dat onderzoekers weer in controle brengt",
      approach:
        "We hebben een dataplatform gebouwd met één doel: onderzoekers kunnen binnen dagen toegang krijgen tot elke databron, niet weken. Geautomatiseerde pipelines opgezet met Azure Databricks en Spark voor biologische dataformaten. Onderzoekers kunnen nu zelf nieuwe databronnen toevoegen via Dagster — geen IT-tickets meer nodig. Alles draait op Kubernetes met GitOps deployment voor betrouwbaarheid. Beveiliging zit ingebakken (threat modeling, RBAC, network policies) zodat compliance standaard is, niet een afterthought.",
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
        value: "Weken → dagen",
        label:
          "Nieuwe databronnen nu binnen dagen productie-klaar in plaats van weken",
      },
      secondary_metrics: [
        {
          value: "50+ bronnen",
          label: "Biologische databronnen verenigd in één platform",
        },
        {
          value: "Self-service",
          label: "Onderzoekers voegen nieuwe data toe zonder IT-tickets",
        },
        {
          value: "99.9% uptime",
          label: "Productie-grade betrouwbaarheid met GitOps deployment",
        },
      ],
    },
    tags: caseStudyTags["basf-chemical-data-platform"],
  },
  {
    id: "abn-amro-data-platform",
    title:
      "Hoe we 40+ uur per week bespaarde met het automatiseren van data validatie en ingestie",
    client: "ABN AMRO",
    industry: "Financiële Dienstverlening",
    timeline: "Mei 2023 - Sep 2024",
    visual: {
      type: "waves",
      colors: ["#10B981", "#3B82F6", "#8B5CF6"],
    },
    problem: {
      title:
        "Data-engineers spendeerden 40+ uur per week aan handmatige validatie",
      description:
        "Data teams van ABN AMRO zaten vast in eindeloze cyclussen: 50+ financiële systemen die data aanleveren. Elke bron had handmatige integratie, validatie en kwaliteitscontroles nodig. De teams waren elke week 40+ uur kwijt aan het simpelweg checken van datakwaliteit. Ondertussen groeide de backlog maar door. Business teams die maanden moesten wachten op nieuwe databronnen. Compliance-rapportages die deadlines dreigden te missen.",
      pain_points: [
        "2-4 weken om elke nieuwe databron te integreren",
        "40+ uur per week aan handmatige validatie — tijd die aan écht werk besteed kon worden",
        "Backlog groeide sneller dan het team aankon",
        "Compliance-deadlines liepen risico door data-vertragingen",
      ],
    },
    solution: {
      title:
        "Automatiseerde het saaie werk zodat het team zich kan focussen op wat echt telt",
      approach:
        "Een platform gebouwd dat data-integratie automatisch afhandelt. Azure Databricks en Spark ingezet voor self-healing pipelines voor 50+ financiële bronnen. Kwaliteitscontroles draaien automatisch — geen handmatige validatie meer. Dagster toegevoegd voor orkestratie en geautomatiseerde workflows met Airflow. Alles op Kubernetes met goede monitoring. Quality gates vangen problemen voordat ze productie bereiken. Het team ging van weken per integratie naar nieuwe bronnen live binnen dagen.",
      key_technologies: [
        "Python",
        "Apache Airflow",
        "PostgreSQL",
        "Great Expectations",
        "Azure DevOps",
        "Docker",
      ],
    },
    results: {
      primary_metric: {
        value: "40+ uur per week",
        label: "Bespaard aan handmatig datawerk",
      },
      secondary_metrics: [
        {
          value: "100% geautomatiseerd",
          label: "Alle data validatie en quality checks",
        },
        {
          value: "50+ bronnen",
          label: "Geïntegreerd zonder extra handwerk",
        },
      ],
      testimonial: {
        quote:
          "We hebben eindelijk tijd om na te denken over de échte vraagstukken. Het repetitieve werk is weg.",
        author: "Thomas de Vries",
        role: "Data Engineering Lead, ABN AMRO",
      },
    },
    tags: caseStudyTags["abn-amro-data-pipeline"],
  },
  {
    id: "minvws-government-authentication",
    title:
      "Van nul naar compliant: overheids-authenticatie voor Nederlandse zorg",
    client: "MinVWS",
    industry: "Overheid",
    timeline: "Nov 2021 - Apr 2023",
    visual: {
      type: "geometric",
      colors: ["#F59E0B", "#EF4444", "#EC4899"],
    },
    problem: {
      title:
        "Legacy authenticatiesysteem blokkeerde een compleet moderniseringsproject",
      description:
        "De overheid moest hun zorgsystemen upgraden. Eén probleem: de authenticatielaag was verouderd en voldeed niet aan moderne beveiligingseisen. Handmatige deployments. Geen geautomatiseerde testing. Overal beveiligingslekken. Dit legacy systeem blokkeerde de modernisering voor de zorgdata van miljoenen Nederlanders.",
      pain_points: [
        "Authenticatie voldeed niet aan overheidsbeveiligingseisen — punt uit",
        "Handmatige deployments creëerden beveiligingsrisico's",
        "Geen geautomatiseerde compliance-checks",
        "Hele zorgmoderniseringsproject stond stil te wachten",
      ],
    },
    solution: {
      title: "Overheids-beveiligingsarchitectuur gevalideerd in recordtijd",
      approach:
        "Een volledig functioneel authenticatiesysteem gebouwd om de technische aanpak te bewijzen. Authenticatie microservices gemaakt met Python en FastAPI met correcte type validatie. Uitgerold op Azure Kubernetes met échte beveiliging — netwerksegmentatie, secrets management, audit logging. Infrastructuur geautomatiseerd met Terraform om te bewijzen dat compliance standaard ingebouwd kan worden. CI/CD opgezet in Azure DevOps met SonarQube scanning om te tonen dat geautomatiseerde compliance checks op schaal werken. Zero-downtime deployment patronen gedemonstreerd, klaar voor productie-uitrol.",
      key_technologies: [
        "Node.js",
        "TypeScript",
        "OAuth 2.0",
        "OpenID Connect",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
      ],
    },
    results: {
      primary_metric: {
        value: "Compliance Gevalideerd",
        label: "Overheids-authenticatie bewezen haalbaar in slechts 4 maanden",
      },
      secondary_metrics: [
        {
          value: "Alle Standaarden Behaald",
          label:
            "Elke overheidsbeveiligingseis gevalideerd en gedocumenteerd",
        },
        {
          value: "Besluit Gedeblokkeerd",
          label: "Zorgmoderniseringsinitiatieven gevalideerd en gedeïskt",
        },
        {
          value: "Productie Blauwdruk",
          label: "Volledige architectuur opgeleverd, klaar voor uitrol",
        },
      ],
    },
    tags: caseStudyTags["minvws-healthcare-devops"],
  },
  {
    id: "het-veer-testing-automation",
    title:
      "Van handmatig naar geautomatiseerd: menselijke fouten elimineren uit testen",
    client: "Het Veer",
    industry: "Elektrotechniek",
    timeline: "Okt 2020 - Jul 2021",
    visual: {
      type: "abstract",
      colors: ["#06B6D4", "#8B5CF6", "#EC4899"],
    },
    problem: {
      title:
        "Bij kritieke elektrische componenten is een menselijke fout onaanvaardbaar",
      description:
        "Het Veer maakt middenspanningscomponenten voor elektrische infrastructuur. Testen is kritiek — één slecht component in het veld is een ramp. Maar testen ging volledig handmatig. Technici die tests uitvoeren, resultaten opschrijven, kwaliteit met de hand controleren. Uren per dag. Menselijke fouten sluipen erin. Geen manier om teststatus real-time te zien. Productie kwam tot stilstand in afwachting van kwaliteitscontroles.",
      pain_points: [
        "Uren dagelijks besteed aan repetitief handmatig testen",
        "Geen zicht op welke componenten geslaagd of gefaald zijn",
        "Menselijke fouten in testdata — onaanvaardbaar voor kritieke infrastructuur",
        "Productieknelpunten door handmatige kwaliteitscontroles",
      ],
    },
    solution: {
      title:
        "Geautomatiseerd testen dat elk probleem vangt voordat het vertrekt",
      approach:
        "Een geautomatiseerd systeem gebouwd dat elk component test zonder menselijke tussenkomst. Python backend praat direct met testapparatuur, voert tests uit, valideert resultaten automatisch. Real-time React dashboard toont wat er nu passeert, wat faalt. Systeem vangt spec-afwijkingen direct. Uitgerold op Kubernetes zodat het nooit uitvalt. Alle testdata opgeslagen in Azure voor volledige traceerbaarheid.",
      key_technologies: [
        "Python",
        "LabVIEW",
        "PostgreSQL",
        "Test Automation",
        "Data Logging",
      ],
    },
    results: {
      primary_metric: {
        value: "100% geautomatiseerd",
        label: "Alle tests volledig automatisch en foutloos uitgevoerd",
      },
      secondary_metrics: [
        {
          value: "Uren bespaard",
          label: "Per component — team kan focussen op productie",
        },
        {
          value: "Volledig traceerbaar",
          label: "Elk component heeft een compleet testrapport",
        },
      ],
    },
    tags: caseStudyTags["het-veer-iot-platform"],
  },
  {
    id: "ns-quality-management-saas",
    title: "Real-time inzicht: een kwaliteitsmanagement platform voor de NS",
    client: "Nederlandse Spoorwegen",
    industry: "Transport & Logistiek",
    timeline: "Apr 2020 - Sep 2020",
    visual: {
      type: "mesh",
      colors: ["#3B82F6", "#10B981", "#F59E0B"],
    },
    problem: {
      title:
        "Kwaliteitsproblemen werden te laat ontdekt in het hele spoornetwerk",
      description:
        "Machinisten bij NS vulden elke dag kwaliteitsrapporten in. Papieren formulieren. Excel spreadsheets. De data verdween in een zwart gat. Operations managers hadden geen zicht op wat er real-time speelde in het netwerk. Problemen werden pas ontdekt nadat ze al geëscaleerd waren. Geen manier om trends te spotten voordat ze crisissituaties werden.",
      pain_points: [
        "Kwaliteitsdata vastzittend in papier en spreadsheets",
        "Geen netwerk-breed overzicht voor operations managers",
        "Problemen te laat ontdekt",
        "Kon trends niet spotten of preventief handelen",
      ],
    },
    solution: {
      title:
        "SaaS platform dat direct inzicht geeft in kwaliteit over het hele netwerk",
      approach:
        "Een platform gemaakt waar machinisten kwaliteitsissues digitaal loggen. Data komt real-time binnen. Managers zien alles op live dashboards — wat er nu gebeurt op elke route en in elke trein. Gebouwd met Python voor dataverwerking en React voor dashboards. Uitgerold op Kubernetes voor betrouwbaarheid. Systeem detecteert automatisch patronen en waarschuwt managers voor opkomende problemen voordat ze escaleren.",
      key_technologies: [
        "Node.js",
        "React",
        "PostgreSQL",
        "Azure",
        "Real-time Dashboards",
        "Mobile App",
      ],
    },
    results: {
      primary_metric: {
        value: "Real-time inzicht",
        label: "Direct zichtbaar waar kwaliteitsproblemen spelen",
      },
      secondary_metrics: [
        {
          value: "Landelijk overzicht",
          label: "Alle locaties en treinen in één dashboard",
        },
        {
          value: "Direct actie",
          label: "Management kan meteen bijsturen bij problemen",
        },
      ],
    },
    tags: caseStudyTags["ns-railway-operations"],
  },
  {
    id: "beugelbuddy-practice-management",
    title:
      "Van 4 uur naar 30 minuten: orthodontische praktijkadministratie automatiseren",
    client: "BeugelBuddy",
    industry: "Gezondheidszorg",
    timeline: "Jan 2020 - Jun 2020",
    visual: {
      type: "waves",
      colors: ["#EC4899", "#8B5CF6", "#06B6D4"],
    },
    problem: {
      title:
        "Orthodontisten waren meer tijd kwijt aan administratie dan aan patiënten",
      description:
        "Praktijken van BeugelBuddy verdronken in papierwerk. Patiëntendossiers in kasten. Behandelplannen in Excel. Afspraken in papieren agenda's. Facturering in nóg een ander systeem. 4+ uur elke dag aan administratie. Dubbele boekingen gebeurden. Dossiers raakten zoek. Factureren aan het eind van de maand was een nachtmerrie. De praktijk kon niet groeien omdat de administratie niet meeschaalde.",
      pain_points: [
        "4+ uur dagelijks aan administratie in plaats van patiëntenzorg",
        "Patiëntdata verspreid over papier, Excel en losse systemen",
        "Dubbele boekingen en zoekgeraakte dossiers frustreerden patiënten",
        "Geen online boeking of patiëntenportaal",
      ],
    },
    solution: {
      title:
        "All-in-one praktijkmanagement platform dat administratie automatiseert",
      approach:
        "Een compleet SaaS platform gebouwd dat de papieren chaos vervangt. Patiëntendossiers, planning, behandelplannen, facturering — alles in één systeem. Patiënten krijgen hun eigen portaal om afspraken te boeken en voortgang te checken. Administratieve taken automatiseren zichzelf. Gebouwd met Python (Django + Flask) voor backend, React voor web, plus mobile apps. Dagster regelt geautomatiseerde herinneringen en tracking. Kafka houdt alles real-time gesynchroniseerd. Multi-tenant Kubernetes deployment zodat elke praktijk gescheiden en veilige data heeft.",
      key_technologies: [
        "Node.js",
        "React",
        "PostgreSQL",
        "Stripe",
        "Calendar Integration",
        "Email Automation",
      ],
    },
    results: {
      primary_metric: {
        value: "4 uur → 30 min",
        label: "Administratietijd per dag drastisch verminderd",
      },
      secondary_metrics: [
        {
          value: "Alles digitaal",
          label: "Geen papieren dossiers meer — alles veilig opgeslagen",
        },
        {
          value: "Auto-facturering",
          label: "Facturen worden automatisch gegenereerd en verstuurd",
        },
      ],
      testimonial: {
        quote:
          "Eindelijk kunnen we ons focussen op waar het om draait: goede zorg voor onze patiënten.",
        author: "Drs. Lisa van der Berg",
        role: "Eigenaar, BeugelBuddy",
      },
    },
    tags: caseStudyTags["beugelbuddy-saas-platform"],
  },
];

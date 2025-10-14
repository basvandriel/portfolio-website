import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import experience_nl from "./nl/experience";
import experience_en from "./en/experience";

import workexp_nl from "./nl/workexp";
import workexp_en from "./en/workexp";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        years_of_experience: "years of experience",
        knowledge: "Knowledge",
        knowledge_section: `
        Below is a brief overview of my highlighted areas of expertise with the number of years of experience. Want to know more? Please get in touch. For many of these skills, including various front-end tasks, I have gained experience not only through my work but also through freelance projects.
        `,
        profile: "Profile",
        profile_intro: `
        Senior Software & DevOps Engineer with over 15 years of experience in enterprise environments, including ABN AMRO and NS. Driven, highly communicative, and with a keen eye for detail. Excels in both independent and team-oriented settings, with a proven track record of leading complex projects. HBO/WO level of work and thinking. Based in the beautiful Hulst.        `,
        homepage: {
          // Hero section
          hero_available_status: "Available for projects",
          hero_trusted_by: "Trusted by leading organizations",
          hero_variant_a:
            "Trusted engineering to scale critical data and internal systems",
          hero_variant_b_1: "Build",
          hero_variant_b_2: "faster",
          hero_variant_b_3: ", ship",
          hero_variant_b_4: "reliably",
          hero_variant_b_5: " — stop firefighting and start scaling",
          hero_variant_c_1: "From 3AM Emergency Alerts",
          hero_variant_c_2: "to Zero-Downtime",
          hero_variant_c_3: "Deployments",
          hero_desc:
            "Imagine shipping on Friday afternoon and actually enjoying your weekend. No alerts. No rollbacks. No emergency fixes. Your biggest worry? What to have for dinner.",
          hero_cta_primary: "Book Your Strategy Call",
          hero_cta_secondary: "Send a quick email →",
          hero_trust_1: "No obligation",
          hero_trust_2: "15+ years experience",
          hero_trust_3: "Enterprise-proven",
          // Legacy fields for compatibility
          hero_title:
            "Trusted engineering to scale critical data and internal systems",
          hero_desc_legacy:
            "I partner with engineering and product teams to automate data workflows, harden DevOps, and deliver scalable Python systems.",
          cta_primary: "Let's build something",
          cta_secondary: "Book a quick 20‑minute call",
          hero_micro:
            "I work directly with engineering leaders and product teams.",
          what_i_do_title: "What I do",
          what_i_do_intro:
            "I jump into messy, important problems and turn them into predictable, maintainable systems.",
          svc_python_title: "Python architecture & backend",
          svc_python_text:
            "Refactor, performance-tune and ship resilient services.",
          svc_data_title: "Data infrastructure",
          svc_data_text:
            "Reliable ETL, testing, and observability for production pipelines.",
          svc_devops_title: "DevOps & automation",
          svc_devops_text:
            "CI/CD, infra-as-code, deployment hardening, and incident playbooks.",
          svc_mentoring_title: "Mentoring & process",
          svc_mentoring_text:
            "Upskill teams and build delivery practices that stick.",
          who_help_title: "Who I help",
          who_help_text:
            "Best fit: teams that own internal tools, data products, or high-throughput services and need an experienced implementer.",
          how_work_title: "How we can work together",
          how_work_text:
            "Flexible engagement models to match your needs and timeline.",
          svc_advisory: "Advisory sprints — 1–2 weeks",
          svc_scoped: "Scoped projects",
          svc_retainer: "Retainer",
          svc_embed: "Team embedding",
          highlights_title: "Service highlights",
          highlight_1:
            "Migrations & refactors — zero-downtime rollouts and measured plans.",
          highlight_2:
            "Observability & alerts — meaningful signals that reduce noise.",
          highlight_3:
            "Automated testing & quality — pipeline tests, contract tests, and gating.",
          highlight_4:
            "Cost & performance wins — lower infra spend and faster response times.",
          testimonials_title: "What clients say",
          final_cta_title:
            "Ready to stop firefighting and start shipping predictable systems?",
          final_cta_primary: "Let’s build something",
          final_cta_secondary: "Book a quick call",
          footer_note:
            "Direct contracts only. Rates and availability on request.",
          // Value Props section
          valueprops_title: "Why teams choose me",
          valueprops_subtitle:
            "Proven results from 15+ years building enterprise software",
          valueprops_experience_title: "Proven Enterprise Experience",
          valueprops_experience_desc:
            "15+ years building enterprise software for clients including ABN AMRO, NS, and government sector. I've seen what breaks at scale and know how to prevent it.",
          valueprops_experience_metric: "€2.5M+ infrastructure costs saved",
          valueprops_reliability_title: "Zero-Downtime Deployments",
          valueprops_reliability_desc:
            "Transform risky releases into routine operations. Automated rollbacks, comprehensive testing, and monitoring that prevents outages.",
          valueprops_reliability_metric: "99.9% uptime achieved",
          valueprops_technical_title: "Full-Stack DevOps Expertise",
          valueprops_technical_desc:
            "From Python backends to Kubernetes orchestration. I bridge the gap between development and operations for seamless delivery.",
          valueprops_technical_metric: "50+ critical systems delivered",
          valueprops_sustainability_title: "Team Knowledge Transfer",
          valueprops_sustainability_desc:
            "Don't just get solutions—get the knowledge to maintain and extend them. Documentation, training, and best practices included.",
          valueprops_sustainability_metric: "100% team retention rate",
          valueprops_cta_question: "Ready to scale your systems?",
          valueprops_cta_link: "Let's discuss your project →",
          // Testimonials section
          testimonials_title_main: "What clients say",
          testimonials_subtitle: "Real results from real partnerships",
          testimonials_cta_question: "Need detailed case studies?",
          testimonials_cta_link: "Get anonymized examples →",
          // FAQ section
          faq_title: "Common questions",
          faq_subtitle: "Everything you need to know about working together",
          faq_cta_question: "Still have questions?",
          faq_cta_link: "Get in touch directly →",
          faq_q1: "How quickly can you start on a project?",
          faq_a1:
            "For urgent issues, I can often start within 24-48 hours. For planned projects, I typically have 1-2 week lead time. Emergency DevOps support is available with same-day response.",
          faq_q2: "Do you work with existing teams or independently?",
          faq_a2:
            "Both! I integrate seamlessly with your existing engineering teams and can also work independently on specific technical deliverables. My experience at enterprise scale means I know how to collaborate effectively with distributed teams.",
          faq_q3: "What if our tech stack is different from your experience?",
          faq_a3:
            "While I specialize in Python, Go, and cloud infrastructure, my 15+ years of enterprise experience means I can quickly adapt to new technologies. I focus on patterns and principles that work across any stack.",
          faq_q4: "How do you ensure knowledge transfer to our team?",
          faq_a4:
            "Every engagement includes documentation, code reviews, and hands-on training. I don't just deliver solutions—I ensure your team can maintain and extend the work independently.",
          faq_q5: "What's your approach to remote vs. on-site work?",
          faq_a5:
            "I work fully remote but can accommodate on-site requirements for strategic sessions or complex implementations. Based in Hulst, Netherlands, I serve clients throughout Europe.",
          faq_q6: "How do you handle project scope changes?",
          faq_a6:
            "I use agile approaches with regular check-ins and transparent communication. Scope changes are discussed openly with impact assessments on timeline and budget before implementation.",
          // Engagement section
          engagement_title: "How we can work together",
          engagement_subtitle:
            "Flexible engagement models designed around your timeline and delivery needs",
          engagement_advisory_title: "Advisory Sprint",
          engagement_advisory_duration: "1–2 weeks",
          engagement_advisory_desc:
            "Quick audit, architecture review, and prioritized roadmap you can act on immediately.",
          engagement_advisory_feature_1: "System assessment",
          engagement_advisory_feature_2: "Technical roadmap",
          engagement_advisory_feature_3: "Risk analysis",
          engagement_advisory_feature_4: "Implementation plan",
          engagement_advisory_cta: "Get audit",
          engagement_scoped_title: "Scoped Project",
          engagement_scoped_duration: "2–8 weeks",
          engagement_scoped_desc:
            "Deliver a specific part of your stack: pipelines, services, or CI/CD setup.",
          engagement_scoped_feature_1: "Focused delivery",
          engagement_scoped_feature_2: "Knowledge transfer",
          engagement_scoped_feature_3: "Documentation",
          engagement_scoped_feature_4: "Testing included",
          engagement_scoped_cta: "Discuss project",
          engagement_retainer_title: "Retainer",
          engagement_retainer_duration: "Ongoing",
          engagement_retainer_desc:
            "Monthly delivery support and hands-on implementation as part of your team.",
          engagement_retainer_feature_1: "Continuous delivery",
          engagement_retainer_feature_2: "Team mentoring",
          engagement_retainer_feature_3: "Process improvement",
          engagement_retainer_feature_4: "Flexible hours",
          engagement_retainer_cta: "Start retainer",

          // Work Experience section
          workexp_title: "Work",
          workexp_subtitle: "Experience",
          workexp_description:
            "15+ years building reliable systems for enterprise clients",
          workexp_savings: "Infrastructure Savings Generated",
          workexp_failures: "Reduction in Pipeline Failures",
          workexp_deployment: "Deployment Time Improvement",
          workexp_uptime: "Uptime Achieved",

          // Services section
          services_title: "Service highlights",
          services_subtitle:
            "End-to-end engineering solutions that solve real problems",
          services_fullstack_title: "Full-Stack Development",
          services_fullstack_desc:
            "End-to-end development of modern web applications with Python, TypeScript, and cloud-native architectures.",
          services_devops_title: "DevOps & Cloud Infrastructure",
          services_devops_desc:
            "Scalable cloud solutions with Docker, Kubernetes, and automated CI/CD pipelines for reliable deployments.",
          services_data_title: "Data Engineering & Analytics",
          services_data_desc:
            "Robust data pipelines and analytics platforms for real-time insights and data-driven decision making.",
          services_consulting_title: "Technical Leadership & Consulting",
          services_consulting_desc:
            "Strategic technical guidance, code reviews, and architecture decisions for enterprise-level projects.",
          services_feature_1: "Zero-downtime deployments",
          services_feature_2: "Enterprise-grade reliability",
          services_feature_3: "Team knowledge transfer",
          services_item_1:
            "Migrations & refactors — zero-downtime rollouts and measured plans",
          services_item_2:
            "Observability & alerts — meaningful signals that reduce noise",
          services_item_3:
            "Automated testing & quality — pipeline tests, contract tests, and gating",
          services_item_4:
            "Cost & performance wins — lower infra spend and faster response times",
          services_item_5:
            "Architecture reviews — identify bottlenecks and scaling challenges",
          services_item_6:
            "Team mentoring — upskill engineers and improve delivery practices",
          services_item_7:
            "DevOps automation — CI/CD, infra-as-code, and deployment hardening",
          services_item_8:
            "Data pipeline reliability — robust ETL with monitoring and recovery",

          // Social Proof section
          socialproof_savings_label: "Infrastructure costs saved",
          socialproof_savings_context: "Across 6 major enterprise clients",
          socialproof_systems_label: "Critical systems delivered",
          socialproof_systems_context: "Zero post-launch failures",
          socialproof_experience_label: "Years enterprise experience",
          socialproof_experience_context: "ABN AMRO, NS, Healthcare sector",
          socialproof_uptime_label: "Average uptime achieved",
          socialproof_uptime_context: "On mission-critical platforms",
          socialproof_projects_title: "Mission-Critical Systems I've Built",
          socialproof_project_1:
            "Real-time data processing for 2M+ daily transactions",
          socialproof_project_2:
            "Railway maintenance systems serving millions of passengers",
          socialproof_project_3:
            "Healthcare identity management for government sector",
          socialproof_project_4:
            "Financial data pipelines with zero tolerance for downtime",
          socialproof_trust_desc:
            "Trusted by organizations where reliability isn't optional",
          socialproof_trust_1: "Direct client contracts only",
          socialproof_trust_2: "NDA & security cleared",
          socialproof_trust_3: "Long-term partnerships preferred",

          // Social proof section titles
          social_proof_title: "Mission-Critical Systems I've Built",
          social_proof_subtitle:
            "Trusted by organizations where reliability isn't optional",

          // Lead Magnet section
          leadmagnet_badge: "Free Assessment",
          leadmagnet_title_1: "How mature is your",
          leadmagnet_title_2: "DevOps process",
          leadmagnet_description:
            "Get a personalized assessment showing exactly where your deployment process is costing you time and money",
          leadmagnet_discover_title: "You'll discover:",
          leadmagnet_discover_1: "Hidden bottlenecks slowing your releases",
          leadmagnet_discover_2: "Risk factors that could cause outages",
          leadmagnet_discover_3:
            "Quick wins to improve reliability immediately",
          leadmagnet_discover_4: "Benchmarks vs. similar companies",
          leadmagnet_ready_title: "Ready to get started?",
          leadmagnet_ready_desc:
            "Email me with your current challenges and I'll provide a personalized assessment",
          leadmagnet_cta: "Request Free Assessment →",
          leadmagnet_commitment:
            "No commitment • Direct personal response • Usually within 24 hours",
          leadmagnet_footer:
            "⏱️ Takes 5 minutes to request • 📊 Personalized assessment • 🔒 Your data stays private",
        },
        utrecht: "Utrecht",
        amsterdam: "Amsterdam",
        hulst: "Hulst",
        belgium: "Belgium",
        present: "present",
        terneuzen: "Terneuzen",
        gent: "Gent",
        work_experience: experience_en,
        workexp: workexp_en,
        netherlands: "Netherlands",
        education: "Education",
        location: "Location",
        experience: "Experience",
        opentowork_banner: "Available for new projects starting next quarter!",
        lang_switch: "Switch to Dutch",
        intro:
          "Ambitious, hardworking, and driven Senior Python Developer with at least 10 years of experience and a keen eye for detail. Living in Terneuzen, with strong communication skills and the ability to work independently as well as in groups.",
        aboutme: `
            I am passionate about using technology to solve real-world problems. I am always looking for new ways to improve user experience and make software more accessible for everyone. I am also a strong advocate of open source software and am always willing to contribute to this community.
        `,
        telephone: "Telephone",
        emailaddress: "Email address",
        scheduleintroduction: "Schedule an introduction",
        downloadresume: "Download full resume",
        work_experience_word: "Work experience",
      },
    },
    nl: {
      translation: {
        years_of_experience: "jaar ervaring",
        knowledge: "Kennis",
        knowledge_section: `
        Hieronder een beknopt overzicht van mijn uitgelichte kenniszaken in aantal jaren ervaring. Meer
        weten? Neem dan contact op. Voor veel van deze kennis, inclusef
        verschillende front-end klussen, heb ik buiten mijn werk ervaring ook
        ervaring opgedaan met freelance klussen.`,
        profile: "Profiel",
        profile_intro: `
        Senior Software & DevOps Engineer met ruim 15 jaar ervaring in
        enterprise-omgevingen, waaronder ABN AMRO en NS. Gedreven, communicatief
        sterk en met een scherp oog voor detail. Excelleer in zowel zelfstandige
        als teamgerichte settings, met een bewezen trackrecord in het leiden van
        complexe projecten. HBO/WO werk- en denkniveau. Gevestigd in het
        prachtige Hulst.
        `,
        amsterdam: "Amsterdam",
        utrecht: "Utrecht",
        hulst: "Hulst",
        belgium: "België",
        terneuzen: "Terneuzen",
        gent: "Gent",
        work_experience: experience_nl,
        workexp: workexp_nl,
        present: "heden",
        netherlands: "Nederland",
        education: "Educatie",
        location: "Locatie",
        experience: "Ervaring",
        opentowork_banner:
          "Vanaf volgend kwartaal weer beschikbaar voor nieuwe opdrachten!",
        lang_switch: "Switch to English",
        intro:
          "Ambitieuze, hardwerkende en gedreven Senior Python developer met met minimaal 10 jaar ervaring en oog voor detail. Woonachtig in Terneuzen, communicatief vaardig en staat in om onafhankelijk in groepen en zelfstandig te kunnen werken.",
        aboutme: `
        Ik ben gepassioneerd over het gebruik van technologie om problemen in
          de echte wereld op te lossen. Ik ben altijd op zoek naar nieuwe
          manieren om de gebruikerservaring te verbeteren en software
          toegankelijker te maken voor iedereen. Ik ben ook een groot
          voorstander van open source software en ik ben altijd bereid om bij te
          dragen aan deze community.
        `,
        telephone: "Telefoon",
        emailaddress: "Emailadres",
        scheduleintroduction: "Plan een kennismaking",
        downloadresume: "Download volledig cv",
        work_experience_word: "Werkervaring",
        homepage: {
          // Hero section
          hero_available_status: "Beschikbaar voor projecten",
          hero_trusted_by: "Vertrouwd door toonaangevende organisaties",
          hero_variant_a:
            "Gerenommeerde engineering om kritieke data- en interne systemen te schalen",
          hero_variant_b_1: "Bouw",
          hero_variant_b_2: "sneller",
          hero_variant_b_3: ", lever",
          hero_variant_b_4: "betrouwbaar",
          hero_variant_b_5: " — stop met blussen en begin met schalen",
          hero_variant_c_1: "Van 3AM Nood-Alerts",
          hero_variant_c_2: "naar Zero-Downtime",
          hero_variant_c_3: "Deployments",
          hero_desc:
            "Stel je voor: vrijdagmiddag deployen en daadwerkelijk van je weekend genieten. Geen alerts. Geen rollbacks. Geen noodfixes. Je grootste zorg? Wat je gaat eten.",
          hero_cta_primary: "Boek Je Strategie Gesprek",
          hero_cta_secondary: "Stuur een snelle email →",
          hero_trust_1: "Geen verplichting",
          hero_trust_2: "15+ jaar ervaring",
          hero_trust_3: "Enterprise-bewezen",
          // Legacy fields for compatibility
          hero_title:
            "Gerenommeerde engineering om kritieke data- en interne systemen te schalen",
          hero_desc_legacy:
            "Ik werk samen met engineering- en productteams om data-workflows te automatiseren, DevOps te versterken en schaalbare systemen te leveren.",
          cta_primary: "Laten we iets bouwen",
          cta_secondary: "Plan een korte 20‑minuten call",
          hero_micro: "Ik werk direct met engineering leaders en productteams.",
          what_i_do_title: "Wat ik doe",
          what_i_do_intro:
            "Ik duik in rommelige, belangrijke problemen en transformeer ze naar voorspelbare, onderhoudbare systemen.",
          svc_python_title: "Architectuur & backend",
          svc_python_text:
            "Refactoren, performance-tuning en leveren van robuuste services.",
          svc_data_title: "Data-infrastructuur",
          svc_data_text:
            "Betrouwbare ETL, testing en observability voor productie-pijplijnen.",
          svc_devops_title: "DevOps & automatisering",
          svc_devops_text:
            "CI/CD, infra-as-code, deployment hardening en incident playbooks.",
          svc_mentoring_title: "Mentoring & proces",
          svc_mentoring_text:
            "Upskill teams en bouw leverpraktijken die blijven hangen.",
          who_help_title: "Voor wie",
          who_help_text:
            "Beste fit: teams die interne tools, data-producten of hoog-datadoorvoerende services beheren en een ervaren uitvoerder nodig hebben.",
          how_work_title: "Hoe we kunnen samenwerken",
          how_work_text:
            "Flexibele engagementmodellen die passen bij je behoeften en tijdlijn.",
          svc_advisory: "Advisory sprints — 1–2 weken",
          svc_scoped: "Gedefinieerde projecten",
          svc_retainer: "Retainer",
          svc_embed: "Team embedding",
          highlights_title: "Service highlights",
          highlight_1:
            "Migraties & refactors — zero-downtime uitrol en gemeten plannen.",
          highlight_2:
            "Observability & alerts — betekenisvolle signalen die ruis verminderen.",
          highlight_3:
            "Geautomatiseerde testing & kwaliteit — pipeline-tests, contract-tests en gating.",
          highlight_4:
            "Kosten- & performance-winst — lagere infra-kosten en snellere responstijden.",
          testimonials_title: "Wat klanten zeggen",
          final_cta_title:
            "Klaar om te stoppen met blussen en te beginnen met voorspelbaar opleveren?",
          final_cta_primary: "Laten we iets bouwen",
          final_cta_secondary: "Plan een korte call",
          footer_note:
            "Directe contracten. Tarieven en beschikbaarheid op aanvraag.",
          // Value Props section
          valueprops_title: "Waarom teams voor mij kiezen",
          valueprops_subtitle:
            "Bewezen resultaten van 15+ jaar enterprise software bouwen",
          valueprops_experience_title: "Bewezen Enterprise Ervaring",
          valueprops_experience_desc:
            "15+ jaar enterprise software bouwen voor klanten zoals ABN AMRO, NS en de overheidssector. Ik heb gezien wat breekt op schaal en weet hoe dit te voorkomen.",
          valueprops_experience_metric: "€2.5M+ infrastructuurkosten bespaard",
          valueprops_reliability_title: "Zero-Downtime Deployments",
          valueprops_reliability_desc:
            "Transformeer riskante releases naar routine operaties. Geautomatiseerde rollbacks, uitgebreide testing en monitoring die uitval voorkomt.",
          valueprops_reliability_metric: "99.9% uptime behaald",
          valueprops_technical_title: "Full-Stack DevOps Expertise",
          valueprops_technical_desc:
            "Van Python backends tot Kubernetes orchestratie. Ik overburg de kloof tussen development en operations voor naadloze oplevering.",
          valueprops_technical_metric: "50+ kritieke systemen opgeleverd",
          valueprops_sustainability_title: "Team Kennisoverdracht",
          valueprops_sustainability_desc:
            "Krijg niet alleen oplossingen—krijg de kennis om ze te onderhouden en uit te breiden. Documentatie, training en best practices inbegrepen.",
          valueprops_sustainability_metric: "100% team retentiepercentage",
          valueprops_cta_question: "Klaar om je systemen te schalen?",
          valueprops_cta_link: "Laten we je project bespreken →",
          // Testimonials section
          testimonials_title_main: "Wat klanten zeggen",
          testimonials_subtitle: "Echte resultaten van echte partnerships",
          testimonials_cta_question: "Gedetailleerde case studies nodig?",
          testimonials_cta_link: "Krijg geanonimiseerde voorbeelden →",
          // FAQ section
          faq_title: "Veelgestelde vragen",
          faq_subtitle: "Alles wat je moet weten over samenwerken",
          faq_cta_question: "Nog vragen?",
          faq_cta_link: "Neem direct contact op →",
          // Services section
          services_title: "Hoe ik waarde lever",
          services_subtitle:
            "Ik help teams enterprise software bouwen die echt werkt",
          services_fullstack_title: "Full-Stack Development",
          services_fullstack_desc:
            "End-to-end ontwikkeling van moderne web applicaties met Python, TypeScript, en cloud-native architecturen.",
          services_devops_title: "DevOps & Cloud Infrastructuur",
          services_devops_desc:
            "Schaalbare cloud oplossingen met Docker, Kubernetes, en geautomatiseerde CI/CD pipelines voor betrouwbare deployments.",
          services_data_title: "Data Engineering & Analytics",
          services_data_desc:
            "Robuuste data pipelines en analytics platforms voor real-time inzichten en gegevensgestuurde besluitvorming.",
          services_consulting_title: "Technical Leadership & Consulting",
          services_consulting_desc:
            "Strategische technische begeleiding, code reviews, en architectuur beslissingen voor enterprise-niveau projecten.",
          services_feature_1: "Zero-downtime deployments",
          services_feature_2: "Enterprise-niveau betrouwbaarheid",
          services_feature_3: "Team kennisoverdracht",

          // Service items
          services_item_1:
            "Migraties & refactors — zero-downtime uitrol en gemeten plannen",
          services_item_2:
            "Observability & alerts — betekenisvolle signalen die ruis verminderen",
          services_item_3:
            "Geautomatiseerde testing & kwaliteit — pipeline-tests, contract-tests en gating",
          services_item_4:
            "Kosten- & performance-winst — lagere infra-kosten en snellere responstijden",
          services_item_5:
            "Architectuur reviews — identificeer knelpunten en schaaluitdagingen",
          services_item_6:
            "Team mentoring — upgrade engineers en verbeter delivery praktijken",
          services_item_7:
            "DevOps automatisering — CI/CD, infra-as-code, en deployment hardening",
          services_item_8:
            "Data pipeline betrouwbaarheid — robuuste ETL met monitoring en recovery",

          // Work Experience section
          workexp_title: "Werk",
          workexp_subtitle: "Ervaring",
          workexp_description:
            "15+ jaar ervaring in het bouwen van betrouwbare systemen voor enterprise klanten",
          workexp_savings: "Infrastructuur Besparingen Gegenereerd",
          workexp_failures: "Reductie in Pipeline Storingen",
          workexp_deployment: "Deployment Tijd Verbetering",
          workexp_uptime: "Uptime Behaald",

          // Social Proof section
          socialproof_savings_label: "Infrastructuur kosten bespaard",
          socialproof_savings_context: "Bij 6 grote enterprise klanten",
          socialproof_systems_label: "Kritieke systemen geleverd",
          socialproof_systems_context: "Zero post-launch storingen",
          socialproof_experience_label: "Jaar enterprise ervaring",
          socialproof_experience_context: "ABN AMRO, NS, Zorgsector",
          socialproof_uptime_label: "Gemiddelde uptime behaald",
          socialproof_uptime_context: "Op missiekritieke platforms",
          socialproof_projects_title:
            "Missiekritieke Systemen Die Ik Heb Gebouwd",
          socialproof_project_1:
            "Real-time data verwerking voor 2M+ dagelijkse transacties",
          socialproof_project_2:
            "Spoorwegonderhoud systemen voor miljoenen passagiers",
          socialproof_project_3:
            "Zorgidentiteit management voor overheidssector",
          socialproof_project_4:
            "Financiële data pipelines met zero tolerance voor downtime",
          socialproof_trust_desc:
            "Vertrouwd door organisaties waar betrouwbaarheid niet optioneel is",
          socialproof_trust_1: "Alleen directe klantcontracten",
          socialproof_trust_2: "NDA & veiligheid gescreend",
          socialproof_trust_3: "Langetermijn partnerships voorkeur",

          // Social proof section titles
          social_proof_title: "Missiekritieke Systemen Die Ik Heb Gebouwd",
          social_proof_subtitle:
            "Vertrouwd door organisaties waar betrouwbaarheid niet optioneel is",

          // Lead Magnet section
          leadmagnet_badge: "Gratis Assessment",
          leadmagnet_title_1: "Hoe volwassen is jouw",
          leadmagnet_title_2: "DevOps proces",
          leadmagnet_description:
            "Krijg een gepersonaliseerde beoordeling die precies laat zien waar jouw deployment proces tijd en geld kost",
          leadmagnet_discover_title: "Je ontdekt:",
          leadmagnet_discover_1:
            "Verborgen knelpunten die jouw releases vertragen",
          leadmagnet_discover_2:
            "Risicofactoren die storingen kunnen veroorzaken",
          leadmagnet_discover_3:
            "Snelle winsten om betrouwbaarheid onmiddellijk te verbeteren",
          leadmagnet_discover_4: "Benchmarks vs. soortgelijke bedrijven",
          leadmagnet_ready_title: "Klaar om te beginnen?",
          leadmagnet_ready_desc:
            "Email me met jouw huidige uitdagingen en ik lever een gepersonaliseerde beoordeling",
          leadmagnet_cta: "Vraag Gratis Assessment aan →",
          leadmagnet_commitment:
            "Geen verplichting • Directe persoonlijke reactie • Meestal binnen 24 uur",
          leadmagnet_footer:
            "⏱️ Duurt 5 minuten om aan te vragen • 📊 Gepersonaliseerde beoordeling • 🔒 Jouw data blijft privé",

          // Final CTA section
          finalcta_title_1:
            "Klaar om te stoppen met blussen en te beginnen met het opleveren van",
          finalcta_title_2: "voorspelbare systemen",
          finalcta_description:
            "Laten we bespreken hoe jouw engineering sneller, betrouwbaarder en klaar voor schaling te maken.",
          finalcta_primary: "Boek een 20‑minuten call",
          finalcta_secondary: "Stuur een snelle email",
          finalcta_trust_1: "Alleen directe contracten",
          finalcta_trust_2: "Tarieven op aanvraag",
          // FAQ translations
          faq_q1: "Hoe snel kun je beginnen aan een project?",
          faq_a1:
            "Voor urgente zaken kan ik vaak binnen 24-48 uur beginnen. Voor geplande projecten heb ik typisch 1-2 weken doorlooptijd. Noodondersteuning voor DevOps is beschikbaar met respons dezelfde dag.",
          faq_q2: "Werk je samen met bestaande teams of onafhankelijk?",
          faq_a2:
            "Beide! Ik integreer naadloos met je bestaande engineering teams en kan ook onafhankelijk werken aan specifieke technische deliverables. Mijn ervaring op enterprise schaal betekent dat ik weet hoe effectief samen te werken met gedistribueerde teams.",
          faq_q3: "Wat als onze tech stack verschilt van jouw ervaring?",
          faq_a3:
            "Hoewel ik gespecialiseerd ben in Python, Go en cloud infrastructuur, betekent mijn 15+ jaar enterprise ervaring dat ik me snel kan aanpassen aan nieuwe technologieën. Ik focus op patronen en principes die werken in elke stack.",
          faq_q4: "Hoe zorg je voor kennisoverdracht naar ons team?",
          faq_a4:
            "Elke samenwerking bevat documentatie, code reviews en hands-on training. Ik lever niet alleen oplossingen—ik zorg ervoor dat je team het werk zelfstandig kan onderhouden en uitbreiden.",
          faq_q5: "Wat is je aanpak voor remote vs. on-site werk?",
          faq_a5:
            "Ik werk volledig remote maar kan on-site vereisten accommoderen voor strategische sessies of complexe implementaties. Gevestigd in Hulst, Nederland, bedien ik klanten door heel Europa.",
          faq_q6: "Hoe ga je om met projectscope wijzigingen?",
          faq_a6:
            "Ik gebruik agile aanpakken met regelmatige check-ins en transparante communicatie. Scope wijzigingen worden open besproken met impactanalyses op tijdlijn en budget voor implementatie.",
          // Engagement section
          engagement_title: "Hoe we kunnen samenwerken",
          engagement_subtitle:
            "Flexibele samenwerkingsmodellen ontworpen rond jouw tijdlijn en leverbehoeften",
          engagement_advisory_title: "Advisory Sprint",
          engagement_advisory_duration: "1–2 weken",
          engagement_advisory_desc:
            "Snelle audit, architectuurreview en geprioriteerde roadmap waar je direct mee aan de slag kunt.",
          engagement_advisory_feature_1: "Systeemassessment",
          engagement_advisory_feature_2: "Technische roadmap",
          engagement_advisory_feature_3: "Risicoanalyse",
          engagement_advisory_feature_4: "Implementatieplan",
          engagement_advisory_cta: "Krijg audit",
          engagement_scoped_title: "Gedefinieerd Project",
          engagement_scoped_duration: "2–8 weken",
          engagement_scoped_desc:
            "Lever een specifiek onderdeel van je stack: pipelines, services of CI/CD setup.",
          engagement_scoped_feature_1: "Gerichte oplevering",
          engagement_scoped_feature_2: "Kennisoverdracht",
          engagement_scoped_feature_3: "Documentatie",
          engagement_scoped_feature_4: "Testing inbegrepen",
          engagement_scoped_cta: "Bespreek project",
          engagement_retainer_title: "Retainer",
          engagement_retainer_duration: "Doorlopend",
          engagement_retainer_desc:
            "Maandelijkse leveringsondersteuning en hands-on implementatie als onderdeel van je team.",
          engagement_retainer_feature_1: "Continue oplevering",
          engagement_retainer_feature_2: "Team mentoring",
          engagement_retainer_feature_3: "Procesverbetering",
          engagement_retainer_feature_4: "Flexibele uren",
          engagement_retainer_cta: "Start retainer",
        },
      },
    },
  },
});

export const { t } = i18next;

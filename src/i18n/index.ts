import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import experience_nl from "./nl/experience";
import experience_en from "./en/experience";

import workexp_nl from "./nl/workexp";
import workexp_en from "./en/workexp";

i18next.use(initReactI18next).init({
  lng: "nl",
  debug: false,
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
          hero_title:
            "Trusted engineering to scale critical data and internal systems",
          hero_desc:
            "I partner with engineering and product teams to automate data workflows, harden DevOps, and deliver scalable Python systems.",
          cta_primary: "Let’s build something",
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
          hero_title:
            "Gerenommeerde engineering om kritieke data- en interne systemen te schalen",
          hero_desc:
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
        },
      },
    },
  },
});

export const { t } = i18next;

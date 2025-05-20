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
        complexe projecten. HBO/WO werk- en denkniveau. Gevestigd in de het
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
      },
    },
  },
});

export const { t } = i18next;

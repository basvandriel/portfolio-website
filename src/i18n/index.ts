import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import experience_nl from './nl/experience'
import experience_en from './en/experience'

i18next.use(initReactI18next).init({
  lng: "nl", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        utrecht: 'Utrecht',
        amsterdam: 'Amsterdam',
        hulst: 'Hulst',
        belgium: 'Belgium',
        present: 'present',
        terneuzen: 'Terneuzen',
        gent: 'Gent',
        work_experience: experience_en,
        netherlands: 'Netherlands',
        education: 'Education',
        location: 'Location',
        experience: 'Experience',
        opentowork_banner: 'Available for new projects starting next quarter!',
        lang_switch: "Switch to Dutch",
        intro:
          "Ambitious, hardworking, and driven Senior Python Developer with at least 10 years of experience and a keen eye for detail. Living in Terneuzen, with strong communication skills and the ability to work independently as well as in groups.",
        aboutme: `
            I am passionate about using technology to solve real-world problems. I am always looking for new ways to improve user experience and make software more accessible for everyone. I am also a strong advocate of open source software and am always willing to contribute to this community.
        `,
      },
    },
    nl: {
      translation: {
        amsterdam: 'Amsterdam',
        utrecht: 'Utrecht',
        hulst: 'Hulst',
        belgium: 'België',
        terneuzen: 'Terneuzen',
        gent: 'Gent',
        work_experience: experience_nl,
        present: 'heden',
        netherlands: 'Nederland',
        education: 'Educatie',
        location: 'Locatie',
        experience: 'Ervaring',
        opentowork_banner: 'Vanaf volgend kwartaal weer beschikbaar voor nieuwe opdrachten!',
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
      },
    },
  },
});

export const { t } = i18next
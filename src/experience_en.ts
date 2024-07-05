import { ExperienceProps } from "./ExperienceListing";

import abnlogo from "./abn_amro_logo.jpeg";
import nslogo from "./nslogo.jpeg";
import hetveerlogo from "./hetveer.jpeg";
import pixelsquarelogo from "./pixelsquarelogo.jpeg";

const RECENT_TILE = "Senior Python Developer, DevOps Engineer";

const EXPERIENCE: ExperienceProps[] = [
  {
    title: RECENT_TILE,
    company: "ABN AMRO",
    location: "Amsterdam, Netherlands",
    start_date: "april 2023",
    current_experience: true,
    description: `
        Developing, managing, and supporting a custom software solution for large-scale data availability and transformation. This involves using various Azure services such as Databricks, Data Factory, and pipelines. Additionally, a significant amount of DevOps-related work is performed, including developing and managing CI/CD pipelines and maintaining and preparing an Azure environment for production.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Azure",
      "DevOps",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "Azure Databricks",
      "Azure Functions",
      "Azure Data Factory",
    ],
    company_logo: abnlogo,
  },
  {
    title: RECENT_TILE,
    company: "Het Veer",
    location: "Amsterdam, Netherlands",
    start_date: "october 2022",
    end_date: "april 2023",
    current_experience: false,
    description: `Developing and managing an application for real-time control and testing of various types of medium voltage installations. My focus is primarily on Python development, along with working on DevOps tools such as Git, Jenkins, and various Microsoft Azure services. Additionally, I handle front-end development.`,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
      "TypeScript",
      "JavaScript",
    ],
    company_logo: hetveerlogo,
  },
  {
    title: RECENT_TILE,
    company: "NS",
    location: "Utrecht, Netherlands",
    start_date: "may 2022",
    end_date: "october 2023",
    current_experience: false,
    description: `
    Working on innovative and challenging software development: a decision-support application for real-time scheduling of railway maintenance. My focus is on Python development in collaboration with various Microsoft Azure services.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
    ],
    company_logo: nslogo,
  },
  {
    title: "Eigenaar, hoofd ontwikkeling",
    company: "Pixelsquare B.V.",
    location: "Hulst, Netherlands",
    start_date: "august 2019",
    current_experience: true,
    description: `
        Working on innovative and challenging software development: a decision-support application for real-time scheduling of railway maintenance. My focus is on Python development in collaboration with various Microsoft Azure services.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
    ],
    company_logo: pixelsquarelogo,
  },
  {
    title: "Eigenaar, hoofd ontwikkeling",
    company: "BeugelBuddy",
    location: "Hulst, Netherlands",
    start_date: "march 2021",
    current_experience: true,
    description: `
        Developing, managing, and supporting an automation solution in dentistry in the form of a software package available on the web, smartphone, or tablet. I primarily work with Python (mostly Flask and Django), Node.js, Elixir, JavaScript, and TypeScript, along with the DevOps practices and methodologies I also use at Pixelsquare. For the front-end, I work with the React framework. While I specialize in front-end development, my main focus is on building back-ends.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "React.js",
      "Git",
      "Agile",
      "CI/CD",
      "Azure DevOps",
    ],
  },
  {
    title: "Full-stack developer",
    company: "ZorgSaam",
    location: "Terneuzen, Netherlands",
    start_date: "july 2019",
    end_date: "august 2019",
    current_experience: false,
    description: `
        Developing, managing, and supporting an automated instruction database with version control used by ZorgSaam employees. I also worked with Laravel and the same DevOps practices and methodologies as during my internship. Additionally, I worked with PostgreSQL and various NoSQL databases.
    `,
    tags: [
      "PHP",
      "Test-driven development",
      "PostgreSQL",
      "NoSQL",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },
  {
    title: "Trainee full-stack developer",
    company: "ZorgSaam",
    location: "Terneuzen, Netherlands",
    start_date: "august 2018",
    end_date: "january 2019",
    current_experience: false,
    description: `
        Developing, managing, and supporting an education system where ZorgSaam employees needed to complete a set number of trainings within a specified period and earn points. This process required automation. I utilized Laravel, a PHP framework, for this project. Additionally, MySQL was used, along with various DevOps practices and methodologies such as Git, TDD (Test-Driven Development), and CI (Continuous Integration) tools. This was one of the projects I worked on during that time.
    `,
    tags: ["PHP", "Test-driven development", "MySQL", "Git", "Agile", "CI/CD"],
  },
  {
    title: "Trainee full-stack developer",
    company: "Laveto",
    location: "Terneuzen, Netherlands",
    start_date: "august 2017",
    end_date: "november 2017",
    current_experience: false,
    description: `
        Developing a quality management system to automate and improve internal business processes. This system was built using Laravel, leveraging my prior experience gained from a hobby project involving a part of an accounting system, predominantly developed in Laravel.    `,
    tags: ["PHP", "Test-driven development", "Git", "Agile", "CI/CD"],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    location: "Terneuzen, Netherlands",
    start_date: "september 2015",
    end_date: "may 2016",
    current_experience: false,
    description: `
Supporting and managing the ICT infrastructure for students, teachers, and other staff at the school. During this time, I also worked on automating the management of donations for a charity, tracking them throughout the school year for various fundraising activities. This project was developed using React.js and Node.js.

    `,
    tags: [
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
      "React",
      "Node.js",
    ],
  },
  {
    title: "Trainee 1ste servicedesk medewerker medewerker",
    company: "OVET B.V.",
    location: "Terneuzen, Netherlands",
    start_date: "march 2015",
    end_date: "july 2015",
    current_experience: false,
    description: `
    Managing the first and second-line service desk, which involved maintaining the company's ICT infrastructure for employees. Additionally, I contributed to brainstorming and implementing the automation of various business processes, using a custom-built intranet for these purposes.
    `,
    tags: ["Test-driven development", "Git", "Agile"],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    location: "Terneuzen, Netherlands",
    start_date: "september 2013",
    end_date: "july 2014",
    current_experience: false,
    description: `
        Managing the first and second-line service desk, which involved maintaining the company's ICT infrastructure for employees. Additionally, I contributed to brainstorming and implementing the automation of various business processes, using a custom-built intranet for these purposes.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },

  {
    title: "Trainee service-support medewerker",
    company: "Scalda",
    location: "Terneuzen, Netherlands",
    start_date: "january 2013",
    end_date: "july 2013",
    current_experience: false,
    description: `
        Supporting and managing the ICT infrastructure for students, teachers, and other staff at the school. During this period, I worked on automating the laptop lending process, which previously operated manually using paper forms and Excel sheets. This automation was developed using .NET and Python, incorporating specific rules governing the lending process.
    `,
    tags: [
      "Python",
      "Test-driven development",
      "Embedded software development",
      "Git",
      "Agile",
      "CI/CD",
    ],
  },
];

export default EXPERIENCE;

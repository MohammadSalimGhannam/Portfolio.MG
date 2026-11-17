import type { Direction } from "../types";

/**
 * English is the reference dictionary: its shape defines `Dictionary`.
 * Every other language must provide exactly the same keys — TypeScript
 * reports any key that is missing or extra.
 */
export const en = {
  language: {
    name: "English",
    dir: "ltr" as Direction,
    /** Locale used to format dates (month names, digits). */
    dateLocale: "en-GB",
  },
  seo: {
    title: "Mohammad Ghannam, software engineer",
    description:
      "Software engineer working across web development, artificial intelligence, robotics and data analysis. Informatics Engineering graduate from the University of Aleppo.",
  },
  common: {
    skipToContent: "Skip to content",
    mainNav: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
    backToTop: "Back to top",
    present: "Present",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    name: "Mohammad Ghannam",
    role: "Software Engineer",
    lead: "I build web applications, computer vision systems and robotics software, and I teach data analysis. Informatics Engineering graduate, ranked first in the Artificial Intelligence department at the University of Aleppo.",
    location: "Sakarya, Türkiye",
    contactCta: "Get in touch",
    githubCta: "GitHub",
    photoAlt: "Portrait of Mohammad Ghannam",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a software engineer with a degree in Informatics Engineering from the University of Aleppo, where I graduated first in the Artificial Intelligence department and third in my class.",
      "My work spans several fields: front-end development with React, Next.js and TypeScript, computer vision with YOLOv8 and OpenCV, robotics with ROS2, and data analysis with Python, which I now teach to more than 100 students.",
      "I hold a Türkiye Scholarship for an MSc in Artificial Intelligence at Sakarya University, and I'm completing the Turkish preparatory year before the programme starts in 2027.",
    ],
    facts: [
      { label: "Based in", value: "Sakarya, Türkiye" },
      {
        label: "Languages",
        value: "Arabic (native), English (B2), Turkish (A1, learning)",
      },
      { label: "Next", value: "MSc Artificial Intelligence, Sakarya University, 2027" },
    ],
  },
  experience: {
    title: "Experience",
    kinds: {
      work: "Work",
      training: "Training",
      volunteering: "Volunteering",
    },
    items: {
      teknova: {
        role: "Data Analysis Instructor",
        org: "TEKNOVA",
        meta: "",
        points: [
          "Teach data analysis to more than 100 students through a project-based curriculum built around real-world problems, using Python, pandas and NumPy.",
          "Guide cohorts through the full data workflow: preprocessing, data cleaning and exploratory data analysis in preparation for machine learning.",
          "Lecture on predictive modelling, covering model training, evaluation metrics and hyperparameter tuning.",
        ],
      },
      altinkey: {
        role: "Front-End Developer",
        org: "ALTINKEY",
        meta: "Full-time, on-site",
        points: [
          "Developed an AI agents dashboard with Next.js and TypeScript, structured with Feature-Sliced Design to keep features and state management modular.",
          "Implemented JWT-based login and a role-based access control system that protects sensitive data and adapts the interface to each user's role.",
          "Raised the application's performance score from 60 to 95 by removing unnecessary re-renders and optimising rendering logic.",
        ],
      },
      bluebits: {
        role: "Team Manager, Technical Lead and Translator",
        org: "Blue Bits Team, University of Aleppo",
        meta: "",
        points: [
          "Led a student team that modernises course materials, converts lecture notes into PDF and video, translates content into Arabic and runs academic Q&A sessions.",
        ],
      },
      shai: {
        role: "Data Science Track Trainee",
        org: "SHAI for AI",
        meta: "",
        points: [
          "Completed a 90-hour programme covering Python, data analysis, machine learning and deep learning, assessed through practical team projects.",
        ],
      },
    },
  },
  projects: {
    title: "Projects",
    links: {
      code: "Code",
      live: "Live demo",
      app: "App code",
      model: "Model code",
    },
    items: {
      ev3Mapping: {
        title: "Swarm mapping with EV3 robots",
        kind: "Graduation project",
        summary:
          "A multi-robot SLAM system in which LEGO EV3 robots with infrared sensors map a space in real time. I wrote custom ROS2 nodes in Python for robot control, communication and merging several local maps into one global map.",
      },
      roadEye: {
        title: "RoadEye: real-time road analysis",
        kind: "Fourth-year project, team",
        summary:
          "A computer vision pipeline that detects and tracks vehicles with YOLOv8 and OpenCV and estimates each one's speed, direction and distance. Results are analysed with pandas and Seaborn and shown in a React front end backed by Django.",
      },
      dentalClinic: {
        title: "Dental clinic management system",
        kind: "Personal project",
        summary:
          "A web system for patient records, appointment scheduling and invoicing, designed and built independently and deployed on GitHub Pages.",
      },
      familyTree: {
        title: "FamilyTree",
        kind: "Team project",
        summary:
          "A website that displays family relationships as a hierarchy, with user authentication and admin roles for managing family data.",
      },
      portfolio: {
        title: "Portfolio website",
        kind: "Personal project",
        summary:
          "This site: a static, multilingual portfolio built with Next.js, TypeScript and Tailwind CSS, with light and dark themes.",
      },
      knowledge: {
        title: "Knowledge",
        kind: "Course project",
        summary:
          "An interactive educational website with a responsive design, built for the Multimedia course.",
      },
    },
  },
  skills: {
    title: "Skills",
    groups: {
      programming: "Programming languages",
      web: "Web development",
      ai: "Data science and AI",
      robotics: "Robotics",
      foundations: "Foundations and tools",
    },
  },
  education: {
    title: "Education",
    degreesTitle: "Degrees",
    honoursTitle: "Honours and awards",
    certificatesTitle: "Certificates",
    verify: "Verify",
    degrees: {
      msc: {
        degree: "MSc Artificial Intelligence",
        school: "Sakarya University, Türkiye",
        period: "From 2027",
        note: "Admitted with a Türkiye Scholarship. Currently completing the required Turkish preparatory year (2026 to 2027).",
      },
      bsc: {
        degree: "BSc Informatics Engineering, Artificial Intelligence Department",
        school: "University of Aleppo, Syria",
        period: "2020 to 2025",
        note: "Grade 88.25/100 (Distinction). Ranked 1st in the AI department and 3rd in the graduating class.",
      },
      secondary: {
        degree: "General Secondary Education Certificate, Scientific Branch",
        school: "Aleppo, Syria",
        period: "2020",
        note: "Grade: 94%.",
      },
    },
    honours: {
      scholarship: {
        title: "Türkiye Scholarships, fully funded MSc scholarship",
        by: "Government of Türkiye",
      },
      ranking: {
        title: "1st place in the AI department, 3rd place overall",
        by: "University of Aleppo",
      },
    },
  },
  contact: {
    title: "Contact",
    heading: "Get in touch",
    text: "Send a message with the form, or reach me directly by email or on the platforms below.",
    emailLabel: "Email",
    locationLabel: "Location",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. I'll reply to the email address you entered.",
      error: "The message couldn't be sent. Try again, or email me directly.",
    },
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
};

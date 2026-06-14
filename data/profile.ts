// ============================================================================
// THIS IS THE ONLY FILE MOST PEOPLE NEED TO EDIT.
// Replace every placeholder value below with your own information.
// The pages in /app read from this file automatically.
// ============================================================================

export const profile = {
  // --- Basic info -----------------------------------------------------
  name: "Shishir Gyawali",
  initials: "SG", // shown in the logo / avatar circle
  title: "Student & Lifelong Learner",
  tagline: "I build things, study hard, and write down what I learn.",
  location: "Kathmandu, Nepal",
  email: "shishirgyawali222@gmail.com",

  // Short bio shown on the About page (can be multiple paragraphs)
  bio: [
    "Hi, I'm Shishir Gyawali. I'm a student interested in technology, design and ideas that make everyday life a little better.",
    "This website is my personal corner of the internet — a record of what I'm studying, what I build, and the hobbies that keep me curious outside the classroom.",
    "When I'm not studying, you'll usually find me reading, sketching, playing music, or tinkering with a small side project.",
  ],

  // --- Social / contact links ------------------------------------------
  // Leave a value as "" to hide that link from the footer/nav.
  social: {
    github: "https://github.com/shishir-gyawali",
    linkedin: "https://linkedin.com/in/shishir-gyawali",
    instagram: "sisir1238",
    twitter: "sisir1238",
  },

  // --- Education / Studies -----------------------------------------------
  // Add one entry per school / college / course. Newest first.
  education: [
    {
      fileNo: "03",
      institution: "Kantipur City College",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      period: "2024 — Present",
      location: "Kathmandu, Nepal",
      description:
        "Pursuing a Bachelor's degree in Information Technology, with a focus on becoming a software developer.",
      highlights: [
        "Relevant coursework: Data Structures & Algorithms (DSA)",
      ],
    },
    {
      fileNo: "02",
      institution: "Xavier International College",
      degree: "+2 / Grade 11-12",
      field: "Science",
      period: "2021 — 2023",
      location: "Kathmandu, Nepal",
      highlights: ["Grade 12: 3.45 GPA",],
    },
    {
      fileNo: "01",
      institution: "Universal College Preparatory School",
      degree: "SEE / Grade 10",
      field: "General",
      period: "2011 — 2021",
      location: "Kathmandu, Nepal",
      highlights: [
        "Relevant coursework: Computer science",
      ],
    },
  ],

  // --- Skills -------------------------------------------------------------
  // Group skills however makes sense to you.
  skills: [
    {
      category: "Languages & Tools",
      items: ["JavaScript", "Python", "HTML & CSS", "Git"],
    },
    {
      category: "Currently Learning",
      items: ["React", "Databases", "Public Speaking"],
    },
  ],

  // --- Hobbies --------------------------------------------------------------
  // Each hobby gets its own card on the Hobbies page.
  hobbies: [
    {
      tag: "Reading",
      title: "Reading",
      description:
        "I enjoy reading fiction and non-fiction — currently into 'Project Hail Mary'.",
    },
    {
      tag: "Music",
      title: "Music",
      description:
        "I like to listen to music and generally listen old genre musics.",
    },
    {
      tag: "Sketching",
      title: "Sketching & Art",
      description:
        "I like to sketch in my free time — mostly nature and surroundings.",
    },
    {
      tag: "Travel",
      title: "Exploring New Places",
      description:
        "I enjoy travelling and exploring new places, food, and cultures whenever I get the chance.",
    },
    {
      tag: "Sports",
      title: "Sports & Fitness",
      description: "I enjoy playing sports very much and I usually play cricket.",
    },
    {
      tag: "Coding",
      title: "Building Small Projects",
      description:
        "Outside of class, I like building small websites and apps — like this one!",
    },
  ],

  // --- Projects -------------------------------------------------------------
  // Optional — delete entries you don't need, or leave the array empty.
  projects: [
    {
      title: "This Personal Website",
      period: "2026",
      description:
        "A personal portfolio built with Next.js, Tailwind CSS, and a Postgres database — with a contact form and guestbook.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      link: "",
      repo: "",
    },
  ],
};

export type Profile = typeof profile;

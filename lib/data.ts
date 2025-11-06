export const personalInfo = {
  name: "Bojan Mitić",
  title: "Freelance Fullstack Web Developer",
  location: "Leskovac, Serbia",
  email: "bojanmitic2504@gmail.com",
  phone: "+381-61-2770964",
  github: "https://github.com/Boxon00",
  about: `Learning with passion and ambition, open to learning all sorts of new technologies and techniques. I thrive on challenges and view them as opportunities to grow both personally and professionally. Willing to join a highly professional team where I can develop my skills further and efficiently contribute to the team's success. My goal is to collaborate on innovative projects and deliver impactful solutions while continuously broadening my expertise. I am also fully open and prepared to relocate if required for employment. Relocating represents not only a professional opportunity but also a chance to adapt to new environments, embrace different cultures, and grow on both a personal and career level. I view relocation as a valuable step toward integrating into a team and contributing with full commitment wherever my skills are most needed.`,
};

export const education = [
  {
    degree: "Master's Degree in Computing and Informatics",
    institution: "Faculty of Electronic and Engineering",
    location: "Niš, Serbia",
    period: "October 2024 - Present",
    address: "Bulevar Nikole Tesle 15, 18000 Niš",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Economics Academy 'FIMEK'",
    location: "Novi Sad, Serbia",
    period: "October 2019 - October 2023",
  },
  {
    degree: "Electrical Technician - Computer Science",
    institution: "High School 'Rade Metalac'",
    location: "Leskovac, Serbia",
    period: "September 2015 - June 2019",
  },
];

export const skills = {
  frontend: ["Angular", "JavaScript (ES6+)", "TypeScript", "HTML", "CSS"],
  backend: ["PHP (Laravel)", "Node.js (Express.js)", "C# (.NET)", "Java (Spring Boot)"],
  mobile: ["Kotlin (Android)"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git", "GitBucket", "GitHub", "Microsoft Office"],
  languages: [
    { name: "Serbian", level: "Native" },
    { name: "English", level: "Upper-Intermediate" },
    { name: "French", level: "Beginner" },
  ],
};

export const experience = [
  {
    title: "Freelance Fullstack Web Developer",
    period: "December 2024 - Present",
    description: "Working on various web development projects using modern technologies and frameworks.",
  },
];

export const projects = [
  {
    title: "User Authentication Web Application",
    type: "Personal Project",
    description:
      "Full-stack web application implementing secure user authentication, including registration, login, logout, and protected API endpoints. Applied token-based authentication, session management, form validation, and encrypted password storage to ensure data integrity and security. Designed the frontend for responsiveness and optimal user experience.",
    technologies: [
      "Laravel 12 (PHP framework)",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Laravel Sanctum",
      "Git",
      "Composer",
    ],
    features: [
      "User registration and login with server-side and client-side validation",
      "API protection using a token-based system",
      "Secure password storage (bcrypt hashing)",
      "Responsive design",
    ],
    link: "https://github.com/Boxon00/Laravel-Project-Auth",
  },
  {
    title: "University Projects",
    type: "Academic",
    description:
      "Worked on multiple student projects using various technologies including JavaScript, Angular, C, C#, Java, Spring, Python, and others. Projects focused on building and solving problems in web applications, mobile applications, artificial intelligence, as well as algorithmic challenges.",
    technologies: [
      "JavaScript",
      "Angular",
      "C",
      "C#",
      "Java",
      "Spring",
      "Python",
    ],
    features: [
      "Web application development",
      "Mobile application development",
      "Artificial intelligence implementations",
      "Algorithm problem solving",
    ],
  },
];

export const certifications = [
  {
    name: "Programming Basics with Java",
    issuer: "SoftUni",
    date: "September 2023",
  },
  {
    name: "Programming Basics with JavaScript",
    issuer: "SoftUni",
    date: "September 2023",
  },
];

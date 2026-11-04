// Single source of truth for the site and the printable /resume page.

export const profile = {
  name: 'JT Porter',
  role: 'Senior Software Engineer',
  location: 'Utah · Open to remote',
  email: 'jtporter9@gmail.com',
  // Leave empty to hide the phone number on the resume.
  phone: '',
  github: 'https://github.com/jtporter9',
  linkedin: 'https://linkedin.com/in/jtporter9',
  tagline: 'I build software that makes a difference — and help teams ship it.',
  summary:
    'Senior frontend-focused full-stack engineer with 10 years building React and TypeScript products, ' +
    'from early-stage startups to a Fortune 250 and enterprise SaaS. Most recently rebuilt the Room Matrix ' +
    'at TimeShareWare, cutting load times from 30–90 seconds to 1–10 seconds for resort companies like ' +
    'Vidanta and Hyatt. Former engineering lead of a 7-person team, early adopter of AI-assisted ' +
    'development, and fluent in Spanish.',
  openTo: 'Senior Frontend, Full-Stack, AI Software Engineer, and Engineering Lead roles. Remote preferred.',
};

export type Job = {
  company: string;
  url?: string;
  location: string;
  title: string;
  start: string;
  end: string;
  blurb: string;
  highlights: string[];
  caseStudy?: string;
};

export const experience: Job[] = [
  {
    company: 'TimeShareWare',
    location: 'Kaysville, UT',
    title: 'Senior Software Engineer',
    start: 'Aug 2022',
    end: 'Oct 2026',
    blurb: 'Enterprise timeshare and resort management platform used by 7–10 resort companies, including Vidanta and Hyatt, across hundreds of resorts.',
    highlights: [
      'Rebuilt the Room Matrix in about 2 months, cutting load times from 30–90 seconds to 1–10 seconds with a faster data API and lazy loading, across hundreds of resorts and thousands of rooms.',
      'Added drag-and-drop so staff assign reservations to rooms, move dates, and block rooms for maintenance directly on the board, replacing a version with recurring assignment and display bugs.',
      'Built key screens in the reservation booking flow, including room search, booking, and paying with usage or points, integrating closely with backend APIs.',
      'Implemented the modernized look and feel across much of the application as the UI team’s go-to engineer for design and styling.',
      'Early adopter of Claude Code; taught the UI team Claude Skills and helped set up its shared AI context.',
      'Reviewed code and ran releases for a ~7-person UI team (~15 engineers overall), in React, Redux, TypeScript, and Axios on a C# / .NET backend.',
    ],
    caseStudy: '/work/room-matrix',
  },
  {
    company: 'Readeo',
    url: 'https://readeo.com',
    location: 'Vineyard, UT',
    title: 'Engineering Team Lead',
    start: 'Dec 2020',
    end: 'May 2022',
    blurb: 'Video-chat reading app that lets families read children’s books together from anywhere.',
    highlights: [
      'Hired as engineering lead; led a team of 7 engineers, planning work, reviewing code, and unblocking.',
      'Ran sprints and task management in a product-manager role alongside engineering.',
      'Helped launch the Readeo app on the App Store and Google Play, built with React, Redux, and Node.js.',
    ],
    caseStudy: '/work/readeo',
  },
  {
    company: 'Principal Financial Group',
    url: 'https://principal.com',
    location: 'Des Moines, IA',
    title: 'Software Engineer',
    start: 'Aug 2019',
    end: 'Dec 2020',
    blurb: 'Fortune 250 investment and retirement company.',
    highlights: [
      'Helped build the design library used across the entire company.',
      'Shipped updates to principal.com, the company’s public-facing site.',
      'Contributed to open-source Drupal 8 plugins.',
    ],
  },
  {
    company: 'RetailMeNot · Rx Saver',
    location: 'Austin, TX',
    title: 'Software Engineer',
    start: 'Mar 2018',
    end: 'May 2019',
    blurb: 'Prescription price-comparison tool, later acquired by GoodRx.',
    highlights: [
      'Helped migrate the frontend from Angular to React/Redux.',
      'Raised frontend unit-test coverage by 40%.',
      'Assisted the backend migration from .NET to Java/Spring.',
    ],
    caseStudy: '/work/rx-saver',
  },
  {
    company: 'LowestMed',
    location: 'Draper, UT',
    title: 'Full-Stack Engineer',
    start: 'Jul 2016',
    end: 'Mar 2018',
    blurb: 'Prescription discount startup, acquired by RetailMeNot in 2018.',
    highlights: [
      'One of five initial employees; helped grow monthly transactions from 7,000 to 50,000+ through the acquisition by RetailMeNot.',
      'Built search-as-you-type drug lookup across brand and generic names, suggesting matches while users typed.',
      'Integrated with multiple affiliate APIs across frontend, backend, and database.',
    ],
    caseStudy: '/work/lowestmed',
  },
];

export const skills = {
  Frontend: ['React', 'TypeScript', 'Redux', 'Axios', 'Drag-and-drop & interactive UI', 'Performance & lazy loading', 'Design systems', 'CSS / Sass', 'Figma'],
  Backend: ['C# / .NET', 'Node.js', 'SQL Server / Postgres', 'REST APIs'],
  'Tools & AI': ['Claude Code & Claude Skills', 'Git', 'CI/CD', 'Docker', 'Azure / AWS', 'Jest'],
  Other: ['Team leadership', 'Code review & releases', 'Scrum / Agile', 'Fluent Spanish'],
};

export const education = [
  {
    school: 'Utah Valley University',
    location: 'Orem, UT',
    detail: 'Bachelor’s, Web Design & Development',
    year: '2018',
    note: 'Vice President, UVU Men’s Club Lacrosse',
  },
  {
    school: 'DevMountain',
    location: 'Provo, UT',
    detail: 'Web Development Immersive',
    year: '2016',
    note: 'Most Improved Student; Most Technical Group Project',
  },
];

export const now = {
  updated: 'November 2026',
  items: [
    'Looking for my next long-term role: senior frontend, full-stack, or AI engineering, ideally remote.',
    'Want to help shape the architecture and design decisions that make a product better.',
    'Going deeper on AI-assisted development with Claude Code and Claude Skills.',
    'Away from the keyboard: travel and action sports.',
  ],
};

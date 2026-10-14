// Single source of truth for the site and the printable /resume page.
// Anything marked TODO still needs real details before launch.

export const profile = {
  name: 'JT Porter',
  role: 'Senior Software Engineer',
  location: 'Utah',
  email: 'jtporter9@gmail.com',
  github: 'https://github.com/jtporter9',
  linkedin: 'https://linkedin.com/in/jtporter9',
  tagline: 'I build software that makes a difference — and help teams ship it.',
  summary:
    'Senior full-stack engineer with 10 years across early-stage startups, a Fortune 250, ' +
    'and enterprise SaaS. I build complex, interactive React interfaces on .NET backends, ' +
    'led a team of 7 to ship a consumer app, and was one of the first five employees at a ' +
    'startup that grew 7x and was acquired.',
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
  todo?: boolean;
};

export const experience: Job[] = [
  {
    company: 'TimeShareWare',
    location: 'Kaysville, UT',
    title: 'Senior Software Engineer',
    start: 'Aug 2022',
    end: 'Present',
    blurb: 'Enterprise timeshare management platform used by large resort operators such as Vidanta.',
    highlights: [
      'Led the rebuild and redesign of the Room Matrix, a highly interactive drag-and-drop tool for managing resort room assignments.',
      'Build complex, performance-sensitive UI in React/Redux and Axios on a C# / .NET backend.',
      'Adopted Claude Code and AI-assisted development in day-to-day engineering work.',
      'Ship features and fix defects for enterprise clients; help build and maintain the shared design library.',
    ],
  },
  {
    company: 'Readeo',
    url: 'https://readeo.com',
    location: 'Vineyard, UT',
    title: 'Software Engineer · Team Lead · Product',
    start: 'Dec 2020',
    end: 'May 2022',
    blurb: 'Video-chat reading app that lets families read children’s books together from anywhere.',
    highlights: [
      'Led a team of 7 engineers — planning work, reviewing code, and unblocking.',
      'Helped launch the Readeo app on the App Store and Google Play.',
      'Acted as head of engineering for the company’s web and mobile products.',
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
      'Shipped updates to principal.com, the company’s public-facing site.',
      'Helped build a company-wide design library.',
      'Contributed to open-source Drupal 8 plugins.',
    ],
  },
  {
    company: 'RetailMeNot · Rx Saver',
    location: 'Austin, TX',
    title: 'Software Engineer',
    start: 'Mar 2018',
    end: 'May 2019',
    blurb: 'Prescription price-comparison tool helping people find the cheapest discount card near them.',
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
      'One of five initial employees; helped grow monthly transactions from 7,000 to 50,000+.',
      'Built autocorrecting search that dramatically improved results for users.',
      'Integrated with multiple affiliate APIs across frontend, backend, and database.',
      'Part of the team through the company’s acquisition by RetailMeNot.',
    ],
    caseStudy: '/work/lowestmed',
  },
];

export const skills = {
  Frontend: ['React', 'Redux', 'TypeScript / JavaScript', 'Axios', 'Drag-and-drop & interactive UI', 'Design systems', 'CSS / Sass'],
  Backend: ['C# / .NET', 'SQL', 'Node'],
  'Tools & AI': ['Claude Code / AI-assisted development', 'Git', 'Jest'],
  Other: ['Team leadership', 'Code review', 'Scrum / Agile', 'Fluent Spanish'],
};

export const education = [
  {
    school: 'Utah Valley University',
    location: 'Orem, UT',
    detail: 'B.S. Web Design & Development',
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
  updated: 'October 2026',
  items: [
    'Senior engineer at TimeShareWare, building the Room Matrix and other UI-heavy tools for resort operators.',
    'Leaning into AI-assisted development with Claude Code, and learning a lot.',
    'Rebuilding this site (you’re looking at it).',
    'TODO: something outside work — a hobby, a trip, a book.',
  ],
};

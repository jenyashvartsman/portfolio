const email = 'jenyashvartsman@gmail.com';
const linkedin = 'https://www.linkedin.com/in/jenya-shvartsman-b027a4100/';
const resume = '/Jenya_Shvartsman_Senior_Frontend_Developer_Resume.pdf';

export const site = {
  name: 'Jenya Shvartsman',
  title: 'Senior Frontend Developer (UI Platform & Architecture)',
  description:
    'Senior frontend developer with 10+ years of experience building and scaling SaaS UI platforms. Specialized in Angular, React, microfrontends, Nx monorepos, and long-lived frontend architecture.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/#contact' },
  ],
  cta: { label: 'Resume', href: resume },
  links: {
    linkedin,
    email: `mailto:${email}`,
  },
} as const;

export const hero = {
  eyebrow: 'Senior Frontend Developer (UI Platform & Architecture)',
  headline: 'I build scalable frontend platforms for complex SaaS products.',
  subHeadline:
    '10+ years owning UI architecture across long-lived applications—microfrontends (Single-SPA), Nx monorepos, shared UI libraries, and design systems. Focused on maintainability, cross-team impact, and product-driven decisions.',
  primaryCta: { label: 'View Projects', href: '/#projects' },
  secondaryCta: { label: 'Contact Me', href: '/#contact' },
} as const;

export const experience = {
  title: 'Experience',
  description:
    'Frontend roles centered on platform ownership, UI architecture, and building dependable interfaces for real, long-lived products.',
  roles: [
    {
      company: '1touch.io',
      companyUrl: 'https://www.1touch.io',
      roles: [
        {
          title: 'Senior Frontend Developer & Team Lead',
          period: 'Feb 2018 — Present',
          description:
            'Own the frontend platform and UI architecture across a suite of Angular-based SaaS products. Define shared standards for libraries, patterns, and microfrontend composition (Nx, Single-SPA) adopted across teams. Lead and mentor frontend engineers through design reviews and architectural decisions, while partnering closely with product and design to translate complex data-privacy and compliance workflows into clear, usable interfaces. Built a reusable demo environment used by sales and pre-sales teams for customer evaluations and proofs of concept.',
        },
      ],
    },
    {
      company: 'Amdocs',
      companyUrl: 'https://www.amdocs.com',
      roles: [
        {
          title: 'Frontend Developer',
          period: 'Feb 2016 — Jan 2018',
          description:
            'Developed frontend features for a large-scale enterprise e-commerce platform supporting mission-critical workflows. Built responsive, data-driven UIs integrated with Java (Spring) backend services and collaborated with distributed Agile teams to deliver reliable, production-grade software.',
        },
      ],
    },
    {
      company: 'Wild Solutions',
      companyUrl: 'https://wilds.co.il/',
      roles: [
        {
          title: 'Web Developer',
          period: 'Oct 2014 — Nov 2015',
          description:
            'Built responsive marketing websites and landing pages from design mockups, focusing on clean implementation, performance, and fast turnaround for client projects.',
        },
      ],
    },
  ],
} as const;

export const projects = {
  title: 'Projects',
  description:
    'Selected product work spanning enterprise SaaS platforms, internal tools, and client-facing applications.',
  projects: [
    {
      slug: 'kontxtual',
      title: 'Kontxtual',
      role: 'Senior Frontend Developer & Frontend Team Lead',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/kontxtual.jpg',
      description:
        'A cloud-native data intelligence platform for large-scale sensitive data discovery. Led and evolved complex Angular-based workflows that enable governance and privacy teams to classify data, assess exposure, and enforce compliance across enterprise environments, with a strong emphasis on clarity, performance, and scalability.',
    },
    {
      slug: 'inventa',
      title: 'Inventa',
      role: 'Senior Frontend Developer & Frontend Team Lead',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/inventa.png',
      description:
        'A data investigation and cataloging product that helps analysts search, understand, and validate sensitive information across diverse data sources. Led frontend development, defined reusable UI patterns, and guided the team in delivering a maintainable, analyst-friendly interface for complex compliance workflows.',
    },
    {
      slug: 'console-manager',
      title: 'Console Manager',
      role: 'Frontend Developer & Frontend Team Lead',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/cm.png',
      description:
        'A central management system for configuring data sources and governing how cataloged data flows across the 1touch platform. Designed and implemented frontend architecture supporting source onboarding, metadata management, and control over downstream data processing.',
    },
    {
      slug: 'first-product',
      title: '1touch.io – First Product',
      role: 'Frontend Developer',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/1touchio-first.jpeg',
      description:
        'The original data discovery and governance application that laid the foundation for later products such as Inventa and Kontxtual. Contributed to building the initial UI and core workflows, gaining early experience with large-scale data visibility and compliance-driven interfaces.',
    },
    {
      slug: 'amdocs',
      title: 'Amdocs',
      role: 'Frontend Developer',
      companyUrl: 'https://www.amdocs.com',
      image: '/images/projects/amdocs.jpg',
      description:
        'Contributed to large-scale customer experience and self-service platforms for Movistar operations in Peru and Chile. Built responsive, high-performance UIs and reusable components within complex enterprise telecom systems as part of a distributed Amdocs delivery team.',
    },
    {
      slug: 'wild-solutions',
      title: 'Wild Solutions',
      role: 'Frontend Developer',
      companyUrl: 'https://wilds.co.il',
      image: '/images/projects/wawa.jpg',
      description:
        'Delivered responsive, production-ready websites for client projects, translating design concepts into clean, maintainable frontend implementations with a focus on usability, performance, and fast turnaround.',
    },
  ],
} as const;

export const skills = {
  title: 'Skills',
  description:
    'Technologies, tools, and patterns I use to build scalable, maintainable frontend platforms and product UI.',
  skills: [
    {
      title: 'Frontend',
      items: [
        'TypeScript',
        'JavaScript (ES6+)',
        'Angular',
        'React',
        'RxJS',
        'NgRx',
        'HTML5',
        'CSS3',
        'SCSS / CSS Architecture',
        'Design Systems',
        'Shared UI Libraries',
        'Data-Driven UI (D3.js)',
        'Performance Optimization',
        'Internationalization (i18n)',
        'Frontend Monitoring & Error Tracking',
      ],
    },
    {
      title: 'Backend & Data',
      items: [
        'Node.js',
        'NestJS',
        'REST APIs',
        'PostgreSQL',
        'Java',
        'Spring',
        'Docker',
      ],
    },
    {
      title: 'Architecture & Quality',
      items: [
        'Frontend Platform Ownership',
        'Microfrontends (Single-SPA)',
        'Nx Monorepos',
        'Scalable SPA Architecture',
        'Modular UI Systems',
        'Automated Testing (Jest, Jasmine)',
        'Linting & Standards (ESLint)',
        'CI/CD Pipelines',
      ],
    },
    {
      title: 'Leadership & Collaboration',
      items: [
        'Frontend Team Leadership',
        'Mentoring & Coaching',
        'Technical Direction',
        'Architecture & Design Reviews',
        'Product & Design Partnership',
        'Agile Delivery',
        'Figma',
        'Jira',
        'Confluence',
        'GitHub / GitLab',
      ],
    },
  ],
} as const;

export const contact = {
  title: 'Get in touch',
  description: 'Feel free to reach out via email or LinkedIn.',
  items: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jenya-shvartsman',
      href: linkedin,
    },
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
  ],
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Jenya Shvartsman`,
  links: [
    {
      label: 'LinkedIn',
      href: linkedin,
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
    },
  ],
} as const;

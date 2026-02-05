import { title } from 'process';

export const site = {
  name: 'Jenya Shvartsman',
  title: 'Senior Frontend Developer',
  description:
    'Product-focused frontend engineer specializing in Angular, TypeScript, and scalable UI architecture.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/#contact' },
  ],
  cta: { label: 'Resume', href: '/resume.pdf' },
  links: {
    linkedin: 'https://www.linkedin.com/in/jenya-shvartsman/',
    email: 'mailto:jenya.shvartsman@gmail.com',
  },
} as const;

export const hero = {
  eyebrow: 'Senior Frontend Developer',
  headline: 'I build clean, scalable, product-focused web interfaces.',
  subHeadline:
    '8+ years of experience with Angular, TypeScript, and modern frontend architecture. Focused on performance, maintainability, and UX.',
  primaryCta: { label: 'View Projects', href: '/#projects' },
  secondaryCta: { label: 'Contact Me', href: '/#contact' },
} as const;

export const experience = {
  title: 'Experience',
  description:
    'Roles focused on frontend architecture, platform ownership, and building dependable UI for real products.',
  roles: [
    {
      company: '1touch.io',
      companyUrl: 'https://www.1touch.io',
      roles: [
        {
          title: 'Senior Frontend Developer & Team Lead',
          period: 'Feb 2018 — Present',
          description:
            'Own the frontend platform and UI architecture across a portfolio of Angular SaaS apps. I set shared standards (libraries, patterns, microfrontend composition) that multiple teams rely on, and I guide engineers through design reviews, technical direction, and code-quality expectations. I also partner with product/design to turn complex privacy/compliance workflows into interfaces that feel clear and usable, and I built a demo environment that supports sales and pre-sales evaluations.',
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
            'Built frontend features for a large enterprise e-commerce platform where reliability mattered. Worked on responsive, data-driven UIs integrated with Java (Spring) services, collaborating with distributed Agile teams to ship production-grade functionality.',
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
            'Delivered responsive marketing sites and landing pages from design mockups, focusing on clean implementation and fast turnaround for client work.',
        },
      ],
    },
  ],
} as const;

export const projects = {
  title: 'Projects',
  description:
    'A selection of product work across enterprise SaaS, platforms, and client-facing applications.',
  projects: [
    {
      slug: 'kontxtual',
      title: 'Kontxtual',
      role: 'Senior Frontend Developer & Frontend Team Lead',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/kontxtual.jpg',
      description:
        'A cloud-native data intelligence platform designed for large-scale sensitive data discovery. I worked on building and evolving complex Angular-based workflows that help governance and privacy teams classify data, validate exposure, and enforce compliance across enterprise environments, with a strong focus on clarity, performance, and scalability.',
    },
    {
      slug: 'inventa',
      title: 'Inventa',
      role: 'Senior Frontend Developer & Frontend Team Lead',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/inventa.png',
      description:
        'A data investigation and cataloging product that enables analysts to search, understand, and validate sensitive information across diverse data sources. I led frontend development efforts, shaping reusable UI patterns and guiding the team in delivering a maintainable, analyst-friendly interface for complex compliance workflows.',
    },
    {
      slug: 'console-manager',
      title: 'Console Manager',
      role: 'Frontend Developer & Frontend Team Lead',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/cm.png',
      description:
        'A central management system used to configure data sources and govern how cataloged data flows across the 1touch platform. I helped design and implement the frontend architecture that supports onboarding new sources, managing metadata, and controlling downstream data processing behavior.',
    },
    {
      slug: 'first-product',
      title: '1touch.io – First Product',
      role: 'Frontend Developer',
      companyUrl: 'https://www.1touch.io',
      image: '/images/projects/1touchio-first.jpeg',
      description:
        'The original data discovery and governance application that became the foundation for later products like Inventa and Kontxtual. I contributed to building the initial UI and core workflows, gaining early experience with large-scale data visibility and compliance-driven interfaces.',
    },
    {
      slug: 'amdocs',
      title: 'Amdocs',
      role: 'Frontend Developer',
      companyUrl: 'https://www.amdocs.com',
      image: '/images/projects/amdocs.jpg',
      description:
        'Worked on large-scale customer experience and self-service platforms for Movistar operations in Peru and Chile. Focused on building responsive, high-performance UI and reusable components within complex enterprise telecom systems, collaborating as part of a distributed Amdocs delivery team.',
    },
    {
      slug: 'wild-solutions',
      title: 'Wild Solutions',
      role: 'Frontend Developer',
      companyUrl: 'https://wilds.co.il',
      image: '/images/projects/wawa.jpg',
      description:
        'Delivered responsive, production-ready websites for client projects, translating design concepts into clean, maintainable frontend implementations. Worked closely with designers to ensure visual accuracy, usability, and fast turnaround.',
    },
  ],
} as const;

export const skills = {
  title: 'Skills',
  description:
    'The tools and patterns I use to ship maintainable, scalable product UI.',
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
        'SCSS/LESS',
        'Design Systems',
        'Shared UI Libraries',
        'D3.js',
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
        'Jest',
        'Jasmine',
        'ESLint',
        'CI/CD',
      ],
    },
    {
      title: 'Leadership & Collaboration',
      items: [
        'Frontend Team Leadership',
        'Mentoring',
        'Technical Direction',
        'Code Reviews',
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
  description: 'You can reach me directly via email or LinkedIn.',
  items: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jenya-shvartsman-b027a4100',
      href: 'https://linkedin.com/in/jenya-shvartsman-b027a4100',
    },
    {
      label: 'Email',
      value: 'jenyashvartsman@gmail.com',
      href: 'mailto:jenyashvartsman@gmail.com',
    },
  ],
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Jenya Shvartsman`,
  links: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jenya-shvartsman-b027a4100',
    },
    {
      label: 'Email',
      href: 'mailto:jenyashvartsman@gmail.com',
    },
  ],
} as const;

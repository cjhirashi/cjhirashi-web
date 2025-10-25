// Project constants

export const SITE_CONFIG = {
  name: 'cjhirashi',
  title: 'cjhirashi - Data Scientist & Developer',
  description:
    'Portfolio profesional, blog técnico y CMS con IA de Carlos Hirashi - Data Scientist & Developer',
  url: 'https://cjhirashi.com',
  author: {
    name: 'Carlos Hirashi',
    email: 'carlos@cjhirashi.com',
    twitter: '@cjhirashi',
    linkedin: 'cjhirashi',
    github: 'cjhirashi',
  },
  links: {
    github: 'https://github.com/cjhirashi',
    linkedin: 'https://linkedin.com/in/cjhirashi',
    email: 'mailto:carlos@cjhirashi.com',
  },
} as const

export const ROUTES = {
  public: {
    home: '/',
    blog: '/blog',
    projects: '/projects',
    contact: '/contact',
  },
  admin: {
    dashboard: '/admin',
    posts: '/admin/posts',
    projects: '/admin/projects',
    settings: '/admin/settings',
  },
  api: {
    auth: '/api/auth',
    posts: '/api/posts',
    projects: '/api/projects',
  },
} as const

export const PAGINATION = {
  postsPerPage: 10,
  projectsPerPage: 9,
} as const

export const BLOG_CATEGORIES = [
  'Data Science',
  'Machine Learning',
  'Web Development',
  'DevOps',
  'AI/LLMs',
  'Tutorial',
] as const

export const TECH_STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Prisma',
  'NextAuth',
  'Claude AI',
  'Vercel',
] as const

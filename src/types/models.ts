// Database model types
// These will be auto-generated from Prisma schema once we set it up

export interface User {
  id: string
  email: string
  name: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  published: boolean
  authorId: string
  createdAt: Date
  updatedAt: Date
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

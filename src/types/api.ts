// API request/response types

export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface CreatePostRequest {
  title: string
  content: string
  published?: boolean
}

export interface UpdatePostRequest extends Partial<CreatePostRequest> {
  id: string
}

export interface CreateProjectRequest {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

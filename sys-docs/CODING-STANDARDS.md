# Estándares de Código - cjhirashi.com

**Versión**: 1.0
**Última Actualización**: 2025-10-25
**Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v4

---

## Tabla de Contenidos

1. [TypeScript Standards](#typescript-standards)
2. [React/Next.js Standards](#reactnextjs-standards)
3. [Naming Conventions](#naming-conventions)
4. [Folder Structure](#folder-structure)
5. [Component Patterns](#component-patterns)
6. [API Routes Standards](#api-routes-standards)
7. [Error Handling](#error-handling)
8. [Tailwind CSS Conventions](#tailwind-css-conventions)
9. [Database Query Standards](#database-query-standards)
10. [Comments & Documentation](#comments--documentation)
11. [Git Commit Conventions](#git-commit-conventions)
12. [Testing Conventions](#testing-conventions)
13. [Performance Best Practices](#performance-best-practices)
14. [Security Guidelines](#security-guidelines)

---

## TypeScript Standards

### Configuración Strict

El proyecto usa TypeScript en modo **strict**. Esto significa que todos los archivos TypeScript deben cumplir con las siguientes reglas:

**tsconfig.json (configuración del proyecto)**:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

**Regla 1: NO usar `any`**

```typescript
// ❌ INCORRECTO - Evitar 'any'
const data: any = fetchData()
const name: any = user.profile

// ✅ CORRECTO - Usar tipos específicos
const data: UnknownObject = fetchData()
const name: string | undefined = user.profile?.name

// ✅ CORRECTO - Si realmente es desconocido, usar 'unknown'
const data: unknown = fetchData()
if (typeof data === 'string') {
  console.log(data.toUpperCase())
}
```

**Regla 2: Preferir `type` sobre `interface` para objetos simples**

```typescript
// ✅ CORRECTO - Para tipos simples usar 'type'
type UserProfile = {
  id: string
  name: string
  email: string
  createdAt: Date
}

type PostStatus = 'draft' | 'published' | 'archived'
type UUID = string & { readonly __brand: 'UUID' }

// ✅ CORRECTO - Para objetos que se extenderán usar 'interface'
interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

interface User extends BaseEntity {
  name: string
  email: string
}

// ❌ EVITAR - No mezclar 'interface' para tipos simples
interface UserProfile {
  id: string
  name: string
  email: string
}
```

**Regla 3: Type Narrowing**

```typescript
// ✅ CORRECTO - Usar type guards
function processData(data: string | number) {
  if (typeof data === 'string') {
    console.log(data.toUpperCase())  // TypeScript sabe que es string
  } else {
    console.log(data.toFixed(2))  // TypeScript sabe que es number
  }
}

// ✅ CORRECTO - Usar discriminated unions
type Result =
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error }

function handleResult(result: Result) {
  if (result.status === 'success') {
    console.log(result.data)  // TypeScript sabe que data existe
  } else {
    console.log(result.error)
  }
}
```

### Type Naming Conventions

```typescript
// ========== INTERFACES ==========
// Usar PascalCase, opcionalmente con "I" prefijo
interface User {
  id: string
  name: string
  email: string
}

interface IUser {
  id: string
  name: string
  email: string
}

// Para componentes de React
interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

// ========== TYPES ==========
// Usar PascalCase, sin prefijos
type Post = {
  id: string
  title: string
  content: string
  slug: string
}

// Union types
type PostStatus = 'draft' | 'published' | 'archived'

// Function types
type FetchFn = (url: string) => Promise<Response>

// Generic types
type ApiResponse<TData> = {
  status: 'success' | 'error'
  data?: TData
  error?: string
}

// ========== GENERICS ==========
// Usar letra mayúscula + palabra descriptiva
function map<TInput, TOutput>(
  items: TInput[],
  fn: (item: TInput) => TOutput
): TOutput[] {
  return items.map(fn)
}

function apiCall<TResponse>(
  endpoint: string
): Promise<TResponse> {
  return fetch(endpoint).then(r => r.json())
}

// ========== CONSTANTS ==========
// Usar UPPER_SNAKE_CASE para valores constantes
const DEFAULT_PAGE_SIZE = 20
const MAX_TITLE_LENGTH = 255
const API_BASE_URL = 'https://api.example.com'
```

### Imports Organization

El orden de imports debe seguir este patrón:

```typescript
// 1. React/Next.js imports
import { useState, useCallback } from 'react'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

// 2. External libraries (third-party)
import { format } from 'date-fns'
import clsx from 'clsx'

// 3. Internal components
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/layout'

// 4. Internal utilities and lib
import { cn } from '@/lib/utils'
import { db } from '@/lib/db'

// 5. Types
import type { Post, User } from '@/types'
import type { ApiResponse } from '@/types/api'

// 6. Styles (si es necesario)
import './styles.css'
```

### Non-null Assertions (Uso Limitado)

```typescript
// ❌ EVITAR - No-null assertion sin validación
const user = users.find(u => u.id === 'user-1')!

// ✅ CORRECTO - Validar primero
const user = users.find(u => u.id === 'user-1')
if (!user) {
  throw new Error('User not found')
}

// ✅ CORRECTO - Si realmente sabes que existe (raro)
const element = document.getElementById('main')!
// Justificado porque el elemento está en el HTML garantizado
```

---

## React/Next.js Standards

### Component Naming

**Archivos de componentes**: PascalCase
**Archivos de hooks/utilidades**: kebab-case

```typescript
// ✅ CORRECTO
// src/components/PostCard.tsx
// src/components/UserProfile.tsx
// src/hooks/use-auth.ts
// src/lib/db-client.ts

// ❌ INCORRECTO
// src/components/postCard.tsx
// src/hooks/useAuth.ts
// src/lib/dbClient.ts
```

### Component Structure

La estructura interna de un componente debe seguir este orden:

```typescript
'use client'  // Directiva si es necesaria

// 1. IMPORTS (orden específico)
import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Post } from '@/types'
import { cn } from '@/lib/utils'
import styles from './PostCard.module.css'  // Si aplica

// 2. TYPES/INTERFACES (específicas del componente)
interface PostCardProps {
  post: Post
  featured?: boolean
  onDelete?: (id: string) => void
  onEdit?: (id: string) => void
  className?: string
}

// 3. COMPONENT DEFINITION
export function PostCard({
  post,
  featured = false,
  onDelete,
  onEdit,
  className
}: PostCardProps) {
  // 3.1 State (hooks)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // 3.2 Event handlers
  const handleDelete = useCallback(async () => {
    setIsDeleting(true)
    try {
      await deletePost(post.id)
      onDelete?.(post.id)
    } finally {
      setIsDeleting(false)
    }
  }, [post.id, onDelete])

  // 3.3 Computed values
  const displayDate = new Date(post.createdAt).toLocaleDateString()

  // 3.4 Render
  return (
    <article
      className={cn(
        'rounded-lg border p-4',
        featured && 'border-blue-500 shadow-lg',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600">{displayDate}</p>
      {post.summary && <p>{post.summary}</p>}

      {isHovered && (
        <div className="mt-4 flex gap-2">
          <Button onClick={() => onEdit?.(post.id)}>Edit</Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      )}
    </article>
  )
}

// 4. EXPORTS
export default PostCard
```

### Server Components vs Client Components

**Regla fundamental**: Los componentes son Server Components por defecto en Next.js 13+.

```typescript
// ✅ SERVIDOR (por defecto - sin 'use client')
// Puede usar async/await, acceso directo a BD
import { db } from '@/lib/db'

export default async function PostsPage() {
  const posts = await db.post.findMany({
    select: { id: true, title: true, slug: true }
  })

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  )
}

// ✅ CLIENTE ('use client' al inicio)
// Para interactividad, hooks, event listeners
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function PostSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Post[]>([])

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value
    setQuery(q)

    if (q.length > 2) {
      const res = await fetch(`/api/posts/search?q=${q}`)
      const data = await res.json()
      setResults(data)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={handleSearch}
      />
      <div className="mt-4 space-y-2">
        {results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
```

### Hooks Conventions

**Naming**: `use` + PascalCase

```typescript
// ✅ CORRECTO - Nombres descriptivos
export function useAuth() {
  const [user, setUser] = useState(null)
  // ...
  return { user, isLoading, error, login, logout }
}

export function usePosts(page: number = 1) {
  const [posts, setPosts] = useState<Post[]>([])
  // ...
  return { posts, isLoading, error }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })
  // ...
  return [storedValue, setStoredValue] as const
}

// ✅ ARCHIVO: kebab-case con "use" prefijo
// hooks/use-auth.ts
// hooks/use-posts.ts
// hooks/use-local-storage.ts
```

### Props Destructuring

```typescript
// ✅ CORRECTO - Para componentes simples
export function Button({ variant, children, ...props }: ButtonProps) {
  return <button className={cn('btn', variant)} {...props}>{children}</button>
}

// ✅ CORRECTO - Para componentes complejos
interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  onAddToCart?: (id: string) => void
  featured?: boolean
  className?: string
}

export function ProductCard({
  id,
  name,
  price,
  image,
  onAddToCart,
  featured = false,
  className
}: ProductCardProps) {
  return (...)
}

// ❌ EVITAR - Props objeto sin destructuring (excepto casos especiales)
export function Card(props: CardProps) {
  return <div>{props.title}</div>
}
```

---

## Naming Conventions

### Variables y Constantes

```typescript
// ========== VARIABLES NORMALES ==========
// camelCase, nombre descriptivo
const userName = 'Charlie'
const postCount = 42
const isLoading = false
const userList = []
const clientData = {}

// ========== CONSTANTES ==========
// UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'
const MAX_FILE_SIZE = 10 * 1024 * 1024  // 10MB
const DEFAULT_PAGE_SIZE = 20
const REFRESH_INTERVAL_MS = 5000
const VALIDATION_RULES = { ... }

// ========== OBJETOS CONFIGURATION ==========
// camelCase con structure clara
const databaseConfig = {
  host: 'localhost',
  port: 5432,
  database: 'cjhirashi',
  ssl: true
}

const featureFlags = {
  enableNewUI: true,
  enableBeta: false
}
```

### Functions y Methods

```typescript
// ========== FUNCIONES NORMALES ==========
// camelCase, verbo + sustantivo
function fetchPosts() { ... }
function createUser(data: UserInput) { ... }
function validateEmail(email: string) { ... }
function calculateTotalPrice(items: CartItem[]) { ... }

// ========== EVENT HANDLERS ==========
// handle + Evento/Acción
const handleClick = () => { ... }
const handleSubmit = (e: FormEvent) => { ... }
const handleInputChange = (value: string) => { ... }
const handleImageUpload = (file: File) => { ... }

// ========== ASYNC FUNCTIONS ==========
// Usar 'async' keyword, mismo naming
async function fetchUserProfile(userId: string) { ... }
async function savePostDraft(post: PostInput) { ... }

// ========== COMPUTED VALUES ==========
// Pueden ser sustantivo puro (no necesita verbo)
const displayDate = new Date(post.createdAt).toLocaleDateString()
const totalPrice = items.reduce((sum, item) => sum + item.price, 0)
const isUserAdmin = user.roles.includes('admin')
```

### Boolean Variables

```typescript
// ========== BOOLEANS ==========
// Prefijos: is, has, should, can, will
const isLoading = true
const isVisible = false
const isAuthenticated = user !== null
const hasPermission = user.roles.includes('admin')
const shouldShowModal = isFirst && !seenBefore
const canEdit = isOwner || isAdmin
const willRedirect = statusCode === 301

// ❌ EVITAR - Nombres ambiguos para booleans
const loading = true  // ¿Es booleano? No está claro
const visible = false  // ¿Boolean? No se ve claro
const redirect = true  // ¿Boolean? Podría ser función
```

### Database Tables and Columns

```sql
-- ========== TABLAS ==========
-- Plural, snake_case, descriptivo
users
posts
projects
comments
post_tags
user_preferences

-- ========== COLUMNAS ==========
-- snake_case, descriptivo
user_id
post_id
created_at
updated_at
is_published
is_archived
deleted_at
email_verified

-- ========== TIPOS ==========
-- Valores que representan estados
status (draft, published, archived)
role (admin, moderator, user)
priority (low, medium, high)
```

### URL and Routing

```typescript
// ========== RUTAS ==========
// kebab-case en URLs
/blog/new-post                    // Correcta
/user/profile-settings            // Correcta
/admin/manage-users               // Correcta

/blog/NewPost                     // ❌ Evitar PascalCase
/user/profileSettings             // ❌ Evitar camelCase

// ========== ARCHIVOS DE RUTAS NEXT.JS ==========
// Estructura por feature/sección
app/
  (public)/
    blog/
      [slug]/
        page.tsx              // /blog/:slug
  admin/
    posts/
      page.tsx                // /admin/posts
      [id]/
        edit/
          page.tsx            // /admin/posts/:id/edit
```

---

## Folder Structure

La estructura de directorios debe ser clara, escalable y seguir este patrón:

```
src/
├── app/                           # Next.js App Router
│   ├── (public)/                  # Route group: rutas públicas
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Home page
│   │   ├── blog/
│   │   │   ├── page.tsx           # /blog
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx       # /blog/:slug
│   │   │   └── layout.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx           # /portfolio
│   │   │   └── [project]/
│   │   │       └── page.tsx       # /portfolio/:project
│   │   └── about/
│   │       └── page.tsx           # /about
│   │
│   ├── admin/                     # Route group: rutas protegidas
│   │   ├── layout.tsx
│   │   ├── posts/
│   │   │   ├── page.tsx           # /admin/posts
│   │   │   ├── new/
│   │   │   │   └── page.tsx       # /admin/posts/new
│   │   │   └── [id]/
│   │   │       ├── page.tsx       # /admin/posts/:id
│   │   │       └── edit/
│   │   │           └── page.tsx   # /admin/posts/:id/edit
│   │   └── settings/
│   │       └── page.tsx           # /admin/settings
│   │
│   └── api/                       # API Routes
│       ├── posts/
│       │   ├── route.ts           # GET /api/posts, POST
│       │   └── [id]/
│       │       └── route.ts       # GET/PUT/DELETE /api/posts/:id
│       ├── auth/
│       │   ├── route.ts
│       │   └── [action]/
│       │       └── route.ts
│       └── search/
│           └── route.ts
│
├── components/                    # Componentes React reutilizables
│   ├── ui/                        # Componentes base sin lógica
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   └── index.ts               # Re-export barrel
│   │
│   ├── layout/                    # Componentes de layout
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── layout.tsx
│   │
│   ├── blog/                      # Componentes específicos de feature
│   │   ├── post-card.tsx
│   │   ├── post-list.tsx
│   │   ├── post-form.tsx
│   │   └── index.ts
│   │
│   └── portfolio/
│       ├── project-card.tsx
│       ├── project-grid.tsx
│       └── index.ts
│
├── lib/                           # Utilidades, helpers, configuración
│   ├── utils.ts                   # Funciones de utilidad (cn, etc)
│   ├── constants.ts               # Constantes globales
│   ├── db.ts                      # Cliente de BD
│   ├── auth.ts                    # Configuración de auth
│   ├── api-client.ts              # Cliente HTTP
│   └── validators.ts              # Validadores de datos
│
├── hooks/                         # Custom React Hooks
│   ├── use-auth.ts
│   ├── use-posts.ts
│   ├── use-local-storage.ts
│   ├── use-fetch.ts
│   ├── use-debounce.ts
│   └── index.ts                   # Re-export barrel
│
├── types/                         # TypeScript types
│   ├── index.ts                   # Tipos globales
│   ├── models.ts                  # Models de BD
│   ├── api.ts                     # Tipos de API
│   ├── forms.ts                   # Tipos de formularios
│   └── [feature].ts               # Tipos específicos de feature
│
├── services/                      # Lógica de negocio
│   ├── post-service.ts            # Funciones para posts
│   ├── user-service.ts            # Funciones para usuarios
│   └── auth-service.ts            # Funciones de auth
│
├── styles/                        # Estilos globales
│   ├── globals.css
│   ├── colors.css
│   └── variables.css
│
└── middleware.ts                  # Middleware de Next.js

public/                            # Archivos estáticos
├── images/
│   ├── logo.svg
│   └── hero.jpg
└── fonts/
    └── custom.woff2

.eslintrc.json                     # Configuración ESLint
tailwind.config.js                 # Configuración Tailwind
tsconfig.json                      # Configuración TypeScript
```

### Reglas de Estructura

1. **Componentes sin props**: En `ui/`
2. **Componentes con lógica**: En carpeta de feature
3. **Utilidades puras**: En `lib/`
4. **Hooks reutilizables**: En `hooks/`
5. **Tipos compartidos**: En `types/`
6. **Servicios de negocio**: En `services/`

---

## Component Patterns

### Props Interface Definition

```typescript
// ========== COMPONENTES SIMPLES ==========
// Inline para componentes sin muchas props
export function Badge({
  variant = 'default',
  children
}: {
  variant?: 'default' | 'success' | 'error'
  children: React.ReactNode
}) {
  return <span className={cn('badge', variant)}>{children}</span>
}

// ========== COMPONENTES COMPLEJOS ==========
// Interface separada para muchas props
interface PostCardProps {
  post: Post
  featured?: boolean
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  onShare?: (id: string) => void
  className?: string
  loading?: boolean
}

export function PostCard(props: PostCardProps) {
  const {
    post,
    featured = false,
    onEdit,
    onDelete,
    onShare,
    className,
    loading = false
  } = props

  return (...)
}

// ========== COMPONENTES CON EXTENSIÓN ==========
// Extender HTML elements
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn('btn', variant, size)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
```

### Conditional Rendering Patterns

```typescript
// ========== SIMPLE TERNARIO ==========
// Para condiciones simples (2 opciones)
{isLoading ? <Spinner /> : <Content />}

// ========== LOGICAL AND ==========
// Para mostrar/no mostrar un elemento
{error && <Alert severity="error">{error}</Alert>}
{user && <UserGreeting name={user.name} />}

// ========== EARLY RETURN ==========
// Para lógica más compleja
if (isLoading) return <Spinner />
if (error) return <ErrorPage error={error} />
if (!data) return <EmptyState />

return <Content data={data} />

// ========== SWITCH STATEMENT ==========
// Para múltiples estados
switch (status) {
  case 'loading':
    return <Spinner />
  case 'error':
    return <ErrorPage error={error} />
  case 'empty':
    return <EmptyState />
  case 'success':
    return <DataList items={data} />
  default:
    return null
}

// ========== CONDITIONAL CLASS NAMES ==========
// Usar 'cn' utility (clsx + tailwind-merge)
<div className={cn(
  'base-classes p-4',
  variant === 'primary' && 'bg-blue-500 text-white',
  variant === 'secondary' && 'bg-gray-200 text-black',
  disabled && 'opacity-50 cursor-not-allowed',
  className  // Props class override
)}>
  Content
</div>
```

### Container Component Pattern

Para separar lógica de presentación:

```typescript
// ❌ EVITAR - Lógica mezclada con presentación
export function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false))
  }, [userId])

  if (loading) return <Spinner />
  if (!user) return <div>User not found</div>

  return (
    <div className="p-6 bg-gray-50">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* ... más presentación ... */}
    </div>
  )
}

// ✅ CORRECTO - Separar en container + presentational
// Container (con lógica)
interface UserProfileContainerProps {
  userId: string
}

function UserProfileContainer({ userId }: UserProfileContainerProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false))
  }, [userId])

  if (loading) return <Spinner />
  if (!user) return <div>User not found</div>

  return <UserProfileDisplay user={user} />
}

// Presentacional (sin lógica)
interface UserProfileDisplayProps {
  user: User
}

function UserProfileDisplay({ user }: UserProfileDisplayProps) {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
}

// Exportar container como default
export default UserProfileContainer
```

---

## API Routes Standards

### File Structure

```
app/api/
├── posts/
│   ├── route.ts                    # GET, POST /api/posts
│   └── [id]/
│       └── route.ts                # GET, PUT, DELETE /api/posts/:id
├── auth/
│   ├── route.ts
│   ├── login/
│   │   └── route.ts                # POST /api/auth/login
│   └── logout/
│       └── route.ts                # POST /api/auth/logout
└── search/
    └── route.ts                    # GET /api/search?q=...
```

### Handler Functions

```typescript
// ========== BASIC STRUCTURE ==========
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import type { Post, ApiResponse } from '@/types'

// GET /api/posts
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page') || '1'
    const limit = searchParams.get('limit') || '20'

    const posts = await db.post.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      select: {
        id: true,
        title: true,
        slug: true,
        summary: true,
        publishedAt: true
      },
      orderBy: { publishedAt: 'desc' }
    })

    return NextResponse.json<ApiResponse<Post[]>>({
      status: 'success',
      data: posts
    })
  } catch (error) {
    console.error('[GET /api/posts]', error)
    return NextResponse.json<ApiResponse<null>>(
      { status: 'error', error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST /api/posts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar
    if (!body.title || !body.content) {
      return NextResponse.json<ApiResponse<null>>(
        { status: 'error', error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        slug: body.slug,
        authorId: body.authorId
      }
    })

    return NextResponse.json<ApiResponse<Post>>(
      { status: 'success', data: post },
      { status: 201 }
    )
  } catch (error) {
    console.error('[POST /api/posts]', error)
    return NextResponse.json<ApiResponse<null>>(
      { status: 'error', error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

// ========== DYNAMIC ROUTES ==========
// app/api/posts/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await db.post.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: { name: true, email: true }
        }
      }
    })

    if (!post) {
      return NextResponse.json<ApiResponse<null>>(
        { status: 'error', error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json<ApiResponse<Post>>({
      status: 'success',
      data: post
    })
  } catch (error) {
    console.error('[GET /api/posts/:id]', error)
    return NextResponse.json<ApiResponse<null>>(
      { status: 'error', error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    const post = await db.post.update({
      where: { id: params.id },
      data: {
        title: body.title,
        content: body.content,
        slug: body.slug,
        updatedAt: new Date()
      }
    })

    return NextResponse.json<ApiResponse<Post>>({
      status: 'success',
      data: post
    })
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return NextResponse.json<ApiResponse<null>>(
        { status: 'error', error: 'Post not found' },
        { status: 404 }
      )
    }
    return NextResponse.json<ApiResponse<null>>(
      { status: 'error', error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db.post.delete({
      where: { id: params.id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return NextResponse.json<ApiResponse<null>>(
        { status: 'error', error: 'Post not found' },
        { status: 404 }
      )
    }
    return NextResponse.json<ApiResponse<null>>(
      { status: 'error', error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
```

### API Response Types

```typescript
// types/api.ts
export type ApiResponse<TData> = {
  status: 'success' | 'error'
  data?: TData
  error?: string
  message?: string
}

export type PaginatedResponse<TData> = ApiResponse<TData> & {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export type ApiError = {
  code: string
  message: string
  details?: Record<string, any>
}
```

---

## Error Handling

### Try-Catch Pattern

```typescript
// ========== BÁSICO ==========
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('Failed to complete operation')
}

// ========== CON TYPE GUARDS ==========
try {
  const result = await fetchData()
  return result
} catch (error) {
  if (error instanceof TypeError) {
    // Manejo específico para TypeError
    console.error('Type error:', error.message)
    return null
  }

  if (error instanceof NetworkError) {
    // Manejo específico para NetworkError
    console.error('Network error:', error)
    throw new Error('Network connection failed')
  }

  // Manejo genérico
  console.error('Unknown error:', error)
  throw new Error('An unexpected error occurred')
}

// ========== CON FINALLY ==========
let resource: Resource | null = null
try {
  resource = await acquireResource()
  return processResource(resource)
} catch (error) {
  console.error('Processing failed:', error)
  throw error
} finally {
  // Siempre ejecuta, incluso si hay error
  if (resource) {
    await resource.cleanup()
  }
}
```

### Custom Error Classes

```typescript
// lib/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code: string = 'INTERNAL_ERROR'
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export class ValidationError extends AppError {
  constructor(message: string, public field?: string) {
    super(message, 400, 'VALIDATION_ERROR')
    this.name = 'ValidationError'
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, 'NOT_FOUND')
    this.name = 'NotFoundError'
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED')
    this.name = 'UnauthorizedError'
  }
}

// ========== USO ==========
async function getPost(id: string) {
  const post = await db.post.findUnique({ where: { id } })

  if (!post) {
    throw new NotFoundError('Post')
  }

  return post
}

// En API routes
try {
  const post = await getPost(id)
  return NextResponse.json(post)
} catch (error) {
  if (error instanceof AppError) {
    return NextResponse.json(
      { error: error.message, code: error.code },
      { status: error.statusCode }
    )
  }
  // Error desconocido
  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
}
```

### Async/Await Error Handling

```typescript
// ========== SIMPLE AWAIT ==========
async function fetchUser(id: string) {
  try {
    const response = await fetch(`/api/users/${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw error
  }
}

// ========== CON VALIDACIÓN ==========
async function validateAndSavePost(data: unknown) {
  try {
    // Validar
    const validated = PostSchema.parse(data)

    // Guardar
    const saved = await db.post.create({ data: validated })

    return saved
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ValidationError(error.message, error.errors[0]?.path[0] as string)
    }
    throw error
  }
}
```

---

## Tailwind CSS Conventions

### Class Organization

Usar el plugin Prettier para ordenar clases automáticamente. El orden es:

1. Layout (display, position, flex)
2. Spacing (margin, padding)
3. Size (width, height)
4. Colors (background, text, border)
5. Typography (font, text-align)
6. Visual (shadow, opacity, border-radius)
7. Animations/Effects
8. State/Hover

```tsx
// ========== EJEMPLO COMPLETO ==========
<div className="
  flex items-center justify-between
  gap-4
  p-4 px-6
  w-full max-w-2xl
  bg-white text-gray-900
  rounded-lg border border-gray-200
  shadow-md
  hover:shadow-lg
  transition-shadow duration-200
">
  Content
</div>

// ========== COMPONENTE CON VARIANTES ==========
<button className="
  inline-flex items-center justify-center
  px-4 py-2
  font-medium text-sm
  rounded-md
  transition-colors
  bg-blue-600 text-white
  hover:bg-blue-700
  active:bg-blue-800
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Click me
</button>
```

### Using the `cn` Utility

Crear archivo `lib/utils.ts`:

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Uso en componentes:

```typescript
// ========== VARIANTES CON CN ==========
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        'inline-flex items-center justify-center font-medium rounded-md transition-colors',
        // Tamaños
        size === 'sm' && 'px-3 py-1 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        // Variantes
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        variant === 'ghost' && 'text-gray-900 hover:bg-gray-100',
        // Props override
        className
      )}
      {...props}
    />
  )
}

// ========== USO ==========
<Button variant="primary" size="lg" className="w-full">
  Save Post
</Button>

<Button variant="secondary" disabled>
  Saving...
</Button>
```

### Responsive Design

```tsx
// ========== MOBILE-FIRST ==========
<div className="
  // Mobile (default)
  flex flex-col gap-4 px-4 py-6

  // Tablet
  sm:grid sm:grid-cols-2 sm:gap-6

  // Desktop
  md:grid-cols-3 md:gap-8 md:px-8

  // Large screens
  lg:grid-cols-4 lg:max-w-6xl lg:mx-auto
">
  {/* Cards */}
</div>

// ========== COMPONENTE RESPONSIVE ==========
interface ResponsiveGridProps {
  children: React.ReactNode
  columns?: {
    default: number
    sm?: number
    md?: number
    lg?: number
  }
}

export function ResponsiveGrid({
  children,
  columns = { default: 1, sm: 2, md: 3, lg: 4 }
}: ResponsiveGridProps) {
  return (
    <div className={cn(
      'grid gap-6',
      `grid-cols-${columns.default}`,
      columns.sm && `sm:grid-cols-${columns.sm}`,
      columns.md && `md:grid-cols-${columns.md}`,
      columns.lg && `lg:grid-cols-${columns.lg}`
    )}>
      {children}
    </div>
  )
}
```

### Dark Mode

```tsx
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}

// ========== USO EN COMPONENTES ==========
<div className="
  bg-white text-gray-900
  dark:bg-gray-900 dark:text-white

  border-gray-200
  dark:border-gray-800
">
  Content adapts to dark mode
</div>
```

---

## Database Query Standards

### Query Naming Conventions

```typescript
// lib/db-queries.ts

// ========== GET (una entidad) ==========
export async function getPost(id: string) {
  return await db.post.findUnique({
    where: { id },
    select: postSelect
  })
}

export async function getUser(id: string) {
  return await db.user.findUnique({
    where: { id },
    select: userSelect
  })
}

// ========== FIND (con filtros) ==========
export async function findPostBySlug(slug: string) {
  return await db.post.findUnique({
    where: { slug },
    select: postSelect
  })
}

export async function findUserByEmail(email: string) {
  return await db.user.findUnique({
    where: { email },
    select: userSelect
  })
}

// ========== FIND MANY (listados) ==========
export async function findPublishedPosts(
  page: number = 1,
  limit: number = 20
) {
  const skip = (page - 1) * limit

  return await db.post.findMany({
    where: { isPublished: true },
    select: postSelect,
    orderBy: { publishedAt: 'desc' },
    skip,
    take: limit
  })
}

export async function findPostsByAuthor(authorId: string) {
  return await db.post.findMany({
    where: { authorId },
    select: postSelect,
    orderBy: { createdAt: 'desc' }
  })
}

// ========== CREATE ==========
export async function createPost(data: PostInput) {
  return await db.post.create({
    data: {
      title: data.title,
      content: data.content,
      slug: data.slug,
      authorId: data.authorId,
      isPublished: false,
      createdAt: new Date()
    },
    select: postSelect
  })
}

// ========== UPDATE ==========
export async function updatePost(id: string, data: PostUpdate) {
  return await db.post.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date()
    },
    select: postSelect
  })
}

// ========== DELETE ==========
export async function deletePost(id: string) {
  return await db.post.delete({
    where: { id },
    select: { id: true }
  })
}

// ========== CUSTOM QUERIES ==========
export async function getPostsWithStats(limit: number = 10) {
  return await db.post.findMany({
    where: { isPublished: true },
    select: {
      ...postSelect,
      _count: {
        select: {
          comments: true,
          likes: true
        }
      }
    },
    orderBy: { publishedAt: 'desc' },
    take: limit
  })
}
```

### Select Optimization

**SIEMPRE usar `select` para especificar campos:**

```typescript
// ❌ INCORRECTO - Obtiene todos los campos
const posts = await db.post.findMany()

// ✅ CORRECTO - Solo campos necesarios
const posts = await db.post.findMany({
  select: {
    id: true,
    title: true,
    slug: true,
    summary: true,
    publishedAt: true,
    author: {
      select: {
        name: true,
        avatar: true
      }
    }
  }
})

// ========== REUTILIZABLE CON CONSTANTES ==========
const postSelect = {
  id: true,
  title: true,
  content: true,
  slug: true,
  summary: true,
  publishedAt: true,
  author: {
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true
    }
  },
  _count: {
    select: {
      comments: true
    }
  }
} as const

const posts = await db.post.findMany({
  select: postSelect,
  orderBy: { publishedAt: 'desc' }
})
```

### Where Clauses

```typescript
// ========== FILTROS SIMPLES ==========
const draft = await db.post.findMany({
  where: { isPublished: false },
  select: postSelect
})

// ========== FILTROS COMPLEJOS ==========
const results = await db.post.findMany({
  where: {
    AND: [
      { isPublished: true },
      {
        OR: [
          { title: { contains: 'next.js', mode: 'insensitive' } },
          { content: { contains: 'typescript', mode: 'insensitive' } }
        ]
      },
      { publishedAt: { gte: new Date('2025-01-01') } }
    ]
  },
  select: postSelect
})

// ========== SEARCH ==========
export async function searchPosts(query: string) {
  return await db.post.findMany({
    where: {
      AND: [
        { isPublished: true },
        {
          OR: [
            { title: { search: query } },
            { content: { search: query } },
            { summary: { search: query } }
          ]
        }
      ]
    },
    select: postSelect,
    orderBy: { _relevance: { fields: ['title'], search: query, sort: 'desc' } }
  })
}
```

### Pagination

```typescript
// ========== HELPER FUNCTION ==========
interface PaginationParams {
  page?: number | string
  limit?: number | string
}

export function getPaginationParams(params: PaginationParams) {
  const page = Math.max(1, parseInt(String(params.page || 1)))
  const limit = Math.max(1, Math.min(100, parseInt(String(params.limit || 20))))
  const skip = (page - 1) * limit

  return { page, limit, skip }
}

// ========== USO EN API ROUTE ==========
export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page')
  const limit = request.nextUrl.searchParams.get('limit')

  const { page: p, limit: l, skip } = getPaginationParams({ page, limit })

  const [items, total] = await Promise.all([
    db.post.findMany({
      select: postSelect,
      skip,
      take: l,
      orderBy: { createdAt: 'desc' }
    }),
    db.post.count()
  ])

  return NextResponse.json({
    items,
    pagination: {
      page: p,
      limit: l,
      total,
      pages: Math.ceil(total / l)
    }
  })
}
```

---

## Comments & Documentation

### JSDoc for Public Functions

```typescript
/**
 * Fetches published posts with pagination support
 *
 * @param page - Page number (1-indexed, default: 1)
 * @param limit - Posts per page (default: 20, max: 100)
 * @returns Promise containing array of posts
 * @throws Error if database query fails
 *
 * @example
 * ```ts
 * const posts = await getPublishedPosts(1, 20)
 * ```
 */
export async function getPublishedPosts(
  page: number = 1,
  limit: number = 20
): Promise<Post[]> {
  const { skip } = getPaginationParams({ page, limit })

  return await db.post.findMany({
    where: { isPublished: true },
    select: postSelect,
    skip,
    take: limit,
    orderBy: { publishedAt: 'desc' }
  })
}

/**
 * Component for displaying a single blog post
 *
 * @param props - Component props
 * @param props.post - The post to display
 * @param props.onDelete - Optional callback when post is deleted
 * @param props.className - Additional CSS classes
 *
 * @example
 * ```tsx
 * <PostCard
 *   post={post}
 *   onDelete={(id) => console.log('Deleted:', id)}
 * />
 * ```
 */
interface PostCardProps {
  post: Post
  onDelete?: (id: string) => void
  className?: string
}

export function PostCard(props: PostCardProps) {
  // ...
}
```

### Inline Comments

Solo usar comentarios inline para lógica NO-obvia:

```typescript
// ✅ BUENO - Explica el "por qué"
// Calculate reading time assuming 200 words per minute average
const readingTime = Math.ceil(wordCount / 200)

// ❌ MALO - Redundante, el código es obvio
// Initialize loading state
const [isLoading, setIsLoading] = useState(false)

// ✅ BUENO - Documenta una decisión de diseño
// Store password hash instead of plaintext for security
const hashedPassword = await hashPassword(password)

// ✅ BUENO - Marca puntos de atención
// TODO: Implement caching to improve performance
// FIXME: Edge case when user has no posts
// HACK: Temporary workaround for Prisma quirk
// NOTE: This must be called before database initialization
```

### Component Documentation

```typescript
/**
 * Button Component
 *
 * A flexible button component with multiple variants and sizes
 *
 * Features:
 * - Multiple color variants (primary, secondary, ghost, destructive)
 * - Size options (sm, md, lg)
 * - Loading state with spinner
 * - Full accessibility with aria labels
 * - Responsive design with Tailwind
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" loading={isSubmitting}>
 *   Save Changes
 * </Button>
 * ```
 */
export function Button({ variant, size, loading, children, ...props }: ButtonProps) {
  // Implementation
}
```

---

## Git Commit Conventions

### Commit Message Format

**Formato**: `type(scope): subject`

```
type: tipo de cambio
scope: sección/módulo afectado
subject: descripción breve del cambio
```

### Types

```
feat     - Nueva feature o funcionalidad
fix      - Bug fix
docs     - Cambios en documentación
style    - Cambios de formato (espacios, indentación, etc)
refactor - Refactorización de código (sin cambios funcionales)
perf     - Mejoras de performance
test     - Tests o test fixes
chore    - Cambios en build, config, dependencias
ci       - Cambios en CI/CD
revert   - Revert de commit anterior
```

### Commit Examples

```bash
# Feature nueva
git commit -m "feat(blog): add markdown rendering with syntax highlighting"

# Bug fix
git commit -m "fix(auth): resolve session expiration in protected routes"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactoring
git commit -m "refactor(api): simplify posts endpoint logic and reduce duplicated code"

# Performance
git commit -m "perf(db): add index on published_at column"

# Testing
git commit -m "test(components): add unit tests for Button component"

# Multiple líneas
git commit -m "feat(search): implement full-text search for posts

- Add search API endpoint
- Create SearchBox component
- Integrate with Algolia
- Add keyboard shortcuts (Cmd+K)

Closes #123"

# Styling/Formatting
git commit -m "style(components): update Tailwind classes formatting"

# Dependencies
git commit -m "chore(deps): upgrade React to 19.1.0 and Next.js to 15.5.5"
```

### Commit Body Guidelines

Para commits complejos, usar cuerpo descriptivo:

```bash
feat(admin): add user role management system

Add ability for admins to assign and manage user roles.
Implement role-based access control (RBAC) for protected routes.

- Create Role model in database
- Add role selection dropdown in user settings
- Implement middleware for role validation
- Add admin dashboard for bulk role management

Breaking Changes:
- Users created before this commit have no role assigned

Fixes #456
Related to #789
```

---

## Testing Conventions

### File Structure

```
src/
├── components/
│   ├── Button.tsx
│   └── __tests__/
│       └── Button.test.tsx
├── lib/
│   ├── utils.ts
│   └── __tests__/
│       └── utils.test.ts
└── hooks/
    ├── use-auth.ts
    └── __tests__/
        └── use-auth.test.tsx
```

### Test Structure

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/Button'

describe('Button Component', () => {
  // ========== RENDER ==========
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  // ========== PROPS ==========
  it('renders with primary variant', () => {
    render(<Button variant="primary">Save</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-blue-600')
  })

  // ========== INTERACTIONS ==========
  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // ========== LOADING STATE ==========
  it('is disabled when loading', () => {
    render(<Button loading>Save</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  // ========== EDGE CASES ==========
  it('handles undefined children gracefully', () => {
    const { container } = render(<Button>{undefined}</Button>)
    expect(container).toBeInTheDocument()
  })

  // ========== ACCESSIBILITY ==========
  it('has proper aria labels', () => {
    render(<Button aria-label="Delete item">Delete</Button>)
    expect(screen.getByLabelText('Delete item')).toBeInTheDocument()
  })
})
```

### Unit Test Example

```typescript
// lib/__tests__/utils.test.ts
import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')  // Tailwind merge
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active')
  })

  it('filters out falsy values', () => {
    expect(cn('px-2', undefined, null, '', 'py-4')).toBe('px-2 py-4')
  })

  it('merges conflicting Tailwind utilities', () => {
    expect(cn('w-full', 'w-1/2')).toBe('w-1/2')
  })
})
```

### Hook Test Example

```typescript
// hooks/__tests__/use-auth.test.tsx
import { renderHook, act, waitFor } from '@testing-library/react'
import { useAuth } from '@/hooks/use-auth'

describe('useAuth hook', () => {
  it('initializes with loading state', () => {
    const { result } = renderHook(() => useAuth())
    expect(result.current.isLoading).toBe(true)
  })

  it('loads user after mount', async () => {
    const { result } = renderHook(() => useAuth())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.user).toBeDefined()
  })

  it('handles login correctly', async () => {
    const { result } = renderHook(() => useAuth())

    await act(async () => {
      await result.current.login('user@example.com', 'password')
    })

    expect(result.current.user).toBeDefined()
    expect(result.current.isAuthenticated).toBe(true)
  })

  it('clears user on logout', async () => {
    const { result } = renderHook(() => useAuth())

    // Esperar a que cargue el usuario
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    // Hacer logout
    await act(async () => {
      await result.current.logout()
    })

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
  })
})
```

### Mock Examples

```typescript
// Mockear módulos
jest.mock('@/lib/db', () => ({
  db: {
    post: {
      findMany: jest.fn()
    }
  }
}))

// Mockear funciones externas
const mockFetch = jest.fn()
global.fetch = mockFetch

// Usar en test
it('fetches data correctly', async () => {
  mockFetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ id: 1, title: 'Post' })
  })

  // Test code
})
```

---

## Performance Best Practices

### Image Optimization

```typescript
// ✅ CORRECTO - Usar Next.js Image
import Image from 'next/image'

export function PostCover({ src, title }: { src: string; title: string }) {
  return (
    <Image
      src={src}
      alt={title}
      width={400}
      height={300}
      priority={false}
      quality={80}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

// ❌ EVITAR - img nativo (sin optimización)
<img src={imageUrl} alt="Title" />
```

### Code Splitting

```typescript
// ✅ CORRECTO - Dynamic import para reducir bundle
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor'), {
  loading: () => <p>Loading editor...</p>,
  ssr: false  // Si el componente no funciona en SSR
})

export function AdminPage() {
  return (
    <div>
      <h1>Edit Post</h1>
      <Editor />
    </div>
  )
}
```

### Memoization

```typescript
// ✅ CORRECTO - Memoizar componentes que reciben props
import { memo } from 'react'

interface PostItemProps {
  post: Post
  onClick: (id: string) => void
}

export const PostItem = memo(function PostItem({ post, onClick }: PostItemProps) {
  return <div onClick={() => onClick(post.id)}>{post.title}</div>
}, (prevProps, nextProps) => {
  // Return true if props are equal (skip re-render)
  return prevProps.post.id === nextProps.post.id
})

// ✅ CORRECTO - useCallback para funciones estables
import { useCallback } from 'react'

export function PostList({ posts }: { posts: Post[] }) {
  const handleItemClick = useCallback((id: string) => {
    console.log('Clicked:', id)
  }, [])

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} onClick={handleItemClick} />
      ))}
    </div>
  )
}
```

---

## Security Guidelines

### Environment Variables

```bash
# .env.local (NUNCA commitear)
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:password@localhost/db
NEXTAUTH_SECRET=generated-secret-key-here
```

```typescript
// ✅ CORRECTO - Acceder a env vars
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const dbUrl = process.env.DATABASE_URL

// ❌ INCORRECTO - Exponer secrets en cliente
const secret = process.env.NEXTAUTH_SECRET  // No enviar al cliente
```

### SQL Injection Prevention

```typescript
// ❌ INCORRECTO - SQL concatenation
const posts = await db.post.findMany({
  where: {
    title: { contains: userInput }  // ❌ SQL injection risk
  }
})

// ✅ CORRECTO - Usar Prisma queries
const posts = await db.post.findMany({
  where: {
    title: { contains: userInput, mode: 'insensitive' }  // ✅ Parametrized
  }
})
```

### XSS Prevention

```typescript
// ❌ INCORRECTO - HTML directo
<div dangerHTML={{__html: userContent}} />

// ✅ CORRECTO - Sanitizar contenido
import DOMPurify from 'isomorphic-dompurify'

const sanitized = DOMPurify.sanitize(userContent)
<div dangerouslySetInnerHTML={{ __html: sanitized }} />

// ✅ MEJOR - No usar dangerouslySetInnerHTML
<div>{userContent}</div>  // React escapa automáticamente
```

### CSRF Protection

```typescript
// ✅ Usar NextAuth para CSRF protection automática
// NextAuth maneja CSRF tokens automáticamente en formularios
```

### API Security

```typescript
// ✅ CORRECTO - Validar requests
import { z } from 'zod'

const postSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/)
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = postSchema.parse(body)

    // Procesar datos validados
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// ✅ CORRECTO - Rate limiting
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1h')  // 10 requests per hour
})

export async function POST(request: NextRequest) {
  const ip = request.ip || 'unknown'
  const result = await ratelimit.limit(ip)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': result.resetAfter } }
    )
  }

  // Procesar request
}
```

---

## Summary & Checklist

Antes de hacer commit, verifica:

- [ ] **TypeScript**: Strict mode, sin `any`, tipos descriptivos
- [ ] **React**: Server/Client components correctos, props tipadas
- [ ] **Naming**: camelCase variables, UPPER_SNAKE_CASE constants, PascalCase components
- [ ] **Imports**: Orden correcta, paths absolutos (@/)
- [ ] **Components**: Estructura clara, props interface, sin lógica innecesaria
- [ ] **API Routes**: Handlers nombrados correctamente, error handling
- [ ] **Tailwind**: Clases organizadas con `cn` utility
- [ ] **Database**: Select específico, queries nombradas correctamente
- [ ] **Comments**: JSDoc para funciones públicas, inline solo si no-obvio
- [ ] **Git**: Commits con formato `type(scope): message`
- [ ] **Tests**: Tests para funciones públicas y componentes críticos
- [ ] **Security**: Variables de entorno seguras, input validation

---

**Versión**: 1.0
**Última Actualización**: 2025-10-25
**Autor**: Documentación de Equipos
**Próxima Revisión**: 2026-01-25

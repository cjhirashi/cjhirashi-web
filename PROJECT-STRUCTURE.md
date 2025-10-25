# Project Structure - cjhirashi-web

Estructura de carpetas del proyecto cjhirashi.com (Portfolio/Blog/CMS).

## Stack Tecnológico

- **Framework**: Next.js 15.5.5 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x (strict mode)
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint 9.x + Prettier
- **Database**: PostgreSQL + Prisma (pendiente configuración)
- **Auth**: NextAuth.js (pendiente configuración)
- **AI**: Claude AI / OpenAI (pendiente configuración)

## Estructura de Carpetas

```
cjhirashi-web/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (public)/                # Grupo de rutas públicas
│   │   │   ├── layout.tsx          # Layout público (pendiente)
│   │   │   ├── blog/               # Blog público (pendiente)
│   │   │   ├── projects/           # Portfolio público (pendiente)
│   │   │   └── contact/            # Contacto (pendiente)
│   │   ├── admin/                   # Dashboard admin (protegido)
│   │   │   ├── layout.tsx          # Layout admin (pendiente)
│   │   │   ├── page.tsx            # Dashboard home (pendiente)
│   │   │   ├── posts/              # Gestión de posts (pendiente)
│   │   │   ├── projects/           # Gestión de proyectos (pendiente)
│   │   │   └── settings/           # Configuración (pendiente)
│   │   ├── api/                     # API Routes
│   │   │   ├── auth/               # NextAuth endpoints (pendiente)
│   │   │   ├── posts/              # Posts CRUD (pendiente)
│   │   │   ├── projects/           # Projects CRUD (pendiente)
│   │   │   └── ai/                 # IA endpoints (pendiente)
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home (EN CONSTRUCCIÓN - NO TOCAR)
│   │   ├── globals.css             # Tailwind imports
│   │   ├── favicon.ico             # Favicon
│   │   └── not-found.tsx           # 404 page (pendiente)
│   │
│   ├── components/                  # Componentes reutilizables
│   │   ├── ui/                     # Componentes base (Button, Card, etc.)
│   │   ├── layout/                 # Componentes de layout (Navbar, Footer)
│   │   ├── blog/                   # Componentes de blog
│   │   └── portfolio/              # Componentes de portfolio
│   │
│   ├── lib/                        # Utilidades y helpers
│   │   ├── utils.ts                # ✅ Utilidades generales (cn, formatDate, etc.)
│   │   ├── constants.ts            # ✅ Constantes del proyecto
│   │   ├── db.ts                   # Database client - Prisma (pendiente)
│   │   ├── auth.ts                 # NextAuth config (pendiente)
│   │   └── validations.ts          # Zod schemas (pendiente)
│   │
│   ├── types/                      # TypeScript types
│   │   ├── index.ts                # ✅ Export central
│   │   ├── models.ts               # ✅ Database models types
│   │   ├── api.ts                  # ✅ API types
│   │   └── ui.ts                   # ✅ UI types
│   │
│   └── styles/                     # Estilos globales (vacío, usa globals.css)
│
├── public/                          # Assets estáticos
│   └── logo.svg                    # Logo del sitio
│
├── .claude/                         # Configuración de Claude Code
├── sys-docs/                        # Documentación del sistema
│
├── .env.example                     # ✅ Variables de entorno de ejemplo
├── .prettierrc                      # ✅ Configuración de Prettier
├── eslint.config.mjs                # ✅ Configuración de ESLint
├── tailwind.config.ts               # ✅ Configuración de Tailwind
├── tsconfig.json                    # ✅ Configuración de TypeScript
├── postcss.config.mjs               # ✅ Configuración de PostCSS
├── next.config.ts                   # Configuración de Next.js
├── package.json                     # ✅ Dependencias y scripts
└── PROJECT-STRUCTURE.md             # ✅ Este archivo
```

## Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo (localhost:3000)

# Build
npm run build            # Compila para producción
npm start                # Inicia servidor de producción

# Linting y Formatting
npm run lint             # Ejecuta ESLint
npm run lint:fix         # Ejecuta ESLint y corrige automáticamente
npm run format           # Formatea código con Prettier
npm run format:check     # Verifica formato sin modificar
npm run type-check       # Verifica tipos de TypeScript
```

## Estado Actual

### ✅ COMPLETADO

1. **Configuración Base**
   - Next.js 15 + React 19 instalado
   - TypeScript configurado (strict mode, ES2022)
   - Tailwind CSS v4 configurado
   - ESLint + Prettier configurados
   - Scripts de package.json optimizados

2. **Estructura de Carpetas**
   - Carpetas creadas siguiendo arquitectura profesional
   - README.md en cada carpeta documentando propósito
   - Separación clara: public routes, admin routes, API routes

3. **Tipos TypeScript**
   - `types/models.ts` - Tipos de modelos base
   - `types/api.ts` - Tipos de API (request/response)
   - `types/ui.ts` - Tipos de componentes UI
   - `types/index.ts` - Export central

4. **Utilidades**
   - `lib/utils.ts` - Funciones helpers (cn, formatDate, slugify, truncate, etc.)
   - `lib/constants.ts` - Constantes del proyecto (rutas, config, categorías)

5. **Configuración de Entorno**
   - `.env.example` creado con todas las variables necesarias

### 🔵 PENDIENTE (Próximas Fases)

1. **Database & Auth**
   - Configurar Prisma + PostgreSQL
   - Definir schema de base de datos
   - Configurar NextAuth.js
   - Crear middleware de autenticación

2. **Componentes UI**
   - Implementar design system (botones, cards, inputs, etc.)
   - Componentes de layout (navbar, footer, sidebar)
   - Componentes de blog y portfolio

3. **Rutas Públicas**
   - Página de blog con listado de posts
   - Página de portfolio con proyectos
   - Página de contacto
   - Páginas individuales de posts y proyectos

4. **Admin Dashboard**
   - CRUD de posts
   - CRUD de proyectos
   - Panel de configuración

5. **API Endpoints**
   - API de autenticación
   - API de posts (CRUD)
   - API de proyectos (CRUD)
   - API de IA (generación de contenido)

6. **Integración con IA**
   - Claude AI para asistente de contenido
   - Generación automática de imágenes
   - Sugerencias de contenido

## Convenciones

### Naming
- **Archivos**: kebab-case (`post-card.tsx`, `user-service.ts`)
- **Componentes**: PascalCase (`PostCard`, `UserService`)
- **Funciones**: camelCase (`formatDate`, `createPost`)
- **Constantes**: UPPER_SNAKE_CASE (`SITE_CONFIG`, `ROUTES`)
- **Tipos**: PascalCase (`User`, `ApiResponse`)

### Estructura de Componentes
```tsx
// 1. Imports
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

// 2. Types/Interfaces
interface ComponentProps {
  children: ReactNode
  className?: string
}

// 3. Component
export function Component({ children, className }: ComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  )
}
```

### Imports Path Alias
- `@/` apunta a `src/`
- Ejemplo: `import { cn } from '@/lib/utils'`

## Próximos Pasos

1. **Fase 2**: Configurar base de datos (Prisma + PostgreSQL)
2. **Fase 3**: Implementar componentes UI base
3. **Fase 4**: Crear sistema de autenticación
4. **Fase 5**: Implementar CRUD de posts y proyectos
5. **Fase 6**: Integrar IA para asistencia de contenido

---

**Versión**: 1.0
**Última actualización**: 2025-10-25
**Estado**: Setup inicial completado

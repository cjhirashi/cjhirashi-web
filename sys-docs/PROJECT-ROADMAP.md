# PROJECT ROADMAP - cjhirashi.com

**Versión**: 1.0
**Fecha de Creación**: 2025-10-24
**Última Actualización**: 2025-10-24
**Estado General**: 0% completado
**Dueño del Proyecto**: Charlie (Admin Solo)

---

## RESUMEN EJECUTIVO

**cjhirashi.com** es un portafolio personal + blog + CMS administrativo impulsado por IA para Charlie (cjhirashi). El sitio presenta:

- **Landing/Home Page**: Presentación profesional de la marca "cjhirashi"
- **Portafolio**: Proyectos como tarjetas interactivas con páginas de detalle
- **Blog**: Artículos en Markdown con diagramas Mermaid y resaltado de código
- **Admin Dashboard**: CMS para gestión de contenido, asistente IA, analíticas
- **Contact Section**: Formulario de contacto + notificaciones por email

**Tipo de Proyecto**: Portfolio/Blog/CMS
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4, React 19
**Hosting**: Vercel (cjhirashi.com - dominio ya adquirido)
**Timeline Total**: 4-5 semanas (2025-10-24 → 2025-12-05)
**Complejidad**: Media (relativo simple con potencial de ampliación IA)

---

## TIMELINE GENERAL

| Hito | Fecha Estimada | Estado |
|------|----------------|--------|
| **Página "En Construcción"** (Fase 0) | 2025-10-24 (HOY) | 🔵 No iniciado |
| **MVP Base** (Fases 1-3) | 2025-11-06 | 🔵 No iniciado |
| **Sistema Portafolio** (Fase 4) | 2025-11-13 | 🔵 No iniciado |
| **Sistema Blog** (Fase 5) | 2025-11-20 | 🔵 No iniciado |
| **Asistente IA** (Fase 6) | 2025-11-27 | 🔵 No iniciado |
| **CMS Completo** (Fases 7-8) | 2025-12-05 | 🔵 No iniciado |
| **Production Release** | 2025-12-05 | 🔵 No iniciado |

---

## FASES DEL PROYECTO

### Fase 0: Página "En Construcción" (URGENTE - HOY)
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/4 tareas completadas)
**Duración Estimada**: 2-3 horas (2025-10-24 - HOY)
**Agente Principal**: coder + ux-designer

**Descripción**:
Página temporal "Under Construction" / "En Construcción" publicada en cjhirashi.com mientras se desarrolla el sitio completo.

**Objetivo**: Mostrar presencia online inmediatamente con:
- Logo/marca "cjhirashi"
- Mensaje: "Sitio en construcción"
- Estimación de lanzamiento
- Links a redes sociales (LinkedIn, GitHub)
- Email de contacto
- Design sofisticado y tecnológico (acorde a la marca)

**Tareas Principales**:
1. [P0][Simple] Diseñar página "En Construcción" (dark theme, purple/blue/pink)
   - Dependencias: Ninguna
   - Agente: ux-designer
   - Estimado: 1h

2. [P0][Simple] Implementar página en Next.js (src/app/page.tsx)
   - Dependencias: Diseño completado
   - Agente: coder
   - Estimado: 30min

3. [P0][Simple] Deploy a Vercel (cjhirashi.com)
   - Dependencias: Página implementada
   - Agente: coder
   - Estimado: 30min

4. [P0][Simple] Validar que cjhirashi.com carga correctamente
   - Dependencias: Deploy completado
   - Agente: tester
   - Estimado: 15min

**Entregables**:
- Página "En Construcción" live en cjhirashi.com
- Responsive (mobile + desktop)
- SEO básico (title, description)

**Criterios de Éxito**:
- [ ] cjhirashi.com carga la página "En Construcción"
- [ ] Página es responsive (mobile/desktop)
- [ ] Links a redes sociales funcionan
- [ ] Design refleja marca "cjhirashi" (sofisticado, tech)
- [ ] SEO metadata correcta

**Dependencias Externas**:
- Vercel deployment ya configurado
- Dominio cjhirashi.com ya apunta a Vercel

**Contenido de la Página**:
```
Encabezado: "cjhirashi"
Mensaje: "Sitio en construcción"
Submensaje: "Próximamente: Portfolio profesional + Blog técnico + CMS con IA"
Estimación: "Lanzamiento estimado: Diciembre 2025"
Links: LinkedIn | GitHub | Email
Footer: "© 2025 cjhirashi - Data Scientist & Developer"
```

---

### Fase 1: Fundación & Diseño
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/8 tareas completadas)
**Duración Estimada**: 3-4 días (2025-10-24 → 2025-10-28)
**Agente Principal**: architect + ux-designer

**Descripción**:
Diseño visual y arquitectura base del proyecto. Incluye:
- Design system (colores, tipografía, componentes base)
- Arquitectura técnica de 7 capas (Next.js, DB schema, API)
- Layout responsive
- Especificación de componentes Tailwind

**Tareas Principales**:
1. [P0][Medio] Crear design system (colores, tipografía, spacing)
   - Dependencias: Ninguna
   - Agente: ux-designer
   - Estimado: 3-4h

2. [P0][Complejo] Diseñar arquitectura técnica de 7 capas
   - Dependencias: Ninguna
   - Agente: architect
   - Estimado: 4-5h

3. [P0][Medio] Crear componentes base (Button, Card, Input, etc.)
   - Dependencias: Design system completado
   - Agente: ux-designer
   - Estimado: 3-4h

4. [P0][Medio] Diseñar DB schema (Users, Posts, Projects, etc.)
   - Dependencias: Arquitectura completada
   - Agente: data-architect
   - Estimado: 3-4h

5. [P0][Medio] Crear ADR (Architecture Decision Records)
   - Dependencias: Arquitectura completada
   - Agente: architect
   - Estimado: 2-3h

6. [P0][Simple] Setup inicial de Next.js 15 + TypeScript + Tailwind
   - Dependencias: Ninguna (puede ser paralelo)
   - Agente: coder
   - Estimado: 1-2h

7. [P0][Simple] Crear repositorio estructura de carpetas
   - Dependencias: Setup Next.js completado
   - Agente: coder
   - Estimado: 1h

8. [P0][Simple] Documentar estándares de código y naming conventions
   - Dependencias: Arquitectura completada
   - Agente: documenter
   - Estimado: 1-2h

**Entregables**:
- DESIGN-SYSTEM.md (componentes, colores, tipografía)
- ARCHITECTURE.md (7-layer architecture)
- DB-SCHEMA.md (tablas y relaciones)
- ADR.md (Architecture Decision Records)
- COMPONENT-INVENTORY.md (componentes base)
- .claude/task-state.json (estado de fase)

**Criterios de Éxito**:
- [ ] Design system aprobado por Charlie
- [ ] Arquitectura documentada y validada
- [ ] DB schema diseñado (compatible con Next.js)
- [ ] Componentes base funcionan en Tailwind v4
- [ ] Repositorio estructurado correctamente
- [ ] Estándares de código documentados

**Dependencias Externas**: Ninguna

---

### Fase 2: Autenticación & Admin Core
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/7 tareas completadas)
**Duración Estimada**: 3-4 días (2025-10-29 → 2025-11-01)
**Agente Principal**: security-specialist + coder
**Bloqueador**: Requiere Fase 1 completada

**Descripción**:
Sistema de autenticación y núcleo del dashboard administrativo. Solo Charlie tiene acceso.

- NextAuth.js v5 (proveedores: Email + GitHub)
- Sistema de sesiones seguras
- Dashboard admin básico (estructura)
- RBAC (Role-Based Access Control) - Admin

**Tareas Principales**:
1. [P0][Complejo] Implementar NextAuth.js v5
   - Dependencias: Fase 1 completada
   - Agente: security-specialist + coder
   - Estimado: 5-6h

2. [P0][Medio] Crear tablas de autenticación (Users, Sessions, Accounts)
   - Dependencias: DB schema completado
   - Agente: data-architect
   - Estimado: 2-3h

3. [P0][Complejo] Implementar login/logout endpoints
   - Dependencias: NextAuth configurado
   - Agente: coder
   - Estimado: 3-4h

4. [P0][Medio] Crear layout y navegación del admin
   - Dependencias: Componentes base completados
   - Agente: ux-designer
   - Estimado: 3-4h

5. [P0][Medio] Implementar middleware de autenticación
   - Dependencias: NextAuth configurado
   - Agente: security-specialist
   - Estimado: 2-3h

6. [P0][Simple] Tests de autenticación
   - Dependencias: Login/logout implementados
   - Agente: tester
   - Estimado: 2-3h

7. [P0][Simple] Documentar flujo de auth + seguridad
   - Dependencias: Todo auth completado
   - Agente: documenter
   - Estimado: 1-2h

**Entregables**:
- AUTHENTICATION.md (NextAuth config, flujos)
- AUTH-ENDPOINTS.md (login, logout, refresh, callbacks)
- ADMIN-LAYOUT.md (estructura del dashboard)
- MIGRATION-001-auth-tables.sql
- TESTING-AUTH.md (test cases)

**Criterios de Éxito**:
- [ ] Login funciona (Email + GitHub)
- [ ] Logout funciona correctamente
- [ ] Sesiones persisten después de refresco
- [ ] Middleware protege rutas admin
- [ ] Tests pasan (>80% cobertura)
- [ ] CSRF protection implementado

**Dependencias de Fase**: Fase 1

---

### Fase 3: Sitio Público - Core
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/6 tareas completadas)
**Duración Estimada**: 3-4 días (2025-11-02 → 2025-11-05)
**Agente Principal**: coder + ux-designer
**Bloqueador**: Requiere Fases 1-2 completadas

**Descripción**:
Estructura pública del sitio (páginas visibles para todos):

- Home/Landing page
- Navbar + Footer
- Página de contacto (estructura)
- SEO configuration (Next.js metadata)
- Mobile responsiveness

**Tareas Principales**:
1. [P0][Complejo] Crear Home page con hero section
   - Dependencias: Design system + componentes base
   - Agente: ux-designer + coder
   - Estimado: 4-5h

2. [P0][Medio] Crear navbar + footer navegables
   - Dependencias: Componentes base completados
   - Agente: ux-designer
   - Estimado: 2-3h

3. [P0][Medio] Crear página Contact (form básico)
   - Dependencias: Componentes base completados
   - Agente: coder
   - Estimado: 3-4h

4. [P0][Medio] Configurar SEO (metadata, robots.txt, sitemap)
   - Dependencias: Estructura de páginas completa
   - Agente: architect
   - Estimado: 2h

5. [P0][Medio] Responsive design (mobile-first testing)
   - Dependencias: Todas las páginas completadas
   - Agente: tester
   - Estimado: 2-3h

6. [P0][Simple] Documentar paginas públicas
   - Dependencias: Todo completado
   - Agente: documenter
   - Estimado: 1h

**Entregables**:
- HOME-PAGE.md (descripción, components)
- CONTACT-PAGE.md (form fields, validations)
- NAVIGATION.md (navbar, footer structure)
- SEO-CONFIG.md (metadata, Open Graph)
- RESPONSIVE-TESTS.md (breakpoints testeados)

**Criterios de Éxito**:
- [ ] Home page carga rápido (<3s)
- [ ] Navbar responsive y funcional
- [ ] Footer con links correctos
- [ ] Contact form valida inputs
- [ ] Mobile responsive (375px-1920px)
- [ ] SEO metadata correcto

**Dependencias de Fase**: Fases 1-2

---

### Fase 4: Sistema de Portafolio
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/8 tareas completadas)
**Duración Estimada**: 4-5 días (2025-11-06 → 2025-11-10)
**Agente Principal**: coder + data-architect
**Bloqueador**: Requiere Fases 1-3 completadas

**Descripción**:
Sistema de portafolio (Projects/Portfolio):

- CRUD de proyectos en admin
- Página pública de proyectos (lista de tarjetas)
- Página de detalle de proyecto
- Categorización/Tags de proyectos
- Gallery de imágenes por proyecto

**Tareas Principales**:
1. [P0][Medio] Crear tabla Projects en DB
   - Dependencias: DB schema completado
   - Agente: data-architect
   - Estimado: 2h

2. [P0][Complejo] Implementar CRUD endpoints /api/projects
   - Dependencias: DB Projects completada
   - Agente: coder
   - Estimado: 5-6h

3. [P0][Medio] Crear admin panel para gestionar proyectos
   - Dependencias: Componentes base + auth completados
   - Agente: ux-designer + coder
   - Estimado: 4-5h

4. [P0][Medio] Crear página pública /projects (lista tarjetas)
   - Dependencias: Endpoints /api/projects funcionando
   - Agente: ux-designer
   - Estimado: 3-4h

5. [P0][Medio] Crear página /projects/[slug] (detalle)
   - Dependencias: Endpoints funcionando
   - Agente: coder
   - Estimado: 3-4h

6. [P0][Simple] Sistema de tags/categorías
   - Dependencias: CRUD projects completado
   - Agente: coder
   - Estimado: 2-3h

7. [P0][Simple] Upload de imágenes para proyectos
   - Dependencias: CRUD projects completado
   - Agente: coder
   - Estimado: 2-3h

8. [P0][Simple] Tests de portafolio
   - Dependencias: Todas las features completadas
   - Agente: tester
   - Estimado: 2-3h

**Entregables**:
- PORTFOLIO-SYSTEM.md (arquitectura del sistema)
- PROJECT-ENDPOINTS.md (API CRUD)
- PORTFOLIO-ADMIN.md (UI del admin)
- MIGRATION-002-projects-table.sql
- PORTFOLIO-TESTS.md (test cases)

**Criterios de Éxito**:
- [ ] Admin puede crear/editar/borrar proyectos
- [ ] Página /projects muestra tarjetas dinámicamente
- [ ] Detalle de proyecto carga info correctamente
- [ ] Tags funcionan para filtrado
- [ ] Imágenes se suben y muestran correctamente
- [ ] Tests pasan (>80% cobertura)

**Dependencias de Fase**: Fases 1-3

---

### Fase 5: Sistema de Blog
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/10 tareas completadas)
**Duración Estimada**: 4-5 días (2025-11-11 → 2025-11-15)
**Agente Principal**: coder + documenter
**Bloqueador**: Requiere Fases 1-3 completadas

**Descripción**:
Sistema de blog con Markdown, diagrams Mermaid y resaltado de código:

- CRUD de posts en admin
- Parser de Markdown (remark + rehype)
- Soporte de diagramas Mermaid
- Resaltado de sintaxis (Prismjs o similar)
- Página pública /blog (lista de posts)
- Página de detalle /blog/[slug]
- Categorías y tags para posts
- Búsqueda de posts

**Tareas Principales**:
1. [P0][Medio] Crear tabla Posts en DB
   - Dependencias: DB schema completado
   - Agente: data-architect
   - Estimado: 2h

2. [P0][Complejo] Implementar parser Markdown con remark + rehype
   - Dependencias: Fase 1 completada
   - Agente: coder
   - Estimado: 4-5h

3. [P0][Complejo] Integrar Mermaid diagrams
   - Dependencias: Markdown parser completado
   - Agente: coder + tech-researcher
   - Estimado: 3-4h

4. [P0][Complejo] Integrar syntax highlighting (Prismjs)
   - Dependencias: Markdown parser completado
   - Agente: coder
   - Estimado: 2-3h

5. [P0][Complejo] CRUD endpoints /api/posts
   - Dependencias: DB Posts completada
   - Agente: coder
   - Estimado: 5-6h

6. [P0][Medio] Admin panel para editar/crear posts
   - Dependencias: Componentes base + auth
   - Agente: ux-designer + coder
   - Estimado: 4-5h

7. [P0][Medio] Página pública /blog (lista, filtros)
   - Dependencias: Endpoints /api/posts funcionando
   - Agente: ux-designer
   - Estimado: 3-4h

8. [P0][Medio] Página /blog/[slug] (rendering Markdown)
   - Dependencias: Markdown parser completado
   - Agente: coder
   - Estimado: 3-4h

9. [P0][Simple] Sistema de búsqueda en blog
   - Dependencias: CRUD posts completado
   - Agente: coder
   - Estimado: 2-3h

10. [P0][Simple] Tests de blog
    - Dependencias: Todas las features completadas
    - Agente: tester
    - Estimado: 2-3h

**Entregables**:
- BLOG-SYSTEM.md (arquitectura del blog)
- MARKDOWN-CONFIG.md (remark/rehype setup)
- POST-ENDPOINTS.md (API CRUD de posts)
- BLOG-ADMIN.md (editor de posts)
- MIGRATION-003-posts-table.sql
- BLOG-TESTS.md (test cases)

**Criterios de Éxito**:
- [ ] Admin puede crear/editar posts Markdown
- [ ] Markdown renderiza correctamente
- [ ] Mermaid diagrams se renderizan
- [ ] Syntax highlighting funciona
- [ ] Página /blog lista posts dinámicamente
- [ ] Búsqueda funciona
- [ ] Tests pasan (>80% cobertura)

**Dependencias de Fase**: Fases 1-3

---

### Fase 6: Asistente IA para Contenido
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/6 tareas completadas)
**Duración Estimada**: 3-4 días (2025-11-16 → 2025-11-19)
**Agente Principal**: ai-specialist + coder
**Bloqueador**: Requiere Fases 1-2 completadas (no depende de 4-5)

**Descripción**:
Asistente IA para ayudar a crear/mejorar contenido:

- LLM API integration (Claude, GPT, etc.)
- Generación de títulos para posts
- Generación de descripciones
- Sugerencias de mejora de contenido
- Generación de tags automáticos
- Drafts rápidos con IA

**Tareas Principales**:
1. [P1][Medio] Integración con Claude API (o similar)
   - Dependencias: Fase 1 completada
   - Agente: ai-specialist
   - Estimado: 2-3h

2. [P1][Complejo] Crear prompts optimizados para generación de contenido
   - Dependencias: API integrada
   - Agente: ai-specialist
   - Estimado: 3-4h

3. [P1][Medio] Crear endpoints /api/ai/* (generación de contenido)
   - Dependencias: API integrada
   - Agente: coder
   - Estimado: 3-4h

4. [P1][Medio] UI en admin para asistente IA (chat-like interface)
   - Dependencias: Componentes base + endpoints
   - Agente: ux-designer
   - Estimado: 3-4h

5. [P1][Simple] Rate limiting y validación de inputs para IA
   - Dependencias: Endpoints completados
   - Agente: security-specialist
   - Estimado: 1-2h

6. [P1][Simple] Tests de IA endpoints
   - Dependencias: Todos los endpoints completados
   - Agente: tester
   - Estimado: 1-2h

**Entregables**:
- AI-INTEGRATION.md (setup LLM API)
- AI-PROMPTS.md (prompts optimizados)
- AI-ENDPOINTS.md (API endpoints IA)
- AI-ADMIN-UI.md (interfaz en admin)

**Criterios de Éxito**:
- [ ] LLM API funciona y conecta
- [ ] Generación de contenido es útil
- [ ] Prompts producen salida consistente
- [ ] Interfaz es intuitiva
- [ ] Rate limiting previene abuso
- [ ] Tests pasan

**Dependencias de Fase**: Fases 1-2

---

### Fase 7: CMS Customización & Features Avanzadas
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/8 tareas completadas)
**Duración Estimada**: 4-5 días (2025-11-20 → 2025-11-24)
**Agente Principal**: coder + architect
**Bloqueador**: Requiere Fases 1-6 completadas

**Descripción**:
Personalización del CMS y features administrativas avanzadas:

- Edición en vivo de metadata (SEO)
- Plantillas de contenido reutilizables
- Historial de versiones (posts/projects)
- Publicación programada
- Borrador/Publicado (estados)
- Estadísticas de contenido en admin
- Exportación de datos (CSV, JSON)

**Tareas Principales**:
1. [P1][Medio] Agregar campos SEO editables en admin
   - Dependencias: CRUD completados (Fases 4-5)
   - Agente: coder
   - Estimado: 2-3h

2. [P1][Medio] Sistema de borradores vs publicados
   - Dependencias: DB schema actualizado
   - Agente: coder
   - Estimado: 2-3h

3. [P1][Complejo] Versionado de posts/projects
   - Dependencias: DB schema con versioning
   - Agente: coder
   - Estimado: 3-4h

4. [P1][Medio] Publicación programada
   - Dependencias: Sistema de estados completado
   - Agente: coder
   - Estimado: 2-3h

5. [P1][Simple] Plantillas de contenido reutilizables
   - Dependencias: Admin panel completado
   - Agente: coder
   - Estimado: 2h

6. [P1][Medio] Dashboard de estadísticas de contenido
   - Dependencias: Posts/Projects completados
   - Agente: ux-designer
   - Estimado: 3-4h

7. [P1][Simple] Exportación de datos (CSV, JSON)
   - Dependencias: CRUD completados
   - Agente: coder
   - Estimado: 1-2h

8. [P1][Simple] Tests de CMS features
   - Dependencias: Todas las features completadas
   - Agente: tester
   - Estimado: 2-3h

**Entregables**:
- CMS-FEATURES.md (features implementadas)
- VERSIONING.md (sistema de versiones)
- EXPORT.md (exportación de datos)

**Criterios de Éxito**:
- [ ] Metadata SEO editable
- [ ] Borradores/publicados funcionan
- [ ] Versionado preserva historia
- [ ] Publicación programada funciona
- [ ] Dashboard de stats es útil
- [ ] Exportación funciona (CSV, JSON)

**Dependencias de Fase**: Fases 1-6

---

### Fase 8: Analíticas & Polish Final
**Estado**: 🔵 NO INICIADO
**Progreso**: 0% (0/7 tareas completadas)
**Duración Estimada**: 3-4 días (2025-11-25 → 2025-12-01)
**Agente Principal**: architect + coder
**Bloqueador**: Requiere Fases 1-7 completadas

**Descripción**:
Analíticas de visita, optimización de performance y pulido final:

- Google Analytics / Vercel Analytics integration
- Dashboard de analíticas en admin
- Performance optimization (bundle, images, API)
- Caching strategy (browser + server)
- Error handling y logging
- Polish de UI/UX final

**Tareas Principales**:
1. [P1][Medio] Integración de analíticas (GA / Vercel)
   - Dependencias: Sitio público completado (Fases 1-5)
   - Agente: architect
   - Estimado: 2-3h

2. [P1][Medio] Dashboard de analíticas en admin
   - Dependencias: Analíticas integradas
   - Agente: ux-designer
   - Estimado: 3-4h

3. [P1][Complejo] Optimización de performance (bundle, images)
   - Dependencias: Toda la app desarrollada
   - Agente: architect
   - Estimado: 4-5h

4. [P1][Medio] Caching strategy (browser + server)
   - Dependencias: Endpoints completados
   - Agente: architect
   - Estimado: 2-3h

5. [P1][Medio] Error handling y logging
   - Dependencias: Todo completado
   - Agente: coder
   - Estimado: 2-3h

6. [P1][Simple] Polish de UI/UX (animaciones, transiciones)
   - Dependencias: Todo completado
   - Agente: ux-designer
   - Estimado: 2-3h

7. [P1][Simple] Tests finales y validación
   - Dependencias: Todo completado
   - Agente: tester
   - Estimado: 2-3h

**Entregables**:
- ANALYTICS-SETUP.md (GA/Vercel config)
- PERFORMANCE-OPTIMIZATION.md (optimizaciones)
- CACHING-STRATEGY.md (cache policies)
- TESTING-FINAL.md (resultados de tests finales)
- DEPLOYMENT-CHECKLIST.md

**Criterios de Éxito**:
- [ ] Analytics funciona y muestra datos
- [ ] PageSpeed Insights >= 90
- [ ] Bundle size < 150KB (JS)
- [ ] Caching reduce TTFB
- [ ] Error handling es robusto
- [ ] UI es pulida y profesional
- [ ] Tests pasan 100%

**Dependencias de Fase**: Fases 1-7

---

## MÉTRICAS DE ÉXITO

### Por Fase

| Métrica | Target | Fase |
|---------|--------|------|
| Design System completo | 100% | 1 |
| Arquitectura documentada | 100% | 1 |
| Auth funcional (Email + GitHub) | 100% | 2 |
| Páginas públicas responsivas | 100% | 3 |
| CRUD Portfolio completado | 100% | 4 |
| CRUD Blog completado + Markdown | 100% | 5 |
| IA Assistant funcional | 100% | 6 |
| CMS Features completadas | 100% | 7 |
| Analytics implementadas | 100% | 8 |
| PageSpeed Insights | >= 90 | 8 |
| Test Coverage | >= 80% | Todas |
| Documentation | 100% | Todas |

### Globales

- **Timeline**: ≤ 5 semanas desde inicio
- **Quality**: Todos los tests pasan (>=80% cobertura)
- **Performance**: PageSpeed >= 90, TTFB <= 500ms
- **Security**: OWASP Top 10 considerado, CSRF protegido
- **Usability**: Mobile responsive (100% de páginas)
- **Production Ready**: Zero breaking bugs en fase de testing

---

## RIESGOS IDENTIFICADOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Integración Mermaid toma más tiempo | Media | Medio | Pre-investigar en tech-researcher, documentar aprendizaje |
| LLM API quota/costs | Media | Alto | Implementar rate limiting temprano en Fase 6 |
| Performance issues con Markdown parsing | Baja | Medio | Validar perf temprano en Fase 5, usar lazy loading |
| Auth con GitHub tiene problemas | Baja | Alto | Validar en Fase 2 temprano, tener fallback Email |
| Cambios en Next.js 15 undocumented | Baja | Bajo | Validar compatibility temprano en Fase 1 |
| Database schema cambios posteriores | Media | Medio | Validar schema en Fase 1, documentar bien migrations |
| Imagen handling en Projects/Blog | Baja | Bajo | Pre-validar Next.js Image component en Fase 3 |

---

## DEPENDENCIAS EXTERNAS

| Dependencia | Tipo | Fase | Acción |
|-------------|------|------|--------|
| Dominio cjhirashi.com | Hosting | 1-8 | Ya adquirido, usar Vercel |
| Vercel deployment | Hosting | 1-8 | Configurar CI/CD en Fase 1 |
| Email service (Resend/SendGrid) | Email | 2-3 | Integrar en Fase 2 (opcional) |
| Claude API (IA) | LLM | 6 | Configurar en Fase 6 |
| Google Analytics | Analytics | 8 | Integrar en Fase 8 |

---

## ASIGNACIÓN DE ESPECIALISTAS

| Especialista | Rol | Fases | Horas Estimadas |
|--------------|-----|-------|-----------------|
| architect | Lead arquitectura, ADR, performance | 1, 3, 7, 8 | 25-30h |
| coder | Implementación principal | 1-8 | 80-100h |
| data-architect | Schema DB, migrations | 1, 4, 5 | 8-10h |
| ux-designer | Design system, UI, layouts | 1, 3, 4, 5, 7, 8 | 30-35h |
| security-specialist | Auth, security validations | 2, 6 | 10-12h |
| ai-specialist | LLM integration, prompts | 6 | 8-10h |
| tester | Tests, QA, validation | 2-8 | 15-20h |
| documenter | Documentación completa | 1-8 | 8-10h |
| tech-researcher | Investigaciones Mermaid, etc | 1, 5 | 3-5h |
| code-reviewer | Code review, security check | 2-8 | 8-10h |

**Total de horas estimadas**: 195-247h
**Con buffer 20%**: 234-296h
**Equivalente**: 1-2 devs full-time por 4-5 semanas

---

## ESTIMACIÓN DE COSTOS

### Desglose por Rol

| Rol | Horas | Tarifa | Subtotal |
|-----|-------|--------|----------|
| Senior Developer (coder) | 90h | $120/h | $10,800 |
| Architect | 28h | $150/h | $4,200 |
| UX Designer | 32h | $100/h | $3,200 |
| Data Architect | 9h | $120/h | $1,080 |
| Security Specialist | 11h | $120/h | $1,320 |
| AI Specialist | 9h | $120/h | $1,080 |
| Tester | 17h | $80/h | $1,360 |
| Documenter | 9h | $80/h | $720 |
| Tech Researcher | 4h | $80/h | $320 |
| Code Reviewer | 9h | $100/h | $900 |
| **Subtotal** | **218h** | | **$24,980** |
| **Buffer 20%** | **44h** | | **$5,000** |
| **Total Base** | **262h** | | **$29,980** |

### Costos Operacionales

| Item | Costo Mensual | Período | Total |
|------|---------------|---------|-------|
| Vercel Pro | $20 | 2 meses | $40 |
| Claude API | ~$50 | 2 meses | $100 |
| Domain (cjhirashi.com) | $12 | Annual | $1 (prorrateo) |
| **Total Operacional** | | | **$141** |

### TOTAL DEL PROYECTO

```
Desarrollo:     $29,980
Operacional:    $141
---
TOTAL:          $30,121
```

---

## PROTOCOLO DE ACTUALIZACIÓN DEL ROADMAP

Este documento es la **ÚNICA FUENTE DE VERDAD** del estado del proyecto.

### Cuándo actualizar:
- ✅ Después de completar cada entregable
- ✅ Cuando hay cambios en timeline
- ✅ Al identificar bloqueadores
- ✅ Al finalizar cada fase
- ✅ Cambios en estimaciones

### Cómo actualizar:
1. **Cambiar estado de fase**: 🔵 NO INICIADO → ⏳ EN PROGRESO → ✅ COMPLETADO
2. **Actualizar % de progreso**: Basado en tareas completadas
3. **Actualizar "Última Actualización"**: Fecha actual (YYYY-MM-DD)
4. **Agregar nota en "Actualizaciones [FECHA]"**: Qué cambió
5. **NO cambiar versión** (1.0 permanece igual para updates de estado)

### Ejemplo de Actualización

```markdown
**Última Actualización**: 2025-11-02  ← CAMBIÓ

### Fase 2: Autenticación & Admin Core ⏳ EN PROGRESO
**Estado**: ⏳ 50% completado (4/7 tareas)
**Duración Real Hasta Ahora**: 2.5 días

---

## Actualizaciones

### 2025-11-02 - Fase 2 en progreso
- ✅ NextAuth.js v5 implementado
- ✅ Tablas de auth creadas
- ✅ Login/logout endpoints funcionales
- ⏳ Tests en progreso (50%)
```

---

## PRÓXIMOS PASOS (CHARLIE)

1. **Validar este roadmap** - ¿Está de acuerdo con timeline, scope, costos?
2. **Aprobar cambios si hay** - Ajustar fases si es necesario
3. **Confirmar timeline** - ¿Necesita estar antes de 2025-12-05?
4. **Autorizar iniciar Fase 1** - Design & Foundation
5. **Designar punto de contacto** - ¿Disponible para validaciones?

---

## ACTUALIZACIONES

_(Este espacio se usará para documentar cambios al roadmap)_

---

## INFORMACIÓN DE CONTACTO Y GESTIÓN

**Propietario del Proyecto**: Charlie (cjhirashi)
**Repositorio**: `c:\PROYECTOS\APPS\cjhirashi-web` (GitHub)
**Dominio**: cjhirashi.com (Vercel)
**Documentación Central**: `.claude/sys-docs/` (internos)
**Este Roadmap**: `sys-docs/PROJECT-ROADMAP.md` (única fuente de verdad)

---

**Versión 1.0 - Creado 2025-10-24 por planner v2.0**

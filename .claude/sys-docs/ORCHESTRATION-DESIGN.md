# ORCHESTRATION DESIGN - cjhirashi.com

**Versión**: 1.0
**Fecha de Creación**: 2025-10-25
**Última Actualización**: 2025-10-25
**Proyecto**: cjhirashi.com (Portfolio/Blog/CMS)
**Tipo**: Sistema de Orquestación de Agentes Especializados
**Objetivo**: Coordinar 17 agentes (14 de proyecto + 3 de orquestación) para desarrollar cjhirashi.com en 4-5 semanas

---

## RESUMEN EJECUTIVO

Este documento define la orquestación completa del equipo de agentes especializado para **cjhirashi.com**, un portfolio personal + blog + CMS administrativo con asistente IA. El equipo está diseñado específicamente para las características de este proyecto:

**Características del Proyecto**:
- Tech Stack: Next.js 15, TypeScript, Tailwind CSS v4, React 19
- Tipo: Portfolio + Blog (Markdown + Mermaid) + CMS Admin
- Hosting: Vercel (dominio cjhirashi.com)
- Timeline: 4-5 semanas (2025-10-24 → 2025-12-05)
- Complejidad: Media (9 fases: Fase 0-8)

**Equipo de Agentes**:
- 14 agentes de PROYECTO (desarrollo)
- 3 agentes de ORQUESTACIÓN (diseño, prompts, validación)

**Optimización Estratégica**:
- Uso inteligente de Haiku vs Sonnet (costo-beneficio)
- Paralelización en Fase 1 y entre Fases 4-5-6
- Workflows específicos por modo (DESARROLLO, FEATURE, EMERGENCIA, OPTIMIZACIÓN)
- Estimación de tokens y costos LLM

---

## 1. ESTRUCTURA DEL EQUIPO DE AGENTES

### 1.1 Agentes de PROYECTO (14 agentes)

| # | Agente | Modelo LLM | Especialidad | Justificación del Modelo |
|---|--------|------------|--------------|--------------------------|
| 1 | planner | **Haiku** | Planificación estratégica, roadmaps | Tareas estructuradas, bajo contexto necesario |
| 2 | architect | **Sonnet** | Arquitectura de software, ADR | Decisiones técnicas complejas, alto impacto |
| 3 | data-architect | **Sonnet** | Diseño de BD, schemas, migrations | Decisiones críticas en estructura de datos |
| 4 | security-specialist | **Sonnet** | Seguridad, autenticación, OWASP | Seguridad requiere análisis profundo |
| 5 | ux-designer | **Haiku** | Diseño UI/UX, componentes visuales | Tareas creativas pero estructuradas |
| 6 | coder | **Sonnet** | Implementación (Next.js, TS, React) | Código complejo, debugging, integración |
| 7 | ai-specialist | **Sonnet** | Integración LLM, prompts IA | Requiere expertise en IA y optimización |
| 8 | tester | **Sonnet** | Testing, QA, validación de calidad | Análisis profundo de edge cases |
| 9 | cost-analyzer | **Haiku** | Análisis de costos y recursos | Cálculos predecibles, análisis numérico |
| 10 | documenter | **Sonnet** | Documentación técnica + diagramas | Claridad, Mermaid, estructura compleja |
| 11 | tech-researcher | **Haiku** | Investigación técnica (Mermaid, etc.) | Búsquedas estructuradas, documentación |
| 12 | code-reviewer | **Sonnet** | Code review, security checks | Revisión crítica, detección de problemas |
| 13 | system-analyzer | **Sonnet** | Análisis de sistemas, debugging | Debugging complejo, análisis sistémico |
| 14 | diagram-designer | **Sonnet** | Diagramas Mermaid complejos | Visualizaciones técnicas de arquitectura |

**Distribución de Modelos**:
- **Haiku** (4 agentes): planner, ux-designer, cost-analyzer, tech-researcher
- **Sonnet** (10 agentes): architect, data-architect, security-specialist, coder, ai-specialist, tester, documenter, code-reviewer, system-analyzer, diagram-designer

**Justificación General**:
- **Haiku** para tareas estructuradas, predecibles, bajo contexto (ahorro de costos ~97%)
- **Sonnet** para decisiones técnicas críticas, código complejo, análisis profundo (máxima calidad)

### 1.2 Agentes de ORQUESTACIÓN (3 agentes)

| # | Agente | Modelo LLM | Especialidad | Justificación |
|---|--------|------------|--------------|---------------|
| 15 | system-claude | **Sonnet** | Diseño de orquestación de agentes | Decisiones estratégicas sobre equipo |
| 16 | prompt-engineer | **Sonnet** | Generación y validación de prompts | Calidad de prompts es crítica |
| 17 | orchestration-validator | **Sonnet** | Validación de consistencia 1-to-1 | Detección de discrepancias complejas |

**CRÍTICO**: Estos 3 agentes NO participan en desarrollo del proyecto. Solo gestionan la orquestación interna de `.claude/`.

---

## 2. MAPEO DE AGENTES POR FASE

### 2.1 Fase 0: Página "En Construcción" (URGENTE - 2-3h)

**Modo de Operación**: EMERGENCIA (RUTA B) - SLA 3 horas

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | ux-designer | Diseñar página "En Construcción" (dark theme, purple/blue/pink) | 1h |
| **Implementador** | coder | Implementar en Next.js (src/app/page.tsx), deploy a Vercel | 1h |
| **Validador** | tester | Validar carga en cjhirashi.com, responsive, links | 15min |

**Patrón de Coordinación**: SECUENCIAL (ux-designer → coder → tester)

**Especialistas Secundarios**: Ninguno (fase urgente, mínima complejidad)

**Criterios de Finalización**:
- [ ] cjhirashi.com carga la página
- [ ] Responsive (mobile/desktop)
- [ ] Links a redes sociales funcionan
- [ ] Design sofisticado y tech

---

### 2.2 Fase 1: Fundación & Diseño (3-4 días)

**Modo de Operación**: DESARROLLO (Fase 1 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | architect | Arquitectura técnica de 7 capas, ADR, estándares | 6-8h |
| **Co-Lead** | ux-designer | Design system (colores, tipografía), componentes base | 6-8h |
| **Especialista DB** | data-architect | DB schema inicial (Users, Posts, Projects) | 3-4h |
| **Implementador** | coder | Setup Next.js 15 + TS + Tailwind, estructura de carpetas | 2-3h |
| **Documentador** | documenter | Documentar estándares, design system, arquitectura | 1-2h |
| **Validador** | code-reviewer | Validar setup inicial, estándares de código | 1h |

**Patrón de Coordinación**: PARALELO (architect + ux-designer simultáneos) → SECUENCIAL (coder → documenter)

**Especialistas Secundarios**: diagram-designer (para diagramas de arquitectura)

**Criterios de Finalización**:
- [ ] DESIGN-SYSTEM.md completo y aprobado
- [ ] ARCHITECTURE.md (7 capas) documentado
- [ ] DB-SCHEMA.md diseñado
- [ ] ADR.md con decisiones arquitectónicas
- [ ] Next.js setup funcional
- [ ] Estándares documentados

**Documentos Generados**:
1. `sys-docs/design/DESIGN-SYSTEM.md` (ux-designer)
2. `sys-docs/architecture/ARCHITECTURE.md` (architect)
3. `sys-docs/database/DB-SCHEMA.md` (data-architect)
4. `sys-docs/architecture/ADR.md` (architect)
5. `sys-docs/standards/CODE-STANDARDS.md` (documenter)
6. `sys-docs/architecture/COMPONENT-INVENTORY.md` (ux-designer)

---

### 2.3 Fase 2: Autenticación & Admin Core (3-4 días)

**Modo de Operación**: DESARROLLO (Fase 2 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | security-specialist | NextAuth.js v5, RBAC, CSRF protection | 7-9h |
| **Co-Lead** | coder | Login/logout endpoints, middleware de auth | 8-10h |
| **Especialista DB** | data-architect | Tablas de auth (Users, Sessions, Accounts) | 2-3h |
| **Diseñador UI** | ux-designer | Layout y navegación del admin dashboard | 3-4h |
| **Validador QA** | tester | Tests de autenticación (>80% cobertura) | 2-3h |
| **Documentador** | documenter | Flujo de auth, endpoints, seguridad | 1-2h |

**Patrón de Coordinación**: SECUENCIAL (security-specialist + data-architect → coder → ux-designer → tester → documenter)

**Especialistas Secundarios**: code-reviewer (para validar security best practices)

**Criterios de Finalización**:
- [ ] Login funciona (Email + GitHub)
- [ ] Logout funciona
- [ ] Sesiones persisten
- [ ] Middleware protege rutas /admin/*
- [ ] CSRF protection activo
- [ ] Tests pasan (>80%)

**Documentos Generados**:
1. `sys-docs/auth/AUTHENTICATION.md` (security-specialist)
2. `sys-docs/auth/AUTH-ENDPOINTS.md` (coder)
3. `sys-docs/admin/ADMIN-LAYOUT.md` (ux-designer)
4. `sys-docs/database/MIGRATION-001-auth-tables.sql` (data-architect)
5. `sys-docs/testing/TESTING-AUTH.md` (tester)

---

### 2.4 Fase 3: Sitio Público - Core (3-4 días)

**Modo de Operación**: DESARROLLO (Fase 3 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | coder | Implementar Home, Navbar, Footer, Contact | 9-12h |
| **Co-Lead** | ux-designer | Diseño de Home page (hero section), navbar, footer | 5-7h |
| **SEO Specialist** | architect | SEO config (metadata, robots.txt, sitemap) | 2h |
| **Validador QA** | tester | Responsive testing (375px-1920px) | 2-3h |
| **Documentador** | documenter | Documentar páginas públicas | 1h |

**Patrón de Coordinación**: PARALELO (ux-designer + coder) → SECUENCIAL (architect → tester → documenter)

**Especialistas Secundarios**: Ninguno

**Criterios de Finalización**:
- [ ] Home page carga <3s
- [ ] Navbar responsive
- [ ] Footer con links correctos
- [ ] Contact form valida inputs
- [ ] Mobile responsive (100%)
- [ ] SEO metadata correcto

**Documentos Generados**:
1. `sys-docs/pages/HOME-PAGE.md` (ux-designer)
2. `sys-docs/pages/CONTACT-PAGE.md` (coder)
3. `sys-docs/pages/NAVIGATION.md` (ux-designer)
4. `sys-docs/seo/SEO-CONFIG.md` (architect)
5. `sys-docs/testing/RESPONSIVE-TESTS.md` (tester)

---

### 2.5 Fase 4: Sistema de Portafolio (4-5 días) - PUEDE SER PARALELO CON FASE 5

**Modo de Operación**: DESARROLLO (Fase 4 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | coder | CRUD endpoints /api/projects, admin panel, páginas públicas | 13-17h |
| **Especialista DB** | data-architect | Tabla Projects (schema, indexes, relations) | 2h |
| **Diseñador UI** | ux-designer | Admin panel proyectos, página /projects, /projects/[slug] | 7-9h |
| **Validador QA** | tester | Tests de CRUD portfolio (>80% cobertura) | 2-3h |
| **Documentador** | documenter | Sistema de portfolio, API, admin | 1h |

**Patrón de Coordinación**: SECUENCIAL (data-architect → coder + ux-designer PARALELO → tester → documenter)

**Especialistas Secundarios**: code-reviewer (para validar calidad de endpoints)

**Criterios de Finalización**:
- [ ] CRUD completo (crear/editar/borrar proyectos)
- [ ] /projects muestra tarjetas dinámicas
- [ ] /projects/[slug] funciona
- [ ] Tags/categorías funcionan
- [ ] Upload de imágenes funciona
- [ ] Tests pasan (>80%)

**Documentos Generados**:
1. `sys-docs/portfolio/PORTFOLIO-SYSTEM.md` (architect)
2. `sys-docs/api/PROJECT-ENDPOINTS.md` (coder)
3. `sys-docs/admin/PORTFOLIO-ADMIN.md` (ux-designer)
4. `sys-docs/database/MIGRATION-002-projects-table.sql` (data-architect)
5. `sys-docs/testing/PORTFOLIO-TESTS.md` (tester)

---

### 2.6 Fase 5: Sistema de Blog (4-5 días) - PUEDE SER PARALELO CON FASE 4

**Modo de Operación**: DESARROLLO (Fase 5 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | coder | CRUD /api/posts, parser Markdown, Mermaid, syntax highlighting | 17-22h |
| **Co-Lead** | documenter | Configuración Markdown (remark/rehype), diagramas Mermaid | 2-3h |
| **Especialista DB** | data-architect | Tabla Posts (schema, full-text search) | 2h |
| **Investigador** | tech-researcher | Investigar Mermaid integration, best practices | 3-4h |
| **Diseñador UI** | ux-designer | Admin editor posts, /blog (lista), /blog/[slug] | 6-9h |
| **Validador QA** | tester | Tests de blog + Markdown rendering | 2-3h |

**Patrón de Coordinación**: SECUENCIAL (tech-researcher → data-architect → coder + documenter PARALELO → ux-designer → tester)

**Especialistas Secundarios**: code-reviewer (validar Markdown parsing), diagram-designer (validar Mermaid)

**Criterios de Finalización**:
- [ ] Markdown renderiza correctamente
- [ ] Mermaid diagrams funcionan
- [ ] Syntax highlighting funciona
- [ ] CRUD posts completo
- [ ] /blog lista posts
- [ ] Búsqueda funciona
- [ ] Tests pasan (>80%)

**Documentos Generados**:
1. `sys-docs/blog/BLOG-SYSTEM.md` (architect)
2. `sys-docs/blog/MARKDOWN-CONFIG.md` (documenter)
3. `sys-docs/api/POST-ENDPOINTS.md` (coder)
4. `sys-docs/admin/BLOG-ADMIN.md` (ux-designer)
5. `sys-docs/database/MIGRATION-003-posts-table.sql` (data-architect)
6. `sys-docs/testing/BLOG-TESTS.md` (tester)
7. `sys-docs/research/MERMAID-INTEGRATION.md` (tech-researcher)

---

### 2.7 Fase 6: Asistente IA para Contenido (3-4 días) - PUEDE SER PARALELO CON FASE 4-5

**Modo de Operación**: DESARROLLO (Fase 6 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | ai-specialist | Integración Claude API, diseño de prompts optimizados | 5-7h |
| **Implementador** | coder | Endpoints /api/ai/*, UI chat-like en admin | 6-8h |
| **Especialista Security** | security-specialist | Rate limiting, validación de inputs para IA | 1-2h |
| **Diseñador UI** | ux-designer | UI del asistente IA en admin (chat interface) | 3-4h |
| **Validador QA** | tester | Tests de endpoints IA | 1-2h |
| **Documentador** | documenter | Integración IA, prompts, endpoints | 1h |

**Patrón de Coordinación**: SECUENCIAL (ai-specialist → coder + ux-designer PARALELO → security-specialist → tester → documenter)

**Especialistas Secundarios**: cost-analyzer (para estimar costos de LLM), code-reviewer

**Criterios de Finalización**:
- [ ] Claude API conecta y funciona
- [ ] Generación de contenido es útil
- [ ] Prompts producen output consistente
- [ ] UI intuitiva
- [ ] Rate limiting previene abuso
- [ ] Tests pasan

**Documentos Generados**:
1. `sys-docs/ai/AI-INTEGRATION.md` (ai-specialist)
2. `sys-docs/ai/AI-PROMPTS.md` (ai-specialist)
3. `sys-docs/api/AI-ENDPOINTS.md` (coder)
4. `sys-docs/admin/AI-ADMIN-UI.md` (ux-designer)
5. `sys-docs/costs/AI-COST-ANALYSIS.md` (cost-analyzer)

---

### 2.8 Fase 7: CMS Customización & Features Avanzadas (4-5 días)

**Modo de Operación**: DESARROLLO (Fase 7 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | coder | SEO editable, borradores, versionado, publicación programada | 11-15h |
| **Diseñador UI** | ux-designer | Dashboard de estadísticas, UI de features CMS | 3-4h |
| **Validador QA** | tester | Tests de CMS features | 2-3h |
| **Documentador** | documenter | Features CMS, versionado, exportación | 1h |

**Patrón de Coordinación**: SECUENCIAL (coder → ux-designer → tester → documenter)

**Especialistas Secundarios**: architect (para validar arquitectura de versionado), code-reviewer

**Criterios de Finalización**:
- [ ] Metadata SEO editable
- [ ] Borradores/publicados funcionan
- [ ] Versionado preserva historia
- [ ] Publicación programada funciona
- [ ] Dashboard de stats útil
- [ ] Exportación CSV/JSON funciona

**Documentos Generados**:
1. `sys-docs/cms/CMS-FEATURES.md` (documenter)
2. `sys-docs/cms/VERSIONING.md` (coder)
3. `sys-docs/cms/EXPORT.md` (coder)

---

### 2.9 Fase 8: Analíticas & Polish Final (3-4 días)

**Modo de Operación**: DESARROLLO (Fase 8 del roadmap)

| Rol | Agente(s) | Tareas Específicas | Tiempo Estimado |
|-----|-----------|-------------------|-----------------|
| **Lead** | architect | Analytics integration, performance optimization, caching | 8-11h |
| **Implementador** | coder | Error handling, logging | 2-3h |
| **Diseñador UI** | ux-designer | Dashboard de analytics, polish UI/UX (animaciones) | 5-7h |
| **Validador QA** | tester | Tests finales, validación performance (PageSpeed >= 90) | 2-3h |
| **Documentador** | documenter | Analytics, optimizaciones, deployment checklist | 1h |

**Patrón de Coordinación**: PARALELO (architect + coder + ux-designer) → SECUENCIAL (tester → documenter)

**Especialistas Secundarios**: system-analyzer (para debugging performance), cost-analyzer (proyección de costos operacionales)

**Criterios de Finalización**:
- [ ] Analytics funciona (GA o Vercel)
- [ ] PageSpeed Insights >= 90
- [ ] Bundle size < 150KB (JS)
- [ ] Caching reduce TTFB
- [ ] Error handling robusto
- [ ] UI pulida y profesional
- [ ] Tests pasan 100%

**Documentos Generados**:
1. `sys-docs/analytics/ANALYTICS-SETUP.md` (architect)
2. `sys-docs/performance/PERFORMANCE-OPTIMIZATION.md` (architect)
3. `sys-docs/performance/CACHING-STRATEGY.md` (architect)
4. `sys-docs/testing/TESTING-FINAL.md` (tester)
5. `sys-docs/deployment/DEPLOYMENT-CHECKLIST.md` (documenter)

---

## 3. TABLA RESUMEN DE PARTICIPACIÓN AGENTE-POR-FASE

| Agente | Fase 0 | Fase 1 | Fase 2 | Fase 3 | Fase 4 | Fase 5 | Fase 6 | Fase 7 | Fase 8 | Total Horas |
|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|-------------|
| **planner** | - | - | - | - | - | - | - | - | - | 0h (ya completó roadmap) |
| **architect** | - | 6-8h | - | 2h | - | - | - | 1h | 8-11h | 17-22h |
| **data-architect** | - | 3-4h | 2-3h | - | 2h | 2h | - | - | - | 9-10h |
| **security-specialist** | - | - | 7-9h | - | - | - | 1-2h | - | - | 8-11h |
| **ux-designer** | 1h | 6-8h | 3-4h | 5-7h | 7-9h | 6-9h | 3-4h | 3-4h | 5-7h | 39-53h |
| **coder** | 1h | 2-3h | 8-10h | 9-12h | 13-17h | 17-22h | 6-8h | 11-15h | 2-3h | 69-91h |
| **ai-specialist** | - | - | - | - | - | - | 5-7h | - | - | 5-7h |
| **tester** | 15min | - | 2-3h | 2-3h | 2-3h | 2-3h | 1-2h | 2-3h | 2-3h | 13.25-17.25h |
| **cost-analyzer** | - | - | - | - | - | - | 1h | - | 1h | 2h |
| **documenter** | - | 1-2h | 1-2h | 1h | 1h | 2-3h | 1h | 1h | 1h | 9-11h |
| **tech-researcher** | - | - | - | - | - | 3-4h | - | - | - | 3-4h |
| **code-reviewer** | - | 1h | 1h | - | 1h | 1h | 1h | 1h | - | 6h |
| **system-analyzer** | - | - | - | - | - | - | - | - | 1-2h | 1-2h |
| **diagram-designer** | - | 1h | - | - | - | 1h | - | - | - | 2h |
| **TOTAL POR FASE** | 2.25h | 19-27h | 24-32h | 19-25h | 26-33h | 34-45h | 18-25h | 19-24h | 20-27h | **181.25-240.25h** |

**Total Estimado**: 181.25-240.25 horas

**Con buffer 20%**: 217.5-288.3 horas

**Timeline**: 4-5 semanas (compatible con roadmap)

---

## 4. OPTIMIZACIÓN DE TOKENS Y COSTOS LLM

### 4.1 Proyección de Tokens por Modelo

**Cálculo Base**:
- Input promedio por tarea: 3,000 tokens
- Output promedio por tarea: 2,000 tokens
- Total tokens por hora: ~5,000 tokens/hora

**Haiku (4 agentes: planner, ux-designer, cost-analyzer, tech-researcher)**:
- Horas totales: ~56-72h
- Tokens estimados: 280,000-360,000 tokens
- Costo (input $0.25/1M, output $1.25/1M): $0.52-$0.67

**Sonnet (10 agentes: resto)**:
- Horas totales: ~125-168h
- Tokens estimados: 625,000-840,000 tokens
- Costo (input $3/1M, output $15/1M): $11.25-$15.12

**TOTAL COSTOS LLM ESTIMADO**: ~$12-$16 (para TODO el proyecto)

**Ahorro vs usar solo Sonnet**: ~$45-$60 (75% de ahorro en agentes Haiku)

### 4.2 Justificación de Modelo por Agente

**Criterios para HAIKU** (cuando cumple 3+ de estos):
- [ ] Tareas predecibles y estructuradas
- [ ] Contexto bajo (<2,000 tokens input)
- [ ] Output esperado es formateable
- [ ] No requiere razonamiento complejo
- [ ] Bajo riesgo de error (no crítico)

**Criterios para SONNET** (cuando cumple 2+ de estos):
- [ ] Tareas complejas o no predecibles
- [ ] Contexto alto (>3,000 tokens input)
- [ ] Requiere razonamiento profundo
- [ ] Decisiones técnicas críticas
- [ ] Alto riesgo si hay error

**Agentes con HAIKU (justificación)**:
1. **planner**: Estructurado (roadmaps), bajo contexto, predecible
2. **ux-designer**: Tareas creativas pero estructuradas (componentes, layouts)
3. **cost-analyzer**: Cálculos numéricos, predecible, bajo riesgo
4. **tech-researcher**: Búsquedas estructuradas, documentación existente

**Agentes con SONNET (justificación)**:
1. **architect**: Decisiones críticas de arquitectura (alto impacto)
2. **data-architect**: Diseño de schemas complejos (crítico)
3. **security-specialist**: Seguridad requiere análisis profundo (alto riesgo)
4. **coder**: Código complejo (Next.js, TypeScript, React)
5. **ai-specialist**: Integración LLM, prompts (expertise especializado)
6. **tester**: Análisis de edge cases (requiere razonamiento)
7. **documenter**: Documentación técnica compleja + Mermaid
8. **code-reviewer**: Revisión crítica de código (detección de bugs)
9. **system-analyzer**: Debugging complejo (razonamiento sistémico)
10. **diagram-designer**: Diagramas arquitectónicos (visualización compleja)

---

## 5. PATRONES DE COORDINACIÓN (WORKFLOWS)

### 5.1 Patrón SECUENCIAL (A → B → C)

**Cuándo usar**: Cuando B depende del output de A, y C depende de B.

**Ejemplo** (Fase 2: Auth):
```
security-specialist (diseña auth)
  → data-architect (crea tablas)
  → coder (implementa endpoints)
  → ux-designer (crea UI de login)
  → tester (valida funcionamiento)
  → documenter (documenta flujo)
```

**Ventajas**: Claridad de dependencias, validación por etapas
**Desventajas**: Tiempo total = suma de tiempos individuales

### 5.2 Patrón PARALELO (A + B + C simultáneamente)

**Cuándo usar**: Cuando tareas son independientes y pueden ejecutarse simultáneamente.

**Ejemplo** (Fase 1: Fundación):
```
architect (arquitectura) + ux-designer (design system) + coder (setup Next.js)
  → Sincronización cuando todos completan
  → documenter (documenta todo)
```

**Ventajas**: Reduce tiempo total significativamente
**Desventajas**: Requiere coordinación, posibles conflictos

**Fases con paralelización**:
- **Fase 1**: architect + ux-designer + coder (setup) = PARALELO
- **Fases 4-5-6**: Portfolio + Blog + IA pueden correr en paralelo (no se bloquean)

### 5.3 Patrón ITERATIVO (implementar → validar → refinar)

**Cuándo usar**: Cuando calidad incremental es crítica (feedback loop hasta criterios).

**Ejemplo** (Fase 5: Markdown rendering):
```
coder (implementa parser Markdown)
  → tester (valida edge cases, reporta bugs)
  → coder (refina parser hasta pasar tests)
  → Máximo 3 iteraciones antes de escalada
```

**Ventajas**: Calidad alta, detección temprana de problemas
**Desventajas**: Puede extender timeline si hay muchas iteraciones

### 5.4 Patrón CONDICIONAL (decisión → rutas diferentes)

**Cuándo usar**: Cuando necesitas decisión contextual antes de proceder.

**Ejemplo** (Bug detection):
```
tester (detecta bug)
  → SI bug es crítico → ESCALADA EMERGENCIA (RUTA B)
  → SI bug es menor → RUTA A (nueva feature / fix normal)
```

**Ventajas**: Optimiza recursos según severidad
**Desventajas**: Requiere toma de decisión clara

---

## 6. MODOS DE OPERACIÓN (4 MODOS ADAPTATIVOS)

### 6.1 MODO 1: DESARROLLO (Fases 0-8 del Roadmap)

**Contexto**: Desarrollo planificado del proyecto cjhirashi.com siguiendo las 9 fases.

**Características**:
- Patrón: SECUENCIAL + PARALELO (optimización por fase)
- Timeline: 4-5 semanas
- SLA: Variable según fase
- Prioridad: Normal (sigue roadmap)

**Agentes Participantes**: Todos los 14 agentes de proyecto según fase

**Workflow Principal**:
```
1. planner → ROADMAP ya generado (PROJECT-ROADMAP.md)
2. CLAUDE lee ROADMAP → identifica fase actual
3. CLAUDE activa agentes según mapeo de fase
4. Agentes ejecutan según patrón (SECUENCIAL/PARALELO)
5. CLAUDE valida criterios de finalización
6. CLAUDE actualiza PROJECT-ROADMAP.md
7. CLAUDE reporta al usuario (Charlie)
```

**Documentación del Workflow**: `.claude/sys-docs/workflows/MODE-1-DESARROLLO-workflow.md`

### 6.2 MODO 2: FEATURE (RUTA A - Nueva Funcionalidad)

**Contexto**: Agregar nueva feature NO planeada originalmente (fuera del roadmap).

**Características**:
- Patrón: SECUENCIAL (Assessment → Planning → Spec → Implementación → Review → Deploy → Docs)
- Timeline: 3-14 días
- SLA: Variable (NO crítico)
- Prioridad: Media-Alta

**Agentes Participantes**:
1. architect (Lead Assessment)
2. planner (Planning)
3. architect (Especificación)
4. coder (Implementación)
5. code-reviewer (Review)
6. architect (Deployment)
7. documenter (Documentación)

**Workflow Principal**:
```
1. architect → Análisis de impacto (¿afecta qué fase?)
2. planner → User stories, estimación
3. architect → ADR, actualizar ARCHITECTURE.md
4. coder → Rama feature/, implementación, tests
5. code-reviewer → Calidad, security check
6. architect → Deploy staging → production
7. documenter → Actualizar docs, changelog
```

**Documentación del Workflow**: `.claude/sys-docs/workflows/MODE-2-FEATURE-workflow.md`

### 6.3 MODO 3: EMERGENCIA (RUTA B - Bug Crítico)

**Contexto**: Bug bloqueante de usuarios en producción que requiere fix INMEDIATO.

**Características**:
- Patrón: EXPEDITO (Triage → Fix → Review rápido → Deploy inmediato → Post-mortem)
- Timeline: 4-6 horas
- SLA: **CRÍTICO - 4 HORAS MÁXIMO**
- Prioridad: **MÁXIMA (bloquea todo lo demás)**

**Agentes Participantes**:
1. CLAUDE (Triage)
2. coder (Fix)
3. code-reviewer (Review Expedito - 30 min)
4. architect (Deploy Inmediato)
5. CLAUDE (Post-mortem)

**Workflow Principal**:
```
1. CLAUDE → Triage (severidad, fase afectada, owner original)
2. coder → Rama hotfix/, debug, fix, test regresión (2-3h)
3. code-reviewer → Review expedito (30 min MAX)
4. architect → Production + monitoreo 2h + comunicar
5. CLAUDE → Post-mortem (root cause, lessons learned)
```

**Timeline Típico**:
- Triage: 30 min
- Fix: 2-3 horas
- Review: 30 min
- Deploy: 30 min
- Monitoreo: 2 horas
- **TOTAL: 4-6 horas**

**Documentación del Workflow**: `.claude/sys-docs/workflows/MODE-3-EMERGENCIA-workflow.md`

### 6.4 MODO 4: OPTIMIZACIÓN (RUTA C - Refactoring/Performance)

**Contexto**: Mejora interna de performance/código SIN cambiar features (zero feature changes).

**Características**:
- Patrón: VALIDACIÓN STRICT (Assessment → Planning → Implementación → Validation → Merge)
- Timeline: 3-7 días
- SLA: Flexible (NO urgente)
- Prioridad: Media (según impacto en SLA/costos)

**Agentes Participantes**:
1. architect o system-analyzer (Assessment)
2. planner (Planning)
3. coder (Implementación)
4. architect (Validation)
5. CLAUDE (Merge & Release)

**Workflow Principal**:
```
1. architect → Identificar cuello de botella, proponer solución, ROI
2. planner → Duración, prioridad, schedule
3. coder → Rama perf/, zero feature changes, benchmark antes/después
4. architect → Validar SLA, sin regresiones
5. CLAUDE → Minor version bump, changelog, deploy
```

**Validación Crítica**:
- Benchmark ANTES vs DESPUÉS (mejora >= 10% medible)
- ZERO feature changes (comportamiento idéntico)
- Todos los tests pasan (sin regresiones)

**Documentación del Workflow**: `.claude/sys-docs/workflows/MODE-4-OPTIMIZACION-workflow.md`

---

## 7. MATRIZ DE DECISIÓN: ¿Cuál Modo Activar?

**CLAUDE evalúa el contexto y decide qué modo usar:**

```
PREGUNTA 1: ¿Es bug bloqueante en producción?
   SÍ → MODO 3: EMERGENCIA (RUTA B) - SLA: 4 horas
   NO → PREGUNTA 2

PREGUNTA 2: ¿Es nueva funcionalidad?
   SÍ → MODO 2: FEATURE (RUTA A) - Timeline: 3-14 días
   NO → PREGUNTA 3

PREGUNTA 3: ¿Es mejora interna sin cambio de features?
   SÍ → MODO 4: OPTIMIZACIÓN (RUTA C) - Timeline: 3-7 días
   NO → PREGUNTA 4

PREGUNTA 4: ¿Es parte de Fases 0-8 planeadas?
   SÍ → MODO 1: DESARROLLO (Fases 0-8) - Timeline: 4-5 semanas
   NO → Solicitar claridad al usuario (¿Qué tipo de trabajo es?)
```

---

## 8. HANDOFFS ENTRE AGENTES (PROTOCOLO)

### 8.1 Estructura de Handoff

**Cuando agente A termina tarea y pasa a agente B**:

```
AGENTE A completa tarea
  ↓
CLAUDE valida criterios de salida del agente A
  ↓
CLAUDE prepara contexto para agente B:
  - Qué completó agente A
  - Qué archivos generó
  - Qué decisiones tomó
  - Qué debe hacer agente B
  - Criterios de éxito de agente B
  ↓
CLAUDE delega a agente B
  ↓
AGENTE B ejecuta tarea
  ↓
CLAUDE valida criterios de salida del agente B
  ↓
...continúa flujo
```

### 8.2 Ejemplo Concreto (Fase 1: architect → coder)

**Handoff**:
```
architect completó:
  - ARCHITECTURE.md (7-layer architecture)
  - ADR.md (decisiones arquitectónicas)
  - Decidió usar App Router (Next.js 15)
  - Decidió usar Prisma para ORM

coder debe hacer:
  - Setup Next.js 15 con App Router
  - Instalar Prisma
  - Crear estructura de carpetas según ARCHITECTURE.md
  - Configurar Tailwind CSS v4

Criterios de éxito de coder:
  - [ ] Next.js 15 instalado y funcional
  - [ ] Prisma configurado
  - [ ] Estructura de carpetas correcta
  - [ ] Tailwind CSS v4 compilando
```

### 8.3 Validación de Handoffs

**CLAUDE valida ANTES de pasar control**:
- [ ] Agente anterior completó 100% de criterios
- [ ] Archivos generados están en ubicación correcta
- [ ] Documentación está actualizada
- [ ] No hay blockers pendientes
- [ ] Agente siguiente tiene contexto claro

**Si falta algo**: RE-ABRIR con agente anterior, NO pasar control a siguiente.

---

## 9. PROTOCOLO DE MANEJO DE ERRORES Y ESCALACIÓN

### 9.1 Detección de Error

**Cuando agente falla o reporta problema**:

```
PASO 1: DOCUMENTAR error
  - ¿Qué agente?
  - ¿En qué substep?
  - ¿Error exacto?
  - ¿Es recoverable?

PASO 2: EVALUAR opciones
  - ¿Recoverable? → Reintentar (máx 3 veces)
  - ¿Especialista alterno? → Cambiar agente
  - ¿Información incompleta? → Solicitar a usuario
  - ¿Escalación crítica? → Informar usuario inmediatamente

PASO 3: COMUNICAR al usuario
  - Problema detectado
  - Opciones disponibles
  - Recomendación de CLAUDE

PASO 4: USUARIO DECIDE
  - Ejecutar decisión
  - Actualizar estado (.claude/task-state.json)
  - Continuar o escalar
```

### 9.2 Protocolo de Escalación (4 Niveles)

**NIVEL 1: Reintentar** (si recoverable)
- Máximo 3 reintentos
- Esperar 30s-1min entre reintentos
- Documentar intento en task-state.json

**NIVEL 2: Especialista alterno** (si agente falla)
- Cambiar a agente con expertise similar
- Documentar cambio en task-state.json
- Ejemplo: coder falla → system-analyzer (debugging)

**NIVEL 3: Solicitar información** (si info incompleta)
- Preguntar al usuario específicamente qué falta
- Bloquear tarea hasta respuesta
- Documentar bloqueador en task-state.json

**NIVEL 4: Notificar usuario** (si crítico)
- Informar problema inmediatamente
- Presentar opciones
- Esperar decisión del usuario

### 9.3 Ejemplo de Escalación

**Contexto**: coder falla al integrar Mermaid en Fase 5 (después de 2 reintentos)

```
NIVEL 1: Reintentar (2 intentos fallidos)
  ↓
NIVEL 2: Cambiar a system-analyzer (debugging)
  - system-analyzer identifica: conflicto de versiones de Mermaid con React 19
  ↓
NIVEL 3: Solicitar información
  - CLAUDE pregunta a usuario: "¿Prefieres downgrade de React 19 o buscar alternativa a Mermaid?"
  ↓
Usuario decide: "Busca alternativa"
  ↓
NIVEL 2: tech-researcher investiga alternativas
  - Encuentra: react-mermaid-v2 compatible con React 19
  ↓
NIVEL 1: coder reintenta con react-mermaid-v2
  - ÉXITO
```

---

## 10. DOCUMENTACIÓN GENERADA POR FASE

**Total de documentos estimados**: 40-50 archivos Markdown

### Documentos por Categoría

**Arquitectura** (6 docs):
- ARCHITECTURE.md
- ADR.md
- COMPONENT-INVENTORY.md
- (+ diagramas Mermaid)

**Diseño** (3 docs):
- DESIGN-SYSTEM.md
- (+ componentes base)

**Base de Datos** (6 docs):
- DB-SCHEMA.md
- MIGRATION-001-auth-tables.sql
- MIGRATION-002-projects-table.sql
- MIGRATION-003-posts-table.sql
- (+ indexes, relations)

**Autenticación** (3 docs):
- AUTHENTICATION.md
- AUTH-ENDPOINTS.md
- ADMIN-LAYOUT.md

**Páginas Públicas** (4 docs):
- HOME-PAGE.md
- CONTACT-PAGE.md
- NAVIGATION.md
- SEO-CONFIG.md

**Portfolio** (4 docs):
- PORTFOLIO-SYSTEM.md
- PROJECT-ENDPOINTS.md
- PORTFOLIO-ADMIN.md
- PORTFOLIO-TESTS.md

**Blog** (6 docs):
- BLOG-SYSTEM.md
- MARKDOWN-CONFIG.md
- POST-ENDPOINTS.md
- BLOG-ADMIN.md
- BLOG-TESTS.md
- MERMAID-INTEGRATION.md

**IA** (5 docs):
- AI-INTEGRATION.md
- AI-PROMPTS.md
- AI-ENDPOINTS.md
- AI-ADMIN-UI.md
- AI-COST-ANALYSIS.md

**CMS** (3 docs):
- CMS-FEATURES.md
- VERSIONING.md
- EXPORT.md

**Analíticas y Performance** (5 docs):
- ANALYTICS-SETUP.md
- PERFORMANCE-OPTIMIZATION.md
- CACHING-STRATEGY.md
- TESTING-FINAL.md
- DEPLOYMENT-CHECKLIST.md

**Testing** (5 docs):
- TESTING-AUTH.md
- RESPONSIVE-TESTS.md
- PORTFOLIO-TESTS.md
- BLOG-TESTS.md
- TESTING-FINAL.md

**Estándares** (2 docs):
- CODE-STANDARDS.md
- (+ naming conventions)

---

## 11. CRITERIOS DE FINALIZACIÓN DEL PROYECTO

**cjhirashi.com está COMPLETO cuando**:

### Fases Completadas (9/9)
- [ ] Fase 0: Página "En Construcción" ✅ COMPLETADO
- [ ] Fase 1: Fundación & Diseño ✅ COMPLETADO
- [ ] Fase 2: Autenticación & Admin Core ✅ COMPLETADO
- [ ] Fase 3: Sitio Público - Core ✅ COMPLETADO
- [ ] Fase 4: Sistema de Portafolio ✅ COMPLETADO
- [ ] Fase 5: Sistema de Blog ✅ COMPLETADO
- [ ] Fase 6: Asistente IA ✅ COMPLETADO
- [ ] Fase 7: CMS Customización ✅ COMPLETADO
- [ ] Fase 8: Analíticas & Polish ✅ COMPLETADO

### Métricas Globales
- [ ] PageSpeed Insights >= 90 (mobile + desktop)
- [ ] Test Coverage >= 80% (todos los módulos)
- [ ] TTFB <= 500ms (Time To First Byte)
- [ ] Bundle size < 150KB (JS inicial)
- [ ] Zero breaking bugs en producción
- [ ] SEO metadata 100% completo
- [ ] Mobile responsive 100% (375px-1920px)
- [ ] OWASP Top 10 considerado (security)
- [ ] CSRF protection implementado
- [ ] Documentación 100% completa (40-50 docs)

### Validaciones Finales
- [ ] Charlie valida y aprueba diseño
- [ ] Charlie valida y aprueba funcionalidad
- [ ] Deployment a cjhirashi.com exitoso
- [ ] Monitoreo post-deployment estable (24h)
- [ ] PROJECT-ROADMAP.md actualizado a 100%

---

## 12. PRÓXIMOS PASOS (IMPLEMENTACIÓN)

### 12.1 Creación de Especificaciones de Agentes

**system-claude (yo) debe crear/actualizar**:
- `.claude/sys-docs/agents/planner-agent-spec.md`
- `.claude/sys-docs/agents/architect-agent-spec.md`
- `.claude/sys-docs/agents/data-architect-agent-spec.md`
- `.claude/sys-docs/agents/security-specialist-agent-spec.md`
- `.claude/sys-docs/agents/ux-designer-agent-spec.md`
- `.claude/sys-docs/agents/coder-agent-spec.md`
- `.claude/sys-docs/agents/ai-specialist-agent-spec.md`
- `.claude/sys-docs/agents/tester-agent-spec.md`
- `.claude/sys-docs/agents/cost-analyzer-agent-spec.md`
- `.claude/sys-docs/agents/documenter-agent-spec.md`
- `.claude/sys-docs/agents/tech-researcher-agent-spec.md`
- `.claude/sys-docs/agents/code-reviewer-agent-spec.md`
- `.claude/sys-docs/agents/system-analyzer-agent-spec.md`
- `.claude/sys-docs/agents/diagram-designer-agent-spec.md`

(14 especificaciones de agentes de proyecto)

### 12.2 Solicitud a prompt-engineer

**Después de crear especificaciones**:
- Solicitar a prompt-engineer: "Crea/actualiza prompts basados en las 14 especificaciones creadas"
- prompt-engineer lee specs → crea prompts en `.claude/agents/`
- Validar integridad 1-to-1 (docs ↔ prompts)

### 12.3 Validación con orchestration-validator

**Después de prompts creados**:
- Solicitar a orchestration-validator: "Valida consistencia del sistema de orquestación"
- orchestration-validator genera reporte
- Corregir discrepancias si existen

### 12.4 Reporte al Usuario (Charlie)

**Después de validación**:
- Presentar resumen ejecutivo de orquestación
- Agentes clave por fase
- Costos estimados LLM
- Estado de validación
- Solicitar aprobación para iniciar Fase 0

---

## 13. RESUMEN EJECUTIVO PARA CHARLIE

**Orquestación Diseñada para cjhirashi.com**:

### Equipo
- 14 agentes de proyecto (desarrollo)
- 3 agentes de orquestación (diseño, prompts, validación)

### Distribución LLM
- 4 agentes Haiku (ahorro de costos ~75%)
- 10 agentes Sonnet (calidad máxima donde importa)

### Timeline
- 4-5 semanas (compatible con roadmap)
- 181-240 horas estimadas
- Con buffer 20%: 217-288 horas

### Costos LLM Estimados
- Haiku: $0.52-$0.67
- Sonnet: $11.25-$15.12
- **TOTAL: $12-$16 (para TODO el proyecto)**
- Ahorro vs solo Sonnet: ~75% ($45-$60 ahorrados)

### Fases con Paralelización
- Fase 1: architect + ux-designer + coder (simultáneos)
- Fases 4-5-6: Portfolio + Blog + IA (pueden correr en paralelo)

### 4 Modos de Operación
- MODO 1: DESARROLLO (Fases 0-8) - 4-5 semanas
- MODO 2: FEATURE (nueva funcionalidad) - 3-14 días
- MODO 3: EMERGENCIA (bug crítico) - SLA 4 horas
- MODO 4: OPTIMIZACIÓN (performance) - 3-7 días

### Documentación Esperada
- 40-50 archivos Markdown
- Arquitectura, diseño, API, testing, deployment
- Actualización continua de PROJECT-ROADMAP.md

### Próximo Paso
- Aprobar esta orquestación
- system-claude crea especificaciones de 14 agentes
- prompt-engineer crea prompts basados en specs
- orchestration-validator valida consistencia
- Iniciar Fase 0 (Página "En Construcción")

---

**Estado**: Orquestación DISEÑADA, pendiente de aprobación de Charlie.

**Siguiente Acción**: Crear especificaciones de agentes → solicitar prompts → validar → iniciar Fase 0.

---

**Versión 1.0 - Creado 2025-10-25 por system-claude (Sonnet)**

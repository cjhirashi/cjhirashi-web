# WORKFLOWS - Índice de Workflows por Fase

**Workflows Específicos para las 9 Fases del Proyecto cjhirashi-agents MVP**

**Versión**: 3.0
**Fecha**: 2025-10-23
**Autor**: system-claude
**Estado**: ✅ Completado

---

## 📋 TABLA DE CONTENIDOS

1. [Introducción](#introducción)
2. [Workflows por Fase](#workflows-por-fase)
3. [Navegación Rápida](#navegación-rápida)

---

## 🎯 INTRODUCCIÓN

Este directorio contiene los workflows detallados para cada una de las 9 fases del PROJECT-ROADMAP.md.

**Cada workflow incluye**:
- Objetivo de la fase
- Agentes participantes y orden de ejecución
- Secuencia de tareas
- Diagramas Mermaid de flujo
- Puntos de validación
- Criterios de finalización
- Timeline estimado
- Handoff a siguiente fase

---

## 🎮 MODOS DE OPERACIÓN

Este directorio contiene workflows para **5 MODOS DE OPERACIÓN**:

1. **MODO 1: DESARROLLO** - Fases 1-9 del proyecto (workflows PHASE-X)
2. **MODO 2: FEATURE** - Nueva funcionalidad (workflow RUTA-A)
3. **MODO 3: EMERGENCIA** - Bug crítico (workflow RUTA-B)
4. **MODO 4: OPTIMIZACIÓN** - Refactoring/Performance (workflow RUTA-C)
5. **MODO 5: ORQUESTACIÓN** - Cambios en sistema de agentes (workflows ORCHESTRATION-X)

---

## 🧭 MATRIZ DE DECISIÓN: ¿Cuál Workflow Usar?

| Contexto | Modo | Workflow | Timeline | SLA | Prioridad |
|----------|------|----------|----------|-----|-----------|
| **Desarrollo del MVP** (Fases 1-9 planeadas) | MODO 1 | PHASE-1 a PHASE-9 | 3-4 meses | Variable | Normal |
| **Nueva feature** NO planeada | MODO 2 | RUTA-A | 3-14 días | Flexible | Media-Alta |
| **Bug crítico** bloqueante en producción | MODO 3 | RUTA-B | 4-6 horas | **4h máx** | **MÁXIMA** |
| **Optimización** interna (zero feature changes) | MODO 4 | RUTA-C | 3-7 días | Flexible | Media |
| **Cambios en orquestación** de agentes | MODO 5 | ORCHESTRATION-X | 2-6 horas | Variable | Alta |

**¿Cómo decidir?**
- ¿Es bug bloqueante en producción? → **RUTA-B (EMERGENCIA)**
- ¿Es cambio en `.claude/` o sistema de agentes? → **ORCHESTRATION-X (ORQUESTACIÓN)**
- ¿Es nueva funcionalidad? → **RUTA-A (FEATURE)**
- ¿Es mejora interna sin cambio de features? → **RUTA-C (OPTIMIZACIÓN)**
- ¿Es parte de fases 1-9 planeadas? → **PHASE-X (DESARROLLO)**

---

## 📂 WORKFLOWS POR FASE (MODO 1: DESARROLLO)

### Fase 1: Requirements & Technical Stack ✅
**Archivo**: [PHASE-1-workflows.md](./PHASE-1-workflows.md)
**Estado**: ✅ COMPLETADO (2 días)
**Agentes**: planner (lead), tech-researcher, architect (validador)
**Entregables**: 7 documentos (requirements, user-stories, scope, risks, stakeholders, stack-recommendation, incompatibilities)

---

### Fase 2: Architecture Design ✅
**Archivo**: [PHASE-2-workflows.md](./PHASE-2-workflows.md)
**Estado**: ✅ COMPLETADO (2 días)
**Agentes**: architect (lead), diagram-designer, documenter, security-specialist (consulta)
**Entregables**: ARCHITECTURE.md, 6 ADRs, 3 diagramas Mermaid

---

### Fase 3: Database Design & Data Modeling ✅
**Archivo**: [PHASE-3-workflows.md](./PHASE-3-workflows.md)
**Estado**: ✅ COMPLETADO (1 día)
**Agentes**: data-architect (lead), diagram-designer, documenter, architect (validador)
**Entregables**: DATABASE.md (54 tablas), PINECONE-SCHEMA.md, ERD.md, MIGRATIONS.md, INDEXING.md

---

### Fase 4: API Implementation & Testing ⏳
**Archivo**: [PHASE-4-workflows.md](./PHASE-4-workflows.md)
**Estado**: ⏳ EN PROGRESO (3-4 días estimados)
**Agentes**: architect (lead), coder, security-specialist, tester, system-analyzer (validador)
**Entregables**: API-DESIGN.md, ENDPOINTS.md, AUTHENTICATION.md, ERROR-HANDLING.md, TESTING-STRATEGY.md, RATE-LIMITING.md, PHASE4-VALIDATION.md

---

### Fase 5: Core Backend Implementation 🔵
**Archivo**: [PHASE-5-workflows.md](./PHASE-5-workflows.md)
**Estado**: 🔵 PLANEADA (2-3 semanas estimadas)
**Agentes**: coder (lead backend), ai-specialist, architect, security-specialist, tester (validador), code-reviewer
**Entregables**: Chat API funcional, RAG integration, Multi-LLM routing, Tests unitarios

---

### Fase 6: Frontend Development 🔵
**Archivo**: [PHASE-6-workflows.md](./PHASE-6-workflows.md)
**Estado**: 🔵 PLANEADA (2-3 semanas, PARALELO a Fase 5)
**Agentes**: coder (lead frontend), ux-designer, tester (validador), documenter, code-reviewer
**Entregables**: Dashboard UI, Chat interface, Settings panel, Component tests

---

### Fase 7: Voice, Generative Features & Deployment 🔵
**Archivo**: [PHASE-7-workflows.md](./PHASE-7-workflows.md)
**Estado**: 🔵 PLANEADA (2 semanas estimadas)
**Agentes**: ai-specialist (lead), coder, tester, architect (deploy), security-specialist, documenter, code-reviewer
**Entregables**: Voice agents, Image generation, MVP v0.1.0-alpha en producción

---

### Fase 8: Beta Testing & Feedback 🔵
**Archivo**: [PHASE-8-workflows.md](./PHASE-8-workflows.md)
**Estado**: 🔵 PLANEADA (2 semanas estimadas)
**Agentes**: tester (lead), coder, ux-designer, system-analyzer, documenter
**Entregables**: Beta testing report, Bug fixes, Performance optimizations

---

### Fase 9: Growth & Phase 2 Features 🔵
**Archivo**: [PHASE-9-workflows.md](./PHASE-9-workflows.md)
**Estado**: 🔵 PLANEADA (3 meses estimados)
**Agentes**: planner (lead), coder, ux-designer, cost-analyzer, data-architect, architect (validador), documenter, code-reviewer
**Entregables**: Pricing page, Payment processing, Phase 2 features, v1.0.0

---

## 🗺️ NAVEGACIÓN RÁPIDA

### Por Estado

**COMPLETADAS ✅**:
- [Fase 1 - Requirements](./PHASE-1-workflows.md)
- [Fase 2 - Architecture](./PHASE-2-workflows.md)
- [Fase 3 - Database](./PHASE-3-workflows.md)

**EN PROGRESO ⏳**:
- [Fase 4 - API Design](./PHASE-4-workflows.md)

**PLANEADAS 🔵**:
- [Fase 5 - Backend](./PHASE-5-workflows.md)
- [Fase 6 - Frontend](./PHASE-6-workflows.md)
- [Fase 7 - Voice & Deploy](./PHASE-7-workflows.md)
- [Fase 8 - Beta Testing](./PHASE-8-workflows.md)
- [Fase 9 - Growth](./PHASE-9-workflows.md)

### Por Duración

**CORTAS (1-2 días)**:
- Fase 3: 1 día
- Fase 1: 2 días
- Fase 2: 2 días

**MEDIAS (3-4 días)**:
- Fase 4: 3-4 días

**MEDIAS (2 semanas)**:
- Fase 7: 2 semanas
- Fase 8: 2 semanas

**LARGAS (2-3 semanas)**:
- Fase 5: 2-3 semanas
- Fase 6: 2-3 semanas

**MUY LARGAS (3 meses)**:
- Fase 9: 3 meses

---

## 🛣️ WORKFLOWS DE RUTAS (MODO 2, 3, 4)

### RUTA A: Nueva Feature / Funcionalidad (MODO 2: FEATURE)
**Archivo**: [RUTA-A-NUEVA-FEATURE-workflows.md](./RUTA-A-NUEVA-FEATURE-workflows.md)
**Contexto**: Nueva funcionalidad NO planeada originalmente
**Patrón**: SECUENCIAL (7 pasos: Assessment → Planning → Especificación → Implementación → Review → Deployment → Documentación)
**Timeline**: 3-14 días (según complejidad)
**SLA**: Flexible (NO crítico)
**Prioridad**: Media-Alta (según business value)
**Agentes**: architect, planner, coder, code-reviewer, security-specialist, tester, documenter

**Ejemplo**: "Agregar soporte para audio generation con OpenAI TTS"

**Criterios de Finalización**:
- Assessment completado (impacto evaluado, viabilidad confirmada)
- Planning completado (user stories, tareas, asignación)
- Especificación creada (ADR, docs actualizados)
- Código implementado (rama feature/, tests >80%)
- Code review aprobado + Security check (si aplica)
- Desplegado a staging y production (estable)
- Documentación actualizada (ROADMAP, CHANGELOG, guías)

---

### RUTA B: Bug Crítico / Hotfix (MODO 3: EMERGENCIA)
**Archivo**: [RUTA-B-BUG-CRITICO-workflows.md](./RUTA-B-BUG-CRITICO-workflows.md)
**Contexto**: Bug bloqueante de usuarios en producción
**Patrón**: EXPEDITO (5 pasos: Triage → Fix → Review Expedito → Deploy Inmediato → Post-mortem)
**Timeline**: **4-6 horas (SLA: 4 horas máximo)**
**SLA**: **CRÍTICO - 4 HORAS MÁXIMO**
**Prioridad**: **MÁXIMA (bloquea todo lo demás)**
**Agentes**: CLAUDE (triage + post-mortem), coder, code-reviewer, security-specialist (si aplica), architect

**Ejemplos de bugs críticos**:
- Chat endpoint retorna 500 errors
- Auth falla para todos los usuarios
- Database queries causan timeouts críticos
- Security vulnerability detectada

**Criterios de Finalización**:
- Triage completado (severidad CRÍTICA, SLA 4h establecido)
- Fix implementado (rama hotfix/, test regresión)
- Review expedito aprobado (<30 min)
- Desplegado a production (sin staging, directo)
- Monitoreo 2 horas completado (sin errores)
- Post-mortem documentado (root cause, lessons learned)
- **SLA CUMPLIDO: <4 horas desde detección hasta deploy**

---

### RUTA C: Refactoring / Mejora de Performance (MODO 4: OPTIMIZACIÓN)
**Archivo**: [RUTA-C-REFACTORING-workflows.md](./RUTA-C-REFACTORING-workflows.md)
**Contexto**: Mejora interna de performance/código SIN cambiar features
**Patrón**: VALIDACIÓN STRICT (5 pasos: Assessment → Planning → Implementación con benchmarks → Validation → Merge & Release)
**Timeline**: 3-7 días
**SLA**: Flexible (NO urgente)
**Prioridad**: Media (según impacto en SLA/costos)
**Agentes**: data-architect/architect (assessment + validation), planner, coder, CLAUDE (merge & release)

**Ejemplos de optimizaciones**:
- RAG queries latency > SLA (500ms vs 400ms target)
- Database queries lentas (N+1 queries)
- Bundle size muy grande (performance issue)
- Technical debt acumulado

**REGLA DE ORO**: **ZERO FEATURE CHANGES** (usuario NO nota diferencia funcional, solo mejora de performance)

**Criterios de Finalización**:
- Assessment completado (cuello de botella identificado, ROI positivo)
- Benchmark baseline ejecutado (métricas antes)
- Optimización implementada (zero feature changes)
- Benchmark post-optimización ejecutado (**mejora >= 10%**)
- Validation aprobada (sin regresiones)
- Desplegado a production (mejora confirmada)
- CHANGELOG.md actualizado (version bump)

---

---

## 🔧 WORKFLOWS DE ORQUESTACIÓN (MODO 5: ORQUESTACIÓN)

### ORCHESTRATION: System-Claude Workflow
**Archivo**: [ORCHESTRATION-system-claude-workflow.md](./ORCHESTRATION-system-claude-workflow.md)
**Contexto**: Cambios en estructura de agentes, workflows, protocolos
**Patrón**: SECUENCIAL (7 pasos: Recibir → Analizar → Diseñar → Documentar → Solicitar Prompts → Validar → Reportar)
**Timeline**: 2-6 horas (según complejidad)
**SLA**: Variable (según urgencia)
**Prioridad**: Alta (afecta a todos los agentes)
**Agentes**: system-claude (lead), prompt-engineer, orchestration-validator, CLAUDE

**Ejemplo**: "Crear nuevo agente QA para validación de código"

**Criterios de Finalización**:
- Solicitud recibida y validada (100% claro que es orquestación)
- Análisis de necesidad completado (impacto evaluado, agentes identificados)
- Solución diseñada (estructura, workflows, protocolos)
- Documentación creada/actualizada en `.claude/sys-docs/`
- Prompts creados/actualizados por prompt-engineer
- Validación de integridad aprobada (sin discrepancias 1-to-1)
- Reporte de completitud enviado a CLAUDE
- Sistema listo para ejecutar

---

### ORCHESTRATION: Prompt-Engineer Workflow
**Archivo**: [ORCHESTRATION-prompt-engineer-workflow.md](./ORCHESTRATION-prompt-engineer-workflow.md)
**Contexto**: Creación/actualización de prompts basados en documentación
**Patrón**: SECUENCIAL (5 pasos: Recibir → Leer/Analizar → Crear/Actualizar → Validar → Reportar)
**Timeline**: 30 minutos - 1 hora por agente
**SLA**: Variable (depende de urgencia de system-claude)
**Prioridad**: Alta (bloquea completitud de orquestación)
**Agentes**: prompt-engineer (lead), system-claude, orchestration-validator

**Ejemplo**: "Crear prompt para agente QA basándote en `.claude/sys-docs/agents/qa-doc.md`"

**Criterios de Finalización**:
- Solicitud recibida de system-claude (con documentación válida)
- Documentación leída y analizada 100%
- Prompt creado/actualizado en `.claude/agents/[agente].md`
- TODAS las responsabilidades y tareas documentadas están en prompt
- NO hay tareas inventadas fuera de documentación
- Prompt 100% EN ESPAÑOL
- Modelo LLM correcto (haiku/sonnet/opus)
- Validación interna 1-to-1 aprobada
- Reporte de completitud enviado a system-claude

---

### ORCHESTRATION: Orchestration-Validator Workflow
**Archivo**: [ORCHESTRATION-orchestration-validator-workflow.md](./ORCHESTRATION-orchestration-validator-workflow.md)
**Contexto**: Verificación de coherencia entre diseño, documentación y prompts
**Patrón**: VALIDACIÓN EXHAUSTIVA (6 pasos: Recibir → Estructura → Integridad → Workflows → Reporte → Delegar)
**Timeline**: 30 minutos - 1 hora
**SLA**: Variable (según urgencia)
**Prioridad**: Crítica (bloquea aprobación de orquestación)
**Agentes**: orchestration-validator (lead), system-claude, prompt-engineer, CLAUDE

**Ejemplo**: "Validar que todos los agentes tienen documentación y prompts alineados 100%"

**Criterios de Finalización**:
- Solicitud recibida (scope claro)
- Estructura de agentes validada (16 agentes)
- Integridad 1-to-1 validada (docs ↔ prompts)
- Workflows validados (fases + rutas + orquestación)
- Reporte detallado generado
- Issues categorizados (CRÍTICO vs MENOR)
- Issues delegados a responsables (system-claude o prompt-engineer)
- Orquestación validada 100% coherente

---

## 📊 COMPARACIÓN DE RUTAS Y WORKFLOWS

| Ruta/Workflow | Timeline | SLA | Prioridad | Pasos | Validación | Output |
|---------------|----------|-----|-----------|-------|------------|--------|
| **RUTA A (FEATURE)** | 3-14 días | Flexible | Media-Alta | 7 pasos | Pre-deploy (code review) | Staging → Production |
| **RUTA B (EMERGENCIA)** | 4-6 horas | **4h máx** | **MÁXIMA** | 5 pasos | Expedita (30min) | **Production directo** |
| **RUTA C (OPTIMIZACIÓN)** | 3-7 días | Flexible | Media | 5 pasos | Strict (benchmarks) | Staging → Production |
| **ORCHESTRATION (system-claude)** | 2-6 horas | Variable | Alta | 7 pasos | Integridad 1-to-1 | Orquestación actualizada |
| **ORCHESTRATION (prompt-engineer)** | 30-60 min | Variable | Alta | 5 pasos | Interna 1-to-1 | Prompts creados |
| **ORCHESTRATION (validator)** | 30-60 min | Variable | Crítica | 6 pasos | Exhaustiva | Reporte de validación |

---

## 🔀 CAMBIO ENTRE MODOS

**El equipo puede CAMBIAR DE MODO sin fricción:**

**Ejemplo: De DESARROLLO (Fase 5) → EMERGENCIA (RUTA B)**
```
Estamos en Fase 5 (Backend Implementation)
   ↓
Bug crítico detectado: Chat endpoint 500 errors
   ↓
PAUSA Fase 5 → ACTIVA MODO EMERGENCIA (RUTA B)
   ↓
Fix aplicado en 4 horas
   ↓
RETOMA Fase 5 desde donde se pausó
```

**Ejemplo: De DESARROLLO (Fase 6) → FEATURE (RUTA A)**
```
Estamos en Fase 6 (Frontend Development)
   ↓
Usuario solicita: "Agregar audio generation"
   ↓
EVALÚA: ¿Bloquea Fase 6? NO → Puede diferirse
   ↓
PLANEA: Siguiente sprint (después de Fase 6)
   ↓
Fase 6 completa → ACTIVA MODO FEATURE (RUTA A)
   ↓
Feature implementada en 10 días
```

---

**Documento creado por**: system-claude
**Basado en**: PROJECT-ROADMAP.md + ORCHESTRATION-DESIGN.md
**Última actualización**: 2025-10-23

🚀 **Este directorio contiene los workflows de ejecución para las 9 fases del proyecto + 3 rutas adaptativas (FEATURE, EMERGENCIA, OPTIMIZACIÓN) + 3 workflows de orquestación (system-claude, prompt-engineer, orchestration-validator).**

---

## 📈 RESUMEN DE WORKFLOWS TOTALES

**Total workflows**: 15 workflows

**Workflows de DESARROLLO (MODO 1)**: 9 workflows
- PHASE-1 a PHASE-9

**Workflows de RUTAS (MODO 2, 3, 4)**: 3 workflows
- RUTA-A (FEATURE)
- RUTA-B (EMERGENCIA)
- RUTA-C (OPTIMIZACIÓN)

**Workflows de ORQUESTACIÓN (MODO 5)**: 3 workflows
- ORCHESTRATION-system-claude-workflow
- ORCHESTRATION-prompt-engineer-workflow
- ORCHESTRATION-orchestration-validator-workflow

**Estado de workflows**:
- ✅ COMPLETADOS: 12 workflows (9 fases + 3 rutas)
- ✅ NUEVOS: 3 workflows de orquestación (creados 2025-10-23)
- **Total documentados**: 15/15 (100%)

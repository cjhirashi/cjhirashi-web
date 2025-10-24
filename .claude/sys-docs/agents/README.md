# AGENTES - Índice y Navegación

**Índice de los 17 Agentes Especializados del Proyecto cjhirashi-agents MVP (14 de proyecto + 3 de orquestación)**

**Versión**: 2.0
**Fecha**: 2025-10-22
**Autor**: system-claude
**Estado**: ✅ Completado

---

## 📋 TABLA DE CONTENIDOS

1. [Introducción](#introducción)
2. [Agentes de Proyecto (14)](#agentes-de-proyecto-14)
3. [Agentes de Orquestación (3)](#agentes-de-orquestación-3)
4. [Navegación Rápida](#navegación-rápida)

---

## 🎯 INTRODUCCIÓN

Este directorio contiene las especificaciones COMPLETAS de los 17 agentes especializados (14 de proyecto + 3 de orquestación) que conforman el equipo del proyecto cjhirashi-agents MVP.

**Cada especificación incluye**:
- Responsabilidades principales
- Tareas específicas asignadas por fase
- Competencias técnicas
- Fases del roadmap donde participa
- Dependencias y handoffs
- Modelo LLM asignado
- Criterios de éxito
- Notas de implementación

**Uso de estas especificaciones**:
- **prompt-engineer**: Base para crear prompts (.claude/agents/)
- **system-claude**: Referencia para diseño de orquestación
- **CLAUDE (maestro)**: Guía para delegar tareas
- **orchestration-validator**: Validar integridad 1-to-1

---

## 👥 AGENTES DE PROYECTO (14)

Estos agentes se enfocan en desarrollo, implementación, testing, y documentación del producto cjhirashi-agents.

### 1. planner (Haiku)
**Especialidad**: Planificación y estimación
**Documento**: [planner-agent-spec.md](./planner-agent-spec.md)
**Fases**: 1, 9
**Rol**: Estructurar requisitos, crear user stories, planear features

---

### 2. architect (Sonnet)
**Especialidad**: Diseño de arquitectura de software
**Documento**: [architect-agent-spec.md](./architect-agent-spec.md)
**Fases**: 1 (validador), 2 (lead), 3 (validador), 4 (lead), 5, 7, 9
**Rol**: Diseñar arquitectura de 7 capas, crear ADRs, validar decisiones técnicas

---

### 3. data-architect (Sonnet)
**Especialidad**: Diseño de bases de datos y data modeling
**Documento**: [data-architect-agent-spec.md](./data-architect-agent-spec.md)
**Fases**: 3 (lead), 9
**Rol**: Diseñar schema de 54 tablas, ERD, migrations, indexing strategy

---

### 4. coder (Sonnet)
**Especialidad**: Implementación backend y frontend
**Documento**: [coder-agent-spec.md](./coder-agent-spec.md)
**Fases**: 4, 5 (lead backend), 6 (lead frontend), 7, 8, 9
**Rol**: Implementar Chat API, RAG, Dashboard, UI components

---

### 5. security-specialist (Sonnet)
**Especialidad**: Seguridad, auth, RBAC
**Documento**: [security-specialist-agent-spec.md](./security-specialist-agent-spec.md)
**Fases**: 2, 4, 5, 7
**Rol**: NextAuth setup, RBAC matrix, rate limiting, security best practices

---

### 6. ai-specialist (Sonnet)
**Especialidad**: Integración IA, LLMs, RAG
**Documento**: [ai-specialist-agent-spec.md](./ai-specialist-agent-spec.md)
**Fases**: 5, 7 (lead)
**Rol**: Vercel AI SDK, multi-LLM routing, RAG con Pinecone, voice agents

---

### 7. ux-designer (Haiku)
**Especialidad**: Diseño UI/UX
**Documento**: [ux-designer-agent-spec.md](./ux-designer-agent-spec.md)
**Fases**: 6, 8, 9
**Rol**: Diseñar componentes React, refinar UI/UX, feedback de usuarios

---

### 8. tester (Sonnet)
**Especialidad**: Testing y QA
**Documento**: [tester-agent-spec.md](./tester-agent-spec.md)
**Fases**: 4, 5, 6, 7, 8 (lead)
**Rol**: Unit tests, integration tests, E2E tests, QA, beta testing

---

### 9. cost-analyzer (Haiku)
**Especialidad**: Análisis de costos y optimización
**Documento**: [cost-analyzer-agent-spec.md](./cost-analyzer-agent-spec.md)
**Fases**: 9
**Rol**: Optimizar costos operacionales, proyección de gastos, ROI

---

### 10. documenter (Sonnet)
**Especialidad**: Documentación técnica y diagramas
**Documento**: [documenter-agent-spec.md](./documenter-agent-spec.md)
**Fases**: 2, 3, 6, 7, 8, 9
**Rol**: Crear documentación técnica, ADRs, deployment guides

---

### 11. tech-researcher (Haiku)
**Especialidad**: Investigación técnica
**Documento**: [tech-researcher-agent-spec.md](./tech-researcher-agent-spec.md)
**Fases**: 1
**Rol**: Investigar tech stack, comparar alternativas, mejores prácticas

---

### 12. code-reviewer (Sonnet)
**Especialidad**: Revisión de código y estándares
**Documento**: [code-reviewer-agent-spec.md](./code-reviewer-agent-spec.md)
**Fases**: 5, 6, 7, 9
**Rol**: Code review, validar estándares, best practices, TypeScript

---

### 13. system-analyzer (Sonnet)
**Especialidad**: Análisis de sistemas y validación
**Documento**: [system-analyzer-agent-spec.md](./system-analyzer-agent-spec.md)
**Fases**: 4 (validador), 8
**Rol**: Validar pre-deployment, performance tuning, análisis de sistemas

---

### 14. diagram-designer (Sonnet)
**Especialidad**: Diseño de diagramas técnicos Mermaid
**Documento**: [diagram-designer-agent-spec.md](./diagram-designer-agent-spec.md)
**Fases**: 2, 3
**Rol**: Crear diagramas Mermaid (arquitectura, ERD, flowcharts)

---

## 🔧 AGENTES DE ORQUESTACIÓN (3)

Estos agentes manejan la orquestación del equipo, NO el desarrollo del producto.

### 15. system-claude (Sonnet)
**Especialidad**: Diseño de orquestación de agentes
**Documento**: [system-claude-agent-spec.md](./system-claude-agent-spec.md)
**Fases**: TODAS (diseña orquestación adaptada al roadmap)
**Rol**: Analizar PROJECT-ROADMAP.md, diseñar equipo, definir responsabilidades, optimizar tokens

**CRÍTICO**: ÚNICO autorizado a modificar `.claude/sys-docs/`

---

### 16. prompt-engineer (Sonnet)
**Especialidad**: Generación y validación de prompts
**Documento**: [prompt-engineer-agent-spec.md](./prompt-engineer-agent-spec.md)
**Fases**: TODAS (crea prompts basados en especificaciones)
**Rol**: Leer docs de system-claude, crear prompts que implementan 100% de especificación, validar integridad 1-to-1

**CRÍTICO**: ÚNICO autorizado a modificar `.claude/agents/`

---

### 17. orchestration-validator (Sonnet)
**Especialidad**: Validación de consistencia (ejecuta bajo demanda)
**Documento**: [orchestration-validator-agent-spec.md](./orchestration-validator-agent-spec.md)
**Fases**: TODAS (valida cuando se solicita)
**Rol**: Validar coherencia docs ↔ prompts, detectar inconsistencias, generar reportes

**CRÍTICO**: Detecta problemas, DELEGA correcciones (NO modifica directamente)

---

## 🗺️ NAVEGACIÓN RÁPIDA

### Por Especialidad

**PLANIFICACIÓN & ESTRATEGIA**:
- [planner](./planner-agent-spec.md) - Planning, estimación, roadmaps
- [cost-analyzer](./cost-analyzer-agent-spec.md) - Análisis de costos, ROI

**ARQUITECTURA & DISEÑO**:
- [architect](./architect-agent-spec.md) - Arquitectura de software, ADRs
- [data-architect](./data-architect-agent-spec.md) - Data modeling, schema
- [ux-designer](./ux-designer-agent-spec.md) - UI/UX design

**DESARROLLO & IMPLEMENTACIÓN**:
- [coder](./coder-agent-spec.md) - Backend + Frontend
- [ai-specialist](./ai-specialist-agent-spec.md) - IA/LLMs, RAG

**SEGURIDAD & CALIDAD**:
- [security-specialist](./security-specialist-agent-spec.md) - Auth, RBAC, security
- [tester](./tester-agent-spec.md) - Testing, QA
- [code-reviewer](./code-reviewer-agent-spec.md) - Code review

**DOCUMENTACIÓN & VISUALIZACIÓN**:
- [documenter](./documenter-agent-spec.md) - Documentación técnica
- [diagram-designer](./diagram-designer-agent-spec.md) - Diagramas Mermaid

**INVESTIGACIÓN & ANÁLISIS**:
- [tech-researcher](./tech-researcher-agent-spec.md) - Investigación técnica
- [system-analyzer](./system-analyzer-agent-spec.md) - Análisis de sistemas

**ORQUESTACIÓN**:
- [system-claude](./system-claude-agent-spec.md) - Diseño de orquestación
- [prompt-engineer](./prompt-engineer-agent-spec.md) - Ingeniería de prompts
- [orchestration-validator](./orchestration-validator-agent-spec.md) - Validación

---

### Por Modelo LLM

**HAIKU (Claude 3.5 Haiku)**:
- planner
- ux-designer
- cost-analyzer
- tech-researcher

**SONNET (Claude 3.5 Sonnet)**:
- architect
- data-architect
- coder
- security-specialist
- ai-specialist
- tester
- documenter
- code-reviewer
- system-analyzer
- diagram-designer
- system-claude
- prompt-engineer
- orchestration-validator

---

### Por Fase del Roadmap

**Fase 1: Requirements**
- planner (lead)
- tech-researcher (secundario)
- architect (validador)

**Fase 2: Architecture**
- architect (lead)
- diagram-designer (secundario)
- documenter (secundario)
- security-specialist (consulta)

**Fase 3: Database**
- data-architect (lead)
- diagram-designer (secundario)
- documenter (secundario)
- architect (validador)

**Fase 4: API Design**
- architect (lead)
- coder (secundario)
- security-specialist (secundario)
- tester (secundario)
- system-analyzer (validador)

**Fase 5: Backend**
- coder (lead)
- ai-specialist (secundario)
- architect (consulta)
- security-specialist (consulta)
- tester (validador)
- code-reviewer (validador)

**Fase 6: Frontend**
- coder (lead)
- ux-designer (secundario)
- tester (validador)
- documenter (secundario)
- code-reviewer (validador)

**Fase 7: Voice & Deploy**
- ai-specialist (lead)
- coder (secundario)
- tester (validador)
- architect (deploy)
- security-specialist (consulta)
- documenter (secundario)
- code-reviewer (validador)

**Fase 8: Beta Testing**
- tester (lead)
- coder (secundario)
- ux-designer (secundario)
- system-analyzer (validador)
- documenter (secundario)

**Fase 9: Growth**
- planner (lead)
- coder (secundario)
- ux-designer (secundario)
- cost-analyzer (consulta)
- data-architect (consulta)
- architect (validador)
- documenter (secundario)
- code-reviewer (validador)

---

## 📝 CÓMO USAR ESTAS ESPECIFICACIONES

### Si eres CLAUDE (Orquestador Maestro):
1. Lee especificación del agente antes de delegar tarea
2. Valida que tarea está dentro de responsabilidades del agente
3. Presenta plan al usuario con especialistas involucrados
4. Delega con contexto claro (qué, por qué, cuándo)

### Si eres SYSTEM-CLAUDE (Diseñador de Orquestación):
1. Actualiza especificaciones cuando cambien requisitos
2. Mantén coherencia con PROJECT-ROADMAP.md
3. Solicita a prompt-engineer actualizar prompts cuando cambies docs
4. Valida que especificaciones están completas y claras

### Si eres PROMPT-ENGINEER (Creador de Prompts):
1. Lee especificación COMPLETA del agente
2. Crea prompt que implementa 100% de especificación
3. Valida 1-to-1 entre especificación y prompt
4. NUNCA inventes tareas que no están en especificación

### Si eres ORCHESTRATION-VALIDATOR:
1. Lee especificación del agente
2. Lee prompt correspondiente en `.claude/agents/`
3. Valida que prompt implementa 100% de especificación
4. Identifica discrepancias y reporta

---

## ✅ CRITERIOS DE ÉXITO

**Especificaciones de agentes son exitosas cuando**:
- [ ] Cada agente tiene rol ESPECÍFICO (no genérico)
- [ ] Responsabilidades están claras (5-10 items)
- [ ] Tareas están asignadas por fase del roadmap
- [ ] Modelo LLM está justificado (costo-beneficio)
- [ ] Competencias técnicas documentadas
- [ ] Dependencias y handoffs están claros
- [ ] Criterios de éxito son medibles
- [ ] Notas de implementación son útiles para prompt-engineer
- [ ] Alineación 1-to-1 con prompts (validado por orchestration-validator)

---

**Documento creado por**: system-claude
**Basado en**: PROJECT-ROADMAP.md + ORCHESTRATION-DESIGN.md
**Última actualización**: 2025-10-22
**Próxima revisión**: Cuando agentes cambien o se agreguen nuevos

🚀 **Este directorio contiene las especificaciones COMPLETAS de los 17 agentes especializados (14 de proyecto + 3 de orquestación).**

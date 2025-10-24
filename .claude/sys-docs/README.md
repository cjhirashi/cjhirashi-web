# 📖 Orquestación de Agentes - cjhirashi-agents MVP

**Documentación del Sistema de Orquestación Adaptado al PROJECT-ROADMAP.md**

**Versión**: 2.0 (Rediseño)
**Fecha**: 2025-10-22
**Estado**: 🔄 En construcción por system-claude

---

## 📋 Contenido de Esta Carpeta

Esta carpeta contiene la documentación COMPLETA de cómo está orquestado el equipo de 17 agentes especializados (14 de proyecto + 3 de orquestación) para ejecutar el desarrollo del MVP cjhirashi-agents.

### Estructura de Carpetas

```
.claude/sys-docs/
├── README.md                          (este archivo)
├── ORCHESTRATION-DESIGN.md            (diseño completo de la orquestación)
├── WORKFLOWS.md                       (workflows y patrones de coordinación)
├── agents/                            (especificación de cada agente)
│   ├── README.md                     (índice de agentes)
│   ├── planner-agent-spec.md
│   ├── architect-agent-spec.md
│   ├── data-architect-agent-spec.md
│   ├── coder-agent-spec.md
│   ├── security-specialist-agent-spec.md
│   ├── ai-specialist-agent-spec.md
│   ├── ux-designer-agent-spec.md
│   ├── tester-agent-spec.md
│   ├── cost-analyzer-agent-spec.md
│   ├── documenter-agent-spec.md
│   ├── tech-researcher-agent-spec.md
│   ├── code-reviewer-agent-spec.md
│   ├── system-analyzer-agent-spec.md
│   ├── diagram-designer-agent-spec.md
│   ├── prompt-engineer-agent-spec.md
│   └── system-claude-agent-spec.md
├── workflows/                         (workflows específicos por fase)
│   ├── README.md
│   ├── PHASE-1-workflows.md
│   ├── PHASE-2-workflows.md
│   ├── PHASE-3-workflows.md
│   ├── PHASE-4-workflows.md
│   ├── PHASE-5-workflows.md
│   ├── PHASE-6-workflows.md
│   ├── PHASE-7-workflows.md
│   ├── PHASE-8-workflows.md
│   └── PHASE-9-workflows.md
└── _BACKUP_OLD_ORCHESTRATION/        (respaldo de orquestación anterior)
```

---

## 🎯 Documentos Principales

### 1. **ORCHESTRATION-DESIGN.md** ⭐ COMIENZA AQUÍ
Diseño completo de la orquestación basado en PROJECT-ROADMAP.md

**Contenido:**
- Estructura de 17 agentes especializados (14 de proyecto + 3 de orquestación)
- Mapeo de agentes a fases del roadmap (Fases 1-9)
- Responsabilidades y tareas específicas
- Distribución de trabajo por fase
- Modelos LLM asignados
- Optimización de tokens y costos

**Para:** Entender cómo está estructurado el equipo de agentes
**Tiempo:** 20 minutos
**Prerequisito:** Haber leído PROJECT-ROADMAP.md

---

### 2. **WORKFLOWS.md** 🔄 PATRONES DE COORDINACIÓN
Patrones de coordinación y workflows principales

**Contenido:**
- Patrones: PARALELO, SECUENCIAL, CONDICIONAL, ITERATIVO
- Flujo de orquestación principal (CLAUDE → Especialistas → Validación)
- Handoffs entre especialistas
- Validación y criterios de éxito
- Manejo de errores y bloqueos
- Estado persistente entre sesiones

**Para:** Entender cómo coordina CLAUDE el trabajo
**Tiempo:** 15 minutos

---

### 3. **agents/README.md** 👥 ÍNDICE DE AGENTES
Índice y navegación de todos los agentes especializados

**Contiene:**
- Lista de los 17 agentes
- Descripción breve de cada uno
- Link a documentación completa
- Modelos LLM asignados
- Especialidades clave

**Para:** Navegar y entender cada agente
**Tiempo:** 10 minutos

---

### 4. **agents/[NAME]-agent-spec.md** (x16)
Especificación técnica completa de cada agente

**Contenido (por agente):**
- Responsabilidades principales
- Tareas específicas asignadas
- Competencias técnicas
- Fases del roadmap donde participa
- Dependencias y handoffs
- Modelos LLM y optimizaciones
- Criterios de éxito
- Notas de implementación

**Para:** prompt-engineer crear prompts, system-claude diseñar tareas
**Tiempo:** 5-10 minutos por agente

---

### 5. **workflows/README.md** 🗂️ ÍNDICE DE WORKFLOWS
Índice de workflows específicos por fase

**Contenido:**
- Descripción de cada fase
- Agentes involucrados
- Orden de ejecución
- Dependencias intrafase

**Para:** Entender qué pasa en cada fase
**Tiempo:** 5 minutos

---

### 6. **workflows/PHASE-X-workflows.md** (x9)
Workflows detallados para cada fase del PROJECT-ROADMAP.md

**Contenido (por fase):**
- Objetivo de la fase
- Agentes participantes
- Secuencia de tareas
- Diagramas de flujo
- Puntos de validación
- Criterios de finalización
- Timeline estimado
- Handoffs a siguiente fase

**Para:** Ejecutar la fase, validar progreso
**Tiempo:** 10-15 minutos por fase

---

## 🗺️ Cómo Usar Esta Documentación

### Si eres CLAUDE (Orquestador):
1. Lee ORCHESTRATION-DESIGN.md para entender la estructura
2. Lee WORKFLOWS.md para entender patrones de coordinación
3. Consulta workflows/PHASE-X-workflows.md cuando ejecutes cada fase
4. Usa agents/[NAME]-agent-spec.md para delegar tareas específicas

### Si eres SYSTEM-CLAUDE (Diseñador de Orquestación):
1. Lee PROJECT-ROADMAP.md para el contexto
2. Lee ORCHESTRATION-DESIGN.md para la estructura actual
3. Modifica agents/[NAME]-agent-spec.md según necesites
4. Actualiza workflows/PHASE-X-workflows.md con nuevos patrones
5. Comunica cambios a prompt-engineer y orchestration-validator

### Si eres PROMPT-ENGINEER (Creador de Prompts):
1. Lee agents/[NAME]-agent-spec.md para cada agente
2. Crea/actualiza prompts basándote en la especificación
3. Valida 1-to-1 entre especificación y prompt
4. Comunica a orchestration-validator para validación

### Si eres ORCHESTRATION-VALIDATOR:
1. Lee ORCHESTRATION-DESIGN.md para entender estructura
2. Lee agents/[NAME]-agent-spec.md para validar especificaciones
3. Lee prompts en .claude/agents/ para validar implementación
4. Genera reporte de validación sin discrepancias

---

## 📊 Información Rápida

### 17 Agentes Especializados

**Agentes de PROYECTO (Desarrollo):**
1. **planner** - Planificación y estimación
2. **architect** - Diseño arquitectónico
3. **data-architect** - Diseño de bases de datos
4. **coder** - Implementación
5. **security-specialist** - Seguridad y auth
6. **ai-specialist** - IA y LLMs
7. **ux-designer** - Diseño UI/UX
8. **tester** - Testing y QA
9. **cost-analyzer** - Análisis de costos
10. **documenter** - Documentación
11. **tech-researcher** - Investigación técnica
12. **code-reviewer** - Revisión de código
13. **system-analyzer** - Análisis de sistemas
14. **diagram-designer** - Diagramas Mermaid

**Agentes de ORQUESTACIÓN:**
15. **system-claude** - Diseño de orquestación
16. **prompt-engineer** - Ingeniería de prompts
(+ **orchestration-validator** - Validación, ejecuta bajo demanda)

---

## 🔗 Próximos Pasos

Cuando system-claude complete el rediseño:
1. ✅ ORCHESTRATION-DESIGN.md estará completo
2. ✅ agents/ tendrá 17 especificaciones detalladas
3. ✅ workflows/ tendrá 9 workflows (uno por fase)
4. ✅ WORKFLOWS.md tendrá patrones de coordinación

**Status Actual:** 🔄 En construcción

---

## 📝 Historial de Cambios

### v2.0 - 2025-10-22 (Rediseño)
- ✅ Limpieza de documentación anterior
- 🔄 Nueva estructura basada en PROJECT-ROADMAP.md
- 🔄 Diseño de orquestación adaptado a 9 fases
- 🔄 Creación de 16 especificaciones de agentes
- 🔄 Workflows específicos por fase

### v1.0 - 2025-10-20 (Anterior)
- Orquestación genérica con 14 fases SDLC
- Respaldada en _BACKUP_OLD_ORCHESTRATION/

---

**Última actualización**: 2025-10-22
**Mantenedor**: system-claude
**Responsable de validación**: orchestration-validator

🚀 **Esperando que system-claude complete el rediseño...**

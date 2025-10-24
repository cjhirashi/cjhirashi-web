# 📚 CATÁLOGO DE HERRAMIENTAS - Claude Code v2.1

**Referencia completa de herramientas disponibles para agentes**
**Última actualización**: 2025-10-23
**Mantenido por**: system-claude

---

## 📋 ÍNDICE DE CATEGORÍAS

1. [Herramientas Core (Nativas)](#herramientas-core-nativas)
2. [Búsqueda y Análisis](#búsqueda-y-análisis)
3. [Modificación de Archivos](#modificación-de-archivos)
4. [Ejecución y Comandos](#ejecución-y-comandos)
5. [Generación de Contenido](#generación-de-contenido)
6. [Validación y Testing](#validación-y-testing)
7. [Documentación y Diagramas](#documentación-y-diagramas)
8. [Optimización y Métricas](#optimización-y-métricas)
9. [Control de Versiones](#control-de-versiones)
10. [Integraciones MCP](#integraciones-mcp-opcional)

---

## 🔧 HERRAMIENTAS CORE (NATIVAS)

Estas herramientas están SIEMPRE disponibles en Claude Code VS Code Extension.

### 1. file_search

**Descripción**: Buscar archivos por nombre o patrón
**Disponibilidad**: ✅ Siempre
**Modelo recomendado**: Haiku (para búsquedas simples)

```yaml
sintaxis:
  comando: file_search
  parametros:
    patterns: ["*.ext", "nombre*"]  # Patterns de búsqueda
    scope: ["/path1", "/path2"]     # Directorios donde buscar
    exclude: ["/node_modules"]      # Directorios a excluir
    max_results: 100                # Límite de resultados

permisos_requeridos:
  - read

ejemplo_uso:
  file_search:
    patterns: ["*.ts", "*.tsx"]
    scope: ["/src", "/components"]
    exclude: ["/node_modules", "/dist"]

output_esperado: |
  Found 15 files:
  - /src/index.ts
  - /src/utils/helper.ts
  - /components/Button.tsx
  ...
```

### 2. view

**Descripción**: Ver contenido de archivos o directorios
**Disponibilidad**: ✅ Siempre
**Modelo recomendado**: Cualquiera

```yaml
sintaxis:
  comando: view
  parametros:
    path: "/ruta/archivo.ext"       # Archivo o directorio
    view_range: [1, 100]            # Líneas específicas (opcional)

permisos_requeridos:
  - read

ejemplo_uso:
  # Ver archivo completo
  view:
    path: "/src/index.ts"
  
  # Ver líneas específicas
  view:
    path: "/src/utils/auth.ts"
    view_range: [45, 60]

output_esperado: |
  Muestra contenido con números de línea
```

### 3. str_replace

**Descripción**: Reemplazar string único en archivo
**Disponibilidad**: ✅ Siempre
**Modelo recomendado**: Sonnet (para cambios precisos)

```yaml
sintaxis:
  comando: str_replace
  parametros:
    path: "/ruta/archivo.ext"
    old_str: "string exacto a reemplazar"
    new_str: "string nuevo"

permisos_requeridos:
  - read
  - write

restricciones:
  - old_str debe ser ÚNICO en el archivo
  - Preserva indentación

ejemplo_uso:
  str_replace:
    path: "/src/config.ts"
    old_str: "const API_URL = 'http://localhost:3000'"
    new_str: "const API_URL = 'https://api.production.com'"

validación:
  - Verificar que old_str existe una sola vez
  - Confirmar reemplazo exitoso
```

### 4. create_file

**Descripción**: Crear archivo nuevo con contenido
**Disponibilidad**: ✅ Siempre
**Modelo recomendado**: Cualquiera

```yaml
sintaxis:
  comando: create_file
  parametros:
    path: "/ruta/nuevo_archivo.ext"
    content: "contenido del archivo"

permisos_requeridos:
  - write

ejemplo_uso:
  create_file:
    path: "/src/components/NewComponent.tsx"
    content: |
      import React from 'react';
      
      export const NewComponent = () => {
        return <div>Hello World</div>;
      };

validación:
  - Verificar que archivo no existe
  - Confirmar creación exitosa
```

### 5. bash_tool

**Descripción**: Ejecutar comandos bash/shell
**Disponibilidad**: ✅ Siempre
**Modelo recomendado**: Sonnet (para comandos complejos)

```yaml
sintaxis:
  comando: bash_tool
  parametros:
    command: "comando bash"
    working_dir: "/directorio/trabajo"  # Opcional

permisos_requeridos:
  - execute

restricciones:
  - NO usar sudo sin autorización
  - NO usar rm -rf
  - Timeout: 30 segundos por defecto

ejemplo_uso:
  bash_tool:
    command: "npm test"
    working_dir: "/project"

comandos_seguros:
  - ls, cd, pwd, cat, grep
  - npm run [script]
  - git status, git diff
  - python script.py
  - node script.js
```

---

## 🔍 BÚSQUEDA Y ANÁLISIS

### 6. grep_content

**Descripción**: Buscar contenido dentro de archivos
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Haiku

```yaml
implementación:
  bash_tool:
    command: "grep -r 'pattern' /path --include='*.ext'"

ejemplo_uso:
  # Buscar función específica
  bash_tool:
    command: "grep -r 'function authenticate' /src --include='*.ts'"

  # Buscar con contexto
  bash_tool:
    command: "grep -B 2 -A 2 'TODO' /src --include='*.tsx'"

output_parseado: |
  Archivos con coincidencias y líneas
```

### 7. find_dependencies

**Descripción**: Analizar dependencias del proyecto
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Haiku

```yaml
implementación:
  # Para Node.js
  bash_tool:
    command: "npm list --depth=0"
  
  # Para Python
  bash_tool:
    command: "pip freeze"

ejemplo_uso:
  bash_tool:
    command: "npm list --json --depth=0 | jq '.dependencies | keys'"

output_esperado: |
  Lista de dependencias con versiones
```

### 8. analyze_structure

**Descripción**: Analizar estructura del proyecto
**Disponibilidad**: ✅ Via bash_tool + view
**Modelo recomendado**: Haiku

```yaml
implementación:
  bash_tool:
    command: "tree -L 3 -I 'node_modules|dist' /src"

ejemplo_uso:
  # Estructura de directorios
  bash_tool:
    command: "find /src -type f -name '*.ts' | head -20"

  # Contar archivos por tipo
  bash_tool:
    command: "find /src -type f | sed 's/.*\\.//' | sort | uniq -c"
```

---

## ✏️ MODIFICACIÓN DE ARCHIVOS

### 9. bulk_replace

**Descripción**: Reemplazar en múltiples archivos
**Disponibilidad**: ⚠️ Via script
**Modelo recomendado**: Sonnet

```yaml
implementación:
  # Crear script temporal
  create_file:
    path: "/tmp/bulk_replace.sh"
    content: |
      #!/bin/bash
      find /src -name "*.ts" -exec sed -i 's/oldPattern/newPattern/g' {} \;
  
  # Ejecutar
  bash_tool:
    command: "bash /tmp/bulk_replace.sh"

precauciones:
  - Hacer backup primero
  - Validar cambios con git diff
```

### 10. append_to_file

**Descripción**: Agregar contenido al final
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Haiku

```yaml
implementación:
  bash_tool:
    command: "echo 'nuevo contenido' >> /path/archivo.ext"

ejemplo_uso:
  # Agregar export
  bash_tool:
    command: "echo 'export { NewComponent };' >> /src/index.ts"

  # Agregar con salto de línea
  bash_tool:
    command: "echo -e '\\n// Nueva sección' >> /src/config.ts"
```

### 11. insert_at_line

**Descripción**: Insertar en línea específica
**Disponibilidad**: ⚠️ Via sed
**Modelo recomendado**: Sonnet

```yaml
implementación:
  bash_tool:
    command: "sed -i '5i\\Nueva línea aquí' /path/archivo.ext"

ejemplo_uso:
  # Insertar import en línea 3
  bash_tool:
    command: "sed -i '3i\\import { Helper } from \"./utils\";' /src/main.ts"
```

---

## 🚀 EJECUCIÓN Y COMANDOS

### 12. npm_run

**Descripción**: Ejecutar scripts npm
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Cualquiera

```yaml
scripts_comunes:
  test:
    command: "npm test"
    timeout: 300  # 5 minutos
  
  build:
    command: "npm run build"
    timeout: 600  # 10 minutos
  
  lint:
    command: "npm run lint"
    timeout: 120  # 2 minutos

ejemplo_uso:
  # Con captura de errores
  bash_tool:
    command: "npm test 2>&1 | tee test-results.log"
```

### 13. python_execute

**Descripción**: Ejecutar scripts Python
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Sonnet

```yaml
implementación:
  bash_tool:
    command: "python3 script.py"

ejemplo_uso:
  # Script con argumentos
  bash_tool:
    command: "python3 analyze.py --input data.csv --output results.json"

  # Ejecutar inline
  bash_tool:
    command: "python3 -c 'import json; print(json.dumps({\"test\": \"data\"}))'"
```

### 14. docker_commands

**Descripción**: Comandos Docker
**Disponibilidad**: ⚠️ Requiere Docker instalado
**Modelo recomendado**: Sonnet

```yaml
comandos_seguros:
  list:
    command: "docker ps -a"
  
  logs:
    command: "docker logs [container_id] --tail 50"
  
  build:
    command: "docker build -t [tag] ."

restricciones:
  - NO docker rm -f sin confirmación
  - NO docker system prune sin confirmación
```

---

## 📝 GENERACIÓN DE CONTENIDO

### 15. generate_markdown

**Descripción**: Generar documentación Markdown
**Disponibilidad**: ✅ Via create_file
**Modelo recomendado**: Sonnet

```yaml
plantillas:
  readme:
    path: "/README.md"
    secciones:
      - "# Título"
      - "## Descripción"
      - "## Instalación"
      - "## Uso"
      - "## API"
      - "## Contribuir"

  api_docs:
    path: "/docs/API.md"
    formato: |
      ## Endpoint: [METHOD] /path
      **Descripción**: ...
      **Parámetros**: ...
      **Respuesta**: ...
```

### 16. generate_tests

**Descripción**: Generar archivos de test
**Disponibilidad**: ✅ Via create_file
**Modelo recomendado**: Sonnet

```yaml
frameworks:
  jest:
    extension: ".test.ts"
    template: |
      describe('[Component]', () => {
        it('should [behavior]', () => {
          expect(result).toBe(expected);
        });
      });
  
  pytest:
    extension: "_test.py"
    template: |
      def test_[function]():
          assert result == expected
```

### 17. generate_config

**Descripción**: Generar archivos de configuración
**Disponibilidad**: ✅ Via create_file
**Modelo recomendado**: Haiku

```yaml
tipos:
  eslint:
    file: ".eslintrc.json"
    template: |
      {
        "extends": ["eslint:recommended"],
        "rules": {}
      }
  
  prettier:
    file: ".prettierrc"
    template: |
      {
        "semi": true,
        "singleQuote": true
      }
```

---

## ✅ VALIDACIÓN Y TESTING

### 18. run_tests

**Descripción**: Ejecutar suite de tests
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Sonnet

```yaml
comandos:
  jest:
    all: "npm test"
    specific: "npm test -- [file]"
    coverage: "npm test -- --coverage"
  
  pytest:
    all: "pytest"
    specific: "pytest [file]"
    coverage: "pytest --cov"

parsing_resultados:
  - Capturar pass/fail
  - Extraer coverage %
  - Identificar tests fallidos
```

### 19. lint_code

**Descripción**: Validar calidad de código
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Haiku

```yaml
linters:
  eslint:
    command: "eslint /src --format json"
    fix: "eslint /src --fix"
  
  pylint:
    command: "pylint /src"
    
  prettier:
    check: "prettier --check /src"
    fix: "prettier --write /src"
```

### 20. type_check

**Descripción**: Verificación de tipos
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Sonnet

```yaml
herramientas:
  typescript:
    command: "tsc --noEmit"
    strict: "tsc --noEmit --strict"
  
  mypy:
    command: "mypy /src"
    strict: "mypy --strict /src"
```

---

## 📊 DOCUMENTACIÓN Y DIAGRAMAS

### 21. mermaid_generator

**Descripción**: Generar diagramas Mermaid
**Disponibilidad**: ✅ Via create_file
**Modelo recomendado**: Sonnet

```yaml
sintaxis:
  crear_diagrama:
    create_file:
      path: "/docs/diagrams/[nombre].mmd"
      content: |
        graph TD
          A[Start] --> B[Process]
          B --> C[End]

tipos_soportados:
  - flowchart (graph TD/LR)
  - sequence (sequenceDiagram)
  - class (classDiagram)
  - state (stateDiagram-v2)
  - gantt (gantt)

ejemplo_complejo:
  ```mermaid
  graph TD
    A[Usuario] -->|solicita| B[system-claude]
    B -->|diseña| C[Documentación]
    C -->|input| D[prompt-engineer]
    D -->|genera| E[Prompts]
    E -->|valida| F[orchestration-validator]
    F -->|reporte| B
  ```
```

### 22. jsdoc_generator

**Descripción**: Generar documentación de código
**Disponibilidad**: ✅ Via str_replace
**Modelo recomendado**: Haiku

```yaml
plantilla:
  funcion: |
    /**
     * Descripción de la función
     * @param {tipo} nombre - Descripción
     * @returns {tipo} Descripción
     * @example
     * funcionEjemplo(param)
     */

  clase: |
    /**
     * Descripción de la clase
     * @class
     * @extends {BaseClass}
     */
```

### 23. api_spec_generator

**Descripción**: Generar especificación OpenAPI
**Disponibilidad**: ✅ Via create_file
**Modelo recomendado**: Sonnet

```yaml
formato:
  openapi: "3.0.0"
  estructura:
    - info
    - servers
    - paths
    - components

ejemplo_endpoint:
  /api/users:
    get:
      summary: "Obtener usuarios"
      responses:
        200:
          description: "Lista de usuarios"
```

---

## 📈 OPTIMIZACIÓN Y MÉTRICAS

### 24. complexity_analyzer

**Descripción**: Analizar complejidad de código
**Disponibilidad**: ⚠️ Via npm package
**Modelo recomendado**: Sonnet

```yaml
instalación:
  bash_tool:
    command: "npm install -g complexity-report"

uso:
  bash_tool:
    command: "cr /src --format json"

métricas:
  - Complejidad ciclomática
  - Líneas de código
  - Mantenibilidad
  - Dependencias

umbrales:
  complexity: 10  # Máximo recomendado
  maintainability: 70  # Mínimo recomendado
```

### 25. token_calculator

**Descripción**: Calcular consumo de tokens
**Disponibilidad**: ⚠️ Via script personalizado
**Modelo recomendado**: Haiku

```yaml
implementación:
  create_file:
    path: "/tmp/count_tokens.py"
    content: |
      import tiktoken
      enc = tiktoken.get_encoding("cl100k_base")
      with open(file) as f:
          tokens = len(enc.encode(f.read()))
      print(f"Tokens: {tokens}")

uso:
  bash_tool:
    command: "python3 /tmp/count_tokens.py /path/file"
```

### 26. performance_profiler

**Descripción**: Perfilar rendimiento
**Disponibilidad**: ⚠️ Específico por lenguaje
**Modelo recomendado**: Sonnet

```yaml
node:
  comando: "node --prof script.js"
  análisis: "node --prof-process isolate-*.log"

python:
  comando: "python3 -m cProfile -o output.prof script.py"
  análisis: "python3 -m pstats output.prof"
```

---

## 🔄 CONTROL DE VERSIONES

### 27. git_operations

**Descripción**: Operaciones Git
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Cualquiera

```yaml
comandos_seguros:
  status:
    command: "git status"
  
  diff:
    command: "git diff"
    staged: "git diff --staged"
  
  add:
    command: "git add [file]"
    all: "git add ."
  
  commit:
    command: "git commit -m '[mensaje]'"
  
  branch:
    list: "git branch -a"
    create: "git checkout -b [branch]"
  
  log:
    command: "git log --oneline -10"

restricciones:
  - NO git push sin confirmación
  - NO git reset --hard sin confirmación
  - NO git force push
```

### 28. git_history

**Descripción**: Analizar historial Git
**Disponibilidad**: ✅ Via bash_tool
**Modelo recomendado**: Haiku

```yaml
comandos:
  # Commits por autor
  bash_tool:
    command: "git shortlog -sn"
  
  # Archivos más modificados
  bash_tool:
    command: "git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10"
  
  # Buscar en historial
  bash_tool:
    command: "git log -S 'texto' --oneline"
```

---

## 🌐 INTEGRACIONES MCP (OPCIONAL)

**IMPORTANTE**: Estas integraciones requieren configuración adicional y aprobación del usuario.

### 29. slack_integration

**Descripción**: Enviar notificaciones a Slack
**Disponibilidad**: ⚠️ Requiere MCP configurado
**Modelo recomendado**: Haiku

```yaml
configuración:
  mcp:
    tool: slack_notify
    webhook: "https://hooks.slack.com/..."

uso:
  slack_notify:
    channel: "#dev-updates"
    message: "Build completado exitosamente"
    mention: "@team"

eventos:
  - on_test_fail
  - on_build_complete
  - on_deploy_success
```

### 30. jira_integration

**Descripción**: Crear/actualizar tickets
**Disponibilidad**: ⚠️ Requiere MCP configurado
**Modelo recomendado**: Sonnet

```yaml
configuración:
  mcp:
    tool: jira_api
    endpoint: "https://company.atlassian.net"

operaciones:
  create_issue:
    type: "Bug"
    summary: "Título"
    description: "Descripción"
    assignee: "@user"
  
  update_issue:
    id: "PROJ-123"
    status: "In Progress"
    comment: "Comenzando trabajo"
```

### 31. github_integration

**Descripción**: Gestionar PRs e issues
**Disponibilidad**: ⚠️ Requiere MCP configurado
**Modelo recomendado**: Sonnet

```yaml
configuración:
  mcp:
    tool: github_api
    repo: "owner/repo"

operaciones:
  create_pr:
    title: "Feature: Nueva funcionalidad"
    branch: "feature/nueva"
    base: "main"
  
  create_issue:
    title: "Bug encontrado"
    labels: ["bug", "priority-high"]
    assignee: "@username"
```

### 32. google_drive_integration

**Descripción**: Sincronizar documentación
**Disponibilidad**: ⚠️ Requiere MCP configurado
**Modelo recomendado**: Haiku

```yaml
configuración:
  mcp:
    tool: gdrive_api
    folder_id: "folder_id_here"

operaciones:
  upload_doc:
    file: "/docs/README.md"
    convert_to: "Google Docs"
  
  sync_folder:
    local: "/docs"
    remote: "Project Docs"
```

---

## 📏 REGLAS DE USO DE HERRAMIENTAS

### Principios Generales

1. **Mínimo privilegio**: Usar herramienta con menos permisos posible
2. **Validación previa**: Verificar antes de modificar
3. **Backup automático**: Para cambios masivos
4. **Logs detallados**: Documentar cada operación
5. **Rollback preparado**: Tener plan de reversión

### Matriz de Decisión

| Tarea | Herramienta Preferida | Alternativa | Nunca Usar |
|-------|----------------------|-------------|------------|
| Buscar archivos | file_search | find command | locate |
| Ver contenido | view | cat | less/more |
| Editar único | str_replace | sed -i | vi/nano |
| Editar múltiple | Script + sed | awk | perl |
| Ejecutar tests | npm test | direct jest | sudo |
| Git commit | git commit | - | git push -f |

### Restricciones por Rol

```yaml
architect:
  permitido:
    - file_search (todo)
    - view (todo)
    - create_file (/docs)
    - mermaid_generator
  prohibido:
    - file_edit (/src)
    - bash_tool (rm, delete)

coder:
  permitido:
    - file_search (/src)
    - file_edit (/src)
    - create_file (/src)
    - npm_run (test, lint)
  prohibido:
    - file_edit (/docs)
    - git push

tester:
  permitido:
    - run_tests
    - create_file (/tests)
    - view (todo)
  prohibido:
    - file_edit (/src)
    - git commit
```

---

## 🔍 BÚSQUEDA RÁPIDA DE HERRAMIENTAS

### Por Necesidad

**"Necesito buscar algo"**
- Archivos: `file_search` (#1)
- Contenido: `grep_content` (#6)
- Historial: `git_history` (#28)

**"Necesito modificar"**
- Un archivo: `str_replace` (#3)
- Múltiples: `bulk_replace` (#9)
- Crear nuevo: `create_file` (#4)

**"Necesito ejecutar"**
- Comando: `bash_tool` (#5)
- Tests: `run_tests` (#18)
- Build: `npm_run` (#12)

**"Necesito validar"**
- Lint: `lint_code` (#19)
- Types: `type_check` (#20)
- Tests: `run_tests` (#18)

**"Necesito documentar"**
- Markdown: `generate_markdown` (#15)
- Diagramas: `mermaid_generator` (#21)
- API: `api_spec_generator` (#23)

### Por Fase del Proyecto

**FASE 1-2: Especificación**
- file_search, view
- generate_markdown
- mermaid_generator

**FASE 3-4: Arquitectura**
- mermaid_generator
- create_file (docs)
- complexity_analyzer

**FASE 5-7: Desarrollo**
- file_edit, str_replace
- create_file (src)
- run_tests, lint_code

**FASE 8: Testing**
- run_tests
- generate_tests
- type_check

**FASE 9: Documentación**
- generate_markdown
- jsdoc_generator
- api_spec_generator

---

## 🎯 EJEMPLOS DE COMBINACIONES

### Combo 1: "Análisis Completo"
```yaml
secuencia:
  1. file_search: Encontrar archivos relevantes
  2. complexity_analyzer: Medir complejidad
  3. grep_content: Buscar TODOs y FIXMEs
  4. generate_markdown: Crear reporte
```

### Combo 2: "Refactoring Seguro"
```yaml
secuencia:
  1. run_tests: Verificar tests pasan
  2. git_operations: Crear branch
  3. str_replace: Hacer cambios
  4. run_tests: Verificar de nuevo
  5. git_operations: Commit si OK
```

### Combo 3: "Documentación Completa"
```yaml
secuencia:
  1. analyze_structure: Entender proyecto
  2. jsdoc_generator: Documentar funciones
  3. mermaid_generator: Crear diagramas
  4. generate_markdown: README y docs
  5. git_operations: Commit docs
```

---

## 📝 PLANTILLA PARA AGREGAR NUEVA HERRAMIENTA

```yaml
### [Número]. [nombre_herramienta]

**Descripción**: [Qué hace]
**Disponibilidad**: [✅ Siempre | ⚠️ Requiere X]
**Modelo recomendado**: [Haiku|Sonnet|Opus]

sintaxis:
  comando: [comando_base]
  parametros:
    param1: [descripción]
    param2: [descripción]

permisos_requeridos:
  - [read|write|execute]

restricciones:
  - [Limitación 1]
  - [Limitación 2]

ejemplo_uso:
  [comando]:
    [parametros]

output_esperado: |
  [Descripción del output]

casos_de_uso:
  - [Cuándo usar]
  - [Para qué sirve]
```

---

## 🚀 INSTRUCCIONES PARA system-claude

**CÓMO USAR ESTE CATÁLOGO:**

1. **Antes de definir herramientas**, SIEMPRE lee este catálogo
2. **Para cada agente**, selecciona 3-5 herramientas apropiadas
3. **Documenta** con la sintaxis exacta del catálogo
4. **Especifica** permisos y restricciones
5. **Valida** que herramientas son compatibles con el rol

**EJEMPLO DE ESPECIFICACIÓN:**

```yaml
agente: architect
herramientas:
  - file_search (#1):
      patterns: ["*.md", "*.ts"]
      scope: ["/src", "/docs"]
      permisos: [read]
  
  - mermaid_generator (#21):
      output: "/docs/diagrams/"
      permisos: [write:/docs]
  
  - view (#2):
      scope: ["all"]
      permisos: [read]
  
  - create_file (#4):
      allowed_paths: ["/docs"]
      permisos: [write:/docs]
  
  - complexity_analyzer (#24):
      target: "/src"
      permisos: [read, execute]
```

---

## 📊 ESTADÍSTICAS DEL CATÁLOGO

- **Total de herramientas**: 32
- **Herramientas Core**: 5 (siempre disponibles)
- **Herramientas via bash**: 15
- **Herramientas via script**: 7
- **Integraciones MCP**: 5
- **Categorías cubiertas**: 10

---

## 🔄 MANTENIMIENTO

**Última actualización**: 2025-10-23
**Próxima revisión**: Cuando se agreguen nuevas capacidades a Claude Code
**Mantenedor**: system-claude
**Validador**: orchestration-validator

Para agregar nueva herramienta:
1. Seguir plantilla
2. Asignar número siguiente
3. Actualizar índice
4. Validar con orchestration-validator

---

**NOTA FINAL**: Este catálogo es la ÚNICA fuente de verdad para herramientas disponibles. Cualquier herramienta no listada aquí debe ser agregada y validada antes de usar.

🛠️ **TOOLS-CATALOG v2.1 - La referencia definitiva de herramientas para Claude Code**
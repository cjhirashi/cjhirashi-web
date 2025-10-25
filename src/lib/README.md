# Lib - Utilities and Helpers

Funciones utilitarias, configuraciones y helpers.

## Archivos a implementar:

### Database & Auth
- `db.ts` - Prisma client singleton
- `auth.ts` - NextAuth configuration

### Utilities
- `utils.ts` - Utilidades generales (cn, formatDate, etc.)
- `validations.ts` - Zod schemas para validaciones
- `constants.ts` - Constantes del proyecto

### AI & Features
- `ai.ts` - Configuración de AI SDK (Claude, OpenAI)
- `markdown.ts` - Procesamiento de markdown
- `image.ts` - Helpers para imágenes (upload, resize)

### Repositories (opcional)
- `repositories/` - Data access layer para abstraer Prisma

Todo código sigue clean code principles y está type-safe.

# 🚀 Portafolio + Blog (Django)

Portafolio profesional con blog personal enfocado en **Ciencia de Datos** y **Desarrollo Web con Django**.

El objetivo del repositorio es servir como base para publicar proyectos, documentar aprendizajes y mostrar capacidades end-to-end: modelado de datos, construcción de apps Django, manejo de contenido tipo blog, y una presentación limpia con templates.

Incluye secciones para **Inicio**, **Proyectos**, **Blog** y **Sobre mí**, con navegación por URLs y estructura por apps (home, proyectos, blog). A medida que evolucione el proyecto, este README se mantendrá alineado con el stack real y las decisiones de arquitectura.

## 🛠️ Stack tecnológico (actual)

* **Python:** 3.13.0
* **Django:** 6.0.2
* **Base de datos:** SQLite (desarrollo). PostgreSQL recomendado para producción.
* **Frontend:** Django Templates (templates HTML)
* **CSS:** Tailwind CSS *(pendiente/por integrar si aplica al estado actual del repo)*
* **Gestión de dependencias:** Pipenv (Pipfile / Pipfile.lock)

## 📁 Estructura del proyecto (actual)

```
├── manage.py
├── cjhirashi_web/          # Configuración del proyecto (settings, urls, wsgi/asgi)
├── home/                   # Landing (renderiza index.html)
├── blog/                   # Modelos de blog (views placeholder por ahora)
├── proyectos/              # Listado/detalle/formulario de proyectos
├── templates/              # Templates globales + por app
└── static/                 # Assets estáticos (ej. static/css/styles.css)
```

## 🧭 Rutas principales

- `/` → Home
- `/proyectos/` → Proyectos
- `/blog/` → Blog
- `/admin/` → Django Admin

## ⚙️ Configuración Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/cjhirashi/cjhirashi-web.git
cd cjhirashi-web
```

### 2. Crear entorno e instalar dependencias (Pipenv)

Si no tienes Pipenv:

```bash
pip install pipenv
```

Instala dependencias y activa el entorno:

```bash
pipenv install
pipenv shell
```

### 3. Variables de entorno

Si existe un ejemplo, crea tu .env a partir de él:

```bash
cp .env.example .env
```

Si no existe `.env.example`, crea un `.env` en la raíz con lo mínimo:

```bash
DEBUG=True
SECRET_KEY=tu_secret_key
```

### 4. Migraciones

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Crear superusuario

```bash
python manage.py createsuperuser
```

### 6. Iniciar el servidor

```bash
python manage.py runserver
```

---
*Desarrollado por:* ***cjhirashi***
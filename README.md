# 🚀 Django Portfolio & Blog Professional

Este es un proyecto de portafolio de alto rendimiento construido con **Django 5.1**, diseñado para mostrar proyectos de desarrollo y gestionar un blog técnico personal.

## 🛠️ Stack Tecnológico

* **Backend:** Python 3.12+, Django 5.1
* **Base de Datos:** PostgreSQL (Producción) / SQLite (Desarrollo)
* **Frontend:** Django Templates + Tailwind CSS
* **Gestión de Tareas:** Celery + Redis (Opcional para newsletters/SEO)
* **Despliegue:** Docker Ready

## 📁 Estructura del Proyecto.

```
├── core/               # Configuración principal (settings, urls, wsgi)
├── apps/               # Directorio contenedor de aplicaciones
│   ├── projects/       # Gestión de proyectos del portafolio
│   ├── blog/           # Sistema de gestión de artículos
│   └── pages/          # Vistas estáticas (Home, Contact, About)
├── static/             # Archivos CSS, JS e Imágenes globales
├── templates/          # Templates base y compartidos
├── manage.py
├── requirements.txt
└── .env.example
```

## ⚙️ Configuración Local

#### 1. Clonar el repositorio:

```bash
git clone [https://github.com/cjhirashi/cjhirashi-web.git](https://github.com/cjhirashi/cjhirashi-web.git)
cd cjhirashi-web
```

### 2. Instalar dependencias con Pipenv:

Si no tienes Pipenv, instálalo con `pip install pipenv`.

```bash
pipenv install
pipenv shell
```

### 3. Configurar Variables de Entorno:

Crea un archivo `.env` en la raíz basado en el ejemplo:

```bash
cp .env.example .env
```

Asegúrate de configurar DEBUG=True y tu SECRET_KEY para desarrollo.

### 4. Ejecutar Migraciones:

```bash
python manage.py makemigration
python manage.py migrate
```

### 5. Crear Superusuario:

```bash
python manage.py createsuperuser
```

### 6. Iniciar Servidor:

```bash
python manage.py runserver
```

Desarrollado con ⚡ por cjhirashi
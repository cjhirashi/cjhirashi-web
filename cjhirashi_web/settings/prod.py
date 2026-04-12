"""Settings de producción (VPS) para cjhirashi-web."""

from .base import *
import os

SECRET_KEY = os.environ["SECRET_KEY"]
DEBUG = False

ALLOWED_HOSTS = ["cjhirashi.com", "www.cjhirashi.com"]

CSRF_TRUSTED_ORIGINS = [
    "https://cjhirashi.com",
    "https://www.cjhirashi.com",
]

STATIC_ROOT = "/srv/cjhirashi-web/staticfiles"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("POSTGRES_DB", "cjhirashi_web"),
        "USER": os.getenv("POSTGRES_USER", "cjhirashi_web_user"),
        "PASSWORD": os.getenv("POSTGRES_PASSWORD", ""),
        "HOST": os.getenv("POSTGRES_HOST", "127.0.0.1"),
        "PORT": os.getenv("POSTGRES_PORT", "5432"),
    }
}

FORM_RENDERER = "django.forms.renderers.DjangoTemplates"

SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# HSTS (HTTP Strict Transport Security)
# Empieza con 1 día para evitar “lock-in” si estás probando.
# Cuando confirmes que todo está OK, puedes subirlo a 31536000 (1 año).
SECURE_HSTS_SECONDS = 86400
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

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

SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
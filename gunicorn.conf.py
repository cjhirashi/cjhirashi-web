"""Gunicorn config para cjhirashi-web."""

import multiprocessing

# --- Networking ---
# Solo local; Nginx hace reverse proxy hacia este puerto.
bind = "127.0.0.1:8000"

# --- Concurrencia ---
# VPS actual: 2 vCPU / 8 GB RAM (Hostinger KVM 2)
# Recomendación inicial estable: 5 workers.
# (Si necesitas auto-ajuste por CPU, vuelve a: multiprocessing.cpu_count() * 2 + 1)
workers = 5

# --- Robustez ---
# Aumenta si tienes endpoints lentos; mantén razonable para no colgar workers.
timeout = 60

# Tiempo para cerrar conexiones limpias al reiniciar/deploy.
graceful_timeout = 30

# Mantener viva la conexión (seg) para clientes/proxies.
keepalive = 5

# Protección básica contra leaks (reinicia workers cada N requests).
# Ajusta si ves reinicios frecuentes; 0 desactiva.
max_requests = 1000
max_requests_jitter = 100

# --- Logging ---
# stdout/stderr para que systemd/journalctl capture logs.
accesslog = "-"
errorlog = "-"
loglevel = "info"

capture_output = True
loglevel = "info"

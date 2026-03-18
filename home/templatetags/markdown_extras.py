import markdown
from django import template
from django.template.defaultfilters import stringfilter
from django.utils.safestring import mark_safe

register = template.Library()

@register.filter(name='markdown_to_html')
@stringfilter
def markdown_to_html(value):
    """
    Convierte texto en formato Markdown a HTML seguro para Django.
    Incluye extensiones comunes como tablas, vallas de código y TOC.
    """
    return mark_safe(markdown.markdown(value, extensions=[
        'extra',          # Tablas, abreviaturas, etc.
        'codehilite',     # Resaltado de sintaxis (requiere Pygments)
        'toc',            # Tabla de contenidos automática
        'fenced_code',    # Bloques de código con ```
    ]))
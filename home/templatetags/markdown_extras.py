from django import template
from django.utils.safestring import mark_safe
import markdown

register = template.Library()

@register.filter(name='markdown_to_html')
def markdown_to_html(text):
    # Convertimos el texto Markdown a HTML puro
    html_content = markdown.markdown(text, extensions=['extra'])
    return mark_safe(html_content)
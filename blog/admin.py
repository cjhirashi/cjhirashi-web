from django.contrib import admin
from .models import CategoriaBlog, Post

@admin.register(CategoriaBlog)
class CategoriaBlogAdmin(admin.ModelAdmin):
    # Campos correctos para CategoriaBlog: nombre, slug, descripcion
    list_display = ('nombre', 'slug')
    search_fields = ('nombre', 'descripcion')
    prepopulated_fields = {'slug': ('nombre',)}

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    # Campos correctos para Post: titulo, categoria, publicado, portada, etc.
    list_display = ('titulo', 'categoria', 'publicado', 'portada', 'fecha_publicacion')
    list_filter = ('publicado', 'portada', 'categoria', 'fecha_publicacion')
    search_fields = ('titulo', 'contenido', 'extracto')
    prepopulated_fields = {'slug': ('titulo',)}
    date_hierarchy = 'fecha_publicacion'
    raw_id_fields = ('autor',)

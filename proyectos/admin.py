from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from .models import CategoriaProyecto, Proyecto, StackProyecto, MetricaObjetivo, SectorProyecto

@admin.register(StackProyecto)
class StackProyectoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')
    search_fields = ('nombre',)

@admin.register(CategoriaProyecto)
class CategoriaProyectoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')
    search_fields = ('nombre',)

@admin.register(SectorProyecto)
class SectorProyectoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')
    search_fields = ('nombre',)

@admin.register(MetricaObjetivo)
class MetricaObjetivoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion_metrica')
    search_fields = ('nombre',)

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'mostrar_imagen', 'categoria', 'sector', 'publicado', 'portada', 'fecha_proyecto')
    list_filter = ('publicado', 'portada', 'categoria', 'sector', 'fecha_proyecto')
    search_fields = ('titulo', 'descripcion')
    prepopulated_fields = {'slug': ('titulo',)}
    filter_horizontal = ('stack',)
    
    fieldsets = (
        ('Identificación del Proyecto', {
            'fields': ('titulo', 'slug', 'fecha_proyecto')
        }),
        ('Contenido y Multimedia', {
            'fields': ('descripcion', 'contenido', 'imagen_url')
        }),
        ('Clasificación Técnica', {
            'fields': ('categoria', 'sector', 'stack')
        }),
        ('Métricas de Rendimiento e Impacto', {
            'description': 'Define el KPI principal que valida el éxito de este proyecto de datos.',
            'fields': ('tipo_objetivo', 'valor_objetivo')
        }),
        ('Recursos Externos', {
            'fields': ('url_github', 'url_demo')
        }),
        ('Control de Visibilidad', {
            'fields': ('publicado', 'portada')
        }),
    )

    def mostrar_imagen(self, obj):
        if obj.imagen_url:
            return format_html(
                '<img src="{}" width="60" style="border-radius:10px; border: 1px solid #334155; object-fit: cover;" />', 
                obj.imagen_url
            )
        return mark_safe('<span style="color: #64748b; font-style: italic;">Sin previa</span>')
    
    mostrar_imagen.short_description = 'Imagen'
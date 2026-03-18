from django.contrib import admin
from .models import CategoriaProyecto, Proyecto, StackProyecto, MetricaObjetivo, SectorProyecto

class ProyectoAdmin(admin.ModelAdmin):
    exclude = ('creado_en', )
    list_display = ('titulo', 'categoria', 'sector', 'descripcion',)
    
class CategoriaProyectoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')

class SectorProyectoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')
    
class StackProyectoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')
    
class MetricaObjetivoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion_metrica')

# Register your models here.
admin.site.register(Proyecto, ProyectoAdmin)
admin.site.register(CategoriaProyecto, CategoriaProyectoAdmin)
admin.site.register(StackProyecto, StackProyectoAdmin)
admin.site.register(MetricaObjetivo, MetricaObjetivoAdmin)
admin.site.register(SectorProyecto, SectorProyectoAdmin)
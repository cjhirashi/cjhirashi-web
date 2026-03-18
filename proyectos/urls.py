from django.urls import path
from . import views

# Definimos el namespace para que coincida con {% url 'proyectos:detalle' ... %}
app_name = 'proyectos'

urlpatterns = [
    # Ruta principal del listado
    path('', views.index, name='index'),
    
    # RUTA CORREGIDA: Cambiamos <int:proyecto_id> por <slug:slug>
    path('<slug:slug>', views.detalle, name='detalle'),
    
    # Ruta para el formulario
    path('formulario', views.formulario, name='formulario'),
]
from django.urls import path
from . import views

# Rutas de la aplicación Proyecto
app_name = 'proyectos'

urlpatterns = [
    path('', views.index, name='index'),
    path('formulario', views.formulario, name='formulario'),
    path('<int:proyecto_id>', views.detalle, name='detalle'),
]
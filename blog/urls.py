from django.urls import path
from . import views

# Rutas de la aplicación
urlpatterns = [
    path('', views.index, name='index')
]
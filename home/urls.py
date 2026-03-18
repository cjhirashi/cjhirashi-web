from django.urls import path
from . import views

# Rutas de la aplicación
app_name = 'home'

urlpatterns = [
    path('', views.index, name='index')
]
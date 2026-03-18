from . import models
from django.forms import ModelForm

class ProyectoForm(ModelForm):
    class Meta:
        model = models.Proyecto
        fields = ['titulo', 'descripcion']
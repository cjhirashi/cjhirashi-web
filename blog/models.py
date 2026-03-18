from django.db import models
from django.utils import timezone

# Create your models here.
class CategoriaBlog(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
    
class BlogPost(models.Model):
    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    creado_en = models.DateTimeField(default=timezone.now)
    #imagen = models.ImageField(upload_to='proyectos/')

    def __str__(self):
        return self.titulo
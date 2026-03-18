from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.text import slugify

class CategoriaBlog(models.Model):
    """
    Categorías para organizar los artículos técnicos.
    Ej: Machine Learning, MLOps, Análisis de Datos.
    """
    nombre = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    descripcion = models.TextField(blank=True, help_text="Breve descripción de la categoría.")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nombre)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Categoría de Blog"
        verbose_name_plural = "Categorías del Blog"

    def __str__(self):
        return self.nombre

class Post(models.Model):
    """
    Modelo principal para los artículos del blog.
    Diseñado para soportar contenido técnico y métricas de lectura.
    """
    ESTADO_CHOICES = (
        ('borrador', 'Borrador'),
        ('publicado', 'Publicado'),
    )

    titulo = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    autor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    categoria = models.ForeignKey(
        CategoriaBlog, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True, 
        related_name='posts'
    )
    
    contenido = models.TextField(
        help_text="Cuerpo del artículo en formato Markdown."
    )
    extracto = models.TextField(
        max_length=500, 
        blank=True, 
        help_text="Resumen corto para las tarjetas de presentación."
    )
    
    # URLField para mantener la consistencia con el modelo de Proyecto
    imagen_url = models.URLField(
        max_length=500, 
        blank=True, 
        null=True, 
        help_text="URL de la imagen destacada del post."
    )
    
    # Flags de visualización
    publicado = models.BooleanField(default=False, verbose_name="¿Está publicado?")
    portada = models.BooleanField(default=False, verbose_name="¿Mostrar en la Home?")
    
    # Metadatos técnicos
    tiempo_lectura = models.PositiveIntegerField(default=5, help_text="Minutos estimados de lectura.")
    fecha_publicacion = models.DateTimeField(default=timezone.now)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-fecha_publicacion']
        verbose_name = "Artículo"
        verbose_name_plural = "Artículos"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.titulo)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.titulo
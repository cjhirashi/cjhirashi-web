from django.db import models
from django.utils import timezone

class CategoriaProyecto(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, help_text="Descripción breve de la categoría, ej: Visión por Computadora, Procesamiento de Lenguaje Natural, etc.")
    def __str__(self): return self.nombre

class StackProyecto(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, help_text="Descripción breve del stack tecnológico, ej: Python, TensorFlow, AWS, etc.")
    def __str__(self): return self.nombre
    
class SectorProyecto(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, help_text="Descripción breve del sector, ej: Finanzas, Salud, Retail, etc.")
    def __str__(self): return self.nombre

# --- Nueva Tabla para Métricas/Objetivos ---
class MetricaObjetivo(models.Model):
    nombre = models.CharField(max_length=100, unique=True, help_text="Ej: AUC-ROC, RMSE, Accuracy, F1-Score")
    descripcion_metrica = models.TextField(blank=True, help_text="Breve explicación de qué mide esta métrica")

    def __str__(self):
        return self.nombre

class Proyecto(models.Model):
    titulo = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255, null=True, blank=True)
    
    # Relación con la nueva tabla de métricas
    tipo_objetivo = models.ForeignKey(
        MetricaObjetivo, 
        on_delete=models.PROTECT, 
        null=True,
        blank=True,
        related_name='proyectos',
        help_text="Selecciona la métrica principal del proyecto"
    )
    valor_objetivo = models.CharField(
        max_length=100, 
        null=True,
        blank=True,
        help_text="Ej: 0.92, 15%, etc."
    )
    
    fecha_proyecto = models.DateField(default=timezone.now)
    imagen_url = models.URLField(max_length=500, null=True, blank=True, help_text="Pega aquí la URL de la imagen del proyecto")
    
    descripcion = models.TextField()
    categoria = models.ForeignKey(CategoriaProyecto, on_delete=models.SET_NULL, null=True, related_name='proyectos')
    sector = models.ForeignKey(SectorProyecto, on_delete=models.SET_NULL, null=True, related_name='proyectos')
    stack = models.ManyToManyField(StackProyecto, related_name='proyectos')
    
    url_github = models.URLField(max_length=255, blank=True)
    url_demo = models.URLField(max_length=255, blank=True)
    
    creado_en = models.DateTimeField(auto_now_add=True)
    publicado = models.BooleanField(default=False)
    portada = models.BooleanField(default=False)

    class Meta:
        ordering = ['-fecha_proyecto']

    def __str__(self):
        return self.titulo
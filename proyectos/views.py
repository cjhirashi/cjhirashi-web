from django.shortcuts import render, get_object_or_404, redirect
from .forms import ProyectoForm
from .models import Proyecto, CategoriaProyecto, SectorProyecto

# --- VISTAS DE PROYECTOS MEJORADAS ---

def index(request):
    """
    Vista principal que lista todos los proyectos publicados.
    Permite el filtrado dinámico mediante parámetros GET en la URL para
    segmentar por Categoría y Sector.
    """
    # Captura de parámetros para filtrado desde la URL
    categoria_id = request.GET.get('categoria')
    sector_id = request.GET.get('sector')

    # QuerySet base: Solo proyectos marcados como publicados
    proyectos = Proyecto.objects.filter(publicado=True)

    # Lógica de filtrado condicional combinada
    if categoria_id:
        proyectos = proyectos.filter(categoria_id=categoria_id)
    if sector_id:
        proyectos = proyectos.filter(sector_id=sector_id)

    # Ordenar por fecha de proyecto (más reciente primero)
    proyectos = proyectos.order_by('-fecha_proyecto')

    # Listas para llenar los selectores (dropdowns) en el template
    categorias = CategoriaProyecto.objects.all()
    sectores = SectorProyecto.objects.all()

    # Diccionario de datos para el Hero (Mantiene consistencia visual con la Home)
    datos = {
        'intro': 'Portafolio Profesional',
        'titulo': 'Todos los Proyectos',
        'descripcion': [
            'Explora mi repositorio completo de soluciones en **Ciencia de Datos**, **Ingeniería** y **Automatización**.',
            'Utiliza los filtros inteligentes para segmentar por área técnica o por el sector industrial de aplicación.',
        ],
    }

    # Construcción del contexto
    context = {
        'proyectos': proyectos,
        'categorias': categorias,
        'sectores': sectores,
        'datos': datos,
        # Convertimos a int para que el template pueda comparar con los IDs de los objetos
        'cat_actual': int(categoria_id) if categoria_id and categoria_id.isdigit() else None,
        'sec_actual': int(sector_id) if sector_id and sector_id.isdigit() else None,
    }
    
    return render(
        request, 
        'index_proyectos.html', # Te sugiero usar nombres específicos para evitar conflictos
        context
    )
    
def detalle(request, slug):
    """
    Vista de detalle del proyecto.
    Cambiamos el parámetro de búsqueda de 'id' a 'slug' para que tus URLs
    sean profesionales (ej: /proyectos/analisis-de-datos-avanzado/).
    """
    proyecto = get_object_or_404(Proyecto, slug=slug)
    return render(
        request, 
        'detalle_proyecto.html', 
        context={'proyecto': proyecto}
    )

def formulario(request):
    """
    Vista del formulario de creación.
    Mantenida intacta en su lógica interna por solicitud del usuario.
    """
    if request.method == 'POST':
        form = ProyectoForm(request.POST)
        if form.is_valid():
            form.save()
            # Usamos redirect con namespace, que es la forma estándar de Django Senior
            return redirect('proyectos:index')
    else:
        form = ProyectoForm()
    
    return render(
        request,
        'proyecto_form.html',
        context={'form': form}
    )
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from .forms import ProyectoForm
from .models import Proyecto

# Create your views here.
def index(request):
    proyectos = Proyecto.objects.all()
    return render(
        request, 
        'index.html', 
        context={'proyectos': proyectos}
    )
    
def detalle(request, proyecto_id):

    proyecto = get_object_or_404(Proyecto, id=proyecto_id)
    return render(
        request, 
        'detalle.html', 
        context={'proyecto': proyecto}
    )

def formulario(request):
    if request.method == 'POST':
        form = ProyectoForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/proyectos/')
    else:
        
        form = ProyectoForm()
    
    return render(
        request,
        'proyecto_form.html',
        context={'form': form}
    )
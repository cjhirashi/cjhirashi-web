from django.shortcuts import render
from proyectos.models import Proyecto, StackProyecto

# Create your views here.
def index(request):
    proyectos = Proyecto.objects.filter(publicado=True)
    
    mis_datos = {
        'intro': 'Portfolio',
        'titulo': 'Data Science',
        'descripcion': [
            'Hola, soy **Carlos Jiménez, Data Scientist** con base sólida en ingeniería y un enfoque altamente estructurado para resolver problemas complejos. Mi fortaleza diferencial es el pensamiento lógico y la arquitectura de sistemas que desarrollé durante años en la automatización de sistemas de control inteligentes, donde la precisión, la estabilidad y la trazabilidad no son opcionales.',
            'Esa experiencia se traduce directamente a mi trabajo en datos: diseño soluciones con criterio de estructura de datos, modelado y organización de información, cuidando consistencia, calidad y eficiencia. Me siento cómodo convirtiendo procesos complejos en pipelines claros, verificables y mantenibles, y aplico una mentalidad de depuración para encontrar fallas en datos, features y comportamiento de modelos.',
            'Trabajo con Python y SQL, y mi objetivo es construir productos de datos que funcionen en condiciones reales: modelos y sistemas analíticos que sean robustos, auditables y alineados a impacto. Mi transición a Ciencia de Datos es estratégica: pasé de automatizar sistemas inteligentes a desarrollar inteligencia basada en datos, con estándares de ingeniería y enfoque en resultados.',
            ],
    }
    
    mis_stacks = StackProyecto.objects.all()
    
    mis_metricas = [
        # {'titulo': 'Python', 'subtitulo': 'Modelos en producción'},
        
        # Aquí puedes agregar fácilmente una cuarta o quinta métrica
    ]

    # Pasamos la lista al contexto del template
    context = {
        'datos': mis_datos,
        'metricas': mis_metricas,
        'stacks' : mis_stacks,
        'proyectos': proyectos,
    }
    
    return render(request, 'index.html', context)
    
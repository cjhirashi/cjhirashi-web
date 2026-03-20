from django.shortcuts import render


def index(request):
    """Blog home.

    Por ahora solo renderiza el template mientras se definen los modelos.
    """
    
    # Diccionario de datos para el Hero (Mantiene consistencia visual con la Home)
    datos = {
        'intro': 'Blog personal',
        'titulo': 'Todos los artículos',
        'descripcion': [
            'Explora mis reflexiones, tutoriales y análisis en el mundo de la tecnología, la ciencia de datos y la ingeniería.',
            'Sumérgete en un espacio de aprendizaje continuo, donde comparto mis experiencias y conocimientos para inspirar a otros profesionales y entusiastas del sector.',
        ],
    }
    
    # Construcción del contexto
    context = {
        'datos': datos,
    }
    
    return render(
        request, 
        'index_blog.html',
        context        
    )
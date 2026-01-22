"use client"

export function NewsletterSection() {
    return (
        <section className="py-20 bg-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgbW9kZT0ib3ZlcmxheSI+PHBhdGggZD0iTTAgMGg2MHY2MEgwWiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMFoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">¿Te gustó este artículo?</h2>
                <p className="text-indigo-200 mb-8">Suscríbete para recibir guías similares directamente en tu inbox.</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('¡Suscrito!'); }}>
                    <input type="email" placeholder="tu@email.com" className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:bg-white/20" />
                    <button className="px-8 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors">Suscribirme</button>
                </form>
            </div>
        </section>
    )
}

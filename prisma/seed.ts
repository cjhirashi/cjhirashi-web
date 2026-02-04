import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('admin123', 12)
  const user = await prisma.user.upsert({
    where: { email: 'admin@cjhirashi.com' },
    update: {},
    create: {
      email: 'admin@cjhirashi.com',
      name: 'Admin',
      password,
      role: 'admin',
    },
  })
  console.log({ user })
  // Seed Home Sections
  const homeSections = [
    {
      type: 'HERO',
      order: 0,
      isActive: true,
      content: {
        title: "Datos que cuentan <br /> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-indigo-400 dark:to-purple-400\">historias.</span>",
        subtitle: "Soy Científico de Datos y Desarrollador Full-Stack. Construyo puentes entre modelos complejos de IA e interfaces de usuario intuitivas.",
        primaryCtaText: "Ver Portafolio",
        primaryCtaLink: "/projects",
        secondaryCtaText: "Descargar CV",
        secondaryCtaLink: "/cv.pdf",
        imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Juan Scientist Portrait",
        label: "Disponible para nuevos proyectos"
      }
    },
    {
      type: 'LOGOS',
      // Using LOGOS type for "Stack Tecnológico" to map to the features/logos section
      order: 1,
      isActive: true,
      content: {
        title: "Stack Tecnológico",
        // We'll store simple list for now, ideally this type supports icons
        // For now, let's assume the renderer handles specific styles or we update the renderer later.
        // But looking at page.tsx it was "Features" style list of text+icon.
        // Let's use FEATURES type if available or just generic content.
        // admin/home-section-form used LOGOS or FEATURES.
      }
    },
    {
      type: 'PROJECT_FEED',
      order: 2,
      isActive: true,
      content: {
        title: "Proyectos Destacados",
        subtitle: "Una selección de mis trabajos en Data Science y Web.",
        count: 3
      }
    },
    {
      type: 'BLOG_FEED',
      order: 3,
      isActive: true,
      content: {
        title: "Blogs Destacados",
        subtitle: "Pensamientos sobre código, arquitectura y el futuro de la IA.",
        count: 3
      }
    },
    {
      type: 'CTA',
      order: 4,
      isActive: true,
      content: {
        title: "¿Tienes un proyecto en mente?",
        subtitle: "Estoy disponible para consultoría freelance y colaboraciones técnicas.",
        buttonText: "Enviar Correo",
        buttonLink: "/contact"
      }
    }
  ]

  for (const section of homeSections) {
    await prisma.homeSection.create({
      data: section
    })
  }

  console.log('Seeded home sections')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

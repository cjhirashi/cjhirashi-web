import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'cjhirashi - Sitio en Construcción',
  description: 'Próximamente: Portfolio profesional, blog técnico y CMS con IA. Lanzamiento: Diciembre 2025.',
  keywords: ['data science', 'development', 'portfolio', 'blog', 'cjhirashi'],
  openGraph: {
    title: 'cjhirashi - Coming Soon',
    description: 'Professional portfolio, technical blog, and AI-powered CMS launching in December 2025.',
    url: 'https://cjhirashi.com',
    siteName: 'cjhirashi',
    type: 'website',
  },
};

// Social Icons Components
function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Purple Orb */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        {/* Blue Orb */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        {/* Pink Orb */}
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '5s' }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <Image
            src="/logo.svg"
            alt="cjhirashi logo"
            width={300}
            height={80}
            priority
            className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-[0_0_25px_rgba(147,51,234,0.5)] hover:drop-shadow-[0_0_35px_rgba(147,51,234,0.7)] transition-all duration-300"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            cjhirashi
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 font-medium">
          Data Scientist & Developer
        </p>

        {/* Hero Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Sitio en Construcción
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
          Próximamente: Portfolio profesional + Blog técnico + CMS con IA
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1f2e] border border-gray-700 rounded-full mb-12">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gray-300 text-sm sm:text-base font-medium">
            Lanzamiento estimado: Diciembre 2025
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-8">
          <a
            href="https://linkedin.com/in/cjhirashi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a LinkedIn de cjhirashi"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0f1419] rounded-lg p-2"
          >
            <LinkedInIcon />
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://github.com/cjhirashi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a GitHub de cjhirashi"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0f1419] rounded-lg p-2"
          >
            <GitHubIcon />
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="mailto:carlos@cjhirashi.com"
            aria-label="Enviar email a carlos@cjhirashi.com"
            className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#0f1419] rounded-lg p-2"
          >
            <EmailIcon />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 cjhirashi — Data Scientist & Developer
        </p>
      </footer>
    </div>
  );
}

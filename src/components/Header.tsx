import { Mail, Github, Linkedin } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#1a2744] px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="mailto:contact@pete.dev"
            className="text-[#9ca3af] hover:text-[#f1f5f9] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#f1f5f9] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#f1f5f9] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#f1f5f9] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#f1f5f9] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67 0-1.48-1.12-2.67-2.62-2.67-.28 0-.54.04-.79.12-.28-2.12-2.1-3.78-4.32-3.78-1.06 0-2.04.36-2.82.97-.24.18-.29.27-.29.54v.07l-.6 5.29zm-1.23-.29v8.42h-.81V9.31c0-.27.21-.73.81-.73zm-2.01 1.42v6.99h-.81v-6.68c0-.31.21-.62.81-.31zm-2.02.86v6.14h-.81V11.3c0-.39.32-.56.81-.44zm-2.01.43v5.7h-.81v-5.34c0-.26.21-.52.81-.36z" />
            </svg>
          </a>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-[#9ca3af] hover:text-[#f1f5f9] text-sm transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[#9ca3af] hover:text-[#f1f5f9] text-sm transition-colors"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  )
}

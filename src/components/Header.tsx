import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hamid Reza Vorezgi Nejad</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="mailto:vorezgi@gmail.com" className="hover:text-cyan-400 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vrzgi/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/vrzgi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="/me.png"
              alt="Hamid Reza Vorezgi Nejad"
              className="w-64 h-64 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hamid Reza Vorezgi Nejad
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-6">
              Back-End Developer | Software Engineer | NodeJS
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Passionate about building scalable backend systems. My goal is to ship things that work well,
              are easy to maintain, and make a meaningful difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/vrzgi"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyan-500 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="#about" className="inline-block animate-bounce">
            <ArrowDown size={32} className="text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

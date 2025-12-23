import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-300 text-lg mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:vorezgi@gmail.com"
              className="bg-slate-800 border-2 border-cyan-500 rounded-xl p-6 hover:bg-slate-700 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold">vorezgi@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+989105471585"
              className="bg-slate-800 border-2 border-cyan-500 rounded-xl p-6 hover:bg-slate-700 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-semibold">+98 910 547 1585</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/vrzgi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border-2 border-cyan-500 rounded-xl p-6 hover:bg-slate-700 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/vrzgi</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/vrzgi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border-2 border-cyan-500 rounded-xl p-6 hover:bg-slate-700 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Github className="text-cyan-400" size={32} />
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="font-semibold">github.com/vrzgi</p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Globe size={20} />
              <p>Languages: Persian (Native), English (Limited Working)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

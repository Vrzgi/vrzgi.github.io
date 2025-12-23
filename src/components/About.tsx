import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I'm a back-end developer with 3+ years of experience developing APIs and backend services.
            I enjoy complex problems and turning them into clean, scalable solutions, whether I'm working
            solo or collaborating with a team. I care about the user experience behind the API and try to
            design with empathy and long-term value in mind.
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            I'm always learning and experimenting with new tools—especially AI, which I'm genuinely excited
            about and see as a big part of how we'll build software in the coming years.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Code2 className="text-cyan-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Clean Code</h3>
              <p className="text-gray-600">
                Writing maintainable, scalable solutions that stand the test of time
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Rocket className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Innovation</h3>
              <p className="text-gray-600">
                Exploring AI and emerging technologies to build better software
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Users className="text-cyan-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Collaboration</h3>
              <p className="text-gray-600">
                Effective team player with strong communication skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const certifications = [
    'Backpack Course',
    '8th Winter Seminar Series (WSS)',
    'Full Stack Programming BootCamp',
    'JavaScript Algorithms and Data Structures'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Education & Certifications</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-cyan-600 flex-shrink-0" size={40} />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Bachelor's degree, Computer Engineering</h3>
                <p className="text-lg text-cyan-700 font-semibold mb-1">Sistan and Baluchistan University</p>
                <p className="text-gray-600">2017 - 2021</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-600" size={32} />
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="bg-white border-2 border-slate-200 rounded-lg p-4 hover:border-cyan-500 transition-colors"
                >
                  <p className="text-slate-700 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

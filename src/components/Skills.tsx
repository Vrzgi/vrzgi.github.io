export default function Skills() {
  const topSkills = ['JavaScript', 'Node.js', 'NestJS'];

  const skills = [
    'TypeScript', 'Express.js', 'TypeORM', 'PostgreSQL', 'Redis',
    'Elasticsearch', 'Docker', 'RESTful APIs', 'JWT Authentication',
    'OAuth2', 'Session Management', 'MinIO / S3', 'Microservices',
    'Event-Driven Architecture', 'API Gateway', 'gRPC', 'WebSockets',
    'LangChain', 'RAG', 'Git', 'Jest', 'CI/CD', 'Kibana'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Skills & Technologies</h2>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-slate-800">Top Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white border-2 border-slate-200 text-slate-700 px-5 py-2 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-600 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

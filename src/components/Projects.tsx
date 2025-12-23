import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkType: 'github' | 'linkedin' | 'none';
}

const projects: Project[] = [
  {
    title: 'Chimzy E-Commerce Platform',
    description: 'A comprehensive e-commerce backend system built with NestJS, featuring advanced product search with Elasticsearch, inventory management, multi-vendor support, and real-time analytics. Includes authentication, authorization, file storage, and webhook integrations.',
    technologies: ['NestJS', 'PostgreSQL', 'Elasticsearch', 'Redis', 'OAuth2', 'Docker'],
    link: 'https://www.linkedin.com/company/110387271/',
    linkType: 'linkedin'
  },
  {
    title: 'Part Software Group - API Gateway',
    description: 'Designed and developed an API gateway tightly integrated with PartFramework, implementing schema-driven data validation, multi-protocol routing (HTTP/1.1, HTTP/2, gRPC, WebSockets), observability, load balancing, and an AI-powered support bot with LangChain and RAG workflow.',
    technologies: ['API Gateway', 'Node.js', 'LangChain', 'RAG', 'gRPC', 'CI/CD'],
    link: 'https://www.linkedin.com/company/14048794/',
    linkType: 'linkedin'
  },
  {
    title: 'Startup Show',
    description: 'Developed a website for startup registration and business plan submissions, providing full monitoring and review capabilities for evaluators. Built with MVC architecture for clean separation of concerns.',
    technologies: ['PHP', 'HTML/CSS/JS', 'MySQL', 'MVC Architecture'],
    link: 'https://github.com/Vrzgi/Startup-Show',
    linkType: 'github'
  },
  {
    title: 'Hotel Management System',
    description: 'Created as an end-of-semester project for an advanced programming course, focusing on object-oriented C# to manage hotel rooms, guest check-ins, and check-outs. Demonstrates strong OOP principles and software design.',
    technologies: ['C#', 'Object-Oriented Programming'],
    link: 'https://github.com/Vrzgi/Hotel-Management-System',
    linkType: 'github'
  },
  {
    title: 'Memory Game',
    description: 'Developed as a mid-term project for an advanced programming course, offering three different topics with varying levels of complexity. Built using C# and Microsoft Visual Studio.',
    technologies: ['C#', 'Microsoft Visual Studio'],
    link: 'https://github.com/Vrzgi/Memory-Game',
    linkType: 'github'
  },
  {
    title: 'Student Management System',
    description: 'Designed as a programming course project to manage students\' information, courses, and grades using file system (no database). Demonstrates proficiency in C++ and file system operations.',
    technologies: ['C++', 'File System'],
    linkType: 'none'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    {project.linkType === 'github' ? <Github size={24} /> : <ExternalLink size={24} />}
                  </a>
                )}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded text-sm border border-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

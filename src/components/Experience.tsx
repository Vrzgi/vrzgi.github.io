import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  companyUrl: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Chimzy',
    companyUrl: 'https://www.linkedin.com/company/110387271/',
    type: 'Full-time',
    period: 'June 2025 - Present (7 months)',
    location: 'Manchester, England, United Kingdom · Remote',
    description: [
      'Built and maintained backend modules with NestJS and TypeScript, creating a modular architecture for scalability, maintainability and future microservices expansion',
      'Optimized and wrote efficient PostgreSQL queries for better database performance and consistent data access throughout the platform',
      'Integrated Elasticsearch for faster and more precise data searching for Products and Shops',
      'Implemented Redis caching for lesser load on DB and quicker return time for frequently accessed data',
      'Implemented a configurable logging system with Elasticsearch and Kibana for monitoring and observability',
      'Supported the implementation of MinIO for object storage for media and file management',
      'Manage and coordinate the development team with the Product Owner to prioritize clear requirements for functionality to make sure the features meet the technology and business needs'
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'OAuth2', 'Elasticsearch', 'Kibana', 'Docker', 'RBAC', 'Jest']
  },
  {
    title: 'Software Engineer',
    company: 'Chimzy',
    companyUrl: 'https://www.linkedin.com/company/110387271/',
    type: 'Part-time',
    period: 'March 2025 - June 2025 (4 months)',
    location: 'Manchester, England, United Kingdom',
    description: [
      'Continued development and enhancement of backend systems, contributing to the platform\'s growth and technical foundation'
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'OAuth2', 'Elasticsearch']
  },
  {
    title: 'Back End Developer',
    company: 'Part Software Group',
    companyUrl: 'https://www.linkedin.com/company/14048794/',
    type: 'Full-time',
    period: 'October 2023 - June 2025 (1 year 9 months)',
    location: 'Mashhad, Razavi Khorasan, Iran · On-site',
    description: [
      'Contributed to the Infrastructure team\'s API Gateway sub-team, designing and developing an API gateway tightly integrated with PartFramework and interoperable with other Node.js frameworks',
      'Implemented schema-driven data validation, request/response transformations, multi-protocol routing (HTTP/1.1, HTTP/2, gRPC, WebSockets), observability (metrics, tracing, alerts), and load balancing (round-robin, normalized, weighted) to ensure a reliable and high-performance platform',
      'Delivered RSA-based encryption for secure data exchange and an AI-powered support bot by integrating LangChain with a RAG workflow and vector database storage',
      'Enhanced CI/CD pipelines with automated testing, container builds, and deployments, improving system reliability and accelerating delivery'
    ],
    technologies: ['API Gateway', 'gRPC', 'WebSockets', 'Load Balancing', 'CI/CD', 'LangChain', 'RAG', 'k6']
  },
  {
    title: 'Back End Developer',
    company: 'Part Software Group',
    companyUrl: 'https://www.linkedin.com/company/14048794/',
    type: 'Internship',
    period: 'August 2024 - August 2024 (1 month)',
    location: 'Mashhad, Razavi Khorasan, Iran',
    description: [
      'Completed Part College\'s Backpack 3, contributing to a backend project by building REST APIs in Node.js (ES6)',
      'Leveraged middleware and Redis to improve performance and responsiveness, while applying cluster management, system architecture, and design patterns to create a scalable and maintainable system',
      'Applied dependency injection to keep the code modular and testable, and managed version control using Git to ensure reliable collaboration and code history'
    ],
    technologies: ['Node.js', 'REST APIs', 'Redis', 'Design Patterns', 'Git']
  },
  {
    title: 'Web Developer',
    company: 'PeoplePerHour',
    companyUrl: 'https://www.linkedin.com/company/167584/',
    type: 'Freelance',
    period: 'April 2021 - July 2023 (2 years 4 months)',
    location: 'Qaen, South Khorasan Province, Iran · Remote',
    description: [
      'Worked as a freelance web developer, delivering various web development projects and solutions for clients'
    ],
    technologies: ['Web Development', 'JavaScript']
  },
  {
    title: 'Teaching Assistant',
    company: 'Sistan and Baluchistan University',
    companyUrl: 'https://www.linkedin.com/company/42124525/',
    type: 'Part-time',
    period: 'September 2016 - May 2019 (2 years 9 months)',
    location: 'Zahedan County, Sistan and Baluchestan Province, Iran · On-site',
    description: [
      'Teaching Assistant for Data Structures and Computer Basics & Programming across six terms, supervised by Dr. Mohammad Hossein Sargolzaei and Dr. Asieh Ghanbarpour',
      'Focused on helping students master core data structures and building strong CS fundamentals'
    ],
    technologies: ['Data Structures', 'Programming', 'Teaching']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((job, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-cyan-600 hover:text-cyan-700 font-semibold"
                  >
                    {job.company}
                  </a>
                </div>
                <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {job.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {job.description.map((item, i) => (
                  <li key={i} className="text-gray-700 flex">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm"
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


import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  description: string;
  link: string;
  type: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "Teep Software",
    description: "A comprehensive multitenant gym management software designed for gym owners. Built with React TypeScript, Node.js, and PostgreSQL, featuring member management, billing automation, class scheduling, and real-time analytics. Supports multiple gym locations with role-based access control and custom branding.",
    link: "https://teepsoftware.com",
    type: "SaaS Platform",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    name: "BitPayress",
    description: "A full-stack food delivery application featuring real-time order tracking, payment integration, and restaurant management. Built with TypeScript React frontend, Django REST API backend, and Node.js microservices architecture.",
    link: "#",
    type: "Web Application",
    tech: ["TypeScript", "React", "Django", "Node.js", "PostgreSQL"]
  },
  {
    name: "BlueScreen",
    description: "Digital version of Edmonton's Arc Card for seamless transit payments. Features NFC integration, balance management, and trip history tracking with a modern, accessible user interface.",
    link: "#",
    type: "Mobile App",
    tech: ["React Native", "TypeScript", "Firebase", "NFC"]
  },
  {
    name: "Programming YouTube Channel",
    description: "Educational content covering modern web development, including React tutorials, full-stack project builds, and programming best practices. Over 20,000+ students across various platforms.",
    link: "https://youtube.com/@chikanma",
    type: "Education",
    tech: ["Teaching", "Content Creation", "Video Production"]
  }
];

const ProjectsSection = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-12">
        <h2 className="text-white font-semibold text-xl">Featured Projects</h2>
        <span className="text-2xl">🚀</span>
      </div>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900/20 border border-gray-800/50 rounded-xl p-8 hover:bg-gray-900/30 transition-all duration-300 hover:border-gray-700/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {project.type}
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors ml-6 flex-shrink-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

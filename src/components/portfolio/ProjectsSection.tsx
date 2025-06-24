import { ExternalLink, Building2, Code2, Trophy, GraduationCap, Youtube, Cpu, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  description: string;
  link: string;
  type: string;
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const projects: Project[] = [
  {
    name: "Lead Software Engineer @ Teep Software",
    description: "Engineered a scalable, multi-tenant SaaS platform for gym management, leveraging Next.js, TypeScript, tRPC, and PostgreSQL to deliver a robust solution for diverse gym operators.",
    link: "https://teepsoftware.com",
    type: "Work Experience",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Stripe", "Redis", "Docker"],
    icon: Building2
  },
  {
    name: "Software Engineer @ Faculty of Skin",
    description: "Developed GCP serverless functions using Node.js and BigQuery, improving data management efficiency. Implemented a Redis caching layer for PDF document retrieval, reducing average load time from 2s to 200ms.",
    link: "www.facultyofskin.com",
    type: "Work Experience",
    tech: ["Node.js", "Google Cloud", "BigQuery", "Redis", "CI/CD"],
    icon: Code2
  },
  {
    name: "Arc Plus - NFC Transit System",
    description: "Developed a Raspberry Pi-based NFC transit payment system with real-time card reading and transaction processing. Features include secure payment handling and instant validation.",
    link: "https://github.com/Chikanma681/arc-plus",
    type: "Hardware & Software",
    tech: ["Python", "Raspberry Pi", "NFC", "TypeScript", "React"],
    icon: Cpu
  },
  {
    name: "Udemy Course Creator",
    description: "Comprehensive Python programming course on Udemy with over 20,000 enrolled students. Covers fundamentals to advanced concepts with hands-on projects.",
    link: "https://www.udemy.com/course/python-beginners-course/?couponCode=ST16MT230625G1",
    type: "Education",
    tech: ["Python", "Teaching", "Programming"],
    icon: BookOpen
  },
  {
    name: "Programming Tutorial Channel",
    description: "YouTube channel focused on teaching programming concepts, software development best practices, and coding tutorials.",
    link: "https://www.youtube.com/@chikanma5021",
    type: "Content Creation",
    tech: ["Education", "Programming", "Tutorials"],
    icon: Youtube
  },
//   {
//     name: "Portfolio Website",
//     description: "Modern portfolio website built with React and TypeScript, featuring a responsive design and smooth animations.",
//     link: "https://github.com/chikanma681",
//     type: "Web Development",
//     tech: ["React", "TypeScript", "Tailwind CSS"],
//     icon: Code2
//   }
];

const ProjectsSection = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-12">
        <h2 className="text-white font-semibold text-xl">Featured Projects & Experience</h2>
        <span className="text-2xl">🚀</span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link === "#" ? undefined : project.link}
            target={project.link === "#" ? undefined : "_blank"}
            rel={project.link === "#" ? undefined : "noopener noreferrer"}
            className="group relative block rounded-xl p-8 overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <project.icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-white font-semibold text-lg capitalize group-hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  {project.link !== "#" && (
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/90 transition-colors duration-300" />
                  )}
                </div>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm text-xs font-medium mb-4">
                  {project.type}
                </Badge>
                <p className="text-gray-300/90 leading-relaxed text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

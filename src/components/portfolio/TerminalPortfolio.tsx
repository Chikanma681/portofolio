import React from "react";
import { ExternalLink, Building2, Code2, Youtube, Cpu, BookOpen, Github, Twitter, Mail, User, Briefcase, FolderOpen, Terminal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  description: string;
  link: string;
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface WorkExperience {
  company: string;
  position: string;
  description: string;
  link: string;
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
}
const workExperience: WorkExperience[] = [
  {
    company: "Teep Software",
    position: "Lead Software Engineer",
    description: "Engineered a scalable, multi-tenant SaaS platform for gym management, leveraging Next.js, TypeScript, tRPC, and PostgreSQL to deliver a robust solution for diverse gym operators.",
    link: "https://teepsoftware.com",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Stripe", "Redis", "Docker"],
    icon: Building2
  },
  {
    company: "Faculty of Skin",
    position: "Software Engineer",
    description: "Developed GCP serverless functions using Node.js and BigQuery, improving data management efficiency. Implemented a Redis caching layer for PDF document retrieval, reducing average load time from 2s to 200ms.",
    link: "https://www.facultyofskin.com",
    tech: ["Node.js", "Google Cloud", "BigQuery", "Redis", "CI/CD"],
    icon: Code2
  },
  {
    company: "Udemy",
    position: "Course Creator",
    description: "Comprehensive Python programming course on Udemy with over 20,000 enrolled students. Covers fundamentals to advanced concepts with hands-on projects.",
    link: "https://www.udemy.com/course/python-beginners-course/?couponCode=ST16MT230625G1",
    tech: ["Python", "Teaching", "Programming"],
    icon: BookOpen
  },
  {
    company: "YouTube",
    position: "Programming Educator",
    description: "Created and maintained a programming education channel, delivering high-quality tutorials and programming concepts to a growing audience of developers.",
    link: "https://www.youtube.com/@chikanma5021",
    tech: ["Education", "Programming", "Content Creation"],
    icon: Youtube
  }
];

const projects: Project[] = [
{
    name: "RentScape - Property Rental Platform",
    description: "Full-stack rental marketplace connecting landlords and tenants, similar to RentFaster. Features role-based authorization system distinguishing between landlord and tenant accounts, property listing management, advanced search filters, and secure messaging system. Built with React, Redux for state management, and MongoDB for scalable data storage.",
    link: "https://github.com/chikanma681/rentscape",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Session-based Auth", "Role-Based Access"],
    icon: Building2
  },
  {
    name: "ContactCRM - Enterprise Contact Management",
    description: "Full-stack contact management application built with ASP.NET Core 8.0 and React. Features complete CRUD operations, RESTful APIs with Swagger documentation, Entity Framework Core migrations, server-side pagination, dynamic filtering, and Docker containerization for scalable deployment.",
    link: "https://github.com/chikanma681/contactsPage",
    tech: ["ASP.NET Core", "React", "Entity Framework", "PostgreSQL", "Docker", "Swagger", "FluentValidation"],
    icon: Code2
  },
  {
    name: "BiteExpress - Food Delivery Platform",
    description: "Full-stack food delivery application similar to DoorDash, featuring real-time order tracking, secure payment processing with Stripe API, and scalable image storage using AWS S3. Built with TypeScript, React, Django, and Node.js with 95% uptime on AWS EC2.",
    link: "https://github.com/chikanma681/bite",
    tech: ["TypeScript", "React", "Django", "Node.js", "Stripe", "AWS S3", "AWS EC2", "NGINX"],
    icon: Code2
  },
  {
    name: "Arc Plus - NFC Transit System",
    description: "Developed a Raspberry Pi-based NFC transit payment system with real-time card reading and transaction processing. Features include secure payment handling and instant validation.",
    link: "https://github.com/Chikanma681/arc-plus",
    tech: ["Python", "Raspberry Pi", "NFC", "TypeScript", "React"],
    icon: Cpu
  }
];

const TerminalPortfolio = () => {
  return (
    <div
      className="mx-auto max-w-7xl font-mono tracking-tight"
      style={{
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }}
    >
      {/* Terminal window wrapper */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl">
        {/* Title bar with macOS traffic lights */}
        <div className="relative flex items-center justify-between border-b border-white/10 bg-zinc-900/60 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" aria-hidden="true" />
          </div>
          <div className="pointer-events-none select-none text-xs text-white/60">~/portfolio — zsh</div>
        </div>

        {/* Terminal content */}
        <div className="relative">
          {/* Scanline + vignette overlays */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" aria-hidden />

          {/* Subtle grid background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 10%, rgba(56,189,248,0.08), transparent 35%), radial-gradient(circle at 80% 30%, rgba(167,139,250,0.08), transparent 40%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: 'auto, auto, 22px 22px, 22px 22px',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />

          <div className="relative space-y-8 p-6">
            {/* Profile Section */}
            <section className="border-b border-white/10 pb-8">
              <div className="mb-6 flex items-center gap-3">
                <User className="h-5 w-5 text-green-400" />
                <h2 className="text-lg font-semibold text-white">$ whoami</h2>
              </div>
              
              <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start gap-6">
                <Avatar className="h-24 w-24 border-4 border-white/10">
                  <AvatarImage src="https://github.com/chikanma681.png" alt="Chikanma" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Chikanma Chika-Onuegbu
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Software Engineer passionate about building innovative solutions. Currently focused on full-stack development,
                    machine learning, and teaching programming through online courses.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <a
                      href="https://github.com/chikanma681"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-colors hover:border-white/20"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://twitter.com/chikanma681"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-colors hover:border-white/20"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://www.youtube.com/@chikanma5021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-colors hover:border-white/20"
                    >
                      <Youtube className="h-4 w-4" />
                      YouTube
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="mailto:chikanmaonuegbu@gmail.com"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-colors hover:border-white/20"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="border-b border-white/10 pb-8">
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-blue-400" />
                <h2 className="text-lg font-semibold text-white">$ ls work-experience/</h2>
              </div>
              
              <div className="grid gap-5 md:grid-cols-2">
                {workExperience.map((work, index) => (
                  <a
                    key={index}
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
                  >
                    {/* Neon hover ring */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.15), transparent 40%)' }} />

                    <div className="relative">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                          <work.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white transition-colors group-hover:text-sky-300">
                            {work.position}
                          </h3>
                          <p className="text-sm text-white/70">{work.company}</p>
                        </div>
                        <ExternalLink className="ml-auto h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                      </div>

                      <p className="mb-4 text-xs leading-relaxed text-white/80">
                        {work.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {work.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/75 transition-colors group-hover:border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <FolderOpen className="h-5 w-5 text-purple-400" />
                <h2 className="text-lg font-semibold text-white">$ ls projects/</h2>
              </div>
              
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
                  >
                    {/* Neon hover ring */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.15), transparent 40%)' }} />

                    <div className="relative flex h-full flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                        <project.icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="mb-2 flex items-center justify-center gap-2">
                        <h3 className="line-clamp-2 text-base font-semibold text-white transition-colors group-hover:text-sky-300">
                          {project.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                      </div>

                      <p className="mb-4 line-clamp-4 text-xs leading-relaxed text-white/80">
                        {project.description}
                      </p>

                      <div className="mt-auto flex flex-wrap justify-center gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/75 transition-colors group-hover:border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

{/* Skills Section */}
<section className="border-b border-white/10 pb-8">
              <div className="mb-6 flex items-center gap-3">
                <Terminal className="h-5 w-5 text-orange-400" />
                <h2 className="text-lg font-semibold text-white">$ cat skills.json</h2>
              </div>
              
              <div className="space-y-6">
                {/* Programming Languages */}
                <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="text-blue-400">"programming_languages":</span>
                    <span className="text-white/60">[</span>
                  </h3>
                  <div className="ml-4 flex flex-wrap gap-2">
                    {[
                      "Python", "JavaScript", "TypeScript", "HTML", "CSS", "MATLAB", 
                      "Java", "Golang", "C++", "C#"
                    ].map((lang, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-blue-400/50 hover:bg-blue-400/10"
                      >
                        "{lang}"
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-white/60">]</div>
                </div>

                {/* Tools & Frameworks */}
                <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="text-purple-400">"tools_and_frameworks":</span>
                    <span className="text-white/60">[</span>
                  </h3>
                  <div className="ml-4 space-y-3">
                    {/* Frontend & Backend */}
                    <div>
                      <h4 className="mb-2 text-xs text-green-400">// Frontend & Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React", "Next.js", "tRPC", "Node.js", "Flask", "Django", 
                          "Express", ".NET", "ASP.NET Core"
                        ].map((tool, index) => (
                          <span
                            key={index}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-purple-400/50 hover:bg-purple-400/10"
                          >
                            "{tool}"
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Databases & Cloud */}
                    <div>
                      <h4 className="mb-2 text-xs text-green-400">// Databases & Cloud</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "MongoDB", "PostgreSQL", "Microsoft SQL Server", "Entity Framework",
                          "AWS EC2", "AWS S3", "Firebase", "Redis"
                        ].map((tool, index) => (
                          <span
                            key={index}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-purple-400/50 hover:bg-purple-400/10"
                          >
                            "{tool}"
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div>
                      <h4 className="mb-2 text-xs text-green-400">// DevOps & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git", "Linux", "CI/CD", "Cloud Run", "GitHub Actions", 
                          "Playwright", "Docker"
                        ].map((tool, index) => (
                          <span
                            key={index}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-purple-400/50 hover:bg-purple-400/10"
                          >
                            "{tool}"
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-white/60">]</div>
                </div>
              </div>
            </section>
      {/* Pointer position CSS var for neon hover */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('pointermove', (e) => {
              const target = e.target.closest('a.group');
              if (!target) return;
              const rect = target.getBoundingClientRect();
              const x = e.clientX - rect.left; const y = e.clientY - rect.top;
              target.style.setProperty('--x', x + 'px');
              target.style.setProperty('--y', y + 'px');
            }, { passive: true });
          `,
        }}
      />
    </div>
  );
};

export default TerminalPortfolio;
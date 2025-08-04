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
    link: "https://www.facultyofskin.com",
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
    <section
      aria-labelledby="projects-heading"
      className="mb-20 font-mono tracking-tight"
      style={{
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }}
    >
      {/* Terminal window wrapper */}
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl">
        {/* Title bar with macOS traffic lights */}
        <div className="relative flex items-center justify-between border-b border-white/10 bg-zinc-900/60 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" aria-hidden="true" />
          </div>
          <div className="pointer-events-none select-none text-xs text-white/60">~/projects — zsh</div>
        </div>

        {/* Scanline + vignette overlays */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" aria-hidden />

          {/* Header */}
          <div className="relative flex items-center gap-3 px-6 pt-6 pb-4">
            <h2 id="projects-heading" className="text-lg font-semibold text-white">
              Featured Projects & Experience
            </h2>
            <span className="text-xl" role="img" aria-label="rocket">
              🚀
            </span>
          </div>

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

          {/* Projects grid */}
          <div className="relative grid gap-5 px-6 pb-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link === "#" ? undefined : project.link}
                target={project.link === "#" ? undefined : "_blank"}
                rel={project.link === "#" ? undefined : "noopener noreferrer"}
                className="group relative block overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
              >
                {/* Neon hover ring */}
                <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.15), transparent 40%)' }} />

                {/* Card content */}
                <div className="relative flex h-full flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="mb-2 flex items-center justify-center gap-2">
                    <h3 className="line-clamp-2 text-base font-semibold text-white transition-colors group-hover:text-sky-300">
                      {project.name}
                    </h3>
                    {project.link !== "#" && (
                      <ExternalLink className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                    )}
                  </div>

                  <Badge
                    variant="secondary"
                    className="mb-3 rounded border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm"
                  >
                    {project.type}
                  </Badge>

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
        </div>
      </div>

      {/* Pointer position CSS var for neon hover */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('pointermove', (e) => {
              const target = e.target.closest('[data-neon]') || e.target.closest('a.group');
              if (!target) return;
              const rect = target.getBoundingClientRect();
              const x = e.clientX - rect.left; const y = e.clientY - rect.top;
              target.style.setProperty('--x', x + 'px');
              target.style.setProperty('--y', y + 'px');
            }, { passive: true });
          `,
        }}
      />
    </section>
  );
};

export default ProjectsSection;


import { Github, Linkedin, Mail, MapPin, Phone, Globe, ExternalLink, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Teep Software",
      location: "Edmonton, AB",
      period: "Jun 2024 to present",
      description: "Engineered a scalable, multi-tenant SaaS platform for gym management, leveraging Next.js, TypeScript, tRPC, and PostgreSQL to deliver a robust solution for diverse gym operators, showcasing both technical expertise and product vision.",
      achievements: [
        "Streamlined user experience with key features such as membership management, billing automation, and event scheduling",
        "Integrated Stripe and Stripe Connect to facilitate secure payment processing and enable seamless tenant payment management",
        "Designed and implemented Redis-backed session management for authentication, enabling fast, scalable user validation with hashed session tokens and expiration handling",
        "Containerized applications with Docker, deployed them on Linode VPS servers, configured Caddy as a reverse proxy with rate limiting, implemented Cloudflare for IP blocking, and integrated PostHog for product analytics"
      ]
    },
    {
      title: "Software Engineer",
      company: "Faculty of Skin",
      location: "Edmonton, AB", 
      period: "Mar 2024 to Jun 2024",
      description: "Developed GCP serverless functions using Node.js and Google BigQuery, improving data management efficiency and ensuring accurate record-keeping.",
      achievements: [
        "Implemented Redis caching layer for PDF document retrieval, reducing average load time from 2s to 200ms and improving application performance while handling PDF blobs",
        "Architected CI/CD pipeline using Google Cloud Run, automating deployments that reduced release time from 2 hours to 15 minutes and eliminated manual deployment errors"
      ]
    },
    {
      title: "Course Instructor", 
      company: "Udemy Inc.",
      location: "Remote",
      period: "May 2020 to Jun 2020",
      description: "Created and taught two online programming courses reaching over 20,000 students.",
      achievements: [
        'Created and taught "The Complete Python 3 Course for Beginners" and "Building AI Chatbots with IBM Watson"',
        'Maintained high course ratings, with "The Complete Python 3 Course for Beginners" achieving a consistent 4.5/5 star rating for its clarity and practical projects'
      ]
    }
  ];

  const projects = [
    {
      title: "BiteExpress",
      period: "Aug 2023",
      description: "Developed a food delivery application using TypeScript React, Django, and Node.js.",
      achievements: [
        "Integrated Stripe API for secure payment processing and managed backend operations with Django",
        "Deployed the application on AWS EC2 with NGINX, achieving 95% uptime"
      ]
    },
    {
      title: "HackED 2025 Winner - ArcPlus: NFC Transit Payment System",
      period: "2025",
      description: "Developed a digital version of Edmonton's Arc Card for modernized transit payments that enables contactless payments via NFC cards and Apple/Google Wallet passes.",
      achievements: [
        "Integrated Stripe for seamless balance reloading and Clerk for secure authentication",
        "Built with Next.js, tRPC, Docker, and PostgreSQL for the web app; Raspberry Pi and PN532 NFC module for hardware integration"
      ]
    },
    {
      title: "HackED 2024 Winner",
      period: "2024", 
      description: "Won the Department of Chemical and Materials Engineering award for developing ChemQuest, a simulation tool enhancing comprehension of chemical engineering concepts."
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "MATLAB", "Java", "Golang", "C++", "C#"],
    "Tools & Frameworks": ["React", "Next.js", "tRPC", "Node.js", "Flask", "Django", "Express", "CI/CD (Cloud Run, GitHub Actions)", "Firebase", "Git", "Linux", "ASP.NET Core", "Playwright"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
            CC
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Chikanma Chika-Onuegbu</h1>
          <p className="text-xl text-gray-300 mb-6">Lead Software Engineer</p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            I'm a software engineer and content creator passionate about building modern web applications, 
            UI/UX and AI solutions while sharing my knowledge through tutorials and project walkthroughs.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Edmonton, AB</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:chikanmaonuegbu@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                chikanmaonuegbu@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>(587) 501-6656</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <a href="https://www.teepsoftware.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                www.teepsoftware.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-white hover:bg-gray-800">
              <Github className="w-4 h-4 mr-2" />
              Chikanma681
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-white hover:bg-gray-800">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                      <p className="text-lg text-gray-300">{exp.company} - {exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                    <span className="text-gray-400 text-sm">{project.period}</span>
                  </div>
                  {project.title.includes("Winner") && (
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Hackathon Winner</span>
                    </div>
                  )}
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.achievements && (
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm leading-relaxed">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200 hover:bg-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-400">University of Alberta</h3>
              <p className="text-lg text-gray-300">BSc in Engineering</p>
              <p className="text-gray-400 mt-2">• Received the Faculty of Engineering Gold Scholarship for academic excellence</p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400">
          <p>Last updated in June 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

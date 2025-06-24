import { Github, Linkedin, Mail, MapPin, Phone, Globe, Users, MessageCircle, Video, Youtube, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const whatIDo = [
    "Software Engineer at Teep Software",
    "Course Instructor with 20,000+ students on Udemy", 
    "Building scalable SaaS platforms and AI solutions",
    "Content creator sharing programming knowledge"
  ];

  const projects = [
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

  const services = [
    {
      icon: "👥",
      title: "hire my team",
      description: "with experience building production ready apps, my team and I can build your next project."
    },
    {
      icon: "💬",
      title: "book a consultation", 
      description: "need advice on your product? book a consultation to get clarity on your next steps."
    },
    {
      icon: "📹",
      title: "want to sponsor a youtube video?",
      description: "my channel has amassed over 20k students & covers a wide range of web dev, ui/ux, & ai topics."
    }
  ];

  const companies = [
    "Teep Software",
    "Faculty of Skin", 
    "Udemy Inc.",
    "University of Alberta",
    "HackED Winner"
  ];

  const socialLinks = [
    { icon: Youtube, link: "https://youtube.com/@chikanma", label: "YouTube" },
    { icon: Mail, link: "mailto:chikanmaonuegbu@gmail.com", label: "Email" },
    { icon: Twitter, link: "https://twitter.com/chikanma", label: "Twitter" },
    { icon: Github, link: "https://github.com/chikanma", label: "GitHub" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-16">
          {/* Profile Image */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
            CC
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Chikanma Chika-Onuegbu</h1>
                <p className="text-gray-400 text-base mb-1">Software Engineer @ Teep Software</p>
                <p className="text-gray-500 text-sm">Building scalable SaaS platforms and AI solutions</p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-12 max-w-3xl">
              I'm a software engineer and content creator passionate about building modern web applications, 
              UI/UX design, and AI solutions. Currently leading development at Teep Software, where we're 
              revolutionizing gym management through innovative SaaS solutions. I also share my knowledge 
              through educational content, helping over 20,000+ students learn programming and web development.
            </p>
          </div>
        </div>

        {/* Projects Section */}
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

        {/* Services Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-white font-semibold text-xl">Services</h2>
            <span className="text-2xl">🛠️</span>
          </div>
          
          <div className="grid gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/20 border border-gray-800/50 rounded-xl p-8 hover:bg-gray-900/30 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-lg capitalize">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div className="text-center">
          <h2 className="text-white font-semibold mb-12 text-xl">Experience & Recognition</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

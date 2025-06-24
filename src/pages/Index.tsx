
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
      description: "Building scalable SaaS platforms and AI solutions",
      link: "https://teepsoftware.com",
      type: "Company"
    },
    {
      name: "BitPayress",
      description: "Food delivery application using TypeScript React, Django, and Node.js",
      link: "#",
      type: "Project"
    },
    {
      name: "BlueScreen",
      description: "Digital version of Edmonton's Arc Card for transit payments",
      link: "#",
      type: "Project"
    },
    {
      name: "YouTube Channel",
      description: "Programming tutorials and project walkthroughs",
      link: "https://youtube.com/@chikanma",
      type: "Content"
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
        <div className="flex items-start gap-6 mb-12">
          {/* Profile Image */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
            CC
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-xl font-semibold mb-1">Chikanma Chika-Onuegbu</h1>
                <p className="text-gray-400 text-sm">Software Engineer @ Teep Software</p>
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
            
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-2xl">
              I'm a software engineer and content creator passionate about building modern web applications, 
              UI/UX and AI solutions while sharing my knowledge through tutorials and project walkthroughs.
            </p>
            
            {/* What I do */}
            <div className="mb-12">
              <h2 className="text-white font-medium mb-4">What I do:</h2>
              <ul className="space-y-2">
                {whatIDo.map((item, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-gray-500 mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-white font-medium">featured projects</h2>
            <span className="text-lg">🚀</span>
          </div>
          
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-medium text-sm">{project.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors ml-4"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-white font-medium">services</h2>
            <span className="text-lg">🛠️</span>
          </div>
          
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/50 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-xl">{service.icon}</span>
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
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
          <h2 className="text-white font-medium mb-8">Worked with Companies like</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 text-sm font-medium">
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

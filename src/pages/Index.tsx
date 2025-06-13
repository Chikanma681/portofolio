
import { Github, Linkedin, Mail, MapPin, Phone, Globe, Users, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const whatIDo = [
    "Lead Software Engineer at Teep Software",
    "Course Instructor with 20,000+ students on Udemy", 
    "Building scalable SaaS platforms and AI solutions",
    "Content creator sharing programming knowledge"
  ];

  const services = [
    {
      icon: Users,
      title: "hire my team",
      description: "with experience building production ready apps, my team and I can build your next project."
    },
    {
      icon: MessageCircle,
      title: "book a consultation", 
      description: "need advice on your product? book a consultation to get clarity on your next steps."
    },
    {
      icon: Video,
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

  const skills = ["React", "Next.js", "TypeScript", "Python", "Node.js", "tRPC", "PostgreSQL", "Docker", "AWS", "Stripe"];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          {/* Profile Image */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
            CC
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Chikanma Chika-Onuegbu</h1>
                <p className="text-gray-400">Software Engineer @ Teep Software</p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-4 md:mt-0">
                <Button variant="ghost" size="sm" className="p-2 h-auto text-gray-400 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
              I'm a software engineer and content creator passionate about building modern web applications, 
              UI/UX and AI solutions while sharing my knowledge through tutorials and project walkthroughs.
            </p>
            
            {/* What I do */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold mb-4">What I do:</h2>
              <ul className="space-y-2">
                {whatIDo.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-semibold">services</h2>
            <span className="text-2xl">🛠️</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <service.icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4">Technologies & Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-center mb-8">Worked with Companies like</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Edmonton, AB</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:chikanmaonuegbu@gmail.com" className="hover:text-white transition-colors">
                chikanmaonuegbu@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a href="https://www.teepsoftware.com" className="hover:text-white transition-colors">
                www.teepsoftware.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

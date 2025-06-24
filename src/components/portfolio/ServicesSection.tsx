import { Users, MessageSquare, Youtube } from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Users,
    title: "hire my team",
    description: "with experience building production ready apps, my team and I can build your next project."
  },
  {
    icon: MessageSquare,
    title: "book a consultation", 
    description: "need advice on your product? book a consultation to get clarity on your next steps."
  },
  {
    icon: Youtube,
    title: "Sponsor a Youtube video",
    description: "My channel covers a wide range of web dev, ui/ux, & ai topics and is growing quickly."
  }
];

const ServicesSection = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-12">
        <h2 className="text-white font-semibold text-xl">Services</h2>
        <span className="text-2xl">🛠️</span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a 
            key={index} 
            href="mailto:chikanmaonuegbu@gmail.com"
            className="group relative block rounded-xl p-8 overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg capitalize group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300/90 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

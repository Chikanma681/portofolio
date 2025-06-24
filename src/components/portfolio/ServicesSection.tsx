
interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
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

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;

import ProfileHeader from "@/components/portfolio/ProfileHeader";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
      <div className="relative container mx-auto max-w-5xl px-6 py-16">
        <ProfileHeader />
        <div className="mt-16">
          <ProjectsSection />
          <ServicesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

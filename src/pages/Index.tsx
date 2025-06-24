
import ProfileHeader from "@/components/portfolio/ProfileHeader";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <ProfileHeader />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Index;

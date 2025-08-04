import TerminalPortfolio from "@/components/portfolio/TerminalPortfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
      <div className="relative container mx-auto px-6 py-16">
        <TerminalPortfolio />
      </div>
    </div>
  );
};

export default Index;
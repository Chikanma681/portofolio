
const companies: string[] = [
  "Teep Software",
  "Faculty of Skin", 
  "Udemy Inc.",
  "University of Alberta",
  "HackED Winner"
];

const ExperienceSection = () => {
  return (
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
  );
};

export default ExperienceSection;

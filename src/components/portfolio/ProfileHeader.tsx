
import { Youtube, Mail, Twitter, Github } from "lucide-react";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Youtube, link: "https://youtube.com/@chikanma", label: "YouTube" },
  { icon: Mail, link: "mailto:chikanmaonuegbu@gmail.com", label: "Email" },
  { icon: Twitter, link: "https://twitter.com/chikanma", label: "Twitter" },
  { icon: Github, link: "https://github.com/chikanma", label: "GitHub" }
];

const ProfileHeader = () => {
  return (
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
  );
};

export default ProfileHeader;

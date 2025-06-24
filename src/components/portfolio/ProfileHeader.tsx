import { Youtube, Mail, Twitter, Github, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Youtube, link: "https://youtube.com/@chikanma5021", label: "YouTube" },
  { icon: Mail, link: "mailto:chikanmaonuegbu@gmail.com", label: "Email" },
  { icon: Twitter, link: "https://twitter.com/chikanma681", label: "Twitter" },
  { icon: Github, link: "https://github.com/chikanma681", label: "GitHub" }
];

const ProfileHeader = () => {
  return (
    <div className="mb-20">
      <div className="group relative block rounded-xl p-8 overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center text-center">
          <div className="mb-6">
            <Avatar className="w-24 h-24 border-4 border-white/10 group-hover:border-white/20 transition-all duration-300">
              <AvatarImage src="https://github.com/chikanma681.png" alt="Chikanma" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="text-white font-semibold text-2xl group-hover:text-blue-400 transition-colors duration-300">
              Chikanma Chika-Onuegbu
            </h3>
            <p className="text-gray-300/90 leading-relaxed text-sm">
              Software Engineer passionate about building innovative solutions. Currently focused on full-stack development,
              machine learning, and teaching programming through online courses.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href="https://github.com/chikanma681"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-300 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white/90 transition-colors duration-300" />
              </a>
              <a
                href="https://twitter.com/chikanma681"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-300 flex items-center gap-2"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white/90 transition-colors duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@chikanma5021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-300 flex items-center gap-2"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white/90 transition-colors duration-300" />
              </a>
              <a
                href="mailto:chikanmaonuegbu@gmail.com"
                className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white/90 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

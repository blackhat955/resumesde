import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

type Profile = {
  network: string;
  url: string;
};

type SocialLinksProps = {
  profiles: Profile[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ profiles }) => {
  const getIcon = (network: string) => {
    switch (network.toLowerCase()) {
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'github':
        return <Github size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {profiles.map((profile, index) => (
        <a
          key={index}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 transform"
          aria-label={`${profile.network} profile`}
        >
          {getIcon(profile.network)}
          <span>{profile.network}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
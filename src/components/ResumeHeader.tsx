import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ResumeHeader = () => {
  const { basics } = useResumeData();

  if (!basics) return null;

  return (
    <header className="mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 hover:scale-105 transform origin-left">
            {basics.name}
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 text-blue-100">{basics.title}</h2>
          <p className="text-blue-100 mb-6 max-w-2xl">{basics.summary}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              {basics.email && (
                <div className="flex items-center">
                  <Mail className="mr-2 text-blue-200" />
                  <a 
                    href={`mailto:${basics.email}`}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {basics.email}
                  </a>
                </div>
              )}
              
              {basics.phone && (
                <div className="flex items-center">
                  <Phone className="mr-2 text-blue-200" />
                  <a 
                    href={`tel:${basics.phone}`}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {basics.phone}
                  </a>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              {basics.location && (
                <div className="flex items-center">
                  <MapPin className="mr-2 text-blue-200" />
                  <span className="text-blue-100">{basics.location}</span>
                </div>
              )}
              
              {basics.website && (
                <div className="flex items-center">
                  <Globe className="mr-2 text-blue-200" />
                  <a 
                    href={basics.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {basics.website.replace(/(^\w+:|^)\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <SocialLinks profiles={basics.profiles} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
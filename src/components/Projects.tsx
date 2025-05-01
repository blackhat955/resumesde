import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const { projects } = useResumeData();

  if (!projects || projects.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-purple-600"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              
              {project.url && (
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  aria-label={`View ${project.name} project`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            
            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="ml-2 text-sm">{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
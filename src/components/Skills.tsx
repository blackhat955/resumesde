import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const { skills } = useResumeData();

  if (!skills || skills.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {skillGroup.name}
              </h3>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                {skillGroup.level}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.keywords.map((keyword, idx) => (
                <span 
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
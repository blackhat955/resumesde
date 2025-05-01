import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import SectionTitle from './SectionTitle';

const Languages = () => {
  const { languages } = useResumeData();

  if (!languages || languages.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionTitle>Languages</SectionTitle>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center space-x-3"
          >
            <span className="font-medium text-gray-900 dark:text-white">{lang.language}</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
              {lang.fluency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
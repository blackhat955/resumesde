import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import SectionTitle from './SectionTitle';

const Interests = () => {
  const { interests } = useResumeData();

  if (!interests || interests.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionTitle>Interests</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {interest.name}
            </h3>
            
            {interest.keywords && interest.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {interest.keywords.map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
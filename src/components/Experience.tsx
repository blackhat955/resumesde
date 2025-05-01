import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import SectionTitle from './SectionTitle';
import { formatDate } from '../utils/dateUtils';

const Experience = () => {
  const { work } = useResumeData();

  if (!work || work.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-6">
        {work.map((job, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-blue-600"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {job.position}
              </h3>
              <span className="mt-1 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                {formatDate(job.startDate)} — {job.endDate ? formatDate(job.endDate) : 'Present'}
              </span>
            </div>
            
            <div className="mb-4">
              <a 
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                {job.company}
              </a>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">{job.summary}</p>
            
            {job.highlights && job.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="ml-2">{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
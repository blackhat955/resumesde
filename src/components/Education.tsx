import React from 'react';
import { useResumeData } from '../hooks/useResumeData';
import SectionTitle from './SectionTitle';
import { formatDate } from '../utils/dateUtils';

const Education = () => {
  const { education } = useResumeData();

  if (!education || education.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-green-600"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {edu.studyType} in {edu.area}
              </h3>
              <span className="mt-1 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
              </span>
            </div>
            
            <div className="mb-4">
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {edu.institution}
              </span>
              {edu.gpa && (
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  GPA: {edu.gpa}
                </span>
              )}
            </div>
            
            {edu.courses && edu.courses.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
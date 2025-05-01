import React from 'react';
import { useResumeData } from '../hooks/useResumeData';

const ResumeFooter = () => {
  const { basics } = useResumeData();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>© {year} {basics?.name} | Resume</p>
        <p className="text-sm mt-1">
          This resume is built with React and Tailwind CSS. Content is dynamically loaded from a JSON file.
        </p>
      </div>
    </footer>
  );
};

export default ResumeFooter;
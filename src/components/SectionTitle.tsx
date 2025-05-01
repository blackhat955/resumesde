import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2 inline-block">
      {children}
    </h2>
  );
};

export default SectionTitle;
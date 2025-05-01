import React from 'react';
import { Printer } from 'lucide-react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed top-16 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-200 z-10 transition-all duration-300 hover:scale-110 print:hidden"
      aria-label="Print resume"
    >
      <Printer size={20} />
    </button>
  );
};

export default PrintButton;
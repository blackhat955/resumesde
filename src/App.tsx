import React from 'react';
import ResumeHeader from './components/ResumeHeader';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Interests from './components/Interests';
import ResumeFooter from './components/ResumeFooter';
import ThemeToggle from './components/ThemeToggle';
import PrintButton from './components/PrintButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <PrintButton />
      
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <ResumeHeader />
        
        <main className="mt-8">
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Languages />
            <Interests />
          </div>
        </main>
        
        <ResumeFooter />
      </div>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import resumeData from '../data/resume.json';

export type ResumeData = typeof resumeData;

export const useResumeData = () => {
  const [data, setData] = useState<ResumeData>(resumeData);

  // This hook could potentially fetch data from an API instead of using the static import
  useEffect(() => {
    // You could fetch from an API here if needed
    // For now we just use the static data
    setData(resumeData);
  }, []);

  return data;
};
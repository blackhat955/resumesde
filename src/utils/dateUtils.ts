export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  // Handle 'Present' or similar text
  if (typeof dateString === 'string' && ['present', 'current', 'now'].includes(dateString.toLowerCase())) {
    return 'Present';
  }

  // Parse the date string (expecting format like "YYYY-MM" or "YYYY-MM-DD")
  const date = new Date(dateString);
  
  // Check if date is valid
  if (isNaN(date.getTime())) return dateString;
  
  // Format the date
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(date);
};
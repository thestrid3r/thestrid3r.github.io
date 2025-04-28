export function calculateTotalExperience(): string {
  const startDate = new Date('2016-05-01'); // First job start date
  const currentDate = new Date();
  
  const diffInMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                      (currentDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;
  
  if (months === 0) {
    return `${years} years`;
  } else {
    return `${years} years and ${months} months`;
  }
}

// Export the current experience as a constant
export const currentExperience = calculateTotalExperience(); 
export const getYears = (
  minYear: number = new Date().getFullYear(),
  maxYear: number = new Date().getFullYear() + 100
): number[] => {
  const years = [];
  for (let year = minYear; year <= maxYear; year++) {
    years.push(year);
  }
  return years;
};

export const getDays = (
  month: number = new Date().getMonth(),
  year: number = new Date().getFullYear()
): number[] => {
  const daysInThisMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let day = 1; day <= daysInThisMonth; day++) {
    days.push(day);
  }
  return days;
};

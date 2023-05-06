export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("pl-PL", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(number);
};

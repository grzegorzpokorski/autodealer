export const arrayFromRange = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, idx) => idx + start);

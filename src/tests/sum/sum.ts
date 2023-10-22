export const sum = (a: number, b: number) => {
  if (a && b) {
    return a + b;
  }
  return a || b;
};

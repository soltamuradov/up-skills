import { sum } from './sum';

describe('sum', () => {
  test('positive numbers', () => {
    expect(sum(5, 5)).toBe(10);
  });

  test('negative numbers', () => {
    expect(sum(-5, -5)).toBe(-10);
  });

  test('zero and positive number', () => {
    expect(sum(0, 5)).toBe(5);
  });

  test('zero and negative number', () => {
    expect(sum(0, -5)).toBe(-5);
  });

  test('zero and zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('positive and negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  test('large numbers', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});

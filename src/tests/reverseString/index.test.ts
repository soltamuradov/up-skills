import { reverseString } from ".";

describe('reverseString', () => {
  test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
  })

  test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
  })

  test('string reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleH')
  })

  test('String reverses with mixed case', () => {
    expect(reverseString('HeLLo')).toEqual('oLLeH');
  });

  test('String reverses with special characters', () => {
    expect(reverseString('hello!')).toEqual('!olleh');
  });
})
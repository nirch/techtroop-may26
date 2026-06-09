const { capitalize, reverseString, isPalindrome } = require('./string');

describe('capitalize', () => {
  test('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('hELLO')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('Hello');
  });

  test('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('returns input if not a string', () => {
    expect(capitalize(123)).toBe(123);
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  });

  test('single character string', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('string that starts with a number or special character', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('!hello')).toBe('!hello');
  });

  test('string with only whitespace', () => {
    expect(capitalize('   ')).toBe('   ');
  });

  test('string starting with whitespace', () => {
    expect(capitalize(' hello')).toBe(' hello');
  });

  test('non-string types return as-is', () => {
    expect(capitalize([])).toEqual([]);
    expect(capitalize({})).toEqual({});
    expect(capitalize(true)).toBe(true);
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Racecar')).toBe('racecaR');
    expect(reverseString('')).toBe('');
  });

  test('throws error if input is not a string', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string');
    expect(() => reverseString(null)).toThrow('Input must be a string');
    expect(() => reverseString(undefined)).toThrow('Input must be a string');
  });

  test('single character string', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('  ')).toBe('  ');
  });

  test('string with special characters and numbers', () => {
    expect(reverseString('abc123')).toBe('321cba');
    expect(reverseString('!@#')).toBe('#@!');
  });

  test('throws error for other non-string types', () => {
    expect(() => reverseString([])).toThrow('Input must be a string');
    expect(() => reverseString({})).toThrow('Input must be a string');
    expect(() => reverseString(true)).toThrow('Input must be a string');
  });

  test('string with unicode characters', () => {
    expect(reverseString('café')).toBe('éfac');
  });
});

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('returns false if input is not a string', () => {
    expect(isPalindrome(12321)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });

  test('single character is always a palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('Z')).toBe(true);
  });

  test('string with only spaces or punctuation', () => {
    expect(isPalindrome('   ')).toBe(true);
    expect(isPalindrome('!!!')).toBe(true);
  });

  test('palindrome with numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  test('mixed alphanumeric palindrome', () => {
    expect(isPalindrome('A1B2B1A')).toBe(true);
    expect(isPalindrome('race1car')).toBe(false);
  });

  test('returns false for other non-string types', () => {
    expect(isPalindrome([])).toBe(false);
    expect(isPalindrome({})).toBe(false);
    expect(isPalindrome(true)).toBe(false);
  });
});